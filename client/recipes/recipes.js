Template.recipes.onCreated(function() {
  var self = this;
  self.autorun(function(){
    self.subscribe("recipes");
  });
});

Template.recipes.helpers({
  create: function(){

  },
  rendered: function(){

  },
  destroyed: function(){

  },
  all: function () {
    return Recipes.find({});
  }
});

Template.recipes.events({
  "click #foo": function(event, template){

  }
});
