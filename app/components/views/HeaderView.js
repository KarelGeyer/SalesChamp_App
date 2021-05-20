import _ from "underscore"
import Marionette from "backbone.marionette"
import template from "../templates/headerTemplate.jst"

export default Marionette.View.extend({
    tagName: "header",
    className: "header",
    template: template,

})