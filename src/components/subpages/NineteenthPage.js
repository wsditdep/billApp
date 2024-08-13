import React, { useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import { write } from 'clipboard-polyfill';
import "../../assets/styles/fonts.scss";
import { ToastContainer, toast } from 'react-toastify';

const NineteenthPage = () => {
    const screenshotRef = useRef(null);

    const [data, setData] = useState({
        time: "10:40",
        amount: "CA$2.00",
        status: "Pending",
        deposited1: "Deposited funds",
        deposited1_amount: "CA$517.00",
        deposited2: "Deposited funds",
        deposited2_amount: "CA$201.00",
        status2: "History",
        deposited3: "Bought USD Coin",
        deposited3_amount: "CA$21.00",
        deposited4: "Deposited funds",
        deposited4_amount: "CA$21.00",
        deposited5: "Withdrew funds",
        deposited5_amount: "CA$486.49",
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
                        <h3>PREVIEW - <span>Mobile 19</span></h3>
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
                            <div className="artboard roboto">
                                <foreignObject ref={screenshotRef}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                        width={imageDimension + "%"}
                                        viewBox="0 0 1735 3770"
                                    >
                                        <defs>
                                            <filter
                                                id="Rectangle_50"
                                                width="97"
                                                height="77"
                                                x="1520"
                                                y="79"
                                                filterUnits="userSpaceOnUse"
                                            >
                                                <feOffset dy="3"></feOffset>
                                                <feGaussianBlur result="blur" stdDeviation="3"></feGaussianBlur>
                                                <feFlood floodOpacity="0.161"></feFlood>
                                                <feComposite in2="blur" operator="in"></feComposite>
                                                <feComposite in="SourceGraphic"></feComposite>
                                            </filter>
                                        </defs>
                                        <g data-name="Group 60" transform="translate(-2624 -111)">
                                            <g data-name="Group 55">
                                                <path
                                                    fill="#0a0b0d"
                                                    d="M0 0H1735V3770H0z"
                                                    data-name="Rectangle 78"
                                                    transform="translate(2624 111)"
                                                ></path>
                                                <g data-name="Group 49" transform="translate(1960 16)">
                                                    <text
                                                        fill="#fff"
                                                        data-name="12:31"
                                                        fontFamily="Roboto-Bold, Roboto"
                                                        fontSize="65"
                                                        fontWeight="700"
                                                        transform="translate(925 231)"
                                                    >
                                                        <tspan x="-83.757" y="0">
                                                            {data.time}
                                                        </tspan>
                                                    </text>
                                                    <g fill="#fff" transform="translate(2028.604 -7.617)">
                                                        <path
                                                            d="M99.336 192A52.291 52.291 0 0064.3 205.967a1.26 1.26 0 00-.047 1.8l4.223 4.413a1.3 1.3 0 001.835.047 42.495 42.495 0 0129.04-11.337 42.5 42.5 0 0129.042 11.341 1.3 1.3 0 001.835-.047l4.223-4.413a1.261 1.261 0 00-.047-1.8A52.431 52.431 0 0099.336 192z"
                                                            data-name="Path 7"
                                                        ></path>
                                                        <path
                                                            d="M221.933 432.887l4.524 4.476a1.3 1.3 0 001.772.047 24.6 24.6 0 0132.553 0 1.3 1.3 0 001.772-.047l4.524-4.476a1.263 1.263 0 00-.047-1.851 33.732 33.732 0 00-45.081 0 1.289 1.289 0 00-.017 1.851zm22.588 7.387a12.888 12.888 0 00-9.4 4.034 1.265 1.265 0 00.032 1.772l8.447 8.336a1.3 1.3 0 001.835 0l8.447-8.336a1.265 1.265 0 00.032-1.772 12.95 12.95 0 00-9.394-4.034z"
                                                            data-name="Path 8"
                                                            transform="translate(-145.185 -212.178)"
                                                        ></path>
                                                    </g>
                                                    <g data-name="Group 46" transform="translate(-2498.145 13824.383)">
                                                        <rect
                                                            width="12"
                                                            height="18"
                                                            fill="#fff"
                                                            data-name="Rectangle 35"
                                                            rx="2"
                                                            transform="translate(4473.144 -13607.383)"
                                                        ></rect>
                                                        <rect
                                                            width="12"
                                                            height="27"
                                                            fill="#fff"
                                                            data-name="Rectangle 36"
                                                            rx="2"
                                                            transform="translate(4494.144 -13616.383)"
                                                        ></rect>
                                                        <rect
                                                            width="12"
                                                            height="38"
                                                            fill="#fff"
                                                            data-name="Rectangle 37"
                                                            rx="2"
                                                            transform="translate(4517.144 -13627.383)"
                                                        ></rect>
                                                        <path
                                                            fill="#3e3f41"
                                                            d="M.31 0h12.228a.31.31 0 01.31.31v50a.31.31 0 01-.31.31H.31a.31.31 0 01-.31-.31v-50A.31.31 0 01.31 0z"
                                                            data-name="Path 16"
                                                            transform="translate(4540.296 -13640)"
                                                        ></path>
                                                    </g>
                                                    <g data-name="Group 48" transform="translate(-1 -86)">
                                                        <g data-name="Group 47" transform="translate(-2281 73)">
                                                            <rect
                                                                width="113"
                                                                height="59"
                                                                fill="#fff"
                                                                data-name="Rectangle 49"
                                                                opacity="0.4"
                                                                rx="16"
                                                                transform="translate(4475 193)"
                                                            ></rect>
                                                            <path
                                                                fill="#777"
                                                                d="M0 0a5 5 0 015 5v9a5 5 0 01-5 5V0z"
                                                                data-name="Rectangle 51"
                                                                opacity="0.67"
                                                                transform="translate(4592 214)"
                                                            ></path>
                                                            <g filter="url(#Rectangle_50)" transform="translate(2946 108)">
                                                                <path
                                                                    fill="#ffdb17"
                                                                    d="M16 0h63v59H16A16 16 0 010 43V16A16 16 0 0116 0z"
                                                                    data-name="Rectangle 50"
                                                                    transform="translate(1529 85)"
                                                                ></path>
                                                            </g>
                                                        </g>
                                                    </g>
                                                </g>
                                                <text
                                                    fill="#fff"
                                                    data-name="Canadian Dollar"
                                                    fontFamily="Roboto-Medium, Roboto"
                                                    fontSize="70"
                                                    fontWeight="500"
                                                    transform="translate(3552 411)"
                                                >
                                                    <tspan x="-247.905" y="0">
                                                        Canadian Dollar
                                                    </tspan>
                                                </text>
                                                <text
                                                    fill="#8b8b8b"
                                                    data-name="Primary balance"
                                                    fontFamily="Roboto-Light, Roboto"
                                                    fontSize="61"
                                                    fontWeight="300"
                                                    transform="translate(3552 498)"
                                                >
                                                    <tspan x="-216.315" y="0">
                                                        Primary balance
                                                    </tspan>
                                                </text>
                                                <text
                                                    fill="#8b8b8b"
                                                    data-name="CAD amount"
                                                    fontFamily="Roboto-Regular, Roboto"
                                                    fontSize="61"
                                                    transform="translate(2899 609)"
                                                >
                                                    <tspan x="-171.622" y="0">
                                                        CAD amount
                                                    </tspan>
                                                </text>
                                                <text
                                                    fill="#fff"
                                                    data-name="CA$2.00"
                                                    fontFamily="Roboto-Medium, Roboto"
                                                    fontSize="116"
                                                    fontWeight="500"
                                                    transform="translate(2952 734)"
                                                >
                                                    <tspan x="-224.523" y="0">
                                                        {data.amount}
                                                    </tspan>
                                                </text>
                                                <text
                                                    fill="#fff"
                                                    fontFamily="Roboto-Regular, Roboto"
                                                    fontSize="89"
                                                    transform="translate(2888 1398)"
                                                >
                                                    <tspan x="-161.334" y="0">
                                                        {data.status}
                                                    </tspan>
                                                </text>
                                                <text
                                                    fill="#fff"
                                                    fontFamily="Roboto-Regular, Roboto"
                                                    fontSize="89"
                                                    transform="translate(2868 2326)"
                                                >
                                                    <tspan x="-141.453" y="0">
                                                        {data.status2}
                                                    </tspan>
                                                </text>
                                                <text
                                                    fill="#fff"
                                                    data-name="Deposited funds"
                                                    fontFamily="Roboto-Regular, Roboto"
                                                    fontSize="68"
                                                    transform="translate(2974 2845)"
                                                >
                                                    <tspan x="-247.28" y="0">
                                                        {data.deposited4}
                                                    </tspan>
                                                </text>
                                                <text
                                                    fill="#fff"
                                                    data-name="Deposited funds"
                                                    fontFamily="Roboto-Regular, Roboto"
                                                    fontSize="68"
                                                    transform="translate(2974 1595)"
                                                >
                                                    <tspan x="-247.28" y="0">
                                                        {data.deposited1}
                                                    </tspan>
                                                </text>
                                                <text
                                                    fill="#fff"
                                                    data-name="Deposited funds"
                                                    fontFamily="Roboto-Regular, Roboto"
                                                    fontSize="68"
                                                    transform="translate(2974 1917)"
                                                >
                                                    <tspan x="-247.28" y="0">
                                                        {data.deposited2}
                                                    </tspan>
                                                </text>
                                                <text
                                                    fill="#fff"
                                                    data-name="Withdrew funds"
                                                    fontFamily="Roboto-Regular, Roboto"
                                                    fontSize="68"
                                                    transform="translate(2964 3175)"
                                                >
                                                    <tspan x="-236.605" y="0">
                                                        {data.deposited5}
                                                    </tspan>
                                                </text>
                                                <text
                                                    fill="#fff"
                                                    data-name="Sold Ethereum"
                                                    fontFamily="Roboto-Regular, Roboto"
                                                    fontSize="68"
                                                    transform="translate(2947 3498)"
                                                >
                                                    <tspan x="-220.319" y="0">
                                                        Sold Ethereum
                                                    </tspan>
                                                </text>
                                                <text
                                                    fill="#fff"
                                                    data-name="Bought USD Coin"
                                                    fontFamily="Roboto-Regular, Roboto"
                                                    fontSize="68"
                                                    transform="translate(2985 2522)"
                                                >
                                                    <tspan x="-258.088" y="0">
                                                        {data.deposited3}
                                                    </tspan>
                                                </text>
                                                <text
                                                    fill="#c2c2c2"
                                                    data-name="CA$517.00"
                                                    fontFamily="Roboto-Regular, Roboto"
                                                    fontSize="65"
                                                    transform="translate(4122 1968)"
                                                >
                                                    <tspan x="160.405" y="0" textAnchor="end">
                                                        {data.deposited2_amount}
                                                    </tspan>
                                                </text>
                                                <text
                                                    fill="#c2c2c2"
                                                    data-name="CA$517.00"
                                                    fontFamily="Roboto-Regular, Roboto"
                                                    fontSize="65"
                                                    transform="translate(4108 1641)"
                                                >
                                                    <tspan x="170" y="0" textAnchor="end">
                                                        {data.deposited1_amount}
                                                    </tspan>
                                                </text>
                                                <text
                                                    fill="#c2c2c2"
                                                    data-name="-CA$21.00"
                                                    fontFamily="Roboto-Regular, Roboto"
                                                    fontSize="65"
                                                    transform="translate(4122 2570)"
                                                >
                                                    <tspan x="151.122" y="0" textAnchor="end">
                                                        {data.deposited3_amount}
                                                    </tspan>
                                                </text>
                                                <text
                                                    fill="#c2c2c2"
                                                    data-name="-CA$21.00"
                                                    fontFamily="Roboto-Regular, Roboto"
                                                    fontSize="65"
                                                    transform="translate(4122 2897)"
                                                >
                                                    <tspan x="151.122" y="0" textAnchor="end">
                                                        {data.deposited4_amount}
                                                    </tspan>
                                                </text>
                                                <text
                                                    fill="#c2c2c2"
                                                    data-name="-CA$486.49"
                                                    fontFamily="Roboto-Regular, Roboto"
                                                    fontSize="65"
                                                    transform="translate(4104 3220)"
                                                >
                                                    <tspan x="172" y="0" textAnchor="end">
                                                        {data.deposited5_amount}
                                                    </tspan>
                                                </text>
                                                <text
                                                    fill="#878787"
                                                    data-name="From Interac e-Transfer"
                                                    fontFamily="Roboto-Regular, Roboto"
                                                    fontSize="62"
                                                    transform="translate(3050 1687)"
                                                >
                                                    <tspan x="-321.67" y="0">
                                                        From Interac e-Transfer
                                                    </tspan>
                                                </text>
                                                <text
                                                    fill="#878787"
                                                    data-name="From Interac e-Transfer"
                                                    fontFamily="Roboto-Regular, Roboto"
                                                    fontSize="62"
                                                    transform="translate(3050 2012)"
                                                >
                                                    <tspan x="-321.67" y="0">
                                                        From Interac e-Transfer
                                                    </tspan>
                                                </text>
                                                <text
                                                    fill="#878787"
                                                    data-name="From Interac e-Transfer"
                                                    fontFamily="Roboto-Regular, Roboto"
                                                    fontSize="62"
                                                    transform="translate(3050 2937)"
                                                >
                                                    <tspan x="-321.67" y="0">
                                                        From Interac e-Transfer
                                                    </tspan>
                                                </text>
                                                <text
                                                    fill="#878787"
                                                    data-name="To Interac e-Transfer"
                                                    fontFamily="Roboto-Regular, Roboto"
                                                    fontSize="62"
                                                    transform="translate(3010 3267)"
                                                >
                                                    <tspan x="-284.57" y="0">
                                                        To Interac e-Transfer
                                                    </tspan>
                                                </text>
                                                <text
                                                    fill="#878787"
                                                    data-name="Using CAD Wallet"
                                                    fontFamily="Roboto-Regular, Roboto"
                                                    fontSize="62"
                                                    transform="translate(2963 2614)"
                                                >
                                                    <tspan x="-239.645" y="0">
                                                        Using CAD Wallet
                                                    </tspan>
                                                </text>
                                                <g fill="#fff" data-name="Group 51" transform="translate(1766 -129)">
                                                    <path
                                                        d="M37.264 58.091L9.937 31.913 38.029 4.586 32.869 0 0 31.913 10.773 42.06l22.1 20.811z"
                                                        data-name="Path 15"
                                                        transform="translate(951.141 530.303)"
                                                    ></path>
                                                    <path
                                                        d="M0 0H64V7H0z"
                                                        data-name="Rectangle 72"
                                                        transform="translate(959 559)"
                                                    ></path>
                                                </g>
                                                <g data-name="Group 54" transform="translate(1944)">
                                                    <g data-name="Group 52" transform="translate(-804)">
                                                        <rect
                                                            width="740"
                                                            height="232"
                                                            fill="#3773f5"
                                                            data-name="Rectangle 79"
                                                            rx="116"
                                                            transform="translate(1581 890)"
                                                        ></rect>
                                                        <text
                                                            fill="#000030"
                                                            fontFamily="Roboto-Medium, Roboto"
                                                            fontSize="72"
                                                            fontWeight="500"
                                                            transform="translate(1951 1031)"
                                                        >
                                                            <tspan x="-123.346" y="0">
                                                                Deposit
                                                            </tspan>
                                                        </text>
                                                    </g>
                                                    <g data-name="Group 53">
                                                        <rect
                                                            width="740"
                                                            height="232"
                                                            fill="#3773f5"
                                                            data-name="Rectangle 79"
                                                            rx="116"
                                                            transform="translate(1581 890)"
                                                        ></rect>
                                                        <text
                                                            fill="#000030"
                                                            fontFamily="Roboto-Medium, Roboto"
                                                            fontSize="72"
                                                            fontWeight="500"
                                                            transform="translate(1951 1031)"
                                                        >
                                                            <tspan x="-151.506" y="0">
                                                                Withdraw
                                                            </tspan>
                                                        </text>
                                                    </g>
                                                </g>
                                                <path
                                                    fill="#1e1f21"
                                                    d="M0 0H1735V8H0z"
                                                    data-name="Rectangle 81"
                                                    transform="translate(2624 1205)"
                                                ></path>
                                                <path
                                                    fill="#1e1f21"
                                                    d="M0 0H1735V4H0z"
                                                    data-name="Rectangle 82"
                                                    transform="translate(2624 3530)"
                                                ></path>
                                                <image
                                                    width="1724"
                                                    height="342"
                                                    data-name="Image 67"
                                                    transform="translate(2624 3534)"
                                                    xlinkHref="data:image/png;base64,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"
                                                ></image>
                                            </g>
                                            <g data-name="Group 56" transform="translate(1865 15)">
                                                <g
                                                    fill="none"
                                                    stroke="#a1a1a1"
                                                    strokeWidth="2"
                                                    data-name="Ellipse 11"
                                                    transform="translate(1509 1628)"
                                                >
                                                    <ellipse
                                                        cx="12"
                                                        cy="12.5"
                                                        stroke="none"
                                                        rx="12"
                                                        ry="12.5"
                                                    ></ellipse>
                                                    <ellipse cx="12" cy="12.5" rx="11" ry="11.5"></ellipse>
                                                </g>
                                                <text
                                                    fill="#878787"
                                                    fontFamily="Roboto-Regular, Roboto"
                                                    fontSize="18"
                                                    transform="translate(1521 1646)"
                                                >
                                                    <tspan x="-5.542" y="0">
                                                        R
                                                    </tspan>
                                                </text>
                                            </g>
                                            <g data-name="Group 57" transform="translate(1865 340)">
                                                <g
                                                    fill="none"
                                                    stroke="#a1a1a1"
                                                    strokeWidth="2"
                                                    data-name="Ellipse 11"
                                                    transform="translate(1509 1628)"
                                                >
                                                    <ellipse
                                                        cx="12"
                                                        cy="12.5"
                                                        stroke="none"
                                                        rx="12"
                                                        ry="12.5"
                                                    ></ellipse>
                                                    <ellipse cx="12" cy="12.5" rx="11" ry="11.5"></ellipse>
                                                </g>
                                                <text
                                                    fill="#878787"
                                                    data-name="R"
                                                    fontFamily="Roboto-Regular, Roboto"
                                                    fontSize="18"
                                                    transform="translate(1521 1646)"
                                                >
                                                    <tspan x="-5.542" y="0">
                                                        R
                                                    </tspan>
                                                </text>
                                            </g>
                                            <g data-name="Group 58" transform="translate(1865 1263)">
                                                <g
                                                    fill="none"
                                                    stroke="#a1a1a1"
                                                    strokeWidth="2"
                                                    data-name="Ellipse 11"
                                                    transform="translate(1509 1628)"
                                                >
                                                    <ellipse
                                                        cx="12"
                                                        cy="12.5"
                                                        stroke="none"
                                                        rx="12"
                                                        ry="12.5"
                                                    ></ellipse>
                                                    <ellipse cx="12" cy="12.5" rx="11" ry="11.5"></ellipse>
                                                </g>
                                                <text
                                                    fill="#878787"
                                                    data-name="R"
                                                    fontFamily="Roboto-Regular, Roboto"
                                                    fontSize="18"
                                                    transform="translate(1521 1646)"
                                                >
                                                    <tspan x="-5.542" y="0">
                                                        R
                                                    </tspan>
                                                </text>
                                            </g>
                                            <g data-name="Group 59" transform="translate(1789 1593)">
                                                <g
                                                    fill="none"
                                                    stroke="#a1a1a1"
                                                    strokeWidth="2"
                                                    data-name="Ellipse 11"
                                                    transform="translate(1509 1628)"
                                                >
                                                    <ellipse
                                                        cx="12"
                                                        cy="12.5"
                                                        stroke="none"
                                                        rx="12"
                                                        ry="12.5"
                                                    ></ellipse>
                                                    <ellipse cx="12" cy="12.5" rx="11" ry="11.5"></ellipse>
                                                </g>
                                                <text
                                                    fill="#878787"
                                                    data-name="R"
                                                    fontFamily="Roboto-Regular, Roboto"
                                                    fontSize="18"
                                                    transform="translate(1521 1646)"
                                                >
                                                    <tspan x="-5.542" y="0">
                                                        R
                                                    </tspan>
                                                </text>
                                            </g>
                                        </g>
                                    </svg>
                                </foreignObject>
                            </div>
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
                            <label>Status</label>
                            <input
                                type="text"
                                value={data.status}
                                name="status"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                        <div className="global_form_inner">
                            <label>Deposite 1</label>
                            <input
                                type="text"
                                value={data.deposited1}
                                name="deposited1"
                                onChange={(e) => onChangeHandler(e)}
                            />
                            <input
                                type="text"
                                value={data.deposited1_amount}
                                name="deposited1_amount"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                        <div className="global_form_inner">
                            <label>Deposite 2</label>
                            <input
                                type="text"
                                value={data.deposited2}
                                name="deposited2"
                                onChange={(e) => onChangeHandler(e)}
                            />
                            <input
                                type="text"
                                value={data.deposited2_amount}
                                name="deposited2_amount"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                        <div className="global_form_inner">
                            <label>Deposite 3</label>
                            <input
                                type="text"
                                value={data.deposited3}
                                name="deposited3"
                                onChange={(e) => onChangeHandler(e)}
                            />
                            <input
                                type="text"
                                value={data.deposited3_amount}
                                name="deposited3_amount"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                        <div className="global_form_inner">
                            <label>Deposite 4</label>
                            <input
                                type="text"
                                value={data.deposited4}
                                name="deposited4"
                                onChange={(e) => onChangeHandler(e)}
                            />
                            <input
                                type="text"
                                value={data.deposited4_amount}
                                name="deposited4_amount"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                        <div className="global_form_inner">
                            <label>Deposite 5</label>
                            <input
                                type="text"
                                value={data.deposited5}
                                name="deposited5"
                                onChange={(e) => onChangeHandler(e)}
                            />
                            <input
                                type="text"
                                value={data.deposited5_amount}
                                name="deposited5_amount"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                    </div>
                </div>
            </>
        </>
    )
}

export default NineteenthPage;