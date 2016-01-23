// var React = require('react');
// var expect = require('chai').expect;
// var App = require('../app.js');

var React = require('react');
var TestUtils = require('react/lib/ReactTestUtils'); //I like using the Test Utils, but you can just use the DOM API instead.
var expect = require('expect');
var Root = require('../app'); //my root-test lives in components/__tests__/, so this is how I require in my components.

// describe('app', function () {
//   it('renders without problems', function () {
//     var root = TestUtils.renderIntoDocument(<App/>);
//     expect(root).toExist();
//   });
// });
// describe('App', function() {
//   var childType = '<inputAwesom/>';
//   it('should render with child', function() {
//     var markup = React.renderToStaticMarkup(<App />);
//     expect(markup).to.contains(childType);

//   });
describe('app', function () {
  it('loads without problems', function () {
    require('../app');
  });
});

