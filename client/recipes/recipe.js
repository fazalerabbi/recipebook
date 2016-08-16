Template.recipe.onCreated(function () {
  this.editMode = new ReactiveVar(false);
});
Template.recipe.helpers({
  updateRecipeId: function(){
    return this._id;
  },
  editMode: function(){
      return Template.instance().editMode.get();
  },
  rendered: function(){

  },
  destroyed: function(){

  },
});

Template.recipe.events({
  'click .toggle-menu': function(event, template){
    console.log("hello");
    Meteor.call('toggleMenuItem', this._id,this.in_menu);
  },

  'click .fa-trash': function () {
    Meteor.call('deleteRecipe', this._id);
  },
  'click .fa-pencil': function (event, template) {
    template.editMode.set(!template.editMode.get());
    //Session.set('editMode', !Session.get('editMode'));
  }
});
