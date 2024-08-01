import React, { useState } from "react";
import "./App.css";
import Forms from "./Forms";
import Result from "./Results";

function App() {
    const [state, setState] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmarPassword: ""
    });

    const [errors, setErrors] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmarPassword: ""
    });

    return (
        <div className="App">
            <Forms inputs={state} setInputs={setState} errors={errors} setErrors={setErrors} />
            <Result data={state} />
        </div>
    );
}

export default App;
