window.JournalApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    this.router = new JournalApp.Routers.PostsRouter($("#content"));
    Backbone.history.start({pushState: true, root: '/posts'});
  }
};

$(document).ready(function(){
  JournalApp.initialize();
});

