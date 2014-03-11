(function(root) {
  var JournalApp = root.JournalApp = (root.JournalApp || {})
  var PostsIndex = JournalApp.Views.PostsIndex = Backbone.View.extend({
    initialize: function() {
      this.listenTo(this.collection,
      "add change:title remove reset sync",
      this.render)
    },

    template: JST["posts_index"],

    events: {
      'click .delete-button': 'deletePost',
      'click .show-link': 'showLink',
      'click .new-post-link': 'newPostForm'
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
    },

    showLink: function(event) {
      event.preventDefault();
      var $link = $(event.target);
      var postId = $link.data('id');
      var url = '/posts/' + postId;
      JournalApp.router.navigate(url, {trigger: true});
    },

    newPostForm: function(event) {
      event.preventDefault();
      Backbone.history.navigate('posts/new', {trigger: true});
    }
  })

})(this);