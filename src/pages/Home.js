import React from "react";
import { useAuth } from "../components/Authentication";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleButtonClick = () => {
    if (isAuthenticated) {
      navigate("/dashboard");
    } else {
      navigate("/login");
    }
  };

  return (
    <div>
      <h2>Home Page</h2>
      <button onClick={handleButtonClick}>{isAuthenticated ? "Go to Dashboard" : "Login"}</button>
    </div>
  );
};

export default Home;
