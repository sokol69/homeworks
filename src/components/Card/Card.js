import React, { PureComponent } from 'react';
import './Card.css';

class Card extends PureComponent {
  render() {
    return (
      <div className="card">
        <h3 className="card__title card-title">{this.props.title}</h3>
        <div className="card-scrollable-content">
          <div className="todo t-todo-list">
            <div className="todo-item todo-item-new">
              <input
                className="todo-input t-input"
                placeholder="Введите задачу"
                onChange={this.props.handleChange}
                onKeyUp={this.props.createNewRecordByEnter}
                value={this.props.inputValue}
              />
              <span
                className="plus t-plus"
                onClick={this.props.createNewRecord}
              >
                +
              </span>
            </div>
            {this.props.todos
              ? this.props.todos.map(item => {
                  return (
                    <div className="todo-item t-todo" key={item.id}>
                      <p className="todo-item__text">{item.name}</p>
                      <span
                        className="todo-item__flag t-todo-complete-flag"
                        data-todo-id={item.id}
                        onClick={this.props.toggleRecordComplete}
                      >
                        [{item.completeFlag ? 'x' : ''}]
                      </span>
                    </div>
                  );
                })
              : ''}
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
