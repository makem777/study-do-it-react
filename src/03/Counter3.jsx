import React, { Component } from 'react';

class Counter3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
    };
    this.increaseCount = this.increaseCount.bind(this);
    this.resetCount = this.resetCount.bind(this);
  }
  increaseCount() {
    this.setState(({ count }) => ({
      count: count + 1,
    }));
  }
  resetCount() {
    this.setState({ count: 0 });
  }
  render() {
    return (
      <div>
        현재 카운트: {this.props.count}
        <button onClick={this.increaseCount} onMouseOut={this.resetCount}>
          카운트 증가
        </button>
        버튼 밖으로 커서가 움직이면 0으로 초기화됩니다.
      </div>
    );
  }
}
export default Counter3;
