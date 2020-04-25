import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import * as styled from './styles';

const Calendar = props => {
  const DAYS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const DAYS_LEAP = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const DAYS_OF_THE_WEEK = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
  const MONTHS = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];

  const getStartDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const today = new Date();
  const [date, setDate] = useState(today);
  const [day, setDay] = useState(date.getDate());
  const [month, setMonth] = useState(date.getMonth());
  const [year, setYear] = useState(date.getFullYear());
  const [startDay, setStartDay] = useState(getStartDayOfMonth(date));
  const [range, setRange] = useState([]);

  const isLeapYear = (year) => {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
  };

  useEffect(() => {
    setDay(date.getDate());
    setMonth(date.getMonth());
    setYear(date.getFullYear());
    setStartDay(getStartDayOfMonth(date));
  }, [date]);

  useEffect(() => {
    getStreak();
  }, [month, props.posts]);

  const days = isLeapYear ? DAYS_LEAP : DAYS;

  const getStreak = () => {
    let days = [];
    props.posts.map(post => {
      if(month === new Date(post.createdAt).getMonth() && year === new Date(post.createdAt).getFullYear()) {
        let dayToInclude = days.includes(new Date(post.createdAt).getDate()) ? null: new Date(post.createdAt).getDate();
        if(dayToInclude != null) {
          days.push(dayToInclude);
        }
      }
    });
    setRange(days);
  };

  const renderCalendar = () => {
    console.log(range);
    return(
      <styled.Frame>
        <styled.Header>
          <styled.Button onClick={() => setDate(new Date(year, month - 1, day))}>
            <styled.LeftArrowIcon />
          </styled.Button>
          <div>
            {MONTHS[month]} {year}
          </div>
          <styled.Button onClick={() => setDate(new Date(year, month + 1, day))}>
            <styled.RightArrowIcon />
          </styled.Button>
        </styled.Header>
        <styled.Body>
          {DAYS_OF_THE_WEEK.map((d, index) => (
            <styled.Day heading key={index}>
              <strong>{d}</strong>
            </styled.Day>
          ))}
          {Array(days[month] + (startDay - 1))
            .fill(null)
            .map((_, index) => {
              const d = index - (startDay - 2);

              const singleStreak = !range.includes(d-1) && range.includes(d) && !range.includes(d+1);
              const rangeStart = !range.includes(d-1) && range.includes(d) && range.includes(d+1);
              const rangeMiddle = range.includes(d-1) && range.includes(d) && range.includes(d+1);
              const rangeEnd = range.includes(d-1) && range.includes(d) && !range.includes(d+1);

              return (
                <styled.Day
                  key={index}
                  isToday={d === today.getDate()}
                  isSelected={d === day}
                  isSingleStreak={ singleStreak }
                  isRangeStart={ rangeStart }
                  isRangeMiddle={ rangeMiddle }
                  isRangeEnd={ rangeEnd }
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

  return(
    renderCalendar()
  );
};

const mapStateToProps = state => {
  return{
    posts: state.projects.posts
  }
};

export default connect(mapStateToProps)(Calendar);