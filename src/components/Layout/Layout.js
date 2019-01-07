import React, { Fragment, PureComponent } from 'react';
import SectionTitle from '../SectionTitle';
import './Layout.css';

class Layout extends PureComponent {
  render() {
	const Header = this.props.header;
	const Footer = this.props.footer;
    return (
		<Header></Header>
	);
  };

  renderHeader(HeaderChild) {
    return <Header></Header>
  };

  renderFooter(FooterChild) {
    return 'empty';
  };
}

export default Layout;
