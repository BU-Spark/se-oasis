import React, { useState } from "react";
import Calendar from "react-calendar";

const CalendarComponent: React.FunctionComponent = () => {
    const [date, setDate] = useState(new Date());
    const onChange = (selectedDate: Date) => {
        setDate(selectedDate);
    };
    return (
        <div>
            <h2> Calendar </h2>
            <Calendar onChange={onChange} value={date} />
        </div>
    );
};

export default CalendarComponent;
