import Backbone from "backbone"
import MySecondView from "../views/MySecondView"

const mysecondView = new MySecondView({
    model: new Backbone.Model({
        items: [
            {name: "AADORP", second: "BEUKENLAAN"},
            {name: "AADORP", second: "DENNENLAAN"},
            {name: "AALDEN", second: "DIJKAKKER"},
            {name: "LEIDEN", second: "STATIONSPLIEN"}
        ]
    }),
    
})

export default mysecondView