import _, { object } from "underscore"
import Marionette from "backbone.marionette"
import Backbone from "backbone"
import template from "../templates/testview.jst"

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
const testURl = 'https://larataskmanager.herokuapp.com/tasks'

const Collection =  Backbone.Collection.extend({
    url: 'https://introduction-api.do.saleschamp.io/introduction-api/items/address',
    model: Model,
    // modelId: function(x){
    //     x+1
    // },
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
const test = new Test()
test.fetch()

// const b = setTimeout(function(){
//     const a = {data: [test]}
//     return Object.values(a.data[0].attributes)
// },1000)

const collection = new Collection()
collection.fetch({
    
})
const i = Object.values(test.attributes)
console.log(i)
// const Collection = Backbone.Collection.extend({
//     model: TestModel
// })
// const Collection1 = Backbone.Collection.extend({
//     url: 'https://introduction-api.do.saleschamp.io/introduction-api/items/address',
// })


// const collection = new Collection([
//     new TestModel({name: "karel"}),
//     new TestModel({name: "david"}),
//     new TestModel({name: "Daniel"})
// ])
// const collection1 = new Collection1
//  collection1.fetch()

// 

const TestView = Marionette.View.extend({
    tagName: "div",
    className: "dataList",
    model: collection,
    template: _.template(`
        <button> ahoj </button>
        <% _.each(data, function(item) {%>
            <% console.log(neco) %>
            <div> <%- item%>  </div>
        <% }) %>
        `),
    
    // serializeData(){
    //     neco: [ "1","2","3"]
    //     data: this.serializeModel()
    // },
    // serializeModel(){
    //  const data = _.clone(this.model)
    //  return data
     
    // },
    templateContext(){
        return {
            neco: [
                "1", "2", "3"
            ],
            data: this.model
        }
    },
    initialize: function (){
        this.model.fetch(
            {success: function(res){
                _.each(res.toJSON(), function(item){
                    // console.log(item)
                })
            },
            error: function (err){
                console.log(err)
            }}
        )
        console.log(_.each(collection, function(item){
            console.log(item)
        }))    
        console.log(this.model.models)
        
    },
    
})

const testView = new TestView({

})
export default testView