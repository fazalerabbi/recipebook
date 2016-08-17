Template.recipe_single.onCreated(function() {
  var self = this;
  self.autorun(function(){
    var id = FlowRouter.getParam('id');
    self.subscribe("single-recipe", id);
  });
});

Template.recipe_single.helpers({
  recipe: ()=>{
    var id = FlowRouter.getParam('id');
    return Recipes.findOne({"_id": 1234445677777});

  }
});

Template.recipe_single.events({
  "click #foo": function(event, template){

  }
});
