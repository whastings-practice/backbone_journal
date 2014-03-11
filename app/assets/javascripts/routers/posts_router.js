(function(root){
  var JournalApp = root.JournalApp = (root.JournalApp || {})
  var PostsRouter = JournalApp.Routers.PostsRouter = Backbone.Router.extend({
    routes: {
      "": "index",
      "posts/new": "new",
      "posts/:id": "show"
    },

    new: function() {
      var post = new JournalApp.Models.Post();
      var view = new JournalApp.Views.PostForm({post: post, collection: JournalApp.collection});
      this.element.html(view.render().$el);
    },

    initialize: function(element) {
      this.element = element
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