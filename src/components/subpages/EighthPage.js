import React, { useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import { write } from 'clipboard-polyfill';
import "../../assets/styles/fonts.scss";
import { ToastContainer, toast } from 'react-toastify';

const EighthPage = () => {
    const screenshotRef = useRef(null);

    const [data, setData] = useState({
        time: "10:40",
        date: "Aug 03, 2023 at 10:39 p.m. EDT",
        from: "Chequing (1131)",
        new_balance: "800.38",
        to_name: "ahmed",
        to_email: "afn.9993@gmail.com",
        registered_name: "AHMAD-FARAZ NAWAZ",
        amount: "19.00",
        notify_by: "Email",
        confirmation: "V92AH5"
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
                        <h3>PREVIEW - <span>Mobile 8</span></h3>
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
                            <div className="artboard roboto">
                                <foreignObject ref={screenshotRef}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={imageDimension + "%"}
                                        viewBox="0 0 1753 3796"
                                    >
                                        <defs>
                                            <filter
                                                id="Rectangle_50"
                                                width="75"
                                                height="77"
                                                x="1469"
                                                y="67"
                                                filterUnits="userSpaceOnUse"
                                            >
                                                <feOffset dy="3"></feOffset>
                                                <feGaussianBlur result="blur" stdDeviation="3"></feGaussianBlur>
                                                <feFlood floodOpacity="0.161"></feFlood>
                                                <feComposite in2="blur" operator="in"></feComposite>
                                                <feComposite in="SourceGraphic"></feComposite>
                                            </filter>
                                            <filter id="Rectangle_59">
                                                <feOffset dy="3"></feOffset>
                                                <feGaussianBlur result="blur-2" stdDeviation="3"></feGaussianBlur>
                                                <feFlood floodOpacity="0.09" result="color"></feFlood>
                                                <feComposite
                                                    in="SourceGraphic"
                                                    in2="blur-2"
                                                    operator="out"
                                                ></feComposite>
                                                <feComposite in="color" operator="in"></feComposite>
                                                <feComposite in2="SourceGraphic" operator="in"></feComposite>
                                            </filter>
                                            <filter id="Ellipse_7">
                                                <feOffset dy="3"></feOffset>
                                                <feGaussianBlur result="blur-3" stdDeviation="3"></feGaussianBlur>
                                                <feFlood floodOpacity="0.161" result="color-2"></feFlood>
                                                <feComposite
                                                    in="SourceGraphic"
                                                    in2="blur-3"
                                                    operator="out"
                                                ></feComposite>
                                                <feComposite in="color-2" operator="in"></feComposite>
                                                <feComposite in2="SourceGraphic" operator="in"></feComposite>
                                            </filter>
                                        </defs>
                                        <g data-name="Group 34" transform="translate(-2997 -120)">
                                            <g data-name="Group 33">
                                                <path
                                                    fill="#fff"
                                                    d="M0 0H1753V3796H0z"
                                                    data-name="Rectangle 47"
                                                    transform="translate(2997 120)"
                                                ></path>
                                                <path
                                                    fill="#f3f7f8"
                                                    d="M0 0H1753V393H0z"
                                                    data-name="Rectangle 60"
                                                    transform="translate(2997 3182)"
                                                ></path>
                                                <path
                                                    fill="#105e9f"
                                                    d="M0 0H1753V377H0z"
                                                    data-name="Rectangle 48"
                                                    transform="translate(2997 120)"
                                                ></path>
                                                <g data-name="Group 22" transform="translate(1906 -76)">
                                                    <rect
                                                        width="113"
                                                        height="59"
                                                        fill="#fff"
                                                        data-name="Rectangle 49"
                                                        opacity="0.4"
                                                        rx="16"
                                                        transform="translate(2569 269)"
                                                    ></rect>
                                                    <path
                                                        fill="#709fc6"
                                                        d="M0 0a5 5 0 015 5v9a5 5 0 01-5 5V0z"
                                                        data-name="Rectangle 51"
                                                        opacity="0.67"
                                                        transform="translate(2688 290)"
                                                    ></path>
                                                    <g filter="url(#Rectangle_50)" transform="translate(1091 196)">
                                                        <path
                                                            fill="#fff"
                                                            d="M16 0h41v59H16A16 16 0 010 43V16A16 16 0 0116 0z"
                                                            data-name="Rectangle 50"
                                                            transform="translate(1478 73)"
                                                        ></path>
                                                    </g>
                                                </g>
                                                <g fill="#fff" transform="translate(4296.605 .5)">
                                                    <path
                                                        d="M104.688 192a60.188 60.188 0 00-40.328 16.077 1.451 1.451 0 00-.055 2.076l4.861 5.08a1.5 1.5 0 002.112.055 48.913 48.913 0 0133.428-13.054 48.913 48.913 0 0133.428 13.054 1.5 1.5 0 002.112-.055l4.861-5.08a1.452 1.452 0 00-.055-2.076A60.35 60.35 0 00104.688 192z"
                                                        data-name="Path 7"
                                                    ></path>
                                                    <path
                                                        d="M221.991 434.471l5.207 5.153a1.493 1.493 0 002.039.055 28.32 28.32 0 0137.47 0 1.493 1.493 0 002.039-.055l5.207-5.153a1.454 1.454 0 00-.055-2.13 38.827 38.827 0 00-51.89 0 1.484 1.484 0 00-.017 2.13zm26 8.5a14.835 14.835 0 00-10.815 4.643 1.456 1.456 0 00.036 2.039l9.722 9.6a1.494 1.494 0 002.112 0l9.722-9.6a1.456 1.456 0 00.036-2.039 14.905 14.905 0 00-10.814-4.64z"
                                                        data-name="Path 8"
                                                        transform="translate(-143.302 -209.426)"
                                                    ></path>
                                                </g>
                                                <g
                                                    fill="#fff"
                                                    data-name="Group 23"
                                                    transform="translate(-228.68 13833.972)"
                                                >
                                                    <rect
                                                        width="14"
                                                        height="55"
                                                        data-name="Rectangle 38"
                                                        rx="2"
                                                        transform="translate(4545.68 -13639.972)"
                                                    ></rect>
                                                    <rect
                                                        width="14"
                                                        height="41"
                                                        data-name="Rectangle 52"
                                                        rx="2"
                                                        transform="translate(4520.68 -13625.972)"
                                                    ></rect>
                                                    <rect
                                                        width="14"
                                                        height="28"
                                                        data-name="Rectangle 53"
                                                        rx="2"
                                                        transform="translate(4495.68 -13612.972)"
                                                    ></rect>
                                                    <rect
                                                        width="14"
                                                        height="17"
                                                        data-name="Rectangle 54"
                                                        rx="2"
                                                        transform="translate(4470.68 -13601.972)"
                                                    ></rect>
                                                </g>
                                                <text
                                                    fill="#fff"
                                                    data-name="7:18"
                                                    fontFamily="Roboto-Regular, Roboto"
                                                    fontSize="71"
                                                    transform="translate(3294 250)"
                                                >
                                                    <tspan x="-68.4" y="0">
                                                        {data.time}
                                                    </tspan>
                                                </text>
                                                <text
                                                    fill="#fff"
                                                    data-name="Send Money"
                                                    fontFamily="Roboto-Regular, Roboto"
                                                    fontSize="69"
                                                    transform="translate(3882 433)"
                                                >
                                                    <tspan x="-188.992" y="0">
                                                        Send Money
                                                    </tspan>
                                                </text>
                                                <g data-name="Group 24" transform="translate(1915 5)">
                                                    <circle
                                                        cx="42"
                                                        cy="42"
                                                        r="42"
                                                        fill="#fff"
                                                        data-name="Ellipse 5"
                                                        transform="translate(2659 353)"
                                                    ></circle>
                                                    <text
                                                        fill="#105e9f"
                                                        data-name="?"
                                                        fontFamily="Roboto-Bold, Roboto"
                                                        fontSize="55"
                                                        fontWeight="700"
                                                        transform="translate(2701 416)"
                                                    >
                                                        <tspan x="-13.683" y="0">
                                                            ?
                                                        </tspan>
                                                    </text>
                                                    <path
                                                        fill="#fff"
                                                        d="M15.132 1.519a1 1 0 011.736 0L31.145 26.5a1 1 0 01-.868 1.5H1.723a1 1 0 01-.868-1.5z"
                                                        data-name="Polygon 1"
                                                        transform="rotate(-34 2028.473 -4134.901)"
                                                    ></path>
                                                </g>
                                                <ellipse
                                                    cx="56"
                                                    cy="55.5"
                                                    fill="#30ba31"
                                                    data-name="Ellipse 6"
                                                    rx="56"
                                                    ry="55.5"
                                                    transform="translate(3826 635)"
                                                ></ellipse>
                                                <path
                                                    fill="#fff"
                                                    d="M5839.667 1327.908l6.363-6.363 13.931 13.931 36.818-43.476 6.655 6.81-43.474 49.838z"
                                                    data-name="Path 9"
                                                    transform="translate(-1989.598 -629.836)"
                                                ></path>
                                                <text
                                                    fill="#343434"
                                                    data-name="Money Sent!"
                                                    fontFamily="Roboto-Light, Roboto"
                                                    fontSize="81"
                                                    fontWeight="300"
                                                    transform="translate(3882 904)"
                                                >
                                                    <tspan x="-219.032" y="0">
                                                        Money Sent!
                                                    </tspan>
                                                </text>
                                                <text
                                                    fill="#515151"
                                                    data-name="Aug 1, 2023 at 7:18 p.m. ET"
                                                    fontFamily="Roboto-Light, Roboto"
                                                    fontSize="59"
                                                    fontWeight="300"
                                                    transform="translate(3882 1011)"
                                                >
                                                    <tspan x="0" y="0" textAnchor="middle">
                                                        {data.date}
                                                    </tspan>
                                                </text>
                                                <text
                                                    fill="#515151"
                                                    data-name="Made a mistake? Cancel or edit an Interac e-"
                                                    fontFamily="Roboto-Regular, Roboto"
                                                    fontSize="60"
                                                    transform="translate(3873 1234)"
                                                >
                                                    <tspan x="-588.647" y="0">
                                                        Made a mistake? Cancel or edit an Interac e-
                                                    </tspan>
                                                </text>
                                                <text
                                                    fill="#515151"
                                                    data-name="Transfer in the History tab until it's accepted."
                                                    fontFamily="Roboto-Regular, Roboto"
                                                    fontSize="60"
                                                    transform="translate(3882 1303)"
                                                >
                                                    <tspan x="-593.496" y="0">
                                                        Transfer in the{" "}
                                                    </tspan>
                                                    <tspan
                                                        y="0"
                                                        fill="#232323"
                                                        fontFamily="Roboto-Medium, Roboto"
                                                        fontWeight="600"
                                                    >
                                                        History tab
                                                    </tspan>
                                                    <tspan y="0"> until it&apos;s accepted.</tspan>
                                                </text>
                                                <text
                                                    fill="#00579c"
                                                    data-name="Cancel or edit an e-transfer"
                                                    fontFamily="Roboto-Regular, Roboto"
                                                    fontSize="60"
                                                    transform="translate(3914 1480)"
                                                >
                                                    <tspan x="-358.989" y="0">
                                                        Cancel or edit an e-transfer
                                                    </tspan>
                                                </text>
                                                <text
                                                    fill="#393939"
                                                    fontFamily="Roboto-Medium, Roboto"
                                                    fontSize="68"
                                                    fontWeight="500"
                                                    transform="translate(3167 1711)"
                                                >
                                                    <tspan x="-78.542" y="0">
                                                        From
                                                    </tspan>
                                                </text>
                                                <text
                                                    fill="#393939"
                                                    fontFamily="Roboto-Medium, Roboto"
                                                    fontSize="68"
                                                    fontWeight="500"
                                                    transform="translate(3208 2167)"
                                                >
                                                    <tspan x="-119.88" y="0">
                                                        Amount
                                                    </tspan>
                                                </text>
                                                <text
                                                    fill="#393939"
                                                    fontFamily="Roboto-Medium, Roboto"
                                                    fontSize="68"
                                                    fontWeight="500"
                                                    transform="translate(3126 2396)"
                                                >
                                                    <tspan x="-36.54" y="0">
                                                        To
                                                    </tspan>
                                                </text>
                                                <text
                                                    fill="#393939"
                                                    fontFamily="Roboto-Medium, Roboto"
                                                    fontSize="68"
                                                    fontWeight="500"
                                                    transform="translate(3172 2625)"
                                                >
                                                    <tspan x="-84.568" y="0">
                                                        Email
                                                    </tspan>
                                                </text>
                                                <text
                                                    fill="#393939"
                                                    data-name="Notify Recipient By"
                                                    fontFamily="Roboto-Medium, Roboto"
                                                    fontSize="68"
                                                    fontWeight="500"
                                                    transform="translate(3373 2852)"
                                                >
                                                    <tspan x="-289.249" y="0">
                                                        Notify Recipient By
                                                    </tspan>
                                                </text>
                                                <text
                                                    fill="#393939"
                                                    data-name="New Balance"
                                                    fontFamily="Roboto-Medium, Roboto"
                                                    fontSize="68"
                                                    fontWeight="500"
                                                    transform="translate(3285 1936)"
                                                >
                                                    <tspan x="-197.99" y="0">
                                                        New Balance
                                                    </tspan>
                                                </text>
                                                <text
                                                    fill="#393939"
                                                    data-name="Confirmation #"
                                                    fontFamily="Roboto-Medium, Roboto"
                                                    fontSize="68"
                                                    fontWeight="500"
                                                    transform="translate(3314 3079)"
                                                >
                                                    <tspan x="-227.657" y="0">
                                                        Confirmation #
                                                    </tspan>
                                                </text>
                                                <text
                                                    fill="#5e5d5d"
                                                    data-name="Chequing (9040)"
                                                    fontFamily="Roboto-Regular, Roboto"
                                                    fontSize="64"
                                                    transform="translate(4435 1708)"
                                                >
                                                    <tspan x="240" y="0" textAnchor="end">
                                                        {data.from}
                                                    </tspan>
                                                </text>
                                                <text
                                                    fill="#5e5d5d"
                                                    data-name="109.98"
                                                    fontFamily="Roboto-Regular, Roboto"
                                                    fontSize="64"
                                                    transform="translate(4573 1937)"
                                                >
                                                    <tspan x="100" y="0" textAnchor="end">
                                                        {data.new_balance}
                                                    </tspan>
                                                </text>
                                                <text
                                                    fill="#5e5d5d"
                                                    data-name="68"
                                                    fontFamily="Roboto-Regular, Roboto"
                                                    fontSize="64"
                                                    transform="translate(4591 2168)"
                                                >
                                                    <tspan x="80" y="0" textAnchor="end">
                                                        {data.amount}
                                                    </tspan>
                                                </text>
                                                <text
                                                    fill="#5e5d5d"
                                                    data-name="tang see weng"
                                                    fontFamily="Roboto-Regular, Roboto"
                                                    fontSize="64"
                                                    transform="translate(4465 2396)"
                                                >
                                                    <tspan x="200" y="0" textAnchor="end">
                                                        {data.to_name}
                                                    </tspan>
                                                </text>
                                                <text
                                                    fill="#5e5d5d"
                                                    data-name="jasonseeweng0411@gmail.com"
                                                    fontFamily="Roboto-Regular, Roboto"
                                                    fontSize="64"
                                                    transform="translate(4216 2626)"
                                                >
                                                    <tspan x="450" y="0" textAnchor="end">
                                                        {data.to_email}
                                                    </tspan>
                                                </text>
                                                <text
                                                    fill="#5e5d5d"
                                                    data-name="Email"
                                                    fontFamily="Roboto-Regular, Roboto"
                                                    fontSize="64"
                                                    transform="translate(4594 2851)"
                                                >
                                                    <tspan x="70" y="0" textAnchor="end">
                                                        {data.notify_by}
                                                    </tspan>
                                                </text>
                                                <text
                                                    fill="#5e5d5d"
                                                    fontFamily="Roboto-Regular, Roboto"
                                                    fontSize="64"
                                                    transform="translate(4547 3080)"
                                                >
                                                    <tspan x="120" y="0" textAnchor="end">
                                                        {data.confirmation}
                                                    </tspan>
                                                </text>
                                                <path
                                                    fill="#0069c4"
                                                    d="M0 0H1596V247H0z"
                                                    data-name="Rectangle 55"
                                                    transform="translate(3084 3261)"
                                                ></path>
                                                <text
                                                    fill="#fff"
                                                    data-name="Send More Money"
                                                    fontFamily="Roboto-Regular, Roboto"
                                                    fontSize="66"
                                                    transform="translate(3882 3408)"
                                                >
                                                    <tspan x="-264.918" y="0">
                                                        Send More Money
                                                    </tspan>
                                                </text>
                                                <g data-type="innerShadowGroup">
                                                    <path
                                                        fill="#fff"
                                                        d="M0 0H1753V339H0z"
                                                        data-name="Rectangle 59"
                                                        transform="translate(2997 3577)"
                                                    ></path>
                                                    <g filter="url(#Rectangle_59)" transform="translate(2997 120)">
                                                        <path
                                                            fill="#fff"
                                                            d="M0 0H1753V339H0z"
                                                            data-name="Rectangle 59"
                                                            transform="translate(0 3457)"
                                                        ></path>
                                                    </g>
                                                </g>
                                                <g
                                                    stroke="#5d5d5d"
                                                    strokeWidth="4"
                                                    data-name="Group 32"
                                                    transform="translate(0 5)"
                                                >
                                                    <g
                                                        fill="#fff"
                                                        data-name="Rectangle 56"
                                                        transform="translate(3491 3608)"
                                                    >
                                                        <rect width="108" height="72" stroke="none" rx="4"></rect>
                                                        <rect
                                                            width="104"
                                                            height="68"
                                                            x="2"
                                                            y="2"
                                                            fill="none"
                                                            rx="2"
                                                        ></rect>
                                                    </g>
                                                    <path
                                                        fill="none"
                                                        d="M0 0L107.5 0"
                                                        data-name="Line 1"
                                                        transform="translate(3491 3619.5)"
                                                    ></path>
                                                    <path
                                                        fill="none"
                                                        d="M0 0L107.5 0"
                                                        data-name="Line 2"
                                                        transform="translate(3491 3633.5)"
                                                    ></path>
                                                </g>
                                                <text
                                                    fill="#7a7a7a"
                                                    fontFamily="Roboto-Regular, Roboto"
                                                    fontSize="48"
                                                    transform="translate(3544 3758)"
                                                >
                                                    <tspan x="-101.156" y="0">
                                                        Accounts
                                                    </tspan>
                                                </text>
                                                <text
                                                    fill="#8a8989"
                                                    fontFamily="Roboto-Regular, Roboto"
                                                    fontSize="48"
                                                    transform="translate(3213 3758)"
                                                >
                                                    <tspan x="-64.547" y="0">
                                                        Home
                                                    </tspan>
                                                </text>
                                                <g data-name="Group 28" transform="translate(1946 -2.611)">
                                                    <text
                                                        fill="#8d8282"
                                                        fontFamily="Roboto-Regular, Roboto"
                                                        fontSize="48"
                                                        transform="translate(2648 3760.862)"
                                                    >
                                                        <tspan x="-55.254" y="0">
                                                            More
                                                        </tspan>
                                                    </text>
                                                    <path
                                                        fill="none"
                                                        stroke="#707070"
                                                        strokeWidth="3"
                                                        d="M0 0L81 0"
                                                        data-name="Line 3"
                                                        transform="translate(2605.5 3620.5)"
                                                    ></path>
                                                    <path
                                                        fill="none"
                                                        stroke="#707070"
                                                        strokeWidth="3"
                                                        d="M0 0L81 0"
                                                        data-name="Line 4"
                                                        transform="translate(2605.5 3646.5)"
                                                    ></path>
                                                    <path
                                                        fill="none"
                                                        stroke="#707070"
                                                        strokeWidth="3"
                                                        d="M0 0L81 0"
                                                        data-name="Line 5"
                                                        transform="translate(2605.5 3672.5)"
                                                    ></path>
                                                </g>
                                                <g data-name="Group 29" transform="translate(87 .139)">
                                                    <text
                                                        fill="#005aa8"
                                                        data-name="Move Money"
                                                        fontFamily="Roboto-Regular, Roboto"
                                                        fontSize="48"
                                                        transform="translate(4152 3760.862)"
                                                    >
                                                        <tspan x="-136.395" y="0">
                                                            Move Money
                                                        </tspan>
                                                    </text>
                                                    <g data-name="Group 27" transform="translate(1682 4)">
                                                        <rect
                                                            width="108"
                                                            height="67"
                                                            fill="#0069c4"
                                                            data-name="Rectangle 57"
                                                            rx="2"
                                                            transform="translate(2406 3611)"
                                                        ></rect>
                                                        <path
                                                            fill="none"
                                                            stroke="#fff"
                                                            strokeWidth="3"
                                                            d="M0 0L53.933 32.171"
                                                            data-name="Line 6"
                                                            transform="translate(2406.473 3611.473)"
                                                        ></path>
                                                        <path
                                                            fill="none"
                                                            stroke="#fff"
                                                            strokeWidth="3"
                                                            d="M53.933 0L0 32.171"
                                                            data-name="Line 7"
                                                            transform="translate(2460.406 3611.473)"
                                                        ></path>
                                                        <g
                                                            fill="#fff"
                                                            stroke="#fff"
                                                            strokeWidth="1"
                                                            data-name="Ellipse 9"
                                                            transform="translate(2459 3643)"
                                                        >
                                                            <ellipse
                                                                cx="1.5"
                                                                cy="1"
                                                                stroke="none"
                                                                rx="1.5"
                                                                ry="1"
                                                            ></ellipse>
                                                            <ellipse cx="1.5" cy="1" fill="none" rx="1" ry="0.5"></ellipse>
                                                        </g>
                                                        <g
                                                            fill="#0069c4"
                                                            stroke="#fff"
                                                            strokeWidth="4"
                                                            data-name="Ellipse 10"
                                                            transform="translate(2490 3637.862)"
                                                        >
                                                            <circle cx="22" cy="22" r="22" stroke="none"></circle>
                                                            <circle cx="22" cy="22" r="20" fill="none"></circle>
                                                        </g>
                                                        <text
                                                            fill="#fff"
                                                            data-name="$"
                                                            fontFamily="Roboto-Bold, Roboto"
                                                            fontSize="27"
                                                            fontWeight="700"
                                                            transform="translate(2512 3669.862)"
                                                        >
                                                            <tspan x="-7.745" y="0">
                                                                $
                                                            </tspan>
                                                        </text>
                                                    </g>
                                                </g>
                                                <path
                                                    fill="#0069c4"
                                                    d="M0 0H1589V4H0z"
                                                    data-name="Rectangle 58"
                                                    transform="translate(3091 3573)"
                                                ></path>
                                                <path
                                                    fill="#ebebeb"
                                                    d="M0 0H1585V5H0z"
                                                    data-name="Rectangle 61"
                                                    transform="translate(3088 2947)"
                                                ></path>
                                                <path
                                                    fill="#ebebeb"
                                                    d="M0 0H1585V4H0z"
                                                    data-name="Rectangle 62"
                                                    transform="translate(3086 2720)"
                                                ></path>
                                                <path
                                                    fill="#ebebeb"
                                                    d="M0 0H1585V4H0z"
                                                    data-name="Rectangle 63"
                                                    transform="translate(3086 2490)"
                                                ></path>
                                                <path
                                                    fill="#ebebeb"
                                                    d="M0 0H1585V4H0z"
                                                    data-name="Rectangle 64"
                                                    transform="translate(3086 2260)"
                                                ></path>
                                                <path
                                                    fill="#ebebeb"
                                                    d="M0 0H1585V4H0z"
                                                    data-name="Rectangle 65"
                                                    transform="translate(3086 2030)"
                                                ></path>
                                                <path
                                                    fill="#ebebeb"
                                                    d="M0 0H1585V4H0z"
                                                    data-name="Rectangle 66"
                                                    transform="translate(3086 1800)"
                                                ></path>
                                                <path
                                                    fill="#ebebeb"
                                                    d="M0 0H1585V4H0z"
                                                    data-name="Rectangle 69"
                                                    transform="translate(3086 1112)"
                                                ></path>
                                                <path
                                                    fill="#ebebeb"
                                                    d="M0 0H1751V4H0z"
                                                    data-name="Rectangle 67"
                                                    transform="translate(2998 1582)"
                                                ></path>
                                                <path
                                                    fill="#ebebeb"
                                                    d="M0 0H1751V4H0z"
                                                    data-name="Rectangle 68"
                                                    transform="translate(2998 3178)"
                                                ></path>
                                                <rect
                                                    width="624"
                                                    height="24"
                                                    fill="#0c0c0c"
                                                    data-name="Rectangle 70"
                                                    rx="12"
                                                    transform="translate(3570 3860)"
                                                ></rect>
                                                <g data-name="Group 26" transform="translate(-271 -4)">
                                                    <g data-type="innerShadowGroup">
                                                        <circle
                                                            cx="148"
                                                            cy="148"
                                                            r="148"
                                                            fill="#fff"
                                                            data-name="Ellipse 7"
                                                            transform="translate(4004 3494)"
                                                        ></circle>
                                                        <g filter="url(#Ellipse_7)" transform="translate(3268 124)">
                                                            <circle
                                                                cx="148"
                                                                cy="148"
                                                                r="148"
                                                                fill="#fff"
                                                                data-name="Ellipse 7"
                                                                transform="translate(736 3370)"
                                                            ></circle>
                                                        </g>
                                                    </g>
                                                    <circle
                                                        cx="119"
                                                        cy="119"
                                                        r="119"
                                                        fill="#fede00"
                                                        data-name="Ellipse 8"
                                                        transform="translate(4033 3523)"
                                                    ></circle>
                                                    <path
                                                        fill="#171717"
                                                        d="M53.831 83.918L14.355 46.1l40.58-39.475L47.482 0 0 46.1l15.563 14.66 31.919 30.062z"
                                                        data-name="Path 11"
                                                        transform="rotate(89 259.775 3942.4)"
                                                    ></path>
                                                </g>
                                                <g
                                                    fill="none"
                                                    stroke="#707070"
                                                    strokeWidth="4"
                                                    data-name="Group 31"
                                                    transform="translate(1810)"
                                                >
                                                    <path
                                                        d="M1403.678 3663.931h-9.324v30.639h-33.562v-45.859h-9.115l52-49.616"
                                                        data-name="Path 13"
                                                    ></path>
                                                    <path
                                                        d="M1401.676 3663.931H1411v30.639h33.563v-45.859h9.115l-52-49.616"
                                                        data-name="Path 14"
                                                    ></path>
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                </foreignObject>
                            </div>
                        </div>
                    </div>
                </div>
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
                            <label>Date</label>
                            <input
                                type="text"
                                value={data.date}
                                name="date"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                        <div className="global_form_inner">
                            <label>From</label>
                            <input
                                type="text"
                                value={data.from}
                                name="from"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                        <div className="global_form_inner">
                            <label>New Balance</label>
                            <input
                                type="text"
                                value={data.new_balance}
                                name="new_balance"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                        <div className="global_form_inner">
                            <label>To</label>
                            <input
                                type="text"
                                value={data.to_name}
                                name="to_name"
                                onChange={(e) => onChangeHandler(e)}
                            />
                            <input
                                type="text"
                                value={data.to_email}
                                name="to_email"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                        {/* <div className="global_form_inner">
                            <label>Registered Name</label>
                            <input
                                type="text"
                                value={data.registered_name}
                                name="registered_name"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div> */}
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
                            <label>Notify Reciepient By</label>
                            <input
                                type="text"
                                value={data.notify_by}
                                name="notify_by"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                        <div className="global_form_inner">
                            <label>Confirmation</label>
                            <input
                                type="text"
                                value={data.confirmation}
                                name="confirmation"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                    </div>
                </div>
            </>
        </>
    )
}

export default EighthPage;