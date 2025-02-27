import React from "react";
import Welcome from "./Welcome";
import Login from "./Login";
import LoginSuccessful from "./LoginSuccessful";
import Register from "./Register";
import RegisterSuccessful from "./RegisterSuccessful";
import ChatList from "./ChatList";
import UserList from "./UserList";
import EditUser from "./EditUser";
import DocumentList from "./DocumentList";
import Logout from "./Logout";
import NotFound from "./NotFound";
import { BrowserRouter, Route, Routes } from "react-router-dom";


class Main extends React.Component {

    render() {
        return (<div className="container-fluid">
            <BrowserRouter>
                <Routes>
                    <Route path="" element={<Welcome />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/login-success" element={<LoginSuccessful />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/registration-success" element={<RegisterSuccessful />} />
                    <Route path="/groupchat" element={<ChatList />} />
                    <Route path="/usermgt" element={<UserList />} />
                    <Route path="/editUser/:id" element={<EditUser />} />
                    <Route path="/docmgt" element={<DocumentList />} />
                    <Route path="/logout" element={<Logout />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </div>);
    }
}

export default Main;