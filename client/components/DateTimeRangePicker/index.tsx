/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { ReactElement, useEffect, useState } from 'react';
import {
  format,
  startOfWeek,
  addDays,
  subDays,
  startOfMonth,
  endOfMonth,
  endOfWeek,
  isSameMonth,
  isSameDay,
  subMonths,
  addMonths,
  isBefore,
} from 'date-fns';

import { ChevronLeft, ChevronRight } from 'components/Icons';

const DateTimeRangePicker = (): ReactElement => {
  const [todayDate, setTodayDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [activeDate, setActiveDate] = useState(new Date());

  const getWeekDaysNames = () => {
    const weekStartDate = startOfWeek(activeDate);
    const weekDays = [];
    for (let day = 0; day < 7; day += 1) {
      weekDays.push(
        <div className="flex items-center justify-center text-[#676767] text-xs uppercase font-basis-grotesque w-[39px]">
          <small>{format(addDays(weekStartDate, day), 'EEEEEE')}</small>
        </div>
      );
    }
    return <div className="grid grid-cols-7 mt-5 mb-4 px-1">{weekDays}</div>;
  };

  /**
   *
   * @param date
   * @param sD selected date
   * @param aD active date
   * @returns
   */
  const generateDatesForCurrentWeek = (date: any, sD: any, aD: any) => {
    let currentDate = date;
    const week = [];
    console.log(format(currentDate, 'YYY-MM-dd'));
    console.log(format(aD, 'YYY-MM-dd'));
    console.log(
      isBefore(
        new Date(format(currentDate, 'YYY-MM-dd')),
        new Date(format(aD, 'YYY-MM-dd'))
      )
    );
    console.log('---');
    for (let day = 0; day < 7; day += 1) {
      const cloneDate = currentDate;
      if (isSameMonth(currentDate, aD)) {
        if (isBefore(currentDate, subDays(todayDate, 1))) {
          week.push(
            <div className="flex items-center justify-center rounded-full text-[#c7c7c7] font-basis-grotesque font-medium cursor-default w-[35px] h-[35px] text-base">
              {format(currentDate, 'd')}
            </div>
          );
        } else {
          week.push(
            <div
              className={`flex items-center justify-center rounded-full hover:border-2 text-black font-basis-grotesque font-medium hover:border-[#593cfb] cursor-pointer w-[35px] h-[35px] text-base ${
                isSameDay(currentDate, sD) ? 'border-2 border-[#593cfb]' : ''
              }
          ${isSameDay(currentDate, new Date()) ? '' : ''}`}
              onClick={() => {
                setSelectedDate(cloneDate);
              }}
            >
              {format(currentDate, 'd')}
            </div>
          );
        }
      } else {
        week.push(
          <div className="flex items-center justify-center rounded-full w-[39px] h-[30px]">
            {' '}
          </div>
        );
      }

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

  useEffect(() => {
    console.log(isBefore(new Date('2021-01-03'), new Date('2021-01-02')));
  }, []);

  return (
    <div className="p-5 w-[319px]">
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
