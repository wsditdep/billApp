import React, { useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import { write } from 'clipboard-polyfill';
import "../../assets/styles/secondpage.scss";
import { ToastContainer, toast } from 'react-toastify';

const SixtyTwoPage = () => {
    const screenshotRef = useRef(null);

    const [data, setData] = useState({
        time: "2:25",
        amount: "259.71",
        plusData1: "+22.63%",
        plusData2: "+$47.93",
        mco1: "$254.95",
        mco2: "+23.03%",
        bitcoin: "Bitcoin",
        bitcoinVal: "0.000555BTC",
        bitcoin1: "$4.76",
        bitcoin2: "+4.43%",
        etherium: "Etherium",
        etheriumVal: "0 ETH",
        etherium1: "$0.00",
        etherium2: "0.00%",
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
                    <h3>PREVIEW - <span>Mobile 62</span></h3>
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
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                width={imageDimension + "%"}
                                viewBox="0 0 1990 3829"
                            >
                                <g data-name="Group 303" transform="translate(-2259 -97)">
                                    <path
                                        fill="#021e43"
                                        d="M0 0H1989V3828H0z"
                                        data-name="Rectangle 17"
                                        transform="translate(2260 97)"
                                    ></path>
                                    <g data-name="Group 300" transform="translate(0 2)">
                                        <text
                                            fill="#fff"
                                            data-name="19:40"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="61"
                                            letterSpacing=".01em"
                                            transform="translate(2377.992 212.302)"
                                        >
                                            <tspan x="0" y="0">
                                                {data.time}
                                            </tspan>
                                        </text>
                                    </g>
                                    <text
                                        fill="#fff"
                                        data-name="Crypto Wallet"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="97"
                                        transform="translate(2967 442.765)"
                                    >
                                        <tspan x="0" y="0">
                                            Crypto Wallet
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#f7feff"
                                        data-name="259.71"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="145"
                                        letterSpacing=".02em"
                                        transform="translate(3210 893.969)"
                                    >
                                        <tspan x="0" y="0" textAnchor="middle">
                                            {/* <tspan dx="24" dy="-20" className="manage-page61-usd">
                                                $
                                            </tspan> */}
                                            ${data.amount}
                                        </tspan>
                                        <tspan dx="24" dy="-20" className="manage-page61-usd">
                                            USD
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#2d9999"
                                        data-name="22.63%"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="67"
                                        letterSpacing=".01em"
                                        transform="translate(2894.354 1012.338)"
                                    >
                                        <tspan x="255" y="0" textAnchor="end">
                                            {data.plusData1}
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#2d9999"
                                        data-name="+$47.93"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="67"
                                        letterSpacing=".01em"
                                        transform="translate(3265.594 1012.338)"
                                    >
                                        <tspan x="0" y="0">
                                            {data.plusData2}
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#6a83a1"
                                        data-name="TOTAL VALUE"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="73"
                                        letterSpacing="-.02em"
                                        transform="translate(2951.887 678.18)"
                                    >
                                        <tspan x="0" y="0">
                                            TOTAL VALUE
                                        </tspan>
                                    </text>
                                    <path
                                        fill="none"
                                        stroke="#6a83a1"
                                        strokeWidth="1"
                                        d="M0 0L0 98.231"
                                        data-name="Line 9"
                                        transform="translate(3213.561 942.198)"
                                    ></path>
                                    <text
                                        fill="#e0f5ff"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="73"
                                        letterSpacing=".01em"
                                        transform="translate(2455.935 1393.892)"
                                    >
                                        <tspan x="0" y="0">
                                            Buy
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#e0f5ff"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="72"
                                        letterSpacing=".01em"
                                        transform="translate(2951.887 1392.892)"
                                    >
                                        <tspan x="0" y="0">
                                            Sell
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#e0f5ff"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="74"
                                        letterSpacing=".01em"
                                        transform="translate(3459.239 1392.892)"
                                    >
                                        <tspan x="0" y="0">
                                            Pay
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#e0f5ff"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="73"
                                        letterSpacing=".01em"
                                        transform="translate(3871.336 1393.892)"
                                    >
                                        <tspan x="0" y="0">
                                            Transfer
                                        </tspan>
                                    </text>
                                    <rect
                                        width="1899"
                                        height="2301"
                                        fill="#033979"
                                        data-name="Rectangle 18"
                                        rx="13"
                                        transform="translate(2305 1529)"
                                    ></rect>
                                    <text
                                        fill="#d5f3ff"
                                        data-name="ALL COINS"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="57"
                                        letterSpacing=".02em"
                                        transform="translate(2388.322 1657.213)"
                                    >
                                        <tspan x="0" y="0">
                                            ALL COINS
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#97aec4"
                                        data-name="Hide small balances"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="47"
                                        letterSpacing=".06em"
                                        transform="translate(2876.172 1656.399)"
                                    >
                                        <tspan x="0" y="0">
                                            Hide small balances
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#e0f5ff"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="76"
                                        letterSpacing=".01em"
                                        transform="translate(2545.148 1912.605)"
                                    >
                                        <tspan x="0" y="0">
                                            MCO
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#e0f5ff"
                                        data-name="$254.95"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="77"
                                        letterSpacing=".01em"
                                        transform="translate(3514.594 1954.535)"
                                    >
                                        <tspan x="280" y="0" textAnchor="end">
                                            {data.mco1}
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#2d9999"
                                        data-name="23.03%"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="77"
                                        letterSpacing=".01em"
                                        transform="translate(3847.454 1954.535)"
                                    >
                                        <tspan x="300" y="0" textAnchor="end">
                                            {data.mco2}
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#e0f5ff"
                                        data-name="Crypto.com Coin"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="77"
                                        letterSpacing=".01em"
                                        transform="translate(2547.683 2236.95)"
                                    >
                                        <tspan x="0" y="0">
                                            Crypto.com Coin
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#e0f5ff"
                                        data-name="$0.00"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="76"
                                        letterSpacing=".01em"
                                        transform="translate(3604.605 2285.066)"
                                    >
                                        <tspan x="0" y="0">
                                            $0.00
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#e0f5ff"
                                        data-name="$0.00"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="76"
                                        letterSpacing=".01em"
                                        transform="translate(3604.605 2935.848)"
                                    >
                                        <tspan x="200" y="0" textAnchor="end">
                                            {data.etherium1}
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#e0f5ff"
                                        data-name="$0.00"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="76"
                                        letterSpacing=".01em"
                                        transform="translate(3604.605 3259.192)"
                                    >
                                        <tspan x="0" y="0">
                                            {data.etherium2}
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#e0f5ff"
                                        data-name="$0.00"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="76"
                                        letterSpacing=".01em"
                                        transform="translate(3604.605 3582.723)"
                                    >
                                        <tspan x="0" y="0">
                                            $0.00
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#6a90bd"
                                        data-name="0%"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="77"
                                        letterSpacing=".01em"
                                        transform="translate(3937.676 2281.973)"
                                    >
                                        <tspan x="0" y="0">
                                            0.00%
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#6a90bd"
                                        data-name="0%"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="77"
                                        letterSpacing=".01em"
                                        transform="translate(3925.396 2940.941)"
                                    >
                                        <tspan x="210" y="0" textAnchor="end">
                                            {data.etherium2}
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#6a90bd"
                                        data-name="0%"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="77"
                                        letterSpacing=".01em"
                                        transform="translate(3925.396 3583.723)"
                                    >
                                        <tspan x="0" y="0">
                                            0.00%
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#e0f5ff"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="77"
                                        letterSpacing=".01em"
                                        transform="translate(2545.566 2564.388)"
                                    >
                                        <tspan x="0" y="0">
                                            {data.bitcoin}
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#e0f5ff"
                                        data-name="$4.76"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="76"
                                        letterSpacing=".01em"
                                        transform="translate(3604.605 2612.504)"
                                    >
                                        <tspan x="190" y="0" textAnchor="end">
                                            {data.bitcoin1}
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#2d9999"
                                        data-name="4.43%"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="77"
                                        letterSpacing=".01em"
                                        transform="translate(3890.414 2613.504)"
                                    >
                                        <tspan x="250" y="0" textAnchor="end">
                                            {data.bitcoin2}
                                        </tspan>
                                    </text>
                                    <path
                                        fill="none"
                                        stroke="#2b5b8c"
                                        strokeWidth="6"
                                        d="M0 0L1899.138 0"
                                        data-name="Line 15"
                                        transform="translate(2305.022 1760.793)"
                                    ></path>
                                    <text
                                        fill="#5984af"
                                        data-name="69.7 MCO"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="57"
                                        letterSpacing=".05em"
                                        transform="translate(2544.891 2009.209)"
                                    >
                                        <tspan x="0" y="0">
                                            69.7 MCO
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#5984af"
                                        data-name="0CRO"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="57"
                                        letterSpacing=".13em"
                                        transform="translate(2561.148 2336.646)"
                                    >
                                        <tspan x="0" y="0">
                                            0CRO
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#5984af"
                                        data-name="0.000555BTC"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="57"
                                        letterSpacing=".08em"
                                        transform="translate(2545.075 2655.898)"
                                    >
                                        <tspan x="0" y="0">
                                            {data.bitcoinVal}
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#5984af"
                                        data-name="0 ETH"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="57"
                                        letterSpacing=".02em"
                                        transform="translate(2547.896 2987.429)"
                                    >
                                        <tspan x="0" y="0">
                                            {data.etheriumVal}
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#e0f5ff"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="76"
                                        letterSpacing=".01em"
                                        transform="translate(2548.06 2886.732)"
                                    >
                                        <tspan x="0" y="0">
                                            {data.etherium}
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#e0f5ff"
                                        data-name="Bitcoin Cash"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="77"
                                        letterSpacing=".01em"
                                        transform="translate(2547.036 3536.422)"
                                    >
                                        <tspan x="0" y="0">
                                            Bitcoin Cash
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#5984af"
                                        data-name="0 XRP"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="57"
                                        letterSpacing=".02em"
                                        transform="translate(2544.551 3314.866)"
                                    >
                                        <tspan x="0" y="0">
                                            0 XRP
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#e0f5ff"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="76"
                                        letterSpacing=".01em"
                                        transform="translate(2546.672 3214.17)"
                                    >
                                        <tspan x="0" y="0">
                                            Ripple
                                        </tspan>
                                    </text>
                                    <path
                                        fill="none"
                                        stroke="#144b8f"
                                        strokeWidth="4"
                                        d="M0 0L1657.653 0"
                                        data-name="Line 16"
                                        transform="translate(2546.508 3381.609)"
                                    ></path>
                                    <path
                                        fill="none"
                                        stroke="#144b8f"
                                        strokeWidth="4"
                                        d="M0 0L1657.653 0"
                                        data-name="Line 17"
                                        transform="translate(2546.508 3074.636)"
                                    ></path>
                                    <path
                                        fill="none"
                                        stroke="#144b8f"
                                        strokeWidth="4"
                                        d="M0 0L1657.653 0"
                                        data-name="Line 18"
                                        transform="translate(2546.508 2411.575)"
                                    ></path>
                                    <path
                                        fill="none"
                                        stroke="#144b8f"
                                        strokeWidth="4"
                                        d="M0 0L1658 0"
                                        data-name="Line 20"
                                        transform="translate(2546 2074)"
                                    ></path>
                                    <path
                                        fill="none"
                                        stroke="#144b8f"
                                        strokeWidth="4"
                                        d="M0 0L1659 0"
                                        data-name="Line 19"
                                        transform="translate(2545 2737)"
                                    ></path>
                                    <g transform="translate(3424.214 511.35)">
                                        <g
                                            fill="#6a83a1"
                                            data-name="Group 288"
                                            transform="translate(11.025 110.4)"
                                        >
                                            <path
                                                d="M103.726 138.863c-9.681-17.5-27.258-28.463-46.2-28.463s-36.54 10.967-46.2 28.463a2.008 2.008 0 000 2.108c9.681 17.5 27.258 28.463 46.2 28.463s36.54-10.967 46.2-28.463a2.008 2.008 0 000-2.108zm-46.2 26.354c-17.178 0-33.18-9.69-42.063-25.3 8.883-15.61 24.885-25.3 42.063-25.3s33.18 9.69 42.063 25.3c-8.884 15.61-24.889 25.3-42.064 25.3z"
                                                data-name="Path 151"
                                                transform="translate(-11.025 -110.4)"
                                            ></path>
                                            <path
                                                d="M177.187 162.4a14.787 14.787 0 1014.787 14.787 14.725 14.725 0 00-14.787-14.787zm0 26.288a11.5 11.5 0 1111.5-11.5 11.432 11.432 0 01-11.5 11.5z"
                                                data-name="Path 152"
                                                transform="translate(-131.514 -147.67)"
                                            ></path>
                                        </g>
                                    </g>
                                    <g data-name="Group 289" transform="translate(2037 7)">
                                        <circle
                                            cx="93"
                                            cy="93"
                                            r="93"
                                            fill="#04396d"
                                            data-name="Ellipse 95"
                                            transform="translate(388 1098)"
                                        ></circle>
                                        <g
                                            fill="none"
                                            stroke="#2a90e9"
                                            strokeWidth="8"
                                            data-name="Ellipse 96"
                                            transform="translate(429 1139)"
                                        >
                                            <circle cx="52.5" cy="52.5" r="52.5" stroke="none"></circle>
                                            <circle cx="52.5" cy="52.5" r="48.5"></circle>
                                        </g>
                                        <text
                                            fill="#2a90e9"
                                            data-name="+"
                                            fontFamily="Roboto-Light, Roboto"
                                            fontSize="85"
                                            fontWeight="300"
                                            transform="translate(457 1221)"
                                        >
                                            <tspan x="0" y="0">
                                                +
                                            </tspan>
                                        </text>
                                    </g>
                                    <g data-name="Group 290" transform="translate(2034 -16)">
                                        <circle
                                            cx="93"
                                            cy="93"
                                            r="93"
                                            fill="#04396d"
                                            data-name="Ellipse 97"
                                            transform="translate(884 1105)"
                                        ></circle>
                                        <g
                                            fill="none"
                                            stroke="#2a90e9"
                                            strokeWidth="8"
                                            data-name="Ellipse 98"
                                            transform="translate(926 1146)"
                                        >
                                            <circle cx="51.5" cy="51.5" r="51.5" stroke="none"></circle>
                                            <circle cx="51.5" cy="51.5" r="47.5"></circle>
                                        </g>
                                        <text
                                            fill="#2a90e9"
                                            fontFamily="Roboto-Light, Roboto"
                                            fontSize="71"
                                            fontWeight="300"
                                            transform="translate(948 1196)"
                                        >
                                            <tspan x="0" y="0">
                                                __
                                            </tspan>
                                        </text>
                                    </g>
                                    <circle
                                        cx="93"
                                        cy="93"
                                        r="93"
                                        fill="#04396d"
                                        data-name="Ellipse 97"
                                        transform="translate(3415 1097)"
                                    ></circle>
                                    <circle
                                        cx="93"
                                        cy="93"
                                        r="93"
                                        fill="#04396d"
                                        data-name="Ellipse 99"
                                        transform="translate(3903 1097)"
                                    ></circle>
                                    <g
                                        fill="none"
                                        stroke="#2a90e9"
                                        strokeWidth="6"
                                        data-name="Rectangle 395"
                                        transform="translate(3473 1158)"
                                    >
                                        <rect width="70" height="74" stroke="none" rx="9"></rect>
                                        <rect width="64" height="68" x="3" y="3" rx="6"></rect>
                                    </g>
                                    <g
                                        fill="none"
                                        stroke="#2a90e9"
                                        strokeWidth="4"
                                        data-name="Rectangle 396"
                                        transform="translate(3490 1142)"
                                    >
                                        <rect width="37" height="60" stroke="none" rx="18"></rect>
                                        <rect width="33" height="56" x="2" y="2" rx="16"></rect>
                                    </g>
                                    <path
                                        fill="#04396d"
                                        d="M0 0H50V32H0z"
                                        data-name="Rectangle 397"
                                        transform="translate(3484 1171)"
                                    ></path>
                                    <g
                                        fill="none"
                                        stroke="#2a90e9"
                                        strokeWidth="5"
                                        data-name="Group 293"
                                        transform="translate(2032.167 -4.884)"
                                    >
                                        <g data-name="Group 291" transform="translate(1921.5 1157.7)">
                                            <path
                                                d="M0 0L80.497 0"
                                                data-name="Line 21"
                                                transform="translate(0 17.804)"
                                            ></path>
                                            <path
                                                d="M65.058-.001l17.8 17.8-17.8 17.8"
                                                data-name="Path 153"
                                            ></path>
                                        </g>
                                        <g data-name="Group 292" transform="translate(1923.303 1196.46)">
                                            <path
                                                d="M80.497 0L0 0"
                                                data-name="Line 21"
                                                transform="translate(2.367 17.804)"
                                            ></path>
                                            <path
                                                d="M17.799-.001l-17.8 17.8 17.8 17.8"
                                                data-name="Path 153"
                                            ></path>
                                        </g>
                                    </g>
                                    <path
                                        fill="#fff"
                                        d="M56.065 28.033a27.964 27.964 0 01-5.391 16.537l17.063 17.075a4.317 4.317 0 01-6.105 6.105L44.569 50.674a28.037 28.037 0 1111.5-22.642zM28.033 47.44A19.407 19.407 0 108.625 28.033 19.407 19.407 0 0028.033 47.44z"
                                        transform="translate(4069 1614)"
                                    ></path>
                                    <path
                                        fill="none"
                                        stroke="#cecece"
                                        strokeWidth="3"
                                        d="M2822.512 1619.687h-16.472l-6.1-9.15a2.058 2.058 0 011.712-3.204h25.249a2.058 2.058 0 011.711 3.2zm-16.472 4.118h16.472c.489.322 1.042.682 1.673 1.081 7.297 4.672 18.647 14.735 18.647 35.981 0 6.82-1.146 12.354-7.967 12.354h-41.179c-6.82.001-8.354-5.533-8.354-12.354 0-21.246 11.738-31.31 19.034-35.981h0c.618-.4 1.184-.759 1.673-1.081z"
                                    ></path>
                                    <g
                                        fill="none"
                                        stroke="#cecece"
                                        strokeWidth="3"
                                        data-name="Group 294"
                                        transform="translate(-56 -35)"
                                    >
                                        <g data-name="Rectangle 398" transform="translate(2876 1678)">
                                            <rect width="30" height="7" stroke="none" rx="3.5"></rect>
                                            <rect width="27" height="4" x="1.5" y="1.5" rx="2"></rect>
                                        </g>
                                        <g data-name="Rectangle 399" transform="translate(2879 1687)">
                                            <rect width="29" height="7" stroke="none" rx="3.5"></rect>
                                            <rect width="26" height="4" x="1.5" y="1.5" rx="2"></rect>
                                        </g>
                                        <g data-name="Rectangle 400" transform="translate(2879 1696)">
                                            <rect width="29" height="7" stroke="none" rx="3.5"></rect>
                                            <rect width="26" height="4" x="1.5" y="1.5" rx="2"></rect>
                                        </g>
                                    </g>
                                    <g fill="#4b729b" transform="translate(3316.5 3611)">
                                        <path
                                            d="M60.851 5.018l54.58 31.435v63.066l-54.517 31.527-.441-.109L6.5 99.519V36.453L60.473 5.018h.378zm-.178 6.524L12.233 39.75v56.472l48.434 28.2L66.584 121l43.114-24.8V39.761L66.584 14.822zm-40.935 60.83l14.339-10.721 12.676 8.1v14.558l9.592 9.242-.006 4.334-9.239 8.657h-7.8l-19.55-34.17zM65.048 97.9l-.017-4.357 9.557-9.231V69.746l12.539-8.2 14.31 10.83-19.453 34.069h-7.706zM51.46 69.746l-4.667-12.217h27.738l-4.575 12.217L71.309 83.4l-10.7.023-10.578.017 1.433-13.7zm9.14-15.565l-26.361-.011 4.9-21.9h42.799L87.1 54.2z"
                                            data-name="Path 154"
                                            transform="translate(-945.931 -1747.839)"
                                        ></path>
                                        <path
                                            d="M60.851 5.018l54.58 31.435v63.066l-54.517 31.527-.441-.109L6.5 99.519V36.453L60.473 5.018h.378zm-.178 6.524L12.233 39.75v56.472l48.434 28.2L66.584 121l43.114-24.8V39.761L66.584 14.822zm-40.935 60.83l14.339-10.721 12.676 8.1v14.558l9.592 9.242-.006 4.334-9.239 8.657h-7.8l-19.55-34.17zM65.048 97.9l-.017-4.357 9.557-9.231V69.746l12.539-8.2 14.31 10.83-19.453 34.069h-7.706zM51.46 69.746l-4.667-12.217h27.738l-4.575 12.217L71.309 83.4l-10.7.023-10.578.017 1.433-13.7zm9.14-15.565l-26.361-.011 4.9-21.9h42.799L87.1 54.2z"
                                            data-name="Path 155"
                                            transform="translate(-945.931 -1423.839)"
                                        ></path>
                                    </g>
                                    <circle
                                        cx="55"
                                        cy="55"
                                        r="55"
                                        fill="#51729d"
                                        data-name="Ellipse 100"
                                        transform="translate(2371 2525)"
                                    ></circle>
                                    <g transform="rotate(13 -9906.993 11791.345)">
                                        <g data-name="Group 295" transform="translate(11.848 5.89)">
                                            <path
                                                fill="#033773"
                                                d="M54.187 39.145c3.845-1.957 6.25-5.4 5.688-11.145-.757-7.846-7.537-10.477-16.1-11.227V5.889h-6.63v10.6c-1.745 0-3.524.034-5.295.07V5.891h-6.629v10.881c-1.436.029-2.846.057-4.223.057V16.8H11.85v7.074s4.9-.092 4.817 0c2.685 0 3.562 1.56 3.814 2.9V56.584a2.343 2.343 0 01-2.493 2.2c.085.075-4.824 0-4.824 0l-1.316 7.911h8.629c1.608 0 3.188.027 4.738.039l.006 11.007h6.625V66.85c1.823.037 3.582.053 5.3.051v10.84h6.632V66.753c11.149-.644 18.953-3.453 19.922-13.91.784-8.421-3.183-12.18-9.513-13.698zm-22.181-14.8c3.74 0 15.5-1.19 15.506 6.617 0 7.484-11.762 6.61-15.506 6.61zm0 34.488V44.249c4.494 0 18.59-1.292 18.592 7.289C50.6 59.766 36.5 58.83 32 58.833z"
                                                data-name="Path 156"
                                                transform="translate(-11.848 -5.89)"
                                            ></path>
                                        </g>
                                    </g>
                                    <image
                                        width="67"
                                        height="109"
                                        opacity="0.41"
                                        transform="translate(2390 2850)"
                                        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWoAAAJMCAYAAADTxexVAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RTk1NTRBNzk0MzM4MTFFNzlBNTZCQTJGQjU5Q0U4QTYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RTk1NTRBN0E0MzM4MTFFNzlBNTZCQTJGQjU5Q0U4QTYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpFOTU1NEE3NzQzMzgxMUU3OUE1NkJBMkZCNTlDRThBNiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpFOTU1NEE3ODQzMzgxMUU3OUE1NkJBMkZCNTlDRThBNiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pn0eVdcAADwrSURBVHja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"
                                    ></image>
                                    <g data-name="Group 298" transform="translate(2037 16.674)">
                                        <g data-name="Group 296" transform="translate(343 3101.623)">
                                            <g fill="none" data-name="Path 157">
                                                <path
                                                    d="M18.787 0h27.834a18.787 18.787 0 0118.787 18.787v27.834a18.787 18.787 0 01-18.787 18.787H18.787A18.787 18.787 0 010 46.621V18.787A18.787 18.787 0 0118.787 0z"
                                                    transform="rotate(-42 59.312 15.88)"
                                                ></path>
                                                <path
                                                    fill="#4673aa"
                                                    d="M18.787 6C11.737 6 6 11.736 6 18.787v27.834c0 7.05 5.736 12.787 12.787 12.787h27.834c7.05 0 12.787-5.736 12.787-12.787V18.787C59.408 11.737 53.672 6 46.62 6H18.787m0-6h27.834c10.376 0 18.787 8.411 18.787 18.787v27.834c0 10.376-8.411 18.787-18.787 18.787H18.787C8.411 65.408 0 56.997 0 46.62V18.787C0 8.411 8.411 0 18.787 0z"
                                                    transform="rotate(-42 59.312 15.88)"
                                                ></path>
                                            </g>
                                            <path
                                                fill="#033979"
                                                d="M0 0H100V48H0z"
                                                data-name="Rectangle 401"
                                                transform="translate(0 7.377)"
                                            ></path>
                                        </g>
                                        <g data-name="Group 297" transform="rotate(180 221.947 1639.096)">
                                            <g fill="none" data-name="Path 157">
                                                <path
                                                    d="M18.787 0h27.834a18.787 18.787 0 0118.787 18.787v27.834a18.787 18.787 0 01-18.787 18.787H18.787A18.787 18.787 0 010 46.621V18.787A18.787 18.787 0 0118.787 0z"
                                                    transform="rotate(-42 59.312 15.88)"
                                                ></path>
                                                <path
                                                    fill="#4673aa"
                                                    d="M18.787 6C11.737 6 6 11.736 6 18.787v27.834c0 7.05 5.736 12.787 12.787 12.787h27.834c7.05 0 12.787-5.736 12.787-12.787V18.787C59.408 11.737 53.672 6 46.62 6H18.787m0-6h27.834c10.376 0 18.787 8.411 18.787 18.787v27.834c0 10.376-8.411 18.787-18.787 18.787H18.787C8.411 65.408 0 56.997 0 46.62V18.787C0 8.411 8.411 0 18.787 0z"
                                                    transform="rotate(-42 59.312 15.88)"
                                                ></path>
                                            </g>
                                            <path
                                                fill="#033979"
                                                d="M0 0H100V47H0z"
                                                data-name="Rectangle 401"
                                                transform="translate(-.104 7.192)"
                                            ></path>
                                        </g>
                                    </g>
                                    <path
                                        fill="#4b70a4"
                                        d="M0 0H111V62H0z"
                                        data-name="Rectangle 402"
                                        transform="translate(2385.5 3511)"
                                    ></path>
                                    <g fill="#51729d" data-name="Path 158">
                                        <path
                                            d="M33 64.5a31.397 31.397 0 01-22.274-9.226A31.397 31.397 0 011.5 33a31.397 31.397 0 019.226-22.274A31.397 31.397 0 0133 1.5a31.397 31.397 0 0122.274 9.226A31.397 31.397 0 0164.5 33a31.397 31.397 0 01-9.226 22.274A31.397 31.397 0 0133 64.5z"
                                            transform="rotate(-34 6975.459 -2149.789)"
                                        ></path>
                                        <path
                                            fill="#033773"
                                            d="M33 3a29.904 29.904 0 00-21.213 8.787A29.904 29.904 0 003 33a29.904 29.904 0 008.787 21.213A29.904 29.904 0 0033 63a29.904 29.904 0 0021.213-8.787A29.904 29.904 0 0063 33a29.904 29.904 0 00-8.787-21.213A29.904 29.904 0 0033 3m0-3c18.225 0 33 14.775 33 33S51.225 66 33 66 0 51.225 0 33 14.775 0 33 0z"
                                            transform="rotate(-34 6975.459 -2149.789)"
                                        ></path>
                                    </g>
                                    <g data-name="BitcoinSign" transform="rotate(-21 10725.423 -4760.102)">
                                        <g data-name="Group 295">
                                            <path
                                                fill="#033773"
                                                d="M25.4 19.953c2.307-1.174 3.75-3.242 3.413-6.687-.454-4.708-4.522-6.286-9.658-6.736V0h-3.977v6.358c-1.047 0-2.114.021-3.177.042V0H8.023v6.529c-.862.018-1.708.034-2.534.034v-.019L0 6.542v4.245s2.939-.055 2.89 0a2.054 2.054 0 012.29 1.741v17.889a1.406 1.406 0 01-1.5 1.317c.051.045-2.895 0-2.895 0L0 36.48h5.178c.965 0 1.913.016 2.843.024v6.6H12v-6.531c1.094.022 2.149.032 3.18.031v6.5h3.979v-6.593c6.689-.384 11.371-2.067 11.954-8.343.468-5.049-1.913-7.304-5.713-8.215zm-13.3-8.88c2.244 0 9.3-.714 9.3 3.97 0 4.491-7.057 3.966-9.3 3.966zm0 20.693v-8.75c2.7 0 11.154-.775 11.155 4.373-.004 4.937-8.463 4.375-11.162 4.377z"
                                                data-name="Path 156"
                                            ></path>
                                        </g>
                                    </g>
                                    <g data-name="Group 299" transform="translate(16 -193.4)">
                                        <g
                                            fill="none"
                                            stroke="#fff"
                                            strokeWidth="7"
                                            data-name="Ellipse 101"
                                            transform="rotate(-2 17660.32 -114552.616)"
                                        >
                                            <circle cx="53.5" cy="53.5" r="53.5" stroke="none"></circle>
                                            <circle cx="53.5" cy="53.5" r="50"></circle>
                                        </g>
                                        <circle
                                            cx="36.5"
                                            cy="36.5"
                                            r="36.5"
                                            fill="#021e43"
                                            data-name="Ellipse 102"
                                            transform="translate(4093 589)"
                                        ></circle>
                                        <text
                                            fill="#fff"
                                            data-name="$"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="61"
                                            transform="translate(4104 653)"
                                        >
                                            <tspan x="0" y="0">
                                                $
                                            </tspan>
                                        </text>
                                        <path
                                            fill="none"
                                            stroke="#fff"
                                            strokeWidth="6"
                                            d="M4073 565.5v37.833h34.667"
                                            data-name="Path 159"
                                        ></path>
                                    </g>
                                    <path
                                        fill="#fff"
                                        d="M0 0H1990V337H0z"
                                        data-name="Rectangle 403"
                                        transform="translate(2259 3589)"
                                    ></path>
                                    <rect
                                        width="795"
                                        height="31"
                                        fill="#103f68"
                                        data-name="Rectangle 20"
                                        rx="15.5"
                                        transform="translate(2857 3879)"
                                    ></rect>
                                    <path
                                        fill="none"
                                        stroke="#949494"
                                        strokeWidth="6"
                                        d="M2511.913 3687.194c0 3.609-2.341 6.437-4.995 6.437h-4.994l.112 32.124c0 .541-.031 1.083-.078 1.624v3.228c0 4.432-2.794 8.021-6.244 8.021h-2.5a4.426 4.426 0 01-.515-.02c-.219.02-.437.02-.656.02h-8.819c-3.45 0-6.244-3.589-6.244-8.021v-17.646c0-3.549-2.232-6.417-4.995-6.417h-9.99c-2.763 0-4.995 2.867-4.995 6.417v17.647c0 4.432-2.794 8.021-6.244 8.021h-8.72c-.234 0-.468-.02-.7-.04a5.29 5.29 0 01-.562.04h-2.5c-3.45 0-6.244-3.589-6.244-8.021v-22.459c0-.18 0-.381.016-.561v-13.957h-5.015c-2.81 0-4.995-2.807-4.995-6.437a7.554 7.554 0 011.561-4.813l40.022-44.82a3.958 3.958 0 013.434-1.6 4.484 4.484 0 013.278 1.4l39.865 45.021a6.242 6.242 0 011.717 4.812z"
                                    ></path>
                                    <text
                                        fill="#858585"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="60"
                                        transform="translate(2386.036 3819)"
                                    >
                                        <tspan x="0" y="0">
                                            Home
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#0f9af7"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="60"
                                        transform="translate(2751.551 3819)"
                                    >
                                        <tspan x="0" y="0">
                                            Wallet
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#858585"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="60"
                                        transform="translate(4009.396 3815)"
                                    >
                                        <tspan x="0" y="0">
                                            Card
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#858585"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="60"
                                        transform="translate(3598 3815)"
                                    >
                                        <tspan x="0" y="0">
                                            Track
                                        </tspan>
                                    </text>
                                    <g
                                        fill="none"
                                        stroke="#858585"
                                        strokeWidth="4"
                                        data-name="Group 301"
                                        transform="translate(1932 -26)"
                                    >
                                        <g data-name="Ellipse 104" transform="translate(1666 3718)">
                                            <ellipse
                                                cx="13"
                                                cy="12.5"
                                                stroke="none"
                                                rx="13"
                                                ry="12.5"
                                            ></ellipse>
                                            <ellipse cx="13" cy="12.5" rx="11" ry="10.5"></ellipse>
                                        </g>
                                        <g data-name="Ellipse 105" transform="translate(1699 3678)">
                                            <circle cx="13" cy="13" r="13" stroke="none"></circle>
                                            <circle cx="13" cy="13" r="11"></circle>
                                        </g>
                                        <g data-name="Ellipse 106" transform="translate(1738 3696)">
                                            <ellipse
                                                cx="13.5"
                                                cy="13"
                                                stroke="none"
                                                rx="13.5"
                                                ry="13"
                                            ></ellipse>
                                            <ellipse cx="13.5" cy="13" rx="11.5" ry="11"></ellipse>
                                        </g>
                                        <g data-name="Ellipse 107" transform="translate(1777 3662)">
                                            <ellipse
                                                cx="13.5"
                                                cy="13"
                                                stroke="none"
                                                rx="13.5"
                                                ry="13"
                                            ></ellipse>
                                            <ellipse cx="13.5" cy="13" rx="11.5" ry="11"></ellipse>
                                        </g>
                                        <path
                                            d="M0 20.737L18.554 0"
                                            data-name="Line 22"
                                            transform="translate(1686.192 3701.292)"
                                        ></path>
                                        <path
                                            d="M0 0L18.554 7.64"
                                            data-name="Line 23"
                                            transform="translate(1722.209 3697.472)"
                                        ></path>
                                        <path
                                            d="M0 20.737L21.829 0"
                                            data-name="Line 24"
                                            transform="translate(1760.409 3681.1)"
                                        ></path>
                                    </g>
                                    <g
                                        fill="#fff"
                                        stroke="#707070"
                                        strokeWidth="4"
                                        data-name="Rectangle 404"
                                        transform="translate(4007.896 3639)"
                                    >
                                        <rect width="124" height="89" stroke="none" rx="9"></rect>
                                        <rect width="120" height="85" x="2" y="2" fill="none" rx="7"></rect>
                                    </g>
                                    <path
                                        fill="none"
                                        stroke="#707070"
                                        strokeWidth="4"
                                        d="M0 0L119 0"
                                        data-name="Line 25"
                                        transform="translate(4009.396 3663.5)"
                                    ></path>
                                    <g data-name="Group 302" transform="translate(1871.974 3.047)">
                                        <rect
                                            width="105"
                                            height="78"
                                            fill="#0f9af7"
                                            data-name="Rectangle 405"
                                            rx="10"
                                            transform="translate(904 3649)"
                                        ></rect>
                                        <g
                                            fill="none"
                                            stroke="#0f9af7"
                                            strokeWidth="4"
                                            data-name="Rectangle 406"
                                            transform="rotate(8 -25519.083 8358.468)"
                                        >
                                            <rect width="95" height="70" stroke="none" rx="10"></rect>
                                            <rect width="91" height="66" x="2" y="2" rx="8"></rect>
                                        </g>
                                        <circle
                                            cx="9.5"
                                            cy="9.5"
                                            r="9.5"
                                            fill="#fff"
                                            data-name="Ellipse 108"
                                            transform="translate(911 3680)"
                                        ></circle>
                                    </g>
                                    {
                                        battery == "25"
                                            ?
                                            <>
                                                <rect
                                                    width="119"
                                                    height="65"
                                                    fill="#fff"
                                                    data-name="Rectangle 170"
                                                    rx="23"
                                                    transform="translate(4007 155)"
                                                ></rect>
                                                <path
                                                    fill="#818d9d"
                                                    d="M0 0a6 6 0 016 6v5a6 6 0 01-6 6V0z"
                                                    data-name="Rectangle 172"
                                                    transform="translate(4128 180)"
                                                ></path>
                                                <path
                                                    fill="#818d9d"
                                                    d="M0 0h63a23 23 0 0123 23v19a23 23 0 01-23 23H0V0z"
                                                    data-name="Rectangle 171"
                                                    transform="translate(4040 155)"
                                                ></path>
                                                <text
                                                    fill="#0a1032"
                                                    data-name="25"
                                                    fontFamily="HelveticaWorld-Bold, Helvetica World"
                                                    fontSize="55"
                                                    fontWeight="700"
                                                    transform="translate(4035 207)"
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
                                                        width="119"
                                                        height="65"
                                                        fill="#fff"
                                                        data-name="Rectangle 170"
                                                        rx="23"
                                                        transform="translate(4007 155)"
                                                    ></rect>
                                                    <path
                                                        fill="#818d9d"
                                                        d="M0 0a6 6 0 016 6v5a6 6 0 01-6 6V0z"
                                                        data-name="Rectangle 172"
                                                        transform="translate(4128 180)"
                                                    ></path>
                                                    <path
                                                        fill="#818d9d"
                                                        d="M0 0h34a23 23 0 0123 23v19a23 23 0 01-23 23H0V0z"
                                                        data-name="Rectangle 171"
                                                        transform="translate(4069 155)"
                                                    ></path>
                                                    <text
                                                        fill="#0a1032"
                                                        data-name="50"
                                                        fontFamily="HelveticaWorld-Bold, Helvetica World"
                                                        fontSize="55"
                                                        fontWeight="700"
                                                        transform="translate(4035 207)"
                                                    >
                                                        <tspan x="0" y="0">
                                                            50
                                                        </tspan>
                                                    </text>
                                                </>
                                                :
                                                <>
                                                    <rect
                                                        width="119"
                                                        height="65"
                                                        fill="#fff"
                                                        data-name="Rectangle 170"
                                                        rx="23"
                                                        transform="translate(4007 155)"
                                                    ></rect>
                                                    <path
                                                        fill="#818d9d"
                                                        d="M0 0a6 6 0 016 6v6a6 6 0 01-6 6V0z"
                                                        data-name="Rectangle 172"
                                                        transform="translate(4128 179)"
                                                    ></path>
                                                    <path
                                                        fill="#818d9d"
                                                        d="M0 0h7a23 23 0 0123 23v19A23 23 0 017 65H0V0z"
                                                        data-name="Rectangle 171"
                                                        transform="translate(4096 155)"
                                                    ></path>
                                                    <text
                                                        fill="#0a1032"
                                                        data-name="78"
                                                        fontFamily="HelveticaWorld-Bold, Helvetica World"
                                                        fontSize="55"
                                                        fontWeight="700"
                                                        transform="translate(4035 206)"
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
                                                    width="14"
                                                    height="20"
                                                    fill="#fff"
                                                    data-name="Rectangle 35"
                                                    rx="2"
                                                    transform="translate(3760 195)"
                                                ></rect>
                                                <rect
                                                    width="16"
                                                    height="30"
                                                    fill="#fff"
                                                    data-name="Rectangle 36"
                                                    rx="2"
                                                    transform="translate(3786 185)"
                                                ></rect>
                                                <rect
                                                    width="14"
                                                    height="44"
                                                    fill="#fff"
                                                    data-name="Rectangle 37"
                                                    rx="2"
                                                    transform="translate(3812 171)"
                                                ></rect>
                                                <rect
                                                    width="14"
                                                    height="58"
                                                    fill="#fff"
                                                    data-name="Rectangle 38"
                                                    rx="2"
                                                    transform="translate(3839 157)"
                                                ></rect>
                                            </>
                                            :
                                            network === "low"
                                                ?
                                                <>
                                                    <rect
                                                        width="14"
                                                        height="20"
                                                        fill="#fff"
                                                        data-name="Rectangle 35"
                                                        rx="2"
                                                        transform="translate(3760 195)"
                                                    ></rect>
                                                    <rect
                                                        width="16"
                                                        height="30"
                                                        fill="#384965"
                                                        data-name="Rectangle 36"
                                                        rx="2"
                                                        transform="translate(3786 185)"
                                                    ></rect>
                                                    <rect
                                                        width="14"
                                                        height="44"
                                                        fill="#384965"
                                                        data-name="Rectangle 37"
                                                        rx="2"
                                                        transform="translate(3812 171)"
                                                    ></rect>
                                                    <rect
                                                        width="14"
                                                        height="58"
                                                        fill="#384965"
                                                        data-name="Rectangle 38"
                                                        rx="2"
                                                        transform="translate(3839 157)"
                                                    ></rect>
                                                </>
                                                :
                                                <>
                                                    <rect
                                                        width="14"
                                                        height="21"
                                                        fill="#fff"
                                                        data-name="Rectangle 35"
                                                        rx="2"
                                                        transform="translate(3759 194)"
                                                    ></rect>
                                                    <rect
                                                        width="16"
                                                        height="31"
                                                        fill="#fff"
                                                        data-name="Rectangle 36"
                                                        rx="2"
                                                        transform="translate(3786 184)"
                                                    ></rect>
                                                    <rect
                                                        width="16"
                                                        height="45"
                                                        fill="#384965"
                                                        data-name="Rectangle 37"
                                                        rx="2"
                                                        transform="translate(3812 170)"
                                                    ></rect>
                                                    <rect
                                                        width="14"
                                                        height="60"
                                                        fill="#384965"
                                                        data-name="Rectangle 38"
                                                        rx="2"
                                                        transform="translate(3841 155)"
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
                                                fontSize="62"
                                                fontWeight="500"
                                                transform="translate(3890 211)"
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
                                                    fontSize="62"
                                                    fontWeight="500"
                                                    transform="translate(3890 209)"
                                                >
                                                    <tspan x="0" y="0">
                                                        5G
                                                    </tspan>
                                                </text>
                                                :
                                                <>
                                                    <path
                                                        fill="#fff"
                                                        d="M106.3 192a62.574 62.574 0 00-41.926 16.714 1.508 1.508 0 00-.057 2.158l5.054 5.281a1.554 1.554 0 002.2.057 50.851 50.851 0 0134.752-13.572 50.851 50.851 0 0134.752 13.572 1.554 1.554 0 002.2-.057l5.054-5.281a1.509 1.509 0 00-.057-2.158A62.741 62.741 0 00106.3 192z"
                                                        data-name="Path 7"
                                                        transform="translate(3822.619 -35.045)"
                                                    ></path>
                                                    <path
                                                        fill="#fff"
                                                        d="M222.008 434.95l5.414 5.357a1.552 1.552 0 002.12.057 29.443 29.443 0 0138.955 0 1.552 1.552 0 002.12-.057l5.414-5.357a1.512 1.512 0 00-.057-2.215 40.365 40.365 0 00-53.946 0 1.543 1.543 0 00-.02 2.215zm27.03 8.84a15.423 15.423 0 00-11.243 4.827 1.514 1.514 0 00.038 2.12l10.108 9.975a1.554 1.554 0 002.2 0l10.108-9.975a1.514 1.514 0 00.038-2.12 15.5 15.5 0 00-11.249-4.828z"
                                                        data-name="Path 8"
                                                        transform="translate(3679.887 -243.639)"
                                                    ></path>
                                                </>
                                    }
                                    <g data-name="mco-svgrepo-com" transform="translate(3151.722 3611.702)">
                                        <path
                                            fill="#103f68"
                                            d="M102.777 0a102.456 102.456 0 11-40.005 8.077A102.454 102.454 0 01102.777 0z"
                                            data-name="Ellipse 103"
                                        ></path>
                                        <path
                                            fill="#fff"
                                            d="M60.855 0l61.112 35.2v70.61l-61.042 35.3-.494-.122L0 105.81V35.2L60.432 0h.424zm-.2 7.305L6.419 38.888v63.23L60.65 133.7l6.625-3.832 48.273-27.768V38.9L67.275 10.977zM14.822 75.414l16.055-12 14.193 9.06v16.305l10.74 10.348-.01 4.853-10.348 9.693h-8.733l-21.89-38.259zm50.732 28.579l-.019-4.879 10.7-10.335V72.474l14.039-9.18L106.3 75.421l-21.783 38.143h-8.628zM50.34 72.474l-5.225-13.68h31.057l-5.123 13.68 1.515 15.291-11.985.026-11.844.019 1.6-15.336zm10.239-17.428l-29.516-.013 5.489-24.522h47.914l5.777 24.554z"
                                            data-name="Path 160"
                                            transform="translate(41.726 32.212)"
                                        ></path>
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
                        <input
                            type="text"
                            value={data.plusData1}
                            name="plusData1"
                            onChange={(e) => onChangeHandler(e)}
                        />
                        <input
                            type="text"
                            value={data.plusData2}
                            name="plusData2"
                            onChange={(e) => onChangeHandler(e)}
                        />
                    </div>
                    <div className="global_form_inner">
                        <label>MCO</label>
                        <input
                            type="text"
                            value={data.mco1}
                            name="mco1"
                            onChange={(e) => onChangeHandler(e)}
                        />
                        <input
                            type="text"
                            value={data.mco2}
                            name="mco2"
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
                            value={data.bitcoinVal}
                            name="bitcoinVal"
                            onChange={(e) => onChangeHandler(e)}
                        />
                        <input
                            type="text"
                            value={data.bitcoin1}
                            name="bitcoin1"
                            onChange={(e) => onChangeHandler(e)}
                        />
                        <input
                            type="text"
                            value={data.bitcoin2}
                            name="bitcoin2"
                            onChange={(e) => onChangeHandler(e)}
                        />
                    </div>
                    <div className="global_form_inner">
                        <label>Etherium</label>
                        <input
                            type="text"
                            value={data.etherium}
                            name="etherium"
                            onChange={(e) => onChangeHandler(e)}
                        />
                        <input
                            type="text"
                            value={data.etheriumVal}
                            name="etheriumVal"
                            onChange={(e) => onChangeHandler(e)}
                        />
                        <input
                            type="text"
                            value={data.etherium1}
                            name="etherium1"
                            onChange={(e) => onChangeHandler(e)}
                        />
                        <input
                            type="text"
                            value={data.etherium2}
                            name="etherium2"
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

export default SixtyTwoPage;