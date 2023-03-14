import { useState, useEffect } from 'react';

function RealTimeDate() {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const timerID = setInterval(() => tick(), 1000);

        return function cleanup() {
            clearInterval(timerID);
        };
    });

    function tick() {
        setDate(new Date());
    }

    return (
        <h4>Date: {date.toLocaleDateString('id-ID', { month: 'long', day: 'numeric', year: 'numeric' })}</h4>
    );
}

export default RealTimeDate;
