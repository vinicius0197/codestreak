import React, { useState, useEffect } from 'react';
import * as styled from './styles';

const Calendar = () => {
  const DAYS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const DAYS_LEAP = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const DAYS_OF_THE_WEEK = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
  const MONTHS = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

  const getStartDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };


  const today = new Date();
  const [date, setDate] = useState(today);
  const [day, setDay] = useState(date.getDate());
  const [month, setMonth] = useState(date.getMonth());
  const [year, setYear] = useState(date.getFullYear());
  const [startDay, setStartDay] = useState(getStartDayOfMonth(date));


  const isLeapYear = (year) => {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
  };

  useEffect(() => {
    setDay(date.getDate());
    setMonth(date.getMonth());
    setYear(date.getFullYear());
    setStartDay(getStartDayOfMonth(date));
  }, [date]);



  const days = isLeapYear ? DAYS_LEAP : DAYS;

  return(
    <styled.Frame>
      <styled.Header>
        <styled.Button onClick={() => setDate(new Date(year, month - 1, day))}>Prev</styled.Button>
        <div>
          {MONTHS[month]} {year}
        </div>
        <styled.Button onClick={() => setDate(new Date(year, month + 1, day))}>Next</styled.Button>
      </styled.Header>
      <styled.Body>
        {DAYS_OF_THE_WEEK.map(d => (
          <styled.Day key={d}>
            <strong>{d}</strong>
          </styled.Day>
        ))}
        {Array(days[month] + (startDay - 1))
          .fill(null)
          .map((_, index) => {
            const d = index - (startDay - 2);
            return (
              <styled.Day
                key={index}
                isToday={d === today.getDate()}
                isSelected={d === day}
                onClick={() => setDate(new Date(year, month, d))}
              >
                {d > 0 ? d : ''}
              </styled.Day>
            );
          })}
      </styled.Body>
    </styled.Frame>
  );
};

export default Calendar;