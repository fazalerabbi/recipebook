import { Meteor } from 'meteor/meteor';


Meteor.publish('recipes', function(){
  return Recipes.find({author: this.userId});
});

Meteor.publish('single-recipe', function(id){
  check(id, String);
  return Recipes.find({_id: id});
});
Meteor.publish('menu-recipes', function(id){
  return Recipes.find({in_menu: true});
});

Meteor.startup(() => {
  // code to run on server at startup

});
