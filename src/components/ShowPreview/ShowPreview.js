import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getShowRequest } from '../../actions';
import classes from './ShowPreview.module.css';

class ShowPreview extends Component {
  render() {
    const { series, getShowRequest } = this.props;

    return (
      <div className={`t-preview ${classes.container}`}>
        <div>
          <Link className="t-link" to={`/show/${series.id}`} onClick={() => getShowRequest(series.id) }>
            {series.name}
          </Link>
          {series.image ? (
            <img src={series.image.medium} alt={series.name} />
          ) : (
            ''
          )}
        </div>
        <div dangerouslySetInnerHTML={{ __html: series.summary }} />
      </div>
    );
  };
};

const mapStateToProps = state => {
	return state;
};

const mapDispatchToProps = {
	getShowRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowPreview);
