window.JournalApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var collection = new JournalApp.Collections.Posts();
    var view = new JournalApp.Views.PostsIndex({collection: collection});
    collection.fetch({
      success: function() {
        $('#content').html(view.render().$el);
      }
    });
  }
};

$(document).ready(function(){
  JournalApp.initialize();
});

