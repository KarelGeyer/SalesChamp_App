import _ from "underscore"
import {View} from "backbone.marionette"
import template from "../templates/formTemplate.jst"

const FormView = View.extend({
    tagName: "div", 
    id: "form",
    template,
    ui: {
        name: "#name",
        email: "#e-mail",
        back: ".btn-secondary",
        save: ".btn-primary",
    },
    events: {
        "click @ui.back": "goBack",
        "submit form" : "submitForm",
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
        const attrs = this.model.attributes
        const name = this.getUI("name").val()
        const email = this.getUI("email").val()
        const id = this.model.attributes.id
        const url = `https://introduction-api.do.saleschamp.io/introduction-api/items/address/${id}`
        const nameHeader = `${attrs.city}, ${attrs.street}`
        const filteredCollection = this.collection.findWhere({name : nameHeader})
        const currentModel = filteredCollection.attributes.data[0]
        const data = {
            name: name,
            email: email,
            status: "OVK"
        }
        this.model.save(data,{
            patch: true,
            url: url,
            success: function(){
                currentModel.set(data)
                Backbone.history.navigate("/", {trigger: true})
            },
            error: function(){
                alert("something went wrong! Please try again later")
            } 
        })   
    },
    goBack(){
        Backbone.history.navigate("/", {trigger: true})
    },   
})



export default FormView