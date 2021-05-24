import Backbone from "backbone"
import headerView from "./views/HeaderView"
import testView from "./views/TestView"
import form from "./views/FormView"

const Router = Backbone.Router.extend({
    routes: {
        "" : "function",
        "adress": "test"
    },
    function: function(){
        console.log("router works")
        $('#app').append(headerView.$el)
        $('#app').append(testView.$el)

    },
    test: function(){
        console.log("this should be adress")
        form.render()
        $('#app').append(headerView.$el)
        $('#app').append(form.$el)

    }
})
export default Router