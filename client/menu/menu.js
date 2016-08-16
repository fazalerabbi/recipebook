Template.menu.onCreated(function() {
  var self = this;
  self.autorun(function(){
    self.subscribe("menu-recipes");
  });
});

Template.menu.helpers({
  create: function(){

  },
  recipesInMenu: function(){
    return Recipes.find({in_menu: true});
  },
  destroyed: function(){

  },
});

Template.menu.events({
  "click #foo": function(event, template){

  }
});
