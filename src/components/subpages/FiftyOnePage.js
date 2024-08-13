import React, { useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import { write } from 'clipboard-polyfill';
import "../../assets/styles/secondpage.scss";
import { ToastContainer, toast } from 'react-toastify';

const FiftyOnePage = () => {
    const screenshotRef = useRef(null);

    const [data, setData] = useState({
        time: "12:23",
        securityCode: "441J5F2D",
        securityAnswer: "441J5F2D",
        date: "Mar 20, 2024"
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
                    <h3>PREVIEW - <span>Mobile 51</span></h3>
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
                                viewBox="0 0 2012 4037"
                            >
                                <defs>
                                    <filter
                                        id="Rectangle_298"
                                        width="1862"
                                        height="1009"
                                        x="75"
                                        y="594"
                                        filterUnits="userSpaceOnUse"
                                    >
                                        <feOffset dy="9"></feOffset>
                                        <feGaussianBlur result="blur" stdDeviation="8"></feGaussianBlur>
                                        <feFlood floodOpacity="0.22"></feFlood>
                                        <feComposite in2="blur" operator="in"></feComposite>
                                        <feComposite in="SourceGraphic"></feComposite>
                                    </filter>
                                    <filter
                                        id="Rectangle_304"
                                        width="1892"
                                        height="1481"
                                        x="60"
                                        y="1662"
                                        filterUnits="userSpaceOnUse"
                                    >
                                        <feOffset></feOffset>
                                        <feGaussianBlur result="blur-2" stdDeviation="13"></feGaussianBlur>
                                        <feFlood floodOpacity="0.22"></feFlood>
                                        <feComposite in2="blur-2" operator="in"></feComposite>
                                        <feComposite in="SourceGraphic"></feComposite>
                                    </filter>
                                    <filter
                                        id="Rectangle_307"
                                        width="1892"
                                        height="747"
                                        x="57"
                                        y="3194"
                                        filterUnits="userSpaceOnUse"
                                    >
                                        <feOffset></feOffset>
                                        <feGaussianBlur result="blur-3" stdDeviation="13"></feGaussianBlur>
                                        <feFlood floodOpacity="0.22"></feFlood>
                                        <feComposite in2="blur-3" operator="in"></feComposite>
                                        <feComposite in="SourceGraphic"></feComposite>
                                    </filter>
                                    <filter
                                        id="Rectangle_309"
                                        width="2012"
                                        height="625"
                                        x="0"
                                        y="3412"
                                        filterUnits="userSpaceOnUse"
                                    >
                                        <feOffset dy="-10"></feOffset>
                                        <feGaussianBlur result="blur-4" stdDeviation="26"></feGaussianBlur>
                                        <feFlood floodOpacity="0.161"></feFlood>
                                        <feComposite in2="blur-4" operator="in"></feComposite>
                                        <feComposite in="SourceGraphic"></feComposite>
                                    </filter>
                                </defs>
                                <g data-name="Group 217" transform="translate(4097 -7928)">
                                    <path
                                        fill="#fff"
                                        d="M0 0H1856V3969H0z"
                                        data-name="Rectangle 295"
                                        transform="translate(-4019 7928)"
                                    ></path>
                                    <g
                                        fill="#0f1014"
                                        stroke="#707070"
                                        strokeWidth="1"
                                        data-name="Rectangle 296"
                                        transform="translate(-4019 7928)"
                                    >
                                        <path stroke="none" d="M0 0H1856V358H0z"></path>
                                        <path fill="none" d="M0.5 0.5H1855.5V357.5H0.5z"></path>
                                    </g>
                                    <path
                                        fill="#fff"
                                        d="M39.524 61.614L10.54 33.848 40.334 4.865 34.862 0 0 33.848 11.426 44.61l23.436 22.073z"
                                        data-name="Path 15"
                                        transform="translate(-3930.217 8138.129)"
                                    ></path>
                                    <path
                                        fill="#fff"
                                        d="M0 0H67.88V7.424H0z"
                                        data-name="Rectangle 72"
                                        transform="translate(-3921.881 8168.566)"
                                    ></path>
                                    <text
                                        fill="#fff"
                                        data-name="Send Money"
                                        fontFamily="Roboto-Medium, Roboto"
                                        fontSize="97"
                                        fontWeight="500"
                                        transform="translate(-3091 8205)"
                                    >
                                        <tspan x="-268.1" y="0">
                                            Send Money
                                        </tspan>
                                    </text>
                                    <g filter="url(#Rectangle_298)" transform="translate(-4097 7928)">
                                        <rect
                                            width="1814"
                                            height="961"
                                            fill="#fff"
                                            data-name="Rectangle 298"
                                            rx="32"
                                            transform="translate(99 609)"
                                        ></rect>
                                    </g>
                                    <g filter="url(#Rectangle_304)" transform="translate(-4097 7928)">
                                        <rect
                                            width="1814"
                                            height="1403"
                                            fill="#fff"
                                            data-name="Rectangle 304"
                                            rx="32"
                                            transform="translate(99 1701)"
                                        ></rect>
                                    </g>
                                    <g filter="url(#Rectangle_307)" transform="translate(-4097 7928)">
                                        <rect
                                            width="1814"
                                            height="669"
                                            fill="#fff"
                                            data-name="Rectangle 307"
                                            rx="32"
                                            transform="translate(96 3233)"
                                        ></rect>
                                    </g>
                                    <text
                                        fill="#565656"
                                        data-name="Re-enter security answer."
                                        fontFamily="Roboto-Bold, Roboto"
                                        fontSize="76"
                                        fontWeight="700"
                                        transform="translate(-3466 9231)"
                                    >
                                        <tspan x="-435.868" y="0">
                                            Re-enter security answer.
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#565656"
                                        data-name="Transfer date"
                                        fontFamily="Roboto-Bold, Roboto"
                                        fontSize="76"
                                        fontWeight="700"
                                        transform="translate(-3673 10765)"
                                    >
                                        <tspan x="-229.002" y="0">
                                            Transfer date
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#565656"
                                        data-name="Message (optional)"
                                        fontFamily="Roboto-Bold, Roboto"
                                        fontSize="76"
                                        fontWeight="700"
                                        transform="translate(-3570 11291)"
                                    >
                                        <tspan x="-330.719" y="0">
                                            Message (optional)
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#565656"
                                        fontFamily="Roboto-Bold, Roboto"
                                        fontSize="76"
                                        fontWeight="700"
                                        transform="translate(-3825 9805)"
                                    >
                                        <tspan x="-76.26" y="0">
                                            How
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#565656"
                                        fontFamily="Roboto-Bold, Roboto"
                                        fontSize="103"
                                        fontWeight="700"
                                        transform="translate(-3813 9946)"
                                    >
                                        <tspan x="-91.257" y="0">
                                            Onc
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#565656"
                                        data-name="Security Code"
                                        fontFamily="Roboto-Bold, Roboto"
                                        fontSize="76"
                                        fontWeight="700"
                                        transform="translate(-3662 8579)"
                                    >
                                        <tspan x="-238.595" y="0">
                                            Security Code
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#3e3e3e"
                                        data-name="441J5F2D"
                                        fontFamily="Roboto-Bold, Roboto"
                                        fontSize="97"
                                        fontWeight="700"
                                        transform="translate(-3678 8720)"
                                    >
                                        <tspan x="-224.313" y="0">
                                            {data.securityCode}
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#3e3e3e"
                                        data-name="441J5F2D"
                                        fontFamily="Roboto-Bold, Roboto"
                                        fontSize="97"
                                        fontWeight="700"
                                        transform="translate(-3678 9374)"
                                    >
                                        <tspan x="-224.313" y="0">
                                            {data.securityAnswer}
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#3e3e3e"
                                        data-name="Mar 19, 2024"
                                        fontFamily="Roboto-Bold, Roboto"
                                        fontSize="97"
                                        fontWeight="700"
                                        transform="translate(-3612 10910)"
                                    >
                                        <tspan x="-289.129" y="0">
                                            {data.date}
                                        </tspan>
                                    </text>
                                    <path
                                        fill="#fff"
                                        d="M0 0H1856V284H0z"
                                        data-name="Rectangle 299"
                                        transform="translate(-4019 8286)"
                                    ></path>
                                    <text
                                        fill="#636363"
                                        data-name="Need more info?"
                                        fontFamily="Roboto-Medium, Roboto"
                                        fontSize="85"
                                        fontWeight="500"
                                        letterSpacing=".03em"
                                        textDecoration="underline"
                                        transform="translate(-3091 8457)"
                                    >
                                        <tspan x="-331.744" y="0">
                                            Need more info?
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#2f98ae"
                                        data-name="6 to 25 characters, without symbols"
                                        fontFamily="Roboto-Bold, Roboto"
                                        fontSize="71"
                                        fontWeight="700"
                                        letterSpacing=".002em"
                                        transform="translate(-3274 8911)"
                                    >
                                        <tspan x="-571.523" y="0">
                                            6 to 25 characters, without symbols
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#2f98ae"
                                        data-name="bank account number as the transfer"
                                        fontFamily="Roboto-Bold, Roboto"
                                        fontSize="73"
                                        fontWeight="700"
                                        letterSpacing=".05em"
                                        transform="translate(-3169 10450)"
                                    >
                                        <tspan x="-665.494" y="0">
                                            bank account number as the transfer
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#2f98ae"
                                        fontFamily="Roboto-Bold, Roboto"
                                        fontSize="73"
                                        fontWeight="700"
                                        letterSpacing=".05em"
                                        transform="translate(-3686 10548)"
                                    >
                                        <tspan x="-146.845" y="0">
                                            method.
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#2f98ae"
                                        fontFamily="Roboto-Bold, Roboto"
                                        fontSize="73"
                                        fontWeight="700"
                                        letterSpacing=".05em"
                                        transform="translate(-3769 10244)"
                                    >
                                        <tspan x="-62.766" y="0">
                                            you
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#2f98ae"
                                        fontFamily="Roboto-Bold, Roboto"
                                        fontSize="73"
                                        fontWeight="700"
                                        letterSpacing=".05em"
                                        transform="translate(-3789 10345)"
                                    >
                                        <tspan x="-42.798" y="0">
                                            ph
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#2f98ae"
                                        fontFamily="Roboto-Bold, Roboto"
                                        fontSize="73"
                                        fontWeight="700"
                                        letterSpacing=".05em"
                                        transform="translate(-2390 10149)"
                                    >
                                        <tspan x="-55.976" y="0">
                                            hat
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#2f98ae"
                                        fontFamily="Roboto-Bold, Roboto"
                                        fontSize="73"
                                        fontWeight="700"
                                        letterSpacing=".05em"
                                        transform="translate(-2382 10248)"
                                    >
                                        <tspan x="-65.108" y="0">
                                            bile
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#2f98ae"
                                        fontFamily="Roboto-Bold, Roboto"
                                        fontSize="73"
                                        fontWeight="700"
                                        letterSpacing=".05em"
                                        transform="translate(-2411 10350)"
                                    >
                                        <tspan x="-33.192" y="0">
                                            ct
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#2f98ae"
                                        fontFamily="Roboto-Bold, Roboto"
                                        fontSize="73"
                                        fontWeight="700"
                                        letterSpacing=".05em"
                                        transform="translate(-3790 10148)"
                                    >
                                        <tspan x="-41.337" y="0">
                                            To
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#2f98ae"
                                        data-name="or spaces"
                                        fontFamily="Roboto-Bold, Roboto"
                                        fontSize="70"
                                        fontWeight="700"
                                        letterSpacing=".002em"
                                        transform="translate(-3689 9005)"
                                    >
                                        <tspan x="-153.463" y="0">
                                            or spaces
                                        </tspan>
                                    </text>
                                    <circle
                                        cx="35.5"
                                        cy="35.5"
                                        r="35.5"
                                        fill="#5e5e5e"
                                        data-name="Ellipse 56"
                                        transform="translate(-3948 8906)"
                                    ></circle>
                                    <circle
                                        cx="35.5"
                                        cy="35.5"
                                        r="35.5"
                                        fill="#5e5e5e"
                                        data-name="Ellipse 57"
                                        transform="translate(-3955 10288)"
                                    ></circle>
                                    <text
                                        fill="#fff"
                                        fontFamily="Roboto-Bold, Roboto"
                                        fontSize="59"
                                        fontWeight="700"
                                        letterSpacing=".019em"
                                        transform="translate(-3912 8964)"
                                    >
                                        <tspan x="-7.822" y="0">
                                            i
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#fff"
                                        data-name="i"
                                        fontFamily="Roboto-Bold, Roboto"
                                        fontSize="59"
                                        fontWeight="700"
                                        letterSpacing=".019em"
                                        transform="translate(-3919 10346)"
                                    >
                                        <tspan x="-7.822" y="0">
                                            i
                                        </tspan>
                                    </text>
                                    <path
                                        fill="#e3e3e3"
                                        d="M0 0H1735V9H0z"
                                        data-name="Rectangle 300"
                                        transform="translate(-3962 8795)"
                                    ></path>
                                    <path
                                        fill="#e3e3e3"
                                        d="M0 0H1735V9H0z"
                                        data-name="Rectangle 301"
                                        transform="translate(-3962 9451)"
                                    ></path>
                                    <path
                                        fill="#e3e3e3"
                                        d="M0 0H1735V9H0z"
                                        data-name="Rectangle 305"
                                        transform="translate(-3962 10019)"
                                    ></path>
                                    <path
                                        fill="#e3e3e3"
                                        d="M0 0H1735V9H0z"
                                        data-name="Rectangle 306"
                                        transform="translate(-3962 10986)"
                                    ></path>
                                    <g
                                        fill="#fff"
                                        stroke="#707070"
                                        strokeWidth="3"
                                        data-name="Rectangle 308"
                                        transform="translate(-3964 11350)"
                                    >
                                        <rect width="1750" height="179" stroke="none" rx="26"></rect>
                                        <rect
                                            width="1747"
                                            height="176"
                                            x="1.5"
                                            y="1.5"
                                            fill="none"
                                            rx="24.5"
                                        ></rect>
                                    </g>
                                    <text
                                        fill="#565656"
                                        data-name="Enter message"
                                        fontFamily="Roboto-Bold, Roboto"
                                        fontSize="93"
                                        fontWeight="700"
                                        opacity="0.76"
                                        transform="translate(-3619 11448)"
                                    >
                                        <tspan x="-311.4" y="0">
                                            Enter message
                                        </tspan>
                                    </text>
                                    <g filter="url(#Rectangle_309)" transform="translate(-4097 7928)">
                                        <path
                                            fill="#fff"
                                            d="M0 0H1856V469H0z"
                                            data-name="Rectangle 309"
                                            transform="translate(78 3500)"
                                        ></path>
                                    </g>
                                    <g
                                        fill="#b2016d"
                                        stroke="#707070"
                                        strokeWidth="1"
                                        data-name="Rectangle 310"
                                        transform="translate(-3068 11486)"
                                    >
                                        <rect width="884" height="224" stroke="none" rx="112"></rect>
                                        <rect
                                            width="883"
                                            height="223"
                                            x="0.5"
                                            y="0.5"
                                            fill="none"
                                            rx="111.5"
                                        ></rect>
                                    </g>
                                    <g
                                        fill="none"
                                        stroke="#b2016d"
                                        strokeWidth="7"
                                        data-name="Rectangle 311"
                                        transform="translate(-3984 11486)"
                                    >
                                        <rect width="884" height="224" stroke="none" rx="112"></rect>
                                        <rect width="877" height="217" x="3.5" y="3.5" rx="108.5"></rect>
                                    </g>
                                    <text
                                        fill="#b2016d"
                                        fontFamily="Roboto-Medium, Roboto"
                                        fontSize="98"
                                        fontWeight="500"
                                        transform="translate(-3542 11632)"
                                    >
                                        <tspan x="-150.206" y="0">
                                            Cancel
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#fff"
                                        fontFamily="Roboto-Medium, Roboto"
                                        fontSize="98"
                                        fontWeight="500"
                                        transform="translate(-2626 11638)"
                                    >
                                        <tspan x="-196.718" y="0">
                                            Continue
                                        </tspan>
                                    </text>
                                    <g
                                        fill="none"
                                        stroke="#707070"
                                        strokeWidth="5"
                                        data-name="Group 216"
                                        transform="translate(-2386.292 8578.988)"
                                    >
                                        <path
                                            d="M0 29.545s44.663 75.094 100.583 0"
                                            data-name="Path 102"
                                        ></path>
                                        <path
                                            d="M0 33.375s44.663-75.095 100.583 0"
                                            data-name="Path 103"
                                        ></path>
                                    </g>
                                    <g
                                        fill="none"
                                        stroke="#707070"
                                        strokeWidth="4"
                                        data-name="Ellipse 58"
                                        transform="translate(-2354 8593)"
                                    >
                                        <circle cx="18" cy="18" r="18" stroke="none"></circle>
                                        <circle cx="18" cy="18" r="16"></circle>
                                    </g>
                                    <g
                                        fill="none"
                                        stroke="#707070"
                                        strokeWidth="5"
                                        data-name="Group 216"
                                        transform="translate(-2386.292 9223.08)"
                                    >
                                        <path
                                            d="M0 29.545s44.663 75.094 100.583 0"
                                            data-name="Path 102"
                                        ></path>
                                        <path
                                            d="M0 33.375s44.663-75.095 100.583 0"
                                            data-name="Path 103"
                                        ></path>
                                    </g>
                                    <g
                                        fill="none"
                                        stroke="#707070"
                                        strokeWidth="4"
                                        data-name="Ellipse 58"
                                        transform="translate(-2354 9237.092)"
                                    >
                                        <circle cx="18" cy="18" r="18" stroke="none"></circle>
                                        <circle cx="18" cy="18" r="16"></circle>
                                    </g>
                                    <g
                                        fill="none"
                                        stroke="#707070"
                                        strokeWidth="4"
                                        data-name="Rectangle 312"
                                        transform="translate(-2379.708 10759)"
                                    >
                                        <rect width="94" height="87" stroke="none" rx="10"></rect>
                                        <rect width="90" height="83" x="2" y="2" rx="8"></rect>
                                    </g>
                                    <path
                                        fill="none"
                                        stroke="#707070"
                                        strokeWidth="3"
                                        d="M0 0L91.679 0"
                                        data-name="Line 16"
                                        transform="translate(-2378.548 10784.994)"
                                    ></path>
                                    <g
                                        fill="none"
                                        stroke="#707070"
                                        strokeWidth="3"
                                        data-name="Rectangle 313"
                                        transform="translate(-2317.708 10811)"
                                    >
                                        <path stroke="none" d="M0 0H19V20H0z"></path>
                                        <path d="M1.5 1.5H17.5V18.5H1.5z"></path>
                                    </g>
                                    <path
                                        fill="none"
                                        stroke="#707070"
                                        strokeWidth="4"
                                        d="M0 0L0 17.407"
                                        data-name="Line 17"
                                        transform="translate(-2355.918 10752.5)"
                                    ></path>
                                    <path
                                        fill="none"
                                        stroke="#707070"
                                        strokeWidth="4"
                                        d="M0 0L0 17.407"
                                        data-name="Line 18"
                                        transform="translate(-2308.338 10752.5)"
                                    ></path>
                                    <path
                                        d="M0 0H1856V3790H0z"
                                        data-name="Rectangle 297"
                                        opacity="0.2"
                                        transform="translate(-4019 8107)"
                                    ></path>
                                    <rect
                                        width="1296"
                                        height="948"
                                        fill="#efefef"
                                        data-name="Rectangle 302"
                                        rx="64"
                                        transform="translate(-3739 9438)"
                                    ></rect>
                                    <text
                                        fill="#2b2b2b"
                                        data-name="The amount you entered"
                                        fontFamily="Roboto-Bold, Roboto"
                                        fontSize="82"
                                        fontWeight="700"
                                        transform="translate(-3096 9736)"
                                    >
                                        <tspan x="-448.898" y="0">
                                            The amount you entered
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#2b2b2b"
                                        data-name="exceeds the maximum"
                                        fontFamily="Roboto-Bold, Roboto"
                                        fontSize="82"
                                        fontWeight="700"
                                        transform="translate(-3091 9827)"
                                    >
                                        <tspan x="-415.025" y="0">
                                            exceeds the maximum
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#2b2b2b"
                                        data-name="transfer limit for the day."
                                        fontFamily="Roboto-Bold, Roboto"
                                        fontSize="82"
                                        fontWeight="700"
                                        transform="translate(-3091 9926)"
                                    >
                                        <tspan x="-454.083" y="0">
                                            transfer limit for the day.
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#2b2b2b"
                                        data-name="Please try again. (0159)"
                                        fontFamily="Roboto-Bold, Roboto"
                                        fontSize="82"
                                        fontWeight="700"
                                        transform="translate(-3096 10025)"
                                    >
                                        <tspan x="-441.13" y="0">
                                            Please try again. (0159)
                                        </tspan>
                                    </text>
                                    <text
                                        fill="#2f80d7"
                                        fontFamily="Roboto-Bold, Roboto"
                                        fontSize="97"
                                        fontWeight="700"
                                        transform="translate(-3091 10310)"
                                    >
                                        <tspan x="-64.272" y="0">
                                            OK
                                        </tspan>
                                    </text>
                                    <path
                                        fill="#dbdbdb"
                                        d="M0 0H1296V9H0z"
                                        data-name="Rectangle 303"
                                        transform="translate(-3739 10167)"
                                    ></path>
                                    <text
                                        fill="#fff"
                                        data-name="12:23"
                                        fontFamily="Roboto-Medium, Roboto"
                                        fontSize="80"
                                        fontWeight="500"
                                        transform="translate(-3718 8043)"
                                    >
                                        <tspan x="-101.543" y="0">
                                            {data.time}
                                        </tspan>
                                    </text>
                                    {
                                        network === "mid"
                                            ?
                                            <>
                                                <rect
                                                    width="14"
                                                    height="21"
                                                    fill="#fff"
                                                    data-name="Rectangle 314"
                                                    rx="2"
                                                    transform="translate(-2680 8024)"
                                                ></rect>
                                                <rect
                                                    width="17"
                                                    height="32"
                                                    fill="#fff"
                                                    data-name="Rectangle 315"
                                                    rx="2"
                                                    transform="translate(-2653 8013)"
                                                ></rect>
                                                <rect
                                                    width="16"
                                                    height="46"
                                                    fill="#384965"
                                                    data-name="Rectangle 316"
                                                    rx="2"
                                                    transform="translate(-2627 7999)"
                                                ></rect>
                                                <rect
                                                    width="15"
                                                    height="61"
                                                    fill="#384965"
                                                    data-name="Rectangle 317"
                                                    rx="2"
                                                    transform="translate(-2598 7984)"
                                                ></rect>
                                            </>
                                            :
                                            network === "low"
                                                ?
                                                <>
                                                    <rect
                                                        width="13"
                                                        height="20"
                                                        fill="#fff"
                                                        data-name="Rectangle 318"
                                                        rx="2"
                                                        transform="translate(-2678 8025)"
                                                    ></rect>
                                                    <rect
                                                        width="16"
                                                        height="31"
                                                        fill="#384965"
                                                        data-name="Rectangle 319"
                                                        rx="2"
                                                        transform="translate(-2653 8014)"
                                                    ></rect>
                                                    <rect
                                                        width="15"
                                                        height="44"
                                                        fill="#384965"
                                                        data-name="Rectangle 320"
                                                        rx="2"
                                                        transform="translate(-2627 8001)"
                                                    ></rect>
                                                    <rect
                                                        width="14"
                                                        height="59"
                                                        fill="#384965"
                                                        data-name="Rectangle 321"
                                                        rx="2"
                                                        transform="translate(-2599 7986)"
                                                    ></rect>
                                                </>
                                                :
                                                <>
                                                    <rect
                                                        width="13"
                                                        height="20"
                                                        fill="#fff"
                                                        data-name="Rectangle 322"
                                                        rx="2"
                                                        transform="translate(-2678 8025)"
                                                    ></rect>
                                                    <rect
                                                        width="16"
                                                        height="31"
                                                        fill="#fff"
                                                        data-name="Rectangle 323"
                                                        rx="2"
                                                        transform="translate(-2653 8014)"
                                                    ></rect>
                                                    <rect
                                                        width="15"
                                                        height="44"
                                                        fill="#fff"
                                                        data-name="Rectangle 324"
                                                        rx="2"
                                                        transform="translate(-2627 8001)"
                                                    ></rect>
                                                    <rect
                                                        width="14"
                                                        height="59"
                                                        fill="#fff"
                                                        data-name="Rectangle 325"
                                                        rx="2"
                                                        transform="translate(-2599 7986)"
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
                                                fontSize="57"
                                                fontWeight="600"
                                                transform="translate(-2550 8040)"
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
                                                    fontSize="57"
                                                    fontWeight="600"
                                                    transform="translate(-2550 8042)"
                                                >
                                                    <tspan x="0" y="0">
                                                        4G
                                                    </tspan>
                                                </text>
                                                :
                                                <>
                                                    <path
                                                        fill="#fff"
                                                        d="M104.616 192a60.082 60.082 0 00-40.257 16.048 1.448 1.448 0 00-.055 2.072l4.853 5.071a1.492 1.492 0 002.108.055 48.826 48.826 0 0133.369-13.031A48.826 48.826 0 01138 215.245a1.492 1.492 0 002.108-.055l4.853-5.071a1.449 1.449 0 00-.055-2.072A60.243 60.243 0 00104.616 192z"
                                                        data-name="Path 104"
                                                        transform="translate(-2623.373 7800.462)"
                                                    ></path>
                                                    <path
                                                        fill="#fff"
                                                        d="M221.99 434.45l5.2 5.143a1.49 1.49 0 002.036.055 28.27 28.27 0 0137.4 0 1.49 1.49 0 002.036-.055l5.2-5.143a1.452 1.452 0 00-.055-2.126 38.758 38.758 0 00-51.8 0 1.481 1.481 0 00-.017 2.126zm25.953 8.488a14.808 14.808 0 00-10.8 4.635 1.454 1.454 0 00.036 2.036l9.705 9.578a1.492 1.492 0 002.108 0l9.705-9.578a1.454 1.454 0 00.036-2.036 14.879 14.879 0 00-10.79-4.636z"
                                                        data-name="Path 105"
                                                        transform="translate(-2766.7 7590.999)"
                                                    ></path>
                                                </>
                                    }

                                    {
                                        battery === "78"
                                            ?
                                            <>
                                                <rect
                                                    width="110"
                                                    height="60"
                                                    fill="#fff"
                                                    data-name="Rectangle 326"
                                                    rx="23"
                                                    transform="translate(-2441 7990)"
                                                ></rect>
                                                <path
                                                    fill="#818d9d"
                                                    d="M0 0a4 4 0 014 4v9a4 4 0 01-4 4V0z"
                                                    data-name="Rectangle 327"
                                                    transform="translate(-2328 8012)"
                                                ></path>
                                                <path
                                                    fill="#818d9d"
                                                    d="M0 0h4a23 23 0 0123 23v14A23 23 0 014 60H0V0z"
                                                    data-name="Rectangle 328"
                                                    transform="translate(-2358 7990)"
                                                ></path>

                                                <text
                                                    fill="#0a1032"
                                                    data-name="78"
                                                    fontFamily="HelveticaWorld-Bold, Helvetica World"
                                                    fontSize="51"
                                                    fontWeight="700"
                                                    transform="translate(-2414 8038)"
                                                >
                                                    <tspan x="0" y="0">
                                                        78
                                                    </tspan>
                                                </text>
                                            </>
                                            :
                                            battery === "50"
                                                ?
                                                <>
                                                    <rect
                                                        width="110"
                                                        height="60"
                                                        fill="#fff"
                                                        data-name="Rectangle 329"
                                                        rx="23"
                                                        transform="translate(-2441 7990)"
                                                    ></rect>
                                                    <path
                                                        fill="#818d9d"
                                                        d="M0 0a4 4 0 014 4v8a4 4 0 01-4 4V0z"
                                                        data-name="Rectangle 330"
                                                        transform="translate(-2328 8013)"
                                                    ></path>
                                                    <path
                                                        fill="#818d9d"
                                                        d="M0 0h30a23 23 0 0123 23v14a23 23 0 01-23 23H0V0z"
                                                        data-name="Rectangle 331"
                                                        transform="translate(-2384 7990)"
                                                    ></path>
                                                    <text
                                                        fill="#0a1032"
                                                        data-name="50"
                                                        fontFamily="HelveticaWorld-Bold, Helvetica World"
                                                        fontSize="51"
                                                        fontWeight="700"
                                                        transform="translate(-2414 8039)"
                                                    >
                                                        <tspan x="0" y="0">
                                                            50
                                                        </tspan>
                                                    </text>
                                                </>
                                                :
                                                <>
                                                    <rect
                                                        width="110"
                                                        height="60"
                                                        fill="#fff"
                                                        data-name="Rectangle 332"
                                                        rx="23"
                                                        transform="translate(-2441 7990)"
                                                    ></rect>
                                                    <path
                                                        fill="#818d9d"
                                                        d="M0 0a4 4 0 014 4v8a4 4 0 01-4 4V0z"
                                                        data-name="Rectangle 333"
                                                        transform="translate(-2328 8013)"
                                                    ></path>
                                                    <path
                                                        fill="#818d9d"
                                                        d="M0 0h56a23 23 0 0123 23v14a23 23 0 01-23 23H0V0z"
                                                        data-name="Rectangle 334"
                                                        transform="translate(-2410 7990)"
                                                    ></path>
                                                    <text
                                                        fill="#0a1032"
                                                        data-name="25"
                                                        fontFamily="HelveticaWorld-Bold, Helvetica World"
                                                        fontSize="51"
                                                        fontWeight="700"
                                                        transform="translate(-2414 8039)"
                                                    >
                                                        <tspan x="0" y="0">
                                                            25
                                                        </tspan>
                                                    </text>
                                                </>
                                    }

                                    <rect
                                        width="672"
                                        height="27"
                                        data-name="Rectangle 335"
                                        rx="13.5"
                                        transform="translate(-3404 11850)"
                                    ></rect>
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
                        <label>Security Answer</label>
                        <input
                            type="text"
                            value={data.securityCode}
                            name="securityCode"
                            onChange={(e) => onChangeHandler(e)}
                        />
                    </div>
                    <div className="global_form_inner">
                        <label>Re-enter security Answer</label>
                        <input
                            type="text"
                            value={data.securityAnswer}
                            name="securityAnswer"
                            onChange={(e) => onChangeHandler(e)}
                        />
                    </div>
                    <div className="global_form_inner">
                        <label>Transfer Date</label>
                        <input
                            type="text"
                            value={data.date}
                            name="date"
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

export default FiftyOnePage;