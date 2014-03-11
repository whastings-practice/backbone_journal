(function(root) {
  var JournalApp = root.JournalApp = (root.JournalApp || {})
  var PostsIndex = JournalApp.Views.PostsIndex = Backbone.View.extend({
    initialize: function() {
      this.listenTo(this.collection,
      "add change:title remove reset",
      this.render)
    },

    template: JST["posts_index"],

    events: {
      'click .delete-button': 'deletePost'
    },

    render: function() {
      var content = this.template({posts: this.collection.models});
      this.$el.html(content);
      return this;
    },

    deletePost: function(event) {
      var $button = $(event.target);
      var postId = $button.data("id");
      var thePost = this.collection.get(postId)
      thePost.destroy();
    }
  })

})(this);