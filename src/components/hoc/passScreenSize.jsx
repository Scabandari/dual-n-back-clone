import React, { Component } from 'react'

export default ChildComponent => {
    class PassScreenSize extends Component {
        // ref: https://stackoverflow.com/questions/36862334/get-viewport-window-height-in-reactjs
        constructor(props) {
            super(props);
            this.state = { width: 0, height: 0 };
            this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
          }
          
          componentDidMount() {
            this.updateWindowDimensions();
            window.addEventListener('resize', this.updateWindowDimensions);
          }
          
          componentWillUnmount() {
            window.removeEventListener('resize', this.updateWindowDimensions);
          }
          
          updateWindowDimensions() {
            this.setState({ width: window.innerWidth, height: window.innerHeight });
          }

        render() {
            return <ChildComponent height={this.state.height} width={this.state.width} {...this.props} />;
        }
    }

    return PassScreenSize;
};

