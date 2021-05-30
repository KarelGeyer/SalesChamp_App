import _ from "underscore"
import {View} from "backbone.marionette"
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
        "submit form" : "submitForm",
        "click @ui.name" : "clearName",
        "click @ui.email" : "clearEmail",
    },
    triggers: {
        "click @ui.back": "back",
        "submit form" : "onSubmit",
    },
    modelEvents: {
        change : "onModalChange"
    },
    onModalChange(){        
        const attrs = this.model.attributes
        attrs.name ? 
            this.getUI("name").val(attrs.name)
            : this.getUI("name").val("")
        attrs.email ? 
            this.getUI("email").val(attrs.email) 
            : this.getUI("email").val("")
        
    },
    submitForm(e){
        e.preventDefault()
        const router = new Router()
        const name = this.getUI("name").val()
        const email = this.getUI("email").val()
        const id = this.model.attributes.id
        const currentModel = this.collection.get(id)
        const url = `https://introduction-api.do.saleschamp.io/introduction-api/items/address/${id}`
        const data = {
            name: name,
            email: email,
            status: "OVK"
        }
        
        this.model.save(data,{
            patch: true,
            url: url,
            success: function(response){
                currentModel.set(data)
                router.navigate("/", {trigger: true})
            },
            error: function(err){
                alert("something went wrong! Please try again later")
            } 
        })
        
    },
    clearName(){
        this.getUI("name").val("")
    },
    clearEmail(){
        this.getUI("email").val("")
    },
    goBack(){
        const router = new Router()
        router.navigate("/", {trigger: true})
    },   
    initialize(){
    }
})



export default FormView