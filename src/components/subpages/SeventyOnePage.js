import React, { useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import { write } from 'clipboard-polyfill';
import "../../assets/styles/secondpage.scss";
import { ToastContainer, toast } from 'react-toastify';

const SeventyOnePage = () => {
    const screenshotRef = useRef(null);

    const [data, setData] = useState({
        time: "12:41",
        amount: "$250.55",
        date1: "May 28, 2024",
        date2: "May 27, 2024",
        amount1: "$206.06",
        amount1Alt: "$250.55",
        amount2: "-$38.02",
        amount2Alt: "$44.49",
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
                    <h3>PREVIEW - <span>Mobile 71</span></h3>
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
                                viewBox="0 0 1863 3847"
                            >
                                <g data-name="Group 336" transform="translate(-2301 -172)">
                                    <path
                                        fill="#fff"
                                        d="M0 0H1863V3847H0z"
                                        data-name="Rectangle 83"
                                        transform="translate(2301 172)"
                                    ></path>
                                    <path
                                        fill="#c41f3f"
                                        d="M0 0H1863V465H0z"
                                        data-name="Rectangle 84"
                                        transform="translate(2301 172)"
                                    ></path>
                                    <path
                                        fill="#f5f5f5"
                                        d="M5.221 1.68L47.6.006c2.807-.111 5.027 1.442 4.954 3.467s-2.409 3.758-5.219 3.869L4.952 9.016C2.145 9.127-.072 7.578 0 5.549S2.41 1.791 5.221 1.68z"
                                        data-name="Path 10"
                                        transform="rotate(-44.03 1798.505 -2724.858)"
                                    ></path>
                                    <path
                                        fill="#f5f5f5"
                                        d="M4.913.008L47.344 2c2.811.133 5.164 1.877 5.274 3.9s-2.1 3.556-4.909 3.427L5.292 7.344C2.463 7.2.1 5.456 0 3.431S2.1-.125 4.913.008z"
                                        data-name="Path 10"
                                        transform="rotate(-135 1326.946 -242.474)"
                                    ></path>
                                    <path
                                        fill="#f5f5f5"
                                        d="M0 0H77V7H0z"
                                        data-name="Rectangle 85"
                                        transform="translate(2408.002 482)"
                                    ></path>
                                    <text
                                        fill="#f2f2f2"
                                        data-name="10:04"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="70"
                                        transform="translate(2441 289)"
                                    >
                                        <tspan x="0" y="0">
                                            {data.time}
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#efefef"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="73"
                                        transform="translate(3100 459)"
                                    >
                                        <tspan x="0" y="0">
                                            Chequing
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#f2f2f2"
                                        data-name="6976999"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="70"
                                        transform="translate(3100 560)"
                                    >
                                        <tspan x="0" y="0">
                                            6976999
                                        </tspan>
                                    </text>
                                    <path
                                        fill="#fff"
                                        d="M29.507 0l29.507 33.2H0z"
                                        data-name="Polygon 3"
                                        transform="rotate(180 1760 229.848)"
                                    ></path>
                                    <path
                                        fill="none"
                                        stroke="#cfcfcf"
                                        strokeWidth="9"
                                        d="M0 0L1807.315 0"
                                        data-name="Line 39"
                                        transform="translate(2328.664 1431.588)"
                                    ></path>
                                    <path
                                        fill="none"
                                        stroke="#cfcfcf"
                                        strokeWidth="1"
                                        d="M0 0L1807.315 0"
                                        data-name="Line 46"
                                        transform="translate(2328.664 1676.867)"
                                    ></path>
                                    <path
                                        fill="none"
                                        stroke="#cfcfcf"
                                        strokeWidth="7"
                                        d="M0 0L1807 0"
                                        data-name="Line 41"
                                        transform="translate(2331 1972)"
                                    ></path>
                                    <path
                                        fill="none"
                                        stroke="#cfcfcf"
                                        strokeWidth="6"
                                        d="M0 0L1807 0"
                                        data-name="Line 42"
                                        transform="translate(2331 2536)"
                                    ></path>
                                    <path
                                        fill="none"
                                        stroke="#cfcfcf"
                                        strokeWidth="6"
                                        d="M0 0L1807 0"
                                        data-name="Line 44"
                                        transform="translate(2331 2909)"
                                    ></path>
                                    <path
                                        fill="none"
                                        stroke="#cfcfcf"
                                        strokeWidth="6"
                                        d="M0 0L1807 0"
                                        data-name="Line 45"
                                        transform="translate(2331 3182)"
                                    ></path>
                                    <path
                                        fill="none"
                                        stroke="#cfcfcf"
                                        strokeWidth="6"
                                        d="M0 0L1807 0"
                                        data-name="Line 47"
                                        transform="translate(2331 3842)"
                                    ></path>
                                    <path
                                        fill="none"
                                        stroke="#cfcfcf"
                                        strokeWidth="6"
                                        d="M0 0L1807 0"
                                        data-name="Line 48"
                                        transform="translate(2331 3565)"
                                    ></path>
                                    <path
                                        fill="none"
                                        stroke="#cfcfcf"
                                        strokeWidth="7"
                                        d="M0 0L1807 0"
                                        data-name="Line 43"
                                        transform="translate(2331 2167)"
                                    ></path>
                                    <path
                                        fill="none"
                                        stroke="#cfcfcf"
                                        strokeWidth="7"
                                        d="M0 0L1807.315 0"
                                        data-name="Line 40"
                                        transform="translate(2328.664 1180.777)"
                                    ></path>
                                    <text
                                        fill="#4e4e4e"
                                        data-name="Account Info"
                                        fontFamily="Roboto-Medium, Roboto"
                                        fontSize="59"
                                        fontWeight="600"
                                        transform="translate(2631 1083)"
                                    >
                                        <tspan x="0" y="0">
                                            Account Info
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#c41f3f"
                                        fontFamily="Roboto-Medium, Roboto"
                                        fontSize="59"
                                        fontWeight="600"
                                        transform="translate(3516 1083)"
                                    >
                                        <tspan x="0" y="0">
                                            Transactions
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#c41f3f"
                                        data-name="Transaction Glossary"
                                        fontFamily="Roboto-Medium, Roboto"
                                        fontSize="55"
                                        fontWeight="600"
                                        transform="translate(2961 1334)"
                                    >
                                        <tspan x="0" y="0">
                                            Transaction Glossary
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#c41f3f"
                                        data-name="Viewing Last 4 Weeks"
                                        fontFamily="Roboto-Medium, Roboto"
                                        fontSize="55"
                                        fontWeight="600"
                                        transform="translate(2961 1581)"
                                    >
                                        <tspan x="0" y="0">
                                            Viewing Last 4 Weeks
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#aa0f2d"
                                        data-name="Questions about your transactions?"
                                        fontFamily="Roboto-Medium, Roboto"
                                        fontSize="61"
                                        fontWeight="600"
                                        textDecoration="underline"
                                        transform="translate(2342 1849)"
                                    >
                                        <tspan x="0" y="0">
                                            Questions about your transactions?
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#232323"
                                        data-name="May 28, 2024"
                                        fontFamily="Roboto-BoldItalic, Roboto"
                                        fontSize="58"
                                        fontStyle="italic"
                                        fontWeight="700"
                                        transform="translate(2401 2473)"
                                    >
                                        <tspan x="0" y="0">
                                            {data.date1}
                                        </tspan>
                                    </text>
                                    <path
                                        fill="#0a6055"
                                        d="M0 0H1788V19H0z"
                                        data-name="Rectangle 86"
                                        transform="translate(2342 1658)"
                                    ></path>
                                    <text
                                        fill="#141414"
                                        data-name="Free transaction"
                                        fontFamily="Roboto-Medium, Roboto"
                                        fontSize="58"
                                        fontWeight="600"
                                        transform="translate(2489 2097)"
                                    >
                                        <tspan x="0" y="0">
                                            Free transaction
                                        </tspan>
                                    </text>
                                    <ellipse
                                        cx="20"
                                        cy="20.5"
                                        fill="#2c6884"
                                        data-name="Ellipse 25"
                                        rx="20"
                                        ry="20.5"
                                        transform="translate(2401 2713)"
                                    ></ellipse>
                                    <circle
                                        cx="20"
                                        cy="20"
                                        r="20"
                                        fill="#2c6884"
                                        data-name="Ellipse 26"
                                        transform="translate(2401 2057)"
                                    ></circle>
                                    <text
                                        fill="#6e6e6e"
                                        data-name="E- TRANSFER 105009654088 NDAX Canada Inc"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="77"
                                        transform="translate(2491 2667)"
                                    >
                                        <tspan x="0" y="0">
                                            E- TRANSFER
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#6e6e6e"
                                        data-name="E- TRANSFER 105009654088 NDAX Canada Inc"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="77"
                                        transform="translate(2489 2761)"
                                    >
                                        <tspan x="0" y="0">
                                            105009654088 NDAX Canada
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#6e6e6e"
                                        data-name="E- TRANSFER 105009654088 NDAX Canada Inc"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="77"
                                        transform="translate(2491 2851)"
                                    >
                                        <tspan x="0" y="0">
                                            Inc
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#6e6e6e"
                                        data-name="$206.06"
                                        fontFamily="Roboto-Medium, Roboto"
                                        fontSize="81"
                                        fontWeight="600"
                                        transform="translate(3692 2724)"
                                    >
                                        <tspan x="300" y="0" textAnchor="end">
                                            {data.amount1}
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#2c6884"
                                        data-name="$250.55"
                                        fontFamily="Roboto-MediumItalic, Roboto"
                                        fontSize="51"
                                        fontStyle="italic"
                                        fontWeight="600"
                                        transform="translate(3798 2798)"
                                    >
                                        <tspan x="190" y="0" textAnchor="end">
                                            {data.amount1Alt}
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#6e6e6e"
                                        data-name="E- TRANSFER 105009447935 Rabia Mann"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="77"
                                        transform="translate(2489 3035)"
                                    >
                                        <tspan x="0" y="0">
                                            E- TRANSFER
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#6e6e6e"
                                        data-name="E- TRANSFER 105009447935 Rabia Mann"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="77"
                                        transform="translate(2489 3121)"
                                    >
                                        <tspan x="0" y="0">
                                            105009447935 Rabia Mann
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#6e6e6e"
                                        data-name="-$38.02"
                                        fontFamily="Roboto-Medium, Roboto"
                                        fontSize="81"
                                        fontWeight="600"
                                        transform="translate(3712 3048)"
                                    >
                                        <tspan x="285" y="0" textAnchor="end">
                                            {data.amount2}
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#2c6884"
                                        data-name="$44.49"
                                        fontFamily="Roboto-MediumItalic, Roboto"
                                        fontSize="51"
                                        fontStyle="italic"
                                        fontWeight="600"
                                        transform="translate(3828 3126)"
                                    >
                                        <tspan x="165" y="0" textAnchor="end">
                                            {data.amount2Alt}
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#232323"
                                        data-name="MAY 27,2024"
                                        fontFamily="Roboto-BoldItalic, Roboto"
                                        fontSize="58"
                                        fontStyle="italic"
                                        fontWeight="700"
                                        transform="translate(2401 3495)"
                                    >
                                        <tspan x="0" y="0">
                                            {data.date2}
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#6e6e6e"
                                        data-name="E- TRANSFER 105006442924 Raffy"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="77"
                                        transform="translate(2489 3690)"
                                    >
                                        <tspan x="0" y="0">
                                            E- TRANSFER
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#6e6e6e"
                                        data-name="E- TRANSFER 105006442924 Raffy"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="77"
                                        transform="translate(2489 3783)"
                                    >
                                        <tspan x="0" y="0">
                                            105006442924 Raffy
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#6e6e6e"
                                        data-name="-$10.00"
                                        fontFamily="Roboto-Medium, Roboto"
                                        fontSize="81"
                                        fontWeight="600"
                                        transform="translate(3713 3705)"
                                    >
                                        <tspan x="0" y="0">
                                            -$10.00
                                        </tspan>
                                    </text>
                                    <g data-name="Group 332">
                                        <circle
                                            cx="133"
                                            cy="133"
                                            r="133"
                                            fill="#c41f3f"
                                            data-name="Ellipse 27"
                                            transform="translate(3791 3676)"
                                        ></circle>
                                        <path
                                            fill="#fff"
                                            d="M0 0H88V11H0z"
                                            data-name="Rectangle 87"
                                            transform="translate(3880 3801)"
                                        ></path>
                                    </g>
                                    <path
                                        fill="#fff"
                                        d="M0 0H92V11H0z"
                                        data-name="Rectangle 88"
                                        transform="rotate(-90 3886.5 -33.5)"
                                    ></path>
                                    <path
                                        fill="#efefef"
                                        d="M0 0H1863V303H0z"
                                        data-name="Rectangle 417"
                                        transform="translate(2301 637)"
                                    ></path>
                                    <path
                                        fill="none"
                                        stroke="#8f8f8f"
                                        strokeWidth="1"
                                        d="M0 0L1807.315 0"
                                        data-name="Line 38"
                                        transform="translate(2341.572 712.351)"
                                    ></path>
                                    <text
                                        fill="#5e5e5e"
                                        data-name="AVAILABLE FUNDS"
                                        fontFamily="Roboto-Medium, Roboto"
                                        fontSize="58"
                                        fontWeight="600"
                                        transform="translate(2401 843)"
                                    >
                                        <tspan x="0" y="0">
                                            AVAILABLE FUNDS
                                        </tspan>
                                    </text>
                                    <path
                                        fill="#868583"
                                        d="M29.507 0l29.507 33.2H0z"
                                        data-name="Polygon 4"
                                        transform="rotate(180 2037.56 421.145)"
                                    ></path>
                                    <text
                                        fill="#2d6a5a"
                                        data-name="$250.55"
                                        fontFamily="Roboto-Medium, Roboto"
                                        fontSize="54"
                                        fontWeight="600"
                                        transform="translate(3758 839)"
                                    >
                                        <tspan x="200" y="0" textAnchor="end">
                                            {data.amount}
                                        </tspan>
                                    </text>
                                    <g data-name="Group 330" transform="translate(-624.367 95.858)">
                                        <g
                                            fill="none"
                                            stroke="#fff"
                                            strokeWidth="4"
                                            data-name="Ellipse 22"
                                            transform="translate(4599.831 343.783)"
                                        >
                                            <circle cx="35.282" cy="35.282" r="35.282" stroke="none"></circle>
                                            <circle cx="35.282" cy="35.282" r="33.282"></circle>
                                        </g>
                                        <path
                                            fill="none"
                                            stroke="#fff"
                                            strokeWidth="4"
                                            d="M4603.677 388.047l-5.453 29.188 19.885-10.584"
                                            data-name="Path 44"
                                        ></path>
                                        <g
                                            fill="#b53242"
                                            stroke="#b53242"
                                            strokeWidth="1"
                                            data-name="Rectangle 155"
                                            transform="rotate(10 113.337 26520.619)"
                                        >
                                            <path stroke="none" d="M0 0H7.698V21.81H0z"></path>
                                            <path fill="none" d="M0.5 0.5H7.198V21.31H0.5z"></path>
                                        </g>
                                        <g
                                            fill="#b53242"
                                            stroke="#b53242"
                                            strokeWidth="1"
                                            data-name="Rectangle 156"
                                            transform="rotate(62.03 1978.413 4036.792)"
                                        >
                                            <path stroke="none" d="M0 0H7.698V10.665H0z"></path>
                                            <path fill="none" d="M0.5 0.5H7.198V10.165H0.5z"></path>
                                        </g>
                                        <g
                                            fill="#b13a49"
                                            stroke="#b13a49"
                                            strokeWidth="1"
                                            data-name="Rectangle 157"
                                            transform="rotate(22 1267.648 12220.534)"
                                        >
                                            <path stroke="none" d="M0 0H11.547V6.415H0z"></path>
                                            <path fill="none" d="M0.5 0.5H11.047V5.915H0.5z"></path>
                                        </g>
                                        <g
                                            fill="#b13a49"
                                            stroke="#b13a49"
                                            strokeWidth="1"
                                            data-name="Rectangle 158"
                                            transform="rotate(-14.98 3865.32 -17520.502)"
                                        >
                                            <path stroke="none" d="M0 0H9.283V17.479H0z"></path>
                                            <path fill="none" d="M0.5 0.5H8.783V16.979H0.5z"></path>
                                        </g>
                                        <g
                                            fill="#b53242"
                                            stroke="#fff"
                                            strokeWidth="4"
                                            data-name="Ellipse 22"
                                            transform="translate(4616.935 366.877)"
                                        >
                                            <ellipse
                                                cx="31.511"
                                                cy="31.511"
                                                stroke="none"
                                                rx="31.511"
                                                ry="31.511"
                                            ></ellipse>
                                            <ellipse
                                                cx="31.511"
                                                cy="31.511"
                                                fill="none"
                                                rx="29.511"
                                                ry="29.511"
                                            ></ellipse>
                                        </g>
                                        <path
                                            fill="#b53242"
                                            stroke="#fff"
                                            strokeWidth="4"
                                            d="M4676.52 406.408l4.871 26.072-17.762-9.455"
                                            data-name="Path 44"
                                        ></path>
                                        <g
                                            fill="#b53242"
                                            stroke="#b53242"
                                            strokeWidth="1"
                                            data-name="Rectangle 155"
                                            transform="scale(-1) rotate(-10.02 -4740.624 26463.548)"
                                        >
                                            <path stroke="none" d="M0 0H6.875V19.48H0z"></path>
                                            <path fill="none" d="M0.5 0.5H6.375V18.98H0.5z"></path>
                                        </g>
                                        <g
                                            fill="#b53242"
                                            stroke="#b53242"
                                            strokeWidth="1"
                                            data-name="Rectangle 156"
                                            transform="rotate(117.97 2211.878 1614.436)"
                                        >
                                            <path stroke="none" d="M0 0H6.875V9.525H0z"></path>
                                            <path fill="none" d="M0.5 0.5H6.375V9.025H0.5z"></path>
                                        </g>
                                        <g
                                            fill="#b53242"
                                            stroke="#b13a49"
                                            strokeWidth="1"
                                            data-name="Rectangle 157"
                                            transform="rotate(158 2267.274 666.835)"
                                        >
                                            <path stroke="none" d="M0 0H10.313V5.729H0z"></path>
                                            <path fill="none" d="M0.5 0.5H9.813V5.229H0.5z"></path>
                                        </g>
                                        <g
                                            fill="#b53242"
                                            stroke="#b13a49"
                                            strokeWidth="1"
                                            data-name="Rectangle 158"
                                            transform="rotate(-165.02 2335.611 -85.41)"
                                        >
                                            <path stroke="none" d="M0 0H8.291V15.611H0z"></path>
                                            <path fill="none" d="M0.5 0.5H7.791V15.111H0.5z"></path>
                                        </g>
                                    </g>
                                    <path
                                        fill="#c41f3f"
                                        d="M0 0H892V10H0z"
                                        data-name="Rectangle 418"
                                        transform="translate(3244 1174)"
                                    ></path>
                                    <image
                                        width="65"
                                        height="80"
                                        data-name="Group 333"
                                        transform="translate(2800.5 1273.9)"
                                        xlinkHref="data:image/png;base64,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"
                                    ></image>
                                    <g data-name="Group 331" transform="translate(1555.506 -97.1)">
                                        <g
                                            fill="#fff"
                                            stroke="#707070"
                                            strokeWidth="4"
                                            data-name="Rectangle 419"
                                            transform="translate(1246 1627)"
                                        >
                                            <rect width="56" height="56" stroke="none" rx="28"></rect>
                                            <rect width="52" height="52" x="2" y="2" fill="none" rx="26"></rect>
                                        </g>
                                        <path
                                            fill="none"
                                            stroke="#707070"
                                            strokeWidth="5"
                                            d="M0 0L18.536 18.536"
                                            data-name="Line 30"
                                            transform="translate(1291.458 1673.341)"
                                        ></path>
                                        <g
                                            fill="#fff"
                                            stroke="#707070"
                                            strokeWidth="3"
                                            data-name="Ellipse 116"
                                            transform="translate(1253 1634)"
                                        >
                                            <circle cx="21" cy="21" r="21" stroke="none"></circle>
                                            <circle cx="21" cy="21" r="19.5" fill="none"></circle>
                                        </g>
                                        <path
                                            fill="#fff"
                                            d="M16775.42 14121l31.6 22.729-1.307 8.879-9.4 9.4-10.445 3.134-10.445-2.09-7.574-5.223-4.439-7.051-1.566-9.141 1.566-7.572 3.135-5.224 4.961-6.007z"
                                            data-name="Path 163"
                                            transform="translate(-15510.686 -12486.938)"
                                        ></path>
                                    </g>

                                    {
                                        battery === "25"
                                            ?
                                            <>
                                                <rect
                                                    width="103"
                                                    height="56"
                                                    fill="#fff"
                                                    data-name="Rectangle 170"
                                                    rx="23"
                                                    transform="translate(3936 240)"
                                                ></rect>
                                                <path
                                                    fill="#e3919d"
                                                    d="M0 0a6 6 0 016 6v2a6 6 0 01-6 6V0z"
                                                    data-name="Rectangle 172"
                                                    transform="translate(4040 262)"
                                                ></path>
                                                <path
                                                    fill="#e3919d"
                                                    d="M0 0h52a23 23 0 0123 23v10a23 23 0 01-23 23H0V0z"
                                                    data-name="Rectangle 171"
                                                    transform="translate(3964 240)"
                                                ></path>
                                                <text
                                                    fill="#0a1032"
                                                    data-name="25"
                                                    fontFamily="HelveticaWorld-Bold, Helvetica World"
                                                    fontSize="47"
                                                    fontWeight="700"
                                                    transform="translate(3960 285)"
                                                >
                                                    <tspan x="0" y="0">
                                                        {/* 25 */}
                                                    </tspan>
                                                </text>

                                            </>
                                            :
                                            battery === "50"
                                                ?
                                                <>
                                                    <rect
                                                        width="103"
                                                        height="56"
                                                        fill="#fff"
                                                        data-name="Rectangle 170"
                                                        rx="23"
                                                        transform="translate(3936 240)"
                                                    ></rect>
                                                    <path
                                                        fill="#e3919d"
                                                        d="M0 0a6 6 0 016 6v2a6 6 0 01-6 6V0z"
                                                        data-name="Rectangle 172"
                                                        transform="translate(4040 262)"
                                                    ></path>
                                                    <path
                                                        fill="#e3919d"
                                                        d="M0 0h27a23 23 0 0123 23v10a23 23 0 01-23 23H0V0z"
                                                        data-name="Rectangle 171"
                                                        transform="translate(3989 240)"
                                                    ></path>
                                                    <text
                                                        fill="#0a1032"
                                                        data-name="50"
                                                        fontFamily="HelveticaWorld-Bold, Helvetica World"
                                                        fontSize="47"
                                                        fontWeight="700"
                                                        transform="translate(3960 285)"
                                                    >
                                                        <tspan x="0" y="0">
                                                            {/* 50 */}
                                                        </tspan>
                                                    </text>
                                                </>
                                                :
                                                <>
                                                    <rect
                                                        width="103"
                                                        height="56"
                                                        fill="#fff"
                                                        data-name="Rectangle 170"
                                                        rx="23"
                                                        transform="translate(3936 240)"
                                                    ></rect>
                                                    <path
                                                        fill="#e3919d"
                                                        d="M0 0a6 6 0 016 6v3a6 6 0 01-6 6V0z"
                                                        data-name="Rectangle 172"
                                                        transform="translate(4040 261)"
                                                    ></path>
                                                    <path
                                                        fill="#e3919d"
                                                        d="M0 0h3a23 23 0 0123 23v10A23 23 0 013 56H0V0z"
                                                        data-name="Rectangle 171"
                                                        transform="translate(4013 240)"
                                                    ></path>
                                                    <text
                                                        fill="#0a1032"
                                                        data-name="78"
                                                        fontFamily="HelveticaWorld-Bold, Helvetica World"
                                                        fontSize="47"
                                                        fontWeight="700"
                                                        transform="translate(3960 284)"
                                                    >
                                                        <tspan x="0" y="0">
                                                            {/* 78 */}
                                                        </tspan>
                                                    </text>
                                                </>
                                    }


                                    {
                                        network === "strong"
                                            ?
                                            <g fill="#fff" data-name="Group 334" transform="translate(0 -101)">
                                                <rect
                                                    width="12"
                                                    height="17"
                                                    data-name="Rectangle 35"
                                                    rx="2"
                                                    transform="translate(3723 376)"
                                                ></rect>
                                                <rect
                                                    width="14"
                                                    height="26"
                                                    data-name="Rectangle 36"
                                                    rx="2"
                                                    transform="translate(3745 367)"
                                                ></rect>
                                                <rect
                                                    width="12"
                                                    height="38"
                                                    data-name="Rectangle 37"
                                                    rx="2"
                                                    transform="translate(3768 355)"
                                                ></rect>
                                                <rect
                                                    width="12"
                                                    height="50"
                                                    data-name="Rectangle 38"
                                                    rx="2"
                                                    transform="translate(3791 343)"
                                                ></rect>
                                            </g>
                                            :
                                            network === "low"
                                                ?
                                                <g data-name="Group 333" transform="translate(0 64)">
                                                    <rect
                                                        width="12"
                                                        height="17"
                                                        fill="#fff"
                                                        data-name="Rectangle 35"
                                                        rx="2"
                                                        transform="translate(3723 212)"
                                                    ></rect>
                                                    <rect
                                                        width="14"
                                                        height="29"
                                                        fill="#e3919d"
                                                        data-name="Rectangle 36"
                                                        rx="2"
                                                        transform="translate(3745 200)"
                                                    ></rect>
                                                    <rect
                                                        width="12"
                                                        height="38"
                                                        fill="#e3919d"
                                                        data-name="Rectangle 37"
                                                        rx="2"
                                                        transform="translate(3768 191)"
                                                    ></rect>
                                                    <rect
                                                        width="12"
                                                        height="50"
                                                        fill="#e3919d"
                                                        data-name="Rectangle 38"
                                                        rx="2"
                                                        transform="translate(3791 179)"
                                                    ></rect>
                                                </g>
                                                :
                                                <>
                                                    <rect
                                                        width="12"
                                                        height="18"
                                                        fill="#fff"
                                                        data-name="Rectangle 35"
                                                        rx="2"
                                                        transform="translate(3722 274)"
                                                    ></rect>
                                                    <rect
                                                        width="14"
                                                        height="27"
                                                        fill="#fff"
                                                        data-name="Rectangle 36"
                                                        rx="2"
                                                        transform="translate(3745 265)"
                                                    ></rect>
                                                    <rect
                                                        width="14"
                                                        height="39"
                                                        fill="#e3919d"
                                                        data-name="Rectangle 37"
                                                        rx="2"
                                                        transform="translate(3768 253)"
                                                    ></rect>
                                                    <rect
                                                        width="12"
                                                        height="52"
                                                        fill="#e3919d"
                                                        data-name="Rectangle 38"
                                                        rx="2"
                                                        transform="translate(3793 240)"
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
                                                fontSize="53"
                                                fontWeight="600"
                                                transform="translate(3835 288)"
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
                                                    fontSize="53"
                                                    fontWeight="600"
                                                    transform="translate(3835 286)"
                                                >
                                                    <tspan x="0" y="0">
                                                        5G
                                                    </tspan>
                                                </text>
                                                :
                                                <>
                                                    <path
                                                        fill="#fff"
                                                        d="M100.484 192a53.985 53.985 0 00-36.172 14.42 1.3 1.3 0 00-.049 1.862l4.36 4.556a1.341 1.341 0 001.894.049 43.871 43.871 0 0129.983-11.709 43.871 43.871 0 0129.982 11.709 1.341 1.341 0 001.894-.049l4.36-4.556a1.3 1.3 0 00-.049-1.862A54.13 54.13 0 00100.484 192z"
                                                        data-name="Path 7"
                                                        transform="translate(3768.117 49.902)"
                                                    ></path>
                                                    <path
                                                        fill="#fff"
                                                        d="M221.945 433.227l4.67 4.621a1.339 1.339 0 001.829.049 25.4 25.4 0 0133.608 0 1.339 1.339 0 001.829-.049l4.67-4.621a1.3 1.3 0 00-.049-1.911 34.825 34.825 0 00-46.541 0 1.331 1.331 0 00-.016 1.911zm23.32 7.626a13.306 13.306 0 00-9.7 4.164 1.306 1.306 0 00.033 1.829l8.72 8.606a1.34 1.34 0 001.894 0l8.72-8.606a1.306 1.306 0 00.033-1.829 13.369 13.369 0 00-9.7-4.164z"
                                                        data-name="Path 8"
                                                        transform="translate(3623.336 -161.685)"
                                                    ></path>
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
                        <label>Available Funds</label>
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
                            value={data.date1}
                            name="date1"
                            onChange={(e) => onChangeHandler(e)}
                        />
                    </div>
                    <div className="global_form_inner">
                        <label>E-Transfer</label>
                        <input
                            type="text"
                            value={data.amount1}
                            name="amount1"
                            onChange={(e) => onChangeHandler(e)}
                        />
                        <input
                            type="text"
                            value={data.amount1Alt}
                            name="amount1Alt"
                            onChange={(e) => onChangeHandler(e)}
                        />
                        <input
                            type="text"
                            value={data.amount2}
                            name="amount2"
                            onChange={(e) => onChangeHandler(e)}
                        />
                        <input
                            type="text"
                            value={data.amount2Alt}
                            name="amount2Alt"
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

export default SeventyOnePage;