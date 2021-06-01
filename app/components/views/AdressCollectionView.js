import {CollectionView} from "backbone.marionette"
import _ from "underscore"
import AddressView from "./AdressView"

const AdressCollectionView = CollectionView.extend({
    tagName: "section",
    id: "adressWrap",
    childView: AddressView,
    childViewEvents: {
        "handeler": "modelUpdate"
    },
    modelUpdate(child) {
        const attrs = child.model.attributes.data[0].attributes
        this.model.set(attrs)
    },
    initialize(){
        this.listenTo(this.collection, "change", this.render);
    },
})

export default AdressCollectionView