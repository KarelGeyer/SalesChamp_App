import Marionette from 'backbone.marionette';
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
    street: "",
    city: "",
    number: "",
    search: ""
  }
})

const data = new MainCollection()
const model = new MainModel()

export default Marionette.Application.extend({
  region: '#app',

  onStart() {
  
      data.fetch({
        success(res){
          const appView = new AppView({
            collection: data,
            model: model
          })
          appView.render()
          $('#app').append(appView.$el)
        },
        error(){
          console.log(error)
        }
      })
    
     
  Backbone.history.start()   
  },
});

