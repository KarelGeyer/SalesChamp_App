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
        "click #search-button": "getSearchvalue",
    },
    storeSearchValue(e){
        localStorage.setItem("search", e.target.value)
    },
    getSearchvalue(searchResult){
        searchResult = localStorage.getItem("search")
        console.log(searchResult)
      },
    initialize(){
        if(a !== ""){
            this.adressCollectionView = new AdressCollectionView({
                collection: this.collection
            })
        }else {
            this.adressCollectionView = new AdressCollectionView({
                collection: newCollection
            })
        }
        const a = _.find(this.collection.models, data => {
            return data.attributes.city = "Ploso Wetan"
        })
        // const NewCollection = Backbone.Collection.extend({
            
        // })
        // const newCollection = new NewCollection({
        //     collection: a
        // })
        // // console.log(this.collection)
        // // console.log(a)
        // console.log(newCollection.models)
    },
    regions: {
        region: "#adressWrap"
    },
    onRender(){
        this.showChildView("region", this.adressCollectionView)
    }

})

export default AppView