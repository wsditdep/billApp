import axios from "axios";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';

const UpdateUser = ({ setIsUpdate, fetchData, details }) => {

    const [loading, setLoading] = useState(false);
    const notifyError = (message) => toast.error(message);
    const notifySuccess = (message) => toast.success(message);

    const [userVal, setUserVal] = useState({
        userId: details._id,
        username: details.username,
        role: "User",
        password: "",
        accountStatus: details.accountStatus,
        adminPasscode: ""
    });

    const onChangeHandler = (e) => {
        setUserVal({ ...userVal, [e.target.name]: e.target.value });
    }

    const addUser = async () => {

        if (!userVal.role) {
            return notifyError("Enter role!");
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

            const { userId, password: newPassword, accountStatus } = userVal;
            const res = await axios.put(`${process.env.REACT_APP_API_URL}/api/update-user`,
                { userId, accountStatus, newPassword },
                config,
                axios.defaults.withCredentials = true
            );

            if (res.status === 200) {
                setLoading(false);
                notifySuccess(res.data.message);
                setIsUpdate(false);
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
            <div className="sub-operation-wrapper" onClick={() => setIsUpdate(false)}>
                <div className="sub-operation-wrapper-inner" onClick={(e) => e.stopPropagation()}>
                    <div className="sub-operation-heading">
                        <h3>Edit User</h3>
                        <button onClick={() => setIsUpdate(false)}>Close</button>
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
                                    readOnly
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
                                <label><i className="fa fa-bars"></i> Account Status</label>
                                <select
                                    name="accountStatus"
                                    value={userVal.accountStatus}
                                    onChange={(e) => onChangeHandler(e)}
                                >
                                    <option value="Active">Active</option>
                                    <option value="Block">Block</option>
                                    <option value="Expired">Expired</option>
                                </select>
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

export default UpdateUser;