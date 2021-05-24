import Backbone from "backbone"

export default Backbone.Model.extend({
    defaults: {
        data: 
        {id: "",
        status: "",
        postalcode: "",
        street: "",
        number: "",
        name: "",
        email: "",
        city: ""}
    }
})