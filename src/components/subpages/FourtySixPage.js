import React, { useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import { write } from 'clipboard-polyfill';
import "../../assets/styles/secondpage.scss";
import { ToastContainer, toast } from 'react-toastify';

const FourtySixPage = () => {
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
                    <h3>PREVIEW - <span>Mobile 46</span></h3>
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
                                <g data-name="Group 187" transform="translate(-553 -162)">
                                    <g data-name="Group 185" transform="translate(0 -27)">
                                        <g data-name="Group 126" transform="translate(0 45)">
                                            <g data-name="Group 96">
                                                <g data-name="Group 87" transform="translate(-2172 -23)">
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
                                                            <tspan x="470" y="0" textAnchor="end">
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
                                                            <tspan x="170" y="0" textAnchor="end">
                                                                {data.address2}
                                                            </tspan>
                                                        </text>
                                                        <text
                                                            fill="#d6d6d6"
                                                            fontFamily="Roboto-Regular, Roboto"
                                                            fontSize="63"
                                                            transform="translate(4334 2104)"
                                                        >
                                                            <tspan x="80" y="0" textAnchor="end">
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
                                                            data-name="© 2024 Perfect. All rights reserved."
                                                            fontFamily="Roboto-Light, Roboto"
                                                            fontSize="61"
                                                            fontWeight="300"
                                                            transform="translate(3597 3765)"
                                                        >
                                                            <tspan x="-462.832" y="0">
                                                                © 2024 De Box. All rights reserved.
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
                                                            <tspan x="0" y="0" textAnchor="middle">
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
                                                <path
                                                    fill="#0046d1"
                                                    d="M0 0.892L1.15 0"
                                                    data-name="Line 1"
                                                    transform="translate(1184.7 704)"
                                                ></path>
                                            </g>
                                        </g>
                                    </g>
                                    <image
                                        width="865"
                                        height="468"
                                        transform="translate(989 813)"
                                        xlinkHref="data:image/png;base64,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"
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

export default FourtySixPage;