import React from "react";
import { useParams, useNavigate } from "react-router-dom";


function EditUser() {
    let { id } = useParams();
    const navigate = useNavigate();


    let fullName = JSON.parse(localStorage.getItem('users'))[id].fullName;
    let email = JSON.parse(localStorage.getItem('users'))[id].email;
    let password = JSON.parse(localStorage.getItem('users'))[id].password;


    const save = (event) => {
        let updatedUser = {
            fullName: event.target.elements.fullName.value,
            email: event.target.elements.email.value,
            password: password
        }
        let users = JSON.parse(localStorage.getItem('users')) || [];
        users[id] = updatedUser;
        localStorage.setItem('users', JSON.stringify(users));
        navigate("/usermgt");
    }


    return (<div>
        <h2>Edit User Information</h2>
        <form onSubmit={save}>
            <div className="form-group row">
                <div className="col-auto">
                    <label>Full Name:</label>
                </div>
                <div className="col-auto">
                    <input type="text" name="fullName" defaultValue={fullName} required />
                </div>
            </div>


            <div className="form-group row mt-1">
                <div className="col-auto">
                    <label>Email :</label>
                </div>
                <div className="col-auto">
                    <input type="email" name="email" defaultValue={email} required />
                </div>
            </div>


            <div className="form-group mt-1">
                <button type="submit" className="btn btn-outline-primary">Save</button>
            </div>
        </form>


    </div>);
}


export default EditUser;