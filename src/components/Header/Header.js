import React, { PureComponent } from 'react';
import { AuthConsumer } from '../../contexts/Auth';
import Button from '../Button';
import SectionTitle from '../SectionTitle';
import './Header.css';

class Header extends PureComponent {
  render() {
    return(
		<header className="header">
			<SectionTitle className="header__title">Header</SectionTitle>
		</header>
	)
  }
}

export default Header;
