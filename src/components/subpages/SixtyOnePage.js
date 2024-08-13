import React, { useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import { write } from 'clipboard-polyfill';
import "../../assets/styles/secondpage.scss";
import { ToastContainer, toast } from 'react-toastify';

const SixtyOnePage = () => {
    const screenshotRef = useRef(null);

    const [data, setData] = useState({
        time: "2:25",
        address1: "bc1qm093s2xv2a0rgqefzv0az4mz3u",
        address2: "w26ykufwzwvx",
        amount: "0.000923",
        date: "Today at 7:32 PM",
        to: "bc1qbo...zwvx",
        amount1: "0.000923 BTC",
        fees: "0.00007952 BTC",
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
                    <h3>PREVIEW - <span>Mobile 61</span></h3>
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
                                viewBox="0 0 1831 3966"
                            >
                                <g data-name="Group 287" transform="translate(-2112 -38)">
                                    <path
                                        fill="#17181a"
                                        d="M0 0H1831V3966H0z"
                                        data-name="Rectangle 387"
                                        transform="translate(2112 38)"
                                    ></path>
                                    <text
                                        fill="#d5d5d5"
                                        data-name="7:38"
                                        fontFamily="Roboto-Medium, Roboto"
                                        fontSize="65"
                                        fontWeight="500"
                                        letterSpacing=".08em"
                                        transform="translate(2282 141)"
                                    >
                                        <tspan x="0" y="40">
                                            {data.time}
                                        </tspan>
                                    </text>
                                    <path
                                        fill="#232426"
                                        d="M0 0H1588V3515H0z"
                                        data-name="Rectangle 388"
                                        transform="translate(2249 253)"
                                    ></path>
                                    <g
                                        fill="#191a1c"
                                        stroke="#292a2c"
                                        strokeWidth="5"
                                        data-name="Rectangle 389"
                                        transform="translate(2112 3769)"
                                    >
                                        <path stroke="none" d="M0 0H1831V235H0z"></path>
                                        <path fill="none" d="M2.5 2.5H1828.5V232.5H2.5z"></path>
                                    </g>
                                    <path
                                        fill="#191a1c"
                                        d="M0 0H1831V230H0z"
                                        data-name="Rectangle 390"
                                        transform="translate(2112 3771)"
                                    ></path>
                                    <rect
                                        width="653"
                                        height="24"
                                        fill="#fff"
                                        data-name="Rectangle 391"
                                        rx="12"
                                        transform="translate(2701 3941)"
                                    ></rect>
                                    <text
                                        fill="#f0f0f0"
                                        fontFamily="Roboto-Light, Roboto"
                                        fontSize="57"
                                        fontWeight="300"
                                        transform="translate(2943 3873)"
                                    >
                                        <tspan x="0" y="0">
                                            cash.app
                                        </tspan>
                                    </text>
                                    <g data-name="Group 283" transform="translate(2008 -1)">
                                        <rect
                                            width="32"
                                            height="24"
                                            fill="#f0f0f0"
                                            data-name="Rectangle 392"
                                            rx="6"
                                            transform="translate(879 3851)"
                                        ></rect>
                                        <g
                                            fill="none"
                                            stroke="#f0f0f0"
                                            strokeWidth="5"
                                            data-name="Rectangle 393"
                                            transform="translate(884 3831)"
                                        >
                                            <rect width="23" height="29" stroke="none" rx="11.5"></rect>
                                            <rect width="18" height="24" x="2.5" y="2.5" rx="9"></rect>
                                        </g>
                                    </g>
                                    <text
                                        fill="#f0f0f0"
                                        data-name="Bitcoin Withdrawal"
                                        fontFamily="Roboto-Medium, Roboto"
                                        fontSize="86"
                                        fontWeight="500"
                                        letterSpacing=".041em"
                                        transform="translate(2653 843)"
                                    >
                                        <tspan x="12" y="0">
                                            Bitcoin Withdrawal
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#737476"
                                        data-name="0.001"
                                        fontFamily="Roboto-Medium, Roboto"
                                        fontSize="237"
                                        fontWeight="500"
                                        letterSpacing=".041em"
                                        transform="translate(2513 1672)"
                                    >
                                        <tspan x="550" y="0" textAnchor="middle">
                                            {data.amount}
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#737476"
                                        fontFamily="Roboto-Medium, Roboto"
                                        fontSize="237"
                                        fontWeight="500"
                                        letterSpacing=".041em"
                                        transform="translate(2821 1931)"
                                    >
                                        <tspan x="0" y="0">
                                            BTC
                                        </tspan>
                                    </text>
                                    <g data-name="Group 285" transform="translate(1691 -58)">
                                        <g data-name="Group 284" transform="translate(1207.506 435.336)">
                                            <ellipse
                                                cx="141.5"
                                                cy="142"
                                                fill="#fff"
                                                data-name="Ellipse 93"
                                                rx="141.5"
                                                ry="142"
                                                transform="translate(.493 -.336)"
                                            ></ellipse>
                                        </g>
                                        <image
                                            width="367"
                                            height="378"
                                            transform="translate(1166 384)"
                                            xlinkHref="data:image/png;base64,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lipio4JtUrQjH1IjzNWDyQ2moigPYHpNrXotT202VL7ZjrxeBGzNRuFGOwofTUfhvdlpXG8AzzpA3wMGIdA/p1TyyhqRJ0YCY0CAgj0GRuAQSKAi8LG1wQBoe0BrG2gaoL0DtNMMjR2DBnxEcYrIFDVEfOXBG8YIpT24rLErDT9LoMWh1graSIVPjdzzkSiLxAJxECANApjcINMGadND4llI1PWw7aMfAt020J0Gti8p1ad1SIAExoMABXs87MBRkAAJkAAJkMD/JEDB5gQhARIgARIggRoQoGDXwEgcIgmQAAmQAAlQsDkHSIAESIAESKAGBCjYNTASh0gCJEACJEACFGzOARIgARIgARKoAQEKdg2MxCGSAAmQAAmQAAWbc4AESIAESIAEakCAgl0DI3GIJEACJEACJEDB5hwgARIgARIggRoQoGDXwEgcIgmQAAmQAAlQsDkHSIAESIAESKAGBCjYNTASh0gCJEACJEACFGzOARIgARIgARKoAQEKdg2MxCGSAAmQAAmQAAWbc4AESIAESIAEakCAgl0DI3GIJEACJEACJEDB5hwgARIgARIggRoQoGDXwEgcIgmQAAmQAAlQsDkHSIAESIAESKAGBCjYNTASh0gCJEACJEACFGzOARIgARIgARKoAQEKdg2MxCGSAAmQAAmQwH8BKzX55o2iSy4AAAAASUVORK5CYII="
                                        ></image>
                                    </g>
                                    <text
                                        fill="#6a6b6d"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="75"
                                        letterSpacing=".041em"
                                        transform="translate(2366 993)"
                                    >
                                        <tspan x="680" y="0" textAnchor="middle">
                                            {data.address1}
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#6a6b6d"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="75"
                                        letterSpacing=".041em"
                                        transform="translate(2758 1106)"
                                    >
                                        <tspan x="310" y="0" textAnchor="middle">
                                            {data.address2}
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#6a6b6d"
                                        data-name="Today at 7:32 PM"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="75"
                                        letterSpacing=".041em"
                                        transform="translate(2739 2128)"
                                    >
                                        <tspan x="300" y="0" textAnchor="middle">
                                            {data.date}
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#fff"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="86"
                                        letterSpacing=".041em"
                                        transform="translate(2874 2641)"
                                    >
                                        <tspan x="0" y="0">
                                            Initiated
                                        </tspan>
                                    </text>
                                    <g data-name="Group 286" transform="translate(1814)">
                                        <circle
                                            cx="59.5"
                                            cy="59.5"
                                            r="59.5"
                                            fill="#00cef5"
                                            data-name="Ellipse 94"
                                            transform="translate(1170 2392)"
                                        ></circle>
                                        <path
                                            fill="#fff"
                                            d="M55.78 97.219a4.081 4.081 0 010 5.768l-32.6 32.6a4.081 4.081 0 01-5.768 0l-16.3-16.3a4.078 4.078 0 115.768-5.768l13.42 13.407 29.725-29.707a4.081 4.081 0 015.768 0z"
                                            transform="translate(1201.074 2334.975)"
                                        ></path>
                                    </g>
                                    <path
                                        fill="#434446"
                                        d="M0 0H1588V6H0z"
                                        data-name="Rectangle 394"
                                        transform="translate(2249 2937)"
                                    ></path>
                                    <text
                                        fill="#606163"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="75"
                                        letterSpacing=".041em"
                                        transform="translate(2440 3225)"
                                    >
                                        <tspan x="0" y="0">
                                            To
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#606163"
                                        data-name="Blockchain Status"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="75"
                                        letterSpacing=".041em"
                                        transform="translate(2440 3696)"
                                    >
                                        <tspan x="0" y="0">
                                            Blockchain Status
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#606163"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="75"
                                        letterSpacing=".041em"
                                        transform="translate(2440 3539)"
                                    >
                                        <tspan x="0" y="0">
                                            Fees
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#606163"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="75"
                                        letterSpacing=".041em"
                                        transform="translate(2440 3382)"
                                    >
                                        <tspan x="0" y="0">
                                            Amount
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#949494"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="75"
                                        letterSpacing=".041em"
                                        transform="translate(3134 3225)"
                                    >
                                        <tspan x="520" y="0" textAnchor="end">
                                            {data.to}
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#949494"
                                        data-name="0.000923 BTC"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="75"
                                        letterSpacing=".041em"
                                        transform="translate(3143 3382)"
                                    >
                                        <tspan x="520" y="0" textAnchor="end">
                                            {data.amount1}
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#949494"
                                        data-name="0.00007952 BTC"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="75"
                                        letterSpacing=".041em"
                                        transform="translate(3052 3539)"
                                    >
                                        <tspan x="610" y="0" textAnchor="end">
                                            {data.fees}
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#949494"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="75"
                                        letterSpacing=".041em"
                                        transform="translate(3350 3696)"
                                    >
                                        <tspan x="20" y="0">
                                            Pending
                                        </tspan>
                                    </text>
                                    {
                                        battery === "78"
                                            ?
                                            <g transform="translate(3752.846 105)">
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
                                                        78
                                                    </tspan>
                                                </text>
                                            </g>
                                            :
                                            battery === "50"
                                                ?
                                                <g transform="translate(3752.846 105)">
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
                                                            50
                                                        </tspan>
                                                    </text>
                                                </g>
                                                :
                                                <g transform="translate(3752.846 105)">
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
                                                            25
                                                        </tspan>
                                                    </text>
                                                </g>
                                    }
                                    <g transform="translate(3523 116.158)">
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
                                    <g transform="translate(3524.115 119.505)">
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
                                    <g fill="#fff" transform="translate(3524.115 119.505)">
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
                                    {
                                        net === "4G"
                                            ?
                                            <text
                                                fill="#fff"
                                                data-name="4G"
                                                fontFamily="Roboto-Medium, Roboto"
                                                fontSize="57"
                                                fontWeight="500"
                                                transform="translate(3645 168)"
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
                                                    fontSize="57"
                                                    fontWeight="500"
                                                    transform="translate(3645 166)"
                                                >
                                                    <tspan x="0" y="0">
                                                        5G
                                                    </tspan>
                                                </text>
                                                :
                                                <g fill="#fff" transform="translate(3641.199 118.863)">
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
                        <label>Amount</label>
                        <input
                            type="text"
                            value={data.amount}
                            name="amount"
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
                    <div className="global_form_inner">
                        <label>Info</label>
                        <input
                            type="text"
                            value={data.to}
                            name="to"
                            onChange={(e) => onChangeHandler(e)}
                        />
                        <input
                            type="text"
                            value={data.amount1}
                            name="amount1"
                            onChange={(e) => onChangeHandler(e)}
                        />
                        <input
                            type="text"
                            value={data.fees}
                            name="fees"
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

export default SixtyOnePage;