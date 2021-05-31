import Marionette from "backbone.marionette"

const Router = Marionette.AppRouter.extend({
    routes: {
        "" : "mainScreen",
        ":id": "formScreen",
    },    
})


export default Router