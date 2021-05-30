import _ from "underscore"
import {View} from "backbone.marionette"
import template from "../templates/headerTemplate.jst"
import Router from "../Router"


const HeaderView = View.extend({
    tagName: "div",
    className: "header",
    template: template,
    ui: {
        ovk: ".ovk",
        nt: ".nt",
        header: "h1"
    },
    events: {
        "click @ui.ovk": "route",
        "click @ui.nt": "updateItem",
    },
    triggers: {
        "click @ui.ovk": "onClick"
    },
    modelEvents: {
        change: "onModelChange"
    },
    onModelChange(){
        const attrs = this.model.attributes
        const status = attrs.status
        const newHeading = `${attrs.city}, ${attrs.street} ${attrs.number}`
        const ovk = this.getUI("ovk")
        const nt = this.getUI("nt")
        const heading = this.getUI("header")

        attrs.city !== "" ? heading[0].innerText = newHeading : null

        if (status === "OVK"){ 
            ovk.removeClass("ovk active").addClass("disabled")
            nt.removeClass("nt active").addClass("disabled")
        } else if (status === "NT"){
            ovk.addClass("ovk disabled").addClass("active")
            nt.removeClass("nt active").addClass("disabled")
        } else if (status === ""){
            null
        } else {
            ovk.addClass("ovk disabled").addClass("active")
            nt.addClass("nt disabled").addClass("active")
        }
    },
    route(){
        const dynamicRoute = this.getUI("header")[0].innerText
        const route = "#/" + dynamicRoute
        const router = new Router()
        router.navigate(route, {trigger: true, replace: true})
    },
    updateItem(){
        const id = this.model.attributes.id
        const url = `https://introduction-api.do.saleschamp.io/introduction-api/items/address/${id}`
        const status = {
            id: id, 
            status: "NT"
        }
        const currentModel = this.collection.get(id)
        this.model.save(status, {
            url: url,
            patch: true,
            success(res){
                currentModel.set(status)               
            },
            error(err){
                alert(err)
            }
        }) 
    },
})


export default HeaderView