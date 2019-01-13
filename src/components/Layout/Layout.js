import React, { Fragment, PureComponent } from 'react';
import SectionTitle from '../SectionTitle';
import './Layout.css';

class Layout extends PureComponent {
  render() {
    const { header, footer, children } = this.props;
    return (
      <Fragment>
		{this.renderHeader(header)}
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
		// if (HeaderChild) {
		// 	return (
		// 		<header className="header">
		// 			<SectionTitle className="header__title">Header</SectionTitle>
		// 			<HeaderChild className="header" />
		// 		</header>
		// 	);
		// } else {
		// 	return (
		// 		<header className="header">
		// 			<SectionTitle className="header__title">Header</SectionTitle>
		// 		</header>
		// 	);
		// }
	//}
	
	return HeaderChild ? <HeaderChild className="header" /> : null;
  }

  renderFooter(FooterChild) {
    return FooterChild ? <FooterChild className="footer" /> : null;
  }
}

export default Layout;
