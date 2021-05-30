import Backbone from "backbone"
import Marionette from "backbone.marionette"
import $ from "jquery"


const Router = Backbone.Router.extend({
    routes: {
        "" : "mainScreen",
        ":id": "formScreen",

    },
    mainScreen(){  
    },
    formScreen(id){ 
    },
    
})


export default Router