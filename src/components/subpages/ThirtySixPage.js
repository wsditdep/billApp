import React, { useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import { write } from 'clipboard-polyfill';
import "../../assets/styles/secondpage.scss";
import { ToastContainer, toast } from 'react-toastify';

const ThirtySixPage = () => {
    const screenshotRef = useRef(null);

    const [data, setData] = useState({
        time: "13:06",
        type: "Withdraw",
        quantity: "2,699",
        fees: "1.6",
        chainType: "TRC20",
        status: "Withdrawal Completed",
        transactionHash1: "da71acc30a8e2e2329",
        transactionHash2: "641f5d804ee9669cec",
        transactionHash3: "66ef8deff62bb32a31",
        transactionHash4: "d48eaab067",
        withdrawalAddress1: "TRyiRq659AiY17bXhQ8",
        withdrawalAddress2: "9cT2gRC9GG3pmF9",
        date: "2023-12-20 15:51:12",
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
                    <h3>PREVIEW - <span>Mobile 36</span></h3>
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
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                width={imageDimension + "%"}
                                viewBox="0 0 1801 3900"
                            >
                                <defs>
                                    <pattern
                                        id="pattern"
                                        width="100%"
                                        height="100%"
                                        preserveAspectRatio="none"
                                        viewBox="0 0 56 71"
                                    >
                                        <image
                                            width="56"
                                            height="71"
                                            xlinkHref="data:image/png;base64,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"
                                        ></image>
                                    </pattern>
                                    <pattern
                                        id="pattern-2"
                                        width="100%"
                                        height="100%"
                                        preserveAspectRatio="none"
                                        viewBox="0 0 385 40"
                                    >
                                        <image
                                            width="385"
                                            height="40"
                                            xlinkHref="data:image/png;base64,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"
                                        ></image>
                                    </pattern>
                                </defs>
                                <g data-name="Group 145" transform="translate(-2206 -107)">
                                    <g data-name="Group 144">
                                        <g data-name="Group 143" transform="translate(1)">
                                            <path
                                                fill="#100f14"
                                                d="M0 0H1801V3900H0z"
                                                data-name="Rectangle 29"
                                                transform="translate(2205 107)"
                                            ></path>
                                            <text
                                                fill="#e6e6e6"
                                                data-name="13.06"
                                                fontFamily="Roboto-Regular, Roboto"
                                                fontSize="76"
                                                transform="translate(2503 239)"
                                            >
                                                <tspan x="-95.353" y="0">
                                                    {data.time}
                                                </tspan>
                                            </text>
                                            <text
                                                fill="#e6e6e6"
                                                fontFamily="Roboto-Medium, Roboto"
                                                fontSize="124"
                                                fontWeight="500"
                                                transform="translate(2424 641)"
                                            >
                                                <tspan x="-153.396" y="0">
                                                    USDT
                                                </tspan>
                                            </text>
                                            <text
                                                fill="#9c9c9c"
                                                fontFamily="Roboto-Regular, Roboto"
                                                fontSize="63"
                                                transform="translate(2347 931)"
                                            >
                                                <tspan x="-66.953" y="0">
                                                    Type
                                                </tspan>
                                            </text>
                                            <text
                                                fill="#e3e3e3"
                                                fontFamily="Roboto-Regular, Roboto"
                                                fontSize="65"
                                                transform="translate(3796 932)"
                                            >
                                                <tspan x="140" y="0" textAnchor="end">
                                                    {data.type}
                                                </tspan>
                                            </text>
                                            <text
                                                fill="#e3e3e3"
                                                fontFamily="Roboto-Regular, Roboto"
                                                fontSize="65"
                                                transform="translate(3835 1457)"
                                            >
                                                <tspan x="100" y="0" textAnchor="end">
                                                    {data.chainType}
                                                </tspan>
                                            </text>
                                            <text
                                                fill="#e3e3e3"
                                                data-name="Withdrawal Completed"
                                                fontFamily="Roboto-Regular, Roboto"
                                                fontSize="65"
                                                transform="translate(3603 1637)"
                                            >
                                                <tspan x="330" y="0" textAnchor="end">
                                                    {data.status}
                                                </tspan>
                                            </text>
                                            <text
                                                fill="#e3e3e3"
                                                fontFamily="Roboto-Regular, Roboto"
                                                fontSize="65"
                                                transform="translate(3527 1817)"
                                            >
                                                <tspan x="320" y="0" textAnchor="end">
                                                    {data.transactionHash1}
                                                </tspan>
                                            </text>
                                            <text
                                                fill="#e3e3e3"
                                                data-name="641f5d804ee9669cec"
                                                fontFamily="Roboto-Regular, Roboto"
                                                fontSize="65"
                                                transform="translate(3533 1899)"
                                            >
                                                <tspan x="320" y="0" textAnchor="end">
                                                    {data.transactionHash2}
                                                </tspan>
                                            </text>
                                            <text
                                                fill="#e3e3e3"
                                                data-name="66ef8deff62bb32a31"
                                                fontFamily="Roboto-Regular, Roboto"
                                                fontSize="65"
                                                transform="translate(3544 1977)"
                                            >
                                                <tspan x="310" y="0" textAnchor="end">
                                                    {data.transactionHash3}
                                                </tspan>
                                            </text>
                                            <text
                                                fill="#e3e3e3"
                                                fontFamily="Roboto-Regular, Roboto"
                                                fontSize="65"
                                                transform="translate(3664 2063)"
                                            >
                                                <tspan x="190" y="0" textAnchor="end">
                                                    {data.transactionHash4}
                                                </tspan>
                                            </text>
                                            <text
                                                fill="#e3e3e3"
                                                data-name="9cT2gRC9GG3pmF9"
                                                fontFamily="Roboto-Regular, Roboto"
                                                fontSize="65"
                                                transform="translate(3553 2325)"
                                            >
                                                <tspan x="300" y="0" textAnchor="end">
                                                    {data.withdrawalAddress2}
                                                </tspan>
                                            </text>
                                            <text
                                                fill="#e3e3e3"
                                                fontFamily="Roboto-Regular, Roboto"
                                                fontSize="65"
                                                transform="translate(3511 2232)"
                                            >
                                                <tspan x="340" y="0" textAnchor="end">
                                                    {data.withdrawalAddress1}
                                                </tspan>
                                            </text>
                                            <text
                                                fill="#e3e3e3"
                                                data-name="2023-12-20 15:51:12"
                                                fontFamily="Roboto-Regular, Roboto"
                                                fontSize="65"
                                                transform="translate(3629 2497)"
                                            >
                                                <tspan x="300" y="0" textAnchor="end">
                                                    {data.date}
                                                </tspan>
                                            </text>
                                            <text
                                                fill="#e3e3e3"
                                                data-name="1.6"
                                                fontFamily="Roboto-Regular, Roboto"
                                                fontSize="65"
                                                transform="translate(3885 1288)"
                                            >
                                                <tspan x="50" y="0" textAnchor="end">
                                                    {data.fees}
                                                </tspan>
                                            </text>
                                            <text
                                                fill="#e3e3e3"
                                                data-name="2,699"
                                                fontFamily="Roboto-Regular, Roboto"
                                                fontSize="65"
                                                transform="translate(3853 1119)"
                                            >
                                                <tspan x="82" y="0" textAnchor="end">
                                                    {data.quantity}
                                                </tspan>
                                            </text>
                                            <text
                                                fill="#9c9c9c"
                                                fontFamily="Roboto-Regular, Roboto"
                                                fontSize="63"
                                                transform="translate(2396 1108)"
                                            >
                                                <tspan x="-116.664" y="0">
                                                    Quantity
                                                </tspan>
                                            </text>
                                            <text
                                                fill="#9c9c9c"
                                                data-name="Chain Type"
                                                fontFamily="Roboto-Regular, Roboto"
                                                fontSize="63"
                                                transform="translate(2433 1459)"
                                            >
                                                <tspan x="-154.147" y="0">
                                                    Chain Type
                                                </tspan>
                                            </text>
                                            <text
                                                fill="#9c9c9c"
                                                fontFamily="Roboto-Regular, Roboto"
                                                fontSize="63"
                                                transform="translate(2347 1285)"
                                            >
                                                <tspan x="-66.707" y="0">
                                                    Fees
                                                </tspan>
                                            </text>
                                            <text
                                                fill="#9c9c9c"
                                                fontFamily="Roboto-Regular, Roboto"
                                                fontSize="63"
                                                transform="translate(2369 1636)"
                                            >
                                                <tspan x="-90.009" y="0">
                                                    Status
                                                </tspan>
                                            </text>
                                            <text
                                                fill="#9c9c9c"
                                                data-name="Transaction Hash"
                                                fontFamily="Roboto-Regular, Roboto"
                                                fontSize="63"
                                                transform="translate(2526 1813)"
                                            >
                                                <tspan x="-246.324" y="0">
                                                    Transaction Hash
                                                </tspan>
                                            </text>
                                            <text
                                                fill="#9c9c9c"
                                                data-name="Withdrawal Address"
                                                fontFamily="Roboto-Regular, Roboto"
                                                fontSize="63"
                                                transform="translate(2560 2237)"
                                            >
                                                <tspan x="-280.039" y="0">
                                                    Withdrawal Address
                                                </tspan>
                                            </text>
                                            <text
                                                fill="#9c9c9c"
                                                fontFamily="Roboto-Regular, Roboto"
                                                fontSize="63"
                                                transform="translate(2350 2495)"
                                            >
                                                <tspan x="-70.737" y="0">
                                                    Time
                                                </tspan>
                                            </text>
                                            <path
                                                fill="url(#pattern)"
                                                d="M0 0H107V137H0z"
                                                data-name="Image 37"
                                                transform="translate(2272 353)"
                                            ></path>
                                            <path
                                                fill="url(#pattern-2)"
                                                d="M0 0H636V66H0z"
                                                data-name="Image 41"
                                                transform="translate(2788 3923)"
                                            ></path>
                                            <g
                                                fill="#100f14"
                                                stroke="#b1b1b1"
                                                strokeWidth="3"
                                                data-name="Group 124"
                                                transform="translate(2069)"
                                            >
                                                <g data-name="Rectangle 195" transform="translate(1808 1771)">
                                                    <rect width="37" height="36" stroke="none" rx="5"></rect>
                                                    <rect
                                                        width="34"
                                                        height="33"
                                                        x="1.5"
                                                        y="1.5"
                                                        fill="none"
                                                        rx="3.5"
                                                    ></rect>
                                                </g>
                                                <g data-name="Rectangle 194" transform="translate(1821 1758)">
                                                    <rect width="37" height="36" stroke="none" rx="5"></rect>
                                                    <rect
                                                        width="34"
                                                        height="33"
                                                        x="1.5"
                                                        y="1.5"
                                                        fill="none"
                                                        rx="3.5"
                                                    ></rect>
                                                </g>
                                            </g>
                                            <g
                                                fill="#100f14"
                                                stroke="#b1b1b1"
                                                strokeWidth="3"
                                                data-name="Group 125"
                                                transform="translate(2069 423)"
                                            >
                                                <g data-name="Rectangle 195" transform="translate(1808 1771)">
                                                    <rect width="37" height="36" stroke="none" rx="5"></rect>
                                                    <rect
                                                        width="34"
                                                        height="33"
                                                        x="1.5"
                                                        y="1.5"
                                                        fill="none"
                                                        rx="3.5"
                                                    ></rect>
                                                </g>
                                                <g data-name="Rectangle 194" transform="translate(1821 1758)">
                                                    <rect width="37" height="36" stroke="none" rx="5"></rect>
                                                    <rect
                                                        width="34"
                                                        height="33"
                                                        x="1.5"
                                                        y="1.5"
                                                        fill="none"
                                                        rx="3.5"
                                                    ></rect>
                                                </g>
                                            </g>
                                            {
                                                net === "4G"
                                                    ?
                                                    <>
                                                        <text
                                                            fill="#fff"
                                                            data-name="4G"
                                                            fontFamily="HelveticaWorld-Regular, Helvetica World"
                                                            fontSize="59"
                                                            transform="translate(3658.439 241)"
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
                                                                transform="translate(3660.439 241)"
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
                                                                data-name="Path 55"
                                                                transform="translate(3589.666 -4.363)"
                                                            ></path>
                                                            <path
                                                                fill="#fff"
                                                                d="M221.987 434.361l5.16 5.106a1.479 1.479 0 002.021.054 28.062 28.062 0 0137.128 0 1.479 1.479 0 002.021-.054l5.16-5.106a1.441 1.441 0 00-.054-2.111 38.473 38.473 0 00-51.416 0 1.47 1.47 0 00-.02 2.111zm25.762 8.425a14.7 14.7 0 00-10.716 4.6 1.443 1.443 0 00.036 2.021l9.634 9.508a1.481 1.481 0 002.093 0l9.634-9.508a1.443 1.443 0 00.036-2.021 14.769 14.769 0 00-10.717-4.6z"
                                                                data-name="Path 54"
                                                                transform="translate(3446.232 -213.98)"
                                                            ></path>
                                                        </>

                                            }
                                            {
                                                network === "strong"
                                                    ?
                                                    <>
                                                        <g fill="#fff">
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
                                                            <g transform="translate(0 -68)">
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
                                                        <>
                                                            <g transform="translate(0 71)">
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
                                                        </>
                                            }
                                            {
                                                battery === "25"
                                                    ?
                                                    <>
                                                        <g transform="translate(0 1)">
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
                                                            <g transform="translate(0 1)">
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
                                                            <g transform="translate(0 1)">
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
                    </div>
                    <div className="global_form_inner">
                        <label>Type</label>
                        <input
                            type="text"
                            value={data.type}
                            name="type"
                            onChange={(e) => onChangeHandler(e)}
                        />
                    </div>
                    <div className="global_form_inner">
                        <label>Quantity</label>
                        <input
                            type="text"
                            value={data.quantity}
                            name="quantity"
                            onChange={(e) => onChangeHandler(e)}
                        />
                    </div>
                    <div className="global_form_inner">
                        <label>Fees</label>
                        <input
                            type="text"
                            value={data.fees}
                            name="fees"
                            onChange={(e) => onChangeHandler(e)}
                        />
                    </div>
                    <div className="global_form_inner">
                        <label>Chain Type</label>
                        <input
                            type="text"
                            value={data.chainType}
                            name="chainType"
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
                        <label>Transaction Hash</label>
                        <input
                            type="text"
                            value={data.transactionHash1}
                            name="transactionHash1"
                            onChange={(e) => onChangeHandler(e)}
                        />
                        <input
                            type="text"
                            value={data.transactionHash2}
                            name="transactionHash2"
                            onChange={(e) => onChangeHandler(e)}
                        />
                        <input
                            type="text"
                            value={data.transactionHash3}
                            name="transactionHash3"
                            onChange={(e) => onChangeHandler(e)}
                        />
                        <input
                            type="text"
                            value={data.transactionHash4}
                            name="transactionHash4"
                            onChange={(e) => onChangeHandler(e)}
                        />
                    </div>
                    <div className="global_form_inner">
                        <label>Withdrawal Address</label>
                        <input
                            type="text"
                            value={data.withdrawalAddress1}
                            name="withdrawalAddress1"
                            onChange={(e) => onChangeHandler(e)}
                        />
                        <input
                            type="text"
                            value={data.withdrawalAddress2}
                            name="withdrawalAddress2"
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

export default ThirtySixPage;