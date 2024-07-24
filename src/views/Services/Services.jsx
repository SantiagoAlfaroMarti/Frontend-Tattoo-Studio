import React, { useEffect, useState } from 'react';
import { CCard } from '../../Components/CCard/CCard.jsx';

export const Services = () => {
    const [services, setServices] = useState([])
    const passport = JSON.parse(localStorage.getItem("passport"))
    useEffect(() => {
        console.log('UseEffect')
        fetch('http://localhost:4000/api/services')
            .then(res => {
                return res.json();
            })
            .then(res => {
                setServices(res.data)
                console.log(res);
            })
            .catch(e => {
                console.log(e);
            })
    }, [])

    return (
        <>
            <h1>Services</h1>
            {
                services.map((service) => (
                    <CCard
                        key={service.id}
                        name={service.service_name}
                        description={service.description}
                    />
                )
                )
            }
        </>
    )
}