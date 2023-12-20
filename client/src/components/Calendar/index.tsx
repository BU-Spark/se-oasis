import * as React from "react";
import dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

const CalendarComponent: React.FunctionComponent = () => {
    const today = new Date();
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DateCalendar", "DateCalendar"]}>
                <DateCalendar
                    defaultValue={dayjs(
                        `${today.getFullYear()}-${
                            today.getMonth() + 1
                        }-${today.getDate()}`
                    )}
                />
            </DemoContainer>
        </LocalizationProvider>
    );
};

export default CalendarComponent;
