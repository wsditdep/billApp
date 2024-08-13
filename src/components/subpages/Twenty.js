import React, { useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import { write } from 'clipboard-polyfill';
import { ToastContainer, toast } from 'react-toastify';

const TwentyPage = () => {
    const screenshotRef = useRef(null);

    const [data, setData] = useState({
        time: "6:10",
        amount: "$563.13",
        received_date: "August 21, 2023",
        deposited_to: "Chequing - Preferred",
        deposited_alt: "Package",
        ref: "C1Bfqx3qWQkG",
        message: "Your Coinbase withdrawal",
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
                        <h3>PREVIEW - <span>Mobile 20</span></h3>
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
                                    viewBox="0 0 1736 3773"
                                >
                                    <defs>
                                        <clipPath id="clip-path">
                                            <path fill="none" d="M0 0H1736V3773H0z"></path>
                                        </clipPath>
                                    </defs>
                                    <g data-name="Group 97" transform="translate(-553 -144)">
                                        <g data-name="Group 96">
                                            <g
                                                clipPath="url(#clip-path)"
                                                data-name="Repeat Grid 1"
                                                transform="translate(553 144)"
                                            >
                                                <g data-name="Group 95" transform="translate(-225 -144)">
                                                    <g data-name="Group 94" transform="translate(-2602 103)">
                                                        <g data-name="Group 87" transform="translate(102 -126)">
                                                            <g data-name="Group 85" transform="translate(-10 59)">
                                                                <path
                                                                    d="M0 0H1736V3773H0z"
                                                                    data-name="Rectangle 75"
                                                                    transform="translate(2735 108)"
                                                                ></path>
                                                                <text
                                                                    fill="#9d9d9d"
                                                                    data-name="Withdrawal Processing"
                                                                    fontFamily="Roboto-Regular, Roboto"
                                                                    fontSize="61"
                                                                    letterSpacing=".1em"
                                                                    transform="translate(3603 1374)"
                                                                >
                                                                    <tspan x="-371.778" y="0">
                                                                        Withdrawal Processing
                                                                    </tspan>
                                                                </text>
                                                                <text
                                                                    fill="#b8b8b8"
                                                                    data-name="Address/Account"
                                                                    fontFamily="Roboto-Regular, Roboto"
                                                                    fontSize="49"
                                                                    transform="translate(2983 1815)"
                                                                >
                                                                    <tspan x="-190.653" y="0">
                                                                        Address/Account
                                                                    </tspan>
                                                                </text>
                                                                <text
                                                                    fill="#d6d6d6"
                                                                    fontFamily="Roboto-Regular, Roboto"
                                                                    fontSize="63"
                                                                    transform="translate(3947 1816)"
                                                                >
                                                                    <tspan x="-475.438" y="0">
                                                                        TjHbjW6WhcAwFJnmQHV4g2XVF
                                                                    </tspan>
                                                                </text>
                                                                <text
                                                                    fill="#d6d6d6"
                                                                    data-name="7kNAKTEQS"
                                                                    fontFamily="Roboto-Regular, Roboto"
                                                                    fontSize="63"
                                                                    transform="translate(4247 1904)"
                                                                >
                                                                    <tspan x="-173.727" y="0">
                                                                        7kNAKTEQS
                                                                    </tspan>
                                                                </text>
                                                                <text
                                                                    fill="#d6d6d6"
                                                                    fontFamily="Roboto-Regular, Roboto"
                                                                    fontSize="63"
                                                                    transform="translate(4334 2104)"
                                                                >
                                                                    <tspan x="-94.069" y="0">
                                                                        TRC20
                                                                    </tspan>
                                                                </text>
                                                                <text
                                                                    fill="#d6d6d6"
                                                                    data-name="Platform Salary"
                                                                    fontFamily="Roboto-Regular, Roboto"
                                                                    fontSize="63"
                                                                    transform="translate(4205 2322)"
                                                                >
                                                                    <tspan x="-216.347" y="0">
                                                                        Platform Salary
                                                                    </tspan>
                                                                </text>
                                                                <text
                                                                    fill="#b8b8b8"
                                                                    fontFamily="Roboto-Regular, Roboto"
                                                                    fontSize="49"
                                                                    transform="translate(2884 2099)"
                                                                >
                                                                    <tspan x="-91.54" y="0">
                                                                        Network
                                                                    </tspan>
                                                                </text>
                                                                <text
                                                                    fill="#b8b8b8"
                                                                    fontFamily="Roboto-Regular, Roboto"
                                                                    fontSize="49"
                                                                    transform="translate(2892 2317)"
                                                                >
                                                                    <tspan x="-96.206" y="0">
                                                                        Remarks
                                                                    </tspan>
                                                                </text>
                                                                <text
                                                                    fill="#fff"
                                                                    data-name="518.31 USDT"
                                                                    fontFamily="Roboto-Regular, Roboto"
                                                                    fontSize="177"
                                                                    transform="translate(3603 1596)"
                                                                >
                                                                    <tspan x="-513.24" y="0">
                                                                        518.31 USDT
                                                                    </tspan>
                                                                </text>
                                                                <path
                                                                    fill="#6f6f6f"
                                                                    d="M0 0H1654V6H0z"
                                                                    data-name="Rectangle 76"
                                                                    transform="translate(2772 1659)"
                                                                ></path>
                                                                <path
                                                                    fill="#6f6f6f"
                                                                    d="M0 0H1677V6H0z"
                                                                    data-name="Rectangle 77"
                                                                    transform="translate(2760 3670)"
                                                                ></path>
                                                                <text
                                                                    fill="#efefef"
                                                                    data-name="© 2023 rezdy. All rights reserved."
                                                                    fontFamily="Roboto-Light, Roboto"
                                                                    fontSize="61"
                                                                    fontWeight="300"
                                                                    transform="translate(3597 3765)"
                                                                >
                                                                    <tspan x="-437.172" y="0">
                                                                        © 2023 rezdy. All rights reserved.
                                                                    </tspan>
                                                                </text>
                                                                <text
                                                                    fill="#efefef"
                                                                    data-name="Conditions of Use -Privacy Policy - Legal Terms"
                                                                    fontFamily="Roboto-Light, Roboto"
                                                                    fontSize="61"
                                                                    fontWeight="300"
                                                                    transform="translate(3603 3847)"
                                                                >
                                                                    <tspan x="-624.088" y="0">
                                                                        Conditions of Use -Privacy Policy - Legal Terms
                                                                    </tspan>
                                                                </text>
                                                                <text
                                                                    fill="#efefef"
                                                                    data-name="Estimated completion time : 2023-8-26 15:30:35"
                                                                    fontFamily="Roboto-Light, Roboto"
                                                                    fontSize="55"
                                                                    fontWeight="300"
                                                                    letterSpacing=".148em"
                                                                    transform="translate(3603 3039)"
                                                                >
                                                                    <tspan x="-758.394" y="0">
                                                                        Estimated completion time : 2023-8-26 15:30:35
                                                                    </tspan>
                                                                </text>
                                                                <text
                                                                    fill="#efefef"
                                                                    data-name="You will receive your payment once"
                                                                    fontFamily="Roboto-Light, Roboto"
                                                                    fontSize="55"
                                                                    fontWeight="300"
                                                                    letterSpacing=".148em"
                                                                    transform="translate(3629 3169)"
                                                                >
                                                                    <tspan x="-554.921" y="0">
                                                                        You will receive your payment once
                                                                    </tspan>
                                                                </text>
                                                                <text
                                                                    fill="#efefef"
                                                                    data-name="withdrawal is completed"
                                                                    fontFamily="Roboto-Light, Roboto"
                                                                    fontSize="55"
                                                                    fontWeight="300"
                                                                    letterSpacing=".148em"
                                                                    transform="translate(3643 3258)"
                                                                >
                                                                    <tspan x="-382.05" y="0">
                                                                        withdrawal is completed
                                                                    </tspan>
                                                                </text>
                                                            </g>
                                                        </g>
                                                    </g>
                                                    <g
                                                        fill="#fff"
                                                        stroke="#707070"
                                                        strokeWidth="1"
                                                        data-name="Ellipse 19"
                                                        transform="translate(883 758)"
                                                    >
                                                        <circle cx="209.5" cy="209.5" r="209.5" stroke="none"></circle>
                                                        <circle cx="209.5" cy="209.5" r="209" fill="none"></circle>
                                                    </g>
                                                    <g transform="translate(842.535 670.512)">
                                                        <g data-name="Group 1" transform="translate(-11.535 35.273)">
                                                            <path
                                                                fill="#0046d1"
                                                                d="M515.465 283.465c-144.7 0-262 117.449-262 262.327s117.3 262.328 262 262.328 262-117.448 262-262.328-117.302-262.327-262-262.327zm132.156 406.346C637.432 711 618.245 713.377 597.744 712.1c-26.811-1.672-38.719-32.441-33.361-53.636s50.675-35.337 68.011-20.767c18.438 15.6 24.7 32.419 15.228 52.11zm-16.135-162.337c-43.776 28.955-198.115 77.714-138.641 97.28 0 0 23.055 3.159 23.209 12.809.284 17.423-13.45 19.61-18.962 18.025-14.573-4.175-28.918 2.7-70.107 17.489-56.417 20.276-89.276-45.1-37.029-69.735 1.4-.853 124.712-64.483 126.076-65.177 57.933-30.31 12.565-71.8-39.212-49.678-37.409 19.336-73.206 4.186-90.3-31.02-29.059-67.179 73.508-102.745 106.8-44.607 19.251 27.84 67.68 36.332 93.124 24.44 65.86-32.736 108.609 51.515 45.054 90.176z"
                                                                data-name="Path 1"
                                                                transform="translate(-253.465 -283.465)"
                                                            ></path>
                                                        </g>
                                                        <path
                                                            fill="#0046d1"
                                                            d="M0 0.892L1.15 0"
                                                            data-name="Line 1"
                                                            transform="translate(14.165 33.488)"
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
                            <label>Date of received</label>
                            <input
                                type="text"
                                value={data.received_date}
                                name="received_date"
                                onChange={(e) => onChangeHandler(e)}
                            />

                        </div>
                        <div className="global_form_inner">
                            <label>Deposited to</label>
                            <input
                                type="text"
                                value={data.deposited_to}
                                name="deposited_to"
                                onChange={(e) => onChangeHandler(e)}
                            />
                            <input
                                type="text"
                                value={data.deposited_alt}
                                name="deposited_alt"
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
                            <label>Message</label>
                            <input
                                type="text"
                                value={data.message}
                                name="message"
                                onChange={(e) => onChangeHandler(e)}
                            />

                        </div>
                    </div>
                </div>
            </>
        </>
    )
}



export default TwentyPage;