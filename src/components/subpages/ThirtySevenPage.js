import React, { useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import { write } from 'clipboard-polyfill';
import "../../assets/styles/secondpage.scss";
import { ToastContainer, toast } from 'react-toastify';

const ThirtySevenPage = () => {
    const screenshotRef = useRef(null);

    const [data, setData] = useState({
        time: "13:06",
        amount: "712 USDT",
        confirmations: "21 / 1",
        withdrawalWallet: "Spot Wallet",
        network: "TRX",
        address1: "TSg88Hr9RmY8V5mCMmwJkMF",
        address2: "NB6vuQm1PNR",
        txid1: "8803c2153caf39c13f583de",
        txid2: "b753c85d5ff5b885dbad395",
        txid3: "eb2b916891c6156255",
        networkFee: "1 USDT",
        date: "2023-8-26 15:30:35"
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
                    <h3>PREVIEW - <span>Mobile 37</span></h3>
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
                                viewBox="0 0 1810 3926"
                            >
                                <g data-name="Group 143" transform="translate(-2112 -66)">
                                    <path
                                        fill="#222430"
                                        d="M0 0H1810V3926H0z"
                                        data-name="Rectangle 196"
                                        transform="translate(2112 66)"
                                    ></path>
                                    <text
                                        fill="#e6e6e6"
                                        data-name="13.06"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="76"
                                        transform="translate(2352 205)"
                                    >
                                        <tspan x="-95.353" y="0">
                                            {data.time}
                                        </tspan>
                                    </text>
                                    <g
                                        fill="#858994"
                                        data-name="Group 133"
                                        transform="translate(-543.357 -56.174)"
                                    >
                                        <path
                                            d="M40.5 63.142L10.8 34.687l30.534-29.7L35.727 0 0 34.687l11.71 11.03 24.017 22.62z"
                                            data-name="Path 15"
                                            transform="translate(2717.141 401.303)"
                                        ></path>
                                        <path
                                            d="M0 0H69.565V7.609H0z"
                                            data-name="Rectangle 72"
                                            transform="translate(2725.683 432.495)"
                                        ></path>
                                    </g>
                                    <text
                                        fill="#fff"
                                        data-name="Withdrawal Details"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="83"
                                        transform="translate(2680 415)"
                                    >
                                        <tspan x="0" y="0">
                                            Withdrawal Details
                                        </tspan>
                                    </text>
                                    <g fill="#8d919d" data-name="Group 136">
                                        <g data-name="Group 134" transform="translate(1988)">
                                            <path
                                                d="M0 0H74V15H0z"
                                                data-name="Rectangle 199"
                                                transform="translate(1767 340)"
                                            ></path>
                                            <path
                                                d="M0 0H15V15H0z"
                                                data-name="Rectangle 200"
                                                transform="rotate(90 714.75 1067.25)"
                                            ></path>
                                            <path
                                                d="M0 0H15V15H0z"
                                                data-name="Rectangle 201"
                                                transform="rotate(90 744.25 1096.75)"
                                            ></path>
                                        </g>
                                        <g data-name="Group 135" transform="rotate(180 2798 382.75)">
                                            <path
                                                d="M0 0H74V15H0z"
                                                data-name="Rectangle 199"
                                                transform="translate(1767 340)"
                                            ></path>
                                            <path
                                                d="M0 0H15V15H0z"
                                                data-name="Rectangle 200"
                                                transform="rotate(90 714.75 1067.25)"
                                            ></path>
                                            <path
                                                d="M0 0H15V15H0z"
                                                data-name="Rectangle 201"
                                                transform="rotate(90 744.25 1096.75)"
                                            ></path>
                                        </g>
                                        <path
                                            d="M11469-28.25h12.25v20.5h13.25l-19.5 20.5-19.5-20.5h13.5z"
                                            data-name="Path 52"
                                            transform="translate(-7682 392)"
                                        ></path>
                                    </g>
                                    <text
                                        fill="#c4c4c4"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="69"
                                        transform="translate(2908 737)"
                                    >
                                        <tspan x="0" y="0">
                                            Amount
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#fff"
                                        data-name="712 USDT"
                                        fontFamily="Roboto-Medium, Roboto"
                                        fontSize="118"
                                        fontWeight="500"
                                        transform="translate(2762 913)"
                                    >
                                        <tspan x="300" y="0" textAnchor="middle">
                                            {data.amount}
                                        </tspan>
                                    </text>
                                    <g data-name="Group 137" transform="translate(-386 374)">
                                        <text
                                            fill="#39bc88"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="78"
                                            transform="translate(3293 716)"
                                        >
                                            <tspan x="0" y="0">
                                                Completed
                                            </tspan>
                                        </text>
                                        <ellipse
                                            cx="41"
                                            cy="40.5"
                                            fill="#39bc88"
                                            data-name="Ellipse 31"
                                            rx="41"
                                            ry="40.5"
                                            transform="translate(3178 646)"
                                        ></ellipse>
                                        <path
                                            fill="#222631"
                                            d="M10651.25-12504.728l5.868-5.866 12.588 12.589 4.619-4.619 20.49-20.489 6.4 6.4-31.165 31.164z"
                                            data-name="Path 53"
                                            transform="translate(-7457.316 13190.419)"
                                        ></path>
                                    </g>
                                    <text
                                        fill="#757b8b"
                                        data-name="Crypto transferred out of Binance. Please contact the recipient"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="57"
                                        transform="translate(2220 1319)"
                                    >
                                        <tspan x="0" y="0">
                                            Crypto transferred out of Binance. Please contact the recipient
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#757b8b"
                                        data-name="platform for your transaction receipt"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="57"
                                        transform="translate(2551 1389)"
                                    >
                                        <tspan x="0" y="0">
                                            platform for your transaction receipt
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#f5d659"
                                        data-name="Why hasn't my withdrawal arrived?"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="57"
                                        textDecoration="underline"
                                        transform="translate(2605 1501)"
                                    >
                                        <tspan x="0" y="0">
                                            Why hasn&apos;t my withdrawal arrived?
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#f5d659"
                                        data-name="Need help? View FAQs"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="57"
                                        textDecoration="underline"
                                        transform="translate(2781.035 3332)"
                                    >
                                        <tspan x="0" y="0">
                                            Need help? View FAQs
                                        </tspan>
                                    </text>
                                    <rect
                                        width="1654"
                                        height="234"
                                        fill="#f5d659"
                                        data-name="Rectangle 202"
                                        rx="19"
                                        transform="translate(2190 3531)"
                                    ></rect>
                                    <text
                                        data-name="Save Address"
                                        fontFamily="Roboto-Medium, Roboto"
                                        fontSize="78"
                                        fontWeight="500"
                                        transform="translate(2779 3675)"
                                    >
                                        <tspan x="0" y="0">
                                            Save Address
                                        </tspan>
                                    </text>
                                    <path
                                        fill="#2c303c"
                                        d="M0 0H1810V1568H0z"
                                        data-name="Rectangle 203"
                                        transform="translate(2112 1582)"
                                    ></path>
                                    <g data-name="Group 138" transform="translate(334.965 2984)">
                                        <path
                                            fill="#7f7f8b"
                                            d="M0 0H58.758V80.454H0z"
                                            data-name="Rectangle 182"
                                            transform="translate(2364.752 284.904)"
                                        ></path>
                                        <path
                                            fill="#7f7f8b"
                                            d="M0 0H13.56V11.752H0z"
                                            data-name="Rectangle 183"
                                            transform="translate(2353 299.368)"
                                        ></path>
                                        <path
                                            fill="#7f7f8b"
                                            d="M0 0H13.56V11.752H0z"
                                            data-name="Rectangle 184"
                                            transform="translate(2353 319.255)"
                                        ></path>
                                        <path
                                            fill="#7f7f8b"
                                            d="M0 0H13.56V11.752H0z"
                                            data-name="Rectangle 185"
                                            transform="translate(2353 339.142)"
                                        ></path>
                                        <text
                                            fill="#222430"
                                            data-name="?"
                                            fontFamily="Roboto-Bold, Roboto"
                                            fontSize="67"
                                            fontWeight="700"
                                            transform="translate(2377.407 348)"
                                        >
                                            <tspan x="0" y="0">
                                                ?
                                            </tspan>
                                        </text>
                                    </g>
                                    <rect
                                        width="645"
                                        height="24"
                                        fill="#fff"
                                        data-name="Rectangle 204"
                                        rx="12"
                                        transform="translate(2695 3929)"
                                    ></rect>
                                    <text
                                        fill="#858891"
                                        data-name="Withdrawal Wallet"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="69"
                                        transform="translate(2174 1926)"
                                    >
                                        <tspan x="0" y="0">
                                            Withdrawal Wallet
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#858891"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="69"
                                        transform="translate(2174 1755)"
                                    >
                                        <tspan x="0" y="0">
                                            Confirmations
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#fff"
                                        data-name="21 / 1"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="69"
                                        transform="translate(3687 1759)"
                                    >
                                        <tspan x="180" y="0" textAnchor="end">
                                            {data.confirmations}
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#fff"
                                        data-name="Spot Wallet"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="69"
                                        transform="translate(3507 1926)"
                                    >
                                        <tspan x="360" y="0" textAnchor="end">
                                            {data.withdrawalWallet}
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#fff"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="69"
                                        transform="translate(3739 2093)"
                                    >
                                        <tspan x="128" y="0" textAnchor="end">
                                            {data.network}
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#fff"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="69"
                                        transform="translate(2703 2264)"
                                    >
                                        <tspan x="1034" y="0" textAnchor="end">
                                            {data.address1}
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#fff"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="69"
                                        transform="translate(3255 2346)"
                                    >
                                        <tspan x="480" y="0" textAnchor="end">
                                            {data.address2}
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#fff"
                                        data-name="8803c2153caf39c13f583de"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="66"
                                        textDecoration="underline"
                                        transform="translate(2926 2514)"
                                    >
                                        <tspan x="810" y="0" textAnchor="end">
                                            {data.txid1}
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#fff"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="66"
                                        textDecoration="underline"
                                        transform="translate(2918 2600)"
                                    >
                                        <tspan x="820" y="0" textAnchor="end">
                                            {data.txid2}
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#fff"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="66"
                                        textDecoration="underline"
                                        transform="translate(3077 2686)"
                                    >
                                        <tspan x="660" y="0" textAnchor="end">
                                            {data.txid3}
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#fff"
                                        data-name="1 USDT"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="66"
                                        transform="translate(3639 2854)"
                                    >
                                        <tspan x="220" y="0" textAnchor="end">
                                            {data.networkFee}
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#fff"
                                        data-name="2023-12-25 19:51:20"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="66"
                                        transform="translate(3255 3022)"
                                    >
                                        <tspan x="600" y="0" textAnchor="end">
                                            {data.date}
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#858891"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="69"
                                        transform="translate(2174 2097)"
                                    >
                                        <tspan x="0" y="0">
                                            Netwrok
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#858891"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="69"
                                        transform="translate(2174 2304)"
                                    >
                                        <tspan x="0" y="0">
                                            Address
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#858891"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="69"
                                        transform="translate(2174 2603)"
                                    >
                                        <tspan x="0" y="0">
                                            Txid
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#858891"
                                        data-name="Netwrok fee"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="69"
                                        transform="translate(2174 2857)"
                                    >
                                        <tspan x="0" y="0">
                                            Netwrok fee
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#858891"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="69"
                                        transform="translate(2174 3028)"
                                    >
                                        <tspan x="0" y="0">
                                            Date
                                        </tspan>
                                    </text>
                                    <g
                                        fill="#525866"
                                        data-name="Group 139"
                                        transform="translate(1377.144 484.5)"
                                    >
                                        <path
                                            d="M0 0H53.237V70.54H0z"
                                            data-name="Rectangle 193"
                                            transform="translate(2402 1768.46)"
                                        ></path>
                                        <path
                                            d="M11989-7161.5h53.237v62.555h-15.306v-47.248H11989z"
                                            data-name="Path 50"
                                            transform="translate(-9560.381 8908)"
                                        ></path>
                                    </g>
                                    <g
                                        fill="#525866"
                                        data-name="Group 140"
                                        transform="translate(1377.144 784)"
                                    >
                                        <path
                                            d="M0 0H53.237V70.54H0z"
                                            data-name="Rectangle 193"
                                            transform="translate(2402 1768.46)"
                                        ></path>
                                        <path
                                            d="M11989-7161.5h53.237v62.555h-15.306v-47.248H11989z"
                                            data-name="Path 50"
                                            transform="translate(-9560.381 8908)"
                                        ></path>
                                    </g>
                                    {
                                        network === "strong"
                                            ?
                                            <>
                                                <g fill="#fff" transform="translate(-27 -35)">
                                                    <path
                                                        d="M0 0H14V21H0z"
                                                        data-name="Rectangle 205"
                                                        transform="translate(3539 222)"
                                                    ></path>
                                                    <path
                                                        d="M0 0H14V32H0z"
                                                        data-name="Rectangle 206"
                                                        transform="translate(3563 211)"
                                                    ></path>
                                                    <path
                                                        d="M0 0H14V44H0z"
                                                        data-name="Rectangle 207"
                                                        transform="translate(3587 199)"
                                                    ></path>
                                                    <path
                                                        d="M0 0H14V57H0z"
                                                        data-name="Rectangle 208"
                                                        transform="translate(3611 186)"
                                                    ></path>
                                                </g>
                                            </>
                                            :
                                            network === "low"
                                                ?
                                                <>
                                                    <g transform="translate(-27 -103)">
                                                        <path
                                                            fill="#fff"
                                                            d="M0 0H14V21H0z"
                                                            data-name="Rectangle 212"
                                                            transform="translate(3539 290)"
                                                        ></path>
                                                        <path
                                                            fill="#9f9fa1"
                                                            d="M0 0H14V32H0z"
                                                            data-name="Rectangle 211"
                                                            transform="translate(3563 279)"
                                                        ></path>
                                                        <path
                                                            fill="#9f9fa1"
                                                            d="M0 0H14V44H0z"
                                                            data-name="Rectangle 210"
                                                            transform="translate(3587 267)"
                                                        ></path>
                                                        <path
                                                            fill="#fff"
                                                            d="M0 0H14V57H0z"
                                                            data-name="Rectangle 209"
                                                            opacity="0.6"
                                                            transform="translate(3611 254)"
                                                        ></path>
                                                    </g>

                                                </>
                                                :
                                                <g transform="translate(-27 36)">
                                                    <path
                                                        fill="#fff"
                                                        d="M0 0H14V21H0z"
                                                        data-name="Rectangle 216"
                                                        transform="translate(3539 151)"
                                                    ></path>
                                                    <path
                                                        fill="#fff"
                                                        d="M0 0H14V32H0z"
                                                        data-name="Rectangle 215"
                                                        transform="translate(3563 140)"
                                                    ></path>
                                                    <path
                                                        fill="#9f9fa1"
                                                        d="M0 0H14V44H0z"
                                                        data-name="Rectangle 214"
                                                        transform="translate(3587 128)"
                                                    ></path>
                                                    <path
                                                        fill="#fff"
                                                        d="M0 0H14V57H0z"
                                                        data-name="Rectangle 213"
                                                        opacity="0.6"
                                                        transform="translate(3611 115)"
                                                    ></path>
                                                </g>

                                    }

                                    {
                                        battery === "25"
                                            ?
                                            <>
                                                <g transform="translate(-27 -34)">
                                                    <g
                                                        fill="none"
                                                        stroke="#5b5a5f"
                                                        strokeWidth="4"
                                                        data-name="Rectangle 217"
                                                        transform="translate(3764 187)"
                                                    >
                                                        <rect width="113" height="57" stroke="none" rx="15"></rect>
                                                        <rect width="109" height="53" x="2" y="2" rx="13"></rect>
                                                    </g>
                                                    <path
                                                        fill="#5b5a5f"
                                                        d="M0 0a6 6 0 016 6v5a6 6 0 01-6 6V0z"
                                                        data-name="Rectangle 218"
                                                        transform="translate(3882 208)"
                                                    ></path>
                                                    <rect
                                                        width="30"
                                                        height="43"
                                                        fill="#fff"
                                                        data-name="Rectangle 219"
                                                        rx="7"
                                                        transform="translate(3771 194)"
                                                    ></rect>
                                                </g>
                                            </>
                                            :
                                            battery === "50"
                                                ?
                                                <>
                                                    <g transform="translate(-27 -34)">
                                                        <g
                                                            fill="none"
                                                            stroke="#5b5a5f"
                                                            strokeWidth="4"
                                                            data-name="Rectangle 217"
                                                            transform="translate(3764 187)"
                                                        >
                                                            <rect width="113" height="57" stroke="none" rx="15"></rect>
                                                            <rect width="109" height="53" x="2" y="2" rx="13"></rect>
                                                        </g>
                                                        <path
                                                            fill="#5b5a5f"
                                                            d="M0 0a6 6 0 016 6v5a6 6 0 01-6 6V0z"
                                                            data-name="Rectangle 218"
                                                            transform="translate(3882 208)"
                                                        ></path>
                                                        <rect
                                                            width="56"
                                                            height="43"
                                                            fill="#fff"
                                                            data-name="Rectangle 219"
                                                            rx="10"
                                                            transform="translate(3771 194)"
                                                        ></rect>
                                                    </g>
                                                </>
                                                :
                                                <>
                                                    <g transform="translate(-27 -34)">
                                                        <g
                                                            fill="none"
                                                            stroke="#5b5a5f"
                                                            strokeWidth="4"
                                                            data-name="Rectangle 217"
                                                            transform="translate(3764 187)"
                                                        >
                                                            <rect width="113" height="57" stroke="none" rx="15"></rect>
                                                            <rect width="109" height="53" x="2" y="2" rx="13"></rect>
                                                        </g>
                                                        <path
                                                            fill="#5b5a5f"
                                                            d="M0 0a6 6 0 016 6v5a6 6 0 01-6 6V0z"
                                                            data-name="Rectangle 218"
                                                            transform="translate(3882 208)"
                                                        ></path>
                                                        <rect
                                                            width="85"
                                                            height="43"
                                                            fill="#fff"
                                                            data-name="Rectangle 219"
                                                            rx="10"
                                                            transform="translate(3771 194)"
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
                                                    data-name="4G"
                                                    fontFamily="HelveticaWorld-Regular, Helvetica World"
                                                    fontSize="59"
                                                    transform="translate(3635.879 202.5)"
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
                                                        data-name="5G"
                                                        fontFamily="HelveticaWorld-Regular, Helvetica World"
                                                        fontSize="59"
                                                        transform="translate(3637.879 202.5)"
                                                    >
                                                        <tspan x="0" y="0">
                                                            5G
                                                        </tspan>
                                                    </text>
                                                </>
                                                :
                                                <>
                                                    <path
                                                        fill="#fff"
                                                        d="M104.316 192a59.64 59.64 0 00-39.961 15.93 1.438 1.438 0 00-.054 2.057l4.817 5.033a1.481 1.481 0 002.093.054 48.467 48.467 0 0133.123-12.935 48.467 48.467 0 0133.123 12.935 1.481 1.481 0 002.093-.054l4.817-5.033a1.438 1.438 0 00-.054-2.057A59.8 59.8 0 00104.316 192z"
                                                        data-name="Path 56"
                                                        transform="translate(3567.105 -42.863)"
                                                    ></path>
                                                    <path
                                                        fill="#fff"
                                                        d="M221.987 434.361l5.16 5.106a1.479 1.479 0 002.021.054 28.062 28.062 0 0137.128 0 1.479 1.479 0 002.021-.054l5.16-5.106a1.441 1.441 0 00-.054-2.111 38.473 38.473 0 00-51.416 0 1.47 1.47 0 00-.02 2.111zm25.762 8.425a14.7 14.7 0 00-10.716 4.6 1.443 1.443 0 00.036 2.021l9.634 9.508a1.481 1.481 0 002.093 0l9.634-9.508a1.443 1.443 0 00.036-2.021 14.769 14.769 0 00-10.717-4.6z"
                                                        data-name="Path 57"
                                                        transform="translate(3423.672 -252.48)"
                                                    ></path>
                                                </>
                                    }
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
                        <label>Confirmations</label>
                        <input
                            type="text"
                            value={data.confirmations}
                            name="confirmations"
                            onChange={(e) => onChangeHandler(e)}
                        />
                    </div>
                    <div className="global_form_inner">
                        <label>Withdrawal Wallet</label>
                        <input
                            type="text"
                            value={data.withdrawalWallet}
                            name="withdrawalWallet"
                            onChange={(e) => onChangeHandler(e)}
                        />
                    </div>
                    <div className="global_form_inner">
                        <label>Netwrok</label>
                        <input
                            type="text"
                            value={data.network}
                            name="network"
                            onChange={(e) => onChangeHandler(e)}
                        />
                    </div>
                    <div className="global_form_inner">
                        <label>Address</label>
                        <input
                            type="text"
                            value={data.address1}
                            name="address1"
                            onChange={(e) => onChangeHandler(e)}
                        />
                        <input
                            type="text"
                            value={data.address2}
                            name="address2"
                            onChange={(e) => onChangeHandler(e)}
                        />
                    </div>
                    <div className="global_form_inner">
                        <label>Txid</label>
                        <input
                            type="text"
                            value={data.txid1}
                            name="txid1"
                            onChange={(e) => onChangeHandler(e)}
                        />
                        <input
                            type="text"
                            value={data.txid2}
                            name="txid2"
                            onChange={(e) => onChangeHandler(e)}
                        />
                        <input
                            type="text"
                            value={data.txid3}
                            name="txid3"
                            onChange={(e) => onChangeHandler(e)}
                        />
                    </div>
                    <div className="global_form_inner">
                        <label>Network Fee</label>
                        <input
                            type="text"
                            value={data.networkFee}
                            name="networkFee"
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
                                <option value="90">--Choose Battery--</option>
                                <option value="90">90%</option>
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

export default ThirtySevenPage;