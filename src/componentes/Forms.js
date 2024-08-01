import React from "react";

const Forms = (props) => {
    const { inputs, setInputs, errors, setErrors } = props;

    const validate = (name, value) => {
        let error = "";
        if (name === "firstName" || name === "lastName") {
            if (value.length < 2) {
                error = "Field must have at least 2 characters.";
            }
        }
        if (name === "email") {
            if (value.length < 5) {
                error = "Field must have at least 5 characters.";
            }
        }
        if (name === "password" || name === "confirmarPassword") {
            if (value.length < 8) {
                error = "Password must have at least 8 characters.";
            } else if (name === "confirmarPassword" && value !== inputs.password) {
                error = "Passwords must match.";
            }
        }
        return error;
    };

    const onChange = (e) => {
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name]: value
        });
        setErrors({
            ...errors,
            [name]: validate(name, value)
        });
    };

    return (
        <form>
            <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input onChange={onChange} type="text" name="firstName" value={inputs.firstName} />
                {errors.firstName && <p className="error">{errors.firstName}</p>}
            </div>
            <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input onChange={onChange} type="text" name="lastName" value={inputs.lastName} />
                {errors.lastName && <p className="error">{errors.lastName}</p>}
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input onChange={onChange} type="text" name="email" value={inputs.email} />
                {errors.email && <p className="error">{errors.email}</p>}
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input onChange={onChange} type="password" name="password" value={inputs.password} />
                {errors.password && <p className="error">{errors.password}</p>}
            </div>
            <div className="form-group">
                <label htmlFor="confirmarPassword">Confirmar Password</label>
                <input onChange={onChange} type="password" name="confirmarPassword" value={inputs.confirmarPassword} />
                {errors.confirmarPassword && <p className="error">{errors.confirmarPassword}</p>}
            </div>
        </form>
    );
}

export default Forms;
