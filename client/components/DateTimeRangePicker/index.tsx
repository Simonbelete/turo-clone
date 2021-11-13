import React, { ReactElement, useState } from 'react';
import { DateRangePicker, START_DATE, END_DATE } from 'react-nice-dates';
import { enGB } from 'date-fns/locale';

const DateTimeRangePicker = (): ReactElement => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  return (
    <DateRangePicker
      startDate={startDate as Date}
      endDate={endDate as Date}
      onStartDateChange={setStartDate}
      onEndDateChange={setEndDate}
      minimumDate={new Date()}
      minimumLength={1}
      format="dd MMM yyyy"
      locale={enGB}
    >
      {({ startDateInputProps, endDateInputProps, focus }) => (
        <div className="date-range">
          <input
            className={`input${focus === START_DATE ? ' -focused' : ''}`}
            {...startDateInputProps}
            placeholder="Start date"
          />
          {/* <span className="date-range_arrow" /> */}
          <input
            className={`input${focus === END_DATE ? ' -focused' : ''}`}
            {...endDateInputProps}
            placeholder="End date"
          />
        </div>
      )}
    </DateRangePicker>
  );
};

export default DateTimeRangePicker;
// function(currentDate: moment, today: moment, info: { range: start | end }) => (<span>a</span>)
