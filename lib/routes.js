FlowRouter.route('/', {
  name: 'home',
  action(){
    BlazeLayout.render('home_layout');
  }
});

FlowRouter.route('/recipe-book', {
  name: 'recipe-book',
  action(){
    BlazeLayout.render('main_layout',{main:'recipes'});
  }
});
