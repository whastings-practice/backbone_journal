(function(root){
  var JournalApp = root.JournalApp = (root.JournalApp || {})
  var PostShow = JournalApp.Views.PostShow = Backbone.View.extend({
    initialize: function() {
      this.listenTo(this.model, 'sync', this.render);
    },

    template: JST['post_show'],

    events: {
      'dblclick #post-title': 'editPostTitle',
      'dblclick #post-body': 'editPostBody',
      'blur .edit-title': 'changeTitle',
      'blur .edit-body': 'changeBody',
      'keyup .edit-title': 'endEdit'
    },

    endEdit: function(event) {
      var keyCode = event.keyCode;
      if(keyCode === 13) {
        this.changeTitle(event);
      }
    },

    render: function() {
      var content = this.template({post: this.model});
      this.$el.html(content);
      return this;
    },

    editPostTitle: function(event) {
      var $title = $(event.target);
      var $input = $("<input type=text class=\"edit-title form-control\">");
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
      var $textarea = $("<textarea class=\"edit-body form-control\">");
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