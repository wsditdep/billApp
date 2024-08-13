import React, { useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import { write } from 'clipboard-polyfill';
import "../../assets/styles/secondpage.scss";
import { ToastContainer, toast } from 'react-toastify';

const FourtyFivePage = () => {
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
                    <h3>PREVIEW - <span>Mobile 45</span></h3>
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
                                                                © 2024 Top Tourist. All rights reserved.
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
                                        width="561"
                                        height="615"
                                        transform="translate(1141 691)"
                                        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMQAAADXCAYAAABF5P5eAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDE0IDc5LjE1Njc5NywgMjAxNC8wOC8yMC0wOTo1MzowMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QzU1MzVDOUU0NzYxMTFFNjk4MzM4NkVGREFGMkE5MjkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QzU1MzVDOUQ0NzYxMTFFNjk4MzM4NkVGREFGMkE5MjkiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NzZDRDYwOTg5RjI4MTFFNUFCRUQ5N0E4MkQ2QjE1NjQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NzZDRDYwOTk5RjI4MTFFNUFCRUQ5N0E4MkQ2QjE1NjQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6LnbUbAAAj00lEQVR42uyd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"
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

export default FourtyFivePage;