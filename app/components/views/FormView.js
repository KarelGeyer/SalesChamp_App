import _ from "underscore"
import Marionette from "backbone.marionette"
import Backbone from "backbone"
import template from "../templates/formTemplate.jst"
import testView from "../views/TestView"

const FormModel = Backbone.Model.extend({
    default: {
        id: "",
        status: "",
        postalcode: "",
        street: "",
        number: "",
        name: "",
        email: "",
        city: ""
    }
})

const formModel = new FormModel()

const Form = Marionette.View.extend({
    tagName: "div", 
    className: "test",
    model: formModel,
    template,
    ui: {
        name: "#name",
        email: "#e-mail",
        back: ".btn-secondary",
        save: ".btn-primary"
    },
    events: {
        "click @ui.back": "goBack",
        "click @ui.save": "patch"
    },
    patch: function(e){
        this.model.set("name", $("#name").val())
        this.model.set("e-mail", $("#e-mail").val()) 
        console.log(this.model.attributes) 
        this.model.put(this.model,{
            success: function(res){
                console.log(res)
            },
            error: function(err){
                console.log(err)
            } 
        })
    },
    goBack: function(){
        this.$el.remove()
        $('#app').append(testView.$el)
    } 
})

const form = new Form()

export default form