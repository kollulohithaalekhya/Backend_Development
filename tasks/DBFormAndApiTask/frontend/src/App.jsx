import { useState } from "react";
import "./App.css";
import Login from "./LoginForm";
import Cards from "./Cards";
import UpdateCard from "./UpdateCards";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cardDetails, setCardDetails] = useState(null);

  const handleLogin = (details) => {
    setIsLoggedIn(true);
    setCardDetails(details);
  };

  const handleUpdate = (updatedDetails) => {
    setCardDetails(updatedDetails);
  };

  return (
    <>
      {!isLoggedIn ? (
        <Login onLogin={handleLogin} />
      ) : (
        <>
          <Cards details={cardDetails} />
          <UpdateCard onUpdate={handleUpdate} />
        </>
      )}
    </>
  );
}

export default App;
