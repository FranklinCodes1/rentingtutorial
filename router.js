import EmberRouter from '@ember/routing/router';
import config from 'rentingtutorial/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('about'); //this is an argument, everything is an argument
  this.route('contact', { path: '/getting-in-touch' });
  this.route('index');
});
