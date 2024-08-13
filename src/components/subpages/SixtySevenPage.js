import React, { useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import { write } from 'clipboard-polyfill';
import "../../assets/styles/secondpage.scss";
import { ToastContainer, toast } from 'react-toastify';

const SixtySevenPage = () => {
    const screenshotRef = useRef(null);

    const [data, setData] = useState({
        time: "15:10",
        amountType: "USDT",
        chainName: "TRC20(Tron)",
        address1: "TWGXYLqtHGiDczsJmPhR6oV",
        address2: "Uiya2Nb96oP",
        amount: "35.9977",
        applicationTime: "2024-05-07 15:10:00",
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
                    <h3>PREVIEW - <span>Mobile 67</span></h3>
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
                                viewBox="0 0 1807 3940"
                            >
                                <g data-name="Group 320" transform="translate(-2186 -65)">
                                    <path
                                        fill="#151517"
                                        d="M0 0H1807V3940H0z"
                                        data-name="Rectangle 411"
                                        transform="translate(2186 65)"
                                    ></path>
                                    <text
                                        fill="#fff"
                                        data-name="15:10"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="68"
                                        transform="translate(2371 189)"
                                    >
                                        <tspan x="0" y="0">
                                            {data.time}
                                        </tspan>
                                    </text>
                                    <path
                                        fill="#fff"
                                        d="M1868.21-12621.308l-36.063-34.549 37.072-36.063-6.809-6.052-43.376 42.115 43.376 40.857z"
                                        data-name="Path 20"
                                        transform="translate(462.814 13035.002)"
                                    ></path>
                                    <circle
                                        cx="145.5"
                                        cy="145.5"
                                        r="145.5"
                                        fill="#132c26"
                                        data-name="Ellipse 110"
                                        opacity="0.8"
                                        transform="translate(2944 526)"
                                    ></circle>
                                    <circle
                                        cx="114"
                                        cy="114"
                                        r="114"
                                        fill="#3eda77"
                                        data-name="Ellipse 111"
                                        transform="translate(2976 558)"
                                    ></circle>
                                    <path
                                        fill="#fff"
                                        d="M109.213 98.361a7.984 7.984 0 010 11.286l-63.778 63.777a7.984 7.984 0 01-11.286 0L2.261 141.535a7.98 7.98 0 0111.286-11.286L39.8 156.483l58.152-58.122a7.984 7.984 0 0111.286 0z"
                                        transform="translate(3033.762 534.048)"
                                    ></path>
                                    <text
                                        fill="#fff"
                                        data-name="Withdrawal order submitted"
                                        fontFamily="Roboto-Medium, Roboto"
                                        fontSize="117"
                                        fontWeight="500"
                                        transform="translate(2365 1028)"
                                    >
                                        <tspan x="0" y="0">
                                            Withdrawal order submitted
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#858585"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="66"
                                        transform="translate(2246 1319)"
                                    >
                                        <tspan x="0" y="0">
                                            Coin
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#e1e1e1"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="66"
                                        transform="translate(3762 1319)"
                                    >
                                        <tspan x="162" y="0" textAnchor="end">
                                            {data.amountType}
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#e1e1e1"
                                        data-name="TRC20(Tron)"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="66"
                                        transform="translate(3551 1492)"
                                    >
                                        <tspan x="372" y="0" textAnchor="end">
                                            {data.chainName}
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#e1e1e1"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="66"
                                        transform="translate(3025 1665)"
                                    >
                                        <tspan x="900" y="0" textAnchor="end">
                                            {data.address1}
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#e1e1e1"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="66"
                                        transform="translate(3526 1754)"
                                    >
                                        <tspan x="400" y="0" textAnchor="end">
                                            {data.address2}
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#e1e1e1"
                                        data-name="35.998"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="66"
                                        transform="translate(3686 1927)"
                                    >
                                        <tspan x="240" y="0" textAnchor="end">
                                            {data.amount}
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#e1e1e1"
                                        data-name="2024-05-07 15:10:00"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="66"
                                        transform="translate(3322 2096)"
                                    >
                                        <tspan x="600" y="0" textAnchor="end">
                                            {data.applicationTime}
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#858585"
                                        data-name="Chain name"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="66"
                                        transform="translate(2246 1492)"
                                    >
                                        <tspan x="0" y="0">
                                            Chain name
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#858585"
                                        data-name="Withdrawal address"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="66"
                                        transform="translate(2246 1665)"
                                    >
                                        <tspan x="0" y="0">
                                            Withdrawal address
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#858585"
                                        data-name="Amount received"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="66"
                                        transform="translate(2246 1923)"
                                    >
                                        <tspan x="0" y="0">
                                            Amount received
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#858585"
                                        data-name="Application time"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="66"
                                        transform="translate(2246 2096)"
                                    >
                                        <tspan x="0" y="0">
                                            Application time
                                        </tspan>
                                    </text>
                                    <g data-name="Group 319" transform="translate(1934 362)">
                                        <rect
                                            width="802"
                                            height="198"
                                            fill="#242424"
                                            data-name="Rectangle 412"
                                            rx="99"
                                            transform="translate(322 3300)"
                                        ></rect>
                                        <text
                                            fill="#f3f3f3"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="82"
                                            transform="translate(633 3428)"
                                        >
                                            <tspan x="0" y="0">
                                                Back
                                            </tspan>
                                        </text>
                                        <g data-name="Group 318" transform="translate(21)">
                                            <rect
                                                width="802"
                                                height="198"
                                                fill="#fff"
                                                data-name="Rectangle 413"
                                                rx="99"
                                                transform="translate(1158 3300)"
                                            ></rect>
                                            <text
                                                data-name="View status"
                                                fontFamily="Roboto-Medium, Roboto"
                                                fontSize="78"
                                                fontWeight="500"
                                                transform="translate(1355 3426)"
                                            >
                                                <tspan x="0" y="0">
                                                    View status
                                                </tspan>
                                            </text>
                                        </g>
                                    </g>
                                    <rect
                                        width="652"
                                        height="25"
                                        fill="#fff"
                                        data-name="Rectangle 414"
                                        rx="12.5"
                                        transform="translate(2764 3956)"
                                    ></rect>



                                    {
                                        battery === "25"
                                            ?
                                            <>
                                                <g transform="translate(3731.846 128)">
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
                                                        fontFamily="HelveticaWorld-Bold, Helvetica World"
                                                        fontSize="50"
                                                        fontWeight="700"
                                                        transform="translate(27.154 59)"
                                                    >
                                                        <tspan x="0" y="0">
                                                            {/* 25 */}
                                                        </tspan>
                                                    </text>
                                                </g>
                                            </>
                                            :
                                            battery === "50"
                                                ?
                                                <>
                                                    <g transform="translate(3731.846 128)">
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
                                                            fontFamily="HelveticaWorld-Bold, Helvetica World"
                                                            fontSize="50"
                                                            fontWeight="700"
                                                            transform="translate(27.154 59)"
                                                        >
                                                            <tspan x="0" y="0">
                                                                {/* 50 */}
                                                            </tspan>
                                                        </text>
                                                    </g>
                                                </>
                                                :
                                                <>
                                                    <g transform="translate(3731.846 128)">
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
                                                            fontFamily="HelveticaWorld-Bold, Helvetica World"
                                                            fontSize="50"
                                                            fontWeight="700"
                                                            transform="translate(27.154 59)"
                                                        >
                                                            <tspan x="0" y="0">
                                                                {/* 78 */}
                                                            </tspan>
                                                        </text>
                                                    </g>
                                                </>
                                    }

                                    {
                                        network === "strong"
                                            ?
                                            <>
                                                <g fill="#fff" transform="translate(3503.115 142.505)">
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
                                                    <g transform="translate(3503.115 142.505)">
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
                                                    <g transform="translate(3502 139.158)">
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
                                                    data-name="4G"
                                                    fontFamily="Roboto-Medium, Roboto"
                                                    fontSize="57"
                                                    fontWeight="500"
                                                    transform="translate(3624 191)"
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
                                                        fontFamily="Roboto-Medium, Roboto"
                                                        fontSize="57"
                                                        fontWeight="500"
                                                        transform="translate(3624 189)"
                                                    >
                                                        <tspan x="0" y="0">
                                                            5G
                                                        </tspan>
                                                    </text>
                                                </>
                                                :
                                                <>
                                                    <g fill="#fff" transform="translate(3620.199 141.863)">
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
                        <label>Coin</label>
                        <input
                            type="text"
                            value={data.amountType}
                            name="amountType"
                            onChange={(e) => onChangeHandler(e)}
                        />
                    </div>
                    <div className="global_form_inner">
                        <label>Chain name</label>
                        <input
                            type="text"
                            value={data.chainName}
                            name="chainName"
                            onChange={(e) => onChangeHandler(e)}
                        />
                    </div>
                    <div className="global_form_inner">
                        <label>Withdrawal address</label>
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
                        <label>Amount received</label>
                        <input
                            type="text"
                            value={data.amount}
                            name="amount"
                            onChange={(e) => onChangeHandler(e)}
                        />
                    </div>
                    <div className="global_form_inner">
                        <label>Application time</label>
                        <input
                            type="text"
                            value={data.applicationTime}
                            name="applicationTime"
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

export default SixtySevenPage;