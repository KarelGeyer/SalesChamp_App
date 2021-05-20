import _ from "underscore"
import Marionette from "backbone.marionette"
import template from "../templates/testview.jst"


export default Marionette.View.extend({
    tagName: "div",
    className: "test",
    template: template
})


