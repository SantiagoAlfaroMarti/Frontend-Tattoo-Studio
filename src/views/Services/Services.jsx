import React, { useEffect, useState } from 'react';
import { CCard } from '../../Components/CCard/CCard';
import "./Services.css";

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
    <section className="services-section">
      <header className="services-header">
        <h1 className="services-heading">Our Services</h1>
      </header>
      <div className="services-list">
        {services.map((service) => (
          <article key={service.id} className="service-item">
            <h2 className="service-title">{service.service_name}</h2>
            <p className="service-details">{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Services;