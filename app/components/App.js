import Marionette from 'backbone.marionette';
import headerView from "./views/HeaderView"
import TestView from "./views/TestView"
import FormView from "./views/FormView"
import $ from "jquery"
import _ from 'underscore';
import Router from "./Router"
import Backbone from 'backbone';
import AppView from "./views/AppView"

const MainCollection = Backbone.Collection.extend({
  url: 'https://introduction-api.do.saleschamp.io/introduction-api/items/address',
  parse: function(data){
    return data.data
  }
})

const data = new MainCollection()

export default Marionette.Application.extend({
  region: '#app',

  onStart() {
    /**TESTING */
    /**VARIABLES */
    // const header = new HeaderView()
    

    /**RENDERS */
    // header.render()
 
    /**FUNCTION */
    // $('#app').append(header.$el)
    // $('#app').append(testView.$el)

    headerView.render()
    $('#app').append(headerView.$el)
      data.fetch({
        success(){
           
         const appView = new AppView({
           collection: data
         })
         const formView = new FormView({
           collection: data
         })

         appView.render()
         formView.render()

         $('#app').append(appView.$el)
         $('#app').append(formView.$el)
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

