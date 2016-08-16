Template.recipe_single.onCreated(function() {
  var self = this;
  self.autorun(function(){
    self.subscribe("recipes");
  });
});

Template.recipe_single.helpers({
  recipe: ()=>{
    var id = FlowRouter.getParam('id');
    return Recipes.findOne({"_id": id});

  }
});

Template.recipe_single.events({
  "click #foo": function(event, template){

  }
});
