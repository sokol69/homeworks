import React, { Fragment, PureComponent } from 'react';
import SectionTitle from '../SectionTitle';
import './Layout.css';

class Layout extends PureComponent {
  render() {
    const { header, footer, children } = this.props;
    return (
      <Fragment>
        {header ? (
          <header className="header">
            <SectionTitle className="header__title">Header</SectionTitle>
            {this.renderHeader(header)}
          </header>
        ) : null}
        <main
          className={`main ${header ? 'main--with-header' : ''} ${
            footer ? 'main--with-footer' : ''
          }`}
        >
          <SectionTitle className="main__title">Main</SectionTitle>
          {children}
        </main>
        {this.renderFooter(footer)}
      </Fragment>
    );
  }

  renderHeader(HeaderChild) {
    return HeaderChild ? <HeaderChild /> : null;
  }

  renderFooter(FooterChild) {
    return FooterChild ? <FooterChild className="footer" /> : null;
  }
}

export default Layout;
