import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const DatePickerComponent = () => {
    const [date, setDate] = useState(new Date());

    return (
        <div>
        {/* <h1>Pilih Tanggal</h1> */}
            <Calendar className="rounded-2xl shadow border-0 p-5 font-sans w-full"
            onChange={setDate}
            value={date}
            />
        {/* <p>Tanggal yang dipilih: {date.toDateString()}</p> */}
        </div>
    );
};

export default DatePickerComponent;
