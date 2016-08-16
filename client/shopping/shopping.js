Template.shopping_list.onCreated(function() {
  var self = this;
  self.autorun(function(){
    self.subscribe("menu-recipes");
  });
});

Template.shopping_list.helpers({
  create: function(){

  },
  shoppingItems: function(){
    return Recipes.find({in_menu: true});
  },
  destroyed: function(){

  },
});

Template.shopping_list.events({
  "click #foo": function(event, template){

  }
});
