import React from 'react';

import Calendar from 'components/Calendar';
import {
  CalendarContainer,
  CalendarBackground
} from './styles';

const CalendarView = () => {
  return(
    <CalendarContainer>
      <CalendarBackground>
        <Calendar />
      </CalendarBackground>
    </CalendarContainer>
  );
};

export default CalendarView;