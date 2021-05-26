import Backbone from "backbone"
import Marionette from "backbone.marionette"
import $ from "jquery"
import headerView from "./views/HeaderView"
import testView from "./views/TestView"
import form from "./views/FormView"

const Router = Backbone.Router.extend({
    routes: {
        "" : "mainScreen",
        ":id": "formScreen",

    },
    mainScreen(){
        console.log("router works")
        setTimeout(function(){
            $("#formView").hide()       
        },100) 
        $(".results").show()   
    },
    formScreen(id){
        console.log(this)
        $(".results").hide()
        $("#formView").show()   
    },
    
})


export default Router