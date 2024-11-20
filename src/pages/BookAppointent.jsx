import React, { useState } from "react";
import "./BookAppointment.css";

const BookAppointment = () => {
  const [formData, setFormData] = useState({
    department: "Aerospace Medicine",
    doctor: "David Smith",
    name: "",
    email: "",
    phone: "",
    date: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Appointment Data:", formData);
    alert("Appointment Submitted!");
  };

  return (
    <div className="appointment-container">
      {/* Left Section */}
      <div className="left-section">
        <h3>Medical & General Care!</h3>
        <h1>We're Here For You</h1>
        <p>
        Transform healthcare engagement by seamlessly integrating proactive patient-centered solutions with innovative technology. Revolutionize care delivery through personalized insights, enhancing efficiency and accessibility beyond traditional boundaries.
        </p>
        <ul>
          <li>✔ 99% success rate</li>
          <li>✔ Free Consultation</li>
          <li>✔ 100% Confidential</li>
          <li>✔ Expert serviceable agents</li>
          <li>✔ Affordable Fees</li>
          <li>✔ Over 50 years experience</li>
        </ul>
        <button className="info-button">Get More Info</button>
      </div>

      {/* Right Section */}
      <div className="right-section">
        <h2>Book An Appointment</h2>
        <p>Please Call Us To Ensure</p>
        <form className="appointmentForm" onSubmit={handleSubmit}>
          <select
            name="department"
            value={formData.department}
            onChange={handleChange}
          >
            <option>Aerospace Medicine</option>
            <option>Cardiology</option>
            <option>Neurology</option>
          </select>
          <select
            name="doctor"
            value={formData.doctor}
            onChange={handleChange}
          >
            <option>David Smith</option>
            <option>Jane Doe</option>
          </select>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
          />
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Your Phone"
          />
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
          <button type="submit">Make Appointment</button>
        </form>
      </div>
    </div>
  );
};

export default BookAppointment;
