import axios from "axios";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';

const AddUser = ({ setIsAdd, fetchData }) => {

    const [loading, setLoading] = useState(false);
    const notifyError = (message) => toast.error(message);
    const notifySuccess = (message) => toast.success(message);

    const [userVal, setUserVal] = useState({
        username: "",
        role: "User",
        password: "",
        adminPasscode: ""
    });

    const onChangeHandler = (e) => {
        setUserVal({ ...userVal, [e.target.name]: e.target.value });
    }

    const addUser = async () => {
        if (!userVal.username) {
            return notifyError("Enter username!");
        }

        if (!userVal.role) {
            return notifyError("Enter role!");
        }

        if (!userVal.password) {
            return notifyError("Enter password!");
        }

        if (!userVal.adminPasscode) {
            return notifyError("Enter Admin Passcode!");
        }

        if (userVal.adminPasscode !== "8372") {
            return notifyError("Invalid admin passcode!");
        }

        try {
            setLoading(true);

            const config = {
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Credentials": true,
                }
            };

            // let res;
            let link;
            if (userVal.role === "User") {
                link = `${process.env.REACT_APP_API_URL}/api/signup`;
            } else {
                link = `${process.env.REACT_APP_API_URL}/api/create-admin`;
            }

            const { username, password } = userVal;
            const res = await axios.post(link,
                { username, password },
                config,
                axios.defaults.withCredentials = true
            );

            if (res.status === 201) {
                setLoading(false);
                notifySuccess(res.data.message);
                setIsAdd(false);
                fetchData();
            } else {
                setLoading(false);
                notifyError("Something wrong while creating the users");
            }

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <ToastContainer autoClose={2000} />
            <div className="sub-operation-wrapper" onClick={() => setIsAdd(false)}>
                <div className="sub-operation-wrapper-inner" onClick={(e) => e.stopPropagation()}>
                    <div className="sub-operation-heading">
                        <h3>Add New User</h3>
                        <button onClick={() => setIsAdd(false)}>Close</button>
                    </div>
                    <div className="global-form" onSubmit={(e) => e.preventDefault()}>
                        <form>
                            <div className="global-form-input">
                                <label><i className="fa fa-user"></i> Username</label>
                                <input
                                    type="text"
                                    placeholder="Enter Username"
                                    name="username"
                                    value={userVal.username}
                                    onChange={(e) => onChangeHandler(e)}
                                />
                            </div>
                            <div className="global-form-input">
                                <label><i className="fa fa-lock"></i> Password</label>
                                <input
                                    type="password"
                                    placeholder="Enter Password"
                                    name="password"
                                    value={userVal.password}
                                    onChange={(e) => onChangeHandler(e)}
                                />
                            </div>
                            <div className="global-form-input">
                                <label><i className="fa fa-key"></i> Admin Passcode</label>
                                <input
                                    type="password"
                                    placeholder="Enter admin passcode"
                                    name="adminPasscode"
                                    value={userVal.adminPasscode}
                                    onChange={(e) => onChangeHandler(e)}

                                />
                            </div>
                            <div className="submit-btn">
                                <button
                                    onClick={() => addUser()}
                                    disabled={loading}
                                >
                                    {
                                        loading
                                            ?
                                            <i className="fa fa-spinner"></i>
                                            :
                                            "Proceed"
                                    }
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AddUser;