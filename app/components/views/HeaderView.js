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
    tagName: "div",
    className: "header",
    template: template,
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
        const url = `https://introduction-api.do.saleschamp.io/introduction-api/items/address/${id}`
        const status = {
            id: id, 
            status: "NT"
        }
        console.log(this)
        this.model.set(status)
        this.model.save(status, {
            url: url,
            patch: true,
            success(res){
                console.log(res)
                alert("adress was successfuly updated")
                
            },
            error(err){
                alert(err)
            }
        }) 
    },
    initialize(){
      
    } 
})


export default HeaderView