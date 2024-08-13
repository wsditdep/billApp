import React, { useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import { write } from 'clipboard-polyfill';
import "../../assets/styles/secondpage.scss";
import { ToastContainer, toast } from 'react-toastify';

const SixtyFivePage = () => {
    const screenshotRef = useRef(null);

    const [data, setData] = useState({
        time: "1:29",
    });

    const [imageDimension, setImageDimension] = useState("167");

    const [network, setNetwork] = useState("strong");
    const [net, setNet] = useState("5G");
    const [battery, setBattery] = useState("25");

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
                    <h3>PREVIEW - <span>Mobile 65</span></h3>
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
                                viewBox="0 0 1820 3940"
                            >
                                <defs>
                                    <linearGradient
                                        id="linear-gradient"
                                        x1="0.964"
                                        x2="0.27"
                                        y1="0.388"
                                        y2="0.5"
                                        gradientUnits="objectBoundingBox"
                                    >
                                        <stop offset="0" stopColor="#ea3e58"></stop>
                                        <stop offset="1" stopColor="#392832"></stop>
                                    </linearGradient>
                                </defs>
                                <g data-name="Group 313" transform="translate(-2152 -106)">
                                    <g data-name="Group 312">
                                        <g data-name="Group 30" transform="translate(1561 58)">
                                            <g
                                                fill="#1f2630"
                                                stroke="#707070"
                                                strokeWidth="1"
                                                data-name="Rectangle 41"
                                                transform="translate(591 48)"
                                            >
                                                <path stroke="none" d="M0 0H1820V3940H0z"></path>
                                                <path fill="none" d="M0.5 0.5H1819.5V3939.5H0.5z"></path>
                                            </g>
                                            <text
                                                fill="#fff"
                                                data-name="Buy Crypto"
                                                fontFamily="Roboto-Medium, Roboto"
                                                fontSize="75"
                                                fontWeight="500"
                                                letterSpacing=".06em"
                                                transform="translate(1280.252 383.021)"
                                            >
                                                <tspan x="0" y="0">
                                                    Buy Crypto
                                                </tspan>
                                            </text>
                                            <text
                                                fill="#fff"
                                                data-name="1:29"
                                                fontFamily="Roboto-Medium, Roboto"
                                                fontSize="75"
                                                fontWeight="500"
                                                letterSpacing=".06em"
                                                transform="translate(769.494 179.928)"
                                            >
                                                <tspan x="0" y="0">
                                                    {data.time}
                                                </tspan>
                                            </text>
                                            <text
                                                fill="#fff"
                                                data-name="Transaction Declined"
                                                fontFamily="Roboto-Medium, Roboto"
                                                fontSize="75"
                                                fontWeight="500"
                                                transform="translate(1149 1459.412)"
                                            >
                                                <tspan x="0" y="0">
                                                    Transaction Declined
                                                </tspan>
                                            </text>
                                            <g
                                                fill="#6c727e"
                                                fontFamily="Roboto-Medium, Roboto"
                                                fontSize="58"
                                                fontWeight="500"
                                                transform="translate(777 1591.505)"
                                            >
                                                <text
                                                    data-name="This transaction has been declined due to suspicious"
                                                    transform="translate(43.442 55)"
                                                >
                                                    <tspan x="0" y="0">
                                                        This transaction has been declined due to suspicious
                                                    </tspan>
                                                </text>
                                                <text
                                                    data-name="activity. Please check the email and submit an appeal to"
                                                    transform="translate(0 144.361)"
                                                >
                                                    <tspan x="0" y="0">
                                                        activity. Please check the email and submit an appeal to
                                                    </tspan>
                                                </text>
                                                <text
                                                    data-name="verify your cardholder identity with the relevant"
                                                    transform="translate(129.569 233.722)"
                                                >
                                                    <tspan x="0" y="0">
                                                        verify your cardholder identity with the relevant
                                                    </tspan>
                                                </text>
                                                <text transform="translate(582.569 323.082)">
                                                    <tspan x="0" y="0">
                                                        documents.
                                                    </tspan>
                                                </text>
                                            </g>
                                            <rect
                                                width="1702"
                                                height="240"
                                                fill="#fbd437"
                                                data-name="Rectangle 44"
                                                rx="30"
                                                ry="30"
                                                transform="translate(640 3529)"
                                            ></rect>
                                            <rect
                                                width="666"
                                                height="29"
                                                fill="#fff"
                                                data-name="Rectangle 45"
                                                rx="20"
                                                ry="20"
                                                transform="translate(1168 3939)"
                                            ></rect>
                                            <text
                                                fill="#1d1e20"
                                                data-name="Change Payment Method"
                                                fontFamily="Roboto-Medium, Roboto"
                                                fontSize="77"
                                                fontWeight="500"
                                                letterSpacing=".05em"
                                                transform="translate(1024.298 3675.124)"
                                            >
                                                <tspan x="0" y="0">
                                                    Change Payment Method
                                                </tspan>
                                            </text>
                                            <g data-name="Group 29" transform="translate(1283.825 880.68)">
                                                <g data-name="Group 28">
                                                    <g data-name="Group 26">
                                                        <ellipse
                                                            cx="199"
                                                            cy="190.5"
                                                            fill="url(#linear-gradient)"
                                                            data-name="Ellipse 9"
                                                            rx="199"
                                                            ry="190.5"
                                                            transform="translate(.175 .319)"
                                                        ></ellipse>
                                                        <ellipse
                                                            cx="138"
                                                            cy="134"
                                                            fill="#ea3e58"
                                                            data-name="Ellipse 8"
                                                            rx="138"
                                                            ry="134"
                                                            transform="translate(61.175 57.319)"
                                                        ></ellipse>
                                                    </g>
                                                </g>
                                                <g
                                                    fill="#ffecf3"
                                                    data-name="Group 27"
                                                    transform="translate(136.97 122.837)"
                                                >
                                                    <path
                                                        d="M0 0H28.433V166.536H0z"
                                                        data-name="Rectangle 42"
                                                        transform="rotate(-45.97 24.518 9.26)"
                                                    ></path>
                                                    <path
                                                        d="M0 0H28.433V166.536H0z"
                                                        data-name="Rectangle 43"
                                                        transform="rotate(45.97 59.898 141.206)"
                                                    ></path>
                                                </g>
                                            </g>
                                        </g>

                                        {
                                            battery === "78"
                                                ?
                                                <>
                                                    <rect
                                                        width="103"
                                                        height="56"
                                                        fill="#fff"
                                                        data-name="Rectangle 170"
                                                        rx="23"
                                                        transform="translate(3757 179)"
                                                    ></rect>
                                                    <path
                                                        fill="#818d9d"
                                                        d="M0 0a6 6 0 016 6v3a6 6 0 01-6 6V0z"
                                                        data-name="Rectangle 172"
                                                        transform="translate(3861 200)"
                                                    ></path>
                                                    <path
                                                        fill="#818d9d"
                                                        d="M0 0h3a23 23 0 0123 23v10A23 23 0 013 56H0V0z"
                                                        data-name="Rectangle 171"
                                                        transform="translate(3834 179)"
                                                    ></path>
                                                    <text
                                                        fill="#0a1032"
                                                        data-name="78"
                                                        fontFamily="HelveticaWorld-Bold, Helvetica World"
                                                        fontSize="47"
                                                        fontWeight="700"
                                                        transform="translate(3781 223)"
                                                    >
                                                        <tspan x="0" y="0">
                                                            {/* 78 */}
                                                        </tspan>
                                                    </text>
                                                </>
                                                :
                                                battery === "25"
                                                    ?
                                                    <>
                                                        <rect
                                                            width="103"
                                                            height="56"
                                                            fill="#fff"
                                                            data-name="Rectangle 170"
                                                            rx="23"
                                                            transform="translate(3757 179)"
                                                        ></rect>
                                                        <path
                                                            fill="#818d9d"
                                                            d="M0 0a6 6 0 016 6v2a6 6 0 01-6 6V0z"
                                                            data-name="Rectangle 172"
                                                            transform="translate(3861 201)"
                                                        ></path>
                                                        <path
                                                            fill="#818d9d"
                                                            d="M0 0h52a23 23 0 0123 23v10a23 23 0 01-23 23H0V0z"
                                                            data-name="Rectangle 171"
                                                            transform="translate(3785 179)"
                                                        ></path>
                                                        <text
                                                            fill="#0a1032"
                                                            data-name="25"
                                                            fontFamily="HelveticaWorld-Bold, Helvetica World"
                                                            fontSize="47"
                                                            fontWeight="700"
                                                            transform="translate(3781 224)"
                                                        >
                                                            <tspan x="0" y="0">
                                                                {/* 25 */}
                                                            </tspan>
                                                        </text>
                                                    </>
                                                    :
                                                    <>
                                                        <rect
                                                            width="103"
                                                            height="56"
                                                            fill="#fff"
                                                            data-name="Rectangle 170"
                                                            rx="23"
                                                            transform="translate(3757 179)"
                                                        ></rect>
                                                        <path
                                                            fill="#818d9d"
                                                            d="M0 0a6 6 0 016 6v2a6 6 0 01-6 6V0z"
                                                            data-name="Rectangle 172"
                                                            transform="translate(3861 201)"
                                                        ></path>
                                                        <path
                                                            fill="#818d9d"
                                                            d="M0 0h27a23 23 0 0123 23v10a23 23 0 01-23 23H0V0z"
                                                            data-name="Rectangle 171"
                                                            transform="translate(3810 179)"
                                                        ></path>
                                                        <text
                                                            fill="#0a1032"
                                                            data-name="50"
                                                            fontFamily="HelveticaWorld-Bold, Helvetica World"
                                                            fontSize="47"
                                                            fontWeight="700"
                                                            transform="translate(3781 224)"
                                                        >
                                                            <tspan x="0" y="0">
                                                                {/* 50 */}
                                                            </tspan>
                                                        </text>
                                                    </>
                                        }

                                        {
                                            network === "strong"
                                                ?
                                                <>
                                                    <rect
                                                        width="12"
                                                        height="17"
                                                        fill="#fff"
                                                        data-name="Rectangle 35"
                                                        rx="2"
                                                        transform="translate(3544 214)"
                                                    ></rect>
                                                    <rect
                                                        width="14"
                                                        height="26"
                                                        fill="#fff"
                                                        data-name="Rectangle 36"
                                                        rx="2"
                                                        transform="translate(3566 205)"
                                                    ></rect>
                                                    <rect
                                                        width="12"
                                                        height="38"
                                                        fill="#fff"
                                                        data-name="Rectangle 37"
                                                        rx="2"
                                                        transform="translate(3589 193)"
                                                    ></rect>
                                                    <rect
                                                        width="12"
                                                        height="50"
                                                        fill="#fff"
                                                        data-name="Rectangle 38"
                                                        rx="2"
                                                        transform="translate(3612 181)"
                                                    ></rect>
                                                </>
                                                :
                                                network === "low"
                                                    ?
                                                    <>
                                                        <rect
                                                            width="12"
                                                            height="17"
                                                            fill="#fff"
                                                            data-name="Rectangle 35"
                                                            rx="2"
                                                            transform="translate(3544 214)"
                                                        ></rect>
                                                        <rect
                                                            width="14"
                                                            height="26"
                                                            fill="#384965"
                                                            data-name="Rectangle 36"
                                                            rx="2"
                                                            transform="translate(3566 205)"
                                                        ></rect>
                                                        <rect
                                                            width="12"
                                                            height="38"
                                                            fill="#384965"
                                                            data-name="Rectangle 37"
                                                            rx="2"
                                                            transform="translate(3589 193)"
                                                        ></rect>
                                                        <rect
                                                            width="12"
                                                            height="50"
                                                            fill="#384965"
                                                            data-name="Rectangle 38"
                                                            rx="2"
                                                            transform="translate(3612 181)"
                                                        ></rect>
                                                    </>
                                                    :
                                                    <>
                                                        <rect
                                                            width="12"
                                                            height="18"
                                                            fill="#fff"
                                                            data-name="Rectangle 35"
                                                            rx="2"
                                                            transform="translate(3543 213)"
                                                        ></rect>
                                                        <rect
                                                            width="14"
                                                            height="27"
                                                            fill="#fff"
                                                            data-name="Rectangle 36"
                                                            rx="2"
                                                            transform="translate(3566 204)"
                                                        ></rect>
                                                        <rect
                                                            width="14"
                                                            height="39"
                                                            fill="#384965"
                                                            data-name="Rectangle 37"
                                                            rx="2"
                                                            transform="translate(3589 192)"
                                                        ></rect>
                                                        <rect
                                                            width="12"
                                                            height="52"
                                                            fill="#384965"
                                                            data-name="Rectangle 38"
                                                            rx="2"
                                                            transform="translate(3614 179)"
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
                                                    fontSize="53"
                                                    fontWeight="500"
                                                    transform="translate(3656 227)"
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
                                                        fontSize="53"
                                                        fontWeight="500"
                                                        transform="translate(3656 225)"
                                                    >
                                                        <tspan x="0" y="0">
                                                            5G
                                                        </tspan>
                                                    </text>
                                                    :
                                                    <>
                                                        <path
                                                            fill="#fff"
                                                            d="M100.484 192a53.985 53.985 0 00-36.172 14.42 1.3 1.3 0 00-.049 1.862l4.36 4.556a1.341 1.341 0 001.894.049 43.871 43.871 0 0129.983-11.709 43.871 43.871 0 0129.982 11.709 1.341 1.341 0 001.894-.049l4.36-4.556a1.3 1.3 0 00-.049-1.862A54.13 54.13 0 00100.484 192z"
                                                            data-name="Path 7"
                                                            transform="translate(3589.117 -11.098)"
                                                        ></path>
                                                        <path
                                                            fill="#fff"
                                                            d="M221.945 433.227l4.67 4.621a1.339 1.339 0 001.829.049 25.4 25.4 0 0133.608 0 1.339 1.339 0 001.829-.049l4.67-4.621a1.3 1.3 0 00-.049-1.911 34.825 34.825 0 00-46.541 0 1.331 1.331 0 00-.016 1.911zm23.32 7.626a13.306 13.306 0 00-9.7 4.164 1.306 1.306 0 00.033 1.829l8.72 8.606a1.34 1.34 0 001.894 0l8.72-8.606a1.306 1.306 0 00.033-1.829 13.369 13.369 0 00-9.7-4.164z"
                                                            data-name="Path 8"
                                                            transform="translate(3444.336 -222.685)"
                                                        ></path>
                                                    </>
                                        }
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

export default SixtyFivePage;