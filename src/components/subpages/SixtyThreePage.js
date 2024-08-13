import React, { useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import { write } from 'clipboard-polyfill';
import "../../assets/styles/secondpage.scss";
import { ToastContainer, toast } from 'react-toastify';

const SixtyThreePage = () => {
    const screenshotRef = useRef(null);

    const [data, setData] = useState({
        time: "17:27",
        amount: "229.0031 USDT",
        date: "2024-05-10 17:16:48",
        walletAddress1: "TWz5p9aPr7rog61eW",
        walletAddress2: "QSoc2fFNRJWC21fCV",
        walletAddress3: "e76aefdb85482f39e2",
        walletAddress4: "ae5e3a6291945f0b61",
        walletAddress5: "1a7248e7f4a99e5590",
        walletAddress6: "54d0dda31",
    });

    const [imageDimension, setImageDimension] = useState("167");

    const [network, setNetwork] = useState("strong");
    const [net, setNet] = useState("5G");
    const [battery, setBattery] = useState("25");

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
                    <h3>PREVIEW - <span>Mobile 63</span></h3>
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
                                viewBox="0 0 1803 3932"
                            >
                                <g data-name="Group 309" transform="translate(-2633 -95)">
                                    <g data-name="Group 308">
                                        <g
                                            fill="#100f14"
                                            stroke="#707070"
                                            strokeWidth="1"
                                            data-name="Rectangle 21"
                                            transform="translate(2633 95)"
                                        >
                                            <path stroke="none" d="M0 0H1803V3932H0z"></path>
                                            <path fill="none" d="M0.5 0.5H1802.5V3931.5H0.5z"></path>
                                        </g>
                                        <text
                                            fill="#fff"
                                            data-name="17:27"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="66"
                                            letterSpacing=".01em"
                                            transform="translate(2774.664 206.195)"
                                        >
                                            <tspan x="0" y="0">
                                                {data.time}
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#fff"
                                            data-name="Withdrawal Details"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="80"
                                            letterSpacing=".04em"
                                            transform="translate(3176.029 436.078)"
                                        >
                                            <tspan x="0" y="0">
                                                Withdrawal Details
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#747379"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="60"
                                            letterSpacing=".01em"
                                            transform="translate(3421.529 702.238)"
                                        >
                                            <tspan x="0" y="0">
                                                Quantity
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#fafafc"
                                            data-name="229.0031 USDT"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="88"
                                            letterSpacing=".02em"
                                            transform="translate(3216.004 845.713)"
                                        >
                                            <tspan x="320" y="0" textAnchor="middle" className="ibm">
                                                {data.amount}
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#36a078"
                                            data-name="Withdrawal Completed"
                                            fontFamily="Roboto-Medium, Roboto"
                                            fontSize="56"
                                            fontWeight="500"
                                            letterSpacing=".07em"
                                            transform="translate(3249.967 963.318)"
                                        >
                                            <tspan x="0" y="0">
                                                Withdrawal Completed
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#828282"
                                            data-name="Withdrawal Account"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="58"
                                            letterSpacing=".03em"
                                            transform="translate(2771.632 1274.576)"
                                        >
                                            <tspan x="-80" y="0">
                                                Withdrawal Account
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#dbdbdc"
                                            data-name="Funding Account"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="58"
                                            letterSpacing=".04em"
                                            transform="translate(3903.699 1274.576)"
                                        >
                                            <tspan x="0" y="0">
                                                Funding Account
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#dbdbdc"
                                            data-name="1.3"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="59"
                                            letterSpacing=".02em"
                                            transform="translate(4289 1420.164)"
                                        >
                                            <tspan x="0" y="0">
                                                1.3
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#828282"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="57"
                                            letterSpacing=".01em"
                                            transform="translate(2774.685 1418.164)"
                                        >
                                            <tspan x="-80" y="0">
                                                Fees
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#828282"
                                            data-name="Chain Type"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="58"
                                            letterSpacing=".01em"
                                            transform="translate(2775.227 1575.803)"
                                        >
                                            <tspan x="-80" y="0">
                                                Chain Type
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#dbdbdc"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="57"
                                            letterSpacing=".02em"
                                            transform="translate(4197.863 1574.803)"
                                        >
                                            <tspan x="0" y="0">
                                                TRC20
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#828282"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="58"
                                            letterSpacing=".01em"
                                            transform="translate(2774.978 1720.391)"
                                        >
                                            <tspan x="-80" y="0">
                                                Time
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#828282"
                                            data-name="Withdrawal Address"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="58"
                                            letterSpacing=".02em"
                                            transform="translate(2773.094 1873.012)"
                                        >
                                            <tspan x="-80" y="0">
                                                Withdrawal Address
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#dbdbdc"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="58"
                                            letterSpacing=".04em"
                                            transform="translate(3691.66 1864.979)"
                                        >
                                            <tspan x="605" y="0" textAnchor="end">
                                                {data.walletAddress1}
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#dbdbdc"
                                            data-name="2024-05-10 17:16:48"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="58"
                                            letterSpacing=".04em"
                                            transform="translate(3800.863 1720.391)"
                                        >
                                            <tspan x="568" y="0" textAnchor="end">
                                                {data.date}
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#dbdbdc"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="58"
                                            letterSpacing=".04em"
                                            transform="translate(3674.5 1941.289)"
                                        >
                                            <tspan x="620" y="0" textAnchor="end">
                                                {data.walletAddress2}
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#828282"
                                            data-name="Transaction Hash"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="58"
                                            letterSpacing=".03em"
                                            transform="translate(2773.311 2105.959)"
                                        >
                                            <tspan x="-80" y="0">
                                                Transaction Hash
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#dbdbdc"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="58"
                                            letterSpacing=".07em"
                                            transform="translate(3675.004 2097.926)"
                                        >
                                            <tspan x="622" y="0" textAnchor="end">
                                                {data.walletAddress3}
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#dbdbdc"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="58"
                                            letterSpacing=".07em"
                                            transform="translate(3665 2178)"
                                        >
                                            <tspan x="636" y="0" textAnchor="end">
                                                {data.walletAddress4}
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#dbdbdc"
                                            data-name="1a7248e7f4a99e5590"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="58"
                                            letterSpacing=".07em"
                                            transform="translate(3661.127 2258.58)"
                                        >
                                            <tspan x="638" y="0" textAnchor="end">
                                                {data.walletAddress5}
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#dbdbdc"
                                            data-name="54d0dda31"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="58"
                                            letterSpacing=".07em"
                                            transform="translate(3976.072 2338.906)"
                                        >
                                            <tspan x="324" y="0" textAnchor="end">
                                                {data.walletAddress6}
                                            </tspan>
                                        </text>
                                        <g
                                            fill="#132a22"
                                            stroke="#409a76"
                                            strokeWidth="1"
                                            data-name="Ellipse 1"
                                            opacity="0.54"
                                            transform="translate(3170.999 914)"
                                        >
                                            <ellipse
                                                cx="30"
                                                cy="30.5"
                                                stroke="none"
                                                rx="30"
                                                ry="30.5"
                                            ></ellipse>
                                            <ellipse cx="30" cy="30.5" fill="none" rx="29.5" ry="30"></ellipse>
                                        </g>
                                        <path
                                            fill="#2e946c"
                                            d="M27.837 96.619a2.1 2.1 0 010 2.928L11.546 116.1a2.008 2.008 0 01-2.884 0l-8.141-8.271a2.1 2.1 0 010-2.928 2.008 2.008 0 012.884 0l6.707 6.828 14.86-15.089a2.008 2.008 0 012.884 0z"
                                            transform="translate(3187.135 838.094)"
                                        ></path>
                                        <g
                                            fill="#16171b"
                                            stroke="#828282"
                                            strokeWidth="1"
                                            data-name="Rectangle 22"
                                            opacity="0.67"
                                            transform="translate(2701 3601)"
                                        >
                                            <rect width="1671" height="201" stroke="none" rx="9"></rect>
                                            <rect
                                                width="1670"
                                                height="200"
                                                x="0.5"
                                                y="0.5"
                                                fill="none"
                                                rx="8.5"
                                            ></rect>
                                        </g>
                                        <text
                                            fill="#d2d2d3"
                                            data-name="View in Blockchain Explorer"
                                            fontFamily="Roboto-Medium, Roboto"
                                            fontSize="63"
                                            fontWeight="500"
                                            letterSpacing=".06em"
                                            transform="translate(3087.919 3725.529)"
                                        >
                                            <tspan x="0" y="0">
                                                View in Blockchain Explorer
                                            </tspan>
                                        </text>
                                        <rect
                                            width="659"
                                            height="16"
                                            fill="#fff"
                                            data-name="Rectangle 23"
                                            rx="8"
                                            transform="translate(3207 3979)"
                                        ></rect>
                                        <path
                                            d="M0 0H1791V48H0z"
                                            data-name="Rectangle 24"
                                            transform="translate(2637 1087)"
                                        ></path>
                                        <g
                                            fill="#d2c9c9"
                                            data-name="Group 304"
                                            transform="translate(-245.76 76)"
                                        >
                                            <path
                                                d="M37.968 59.189L10.125 32.516 38.747 4.673 33.49 0 0 32.516l10.977 10.339 22.513 21.2z"
                                                data-name="Path 15"
                                                transform="translate(2980.783 305)"
                                            ></path>
                                            <path
                                                d="M0 0H65.209V7.132H0z"
                                                data-name="Rectangle 72"
                                                transform="translate(2988.791 334.24)"
                                            ></path>
                                        </g>
                                        <g
                                            stroke="#707070"
                                            strokeWidth="3"
                                            data-name="Group 305"
                                            transform="translate(1878 -5)"
                                        >
                                            <g
                                                fill="none"
                                                data-name="Rectangle 408"
                                                transform="translate(2448 2067)"
                                            >
                                                <path stroke="none" d="M0 0H37V37H0z"></path>
                                                <path d="M1.5 1.5H35.5V35.5H1.5z"></path>
                                            </g>
                                            <g
                                                fill="#100f14"
                                                data-name="Rectangle 407"
                                                transform="translate(2458 2055)"
                                            >
                                                <path stroke="none" d="M0 0H37V37H0z"></path>
                                                <path fill="none" d="M1.5 1.5H35.5V35.5H1.5z"></path>
                                            </g>
                                        </g>
                                        <g
                                            stroke="#707070"
                                            strokeWidth="3"
                                            data-name="Group 306"
                                            transform="translate(1878 -234)"
                                        >
                                            <g
                                                fill="none"
                                                data-name="Rectangle 408"
                                                transform="translate(2448 2067)"
                                            >
                                                <path stroke="none" d="M0 0H37V37H0z"></path>
                                                <path d="M1.5 1.5H35.5V35.5H1.5z"></path>
                                            </g>
                                            <g
                                                fill="#100f14"
                                                data-name="Rectangle 407"
                                                transform="translate(2458 2055)"
                                            >
                                                <path stroke="none" d="M0 0H37V37H0z"></path>
                                                <path fill="none" d="M1.5 1.5H35.5V35.5H1.5z"></path>
                                            </g>
                                        </g>


                                        {
                                            battery === "25"
                                                ?
                                                <>
                                                    <rect
                                                        width="112"
                                                        height="62"
                                                        fill="#fff"
                                                        data-name="Rectangle 170"
                                                        rx="23"
                                                        transform="translate(4211 155)"
                                                    ></rect>
                                                    <path
                                                        fill="#818d9d"
                                                        d="M0 0a6 6 0 016 6v4a6 6 0 01-6 6V0z"
                                                        data-name="Rectangle 172"
                                                        transform="translate(4325 179)"
                                                    ></path>
                                                    <path
                                                        fill="#818d9d"
                                                        d="M0 0h58a23 23 0 0123 23v16a23 23 0 01-23 23H0V0z"
                                                        data-name="Rectangle 171"
                                                        transform="translate(4242 155)"
                                                    ></path>
                                                    <text
                                                        fill="#0a1032"
                                                        data-name="25"
                                                        fontFamily="HelveticaWorld-Bold, Helvetica World"
                                                        fontSize="51"
                                                        fontWeight="700"
                                                        transform="translate(4237 204)"
                                                    >
                                                        <tspan x="0" y="0">
                                                            
                                                        </tspan>
                                                    </text>
                                                </>
                                                :
                                                battery === "50"
                                                    ?
                                                    <>
                                                        <rect
                                                            width="112"
                                                            height="62"
                                                            fill="#fff"
                                                            data-name="Rectangle 170"
                                                            rx="23"
                                                            transform="translate(4211 155)"
                                                        ></rect>
                                                        <path
                                                            fill="#818d9d"
                                                            d="M0 0a6 6 0 016 6v4a6 6 0 01-6 6V0z"
                                                            data-name="Rectangle 172"
                                                            transform="translate(4325 179)"
                                                        ></path>
                                                        <path
                                                            fill="#818d9d"
                                                            d="M0 0h31a23 23 0 0123 23v16a23 23 0 01-23 23H0V0z"
                                                            data-name="Rectangle 171"
                                                            transform="translate(4269 155)"
                                                        ></path>
                                                        <text
                                                            fill="#0a1032"
                                                            data-name="50"
                                                            fontFamily="HelveticaWorld-Bold, Helvetica World"
                                                            fontSize="51"
                                                            fontWeight="700"
                                                            transform="translate(4237 204)"
                                                        >
                                                            <tspan x="0" y="0">
                                                                
                                                            </tspan>
                                                        </text>
                                                    </>
                                                    :
                                                    <>
                                                        <rect
                                                            width="112"
                                                            height="62"
                                                            fill="#fff"
                                                            data-name="Rectangle 170"
                                                            rx="23"
                                                            transform="translate(4211 155)"
                                                        ></rect>
                                                        <path
                                                            fill="#818d9d"
                                                            d="M0 0a6 6 0 016 6v5a6 6 0 01-6 6V0z"
                                                            data-name="Rectangle 172"
                                                            transform="translate(4325 178)"
                                                        ></path>
                                                        <path
                                                            fill="#818d9d"
                                                            d="M0 0h5a23 23 0 0123 23v16A23 23 0 015 62H0V0z"
                                                            data-name="Rectangle 171"
                                                            transform="translate(4295 155)"
                                                        ></path>
                                                        <text
                                                            fill="#0a1032"
                                                            data-name="78"
                                                            fontFamily="HelveticaWorld-Bold, Helvetica World"
                                                            fontSize="51"
                                                            fontWeight="700"
                                                            transform="translate(4237 203)"
                                                        >
                                                            <tspan x="0" y="0">
                                                                
                                                            </tspan>
                                                        </text>
                                                    </>
                                        }

                                        {
                                            network === "strong"
                                                ?
                                                <>
                                                    <rect
                                                        width="13"
                                                        height="19"
                                                        fill="#fff"
                                                        data-name="Rectangle 35"
                                                        rx="2"
                                                        transform="translate(3978 193)"
                                                    ></rect>
                                                    <rect
                                                        width="16"
                                                        height="28"
                                                        fill="#fff"
                                                        data-name="Rectangle 36"
                                                        rx="2"
                                                        transform="translate(4002 184)"
                                                    ></rect>
                                                    <rect
                                                        width="13"
                                                        height="42"
                                                        fill="#fff"
                                                        data-name="Rectangle 37"
                                                        rx="2"
                                                        transform="translate(4027 170)"
                                                    ></rect>
                                                    <rect
                                                        width="14"
                                                        height="55"
                                                        fill="#fff"
                                                        data-name="Rectangle 38"
                                                        rx="2"
                                                        transform="translate(4052 157)"
                                                    ></rect>
                                                </>
                                                :
                                                network === "low"
                                                    ?
                                                    <>
                                                        <rect
                                                            width="13"
                                                            height="19"
                                                            fill="#fff"
                                                            data-name="Rectangle 35"
                                                            rx="2"
                                                            transform="translate(3978 193)"
                                                        ></rect>
                                                        <rect
                                                            width="16"
                                                            height="28"
                                                            fill="#384965"
                                                            data-name="Rectangle 36"
                                                            rx="2"
                                                            transform="translate(4002 184)"
                                                        ></rect>
                                                        <rect
                                                            width="13"
                                                            height="42"
                                                            fill="#384965"
                                                            data-name="Rectangle 37"
                                                            rx="2"
                                                            transform="translate(4027 170)"
                                                        ></rect>
                                                        <rect
                                                            width="14"
                                                            height="55"
                                                            fill="#384965"
                                                            data-name="Rectangle 38"
                                                            rx="2"
                                                            transform="translate(4052 157)"
                                                        ></rect>
                                                    </>
                                                    :
                                                    <>
                                                        <rect
                                                            width="13"
                                                            height="20"
                                                            fill="#fff"
                                                            data-name="Rectangle 35"
                                                            rx="2"
                                                            transform="translate(3977 192)"
                                                        ></rect>
                                                        <rect
                                                            width="16"
                                                            height="29"
                                                            fill="#fff"
                                                            data-name="Rectangle 36"
                                                            rx="2"
                                                            transform="translate(4002 183)"
                                                        ></rect>
                                                        <rect
                                                            width="15"
                                                            height="43"
                                                            fill="#384965"
                                                            data-name="Rectangle 37"
                                                            rx="2"
                                                            transform="translate(4027 169)"
                                                        ></rect>
                                                        <rect
                                                            width="14"
                                                            height="57"
                                                            fill="#384965"
                                                            data-name="Rectangle 38"
                                                            rx="2"
                                                            transform="translate(4054 155)"
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
                                                    fontSize="58"
                                                    fontWeight="500"
                                                    transform="translate(4101 207)"
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
                                                        fontSize="58"
                                                        fontWeight="500"
                                                        transform="translate(4101 206)"
                                                    >
                                                        <tspan x="0" y="0">
                                                            5G
                                                        </tspan>
                                                    </text>
                                                    :
                                                    <>
                                                        <path
                                                            fill="#fff"
                                                            d="M103.908 192a59.037 59.037 0 00-39.556 15.769 1.423 1.423 0 00-.052 2.031l4.768 4.982a1.466 1.466 0 002.072.054 47.977 47.977 0 0132.788-12.8 47.977 47.977 0 0132.788 12.8 1.466 1.466 0 002.072-.054l4.768-4.982a1.424 1.424 0 00-.054-2.036A59.2 59.2 0 00103.908 192z"
                                                            data-name="Path 7"
                                                            transform="translate(4033.411 -34.891)"
                                                        ></path>
                                                        <path
                                                            fill="#fff"
                                                            d="M221.982 434.24l5.108 5.054a1.464 1.464 0 002 .054 27.778 27.778 0 0136.753 0 1.464 1.464 0 002-.054l5.108-5.054a1.426 1.426 0 00-.054-2.089 38.084 38.084 0 00-50.9 0 1.455 1.455 0 00-.015 2.089zm25.5 8.34a14.551 14.551 0 00-10.608 4.554 1.429 1.429 0 00.036 2l9.536 9.411a1.466 1.466 0 002.072 0l9.536-9.411a1.429 1.429 0 00.036-2 14.62 14.62 0 00-10.606-4.554z"
                                                            data-name="Path 8"
                                                            transform="translate(3889.836 -244.717)"
                                                        ></path>
                                                        <path
                                                            fill="#fff"
                                                            d="M103.908 192a59.037 59.037 0 00-39.556 15.769 1.423 1.423 0 00-.052 2.031l4.768 4.982a1.466 1.466 0 002.072.054 47.977 47.977 0 0132.788-12.8 47.977 47.977 0 0132.788 12.8 1.466 1.466 0 002.072-.054l4.768-4.982a1.424 1.424 0 00-.054-2.036A59.2 59.2 0 00103.908 192z"
                                                            data-name="Path 7"
                                                            transform="translate(4033.411 -34.891)"
                                                        ></path>
                                                        <path
                                                            fill="#fff"
                                                            d="M221.982 434.24l5.108 5.054a1.464 1.464 0 002 .054 27.778 27.778 0 0136.753 0 1.464 1.464 0 002-.054l5.108-5.054a1.426 1.426 0 00-.054-2.089 38.084 38.084 0 00-50.9 0 1.455 1.455 0 00-.015 2.089zm25.5 8.34a14.551 14.551 0 00-10.608 4.554 1.429 1.429 0 00.036 2l9.536 9.411a1.466 1.466 0 002.072 0l9.536-9.411a1.429 1.429 0 00.036-2 14.62 14.62 0 00-10.606-4.554z"
                                                            data-name="Path 8"
                                                            transform="translate(3889.836 -244.717)"
                                                        ></path>

                                                    </>
                                        }

                                    </g>
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
                        <label>Amount</label>
                        <input
                            type="text"
                            value={data.amount}
                            name="amount"
                            onChange={(e) => onChangeHandler(e)}
                        />
                    </div>
                    <div className="global_form_inner">
                        <label>Date</label>
                        <input
                            type="text"
                            value={data.date}
                            name="date"
                            onChange={(e) => onChangeHandler(e)}
                        />
                    </div>
                    <div className="global_form_inner">
                        <label>Withdrawal Address</label>
                        <input
                            type="text"
                            value={data.walletAddress1}
                            name="walletAddress1"
                            onChange={(e) => onChangeHandler(e)}
                        />
                        <input
                            type="text"
                            value={data.walletAddress2}
                            name="walletAddress2"
                            onChange={(e) => onChangeHandler(e)}
                        />
                    </div>
                    <div className="global_form_inner">
                        <label>Transaction Hash</label>
                        <input
                            type="text"
                            value={data.walletAddress3}
                            name="walletAddress3"
                            onChange={(e) => onChangeHandler(e)}
                        />
                        <input
                            type="text"
                            value={data.walletAddress4}
                            name="walletAddress4"
                            onChange={(e) => onChangeHandler(e)}
                        />
                        <input
                            type="text"
                            value={data.walletAddress5}
                            name="walletAddress5"
                            onChange={(e) => onChangeHandler(e)}
                        />
                        <input
                            type="text"
                            value={data.walletAddress6}
                            name="walletAddress6"
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

export default SixtyThreePage;