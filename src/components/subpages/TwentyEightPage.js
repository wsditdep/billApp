import React, { useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import { write } from 'clipboard-polyfill';
import "../../assets/styles/secondpage.scss";
import { ToastContainer, toast } from 'react-toastify';

const TwentyEightPage = () => {
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
                    <h3>PREVIEW - <span>Mobile 28</span></h3>
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
                                viewBox="0 0 1736 3773"
                            >
                                <g data-name="Group 92" transform="translate(-821 -41)">
                                    <g data-name="Group 91" transform="translate(-2061 -126)">
                                        <g data-name="Group 87" transform="translate(157)">
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
                                                    <tspan x="480" y="0" textAnchor="end">
                                                        {data.address}
                                                    </tspan>
                                                </text>
                                                <text
                                                    fill="#d6d6d6"
                                                    data-name="7kNAKTEQS"
                                                    fontFamily="Roboto-Regular, Roboto"
                                                    fontSize="63"
                                                    transform="translate(4247 1904)"
                                                >
                                                    <tspan x="178" y="0" textAnchor="end">
                                                        {data.address2}
                                                    </tspan>
                                                </text>
                                                <text
                                                    fill="#d6d6d6"
                                                    fontFamily="Roboto-Regular, Roboto"
                                                    fontSize="63"
                                                    transform="translate(4334 2104)"
                                                >
                                                    <tspan x="82" y="0" textAnchor="end">
                                                        {data.network}
                                                    </tspan>
                                                </text>
                                                <text
                                                    fill="#d6d6d6"
                                                    data-name="Platform Salary"
                                                    fontFamily="Roboto-Regular, Roboto"
                                                    fontSize="63"
                                                    transform="translate(4205 2322)"
                                                >
                                                    <tspan x="210" y="0" textAnchor="end">
                                                        {data.remarks}
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
                                                    <tspan x="0" y="0" textAnchor="middle">
                                                        {data.amount}
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
                                                    data-name="© 2023 utrack. All rights reserved."
                                                    fontFamily="Roboto-Light, Roboto"
                                                    fontSize="61"
                                                    fontWeight="300"
                                                    transform="translate(3597 3765)"
                                                >
                                                    <tspan x="-450.203" y="0">
                                                        © 2024 utrack. All rights reserved.
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
                                                    <tspan x="780" y="0" textAnchor="end">
                                                        Estimated completion time : {data.time}
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
                                        <circle
                                            cx="432"
                                            cy="432"
                                            r="432"
                                            fill="#fff"
                                            data-name="Ellipse 17"
                                            transform="translate(3318 452)"
                                        ></circle>
                                    </g>
                                    <image
                                        width="532"
                                        height="532"
                                        transform="translate(1425 509)"
                                        xlinkHref="data:image/jpeg;base64,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"
                                    ></image>
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

export default TwentyEightPage;