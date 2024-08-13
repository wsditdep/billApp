import React, { useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import { write } from 'clipboard-polyfill';
import "../../assets/styles/secondpage.scss";
import { ToastContainer, toast } from 'react-toastify';

const SixtyFourPage = () => {
    const screenshotRef = useRef(null);

    const [data, setData] = useState({
        time: "2:01",
        amount: "+€145.80",
        amountAlt: "$145.80",
        username: "Anuar I",
        usernameAlt: "AI",
        date: "Today, 1:26 p.m."
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
                    <h3>PREVIEW - <span>Mobile 64</span></h3>
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
                                viewBox="0 0 1838 3987"
                            >
                                <g data-name="Group 311" transform="translate(-2170 -82)">
                                    <g data-name="Group 310">
                                        <g data-name="Group 25" transform="translate(1551 58)">
                                            <path
                                                fill="#0139cc"
                                                d="M0 0H1838V275H0z"
                                                data-name="Rectangle 26"
                                                transform="translate(619 24)"
                                            ></path>
                                            <text
                                                fill="#fbfdfb"
                                                data-name="2:01"
                                                fontFamily="Roboto-Bold, Roboto"
                                                fontSize="66"
                                                fontWeight="700"
                                                letterSpacing=".06em"
                                                transform="translate(749.323 143.553)"
                                            >
                                                <tspan x="0" y="0">
                                                    {data.time}
                                                </tspan>
                                            </text>
                                            <path
                                                fill="#f7f7f7"
                                                d="M20 0h1798a20 20 0 0120 20v3710a11 11 0 01-11 11H11a11 11 0 01-11-11V20A20 20 0 0120 0z"
                                                data-name="Rectangle 27"
                                                transform="translate(619 270)"
                                            ></path>
                                            <g data-name="Group 16" transform="translate(732.914 367.258)">
                                                <rect
                                                    width="8.079"
                                                    height="76.751"
                                                    data-name="Rectangle 28"
                                                    rx="4"
                                                    transform="rotate(44.03 26.672 65.967)"
                                                ></rect>
                                                <rect
                                                    width="8.079"
                                                    height="76.751"
                                                    data-name="Rectangle 29"
                                                    rx="4"
                                                    transform="rotate(-45.97 7.859 3.3)"
                                                ></rect>
                                            </g>
                                            <text
                                                fill="#141819"
                                                data-name="+$145.80"
                                                fontFamily="Roboto-Bold, Roboto"
                                                fontSize="140"
                                                fontWeight="700"
                                                transform="translate(698.368 661.939)"
                                            >
                                                <tspan x="0" y="0">
                                                    {data.amount}
                                                </tspan>
                                            </text>
                                            <text
                                                fill="#5553be"
                                                data-name="Anuar I"
                                                fontFamily="Roboto-Bold, Roboto"
                                                fontSize="66"
                                                fontWeight="700"
                                                transform="translate(701.677 797.954)"
                                            >
                                                <tspan x="0" y="0">
                                                    {data.username}
                                                </tspan>
                                            </text>
                                            <text
                                                fill="#707070"
                                                data-name="Today, 1:26p.m."
                                                fontFamily="Roboto-Regular, Roboto"
                                                fontSize="56"
                                                transform="translate(697.908 917.219)"
                                            >
                                                <tspan x="0" y="0">
                                                    {data.date}
                                                </tspan>
                                            </text>
                                            <circle
                                                cx="131"
                                                cy="131"
                                                r="131"
                                                fill="#00bf8d"
                                                data-name="Ellipse 4"
                                                transform="translate(2126 521)"
                                            ></circle>
                                            <g
                                                fill="#5656ea"
                                                stroke="#fff"
                                                strokeWidth="2"
                                                data-name="Ellipse 5"
                                                transform="translate(2312 707)"
                                            >
                                                <circle cx="38" cy="38" r="38" stroke="none"></circle>
                                                <circle cx="38" cy="38" r="37" fill="none"></circle>
                                            </g>
                                            <rect
                                                width="412"
                                                height="177"
                                                fill="#4e54f0"
                                                data-name="Rectangle 30"
                                                rx="88.5"
                                                transform="translate(692 1010)"
                                            ></rect>
                                            <g
                                                fill="#fff"
                                                data-name="Group 17"
                                                transform="translate(764.422 1074.274)"
                                            >
                                                <path
                                                    d="M22.217 0l22.218 28.277H0z"
                                                    data-name="Polygon 2"
                                                    transform="rotate(90 30.297 30.297)"
                                                ></path>
                                                <path
                                                    d="M0 0H33V13H0z"
                                                    data-name="Rectangle 31"
                                                    transform="translate(-.422 15.727)"
                                                ></path>
                                            </g>
                                            <text
                                                fill="#fff"
                                                fontFamily="Roboto-Medium, Roboto"
                                                fontSize="60"
                                                fontWeight="500"
                                                transform="translate(873.344 1119.155)"
                                            >
                                                <tspan x="0" y="0">
                                                    Send
                                                </tspan>
                                            </text>
                                            <text
                                                fill="#fff"
                                                fontFamily="Roboto-Medium, Roboto"
                                                fontSize="106"
                                                fontWeight="500"
                                                transform="translate(2209.219 694.571)"
                                            >
                                                <tspan x="45" y="0" textAnchor="middle">
                                                    {data.usernameAlt}
                                                </tspan>
                                            </text>
                                            <rect
                                                width="1692"
                                                height="198"
                                                fill="#fff"
                                                data-name="Rectangle 32"
                                                rx="62"
                                                transform="translate(692 1300)"
                                            ></rect>
                                            <rect
                                                width="1692"
                                                height="436"
                                                fill="#fff"
                                                data-name="Rectangle 33"
                                                rx="62"
                                                transform="translate(692 1563)"
                                            ></rect>
                                            <text
                                                fill="#707070"
                                                data-name="Sent without note"
                                                fontFamily="Roboto-Medium, Roboto"
                                                fontSize="63"
                                                fontWeight="500"
                                                transform="translate(763.93 1421.079)"
                                            >
                                                <tspan x="0" y="0">
                                                    Sent without note
                                                </tspan>
                                            </text>
                                            <text
                                                fill="#707070"
                                                fontFamily="Roboto-Medium, Roboto"
                                                fontSize="63"
                                                fontWeight="500"
                                                transform="translate(764.055 1695.766)"
                                            >
                                                <tspan x="0" y="0">
                                                    Status
                                                </tspan>
                                            </text>
                                            <text
                                                fill="#707070"
                                                fontFamily="Roboto-Medium, Roboto"
                                                fontSize="63"
                                                fontWeight="500"
                                                transform="translate(765.348 1901.781)"
                                            >
                                                <tspan x="0" y="0">
                                                    Confirmation
                                                </tspan>
                                            </text>
                                            <text
                                                fill="#171515"
                                                fontFamily="Roboto-Medium, Roboto"
                                                fontSize="63"
                                                fontWeight="500"
                                                transform="translate(1996.026 1695.766)"
                                            >
                                                <tspan x="0" y="0">
                                                    Completed
                                                </tspan>
                                            </text>
                                            <g data-name="Group 18" transform="translate(1964.158 1845.821)">
                                                <g
                                                    fill="none"
                                                    stroke="#2b28d5"
                                                    strokeWidth="3"
                                                    data-name="Rectangle 34"
                                                    transform="translate(3.842 16.18)"
                                                >
                                                    <rect width="53" height="48" stroke="none" rx="11"></rect>
                                                    <rect width="50" height="45" x="1.5" y="1.5" rx="9.5"></rect>
                                                </g>
                                                <path
                                                    fill="#fff"
                                                    d="M0 0H65V44H0z"
                                                    data-name="Rectangle 35"
                                                    transform="translate(-.158 .18)"
                                                ></path>
                                                <path
                                                    fill="#2b28d5"
                                                    d="M38.048 15.794a2.113 2.113 0 000-3.333L24.168.69a3.143 3.143 0 00-3.93 0 2.113 2.113 0 000 3.349l9.154 7.756H2.775A2.589 2.589 0 000 14.138a2.589 2.589 0 002.775 2.355h26.608l-9.137 7.744a2.113 2.113 0 000 3.333 3.143 3.143 0 003.93 0l13.88-11.77z"
                                                    transform="rotate(91 17.844 26.71)"
                                                ></path>
                                            </g>
                                            <text
                                                fill="#332ee2"
                                                fontFamily="Roboto-Bold, Roboto"
                                                fontSize="60"
                                                fontWeight="700"
                                                transform="translate(2048.418 1902.821)"
                                            >
                                                <tspan x="0" y="0">
                                                    Download
                                                </tspan>
                                            </text>
                                            <rect
                                                width="1692"
                                                height="670"
                                                fill="#fff"
                                                data-name="Rectangle 36"
                                                rx="62"
                                                transform="translate(692 2056)"
                                            ></rect>
                                            <text
                                                fill="#707070"
                                                data-name="Exclude from analytics"
                                                fontFamily="Roboto-Medium, Roboto"
                                                fontSize="63"
                                                fontWeight="500"
                                                transform="translate(764.911 2188.587)"
                                            >
                                                <tspan x="0" y="0">
                                                    Exclude from analytics
                                                </tspan>
                                            </text>
                                            <text
                                                fill="#707070"
                                                fontFamily="Roboto-Medium, Roboto"
                                                fontSize="63"
                                                fontWeight="500"
                                                transform="translate(763.085 2398.641)"
                                            >
                                                <tspan x="0" y="0">
                                                    Category
                                                </tspan>
                                            </text>
                                            <text
                                                fill="#707070"
                                                data-name="Amount in analytics"
                                                fontFamily="Roboto-Medium, Roboto"
                                                fontSize="63"
                                                fontWeight="500"
                                                transform="translate(763.639 2608.696)"
                                            >
                                                <tspan x="0" y="0">
                                                    Amount in analytics
                                                </tspan>
                                            </text>
                                            <text
                                                fill="#332ee2"
                                                fontFamily="Roboto-Bold, Roboto"
                                                fontSize="60"
                                                fontWeight="700"
                                                letterSpacing=".03em"
                                                transform="translate(2055.245 2395.641)"
                                            >
                                                <tspan x="0" y="0">
                                                    Transfers
                                                </tspan>
                                            </text>
                                            <text
                                                fill="#332ee2"
                                                data-name="$145.80"
                                                fontFamily="Roboto-Bold, Roboto"
                                                fontSize="60"
                                                fontWeight="700"
                                                letterSpacing=".03em"
                                                transform="translate(2095.151 2609.736)"
                                            >
                                                <tspan x="230" y="0" textAnchor="end">
                                                    {data.amountAlt}
                                                </tspan>
                                            </text>
                                            <g
                                                stroke="#e9e9e9"
                                                strokeWidth="2"
                                                data-name="Group 19"
                                                transform="translate(2109.581 2100.31)"
                                            >
                                                <g
                                                    fill="#e9e9e9"
                                                    data-name="Rectangle 37"
                                                    transform="translate(-3.58 -3.311)"
                                                >
                                                    <rect width="232" height="140" stroke="none" rx="67"></rect>
                                                    <rect
                                                        width="230"
                                                        height="138"
                                                        x="1"
                                                        y="1"
                                                        fill="none"
                                                        rx="66"
                                                    ></rect>
                                                </g>
                                                <g
                                                    fill="#fff"
                                                    data-name="Ellipse 6"
                                                    transform="translate(.42 -.311)"
                                                >
                                                    <ellipse
                                                        cx="66.5"
                                                        cy="67"
                                                        stroke="none"
                                                        rx="66.5"
                                                        ry="67"
                                                    ></ellipse>
                                                    <ellipse
                                                        cx="66.5"
                                                        cy="67"
                                                        fill="none"
                                                        rx="65.5"
                                                        ry="66"
                                                    ></ellipse>
                                                </g>
                                            </g>
                                            <g
                                                fill="#332ee2"
                                                data-name="Group 22"
                                                transform="translate(1929.649 2346.526)"
                                            >
                                                <g data-name="Group 20" transform="translate(22.391)">
                                                    <path
                                                        d="M12.119 0l12.118 20.2H0z"
                                                        data-name="Polygon 2"
                                                        transform="rotate(90 22.218 22.218)"
                                                    ></path>
                                                    <path
                                                        d="M0 0H24.237V8.079H0z"
                                                        data-name="Rectangle 31"
                                                        transform="translate(0 8.079)"
                                                    ></path>
                                                </g>
                                                <g data-name="Group 21" transform="rotate(179.026 22.187 28.067)">
                                                    <path
                                                        d="M12.119 0l12.118 20.2H0z"
                                                        data-name="Polygon 2"
                                                        transform="rotate(90 22.218 22.218)"
                                                    ></path>
                                                    <path
                                                        d="M0 0H24.237V8.079H0z"
                                                        data-name="Rectangle 31"
                                                        transform="translate(0 8.079)"
                                                    ></path>
                                                </g>
                                            </g>
                                            <rect
                                                width="1692"
                                                height="218"
                                                fill="#fff"
                                                data-name="Rectangle 38"
                                                rx="62"
                                                transform="translate(692 2767)"
                                            ></rect>
                                            <rect
                                                width="1692"
                                                height="250"
                                                fill="#fff"
                                                data-name="Rectangle 39"
                                                rx="62"
                                                transform="translate(692 3054)"
                                            ></rect>
                                            <g
                                                fill="#332ee2"
                                                data-name="Group 23"
                                                transform="translate(2049.662 2850.314)"
                                            >
                                                <path
                                                    d="M17.451 35.745l-1.212 3.563h-8.75A7.408 7.408 0 000 46.619v29.238a7.408 7.408 0 007.489 7.312h44.94a7.408 7.408 0 007.489-7.312V46.619a7.408 7.408 0 00-7.489-7.312h-8.742l-1.212-3.563A5.591 5.591 0 0037.164 32H22.775a5.591 5.591 0 00-5.324 3.745zm12.522 14.542A10.967 10.967 0 1118.739 61.25a11.1 11.1 0 0111.222-10.975z"
                                                    transform="translate(0 -32)"
                                                ></path>
                                                <g
                                                    stroke="#5258ec"
                                                    strokeWidth="0.5"
                                                    data-name="Ellipse 7"
                                                    transform="translate(21.878 21.244)"
                                                >
                                                    <circle cx="7.982" cy="7.982" r="7.982" stroke="none"></circle>
                                                    <circle cx="7.982" cy="7.982" r="7.732" fill="none"></circle>
                                                </g>
                                            </g>
                                            <text
                                                fill="#707070"
                                                fontFamily="Roboto-Medium, Roboto"
                                                fontSize="63"
                                                fontWeight="500"
                                                transform="translate(764.338 2899.541)"
                                            >
                                                <tspan x="0" y="0">
                                                    Receipt
                                                </tspan>
                                            </text>
                                            <text
                                                fill="#332ee2"
                                                fontFamily="Roboto-Bold, Roboto"
                                                fontSize="60"
                                                fontWeight="700"
                                                letterSpacing=".03em"
                                                transform="translate(2134.331 2900.581)"
                                            >
                                                <tspan x="0" y="0">
                                                    Upload
                                                </tspan>
                                            </text>
                                            <text
                                                fill="#171515"
                                                data-name="Get help"
                                                fontFamily="Roboto-Bold, Roboto"
                                                fontSize="63"
                                                fontWeight="700"
                                                transform="translate(764.62 3202.505)"
                                            >
                                                <tspan x="0" y="0">
                                                    Get help
                                                </tspan>
                                            </text>
                                            <g
                                                fill="#b1adad"
                                                data-name="Group 24"
                                                transform="rotate(180 1152.864 1601.54)"
                                            >
                                                <path
                                                    d="M3.28 0l27.469.125a3.333 3.333 0 013.308 3.308 3.26 3.26 0 01-3.28 3.28L3.312 6.589A3.333 3.333 0 010 3.276 3.26 3.26 0 013.28 0z"
                                                    data-name="Path 10"
                                                    transform="rotate(-44.03 29.272 11.835)"
                                                ></path>
                                                <path
                                                    d="M3.308.125L30.777 0a3.26 3.26 0 013.28 3.28 3.333 3.333 0 01-3.308 3.308L3.28 6.714A3.26 3.26 0 010 3.434 3.333 3.333 0 013.308.125z"
                                                    data-name="Path 11"
                                                    transform="rotate(-134.03 22.437 19.05)"
                                                ></path>
                                            </g>
                                            <rect
                                                width="662"
                                                height="29"
                                                fill="#201e1e"
                                                data-name="Rectangle 40"
                                                rx="14.5"
                                                transform="translate(1209 3954)"
                                            ></rect>
                                        </g>
                                        <circle
                                            cx="15.5"
                                            cy="15.5"
                                            r="15.5"
                                            fill="#fff"
                                            data-name="Ellipse 109"
                                            transform="translate(3886 788)"
                                        ></circle>
                                    </g>

                                    {
                                        battery === "25"
                                            ?
                                            <>
                                                <rect
                                                    width="103"
                                                    height="56"
                                                    fill="#fff"
                                                    data-name="Rectangle 170"
                                                    rx="23"
                                                    transform="translate(3795 145)"
                                                ></rect>
                                                <path
                                                    fill="#818d9d"
                                                    d="M0 0a6 6 0 016 6v2a6 6 0 01-6 6V0z"
                                                    data-name="Rectangle 172"
                                                    transform="translate(3899 167)"
                                                ></path>
                                                <path
                                                    fill="#818d9d"
                                                    d="M0 0h52a23 23 0 0123 23v10a23 23 0 01-23 23H0V0z"
                                                    data-name="Rectangle 171"
                                                    transform="translate(3823 145)"
                                                ></path>
                                                <text
                                                    fill="#0a1032"
                                                    data-name="25"
                                                    fontFamily="HelveticaWorld-Bold, Helvetica World"
                                                    fontSize="47"
                                                    fontWeight="700"
                                                    transform="translate(3819 190)"
                                                >
                                                    <tspan x="0" y="0">
                                                        25
                                                    </tspan>
                                                </text>
                                            </>
                                            :
                                            battery === "50"
                                                ?
                                                <>
                                                    <rect
                                                        width="103"
                                                        height="56"
                                                        fill="#fff"
                                                        data-name="Rectangle 170"
                                                        rx="23"
                                                        transform="translate(3795 145)"
                                                    ></rect>
                                                    <path
                                                        fill="#818d9d"
                                                        d="M0 0a6 6 0 016 6v2a6 6 0 01-6 6V0z"
                                                        data-name="Rectangle 172"
                                                        transform="translate(3899 167)"
                                                    ></path>
                                                    <path
                                                        fill="#818d9d"
                                                        d="M0 0h27a23 23 0 0123 23v10a23 23 0 01-23 23H0V0z"
                                                        data-name="Rectangle 171"
                                                        transform="translate(3848 145)"
                                                    ></path>
                                                    <text
                                                        fill="#0a1032"
                                                        data-name="50"
                                                        fontFamily="HelveticaWorld-Bold, Helvetica World"
                                                        fontSize="47"
                                                        fontWeight="700"
                                                        transform="translate(3819 190)"
                                                    >
                                                        <tspan x="0" y="0">
                                                            50
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
                                                        transform="translate(3795 145)"
                                                    ></rect>
                                                    <path
                                                        fill="#818d9d"
                                                        d="M0 0a6 6 0 016 6v3a6 6 0 01-6 6V0z"
                                                        data-name="Rectangle 172"
                                                        transform="translate(3899 166)"
                                                    ></path>
                                                    <path
                                                        fill="#818d9d"
                                                        d="M0 0h3a23 23 0 0123 23v10A23 23 0 013 56H0V0z"
                                                        data-name="Rectangle 171"
                                                        transform="translate(3872 145)"
                                                    ></path>
                                                    <text
                                                        fill="#0a1032"
                                                        data-name="78"
                                                        fontFamily="HelveticaWorld-Bold, Helvetica World"
                                                        fontSize="47"
                                                        fontWeight="700"
                                                        transform="translate(3819 189)"
                                                    >
                                                        <tspan x="0" y="0">
                                                            78
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
                                                    transform="translate(3582 180)"
                                                ></rect>
                                                <rect
                                                    width="14"
                                                    height="26"
                                                    fill="#fff"
                                                    data-name="Rectangle 36"
                                                    rx="2"
                                                    transform="translate(3604 171)"
                                                ></rect>
                                                <rect
                                                    width="12"
                                                    height="38"
                                                    fill="#fff"
                                                    data-name="Rectangle 37"
                                                    rx="2"
                                                    transform="translate(3627 159)"
                                                ></rect>
                                                <rect
                                                    width="12"
                                                    height="50"
                                                    fill="#fff"
                                                    data-name="Rectangle 38"
                                                    rx="2"
                                                    transform="translate(3650 147)"
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
                                                        transform="translate(3582 180)"
                                                    ></rect>
                                                    <rect
                                                        width="14"
                                                        height="26"
                                                        fill="#384965"
                                                        data-name="Rectangle 36"
                                                        rx="2"
                                                        transform="translate(3604 171)"
                                                    ></rect>
                                                    <rect
                                                        width="12"
                                                        height="38"
                                                        fill="#384965"
                                                        data-name="Rectangle 37"
                                                        rx="2"
                                                        transform="translate(3627 159)"
                                                    ></rect>
                                                    <rect
                                                        width="12"
                                                        height="50"
                                                        fill="#384965"
                                                        data-name="Rectangle 38"
                                                        rx="2"
                                                        transform="translate(3650 147)"
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
                                                        transform="translate(3581 179)"
                                                    ></rect>
                                                    <rect
                                                        width="14"
                                                        height="27"
                                                        fill="#fff"
                                                        data-name="Rectangle 36"
                                                        rx="2"
                                                        transform="translate(3604 170)"
                                                    ></rect>
                                                    <rect
                                                        width="14"
                                                        height="39"
                                                        fill="#384965"
                                                        data-name="Rectangle 37"
                                                        rx="2"
                                                        transform="translate(3627 158)"
                                                    ></rect>
                                                    <rect
                                                        width="12"
                                                        height="52"
                                                        fill="#384965"
                                                        data-name="Rectangle 38"
                                                        rx="2"
                                                        transform="translate(3652 145)"
                                                    ></rect>
                                                </>
                                    }
                                    {
                                        net === "5G"
                                            ?
                                            <text
                                                fill="#fff"
                                                data-name="5G"
                                                fontFamily="Roboto-Medium, Roboto"
                                                fontSize="53"
                                                fontWeight="500"
                                                transform="translate(3694 191)"
                                            >
                                                <tspan x="0" y="0">
                                                    5G
                                                </tspan>
                                            </text>
                                            :
                                            net === "4G"
                                                ?
                                                <text
                                                    fill="#fff"
                                                    data-name="4G"
                                                    fontFamily="Roboto-Medium, Roboto"
                                                    fontSize="53"
                                                    fontWeight="500"
                                                    transform="translate(3694 193)"
                                                >
                                                    <tspan x="0" y="0">
                                                        4G
                                                    </tspan>
                                                </text>
                                                :
                                                <>
                                                    <path
                                                        fill="#fff"
                                                        d="M100.484 192a53.985 53.985 0 00-36.172 14.42 1.3 1.3 0 00-.049 1.862l4.36 4.556a1.341 1.341 0 001.894.049 43.871 43.871 0 0129.983-11.709 43.871 43.871 0 0129.982 11.709 1.341 1.341 0 001.894-.049l4.36-4.556a1.3 1.3 0 00-.049-1.862A54.13 54.13 0 00100.484 192z"
                                                        data-name="Path 7"
                                                        transform="translate(3627.117 -45.098)"
                                                    ></path>
                                                    <path
                                                        fill="#fff"
                                                        d="M221.945 433.227l4.67 4.621a1.339 1.339 0 001.829.049 25.4 25.4 0 0133.608 0 1.339 1.339 0 001.829-.049l4.67-4.621a1.3 1.3 0 00-.049-1.911 34.825 34.825 0 00-46.541 0 1.331 1.331 0 00-.016 1.911zm23.32 7.626a13.306 13.306 0 00-9.7 4.164 1.306 1.306 0 00.033 1.829l8.72 8.606a1.34 1.34 0 001.894 0l8.72-8.606a1.306 1.306 0 00.033-1.829 13.369 13.369 0 00-9.7-4.164z"
                                                        data-name="Path 8"
                                                        transform="translate(3482.336 -256.685)"
                                                    ></path>
                                                </>
                                    }
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
                        <label>Username</label>
                        <input
                            type="text"
                            value={data.username}
                            name="username"
                            onChange={(e) => onChangeHandler(e)}
                        />
                        <input
                            type="text"
                            value={data.usernameAlt}
                            name="usernameAlt"
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
                        <label>Amount in analytics</label>
                        <input
                            type="text"
                            value={data.amountAlt}
                            name="amountAlt"
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

export default SixtyFourPage;