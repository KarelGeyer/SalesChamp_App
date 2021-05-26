import {CollectionView} from "backbone.marionette"
import AddressView from "./AdressView"

const AdressCollectionView = CollectionView.extend({
    tagName: "section",
    id: "adressWrap",
    childView: AddressView,
    initialize(){
        
    },
})

export default AdressCollectionView