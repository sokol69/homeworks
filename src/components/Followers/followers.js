import React, { PureComponent } from 'react';
import styles from './followers.module.css';
import {getFollowersIsLoading, getFollowersData } from '../../modules/Followers';
import { connect } from 'react-redux';
import cx from 'classnames';
import { fetchRequest as fetchFollowersRequest } from '../../modules/Followers';

class Followers extends PureComponent {
  render() {
	const { isLoading, followersData } = this.props;

	if (isLoading) return <p>Загрузка информации о подписчиках</p>
	if (!followersData) return <p>Нет информации о подписчиках</p>

    return (
      <div className={cx(styles.root, 't-followers')}>
	  	{followersData.map(follower => 
			<div className={styles.follower} key={follower.id}>
				<img
					className={styles.followerImg}
					src={follower.avatar_url}
					alt={follower.login}
				/>
				<p className={styles.followerLogin}>{follower.login}</p>
			</div>
		  )}
      </div>
    );
  }
}

const mapStateToProps = state => {
	return {
		isLoading : getFollowersIsLoading(state.followers),
		followersData: getFollowersData(state.followers)
	};
};

const mapDispatchToProps = {
	fetchFollowersRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(Followers);
