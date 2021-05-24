import Marionette from 'backbone.marionette';
import mysecondView from "./models/mainModel"
import HeaderView from "./views/HeaderView"
import testView from "./views/TestView"
import form from "./views/FormView"
import $ from "jquery"
import _ from 'underscore';
import Router from "./Router"
import Backbone from 'backbone';


export default Marionette.Application.extend({
  region: '#app',

  onStart() {
    /**VARIABLES */
    // const header = new HeaderView()
    new Router()

    /**RENDERS */
    // header.render()
 
    /**FUNCTION */
    // $('#app').append(header.$el)
    // $('#app').append(testView.$el)
    Backbone.history.start()
  }
});

