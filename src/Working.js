import React, { Component } from 'react';

class app extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Working: false
    };
  }
  handleClick = () => {
    this.setState({ Working: !this.state.travaille });
  };
  render() {
    const light = this.state.Working ? 'travaille' : 'pause';
    return (
      <div className="Working">
        <button onClick={this.handleClick}className={light} > {light.toUpperCase()}</button>
        <figure className={light} />
      </div>
    );
  }
}

export default Working;