import React from "react";

class SaleCountDown extends React.Component {
  state = {
    flashingColor: true,
    dateMinutes: 60,
  };
  time = setInterval(() => {
    console.log(this.state.dateMinutes);
    if (this.state.dateMinutes) {
      this.setState(({ dateMinutes }) => ({
        dateMinutes: dateMinutes - 1,
        flashingColor: this.state.flashingColor ? false : true,
      }));
    } else {
      clearInterval(this.time);
      this.props.timeOut(false);
    }
  }, 1000);
  render() {
    console.log(this.props.state.saleSrc);
    const saleSrc = this.props.state.saleSrc;
    return (
      this.props.state.statos && (
        <div className="sale" key={this.state.dateMinutes}>
          רק ב-$99
          <img
            src={saleSrc}
            alt="sale prodouct"
            style={{
              borderColor: this.state.flashingColor ? "red" : null,
            }}
          />
          {` המבצע נגמר עוד ${this.state.dateMinutes} שניות`}
          <div dir={"rtl"}>
            <div />
          </div>
        </div>
      )
    );
  }
}

export default SaleCountDown;
