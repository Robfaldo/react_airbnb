import React from "react";

// defining the class Hello, which inherits from Component
class Hello extends React.Component {
  // Hello has a render method that returns html string
  render() {
    return <div>Hello {this.props.name}! </div>;
  }
}

export default Hello;
