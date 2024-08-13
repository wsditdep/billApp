import React, { useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import { write } from 'clipboard-polyfill';
import "../../assets/styles/fourthpage.scss";
import { ToastContainer, toast } from 'react-toastify';

const FourthPage = () => {
    const screenshotRef = useRef(null);

    const [data, setData] = useState({
        time: "21:15",
        temp: "-27 €",
        pro: "AA",
        name: "Aashir Ashfaq",
        moment: "Moment Ago",
        ref: "sent from Revolut",
        iban: "LT12 3250 0538 0988 5971D",
        bic: "REVOLT21XXX"
    });

    const [imageDimension, setImageDimension] = useState("167");

    const notify = (message) => toast.success(message, {
        containerId: 'success-toast',
        style: {
            background: 'black',
            color: 'white',
        },
    });

    const onChangeHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

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
                        <h3>PREVIEW - <span>Mobile 4</span></h3>
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
                        <div className="artboard fourthpage_font">
                            <foreignObject ref={screenshotRef}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={imageDimension + "%"}
                                    viewBox="0 0 1627 3525"
                                >
                                    <defs>
                                        <pattern
                                            id="pattern"
                                            width="100%"
                                            height="100%"
                                            preserveAspectRatio="none"
                                            viewBox="0 0 120 42"
                                        >
                                            <image
                                                width="120"
                                                height="42"
                                                xlinkHref="data:image/png;base64,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"
                                            ></image>
                                        </pattern>
                                        <pattern
                                            id="pattern-2"
                                            width="100%"
                                            height="100%"
                                            preserveAspectRatio="none"
                                            viewBox="0 0 93 63"
                                        >
                                            <image
                                                width="93"
                                                height="63"
                                                xlinkHref="data:image/png;base64,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"
                                            ></image>
                                        </pattern>
                                        <pattern
                                            id="pattern-5"
                                            width="100%"
                                            height="100%"
                                            preserveAspectRatio="none"
                                            viewBox="0 0 31 28"
                                        >
                                            <image
                                                width="31"
                                                height="28"
                                                xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAcCAYAAACZOmSXAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAK5SURBVEhLnZYHbhsxEEWpYqvXXMHIOXNhARagXo3H5AkDZndl+QMDUlxy/p9C2q2Pj9/31IBWq5XH+/3+MMA6dr1eU7vdzgZut1vew2/PAs9F/D1RAw5zCIfRqY5ZKyGJoyKrUEseiS+XSx673W7q9/tpOBymXq+XOp3OI2L2YpHINawKjeRAh29vb2k8HqfFYpGWy2Waz+dpNBplQQp1L6LiGlaFWnJTSmQQECnkkCKAcTqdPjIAJIEYA/QEVoXGmkfFzEk/xhxCSoCgwWCQBbIOkf0BopASjeQAJ9b9cDik/X6fjsdj/kbUk8kkp585AgACJCdzZqZEZ7n89effvBY40hmjDt/f3x+d77cYtd8w1yIayT0UHegEcpqQdcUwxj3lWKKWHKeOGun02vlNYoSYXuuuQc6+ErU1r1KrIARst9u0Wq3SbrfLeyG2AbkNzFn3WxWeNhzQiRkACDidTlkEAs7nc95DBiCmH3wDPFPi6VWLBnTEbzOAcQNIMelFAOSM9kEVvnXVSrBmPYmeqBHCOmT2AYbYH5GbMg3gKDojOtILkU0VH5pyf8TTyI0EGC2AjNTSXDyz1Jl9ZIEe4EGyD35EXkaOQWpT8bJBzPPKOqnnBdxsNnkkA/qpwtPIo/KSmKeVZxXnEBOt3U8vmKU6NJJLHMlJNX/Puc8YIL1EaucjAmJEUYqXI/cAxGWdiRwjalMdr1zZ+S+TGy0jh+loUj2bzXLkQEKNiNlPaTiDCOtehVpyFasecpxiZADgmKgxauwVA5yti1g0Rq75G8fUl9T6t11iUy3ivE5ELTlEGhHZVFyj9XqdPj8/8xhrDCIRa03R1/7fDqkOGU29KYcQ43eMUkQxL0cumYYDMkCKra+QIJJUCSrxtOagdMyciGm+SOL8O8SgkTzWvXSoIPeVxKXg/5HSF4n6pkeM6eBXAAAAAElFTkSuQmCC"
                                            ></image>
                                        </pattern>
                                        <pattern
                                            id="pattern-9"
                                            width="100%"
                                            height="100%"
                                            preserveAspectRatio="none"
                                            viewBox="0 0 43 51"
                                        >
                                            <image
                                                width="43"
                                                height="51"
                                                xlinkHref="data:image/png;base64,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"
                                            ></image>
                                        </pattern>
                                        <image
                                            id="image"
                                            width="119.231"
                                            height="100"
                                            xlinkHref="data:image/png;base64,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"
                                        ></image>
                                        <image
                                            id="image-2"
                                            width="90"
                                            height="69.75"
                                            xlinkHref="data:image/png;base64,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"
                                        ></image>
                                    </defs>
                                    <g data-name="Group 2" transform="translate(-1035 -216)">
                                        <g data-name="Group 1">
                                            <path
                                                d="M0 0H1627V3525H0z"
                                                data-name="Rectangle 9"
                                                transform="translate(1035 216)"
                                            ></path>
                                            <path
                                                fill="url(#pattern)"
                                                d="M0 0H292V102H0z"
                                                data-name="Image 1"
                                                transform="translate(2302 271)"
                                            ></path>
                                            <text
                                                fill="#cfcfd1"
                                                data-name="21:15"
                                                fontFamily="Arial-BoldMT, Arial"
                                                fontSize="60"
                                                fontWeight="700"
                                                transform="translate(1126 360)"
                                            >
                                                <tspan x="0" y="0">
                                                    {data.time}
                                                </tspan>
                                            </text>
                                            <path
                                                fill="#111"
                                                d="M0 0H1627V634H0z"
                                                data-name="Rectangle 1"
                                                transform="translate(1035 439)"
                                            ></path>
                                            <circle
                                                cx="112.5"
                                                cy="112.5"
                                                r="112.5"
                                                fill="#5d5cde"
                                                data-name="Ellipse 1"
                                                transform="translate(2369 687)"
                                            ></circle>
                                            <text
                                                fill="#fff"
                                                data-name="-27 €"
                                                fontFamily="DM Sans, sans-serif"
                                                fontSize="135"
                                                fontWeight="700"
                                                letterSpacing=".005em"
                                                transform="translate(1082 793)"
                                            >
                                                <tspan x="0" y="0">
                                                    {data.temp}
                                                </tspan>
                                            </text>
                                            <text
                                                fill="#386bc5"
                                                data-name="To Aashir Ashfaq"
                                                fontFamily="Arial-BoldMT, Arial"
                                                fontSize="60"
                                                fontWeight="700"
                                                letterSpacing=".01em"
                                                transform="translate(1070 915)"
                                            >
                                                <tspan x="0" y="0">
                                                    To {data.name}
                                                </tspan>
                                            </text>
                                            <text
                                                fill="#78787a"
                                                data-name="Moments ago"
                                                fontFamily="LucidaSansUnicode, Lucida Sans Unicode"
                                                fontSize="55"
                                                transform="translate(1081 1015)"
                                            >
                                                <tspan x="0" y="0">
                                                    {data.moment}
                                                </tspan>
                                            </text>
                                            <path
                                                fill="#111"
                                                d="M0 0H1617V241H0z"
                                                data-name="Rectangle 2"
                                                transform="translate(1045 1073)"
                                            ></path>
                                            <g
                                                fill="#3b82f6"
                                                stroke="#707070"
                                                strokeWidth="1"
                                                data-name="Rectangle 3"
                                                transform="translate(1070 1105)"
                                            >
                                                <rect width="520" height="155" stroke="none" rx="77.5"></rect>
                                                <rect
                                                    width="519"
                                                    height="154"
                                                    x="0.5"
                                                    y="0.5"
                                                    fill="none"
                                                    rx="77"
                                                ></rect>
                                            </g>
                                            <text
                                                fill="#fff"
                                                data-name="Send again"
                                                fontFamily="FranklinGothic-Medium, Franklin Gothic"
                                                fontSize="60"
                                                fontWeight="500"
                                                transform="translate(1220 1205)"
                                            >
                                                <tspan x="0" y="0">
                                                    Send again
                                                </tspan>
                                            </text>
                                            <path
                                                fill="#fff"
                                                d="M32.666 135.788a1.972 1.972 0 002.539-.575l14.063-17a3.6 3.6 0 000-4.351l-14.062-17a1.972 1.972 0 00-2.539-.575 3.122 3.122 0 00-1.417 2.743v9H3.125c-1.729 0-3.125 1.788-3.125 4v8c0 2.213 1.4 4 3.125 4H31.25v9a3.107 3.107 0 001.416 2.758z"
                                                transform="translate(1141 1066.966)"
                                            ></path>
                                            <g
                                                fill="#18242f"
                                                stroke="#707070"
                                                strokeWidth="1"
                                                data-name="Rectangle 5"
                                                transform="translate(1618 1107)"
                                            >
                                                <rect width="428" height="151" stroke="none" rx="75.5"></rect>
                                                <rect
                                                    width="427"
                                                    height="150"
                                                    x="0.5"
                                                    y="0.5"
                                                    fill="none"
                                                    rx="75"
                                                ></rect>
                                            </g>
                                            <use
                                                data-name="Screenshot 2023-08-05 211611"
                                                transform="translate(1669 1133)"
                                                xlinkHref="#image"
                                            ></use>
                                            <text
                                                fill="#386bc5"
                                                data-name="Split bill"
                                                fontFamily="LucidaSansUnicode, Lucida Sans Unicode"
                                                fontSize="50"
                                                transform="translate(1801 1199)"
                                            >
                                                <tspan x="0" y="0">
                                                    Split bill
                                                </tspan>
                                            </text>
                                            <path
                                                fill="#111"
                                                d="M0 0H1627V2427H0z"
                                                data-name="Rectangle 6"
                                                transform="translate(1035 1314)"
                                            ></path>
                                            <g
                                                fill="#242426"
                                                stroke="#707070"
                                                strokeWidth="1"
                                                data-name="Rectangle 7"
                                                transform="translate(1088 1336)"
                                            >
                                                <rect width="1488" height="305" stroke="none" rx="50"></rect>
                                                <rect
                                                    width="1487"
                                                    height="304"
                                                    x="0.5"
                                                    y="0.5"
                                                    fill="none"
                                                    rx="49.5"
                                                ></rect>
                                            </g>
                                            <g
                                                fill="#fff"
                                                stroke="#707070"
                                                strokeWidth="1"
                                                data-name="Rectangle 8"
                                                transform="translate(2248 2326)"
                                            >
                                                <path stroke="none" d="M0 0H1V73H0z"></path>
                                                <rect height="72" x="0.5" y="0.5" fill="none"></rect>
                                            </g>
                                            <text
                                                fill="#808082"
                                                fontFamily="LucidaSansUnicode, Lucida Sans Unicode"
                                                fontSize="55"
                                                transform="translate(1142 1431)"
                                            >
                                                <tspan x="0" y="0">
                                                    Reference
                                                </tspan>
                                            </text>
                                            <text
                                                fill="#cfcfd1"
                                                data-name="Sent from Revolut"
                                                fontFamily="LucidaSansUnicode, Lucida Sans Unicode"
                                                fontSize="52"
                                                transform="translate(1142 1546)"
                                            >
                                                <tspan x="0" y="0">
                                                    {data.ref}
                                                </tspan>
                                            </text>
                                            <path
                                                fill="#fff"
                                                d="M90.149 106.172a6 6 0 00-8.49-8.49l-19.734 19.753L42.172 97.7a6 6 0 00-8.49 8.49l19.753 19.735L33.7 145.678a6 6 0 008.49 8.49l19.734-19.753 19.753 19.734a6 6 0 108.49-8.49l-19.752-19.734z"
                                                transform="translate(1050.075 382.075)"
                                            ></path>
                                            <text
                                                fill="#fff"
                                                fontFamily="ArialMT, Arial"
                                                fontSize="100"
                                                transform="translate(2415 835)"
                                            >
                                                <tspan x="0" y="0">
                                                    {data.profile}
                                                </tspan>
                                            </text>
                                            <g
                                                fill="#386bc5"
                                                stroke="#000"
                                                strokeWidth="6"
                                                data-name="Ellipse 2"
                                                transform="translate(2519 844)"
                                            >
                                                <ellipse
                                                    cx="40"
                                                    cy="37.5"
                                                    stroke="none"
                                                    rx="40"
                                                    ry="37.5"
                                                ></ellipse>
                                                <ellipse cx="40" cy="37.5" fill="none" rx="37" ry="34.5"></ellipse>
                                            </g>
                                            <path
                                                d="M29.372 80.69a2.806 2.806 0 000-3.538l-10.715-12.5a1.937 1.937 0 00-3.034 0 2.806 2.806 0 000 3.538l7.065 8.231H2.143a2.529 2.529 0 000 5h20.539l-7.052 8.234a2.806 2.806 0 000 3.538 1.937 1.937 0 003.034 0L29.379 80.7z"
                                                transform="translate(2544 803.075)"
                                            ></path>
                                            <g
                                                fill="#18242f"
                                                stroke="#707070"
                                                strokeWidth="1"
                                                data-name="Rectangle 10"
                                                transform="translate(2098 1105)"
                                            >
                                                <rect width="461" height="151" stroke="none" rx="75.5"></rect>
                                                <rect
                                                    width="460"
                                                    height="150"
                                                    x="0.5"
                                                    y="0.5"
                                                    fill="none"
                                                    rx="75"
                                                ></rect>
                                            </g>
                                            <path
                                                fill="#3b7dff"
                                                stroke="#3b7dff"
                                                strokeWidth="1"
                                                d="M2174.357 1150.813a3.026 3.026 0 00-3.214-2.813 3.026 3.026 0 00-3.214 2.813v4.687h-5.358c-4.727 0-8.571 3.363-8.571 7.5v37.5c0 4.137 3.844 7.5 8.571 7.5h42.858c4.727 0 8.571-3.363 8.571-7.5V1163c0-4.137-3.844-7.5-8.571-7.5h-5.358v-4.687a3.243 3.243 0 00-6.429 0v4.687h-19.285zm-13.928 19.687h47.142v30a2.028 2.028 0 01-2.143 1.875h-42.857a2.028 2.028 0 01-2.142-1.875z"
                                            ></path>
                                            <text
                                                fill="#386bc5"
                                                fontFamily="LucidaSansUnicode, Lucida Sans Unicode"
                                                fontSize="55"
                                                transform="translate(2243 1195)"
                                            >
                                                <tspan x="0" y="0">
                                                    Schedule
                                                </tspan>
                                            </text>
                                            <g
                                                fill="#242426"
                                                stroke="#707070"
                                                strokeWidth="1"
                                                data-name="Rectangle 11"
                                                transform="translate(1089 1718)"
                                            >
                                                <rect width="1488" height="187" stroke="none" rx="50"></rect>
                                                <rect
                                                    width="1487"
                                                    height="186"
                                                    x="0.5"
                                                    y="0.5"
                                                    fill="none"
                                                    rx="49.5"
                                                ></rect>
                                            </g>
                                            <text
                                                fill="#808082"
                                                fontFamily="LucidaSansUnicode, Lucida Sans Unicode"
                                                fontSize="55"
                                                transform="translate(1141 1830)"
                                            >
                                                <tspan x="0" y="0">
                                                    Statement
                                                </tspan>
                                            </text>
                                            <text
                                                fill="#3584f2"
                                                fontFamily="LucidaSansUnicode, Lucida Sans Unicode"
                                                fontSize="55"
                                                transform="translate(2271 1830)"
                                            >
                                                <tspan x="0" y="0">
                                                    Download
                                                </tspan>
                                            </text>
                                            <use
                                                data-name="Screenshot 2023-08-05 220327"
                                                transform="translate(2174 1777.125)"
                                                xlinkHref="#image-2"
                                            ></use>
                                            <g
                                                fill="#242426"
                                                stroke="#707070"
                                                strokeWidth="1"
                                                data-name="Rectangle 12"
                                                transform="translate(1105 1980)"
                                            >
                                                <rect width="1488" height="347" stroke="none" rx="50"></rect>
                                                <rect
                                                    width="1487"
                                                    height="346"
                                                    x="0.5"
                                                    y="0.5"
                                                    fill="none"
                                                    rx="49.5"
                                                ></rect>
                                            </g>
                                            <text
                                                fill="#808082"
                                                fontFamily="LucidaSansUnicode, Lucida Sans Unicode"
                                                fontSize="55"
                                                transform="translate(1142 2090)"
                                            >
                                                <tspan x="0" y="0">
                                                    IBAN
                                                </tspan>
                                            </text>
                                            <text
                                                fill="#808082"
                                                data-name="BIC / SWIFT"
                                                fontFamily="LucidaSansUnicode, Lucida Sans Unicode"
                                                fontSize="55"
                                                transform="translate(1141 2255)"
                                            >
                                                <tspan x="0" y="0">
                                                    BIC / SWIFT
                                                </tspan>
                                            </text>
                                            <text
                                                fill="#c8c8ca"
                                                data-name="LT12 3250 0538 0988 5971"
                                                fontFamily="LucidaSansUnicode, Lucida Sans Unicode"
                                                fontSize="55"
                                                transform="translate(1784 2090)"
                                            >
                                                <tspan x="0" y="0">
                                                    {data.iban}
                                                </tspan>
                                            </text>
                                            <text
                                                fill="#c8c8ca"
                                                fontFamily="LucidaSansUnicode, Lucida Sans Unicode"
                                                fontSize="55"
                                                transform="translate(2157 2251)"
                                            >
                                                <tspan x="0" y="0">
                                                    REVOLT21XXX
                                                </tspan>
                                            </text>
                                            <g
                                                fill="#242426"
                                                stroke="#707070"
                                                strokeWidth="1"
                                                data-name="Rectangle 13"
                                                transform="translate(1110 2399)"
                                            >
                                                <rect width="1488" height="555" stroke="none" rx="50"></rect>
                                                <rect
                                                    width="1487"
                                                    height="554"
                                                    x="0.5"
                                                    y="0.5"
                                                    fill="none"
                                                    rx="49.5"
                                                ></rect>
                                            </g>
                                            <text
                                                fill="#808082"
                                                fontFamily="LucidaSansUnicode, Lucida Sans Unicode"
                                                fontSize="55"
                                                transform="translate(1142 2531)"
                                            >
                                                <tspan x="0" y="0">
                                                    Category
                                                </tspan>
                                            </text>
                                            <text
                                                fill="#808082"
                                                fontFamily="LucidaSansUnicode, Lucida Sans Unicode"
                                                fontSize="55"
                                                transform="translate(1142 2696)"
                                            >
                                                <tspan x="0" y="0">
                                                    Receipt
                                                </tspan>
                                            </text>
                                            <text
                                                fill="#808082"
                                                data-name="Exclude from analytics"
                                                fontFamily="LucidaSansUnicode, Lucida Sans Unicode"
                                                fontSize="55"
                                                transform="translate(1142 2861)"
                                            >
                                                <tspan x="0" y="0">
                                                    Exclude from analytics
                                                </tspan>
                                            </text>
                                            <text
                                                fill="#3584f2"
                                                fontFamily="LucidaSansUnicode, Lucida Sans Unicode"
                                                fontSize="55"
                                                transform="translate(2288 2531)"
                                            >
                                                <tspan x="0" y="0">
                                                    Transfers
                                                </tspan>
                                            </text>
                                            <path
                                                fill="#3584f2"
                                                d="M48.951 14.638a2.861 2.861 0 000-4.423L38.237.84a3.948 3.948 0 00-5.056 0 2.861 2.861 0 000 4.423L37.8 9.306H3.571A3.367 3.367 0 000 12.431a3.367 3.367 0 003.571 3.125H37.8L33.181 19.6a2.861 2.861 0 000 4.423 3.948 3.948 0 005.056 0l10.714-9.374zM11.752 49.01a3.948 3.948 0 005.056 0 2.861 2.861 0 000-4.423L12.2 40.553h34.23A3.367 3.367 0 0050 37.429a3.367 3.367 0 00-3.571-3.129H12.2l4.621-4.043a2.861 2.861 0 000-4.423 3.948 3.948 0 00-5.056 0L1.049 35.212a2.861 2.861 0 000 4.423l10.714 9.375z"
                                                transform="translate(2189 2488.075)"
                                            ></path>
                                            <text
                                                fill="#3584f2"
                                                fontFamily="LucidaSansUnicode, Lucida Sans Unicode"
                                                fontSize="55"
                                                transform="translate(2350 2692)"
                                            >
                                                <tspan x="0" y="0">
                                                    Upload
                                                </tspan>
                                            </text>
                                            <path
                                                fill="#3584f2"
                                                d="M17.473 36.393l-1.219 4.179H7.5c-4.137 0-7.5 3.844-7.5 8.571v34.286C0 88.156 3.363 92 7.5 92h45c4.137 0 7.5-3.844 7.5-8.571V49.143c0-4.728-3.363-8.571-7.5-8.571h-8.754l-1.219-4.179A5.73 5.73 0 0037.2 32H22.8a5.73 5.73 0 00-5.327 4.393zM30 53.429c6.213 0 11.25 5.756 11.25 12.857S36.213 79.143 30 79.143s-11.25-5.756-11.25-12.857S23.787 53.429 30 53.429z"
                                                transform="translate(2189 2612)"
                                            ></path>
                                            <path
                                                fill="url(#pattern-2)"
                                                d="M0 0H235V159H0z"
                                                data-name="Screenshot 2023-08-05 221756"
                                                transform="translate(2304 2764)"
                                            ></path>
                                            <path
                                                fill="url(#pattern-2)"
                                                d="M0 0H235V159H0z"
                                                data-name="Screenshot 2023-08-05 221756"
                                                transform="translate(2304 2751)"
                                            ></path>
                                            <path
                                                fill="url(#pattern-2)"
                                                d="M0 0H235V159H0z"
                                                data-name="Screenshot 2023-08-05 221756"
                                                transform="translate(2296 2751)"
                                            ></path>
                                            <g
                                                fill="#242426"
                                                stroke="#707070"
                                                strokeWidth="1"
                                                data-name="Rectangle 14"
                                                transform="translate(1105 3018)"
                                            >
                                                <rect width="1488" height="212" stroke="none" rx="50"></rect>
                                                <rect
                                                    width="1487"
                                                    height="211"
                                                    x="0.5"
                                                    y="0.5"
                                                    fill="none"
                                                    rx="49.5"
                                                ></rect>
                                            </g>
                                            <text
                                                fill="#c8c8ca"
                                                data-name="Get help"
                                                fontFamily="LucidaSansUnicode, Lucida Sans Unicode"
                                                fontSize="55"
                                                transform="translate(1141 3142)"
                                            >
                                                <tspan x="0" y="0">
                                                    Get help
                                                </tspan>
                                            </text>
                                            <path
                                                fill="url(#pattern-5)"
                                                d="M0 0H71V64H0z"
                                                data-name="Screenshot 2023-08-05 222020"
                                                transform="translate(2433 3092)"
                                            ></path>
                                            <path
                                                d="M0 0H1627V3525H0z"
                                                data-name="Rectangle 15"
                                                transform="translate(1035 216)"
                                            ></path>
                                            <path
                                                fill="url(#pattern)"
                                                d="M0 0H385V135H0z"
                                                data-name="Image 1"
                                                transform="translate(2248 257)"
                                            ></path>
                                            <text
                                                fill="#cfcfd1"
                                                data-name="21:15"
                                                fontFamily="Arial-BoldMT, Arial"
                                                fontSize="68"
                                                fontWeight="700"
                                                transform="translate(1141 333)"
                                            >
                                                <tspan x="0" y="0">
                                                    {data.time}
                                                </tspan>
                                            </text>
                                            <path
                                                fill="#111"
                                                d="M0 0H1627V634H0z"
                                                data-name="Rectangle 16"
                                                transform="translate(1035 439)"
                                            ></path>
                                            <circle
                                                cx="112.5"
                                                cy="112.5"
                                                r="112.5"
                                                fill="#5d5cde"
                                                data-name="Ellipse 3"
                                                transform="translate(2369 687)"
                                            ></circle>
                                            <text
                                                fill="#fff"
                                                data-name="-27"
                                                fontFamily="SegoeUI-Bold, Segoe UI"
                                                fontSize="135"
                                                fontWeight="700"
                                                letterSpacing=".005em"
                                                transform="translate(1098 779)"
                                            >
                                                <tspan x="0" y="0">
                                                    {data.temp}
                                                </tspan>
                                            </text>
                                            <text
                                                fill="#386bc5"
                                                data-name="To Aashir Ashfaq"
                                                fontFamily="Roboto-Medium, Roboto"
                                                fontSize="60"
                                                fontWeight="500"
                                                letterSpacing=".01em"
                                                transform="translate(1105 913)"
                                            >
                                                <tspan x="0" y="0">
                                                    To {data.name}
                                                </tspan>
                                            </text>
                                            <text
                                                fill="#78787a"
                                                data-name="Moments ago"
                                                fontFamily="LucidaSansUnicode, Lucida Sans Unicode"
                                                fontSize="55"
                                                transform="translate(1105 1015)"
                                            >
                                                <tspan x="0" y="0">
                                                    {data.moment}
                                                </tspan>
                                            </text>
                                            <path
                                                fill="#111"
                                                d="M0 0H1617V241H0z"
                                                data-name="Rectangle 17"
                                                transform="translate(1045 1073)"
                                            ></path>
                                            <rect
                                                width="520"
                                                height="155"
                                                fill="#3b82f6"
                                                data-name="Rectangle 18"
                                                rx="77.5"
                                                transform="translate(1070 1105)"
                                            ></rect>
                                            <text
                                                fill="#fff"
                                                data-name="Send again"
                                                fontFamily="Roboto-Regular, Roboto"
                                                fontSize="60"
                                                transform="translate(1220 1205)"
                                            >
                                                <tspan x="0" y="0">
                                                    Send again
                                                </tspan>
                                            </text>
                                            <path
                                                fill="#fff"
                                                d="M32.666 135.788a1.972 1.972 0 002.539-.575l14.063-17a3.6 3.6 0 000-4.351l-14.062-17a1.972 1.972 0 00-2.539-.575 3.122 3.122 0 00-1.417 2.743v9H3.125c-1.729 0-3.125 1.788-3.125 4v8c0 2.213 1.4 4 3.125 4H31.25v9a3.107 3.107 0 001.416 2.758z"
                                                data-name="right-long-solid"
                                                transform="translate(1141 1066.966)"
                                            ></path>
                                            <rect
                                                width="452"
                                                height="151"
                                                fill="#18242f"
                                                data-name="Rectangle 19"
                                                rx="75.5"
                                                transform="translate(1618 1107)"
                                            ></rect>
                                            <use
                                                data-name="Screenshot 2023-08-05 211611"
                                                transform="translate(1657.769 1133)"
                                                xlinkHref="#image"
                                            ></use>
                                            <text
                                                fill="#386bc5"
                                                data-name="Split bill"
                                                fontFamily="Roboto-Medium, Roboto"
                                                fontSize="55"
                                                fontWeight="500"
                                                transform="translate(1789 1203)"
                                            >
                                                <tspan x="0" y="0">
                                                    Split bill
                                                </tspan>
                                            </text>
                                            <path
                                                fill="#111"
                                                d="M0 0H1627V2427H0z"
                                                data-name="Rectangle 20"
                                                transform="translate(1035 1314)"
                                            ></path>
                                            <rect
                                                width="1505"
                                                height="305"
                                                fill="#242426"
                                                data-name="Rectangle 21"
                                                rx="50"
                                                transform="translate(1088 1336)"
                                            ></rect>
                                            <text
                                                fill="#808082"
                                                data-name="Reference"
                                                fontFamily="Roboto-Regular, Roboto"
                                                fontSize="49"
                                                transform="translate(1141 1452)"
                                            >
                                                <tspan x="0" y="0">
                                                    Reference
                                                </tspan>
                                            </text>
                                            <text
                                                fill="#cfcfd1"
                                                data-name="Sent from Revolut"
                                                fontFamily="Roboto-Regular, Roboto"
                                                fontSize="52"
                                                transform="translate(1142 1567)"
                                            >
                                                <tspan x="0" y="0">
                                                    {data.ref}
                                                </tspan>
                                            </text>
                                            <path
                                                fill="#fff"
                                                d="M90.149 106.172a6 6 0 00-8.49-8.49l-19.734 19.753L42.172 97.7a6 6 0 00-8.49 8.49l19.753 19.735L33.7 145.678a6 6 0 008.49 8.49l19.734-19.753 19.753 19.734a6 6 0 108.49-8.49l-19.752-19.734z"
                                                data-name="xmark-solid"
                                                transform="translate(1074.075 382.075)"
                                            ></path>
                                            <text
                                                fill="#fff"
                                                data-name="AA"
                                                fontFamily="ArialMT, Arial"
                                                fontSize="100"
                                                transform="translate(2415 835)"
                                            >
                                                <tspan x="0" y="0">
                                                    {data.pro}
                                                </tspan>
                                            </text>
                                            <g
                                                fill="#386bc5"
                                                stroke="#000"
                                                strokeWidth="6"
                                                data-name="Ellipse 4"
                                                transform="translate(2519 844)"
                                            >
                                                <ellipse
                                                    cx="40"
                                                    cy="37.5"
                                                    stroke="none"
                                                    rx="40"
                                                    ry="37.5"
                                                ></ellipse>
                                                <ellipse cx="40" cy="37.5" fill="none" rx="37" ry="34.5"></ellipse>
                                            </g>
                                            <path
                                                d="M29.372 80.69a2.806 2.806 0 000-3.538l-10.715-12.5a1.937 1.937 0 00-3.034 0 2.806 2.806 0 000 3.538l7.065 8.231H2.143a2.529 2.529 0 000 5h20.539l-7.052 8.234a2.806 2.806 0 000 3.538 1.937 1.937 0 003.034 0L29.379 80.7z"
                                                data-name="arrow-right-solid"
                                                transform="translate(2544 803.075)"
                                            ></path>
                                            <rect
                                                width="461"
                                                height="151"
                                                fill="#18242f"
                                                data-name="Rectangle 23"
                                                rx="75.5"
                                                transform="translate(2098 1105)"
                                            ></rect>
                                            <path
                                                fill="#3b7dff"
                                                stroke="#3b7dff"
                                                strokeWidth="1"
                                                d="M2190.964 1160.344a2.522 2.522 0 00-2.678-2.344 2.522 2.522 0 00-2.679 2.344v3.906h-4.464c-3.943 0-7.143 2.803-7.143 6.25v31.25c0 3.45 3.2 6.25 7.143 6.25h35.714c3.943 0 7.143-2.8 7.143-6.25v-31.25c0-3.447-3.2-6.25-7.143-6.25h-4.464v-3.906a2.7 2.7 0 00-5.357 0v3.906h-16.072zm-11.607 16.406h39.286v25a1.69 1.69 0 01-1.786 1.563h-35.714a1.69 1.69 0 01-1.786-1.563z"
                                                data-name="calendar-regular"
                                            ></path>
                                            <text
                                                fill="#386bc5"
                                                data-name="Schedule"
                                                fontFamily="Roboto-Medium, Roboto"
                                                fontSize="55"
                                                fontWeight="500"
                                                transform="translate(2253 1203)"
                                            >
                                                <tspan x="0" y="0">
                                                    Schedule
                                                </tspan>
                                            </text>
                                            <rect
                                                width="1505"
                                                height="187"
                                                fill="#242426"
                                                data-name="Rectangle 24"
                                                rx="50"
                                                transform="translate(1088 1716)"
                                            ></rect>
                                            <text
                                                fill="#808082"
                                                data-name="Statement"
                                                fontFamily="Roboto-Regular, Roboto"
                                                fontSize="49"
                                                transform="translate(1142 1830)"
                                            >
                                                <tspan x="0" y="0">
                                                    Statement
                                                </tspan>
                                            </text>
                                            <text
                                                fill="#3584f2"
                                                data-name="Download"
                                                fontFamily="Roboto-Regular, Roboto"
                                                fontSize="55"
                                                transform="translate(2271 1830)"
                                            >
                                                <tspan x="0" y="0">
                                                    Download
                                                </tspan>
                                            </text>
                                            <use
                                                data-name="Screenshot 2023-08-05 220327"
                                                transform="translate(2174 1777.125)"
                                                xlinkHref="#image-2"
                                            ></use>
                                            <rect
                                                width="1504"
                                                height="347"
                                                fill="#242426"
                                                data-name="Rectangle 25"
                                                rx="50"
                                                transform="translate(1089 1980)"
                                            ></rect>
                                            <text
                                                fill="#808082"
                                                data-name="IBAN"
                                                fontFamily="Roboto-Regular, Roboto"
                                                fontSize="49"
                                                transform="translate(1140 2090)"
                                            >
                                                <tspan x="0" y="0">
                                                    IBAN
                                                </tspan>
                                            </text>
                                            <text
                                                fill="#808082"
                                                data-name="BIC / SWIFT"
                                                fontFamily="Roboto-Regular, Roboto"
                                                fontSize="49"
                                                transform="translate(1141 2255)"
                                            >
                                                <tspan x="0" y="0">
                                                    BIC / SWIFT
                                                </tspan>
                                            </text>
                                            <text
                                                fill="#c8c8ca"
                                                data-name="LT12 3250 0538 0988 5971"
                                                fontFamily="Roboto-Regular, Roboto"
                                                fontSize="49"
                                                transform="translate(2523 2085)"
                                            >
                                                <tspan x="0" y="0" textAnchor="end">
                                                    {data.iban}
                                                </tspan>
                                            </text>
                                            <text
                                                fill="#c8c8ca"
                                                data-name="REVOLT21XXX"
                                                fontFamily="Roboto-Regular, Roboto"
                                                fontSize="49"
                                                transform="translate(2516 2251)"
                                            >
                                                <tspan x="0" y="0" textAnchor="end">
                                                    {data.bic}
                                                </tspan>
                                            </text>
                                            <rect
                                                width="1504"
                                                height="555"
                                                fill="#242426"
                                                data-name="Rectangle 26"
                                                rx="50"
                                                transform="translate(1089 2398)"
                                            ></rect>
                                            <text
                                                fill="#808082"
                                                data-name="Category"
                                                fontFamily="LucidaSansUnicode, Lucida Sans Unicode"
                                                fontSize="49"
                                                transform="translate(1141 2504)"
                                            >
                                                <tspan x="0" y="0">
                                                    Category
                                                </tspan>
                                            </text>
                                            <text
                                                fill="#808082"
                                                data-name="Receipt"
                                                fontFamily="LucidaSansUnicode, Lucida Sans Unicode"
                                                fontSize="49"
                                                transform="translate(1141 2681)"
                                            >
                                                <tspan x="0" y="0">
                                                    Receipt
                                                </tspan>
                                            </text>
                                            <text
                                                fill="#808082"
                                                data-name="Exclude from analytics"
                                                fontFamily="LucidaSansUnicode, Lucida Sans Unicode"
                                                fontSize="49"
                                                transform="translate(1141 2861)"
                                            >
                                                <tspan x="0" y="0">
                                                    Exclude from analytics
                                                </tspan>
                                            </text>
                                            <text
                                                fill="#3584f2"
                                                data-name="Transfers"
                                                fontFamily="LucidaSansUnicode, Lucida Sans Unicode"
                                                fontSize="49"
                                                transform="translate(2288 2531)"
                                            >
                                                <tspan x="0" y="0">
                                                    Transfers
                                                </tspan>
                                            </text>
                                            <path
                                                fill="#3584f2"
                                                d="M48.951 14.638a2.861 2.861 0 000-4.423L38.237.84a3.948 3.948 0 00-5.056 0 2.861 2.861 0 000 4.423L37.8 9.306H3.571A3.367 3.367 0 000 12.431a3.367 3.367 0 003.571 3.125H37.8L33.181 19.6a2.861 2.861 0 000 4.423 3.948 3.948 0 005.056 0l10.714-9.374zM11.752 49.01a3.948 3.948 0 005.056 0 2.861 2.861 0 000-4.423L12.2 40.553h34.23A3.367 3.367 0 0050 37.429a3.367 3.367 0 00-3.571-3.129H12.2l4.621-4.043a2.861 2.861 0 000-4.423 3.948 3.948 0 00-5.056 0L1.049 35.212a2.861 2.861 0 000 4.423l10.714 9.375z"
                                                data-name="arrow-right-arrow-left-solid"
                                                transform="translate(2189 2488.075)"
                                            ></path>
                                            <text
                                                fill="#3584f2"
                                                data-name="Upload"
                                                fontFamily="LucidaSansUnicode, Lucida Sans Unicode"
                                                fontSize="49"
                                                transform="translate(2345 2690)"
                                            >
                                                <tspan x="0" y="0">
                                                    Upload
                                                </tspan>
                                            </text>
                                            <path
                                                fill="#3584f2"
                                                d="M14.561 35.661l-1.016 3.482H6.25C2.8 39.143 0 42.346 0 46.286v28.571C0 78.8 2.8 82 6.25 82h37.5C47.2 82 50 78.8 50 74.857V46.286c0-3.94-2.8-7.143-6.25-7.143h-7.295l-1.016-3.482A4.775 4.775 0 0031 32H19a4.775 4.775 0 00-4.439 3.661zM25 49.857c5.178 0 9.375 4.8 9.375 10.714S30.178 71.286 25 71.286s-9.375-4.8-9.375-10.714S19.822 49.857 25 49.857z"
                                                data-name="camera-solid"
                                                transform="translate(2277 2614)"
                                            ></path>
                                            <path
                                                fill="url(#pattern-2)"
                                                d="M0 0H235V159H0z"
                                                data-name="Screenshot 2023-08-05 221756"
                                                transform="translate(2288 2791)"
                                            ></path>
                                            <rect
                                                width="1504"
                                                height="212"
                                                fill="#242426"
                                                data-name="Rectangle 27"
                                                rx="50"
                                                transform="translate(1089 3004)"
                                            ></rect>
                                            <text
                                                fill="#c8c8ca"
                                                data-name="Get help"
                                                fontFamily="Roboto-Medium, Roboto"
                                                fontSize="55"
                                                fontWeight="500"
                                                transform="translate(1142 3128)"
                                            >
                                                <tspan x="0" y="0">
                                                    Get help
                                                </tspan>
                                            </text>
                                            <path
                                                fill="url(#pattern-5)"
                                                d="M0 0H71V64H0z"
                                                data-name="Screenshot 2023-08-05 222020"
                                                transform="translate(2398 3088)"
                                            ></path>
                                            <rect
                                                width="588"
                                                height="28"
                                                fill="#fff"
                                                data-name="Rectangle 32"
                                                rx="10"
                                                transform="translate(1545 3689)"
                                            ></rect>
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
                            <label>Temperature</label>
                            <input
                                type="text"
                                value={data.temp}
                                name="temp"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                        <div className="global_form_inner">
                            <label>Name</label>
                            <input
                                type="text"
                                value={data.name}
                                name="name"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                        <div className="global_form_inner">
                            <label>Moment</label>
                            <input
                                type="text"
                                value={data.moment}
                                name="moment"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                        <div className="global_form_inner">
                            <label>Profile</label>
                            <input
                                type="text"
                                value={data.pro}
                                name="pro"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                        <div className="global_form_inner">
                            <label>Reference</label>
                            <input
                                type="text"
                                value={data.ref}
                                name="ref"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                        <div className="global_form_inner">
                            <label>IBAM</label>
                            <input
                                type="text"
                                value={data.iban}
                                name="iban"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                        <div className="global_form_inner">
                            <label>BIC</label>
                            <input
                                type="text"
                                value={data.bic}
                                name="bic"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                    </div>
                </div>
            </>
        </>
    )
}

export default FourthPage;
