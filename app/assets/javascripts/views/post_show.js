(function(root){
  var JournalApp = root.JournalApp = (root.JournalApp || {})
  var PostShow = JournalApp.Views.PostShow = Backbone.View.extend({

    template: JST['post_show'],

    events: {
      'click .back-link': 'toIndex'
    },

    render: function() {
      var content = this.template({post: this.model});
      this.$el.html(content);
      return this;
    },

    toIndex: function(event) {
      JournalApp.router.navigate("",{trigger: true})
    }

  });

})(this);