(function(root) {
  var JournalApp = root.JournalApp = (root.JournalApp || {})
  var Post = JournalApp.Models.Post = Backbone.Model.extend({
    urlRoot: '/posts'
  })

})(this);