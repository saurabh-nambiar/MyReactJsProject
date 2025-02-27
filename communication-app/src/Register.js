import React from "react";
import { Navigate } from "react-router-dom";


class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false
        }
    }


    handleRegister = (event) => {
        const fullName = event.target.elements.fullName.value;
        const email = event.target.elements.email.value;
        const password = event.target.elements.password.value;
        const confirm_password = event.target.elements.confirmPassword.value;


        let isValid = true;
        if (fullName === "") {
            alert("Enter Full Name");
            isValid = false;
        }
        else if (email === "") {
            alert("Enter email");
            isValid = false;
        }
        else if (password === "") {
            alert("Enter password");
            isValid = false;
        }
        else if (password !== confirm_password) {
            alert("Password & confirm password do not match")
            isValid = false;
        }


        let users = localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")) : [];
        //console.log(users);




        for (let user of users) {
            if (user.email === email) {
                alert("Email id is already registered. Please register with new mail id");
                isValid = false;
            }
        }


        if (isValid) {
            let user = {
                fullName: fullName,
                email: email,
                password: password
            }


            users.push(user);
            let userStr = JSON.stringify(users);
            localStorage.setItem("users", userStr);


            this.setState({
                redirect: true
            });
        }


    }


    render() {
        const { redirect } = this.state; //Destructuring


        return (<div>
            {
                redirect && <Navigate to='../registration-success' />
            }
            <div className="container">
                <h2>Register</h2>
                <form onSubmit={this.handleRegister}>
                    <div className="row">
                        <div className="col-auto">
                            <label>Full Name:</label>
                        </div>
                        <div className="col-auto">
                            <input type="text" name="fullName" required placeholder="Enter your full name" />
                        </div>
                    </div>


                    <div className="form-group row mt-1">
                        <div className="col-auto">
                            <label >Email:</label>
                        </div>
                        <div className="col-auto">
                            <input type="email" name="email" required placeholder="Enter your email" />
                        </div>
                    </div>


                    <div className="form-group row mt-1">
                        <div className="col-auto">
                            <label>Password:</label>
                        </div>
                        <div className="col-auto">
                            <input type="password" name="password" required placeholder="Enter your password" />
                        </div>
                    </div>


                    <div className="form-group row mt-1">
                        <div className="col-auto">
                            <label>Confirm Password:</label>
                        </div>
                        <div className="col-auto">
                            <input type="password" name="confirmPassword" required placeholder="Confirm your password" />
                        </div>
                    </div>


                    <div className="form-footer mt-1">
                        <button type="submit" className="btn btn-primary">Register</button>
                    </div>
                </form>


            </div>
        </div>);
    }
}


export default Register;