import _ from "underscore"
import Marionette from "backbone.marionette"
import template from "../templates/headerTemplate.jst"
import form from "../views/FormView"

export default Marionette.View.extend({
    tagName: "header",
    className: "header",
    template: template,
    events: {
        "click #ovk": "hideTemplates"
    },
    hideTemplates : function(){
        $('#app').append(form.$el)
        $('section').remove()
    }
})