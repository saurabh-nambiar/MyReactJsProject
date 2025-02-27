import Nav from "./Nav";


function ChatList() {
    const { fullName } = JSON.parse(localStorage.getItem('loggedInUser'));


    return (
        <div>
            <Nav />
            <h2 className="row justify-content-center">Group Chat</h2>
            <textarea className="form-control" rows="15" disabled></textarea>
            <div className="row mt-1 justify-content-center">
                <div className="col-auto">
                    <label className="fw-bold">{ fullName } </label>
                </div>
                <div className="col-auto">
                    <input type="text" className="" name="message" required placeholder="Enter your message" />
                </div>
                <div className="col-auto">
                    <button type="submit" className="btn btn-sm btn-outline-primary">Send</button>
                </div>
                <div className="col-auto">
                    <button type="submit" className="btn btn-sm btn-outline-primary">Refresh</button>
                </div>
            </div>
        </div>);
}


export default ChatList;