import React, { Component } from 'react';

class ForceUpdateExample extends Component {
  constructor(props) {
    super(props);
    // state 정의
    this.state = {
      loading: true,
      formData: 'no data',
    };
    this.handleData = this.handleData.bind(this);
    // 4초 후에 handleData 함수를 호출합니다.
    setTimeout(this.handleData, 4000);
  }

  handleData() {
    const data = 'new data';
    // state 변경
    this.loading = false;
    this.formData = data + this.formData;
    this.forceUpdate();
  }

  render() {
    return (
      <div>
        <span>로딩중: {String(this.loading)}</span>
        <span>결과: {this.formData}</span>
      </div>
    );
  }
}

export default ForceUpdateExample;
