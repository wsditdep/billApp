import React, { useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import { write } from 'clipboard-polyfill';
import "../../assets/styles/secondpage.scss";
import { ToastContainer, toast } from 'react-toastify';

const FiftyTwoPage = () => {
    const screenshotRef = useRef(null);

    const [data, setData] = useState({
        time: "5:59",
        welcome: "Good evening, Safa",
        price: "$7,993.16",
        sectionPrice: "$0.660000",
        sectionNote: "Tap to add funds",
    });

    const [imageDimension, setImageDimension] = useState("167");

    const [network, setNetwork] = useState("strong");
    const [net, setNet] = useState("5G");
    const [battery, setBattery] = useState("78");

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
                    <h3>PREVIEW - <span>Mobile 52</span></h3>
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
                                viewBox="0 0 1932 4183"
                            >
                                <defs>
                                    <pattern
                                        id="pattern"
                                        width="100%"
                                        height="100%"
                                        preserveAspectRatio="none"
                                        viewBox="0 0 362 588"
                                    >
                                        <image
                                            width="362"
                                            height="588"
                                            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWoAAAJMCAYAAADTxexVAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RTk1NTRBNzk0MzM4MTFFNzlBNTZCQTJGQjU5Q0U4QTYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RTk1NTRBN0E0MzM4MTFFNzlBNTZCQTJGQjU5Q0U4QTYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpFOTU1NEE3NzQzMzgxMUU3OUE1NkJBMkZCNTlDRThBNiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpFOTU1NEE3ODQzMzgxMUU3OUE1NkJBMkZCNTlDRThBNiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pn0eVdcAADwrSURBVHja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"
                                        ></image>
                                    </pattern>
                                </defs>
                                <g data-name="Group 261" transform="translate(-2836 -107)">
                                    <g data-name="Group 260">
                                        <g data-name="Group 259">
                                            <g data-name="Group 258">
                                                <g data-name="Group 256">
                                                    <path
                                                        fill="#141831"
                                                        d="M0 0H1932V4183H0z"
                                                        data-name="Rectangle 336"
                                                        transform="translate(2836 107)"
                                                    ></path>
                                                    <text
                                                        fill="#9196aa"
                                                        data-name="Good evening, Ziphora"
                                                        fontFamily="Roboto-Medium, Roboto"
                                                        fontSize="70"
                                                        fontWeight="500"
                                                        letterSpacing=".14em"
                                                        transform="translate(3433 426)"
                                                    >
                                                        <tspan x="-448.496" y="0">
                                                            {data.welcome}
                                                        </tspan>
                                                    </text>
                                                    <text
                                                        fill="#2ee1b9"
                                                        data-name="Total portfolio value"
                                                        fontFamily="Roboto-Regular, Roboto"
                                                        fontSize="78"
                                                        transform="translate(3331 763)"
                                                    >
                                                        <tspan x="-345.763" y="0">
                                                            Total portfolio value
                                                        </tspan>
                                                    </text>
                                                    <text
                                                        fill="#fff"
                                                        data-name="$7,993.16"
                                                        fontFamily="Roboto-Bold, Roboto"
                                                        fontSize="112"
                                                        fontWeight="700"
                                                        transform="translate(3244 915)"
                                                    >
                                                        <tspan x="-254.844" y="0">
                                                            {data.price}
                                                        </tspan>
                                                    </text>
                                                    <text
                                                        fill="#e8e8e8"
                                                        data-name="7:49"
                                                        fontFamily="Roboto-Bold, Roboto"
                                                        fontSize="81"
                                                        fontWeight="700"
                                                        letterSpacing=".02em"
                                                        transform="translate(3192 251)"
                                                    >
                                                        <tspan x="-83.568" y="0">
                                                            {data.time}
                                                        </tspan>
                                                    </text>
                                                    <circle
                                                        cx="116.5"
                                                        cy="116.5"
                                                        r="116.5"
                                                        fill="#172c3f"
                                                        data-name="Ellipse 59"
                                                        transform="translate(3107 1120)"
                                                    ></circle>
                                                    <circle
                                                        cx="116.5"
                                                        cy="116.5"
                                                        r="116.5"
                                                        fill="#172c3f"
                                                        data-name="Ellipse 60"
                                                        transform="translate(3496 1120)"
                                                    ></circle>
                                                    <circle
                                                        cx="116.5"
                                                        cy="116.5"
                                                        r="116.5"
                                                        fill="#172c3f"
                                                        data-name="Ellipse 65"
                                                        transform="translate(3886 1120)"
                                                    ></circle>
                                                    <circle
                                                        cx="116.5"
                                                        cy="116.5"
                                                        r="116.5"
                                                        fill="#172c3f"
                                                        data-name="Ellipse 66"
                                                        transform="translate(4278 1120)"
                                                    ></circle>
                                                    <g
                                                        fill="none"
                                                        stroke="#2ac7a7"
                                                        strokeWidth="7"
                                                        data-name="Rectangle 337"
                                                    >
                                                        <path
                                                            stroke="none"
                                                            d="M0 0h82v29a12 12 0 01-12 12H12A12 12 0 010 29V0z"
                                                            transform="translate(3182.5 1240.25)"
                                                        ></path>
                                                        <path
                                                            d="M3.5 3.5h75V29a8.5 8.5 0 01-8.5 8.5H12A8.5 8.5 0 013.5 29V3.5h0z"
                                                            transform="translate(3182.5 1240.25)"
                                                        ></path>
                                                    </g>
                                                    <path
                                                        fill="#172c3f"
                                                        d="M0 0H68V19H0z"
                                                        data-name="Rectangle 338"
                                                        transform="translate(3189.5 1230.25)"
                                                    ></path>
                                                    <path
                                                        fill="#2ac7a7"
                                                        d="M32.231 4.134L8.595 26.776l24.3 23.635-4.463 3.967L0 26.776 9.318 18 28.429 0z"
                                                        data-name="Path 15"
                                                        transform="rotate(-90 2221.015 -975.766)"
                                                    ></path>
                                                    <path
                                                        fill="#2ac7a7"
                                                        d="M0 0H46.702V6.054H0z"
                                                        data-name="Rectangle 72"
                                                        transform="rotate(-90 2229.368 -990.916)"
                                                    ></path>
                                                    <g
                                                        fill="none"
                                                        stroke="#2ac7a7"
                                                        strokeWidth="6"
                                                        data-name="Ellipse 61"
                                                        transform="translate(3560 1183)"
                                                    >
                                                        <circle cx="52.5" cy="52.5" r="52.5" stroke="none"></circle>
                                                        <circle cx="52.5" cy="52.5" r="49.5"></circle>
                                                    </g>
                                                    <text
                                                        fill="#2ee1b9"
                                                        data-name="+"
                                                        fontFamily="Roboto-Regular, Roboto"
                                                        fontSize="89"
                                                        transform="translate(3613 1267)"
                                                    >
                                                        <tspan x="-25.227" y="0">
                                                            +
                                                        </tspan>
                                                    </text>
                                                    <rect
                                                        width="82"
                                                        height="83"
                                                        fill="#172c3f"
                                                        data-name="Rectangle 339"
                                                        rx="24"
                                                        transform="translate(3617 1151)"
                                                    ></rect>
                                                    <circle
                                                        cx="5"
                                                        cy="5"
                                                        r="5"
                                                        fill="#2ac7a7"
                                                        data-name="Ellipse 62"
                                                        transform="translate(3657 1215)"
                                                    ></circle>
                                                    <circle
                                                        cx="5"
                                                        cy="5"
                                                        r="5"
                                                        fill="#2ac7a7"
                                                        data-name="Ellipse 63"
                                                        transform="translate(3648 1194)"
                                                    ></circle>
                                                    <path
                                                        fill="#172c3f"
                                                        d="M0 0H18V29H0z"
                                                        data-name="Rectangle 340"
                                                        transform="translate(3602 1167)"
                                                    ></path>
                                                    <circle
                                                        cx="5"
                                                        cy="5"
                                                        r="5"
                                                        fill="#2ac7a7"
                                                        data-name="Ellipse 64"
                                                        transform="translate(3629 1182)"
                                                    ></circle>
                                                    <path
                                                        fill="#2ac7a7"
                                                        d="M11.559 0l11.56 19.816H0z"
                                                        data-name="Polygon 5"
                                                        transform="rotate(-31 3921.97 -5877.527)"
                                                    ></path>
                                                    <path
                                                        fill="#2ac7a7"
                                                        d="M32.231 4.134L8.595 26.776l24.3 23.635-4.463 3.967L0 26.776 9.318 18 28.429 0z"
                                                        data-name="Path 15"
                                                        transform="rotate(-90 2221.015 -975.766)"
                                                    ></path>
                                                    <path
                                                        fill="#2ac7a7"
                                                        d="M0 0H46.702V6.054H0z"
                                                        data-name="Rectangle 72"
                                                        transform="rotate(-90 2229.368 -990.916)"
                                                    ></path>
                                                    <path
                                                        fill="#2ac7a7"
                                                        d="M32.231 4.134L8.595 26.776l24.3 23.635-4.463 3.967L0 26.776 9.318 18 28.429 0z"
                                                        data-name="Path 15"
                                                        transform="rotate(180 2025.86 620.69)"
                                                    ></path>
                                                    <path
                                                        fill="#2ac7a7"
                                                        d="M0 0H53.723V6.054H0z"
                                                        data-name="Rectangle 72"
                                                        transform="rotate(180 2022.461 608.938)"
                                                    ></path>
                                                    <path
                                                        fill="#2ac7a7"
                                                        d="M32.231 50.244L8.595 27.6l24.3-23.635L28.429 0 0 27.6l9.318 8.777 19.111 18z"
                                                        data-name="Path 15"
                                                        transform="translate(3958.201 1232)"
                                                    ></path>
                                                    <path
                                                        fill="#2ac7a7"
                                                        d="M0 0H53.723V6.054H0z"
                                                        data-name="Rectangle 72"
                                                        transform="translate(3964.999 1256.82)"
                                                    ></path>
                                                    <g
                                                        fill="none"
                                                        stroke="#c8cacf"
                                                        strokeWidth="6"
                                                        data-name="Ellipse 67"
                                                        transform="translate(4576 373)"
                                                    >
                                                        <circle cx="20" cy="20" r="20" stroke="none"></circle>
                                                        <circle cx="20" cy="20" r="17"></circle>
                                                    </g>
                                                    <g
                                                        fill="none"
                                                        stroke="#c8cacf"
                                                        strokeWidth="6"
                                                        data-name="Rectangle 341"
                                                    >
                                                        <path
                                                            stroke="none"
                                                            d="M16 0h46a16 16 0 0116 16v24H0V16A16 16 0 0116 0z"
                                                            transform="translate(4558 420)"
                                                        ></path>
                                                        <path
                                                            d="M16 3h46a13 13 0 0113 13v21h0H3h0V16A13 13 0 0116 3z"
                                                            transform="translate(4558 420)"
                                                        ></path>
                                                    </g>
                                                    <path
                                                        fill="#141831"
                                                        d="M0 0H92V17H0z"
                                                        data-name="Rectangle 342"
                                                        transform="translate(4552 452)"
                                                    ></path>
                                                    <circle
                                                        cx="13.5"
                                                        cy="13.5"
                                                        r="13.5"
                                                        fill="#8c8cbe"
                                                        data-name="Ellipse 68"
                                                        transform="translate(4633 351)"
                                                    ></circle>
                                                    <text
                                                        fill="#2ee1b9"
                                                        data-name="+"
                                                        fontFamily="Roboto-Regular, Roboto"
                                                        fontSize="89"
                                                        transform="translate(3613 1267)"
                                                    >
                                                        <tspan x="-25.227" y="0">
                                                            +
                                                        </tspan>
                                                    </text>
                                                    <g
                                                        fill="none"
                                                        stroke="#2ac7a7"
                                                        strokeWidth="7"
                                                        data-name="Rectangle 343"
                                                    >
                                                        <path
                                                            stroke="none"
                                                            d="M26 0a26 26 0 0126 26v39H0V26A26 26 0 0126 0z"
                                                            transform="translate(4368 1200.25)"
                                                        ></path>
                                                        <path
                                                            d="M26 3.5h0A22.5 22.5 0 0148.5 26v35.5h0-45 0V26A22.5 22.5 0 0126 3.5z"
                                                            transform="translate(4368 1200.25)"
                                                        ></path>
                                                    </g>
                                                    <circle
                                                        cx="29"
                                                        cy="29"
                                                        r="29"
                                                        fill="#172c3f"
                                                        data-name="Ellipse 70"
                                                        transform="translate(4403 1197.25)"
                                                    ></circle>
                                                    <path
                                                        fill="none"
                                                        stroke="#2ac7a7"
                                                        strokeWidth="7"
                                                        d="M0 0L63 0"
                                                        data-name="Line 19"
                                                        transform="translate(4362 1263.25)"
                                                    ></path>
                                                    <rect
                                                        width="14"
                                                        height="13"
                                                        fill="#2ac7a7"
                                                        data-name="Rectangle 344"
                                                        rx="4"
                                                        transform="translate(4387 1193.25)"
                                                    ></rect>
                                                    <circle
                                                        cx="6.5"
                                                        cy="6.5"
                                                        r="6.5"
                                                        fill="#2ac7a7"
                                                        data-name="Ellipse 69"
                                                        transform="translate(4387 1268.25)"
                                                    ></circle>
                                                    <text
                                                        fill="#2ee1b9"
                                                        data-name="+"
                                                        fontFamily="Roboto-Regular, Roboto"
                                                        fontSize="62"
                                                        transform="translate(4432 1245.25)"
                                                    >
                                                        <tspan x="-17.574" y="0">
                                                            +
                                                        </tspan>
                                                    </text>
                                                    <text
                                                        fill="rgba(46,225,185,0.73)"
                                                        data-name="Fund via"
                                                        fontFamily="Roboto-Regular, Roboto"
                                                        fontSize="62"
                                                        transform="translate(3229 1456)"
                                                    >
                                                        <tspan x="-115.554" y="0">
                                                            Fund via
                                                        </tspan>
                                                    </text>
                                                    <text
                                                        fill="rgba(46,225,185,0.73)"
                                                        data-name="Place a"
                                                        fontFamily="Roboto-Regular, Roboto"
                                                        fontSize="62"
                                                        transform="translate(4005 1456)"
                                                    >
                                                        <tspan x="-101.128" y="0">
                                                            Place a
                                                        </tspan>
                                                    </text>
                                                    <text
                                                        fill="rgba(46,225,185,0.73)"
                                                        data-name="Create a"
                                                        fontFamily="Roboto-Regular, Roboto"
                                                        fontSize="62"
                                                        transform="translate(4390 1456)"
                                                    >
                                                        <tspan x="-114.751" y="0">
                                                            Create a
                                                        </tspan>
                                                    </text>
                                                    <text
                                                        fill="rgba(46,225,185,0.73)"
                                                        fontFamily="Roboto-Regular, Roboto"
                                                        fontSize="62"
                                                        transform="translate(3613 1456)"
                                                    >
                                                        <tspan x="-131.826" y="0">
                                                            Recurring
                                                        </tspan>
                                                    </text>
                                                    <text
                                                        fill="rgba(46,225,185,0.73)"
                                                        fontFamily="Roboto-Regular, Roboto"
                                                        fontSize="62"
                                                        transform="translate(4003 1538)"
                                                    >
                                                        <tspan x="-70.779" y="0">
                                                            trade
                                                        </tspan>
                                                    </text>
                                                    <text
                                                        fill="rgba(46,225,185,0.73)"
                                                        data-name="price alert"
                                                        fontFamily="Roboto-Regular, Roboto"
                                                        fontSize="62"
                                                        transform="translate(4395 1540)"
                                                    >
                                                        <tspan x="-137.911" y="0">
                                                            price alert
                                                        </tspan>
                                                    </text>
                                                    <text
                                                        fill="rgba(46,225,185,0.73)"
                                                        fontFamily="Roboto-Regular, Roboto"
                                                        fontSize="62"
                                                        transform="translate(3613 1538)"
                                                    >
                                                        <tspan x="-49.149" y="0">
                                                            buy
                                                        </tspan>
                                                    </text>
                                                    <text
                                                        fill="rgba(46,225,185,0.73)"
                                                        fontFamily="Roboto-Regular, Roboto"
                                                        fontSize="62"
                                                        transform="translate(3224 1538)"
                                                    >
                                                        <tspan x="-139.485" y="0">
                                                            e-Transfer
                                                        </tspan>
                                                    </text>
                                                    <rect
                                                        width="1680"
                                                        height="397"
                                                        fill="#20203a"
                                                        data-name="Rectangle 345"
                                                        rx="43"
                                                        transform="translate(2962 1687)"
                                                    ></rect>
                                                    <text
                                                        fill="#f6f6f6"
                                                        data-name="in the last week"
                                                        fontFamily="Roboto-Regular, Roboto"
                                                        fontSize="62"
                                                        transform="translate(3703 1865.5)"
                                                    >
                                                        <tspan x="-209.625" y="0">
                                                            in the last week
                                                        </tspan>
                                                    </text>
                                                    <text
                                                        fill="#ea4a71"
                                                        data-name="1.3%"
                                                        fontFamily="Roboto-Regular, Roboto"
                                                        fontSize="56"
                                                        transform="translate(3402 1865.5)"
                                                    >
                                                        <tspan x="-75.045" y="0">
                                                            1.30%
                                                        </tspan>
                                                    </text>
                                                    <text
                                                        fill="#d6d6d6"
                                                        data-name="See detailed performance"
                                                        fontFamily="Roboto-Light, Roboto"
                                                        fontSize="57"
                                                        fontWeight="300"
                                                        transform="translate(3615 1952.5)"
                                                    >
                                                        <tspan x="-319.386" y="0">
                                                            See detailed performance
                                                        </tspan>
                                                    </text>
                                                    <path
                                                        fill="none"
                                                        stroke="#2ac7a7"
                                                        strokeWidth="5"
                                                        d="M4537.6 1852.9l27.8 29.4-27.8 27.2"
                                                        data-name="Path 106"
                                                    ></path>
                                                    <path
                                                        fill="#ea4a71"
                                                        d="M13 0l13 22H0z"
                                                        data-name="Polygon 6"
                                                        transform="rotate(60 74.606 3785.705)"
                                                    ></path>
                                                    <path
                                                        fill="#2ac7a7"
                                                        d="M12.5 0L25 21H0z"
                                                        data-name="Polygon 7"
                                                        transform="translate(4372.974 3302.5)"
                                                    ></path>
                                                    <path
                                                        fill="#20203a"
                                                        d="M51 0h39v395H51a51 51 0 01-51-51V51A51 51 0 0151 0z"
                                                        data-name="Rectangle 346"
                                                        transform="translate(4678 1689)"
                                                    ></path>
                                                    <rect
                                                        width="66"
                                                        height="23"
                                                        fill="#2ac7a7"
                                                        data-name="Rectangle 347"
                                                        rx="10"
                                                        transform="translate(3650 2168)"
                                                    ></rect>
                                                    <circle
                                                        cx="13"
                                                        cy="13"
                                                        r="13"
                                                        fill="#7b8094"
                                                        data-name="Ellipse 71"
                                                        transform="translate(3751 2168)"
                                                    ></circle>
                                                    <circle
                                                        cx="13"
                                                        cy="13"
                                                        r="13"
                                                        fill="#7b8094"
                                                        data-name="Ellipse 72"
                                                        transform="translate(3809 2168)"
                                                    ></circle>
                                                    <circle
                                                        cx="13"
                                                        cy="13"
                                                        r="13"
                                                        fill="#7b8094"
                                                        data-name="Ellipse 73"
                                                        transform="translate(3867 2168)"
                                                    ></circle>
                                                    <circle
                                                        cx="13"
                                                        cy="13"
                                                        r="13"
                                                        fill="#7b8094"
                                                        data-name="Ellipse 74"
                                                        transform="translate(3928 2168)"
                                                    ></circle>
                                                    <text
                                                        fill="#797c8f"
                                                        data-name="Your holdings"
                                                        fontFamily="Roboto-Regular, Roboto"
                                                        fontSize="74"
                                                        transform="translate(3210 2365)"
                                                    >
                                                        <tspan x="-224.782" y="0">
                                                            Your holdings
                                                        </tspan>
                                                    </text>
                                                    <text
                                                        fill="#797c8f"
                                                        fontFamily="Roboto-Regular, Roboto"
                                                        fontSize="74"
                                                        transform="translate(3143 3631)"
                                                    >
                                                        <tspan x="-153.312" y="0">
                                                            Watchlist
                                                        </tspan>
                                                    </text>
                                                    <path
                                                        fill="#2ac7a7"
                                                        d="M-11312.333 11882.333v-43h-5.667v-5.666l36.5-31.167 37 31.167v5.666h-5.167v43z"
                                                        data-name="Path 107"
                                                        transform="translate(14301 -7882)"
                                                    ></path>
                                                    <path
                                                        fill="#9297ab"
                                                        d="M0 0H8V71H0z"
                                                        data-name="Rectangle 348"
                                                        transform="translate(3445 3929)"
                                                    ></path>
                                                    <path
                                                        fill="#9297ab"
                                                        d="M0 0H8V51H0z"
                                                        data-name="Rectangle 349"
                                                        transform="translate(3418 3949)"
                                                    ></path>
                                                    <path
                                                        fill="#9297ab"
                                                        d="M0 0H8V36H0z"
                                                        data-name="Rectangle 350"
                                                        transform="translate(3391 3964)"
                                                    ></path>
                                                    <text
                                                        fill="#35ddb9"
                                                        fontFamily="Roboto-Regular, Roboto"
                                                        fontSize="68"
                                                        transform="translate(3019 4081)"
                                                    >
                                                        <tspan x="-91.441" y="0">
                                                            Home
                                                        </tspan>
                                                    </text>
                                                    <text
                                                        fill="#9297ab"
                                                        fontFamily="Roboto-Regular, Roboto"
                                                        fontSize="68"
                                                        transform="translate(3422 4081)"
                                                    >
                                                        <tspan x="-105.702" y="0">
                                                            Market
                                                        </tspan>
                                                    </text>
                                                    <text
                                                        fill="#9297ab"
                                                        fontFamily="Roboto-Regular, Roboto"
                                                        fontSize="68"
                                                        transform="translate(4148 4081)"
                                                    >
                                                        <tspan x="-68.083" y="0">
                                                            Earn
                                                        </tspan>
                                                    </text>
                                                    <text
                                                        fill="#9297ab"
                                                        fontFamily="Roboto-Regular, Roboto"
                                                        fontSize="68"
                                                        transform="translate(4548 4081)"
                                                    >
                                                        <tspan x="-125.591" y="0">
                                                            Transfer
                                                        </tspan>
                                                    </text>
                                                    <circle
                                                        cx="117.5"
                                                        cy="117.5"
                                                        r="117.5"
                                                        fill="#2ac7a7"
                                                        data-name="Ellipse 75"
                                                        transform="translate(3667 3857)"
                                                    ></circle>
                                                    <path
                                                        fill="#333"
                                                        d="M29.587 3.795L7.89 24.58l22.3 21.7-4.1 3.641L0 24.58l8.554-8.057L26.1 0z"
                                                        data-name="Path 15"
                                                        transform="rotate(180 1918.228 1990.903)"
                                                    ></path>
                                                    <path
                                                        fill="#333"
                                                        d="M0 0H49.316V5.558H0z"
                                                        data-name="Rectangle 72"
                                                        transform="rotate(180 1915.108 1980.115)"
                                                    ></path>
                                                    <path
                                                        fill="#9297ab"
                                                        d="M29.587 3.795L7.89 24.58l22.3 21.7-4.1 3.641L0 24.58l8.554-8.057L26.1 0z"
                                                        data-name="Path 15"
                                                        transform="rotate(132 1427.18 2998.962)"
                                                    ></path>
                                                    <path
                                                        fill="#9297ab"
                                                        d="M0 0H49.316V5.558H0z"
                                                        data-name="Rectangle 72"
                                                        transform="rotate(132 1419.258 2989.564)"
                                                    ></path>
                                                    <path
                                                        fill="#9297ab"
                                                        d="M29.587 46.123L7.89 25.338l22.3-21.7L26.1 0 0 25.338l8.554 8.057L26.1 49.918z"
                                                        data-name="Path 15"
                                                        transform="rotate(-49 6606.244 -2939.488)"
                                                    ></path>
                                                    <path
                                                        fill="#9297ab"
                                                        d="M0 0H49.316V5.558H0z"
                                                        data-name="Rectangle 72"
                                                        transform="rotate(-49 6628.123 -2957.727)"
                                                    ></path>
                                                    <path
                                                        fill="#333"
                                                        d="M29.587 46.122L7.89 25.337l22.3-21.7L26.1 0 0 25.337l8.554 8.057L26.1 49.917z"
                                                        data-name="Path 15"
                                                        transform="translate(3731.723 3963.5)"
                                                    ></path>
                                                    <path
                                                        fill="#333"
                                                        d="M0 0H49.316V5.558H0z"
                                                        data-name="Rectangle 72"
                                                        transform="translate(3737.963 3986.285)"
                                                    ></path>
                                                    <g
                                                        fill="none"
                                                        stroke="#9297ab"
                                                        strokeWidth="6"
                                                        data-name="Ellipse 78"
                                                        transform="translate(4109 3956)"
                                                    >
                                                        <circle cx="25.5" cy="25.5" r="25.5" stroke="none"></circle>
                                                        <circle cx="25.5" cy="25.5" r="22.5"></circle>
                                                    </g>
                                                    <g
                                                        fill="#141831"
                                                        stroke="#141831"
                                                        strokeWidth="6"
                                                        data-name="Ellipse 77"
                                                        transform="translate(4128 3916)"
                                                    >
                                                        <circle cx="36.5" cy="36.5" r="36.5" stroke="none"></circle>
                                                        <circle cx="36.5" cy="36.5" r="33.5" fill="none"></circle>
                                                    </g>
                                                    <g
                                                        fill="none"
                                                        stroke="#9297ab"
                                                        strokeWidth="6"
                                                        data-name="Ellipse 76"
                                                        transform="translate(4131 3920)"
                                                    >
                                                        <circle cx="33" cy="33" r="33" stroke="none"></circle>
                                                        <circle cx="33" cy="33" r="30"></circle>
                                                    </g>
                                                    <rect
                                                        width="683"
                                                        height="24"
                                                        fill="#fff"
                                                        data-name="Rectangle 351"
                                                        rx="12"
                                                        transform="translate(3445 4229)"
                                                    ></rect>
                                                    <g
                                                        fill="none"
                                                        stroke="#30304d"
                                                        strokeWidth="5"
                                                        data-name="Rectangle 352"
                                                        transform="translate(2985 2448)"
                                                    >
                                                        <rect width="1642" height="944" stroke="none" rx="33"></rect>
                                                        <rect
                                                            width="1637"
                                                            height="939"
                                                            x="2.5"
                                                            y="2.5"
                                                            rx="30.5"
                                                        ></rect>
                                                    </g>
                                                    <path
                                                        fill="#30304d"
                                                        d="M0 0H1638V6H0z"
                                                        data-name="Rectangle 353"
                                                        transform="translate(2989 2956)"
                                                    ></path>
                                                    <path
                                                        fill="#30304d"
                                                        d="M0 0H1638V6H0z"
                                                        data-name="Rectangle 354"
                                                        transform="translate(2989 2660)"
                                                    ></path>
                                                    <path
                                                        fill="#2ac7a7"
                                                        d="M0 0H408V12H0z"
                                                        data-name="Rectangle 355"
                                                        transform="translate(2990 2654)"
                                                    ></path>
                                                    <path
                                                        fill="none"
                                                        stroke="#2ac7a7"
                                                        strokeWidth="6"
                                                        d="M3161.195 2535.75h0c-.25 0-2.095 8.25 9.75 8.25h58.5v40.5s1 8.5-12.5 8-59 0-59 0-10.5.5-10.5-13v-49s-1-11 10.5-10.5 54.5 0 54.5 0v26.75"
                                                        data-name="Path 109"
                                                    ></path>
                                                    <path
                                                        fill="#141831"
                                                        d="M0 0H13V9H0z"
                                                        data-name="Rectangle 356"
                                                        transform="translate(3155.945 2528)"
                                                    ></path>
                                                    <path
                                                        fill="none"
                                                        stroke="#fcffff"
                                                        strokeWidth="6"
                                                        d="M3555.612 2579.719c2-2.333 28.666-28.666 28.666-28.666l18.667 18 32.333-33.334"
                                                        data-name="Path 110"
                                                    ></path>
                                                    <path
                                                        fill="none"
                                                        stroke="#fcffff"
                                                        strokeWidth="6"
                                                        d="M3616.145 2532.786h21.8v22"
                                                        data-name="Path 111"
                                                    ></path>
                                                    <path
                                                        fill="none"
                                                        stroke="#fcffff"
                                                        strokeWidth="6"
                                                        d="M3961.278 2556.252h16.334l14.333-35.919 22 69.667 13.667-33.748h19"
                                                        data-name="Path 112"
                                                    ></path>
                                                    <g
                                                        fill="none"
                                                        stroke="#fcfeff"
                                                        strokeWidth="6"
                                                        data-name="Rectangle 357"
                                                        transform="translate(4369.945 2515)"
                                                    >
                                                        <rect width="85" height="85" stroke="none" rx="42.5"></rect>
                                                        <rect width="79" height="79" x="3" y="3" rx="39.5"></rect>
                                                    </g>
                                                    <path
                                                        fill="none"
                                                        stroke="#fcfeff"
                                                        strokeWidth="5.998"
                                                        d="M4453.905 2552.431c.962-33.174-33.491-37.581-33.491-37.581l-1.274 36.363z"
                                                        data-name="Path 113"
                                                    ></path>
                                                    <path
                                                        fill="none"
                                                        stroke="#141831"
                                                        strokeWidth="6"
                                                        d="M4454.3 2561.27c1.84-39.682-39.301-45.671-39.301-45.671l-2.28 43.491z"
                                                        data-name="Path 115"
                                                    ></path>
                                                    <path
                                                        fill="none"
                                                        stroke="#fcfeff"
                                                        strokeWidth="5.998"
                                                        d="M4454.905 2551.431c.962-33.174-33.491-37.581-33.491-37.581l-1.274 36.363z"
                                                        data-name="Path 114"
                                                    ></path>
                                                    <text
                                                        fill="#fefefe"
                                                        fontFamily="Roboto-Regular, Roboto"
                                                        fontSize="64"
                                                        transform="translate(3275 3247)"
                                                    >
                                                        <tspan x="-136.391" y="0">
                                                            Ethereum
                                                        </tspan>
                                                    </text>
                                                    <text
                                                        fill="#fefefe"
                                                        data-name="Canadian Dollars"
                                                        fontFamily="Roboto-Regular, Roboto"
                                                        fontSize="64"
                                                        transform="translate(3383 2811)"
                                                    >
                                                        <tspan x="-241.594" y="0">
                                                            Canadian Dollars
                                                        </tspan>
                                                    </text>
                                                    <text
                                                        fill="#fefefe"
                                                        data-name="$0.660000"
                                                        fontFamily="Roboto-Regular, Roboto"
                                                        fontSize="57"
                                                        transform="translate(4432 2804)"
                                                    >
                                                        <tspan x="136" y="0" textAnchor="end">
                                                            {data.sectionPrice}
                                                        </tspan>
                                                    </text>
                                                    <text
                                                        fill="#fefefe"
                                                        data-name="+$3.14"
                                                        fontFamily="Roboto-Regular, Roboto"
                                                        fontSize="57"
                                                        transform="translate(4480 3245)"
                                                    >
                                                        <tspan x="-87.671" y="0">
                                                            +$3.14
                                                        </tspan>
                                                    </text>
                                                    <text
                                                        fill="#2ac7a7"
                                                        data-name="Tap to add funds"
                                                        fontFamily="Roboto-Regular, Roboto"
                                                        fontSize="57"
                                                        transform="translate(4355 2894)"
                                                    >
                                                        <tspan x="218" y="0" textAnchor="end">
                                                            {data.sectionNote}
                                                        </tspan>
                                                    </text>
                                                    <text
                                                        fill="#9297ab"
                                                        fontFamily="Roboto-Regular, Roboto"
                                                        fontSize="64"
                                                        transform="translate(3201 3332)"
                                                    >
                                                        <tspan x="-60.406" y="0">
                                                            ETH
                                                        </tspan>
                                                    </text>
                                                    <text
                                                        fill="#9297ab"
                                                        fontFamily="Roboto-Regular, Roboto"
                                                        fontSize="64"
                                                        transform="translate(3203 2896)"
                                                    >
                                                        <tspan x="-62.688" y="0">
                                                            CAD
                                                        </tspan>
                                                    </text>
                                                    <text
                                                        fill="#9297ab"
                                                        fontFamily="Roboto-Regular, Roboto"
                                                        fontSize="52"
                                                        transform="translate(3193 3090)"
                                                    >
                                                        <tspan x="-52.406" y="0">
                                                            Coin
                                                        </tspan>
                                                    </text>
                                                    <text
                                                        fill="#2ac7a7"
                                                        data-name=".03%"
                                                        fontFamily="Roboto-Regular, Roboto"
                                                        fontSize="59"
                                                        transform="translate(4489 3333)"
                                                    >
                                                        <tspan x="-79.065" y="0">
                                                            0.03%
                                                        </tspan>
                                                    </text>
                                                    <text
                                                        fill="#9297ab"
                                                        fontFamily="Roboto-Regular, Roboto"
                                                        fontSize="54"
                                                        transform="translate(4461 3089)"
                                                    >
                                                        <tspan x="-218" y="0">
                                                            Profit / Losss
                                                        </tspan>
                                                    </text>
                                                    <path
                                                        fill="none"
                                                        stroke="#30304d"
                                                        strokeWidth="6"
                                                        d="M4579 3573l28 27-28 31"
                                                        data-name="Path 116"
                                                    ></path>
                                                    <circle
                                                        cx="70"
                                                        cy="70"
                                                        r="70"
                                                        fill="#f9b100"
                                                        data-name="Ellipse 79"
                                                        transform="translate(2920 2762)"
                                                    ></circle>
                                                    <text
                                                        fill="#fff"
                                                        data-name="$"
                                                        fontFamily="Roboto-Bold, Roboto"
                                                        fontSize="77"
                                                        fontWeight="700"
                                                        transform="translate(2990 2859)"
                                                    >
                                                        <tspan x="-22.089" y="0">
                                                            $
                                                        </tspan>
                                                    </text>
                                                    <circle
                                                        cx="70"
                                                        cy="70"
                                                        r="70"
                                                        fill="#3f55aa"
                                                        data-name="Ellipse 80"
                                                        transform="translate(2920 3197)"
                                                    ></circle>
                                                    {
                                                        battery === "50"
                                                            ?
                                                            <>
                                                                <rect
                                                                    width="119"
                                                                    height="65"
                                                                    fill="#fff"
                                                                    data-name="Rectangle 170"
                                                                    rx="23"
                                                                    transform="translate(4531 188)"
                                                                ></rect>
                                                                <path
                                                                    fill="#818d9d"
                                                                    d="M0 0a6 6 0 016 6v5a6 6 0 01-6 6V0z"
                                                                    data-name="Rectangle 172"
                                                                    transform="translate(4652 213)"
                                                                ></path>
                                                                <path
                                                                    fill="#818d9d"
                                                                    d="M0 0h34a23 23 0 0123 23v19a23 23 0 01-23 23H0V0z"
                                                                    data-name="Rectangle 171"
                                                                    transform="translate(4593 188)"
                                                                ></path>
                                                                <text
                                                                    fill="#0a1032"
                                                                    data-name="50"
                                                                    fontFamily="HelveticaWorld-Bold, Helvetica World"
                                                                    fontSize="55"
                                                                    fontWeight="700"
                                                                    transform="translate(4559 240)"
                                                                >
                                                                    <tspan x="0" y="0">
                                                                        50
                                                                    </tspan>
                                                                </text>
                                                            </>
                                                            :
                                                            battery === "78"
                                                                ?
                                                                <>
                                                                    <path
                                                                        fill="#30304d"
                                                                        d="M0 0H1642V6H0z"
                                                                        data-name="Rectangle 359"
                                                                        transform="translate(2985 3688)"
                                                                    ></path>
                                                                    <rect
                                                                        width="119"
                                                                        height="65"
                                                                        fill="#fff"
                                                                        data-name="Rectangle 170"
                                                                        rx="23"
                                                                        transform="translate(4531 188)"
                                                                    ></rect>
                                                                    <path
                                                                        fill="#818d9d"
                                                                        d="M0 0a6 6 0 016 6v6a6 6 0 01-6 6V0z"
                                                                        data-name="Rectangle 172"
                                                                        transform="translate(4652 212)"
                                                                    ></path>
                                                                    <path
                                                                        fill="#818d9d"
                                                                        d="M0 0h7a23 23 0 0123 23v19A23 23 0 017 65H0V0z"
                                                                        data-name="Rectangle 171"
                                                                        transform="translate(4620 188)"
                                                                    ></path>
                                                                    <text
                                                                        fill="#0a1032"
                                                                        data-name="78"
                                                                        fontFamily="HelveticaWorld-Bold, Helvetica World"
                                                                        fontSize="55"
                                                                        fontWeight="700"
                                                                        transform="translate(4559 239)"
                                                                    >
                                                                        <tspan x="0" y="0">
                                                                            78
                                                                        </tspan>
                                                                    </text>
                                                                </>
                                                                :
                                                                <>
                                                                    <rect
                                                                        width="119"
                                                                        height="65"
                                                                        fill="#fff"
                                                                        data-name="Rectangle 170"
                                                                        rx="23"
                                                                        transform="translate(4531 188)"
                                                                    ></rect>
                                                                    <path
                                                                        fill="#818d9d"
                                                                        d="M0 0a6 6 0 016 6v5a6 6 0 01-6 6V0z"
                                                                        data-name="Rectangle 172"
                                                                        transform="translate(4652 213)"
                                                                    ></path>
                                                                    <path
                                                                        fill="#818d9d"
                                                                        d="M0 0h63a23 23 0 0123 23v19a23 23 0 01-23 23H0V0z"
                                                                        data-name="Rectangle 171"
                                                                        transform="translate(4564 188)"
                                                                    ></path>
                                                                    <text
                                                                        fill="#0a1032"
                                                                        data-name="25"
                                                                        fontFamily="HelveticaWorld-Bold, Helvetica World"
                                                                        fontSize="55"
                                                                        fontWeight="700"
                                                                        transform="translate(4559 240)"
                                                                    >
                                                                        <tspan x="0" y="0">
                                                                            25
                                                                        </tspan>
                                                                    </text>
                                                                </>
                                                    }
                                                    {
                                                        network === "mid"
                                                            ?
                                                            <>
                                                                <rect
                                                                    width="14"
                                                                    height="21"
                                                                    fill="#fff"
                                                                    data-name="Rectangle 35"
                                                                    rx="2"
                                                                    transform="translate(4283 227)"
                                                                ></rect>
                                                                <rect
                                                                    width="16"
                                                                    height="31"
                                                                    fill="#fff"
                                                                    data-name="Rectangle 36"
                                                                    rx="2"
                                                                    transform="translate(4310 217)"
                                                                ></rect>
                                                                <rect
                                                                    width="16"
                                                                    height="45"
                                                                    fill="#384965"
                                                                    data-name="Rectangle 37"
                                                                    rx="2"
                                                                    transform="translate(4336 203)"
                                                                ></rect>
                                                                <rect
                                                                    width="14"
                                                                    height="60"
                                                                    fill="#384965"
                                                                    data-name="Rectangle 38"
                                                                    rx="2"
                                                                    transform="translate(4365 188)"
                                                                ></rect>
                                                            </>
                                                            :
                                                            network === "low"
                                                                ?
                                                                <>
                                                                    <rect
                                                                        width="14"
                                                                        height="20"
                                                                        fill="#fff"
                                                                        data-name="Rectangle 35"
                                                                        rx="2"
                                                                        transform="translate(4284 228)"
                                                                    ></rect>
                                                                    <rect
                                                                        width="16"
                                                                        height="30"
                                                                        fill="#384965"
                                                                        data-name="Rectangle 36"
                                                                        rx="2"
                                                                        transform="translate(4310 218)"
                                                                    ></rect>
                                                                    <rect
                                                                        width="14"
                                                                        height="44"
                                                                        fill="#384965"
                                                                        data-name="Rectangle 37"
                                                                        rx="2"
                                                                        transform="translate(4336 204)"
                                                                    ></rect>
                                                                    <rect
                                                                        width="14"
                                                                        height="58"
                                                                        fill="#384965"
                                                                        data-name="Rectangle 38"
                                                                        rx="2"
                                                                        transform="translate(4363 190)"
                                                                    ></rect>
                                                                </>
                                                                :
                                                                <>
                                                                    <rect
                                                                        width="14"
                                                                        height="20"
                                                                        fill="#fff"
                                                                        data-name="Rectangle 35"
                                                                        rx="2"
                                                                        transform="translate(4284 228)"
                                                                    ></rect>
                                                                    <rect
                                                                        width="16"
                                                                        height="30"
                                                                        fill="#fff"
                                                                        data-name="Rectangle 36"
                                                                        rx="2"
                                                                        transform="translate(4310 218)"
                                                                    ></rect>
                                                                    <rect
                                                                        width="14"
                                                                        height="44"
                                                                        fill="#fff"
                                                                        data-name="Rectangle 37"
                                                                        rx="2"
                                                                        transform="translate(4336 204)"
                                                                    ></rect>
                                                                    <rect
                                                                        width="14"
                                                                        height="58"
                                                                        fill="#fff"
                                                                        data-name="Rectangle 38"
                                                                        rx="2"
                                                                        transform="translate(4363 190)"
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
                                                                fontSize="62"
                                                                fontWeight="500"
                                                                transform="translate(4414 244)"
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
                                                                    fontSize="62"
                                                                    fontWeight="500"
                                                                    transform="translate(4414 242)"
                                                                >
                                                                    <tspan x="0" y="0">
                                                                        5G
                                                                    </tspan>
                                                                </text>
                                                                :
                                                                <>
                                                                    <path
                                                                        fill="#fff"
                                                                        d="M106.3 192a62.574 62.574 0 00-41.926 16.714 1.508 1.508 0 00-.057 2.158l5.054 5.281a1.554 1.554 0 002.2.057 50.851 50.851 0 0134.752-13.572 50.851 50.851 0 0134.752 13.572 1.554 1.554 0 002.2-.057l5.054-5.281a1.509 1.509 0 00-.057-2.158A62.741 62.741 0 00106.3 192z"
                                                                        data-name="Path 7"
                                                                        transform="translate(4346.619 -2.044)"
                                                                    ></path>
                                                                    <path
                                                                        fill="#fff"
                                                                        d="M222.008 434.95l5.414 5.357a1.552 1.552 0 002.12.057 29.443 29.443 0 0138.955 0 1.552 1.552 0 002.12-.057l5.414-5.357a1.512 1.512 0 00-.057-2.215 40.365 40.365 0 00-53.946 0 1.543 1.543 0 00-.02 2.215zm27.03 8.84a15.423 15.423 0 00-11.243 4.827 1.514 1.514 0 00.038 2.12l10.108 9.975a1.554 1.554 0 002.2 0l10.108-9.975a1.514 1.514 0 00.038-2.12 15.5 15.5 0 00-11.249-4.828z"
                                                                        data-name="Path 8"
                                                                        transform="translate(4203.886 -210.639)"
                                                                    ></path>
                                                                </>
                                                    }
                                                    <path
                                                        fill="url(#pattern)"
                                                        d="M0 0H52V84H0z"
                                                        transform="translate(2964 3226)"
                                                    ></path>
                                                    <path
                                                        fill="none"
                                                        stroke="#ea4a71"
                                                        strokeWidth="9"
                                                        d="M3039.668 1840l19.153 94.5H3221"
                                                        data-name="Path 130"
                                                    ></path>
                                                </g>
                                            </g>
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
                        <label>Username</label>
                        <input
                            type="text"
                            value={data.welcome}
                            name="welcome"
                            onChange={(e) => onChangeHandler(e)}
                        />
                    </div>
                    <div className="global_form_inner">
                        <label>Title</label>
                        <input
                            type="text"
                            value={data.price}
                            name="price"
                            onChange={(e) => onChangeHandler(e)}
                        />
                    </div>
                    <div className="global_form_inner">
                        <label>CAD</label>
                        <input
                            type="text"
                            value={data.sectionPrice}
                            name="sectionPrice"
                            onChange={(e) => onChangeHandler(e)}
                        />
                        <input
                            type="text"
                            value={data.sectionNote}
                            name="sectionNote"
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

export default FiftyTwoPage;