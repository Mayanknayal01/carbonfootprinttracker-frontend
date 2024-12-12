import React, { useState } from "react";
import FirstHeader from "../../header/firstHeader/FirstHeader";
import { QRCodeCanvas } from "qrcode.react"; // Updated import

const DonationPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    amount: "",
  });
  const [showQRCode, setShowQRCode] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowQRCode(true); // Show the QR code on form submission
  };

  return (
    <>
      <FirstHeader />
      <div style={styles.container}>
        <h1 style={styles.heading}>Support Our Carbon Footprint Tracker</h1>
        <p style={styles.description}>
          Help us create a sustainable future by supporting our project. Every contribution counts!
        </p>
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            style={styles.input}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            style={styles.input}
            required
          />
          <input
            type="number"
            name="amount"
            placeholder="Donation Amount (₹)"
            value={formData.amount}
            onChange={handleChange}
            style={styles.input}
            required
          />
          <button type="submit" style={styles.button}>
            Donate Now
          </button>
        </form>
        {showQRCode && (
          <div style={styles.qrContainer}>
            <h3>Scan the QR Code to Complete Your Donation</h3>
            <QRCodeCanvas
              value={`upi://pay?pa=mayanknayal5306069-2@okaxis&pn=${formData.name}&am=${formData.amount}&cu=INR`}
              size={200}
              level="H"
              includeMargin={true}
            />
          </div>
        )}
      </div>
    </>
  );
};

const styles = {
  container: {
    maxWidth: "500px",
    margin: "100px auto",
    padding: "20px",
    textAlign: "center",
    backgroundColor: "#f4f4f9",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  heading: {
    fontSize: "24px",
    marginBottom: "10px",
    color: "#333",
  },
  description: {
    fontSize: "16px",
    marginBottom: "20px",
    color: "#555",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  input: {
    padding: "10px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    width: "100%",
  },
  button: {
    padding: "10px",
    fontSize: "16px",
    color: "#fff",
    backgroundColor: "#4CAF50",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  qrContainer: {
    marginTop: "20px",
    textAlign: "center",
  },
};

export default DonationPage;
