import React, { useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import { write } from 'clipboard-polyfill';
import "../../assets/styles/secondpage.scss";
import { ToastContainer, toast } from 'react-toastify';

const FourtyPage = () => {
    const screenshotRef = useRef(null);

    const [data, setData] = useState({
        heading: "CAD Withdrawal (via E-transfer)",
        date: "Oct 24, 2023 02:52 PM",
        amount: "1,567.77",
        note1: "It takes 1 hour for processed funds to reflect in your",
        note2: "bank account.",
        currency: "CAD",
        email: "chef.roydiaz05@gmail.com",
        emailAlt: "R****** D***"
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
                    <h3>PREVIEW - <span>Mobile 40</span></h3>
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
                                viewBox="0 0 1686 3490"
                            >
                                <g data-name="Group 180" transform="translate(-2534 -182)">
                                    <path
                                        fill="#fff"
                                        d="M0 0H1686V3490H0z"
                                        data-name="Rectangle 257"
                                        transform="translate(2534 182)"
                                    ></path>
                                    <path
                                        fill="#162f58"
                                        d="M0 0H1686V750H0z"
                                        data-name="Rectangle 258"
                                        transform="translate(2534 182)"
                                    ></path>
                                    <g
                                        fill="#fff"
                                        data-name="Group 178"
                                        transform="translate(430.163 -90.831)"
                                    >
                                        <path
                                            d="M34.794 54.24L9.278 29.8 35.507 4.282 30.69 0 0 29.8l10.059 9.475L30.69 58.7z"
                                            data-name="Path 15"
                                            transform="translate(2173.783 345.129)"
                                        ></path>
                                        <path
                                            d="M0 0H59.756V6.536H0z"
                                            data-name="Rectangle 72"
                                            transform="translate(2181.122 371.923)"
                                        ></path>
                                    </g>
                                    <text
                                        fill="#fff"
                                        data-name="CAD Withdrawal (via E-transfer)"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="86"
                                        transform="translate(3203 486)"
                                    >
                                        <tspan x="-599.375" y="0">
                                            {data.heading}
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#fff"
                                        data-name="Oct 24, 2023 02:52 PM"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="62"
                                        transform="translate(2917 758)"
                                    >
                                        <tspan x="-312.649" y="0">
                                            {data.date}
                                        </tspan>
                                    </text>
                                    <text
                                        data-name="1,567.77"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="188"
                                        transform="translate(3036 1259)"
                                    >
                                        <tspan x="-359.89" y="0">
                                            {data.amount}
                                        </tspan>
                                        <tspan className="cad_style" dy="-30" dx="30">
                                            {data.currency}
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#707070"
                                        data-name="$"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="99"
                                        transform="translate(2632 1234)"
                                    >
                                        <tspan x="-27.795" y="0">
                                            $
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#929292"
                                        data-name="It takes 1 hour for processed funds to reflect in your"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="63"
                                        transform="translate(3325 1466)"
                                    >
                                        <tspan x="-721.27" y="0">
                                            {data.note1}
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#555"
                                        data-name="Transaction detail"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="55"
                                        transform="translate(2823 3263)"
                                    >
                                        <tspan x="-218.523" y="0">
                                            Transaction detail
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#292929"
                                        data-name="chef.roydiaz05@gmail.com"
                                        fontFamily="Roboto-Medium, Roboto"
                                        fontSize="63"
                                        fontWeight="500"
                                        transform="translate(3744 3446)"
                                    >
                                        <tspan x="380" y="0" textAnchor="end">
                                            {data.email}
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#292929"
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="63"
                                        transform="translate(2734 3446)"
                                    >
                                        <tspan x="-129.891" y="0">
                                            Recipient
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#292929"
                                        data-name="R****** D***"
                                        fontFamily="Roboto-Medium, Roboto"
                                        fontSize="63"
                                        fontWeight="500"
                                        transform="translate(3957 3522)"
                                    >
                                        <tspan x="170" y="0" textAnchor="end">
                                            {data.emailAlt}
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#929292"
                                        data-name="bank account."
                                        fontFamily="Roboto-Regular, Roboto"
                                        fontSize="63"
                                        transform="translate(2801 1572)"
                                    >
                                        <tspan x="-197.352" y="0">
                                            {data.note2}
                                        </tspan>
                                    </text>
                                    <path
                                        fill="#dcdcdc"
                                        d="M0 0H1526V6H0z"
                                        data-name="Rectangle 259"
                                        transform="translate(2604 3314)"
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
                        <label>Heading</label>
                        <input
                            type="text"
                            value={data.heading}
                            name="heading"
                            onChange={(e) => onChangeHandler(e)}
                        />
                    </div>
                    <div className="global_form_inner">
                        <label>Date</label>
                        <input
                            type="text"
                            value={data.date}
                            name="date"
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
                        <input
                            type="text"
                            value={data.currency}
                            name="currency"
                            onChange={(e) => onChangeHandler(e)}
                        />
                    </div>
                    <div className="global_form_inner">
                        <label>Remark</label>
                        <input
                            type="text"
                            value={data.note1}
                            name="note1"
                            onChange={(e) => onChangeHandler(e)}
                        />
                        <input
                            type="text"
                            value={data.note2}
                            name="note2"
                            onChange={(e) => onChangeHandler(e)}
                        />
                    </div>
                    <div className="global_form_inner">
                        <label>Email</label>
                        <input
                            type="text"
                            value={data.email}
                            name="email"
                            onChange={(e) => onChangeHandler(e)}
                        />
                        <input
                            type="text"
                            value={data.emailAlt}
                            name="emailAlt"
                            onChange={(e) => onChangeHandler(e)}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default FourtyPage;