import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Head from "./components/Head";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { ReducerButtons } from "./components/ReducerButtons";

function App() {
  return (
    <div className="App">
      <Head title="Wow props!" isActive={true} />
      <header className="App-header">
        <Button
          onClick={e => {
            e.preventDefault();
            console.log(e.target);
          }}
        >
          <img src={logo} className="App-logo" alt="logo" />
        </Button>
        <Input />
        <ReducerButtons />
      </header>
    </div>
  );
}

export default App;
