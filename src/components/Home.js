import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import FirstPage from "./subpages/FirstPage";
import SecondPage from "./subpages/SecondPage";
import ThirdPage from "./subpages/ThirdPage";
import FourthPage from "./subpages/FourthPage";
import FifthPage from "./subpages/FifthPage";
import SixthPage from "./subpages/SixthPage";
import SeventhPage from "./subpages/SeventhPage";
import EighthPage from "./subpages/EighthPage";
import NinthPage from "./subpages/NinthPage";
import TenthPage from "./subpages/TenthPage";
import EleventhPage from "./subpages/EleventhPage";
import TwelvethPage from "./subpages/TwelvethPage";
import ThirteenPage from "./subpages/ThirteenPage";
import FourteenPage from "./subpages/FourteenPage";
import FifteenPage from "./subpages/FifteenPage";
import SixteenthPage from "./subpages/SixteenthPage";
import SeventeenthPage from "./subpages/SeventeenthPage";
import view1 from "../assets/images/views/view1.png";
import view2 from "../assets/images/views/view2.png";
import view3 from "../assets/images/views/view3.png";
import view4 from "../assets/images/views/view4.png";
import view5 from "../assets/images/views/view5.png";
import view6 from "../assets/images/views/view6.png";
import view7 from "../assets/images/views/view7.png";
import view8 from "../assets/images/views/view8.png";
import view9 from "../assets/images/views/view9.png";
import view10 from "../assets/images/views/view10.png";
import view11 from "../assets/images/views/view11.png";
import view12 from "../assets/images/views/view12.png";
import view13 from "../assets/images/views/view13.png";
import view14 from "../assets/images/views/view14.png";
import view15 from "../assets/images/views/view15.png";
import view16 from "../assets/images/views/view16.png";
import view17 from "../assets/images/views/view17.png";
import view18 from "../assets/images/views/view18.png";
import view19 from "../assets/images/views/view19.png";
import view20 from "../assets/images/views/view20.png";
import view21 from "../assets/images/views/view21.png";
import view22 from "../assets/images/views/view22.png";
import view23 from "../assets/images/views/view23.png";
import view24 from "../assets/images/views/view24.png";
import view25 from "../assets/images/views/view25.png";
import view26 from "../assets/images/views/view26.png";
import view27 from "../assets/images/views/view27.png";
import view28 from "../assets/images/views/view28.png";
import view29 from "../assets/images/views/view29.png";
import view30 from "../assets/images/views/view30.png";
import view31 from "../assets/images/views/view31.png";
import view32 from "../assets/images/views/view32.jpg";
import view33 from "../assets/images/views/view33.png";
import view34 from "../assets/images/views/view34.png";
import view35 from "../assets/images/views/view35.png";
import view36 from "../assets/images/views/view36.png";
import view37 from "../assets/images/views/view37.png";
import view38 from "../assets/images/views/view38.png";
import view39 from "../assets/images/views/view39.png";
import view40 from "../assets/images/views/view40.png";
import view41 from "../assets/images/views/view41.png";
import view42 from "../assets/images/views/view42.png";
import view43 from "../assets/images/views/view43.png";
import view44 from "../assets/images/views/view44.png";
import view45 from "../assets/images/views/view45.png";
import view46 from "../assets/images/views/view46.png";
import view47 from "../assets/images/views/view47.png";
import view48 from "../assets/images/views/view48.png";
import view49 from "../assets/images/views/view49.png";
import view50 from "../assets/images/views/view50.png";
import view51 from "../assets/images/views/view51.png";
import view52 from "../assets/images/views/view52.png";
import view53 from "../assets/images/views/view53.png";
import view54 from "../assets/images/views/view54.png";
import view55 from "../assets/images/views/view55.png";
import view56 from "../assets/images/views/view56.png";
import view57 from "../assets/images/views/view57.png";
import view58 from "../assets/images/views/view58.png";
import view59 from "../assets/images/views/view59.png";
import view60 from "../assets/images/views/view60.png";
import view61 from "../assets/images/views/view61.png";
import view62 from "../assets/images/views/view62.png";
import view63 from "../assets/images/views/view63.png";
import view64 from "../assets/images/views/view64.png";
import view65 from "../assets/images/views/view65.png";
import view66 from "../assets/images/views/view66.png";
import view67 from "../assets/images/views/view67.png";
import view68 from "../assets/images/views/view68.png";
import view69 from "../assets/images/views/view69.png";
import view70 from "../assets/images/views/view70.png";
import view71 from "../assets/images/views/view71.png";
import view72 from "../assets/images/views/view72.png";
import view73 from "../assets/images/views/view73.png";
import view74 from "../assets/images/views/view74.png";
import view75 from "../assets/images/views/view75.png";
import view76 from "../assets/images/views/view76.png";
import view77 from "../assets/images/views/view77.png";
import view78 from "../assets/images/views/view78.png";
import view79 from "../assets/images/views/view79.png";
import view80 from "../assets/images/views/view80.png";
import view81 from "../assets/images/views/view81.png";
import view82 from "../assets/images/views/view82.png";
import view83 from "../assets/images/views/view83.png";
import view84 from "../assets/images/views/view84.png";
import view85 from "../assets/images/views/view85.png";
import view86 from "../assets/images/views/view86.png";
import EighteenthPage from "./subpages/EighteenthPage";
import NineteenthPage from "./subpages/NineteenthPage";
import TwentyPage from "./subpages/Twenty";
import TwentyOnePage from "./subpages/TwentyOnePage";
import TwentyTwoPage from "./subpages/TwentyTwoPage";
import TwentyThreePage from "./subpages/TwentyThreePage";
import TwentyFourPage from "./subpages/TwentyFourPage";
import TwentyFivePage from "./subpages/TwentyFivePage";
import TwentySixPage from "./subpages/TwentySixPage";
import TwentySevenPage from "./subpages/TwentySevenPage";
import TwentyEightPage from "./subpages/TwentyEightPage";
import TwentyNinePage from "./subpages/TwentyNinePage";
import ThirtyPage from "./subpages/ThirtyPage";
import ThirtyOnePage from "./subpages/ThirtyOnePage";
import ThirtyTowPage from "./subpages/ThirtyTwoPage";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "./state/actions/userAction";
import ThirtyThreePage from "./subpages/ThirtyThreePage";
import ThirtyFourPage from "./subpages/ThirtyFourPage";
import ThirtyFivePage from "./subpages/ThirtyFivePage";
import ThirtySixPage from "./subpages/ThirtySixPage";
import ThirtySevenPage from "./subpages/ThirtySevenPage";
import ThirtyEightPage from "./subpages/ThirtyEightPage";
import ThirtyNinePage from "./subpages/ThirtyNinePage";
import FourtyPage from "./subpages/FourtyPage";
import FourtyOnePage from "./subpages/FourtyOnePage";
import FourtyTwoPage from "./subpages/FourtyTwoPage";
import FourtyThreePage from "./subpages/FourtyThreePage";
import FourtyFourPage from "./subpages/FourtyFourPage";
import FourtyFivePage from "./subpages/FoutyFivePage";
import FourtySixPage from "./subpages/FourtySixPage";
import FourtySevenPage from "./subpages/FourtySevenPage";
import FourtyEightPage from "./subpages/FourtyEightPage";
import FourtyNinePage from "./subpages/FourtyNinePage";
import FiftyPage from "./subpages/FiftyPage";
import FiftyOnePage from "./subpages/FiftyOnePage";
import FiftyTwoPage from "./subpages/FiftyTwoPage";
import FiftyThreePage from "./subpages/FiftyThreePage";
import FiftyFourPage from "./subpages/FiftyFourPage";
import FiftyFivePage from "./subpages/FiftyFivePage";
import FiftySixPage from "./subpages/FiftySixPage";
import FiftySevenPage from "./subpages/FiftySevenPage";
import FiftyEightPage from "./subpages/FiftyEightPage";
import FiftyNinePage from "./subpages/FiftyNinePage";
import SixtyPage from "./subpages/SixtyPage";
import SixtyOnePage from "./subpages/SixtyOnePage";
import SixtyTwoPage from "./subpages/SixtyTwoPage";
import SixtyThreePage from "./subpages/SixtyThreePage";
import SixtyFourPage from "./subpages/SixtyFourPage";
import SixtyFivePage from "./subpages/SixtyFivePage";
import SixtySixPage from "./subpages/SixtySixPage";
import SixtySevenPage from "./subpages/SixtySevenPage";
import SixtyEightPage from "./subpages/SixtyEightPage";
import SixtyNinePage from "./subpages/SixtyNinePage";
import SeventyPage from "./subpages/SeventyPage";
import SeventyOnePage from "./subpages/SeventyOnePage";
import SeventyTwoPage from "./subpages/SeventyTwoPage";
import SeventyThreePage from "./subpages/SeventyThreePage";
import SeventyFourPage from "./subpages/SeventyFourPage";
import SeventyFivePage from "./subpages/SeventyFivePage";
import SeventySixPage from "./subpages/SeventySixPage";
import SeventySevenPage from "./subpages/SeventySevenPage";
import SeventyEightPage from "./subpages/SeventyEightPage";
import SeventyNinePage from "./subpages/SeventyNinePage";
import EightyPage from "./subpages/EightyPage";
import EightyOnePage from "./subpages/EightyOnePage";
import EightyTwoPage from "./subpages/EightyTwoPage";
import EightyThreePage from "./subpages/EightyThreePage";
import EightyFourPage from "./subpages/EightyFourPage";
import EightyFivePage from "./subpages/EightyFivePage";
import EightySixPage from "./subpages/EightySixPage";

const Home = () => {
    const [isOn, setIsOn] = useState(false);
    const dispatch = useDispatch();

    const { user } = useSelector(state => state.user);

    const handleIsOn = () => {
        return setIsOn(!isOn)
    }

    const logoutUser = () => {
        return dispatch(logout());
    }

    return (
        <>
            <section className="billing_wrapper">
                <div className="billing_parents">
                    <div className="billing_childs">
                        <div className="billing-logo-wrapper">
                            <div className="billing-logo">
                                <i className="fa fa-user"></i>
                            </div>
                        </div>
                        <h4>Welcome, {user?.username}</h4>
                        <h3>Quick Receipt <span>(V.3)</span></h3>
                        {
                            user?.role === "Admin"
                                ?
                                <Link to="/manage/userIndex">
                                    <button className="logout-btn">Open Dashboard</button>
                                </Link>
                                :
                                <></>
                        }
                        <button className="logout-btn" onClick={() => logoutUser()}>Logout</button>
                        <div className="sidebar-navs">
                            <div className="list-all-btn">
                                <button onClick={() => handleIsOn()}>List All Pages</button>
                            </div>
                            <ul>
                                <div className="sidebar-parent">
                                    <li>
                                        <Link to="/dashboard">
                                            <i className="fa fa-angle-right"></i>Mobile 1
                                            <div className="image-holder">
                                                <img src={view1} alt="holder" />
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/dashboard/secondPage">
                                            <i className="fa fa-angle-right"></i>Mobile 2
                                            <div className="image-holder">
                                                <img src={view2} alt="holder" />
                                            </div>
                                        </Link>
                                    </li>
                                </div>
                                <li>
                                    <Link to="/dashboard/thirdPage">
                                        <i className="fa fa-angle-right"></i>Mobile 3
                                        <div className="image-holder">
                                            <img src={view3} alt="holder" />
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/dashboard/fourthPage">
                                        <i className="fa fa-angle-right"></i>Mobile 4
                                        <div className="image-holder">
                                            <img src={view4} alt="holder" />
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/dashboard/fifthPage">
                                        <i className="fa fa-angle-right"></i>Mobile 5
                                        <div className="image-holder">
                                            <img src={view5} alt="holder" />
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/dashboard/sixthPage">
                                        <i className="fa fa-angle-right"></i>Mobile 6
                                        <div className="image-holder">
                                            <img src={view6} alt="holder" />
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/dashboard/seventhPage">
                                        <i className="fa fa-angle-right"></i>Mobile 7
                                        <div className="image-holder">
                                            <img src={view7} alt="holder" />
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/dashboard/eighthPage">
                                        <i className="fa fa-angle-right"></i>Mobile 8
                                        <div className="image-holder">
                                            <img src={view8} alt="holder" />
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/dashboard/ninthPage">
                                        <i className="fa fa-angle-right"></i>Mobile 9
                                        <div className="image-holder">
                                            <img src={view9} alt="holder" />
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/dashboard/tenthPage">
                                        <i className="fa fa-angle-right"></i>Mobile 10
                                        <div className="image-holder">
                                            <img src={view10} alt="holder" />
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/dashboard/eleventhPage">
                                        <i className="fa fa-angle-right"></i>Mobile 11
                                        <div className="image-holder">
                                            <img src={view11} alt="holder" />
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/dashboard/twelvethPage">
                                        <i className="fa fa-angle-right"></i>Mobile 12
                                        <div className="image-holder">
                                            <img src={view12} alt="holder" />
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/dashboard/thirteenPage">
                                        <i className="fa fa-angle-right"></i>Mobile 13
                                        <div className="image-holder">
                                            <img src={view13} alt="holder" />
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/dashboard/fourteenPage">
                                        <i className="fa fa-angle-right"></i>Mobile 14
                                        <div className="image-holder">
                                            <img src={view14} alt="holder" />
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/dashboard/fifteenPage">
                                        <i className="fa fa-angle-right"></i>Mobile 15
                                        <div className="image-holder">
                                            <img src={view15} alt="holder" />
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/dashboard/sixteenthPage">
                                        <i className="fa fa-angle-right"></i>Mobile 16
                                        <div className="image-holder">
                                            <img src={view16} alt="holder" />
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/dashboard/seventeenthPage">
                                        <i className="fa fa-angle-right"></i>Mobile 17
                                        <div className="image-holder">
                                            <img src={view17} alt="holder" />
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/dashboard/eighteenthPage">
                                        <i className="fa fa-angle-right"></i>Mobile 18
                                        <div className="image-holder">
                                            <img src={view18} alt="holder" />
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/dashboard/nineteenthPage">
                                        <i className="fa fa-angle-right"></i>Mobile 19
                                        <div className="image-holder">
                                            <img src={view19} alt="holder" />
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/dashboard/twentyPage">
                                        <i className="fa fa-angle-right"></i>Mobile 20
                                        <div className="image-holder">
                                            <img src={view20} alt="holder" />
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/dashboard/twentyOnePage">
                                        <i className="fa fa-angle-right"></i>Mobile 21
                                        <div className="image-holder">
                                            <img src={view21} alt="holder" />
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/dashboard/twentyTwoPage">
                                        <i className="fa fa-angle-right"></i>Mobile 22
                                        <div className="image-holder">
                                            <img src={view22} alt="holder" />
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/dashboard/twentyThreePage">
                                        <i className="fa fa-angle-right"></i>Mobile 23
                                        <div className="image-holder">
                                            <img src={view23} alt="holder" />
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/dashboard/twentyFourPage">
                                        <i className="fa fa-angle-right"></i>Mobile 24
                                        <div className="image-holder">
                                            <img src={view24} alt="holder" />
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/dashboard/twentyFivePage">
                                        <i className="fa fa-angle-right"></i>Mobile 25
                                        <div className="image-holder">
                                            <img src={view25} alt="holder" />
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/dashboard/twentySixPage">
                                        <i className="fa fa-angle-right"></i>Mobile 26
                                        <div className="image-holder">
                                            <img src={view26} alt="holder" />
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/dashboard/twentySevenPage">
                                        <i className="fa fa-angle-right"></i>Mobile 27
                                        <div className="image-holder">
                                            <img src={view27} alt="holder" />
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/dashboard/twentyEightPage">
                                        <i className="fa fa-angle-right"></i>Mobile 28
                                        <div className="image-holder">
                                            <img src={view28} alt="holder" />
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/dashboard/twentyNinePage">
                                        <i className="fa fa-angle-right"></i>Mobile 29
                                        <div className="image-holder">
                                            <img src={view29} alt="holder" />
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/dashboard/thirtyPage">
                                        <i className="fa fa-angle-right"></i>Mobile 30
                                        <div className="image-holder">
                                            <img src={view30} alt="holder" />
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/dashboard/thirtyOnePage">
                                        <i className="fa fa-angle-right"></i>Mobile 31
                                        <div className="image-holder">
                                            <img src={view31} alt="holder" />
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/dashboard/thirtyTwoPage">
                                        <i className="fa fa-angle-right"></i>Mobile 32
                                        <div className="image-holder">
                                            <img src={view32} alt="holder" />
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/dashboard/thirtyThreePage">
                                        <i className="fa fa-angle-right"></i>Mobile 33
                                        <div className="image-holder">
                                            <img src={view33} alt="holder" />
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/dashboard/thirtyFourPage">
                                        <i className="fa fa-angle-right"></i>Mobile 34
                                        <div className="image-holder">
                                            <img src={view34} alt="holder" />
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/dashboard/thirtyFivePage">
                                        <i className="fa fa-angle-right"></i>Mobile 35
                                        <div className="image-holder">
                                            <img src={view35} alt="holder" />
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/dashboard/thirtySixPage">
                                        <i className="fa fa-angle-right"></i>Mobile 36
                                        <div className="image-holder">
                                            <img src={view36} alt="holder" />
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/dashboard/thirtySevenPage">
                                        <i className="fa fa-angle-right"></i>Mobile 37
                                        <div className="image-holder">
                                            <img src={view37} alt="holder" />
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/dashboard/thirtyEightPage">
                                        <i className="fa fa-angle-right"></i>Mobile 38
                                        <div className="image-holder">
                                            <img src={view38} alt="holder" />
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/dashboard/thirtyNinePage">
                                        <i className="fa fa-angle-right"></i>Mobile 39
                                        <div className="image-holder">
                                            <img src={view39} alt="holder" />
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/dashboard/fourtyPage">
                                        <i className="fa fa-angle-right"></i>Mobile 40
                                        <div className="image-holder">
                                            <img src={view40} alt="holder" />
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/dashboard/fourtyOnePage">
                                        <i className="fa fa-angle-right"></i>Mobile 41
                                        <div className="image-holder">
                                            <img src={view41} alt="holder" />
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/dashboard/fourtyTwoPage">
                                        <i className="fa fa-angle-right"></i>Mobile 42
                                        <div className="image-holder">
                                            <img src={view42} alt="holder" />
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/dashboard/fourtyThreePage">
                                        <i className="fa fa-angle-right"></i>Mobile 43
                                        <div className="image-holder">
                                            <img src={view43} alt="holder" />
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/dashboard/fourtyFourPage">
                                        <i className="fa fa-angle-right"></i>Mobile 44
                                        <div className="image-holder">
                                            <img src={view44} alt="holder" />
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/dashboard/fourtyFivePage">
                                        <i className="fa fa-angle-right"></i>Mobile 45
                                        <div className="image-holder">
                                            <img src={view45} alt="holder" />
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/dashboard/fourtySixPage">
                                        <i className="fa fa-angle-right"></i>Mobile 46
                                        <div className="image-holder">
                                            <img src={view46} alt="holder" />
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/dashboard/fourtySevenPage">
                                        <i className="fa fa-angle-right"></i>Mobile 47
                                        <div className="image-holder">
                                            <img src={view47} alt="holder" />
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/dashboard/fourtyEightPage">
                                        <i className="fa fa-angle-right"></i>Mobile 48
                                        <div className="image-holder">
                                            <img src={view48} alt="holder" />
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/dashboard/fourtyNinePage">
                                        <i className="fa fa-angle-right"></i>Mobile 49
                                        <div className="image-holder">
                                            <img src={view49} alt="holder" />
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/dashboard/fiftyPage">
                                        <i className="fa fa-angle-right"></i>Mobile 50
                                        <div className="image-holder">
                                            <img src={view50} alt="holder" />
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/dashboard/fiftyOnePage">
                                        <i className="fa fa-angle-right"></i>Mobile 51
                                        <div className="image-holder">
                                            <img src={view51} alt="holder" />
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/dashboard/fiftyTwoPage">
                                        <i className="fa fa-angle-right"></i>Mobile 52
                                        <div className="image-holder">
                                            <img src={view52} alt="holder" />
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/dashboard/fiftyThreePage">
                                        <i className="fa fa-angle-right"></i>Mobile 53
                                        <div className="image-holder">
                                            <img src={view53} alt="holder" />
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/dashboard/fiftyFourPage">
                                        <i className="fa fa-angle-right"></i>Mobile 54
                                        <div className="image-holder">
                                            <img src={view54} alt="holder" />
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/dashboard/fiftyFivePage">
                                        <i className="fa fa-angle-right"></i>Mobile 55
                                        <div className="image-holder">
                                            <img src={view55} alt="holder" />
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/dashboard/fiftySixPage">
                                        <i className="fa fa-angle-right"></i>Mobile 56
                                        <div className="image-holder">
                                            <img src={view56} alt="holder" />
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/dashboard/fiftySevenPage">
                                        <i className="fa fa-angle-right"></i>Mobile 57
                                        <div className="image-holder">
                                            <img src={view57} alt="holder" />
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/dashboard/fiftyEightPage">
                                        <i className="fa fa-angle-right"></i>Mobile 58
                                        <div className="image-holder">
                                            <img src={view58} alt="holder" />
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/dashboard/fiftyNinePage">
                                        <i className="fa fa-angle-right"></i>Mobile 59
                                        <div className="image-holder">
                                            <img src={view59} alt="holder" />
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/dashboard/sixtyPage">
                                        <i className="fa fa-angle-right"></i>Mobile 60
                                        <div className="image-holder">
                                            <img src={view60} alt="holder" />
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/dashboard/sixtyOnePage">
                                        <i className="fa fa-angle-right"></i>Mobile 61
                                        <div className="image-holder">
                                            <img src={view61} alt="holder" />
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/dashboard/sixtyTwoPage">
                                        <i className="fa fa-angle-right"></i>Mobile 62
                                        <div className="image-holder">
                                            <img src={view62} alt="holder" />
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/dashboard/sixtyThreePage">
                                        <i className="fa fa-angle-right"></i>Mobile 63
                                        <div className="image-holder">
                                            <img src={view63} alt="holder" />
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/dashboard/sixtyFourPage">
                                        <i className="fa fa-angle-right"></i>Mobile 64
                                        <div className="image-holder">
                                            <img src={view64} alt="holder" />
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/dashboard/sixtyFivePage">
                                        <i className="fa fa-angle-right"></i>Mobile 65
                                        <div className="image-holder">
                                            <img src={view65} alt="holder" />
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/dashboard/sixtySixPage">
                                        <i className="fa fa-angle-right"></i>Mobile 66
                                        <div className="image-holder">
                                            <img src={view66} alt="holder" />
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/dashboard/sixtySevenPage">
                                        <i className="fa fa-angle-right"></i>Mobile 67
                                        <div className="image-holder">
                                            <img src={view67} alt="holder" />
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/dashboard/sixtyEightPage">
                                        <i className="fa fa-angle-right"></i>Mobile 68
                                        <div className="image-holder">
                                            <img src={view68} alt="holder" />
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/dashboard/sixtyNinePage">
                                        <i className="fa fa-angle-right"></i>Mobile 69
                                        <div className="image-holder">
                                            <img src={view69} alt="holder" />
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/dashboard/seventyPage">
                                        <i className="fa fa-angle-right"></i>Mobile 70
                                        <div className="image-holder">
                                            <img src={view70} alt="holder" />
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/dashboard/seventyOnePage">
                                        <i className="fa fa-angle-right"></i>Mobile 71
                                        <div className="image-holder">
                                            <img src={view71} alt="holder" />
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/dashboard/seventyTwoPage">
                                        <i className="fa fa-angle-right"></i>Mobile 72
                                        <div className="image-holder">
                                            <img src={view72} alt="holder" />
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/dashboard/seventyThreePage">
                                        <i className="fa fa-angle-right"></i>Mobile 73
                                        <div className="image-holder">
                                            <img src={view73} alt="holder" />
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/dashboard/seventyFourPage">
                                        <i className="fa fa-angle-right"></i>Mobile 74
                                        <div className="image-holder">
                                            <img src={view74} alt="holder" />
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/dashboard/seventyFivePage">
                                        <i className="fa fa-angle-right"></i>Mobile 75
                                        <div className="image-holder">
                                            <img src={view75} alt="holder" />
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/dashboard/seventySixPage">
                                        <i className="fa fa-angle-right"></i>Mobile 76
                                        <div className="image-holder">
                                            <img src={view76} alt="holder" />
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/dashboard/seventySevenPage">
                                        <i className="fa fa-angle-right"></i>Mobile 77
                                        <div className="image-holder">
                                            <img src={view77} alt="holder" />
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/dashboard/seventyEightPage">
                                        <i className="fa fa-angle-right"></i>Mobile 78
                                        <div className="image-holder">
                                            <img src={view78} alt="holder" />
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/dashboard/seventyNinePage">
                                        <i className="fa fa-angle-right"></i>Mobile 79
                                        <div className="image-holder">
                                            <img src={view79} alt="holder" />
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/dashboard/eightyPage">
                                        <i className="fa fa-angle-right"></i>Mobile 80
                                        <div className="image-holder">
                                            <img src={view80} alt="holder" />
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/dashboard/eightyOnePage">
                                        <i className="fa fa-angle-right"></i>Mobile 81
                                        <div className="image-holder">
                                            <img src={view81} alt="holder" />
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/dashboard/eightyTwoPage">
                                        <i className="fa fa-angle-right"></i>Mobile 82
                                        <div className="image-holder">
                                            <img src={view82} alt="holder" />
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/dashboard/eightyThreePage">
                                        <i className="fa fa-angle-right"></i>Mobile 83
                                        <div className="image-holder">
                                            <img src={view83} alt="holder" />
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/dashboard/eightyFourPage">
                                        <i className="fa fa-angle-right"></i>Mobile 84
                                        <div className="image-holder">
                                            <img src={view84} alt="holder" />
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/dashboard/eightyFivePage">
                                        <i className="fa fa-angle-right"></i>Mobile 85
                                        <div className="image-holder">
                                            <img src={view85} alt="holder" />
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/dashboard/eightySixPage">
                                        <i className="fa fa-angle-right"></i>Mobile 86
                                        <div className="image-holder">
                                            <img src={view86} alt="holder" />
                                        </div>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <Routes>
                        <Route path="/" element={<FirstPage />} exact />
                        <Route path="/secondPage" element={<SecondPage />} exact />
                        <Route path="/thirdPage" element={<ThirdPage />} exact />
                        <Route path="/fourthPage" element={<FourthPage />} exact />
                        <Route path="/fifthPage" element={<FifthPage />} exact />
                        <Route path="/sixthPage" element={<SixthPage />} exact />
                        <Route path="/seventhPage" element={<SeventhPage />} exact />
                        <Route path="/eighthPage" element={<EighthPage />} exact />
                        <Route path="/ninthpage" element={<NinthPage />} exact />
                        <Route path="/tenthPage" element={<TenthPage />} exact />
                        <Route path="/eleventhPage" element={<EleventhPage />} exact />
                        <Route path="/twelvethPage" element={<TwelvethPage />} exact />
                        <Route path="/thirteenPage" element={<ThirteenPage />} exact />
                        <Route path="/fourteenPage" element={<FourteenPage />} exact />
                        <Route path="/fifteenPage" element={<FifteenPage />} exact />
                        <Route path="/sixteenthPage" element={<SixteenthPage />} exact />
                        <Route path="/seventeenthPage" element={<SeventeenthPage />} exact />
                        <Route path="/eighteenthPage" element={<EighteenthPage />} exact />
                        <Route path="/nineteenthPage" element={<NineteenthPage />} exact />
                        <Route path="/twentyPage" element={<TwentyPage />} exact />
                        <Route path="/twentyOnePage" element={<TwentyOnePage />} exact />
                        <Route path="/twentyTwoPage" element={<TwentyTwoPage />} exact />
                        <Route path="/twentyThreePage" element={<TwentyThreePage />} exact />
                        <Route path="/twentyFourPage" element={<TwentyFourPage />} exact />
                        <Route path="/twentyFivePage" element={<TwentyFivePage />} exact />
                        <Route path="/twentySixPage" element={<TwentySixPage />} exact />
                        <Route path="/twentySevenPage" element={<TwentySevenPage />} exact />
                        <Route path="/twentyEightPage" element={<TwentyEightPage />} exact />
                        <Route path="/twentyNinePage" element={<TwentyNinePage />} exact />
                        <Route path="/thirtyPage" element={<ThirtyPage />} exact />
                        <Route path="/thirtyOnePage" element={<ThirtyOnePage />} exact />
                        <Route path="/thirtyTwoPage" element={<ThirtyTowPage />} exact />
                        <Route path="/thirtyThreePage" element={<ThirtyThreePage />} exact />
                        <Route path="/thirtyFourPage" element={<ThirtyFourPage />} exact />
                        <Route path="/thirtyFivePage" element={<ThirtyFivePage />} exact />
                        <Route path="/thirtySixPage" element={<ThirtySixPage />} exact />
                        <Route path="/thirtySevenPage" element={<ThirtySevenPage />} exact />
                        <Route path="/thirtyEightPage" element={<ThirtyEightPage />} exact />
                        <Route path="/thirtyNinePage" element={<ThirtyNinePage />} exact />
                        <Route path="/fourtyPage" element={<FourtyPage />} exact />
                        <Route path="/fourtyOnePage" element={<FourtyOnePage />} exact />
                        <Route path="/fourtyTwoPage" element={<FourtyTwoPage />} exact />
                        <Route path="/fourtyThreePage" element={<FourtyThreePage />} exact />
                        <Route path="/fourtyFourPage" element={<FourtyFourPage />} exact />
                        <Route path="/fourtyFivePage" element={<FourtyFivePage />} exact />
                        <Route path="/fourtySixPage" element={<FourtySixPage />} exact />
                        <Route path="/fourtySevenPage" element={<FourtySevenPage />} exact />
                        <Route path="/fourtyEightPage" element={<FourtyEightPage />} exact />
                        <Route path="/fourtyNinePage" element={<FourtyNinePage />} exact />
                        <Route path="/fiftyPage" element={<FiftyPage />} exact />
                        <Route path="/fiftyOnePage" element={<FiftyOnePage />} exact />
                        <Route path="/fiftyTwoPage" element={<FiftyTwoPage />} exact />
                        <Route path="/fiftyThreePage" element={<FiftyThreePage />} exact />
                        <Route path="/fiftyFourPage" element={<FiftyFourPage />} exact />
                        <Route path="/fiftyFivePage" element={<FiftyFivePage />} exact />
                        <Route path="/fiftySixPage" element={<FiftySixPage />} exact />
                        <Route path="/fiftySevenPage" element={<FiftySevenPage />} exact />
                        <Route path="/fiftyEightPage" element={<FiftyEightPage />} exact />
                        <Route path="/fiftyNinePage" element={<FiftyNinePage />} exact />
                        <Route path="/sixtyPage" element={<SixtyPage />} exact />
                        <Route path="/sixtyOnePage" element={<SixtyOnePage />} exact />
                        <Route path="/sixtyTwoPage" element={<SixtyTwoPage />} exact />
                        <Route path="/sixtyThreePage" element={<SixtyThreePage />} exact />
                        <Route path="/sixtyFourPage" element={<SixtyFourPage />} exact />
                        <Route path="/sixtyFivePage" element={<SixtyFivePage />} exact />
                        <Route path="/sixtySixPage" element={<SixtySixPage />} exact />
                        <Route path="/sixtySevenPage" element={<SixtySevenPage />} exact />
                        <Route path="/sixtyEightPage" element={<SixtyEightPage />} exact />
                        <Route path="/sixtyNinePage" element={<SixtyNinePage />} exact />
                        <Route path="/seventyPage" element={<SeventyPage />} exact />
                        <Route path="/seventyOnePage" element={<SeventyOnePage />} exact />
                        <Route path="/seventyTwoPage" element={<SeventyTwoPage />} exact />
                        <Route path="/seventyThreePage" element={<SeventyThreePage />} exact />
                        <Route path="/seventyFourPage" element={<SeventyFourPage />} exact />
                        <Route path="/seventyFivePage" element={<SeventyFivePage />} exact />
                        <Route path="/seventySixPage" element={<SeventySixPage />} exact />
                        <Route path="/seventySevenPage" element={<SeventySevenPage />} exact />
                        <Route path="/seventyEightPage" element={<SeventyEightPage />} exact />
                        <Route path="/seventyNinePage" element={<SeventyNinePage />} exact />
                        <Route path="/eightyPage" element={<EightyPage />} exact />
                        <Route path="/eightyOnePage" element={<EightyOnePage />} exact />
                        <Route path="/eightyTwoPage" element={<EightyTwoPage />} exact />
                        <Route path="/eightyThreePage" element={<EightyThreePage />} exact />
                        <Route path="/eightyFourPage" element={<EightyFourPage />} exact />
                        <Route path="/eightyFivePage" element={<EightyFivePage />} exact />
                        <Route path="/eightySixPage" element={<EightySixPage />} exact />
                    </Routes>
                </div>
            </section>
            <div className={isOn ? "list-all-items topVal" : "list-all-items"}>
                <div className="list-close">
                    <button onClick={() => handleIsOn()}>Close Menu</button>
                </div>
                <div className="list-all-items-parent">
                    <div className="list-all-items-childs">
                        <Link to="/" onClick={() => handleIsOn()}>
                            <p>Mobile 1</p>
                            <img src={view1} alt="mobile" />
                        </Link>
                    </div>
                    <div className="list-all-items-childs">
                        <Link to="/dashboard/secondPage" onClick={() => handleIsOn()}>
                            <p>Mobile 2</p>
                            <img src={view2} alt="mobile" />
                        </Link>
                    </div>
                    <div className="list-all-items-childs">
                        <Link to="/dashboard/thirdPage" onClick={() => handleIsOn()}>
                            <p>Mobile 3</p>
                            <img src={view3} alt="mobile" />
                        </Link>
                    </div>
                    <div className="list-all-items-childs">
                        <Link to="/dashboard/fourthPage" onClick={() => handleIsOn()}>
                            <p>Mobile 4</p>
                            <img src={view4} alt="mobile" />
                        </Link>
                    </div>
                </div>
                <div className="list-all-items-parent">
                    <div className="list-all-items-childs">
                        <Link to="/dashboard/fifthPage" onClick={() => handleIsOn()}>
                            <p>Mobile 5</p>
                            <img src={view5} alt="mobile" />
                        </Link>
                    </div>
                    <div className="list-all-items-childs">
                        <Link to="/dashboard/sixthPage" onClick={() => handleIsOn()}>
                            <p>Mobile 6</p>
                            <img src={view6} alt="mobile" />
                        </Link>
                    </div>
                    <div className="list-all-items-childs">
                        <Link to="/dashboard/seventhPage" onClick={() => handleIsOn()}>
                            <p>Mobile 7</p>
                            <img src={view7} alt="mobile" />
                        </Link>
                    </div>
                    <div className="list-all-items-childs">
                        <Link to="/dashboard/eighthPage" onClick={() => handleIsOn()}>
                            <p>Mobile 8</p>
                            <img src={view8} alt="mobile" />
                        </Link>
                    </div>
                </div>
                <div className="list-all-items-parent">
                    <div className="list-all-items-childs">
                        <Link to="/dashboard/ninthPage" onClick={() => handleIsOn()}>
                            <p>Mobile 9</p>
                            <img src={view9} alt="mobile" />
                        </Link>
                    </div>
                    <div className="list-all-items-childs">
                        <Link to="/dashboard/tenthPage" onClick={() => handleIsOn()}>
                            <p>Mobile 10</p>
                            <img src={view10} alt="mobile" />
                        </Link>
                    </div>
                    <div className="list-all-items-childs">
                        <Link to="/dashboard/eleventhPage" onClick={() => handleIsOn()}>
                            <p>Mobile 11</p>
                            <img src={view11} alt="mobile" />
                        </Link>
                    </div>
                    <div className="list-all-items-childs">
                        <Link to="/dashboard/twelvethPage" onClick={() => handleIsOn()}>
                            <p>Mobile 12</p>
                            <img src={view12} alt="mobile" />
                        </Link>
                    </div>
                </div>
                <div className="list-all-items-parent">
                    <div className="list-all-items-childs">
                        <Link to="/dashboard/thirteenPage" onClick={() => handleIsOn()}>
                            <p>Mobile 13</p>
                            <img src={view13} alt="mobile" />
                        </Link>
                    </div>
                    <div className="list-all-items-childs">
                        <Link to="/dashboard/fourteenPage" onClick={() => handleIsOn()}>
                            <p>Mobile 14</p>
                            <img src={view14} alt="mobile" />
                        </Link>
                    </div>
                    <div className="list-all-items-childs">
                        <Link to="/dashboard/fifteenPage" onClick={() => handleIsOn()}>
                            <p>Mobile 15</p>
                            <img src={view15} alt="mobile" />
                        </Link>
                    </div>
                    <div className="list-all-items-childs">
                        <Link to="/dashboard/sixteenthPage" onClick={() => handleIsOn()}>
                            <p>Mobile 16</p>
                            <img src={view16} alt="mobile" />
                        </Link>
                    </div>
                </div>
                <div className="list-all-items-parent">
                    <div className="list-all-items-childs">
                        <Link to="/dashboard/seventeenthPage" onClick={() => handleIsOn()}>
                            <p>Mobile 17</p>
                            <img src={view17} alt="mobile" />
                        </Link>
                    </div>
                    <div className="list-all-items-childs">
                        <Link to="/eighteenthPage" onClick={() => handleIsOn()}>
                            <p>Mobile 18</p>
                            <img src={view18} alt="mobile" />
                        </Link>
                    </div>
                    <div className="list-all-items-childs">
                        <Link to="/dashboard/nineteenthPage" onClick={() => handleIsOn()}>
                            <p>Mobile 19</p>
                            <img src={view19} alt="mobile" />
                        </Link>
                    </div>
                    <div className="list-all-items-childs">
                        <Link to="/dashboard/twentyPage" onClick={() => handleIsOn()}>
                            <p>Mobile 20</p>
                            <img src={view20} alt="mobile" />
                        </Link>
                    </div>
                </div>
                <div className="list-all-items-parent">
                    <div className="list-all-items-childs">
                        <Link to="/dashboard/twentyOnePage" onClick={() => handleIsOn()}>
                            <p>Mobile 21</p>
                            <img src={view21} alt="mobile" />
                        </Link>
                    </div>
                    <div className="list-all-items-childs">
                        <Link to="/dashboard/twentyTwoPage" onClick={() => handleIsOn()}>
                            <p>Mobile 22</p>
                            <img src={view22} alt="mobile" />
                        </Link>
                    </div>
                    <div className="list-all-items-childs">
                        <Link to="/dashboard/twentyThreePage" onClick={() => handleIsOn()}>
                            <p>Mobile 23</p>
                            <img src={view23} alt="mobile" />
                        </Link>
                    </div>
                    <div className="list-all-items-childs">
                        <Link to="/dashboard/twentyFourPage" onClick={() => handleIsOn()}>
                            <p>Mobile 24</p>
                            <img src={view24} alt="mobile" />
                        </Link>
                    </div>
                </div>
                <div className="list-all-items-parent">
                    <div className="list-all-items-childs">
                        <Link to="/dashboard/twentyFivePage" onClick={() => handleIsOn()}>
                            <p>Mobile 25</p>
                            <img src={view25} alt="mobile" />
                        </Link>
                    </div>
                    <div className="list-all-items-childs">
                        <Link to="/dashboard/twentySixPage" onClick={() => handleIsOn()}>
                            <p>Mobile 26</p>
                            <img src={view26} alt="mobile" />
                        </Link>
                    </div>
                    <div className="list-all-items-childs">
                        <Link to="/dashboard/twentySevenPage" onClick={() => handleIsOn()}>
                            <p>Mobile 27</p>
                            <img src={view27} alt="mobile" />
                        </Link>
                    </div>
                    <div className="list-all-items-childs">
                        <Link to="/dashboard/twentyEightPage" onClick={() => handleIsOn()}>
                            <p>Mobile 28</p>
                            <img src={view28} alt="mobile" />
                        </Link>
                    </div>
                </div>
                <div className="list-all-items-parent">
                    <div className="list-all-items-childs">
                        <Link to="/dashboard/twentyNinePage" onClick={() => handleIsOn()}>
                            <p>Mobile 29</p>
                            <img src={view29} alt="mobile" />
                        </Link>
                    </div>
                    <div className="list-all-items-childs">
                        <Link to="/dashboard/thirtyPage" onClick={() => handleIsOn()}>
                            <p>Mobile 30</p>
                            <img src={view30} alt="mobile" />
                        </Link>
                    </div>
                    <div className="list-all-items-childs">
                        <Link to="/dashboard/thirtyOnePage" onClick={() => handleIsOn()}>
                            <p>Mobile 31</p>
                            <img src={view31} alt="mobile" />
                        </Link>
                    </div>
                    <div className="list-all-items-childs">
                        <Link to="/dashboard/thirtyTwoPage" onClick={() => handleIsOn()}>
                            <p>Mobile 32</p>
                            <img src={view32} alt="mobile" />
                        </Link>
                    </div>
                </div>
                <div className="list-all-items-parent">
                    <div className="list-all-items-childs">
                        <Link to="/dashboard/thirtyThreePage" onClick={() => handleIsOn()}>
                            <p>Mobile 33</p>
                            <img src={view33} alt="mobile" />
                        </Link>
                    </div>
                    <div className="list-all-items-childs">
                        <Link to="/dashboard/thirtyFourPage" onClick={() => handleIsOn()}>
                            <p>Mobile 34</p>
                            <img src={view34} alt="mobile" />
                        </Link>
                    </div>
                    <div className="list-all-items-childs">
                        <Link to="/dashboard/thirtyFivePage" onClick={() => handleIsOn()}>
                            <p>Mobile 35</p>
                            <img src={view35} alt="mobile" />
                        </Link>
                    </div>
                    <div className="list-all-items-childs">
                        <Link to="/dashboard/thirtySixPage" onClick={() => handleIsOn()}>
                            <p>Mobile 36</p>
                            <img src={view36} alt="mobile" />
                        </Link>
                    </div>
                </div>
                <div className="list-all-items-parent">
                    <div className="list-all-items-childs">
                        <Link to="/dashboard/thirtySevenPage" onClick={() => handleIsOn()}>
                            <p>Mobile 37</p>
                            <img src={view37} alt="mobile" />
                        </Link>
                    </div>
                    <div className="list-all-items-childs">
                        <Link to="/dashboard/thirtyEightPage" onClick={() => handleIsOn()}>
                            <p>Mobile 38</p>
                            <img src={view38} alt="mobile" />
                        </Link>
                    </div>
                    <div className="list-all-items-childs">
                        <Link to="/dashboard/thirtyNinePage" onClick={() => handleIsOn()}>
                            <p>Mobile 39</p>
                            <img src={view39} alt="mobile" />
                        </Link>
                    </div>
                    <div className="list-all-items-childs">
                        <Link to="/dashboard/fourtyPage" onClick={() => handleIsOn()}>
                            <p>Mobile 40</p>
                            <img src={view40} alt="mobile" />
                        </Link>
                    </div>
                </div>
                <div className="list-all-items-parent">
                    <div className="list-all-items-childs">
                        <Link to="/dashboard/fourtyOnePage" onClick={() => handleIsOn()}>
                            <p>Mobile 41</p>
                            <img src={view41} alt="mobile" />
                        </Link>
                    </div>
                    <div className="list-all-items-childs">
                        <Link to="/dashboard/fourtyTwoPage" onClick={() => handleIsOn()}>
                            <p>Mobile 42</p>
                            <img src={view42} alt="mobile" />
                        </Link>
                    </div>
                    <div className="list-all-items-childs">
                        <Link to="/dashboard/fourtyThreePage" onClick={() => handleIsOn()}>
                            <p>Mobile 43</p>
                            <img src={view43} alt="mobile" />
                        </Link>
                    </div>
                    <div className="list-all-items-childs">
                        <Link to="/dashboard/fourtyFourPage" onClick={() => handleIsOn()}>
                            <p>Mobile 44</p>
                            <img src={view44} alt="mobile" />
                        </Link>
                    </div>
                </div>
                <div className="list-all-items-parent">
                    <div className="list-all-items-childs">
                        <Link to="/dashboard/fourtyFivePage" onClick={() => handleIsOn()}>
                            <p>Mobile 45</p>
                            <img src={view45} alt="mobile" />
                        </Link>
                    </div>
                    <div className="list-all-items-childs">
                        <Link to="/dashboard/fourtySixPage" onClick={() => handleIsOn()}>
                            <p>Mobile 46</p>
                            <img src={view46} alt="mobile" />
                        </Link>
                    </div>
                    <div className="list-all-items-childs">
                        <Link to="/dashboard/fourtySevenPage" onClick={() => handleIsOn()}>
                            <p>Mobile 47</p>
                            <img src={view47} alt="mobile" />
                        </Link>
                    </div>
                    <div className="list-all-items-childs">
                        <Link to="/dashboard/fourtyEightPage" onClick={() => handleIsOn()}>
                            <p>Mobile 48</p>
                            <img src={view48} alt="mobile" />
                        </Link>
                    </div>
                </div>
                <div className="list-all-items-parent">
                    <div className="list-all-items-childs">
                        <Link to="/dashboard/fourtyNinePage" onClick={() => handleIsOn()}>
                            <p>Mobile 49</p>
                            <img src={view49} alt="mobile" />
                        </Link>
                    </div>
                    <div className="list-all-items-childs">
                        <Link to="/dashboard/fiftyPage" onClick={() => handleIsOn()}>
                            <p>Mobile 50</p>
                            <img src={view50} alt="mobile" />
                        </Link>
                    </div>
                    <div className="list-all-items-childs">
                        <Link to="/dashboard/fiftyOnePage" onClick={() => handleIsOn()}>
                            <p>Mobile 51</p>
                            <img src={view51} alt="mobile" />
                        </Link>
                    </div>
                    <div className="list-all-items-childs">
                        <Link to="/dashboard/fiftyTwoPage" onClick={() => handleIsOn()}>
                            <p>Mobile 52</p>
                            <img src={view52} alt="mobile" />
                        </Link>
                    </div>
                </div>
                <div className="list-all-items-parent">
                    <div className="list-all-items-childs">
                        <Link to="/dashboard/fiftyThreePage" onClick={() => handleIsOn()}>
                            <p>Mobile 53</p>
                            <img src={view53} alt="mobile" />
                        </Link>
                    </div>
                    <div className="list-all-items-childs">
                        <Link to="/dashboard/fiftyFourPage" onClick={() => handleIsOn()}>
                            <p>Mobile 54</p>
                            <img src={view54} alt="mobile" />
                        </Link>
                    </div>
                    <div className="list-all-items-childs">
                        <Link to="/dashboard/fiftyFivePage" onClick={() => handleIsOn()}>
                            <p>Mobile 55</p>
                            <img src={view55} alt="mobile" />
                        </Link>
                    </div>
                    <div className="list-all-items-childs">
                        <Link to="/dashboard/fiftySixPage" onClick={() => handleIsOn()}>
                            <p>Mobile 56</p>
                            <img src={view56} alt="mobile" />
                        </Link>
                    </div>
                </div>
                <div className="list-all-items-parent">
                    <div className="list-all-items-childs">
                        <Link to="/dashboard/fiftySevenPage" onClick={() => handleIsOn()}>
                            <p>Mobile 57</p>
                            <img src={view57} alt="mobile" />
                        </Link>
                    </div>
                    <div className="list-all-items-childs">
                        <Link to="/dashboard/fiftyEightPage" onClick={() => handleIsOn()}>
                            <p>Mobile 58</p>
                            <img src={view58} alt="mobile" />
                        </Link>
                    </div>
                    <div className="list-all-items-childs">
                        <Link to="/dashboard/fiftyNinePage" onClick={() => handleIsOn()}>
                            <p>Mobile 59</p>
                            <img src={view59} alt="mobile" />
                        </Link>
                    </div>
                    <div className="list-all-items-childs">
                        <Link to="/dashboard/sixtyPage" onClick={() => handleIsOn()}>
                            <p>Mobile 60</p>
                            <img src={view60} alt="mobile" />
                        </Link>
                    </div>
                </div>
                <div className="list-all-items-parent">
                    <div className="list-all-items-childs">
                        <Link to="/dashboard/sixtyOnePage" onClick={() => handleIsOn()}>
                            <p>Mobile 61</p>
                            <img src={view61} alt="mobile" />
                        </Link>
                    </div>
                    <div className="list-all-items-childs">
                        <Link to="/dashboard/sixtyTwoPage" onClick={() => handleIsOn()}>
                            <p>Mobile 62</p>
                            <img src={view62} alt="mobile" />
                        </Link>
                    </div>
                    <div className="list-all-items-childs">
                        <Link to="/dashboard/sixtyThreePage" onClick={() => handleIsOn()}>
                            <p>Mobile 63</p>
                            <img src={view63} alt="mobile" />
                        </Link>
                    </div>
                    <div className="list-all-items-childs">
                        <Link to="/dashboard/sixtyFourPage" onClick={() => handleIsOn()}>
                            <p>Mobile 64</p>
                            <img src={view64} alt="mobile" />
                        </Link>
                    </div>
                </div>
                <div className="list-all-items-parent">
                    <div className="list-all-items-childs">
                        <Link to="/dashboard/sixtyFivePage" onClick={() => handleIsOn()}>
                            <p>Mobile 65</p>
                            <img src={view65} alt="mobile" />
                        </Link>
                    </div>
                    <div className="list-all-items-childs">
                        <Link to="/dashboard/sixtySixPage" onClick={() => handleIsOn()}>
                            <p>Mobile 66</p>
                            <img src={view66} alt="mobile" />
                        </Link>
                    </div>
                    <div className="list-all-items-childs">
                        <Link to="/dashboard/sixtySevenPage" onClick={() => handleIsOn()}>
                            <p>Mobile 67</p>
                            <img src={view67} alt="mobile" />
                        </Link>
                    </div>
                    <div className="list-all-items-childs">
                        <Link to="/dashboard/sixtyEightPage" onClick={() => handleIsOn()}>
                            <p>Mobile 68</p>
                            <img src={view68} alt="mobile" />
                        </Link>
                    </div>
                </div>
                <div className="list-all-items-parent">
                    <div className="list-all-items-childs">
                        <Link to="/dashboard/sixtyNinesPage" onClick={() => handleIsOn()}>
                            <p>Mobile 69</p>
                            <img src={view69} alt="mobile" />
                        </Link>
                    </div>
                    <div className="list-all-items-childs">
                        <Link to="/dashboard/seventyPage" onClick={() => handleIsOn()}>
                            <p>Mobile 70</p>
                            <img src={view70} alt="mobile" />
                        </Link>
                    </div>
                    <div className="list-all-items-childs">
                        <Link to="/dashboard/seventyOnePage" onClick={() => handleIsOn()}>
                            <p>Mobile 71</p>
                            <img src={view71} alt="mobile" />
                        </Link>
                    </div>
                    <div className="list-all-items-childs">
                        <Link to="/dashboard/seventyTwoPage" onClick={() => handleIsOn()}>
                            <p>Mobile 72</p>
                            <img src={view72} alt="mobile" />
                        </Link>
                    </div>
                </div>
                <div className="list-all-items-parent">
                    <div className="list-all-items-childs">
                        <Link to="/dashboard/seventyThreePage" onClick={() => handleIsOn()}>
                            <p>Mobile 73</p>
                            <img src={view73} alt="mobile" />
                        </Link>
                    </div>
                    <div className="list-all-items-childs">
                        <Link to="/dashboard/seventyFourPage" onClick={() => handleIsOn()}>
                            <p>Mobile 74</p>
                            <img src={view74} alt="mobile" />
                        </Link>
                    </div>
                    <div className="list-all-items-childs">
                        <Link to="/dashboard/seventyFivePage" onClick={() => handleIsOn()}>
                            <p>Mobile 75</p>
                            <img src={view75} alt="mobile" />
                        </Link>
                    </div>
                    <div className="list-all-items-childs">
                        <Link to="/dashboard/seventySixPage" onClick={() => handleIsOn()}>
                            <p>Mobile 76</p>
                            <img src={view76} alt="mobile" />
                        </Link>
                    </div>
                </div>
                <div className="list-all-items-parent">
                    <div className="list-all-items-childs">
                        <Link to="/dashboard/seventySevenPage" onClick={() => handleIsOn()}>
                            <p>Mobile 77</p>
                            <img src={view77} alt="mobile" />
                        </Link>
                    </div>
                    <div className="list-all-items-childs">
                        <Link to="/dashboard/seventyEightPage" onClick={() => handleIsOn()}>
                            <p>Mobile 78</p>
                            <img src={view78} alt="mobile" />
                        </Link>
                    </div>
                    <div className="list-all-items-childs">
                        <Link to="/dashboard/eightyOnePage" onClick={() => handleIsOn()}>
                            <p>Mobile 81</p>
                            <img src={view81} alt="mobile" />
                        </Link>
                    </div>
                    <div className="list-all-items-childs">
                        <Link to="/dashboard/eightyTwoPage" onClick={() => handleIsOn()}>
                            <p>Mobile 82</p>
                            <img src={view82} alt="mobile" />
                        </Link>
                    </div>
                </div>
                <div className="list-all-items-parent">
                    <div className="list-all-items-childs">
                        <Link to="/dashboard/eightyThreePage" onClick={() => handleIsOn()}>
                            <p>Mobile 83</p>
                            <img src={view83} alt="mobile" />
                        </Link>
                    </div>
                    <div className="list-all-items-childs">
                        <Link to="/dashboard/eightyFourPage" onClick={() => handleIsOn()}>
                            <p>Mobile 84</p>
                            <img src={view84} alt="mobile" />
                        </Link>
                    </div>
                    <div className="list-all-items-childs">
                        <Link to="/dashboard/eightyFivePage" onClick={() => handleIsOn()}>
                            <p>Mobile 85</p>
                            <img src={view85} alt="mobile" />
                        </Link>
                    </div>
                    <div className="list-all-items-childs">
                        <Link to="/dashboard/eightySixPage" onClick={() => handleIsOn()}>
                            <p>Mobile 86</p>
                            <img src={view86} alt="mobile" />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;    