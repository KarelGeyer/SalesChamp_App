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
})

export default AddressView