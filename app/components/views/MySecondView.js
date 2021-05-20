import _ from "underscore"
import Marionette from "backbone.marionette"
import template from "../templates/resultsTemplate.jst"

export default Marionette.View.extend({
    tagName: "section",
    className: "resultsSection",
    template: template,
    events: {
        "click .results": "changeHeader",
        "click #search-button": "storeValue"
        
    },
    changeHeader: function(e){
        const text = e.target.innerText
        const headerText = $('#mainHeading')
        let x = 0

 
        // if(x === 0){ 
        // e.currentTarget.children[1].className = "accordion-collapse collapse show"
        // x = 1
        // console.log(x)
        // }
        // else {
        //     x = 0
        //     e.currentTarget.children[1].className = "accordion-collapse collapse"
        //     console.log(x)
        // }
        headerText[0].innerText = text
    },
    storeValue: function(e){
        const searchBar = $('#searchbarInput')
        console.log(searchBar[0].value)
    }
})