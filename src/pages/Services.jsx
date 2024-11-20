import React from 'react';
import './Services.css'; 

const servicesData = [
  {
    image: 'path-to-image1.jpg', 
    title: 'Doctor Availability & Scheduling',
    description: 'Real-time availability of doctors for appointments and splimfied scheduling interface',
  },
  {
    image: 'path-to-image2.jpg',
    title: 'Medical Records Access',
    description: 'A secure portal where user can access their medical records,prescriptions,and test result',
  },
  {
    image: 'path-to-image3.jpg',
    title: 'Medication Reminders',
    description: 'Notifications for upcoming medication schedules and refills.',
  },
  {
    image: 'path-to-image3.jpg',
    title: 'Telemedicine',
    description: 'Video call feature for virtual consultations with health professionals.',
  },
  {
    image: 'path-to-image3.jpg',
    title: 'Emergency Contact & Support',
    description: 'Access to urgent care and emergency contact or hotline incase of immediate health needs.',
  },
  {
    image: 'path-to-image3.jpg',
    title: 'Health Insights & Tips',
    description: 'Personlized health articles and lifestyle tips based on user history and health goals.',
  },
  {
    image: 'path-to-image3.jpg',
    title: 'Symptom Checker',
    description: 'A quick symptom checker to guide user on weather they should consult a doctor with link to relevant services',
  },
];

const Services = () => {
  return (
    <div className="services">
      <h2 className="services-title">Amazing Services</h2>
      <p className="services-description">
      Seamlessly integrate digital healthcare solutions that empower patients with on-demand consultations, holistic health record access, and a unified health journey—driving proactive, patient-centered care that adapts to evolving health landscapes and optimizes clinic efficiency..
      </p>
      <div className="services-cards">
        {servicesData.map((service, index) => (
          <div key={index} className="service-card">
            <img src={service.image} alt={service.title} className="service-image" />
            <div className="service-content">
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <a href="#" className="service-link">Read More →</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
