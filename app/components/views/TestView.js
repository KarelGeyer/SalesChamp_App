import _, { object } from "underscore"
import Marionette from "backbone.marionette"
import Backbone from "backbone"
import template from "../templates/testview.jst"

const testURl = 'https://larataskmanager.herokuapp.com/tasks'

const Model = Backbone.Model.extend({
    defaults: {
        
        id: "",
        status: "",
        postalcode: "",
        street: "",
        number: "",
        name: "",
        email: "",
        city: ""
    }
})
const model = new Model()

const Collection =  Backbone.Collection.extend({
    url: 'https://introduction-api.do.saleschamp.io/introduction-api/items/address',
    model: Model,
    parse: function(data){
        return data.data
    }
})
const Test = Backbone.Model.extend({
    url: 'https://introduction-api.do.saleschamp.io/introduction-api/items/address',
    parse: function(data){
        return data.data
    }
})

const collection = new Collection()

const TestView = Marionette.View.extend({
    tagName: "section",
    className: "resultsSection",
    model: collection,
    self: this,
    template,
    events: {
        "click .accordion-body": "storeItem"
    },
    storeItem: function (e) {
        /**Store item */
        const value = e.target.parentElement.parentElement.innerText
        localStorage.setItem("adress", e.target.parentElement.parentElement.innerText)
        /**Change heading */
        $('#mainHeading')[0].innerText = value
    },
    
    templateContext(){
        return {
            neco: [
                "1", "2", "3"
            ],
            data: this.model.models
        }
    },
    initialize: function (){

        this.model.fetch(
            {success: function(res){  
            },
            error: function (err){
                console.log(err)
            }}
        )  
       this.listenTo(this.model, "sync", this.render)
       this.render()   
    },
    
})

const testView = new TestView({
    
})

export default testView