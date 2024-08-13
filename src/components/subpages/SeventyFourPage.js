import React, { useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import { write } from 'clipboard-polyfill';
import "../../assets/styles/secondpage.scss";
import { ToastContainer, toast } from 'react-toastify';

const SeventyFourPage = () => {
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
                    <h3>PREVIEW - <span>Mobile 74</span></h3>
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
                                        <stop offset="0" stopColor="#00a0e8"></stop>
                                        <stop offset="1" stopColor="#fff"></stop>
                                    </linearGradient>
                                </defs>
                                <g data-name="Group 344" transform="translate(-7007 326)">
                                    <path
                                        fill="url(#linear-gradient)"
                                        d="M0 0H1736V3773H0z"
                                        data-name="Rectangle 146"
                                        transform="translate(7007 -326)"
                                    ></path>
                                    <text
                                        fill="#191919"
                                        data-name="Withdrawal Processing"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="61"
                                        letterSpacing=".1em"
                                        transform="translate(7893 947)"
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
                                        transform="translate(7259 1391)"
                                    >
                                        <tspan x="-190.653" y="0">
                                            Address/Account
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#191919"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="63"
                                        transform="translate(8223 1392)"
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
                                        transform="translate(8523 1480)"
                                    >
                                        <tspan x="173.727" y="0" textAnchor="end">
                                            {data.address2}
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#191919"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="63"
                                        transform="translate(8610 1680)"
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
                                        transform="translate(8481 1898)"
                                    >
                                        <tspan x="216.347" y="0" textAnchor="end">
                                            {data.remarks}
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#191919"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="49"
                                        transform="translate(7160 1675)"
                                    >
                                        <tspan x="-91.54" y="0">
                                            Network
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#191919"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="49"
                                        transform="translate(7168 1893)"
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
                                        transform="translate(7893 1169)"
                                    >
                                        <tspan x="0" y="0" textAnchor="middle">
                                            {data.amount}
                                        </tspan>
                                    </text>
                                    <path
                                        fill="#6f6f6f"
                                        d="M0 0H1654V6H0z"
                                        data-name="Rectangle 148"
                                        transform="translate(7048 1235)"
                                    ></path>
                                    <path
                                        fill="#6f6f6f"
                                        d="M0 0H1677V6H0z"
                                        data-name="Rectangle 147"
                                        transform="translate(7036 3246)"
                                    ></path>
                                    <text
                                        fill="#142e0b"
                                        data-name="© 2024 Trek Travel. All rights reserved."
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="61"
                                        transform="translate(7873 3341)"
                                    >
                                        <tspan x="-521.315" y="0">
                                            © 2024 Trek Travel. All rights reserved.
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#142e0b"
                                        data-name="Conditions of Use -Privacy Policy - Legal Terms"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="61"
                                        transform="translate(7879 3423)"
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
                                        transform="translate(7879 2615)"
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
                                        transform="translate(7905 2745)"
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
                                        transform="translate(7919 2834)"
                                    >
                                        <tspan x="-386.924" y="0">
                                            withdrawal is completed
                                        </tspan>
                                    </text>
                                    <path
                                        d="M10.86 0h226.057l-7.986 22.011h-71.256l-33.787 92.731H47.1l33.788-92.731H2.874z"
                                        data-name="Path 164"
                                        transform="translate(7418.682 394.193)"
                                    ></path>
                                    <path
                                        d="M269.488 0H62.884L21.112 114.742h79.039l33.581-92.731H192.7c6.348 0 8.805 4.484 7.372 9.171s-3.481 10.394-4.915 13.859c-2.047 4.688-6.757 8.356-13.718 8.356h-55.283l48.119 61.141h91.119l-40.953-45.856h24.572c11.466 0 18.018-6.114 21.09-13.655 3.481-8.56 11.057-29.755 13.514-36.889C287.713 6.929 281.161 0 269.488 0z"
                                        data-name="Path 165"
                                        transform="translate(7607.049 394.193)"
                                    ></path>
                                    <path
                                        d="M273.9 22.011L281.884 0H73.845L45.178 78.669c-1.842 5.1-2.252 10.8 1.638 15.082.436.505 1.9 2.137 3.691 4.133l.018.021c3.26 3.634 7.592 8.461 8.779 9.905 3.276 3.668 7.371 6.725 14.128 6.725h166.475l7.986-21.807H131.384c-7.167 0-10.443-5.3-8.6-10.6l5.323-14.47H256.9l7.986-22.011h-128.8l8.8-23.845h129z"
                                        data-name="Path 166"
                                        transform="translate(7841.598 394.193)"
                                    ></path>
                                    <path
                                        d="M185.579 0h-81.085L62.723 114.742h81.289z"
                                        data-name="Path 167"
                                        transform="translate(8036.8 394.193)"
                                    ></path>
                                    <path
                                        d="M120.386 114.742L72.267 53.4 158.472 0h95.215l-93.372 54.008 53.853 60.734z"
                                        data-name="Path 168"
                                        transform="translate(8135.371 394.193)"
                                    ></path>
                                    <path
                                        d="M552.653 15.491h-73.51L0 25.07v2.446l479.143 10.393h73.714L1032 27.515V25.07z"
                                        data-name="Path 169"
                                        transform="translate(7389 554.182)"
                                    ></path>
                                    <path
                                        d="M309.982 22.489c-2.457 3.669-6.757 3.873-20.475 3.873l-132.891-.2v2.852c10.852.612 15.766 3.873 15.766 11.006 0 4.688-2.867 12.635-6.143 20.788-17.2 40.964-30.713 69.089-30.713 69.089s-19.453-38.315-34.4-74.8c-2.662-6.318-4.1-11.617-4.1-15.081 0-7.745 7.167-10.395 13.309-11.006v-2.852H44v2.852s9.828.2 17.814 4.484c6.347 3.465 12.7 15.286 17 24.457 7.166 15.082 31.943 69.5 39.724 88.451 4.914 12.229 6.961 17.12 6.961 17.12l5.119-.816s30.306-68.275 47.1-101.9c9.009-17.936 13.718-23.845 20.885-28.125a30.29 30.29 0 015.938-2.446h.41a20.273 20.273 0 014.914-.612 20.575 20.575 0 0120.68 20.584c0 .588.048 1.222.1 1.882.053.711.109 1.455.109 2.2.48 13.874.46 20.885.428 31.579a3181.95 3181.95 0 00-.018 10c0 16.508-.41 31.182-1.024 39.742-.615 8.152-1.229 14.878-6.143 18.75s-19.042 4.484-19.042 4.484v2.854h106.461l10.238-30.775-2.457-1.02s-3.891 9.171-8.805 13.452c-8.805 7.54-21.909 10.393-35.219 10.393-19.657 0-21.911-5.5-22.73-20.176-.735-12.087-.645-30.1-.618-35.255v-.655-.572l33.581.612c2.253 0 7.167.408 9.624 3.057a12.592 12.592 0 012.252 3.464 51.663 51.663 0 012.253 8.153 1.54 1.54 0 01.2.814h2.465V71.81h-2.458c-.062.314-.123.622-.185.927-.923 4.643-1.641 8.254-4.524 11.506-2.662 2.65-7.371 3.057-9.624 3.057l-33.581.611c0-16.1.41-35.869 1.024-52.785 0 0 6.143-.2 13.514-.2 5.733 0 12.285.2 17 .408 7.576.408 14.538.814 19.042 4.076 4.71 3.464 5.324 14.674 5.324 14.674h2.457l1.843-31.59z"
                                        data-name="Path 170"
                                        transform="translate(7843.396 626.46)"
                                    ></path>
                                    <path
                                        fillRule="evenodd"
                                        d="M135.944 57.946c0 19.158-16.586 28.737-26.825 34.035 108.012 128.167 172.393 41.373 174.6 38.393l.059-.077 2.662 2.242S213.139 243.816 88.029 99.521l-19.042 3.261s.409 23.234.819 28.94l.075 1.245c.572 9.559 1.127 18.838 9.958 21.378a66.678 66.678 0 0013.1 2.242v2.854H25.577v-2.854s11.057-.2 15.971-4.076c4.925-3.771 5.469-11.206 6.009-18.591v-.008c.043-.595.086-1.189.133-1.782.614-7.948.819-26.7.819-38.722 0-14.878-.41-32.4-.819-40.15-.614-13.859-1.843-18.546-6.348-22.011-4.914-3.872-17-5.094-17-5.094V23.3s36.448-.612 54.058-.612c32.358-.001 57.544 10.801 57.544 35.258zM69.191 94.02l23.958-4.688c5.733-2.039 19.043-7.337 19.043-26.9 0-25.679-25.187-32.813-42.591-32.813-.41 17.932-.41 64.401-.41 64.401z"
                                        data-name="Path 171"
                                        transform="translate(7640.466 628.507)"
                                    ></path>
                                    <path
                                        d="M115.4 142.039c-1.08-22.392-1.052-37.227-1.03-49.347 0-1.669.006-3.286.006-4.865 0-10.19.205-24.66 1.024-39.742.41-9.171 1.229-15.9 6.143-18.546 5.733-3.057 17.2-3.872 17.2-3.872v-2.854H71.381v2.854s10.443.408 15.971 3.872c4.1 2.65 5.119 8.153 5.324 18.75.41 18.75.41 32.2.41 40.354 0 1.831 0 3.813.01 5.9.028 11.175.065 25.436-.625 36.081-.819 14.063-2.866 17.527-6.552 20.176-5.119 3.669-16.381 4.28-16.381 4.28v2.854h22.114a205.246 205.246 0 0136.243 5.1 84.336 84.336 0 0019.248 2.242c31.738 0 48.733-16.712 61.223-34.239l-2.661-2.242c-30.105 44.63-90.305 13.244-90.305 13.244z"
                                        data-name="Path 172"
                                        transform="translate(8107.182 629.806)"
                                    ></path>
                                    <path
                                        fillRule="evenodd"
                                        d="M57.079 93.33c-3.89 9.783-7.576 14.47-10.647 16.712-4.3 2.854-11.057 3.056-11.057 3.056v2.039H77.35V113.1a28.94 28.94 0 00-1.146-.125h-.012c-3.594-.344-10.717-1.026-10.717-8.638a29.958 29.958 0 011.3-6.244l.133-.481a187.119 187.119 0 016.552-17.73h32.148c.614 1.63 2.457 6.521 5.323 14.877a30.454 30.454 0 012.253 9.987c0 6.869-7.894 7.806-12.537 8.357-.591.07-1.129.134-1.592.2v2.038h51.4V113.3c-5.733-.407-14.743-2.446-19.862-15.9-5.3-13.708-12.607-33.094-17.963-47.3l-.007-.019v-.01a9212.8 9212.8 0 00-4.754-12.593 8.453 8.453 0 017.781-11.617h.614v-.2l-.819-2.854H63.631v2.854S84.312 24.239 79.6 35.856C75.712 47.473 63.836 77.025 57.079 93.33zm32.352-56.454l13.514 34.239H76.122c5.119-13.859 13.309-34.239 13.309-34.239z"
                                        data-name="Path 173"
                                        transform="translate(7754.346 629.806)"
                                    ></path>
                                    <path
                                        d="M143.38 22.723l10.238 32-2.252 1.018s-3.891-9.375-8.805-13.655c-8.8-7.745-14.538-10.6-27.848-10.6-19.247 0-19.861 5.3-20.681 19.361v82.541c.205 10.6 1.229 15.9 5.324 18.75 5.324 3.465 15.971 3.872 15.971 3.872v3.057H47.142v-3.057s11.466-.814 17.2-3.872c4.914-2.854 5.733-9.375 6.142-18.546v-82.54c-.819-14.266-1.228-19.565-20.68-19.565-13.105 0-19.043 3.056-27.848 10.6-4.915 4.28-8.805 13.655-8.805 13.655L10.9 54.721l10.238-32z"
                                        data-name="Path 174"
                                        transform="translate(7501.572 628.877)"
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

export default SeventyFourPage;