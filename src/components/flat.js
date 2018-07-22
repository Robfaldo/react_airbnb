import React from "react";
// import the css for flat
import './flat.css';

// defining the class Hello, which inherits from Component
class Flat extends React.Component {
  const title = this.props.flat.price +
    this.props.flat.priceCurrency +
    " - " + this.props.flat.name;

    // 50.30 mins into video
    const style = {
      // this will be used for flat-picture
      backgroundImage: `url('${this.props.imageUrl}')`
    };

  render() {
  return(
    <div className="flat">
      <div className="flat-picture">
        {style}
      </div>
      <div className="flat-title">
        {title}
      </div>
    </div>
  );
  }
}

export default Flat;
