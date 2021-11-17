/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { ReactElement, useState } from 'react';
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
  isAfter,
} from 'date-fns';
import { Popover } from '@headlessui/react';

import { ChevronLeft, ChevronRight, ChevronDown } from 'components/Icons';

const DateRangePicker = (): ReactElement => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [todayDate, setTodayDate] = useState(new Date());
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [activeDate, setActiveDate] = useState(new Date());
  const [endDate, setEndDate] = useState<Date>(addDays(new Date(), 4));

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
          let startDateCls = '';
          let isBetweenCls = '';
          let endDateCls = '';
          let alignmentBorderClas = '';
          if (isSameDay(currentDate, sD)) {
            if (isSameDay(sD, endDate))
              startDateCls =
                'border-double border-4 border-[#593cfb] text-[#593cfb] w-[35px]';
            else
              startDateCls =
                'border-l-2 border-t-2 border-b-2 border-[#593cfb] rounded-none rounded-tl-full rounded-bl-full text-[#593cfb] w-full';
          }
          if (
            isAfter(currentDate, subDays(sD, 1)) &&
            isBefore(currentDate, subDays(endDate, 0))
          )
            isBetweenCls = `border-[#593cfb] border-t-2 border-b-2 text-[#593cfb] rounded-none
              hover:before:absolute hover:before:border-2 hover:before:border-[#593cfb] hover:before:h-full hover:before:rounded-full hover:before:w-[32px]`;
          else
            startDateCls = `w-[35px] ${startDateCls} hover:border-2 hover:border-[#593cfb]`;

          if (isSameDay(currentDate, endDate))
            endDateCls =
              'border-r-2 border-t-2 border-b-2 border-[#593cfb] text-[#593cfb] rounded-none rounded-tr-full rounded-br-full';

          // Align before and the orignal left and right border for startn and end
          if (isSameDay(currentDate, sD))
            alignmentBorderClas =
              'hover:before:border-0 hover:before:border-r-2';
          if (isSameDay(currentDate, endDate))
            alignmentBorderClas =
              'hover:before:border-0 hover:before:border-l-2';

          week.push(
            <div
              className={`flex items-center relative justify-center rounded-full text-black font-basis-grotesque font-medium cursor-pointer h-[35px] text-base
              ${startDateCls}
              ${isBetweenCls}
              ${endDateCls}
              ${alignmentBorderClas}
              `}
              onClick={() => {
                setEndDate(cloneDate);
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
    const enddDate = endOfWeek(endOfTheSelectedMonth);

    let currentDate = startDate;

    const allWeeks = [];

    while (currentDate <= enddDate) {
      allWeeks.push(
        generateDatesForCurrentWeek(currentDate, selectedDate, activeDate)
      );
      currentDate = addDays(currentDate, 7);
    }

    return <div className="grid grid-cols-7 space-y-1">{allWeeks}</div>;
  };

  return (
    <Popover className="relative">
      <Popover.Button>
        <div className="font-basis-grotesque text-base font-medium flex flex-row gap-4 items-center">
          {format(selectedDate, 'dd/MM/yyyy')}
          <ChevronDown size="11" />
        </div>
      </Popover.Button>

      <Popover.Panel className="absolute top-10 -left-7 z-10 p-1 bg-white">
        <div className="p-5 w-[319px] ">
          <div className="flex flex-row items-center justify-between">
            <div
              className="cursor-pointer bg-[#f4f4f4] h-6 w-6 rounded-full flex items-center justify-center"
              onClick={() => setActiveDate(subMonths(activeDate, 1))}
            >
              <ChevronLeft size="12" />
            </div>
            <div className="font-basis-grotesque font-bold font-[16px]">
              {format(activeDate, 'MMMM yyyy')}
            </div>
            <div
              className="cursor-pointer bg-[#f4f4f4] h-6 w-6 rounded-full flex items-center justify-center"
              onClick={() => setActiveDate(addMonths(activeDate, 1))}
            >
              <ChevronRight size="12" />
            </div>
          </div>
          {getWeekDaysNames()}
          {getDates()}
        </div>
      </Popover.Panel>
    </Popover>
  );
};

export default DateRangePicker;
