import {CollectionView} from "backbone.marionette"
import AddressView from "./AdressView"

const AdressCollectionView = CollectionView.extend({
    tagName: "section",
    id: "adressWrap",
    childView: AddressView,

    filter(child, index, collection){
        const search = localStorage.getItem("search")
        console.log(search)
        if(search === "" || search === undefined ){
            return child
        } else {
            return child.attributes.street === search
        }
    },
    initialize(){
    },
})

export default AdressCollectionView