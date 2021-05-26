import { View, Collection } from "backbone.marionette"
import _ from "underscore"
import AdressCollectionView from "./AdressCollectionView"
import template from "../templates/adressesWrapper.jst"



const AppView = View.extend({
    tagName: "section",
    className: "results",
    template,
    events: {
        "keyup #searchbarInput": "storeSearchValue",
        "click #search-button" : "filterData"
    },
    filterData(){
        const searchTerm = $("#searchbarInput").val()
        localStorage.setItem("search", searchTerm)
        location.reload()
    },
    initialize(){
            this.adressCollectionView = new AdressCollectionView({
                collection: this.getOption("collection")
            })
            this.listenTo(this.collection, "change", this.render)
    },
    regions: {
        adressWrap: "#adressWrap"
    },
    onRender(){
        this.showChildView("adressWrap", this.adressCollectionView)
    }

})

export default AppView