import React, { PureComponent } from 'react';
import styles from './UserInfo.module.css';
import { connect } from 'react-redux';
import { getUserIsLoading, getUserData } from '../../modules/User';
import { fetchRequest as fetchUserRequest } from '../../modules/User';


class UserInfo extends PureComponent {
  render() {
	const { isLoading, userData } = this.props;

	if (isLoading) return <p>Загрузка информации о пользователе</p>
	if (!userData) return <p>Нет информации о пользователе</p>

    return (
      <div className={styles.root}>
        <div className={styles.imageWrapper}>
			<img
				className={styles.image}
				src={userData.avatar_url ? userData.avatar_url : ''}
				alt="user info"
			/>
		</div>
		<div>
			<p className="t-user-name">{userData.name}</p>
			<p className="t-user-bio">{userData.bio}</p>
		</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
	return {
		isLoading : getUserIsLoading(state.user),
		userData: getUserData(state.user)
	};
};

const mapDispatchToProps = {
	fetchUserRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);
