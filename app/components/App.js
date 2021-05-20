import Marionette from 'backbone.marionette';
import mysecondView from "./models/TestModel"
import HeaderView from "./views/HeaderView"

export default Marionette.Application.extend({
  region: '#app',

  onStart() {
    /**VARIABLES */
    const header = new HeaderView()

    /**RENDERS */
    header.render()
    mysecondView.render()

    /**FUNCTION */
    $('#app').append(header.$el)
    $('#app').append(mysecondView.$el)
  }
});

