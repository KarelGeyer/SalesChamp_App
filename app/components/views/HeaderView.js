import _ from "underscore"
import {View} from "backbone.marionette"
import {Model} from "backbone"
import template from "../templates/headerTemplate.jst"
import Router from "../Router"

const Adress = Model.extend({
    defaults: {
        status: "",
        id: ""
    }
})
const adress = new Adress()


const HeaderView = View.extend({
    tagName: "header",
    className: "header",
    template: template,
    model: adress,
    events: {
        "click .ovk": "route",
        "click .nt": "updateItem"
    },
    route(){
        const dynamicRoute = $('#mainHeading')[0].innerText
        const route = "#/" + dynamicRoute
        const router = new Router()
        router.navigate(route, {trigger: true, replace: true})
    },
    updateItem(){
        const id = localStorage.getItem("id")
        const status = localStorage.getItem("status")
        this.model.set("id", id)
        this.model.set("status", status)
        this.model.save()
        console.log(this.model)
    },
    initialize(){
        this.render()
    } 
})

const headerView = new HeaderView()

export default headerView