import { View, Collection } from "backbone.marionette"
import _ from "underscore"
import AdressCollectionView from "./AdressCollectionView"
import HeaderView from "./HeaderView"
import FormView from "./FormView"
import template from "../templates/adressesWrapper.jst"


const AppView = View.extend({
    el: "#app",
    template,
    ui: {
        searchBar: "#searchbarInput",
        searchButton: "#search-button",
        searchContainer: "#searchbar",
        form: "#formView"
    },
    events: {
        "keyup @ui.searchBar": "onRender",
    },
    regions: {
        header: "#header",
        adresses: "#adressWrap",
        form: "#formView"
    },
    childViewEvents: {
        "onClick": "goToForm",
    },
    onShowAdresses(){
        this.detachChildView("form")
        this.showChildView("adresses", this.adressCollectionView)
        this.getUI("searchContainer").show()
    },
    onShowForm(){
        this.detachChildView("adresses")
        this.showChildView("form", this.formView)
        this.getUI("searchContainer").hide()
    },
    initialize(){
        const collection = this.getOption("collection")
        const model = this.getOption("model")
        console.log(collection)
        this.headerView = new HeaderView({
            model: model,
            collection: collection
        })
        this.formView = new FormView({
            model: model,
            collection: collection
        })
        this.formView.render()   
    },
    onRender(e){
        const collection = this.getOption("collection")
        const model = this.getOption("model")

        const data = e.target ?
            _.filter(collection.models, function(res){
            const search = e.target.value
            return res.attributes.street.toLowerCase().includes(search.toLowerCase())
            })
            : null

        const FilteredCollection = Backbone.Collection.extend({})
        const filteredCollection = new FilteredCollection()
        filteredCollection.set(data)
        
        const search = e.target ? e.target.value : null

        this.adressCollectionView = new AdressCollectionView({
            collection: search === null ? collection : filteredCollection,
            model: model
        })

        this.showChildView("adresses", this.adressCollectionView)
        this.showChildView("header", this.headerView)
    },
})


export default AppView