/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { ReactElement, useState } from 'react';
import {
  format,
  startOfWeek,
  addDays,
  startOfMonth,
  endOfMonth,
  endOfWeek,
  isSameMonth,
  isSameDay,
  subMonths,
  addMonths,
} from 'date-fns';

import { ChevronLeft, ChevronRight } from 'components/Icons';

const DateTimeRangePicker = (): ReactElement => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [activeDate, setActiveDate] = useState(new Date());

  const getWeekDaysNames = () => {
    const weekStartDate = startOfWeek(activeDate);
    const weekDays = [];
    for (let day = 0; day < 7; day += 1) {
      weekDays.push(
        <div className="flex items-center justify-center">
          {format(addDays(weekStartDate, day), 'E')}
        </div>
      );
    }
    return <div className="grid grid-cols-7">{weekDays}</div>;
  };

  const generateDatesForCurrentWeek = (date: any, sD: any, aD: any) => {
    let currentDate = date;
    const week = [];
    for (let day = 0; day < 7; day += 1) {
      const cloneDate = currentDate;
      week.push(
        <div
          className={`flex items-center justify-center ${
            isSameMonth(currentDate, aD) ? '' : 'text-[#9e9e9e]'
          } ${
            isSameDay(currentDate, sD)
              ? 'text-white bg-[#3366ff] border-[50%]'
              : ''
          }
          ${
            isSameDay(currentDate, new Date())
              ? 'bg-[#efefee] border-[50%]'
              : ''
          }`}
          onClick={() => {
            setSelectedDate(cloneDate);
          }}
        >
          {format(currentDate, 'd')}
        </div>
      );
      currentDate = addDays(currentDate, 1);
    }
    return <>{week}</>;
  };

  const getDates = () => {
    const startOfTheSelectedMonth = startOfMonth(activeDate);
    const endOfTheSelectedMonth = endOfMonth(activeDate);
    const startDate = startOfWeek(startOfTheSelectedMonth);
    const endDate = endOfWeek(endOfTheSelectedMonth);

    let currentDate = startDate;

    const allWeeks = [];

    while (currentDate <= endDate) {
      allWeeks.push(
        generateDatesForCurrentWeek(currentDate, selectedDate, activeDate)
      );
      currentDate = addDays(currentDate, 7);
    }

    return <div className="grid grid-cols-7">{allWeeks}</div>;
  };

  return (
    <div className="p-5 w-1/2">
      <div className="flex flex-row justify-between">
        <div
          className="cursor-pointer"
          onClick={() => setActiveDate(subMonths(activeDate, 1))}
        >
          <ChevronLeft size="10" />
        </div>
        <h2>{format(activeDate, 'MMMM yyyy')}</h2>
        <div
          className="cursor-pointer"
          onClick={() => setActiveDate(addMonths(activeDate, 1))}
        >
          <ChevronRight size="10" />
        </div>
      </div>
      {getWeekDaysNames()}
      {getDates()}
    </div>
  );
};

export default DateTimeRangePicker;
