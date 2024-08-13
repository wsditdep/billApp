import React, { useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import { write } from 'clipboard-polyfill';
import "../../assets/styles/secondpage.scss";
import { ToastContainer, toast } from 'react-toastify';

const ThirtyFivePage = () => {
    const screenshotRef = useRef(null);

    const [data, setData] = useState({
        amount: "846.5 USDT",
        network: "TRX",
        address1: "TUqWghPracby1vAc1CsuUdoDhD",
        address2: "ayUw7RzY",
        txid1: "ecf9cb887dbba358269f0be76b0a",
        txid2: "f9aeda42ee1d2267dd1ab0177398",
        txid3: "b4bf77b",
        withdrawalAmount: "38 USDT",
        networkFee: "1 USDT",
        withdrawalWallet: "Spot Wallet",
        time: "2023-12-25 19:18:22",
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
                    <h3>PREVIEW - <span>Mobile 35</span></h3>
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
                                viewBox="0 0 2370 3825"
                            >
                                <g data-name="Group 142" transform="translate(-2657 -145)">
                                    <path
                                        fill="#222631"
                                        d="M0 0H2370V3825H0z"
                                        data-name="Rectangle 186"
                                        transform="translate(2657 145)"
                                    ></path>
                                    <g data-name="Group 117" transform="translate(2462.93 -93)">
                                        <path
                                            fill="#fff"
                                            d="M0 0H65V89H0z"
                                            data-name="Rectangle 182"
                                            transform="translate(2366 285)"
                                        ></path>
                                        <path
                                            fill="#fff"
                                            d="M0 0H15V13H0z"
                                            data-name="Rectangle 183"
                                            transform="translate(2353 301)"
                                        ></path>
                                        <path
                                            fill="#fff"
                                            d="M0 0H15V13H0z"
                                            data-name="Rectangle 184"
                                            transform="translate(2353 323)"
                                        ></path>
                                        <path
                                            fill="#fff"
                                            d="M0 0H15V13H0z"
                                            data-name="Rectangle 185"
                                            transform="translate(2353 345)"
                                        ></path>
                                        <text
                                            data-name="?"
                                            fontFamily="Roboto-Bold, Roboto"
                                            fontSize="77"
                                            fontWeight="700"
                                            transform="translate(2380 357)"
                                        >
                                            <tspan x="0" y="0">
                                                ?
                                            </tspan>
                                        </text>
                                    </g>
                                    <text
                                        fill="#fff"
                                        data-name="Withdrawal Details"
                                        fontFamily="Roboto-Medium, Roboto"
                                        fontSize="100"
                                        fontWeight="500"
                                        transform="translate(3426.93 272)"
                                    >
                                        <tspan x="0" y="0">
                                            Withdrawal Details
                                        </tspan>
                                    </text>
                                    <g
                                        fill="#858994"
                                        data-name="Group 119"
                                        transform="translate(25.859 -218.174)"
                                    >
                                        <path
                                            d="M52.082 81.191L13.889 44.6 53.15 6.41 45.939 0 0 44.6l15.057 14.185 30.882 29.086z"
                                            data-name="Path 15"
                                            transform="translate(2717.141 401.303)"
                                        ></path>
                                        <path
                                            d="M0 0H89.449V9.783H0z"
                                            data-name="Rectangle 72"
                                            transform="translate(2728.125 441.411)"
                                        ></path>
                                    </g>
                                    <text
                                        fill="#eaeef1"
                                        data-name="-37 USDT"
                                        fontFamily="Roboto-Bold, Roboto"
                                        fontSize="168"
                                        fontWeight="700"
                                        transform="translate(3484 652)"
                                    >
                                        <tspan x="400" y="0" textAnchor="middle">
                                            {data.amount}
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#39bc88"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="83"
                                        transform="translate(3704 842)"
                                    >
                                        <tspan x="0" y="0">
                                            Completed
                                        </tspan>
                                    </text>
                                    <circle
                                        cx="43.5"
                                        cy="43.5"
                                        r="43.5"
                                        fill="#39bc88"
                                        data-name="Ellipse 30"
                                        transform="translate(3581 767)"
                                    ></circle>
                                    <path
                                        fill="#222631"
                                        d="M10651.25-12503.5l6.261-6.26 13.431 13.432 4.929-4.928 21.861-21.861 6.831 6.832-33.251 33.25z"
                                        data-name="Path 49"
                                        transform="translate(-7053.25 13313.113)"
                                    ></path>
                                    <text
                                        fill="#757b8b"
                                        data-name="Crypto transferred out of Binance. Please contact the recipient platform"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="66"
                                        transform="translate(2793 993)"
                                    >
                                        <tspan x="0" y="0">
                                            Crypto transferred out of Binance. Please contact the recipient
                                            platform
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#757b8b"
                                        data-name="for your transaction receipt."
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="66"
                                        transform="translate(3459 1078)"
                                    >
                                        <tspan x="0" y="0">
                                            for your transaction receipt.
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#cba930"
                                        data-name="Why hasn't my withdrawal arrived?"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="69"
                                        textDecoration="underline"
                                        transform="translate(3339 1186)"
                                    >
                                        <tspan x="0" y="0">
                                            Why hasn&apos;t my withdrawal arrived?
                                        </tspan>
                                    </text>
                                    <path
                                        fill="#313541"
                                        d="M0 0H2370V7H0z"
                                        data-name="Rectangle 187"
                                        transform="translate(2657 1349)"
                                    ></path>
                                    <text
                                        fill="#757b8b"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="77"
                                        transform="translate(2746 1619)"
                                    >
                                        <tspan x="0" y="0">
                                            Network
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#757b8b"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="77"
                                        transform="translate(2746 1815)"
                                    >
                                        <tspan x="0" y="0">
                                            Address
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#757b8b"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="77"
                                        transform="translate(2745 2114)"
                                    >
                                        <tspan x="0" y="0">
                                            Txid
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#757b8b"
                                        data-name="Withdrawal Amount"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="77"
                                        transform="translate(2743 2532)"
                                    >
                                        <tspan x="0" y="0">
                                            Withdrawal Amount
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#757b8b"
                                        data-name="Network fee"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="77"
                                        transform="translate(2743 2750)"
                                    >
                                        <tspan x="0" y="0">
                                            Network fee
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#757b8b"
                                        data-name="Withdrawal Wallet"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="77"
                                        transform="translate(2743 2968)"
                                    >
                                        <tspan x="0" y="0">
                                            Withdrawal Wallet
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#757b8b"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="77"
                                        transform="translate(2747 3186)"
                                    >
                                        <tspan x="0" y="0">
                                            Date
                                        </tspan>
                                    </text>
                                    <rect
                                        width="1050"
                                        height="268"
                                        fill="#333947"
                                        data-name="Rectangle 191"
                                        rx="47"
                                        transform="translate(2738 3405)"
                                    ></rect>
                                    <rect
                                        width="1050"
                                        height="268"
                                        fill="#333947"
                                        data-name="Rectangle 190"
                                        rx="47"
                                        transform="translate(3885 3405)"
                                    ></rect>
                                    <text
                                        fill="#fff"
                                        data-name="Scam Report"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="93"
                                        transform="translate(2995 3573)"
                                    >
                                        <tspan x="0" y="0">
                                            Scam Report
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#fff"
                                        data-name="Save Address"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="93"
                                        transform="translate(4128 3573)"
                                    >
                                        <tspan x="0" y="0">
                                            Save Address
                                        </tspan>
                                    </text>
                                    <g data-name="Group 121" transform="translate(2455)">
                                        {/* <rect
                                            width="185"
                                            height="112"
                                            fill="#3b371e"
                                            data-name="Rectangle 192"
                                            rx="15"
                                            transform="translate(2295 1536)"
                                        ></rect> */}
                                        <text
                                            fill="#e1b027"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="68"
                                            transform="translate(2324 1616)"
                                            
                                        >
                                            <tspan x="140" y="0" textAnchor="end">
                                                {data.network}
                                            </tspan>
                                        </text>
                                    </g>
                                    <text
                                        fill="#fefefe"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="76"
                                        textDecoration="underline"
                                        transform="translate(3665 2114)"
                                    >
                                        <tspan x="1150" y="0" textAnchor="end">
                                            {data.txid1}
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#fefefe"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="76"
                                        textDecoration="underline"
                                        transform="translate(3646 2218)"
                                    >
                                        <tspan x="1170" y="0" textAnchor="end">
                                            {data.txid2}
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#fefefe"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="76"
                                        textDecoration="underline"
                                        transform="translate(4532 2322)"
                                    >
                                        <tspan x="280" y="0" textAnchor="end">
                                            {data.txid3}
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#fefefe"
                                        data-name="38 USDT"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="76"
                                        transform="translate(4636 2532)"
                                    >
                                        <tspan x="300" y="0" textAnchor="end">
                                            {data.withdrawalAmount}
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#fefefe"
                                        data-name="1 USDT"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="76"
                                        transform="translate(4679 2750)"
                                    >
                                        <tspan x="250" y="0" textAnchor="end">
                                            {data.networkFee}
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#fefefe"
                                        data-name="Spot Wallet"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="76"
                                        transform="translate(4545 2968)"
                                    >
                                        <tspan x="382" y="0" textAnchor="end">
                                            {data.withdrawalWallet}
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#fefefe"
                                        data-name="2023-11-07 19:25:29"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="76"
                                        transform="translate(4240 3186)"
                                    >
                                        <tspan x="700" y="0" textAnchor="end">
                                            {data.time}
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#fefefe"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="76"
                                        transform="translate(4458 1917)"
                                    >
                                        <tspan x="354" y="0" textAnchor="end">
                                            {data.address2}
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#fefefe"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="76"
                                        transform="translate(3675 1819)"
                                    >
                                        <tspan x="1140" y="0" textAnchor="end">
                                            {data.address1}
                                        </tspan>
                                    </text>
                                    <g fill="#525866" data-name="Group 122" transform="translate(2455)">
                                        <path
                                            d="M0 0H40V53H0z"
                                            data-name="Rectangle 193"
                                            transform="translate(2402 1763)"
                                        ></path>
                                        <path
                                            d="M11989-7161.5h40v47h-11.5v-35.5h-28.5z"
                                            data-name="Path 50"
                                            transform="translate(-9567 8908)"
                                        ></path>
                                    </g>
                                    <g fill="#525866" data-name="Group 123" transform="translate(2455 299)">
                                        <path
                                            d="M0 0H40V53H0z"
                                            data-name="Rectangle 193"
                                            transform="translate(2402 1763)"
                                        ></path>
                                        <path
                                            d="M11989-7161.5h40v47h-11.5v-35.5h-28.5z"
                                            data-name="Path 50"
                                            transform="translate(-9567 8908)"
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
                        <label>Withdrawal Amount</label>
                        <input
                            type="text"
                            value={data.withdrawalAmount}
                            name="withdrawalAmount"
                            onChange={(e) => onChangeHandler(e)}
                        />
                    </div>
                    <div className="global_form_inner">
                        <label>Network fee</label>
                        <input
                            type="text"
                            value={data.networkFee}
                            name="networkFee"
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
                        <label>Date</label>
                        <input
                            type="text"
                            value={data.time}
                            name="time"
                            onChange={(e) => onChangeHandler(e)}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ThirtyFivePage;