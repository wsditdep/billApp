import React, { useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import { write } from 'clipboard-polyfill';
import { ToastContainer, toast } from 'react-toastify';

const TwentyFourPage = () => {
    const screenshotRef = useRef(null);

    const [data, setData] = useState({
        section1_date: "Sep 16, 2023",
        section1_title: "Interac Purchase",
        section1_amount: "-2.83",
        section2_date: "Sep 11, 2023",
        section2_title1: "e-Transfer sent",
        section2_title2: "Aashish Gyawali",
        section2_title3: "ML3WC8",
        section2_amount: "-8.30",
        section3_title1: "e-Transfer sent",
        section3_title2: "Sashim Lama",
        section3_title3: "FFTELE",
        section3_amount: "-760.00",
        section4_date: "Sep 6, 2023",
        section4_title1: "e-Transfer sent",
        section4_title2: "Sashim Lama",
        section4_title3: "FFTELE",
        section4_amount: "-760.00",
        date_alt: "Sep 6, 2023",
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
                        <h3>PREVIEW - <span>Mobile 24</span></h3>
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
                                    viewBox="0 0 2240 3403"
                                >
                                    <g data-name="Group 84" transform="translate(-2477 -356)">
                                        <path
                                            fill="#fff"
                                            d="M0 0H2239V3403H0z"
                                            data-name="Rectangle 126"
                                            transform="translate(2477 356)"
                                        ></path>
                                        <text
                                            fill="#444"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="75"
                                            transform="translate(2710 490)"
                                        >
                                            <tspan x="-115.393" y="0">
                                                Recent
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#676767"
                                            data-name="-760"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="82"
                                            transform="translate(4466 2305)"
                                        >
                                            <tspan x="120" y="0" textAnchor="end">
                                                {data.section3_amount}
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#676767"
                                            data-name="-760"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="82"
                                            transform="translate(4466 3052)"
                                        >
                                            <tspan x="120" y="0" textAnchor="end">
                                                {data.section4_amount}
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#266088"
                                            data-name="NOMI Forecast"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="75"
                                            transform="translate(3317 490)"
                                        >
                                            <tspan x="-250.287" y="0">
                                                NOMI Forecast
                                            </tspan>
                                        </text>
                                        <path
                                            fill="#dbdbdb"
                                            d="M0 0H6V130H0z"
                                            data-name="Rectangle 127"
                                            transform="translate(2944 396)"
                                        ></path>
                                        <path
                                            fill="#444"
                                            d="M0 0H242V11H0z"
                                            data-name="Rectangle 128"
                                            transform="translate(2591 603)"
                                        ></path>
                                        <g data-name="Group 82" transform="translate(2361)">
                                            <g
                                                fill="#fff"
                                                stroke="#266088"
                                                strokeWidth="7"
                                                data-name="Ellipse 16"
                                                transform="translate(2174 408)"
                                            >
                                                <circle cx="45.5" cy="45.5" r="45.5" stroke="none"></circle>
                                                <circle cx="45.5" cy="45.5" r="42" fill="none"></circle>
                                            </g>
                                            <rect
                                                width="9"
                                                height="39"
                                                fill="#266088"
                                                data-name="Rectangle 129"
                                                rx="4.5"
                                                transform="rotate(-45 1710.204 -2464.025)"
                                            ></rect>
                                        </g>
                                        <path
                                            fill="#d6dadb"
                                            d="M0 0H2238V5H0z"
                                            data-name="Rectangle 130"
                                            transform="translate(2478 614)"
                                        ></path>
                                        <path
                                            fill="#d6dadb"
                                            d="M0 0H2238V5H0z"
                                            data-name="Rectangle 132"
                                            transform="translate(2478 940)"
                                        ></path>
                                        <path
                                            fill="#d6dadb"
                                            d="M0 0H2238V5H0z"
                                            data-name="Rectangle 135"
                                            transform="translate(2478 1217)"
                                        ></path>
                                        <path
                                            fill="#d6dadb"
                                            d="M0 0H2238V5H0z"
                                            data-name="Rectangle 133"
                                            transform="translate(2478 1543)"
                                        ></path>
                                        <path
                                            fill="#d6dadb"
                                            d="M0 0H2238V5H0z"
                                            data-name="Rectangle 136"
                                            transform="translate(2478 2024)"
                                        ></path>
                                        <path
                                            fill="#d6dadb"
                                            d="M0 0H2238V5H0z"
                                            data-name="Rectangle 138"
                                            transform="translate(2478 2513)"
                                        ></path>
                                        <path
                                            fill="#d6dadb"
                                            d="M0 0H2238V5H0z"
                                            data-name="Rectangle 141"
                                            transform="translate(2478 2839)"
                                        ></path>
                                        <path
                                            fill="#d6dadb"
                                            d="M0 0H2238V5H0z"
                                            data-name="Rectangle 144"
                                            transform="translate(2478 3248)"
                                        ></path>
                                        <path
                                            fill="#d6dadb"
                                            d="M0 0H2238V5H0z"
                                            data-name="Rectangle 142"
                                            transform="translate(2478 3574)"
                                        ></path>
                                        <path
                                            fill="#f3f7f8"
                                            d="M0 0H2239V321H0z"
                                            data-name="Rectangle 131"
                                            transform="translate(2478 619)"
                                        ></path>
                                        <path
                                            fill="#f3f7f8"
                                            d="M0 0H2239V321H0z"
                                            data-name="Rectangle 134"
                                            transform="translate(2477 1222)"
                                        ></path>
                                        <path
                                            fill="#f3f7f8"
                                            d="M0 0H2239V321H0z"
                                            data-name="Rectangle 140"
                                            transform="translate(2478 2518)"
                                        ></path>
                                        <path
                                            fill="#f3f7f8"
                                            d="M0 0H2239V321H0z"
                                            data-name="Rectangle 143"
                                            transform="translate(2478 3253)"
                                        ></path>
                                        <text
                                            fill="#444"
                                            data-name="Sep 16, 2023"
                                            fontFamily="Roboto-Medium, Roboto"
                                            fontSize="81"
                                            fontWeight="500"
                                            transform="translate(2826 857)"
                                        >
                                            <tspan x="-236.158" y="0">
                                                {data.section1_date}
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#444"
                                            data-name="Sep 11, 2023"
                                            fontFamily="Roboto-Medium, Roboto"
                                            fontSize="81"
                                            fontWeight="500"
                                            transform="translate(2826 1460)"
                                        >
                                            <tspan x="-236.158" y="0">
                                                {data.section2_date}
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#444"
                                            data-name="Sep 6, 2023"
                                            fontFamily="Roboto-Medium, Roboto"
                                            fontSize="81"
                                            fontWeight="500"
                                            transform="translate(2803 2756)"
                                        >
                                            <tspan x="-213.139" y="0">
                                                {data.section4_date}
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#444"
                                            data-name="Sep 6, 2023"
                                            fontFamily="Roboto-Medium, Roboto"
                                            fontSize="81"
                                            fontWeight="500"
                                            transform="translate(2803 3500)"
                                        >
                                            <tspan x="-213.139" y="0">
                                                {data.date_alt}
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#676767"
                                            data-name="Interac purchase"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="82"
                                            transform="translate(2894 1117)"
                                        >
                                            <tspan x="-304.177" y="0">
                                                {data.section1_title}
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#676767"
                                            data-name="e-Transfer sent"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="82"
                                            transform="translate(2865 2214)"
                                        >
                                            <tspan x="-273.507" y="0">
                                                {data.section3_title1}
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#676767"
                                            data-name="e-Transfer sent"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="82"
                                            transform="translate(2864 2951)"
                                        >
                                            <tspan x="-273.507" y="0">
                                                {data.section4_title1}
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#676767"
                                            data-name="e-Transfer sent"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="82"
                                            transform="translate(2864 1732)"
                                        >
                                            <tspan x="-273.507" y="0">
                                                {data.section2_title1}
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#676767"
                                            data-name="Sashim Lama"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="82"
                                            transform="translate(2840 2313)"
                                        >
                                            <tspan x="-248.983" y="0">
                                                {data.section3_title2}
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#676767"
                                            data-name="Sashim Lama"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="82"
                                            transform="translate(2839 3050)"
                                        >
                                            <tspan x="-248.983" y="0">
                                                {data.section4_title2}
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#676767"
                                            data-name="Aashish Gyawali"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="82"
                                            transform="translate(2889 1831)"
                                        >
                                            <tspan x="-298.932" y="0">
                                                {data.section2_title2}
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#676767"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="82"
                                            transform="translate(2730 2417)"
                                        >
                                            <tspan x="-138.855" y="0">
                                                {data.section3_title3}
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#676767"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="82"
                                            transform="translate(2728 3154)"
                                        >
                                            <tspan x="-138.215" y="0">
                                                {data.section4_title3}
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#676767"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="82"
                                            transform="translate(2757 1935)"
                                        >
                                            <tspan x="-166.963" y="0">
                                                {data.section2_title3}
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#676767"
                                            data-name="-2.83"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="82"
                                            transform="translate(4512 1117)"
                                        >
                                            <tspan x="80" y="0" textAnchor="end">
                                                {data.section1_amount}
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#676767"
                                            data-name="-8.3"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="82"
                                            transform="translate(4512 1820)"
                                        >
                                            <tspan x="70" y="0" textAnchor="end">
                                                {data.section2_amount}
                                            </tspan>
                                        </text>
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
                            <label>Section 1</label>
                            <input
                                type="text"
                                value={data.section1_date}
                                name="section1_date"
                                onChange={(e) => onChangeHandler(e)}
                            />
                            <input
                                type="text"
                                value={data.section1_title}
                                name="section1_title"
                                onChange={(e) => onChangeHandler(e)}
                            />
                            <input
                                type="text"
                                value={data.section1_amount}
                                name="section1_amount"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                        <div className="global_form_inner">
                            <label>Section 2</label>
                            <input
                                type="text"
                                value={data.section2_date}
                                name="section2_date"
                                onChange={(e) => onChangeHandler(e)}
                            />
                            <input
                                type="text"
                                value={data.section2_title1}
                                name="section2_title1"
                                onChange={(e) => onChangeHandler(e)}
                            />
                            <input
                                type="text"
                                value={data.section2_title2}
                                name="section2_title2"
                                onChange={(e) => onChangeHandler(e)}
                            />
                            <input
                                type="text"
                                value={data.section2_title3}
                                name="section2_title3"
                                onChange={(e) => onChangeHandler(e)}
                            />
                            <input
                                type="text"
                                value={data.section2_amount}
                                name="section2_amount"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                        <div className="global_form_inner">
                            <label>Section 3</label>
                            <input
                                type="text"
                                value={data.section3_title1}
                                name="section3_title1"
                                onChange={(e) => onChangeHandler(e)}
                            />
                            <input
                                type="text"
                                value={data.section3_title2}
                                name="section3_title2"
                                onChange={(e) => onChangeHandler(e)}
                            />
                            <input
                                type="text"
                                value={data.section3_title3}
                                name="section3_title3"
                                onChange={(e) => onChangeHandler(e)}
                            />
                            <input
                                type="text"
                                value={data.section3_amount}
                                name="section3_amount"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                        <div className="global_form_inner">
                            <label>Section 4</label>
                            <input
                                type="text"
                                value={data.section4_date}
                                name="section4_date"
                                onChange={(e) => onChangeHandler(e)}
                            />
                            <input
                                type="text"
                                value={data.section4_title1}
                                name="section4_title1"
                                onChange={(e) => onChangeHandler(e)}
                            />
                            <input
                                type="text"
                                value={data.section4_title2}
                                name="section4_title2"
                                onChange={(e) => onChangeHandler(e)}
                            />
                            <input
                                type="text"
                                value={data.section4_title3}
                                name="section4_title3"
                                onChange={(e) => onChangeHandler(e)}
                            />
                            <input
                                type="text"
                                value={data.section4_amount}
                                name="section3_amount"
                                onChange={(e) => onChangeHandler(e)}
                            />
                            <input
                                type="text"
                                value={data.date_alt}
                                name="date_alt"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                    </div>
                </div>
            </>
        </>
    )
}



export default TwentyFourPage;