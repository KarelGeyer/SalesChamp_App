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
 
        setTimeout(function(){
            $("#formView").hide()       
        },1000) 
        $("#adressWrap").show()   
    },
    formScreen(id){
  
        $("#adressWrap").hide()
        $("#formView").show()   
    },
    
})


export default Router