import React, { Component } from 'react';
import { connect } from 'react-redux';
import classes from './ShowPage.module.css';

class ShowPage extends Component {
	render() {
		const { series } = this.props;
		const actorsList = {...series._embedded};

		return (
			<div>
				<p>{series.name}</p>
				{series.image ? (
					<img
					src={series.image.medium}
					alt={series.name}
					>
					</img>
				) : ''}
				<div dangerouslySetInnerHTML={{ __html: series.summary }}></div>
				<div className={classes.cast}>
					{actorsList.cast ? actorsList.cast.map(actor => 
						<div className="t-person" key={actor.person.id}>
							<p>{actor.person.name}</p>
							<img
								src={actor.person.image.medium}
								alt={actor.person.name}
							>
							</img>
						</div>
					 ) : ''}
				</div>
			</div>
		);
	};
};

const mapStateToProps = state => {
	return {
		series: state.shows.entities,
	};
};

export default connect(mapStateToProps)(ShowPage);
