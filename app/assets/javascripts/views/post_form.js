(function(root){
  var JournalApp = root.JournalApp = (root.JournalApp || {})
  var PostForm = JournalApp.Views.PostForm = Backbone.View.extend({
    events: {"submit form": "submit"},

    initialize: function(options) {
      this.post = options.post;
    },

    template: JST["post_form"],

    render: function() {
      var content = this.template();
      this.$el.html(content);
      return this;
    },

    submit: function(event) {
      event.preventDefault();
      var $theForm = $(event.target);
      var formData = $theForm.serializeJSON();
      var callback = {
        success: function() {
          Backbone.history.navigate('', {trigger: true});
          $theForm[0].reset();
        }
      };
      if (this.post.isNew()) {
        this.collection.create(formData.post, callback);
      } else {
        this.post.save(formData.post, callback);

      }
    }


  });
})(this);