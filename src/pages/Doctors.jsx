import React from "react";
import "./Doctors.css";

const doctorsData = [
  {
    name: "Vivi Marian",
    specialization: "Anesthesiologists",
    description:
      "Conceptualize user-centric web-readiness via economically sound e-services. Interactively coordinate next-generation.",
    phone: "+592 2015 20156",
    email: "info.example@mail.com",
    image: "doctor1.jpg", // Replace with the actual image path
  },
  {
    name: "Farhan Moris",
    specialization: "Cardiovascular",
    description:
      "Conceptualize user-centric web-readiness via economically sound e-services. Interactively coordinate next-generation.",
    phone: "+592 2015 20156",
    email: "info.example@mail.com",
    image: "doctor2.jpg", // Replace with the actual image path
  },
  {
    name: "Jerzzy Lamot",
    specialization: "Dermatologists",
    description:
      "Conceptualize user-centric web-readiness via economically sound e-services. Interactively coordinate next-generation.",
    phone: "+592 2015 20156",
    email: "info.example@mail.com",
    image: "doctor3.jpg", // Replace with the actual image path
  },
];

const Doctors = () => {
  return (
    <div className="doctors-container">
      <div className="meetOurDoctor">
        <h3>Medical & General Care!</h3> 
        <h1>Meet Our Doctors</h1>
        <p>
          Proactively revolutionize granular customer service after pandemic <br/>
          internal or "organic"sources proactive human capital rather.
        </p>
        <div className="doctors-list">
        {doctorsData.map((doctor, index) => (
          <div key={index} className="doctor-card">
            <img
              src={doctor.image}
              alt={doctor.name}
              className="doctor-image"
            />
            <h3>{doctor.name}</h3>
            <h4>{doctor.specialization}</h4>
            <p>{doctor.description}</p>
            <p>
              <strong>📞 {doctor.phone}</strong>
            </p>
            <p>
              <strong>📧 {doctor.email}</strong>
            </p>
          </div>
        ))}
      </div>
      
      </div>
    </div>
  );
};

export default Doctors;
