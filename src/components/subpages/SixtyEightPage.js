import React, { useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import { write } from 'clipboard-polyfill';
import "../../assets/styles/secondpage.scss";
import { ToastContainer, toast } from 'react-toastify';

const SixtyEightPage = () => {
    const screenshotRef = useRef(null);

    const [data, setData] = useState({
        time: "12:23",
        amount: "$2,720.29",
        bitcoin: "$0.00",
        bitcoinAlt: "0 BTC",
        etherium: "$0.00",
        etheriumAlt: "0 ETH",
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
                    <h3>PREVIEW - <span>Mobile 68</span></h3>
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
                                viewBox="0 0 1618 3504"
                            >
                                <g data-name="Group 322" transform="translate(-2242 -224)">
                                    <path
                                        fill="#fff"
                                        d="M0 0h1616v3504H0z"
                                        data-name="Rectangle 53"
                                        transform="translate(2242 224)"
                                    ></path>
                                    <ellipse
                                        cx="77.5"
                                        cy="77"
                                        fill="#eef2f3"
                                        data-name="Ellipse 14"
                                        rx="77.5"
                                        ry="77"
                                        transform="translate(2323 390)"
                                    ></ellipse>
                                    <path
                                        d="M34.046 35.594A18.679 18.679 0 0053.5 17.8 18.679 18.679 0 0034.046.013 18.679 18.679 0 0014.59 17.8a18.679 18.679 0 0019.456 17.794zM27.1 42.263C12.146 42.263 0 53.353 0 67.045a4.336 4.336 0 004.513 4.126H63.58a4.336 4.336 0 004.513-4.126c0-13.688-12.146-24.782-27.1-24.782z"
                                        transform="translate(2367.143 423.969)"
                                    ></path>
                                    <text
                                        fill="#090809"
                                        data-name="12:23"
                                        fontFamily="Roboto-Black, Roboto"
                                        fontSize="69"
                                        fontWeight="800"
                                        transform="translate(2400.787 345.21)"
                                    >
                                        <tspan x="0" y="0">
                                            {data.time}
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#0a0a0a"
                                        data-name="0"
                                        fontFamily="Roboto-Medium, Roboto"
                                        fontSize="88"
                                        fontWeight="500"
                                        transform="translate(3707.57 517.798)"
                                    >
                                        <tspan x="0" y="0">
                                            0
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#032133"
                                        data-name="$2,720.29"
                                        fontFamily="Roboto-Bold, Roboto"
                                        fontSize="198"
                                        fontWeight="700"
                                        transform="translate(2617.818 905.21)"
                                    >
                                        <tspan x="455" y="0" textAnchor='middle'>
                                            {data.amount}
                                        </tspan>
                                    </text>
                                    <rect
                                        width="710"
                                        height="221"
                                        fill="#f1f1f1"
                                        data-name="Rectangle 54"
                                        rx="110.5"
                                        transform="translate(3089 1221)"
                                    ></rect>
                                    <rect
                                        width="710"
                                        height="221"
                                        fill="#f1f1f1"
                                        data-name="Rectangle 55"
                                        rx="110.5"
                                        transform="translate(2323 1221)"
                                    ></rect>
                                    <text
                                        fontFamily="Roboto-Bold, Roboto"
                                        fontSize="70"
                                        fontWeight="700"
                                        transform="translate(2615 1356)"
                                    >
                                        <tspan x="0" y="0">
                                            Add
                                        </tspan>
                                    </text>
                                    <text
                                        fontFamily="Roboto-Bold, Roboto"
                                        fontSize="70"
                                        fontWeight="700"
                                        transform="translate(3364 1356)"
                                    >
                                        <tspan x="0" y="0">
                                            Send
                                        </tspan>
                                    </text>
                                    <path
                                        d="M4.012 0l33.593.11c2.208 0 4.049 1.31 4.049 2.911s-1.785 2.893-4.012 2.886L4.049 5.8C1.84 5.793 0 4.487 0 2.886S1.785 0 4.012 0z"
                                        data-name="Path 10"
                                        transform="rotate(135.97 1477.117 1195.779)"
                                    ></path>
                                    <path
                                        d="M4.012 0l33.593.11c2.208 0 4.049 1.31 4.049 2.911s-1.785 2.893-4.012 2.886L4.049 5.8C1.84 5.793 0 4.487 0 2.886S1.785 0 4.012 0z"
                                        data-name="Path 10"
                                        transform="rotate(44.973 463.156 4534.563)"
                                    ></path>
                                    <g
                                        fill="#fff"
                                        stroke="#f1f1f1"
                                        strokeWidth="6"
                                        data-name="Rectangle 56"
                                        transform="translate(2312 1560)"
                                    >
                                        <rect width="1476" height="390" stroke="none" rx="50"></rect>
                                        <rect
                                            width="1470"
                                            height="384"
                                            x="3"
                                            y="3"
                                            fill="none"
                                            rx="47"
                                        ></rect>
                                    </g>
                                    <path
                                        fill="#f1921a"
                                        d="M34.23 41v13.658h38.029V41c0-12.584-8.51-22.776-19.014-22.776S34.23 28.411 34.23 41zM19.014 54.658V41c0-22.632 15.33-41 34.227-41s34.23 18.363 34.23 41v13.658h3.81c8.392 0 15.212 8.171 15.212 18.219v54.658c0 10.048-6.82 18.219-15.212 18.219H15.212C6.82 145.755 0 137.584 0 127.535V72.877c0-10.048 6.82-18.219 15.212-18.219z"
                                        transform="translate(2400.27 1676.393)"
                                    ></path>
                                    <g
                                        fill="#f1921a"
                                        stroke="#fefefe"
                                        strokeWidth="6"
                                        data-name="Ellipse 15"
                                        transform="translate(2455.961 1758.84)"
                                    >
                                        <circle cx="40.487" cy="40.487" r="40.487" stroke="none"></circle>
                                        <circle cx="40.487" cy="40.487" r="37.487" fill="none"></circle>
                                    </g>
                                    <path
                                        fill="#fefefe"
                                        d="M15.768 17.3a8.834 8.834 0 009.01-8.65A8.834 8.834 0 0015.768 0a8.834 8.834 0 00-9.01 8.65 8.834 8.834 0 009.01 8.65zm-3.217 3.243A12.3 12.3 0 000 32.594 2.05 2.05 0 002.091 34.6h27.354a2.05 2.05 0 002.091-2.006 12.3 12.3 0 00-12.551-12.047z"
                                        data-name="user-solid"
                                        transform="translate(2480.68 1782.027)"
                                    ></path>
                                    <g
                                        fill="#fff"
                                        stroke="#eee"
                                        strokeWidth="6"
                                        data-name="Rectangle 57"
                                        transform="translate(2312 2095)"
                                    >
                                        <rect width="1487" height="538" stroke="none" rx="82"></rect>
                                        <rect
                                            width="1481"
                                            height="532"
                                            x="3"
                                            y="3"
                                            fill="none"
                                            rx="79"
                                        ></rect>
                                    </g>
                                    <g
                                        fill="#fff"
                                        stroke="#eee"
                                        strokeWidth="6"
                                        data-name="Rectangle 58"
                                        transform="translate(2312 2708)"
                                    >
                                        <rect width="1487" height="528" stroke="none" rx="82"></rect>
                                        <rect
                                            width="1481"
                                            height="522"
                                            x="3"
                                            y="3"
                                            fill="none"
                                            rx="79"
                                        ></rect>
                                    </g>
                                    <rect
                                        width="52"
                                        height="25"
                                        fill="#0b95f0"
                                        data-name="Rectangle 59"
                                        rx="12.5"
                                        transform="translate(2974 2041)"
                                    ></rect>
                                    <circle
                                        cx="11"
                                        cy="11"
                                        r="11"
                                        fill="#e4edf4"
                                        data-name="Ellipse 16"
                                        transform="translate(3129 2044)"
                                    ></circle>
                                    <ellipse
                                        cx="11.5"
                                        cy="11"
                                        fill="#e4edf4"
                                        data-name="Ellipse 17"
                                        rx="11.5"
                                        ry="11"
                                        transform="translate(3066 2044)"
                                    ></ellipse>
                                    <text
                                        fill="#0a0a0a"
                                        data-name="Your account has limited functionality"
                                        fontFamily="Roboto-Medium, Roboto"
                                        fontSize="69"
                                        fontWeight="500"
                                        transform="translate(2588 1737)"
                                    >
                                        <tspan x="0" y="0">
                                            Your account has limited
                                        </tspan>
                                        <tspan x="0" y="84">
                                            functionality
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#f99a01"
                                        fontFamily="Roboto-Medium, Roboto"
                                        fontSize="77"
                                        fontWeight="500"
                                        transform="translate(2401.035 2245.672)"
                                    >
                                        <tspan x="0" y="0">
                                            Bitcoin
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#0e2234"
                                        data-name="$0.00"
                                        fontFamily="Roboto-Bold, Roboto"
                                        fontSize="106"
                                        fontWeight="700"
                                        transform="translate(2398.469 2424.58)"
                                    >
                                        <tspan x="0" y="0">
                                            {data.bitcoin}
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#989898"
                                        data-name="0 BTC"
                                        fontFamily="Roboto-Medium, Roboto"
                                        fontSize="61"
                                        fontWeight="500"
                                        transform="translate(2401.043 2536.168)"
                                    >
                                        <tspan x="0" y="0">
                                            {data.bitcoinAlt}
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#5067f8"
                                        fontFamily="Roboto-Medium, Roboto"
                                        fontSize="77"
                                        fontWeight="500"
                                        transform="translate(2399.93 2858.344)"
                                    >
                                        <tspan x="0" y="0">
                                            Ethereum
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#0a0a0a"
                                        data-name="$0.00"
                                        fontFamily="Roboto-Medium, Roboto"
                                        fontSize="106"
                                        fontWeight="600"
                                        transform="translate(2400.213 3037.252)"
                                    >
                                        <tspan x="0" y="0">
                                            {data.etherium}
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#989898"
                                        data-name="0 ETH"
                                        fontFamily="Roboto-Medium, Roboto"
                                        fontSize="61"
                                        fontWeight="500"
                                        transform="translate(2400.141 3148.84)"
                                    >
                                        <tspan x="0" y="0">
                                            {data.etheriumAlt}
                                        </tspan>
                                    </text>
                                    <path
                                        fill="#c6c3c3"
                                        d="M30.66 1.072a3.824 3.824 0 015.33.018 157.9 157.9 0 0114.955 16.6 71.561 71.561 0 017.122-8.466 3.839 3.839 0 015.389.018 85.852 85.852 0 0116.26 23.318 56.852 56.852 0 016.5 22.11c0 25.213-19.209 46.516-43.112 46.516C18.937 101.175 0 79.857 0 54.641a55.865 55.865 0 018.738-26.023A125.8 125.8 0 0130.66 1.072zm12.772 81.133a22.82 22.82 0 0013.25-4.148A20.811 20.811 0 0062.089 51.5a2.529 2.529 0 00-4.332-.394L52.906 56.9a3.033 3.033 0 01-4.755-.1 9711.14 9711.14 0 00-12.088-15.77 2.974 2.974 0 00-4.755-.018c-6.5 8.4-9.772 13.688-9.772 19.636a20.741 20.741 0 0021.9 21.558z"
                                        transform="rotate(8 -1289.771 25948.247)"
                                    ></path>
                                    <path
                                        fill="none"
                                        d="M0 0L1615.815 0"
                                        data-name="Line 26"
                                        transform="translate(2242 3339.689)"
                                    ></path>
                                    <path
                                        fill="#01a1fe"
                                        d="M104.55 58.765a6.6 6.6 0 01-6.537 6.559l6.537-6.559.144 32.725a14.985 14.985 0 01-.1 1.656v3.3a8.167 8.167 0 01-8.171 8.171h-3.272c-.225 0-.449 0-.674-.022-.287.022-.571.022-.858.022H80.077a8.167 8.167 0 01-8.171-8.171V78.453a6.53 6.53 0 00-6.537-6.537H52.3a6.53 6.53 0 00-6.537 6.537v17.991a8.167 8.167 0 01-8.171 8.171H26.17c-.305 0-.615-.022-.92-.04-.247.022-.49.04-.736.04h-3.268a8.167 8.167 0 01-8.171-8.171V73.55a5.352 5.352 0 01.022-.571V58.761l6.429 6.563a6.46 6.46 0 01-6.537-6.555 6.625 6.625 0 012.043-4.9L54.419 1.645A5.889 5.889 0 0158.914.01a6.787 6.787 0 014.292 1.432l39.1 52.42a5.6 5.6 0 012.245 4.9z"
                                        transform="translate(2322.975 3427.095)"
                                    ></path>
                                    <ellipse
                                        cx="97.538"
                                        cy="99.378"
                                        fill="#079cf6"
                                        data-name="Ellipse 19"
                                        rx="97.538"
                                        ry="99.378"
                                        transform="translate(2931.383 3382.017)"
                                    ></ellipse>
                                    <path
                                        fill="#fff"
                                        d="M83.721 93.387a5.039 5.039 0 000-7.7l-17.48-17.539a6.662 6.662 0 00-8.65 0 5.039 5.039 0 000 7.7l7.078 8.252H6.1a5.477 5.477 0 100 10.884h58.551l-7.06 6.408a5.039 5.039 0 000 7.7 6.662 6.662 0 008.65 0l17.5-15.691z"
                                        transform="translate(2990.285 3372.528)"
                                    ></path>
                                    <path
                                        fill="#fff"
                                        d="M83.716 26.833a5.039 5.039 0 000-7.7L66.237 1.595a6.662 6.662 0 00-8.65 0 5.039 5.039 0 000 7.7l7.078 8.248H6.095a5.477 5.477 0 100 10.884h58.552l-7.06 6.408a5.039 5.039 0 000 7.7 6.662 6.662 0 008.65 0l17.5-15.691z"
                                        data-name="arrow-right-solid"
                                        transform="rotate(180 1537.889 1761.854)"
                                    ></path>
                                    <text
                                        fill="#a3a8ae"
                                        data-name="$"
                                        fontFamily="Roboto-Medium, Roboto"
                                        fontSize="116"
                                        fontWeight="500"
                                        transform="translate(3317.508 3521.462)"
                                    >
                                        <tspan x="0" y="0">
                                            $
                                        </tspan>
                                    </text>
                                    <rect
                                        width="578"
                                        height="22"
                                        fill="#303030"
                                        data-name="Rectangle 62"
                                        rx="11"
                                        transform="translate(2761 3673)"
                                    ></rect>
                                    <path
                                        fill="#a7abae"
                                        d="M113.536 34.23a4.652 4.652 0 01-1.314 5.054l-8.9 8.1a39.163 39.163 0 010 10.438l8.9 8.1a4.652 4.652 0 011.314 5.054 50.931 50.931 0 01-3.246 7.048l-.964 1.664a52.262 52.262 0 01-4.542 6.412 4.652 4.652 0 01-5.035 1.4L88.3 83.857a39.534 39.534 0 01-9.04 5.216L76.689 100.8a4.645 4.645 0 01-3.74 3.659 53.37 53.37 0 01-17.465 0 4.645 4.645 0 01-3.74-3.659l-2.576-11.73a39.534 39.534 0 01-9.04-5.219l-11.41 3.659a4.689 4.689 0 01-5.035-1.4 52.266 52.266 0 01-4.542-6.41l-.964-1.664a50.929 50.929 0 01-3.246-7.048 4.652 4.652 0 011.314-5.054l8.9-8.1a40.308 40.308 0 01-.35-5.238 39.752 39.752 0 01.35-5.219l-8.9-8.1a4.652 4.652 0 01-1.307-5.054 50.928 50.928 0 013.246-7.048l.964-1.664a52.266 52.266 0 014.542-6.412 4.652 4.652 0 015.035-1.4l11.443 3.637a39.534 39.534 0 019.04-5.219l2.576-11.73A4.645 4.645 0 0155.517.736 50.933 50.933 0 0164.248 0a53.091 53.091 0 018.731.736 4.645 4.645 0 013.74 3.659l2.576 11.73a39.535 39.535 0 019.04 5.219l11.443-3.637a4.689 4.689 0 015.035 1.4 52.266 52.266 0 014.542 6.412l.964 1.664a50.929 50.929 0 013.246 7.048zm-49.288 34.8A16.438 16.438 0 1047.81 52.6a16.438 16.438 0 0016.438 16.435z"
                                        transform="translate(3619.338 3429)"
                                    ></path>
                                    <path
                                        fill="#fff"
                                        d="M83.8 23.935a3.253 3.253 0 01-.919 3.534l-6.221 5.662a27.385 27.385 0 010 7.3l6.221 5.662a3.253 3.253 0 01.919 3.534 35.613 35.613 0 01-2.27 4.929l-.674 1.163a36.543 36.543 0 01-3.178 4.481 3.253 3.253 0 01-3.521.978l-8-2.543a27.644 27.644 0 01-6.321 3.647l-1.8 8.2a3.248 3.248 0 01-2.615 2.558 37.318 37.318 0 01-12.212 0 3.248 3.248 0 01-2.615-2.558l-1.8-8.2a27.644 27.644 0 01-6.321-3.649l-7.978 2.558a3.279 3.279 0 01-3.521-.978 36.546 36.546 0 01-3.176-4.483l-.674-1.163a35.612 35.612 0 01-2.27-4.929 3.253 3.253 0 01.919-3.534l6.221-5.662a28.185 28.185 0 01-.244-3.662 27.8 27.8 0 01.245-3.649l-6.221-5.662a3.253 3.253 0 01-.914-3.534 35.611 35.611 0 012.27-4.929l.674-1.163a36.546 36.546 0 013.176-4.483 3.253 3.253 0 013.521-.978l8 2.543a27.644 27.644 0 016.321-3.649l1.8-8.2A3.248 3.248 0 0143.23.515 35.615 35.615 0 0149.334 0a37.123 37.123 0 016.1.515 3.248 3.248 0 012.615 2.558l1.8 8.2a27.644 27.644 0 016.321 3.649l8-2.543a3.279 3.279 0 013.521.978 36.546 36.546 0 013.176 4.483l.674 1.163a35.612 35.612 0 012.27 4.929zM49.334 48.272A11.494 11.494 0 1037.84 36.778a11.494 11.494 0 0011.494 11.494z"
                                        data-name="gear-solid"
                                        transform="translate(3634.34 3445)"
                                    ></path>
                                    <text
                                        fill="#0a1c23"
                                        data-name="Cash balance"
                                        fontFamily="Roboto-Bold, Roboto"
                                        fontSize="80"
                                        fontWeight="700"
                                        transform="translate(2836 1053)"
                                    >
                                        <tspan x="0" y="0">
                                            Cash balance
                                        </tspan>
                                    </text>
                                    <circle
                                        cx="86.5"
                                        cy="86.5"
                                        r="86.5"
                                        fill="#fd9a00"
                                        data-name="Ellipse 112"
                                        transform="translate(3560 2265)"
                                    ></circle>
                                    <circle
                                        cx="65.5"
                                        cy="65.5"
                                        r="65.5"
                                        fill="#fff"
                                        data-name="Ellipse 113"
                                        transform="translate(3581 2286)"
                                    ></circle>
                                    <g data-name="Group 321" transform="rotate(3 3723.02 2758.787)">
                                        <path
                                            fill="#fd9a00"
                                            d="M142.18 75.09A67.09 67.09 0 1175.09 8a67.09 67.09 0 0167.09 67.09zm-38.333-9.55c1.325-8.927-5.464-13.7-14.771-16.935l3-12.093-7.357-1.839-2.945 11.768a196.334 196.334 0 00-5.9-1.379l2.949-11.848-7.357-1.839-3.028 12.094c-1.6-.351-3.166-.731-4.708-1.111v-.026l-10.143-2.543-1.947 7.871s5.46 1.245 5.36 1.325a3.931 3.931 0 013.426 4.282L57 67.037a7.853 7.853 0 01.757.243c-.243-.054-.514-.134-.785-.188l-4.821 19.287a2.7 2.7 0 01-3.38 1.759c.08.108-5.356-1.325-5.356-1.325l-3.654 8.4 9.575 2.387c1.784.46 3.517.919 5.247 1.353l-3.058 12.228 7.357 1.839 3.029-12.093q2.926.788 5.87 1.516l-3 12.048 7.357 1.839 3.058-12.2c12.562 2.381 21.983 1.407 25.98-9.929 3.192-9.136-.163-14.42-6.763-17.855a11.705 11.705 0 009.387-10.8zM87.021 89.131c-2.284 9.136-17.666 4.194-22.671 2.949l4.031-16.2c4.979 1.245 20.992 3.711 18.611 13.255zM89.3 65.406c-2.084 8.3-14.88 4.085-19.045 3.058l3.651-14.688c4.17 1.024 17.534 2.974 15.37 11.633z"
                                            data-name="bitcoin"
                                            transform="translate(3550.209 2280.981)"
                                        ></path>
                                    </g>
                                    <circle
                                        cx="86.5"
                                        cy="86.5"
                                        r="86.5"
                                        fill="#6482fc"
                                        data-name="Ellipse 18"
                                        transform="translate(3560 2886)"
                                    ></circle>
                                    <path
                                        fill="#eefaff"
                                        d="M61.046 47.028L34.545 63.76 8 47.028 34.53 0zm-26.5 22.106L8 52.4l26.53 39.926L61.061 52.4z"
                                        data-name="ethereum"
                                        transform="translate(3611.645 2926.097)"
                                    ></path>
                                    <g
                                        fill="#fff"
                                        stroke="#a3a8ae"
                                        strokeWidth="7"
                                        data-name="Rectangle 415"
                                        transform="translate(2632 3435)"
                                    >
                                        <rect width="129" height="97" stroke="none" rx="19"></rect>
                                        <rect
                                            width="122"
                                            height="90"
                                            x="3.5"
                                            y="3.5"
                                            fill="none"
                                            rx="15.5"
                                        ></rect>
                                    </g>
                                    <path
                                        fill="none"
                                        stroke="#a3a8ae"
                                        strokeWidth="18"
                                        d="M0 0L121 0"
                                        data-name="Line 26"
                                        transform="translate(2637.5 3469.5)"
                                    ></path>
                                    <g
                                        fill="#fff"
                                        stroke="#a7abae"
                                        strokeWidth="4"
                                        data-name="Ellipse 114"
                                        transform="translate(3671 3469)"
                                    >
                                        <circle cx="13" cy="13" r="13" stroke="none"></circle>
                                        <circle cx="13" cy="13" r="11" fill="none"></circle>
                                    </g>
                                    <path
                                        fill="none"
                                        stroke="#f3f3f3"
                                        strokeWidth="4"
                                        d="M0 0L1618 0"
                                        data-name="Line 27"
                                        transform="translate(2242 3339.5)"
                                    ></path>

                                    {
                                        network === "low"
                                            ?
                                            <g fill="#3b3b3b" transform="translate(75 29)">
                                                <rect
                                                    width="12"
                                                    height="18"
                                                    data-name="Rectangle 244"
                                                    rx="2"
                                                    transform="translate(3268 299)"
                                                ></rect>
                                                <rect
                                                    width="14"
                                                    height="27"
                                                    data-name="Rectangle 242"
                                                    opacity="0.5"
                                                    rx="2"
                                                    transform="translate(3291 290)"
                                                ></rect>
                                                <rect
                                                    width="13"
                                                    height="39"
                                                    data-name="Rectangle 240"
                                                    opacity="0.5"
                                                    rx="2"
                                                    transform="translate(3314 278)"
                                                ></rect>
                                                <rect
                                                    width="13"
                                                    height="52"
                                                    data-name="Rectangle 238"
                                                    opacity="0.5"
                                                    rx="2"
                                                    transform="translate(3338 265)"
                                                ></rect>
                                            </g>
                                            :
                                            network === "strong"
                                                ?
                                                <g fill="#3b3b3b" transform="translate(-1130 13934)">
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
                                                :
                                                <g fill="#3b3b3b" transform="translate(71 114)">
                                                    <rect
                                                        width="12"
                                                        height="18"
                                                        data-name="Rectangle 243"
                                                        rx="2"
                                                        transform="translate(3272 213)"
                                                    ></rect>
                                                    <rect
                                                        width="14"
                                                        height="27"
                                                        data-name="Rectangle 241"
                                                        rx="2"
                                                        transform="translate(3295 204)"
                                                    ></rect>
                                                    <rect
                                                        width="13"
                                                        height="39"
                                                        data-name="Rectangle 239"
                                                        opacity="0.5"
                                                        rx="2"
                                                        transform="translate(3318 192)"
                                                    ></rect>
                                                    <rect
                                                        width="13"
                                                        height="52"
                                                        data-name="Rectangle 237"
                                                        opacity="0.5"
                                                        rx="2"
                                                        transform="translate(3342 179)"
                                                    ></rect>
                                                </g>
                                    }


                                    {
                                        net === "4G"
                                            ?
                                            <text
                                                fill="#3a3a3a"
                                                data-name="4G"
                                                fontFamily="Roboto-Medium, Roboto"
                                                fontSize="63"
                                                fontWeight="600"
                                                transform="translate(3462 342)"
                                            >
                                                <tspan x="0" y="0">
                                                    4G
                                                </tspan>
                                            </text>
                                            :
                                            net === "5G"
                                                ?
                                                <text
                                                    fill="#3a3a3a"
                                                    data-name="5G"
                                                    fontFamily="Roboto-Medium, Roboto"
                                                    fontSize="63"
                                                    fontWeight="600"
                                                    transform="translate(3466 346)"
                                                >
                                                    <tspan x="0" y="0">
                                                        5G
                                                    </tspan>
                                                </text>
                                                :
                                                <g fill="#3a3a3a" transform="translate(71 114)">
                                                    <path
                                                        d="M99.606 192a52.69 52.69 0 00-35.3 14.074 1.27 1.27 0 00-.048 1.817l4.256 4.447a1.309 1.309 0 001.849.048 42.819 42.819 0 0129.263-11.428 42.819 42.819 0 0129.263 11.428 1.309 1.309 0 001.849-.048l4.256-4.447a1.271 1.271 0 00-.048-1.817A52.831 52.831 0 0099.606 192z"
                                                        data-name="Path 73"
                                                        transform="translate(3335.104 -8)"
                                                    ></path>
                                                    <path
                                                        d="M221.936 432.967l4.558 4.511a1.307 1.307 0 001.785.048 24.792 24.792 0 0132.8 0 1.307 1.307 0 001.785-.048l4.559-4.511a1.273 1.273 0 00-.048-1.865 33.99 33.99 0 00-45.425 0 1.3 1.3 0 00-.014 1.865zm22.76 7.443a12.987 12.987 0 00-9.468 4.064 1.275 1.275 0 00.032 1.785l8.511 8.4a1.308 1.308 0 001.849 0l8.511-8.4a1.275 1.275 0 00.032-1.785 13.048 13.048 0 00-9.463-4.063z"
                                                        data-name="Path 72"
                                                        transform="translate(3190.015 -220.039)"
                                                    ></path>
                                                </g>
                                    }



                                    {
                                        battery === "25"
                                            ?
                                            <g transform="translate(71 29)">
                                                <path
                                                    fill="#3a3a3a"
                                                    d="M23 0h64a23 23 0 0123 23v13a23 23 0 01-23 23H23A23 23 0 010 36V23A23 23 0 0123 0z"
                                                    data-name="Path 75"
                                                    transform="translate(3506 264)"
                                                ></path>
                                                <path
                                                    fill="#818d9d"
                                                    d="M0 0a6 6 0 016 6v5a6 6 0 01-6 6V0z"
                                                    data-name="Rectangle 248"
                                                    transform="translate(3617 286)"
                                                ></path>
                                                <path
                                                    fill="#818d9d"
                                                    d="M0 0h57a23 23 0 0123 23v13a23 23 0 01-23 23H0V0z"
                                                    data-name="Rectangle 249"
                                                    transform="translate(3536 264)"
                                                ></path>
                                                <text
                                                    fill="#fff8f6"
                                                    data-name="25"
                                                    fontFamily="HelveticaWorld-Bold, Helvetica World"
                                                    fontSize="50"
                                                    fontWeight="700"
                                                    transform="translate(3532 311)"
                                                >
                                                    <tspan x="0" y="0">
                                                        25
                                                    </tspan>
                                                </text>
                                            </g>
                                            :
                                            battery === "50"
                                                ?
                                                <g transform="translate(81 200)">
                                                    <path
                                                        fill="#3a3a3a"
                                                        d="M23 0h64a23 23 0 0123 23v14a23 23 0 01-23 23H23A23 23 0 010 37V23A23 23 0 0123 0z"
                                                        data-name="Path 74"
                                                        transform="translate(3496 92)"
                                                    ></path>
                                                    <path
                                                        fill="#818d9d"
                                                        d="M0 0a6 6 0 016 6v2a6 6 0 01-6 6V0z"
                                                        data-name="Rectangle 251"
                                                        transform="translate(3607 116)"
                                                    ></path>
                                                    <path
                                                        fill="#818d9d"
                                                        d="M0 0h31a23 23 0 0123 23v14a23 23 0 01-23 23H0V0z"
                                                        data-name="Rectangle 247"
                                                        transform="translate(3552 92)"
                                                    ></path>
                                                    <text
                                                        fill="#fff8f6"
                                                        data-name="50"
                                                        fontFamily="HelveticaWorld-Bold, Helvetica World"
                                                        fontSize="50"
                                                        fontWeight="700"
                                                        transform="translate(3522 140)"
                                                    >
                                                        <tspan x="0" y="0">
                                                            50
                                                        </tspan>
                                                    </text>
                                                </g>
                                                :
                                                <g transform="translate(71 114)">
                                                    <rect
                                                        width="110"
                                                        height="60"
                                                        fill="#3a3a3a"
                                                        data-name="Rectangle 245"
                                                        rx="23"
                                                        transform="translate(3506 178)"
                                                    ></rect>
                                                    <path
                                                        fill="#818d9d"
                                                        d="M0 0a6 6 0 016 6v3a6 6 0 01-6 6V0z"
                                                        data-name="Rectangle 250"
                                                        transform="translate(3617 202)"
                                                    ></path>
                                                    <path
                                                        fill="#818d9d"
                                                        d="M0 0h5a23 23 0 0123 23v14A23 23 0 015 60H0V0z"
                                                        data-name="Rectangle 246"
                                                        transform="translate(3588 178)"
                                                    ></path>
                                                    <text
                                                        fill="#fff8f6"
                                                        data-name="78"
                                                        fontFamily="HelveticaWorld-Bold, Helvetica World"
                                                        fontSize="50"
                                                        fontWeight="700"
                                                        transform="translate(3532 226)"
                                                    >
                                                        <tspan x="0" y="0">
                                                            78
                                                        </tspan>
                                                    </text>
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
                        <label>Amount</label>
                        <input
                            type="text"
                            value={data.amount}
                            name="amount"
                            onChange={(e) => onChangeHandler(e)}
                        />
                    </div>
                    <div className="global_form_inner">
                        <label>Bitcoin</label>
                        <input
                            type="text"
                            value={data.bitcoin}
                            name="bitcoin"
                            onChange={(e) => onChangeHandler(e)}
                        />
                        <input
                            type="text"
                            value={data.bitcoinAlt}
                            name="bitcoinAlt"
                            onChange={(e) => onChangeHandler(e)}
                        />
                    </div>
                    <div className="global_form_inner">
                        <label>Ethereum</label>
                        <input
                            type="text"
                            value={data.etherium}
                            name="etherium"
                            onChange={(e) => onChangeHandler(e)}
                        />
                        <input
                            type="text"
                            value={data.etheriumAlt}
                            name="etheriumAlt"
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

export default SixtyEightPage;