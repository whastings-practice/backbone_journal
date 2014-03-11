(function(root){
  var JournalApp = root.JournalApp = (root.JournalApp || {})
  var PostShow = JournalApp.Views.PostShow = Backbone.View.extend({
    initialize: function() {
      this.listenTo(this.model, 'sync', this.render);
    },

    template: JST['post_show'],

    events: {
      'click .back-link': 'toIndex',
      'dblclick #post-title': 'editPostTitle',
      'dblclick #post-body': 'editPostBody',
      'blur .edit-title': 'changeTitle',
      'blur .edit-body': 'changeBody'
    },

    render: function() {
      var content = this.template({post: this.model});
      this.$el.html(content);
      return this;
    },

    toIndex: function(event) {
      JournalApp.router.navigate("",{trigger: true})
    },

    editPostTitle: function(event) {
      var $title = $(event.target);
      var $input = $("<input type=text class=\"edit-title\">");
      $input.val($title.text());
      $title.replaceWith($input);
    },

    changeTitle: function(event) {
      var input = $(event.target);
      this.model.set("title", input.val());
      this.model.save();
    },

    editPostBody: function(event) {
      var $body = $(event.target);
      var $textarea = $("<textarea class=\"edit-body\">");
      $textarea.val($body.text().trim());
      $body.replaceWith($textarea);
    },

    changeBody: function(event) {
      var $textarea = $(event.target);
      this.model.set('body', $textarea.val());
      this.model.save();
    }

  });

})(this);