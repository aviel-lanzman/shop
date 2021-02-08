import React from "react";
import "./SaleCountDown.css";
class SaleCountDown extends React.Component {
  state = {
    flashingColor: true,
    date: {
      seconds: this.props.state.saleTim.seconds,
      minutes: this.props.state.saleTim.minutes,
      hours: this.props.state.saleTim.hours,
      days: this.props.state.saleTim.days,
    },
  };
  componentDidMount() {
    this.timer = setInterval(() => {
      const { seconds, minutes, hours, days } = this.state.date;
      if (seconds || minutes || hours || days) {
        this.setState(({ date: { seconds, minutes, hours, days } }) => ({
          date: {
            days:
              seconds <= 0 && minutes <= 0 && hours <= 0 && days >= 1
                ? days - 1
                : days,

            hours:
              seconds <= 0 && minutes <= 0 && hours >= 1
                ? hours - 1
                : seconds <= 0 && minutes <= 0 && hours <= 0 && days >= 1
                ? hours + 23
                : hours,
            minutes:
              seconds <= 0 && minutes >= 1
                ? minutes - 1
                : seconds <= 0 && minutes <= 0 && hours >= 0
                ? minutes + 59
                : minutes,
            seconds:
              seconds >= 1
                ? seconds - 1
                : minutes >= 1 || hours >= 1 || days >= 1
                ? seconds + 59
                : seconds,
          },
          flashingColor: this.state.flashingColor ? false : true,
        }));
      } else {
        clearInterval(this.timer);
        this.props.timeOut(false);
      }
    }, 1000);
  }

  render() {
    console.log("dad - Children.Prodouct -Children.SaleCountDown");
    const { seconds, minutes, hours, days } = this.state.date;
    const { saleSrc } = this.props.state;
    const sale = (
      <>
        <img
          src={saleSrc}
          alt="sale prodouct"
          className="imgSale"
          style={{
            borderColor: this.state.flashingColor ? "red" : null,
          }}
        />
        {"  : המבצע יגמר  עוד "}
        <div className="days">
          {days ? `${days !== 1 ? `${days} ימים` : `${days} יום`} ` : null} {}
        </div>
        <div className="tim">
          {hours >= 10 ? hours : "0" + hours}:
          {minutes >= 10 ? minutes : "0" + minutes}:
          {seconds >= 10 ? seconds : "0" + seconds}
        </div>
      </>
    );

    return (
      <div className="sale" key={this.timer}>
        {this.props.state.statos ? sale : "המבצע נגמר"}
        <div dir={"rtl"}>
          <div />
        </div>
      </div>
    );
  }
}

export default SaleCountDown;
