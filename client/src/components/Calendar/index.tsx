import * as React from "react";
// import dayjs, { Dayjs } from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

const CalendarComponent: React.FunctionComponent = () => {
    // const [value, setValue] = React.useState<Dayjs | null>(dayjs("2023-11-19"));

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DateCalendar", "DateCalendar"]}>
                {/* <DemoItem label="Uncontrolled calendar">
                    <DateCalendar defaultValue={dayjs("2022-04-17")} />
                </DemoItem> */}
                <DemoItem>
                    {/* <EventCalendar
                        sx={{ width: "100%" }}
                        value={value}
                        onChange={(newValue) => setValue(newValue)}
                    /> */}
                </DemoItem>
            </DemoContainer>
        </LocalizationProvider>
    );
    // <EventCalendar initialDate="2022-10-01" calendarData={calendarData} />
};

export default CalendarComponent;
