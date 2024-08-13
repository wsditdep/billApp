import React, { useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import { write } from 'clipboard-polyfill';
import "../../assets/styles/secondpage.scss";
import { ToastContainer, toast } from 'react-toastify';

const EightyFourPage = () => {
    const screenshotRef = useRef(null);

    const [data, setData] = useState({
        time: "5:46",
        amount: "3,960.93",
        amountAlt: "+$3960.93",
        cryptoWallet: "$3,960.93",
        cryptoWalletAlt: "+1.61%",
        cronos: "$3,960.93",
        cronos1: "+1.61%",
        cronos2: "42,764.4 CRO",
        usd: "$0.92",
        usd1: "0.00%",
        usd2: "0.92 USDT",
    });

    const [network, setNetwork] = useState("strong");
    const [net, setNet] = useState("5G");
    const [battery, setBattery] = useState("25");

    const [imageDimension, setImageDimension] = useState("167");

    const onChangeHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    const notify = (message) => toast.success(message, {
        containerId: 'success-taoast',
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
                    <h3>PREVIEW - <span>Mobile 84</span></h3>
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
                                viewBox="0 0 1806 3917"
                            >
                                <defs>
                                    <linearGradient
                                        id="linear-gradient"
                                        x1="0.197"
                                        x2="0.784"
                                        y1="0.309"
                                        y2="0.851"
                                        gradientUnits="objectBoundingBox"
                                    >
                                        <stop offset="0" stopColor="#0736a5"></stop>
                                        <stop offset="1" stopColor="#00040e"></stop>
                                    </linearGradient>
                                    <clipPath id="clip-path">
                                        <path
                                            fill="#fff"
                                            d="M0 0H223.047V63.268H0z"
                                            data-name="Rectangle 444"
                                        ></path>
                                    </clipPath>
                                </defs>
                                <g data-name="Group 360" transform="translate(-2111 -115)">
                                    <g data-name="Group 359">
                                        <g data-name="Group 358">
                                            <g data-name="Group 357">
                                                <path
                                                    fill="#0b1326"
                                                    d="M0 0H1804V3917H0z"
                                                    data-name="Rectangle 1"
                                                    transform="translate(2111 115)"
                                                ></path>
                                                <text
                                                    fill="#fafafa"
                                                    data-name="Accounts"
                                                    fontFamily="Roboto-Regular, Roboto"
                                                    fontSize="78"
                                                    transform="translate(2840 468)"
                                                >
                                                    <tspan x="0" y="0">
                                                        Accounts
                                                    </tspan>
                                                </text>
                                                <text
                                                    fill="#fcfffd"
                                                    data-name="$ 3,960.93 USD"
                                                    fontFamily="Roboto-Medium, Roboto"
                                                    fontSize="119"
                                                    fontWeight="500"
                                                    transform="translate(3000 902)"
                                                >
                                                    <tspan x="0" y="0" textAnchor="middle">
                                                        <tspan fill="#959ca4">
                                                            $
                                                        </tspan>
                                                        <tspan dx="30">
                                                            {data.amount}
                                                        </tspan>
                                                        <tspan dx="30" fill="#959ca4">
                                                            USD
                                                        </tspan>
                                                    </tspan>

                                                </text>
                                                <text
                                                    fill="#959db0"
                                                    data-name="Total Balance"
                                                    fontFamily="Roboto-Regular, Roboto"
                                                    fontSize="65"
                                                    transform="translate(2735.363 692.99)"
                                                >
                                                    <tspan x="0" y="0">
                                                        Total Balance
                                                    </tspan>
                                                </text>
                                                <path
                                                    fill="#727a8d"
                                                    d="M54.2 40.911a44.33 44.33 0 00-30.079 12.557A66.118 66.118 0 009.312 73.58 66.333 66.333 0 0024.1 93.685a44.416 44.416 0 0030.1 12.568 44.33 44.33 0 0030.1-12.568A66.118 66.118 0 0099.1 73.58a66.333 66.333 0 00-14.8-20.112 44.417 44.417 0 00-30.1-12.557zM17.967 46.96A53.294 53.294 0 0154.2 32a53.294 53.294 0 0136.239 14.96 74.107 74.107 0 0117.5 24.334 5.83 5.83 0 010 4.565 73.919 73.919 0 01-17.5 24.334A53.294 53.294 0 0154.2 115.161 53.294 53.294 0 0117.967 100.2 73.546 73.546 0 01.491 75.863a5.83 5.83 0 010-4.565A73.546 73.546 0 0117.967 46.96zM54.2 88.427a14.851 14.851 0 100-29.7h-.377a11.883 11.883 0 01-11.673 14.85 12.377 12.377 0 01-3.013-.377v.377A14.949 14.949 0 0054.2 88.431zm0-38.609A23.762 23.762 0 1130.121 73.58 23.762 23.762 0 0154.2 49.819z"
                                                    transform="translate(3182.471 594.922)"
                                                ></path>
                                                <g fill="#0b1326" data-name="Ellipse 1">
                                                    <path
                                                        d="M22.598 42.696A20.034 20.034 0 018.387 36.81 20.034 20.034 0 012.5 22.6 20.034 20.034 0 018.387 8.387a20.034 20.034 0 0114.211-5.888A20.034 20.034 0 0136.81 8.387a20.034 20.034 0 015.887 14.211A20.034 20.034 0 0136.81 36.81a20.034 20.034 0 01-14.21 5.887z"
                                                        transform="translate(3214.086 646.055)"
                                                    ></path>
                                                    <path
                                                        fill="#727a8d"
                                                        d="M22.598 5c-4.7 0-9.12 1.83-12.444 5.154A17.483 17.483 0 005 22.598c0 4.7 1.83 9.12 5.154 12.444a17.483 17.483 0 0012.444 5.154c4.7 0 9.12-1.83 12.444-5.154a17.483 17.483 0 005.154-12.444c0-4.7-1.83-9.12-5.154-12.444A17.483 17.483 0 0022.598 5m0-5c12.48 0 22.598 10.118 22.598 22.598 0 12.48-10.117 22.598-22.598 22.598C10.118 45.196 0 35.08 0 22.598 0 10.118 10.118 0 22.598 0z"
                                                        transform="translate(3214.086 646.055)"
                                                    ></path>
                                                </g>
                                                <path
                                                    fill="none"
                                                    stroke="#1f273a"
                                                    strokeWidth="7"
                                                    d="M0 0L0 79.093"
                                                    data-name="Line 2"
                                                    transform="translate(2949.092 973.4)"
                                                ></path>
                                                <text
                                                    fill="#9da4b6"
                                                    data-name="0%"
                                                    fontFamily="Roboto-Regular, Roboto"
                                                    fontSize="62"
                                                    transform="translate(2724.994 1032.727)"
                                                >
                                                    <tspan x="0" y="0">
                                                        0.00%
                                                    </tspan>
                                                </text>
                                                <text
                                                    fill="#0cab8f"
                                                    data-name="+$3,960.93"
                                                    fontFamily="Roboto-Regular, Roboto"
                                                    fontSize="62"
                                                    transform="translate(2992.404 1036.494)"
                                                >
                                                    <tspan x="0" y="0">
                                                        {data.amountAlt}
                                                    </tspan>
                                                </text>
                                                <rect
                                                    width="1660"
                                                    height="832"
                                                    fill="#151d34"
                                                    data-name="Rectangle 6"
                                                    rx="15"
                                                    transform="translate(2185 1622)"
                                                ></rect>
                                                <rect
                                                    width="1660"
                                                    height="275"
                                                    fill="#151d34"
                                                    data-name="Rectangle 7"
                                                    rx="15"
                                                    transform="translate(2185 2503)"
                                                ></rect>
                                                <rect
                                                    width="1660"
                                                    height="554"
                                                    fill="#151d34"
                                                    data-name="Rectangle 8"
                                                    rx="15"
                                                    transform="translate(2185 2815)"
                                                ></rect>
                                                <rect
                                                    width="1660"
                                                    height="350"
                                                    fill="#151d34"
                                                    data-name="Rectangle 9"
                                                    rx="15"
                                                    transform="translate(2185 3407)"
                                                ></rect>
                                                <path
                                                    fill="#0b1326"
                                                    d="M0 0H1804V398H0z"
                                                    data-name="Rectangle 10"
                                                    transform="translate(2113 3634)"
                                                ></path>
                                                <path
                                                    fill="none"
                                                    stroke="#283047"
                                                    strokeWidth="2"
                                                    d="M0 0L1660 0"
                                                    data-name="Line 3"
                                                    transform="translate(2185 1908)"
                                                ></path>
                                                <path
                                                    fill="none"
                                                    stroke="#283047"
                                                    strokeWidth="2"
                                                    d="M0 0L1660 0"
                                                    data-name="Line 4"
                                                    transform="translate(2185 2183)"
                                                ></path>
                                                <path
                                                    fill="none"
                                                    stroke="#283047"
                                                    strokeWidth="2"
                                                    d="M0 0L1660 0"
                                                    data-name="Line 5"
                                                    transform="translate(2185 3094)"
                                                ></path>
                                                <text
                                                    fill="#fff"
                                                    data-name="Fiat Wallet"
                                                    fontFamily="Roboto-Medium, Roboto"
                                                    fontSize="62"
                                                    fontWeight="500"
                                                    transform="translate(2253 2664)"
                                                >
                                                    <tspan x="0" y="0">
                                                        Fiat Wallet
                                                    </tspan>
                                                </text>
                                                <text
                                                    fill="#fff"
                                                    data-name="$0.00"
                                                    fontFamily="Roboto-Regular, Roboto"
                                                    fontSize="62"
                                                    transform="translate(3616 2656)"
                                                >
                                                    <tspan x="0" y="0">
                                                        $0.00
                                                    </tspan>
                                                </text>
                                                <text
                                                    fill="#fff"
                                                    data-name="$0.00"
                                                    fontFamily="Roboto-Regular, Roboto"
                                                    fontSize="62"
                                                    transform="translate(3612 2976)"
                                                >
                                                    <tspan x="0" y="0">
                                                        $0.00
                                                    </tspan>
                                                </text>
                                                <text
                                                    fill="#fff"
                                                    data-name="Crypto Earn"
                                                    fontFamily="Roboto-Medium, Roboto"
                                                    fontSize="62"
                                                    fontWeight="500"
                                                    transform="translate(2252 3251)"
                                                >
                                                    <tspan x="0" y="0">
                                                        Crypto Earn
                                                    </tspan>
                                                </text>
                                                <text
                                                    fill="#fff"
                                                    data-name="$0.00"
                                                    fontFamily="Roboto-Regular, Roboto"
                                                    fontSize="62"
                                                    transform="translate(3612 3221)"
                                                >
                                                    <tspan x="0" y="0">
                                                        $0.00
                                                    </tspan>
                                                </text>
                                                <text
                                                    fill="#9da4b6"
                                                    data-name="--%"
                                                    fontFamily="Roboto-Regular, Roboto"
                                                    fontSize="62"
                                                    transform="translate(3691 3293)"
                                                >
                                                    <tspan x="0" y="0">
                                                        --%
                                                    </tspan>
                                                </text>
                                                <text
                                                    fill="#fff"
                                                    data-name="Crypto.com NFT"
                                                    fontFamily="Roboto-Medium, Roboto"
                                                    fontSize="62"
                                                    fontWeight="500"
                                                    transform="translate(2247 3571)"
                                                >
                                                    <tspan x="0" y="0">
                                                        Crypto.com NFT
                                                    </tspan>
                                                </text>
                                                <text
                                                    fill="#fff"
                                                    data-name="--"
                                                    fontFamily="Roboto-Regular, Roboto"
                                                    fontSize="75"
                                                    transform="translate(3732 3576)"
                                                >
                                                    <tspan x="0" y="0">
                                                        --
                                                    </tspan>
                                                </text>
                                                <text
                                                    fill="#fff"
                                                    data-name="Crypto Wallet"
                                                    fontFamily="Roboto-Medium, Roboto"
                                                    fontSize="62"
                                                    fontWeight="500"
                                                    transform="translate(2252 1790)"
                                                >
                                                    <tspan x="0" y="0">
                                                        Crypto Wallet
                                                    </tspan>
                                                </text>
                                                <text
                                                    fill="#fff"
                                                    data-name="$3,960.93"
                                                    fontFamily="Roboto-Regular, Roboto"
                                                    fontSize="62"
                                                    transform="translate(3495 1752)"
                                                >
                                                    <tspan x="285" y="0" textAnchor="end">
                                                        {data.cryptoWallet}
                                                    </tspan>
                                                </text>
                                                <text
                                                    fill="#0cab8f"
                                                    data-name="1.61%"
                                                    fontFamily="Roboto-Regular, Roboto"
                                                    fontSize="52"
                                                    transform="translate(3612 1836)"
                                                >
                                                    <tspan x="170" y="0" textAnchor="end">
                                                        {data.cryptoWalletAlt}
                                                    </tspan>
                                                </text>
                                                <path
                                                    fill="#fff"
                                                    d="M11.482 2.578a3.766 3.766 0 016.335 0L27.87 18.212a3.766 3.766 0 01-3.171 5.8H4.6a3.766 3.766 0 01-3.171-5.8z"
                                                    data-name="Polygon 1"
                                                    transform="translate(2662.176 1755.709)"
                                                ></path>
                                                <text
                                                    fill="#fff"
                                                    data-name="Earn Wallet"
                                                    fontFamily="Roboto-Medium, Roboto"
                                                    fontSize="62"
                                                    fontWeight="500"
                                                    transform="translate(2254 2976)"
                                                >
                                                    <tspan x="0" y="0">
                                                        Earn Wallet
                                                    </tspan>
                                                </text>
                                                <path
                                                    fill="#fff"
                                                    d="M11.482 2.578a3.766 3.766 0 016.335 0L27.87 18.212a3.766 3.766 0 01-3.171 5.8H4.6a3.766 3.766 0 01-3.171-5.8z"
                                                    data-name="Polygon 2"
                                                    transform="translate(2607.352 2941.109)"
                                                ></path>
                                                <text
                                                    fill="#d3dae2"
                                                    fontFamily="Roboto-Regular, Roboto"
                                                    fontSize="62"
                                                    transform="translate(2414 2031)"
                                                >
                                                    <tspan x="0" y="0">
                                                        Cronos
                                                    </tspan>
                                                </text>
                                                <text
                                                    fill="#fff"
                                                    data-name="$3,959.98"
                                                    fontFamily="Roboto-Regular, Roboto"
                                                    fontSize="62"
                                                    transform="translate(3499 2031)"
                                                >
                                                    <tspan x="280" y="0" textAnchor="end">
                                                        {data.cronos}
                                                    </tspan>
                                                </text>
                                                <text
                                                    fill="#0cab8f"
                                                    data-name="1.61%"
                                                    fontFamily="Roboto-Regular, Roboto"
                                                    fontSize="52"
                                                    transform="translate(3612 2115)"
                                                >
                                                    <tspan x="170" y="0" textAnchor="end">
                                                        {data.cronos1}
                                                    </tspan>
                                                </text>
                                                <text
                                                    fill="#d3dae2"
                                                    data-name="USD Coin"
                                                    fontFamily="Roboto-Regular, Roboto"
                                                    fontSize="62"
                                                    transform="translate(2410 2306)"
                                                >
                                                    <tspan x="0" y="0">
                                                        USD Coin
                                                    </tspan>
                                                </text>
                                                <text
                                                    fill="#7f8698"
                                                    data-name="42,764.4 CRO"
                                                    fontFamily="Roboto-Regular, Roboto"
                                                    fontSize="62"
                                                    transform="translate(2414 2114)"
                                                >
                                                    <tspan x="0" y="0">
                                                        {data.cronos2}
                                                    </tspan>
                                                </text>
                                                <text
                                                    fill="#7f8698"
                                                    data-name="0.92 USDC"
                                                    fontFamily="Roboto-Regular, Roboto"
                                                    fontSize="62"
                                                    transform="translate(2410 2390)"
                                                >
                                                    <tspan x="0" y="0">
                                                        {data.usd2}
                                                    </tspan>
                                                </text>
                                                <text
                                                    fill="#fff"
                                                    data-name="$0.92"
                                                    fontFamily="Roboto-Regular, Roboto"
                                                    fontSize="62"
                                                    transform="translate(3620 2310)"
                                                >
                                                    <tspan x="160" y="0" textAnchor="end">
                                                        {data.usd}
                                                    </tspan>
                                                </text>
                                                <text
                                                    fill="#7f8698"
                                                    data-name="0%"
                                                    fontFamily="Roboto-Regular, Roboto"
                                                    fontSize="53"
                                                    transform="translate(3631 2391)"
                                                >
                                                    <tspan x="150" y="0" textAnchor="end">
                                                        {data.usd1}
                                                    </tspan>
                                                </text>
                                                <ellipse
                                                    cx="47.5"
                                                    cy="49"
                                                    fill="#196ac3"
                                                    data-name="Ellipse 5"
                                                    rx="47.5"
                                                    ry="49"
                                                    transform="translate(2272 2277)"
                                                ></ellipse>
                                                <path
                                                    fill="#196ac3"
                                                    d="M0 0H19V79H0z"
                                                    data-name="Rectangle 11"
                                                    transform="translate(2323.998 2288)"
                                                ></path>
                                                <path
                                                    fill="#0b1425"
                                                    stroke="#7c848f"
                                                    strokeWidth="4"
                                                    d="M2339.152 3735.437a5.506 5.506 0 01-5.243 5.65h-5.242l.113 28.248a13.94 13.94 0 01-.083 1.427v2.859a6.817 6.817 0 01-6.553 7.054h-9.016a6.817 6.817 0 01-6.553-7.054l.109-26.884a5.45 5.45 0 00-5.243-5.65h-20.177a5.45 5.45 0 00-5.243 5.65l-.109 26.873a6.817 6.817 0 01-6.55 7.066h-3.552a5.743 5.743 0 01-.753-.034 3.187 3.187 0 00-.591.034h-2.632a6.817 6.817 0 01-6.523-7.066v-32.531h-5.229a5.39 5.39 0 01-5.243-5.661 5.962 5.962 0 011.638-4.233l41.957-44.773c.929-.988 3.6-1.412 3.6-1.412a9.554 9.554 0 013.447 1.235l41.871 44.969a4.994 4.994 0 011.8 4.233z"
                                                ></path>
                                                <ellipse
                                                    cx="111.5"
                                                    cy="111"
                                                    fill="#0d9df3"
                                                    data-name="Ellipse 7"
                                                    rx="111.5"
                                                    ry="111"
                                                    transform="translate(2911 3554)"
                                                ></ellipse>
                                                <path
                                                    fill="#fff"
                                                    d="M71.32 32.094a4.52 4.52 0 000-6.779L45.3 1.4a5.54 5.54 0 00-7.367 0 4.52 4.52 0 000 6.779L55.09 23.943l-62.212.608a4.8 4.8 0 00-4.493 2.269 4.8 4.8 0 000 5.033 4.8 4.8 0 004.493 2.269l62.2-.608-17.124 15.762a4.52 4.52 0 000 6.779 5.54 5.54 0 007.367 0l26.017-23.927z"
                                                    transform="rotate(-44.03 6058.776 -1866.763)"
                                                ></path>
                                                <path
                                                    fill="#fff"
                                                    d="M72.161 32.1a4.49 4.49 0 000-6.779L45.83 1.4a5.65 5.65 0 00-7.454 0 4.489 4.489 0 000 6.779l17.363 15.766-61.2-2.474a4.806 4.806 0 00-4.531 2.255 4.806 4.806 0 000 5.061 4.806 4.806 0 004.531 2.255l61.178 2.474L38.4 49.278a4.489 4.489 0 000 6.779 5.649 5.649 0 007.454 0L72.18 32.129z"
                                                    data-name="arrow-right-solid"
                                                    transform="scale(-1) rotate(-46.99 -5714.441 1687.516)"
                                                ></path>
                                                <rect
                                                    width="97.925"
                                                    height="71.561"
                                                    fill="#fff"
                                                    data-name="Rectangle 12"
                                                    rx="8"
                                                    transform="translate(2604.471 3703.662)"
                                                ></rect>
                                                <path
                                                    fill="none"
                                                    stroke="#fff"
                                                    strokeWidth="2.5"
                                                    d="M2617.652 3689.887l82.86 11.3"
                                                    data-name="Path 1"
                                                ></path>
                                                <path
                                                    fill="none"
                                                    stroke="#fff"
                                                    strokeWidth="2.5"
                                                    d="M0 0L0 18.832"
                                                    data-name="Line 7"
                                                    transform="translate(2617.652 3688.818)"
                                                ></path>
                                                <path
                                                    fill="none"
                                                    stroke="#fff"
                                                    strokeWidth="2.5"
                                                    d="M2700.512 3699.906v7.533"
                                                    data-name="Line 8"
                                                ></path>
                                                <text
                                                    fill="#0b1326"
                                                    data-name="."
                                                    fontFamily="Roboto-Medium, Roboto"
                                                    fontSize="80"
                                                    fontWeight="500"
                                                    transform="translate(2604.471 3746.539)"
                                                >
                                                    <tspan x="0" y="0">
                                                        .
                                                    </tspan>
                                                </text>
                                                <g
                                                    fill="#0b1326"
                                                    stroke="#787e8a"
                                                    strokeWidth="6.3"
                                                    data-name="Rectangle 13"
                                                    transform="translate(3337 3708)"
                                                >
                                                    <path stroke="none" d="M0 0H26V64H0z"></path>
                                                    <path
                                                        fill="none"
                                                        d="M3.15 3.15H22.849999999999998V60.85H3.15z"
                                                    ></path>
                                                </g>
                                                <g
                                                    fill="#0b1326"
                                                    stroke="#787e8a"
                                                    strokeWidth="6.3"
                                                    data-name="Rectangle 14"
                                                    transform="translate(3405 3682)"
                                                >
                                                    <path stroke="none" d="M0 0H26V90H0z"></path>
                                                    <path
                                                        fill="none"
                                                        d="M3.15 3.15H22.849999999999998V86.85000000000001H3.15z"
                                                    ></path>
                                                </g>
                                                <g
                                                    fill="#0b1326"
                                                    stroke="#787e8a"
                                                    strokeWidth="6.3"
                                                    data-name="Rectangle 15"
                                                    transform="translate(3371 3727)"
                                                >
                                                    <path stroke="none" d="M0 0H26V45H0z"></path>
                                                    <path
                                                        fill="none"
                                                        d="M3.15 3.15H22.849999999999998V41.85H3.15z"
                                                    ></path>
                                                </g>
                                                <g
                                                    fill="#0b1326"
                                                    stroke="#787e8a"
                                                    strokeWidth="5.5"
                                                    data-name="Rectangle 16"
                                                    transform="translate(3687 3689)"
                                                >
                                                    <rect width="110" height="76" stroke="none" rx="8"></rect>
                                                    <rect
                                                        width="104.5"
                                                        height="70.5"
                                                        x="2.75"
                                                        y="2.75"
                                                        fill="none"
                                                        rx="5.25"
                                                    ></rect>
                                                </g>
                                                <path
                                                    fill="#787e8a"
                                                    d="M0 0H110V15H0z"
                                                    data-name="Rectangle 17"
                                                    transform="translate(3687 3704)"
                                                ></path>
                                                <text
                                                    fill="#7c838b"
                                                    fontFamily="Roboto-Regular, Roboto"
                                                    fontSize="44"
                                                    transform="translate(2233 3848)"
                                                >
                                                    <tspan x="0" y="0">
                                                        Home
                                                    </tspan>
                                                </text>
                                                <text
                                                    fill="#e4e4e4"
                                                    fontFamily="Roboto-Regular, Roboto"
                                                    fontSize="44"
                                                    transform="translate(2557 3848)"
                                                >
                                                    <tspan x="0" y="0">
                                                        Accounts
                                                    </tspan>
                                                </text>
                                                <text
                                                    fill="#7c838b"
                                                    fontFamily="Roboto-Regular, Roboto"
                                                    fontSize="44"
                                                    transform="translate(2957 3848)"
                                                >
                                                    <tspan x="0" y="0">
                                                        Trade
                                                    </tspan>
                                                </text>
                                                <text
                                                    fill="#7c838b"
                                                    fontFamily="Roboto-Regular, Roboto"
                                                    fontSize="44"
                                                    transform="translate(3307 3848)"
                                                >
                                                    <tspan x="0" y="0">
                                                        Market
                                                    </tspan>
                                                </text>
                                                <text
                                                    fill="#7c838b"
                                                    fontFamily="Roboto-Regular, Roboto"
                                                    fontSize="44"
                                                    transform="translate(3691 3848)"
                                                >
                                                    <tspan x="0" y="0">
                                                        Card
                                                    </tspan>
                                                </text>
                                                <rect
                                                    width="641"
                                                    height="23"
                                                    fill="#fff"
                                                    data-name="Rectangle 18"
                                                    rx="11.5"
                                                    transform="translate(2704 3964)"
                                                ></rect>
                                                <g data-name="Group 354" transform="translate(1914)">
                                                    <g
                                                        fill="#fff"
                                                        data-name="Group 352"
                                                        transform="translate(78 1)"
                                                    >
                                                        <path
                                                            d="M51.181 22.229a3.062 3.062 0 000-4.693l-15.2-14.6a4.086 4.086 0 00-5.273 0 3.062 3.062 0 000 4.693l8.841 8.949H3.725a3.337 3.337 0 100 6.629H39.5l-8.8 9.315a3.062 3.062 0 000 4.693 4.086 4.086 0 005.273 0l15.189-14.963z"
                                                            data-name="arrow-right-solid"
                                                            transform="rotate(90 588.21 976.388)"
                                                        ></path>
                                                        <path
                                                            d="M3 0h38.43v5.533H0V3a3 3 0 013-3z"
                                                            data-name="Rectangle 5"
                                                            transform="translate(1541.766 388.178)"
                                                        ></path>
                                                    </g>
                                                    <g
                                                        fill="#fff"
                                                        data-name="Group 353"
                                                        transform="translate(1650.418 430.178)"
                                                    >
                                                        <path
                                                            d="M51.181 20.255a3.062 3.062 0 000-4.693L35.978.964a4.087 4.087 0 00-5.273 0 3.062 3.062 0 000 4.693l8.841 8.949H3.725a3.337 3.337 0 100 6.629H39.5l-8.8 9.315a3.062 3.062 0 000 4.693 4.087 4.087 0 005.273 0l15.189-14.965z"
                                                            data-name="arrow-right-solid"
                                                            transform="rotate(-90 36.424 15.851)"
                                                        ></path>
                                                        <path
                                                            d="M0 0h41.429v2.533a3 3 0 01-3 3H0V0z"
                                                            data-name="Rectangle 5"
                                                            transform="translate(.001 46.743)"
                                                        ></path>
                                                    </g>
                                                    <circle
                                                        cx="5"
                                                        cy="5"
                                                        r="5"
                                                        fill="#fff"
                                                        data-name="Ellipse 127"
                                                        transform="translate(1628 454)"
                                                    ></circle>
                                                    <circle
                                                        cx="5"
                                                        cy="5"
                                                        r="5"
                                                        fill="#fff"
                                                        data-name="Ellipse 128"
                                                        transform="translate(1610 472)"
                                                    ></circle>
                                                    <g
                                                        fill="none"
                                                        stroke="#fff"
                                                        strokeWidth="5"
                                                        data-name="Ellipse 129"
                                                        transform="translate(1676 381)"
                                                    >
                                                        <circle cx="16.5" cy="16.5" r="16.5" stroke="none"></circle>
                                                        <circle cx="16.5" cy="16.5" r="14"></circle>
                                                    </g>
                                                </g>
                                                <g data-name="Group 355" transform="translate(1929 -122)">
                                                    <g
                                                        fill="#0b1326"
                                                        stroke="#fff"
                                                        strokeWidth="6"
                                                        data-name="Ellipse 2"
                                                        transform="translate(1790 507)"
                                                    >
                                                        <ellipse
                                                            cx="47.5"
                                                            cy="49"
                                                            stroke="none"
                                                            rx="47.5"
                                                            ry="49"
                                                        ></ellipse>
                                                        <ellipse
                                                            cx="47.5"
                                                            cy="49"
                                                            fill="none"
                                                            rx="44.5"
                                                            ry="46"
                                                        ></ellipse>
                                                    </g>
                                                    <circle
                                                        cx="37.5"
                                                        cy="37.5"
                                                        r="37.5"
                                                        fill="#0b1326"
                                                        data-name="Ellipse 3"
                                                        transform="translate(1848 533)"
                                                    ></circle>
                                                    <text
                                                        fill="#fff"
                                                        data-name="$"
                                                        fontFamily="Roboto-Regular, Roboto"
                                                        fontSize="65"
                                                        transform="translate(1869 603)"
                                                    >
                                                        <tspan x="0" y="0">
                                                            $
                                                        </tspan>
                                                    </text>
                                                    <path
                                                        fill="#fff"
                                                        d="M0 0H5V37H0z"
                                                        data-name="Rectangle 441"
                                                        transform="translate(1834 525)"
                                                    ></path>
                                                    <path
                                                        fill="#fff"
                                                        d="M0 0H5V31H0z"
                                                        data-name="Rectangle 442"
                                                        transform="rotate(90 654 1211)"
                                                    ></path>
                                                </g>
                                                <g
                                                    fill="none"
                                                    stroke="#fff"
                                                    strokeWidth="6"
                                                    data-name="Ellipse 130"
                                                    transform="translate(2285 2291)"
                                                >
                                                    <circle cx="35" cy="35" r="35" stroke="none"></circle>
                                                    <circle cx="35" cy="35" r="32"></circle>
                                                </g>
                                                <path
                                                    fill="#196ac3"
                                                    d="M0 0H16V82H0z"
                                                    data-name="Rectangle 443"
                                                    transform="translate(2312 2285)"
                                                ></path>
                                                <text
                                                    fill="#fff"
                                                    data-name="$"
                                                    fontFamily="Roboto-Regular, Roboto"
                                                    fontSize="49"
                                                    transform="translate(2306 2343)"
                                                >
                                                    <tspan x="0" y="0">
                                                        $
                                                    </tspan>
                                                </text>
                                                <g data-name="Group 356" transform="translate(1839.297 -62.324)">
                                                    <path
                                                        fill="url(#linear-gradient)"
                                                        stroke="#fff"
                                                        strokeWidth="5"
                                                        d="M-22224.391 18875.205l38.877-24.881 39.1 24.881v48.656l-39.1 23.326-38.877-23.326z"
                                                        data-name="Path 190"
                                                        transform="translate(22665.998 -16778)"
                                                    ></path>
                                                    <g
                                                        fill="#fff"
                                                        clipPath="url(#clip-path)"
                                                        transform="translate(452.752 2088.062)"
                                                    >
                                                        <path
                                                            d="M26.95 0L0 15.833v31.654l26.95 15.821 26.925-15.821V15.833zM45.9 42.795L26.95 53.923 7.991 42.795V20.513L26.95 9.384 45.9 20.513z"
                                                            data-name="Path 186"
                                                        ></path>
                                                        <path
                                                            d="M17.441 63.308l26.926-15.821V15.833L17.441 0v9.391l18.953 11.128V42.8L17.441 53.923v9.385z"
                                                            data-name="Path 187"
                                                            transform="translate(9.508)"
                                                        ></path>
                                                        <path
                                                            d="M26.925 0L0 15.821v31.654l26.925 15.833v-9.391L7.973 42.789V20.507L26.925 9.384z"
                                                            data-name="Path 188"
                                                        ></path>
                                                        <path
                                                            d="M34.453 33.1l-12.578 7.386L9.285 33.1V18.316l12.59-7.4 12.578 7.4-5.233 3.078-7.344-4.32-7.344 4.32v8.615l7.344 4.32 7.344-4.32z"
                                                            data-name="Path 189"
                                                            transform="translate(5.062 5.952)"
                                                        ></path>
                                                    </g>
                                                </g>
                                                <path
                                                    fill="#2c70c3"
                                                    d="M0 0H1804V7H0z"
                                                    data-name="Rectangle 445"
                                                    transform="translate(2113 1339)"
                                                ></path>
                                                <image
                                                    width="223"
                                                    height="212"
                                                    data-name="Image 100"
                                                    transform="translate(2150 356)"
                                                    xlinkHref="data:image/png;base64,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"
                                                ></image>
                                                <text
                                                    fill="#fff"
                                                    data-name="5:46"
                                                    fontFamily="Roboto-Regular, Roboto"
                                                    fontSize="79"
                                                    transform="translate(2404 263)"
                                                >
                                                    <tspan x="-76.107" y="0">
                                                        {data.time}
                                                    </tspan>
                                                </text>
                                            </g>
                                            {
                                                battery === "25"
                                                    ?
                                                    <>
                                                        <g transform="translate(3636.846 192)">
                                                            <rect
                                                                width="110"
                                                                height="62"
                                                                fill="#fff"
                                                                data-name="Rectangle 170"
                                                                rx="23"
                                                                transform="translate(.154 11)"
                                                            ></rect>
                                                            <path
                                                                fill="#818d9d"
                                                                d="M0 0a4 4 0 014 4v7a4 4 0 01-4 4V0z"
                                                                data-name="Rectangle 172"
                                                                transform="translate(113.154 36)"
                                                            ></path>
                                                            <path
                                                                fill="#818d9d"
                                                                d="M0 0h56a23 23 0 0123 23v16a23 23 0 01-23 23H0V0z"
                                                                data-name="Rectangle 171"
                                                                transform="translate(31.154 11)"
                                                            ></path>
                                                            <text
                                                                fill="#0a1032"
                                                                data-name="25"
                                                                fontFamily="SegoeUI-Bold, Segoe UI"
                                                                fontSize="50"
                                                                fontWeight="700"
                                                                transform="translate(27.154 59)"
                                                            >
                                                                <tspan x="0" y="0">
                                                                    25
                                                                </tspan>
                                                            </text>
                                                        </g>
                                                    </>
                                                    :
                                                    battery === "50"
                                                        ?
                                                        <>
                                                            <g transform="translate(3636.846 192)">
                                                                <rect
                                                                    width="110"
                                                                    height="62"
                                                                    fill="#fff"
                                                                    data-name="Rectangle 170"
                                                                    rx="23"
                                                                    transform="translate(.154 11)"
                                                                ></rect>
                                                                <path
                                                                    fill="#818d9d"
                                                                    d="M0 0a4 4 0 014 4v7a4 4 0 01-4 4V0z"
                                                                    data-name="Rectangle 172"
                                                                    transform="translate(113.154 36)"
                                                                ></path>
                                                                <path
                                                                    fill="#818d9d"
                                                                    d="M0 0h29a23 23 0 0123 23v16a23 23 0 01-23 23H0V0z"
                                                                    data-name="Rectangle 171"
                                                                    transform="translate(58.154 11)"
                                                                ></path>
                                                                <text
                                                                    fill="#0a1032"
                                                                    data-name="50"
                                                                    fontFamily="SegoeUI-Bold, Segoe UI"
                                                                    fontSize="50"
                                                                    fontWeight="700"
                                                                    transform="translate(27.154 59)"
                                                                >
                                                                    <tspan x="0" y="0">
                                                                        50
                                                                    </tspan>
                                                                </text>
                                                            </g>
                                                        </>
                                                        :
                                                        <>
                                                            <g transform="translate(3636.846 192)">
                                                                <rect
                                                                    width="110"
                                                                    height="62"
                                                                    fill="#fff"
                                                                    data-name="Rectangle 170"
                                                                    rx="23"
                                                                    transform="translate(.154 11)"
                                                                ></rect>
                                                                <path
                                                                    fill="#818d9d"
                                                                    d="M0 0a4 4 0 014 4v10a4 4 0 01-4 4V0z"
                                                                    data-name="Rectangle 172"
                                                                    transform="translate(113.154 33)"
                                                                ></path>
                                                                <path
                                                                    fill="#818d9d"
                                                                    d="M0 0h6a23 23 0 0123 23v16A23 23 0 016 62H0V0z"
                                                                    data-name="Rectangle 171"
                                                                    transform="translate(81.154 11)"
                                                                ></path>
                                                                <text
                                                                    fill="#0a1032"
                                                                    data-name="78"
                                                                    fontFamily="SegoeUI-Bold, Segoe UI"
                                                                    fontSize="50"
                                                                    fontWeight="700"
                                                                    transform="translate(27.154 59)"
                                                                >
                                                                    <tspan x="0" y="0">
                                                                        78
                                                                    </tspan>
                                                                </text>
                                                            </g>
                                                        </>
                                            }
                                            {
                                                network === "strong"
                                                    ?
                                                    <>
                                                        <g fill="#fff" transform="translate(3408.115 206.504)">
                                                            <rect
                                                                width="14"
                                                                height="19"
                                                                data-name="Rectangle 35"
                                                                rx="2"
                                                                transform="translate(-.116 34.495)"
                                                            ></rect>
                                                            <rect
                                                                width="14"
                                                                height="28"
                                                                data-name="Rectangle 36"
                                                                rx="2"
                                                                transform="translate(24.884 25.495)"
                                                            ></rect>
                                                            <rect
                                                                width="13"
                                                                height="41"
                                                                data-name="Rectangle 37"
                                                                rx="2"
                                                                transform="translate(47.884 12.495)"
                                                            ></rect>
                                                            <rect
                                                                width="14"
                                                                height="53"
                                                                data-name="Rectangle 38"
                                                                rx="2"
                                                                transform="translate(72.884 .495)"
                                                            ></rect>
                                                        </g>
                                                    </>
                                                    :
                                                    network === "low"
                                                        ?
                                                        <>
                                                            <g transform="translate(3408.115 206.504)">
                                                                <rect
                                                                    width="14"
                                                                    height="19"
                                                                    fill="#fff"
                                                                    data-name="Rectangle 35"
                                                                    rx="2"
                                                                    transform="translate(-.116 34.495)"
                                                                ></rect>
                                                                <rect
                                                                    width="14"
                                                                    height="28"
                                                                    fill="#384965"
                                                                    data-name="Rectangle 36"
                                                                    rx="2"
                                                                    transform="translate(24.884 25.495)"
                                                                ></rect>
                                                                <rect
                                                                    width="13"
                                                                    height="41"
                                                                    fill="#384965"
                                                                    data-name="Rectangle 37"
                                                                    rx="2"
                                                                    transform="translate(47.884 12.495)"
                                                                ></rect>
                                                                <rect
                                                                    width="14"
                                                                    height="53"
                                                                    fill="#384965"
                                                                    data-name="Rectangle 38"
                                                                    rx="2"
                                                                    transform="translate(72.884 .495)"
                                                                ></rect>
                                                            </g>
                                                        </>
                                                        :
                                                        <>
                                                            <g transform="translate(3407 203.158)">
                                                                <rect
                                                                    width="12"
                                                                    height="20"
                                                                    fill="#fff"
                                                                    data-name="Rectangle 35"
                                                                    rx="2"
                                                                    transform="translate(0 36.842)"
                                                                ></rect>
                                                                <rect
                                                                    width="14"
                                                                    height="30"
                                                                    fill="#fff"
                                                                    data-name="Rectangle 36"
                                                                    rx="2"
                                                                    transform="translate(26 26.842)"
                                                                ></rect>
                                                                <rect
                                                                    width="15"
                                                                    height="42"
                                                                    fill="#384965"
                                                                    data-name="Rectangle 37"
                                                                    rx="2"
                                                                    transform="translate(49 14.842)"
                                                                ></rect>
                                                                <rect
                                                                    width="14"
                                                                    height="57"
                                                                    fill="#384965"
                                                                    data-name="Rectangle 38"
                                                                    rx="2"
                                                                    transform="translate(75 -.158)"
                                                                ></rect>
                                                            </g>
                                                        </>
                                            }

                                            {
                                                net === "4G"
                                                    ?
                                                    <>
                                                        <text
                                                            fill="#fff"
                                                            data-name="5G"
                                                            fontFamily="Roboto-Medium, Roboto"
                                                            fontSize="57"
                                                            fontWeight="500"
                                                            transform="translate(3532 253)"
                                                        >
                                                            <tspan x="0" y="0">
                                                                4G
                                                            </tspan>
                                                        </text>
                                                    </>
                                                    :
                                                    net === "5G"
                                                        ?
                                                        <>
                                                            <text
                                                                fill="#fff"
                                                                data-name="4G"
                                                                fontFamily="Roboto-Medium, Roboto"
                                                                fontSize="57"
                                                                fontWeight="500"
                                                                transform="translate(3532 251)"
                                                            >
                                                                <tspan x="0" y="0">
                                                                    5G
                                                                </tspan>
                                                            </text>
                                                        </>
                                                        :
                                                        <>
                                                            <g fill="#fff" transform="translate(3528 202.926)">
                                                                <path
                                                                    d="M103.207 192a58 58 0 00-38.864 15.493 1.4 1.4 0 00-.053 2l4.685 4.9a1.441 1.441 0 002.035.053 47.136 47.136 0 0132.214-12.58 47.136 47.136 0 0132.214 12.58 1.441 1.441 0 002.035-.053l4.685-4.9a1.4 1.4 0 00-.053-2A58.158 58.158 0 00103.207 192z"
                                                                    data-name="Path 7"
                                                                    transform="translate(-63.895 -192)"
                                                                ></path>
                                                                <path
                                                                    d="M221.974 434.033l5.019 4.967a1.438 1.438 0 001.965.053 27.292 27.292 0 0136.109 0 1.438 1.438 0 001.965-.053l5.018-4.965a1.4 1.4 0 00-.05-2.055 37.417 37.417 0 00-50.005 0 1.43 1.43 0 00-.021 2.053zm25.055 8.194a14.3 14.3 0 00-10.422 4.474 1.4 1.4 0 00.035 1.965l9.369 9.247a1.44 1.44 0 002.035 0l9.369-9.247a1.4 1.4 0 00.035-1.965 14.364 14.364 0 00-10.42-4.474z"
                                                                    data-name="Path 8"
                                                                    transform="translate(-207.718 -402.187)"
                                                                ></path>
                                                            </g>
                                                        </>
                                            }
                                        </g>
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
                            value={data.amountAlt}
                            name="amountAlt"
                            onChange={(e) => onChangeHandler(e)}
                        />
                    </div>
                    <div className="global_form_inner">
                        <label>Crypto Wallet</label>
                        <input
                            type="text"
                            value={data.cryptoWallet}
                            name="cryptoWallet"
                            onChange={(e) => onChangeHandler(e)}
                        />
                        <input
                            type="text"
                            value={data.cryptoWalletAlt}
                            name="cryptoWalletAlt"
                            onChange={(e) => onChangeHandler(e)}
                        />
                    </div>
                    <div className="global_form_inner">
                        <label>Cronos</label>
                        <input
                            type="text"
                            value={data.cronos}
                            name="cronos"
                            onChange={(e) => onChangeHandler(e)}
                        />
                        <input
                            type="text"
                            value={data.cronos1}
                            name="cronos1"
                            onChange={(e) => onChangeHandler(e)}
                        />
                        <input
                            type="text"
                            value={data.cronos2}
                            name="cronos2"
                            onChange={(e) => onChangeHandler(e)}
                        />
                    </div>
                    <div className="global_form_inner">
                        <label>USD Coin</label>
                        <input
                            type="text"
                            value={data.usd}
                            name="usd"
                            onChange={(e) => onChangeHandler(e)}
                        />
                        <input
                            type="text"
                            value={data.usd1}
                            name="usd1"
                            onChange={(e) => onChangeHandler(e)}
                        />
                        <input
                            type="text"
                            value={data.usd2}
                            name="usd2"
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

export default EightyFourPage;