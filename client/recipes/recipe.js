
Template.recipe.helpers({
  updateRecipeId: function(){
    return this._id;
  },
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
