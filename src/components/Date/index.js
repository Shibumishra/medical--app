import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

function DatePickers(props) {
    const [startDate, setStartDate] = useState(new Date("2021-10-10"));
    return (
      <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
  );
}

export default DatePickers;