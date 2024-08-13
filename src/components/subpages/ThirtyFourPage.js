import React, { useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import { write } from 'clipboard-polyfill';
import "../../assets/styles/secondpage.scss";
import { ToastContainer, toast } from 'react-toastify';

const ThirtyFourPage = () => {
    const screenshotRef = useRef(null);

    const [data, setData] = useState({
        amount: "846.5 USDT",
        time: "2023-12-25 19:18:22",
        network: "TRC20",
    });

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
                    <h3>PREVIEW - <span>Mobile 34</span></h3>
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
                    <div className="artboard">
                        <foreignObject ref={screenshotRef}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={imageDimension + "% "}
                                viewBox="0 0 1930 3795"
                            >
                                <defs>
                                    <linearGradient
                                        id="linear-gradient"
                                        x1="0.023"
                                        x2="1"
                                        y1="0.5"
                                        y2="0.5"
                                        gradientUnits="objectBoundingBox"
                                    >
                                        <stop offset="0" stopColor="#0ec881" stopOpacity="0.051"></stop>
                                        <stop offset="1" stopColor="#0ec881"></stop>
                                    </linearGradient>
                                </defs>
                                <g data-name="Group 141" transform="translate(-2357 -128)">
                                    <path
                                        fill="#fff"
                                        d="M0 0H1930V3795H0z"
                                        data-name="Rectangle 173"
                                        transform="translate(2357 128)"
                                    ></path>
                                    <path
                                        fill="#fffbff"
                                        d="M0 0H1750V1394H0z"
                                        data-name="Rectangle 181"
                                        transform="translate(2447 1387)"
                                    ></path>
                                    <g data-name="Group 120">
                                        <circle
                                            cx="173"
                                            cy="173"
                                            r="173"
                                            fill="#0ec881"
                                            data-name="Ellipse 26"
                                            transform="translate(3149.5 430)"
                                        ></circle>
                                        <circle
                                            cx="236.5"
                                            cy="236.5"
                                            r="236.5"
                                            fill="url(#linear-gradient)"
                                            data-name="Ellipse 25"
                                            transform="translate(3085.5 366)"
                                        ></circle>
                                        <path
                                            fill="#fff"
                                            d="M10651.25-12450.25l23.25-23.25 49.888 49.888 18.308-18.308 81.193-81.193 25.373 25.374-123.5 123.5z"
                                            data-name="Path 45"
                                            transform="translate(-7427.756 13057)"
                                        ></path>
                                        <path
                                            fill="#0d8b5c"
                                            d="M0 0H31V31H0z"
                                            data-name="Rectangle 174"
                                            transform="rotate(44.03 1152.325 4074.552)"
                                        ></path>
                                        <path
                                            fill="#0d8b5c"
                                            d="M0 0H16V16H0z"
                                            data-name="Rectangle 175"
                                            transform="rotate(44.03 1252.703 4608.068)"
                                        ></path>
                                        <path
                                            fill="#0d8b5c"
                                            d="M0 0H22.668V22.668H0z"
                                            data-name="Rectangle 176"
                                            transform="rotate(44.03 838.413 4775.573)"
                                        ></path>
                                        <path
                                            fill="#0d8b5c"
                                            d="M0 0H22.668V22.668H0z"
                                            data-name="Rectangle 177"
                                            transform="rotate(44.03 795.562 4054.768)"
                                        ></path>
                                        <path
                                            fill="#fff"
                                            d="M10651.25-12450.25l23.25-23.25 49.888 49.888 18.308-18.308 81.193-81.193 25.373 25.374-123.5 123.5z"
                                            data-name="Path 46"
                                            transform="translate(-7427.756 13057)"
                                        ></path>
                                    </g>
                                    <text
                                        data-name="Request Submitted"
                                        fontFamily="Roboto-Medium, Roboto"
                                        fontSize="122"
                                        fontWeight="500"
                                        transform="translate(2801.5 1145)"
                                    >
                                        <tspan x="0" y="0">
                                            Request Submitted
                                        </tspan>
                                    </text>
                                    <text
                                        data-name="Withdrawal Request Submitted"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="100"
                                        transform="translate(2677 1591)"
                                    >
                                        <tspan x="0" y="0">
                                            Withdrawal Request Submitted
                                        </tspan>
                                    </text>
                                    <text
                                        data-name="System Processing"
                                        fontFamily="Roboto-Medium, Roboto"
                                        fontSize="100"
                                        fontWeight="500"
                                        transform="translate(2677 2011)"
                                    >
                                        <tspan x="0" y="0">
                                            System Processing
                                        </tspan>
                                    </text>
                                    <text
                                        data-name="System Processing"
                                        fontFamily="Roboto-Medium, Roboto"
                                        fontSize="100"
                                        fontWeight="500"
                                        transform="translate(2671 2277)"
                                    >
                                        <tspan x="0" y="0">
                                            System Processing
                                        </tspan>
                                    </text>
                                    <text
                                        data-name="Withdrawal Request Successful"
                                        fontFamily="Roboto-Medium, Roboto"
                                        fontSize="100"
                                        fontWeight="500"
                                        transform="translate(2677 2433)"
                                    >
                                        <tspan x="0" y="0">
                                            Withdrawal Request Successful
                                        </tspan>
                                    </text>
                                    <path
                                        fill="#fffbff"
                                        d="M0 0H1750V412H0z"
                                        data-name="Rectangle 180"
                                        transform="translate(2447 2881)"
                                    ></path>
                                    <text
                                        data-name="846.5 USDT"
                                        fontFamily="Roboto-Bold, Roboto"
                                        fontSize="80"
                                        fontWeight="700"
                                        transform="translate(3699 3001)"
                                    >
                                        <tspan x="430" y="0" textAnchor="end">
                                            {data.amount}
                                        </tspan>
                                    </text>
                                    <text
                                        data-name="TRX"
                                        fontFamily="Roboto-Bold, Roboto"
                                        fontSize="80"
                                        fontWeight="700"
                                        transform="translate(3975 3217)"
                                    >
                                        <tspan x="150" y="0" textAnchor="end">
                                            {data.network}
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#e7bb1b"
                                        data-name="Why Hasn't My Withdrawal Arrived? &gt;"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="65"
                                        transform="translate(2677 2149)"
                                    >
                                        <tspan x="0" y="0">
                                            Why Hasn&apos;t My Withdrawal Arrived? &gt;
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#9a9a9a"
                                        data-name="2023-12-25 19:18:22"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="74"
                                        transform="translate(2677 1722)"
                                    >
                                        <tspan x="0" y="0">
                                            {data.time}
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#9a9a9a"
                                        data-name="Please note that you will received an email"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="74"
                                        transform="translate(2674 2567)"
                                    >
                                        <tspan x="0" y="0">
                                            Please note that you will received an email
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#9a9a9a"
                                        data-name="once it is completed"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="74"
                                        transform="translate(2674 2656)"
                                    >
                                        <tspan x="0" y="0">
                                            once it is completed
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#9a9a9a"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="82"
                                        transform="translate(2551 3001)"
                                    >
                                        <tspan x="0" y="0">
                                            Amount
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#9a9a9a"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="82"
                                        transform="translate(2551 3220)"
                                    >
                                        <tspan x="0" y="0">
                                            Network
                                        </tspan>
                                    </text>
                                    <g data-name="Group 116" transform="translate(2087)">
                                        <path
                                            fill="#e9e9e9"
                                            d="M0 0H7V808H0z"
                                            data-name="Rectangle 178"
                                            transform="translate(449 1584)"
                                        ></path>
                                        <circle
                                            cx="38"
                                            cy="38"
                                            r="38"
                                            fill="#ebb410"
                                            data-name="Ellipse 27"
                                            transform="translate(414 1519)"
                                        ></circle>
                                        <circle
                                            cx="38"
                                            cy="38"
                                            r="38"
                                            fill="#ebb410"
                                            data-name="Ellipse 28"
                                            transform="translate(414 1936)"
                                        ></circle>
                                        <circle
                                            cx="15"
                                            cy="15"
                                            r="15"
                                            fill="#e9e9e9"
                                            data-name="Ellipse 29"
                                            transform="translate(437 2372)"
                                        ></circle>
                                        <path
                                            fill="#fff"
                                            d="M10651.25-12507.125l5.1-5.1 10.947 10.946 4.018-4.017 17.816-17.816 5.566 5.567-27.1 27.1z"
                                            data-name="Path 47"
                                            transform="translate(-10221.25 14064.113)"
                                        ></path>
                                        <path
                                            fill="#fff"
                                            d="M10651.25-12507.125l5.1-5.1 10.947 10.946 4.018-4.017 17.816-17.816 5.566 5.567-27.1 27.1z"
                                            data-name="Path 48"
                                            transform="translate(-10221.25 14481.113)"
                                        ></path>
                                    </g>
                                </g>
                            </svg>
                        </foreignObject>
                    </div>
                </div>
            </div>
            <div className="billing_childs">
                <div className="app-heading">
                    <h3>CONTROLS</h3>
                </div>
                <div className="global_form_wrapper">
                    <div className="global_form_inner">
                        <label>Date</label>
                        <input
                            type="text"
                            value={data.time}
                            name="time"
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
                        <label>Network</label>
                        <input
                            type="text"
                            value={data.network}
                            name="network"
                            onChange={(e) => onChangeHandler(e)}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ThirtyFourPage;