import Marionette from 'backbone.marionette';
import $ from "jquery"
import _ from 'underscore';
import Backbone, {Collection, Model} from 'backbone';
import AppView from "./views/AppView"

const MainCollection = Collection.extend({
  url: 'https://introduction-api.do.saleschamp.io/introduction-api/items/address',
  parse: function(data){
    return data.data
  }
})

const MainModel =  Model.extend({
  defaults: {
    id: "",
    name: "",
    email: "",
    status: "",
    street: "",
    city: "",
    number: "",
    search: ""
  }
})

const data = new MainCollection()
const model = new MainModel()

export default Marionette.Application.extend({
  region: '#app',

  onStart() {
      
    data.fetch({
      success(res){  

        const Controller = Marionette.Object.extend({
          initialize(){
            const filteredData = _.groupBy(data.models, data => 
              `${data.attributes.city}, ${data.attributes.street}`)

            const map = _.map(filteredData, (data, name) => ({name, data}))  

            const TestCol = Backbone.Collection.extend({})
            const testCol = new TestCol(map)
            
            const appView = new AppView({
            collection: testCol,
              model: model
            })
            appView.render()
            $('#app').append(appView.$el)
            this.options.appView = appView
          },
          mainScreen(){
            const appView = this.getOption("appView")
            appView.triggerMethod("show:adresses")
          },
          formScreen(id){
            const appView = this.getOption("appView")
            appView.triggerMethod("show:form")
          }
        })
    
        const RouterTest = Marionette.AppRouter.extend({
          controller: new Controller(),
          appRoutes: {
              "" : "mainScreen",
              ":id": "formScreen",
          },    
        })
        const routerTest = new RouterTest({
        })
      },
      error(){
        console.log(error)
      }
    })
    
     
  Backbone.history.start()   
  },
});

