import React, { useEffect,useState } from 'react';
import "./Appointments.css";

export const Appointments = () => {
    const [appointments, setAppointments] = useState([])
    const [newAppointments, setNewAppointment] = useState({
        user_id: "",
        service_id: "",
        appointment_date: ""
    })

    useEffect(() => {
        console.log("tenemos apps")
    })

    return (
        <div>
            <input type= "date"/>
            <input type="time"/>
        </div>
    )
}