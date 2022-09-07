import logo from "./logo.svg";
import "./App.css";
import * as React from "react";
import Button from "@mui/material/Button";
import NavBar from "./NavBar";
import RecipeReviewCard from "./cards";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <RecipeReviewCard></RecipeReviewCard>
      <Button variant="contained">Hello World</Button>
    </div>
  );
}

export default App;
