import React, { useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import { write } from 'clipboard-polyfill';
import "../../assets/styles/secondpage.scss";
import { ToastContainer, toast } from 'react-toastify';

const SeventyPage = () => {
    const screenshotRef = useRef(null);

    const [data, setData] = useState({
        time: "12:41",
        depoite_date: "Thu, Apr 25, 2024",
        sender: "Eric Peter Bustamante",
        amount: "$220.57",
        recipient: "ERIC PETER AGUILAR",
        recipient2: "BUSTAMANTE",
        recipientEmail: "bustamanteeric571@gmail.com",
        deposited_to: "TD STUDENT",
        deposited_to2: "CHEQUING ACCOUNT",
        deposited_number: "6616674",
        message: "gratevalue",
        confirmation: "C1BXvf***tgc",
    });

    const [network, setNetwork] = useState("strong");
    const [net, setNet] = useState("5G");
    const [battery, setBattery] = useState("25");

    const [imageDimension, setImageDimension] = useState("167");

    const onChangeHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    const notify = (message) => toast.success(message, {
        containerId: 'success-toast',
        style: {
            background: 'black',
            color: 'white',
        },
    });

    const takeScreenshot = async () => {
        try {
            const canvas = await html2canvas(screenshotRef.current);
            const dataURL = canvas.toDataURL('image/png');

            const img = new Image();
            img.src = dataURL;

            img.onload = () => {
                const canvas = document.createElement("canvas");
                canvas.width = img.width;
                canvas.height = img.height;

                const context = canvas.getContext("2d");
                context.drawImage(img, 0, 0);

                // Convert canvas to blob
                canvas.toBlob((blob) => {
                    const clipboardItem = new ClipboardItem({ [blob.type]: blob });

                    // Use the clipboard-polyfill to copy the item
                    write([clipboardItem]).then(() => {
                        notify("Copied to clipboard");
                    }).catch((error) => {
                        console.error("Error copying image:", error);
                    });
                }, img.type);
            };
        } catch (error) {
            console.error('Error taking screenshot:', error);
        }
    };

    return (
        <>
            <div className="billing_childs">
                <ToastContainer autoClose={1000} />
                <div className="app-heading">
                    <h3>PREVIEW - <span>Mobile 70</span></h3>
                    <div class="slidecontainer">
                        <button onClick={() => takeScreenshot()}>Screenshot <i className="fa fa-copy"></i></button>
                        <span>{imageDimension + "%"}</span>
                        <input
                            type="range"
                            min="1"
                            max="500"
                            className="slider"
                            name="imageDimension"
                            value={imageDimension}
                            onChange={(e) => setImageDimension(e.target.value)}
                        />
                    </div>
                </div>
                <div className="mobile-view-wrapper">
                    <div className="artboard roboto">
                        <foreignObject ref={screenshotRef}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={imageDimension + "%"}
                                viewBox="0 0 1779 3852"
                            >
                                <defs>
                                    <linearGradient
                                        id="linear-gradient"
                                        x1="0.5"
                                        x2="0.5"
                                        y2="1"
                                        gradientUnits="objectBoundingBox"
                                    >
                                        <stop offset="0" stopColor="#237142"></stop>
                                        <stop offset="0" stopColor="#13482e"></stop>
                                        <stop offset="0.243" stopColor="#13482e"></stop>
                                        <stop offset="1" stopColor="#216e40"></stop>
                                    </linearGradient>
                                </defs>
                                <g data-name="Group 329" transform="translate(-2125 -127)">
                                    <path
                                        fill="#fff"
                                        d="M0 0H1779V3852H0z"
                                        data-name="Rectangle 75"
                                        transform="translate(2125 127)"
                                    ></path>
                                    <path
                                        fill="url(#linear-gradient)"
                                        d="M0 0H1779V977H0z"
                                        data-name="Rectangle 76"
                                        transform="translate(2125 127)"
                                    ></path>
                                    <path
                                        fill="#f4f2f7"
                                        d="M0 0H1779V78H0z"
                                        data-name="Rectangle 77"
                                        transform="translate(2125 1104)"
                                    ></path>
                                    <path
                                        fill="none"
                                        stroke="#c1c1c1"
                                        strokeWidth="5"
                                        d="M0 0L1774.33 0"
                                        data-name="Line 29"
                                        transform="translate(2127.078 3710.98)"
                                    ></path>
                                    <text
                                        fill="#fff"
                                        data-name="12:41"
                                        fontFamily="Roboto-Bold, Roboto"
                                        fontSize="73"
                                        fontWeight="700"
                                        transform="translate(2272.307 283.262)"
                                    >
                                        <tspan x="0" y="0">
                                            {data.time}
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#fff"
                                        data-name="View Details"
                                        fontFamily="Roboto-Medium, Roboto"
                                        fontSize="77"
                                        fontWeight="500"
                                        transform="translate(2796.279 490.874)"
                                    >
                                        <tspan x="0" y="0">
                                            View Details
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#5bcc5a"
                                        data-name="Money Received"
                                        fontFamily="Roboto-Medium, Roboto"
                                        fontSize="146"
                                        fontWeight="500"
                                        transform="translate(2473.418 789.573)"
                                    >
                                        <tspan x="0" y="0">
                                            Money Received
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#fff"
                                        data-name="Status: Autodeposited"
                                        fontFamily="Roboto-Medium, Roboto"
                                        fontSize="69"
                                        fontWeight="500"
                                        opacity="0.82"
                                        transform="translate(2665.918 981.515)"
                                    >
                                        <tspan x="0" y="0">
                                            Status: Autodeposited
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#1e663c"
                                        data-name="Date Deposited"
                                        fontFamily="Roboto-Bold, Roboto"
                                        fontSize="54"
                                        fontWeight="700"
                                        transform="translate(2201.674 1331.185)"
                                    >
                                        <tspan x="0" y="0">
                                            Date Deposited
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#131212"
                                        data-name="Thu, Apr 25, 2024"
                                        fontFamily="Roboto-Bold, Roboto"
                                        fontSize="68"
                                        fontWeight="700"
                                        transform="translate(2761.016 1338.874)"
                                    >
                                        <tspan x="0" y="0">
                                            {data.depoite_date}
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#206c3f"
                                        fontFamily="Roboto-Bold, Roboto"
                                        fontSize="54"
                                        fontWeight="700"
                                        transform="translate(2201.055 1604.437)"
                                    >
                                        <tspan x="0" y="0">
                                            Sender
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#131212"
                                        data-name="Eric Peter Bustamante"
                                        fontFamily="Roboto-Bold, Roboto"
                                        fontSize="68"
                                        fontWeight="700"
                                        transform="translate(2765 1613)"
                                    >
                                        <tspan x="0" y="0">
                                            {data.sender}
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#131212"
                                        data-name="$220.57"
                                        fontFamily="Roboto-Bold, Roboto"
                                        fontSize="68"
                                        fontWeight="700"
                                        transform="translate(2765.766 1874.912)"
                                    >
                                        <tspan x="0" y="0">
                                            {data.amount}
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#206c3f"
                                        fontFamily="Roboto-Bold, Roboto"
                                        fontSize="54"
                                        fontWeight="700"
                                        transform="translate(2204 1879)"
                                    >
                                        <tspan x="0" y="0">
                                            Amount
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#206c3f"
                                        fontFamily="Roboto-Bold, Roboto"
                                        fontSize="54"
                                        fontWeight="700"
                                        transform="translate(2201.84 2240.204)"
                                    >
                                        <tspan x="0" y="0">
                                            Recipient
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#131212"
                                        data-name="ERIC PETER AGUILAR BUSTAMANTE"
                                        fontFamily="Roboto-Bold, Roboto"
                                        fontSize="68"
                                        fontWeight="700"
                                        transform="translate(2765 2153)"
                                    >
                                        <tspan x="0" y="0">
                                            {data.recipient}
                                        </tspan>
                                        <tspan x="0" y="82">
                                            {data.recipient2}
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#6e6e6e"
                                        data-name="bustamanteeric571@gmail.com"
                                        fontFamily="Roboto-Medium, Roboto"
                                        fontSize="55"
                                        fontWeight="600"
                                        transform="translate(2763.988 2323.311)"
                                    >
                                        <tspan x="0" y="0">
                                            {data.recipientEmail}
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#206c3f"
                                        data-name="Deposited To"
                                        fontFamily="Roboto-Bold, Roboto"
                                        fontSize="54"
                                        fontWeight="700"
                                        transform="translate(2204.055 2701.446)"
                                    >
                                        <tspan x="0" y="0">
                                            Deposited To
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#131212"
                                        data-name="TD STUDENT CHEQUING ACCOUNT"
                                        fontFamily="Roboto-Bold, Roboto"
                                        fontSize="68"
                                        fontWeight="700"
                                        transform="translate(2765 2623)"
                                    >
                                        <tspan x="0" y="0">
                                            {data.deposited_to}
                                        </tspan>
                                        <tspan x="0" y="82">
                                            {data.deposited_to2}
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#6e6e6e"
                                        data-name="6616674"
                                        fontFamily="Roboto-Medium, Roboto"
                                        fontSize="55"
                                        fontWeight="600"
                                        transform="translate(2769.66 2797.02)"
                                    >
                                        <tspan x="0" y="0">
                                            {data.deposited_number}
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#206c3f"
                                        fontFamily="Roboto-Bold, Roboto"
                                        fontSize="54"
                                        fontWeight="700"
                                        transform="translate(2205.613 3062.961)"
                                    >
                                        <tspan x="0" y="0">
                                            Message
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#131212"
                                        fontFamily="Roboto-Bold, Roboto"
                                        fontSize="68"
                                        fontWeight="700"
                                        transform="translate(2765 3072)"
                                    >
                                        <tspan x="0" y="0">
                                            {data.message}
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#206c3f"
                                        data-name="Confirmation #"
                                        fontFamily="Roboto-Bold, Roboto"
                                        fontSize="54"
                                        fontWeight="700"
                                        transform="translate(2205.064 3333.059)"
                                    >
                                        <tspan x="0" y="0">
                                            Confirmation #
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#131212"
                                        data-name="C1BXvf***tgc"
                                        fontFamily="Roboto-Bold, Roboto"
                                        fontSize="68"
                                        fontWeight="700"
                                        transform="translate(2761.996 3341.748)"
                                    >
                                        <tspan x="0" y="0">
                                            {data.confirmation}
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#206c3f"
                                        fontFamily="Roboto-Bold, Roboto"
                                        fontSize="52"
                                        fontWeight="700"
                                        transform="translate(2202.377 3604.155)"
                                    >
                                        <tspan x="0" y="0">
                                            Method
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#141414"
                                        fontFamily="Roboto-Bold, Roboto"
                                        fontSize="67"
                                        fontWeight="700"
                                        transform="translate(2766.664 3610.845)"
                                    >
                                        <tspan x="0" y="0">
                                            Email
                                        </tspan>
                                    </text>
                                    <path
                                        fill="#fff"
                                        d="M6.882 0l58.254 1.165a6.649 6.649 0 017.1 5.439c.062 2.909-3.021 5.24-6.881 5.161L7.1 10.6A6.649 6.649 0 010 5.163C-.057 2.229 3.018-.073 6.882 0z"
                                        data-name="Path 10"
                                        transform="rotate(-44.03 1677.317 -2497.552)"
                                    ></path>
                                    <path
                                        fill="#fff"
                                        d="M6.882 0l58.254 1.165a6.649 6.649 0 017.1 5.439c.062 2.909-3.021 5.24-6.881 5.161L7.1 10.6A6.649 6.649 0 010 5.163C-.057 2.229 3.018-.073 6.882 0z"
                                        data-name="Path 14"
                                        transform="rotate(40 478.703 3267.948)"
                                    ></path>
                                    <path
                                        fill="#f3f2f7"
                                        d="M0 0H1779V266H0z"
                                        data-name="Rectangle 78"
                                        transform="translate(2125 3713)"
                                    ></path>
                                    <path
                                        fill="none"
                                        stroke="#dfdfe1"
                                        strokeWidth="4"
                                        d="M0 0L1703.689 0"
                                        data-name="Line 30"
                                        transform="translate(2199.797 2903.845)"
                                    ></path>
                                    <path
                                        fill="none"
                                        stroke="#dfdfe1"
                                        strokeWidth="4"
                                        d="M0 0L1703.689 0"
                                        data-name="Line 33"
                                        transform="translate(2199.797 2459.223)"
                                    ></path>
                                    <path
                                        fill="none"
                                        stroke="#dfdfe1"
                                        strokeWidth="4"
                                        d="M0 0L1703.689 0"
                                        data-name="Line 34"
                                        transform="translate(2199.797 1989.67)"
                                    ></path>
                                    <path
                                        fill="none"
                                        stroke="#dfdfe1"
                                        strokeWidth="4"
                                        d="M0 0L1703.689 0"
                                        data-name="Line 35"
                                        transform="translate(2199.797 1719.572)"
                                    ></path>
                                    <path
                                        fill="none"
                                        stroke="#dfdfe1"
                                        strokeWidth="4"
                                        d="M0 0L1703.689 0"
                                        data-name="Line 36"
                                        transform="translate(2199.797 1445.32)"
                                    ></path>
                                    <path
                                        fill="none"
                                        stroke="#dfdfe1"
                                        strokeWidth="4"
                                        d="M0 0L1703.689 0"
                                        data-name="Line 31"
                                        transform="translate(2199.797 3173.941)"
                                    ></path>
                                    <path
                                        fill="none"
                                        stroke="#dfdfe1"
                                        strokeWidth="4"
                                        d="M0 0L1703.689 0"
                                        data-name="Line 32"
                                        transform="translate(2199.797 3448.194)"
                                    ></path>
                                    <rect
                                        width="640"
                                        height="24"
                                        fill="#010101"
                                        data-name="Rectangle 79"
                                        rx="12"
                                        transform="translate(2732 3913)"
                                    ></rect>
                                    <path
                                        fill="none"
                                        stroke="#e2e1e6"
                                        strokeWidth="3"
                                        d="M0 0L0 2531"
                                        data-name="Line 28"
                                        transform="translate(2126.5 1181.5)"
                                    ></path>
                                    <path
                                        fill="none"
                                        stroke="#e2e1e6"
                                        strokeWidth="3"
                                        d="M0 0L0 2531"
                                        data-name="Line 29"
                                        transform="translate(3902.5 1181.5)"
                                    ></path>
                                    <path
                                        fill="none"
                                        stroke="#c1c1c1"
                                        strokeWidth="5"
                                        d="M0 0L1775.908 0.034"
                                        data-name="Line 29"
                                        transform="translate(2125.5 1184.5)"
                                    ></path>
                                    {
                                        battery === "25"
                                            ?
                                            <>
                                                <rect
                                                    width="103"
                                                    height="56"
                                                    fill="#fff"
                                                    data-name="Rectangle 170"
                                                    rx="23"
                                                    transform="translate(3663 233)"
                                                ></rect>
                                                <path
                                                    fill="#818d9d"
                                                    d="M0 0a6 6 0 016 6v2a6 6 0 01-6 6V0z"
                                                    data-name="Rectangle 172"
                                                    transform="translate(3767 255)"
                                                ></path>
                                                <path
                                                    fill="#818d9d"
                                                    d="M0 0h52a23 23 0 0123 23v10a23 23 0 01-23 23H0V0z"
                                                    data-name="Rectangle 171"
                                                    transform="translate(3691 233)"
                                                ></path>
                                                <text
                                                    fill="#0a1032"
                                                    data-name="25"
                                                    fontFamily="HelveticaWorld-Bold, Helvetica World"
                                                    fontSize="47"
                                                    fontWeight="700"
                                                    transform="translate(3687 278)"
                                                >
                                                    <tspan x="0" y="0">
                                                        25
                                                    </tspan>
                                                </text>
                                            </>
                                            :
                                            battery === "50"
                                                ?
                                                <>
                                                    <rect
                                                        width="103"
                                                        height="56"
                                                        fill="#fff"
                                                        data-name="Rectangle 170"
                                                        rx="23"
                                                        transform="translate(3663 233)"
                                                    ></rect>
                                                    <path
                                                        fill="#818d9d"
                                                        d="M0 0a6 6 0 016 6v2a6 6 0 01-6 6V0z"
                                                        data-name="Rectangle 172"
                                                        transform="translate(3767 255)"
                                                    ></path>
                                                    <path
                                                        fill="#818d9d"
                                                        d="M0 0h27a23 23 0 0123 23v10a23 23 0 01-23 23H0V0z"
                                                        data-name="Rectangle 171"
                                                        transform="translate(3716 233)"
                                                    ></path>
                                                    <text
                                                        fill="#0a1032"
                                                        data-name="50"
                                                        fontFamily="HelveticaWorld-Bold, Helvetica World"
                                                        fontSize="47"
                                                        fontWeight="700"
                                                        transform="translate(3687 278)"
                                                    >
                                                        <tspan x="0" y="0">
                                                            50
                                                        </tspan>
                                                    </text>
                                                </>
                                                :
                                                <>
                                                    <rect
                                                        width="103"
                                                        height="56"
                                                        fill="#fff"
                                                        data-name="Rectangle 170"
                                                        rx="23"
                                                        transform="translate(3663 233)"
                                                    ></rect>
                                                    <path
                                                        fill="#818d9d"
                                                        d="M0 0a6 6 0 016 6v3a6 6 0 01-6 6V0z"
                                                        data-name="Rectangle 172"
                                                        transform="translate(3767 254)"
                                                    ></path>
                                                    <path
                                                        fill="#818d9d"
                                                        d="M0 0h3a23 23 0 0123 23v10A23 23 0 013 56H0V0z"
                                                        data-name="Rectangle 171"
                                                        transform="translate(3740 233)"
                                                    ></path>
                                                    <text
                                                        fill="#0a1032"
                                                        data-name="78"
                                                        fontFamily="HelveticaWorld-Bold, Helvetica World"
                                                        fontSize="47"
                                                        fontWeight="700"
                                                        transform="translate(3687 277)"
                                                    >
                                                        <tspan x="0" y="0">
                                                            78
                                                        </tspan>
                                                    </text>
                                                </>
                                    }



                                    {
                                        network === "strong"
                                            ?
                                            <>
                                                <rect
                                                    width="12"
                                                    height="17"
                                                    fill="#fff"
                                                    data-name="Rectangle 35"
                                                    rx="2"
                                                    transform="translate(3450 268)"
                                                ></rect>
                                                <rect
                                                    width="14"
                                                    height="26"
                                                    fill="#fff"
                                                    data-name="Rectangle 36"
                                                    rx="2"
                                                    transform="translate(3472 259)"
                                                ></rect>
                                                <rect
                                                    width="12"
                                                    height="38"
                                                    fill="#fff"
                                                    data-name="Rectangle 37"
                                                    rx="2"
                                                    transform="translate(3495 247)"
                                                ></rect>
                                                <rect
                                                    width="12"
                                                    height="50"
                                                    fill="#fff"
                                                    data-name="Rectangle 38"
                                                    rx="2"
                                                    transform="translate(3518 235)"
                                                ></rect>
                                            </>
                                            :
                                            network === "low"
                                                ?
                                                <>
                                                    <rect
                                                        width="12"
                                                        height="17"
                                                        fill="#fff"
                                                        data-name="Rectangle 35"
                                                        rx="2"
                                                        transform="translate(3450 268)"
                                                    ></rect>
                                                    <rect
                                                        width="14"
                                                        height="26"
                                                        fill="#384965"
                                                        data-name="Rectangle 36"
                                                        rx="2"
                                                        transform="translate(3472 259)"
                                                    ></rect>
                                                    <rect
                                                        width="12"
                                                        height="38"
                                                        fill="#384965"
                                                        data-name="Rectangle 37"
                                                        rx="2"
                                                        transform="translate(3495 247)"
                                                    ></rect>
                                                    <rect
                                                        width="12"
                                                        height="50"
                                                        fill="#384965"
                                                        data-name="Rectangle 38"
                                                        rx="2"
                                                        transform="translate(3518 235)"
                                                    ></rect>
                                                </>
                                                :
                                                <>
                                                    <rect
                                                        width="12"
                                                        height="18"
                                                        fill="#fff"
                                                        data-name="Rectangle 35"
                                                        rx="2"
                                                        transform="translate(3449 267)"
                                                    ></rect>
                                                    <rect
                                                        width="14"
                                                        height="27"
                                                        fill="#fff"
                                                        data-name="Rectangle 36"
                                                        rx="2"
                                                        transform="translate(3472 258)"
                                                    ></rect>
                                                    <rect
                                                        width="14"
                                                        height="39"
                                                        fill="#384965"
                                                        data-name="Rectangle 37"
                                                        rx="2"
                                                        transform="translate(3495 246)"
                                                    ></rect>
                                                    <rect
                                                        width="12"
                                                        height="52"
                                                        fill="#384965"
                                                        data-name="Rectangle 38"
                                                        rx="2"
                                                        transform="translate(3520 233)"
                                                    ></rect>
                                                </>
                                    }
                                    {
                                        net === "4G"
                                            ?
                                            <text
                                                fill="#fff"
                                                data-name="4G"
                                                fontFamily="Roboto-Medium, Roboto"
                                                fontSize="55"
                                                fontWeight="600"
                                                transform="translate(3565 278)"
                                            >
                                                <tspan x="0" y="0">
                                                    4G
                                                </tspan>
                                            </text>
                                            :
                                            net === "5G"
                                                ?
                                                <text
                                                    fill="#fff"
                                                    data-name="5G"
                                                    fontFamily="Roboto-Medium, Roboto"
                                                    fontSize="55"
                                                    fontWeight="600"
                                                    transform="translate(3565 279)"
                                                >
                                                    <tspan x="0" y="0">
                                                        5G
                                                    </tspan>
                                                </text>
                                                :
                                                <g data-name="Group 327" transform="translate(-7 107)">
                                                    <g fill="#fff" data-name="Group 328" transform="translate(9 -108)">
                                                        <path
                                                            d="M100.484 192a53.985 53.985 0 00-36.172 14.42 1.3 1.3 0 00-.049 1.862l4.36 4.556a1.341 1.341 0 001.894.049 43.871 43.871 0 0129.983-11.709 43.871 43.871 0 0129.982 11.709 1.341 1.341 0 001.894-.049l4.36-4.556a1.3 1.3 0 00-.049-1.862A54.13 54.13 0 00100.484 192z"
                                                            data-name="Path 7"
                                                            transform="translate(3495.117 42.902)"
                                                        ></path>
                                                        <path
                                                            d="M221.945 433.227l4.67 4.621a1.339 1.339 0 001.829.049 25.4 25.4 0 0133.608 0 1.339 1.339 0 001.829-.049l4.67-4.621a1.3 1.3 0 00-.049-1.911 34.825 34.825 0 00-46.541 0 1.331 1.331 0 00-.016 1.911zm23.32 7.626a13.306 13.306 0 00-9.7 4.164 1.306 1.306 0 00.033 1.829l8.72 8.606a1.34 1.34 0 001.894 0l8.72-8.606a1.306 1.306 0 00.033-1.829 13.369 13.369 0 00-9.7-4.164z"
                                                            data-name="Path 8"
                                                            transform="translate(3350.336 -168.685)"
                                                        ></path>
                                                    </g>
                                                </g>
                                    }
                                </g>
                            </svg>
                        </foreignObject>
                    </div>
                </div>
            </div >
            <div className="billing_childs">
                <div className="app-heading">
                    <h3>CONTROLS</h3>
                </div>
                <div className="global_form_wrapper">
                    <div className="global_form_inner">
                        <label>Time</label>
                        <input
                            type="text"
                            value={data.time}
                            name="time"
                            onChange={(e) => onChangeHandler(e)}
                        />
                    </div>
                    <div className="global_form_inner">
                        <label>Deposited Date</label>
                        <input
                            type="text"
                            value={data.depoite_date}
                            name="depoite_date"
                            onChange={(e) => onChangeHandler(e)}
                        />
                    </div>
                    <div className="global_form_inner">
                        <label>Sender</label>
                        <input
                            type="text"
                            value={data.sender}
                            name="sender"
                            onChange={(e) => onChangeHandler(e)}
                        />
                    </div>
                    <div className="global_form_inner">
                        <label>Amount</label>
                        <input
                            type="text"
                            value={data.amount}
                            name="amount"
                            onChange={(e) => onChangeHandler(e)}
                        />
                    </div>
                    <div className="global_form_inner">
                        <label>Recipient</label>
                        <input
                            type="text"
                            value={data.recipient}
                            name="recipient"
                            onChange={(e) => onChangeHandler(e)}
                        />
                        <input
                            type="text"
                            value={data.recipient2}
                            name="recipient2"
                            onChange={(e) => onChangeHandler(e)}
                        />
                        <input
                            type="text"
                            value={data.recipientEmail}
                            name="recipientEmail"
                            onChange={(e) => onChangeHandler(e)}
                        />
                    </div>
                    <div className="global_form_inner">
                        <label>Deposited To</label>
                        <input
                            type="text"
                            value={data.deposited_to}
                            name="deposited_to"
                            onChange={(e) => onChangeHandler(e)}
                        />
                        <input
                            type="text"
                            value={data.deposited_to2}
                            name="deposited_to2"
                            onChange={(e) => onChangeHandler(e)}
                        />
                        <input
                            type="text"
                            value={data.deposited_number}
                            name="deposited_number"
                            onChange={(e) => onChangeHandler(e)}
                        />
                    </div>
                    <div className="global_form_inner">
                        <label>Message</label>
                        <input
                            type="text"
                            value={data.message}
                            name="message"
                            onChange={(e) => onChangeHandler(e)}
                        />
                    </div>
                    <div className="global_form_inner">
                        <label>Confirmation</label>
                        <input
                            type="text"
                            value={data.confirmation}
                            name="confirmation"
                            onChange={(e) => onChangeHandler(e)}
                        />
                    </div>
                </div>
                <div className="global_form_wrapper">
                    <div className="manage-heders">
                        <div className="global_form_inner">
                            <label>Network</label>
                            <select
                                onChange={(e) => setNetwork(e.target.value)}
                                value={network}
                                name="network"
                            >
                                <option value="strong">--Choose Network--</option>
                                <option value="strong">Strong</option>
                                <option value="mid">Mid</option>
                                <option value="low">Low</option>
                            </select>
                        </div>
                        <div className="global_form_inner">
                            <label>Internet (Wi-Fi, 5G, 4G)</label>
                            <select
                                onChange={(e) => setNet(e.target.value)}
                                value={net}
                                name="net"
                            >
                                <option value="wifi">--Choose Internet--</option>
                                <option value="wifi">Wi-Fi</option>
                                <option value="4G">4G</option>
                                <option value="5G">5G</option>
                            </select>
                        </div>
                        <div className="global_form_inner">
                            <label>Battery</label>
                            <select
                                onChange={(e) => setBattery(e.target.value)}
                                value={battery}
                                name="battery"
                            >
                                <option value="78">--Choose Battery--</option>
                                <option value="78">78%</option>
                                <option value="50">50%</option>
                                <option value="25">25%</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SeventyPage;