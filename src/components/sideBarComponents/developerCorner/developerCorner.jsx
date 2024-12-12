import React from "react";
import FirstHeader from "../../header/firstHeader/FirstHeader";
import { neededImages } from "../../../assets/assets";
import Footer from "../../footer/footer";

const DevelopersPage = () => {
  const developers = [
    {
      name: "Mayank Nayal",
      role: "Frontend Developer",
      photo: neededImages.mayank, 
    },
    {
      name: "Harsh",
      role: "Backend Developer",
      photo: "https://via.placeholder.com/150", 
    },
  ];

  return (
    <>
      <FirstHeader />
      <div style={styles.container}>
        <h1 style={styles.heading}>Meet the Developers</h1>
        <div style={styles.cardsContainer}>
          {developers.map((dev, index) => (
            <div key={index} style={styles.card}>
              <img
                src={dev.photo}
                alt={dev.name}
                style={styles.photo}
              />
              <h2 style={styles.name}>{dev.name}</h2>
              <p style={styles.role}>{dev.role}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

const styles = {
  container: {
    margin : "150px",
    textAlign: "center",
  },
  heading: {
    fontSize: "24px",
    marginBottom: "40px",
    color: "#333",
  },
  cardsContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "40px",
    flexWrap: "wrap",
  },
  card: {
    width: "300px",
    padding: "15px",
    textAlign: "center",
    borderRadius: "10px",
    backgroundColor: "#fff",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  photo: {
    width: "100%",
    height: "auto",
    borderRadius: "50%",
    marginBottom: "10px",
  },
  name: {
    fontSize: "18px",
    marginBottom: "5px",
    color: "#333",
  },
  role: {
    fontSize: "14px",
    color: "#555",
  },
};

export default DevelopersPage;
