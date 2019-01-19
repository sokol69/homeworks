import React from 'react';
import classes from './Home.module.css';

const Home = () => {
	return (
		<div className={classes.container}>
			<p className="t-greeting">Приветствуем в почтовом клиенте!</p>
		</div>
	);
};

export default Home;
