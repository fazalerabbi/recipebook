
Template.recipe.helpers({
  create: function(){

  },
  rendered: function(){

  },
  destroyed: function(){

  },
});

Template.recipe.events({
  "click .toggle-menu": function(event, template){
    console.log("hello");
    Meteor.call('toggleMenuItem', this._id,this.in_menu);

  }
});
