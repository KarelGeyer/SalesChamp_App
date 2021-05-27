import {CollectionView} from "backbone.marionette"
import AddressView from "./AdressView"

const AdressCollectionView = CollectionView.extend({
    tagName: "section",
    id: "adressWrap",
    childView: AddressView,

    filter(child, index, collection){
        const search = localStorage.getItem("search")
        if(search === "" || search === undefined ){
            return child
        } else {
            return child.attributes.street === search
        }
    },
    childViewEvents: {
        "handeler": "testFunction"
    },
    testFunction(childView){
        console.log(childView)
    },
    initialize(){
        this.listenTo(this.collection, "change", this.render, this);
    },
})

export default AdressCollectionView