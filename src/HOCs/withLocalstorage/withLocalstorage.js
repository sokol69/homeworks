import React, { Component } from 'react';
import { load, save } from '../../localstorage';

function withLocalstorage(WrappedComponent) {
  return class extends Component {
    state = {
      SavedData: []
    };

    componentDidMount() {
      this.updateData();
    }

    updateData = () => {
      this.setState({
        SavedData: load('todo-list')
      });
    };

    SaveData = (localStorageKey, data) => {
      console.log('SaveData');
      save(localStorageKey, data);
    };

    render() {
      return (
        <WrappedComponent
          SavedData={this.state.SavedData}
          SaveData={this.SaveData}
          updateData={this.updateData}
          {...this.props}
        />
      );
    }
  };
}

export default withLocalstorage;
