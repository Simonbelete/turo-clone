import React, { ReactElement, useState } from 'react';
import { DateRangePicker } from 'react-dates';
import moment, { Moment } from 'moment';

const DateTimeRangePicker = (): ReactElement => {
  const [date, setDate] = useState<Moment[] | null[]>([moment(), moment()]);
  return (
    <div className="flex flex-row">
      <DateRangePicker
        startDate={null}
        endDate={null}
        // onDatesChange={({ startDate, endDate }) =>
        //   setDate([])
        // }
      />
    </div>
  );
};

export default DateTimeRangePicker;
// function(currentDate: moment, today: moment, info: { range: start | end }) => (<span>a</span>)
