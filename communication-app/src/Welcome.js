import React from "react";
import { Navigate } from "react-router-dom";


class Welcome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redirectToLogin: false,
            redirectToRegister: false
        };
    }


    login = () => {
        this.setState({
            redirectToLogin: true
        });
    }


    register = () => {
        this.setState({
            redirectToRegister: true
        });
    }


    render() {
        const { redirectToLogin } = this.state;
        const { redirectToRegister } = this.state;
        return (
            <div className="container-fluid">
                {
                    redirectToLogin && <Navigate to='/login' />
                }
                {
                    redirectToRegister && <Navigate to='/register' />
                }
                <h1 className="row justify-content-center">Welcome to Users Module</h1>
                <div>
                    <div className="row justify-content-center mt-4">Existing Users</div>
                    <div className="row justify-content-center">
                        <div className="col-auto btn btn-sm btn-outline-primary" onClick={this.login}>Login</div>
                    </div>
                    <div className="row justify-content-center mt-4">New Users</div>
                    <div className="row justify-content-center">
                        <div className="col-auto btn btn-sm btn-outline-primary" onClick={this.register}>Register</div>
                    </div>
                </div>
            </div>


        );
    }
}

export default Welcome;