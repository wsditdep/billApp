import { useEffect, useState } from "react";
import logo from "../../assets/images/logo.svg";
import { useDispatch } from "react-redux";
import { clearError, loadUser, login } from "../state/actions/userAction";
import { ToastContainer, toast } from 'react-toastify';
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const { isAuthenticated, error, loading } = useSelector(state => state.user);

    const [userVal, setUserVal] = useState({
        username: "",
        password: ""
    });

    const notifyError = (message) => toast.error(message);

    const onChangeHandler = (e) => {
        setUserVal({ ...userVal, [e.target.name]: e.target.value });
    }

    const proceedToLogin = () => {
        if (!userVal.username || !userVal.password) {
            return notifyError("Username or password is missing!", "success");
        }

        dispatch(login(userVal.username, userVal.password));
    }


    useEffect(() => {
        if (isAuthenticated) {
            navigate("/dashboard");
        } else {
            loadUser();
        }

        if (error) {
            notifyError(error);
            dispatch(clearError());
        }

    }, [dispatch, navigate, isAuthenticated, error]);
    return (
        <>
            <ToastContainer autoClose={2000} />
            <section className="auth-section">
                <div className="auth-wrapper">
                    <div className="auth-logo-wrapper">
                        <img src={logo} alt="logo" />
                    </div>
                    <div className="auth-heading">
                        <h3>BILLING SYSTEM</h3>
                    </div>
                    <div className="global-form">
                        <form onSubmit={(e) => e.preventDefault()}>
                            <div className="global-form-input">
                                <label><i className="fa fa-user"></i> Username</label>
                                <input
                                    type="text"
                                    placeholder="Username"
                                    name="username"
                                    value={userVal.username}
                                    onChange={(e) => onChangeHandler(e)}
                                />
                            </div>
                            <div className="global-form-input">
                                <label><i className="fa fa-lock"></i> Password</label>
                                <input
                                    type="password"
                                    placeholder="Password"
                                    name="password"
                                    value={userVal.password}
                                    onChange={(e) => onChangeHandler(e)}
                                />
                            </div>
                            <div className="submit-btn">
                                <button
                                    onClick={() => proceedToLogin()}
                                >
                                    {
                                        loading
                                            ?
                                            <i className="fa fa-spinner"></i>
                                            :
                                            <>LOGIN</>
                                    }
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login;