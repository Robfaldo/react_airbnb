import React from "react";
// import the css for flat
import './flat.css';

// defining the class Hello, which inherits from Component
class Flat extends React.Component {
  handleClick = () => {
    // app is giving a function to the child (flat)
    // flat calls the parent method selectFlat when
    // the click happens
    this.props.selectFlat(this.props.flat);
  }
  render() {
    const title = this.props.flat.price +
      this.props.flat.priceCurrency + " - " +
      this.props.flat.name;

    const style = {
      backgroundImage: `url('${this.props.flat.imageUrl}')`
    };

  return (
    <div className="flat" onClick={this.handleClick}>
      <div className="flat-picture" style={style}></div>
      <div className="flat-title">
        {title}
      </div>
    </div>
  );
  }
}

export default Flat;
