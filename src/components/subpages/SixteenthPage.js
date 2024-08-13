import React, { useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import { write } from 'clipboard-polyfill';
import "../../assets/font/DIN_Light_Regular.otf";
import "../../assets/styles/fourthpage.scss";
import { ToastContainer, toast } from 'react-toastify';

const SixteenthPage = () => {
    const screenshotRef = useRef(null);

    const [data, setData] = useState({
        time: "13.06",
        amount_transfer_to_1: "-257.339415",
        amount_transfer_to_2: "-167.75",
        date_transfer_to_1: "2023-08-10 12:54:59",
        date_transfer_to_2: "2023-08-09 18:28:33",
        balance_transfer_to_1: "0",
        balance_transfer_to_2: "0",
        deposit_amount: "+257.339415",
        deposit_amount_2: "+167.75",
        p2p_amount: "-167.75",
        canceled_p2p_amount: "+167.75",
        p2p_amount_2: "-167.75",
        deposit_date: "2023-08-10 12:54:59",
        deposit_date_2: "2023-08-09 18:28:33",
        p2p_date: "2023-08-09 19:15:22",
        canceled_p2p_date: "2023-08-09 19:14:30",
        p2p_date_2: "2023-08-09 18:59:27",
        deposit_balance: "257.339415",
        deposit_balance_2: "167.75",
        p2p_balance: "0",
        canceled_p2p_balance: "167.75",
        p2p_balance_2: "0",
        amount_transfer_from: "+167.75",
        date_transfer_from: "2023-08-09 18:37:00",
        balance_transfer_from: "167.75",
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
            <>
                <div className="billing_childs">
                    <ToastContainer autoClose={1000} />
                    <div className="app-heading">
                        <h3>PREVIEW - <span>Mobile 16</span></h3>
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
                        <div className="artboard din_font">
                            <foreignObject ref={screenshotRef}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    width={imageDimension + "%"}
                                    viewBox="0 0 1707 3698"
                                >
                                    <defs>
                                        <pattern
                                            id="pattern"
                                            width="100%"
                                            height="100%"
                                            preserveAspectRatio="none"
                                            viewBox="0 0 268 94"
                                        >
                                            <image
                                                width="268"
                                                height="94"
                                                xlinkHref="data:image/png;base64,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"
                                            ></image>
                                        </pattern>
                                        <pattern
                                            id="pattern-2"
                                            width="100%"
                                            height="100%"
                                            preserveAspectRatio="none"
                                            viewBox="0 0 892 118"
                                        >
                                            <image
                                                width="892"
                                                height="118"
                                                xlinkHref="data:image/png;base64,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"
                                            ></image>
                                        </pattern>
                                        <pattern
                                            id="pattern-3"
                                            width="100%"
                                            height="100%"
                                            preserveAspectRatio="none"
                                            viewBox="0 0 813 222"
                                        >
                                            <image
                                                width="813"
                                                height="222"
                                                xlinkHref="data:image/png;base64,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"
                                            ></image>
                                        </pattern>
                                        <pattern
                                            id="pattern-4"
                                            width="100%"
                                            height="100%"
                                            preserveAspectRatio="none"
                                            viewBox="0 0 434 42"
                                        >
                                            <image
                                                width="434"
                                                height="42"
                                                xlinkHref="data:image/png;base64,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"
                                            ></image>
                                        </pattern>
                                    </defs>
                                    <g data-name="Group 9" transform="translate(-2801 -167)">
                                        <path
                                            fill="#100f14"
                                            d="M0 0H1707V3698H0z"
                                            data-name="Rectangle 28"
                                            transform="translate(2801 167)"
                                        ></path>
                                        <path
                                            fill="url(#pattern)"
                                            d="M0 0H472V165H0z"
                                            data-name="Image 32"
                                            transform="translate(3990 197)"
                                        ></path>
                                        <text
                                            fill="#e6e6e6"
                                            data-name="13.06"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="72"
                                            transform="translate(3072 293)"
                                        >
                                            <tspan x="-90.334" y="0">
                                                {data.time}
                                            </tspan>
                                        </text>
                                        <path
                                            fill="url(#pattern-2)"
                                            d="M0 0H1586V210H0z"
                                            data-name="Image 33"
                                            transform="translate(2843 362)"
                                        ></path>
                                        <path
                                            fill="url(#pattern-3)"
                                            d="M0 0H1447V395H0z"
                                            data-name="Image 34"
                                            transform="translate(2833 588)"
                                        ></path>
                                        <text
                                            fill="#fff"
                                            data-name="Transfer to Spot Account USDT"
                                            fontFamily="DIN-Medium, DIN"
                                            fontSize="56"
                                            fontWeight="500"
                                            transform="translate(3254 1090)"
                                        >
                                            <tspan x="-388.186" y="0">
                                                Transfer to Spot Account USDT
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#f16262"
                                            data-name="-257.339"
                                            fontFamily="DIN-Medium, DIN"
                                            fontSize="56"
                                            fontWeight="500"
                                            transform="translate(4277 1090)"
                                        >
                                            <tspan x="160" y="0" textAnchor="end">
                                                {data.amount_transfer_to_1}
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#f16262"
                                            data-name="-167.75"
                                            fontFamily="DIN-Medium, DIN"
                                            fontSize="56"
                                            fontWeight="500"
                                            transform="translate(4343 1658)"
                                        >
                                            <tspan x="90" y="0" textAnchor="end">
                                                {data.p2p_amount}
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#f16262"
                                            data-name="-167.75"
                                            fontFamily="DIN-Medium, DIN"
                                            fontSize="56"
                                            fontWeight="500"
                                            transform="translate(4352 2225)"
                                        >
                                            <tspan x="90" y="0" textAnchor="end">
                                                {data.p2p_amount_2}
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#f16262"
                                            data-name="-167.75"
                                            fontFamily="DIN-Medium, DIN"
                                            fontSize="56"
                                            fontWeight="500"
                                            transform="translate(4345 2790)"
                                        >
                                            <tspan x="90" y="0" textAnchor="end">
                                                {data.amount_transfer_to_2}
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#979797"
                                            data-name="2023-08-10 12:54:59"
                                            fontFamily="DIN-Medium, DIN"
                                            fontSize="49"
                                            fontWeight="500"
                                            transform="translate(3090 1172)"
                                        >
                                            <tspan x="-224.496" y="0">
                                                {data.date_transfer_to_1}
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#979797"
                                            data-name="Type Transfer out"
                                            fontFamily="DIN-Medium, DIN"
                                            fontSize="49"
                                            fontWeight="500"
                                            transform="translate(3059 1238)"
                                        >
                                            <tspan x="-194.756" y="0">
                                                Type Transfer out
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#979797"
                                            data-name="Available Balance 0"
                                            fontFamily="DIN-Medium, DIN"
                                            fontSize="49"
                                            fontWeight="500"
                                            transform="translate(4225 1238)"
                                        >
                                            <tspan x="210" y="0" textAnchor="end">
                                                Available Balance {data.balance_transfer_to_1}
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#fff"
                                            data-name="Deposit USDT"
                                            fontFamily="DIN-Medium, DIN"
                                            fontSize="56"
                                            fontWeight="500"
                                            transform="translate(3044 1373)"
                                        >
                                            <tspan x="-171.678" y="0">
                                                Deposit USDT
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#fff"
                                            data-name="P2P Sale USDT"
                                            fontFamily="DIN-Medium, DIN"
                                            fontSize="56"
                                            fontWeight="500"
                                            transform="translate(3060 1658)"
                                        >
                                            <tspan x="-188.494" y="0">
                                                P2P Sale USDT
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#fff"
                                            data-name="P2P Sale USDT"
                                            fontFamily="DIN-Medium, DIN"
                                            fontSize="56"
                                            fontWeight="500"
                                            transform="translate(3061 2224)"
                                        >
                                            <tspan x="-188.494" y="0">
                                                P2P Sale USDT
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#fff"
                                            data-name="Canceled P2P Sale USDT"
                                            fontFamily="DIN-Medium, DIN"
                                            fontSize="56"
                                            fontWeight="500"
                                            transform="translate(3183 1939)"
                                        >
                                            <tspan x="-311.5" y="0">
                                                Canceled P2P Sale USDT
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#fff"
                                            data-name="Transfer from Spot Account USDT"
                                            fontFamily="DIN-Medium, DIN"
                                            fontSize="56"
                                            fontWeight="500"
                                            transform="translate(3304 2510)"
                                        >
                                            <tspan x="-424.648" y="0">
                                                Transfer from Spot Account USDT
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#fff"
                                            data-name="Transfer to Spot Account USDT"
                                            fontFamily="DIN-Medium, DIN"
                                            fontSize="56"
                                            fontWeight="500"
                                            transform="translate(3260 2790)"
                                        >
                                            <tspan x="-388.186" y="0">
                                                Transfer to Spot Account USDT
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#fff"
                                            data-name="Deposit USDT"
                                            fontFamily="DIN-Medium, DIN"
                                            fontSize="56"
                                            fontWeight="500"
                                            transform="translate(3045 3074)"
                                        >
                                            <tspan x="-171.678" y="0">
                                                Deposit USDT
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#4fb46d"
                                            data-name="257.339"
                                            fontFamily="DIN-Medium, DIN"
                                            fontSize="56"
                                            fontWeight="500"
                                            transform="translate(4272 1373)"
                                        >
                                            <tspan x="160" y="0" textAnchor="end">
                                                {data.deposit_amount}
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#4fb46d"
                                            data-name="167.75"
                                            fontFamily="DIN-Medium, DIN"
                                            fontSize="56"
                                            fontWeight="500"
                                            transform="translate(4341 1939)"
                                        >
                                            <tspan x="100" y="0" textAnchor="end">
                                                {data.canceled_p2p_amount}
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#4fb46d"
                                            data-name="167.75"
                                            fontFamily="DIN-Medium, DIN"
                                            fontSize="56"
                                            fontWeight="500"
                                            transform="translate(4334 2510)"
                                        >
                                            <tspan x="110" y="0" textAnchor="end">
                                                {data.amount_transfer_from}
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#4fb46d"
                                            data-name="167.75"
                                            fontFamily="DIN-Medium, DIN"
                                            fontSize="56"
                                            fontWeight="500"
                                            transform="translate(4342 3074)"
                                        >
                                            <tspan x="110" y="0" textAnchor="end">
                                                {data.deposit_amount_2}
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#979797"
                                            data-name="2023-08-10 12:54:59"
                                            fontFamily="DIN-Medium, DIN"
                                            fontSize="49"
                                            fontWeight="500"
                                            transform="translate(3096 1455)"
                                        >
                                            <tspan x="-224.496" y="0">
                                                {data.deposit_date}
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#979797"
                                            data-name="2023-08-09 19:15:22"
                                            fontFamily="DIN-Medium, DIN"
                                            fontSize="49"
                                            fontWeight="500"
                                            transform="translate(3096 1736)"
                                        >
                                            <tspan x="-224.496" y="0">
                                                {data.p2p_date}
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#979797"
                                            data-name="2023-08-09 18:59:27"
                                            fontFamily="DIN-Medium, DIN"
                                            fontSize="49"
                                            fontWeight="500"
                                            transform="translate(3097 2302)"
                                        >
                                            <tspan x="-224.496" y="0">
                                                {data.p2p_date_2}
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#979797"
                                            data-name="2023-08-09 19:14:30"
                                            fontFamily="DIN-Medium, DIN"
                                            fontSize="49"
                                            fontWeight="500"
                                            transform="translate(3097 2021)"
                                        >
                                            <tspan x="-224.496" y="0">
                                                {data.canceled_p2p_date}
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#979797"
                                            data-name="2023-08-09 18:37:00"
                                            fontFamily="DIN-Medium, DIN"
                                            fontSize="49"
                                            fontWeight="500"
                                            transform="translate(3103 2593)"
                                        >
                                            <tspan x="-224.496" y="0">
                                                {data.date_transfer_from}
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#979797"
                                            data-name="2023-08-09 18:28:33"
                                            fontFamily="DIN-Medium, DIN"
                                            fontSize="49"
                                            fontWeight="500"
                                            transform="translate(3096 2873)"
                                        >
                                            <tspan x="-224.496" y="0">
                                                {data.date_transfer_to_2}
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#979797"
                                            data-name="2023-08-09 18:28:33"
                                            fontFamily="DIN-Medium, DIN"
                                            fontSize="49"
                                            fontWeight="500"
                                            transform="translate(3097 3157)"
                                        >
                                            <tspan x="-224.496" y="0">
                                                {data.deposit_date_2}
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#979797"
                                            data-name="Type Transfer in"
                                            fontFamily="DIN-Medium, DIN"
                                            fontSize="49"
                                            fontWeight="500"
                                            transform="translate(3059 2659)"
                                        >
                                            <tspan x="-179.695" y="0">
                                                Type Transfer in
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#979797"
                                            data-name="Type Transfer out"
                                            fontFamily="DIN-Medium, DIN"
                                            fontSize="49"
                                            fontWeight="500"
                                            transform="translate(3067 2939)"
                                        >
                                            <tspan x="-194.756" y="0">
                                                Type Transfer out
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#979797"
                                            data-name="Type Deposite"
                                            fontFamily="DIN-Medium, DIN"
                                            fontSize="49"
                                            fontWeight="500"
                                            transform="translate(3027 3223)"
                                        >
                                            <tspan x="-154.345" y="0">
                                                Type Deposite
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#979797"
                                            data-name="Available Balance 257.339415"
                                            fontFamily="DIN-Medium, DIN"
                                            fontSize="49"
                                            fontWeight="500"
                                            transform="translate(4109 1520)"
                                        >
                                            <tspan x="330" y="0" textAnchor="end">
                                                Available Balance {data.deposit_balance}
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#979797"
                                            data-name="Available Balance 0"
                                            fontFamily="DIN-Medium, DIN"
                                            fontSize="49"
                                            fontWeight="500"
                                            transform="translate(4231 1803)"
                                        >
                                            <tspan x="209" y="0" textAnchor="end">
                                                Available Balance {data.p2p_balance}
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#979797"
                                            data-name="Available Balance 167.75"
                                            fontFamily="DIN-Medium, DIN"
                                            fontSize="49"
                                            fontWeight="500"
                                            transform="translate(4177 2087)"
                                        >
                                            <tspan x="260" y="0" textAnchor="end">
                                                Available Balance {data.canceled_p2p_balance}
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#979797"
                                            data-name="Available Balance 167.75"
                                            fontFamily="DIN-Medium, DIN"
                                            fontSize="49"
                                            fontWeight="500"
                                            transform="translate(4166 2652)"
                                        >
                                            <tspan x="270" y="0" textAnchor="end">
                                                Available Balance {data.balance_transfer_from}
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#979797"
                                            data-name="Available Balance 167.75"
                                            fontFamily="DIN-Medium, DIN"
                                            fontSize="49"
                                            fontWeight="500"
                                            transform="translate(4174 3216)"
                                        >
                                            <tspan x="270" y="0" textAnchor="end">
                                                Available Balance {data.deposit_balance_2}
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#979797"
                                            data-name="Available Balance 0"
                                            fontFamily="DIN-Medium, DIN"
                                            fontSize="49"
                                            fontWeight="500"
                                            transform="translate(4235 2369)"
                                        >
                                            <tspan x="209" y="0" textAnchor="end">
                                                Available Balance {data.p2p_balance_2}
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#979797"
                                            data-name="Available Balance 0"
                                            fontFamily="DIN-Medium, DIN"
                                            fontSize="49"
                                            fontWeight="500"
                                            transform="translate(4232 2934)"
                                        >
                                            <tspan x="210" y="0" textAnchor="end">
                                                Available Balance {data.balance_transfer_to_2}
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#979797"
                                            data-name="Type Deposite"
                                            fontFamily="DIN-Medium, DIN"
                                            fontSize="49"
                                            fontWeight="500"
                                            transform="translate(3020 1520)"
                                        >
                                            <tspan x="-154.345" y="0">
                                                Type Deposite
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#979797"
                                            data-name="Type Fiat"
                                            fontFamily="DIN-Medium, DIN"
                                            fontSize="49"
                                            fontWeight="500"
                                            transform="translate(2972 1803)"
                                        >
                                            <tspan x="-99.986" y="0">
                                                Type Fiat
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#979797"
                                            data-name="Type Fiat"
                                            fontFamily="DIN-Medium, DIN"
                                            fontSize="49"
                                            fontWeight="500"
                                            transform="translate(2973 2369)"
                                        >
                                            <tspan x="-99.986" y="0">
                                                Type Fiat
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#979797"
                                            data-name="Type Fiat"
                                            fontFamily="DIN-Medium, DIN"
                                            fontSize="49"
                                            fontWeight="500"
                                            transform="translate(2973 2087)"
                                        >
                                            <tspan x="-99.986" y="0">
                                                Type Fiat
                                            </tspan>
                                        </text>
                                        <path
                                            fill="url(#pattern-4)"
                                            d="M0 0H645V62H0z"
                                            data-name="Image 35"
                                            transform="translate(3407 3785)"
                                        ></path>
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
                            <label>Transfer to Spot Account USDT 1</label>
                            <input
                                type="text"
                                value={data.amount_transfer_to_1}
                                name="amount_transfer_to_1"
                                onChange={(e) => onChangeHandler(e)}
                            />
                            <input
                                type="text"
                                value={data.date_transfer_to_1}
                                name="date_transfer_to_1"
                                onChange={(e) => onChangeHandler(e)}
                            />
                            <input
                                type="text"
                                value={data.balance_transfer_to_1}
                                name="balance_transfer_to_1"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                        <div className="global_form_inner">
                            <label>Deposit USDT</label>
                            <input
                                type="text"
                                value={data.deposit_amount}
                                name="deposit_amount"
                                onChange={(e) => onChangeHandler(e)}
                            />
                            <input
                                type="text"
                                value={data.deposit_date}
                                name="deposit_date"
                                onChange={(e) => onChangeHandler(e)}
                            />
                            <input
                                type="text"
                                value={data.deposit_balance}
                                name="deposit_balance"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                        <div className="global_form_inner">
                            <label>P2P Sale USDT</label>
                            <input
                                type="text"
                                value={data.p2p_amount}
                                name="p2p_amount"
                                onChange={(e) => onChangeHandler(e)}
                            />
                            <input
                                type="text"
                                value={data.p2p_date}
                                name="p2p_date"
                                onChange={(e) => onChangeHandler(e)}
                            />
                            <input
                                type="text"
                                value={data.p2p_balance}
                                name="p2p_balance"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                        <div className="global_form_inner">
                            <label>Canceled P2P Sale USDT</label>
                            <input
                                type="text"
                                value={data.canceled_p2p_amount}
                                name="canceled_p2p_amount"
                                onChange={(e) => onChangeHandler(e)}
                            />
                            <input
                                type="text"
                                value={data.canceled_p2p_date}
                                name="canceled_p2p_date"
                                onChange={(e) => onChangeHandler(e)}
                            />
                            <input
                                type="text"
                                value={data.canceled_p2p_balance}
                                name="canceled_p2p_balance"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                        <div className="global_form_inner">
                            <label>P2P Sale USDT</label>
                            <input
                                type="text"
                                value={data.p2p_amount_2}
                                name="p2p_amount_2"
                                onChange={(e) => onChangeHandler(e)}
                            />
                            <input
                                type="text"
                                value={data.p2p_date_2}
                                name="p2p_date_2"
                                onChange={(e) => onChangeHandler(e)}
                            />
                            <input
                                type="text"
                                value={data.p2p_balance_2}
                                name="p2p_balance_2"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                        <div className="global_form_inner">
                            <label>Transfer from Spot Account USDT</label>
                            <input
                                type="text"
                                value={data.amount_transfer_from}
                                name="amount_transfer_from"
                                onChange={(e) => onChangeHandler(e)}
                            />
                            <input
                                type="text"
                                value={data.date_transfer_from}
                                name="date_transfer_from"
                                onChange={(e) => onChangeHandler(e)}
                            />
                            <input
                                type="text"
                                value={data.balance_transfer_from}
                                name="balance_transfer_from"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                        <div className="global_form_inner">
                            <label>Transfer to Spot Account USDT</label>
                            <input
                                type="text"
                                value={data.amount_transfer_to_2}
                                name="amount_transfer_to_2"
                                onChange={(e) => onChangeHandler(e)}
                            />
                            <input
                                type="text"
                                value={data.date_transfer_to_2}
                                name="date_transfer_to_2"
                                onChange={(e) => onChangeHandler(e)}
                            />
                            <input
                                type="text"
                                value={data.balance_transfer_to_2}
                                name="balance_transfer_to_2"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                        <div className="global_form_inner">
                            <label>Deposit USDT</label>
                            <input
                                type="text"
                                value={data.deposit_amount_2}
                                name="deposit_amount_2"
                                onChange={(e) => onChangeHandler(e)}
                            />
                            <input
                                type="text"
                                value={data.deposit_date_2}
                                name="deposit_date_2"
                                onChange={(e) => onChangeHandler(e)}
                            />
                            <input
                                type="text"
                                value={data.deposit_balance_2}
                                name="deposit_balance_2"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                    </div>
                </div>
            </>
        </>
    )
}

export default SixteenthPage;
