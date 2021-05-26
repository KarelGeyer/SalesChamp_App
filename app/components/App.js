import Marionette from 'backbone.marionette';
import HeaderView from "./views/HeaderView"
import FormView from "./views/FormView"
import $ from "jquery"
import _ from 'underscore';
import Router from "./Router"
import {Collection, Model} from 'backbone';
import AppView from "./views/AppView"

const MainCollection = Collection.extend({
  url: 'https://introduction-api.do.saleschamp.io/introduction-api/items/address',
  parse: function(data){
    return data.data
  }
})

const MainModel =  Model.extend({
  defaults: {
    id: "",
    name: "",
    email: "",
    status: "",
    street: ""
  }
})

const data = new MainCollection()
const model = new MainModel()

export default Marionette.Application.extend({
  region: '#app',

  onStart() {
    const headerView = new HeaderView({
    model: model
    })
    headerView.render()
    $('#app').append(headerView.$el)
      data.fetch({
        success(res){
          console.log(res)
          const appView = new AppView({
            collection: data,
            model: model
          })
          const formView = new FormView({
            model: model
          })

         appView.render()
         formView.render()

         $('#app').append(appView.$el)
         $('#app').append(formView.$el)
         $("#formView").hide()
        },
        error(){
          console.log(error)
        }
      })
    
     
  Backbone.history.start()   
  },
  
  initialize: function(){
    this.router = new Router()
  } 
});

