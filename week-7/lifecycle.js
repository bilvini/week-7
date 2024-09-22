import React from 'react';

class LifecycleComponent extends React.Component {
  componentDidMount() {
    console.log('componentDidMount called');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount called');
  }

  render() {
    return (
      <div>
        Lifecycle Component
      </div>
    );
  }
}

export default LifecycleComponent;