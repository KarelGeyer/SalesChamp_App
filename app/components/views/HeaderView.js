import _ from "underscore"
import {View} from "backbone.marionette"
import template from "../templates/headerTemplate.jst"
import Backbone from "backbone"


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
        } else {
            ovk.addClass("ovk disabled").addClass("active")
            nt.addClass("nt disabled").addClass("active")
        }
    },
    onCollectionChange(){
        console.log("changed")
    },
    route(){
        const id = this.model.attributes.id
        const routeName = this.getUI("header")[0].innerText
        const route = "#/" + routeName

        id === "" ?
        alert("you must first choose the adress to update")
        : Backbone.history.navigate(route, {trigger: true})
    },
    updateItem(){
        const attrs = this.model.attributes
        const id = attrs.id
        const url = `https://introduction-api.do.saleschamp.io/introduction-api/items/address/${id}`
        const status = {
            id: id, 
            status: "NT"
        }
        const name = `${attrs.city}, ${attrs.street}`
        const filteredCollection = this.collection.findWhere({name : name})
        const currentModel = filteredCollection ?  filteredCollection.attributes.data[0] : null

        id === "" ?
        alert("you must first choose the adress to update")
        : this.model.save(status, {
            url: url,
            patch: true,
            success(res){
                currentModel.set(status)
                filteredCollection.set({name: name})
                currentModel.render           
            },
            error(err){
                alert(err)
            }
        }) 
    },
})


export default HeaderView