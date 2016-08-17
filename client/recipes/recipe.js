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
    Meteor.call('toggleMenuItem', {
      id:this._id,
      currentState:this.in_menu
    },function(err, res){
      console.log(err, res);
    });
  },

  'click .fa-trash': function () {
    Meteor.call('deleteRecipe', this._id);
  },
  'click .fa-pencil': function (event, template) {
    template.editMode.set(!template.editMode.get());
    //Session.set('editMode', !Session.get('editMode'));
  }
});
