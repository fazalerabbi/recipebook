Accounts.onLogin(function(){
  FlowRouter.go('recipe-book');
});
Accounts.onLogout(function(){
  FlowRouter.go('home');
});

FlowRouter.triggers.enter([function (context, redirect) {
  if(!Meteor.userId()) {
    FlowRouter.go('home');
  }
}]);

FlowRouter.route('/', {
  name: 'home',
  action(){
    if(Meteor.userId()) {
      FlowRouter.go('recipe-book');
    }
    BlazeLayout.render('home_layout');
  }
});

FlowRouter.route('/recipe-book', {
  name: 'recipe-book',
  action(){
    BlazeLayout.render('main_layout',{main:'recipes'});
  }
});

FlowRouter.route('/recipe/:id', {
  name: 'recipe',
  action(){
    BlazeLayout.render('main_layout',{main:'recipe_single'});
  }
});
FlowRouter.route('/menu', {
  name: 'menu',
  action(){
    BlazeLayout.render('main_layout',{main:'menu'});
  }
});
FlowRouter.route('/shopping-list', {
  name: 'shopping',
  action(){
    BlazeLayout.render('main_layout',{main:'shopping_list'});
  }
});
