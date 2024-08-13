import React, { useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import { write } from 'clipboard-polyfill';
import "../../assets/styles/secondpage.scss";
import { ToastContainer, toast } from 'react-toastify';

const ThirtyEightPage = () => {
    const screenshotRef = useRef(null);

    const [data, setData] = useState({
        time: "13:06",
        time1: "3:26 p.m.",
        date: "2023-11-08 15:24:31",
        time2: "3:49 p.m.",
        date2: "2023-11-08 15:41:36",
        tid: "d0fff71282",
        cash: "6050",
        ethereum: "2.01018688",
        address: "0x6f0df952b4b3fe66b4a08b94afdc",
        address2: "16d08576ef69",
        rate: "3006.81 (+$5 fee)"
    });

    const [imageDimension, setImageDimension] = useState("167");

    const [network, setNetwork] = useState("strong");
    const [net, setNet] = useState("wifi");
    const [battery, setBattery] = useState("86");

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
                    <h3>PREVIEW - <span>Mobile 38</span></h3>
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
                                width={imageDimension + "%"}
                                viewBox="0 0 1744 3740"
                            >
                                <defs>
                                    <clipPath id="clip-path">
                                        <path fill="none" d="M0 0H83V52H0z"></path>
                                    </clipPath>
                                </defs>
                                <g data-name="Group 174" transform="translate(-2373 -129)">
                                    <g data-name="Group 173">
                                        <path
                                            fill="#fff8f6"
                                            d="M0 0H1744V3740H0z"
                                            data-name="Rectangle 220"
                                            transform="translate(2373 129)"
                                        ></path>
                                        <text
                                            fill="#4a4a4a"
                                            data-name="13:06"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="66"
                                            transform="translate(2589 254)"
                                            fontWeight="600"
                                        >
                                            <tspan x="-92.066" y="0">
                                                {data.time}
                                            </tspan>
                                        </text>
                                        {
                                            network === "mid" ?
                                                <g fill="#3b3b3b" transform="translate(-763 13853)">
                                                    <rect
                                                        width="12"
                                                        height="18"
                                                        data-name="Rectangle 35"
                                                        rx="2"
                                                        transform="translate(4473 -13606)"
                                                    ></rect>
                                                    <rect
                                                        width="14"
                                                        height="27"
                                                        data-name="Rectangle 36"
                                                        rx="2"
                                                        transform="translate(4496 -13615)"
                                                    ></rect>
                                                    <rect
                                                        width="13"
                                                        height="39"
                                                        data-name="Rectangle 37"
                                                        opacity="0.5"
                                                        rx="2"
                                                        transform="translate(4519 -13627)"
                                                    ></rect>
                                                    <rect
                                                        width="13"
                                                        height="52"
                                                        data-name="Rectangle 38"
                                                        opacity="0.5"
                                                        rx="2"
                                                        transform="translate(4543 -13640)"
                                                    ></rect>
                                                </g>
                                                :
                                                network === "strong" ?
                                                    <g data-name="Group 144" transform="translate(105 -41)">
                                                        <g clipPath="url(#clip-path)" transform="translate(3605 254)">
                                                            <g
                                                                fill="#3b3b3b"
                                                                data-name="Group 110"
                                                                transform="translate(-4473 13640)"
                                                            >
                                                                <rect
                                                                    width="12"
                                                                    height="18"
                                                                    data-name="Rectangle 35"
                                                                    rx="2"
                                                                    transform="translate(4473 -13606)"
                                                                ></rect>
                                                                <rect
                                                                    width="14"
                                                                    height="27"
                                                                    data-name="Rectangle 36"
                                                                    rx="2"
                                                                    transform="translate(4496 -13615)"
                                                                ></rect>
                                                                <rect
                                                                    width="13"
                                                                    height="39"
                                                                    data-name="Rectangle 37"
                                                                    rx="2"
                                                                    transform="translate(4519 -13627)"
                                                                ></rect>
                                                                <rect
                                                                    width="13"
                                                                    height="52"
                                                                    data-name="Rectangle 38"
                                                                    rx="2"
                                                                    transform="translate(4543 -13640)"
                                                                ></rect>
                                                            </g>
                                                        </g>
                                                    </g>
                                                    :
                                                    <g fill="#3b3b3b" transform="translate(-763 13853)">
                                                        <rect
                                                            width="12"
                                                            height="18"
                                                            data-name="Rectangle 35"
                                                            rx="2"
                                                            transform="translate(4473 -13606)"
                                                        ></rect>
                                                        <rect
                                                            width="14"
                                                            height="27"
                                                            data-name="Rectangle 36"
                                                            opacity="0.5"
                                                            rx="2"
                                                            transform="translate(4496 -13615)"
                                                        ></rect>
                                                        <rect
                                                            width="13"
                                                            height="39"
                                                            data-name="Rectangle 37"
                                                            opacity="0.5"
                                                            rx="2"
                                                            transform="translate(4519 -13627)"
                                                        ></rect>
                                                        <rect
                                                            width="13"
                                                            height="52"
                                                            data-name="Rectangle 38"
                                                            opacity="0.5"
                                                            rx="2"
                                                            transform="translate(4543 -13640)"
                                                        ></rect>
                                                    </g>
                                        }

                                        {
                                            battery === "78" ?
                                                <g transform="translate(3924 197)">
                                                    <rect
                                                        width="110"
                                                        height="60"
                                                        fill="#3a3a3a"
                                                        data-name="Rectangle 170"
                                                        rx="23"
                                                        transform="translate(0 11)"
                                                    ></rect>
                                                    <path
                                                        fill="#818d9d"
                                                        d="M0 0a6 6 0 016 6v3a6 6 0 01-6 6V0z"
                                                        data-name="Rectangle 172"
                                                        transform="translate(111 35)"
                                                    ></path>
                                                    <path
                                                        fill="#818d9d"
                                                        d="M0 0h5a23 23 0 0123 23v14A23 23 0 015 60H0V0z"
                                                        data-name="Rectangle 171"
                                                        transform="translate(82 11)"
                                                    ></path>
                                                    <text
                                                        fill="#fff8f6"
                                                        data-name="78"
                                                        fontFamily="HelveticaWorld-Bold, Helvetica World"
                                                        fontSize="50"
                                                        fontWeight="700"
                                                        transform="translate(26 59)"
                                                    >
                                                        <tspan x="0" y="0">
                                                            78
                                                        </tspan>
                                                    </text>
                                                </g>
                                                :
                                                battery === "50" ?
                                                    <g transform="translate(3924 196.783)">
                                                        <path
                                                            fill="#3a3a3a"
                                                            d="M23 0h64a23 23 0 0123 23v14a23 23 0 01-23 23H23A23 23 0 010 37V23A23 23 0 0123 0z"
                                                            data-name="Path 58"
                                                            transform="translate(0 11.217)"
                                                        ></path>
                                                        <path
                                                            fill="#818d9d"
                                                            d="M0 0a6 6 0 016 6v2a6 6 0 01-6 6V0z"
                                                            data-name="Rectangle 172"
                                                            transform="translate(111 35.217)"
                                                        ></path>
                                                        <path
                                                            fill="#818d9d"
                                                            d="M0 0h31a23 23 0 0123 23v14a23 23 0 01-23 23H0V0z"
                                                            data-name="Rectangle 171"
                                                            transform="translate(56 11.217)"
                                                        ></path>
                                                        <text
                                                            fill="#fff8f6"
                                                            data-name="50"
                                                            fontFamily="HelveticaWorld-Bold, Helvetica World"
                                                            fontSize="50"
                                                            fontWeight="700"
                                                            transform="translate(26 59.217)"
                                                        >
                                                            <tspan x="0" y="0">
                                                                50
                                                            </tspan>
                                                        </text>
                                                    </g>
                                                    :
                                                    <g data-name="Group 147" transform="translate(3924 197.333)">
                                                        <path
                                                            fill="#3a3a3a"
                                                            d="M23 0h64a23 23 0 0123 23v13a23 23 0 01-23 23H23A23 23 0 010 36V23A23 23 0 0123 0z"
                                                            data-name="Path 59"
                                                            transform="translate(0 11.667)"
                                                        ></path>
                                                        <path
                                                            fill="#818d9d"
                                                            d="M0 0a6 6 0 016 6v5a6 6 0 01-6 6V0z"
                                                            data-name="Rectangle 172"
                                                            transform="translate(111 33.667)"
                                                        ></path>
                                                        <path
                                                            fill="#818d9d"
                                                            d="M0 0h57a23 23 0 0123 23v13a23 23 0 01-23 23H0V0z"
                                                            data-name="Rectangle 171"
                                                            transform="translate(30 11.667)"
                                                        ></path>
                                                        <text
                                                            fill="#fff8f6"
                                                            data-name="25"
                                                            fontFamily="HelveticaWorld-Bold, Helvetica World"
                                                            fontSize="50"
                                                            fontWeight="700"
                                                            transform="translate(26 58.667)"
                                                        >
                                                            <tspan x="0" y="0">
                                                                25
                                                            </tspan>
                                                        </text>
                                                    </g>
                                        }
                                        {
                                            net === "5G" ?
                                                <text
                                                    fill="#3a3a3a"
                                                    data-name="5G"
                                                    fontFamily="Roboto-Medium, Roboto"
                                                    fontSize="63"
                                                    fontWeight="600"
                                                    transform="translate(3818 261)"
                                                >
                                                    <tspan x="0" y="0">
                                                        5G
                                                    </tspan>
                                                </text>
                                                :
                                                net === "4G" ?
                                                    <text
                                                        fill="#3a3a3a"
                                                        data-name="4G"
                                                        fontFamily="Roboto-Medium, Roboto"
                                                        fontSize="63"
                                                        fontWeight="600"
                                                        transform="translate(3814 257)"
                                                    >
                                                        <tspan x="0" y="0">
                                                            4G
                                                        </tspan>
                                                    </text>
                                                    :
                                                    <g fill="#3a3a3a" transform="translate(3758.104 21)">
                                                        <path
                                                            d="M99.606 192a52.69 52.69 0 00-35.3 14.074 1.27 1.27 0 00-.048 1.817l4.256 4.447a1.309 1.309 0 001.849.048 42.819 42.819 0 0129.263-11.428 42.819 42.819 0 0129.263 11.428 1.309 1.309 0 001.849-.048l4.256-4.447a1.271 1.271 0 00-.048-1.817A52.831 52.831 0 0099.606 192z"
                                                            data-name="Path 7"
                                                        ></path>
                                                        <path
                                                            d="M221.936 432.967l4.558 4.511a1.307 1.307 0 001.785.048 24.792 24.792 0 0132.8 0 1.307 1.307 0 001.785-.048l4.559-4.511a1.273 1.273 0 00-.048-1.865 33.99 33.99 0 00-45.425 0 1.3 1.3 0 00-.014 1.865zm22.76 7.443a12.987 12.987 0 00-9.468 4.064 1.275 1.275 0 00.032 1.785l8.511 8.4a1.308 1.308 0 001.849 0l8.511-8.4a1.275 1.275 0 00.032-1.785 13.048 13.048 0 00-9.463-4.063z"
                                                            data-name="Path 8"
                                                            transform="translate(-145.09 -212.039)"
                                                        ></path>
                                                    </g>
                                        }
                                        <text
                                            fill="#060606"
                                            data-name="HODL Digital Services Inc. -"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="104"
                                            transform="translate(2488 675)"
                                        >
                                            <tspan x="0" y="0">
                                                HODL Digital Services Inc. -
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#060606"
                                            data-name="HODL Support"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="76"
                                            transform="translate(2783 1046)"
                                        >
                                            <tspan x="0" y="0">
                                                HODL Support{" "}
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#060606"
                                            data-name="HODL Support"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="76"
                                            transform="translate(2783 1524)"
                                        >
                                            <tspan x="0" y="0">
                                                HODL Support{" "}
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#464646"
                                            data-name="3:26 p.m."
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="54"
                                            transform="translate(3297 1521)"
                                        >
                                            <tspan x="0" y="0">
                                                {data.time2}
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#464646"
                                            data-name="3:26 p.m."
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="54"
                                            transform="translate(3292 1044)"
                                        >
                                            <tspan x="0" y="0">
                                                {data.time1}
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#464646"
                                            data-name="Dear valued customer, Find details of your"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="60"
                                            transform="translate(2783 1147)"
                                        >
                                            <tspan x="0" y="0">
                                                Dear valued customer, Find details of your
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#6a316a"
                                            data-name="Dear valued customer,"
                                            fontFamily="Roboto-Medium, Roboto"
                                            fontSize="60"
                                            fontWeight="500"
                                            transform="translate(2478 1895)"
                                        >
                                            <tspan x="0" y="0">
                                                Dear valued customer,
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#6a316a"
                                            data-name="Find details of your transaction below."
                                            fontFamily="Roboto-Medium, Roboto"
                                            fontSize="60"
                                            fontWeight="500"
                                            transform="translate(2478 2040)"
                                        >
                                            <tspan x="0" y="0">
                                                Find details of your transaction below.
                                            </tspan>
                                        </text>
                                        <text
                                            fontFamily="Roboto-Bold, Roboto"
                                            fontSize="60"
                                            fontWeight="700"
                                            transform="translate(2484 2185)"
                                        >
                                            <tspan x="0" y="0">
                                                Date:
                                            </tspan>
                                        </text>
                                        <text
                                            data-name="Transaction ID:"
                                            fontFamily="Roboto-Bold, Roboto"
                                            fontSize="60"
                                            fontWeight="700"
                                            transform="translate(2484 2257)"
                                        >
                                            <tspan x="0" y="0">
                                                Transaction ID:
                                            </tspan>
                                        </text>
                                        <text
                                            fontFamily="Roboto-Bold, Roboto"
                                            fontSize="60"
                                            fontWeight="700"
                                            transform="translate(2485 2329)"
                                        >
                                            <tspan x="0" y="0">
                                                Cash:
                                            </tspan>
                                        </text>
                                        <text
                                            fontFamily="Roboto-Bold, Roboto"
                                            fontSize="60"
                                            fontWeight="700"
                                            transform="translate(2487 2401)"
                                        >
                                            <tspan x="0" y="0">
                                                Ethereum:
                                            </tspan>
                                        </text>
                                        <text
                                            fontFamily="Roboto-Bold, Roboto"
                                            fontSize="60"
                                            fontWeight="700"
                                            transform="translate(2488 2473)"
                                        >
                                            <tspan x="0" y="0">
                                                Address:
                                            </tspan>
                                        </text>
                                        <text
                                            fontFamily="Roboto-Bold, Roboto"
                                            fontSize="60"
                                            fontWeight="700"
                                            transform="translate(2488 2621)"
                                        >
                                            <tspan x="0" y="0">
                                                Rate:
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#464646"
                                            data-name="to me"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="60"
                                            transform="translate(2783 1638)"
                                        >
                                            <tspan x="0" y="0">
                                                to me
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#464646"
                                            data-name="transaction below. Date: 2023-11-08 15:24:31"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="60"
                                            transform="translate(2783 1216)"
                                        >
                                            <tspan x="0" y="0">
                                                transaction below. Date: {data.date}
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#060606"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="101"
                                            transform="translate(2493 818)"
                                        >
                                            <tspan x="0" y="0">
                                                Receipt
                                            </tspan>
                                        </text>
                                        <g data-name="Group 148" transform="translate(1690)">
                                            <rect
                                                width="194"
                                                height="72"
                                                fill="#eeede9"
                                                data-name="Rectangle 221"
                                                rx="19"
                                                transform="translate(1170 747)"
                                            ></rect>
                                            <text
                                                fill="#060606"
                                                fontFamily="Roboto-Regular, Roboto"
                                                fontSize="48"
                                                transform="translate(1209 800)"
                                            >
                                                <tspan x="0" y="0">
                                                    Inbox
                                                </tspan>
                                            </text>
                                        </g>
                                        <g
                                            fill="#3b3b3b"
                                            data-name="Group 149"
                                            transform="translate(.608 -2.631)"
                                        >
                                            <path
                                                d="M40.5 63.142L10.8 34.687l30.534-29.7L35.727 0 0 34.687l11.71 11.03 24.017 22.62z"
                                                data-name="Path 15"
                                                transform="translate(2463.783 377.129)"
                                            ></path>
                                            <path
                                                d="M0 0H69.565V7.609H0z"
                                                data-name="Rectangle 72"
                                                transform="translate(2472.326 408.321)"
                                            ></path>
                                        </g>
                                        <g
                                            data-name="Group 158"
                                            transform="scale(-1) rotate(88 785.855 -3447.219)"
                                        >
                                            <path
                                                fill="#3b3b3b"
                                                d="M25.967 45.818L6.924 25.17 26.5 3.617 22.9 0 0 25.17l7.507 8L22.9 49.588z"
                                                data-name="Path 15"
                                                transform="translate(2463.783 377.129)"
                                            ></path>
                                        </g>
                                        <g data-name="Group 152" transform="translate(136.608 -16.5)">
                                            <g data-name="Group 151" transform="translate(-137 15)">
                                                <g
                                                    fill="#3a3a3a"
                                                    data-name="Group 150"
                                                    transform="rotate(-90 2925.96 -26.235)"
                                                >
                                                    <path
                                                        d="M26.387 41.134L7.036 22.6 26.928 3.248 23.274 0 0 22.6l7.628 7.185 15.646 14.734z"
                                                        data-name="Path 15"
                                                        transform="translate(2463.783 377.129)"
                                                    ></path>
                                                    <path
                                                        d="M0 0H32.318V4.957H0z"
                                                        data-name="Rectangle 72"
                                                        transform="translate(2469.349 397.449)"
                                                    ></path>
                                                </g>
                                                <path
                                                    fill="none"
                                                    stroke="#3a3a3a"
                                                    strokeWidth="6"
                                                    d="M3315 447.5h72.5v-61H3315z"
                                                    data-name="Path 60"
                                                ></path>
                                                <path
                                                    fill="none"
                                                    stroke="#3a3a3a"
                                                    strokeWidth="5"
                                                    d="M3316.5 382.5l8-9.5h56l6.167 9.5H3316.5z"
                                                    data-name="Path 61"
                                                ></path>
                                            </g>
                                            <path
                                                fill="#3b3b3b"
                                                d="M7883 4303.667h59.5l-2.333-5.833H7884.5l-2.5 5.833z"
                                                data-name="Path 62"
                                                transform="translate(-4697 -3910)"
                                            ></path>
                                        </g>
                                        <g data-name="Group 153" transform="translate(-80.392 1)">
                                            <g
                                                fill="none"
                                                stroke="#3b3b3b"
                                                strokeWidth="7"
                                                data-name="Rectangle 222"
                                                transform="translate(3623 377)"
                                            >
                                                <rect width="63" height="74" stroke="none" rx="6"></rect>
                                                <rect width="56" height="67" x="3.5" y="3.5" rx="2.5"></rect>
                                            </g>
                                            <path
                                                fill="#3b3b3b"
                                                d="M0 0H74V10H0z"
                                                data-name="Rectangle 223"
                                                transform="translate(3617 373)"
                                            ></path>
                                            <path
                                                fill="#3b3b3b"
                                                d="M0 0H27V5H0z"
                                                data-name="Rectangle 224"
                                                transform="translate(3641 369)"
                                            ></path>
                                            <path
                                                fill="#3b3b3b"
                                                d="M0 0H9V45H0z"
                                                data-name="Rectangle 225"
                                                transform="translate(3641 393)"
                                            ></path>
                                            <path
                                                fill="#3b3b3b"
                                                d="M0 0H9V45H0z"
                                                data-name="Rectangle 226"
                                                transform="translate(3660 393)"
                                            ></path>
                                        </g>
                                        <g
                                            fill="none"
                                            stroke="#3b3b3b"
                                            strokeWidth="6"
                                            data-name="Group 154"
                                            transform="translate(-103.392 9)"
                                        >
                                            <g data-name="Rectangle 227" transform="translate(3851 367)">
                                                <rect width="87" height="70" stroke="none" rx="4"></rect>
                                                <rect width="81" height="64" x="3" y="3" rx="1"></rect>
                                            </g>
                                            <path
                                                d="M3854.833 371.833l30.753 23.479L3895 402.5z"
                                                data-name="Path 64"
                                            ></path>
                                            <path
                                                d="M3933.168 371.083l-31.646 24.053-9.687 7.363z"
                                                data-name="Path 65"
                                            ></path>
                                        </g>
                                        <g fill="#3b3b3b" data-name="Group 155" transform="translate(.608 1)">
                                            <circle
                                                cx="10"
                                                cy="10"
                                                r="10"
                                                data-name="Ellipse 32"
                                                transform="translate(3992 374)"
                                            ></circle>
                                            <circle
                                                cx="10"
                                                cy="10"
                                                r="10"
                                                data-name="Ellipse 33"
                                                transform="translate(3992 402)"
                                            ></circle>
                                            <circle
                                                cx="10"
                                                cy="10"
                                                r="10"
                                                data-name="Ellipse 34"
                                                transform="translate(3992 430)"
                                            ></circle>
                                        </g>
                                        <g
                                            fill="#3b3b3b"
                                            data-name="Group 163"
                                            transform="translate(10.721 1133.561)"
                                        >
                                            <circle
                                                cx="10"
                                                cy="10"
                                                r="10"
                                                data-name="Ellipse 32"
                                                transform="translate(3992 374)"
                                            ></circle>
                                            <circle
                                                cx="10"
                                                cy="10"
                                                r="10"
                                                data-name="Ellipse 33"
                                                transform="translate(3992 402)"
                                            ></circle>
                                            <circle
                                                cx="10"
                                                cy="10"
                                                r="10"
                                                data-name="Ellipse 34"
                                                transform="translate(3992 430)"
                                            ></circle>
                                        </g>
                                        <path
                                            fill="none"
                                            stroke="#6a6a6a"
                                            strokeWidth="6"
                                            d="M3971.667 704.91h25.543l10.105-28.365 8.982 28.365H4041l-19.088 16.166 10.667 25.925-25.264-14.945-24.141 14.945 10.667-25.925z"
                                            data-name="Path 66"
                                        ></path>
                                        <g data-name="Group 156" transform="translate(1929)">
                                            <circle
                                                cx="109.5"
                                                cy="109.5"
                                                r="109.5"
                                                fill="#a0aace"
                                                data-name="Ellipse 35"
                                                transform="translate(564 974)"
                                            ></circle>
                                            <text
                                                fill="#fff"
                                                fontFamily="Roboto-Regular, Roboto"
                                                fontSize="117"
                                                transform="translate(632 1125)"
                                            >
                                                <tspan x="0" y="0">
                                                    H
                                                </tspan>
                                            </text>
                                        </g>
                                        <g data-name="Group 159" transform="translate(1929 465)">
                                            <circle
                                                cx="109.5"
                                                cy="109.5"
                                                r="109.5"
                                                fill="#a0aace"
                                                data-name="Ellipse 35"
                                                transform="translate(564 974)"
                                            ></circle>
                                            <text
                                                fill="#fff"
                                                data-name="H"
                                                fontFamily="Roboto-Regular, Roboto"
                                                fontSize="117"
                                                transform="translate(632 1125)"
                                            >
                                                <tspan x="0" y="0">
                                                    H
                                                </tspan>
                                            </text>
                                        </g>
                                        <g data-name="Group 160" transform="translate(1918.608 -111.5)">
                                            <g
                                                fill="none"
                                                stroke="#3b3b3b"
                                                strokeWidth="7"
                                                data-name="Ellipse 36"
                                                transform="translate(1679 1611)"
                                            >
                                                <circle cx="43.5" cy="43.5" r="43.5" stroke="none"></circle>
                                                <circle cx="43.5" cy="43.5" r="40"></circle>
                                            </g>
                                            <ellipse
                                                cx="20.5"
                                                cy="14"
                                                fill="#3b3b3b"
                                                data-name="Ellipse 39"
                                                rx="20.5"
                                                ry="14"
                                                transform="translate(1702 1653)"
                                            ></ellipse>
                                            <path
                                                fill="#fff8f6"
                                                d="M0 0H56V16H0z"
                                                data-name="Rectangle 228"
                                                transform="translate(1696 1649)"
                                            ></path>
                                            <circle
                                                cx="7"
                                                cy="7"
                                                r="7"
                                                fill="#3b3b3b"
                                                data-name="Ellipse 38"
                                                transform="translate(1732 1638)"
                                            ></circle>
                                            <circle
                                                cx="7"
                                                cy="7"
                                                r="7"
                                                fill="#3b3b3b"
                                                data-name="Ellipse 37"
                                                transform="translate(1699 1638)"
                                            ></circle>
                                        </g>
                                        <g data-name="Group 168" transform="translate(3927.387 3187.75)">
                                            <g
                                                fill="none"
                                                stroke="#3b3b3b"
                                                strokeWidth="7"
                                                data-name="Ellipse 36"
                                            >
                                                <circle cx="41.113" cy="41.113" r="41.113" stroke="none"></circle>
                                                <circle cx="41.113" cy="41.113" r="37.613"></circle>
                                            </g>
                                            <ellipse
                                                cx="19.375"
                                                cy="13.232"
                                                fill="#3b3b3b"
                                                data-name="Ellipse 39"
                                                rx="19.375"
                                                ry="13.232"
                                                transform="translate(21.738 39.695)"
                                            ></ellipse>
                                            <path
                                                fill="#fff8f6"
                                                d="M0 0H52.927V15.122H0z"
                                                data-name="Rectangle 228"
                                                transform="translate(16.067 35.915)"
                                            ></path>
                                            <circle
                                                cx="6.616"
                                                cy="6.616"
                                                r="6.616"
                                                fill="#3b3b3b"
                                                data-name="Ellipse 38"
                                                transform="translate(50.091 25.518)"
                                            ></circle>
                                            <circle
                                                cx="6.616"
                                                cy="6.616"
                                                r="6.616"
                                                fill="#3b3b3b"
                                                data-name="Ellipse 37"
                                                transform="translate(18.902 25.518)"
                                            ></circle>
                                        </g>
                                        <g data-name="Group 164" transform="translate(1880.642 -60.282)">
                                            <g data-name="Group 162" transform="translate(1916.764 1600.135)">
                                                <path
                                                    fill="none"
                                                    stroke="#3b3b3b"
                                                    strokeWidth="8"
                                                    d="M0 .005h55.9s18.633-.834 18.633 16.408v21.136"
                                                    data-name="Path 68"
                                                ></path>
                                            </g>
                                            <path
                                                fill="none"
                                                stroke="#3b3b3b"
                                                strokeWidth="8"
                                                d="M1937.223 1574l-9.633 10.07-14.84 15.516 24.473 25.029"
                                                data-name="Path 69"
                                            ></path>
                                        </g>
                                        <g data-name="Group 165" transform="translate(754.393 1575.718)">
                                            <g data-name="Group 162" transform="translate(1916.108 1595.866)">
                                                <path
                                                    fill="none"
                                                    stroke="#3b3b3b"
                                                    strokeWidth="8"
                                                    d="M0 .005h46.768s15.589-.7 15.589 13.728v17.683"
                                                    data-name="Path 68"
                                                ></path>
                                            </g>
                                            <path
                                                fill="none"
                                                stroke="#3b3b3b"
                                                strokeWidth="8"
                                                d="M1933.225 1574l-8.059 8.425-12.416 12.981 20.475 20.94"
                                                data-name="Path 69"
                                            ></path>
                                        </g>
                                        <g data-name="Group 167" transform="translate(3613.143 3149.718)">
                                            <g data-name="Group 162" transform="translate(0 21.866)">
                                                <path
                                                    fill="none"
                                                    stroke="#3b3b3b"
                                                    strokeWidth="8"
                                                    d="M62.356.005H15.588S-.001-.695-.001 13.733v17.683"
                                                    data-name="Path 68"
                                                ></path>
                                            </g>
                                            <path
                                                fill="none"
                                                stroke="#3b3b3b"
                                                strokeWidth="8"
                                                d="M45.24 0l8.059 8.425 12.416 12.981-20.475 20.94"
                                                data-name="Path 69"
                                            ></path>
                                        </g>
                                        <g data-name="Group 166" transform="translate(1234.393 1575.718)">
                                            <g data-name="Group 162" transform="translate(1916.108 1595.866)">
                                                <path
                                                    fill="none"
                                                    stroke="#3b3b3b"
                                                    strokeWidth="8"
                                                    d="M0 .005h46.768s15.589-.7 15.589 13.728v17.683"
                                                    data-name="Path 68"
                                                ></path>
                                            </g>
                                            <path
                                                fill="none"
                                                stroke="#3b3b3b"
                                                strokeWidth="8"
                                                d="M1933.225 1574l-8.059 8.425-12.416 12.981 20.475 20.94"
                                                data-name="Path 69"
                                            ></path>
                                            <path
                                                fill="none"
                                                stroke="#3b3b3b"
                                                strokeWidth="8"
                                                d="M1918.225 1574l-8.059 8.425-12.416 12.981 20.475 20.94"
                                                data-name="Path 70"
                                            ></path>
                                        </g>
                                        <text
                                            data-name="2023-11-08 15:41:36"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="63"
                                            transform="translate(2640 2186)"
                                        >
                                            <tspan x="0" y="0">
                                                {data.date2}
                                            </tspan>
                                        </text>
                                        <text
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="63"
                                            transform="translate(2910 2256)"
                                        >
                                            <tspan x="0" y="0">
                                                {data.tid}
                                            </tspan>
                                        </text>
                                        <text
                                            data-name="6050"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="63"
                                            transform="translate(2650 2332)"
                                        >
                                            <tspan x="0" y="0">
                                                {data.cash}
                                            </tspan>
                                        </text>
                                        <text
                                            data-name="2.01"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="63"
                                            transform="translate(2777 2400)"
                                        >
                                            <tspan x="0" y="0">
                                                {data.ethereum}
                                            </tspan>
                                        </text>
                                        <text
                                            data-name="2.25245459387073e+33"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="63"
                                            transform="translate(2741 2476)"
                                        >
                                            <tspan x="0" y="0">
                                                {data.address}
                                            </tspan>
                                        </text>
                                        <text
                                            data-name="16d08576ef69"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="63"
                                            transform="translate(2482 2552)"
                                        >
                                            <tspan x="0" y="0">
                                                {data.address2}
                                            </tspan>
                                        </text>
                                        <text
                                            data-name="3006.81 (+$5 fee)"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="63"
                                            transform="translate(2645 2623)"
                                        >
                                            <tspan x="0" y="0">
                                                {data.rate}
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#2079b8"
                                            data-name="Show quoted text"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="60"
                                            transform="translate(2486 2797)"
                                        >
                                            <tspan x="0" y="0">
                                                Show quoted text
                                            </tspan>
                                        </text>
                                        <g
                                            fill="none"
                                            stroke="#707070"
                                            strokeWidth="4"
                                            data-name="Rectangle 229"
                                            transform="translate(2480 3065)"
                                        >
                                            <rect width="440" height="317" stroke="none" rx="158.5"></rect>
                                            <rect width="436" height="313" x="2" y="2" rx="156.5"></rect>
                                        </g>
                                        <g
                                            fill="none"
                                            stroke="#707070"
                                            strokeWidth="4"
                                            data-name="Rectangle 231"
                                            transform="translate(3424 3065)"
                                        >
                                            <rect width="440" height="317" stroke="none" rx="158.5"></rect>
                                            <rect width="436" height="313" x="2" y="2" rx="156.5"></rect>
                                        </g>
                                        <g
                                            fill="none"
                                            stroke="#707070"
                                            strokeWidth="4"
                                            data-name="Rectangle 230"
                                            transform="translate(2950 3065)"
                                        >
                                            <rect width="440" height="317" stroke="none" rx="158.5"></rect>
                                            <rect width="436" height="313" x="2" y="2" rx="156.5"></rect>
                                        </g>
                                        <text
                                            fill="#404040"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="66"
                                            transform="translate(2620 3293)"
                                        >
                                            <tspan x="0" y="0">
                                                Reply
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#404040"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="66"
                                            transform="translate(3528 3293)"
                                        >
                                            <tspan x="0" y="0">
                                                Forward
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#404040"
                                            data-name="Reply all"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="66"
                                            transform="translate(3048 3293)"
                                        >
                                            <tspan x="0" y="0">
                                                Reply all
                                            </tspan>
                                        </text>
                                        <g
                                            fill="none"
                                            stroke="#707070"
                                            strokeWidth="6"
                                            data-name="Ellipse 40"
                                            transform="translate(3891 3149)"
                                        >
                                            <circle cx="77.5" cy="77.5" r="77.5" stroke="none"></circle>
                                            <circle cx="77.5" cy="77.5" r="74.5"></circle>
                                        </g>
                                        <path
                                            fill="#feeae3"
                                            d="M0 0H1744V431H0z"
                                            data-name="Rectangle 232"
                                            transform="translate(2373 3438)"
                                        ></path>
                                        <rect
                                            width="500"
                                            height="15"
                                            fill="#3b3b3b"
                                            data-name="Rectangle 233"
                                            rx="12"
                                            transform="translate(3000 3819)"
                                        ></rect>
                                        <g data-name="Group 172" transform="translate(1595.189 15)">
                                            <rect
                                                width="293"
                                                height="135"
                                                fill="#ffdbcd"
                                                data-name="Rectangle 234"
                                                rx="67.5"
                                                transform="translate(1147 3478)"
                                            ></rect>
                                            <g
                                                fill="#2a160d"
                                                strokeWidth="6"
                                                data-name="Group 169"
                                                transform="translate(-2602.5 3140)"
                                            >
                                                <g
                                                    stroke="#2a160d"
                                                    data-name="Rectangle 227"
                                                    transform="translate(3851 367)"
                                                >
                                                    <rect width="87" height="70" stroke="none" rx="4"></rect>
                                                    <rect
                                                        width="81"
                                                        height="64"
                                                        x="3"
                                                        y="3"
                                                        fill="none"
                                                        rx="1"
                                                    ></rect>
                                                </g>
                                                <path
                                                    stroke="#fff"
                                                    d="M3861.553 379.2l26.374 20.136 8.074 6.164z"
                                                    data-name="Path 64"
                                                ></path>
                                                <path
                                                    stroke="#fff"
                                                    d="M3927.701 378.239l-2.689 2.045-24.771 18.827-8.406 6.389z"
                                                    data-name="Path 65"
                                                ></path>
                                            </g>
                                            <g data-name="Group 170" transform="translate(308 -109)">
                                                <rect
                                                    width="120"
                                                    height="74"
                                                    fill="#b32322"
                                                    data-name="Rectangle 235"
                                                    rx="37"
                                                    transform="translate(1007 3567)"
                                                ></rect>
                                                <text
                                                    fill="#fff"
                                                    data-name="99+"
                                                    fontFamily="Roboto-Regular, Roboto"
                                                    fontSize="46"
                                                    transform="translate(1030 3620)"
                                                >
                                                    <tspan x="0" y="0">
                                                        99+
                                                    </tspan>
                                                </text>
                                            </g>
                                        </g>
                                        <g data-name="Group 171" transform="translate(1903.189 20)">
                                            <path
                                                fill="none"
                                                stroke="#2a160d"
                                                strokeWidth="6"
                                                d="M1704.75 3532l21.75-23.25h42.25v63.5H1706z"
                                                data-name="Path 71"
                                            ></path>
                                            <path
                                                fill="#2a160d"
                                                d="M22.5 0L45 23H0z"
                                                data-name="Polygon 2"
                                                transform="rotate(-89 2696.058 882.585)"
                                            ></path>
                                        </g>
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
                        <label>Time</label>
                        <input
                            type="text"
                            value={data.time}
                            name="time"
                            onChange={(e) => onChangeHandler(e)}
                        />
                        <input
                            type="text"
                            value={data.time1}
                            name="time1"
                            onChange={(e) => onChangeHandler(e)}
                        />
                        <input
                            type="text"
                            value={data.time2}
                            name="time2"
                            onChange={(e) => onChangeHandler(e)}
                        />
                    </div>
                </div>
                <div className="global_form_wrapper">
                    <div className="global_form_inner">
                        <label>Date</label>
                        <input
                            type="text"
                            value={data.date}
                            name="date"
                            onChange={(e) => onChangeHandler(e)}
                        />
                    </div>
                </div>
                <div className="global_form_wrapper">
                    <div className="global_form_inner">
                        <label>Details</label>
                        <input
                            type="text"
                            value={data.date2}
                            name="date2"
                            onChange={(e) => onChangeHandler(e)}
                        />
                        <input
                            type="text"
                            value={data.tid}
                            name="tid"
                            onChange={(e) => onChangeHandler(e)}
                        />
                        <input
                            type="text"
                            value={data.cash}
                            name="cash"
                            onChange={(e) => onChangeHandler(e)}
                        />
                        <input
                            type="text"
                            value={data.ethereum}
                            name="ethereum"
                            onChange={(e) => onChangeHandler(e)}
                        />
                        <input
                            type="text"
                            value={data.address}
                            name="address"
                            onChange={(e) => onChangeHandler(e)}
                        />
                        <input
                            type="text"
                            value={data.address2}
                            name="address2"
                            onChange={(e) => onChangeHandler(e)}
                        />
                        <input
                            type="text"
                            value={data.rate}
                            name="rate"
                            onChange={(e) => onChangeHandler(e)}
                        />
                    </div>
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

export default ThirtyEightPage;