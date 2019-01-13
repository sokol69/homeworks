import React, { PureComponent } from 'react';
import { AuthConsumer } from '../../contexts/Auth';
import SectionTitle from '../SectionTitle';
import './Footer.css';

class Footer extends PureComponent {
  render() {
    return (
		<AuthConsumer>
			{({isAuthorized, email}) => 
				<footer className="footer">
					<SectionTitle className="footer__title">Footer</SectionTitle>
					{isAuthorized ? (
							<p className="footer-message t-footer">Вы вошли как {email}</p>
						) : (
							<p className="footer-message t-footer">Вы гость в этой системе</p>
						)
					}
				</footer>
			}
		</AuthConsumer>
	  );
  }
}

export default Footer;
