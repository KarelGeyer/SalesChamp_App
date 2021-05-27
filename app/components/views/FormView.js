import _ from "underscore"
import {View} from "backbone.marionette"
import {Model} from "backbone"
import template from "../templates/formTemplate.jst"
import Router from "../Router"

const FormView = View.extend({
    tagName: "div", 
    id: "form",
    template,
    ui: {
        name: "#name",
        email: "#e-mail",
        back: ".btn-secondary",
        save: ".btn-primary"
    },
    events: {
        "click @ui.back": "goBack",
        "click @ui.save": "updateItem"
    },
    updateItem(){
        const router = new Router()
        const id = localStorage.getItem("id")
        const url = `https://introduction-api.do.saleschamp.io/introduction-api/items/address/${id}`
        const data = {
            name: $("#name").val(),
            email: $("#e-mail").val(),
            status: "OVK"
        }
        // ** Doesnt work, for some reason Backbone save method doesnt accept PATCH method */
        this.model.save(data,{
            patch: true,
            url: url,
            success: function(response){
                console.log(response)
            },
            error: function(err){
                console.log(err)
                alert("something went wrong! Please try again later")
            } 
        })
        // data.name !== "" && data.email !== "" ?
        // $.ajax({
        //     url: url,
        //     data: data,
        //     type: "PATCH",
        //     success(res){
        //         console.log(res)
        //         console.log(url)
        //         $("#name").val("")
        //         $("#e-mail").val("")
        //         router.navigate("/", {trigger: true})
        //         setTimeout(function(){
        //             location.reload()      
        //         },300) 
        //     },
        //     error(err){
        //         $("#name").val("")
        //         $("#e-mail").val("")
        //         console.log(err)
        //     }
        // })
        // :
        // alert("you must fill out the form")
    },
    goBack(){
        const router = new Router()
        router.navigate("/", {trigger: true})
    },   
    initialize(){
    }
})



export default FormView