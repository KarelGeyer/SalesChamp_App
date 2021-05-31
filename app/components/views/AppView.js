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
    },
    onShowForm(){
        this.detachChildView("adresses")
        this.showChildView("form", this.formView)
    },
    initialize(){
        const collection = this.getOption("collection")
        const model = this.getOption("model")

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
            : collection.models

        const FilteredCollection = Backbone.Collection.extend({})
        const filteredCollection = new FilteredCollection()
        filteredCollection.set(data)

        this.adressCollectionView = new AdressCollectionView({
            collection: filteredCollection.length === 0 ? collection : filteredCollection,
            model: model
        })

        this.showChildView("adresses", this.adressCollectionView)
        this.showChildView("header", this.headerView)
    },
})


export default AppView