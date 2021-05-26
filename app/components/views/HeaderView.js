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
            status: "NEW"
        }
        this.model.save(status, {
            url: url,
            patch: true,
            success(){
                console.log(id)
                // alert("adress was successfuly updated")
                // location.reload()
            },
            error(err){
                alert(err)
            }
        }) 
    },
    initialize(){
        this.render()
        console.log(this.model)
    } 
})


export default HeaderView