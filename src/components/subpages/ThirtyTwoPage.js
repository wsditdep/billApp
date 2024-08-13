import React, { useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import { write } from 'clipboard-polyfill';
import "../../assets/styles/secondpage.scss";
import { ToastContainer, toast } from 'react-toastify';

const ThirtyTowPage = () => {
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
                    <h3>PREVIEW - <span>Mobile 32</span></h3>
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
                                <g data-name="Group 103" transform="translate(-5113 326)">
                                    <path
                                        fill="#fff"
                                        d="M0 0H1736V3773H0z"
                                        data-name="Rectangle 146"
                                        transform="translate(5113 -326)"
                                    ></path>
                                    <text
                                        fill="#191919"
                                        data-name="Withdrawal Processing"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="61"
                                        letterSpacing=".1em"
                                        transform="translate(6025 947)"
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
                                        transform="translate(5365 1391)"
                                    >
                                        <tspan x="-190.653" y="0">
                                            Address/Account
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#191919"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="63"
                                        transform="translate(6329 1392)"
                                    >
                                        <tspan x="480" y="0" textAnchor="end">
                                            {data.address}
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#191919"
                                        data-name="7kNAKTEQS"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="63"
                                        transform="translate(6629 1480)"
                                    >
                                        <tspan x="180" y="0" textAnchor="end">
                                            {data.address2}
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#191919"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="63"
                                        transform="translate(6716 1680)"
                                    >
                                        <tspan x="95" y="0" textAnchor="end">
                                            {data.network}
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#191919"
                                        data-name="Platform Salary"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="63"
                                        transform="translate(6587 1898)"
                                    >
                                        <tspan x="220" y="0" textAnchor="end">
                                            {data.remarks}
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#191919"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="49"
                                        transform="translate(5266 1675)"
                                    >
                                        <tspan x="-91.54" y="0">
                                            Network
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#191919"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="49"
                                        transform="translate(5274 1893)"
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
                                        transform="translate(6025 1169)"
                                    >
                                        <tspan x="0" y="0" textAnchor="middle">
                                            {data.amount}
                                        </tspan>
                                    </text>
                                    <path
                                        fill="#6f6f6f"
                                        d="M0 0H1654V6H0z"
                                        data-name="Rectangle 148"
                                        transform="translate(5154 1235)"
                                    ></path>
                                    <path
                                        fill="#6f6f6f"
                                        d="M0 0H1677V6H0z"
                                        data-name="Rectangle 147"
                                        transform="translate(5142 3246)"
                                    ></path>
                                    <text
                                        fill="#142e0b"
                                        data-name="© 2023 Ratehawk. All rights reserved."
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="61"
                                        transform="translate(5979 3341)"
                                    >
                                        <tspan x="-508.165" y="0">
                                            © 2024 Ratehawk. All rights reserved.
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#142e0b"
                                        data-name="Conditions of Use -Privacy Policy - Legal Terms"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="61"
                                        transform="translate(5985 3423)"
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
                                        transform="translate(5985 2615)"
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
                                        transform="translate(6011 2745)"
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
                                        transform="translate(6025 2834)"
                                    >
                                        <tspan x="-386.924" y="0">
                                            withdrawal is completed
                                        </tspan>
                                    </text>
                                    <g transform="translate(5344.001 399.755)">
                                        <g data-name="Group 102" transform="translate(328.961 111.948)">
                                            <path
                                                fill="#191919"
                                                d="M243.06 10.751v23.476h17.668V61.65H243.06v18.857c0 10.15 14.642 5.867 19.151 4.3.562 1.006 1.3 2.38 1.3 2.38v23.652s-12.153 3.688-20.45 3.688c-22.294 0-31.036-14.39-31.036-27.826V10.759h31.035zm68.751 21.213c35.2 0 47.236 18.64 44.588 50.731h-49.323c7.007 13.376 28.295 5.716 32.9 3.663 3.189 6.621 4.724 10.642 8.955 19.442-5.607 3.587-14.491 8.725-31.907 8.725-21.037 0-44.739-11.926-44.739-41.336 0-24.389 17.307-41.227 39.526-41.227zm-167.481-.218c9.085 0 17.316 4.249 23.467 11.122a8.642 8.642 0 018.649-8.641h22.964v78h-22.628A9.178 9.178 0 01167.8 103c-6.152 6.873-14.382 11.122-23.467 11.122-18.983 0-34.4-18.439-34.4-41.194s15.413-41.185 34.4-41.185zm395.458 0c9.077 0 17.316 4.249 23.467 11.13a8.644 8.644 0 018.649-8.649h22.964v78H572.24a9.2 9.2 0 01-8.993-9.219c-6.143 6.873-14.382 11.113-23.459 11.113-18.983 0-34.4-18.439-34.4-41.185s15.413-41.194 34.4-41.194zm96.312 2.481l9.437 38.847L656.345 36.3h20.9l10.82 36.777 9.435-38.85h32.7v1.944l-25.563 76.059h-26.023L666.8 80.5 655 112.23h-26.04l-25.6-76.059v-1.953h32.737zM770.438.97v60.345l19.93-27.088h36.919v2.413l-65.734 75.582h-22.712V.978h31.6zm-344.525 0v38.252H459.3V.987h34.514V112.23H459.3V71.137h-33.387v41.093h-34.506V.987h34.514zm-362.369.536A39 39 0 0182.98 74.087v-.008l24.951 36.257-.947 1.877H72L50.544 79.6H34.939v32.62H.249V1.506zm91.841 57.713a13.728 13.728 0 1013.728 13.728 13.728 13.728 0 00-13.728-13.728zm395.366-.084a13.72 13.72 0 1013.707 13.733 13.72 13.72 0 00-13.708-13.733zm-233.534-6.168a12.685 12.685 0 00-12.689 12.689H329.9a12.684 12.684 0 00-12.683-12.689zM56.981 31.142H34.939v20.534h22.042a10.267 10.267 0 000-20.534z"
                                                data-name="Path 40"
                                                transform="translate(-.249 -.97)"
                                            ></path>
                                        </g>
                                        <path
                                            fill="#fab420"
                                            d="M107.9.7l179.75 103.311a16.387 16.387 0 018.163 12.865l.059 1.341v99.954a16.391 16.391 0 01-7.04 13.46l-1.14.721-86.492 50.061a16.385 16.385 0 01-15.069.687l-1.291-.67-134.267-77.1c24.012-4.274 47.3-7.359 51.653-8.2 9.052-1.752 9.655-10.342 9.689-11.155v-.059L6.461 165.973a8.3 8.3 0 01-6.043-4.895L0 160.223l204.937 31.513a14.975 14.975 0 014.149 1.274l1.282.687 35.763 22.361-2.539 7.82 10.636-3.654a15.17 15.17 0 009.974-17.215l-.293-1.224L255 162.428a15.128 15.128 0 00-4.065-6.814l-1.006-.888L63.755 7.242s3.378-2.514 6.169-.486 61.9 43.9 61.9 43.9 5.171-9.747-.5-17.609A18054.635 18054.635 0 00107.89.7zm1029.476 194.079a15.983 15.983 0 11-15.617 15.979 15.983 15.983 0 0115.617-15.979zm-922.509-44.63l33.073 26.091a8.373 8.373 0 01-16.327.746 8.23 8.23 0 01.31-5.247q-8.408-9.115-16.678-18.355c-1.006-1.232-.377-3.235-.377-3.235z"
                                            data-name="Path 41"
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

export default ThirtyTowPage;