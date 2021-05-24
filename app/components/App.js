import Marionette from 'backbone.marionette';
import mysecondView from "./models/mainModel"
import HeaderView from "./views/HeaderView"
import testView from "./views/TestView"
import form from "./views/FormView"
import $ from "jquery"
import _ from 'underscore';


export default Marionette.Application.extend({
  region: '#app',

  onStart() {
    /**VARIABLES */
    const header = new HeaderView()

    /**RENDERS */
    header.render()
    mysecondView.render()
    form.render()
    testView.render()
    
    /**FUNCTION */
    $('#app').append(header.$el)
    $('#app').append(testView.$el)
  }
});

