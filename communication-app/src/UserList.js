import React from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";


class UserList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: JSON.parse(localStorage.getItem("users")),
            index: null
        }
    }


    setIndex(index){
        //console.log("Active Index " + index );
        this.setState({
            users: JSON.parse(localStorage.getItem("users")),
            index: index
        })


    }


    deleteUser() {
        //console.log(this.state);
        let { users } = this.state;
        let { index } = this.state;


        //console.log(users + " : "+ index);
        users.splice(index,1);


        localStorage.setItem("users", JSON.stringify(users));


        this.setState({
            users: users,
            index: null
        })
    };


    render() {
        return (
            <div>
                <Nav />
                <h1>Users</h1>
                <table className="table table-bordered table-hover">
                    <thead className=".thead-light">
                        <tr>
                            <th>Name</th>
                            <th>User Email Id</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.users.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.fullName}</td>
                                    <td>{item.email}</td>
                                    <td>
                                        <div className="btn">
                                            <Link to={`/editUser/${index}`}>Edit</Link>
                                        </div>|
                                        <div className="btn" data-bs-toggle="modal" data-bs-target="#deleteModal">
                                            <Link onClick={() => this.setIndex(index)}>Delete</Link>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>




                <div className="modal fade" id="deleteModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">Confirm User Deletion</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                Are you sure ?
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => this.deleteUser()}>OK</button>
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default UserList;