import _ from "underscore"
import Marionette from "backbone.marionette"
import Backbone from "backbone"
import template from "../templates/formTemplate.jst"
import testView from "../views/TestView"
import Router from "../Router"

const FormModel = Backbone.Model.extend({
    url: 'https://introduction-api.do.saleschamp.io/introduction-api/items/address',
    default: {
        id: "",
        status: "",
        postalcode: "",
        street: "",
        number: "",
        name: "",
        email: "",
        city: ""
    },
    parse: function(data){
        return data.data
    }
})

const formModel = new FormModel()

const FormView = Marionette.View.extend({
    tagName: "div", 
    model: formModel,
    template,
    ui: {
        name: "#name",
        email: "#e-mail",
        back: ".btn-secondary",
        save: ".btn-primary"
    },
    events: {
        "click @ui.back": "goBack",
        "click @ui.save": "patch"
    },
    patch: function(e){
    
        this.model.set("name", $("#name").val())
        this.model.set("e-mail", $("#e-mail").val()) 
        console.log(this.model)
        const filteredUrl = _.each(Object.keys(this.model.attributes), function(item){
            return item
        })
        console.log(filteredUrl)
        // this.model.save(this.model,{
        //     success: function(res){
        //         console.log(res)
        //     },
        //     error: function(err){
        //         console.log(err)
        //     } 
        // })
    },
    goBack: function(){
        const router = new Router()
        router.navigate("/", {trigger: true})
    }, 
    
    initialize: function(){
        console.log()
    }
})



export default FormView