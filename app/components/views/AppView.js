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
        "back": "goBackToMain",
        "onSubmit": "submit"
    },
    goToForm(){
        this.detachChildView("adresses")
        this.showChildView("form", this.formView)
    },
    goBackToMain(){
        this.detachChildView("form")
        this.showChildView("adresses", this.adressCollectionView)
    },
    submit(){
        this.detachChildView("form")
        this.showChildView("adresses", this.adressCollectionView)
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

        const TestColl = Backbone.Collection.extend({})
        const testColl = new TestColl()
        testColl.set(data)

        this.adressCollectionView = new AdressCollectionView({
            collection: testColl.length === 0 ? collection : testColl,
            model: model
        })

        this.showChildView("adresses", this.adressCollectionView)
        this.showChildView("header", this.headerView)
        this.showChildView("form", this.formView)
        this.detachChildView("form")
    },
})


export default AppView