var React = require('react');
var expect = require('chai').expect;
var App = require('../app.js');

describe('App', function() {
  var childType = '<inputAwesom/>';
  it('should render with child', function() {
    var markup = React.renderToStaticMarkup(<App />);
    expect(markup).to.contains(childType);

  });

});
