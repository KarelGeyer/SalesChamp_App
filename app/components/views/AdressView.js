import { Model } from "backbone"
import {View} from "backbone.marionette"
import _ from "underscore"
import template from "../templates/adresses.jst"


const AddressView = View.extend({
    tagName: "div",
    className: "adress-box",
    template,
    ui: {
        item: ".accordion-body"
    },
    triggers: {
        "click @ui.item": "handeler"
    },
    serializeModel() {
    return {
        data: this.model.attributes.data[0].attributes
        }
    },
    initialize(){
        this.listenTo(this.model, "change", this.render, this);
    }
})

export default AddressView