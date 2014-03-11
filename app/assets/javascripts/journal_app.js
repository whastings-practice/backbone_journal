window.JournalApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    this.router = new JournalApp.Routers.PostsRouter($("#content"));
    Backbone.history.start({pushState: true, root: '/posts'});
    this.index();
  },

  index: function() {
    var that = this;
    this.collection = new JournalApp.Collections.Posts();
    var view = new JournalApp.Views.PostsIndex({collection: this.collection});
    this.collection.fetch({
      success: function() {
        $("#sidebar").html(view.render().$el);
      }
    });
  }
};



$(document).ready(function(){
  JournalApp.initialize();
});

