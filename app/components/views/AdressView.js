import {View} from "backbone.marionette"
import _ from "underscore"
import $ from "jquery"
import template from "../templates/adresses.jst"


const AddressView = View.extend({
    template,
    events: {
        "click .accordion-body": "headingHandeler"
    },
    headingHandeler(){
        /** Variables */
        const thisModelData = this.options.model.attributes
        const status = thisModelData.status
        const id = thisModelData.id
        const value = `${thisModelData.city}, ${thisModelData.street} ${thisModelData.number}`
        
        /**Store Item in Local Storage*/
        localStorage.setItem("id", id)
        localStorage.setItem("status", status)

       /**Change heading */
       $('#mainHeading')[0].innerText = value
       if (status === "OVK"){ 
            $("#nt").css({"background-color": "#999999","color" : "white" })
            $("#ovk").css({"background-color": "#027489", "color" : "white"})
            $("#ovk").removeClass("ovk")
            $("#nt").removeClass("nt")
        } else if (status === "NT"){
            $("#nt").css({"background-color": "#027489", "color" : "white"})
            $("#ovk").css({"background-color": "#EEE", "color" : "black"})
            $("#ovk").addClass("ovk")
            $("#nt").removeClass("nt")
        } else {
            $("#nt").css({"background-color": "#EEE;", "color" : "black"})
            $("#ovk").css({"background-color": "#EEE;", "color" : "black"})
            $("#ovk").addClass("ovk")
            $("#nt").addClass("nt")
        }
    },
    initialize(){
        this.listenTo(this.model, "change", this.render)
    } 

})

export default AddressView