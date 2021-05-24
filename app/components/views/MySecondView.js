import _ from "underscore"
import Marionette from "backbone.marionette"
import template from "../templates/resultsTemplate.jst"

export default Marionette.View.extend({
    tagName: "section",
    className: "resultsSection",
    template,

    events: {
        "click .results": "changeHeader",
        "click #search-button": "storeValue",
        "keyup #searchbarInput" : "consolelog"
        
    },
    changeHeader: (e) => {
        const text = e.target.innerText
        const headerText = $('#mainHeading')
        let x = 0
        headerText[0].innerText = text
    },
    storeValue: (e) => {
        /***Filtering data */
    },
    consolelog: (e) => {
        const searchValue = e.target.value
    },
    initialize: function () {
        console.log(this.model)
    },
    
})