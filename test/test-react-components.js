import React from 'react'
import TestUtils from 'react-addons-test-utils'
import chai from 'chai'

const should = chai.should();

// components
import Sidebar from '../js/components/side-bar'
import Navbar from '../js/components/nav-bar'
import Email from '../js/components/email'
import EmailList from '../js/components/email-list'

describe('Render React components', function() {
  it('Renders Sidebar component', function() {
    const linksObj = {
      link1: 1,
      link2: 2,
      link3: 3
    };
    const links = Object.keys(linksObj);
    const renderer = TestUtils.createRenderer();
    renderer.render(<Sidebar links={linksObj} />);
    const result = renderer.getRenderOutput();
    result.type.should.equal('ul');
    result.props.children.should.have.length(3);
    result.props.children[0].props.children.props.children.should.equal(links[0]);
    result.props.children[1].props.children.props.children.should.equal(links[1]);
    result.props.children[2].props.children.props.children.should.equal(links[2]);
  });
  it('Renders Navbar component', function() {
    const title = "NAVBAR"
    const renderer = TestUtils.createRenderer();
    renderer.render(<Navbar title={title} />);
    const result = renderer.getRenderOutput();
    result.type.should.equal('nav');
    result.props.children.props.children.props.children.should.equal(title);
  });
  it('Renders Email component');
  it('Renders EmailList component');
});
