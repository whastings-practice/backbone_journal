(function(root) {
  var JournalApp = root.JournalApp = (root.JournalApp || {})
  var Posts = JournalApp.Collections.Posts = Backbone.Collection.extend({
    model: JournalApp.Models.Post,
    url: '/posts'
  });

})(this);