import { useNavigate } from "react-router-dom";


function Login() {


    const navigate = useNavigate();


    const handleSubmit = (event) => {
        event.preventDefault();
        let email = event.target.elements.email.value;
        let password = event.target.elements.password.value;
        let fullName = "";


        if (email === "")
            alert("Enter email");
        else if (password === "")
            alert("Enter password");


       


        let users = localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")) : [];


        let match = false;
        for (let user of users)
            if (user.email === email && user.password === password){
                match = true;
                fullName = user.fullName;
                break;
            }
               
        let loggedInUser = {
            email: email,
            fullName: fullName
        };


        if (match) {
            let loggedInUserStr = JSON.stringify(loggedInUser);
            localStorage.setItem("loggedInUser", loggedInUserStr);
            //console.log("Logged in user :" + localStorage.getItem("loggedInUser"))
            navigate('/login-success');
        } else {
            alert("Invalid user");
        }


    }


    return (
        <div className="container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="row g-3 mt-2">
                    <div className="col-auto">
                        <label>Email:</label>
                    </div>
                    <div className="col-auto">
                        <input type="email" name="email" required placeholder="Enter your email" />
                    </div>
                </div>
                <div className="row g-3 mt-1">
                    <div className="col-auto">
                        <label>Password:</label>
                    </div>
                    <div className="col-auto">
                        <input type="password" name="password" required placeholder="Enter your password" />
                    </div>
                </div>


                <div className="mt-2 form-group">
                    <button type="submit" className="btn btn-md btn-primary">Login</button>
                </div>
            </form>
        </div>);
}


export default Login;