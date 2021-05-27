import { View, Collection } from "backbone.marionette"
import _ from "underscore"
import AdressCollectionView from "./AdressCollectionView"
import HeaderView from "./HeaderView"
import FormView from "./FormView"
import template from "../templates/adressesWrapper.jst"



const AppView = View.extend({
    el: "#app",
    template,
    self: this,
    events: {
        "keyup #searchbarInput": "storeSearchValue",
        // "click #search-button" : "filterData"
        "click #search-button" : "testFce"
    },
    regions: {
        header: "#header",
        adresses: "#adressWrap",
        form: "#formView"
    },
    // filterData(){
    //     const searchTerm = $("#searchbarInput").val()
    //     localStorage.setItem("search", searchTerm)
    //     location.reload()
    // },
    collectionEvents: {
        "change": (collection) => {
            console.log(collection)
            console.log("collection been changed")
        }        
    },
    modelEvents: {
        "change:status": "modelChange"
        
    },
    modelChange() {
        console.log("model changed")

    },
    initialize(){
            // this.adressCollectionView = new AdressCollectionView({
            //     collection: this.getOption("collection"),
            //     model: this.getOption("model")
            // })
            this.headerView = new HeaderView({
                model: this.getOption("model")
            })
            this.formView = new FormView({
                model: this.getOption("model")
            })            
    },
    onRender(){
        this.showChildView("adresses", new AdressCollectionView({
            collection: this.getOption("collection"),
            model: this.model
        }))
        this.showChildView("header", this.headerView)
        this.showChildView("form", this.formView)
    },
    testFce(){
        
        console.log(this.model)
    }
})

export default AppView