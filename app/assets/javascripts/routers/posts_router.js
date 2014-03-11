(function(root){
  var JournalApp = root.JournalApp = (root.JournalApp || {})
  var PostsRouter = JournalApp.Routers.PostsRouter = Backbone.Router.extend({
    routes: {
      "": "index",
      "posts/:id": "show"
    },

    initialize: function(element) {
      this.element = element
    },

    index: function() {
      var that = this;
      var collection = new JournalApp.Collections.Posts();
      var view = new JournalApp.Views.PostsIndex({collection: collection});
      collection.fetch({
        success: function() {
          that.element.html(view.render().$el);
        }
      });
    },

    show: function(id) {
      var that = this;
      var thePost = new JournalApp.Models.Post({id: id})
      var view = new JournalApp.Views.PostShow({model: thePost})
      thePost.fetch({
        success: function() {
          that.element.html(view.render().$el)
        }
      })
    }
  });

})(this);