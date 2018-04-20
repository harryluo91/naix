import React, { Component } from 'react';
import { Divider, withStyles } from 'material-ui'
import DatePicker from 'material-ui-pickers/DatePicker';
import autoBind from 'react-autobind';

class TimePicker extends Component {
  constructor() {
    super();
    autoBind(this);

    this.state = {
      date: null
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    return {
      date: nextProps.date
    };
  }

  handleDateChange(date) {
    this.props.changeDate(date);
  }

  render() {
    const { date } = this.state;
    const { label, disableFuture, showTodayButton, maxDateMessage, animateYearScrolling } = this.props;
    return (
      <DatePicker
        style={{
          width: '100%'
        }}
        label={label}
        value={date}
        onChange={this.handleDateChange}
        disableFuture={disableFuture || true}
        showTodayButton={showTodayButton || true}
        maxDateMessage={maxDateMessage}
        animateYearScrolling={animateYearScrolling || true}
      />
    )
  }
}

export default TimePicker;
