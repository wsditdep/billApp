import React, { useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import { write } from 'clipboard-polyfill';
import "../../assets/styles/secondpage.scss";
import { ToastContainer, toast } from 'react-toastify';

const SeventySevenPage = () => {
    const screenshotRef = useRef(null);

    const [data, setData] = useState({
        time: "13:10",
        amount: "195.2600000",
        amountType: "USDT",
        address1: "TTfA7G2Poyf9RUjruqWGUz6",
        address2: "NtrrQLiGaPy",
        transactionID: "1185119874964398080",
        date: "2024-06-13 13:09:50",
        fee: "-1.00000000 USDT"
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
                    <h3>PREVIEW - <span>Mobile 77</span></h3>
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
                                viewBox="0 0 1656 3679"
                            >
                                <g data-name="Group 344" transform="translate(-2046 -136)">
                                    <path
                                        fill="#fff"
                                        d="M0 0H1656V3679H0z"
                                        data-name="Rectangle 431"
                                        transform="translate(2046 136)"
                                    ></path>
                                    <path
                                        fill="none"
                                        stroke="#131315"
                                        strokeWidth="7"
                                        d="M2181.112 352.807l-38.382 38.382 38.382 38.383"
                                        data-name="Path 175"
                                    ></path>
                                    <text
                                        fill="#101010"
                                        fontFamily="Roboto-Medium, Roboto"
                                        fontSize="63"
                                        fontWeight="500"
                                        transform="translate(2808 665)"
                                    >
                                        <tspan x="0" y="0">
                                            Quantity
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#4d4d4d"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="56"
                                        transform="translate(2291 1080)"
                                    >
                                        <tspan x="0" y="0">
                                            Submitted
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#4d4d4d"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="56"
                                        transform="translate(2291 1254)"
                                    >
                                        <tspan x="0" y="0">
                                            Approved
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#03adc4"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="56"
                                        transform="translate(2291 1423)"
                                    >
                                        <tspan x="0" y="0">
                                            Processing
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#c8c8c8"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="56"
                                        transform="translate(2291 1597)"
                                    >
                                        <tspan x="0" y="0">
                                            Successful
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#909092"
                                        data-name="Withdrawal type"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="62"
                                        transform="translate(2149 1981)"
                                    >
                                        <tspan x="0" y="0">
                                            Withdrawal type
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#373737"
                                        data-name="Normal withdrawal"
                                        fontFamily="Roboto-Medium, Roboto"
                                        fontSize="62"
                                        fontWeight="600"
                                        transform="translate(3093 1974)"
                                    >
                                        <tspan x="0" y="0">
                                            Normal withdrawal
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#373737"
                                        data-name="TRX(TRC20)"
                                        fontFamily="Roboto-Medium, Roboto"
                                        fontSize="62"
                                        fontWeight="600"
                                        transform="translate(3270 2148)"
                                    >
                                        <tspan x="0" y="0">
                                            TRX(TRC20)
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#373737"
                                        fontFamily="Roboto-Medium, Roboto"
                                        fontSize="62"
                                        fontWeight="600"
                                        transform="translate(2726 2322)"
                                    >
                                        <tspan x="800" y="0" textAnchor="end">
                                            {data.address1}
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#373737"
                                        data-name="2024-06-13 13:09:50"
                                        fontFamily="Roboto-Medium, Roboto"
                                        fontSize="62"
                                        fontWeight="600"
                                        transform="translate(3045 2818)"
                                    >
                                        <tspan x="562" y="0" textAnchor="end">
                                            {data.date}
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#373737"
                                        data-name="-1.00000000 USDT"
                                        fontFamily="Roboto-Medium, Roboto"
                                        fontSize="62"
                                        fontWeight="600"
                                        transform="translate(3096 2990)"
                                    >
                                        <tspan x="515" y="0" textAnchor="end">
                                            {data.fee}
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#373737"
                                        fontFamily="Roboto-Medium, Roboto"
                                        fontSize="62"
                                        fontWeight="600"
                                        transform="translate(3179 2397)"
                                    >
                                        <tspan x="345" y="0" textAnchor="end">
                                            {data.address2}
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#373737"
                                        data-name="1185119874964398000"
                                        fontFamily="Roboto-Medium, Roboto"
                                        fontSize="62"
                                        fontWeight="600"
                                        textDecoration="underline"
                                        transform="translate(2860 2647)"
                                    >
                                        <tspan x="660" y="0" textAnchor="end">
                                            {data.transactionID}
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#06b0bf"
                                        data-name="Save address"
                                        fontFamily="Roboto-Medium, Roboto"
                                        fontSize="62"
                                        fontWeight="600"
                                        transform="translate(3152 2479)"
                                    >
                                        <tspan x="0" y="0">
                                            Save address
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#909092"
                                        data-name="Withdrawal network"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="62"
                                        transform="translate(2149 2155)"
                                    >
                                        <tspan x="0" y="0">
                                            Withdrawal network
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#909092"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="62"
                                        transform="translate(2149 2329)"
                                    >
                                        <tspan x="0" y="0">
                                            Address
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#909092"
                                        data-name="Transaction ID"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="62"
                                        transform="translate(2144 2647)"
                                    >
                                        <tspan x="0" y="0">
                                            Transaction ID
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#909092"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="62"
                                        transform="translate(2146 2822)"
                                    >
                                        <tspan x="0" y="0">
                                            Time
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#909092"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="62"
                                        transform="translate(2149 2990)"
                                    >
                                        <tspan x="0" y="0">
                                            Fee
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#c8c8c8"
                                        data-name="Extimated arrival time: 5 min(s)"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="56"
                                        transform="translate(2291 1679)"
                                    >
                                        <tspan x="0" y="0">
                                            Extimated arrival time: 5 min(s)
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#101010"
                                        data-name="195.26000000 USDT"
                                        fontFamily="Roboto-Black, Roboto"
                                        fontSize="101"
                                        fontWeight="800"
                                        transform="translate(2397 834)"
                                    >
                                        <tspan x="500" y="0" textAnchor="middle">
                                            {data.amount} <tspan className="usdtType77">{data.amountType}</tspan>
                                        </tspan>
                                    </text>
                                    <circle
                                        cx="35"
                                        cy="35"
                                        r="35"
                                        fill="#26a17b"
                                        data-name="Ellipse 122"
                                        transform="translate(2704 608)"
                                    ></circle>
                                    <path
                                        fill="#fff"
                                        fillRule="evenodd"
                                        d="M31.723 28.74c-.241.017-1.481.092-4.248.092-2.209 0-3.765-.066-4.312-.092v.007c-8.505-.379-14.853-1.86-14.853-3.631s6.348-3.251 14.853-3.631v5.784c.556.039 2.148.133 4.349.133 2.64 0 3.964-.109 4.211-.131v-5.782c8.488.378 14.82 1.859 14.82 3.627s-6.333 3.248-14.82 3.625m0-7.853v-5.176h11.843V7.819H11.32v7.893h11.843v5.173C13.538 21.327 6.3 23.234 6.3 25.518s7.238 4.189 16.863 4.633v16.586h8.56v-16.59c9.61-.442 16.831-2.347 16.831-4.629s-7.221-4.187-16.831-4.631"
                                        data-name="Path 179"
                                        transform="translate(2711.48 617.285)"
                                    ></path>
                                    <circle
                                        cx="41"
                                        cy="41"
                                        r="41"
                                        fill="#06b0bf"
                                        data-name="Ellipse 123"
                                        transform="translate(2162 1016)"
                                    ></circle>
                                    <circle
                                        cx="41"
                                        cy="41"
                                        r="41"
                                        fill="#06b0bf"
                                        data-name="Ellipse 124"
                                        transform="translate(2162 1186)"
                                    ></circle>
                                    <g
                                        fill="none"
                                        stroke="#06b0bf"
                                        strokeWidth="4"
                                        data-name="Ellipse 125"
                                        transform="translate(2162 1356)"
                                    >
                                        <circle cx="41" cy="41" r="41" stroke="none"></circle>
                                        <circle cx="41" cy="41" r="39"></circle>
                                    </g>
                                    <g
                                        fill="none"
                                        stroke="#c2c2c2"
                                        strokeWidth="4"
                                        data-name="Ellipse 126"
                                        transform="translate(2162 1529)"
                                    >
                                        <circle cx="41" cy="41" r="41" stroke="none"></circle>
                                        <circle cx="41" cy="41" r="39"></circle>
                                    </g>
                                    <path
                                        fill="none"
                                        stroke="#fff"
                                        strokeWidth="5"
                                        d="M2182.496 1052.119l15.082 17.6 26.215-26.215"
                                        data-name="Path 180"
                                    ></path>
                                    <path
                                        fill="none"
                                        stroke="#fff"
                                        strokeWidth="5"
                                        d="M2182.496 1222.119l15.082 17.6 26.215-26.215"
                                        data-name="Path 181"
                                    ></path>
                                    <path
                                        fill="none"
                                        stroke="#0daacb"
                                        strokeWidth="5"
                                        d="M0 0L0 73"
                                        data-name="Line 34"
                                        transform="translate(2210.5 1104.5)"
                                    ></path>
                                    <path
                                        fill="none"
                                        stroke="#0daacb"
                                        strokeWidth="5"
                                        d="M0 0L0 73"
                                        data-name="Line 35"
                                        transform="translate(2210.5 1275.5)"
                                    ></path>
                                    <path
                                        fill="none"
                                        stroke="#bebebe"
                                        strokeWidth="5"
                                        d="M0 0L0 73"
                                        data-name="Line 36"
                                        transform="translate(2210.5 1448.5)"
                                    ></path>
                                    <g
                                        fill="#fff"
                                        stroke="#ababab"
                                        strokeWidth="5"
                                        data-name="Rectangle 433"
                                        transform="translate(3555 2267)"
                                    >
                                        <rect width="44" height="44" stroke="none" rx="6"></rect>
                                        <rect
                                            width="39"
                                            height="39"
                                            x="2.5"
                                            y="2.5"
                                            fill="none"
                                            rx="3.5"
                                        ></rect>
                                    </g>
                                    <g
                                        fill="#fff"
                                        stroke="#ababab"
                                        strokeWidth="5"
                                        data-name="Rectangle 435"
                                        transform="translate(3555 2592)"
                                    >
                                        <rect width="44" height="44" stroke="none" rx="6"></rect>
                                        <rect
                                            width="39"
                                            height="39"
                                            x="2.5"
                                            y="2.5"
                                            fill="none"
                                            rx="3.5"
                                        ></rect>
                                    </g>
                                    <g
                                        fill="#fff"
                                        stroke="#ababab"
                                        strokeWidth="5"
                                        data-name="Rectangle 432"
                                        transform="translate(3572 2283)"
                                    >
                                        <rect width="44" height="44" stroke="none" rx="6"></rect>
                                        <rect
                                            width="39"
                                            height="39"
                                            x="2.5"
                                            y="2.5"
                                            fill="none"
                                            rx="3.5"
                                        ></rect>
                                    </g>
                                    <g
                                        fill="#fff"
                                        stroke="#ababab"
                                        strokeWidth="5"
                                        data-name="Rectangle 434"
                                        transform="translate(3572 2608)"
                                    >
                                        <rect width="44" height="44" stroke="none" rx="6"></rect>
                                        <rect
                                            width="39"
                                            height="39"
                                            x="2.5"
                                            y="2.5"
                                            fill="none"
                                            rx="3.5"
                                        ></rect>
                                    </g>
                                    <rect
                                        width="611"
                                        height="18"
                                        fill="#7a7a7a"
                                        data-name="Rectangle 436"
                                        rx="9"
                                        transform="translate(2595 3770)"
                                    ></rect>
                                    <text
                                        fill="#373737"
                                        data-name="13:10"
                                        fontFamily="Roboto-Bold, Roboto"
                                        fontSize="62"
                                        fontWeight="700"
                                        transform="translate(2181 248)"
                                    >
                                        <tspan x="0" y="0">
                                            {data.time}
                                        </tspan>
                                    </text>

                                    {
                                        network === "low"
                                            ?
                                            <>
                                                <rect
                                                    width="12"
                                                    height="18"
                                                    fill="#3b3b3b"
                                                    data-name="Rectangle 244"
                                                    rx="2"
                                                    transform="translate(3226 230)"
                                                ></rect>
                                                <rect
                                                    width="14"
                                                    height="27"
                                                    fill="#3b3b3b"
                                                    data-name="Rectangle 242"
                                                    opacity="0.5"
                                                    rx="2"
                                                    transform="translate(3249 221)"
                                                ></rect>
                                                <rect
                                                    width="13"
                                                    height="39"
                                                    fill="#3b3b3b"
                                                    data-name="Rectangle 240"
                                                    opacity="0.5"
                                                    rx="2"
                                                    transform="translate(3272 209)"
                                                ></rect>
                                                <rect
                                                    width="13"
                                                    height="52"
                                                    fill="#3b3b3b"
                                                    data-name="Rectangle 238"
                                                    opacity="0.5"
                                                    rx="2"
                                                    transform="translate(3296 196)"
                                                ></rect>
                                            </>
                                            :
                                            network === "strong"
                                                ?
                                                <>
                                                    <rect
                                                        width="12"
                                                        height="18"
                                                        fill="#3b3b3b"
                                                        data-name="Rectangle 35"
                                                        rx="2"
                                                        transform="translate(3226 230)"
                                                    ></rect>
                                                    <rect
                                                        width="14"
                                                        height="27"
                                                        fill="#3b3b3b"
                                                        data-name="Rectangle 36"
                                                        rx="2"
                                                        transform="translate(3249 221)"
                                                    ></rect>
                                                    <rect
                                                        width="13"
                                                        height="39"
                                                        fill="#3b3b3b"
                                                        data-name="Rectangle 37"
                                                        rx="2"
                                                        transform="translate(3272 209)"
                                                    ></rect>
                                                    <rect
                                                        width="13"
                                                        height="52"
                                                        fill="#3b3b3b"
                                                        data-name="Rectangle 38"
                                                        rx="2"
                                                        transform="translate(3296 196)"
                                                    ></rect>
                                                </>
                                                :
                                                <>
                                                    <rect
                                                        width="12"
                                                        height="18"
                                                        fill="#3b3b3b"
                                                        data-name="Rectangle 243"
                                                        rx="2"
                                                        transform="translate(3226 229)"
                                                    ></rect>
                                                    <rect
                                                        width="14"
                                                        height="27"
                                                        fill="#3b3b3b"
                                                        data-name="Rectangle 241"
                                                        rx="2"
                                                        transform="translate(3249 220)"
                                                    ></rect>
                                                    <rect
                                                        width="13"
                                                        height="39"
                                                        fill="#3b3b3b"
                                                        data-name="Rectangle 239"
                                                        opacity="0.5"
                                                        rx="2"
                                                        transform="translate(3272 208)"
                                                    ></rect>
                                                    <rect
                                                        width="13"
                                                        height="52"
                                                        fill="#3b3b3b"
                                                        data-name="Rectangle 237"
                                                        opacity="0.5"
                                                        rx="2"
                                                        transform="translate(3296 195)"
                                                    ></rect>
                                                </>
                                    }


                                    {
                                        net === "4G"
                                            ?
                                            <>
                                                <text
                                                    fill="#3a3a3a"
                                                    data-name="4G"
                                                    fontFamily="Roboto-Medium, Roboto"
                                                    fontSize="63"
                                                    fontWeight="500"
                                                    transform="translate(3345 244)"
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
                                                        fill="#3a3a3a"
                                                        data-name="5G"
                                                        fontFamily="Roboto-Medium, Roboto"
                                                        fontSize="63"
                                                        fontWeight="500"
                                                        transform="translate(3349 248)"
                                                    >
                                                        <tspan x="0" y="0">
                                                            5G
                                                        </tspan>
                                                    </text>
                                                </>
                                                :
                                                <>
                                                    <path
                                                        fill="#3a3a3a"
                                                        d="M99.606 192a52.69 52.69 0 00-35.3 14.074 1.27 1.27 0 00-.048 1.817l4.256 4.447a1.309 1.309 0 001.849.048 42.819 42.819 0 0129.263-11.428 42.819 42.819 0 0129.263 11.428 1.309 1.309 0 001.849-.048l4.256-4.447a1.271 1.271 0 00-.048-1.817A52.831 52.831 0 0099.606 192z"
                                                        data-name="Path 73"
                                                        transform="translate(3289.105 8)"
                                                    ></path>
                                                    <path
                                                        fill="#3a3a3a"
                                                        d="M221.936 432.967l4.558 4.511a1.307 1.307 0 001.785.048 24.792 24.792 0 0132.8 0 1.307 1.307 0 001.785-.048l4.559-4.511a1.273 1.273 0 00-.048-1.865 33.99 33.99 0 00-45.425 0 1.3 1.3 0 00-.014 1.865zm22.76 7.443a12.987 12.987 0 00-9.468 4.064 1.275 1.275 0 00.032 1.785l8.511 8.4a1.308 1.308 0 001.849 0l8.511-8.4a1.275 1.275 0 00.032-1.785 13.048 13.048 0 00-9.463-4.063z"
                                                        data-name="Path 72"
                                                        transform="translate(3144.016 -204.039)"
                                                    ></path>
                                                    <rect
                                                        width="110"
                                                        height="60"
                                                        fill="#3a3a3a"
                                                        data-name="Rectangle 245"
                                                        rx="23"
                                                        transform="translate(3460 194)"
                                                    ></rect>
                                                </>
                                    }


                                    {
                                        battery === "25"
                                            ?
                                            <>
                                                <path
                                                    fill="#3a3a3a"
                                                    d="M23 0h64a23 23 0 0123 23v13a23 23 0 01-23 23H23A23 23 0 010 36V23A23 23 0 0123 0z"
                                                    data-name="Path 75"
                                                    transform="translate(3460 195)"
                                                ></path>
                                                <path
                                                    fill="#818d9d"
                                                    d="M0 0a6 6 0 016 6v5a6 6 0 01-6 6V0z"
                                                    data-name="Rectangle 248"
                                                    transform="translate(3571 217)"
                                                ></path>
                                                <path
                                                    fill="#818d9d"
                                                    d="M0 0h57a23 23 0 0123 23v13a23 23 0 01-23 23H0V0z"
                                                    data-name="Rectangle 249"
                                                    transform="translate(3490 195)"
                                                ></path>
                                                <text
                                                    fill="#fff8f6"
                                                    data-name="25"
                                                    fontFamily="HelveticaWorld-Bold, Helvetica World"
                                                    fontSize="50"
                                                    fontWeight="600"
                                                    transform="translate(3486 242)"
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
                                                    <path
                                                        fill="#3a3a3a"
                                                        d="M23 0h64a23 23 0 0123 23v14a23 23 0 01-23 23H23A23 23 0 010 37V23A23 23 0 0123 0z"
                                                        data-name="Path 74"
                                                        transform="translate(3460 194)"
                                                    ></path>
                                                    <path
                                                        fill="#818d9d"
                                                        d="M0 0a6 6 0 016 6v2a6 6 0 01-6 6V0z"
                                                        data-name="Rectangle 251"
                                                        transform="translate(3571 218)"
                                                    ></path>
                                                    <path
                                                        fill="#818d9d"
                                                        d="M0 0h31a23 23 0 0123 23v14a23 23 0 01-23 23H0V0z"
                                                        data-name="Rectangle 247"
                                                        transform="translate(3516 194)"
                                                    ></path>
                                                    <text
                                                        fill="#fff8f6"
                                                        data-name="50"
                                                        fontFamily="HelveticaWorld-Bold, Helvetica World"
                                                        fontSize="50"
                                                        fontWeight="600"
                                                        transform="translate(3486 242)"
                                                    >
                                                        <tspan x="0" y="0">
                                                            50
                                                        </tspan>
                                                    </text>
                                                </>
                                                :
                                                <>
                                                    <path
                                                        fill="#818d9d"
                                                        d="M0 0a6 6 0 016 6v3a6 6 0 01-6 6V0z"
                                                        data-name="Rectangle 250"
                                                        transform="translate(3571 218)"
                                                    ></path>
                                                    <path
                                                        fill="#818d9d"
                                                        d="M0 0h5a23 23 0 0123 23v14A23 23 0 015 60H0V0z"
                                                        data-name="Rectangle 246"
                                                        transform="translate(3542 194)"
                                                    ></path>
                                                    <text
                                                        fill="#fff8f6"
                                                        data-name="78"
                                                        fontFamily="HelveticaWorld-Bold, Helvetica World"
                                                        fontSize="50"
                                                        fontWeight="600"
                                                        transform="translate(3486 242)"
                                                    >
                                                        <tspan x="0" y="0">
                                                            78
                                                        </tspan>
                                                    </text>
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
                        <label>Amount</label>
                        <input
                            type="text"
                            value={data.amount}
                            name="amount"
                            onChange={(e) => onChangeHandler(e)}
                        />
                        <input
                            type="text"
                            value={data.amountType}
                            name="amountType"
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
                        <label>Transaction ID</label>
                        <input
                            type="text"
                            value={data.transactionID}
                            name="transactionID"
                            onChange={(e) => onChangeHandler(e)}
                        />
                    </div>
                    <div className="global_form_inner">
                        <label>Time</label>
                        <input
                            type="text"
                            value={data.date}
                            name="date"
                            onChange={(e) => onChangeHandler(e)}
                        />
                    </div>
                    <div className="global_form_inner">
                        <label>Fee</label>
                        <input
                            type="text"
                            value={data.fee}
                            name="fee"
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

export default SeventySevenPage;