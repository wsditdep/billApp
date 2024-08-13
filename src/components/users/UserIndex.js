import { useEffect, useMemo, useState } from "react";
import logo from "../../assets/images/logo.svg";
import { Link } from "react-router-dom";
import AddUser from "./AddUser";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
// import moment from "moment";
import UpdateUser from "./UpdateUser";
import { logout } from "../state/actions/userAction";

import { io } from "socket.io-client";

import { ToastContainer, toast } from 'react-toastify';


const UserIndex = () => {
    const socket = useMemo(() => io(process.env.REACT_APP_API_URL), []);

    const dispatch = useDispatch();

    const notify = (message) => toast.success(message, {
        containerId: 'success-toast',
        style: {
            background: 'black',
            color: 'white',
        },
    });

    const [isAdd, setIsAdd] = useState(false);
    const [isUpdate, setIsUpdate] = useState(false);
    const [modalData, setModaldata] = useState("");

    const [list, setList] = useState([]);

    const { user } = useSelector(state => state.user);

    const proceedForUpdate = (data) => {
        setIsUpdate(true);
        setModaldata(data);
    }

    const fetchData = async () => {
        try {
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Credentials": true,
                }
            };

            const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/get-users`,
                config,
                axios.defaults.withCredentials = true
            );

            if (res.status === 200) {
                setList(res.data.users);
            } else {
                console.log("Something wrong while fetching the users!");
            }

        } catch (error) {
            console.log(error);
        }
    }

    const logoutHandler = () => {
        return dispatch(logout())
    }

    const logoutAllUser = () => {
        notify("All the user will be logout shortly!");
        socket.emit("logoutAllUser");
    }

    useEffect(() => {
        fetchData();

        if (user?.role !== "Admin") {
            logoutHandler();
        }

        socket.on("connect", () => {
            // console.log("New user joined", socket.id);
        });

        socket.on("logoutNow", () => {
            return dispatch(logout());
        });

        return () => {
            socket.off('logoutNow');
        };

    }, [dispatch]);
    return (
        <>
            <ToastContainer autoClose={2000} />
            {isUpdate ? <UpdateUser setIsUpdate={setIsUpdate} fetchData={fetchData} details={modalData} /> : <></>}
            {isAdd ? <AddUser setIsAdd={setIsAdd} fetchData={fetchData} /> : <></>}
            <section className="billing-manager-section">
                <div className="billing-manager-navbar">
                    <div className="billing-manager-navbar-childs">
                        <img src={logo} alt="logo" />
                        <h3>Hy, {user?.username ?? ""}</h3>
                    </div>
                    <div className="billing-manager-navbar-childs">
                        <button className="logout-btn" onClick={() => logoutHandler()}>Logout</button>
                    </div>
                </div>
                <div className="billing-table-wrapper">
                    <div className="billing-table">
                        <div className="billing-heading">
                            <div className="billing-heading-childs">
                                <h3>Users | <Link to="/dashboard">Back to system <i className="fa fa-arrow-right"></i></Link></h3>
                            </div>
                            <div className="billing-heading-childs">
                                <button onClick={() => setIsAdd(true)}>New User <i className="fa fa-plus"></i></button>
                                <button className="logout_btn" onClick={() => logoutAllUser()}>Logout All User <i className="fa fa-users"></i></button>
                            </div>
                        </div>
                        {/* <div className="filter-wrapper">
                            <div className="filter-childs">
                                <input
                                    placeholder="Search..."
                                    type="text"
                                />
                            </div>
                            <div className="filter-childs">
                                <select>
                                    <option value="">-- Filter user by role --</option>
                                    <option value="">User</option>
                                    <option value="">Admin</option>
                                </select>
                            </div>
                            <div className="filter-childs">
                                <select>
                                    <option value="">-- Filter user by account status --</option>
                                    <option value="">Active</option>
                                    <option value="">Block</option>
                                </select>
                            </div>
                            <div className="filter-childs">
                                <select>
                                    <option value="all">-- List per page --</option>
                                    <option value="">10</option>
                                    <option value="">20</option>
                                </select>
                            </div>
                        </div> */}
                        <div className="billing-body">
                            <table border="1">
                                <thead>
                                    <tr>
                                        <th>S.N</th>
                                        <th>Username</th>
                                        <th>User Role</th>
                                        <th>Account Status</th>
                                        <th>Created At</th>
                                        <th>Updated At</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        list?.map((data, index) => (
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{data?.username}</td>
                                                <td>{data?.role}</td>
                                                <td>{data?.accountStatus}</td>
                                                {/* <td className="include-date">{moment(data?.createdAt).format("Do MMM YYYY, h:mm a")}</td>
                                                <td className="include-date">{moment(data?.updatedAt).format("Do MMM YYYY, h:mm a")}</td> */}
                                                <td className="include-date">{data?.createdAt}</td>
                                                <td className="include-date">{data?.updatedAt}</td>
                                                <td className="include-action-btn">
                                                    <button className="action-edit" onClick={() => proceedForUpdate(data)}>Edit <i className="fa fa-pen"></i></button>
                                                    {/* <button className="action-delete" onClick={()=> deleteHandler()}>Delete <i className="fa fa-trash"></i></button> */}
                                                </td>
                                            </tr>
                                        )).reverse()
                                    }
                                </tbody>
                            </table>
                        </div>
                        {/* <div className="billing-footer">
                            <ul>
                                <li>Previous</li>
                                <li>1</li>
                                <li>2</li>
                                <li>3</li>
                                <li>Next</li>
                            </ul>
                        </div> */}
                    </div>
                </div>
            </section>
        </>
    )
}

export default UserIndex;