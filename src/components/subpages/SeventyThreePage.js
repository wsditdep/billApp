import React, { useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import { write } from 'clipboard-polyfill';
import "../../assets/styles/secondpage.scss";
import { ToastContainer, toast } from 'react-toastify';

const SeventyThreePage = () => {
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
                    <h3>PREVIEW - <span>Mobile 73</span></h3>
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
                                    <pattern
                                        id="pattern"
                                        width="100%"
                                        height="100%"
                                        preserveAspectRatio="none"
                                        viewBox="0 0 649 183"
                                    >
                                        <image
                                            width="649"
                                            height="183"
                                            xlinkHref="data:image/png;base64,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"
                                        ></image>
                                    </pattern>
                                </defs>
                                <g data-name="Group 338" transform="translate(-2607 -87)">
                                    <g data-name="Group 189" transform="translate(-136 -53)">
                                        <path
                                            fill="#fff"
                                            d="M0 0h1736v3773H0z"
                                            data-name="Path 85"
                                            transform="translate(2743 140)"
                                        ></path>
                                        <text
                                            fill="#191919"
                                            data-name="Address/Account"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="49"
                                            transform="translate(2995 1857)"
                                        >
                                            <tspan x="-190.653" y="0">
                                                Address/Account
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#191919"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="63"
                                            transform="translate(3959 1858)"
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
                                            transform="translate(4259 1946)"
                                        >
                                            <tspan x="173.727" y="0" textAnchor="end">
                                                {data.address2}
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#191919"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="63"
                                            transform="translate(4346 2146)"
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
                                            transform="translate(4217 2364)"
                                        >
                                            <tspan x="216.347" y="0" textAnchor="end">
                                                {data.remarks}
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#191919"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="49"
                                            transform="translate(2896 2141)"
                                        >
                                            <tspan x="-91.54" y="0">
                                                Network
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#191919"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="49"
                                            transform="translate(2904 2359)"
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
                                            transform="translate(3641 1635)"
                                        >
                                            <tspan x="0" y="0" textAnchor="middle">
                                                {data.amount}
                                            </tspan>
                                        </text>
                                        <path
                                            fill="#6f6f6f"
                                            d="M0 0H1654V6H0z"
                                            data-name="Rectangle 148"
                                            transform="translate(2784 1701)"
                                        ></path>
                                        <path
                                            fill="#6f6f6f"
                                            d="M0 0H1677V6H0z"
                                            data-name="Rectangle 147"
                                            transform="translate(2772 3712)"
                                        ></path>
                                        <text
                                            fill="#142e0b"
                                            data-name="© 2024 Passporter. All rights reserved."
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="61"
                                            transform="translate(3609 3807)"
                                        >
                                            <tspan x="-522.208" y="0">
                                                © 2024 Passporter. All rights reserved.
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#142e0b"
                                            data-name="Conditions of Use -Privacy Policy - Legal Terms"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="61"
                                            transform="translate(3615 3889)"
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
                                            transform="translate(3615 3081)"
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
                                            transform="translate(3641 3211)"
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
                                            transform="translate(3655 3300)"
                                        >
                                            <tspan x="-386.924" y="0">
                                                withdrawal is completed
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#191919"
                                            data-name="Withdrawal Processing"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="61"
                                            letterSpacing=".1em"
                                            transform="translate(3629 1413)"
                                        >
                                            <tspan x="-371.778" y="0">
                                                Withdrawal Processing
                                            </tspan>
                                        </text>
                                    </g>
                                    <image
                                        width="574"
                                        height="556"
                                        data-name="65b28a1cf6326323b4fc23c1_Vectors-Wrapper"
                                        transform="translate(3209 391)"
                                        xlinkHref="data:image/png;base64,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"
                                    ></image>
                                    <path
                                        fill="url(#pattern)"
                                        d="M0 0H861V243H0z"
                                        data-name="123"
                                        transform="translate(3067 975)"
                                    ></path>
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

export default SeventyThreePage;