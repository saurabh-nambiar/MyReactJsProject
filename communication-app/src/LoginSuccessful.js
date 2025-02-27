import Nav from "./Nav";


function LoginSuccessful(props) {
    const { email } = JSON.parse(localStorage.getItem("loggedInUser"));
   
    return (
        <div>
            <Nav />
            <h2 className="row justify-content-center">Login Successful</h2>
            <div className="row justify-content-center">Welcome ! {email} </div>
        </div>);
}

export default LoginSuccessful;