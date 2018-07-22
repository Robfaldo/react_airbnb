import React from "react";
// import the css for flat
import './flat.css';

// defining the class Hello, which inherits from Component
class Flat extends React.Component {
  render() {
    const title = this.props.flat.price +
      this.props.flat.priceCurrency + " - " +
      this.props.flat.name;

    const style = {
      backgroundImage: `url('${this.props.flat.imageUrl}')`
    };

  return (
    <div className="flat">
      <div className="flat-picture" style={style}></div>
      <div className="flat-title">
        {title}
      </div>
    </div>
  );
  }
}

export default Flat;
