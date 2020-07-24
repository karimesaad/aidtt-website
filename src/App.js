import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import ContactForm from "./components/ContactForm/ContactForm";
import QuienesSomos from "./components/QuienesSomos/QuienesSomos";
import Cursos from "./components/Cursos/Cursos";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <QuienesSomos />
      <Cursos />
      <ContactForm />
    </div>
  );
}

export default App;
