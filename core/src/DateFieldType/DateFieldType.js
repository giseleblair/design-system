import React, { Component } from "react";
import DatePicker from "react-datepicker";
import PropTypes from "prop-types";
import moment from "moment";

import styles from "./DateFieldType.less";
import "react-datepicker/dist/react-datepicker-cssmodules.css";

export class DateFieldType extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: moment()
    };
  }
  componentDidMount() {
    if (this.props.default) {
      this.setState({ date: moment(this.props.default) });
    }
  }
  onChange = date => {
    if (this.props.callback) {
      this.props.callback(moment(date).format());
    }
    this.setState({
      date: date
    });
  };
  render() {
    return (
      <article className={styles.DateFieldType}>
        <div className={styles.DateFieldTypeLabel}>
          <label>{this.props.label}</label>
        </div>
        <DatePicker
          {...this.props}
          onChange={this.onChange}
          selected={this.state.date}
        />
      </article>
    );
  }
}
