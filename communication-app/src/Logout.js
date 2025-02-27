import React from "react";
import Welcome from "./Welcome";


class Logout extends React.Component {


    render() {
        return (<>
            <Welcome />
            <div>You have been logged out</div>
        </>)
    }
}


export default Logout;