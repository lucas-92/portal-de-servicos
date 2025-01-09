import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ServiceList = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/services').then((response) => {
      setServices(response.data);
    });
  }, []);

  return (
    <div>
      <h1>Lista de Serviços</h1>
      <ul>
        {services.map((service) => (
          <li key={service.id}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <p>Preço: R${service.price}</p>
            <p>Usuário: {service.user.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceList;
