import { Component } from "react";
import ShowDailySchedule from "./ShowDailySchedule";
import DayButton from './DayButton';

interface IProps {
  currDay: string;
  slots: {};
}
class Day extends Component<IProps, any> {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    };
  }

  showSchedule = () => {
    if (this.state.clicked) {
      this.setState({
        clicked: false
      });
    } else {
      this.setState({
        clicked: true
      });
    }
  };

  render() {
    return (
      <div>
        <ShowScheduleButton
          showSchedule={this.showSchedule}
          day={this.props.currDay}
          slots={this.props.slots}
          clicked={this.state.clicked}
        />
      </div>
    );
  }
}
const ShowScheduleButton = props => {
  if (props.clicked) {
    return (
      <ShowDailySchedule
        day={props.day}
        slots={props.slots}
        showSchedule={props.showSchedule}
      />
    );
  } else {
    return (
      <DayButton arrow="../../static/baseline-chevron_right.svg" day={props.day} showSchedule={props.showSchedule} />
    );
  }

};

export default Day;
