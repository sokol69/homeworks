import React, { PureComponent } from 'react';
import Card from '../Card';
import './Todo.css';
import withLocalstorage from '../../HOCs/withLocalstorage';

class Todo extends PureComponent {
  state = {
    inputValue: ''
  };

  getId() {
    const { savedData } = this.props;
    const biggest = savedData.reduce((acc, el) => Math.max(acc, el.id), 0);
    return biggest + 1;
  }

  handleChange = event => {
    this.setState({
      inputValue: event.target.value
    });
  };

  createNewRecordByEnter = event => {
    if (event.keyCode === 13) {
      this.createNewRecord();
    }
  };

  toggleRecordComplete = event => {
    const eventId = event.target.getAttribute('data-todo-id');
    let newTodos = [...this.props.SavedData];
    let i = 0;
    for (i; i < newTodos.length; i++) {
      if (newTodos[i].id == eventId) {
        newTodos[i].completeFlag = !newTodos[i].completeFlag;
      }
    }
    this.props.SaveData('todo-list', newTodos);
    this.props.updateData();
  };

  createNewRecord = () => {
    if (this.state.inputValue) {
      if (this.props.SavedData) {
        this.props.SaveData('todo-list', [
          {
            name: this.state.inputValue,
            id: Date.now().toString(),
            completeFlag: false
          },
          ...this.props.SavedData
        ]);
      } else {
        this.props.SaveData('todo-list', [
          {
            name: this.state.inputValue,
            id: Date.now().toString(),
            completeFlag: false
          }
        ]);
      }
      this.props.updateData();

      this.setState({
        inputValue: ''
      });
    }
  };

  render() {
    return (
      <Card
        title="Список дел"
        handleChange={this.handleChange}
        createNewRecord={this.createNewRecord}
        createNewRecordByEnter={this.createNewRecordByEnter}
        toggleRecordComplete={this.toggleRecordComplete}
        todos={this.props.SavedData}
        inputValue={this.state.inputValue}
      />
    );
  }

  renderEmptyRecord() {
    return;
  }

  renderRecord = record => {
    return;
  };
}

export default withLocalstorage(Todo);
