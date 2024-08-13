import React, { useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import { write } from 'clipboard-polyfill';
import "../../assets/styles/secondpage.scss";
import { ToastContainer, toast } from 'react-toastify';

const EightyTwoPage = () => {
    const screenshotRef = useRef(null);

    const [data, setData] = useState({
        amount: "518.31 USDT",
        address: "TjHbjW6WhcAwFJnmQHV4g2XVF",
        address2: "7kNAKTEQS",
        network: "TRC20",
        remarks: "Platform Salary",
        time: "2023-8-26 15:30:35"
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
                    <h3>PREVIEW - <span>Mobile 82</span></h3>
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
                                viewBox="0 0 1736 3773"
                            >
                                <defs>
                                    <linearGradient
                                        id="linear-gradient"
                                        x1="0.5"
                                        x2="0.458"
                                        y2="0.692"
                                        gradientUnits="objectBoundingBox"
                                    >
                                        <stop offset="0" stopColor="#949494"></stop>
                                        <stop offset="1" stopColor="#fff"></stop>
                                    </linearGradient>
                                    <pattern
                                        id="pattern"
                                        width="100%"
                                        height="100%"
                                        preserveAspectRatio="none"
                                        viewBox="0 0 549 105"
                                    >
                                        <image
                                            width="549"
                                            height="105"
                                            xlinkHref="data:image/png;base64,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"
                                        ></image>
                                    </pattern>
                                </defs>
                                <g data-name="Group 351" transform="translate(-2286 -133)">
                                    <g data-name="Group 349">
                                        <path
                                            fill="url(#linear-gradient)"
                                            d="M0 0H1736V3773H0z"
                                            data-name="Rectangle 146"
                                            transform="translate(2286 133)"
                                        ></path>
                                        <text
                                            fill="#191919"
                                            data-name="Withdrawal Processing"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="61"
                                            letterSpacing=".1em"
                                            transform="translate(3172 1406)"
                                        >
                                            <tspan x="-371.778" y="0">
                                                Withdrawal Processing
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#191919"
                                            data-name="Address/Account"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="49"
                                            transform="translate(2538 1850)"
                                        >
                                            <tspan x="-190.653" y="0">
                                                Address/Account
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#191919"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="63"
                                            transform="translate(3502 1851)"
                                        >
                                            <tspan x="475.438" y="0" textAnchor="end">
                                                {data.address}
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#191919"
                                            data-name="7kNAKTEQS"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="63"
                                            transform="translate(3802 1939)"
                                        >
                                            <tspan x="173.727" y="0" textAnchor="end">
                                                {data.address2}
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#191919"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="63"
                                            transform="translate(3889 2139)"
                                        >
                                            <tspan x="94.069" y="0" textAnchor="end">
                                                {data.network}
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#191919"
                                            data-name="Platform Salary"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="63"
                                            transform="translate(3760 2357)"
                                        >
                                            <tspan x="216.347" y="0" textAnchor="end">
                                                {data.remarks}
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#191919"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="49"
                                            transform="translate(2439 2134)"
                                        >
                                            <tspan x="-91.54" y="0">
                                                Network
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#191919"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="49"
                                            transform="translate(2447 2352)"
                                        >
                                            <tspan x="-96.206" y="0">
                                                Remarks
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#191919"
                                            data-name="518.31 USDT"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="177"
                                            transform="translate(3172 1628)"
                                        >
                                            <tspan x="0" y="0" textAnchor="middle">
                                                {data.amount}
                                            </tspan>
                                        </text>
                                        <path
                                            fill="#6f6f6f"
                                            d="M0 0H1654V6H0z"
                                            data-name="Rectangle 148"
                                            transform="translate(2327 1694)"
                                        ></path>
                                        <path
                                            fill="#6f6f6f"
                                            d="M0 0H1677V6H0z"
                                            data-name="Rectangle 147"
                                            transform="translate(2315 3705)"
                                        ></path>
                                        <text
                                            fill="#142e0b"
                                            data-name="© 2024 ABOUT YOU SE &amp; Co. KG"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="61"
                                            transform="translate(3152 3800)"
                                        >
                                            <tspan x="-440.284" y="0">
                                                © 2024 ABOUT YOU SE &amp; Co. KG
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#142e0b"
                                            data-name="Conditions of Use -Privacy Policy - Legal Terms"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="61"
                                            transform="translate(3158 3882)"
                                        >
                                            <tspan x="-634.2" y="0">
                                                Conditions of Use -Privacy Policy - Legal Terms
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#191919"
                                            data-name="Estimated completion time : 2023-8-26 15:30:35"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="55"
                                            letterSpacing=".148em"
                                            transform="translate(3158 3074)"
                                        >
                                            <tspan x="0" y="0" textAnchor="middle">
                                                Estimated completion time : {data.time}
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#191919"
                                            data-name="You will receive your payment once"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="55"
                                            letterSpacing=".148em"
                                            transform="translate(3184 3204)"
                                        >
                                            <tspan x="-561.299" y="0">
                                                You will receive your payment once
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#191919"
                                            data-name="withdrawal is completed"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="55"
                                            letterSpacing=".148em"
                                            transform="translate(3198 3293)"
                                        >
                                            <tspan x="-386.924" y="0">
                                                withdrawal is completed
                                            </tspan>
                                        </text>
                                        <path
                                            fill="url(#pattern)"
                                            d="M0 0H1287V246H0z"
                                            data-name="Image 99"
                                            transform="translate(2530 1038)"
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
                        <label>Address/Account</label>
                        <input
                            type="text"
                            value={data.address}
                            name="address"
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
                        <label>Network</label>
                        <input
                            type="text"
                            value={data.network}
                            name="network"
                            onChange={(e) => onChangeHandler(e)}
                        />
                    </div>
                    <div className="global_form_inner">
                        <label>Remarks</label>
                        <input
                            type="text"
                            value={data.remarks}
                            name="remarks"
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

export default EightyTwoPage;