import React, { Component } from 'react';
import ShowPreview from '../ShowPreview';
import { connect } from 'react-redux';
import classes from './Search.module.css';
import { getSeriesRequest } from '../../actions';

class Search extends Component {
	state = {
		searchValue: ''
	};

	render() {
		const { series, isFetching, error } = this.props;

		if (isFetching) return <p>Выполняется поиск</p>;
		if (error) return <p>Произошла сетевая ошибка</p>;

		return (
			<div>
				<div className={classes.previewList}>
					<input
						className={`${classes.input} t-input`}
						placeholder="Название сериала"
						onChange={this.changeSearchHandler}
						value={this.state.searchValue}
					>
					</input>
					<div className={classes.buttonWrapper}>
						<button
							className={`${classes.button} t-search-button`}
							onClick={this.searchHandler}
						>
							Найти
						</button>
					</div>
				</div>
				<div className={`t-search-result ${classes.searchPanel}`}>
					{series.map(series => <ShowPreview series={series} key={series.id}/>)}
				</div>
			</div>
		);
	};

	changeSearchHandler = event => {
		this.setState({
			searchValue: event.target.value
		});
	};

	searchHandler = () => {
		this.props.getSeriesRequest(this.state.searchValue);
		this.setState({
			searchValue: ''
		});
	};
};

const mapStateToProps = state => {
	return {
		isFetching: state.search.isFetching,
		series: state.search.series,
		error: state.search.error
	};
};

const mapDispatchToProps = {
	getSeriesRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
