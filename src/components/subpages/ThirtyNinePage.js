import React, { useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import { write } from 'clipboard-polyfill';
import "../../assets/styles/secondpage.scss";
import { ToastContainer, toast } from 'react-toastify';

const ThirtyNinePage = () => {
    const screenshotRef = useRef(null);

    const [data, setData] = useState({
        time: "16:48",
        amount: "16,262.55 USDT",
        address: "TNqmPmcFcc1TfmDwySsb5PY",
        address2: "MqyxCyLeQvA",
    });

    const [imageDimension, setImageDimension] = useState("167");

    const [network, setNetwork] = useState("strong");
    const [net, setNet] = useState("5G");
    const [battery, setBattery] = useState("86");

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
                    <h3>PREVIEW - <span>Mobile 39</span></h3>
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
                                viewBox="0 0 1782 3860"
                            >
                                <defs>
                                    <clipPath id="clip-path">
                                        <path fill="none" d="M0 0H83V52H0z"></path>
                                    </clipPath>
                                    <pattern id="pattern" width="1" height="1" viewBox="0 -89.333 625 417">
                                        <image
                                            width="625"
                                            height="417"
                                            preserveAspectRatio="none"
                                            xlinkHref="data:image/png;base64,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VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVhDw4EAAAAAID8XxtBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVYU9OBAAAAAAAPJ/bQRVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVFXbrGLXJAIzj8NZ2yFDrohS6RcgNqoPygRWMeIKO4hG6dXYQBAenTB3qBcTR1alDccjuCXqFtBdQEEqSn9/zHOH/Du8PAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgPU7+WIDAADYdk/2VhMrAADA1nf7SrkDAECg25U7AAAUul25AwBAoduVOwAAFLpduQMAQKHblTsAABS6XbkDAECh25U7AAAUul25AwBAoduVOwAAFLpduQMAQKHblTsAABS6XbkDAECh25U7AAAUul25AwBAoduVOwAAFLpduQMAQKHblTsAABS6XbkDAECh25U7AAAUul25AwBAoduVOwAAFLpduQMAQKHblTsAABS6XbkDAECh25U7AAAUul25AwBAoduVOwAAFLpduQMAQKHblTsAABS6XbkDAECh25U7AAAUul25AwBAoduVOwAAFLpduQMAQKHblTsAABS6XbkDAECh25U7AAAUul25AwBAoduVOwAAFLpduQMAQKHblTsAABS6XbkDAECh25U7AAAUul25AwBAoduVOwAAFLpduQMAQKHblTsAABS6XbkDAECh25U7AAAUul25AwBAoduVOwAAFLpduQMAQKHblTsAABS6XbkDAECh25U7AAAUul25AwBAoduVOwAAFLpduQMAQKHblTsAABS6XbkDAECh25U7AAAUul25AwBAoduVOwAAFLpduQMAQKHblTsAABS6XbkDAECh25U7AAAUul25AwDAHxxsU7crdwAAKHS7cgcAgEK3K3cAACh0u3IHAIBCtyt3AAAodLtyBwCAQrcrdwAAKHS7cgcAgEK3K3cAACh0u3IHAIBCtyt3AAAodLtyBwBAtxe6XbkDAKDbV8odAAB0u3IHAIDRdLtyBwBAtyt3AADQ7codAADG0+3KHQAA3a7cAQBAtyt3AAAYT7crdwAAdLtyBwAA3a7cAQBgPN2u3AEA0O3KHQAAdLtyBwCA8XS7cgcAQLcrdwAA2LijB6v/w9QtAbg3z+bvf/y+mb0chuXkznIYrmazj99PP13sGwfQ7codgA17/vPht7PzX4sXf/k3e28fXX598+rz7txegG5X7gCs2dPX1zvvFo//6fEcfzic3rJ3L85RVmccx1dDa4LJQriHS8EkXEMSEpIACReFIEGhLAWTIALhEioMio3xUggDatAAzVQQ6ojDwIgES0caahFahIIFxJabAy2FWrmWEVu0HW8M1T4lIDNSAvvuec9533Oe8/v+A/ued0/OfnL23fdtMrQPTh5CCG6H3BFCYWsjsFgsxGlD15RcuvDzygLhT5/ozv+eObYXTiNCiIXbE1Ihd6m1u82n4uLiZmXpelZaCg6qhbxDqIn81Wv8OVkZgidrpIZv/BCR39dP0HEKi7wrJf4cakhwAvXXcu3Ize7xk0QJn0DxY2oXlnp32JkNzC4KCENIV7d3ad0McpdZlK9fbAQT9x395A9fL+4U1SJDp7PSUHA835V3CLcI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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPDswYEAAAAAAJD/ayOoqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqrAHBwIAAAAAQP6vjaCqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqwh4cCAAAAAAA+b82gqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpKe3BIAAAAACDo/2tvGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICtAH9TuhVkf2bRAAAAAElFTkSuQmCC"
                                        ></image>
                                    </pattern>
                                    <linearGradient
                                        id="linear-gradient"
                                        x1="0.023"
                                        x2="1"
                                        y1="0.5"
                                        y2="0.5"
                                        gradientUnits="objectBoundingBox"
                                    >
                                        <stop offset="0" stopColor="#0ec881" stopOpacity="0.051"></stop>
                                        <stop offset="1" stopColor="#0ec881"></stop>
                                    </linearGradient>
                                </defs>
                                <g data-name="Group 180" transform="translate(-1981 -77)">
                                    <g data-name="Group 179">
                                        <g data-name="Group 178">
                                            <path
                                                fill="#fafafa"
                                                d="M0 0h1782v3860H0z"
                                                data-name="Path 78"
                                                transform="translate(1981 77)"
                                            ></path>
                                            <text
                                                data-name="16:48"
                                                fontFamily="Roboto-Bold, Roboto"
                                                fontSize="60"
                                                fontWeight="700"
                                                transform="translate(2282 230)"
                                            >
                                                <tspan x="-103.086" y="0">
                                                    {data.time}
                                                </tspan>
                                            </text>
                                            {

                                                network === "mid" ?
                                                    <>
                                                        <rect
                                                            width="12"
                                                            height="18"
                                                            fill="#3b3b3b"
                                                            data-name="Rectangle 243"
                                                            rx="2"
                                                            transform="translate(3272 213)"
                                                        ></rect>
                                                        <rect
                                                            width="14"
                                                            height="27"
                                                            fill="#3b3b3b"
                                                            data-name="Rectangle 241"
                                                            rx="2"
                                                            transform="translate(3295 204)"
                                                        ></rect>
                                                        <rect
                                                            width="13"
                                                            height="39"
                                                            fill="#3b3b3b"
                                                            data-name="Rectangle 239"
                                                            opacity="0.5"
                                                            rx="2"
                                                            transform="translate(3318 192)"
                                                        ></rect>
                                                        <rect
                                                            width="13"
                                                            height="52"
                                                            fill="#3b3b3b"
                                                            data-name="Rectangle 237"
                                                            opacity="0.5"
                                                            rx="2"
                                                            transform="translate(3342 179)"
                                                        ></rect>
                                                    </>
                                                    :
                                                    network === "low" ?
                                                        <>
                                                            <rect
                                                                width="12"
                                                                height="18"
                                                                fill="#3b3b3b"
                                                                data-name="Rectangle 244"
                                                                rx="2"
                                                                transform="translate(3272 213)"
                                                            ></rect>
                                                            <rect
                                                                width="14"
                                                                height="27"
                                                                fill="#3b3b3b"
                                                                data-name="Rectangle 242"
                                                                opacity="0.5"
                                                                rx="2"
                                                                transform="translate(3295 204)"
                                                            ></rect>
                                                            <rect
                                                                width="13"
                                                                height="39"
                                                                fill="#3b3b3b"
                                                                data-name="Rectangle 240"
                                                                opacity="0.5"
                                                                rx="2"
                                                                transform="translate(3318 192)"
                                                            ></rect>
                                                            <rect
                                                                width="13"
                                                                height="52"
                                                                fill="#3b3b3b"
                                                                data-name="Rectangle 238"
                                                                opacity="0.5"
                                                                rx="2"
                                                                transform="translate(3342 179)"
                                                            ></rect>
                                                        </>
                                                        :
                                                        <>
                                                            <g clipPath="url(#clip-path)" transform="translate(3272 179)">
                                                                <g
                                                                    fill="#3b3b3b"
                                                                    data-name="Group 110"
                                                                    transform="translate(-4473 13640)"
                                                                >
                                                                    <rect
                                                                        width="12"
                                                                        height="18"
                                                                        data-name="Rectangle 35"
                                                                        rx="2"
                                                                        transform="translate(4473 -13606)"
                                                                    ></rect>
                                                                    <rect
                                                                        width="14"
                                                                        height="27"
                                                                        data-name="Rectangle 36"
                                                                        rx="2"
                                                                        transform="translate(4496 -13615)"
                                                                    ></rect>
                                                                    <rect
                                                                        width="13"
                                                                        height="39"
                                                                        data-name="Rectangle 37"
                                                                        rx="2"
                                                                        transform="translate(4519 -13627)"
                                                                    ></rect>
                                                                    <rect
                                                                        width="13"
                                                                        height="52"
                                                                        data-name="Rectangle 38"
                                                                        rx="2"
                                                                        transform="translate(4543 -13640)"
                                                                    ></rect>
                                                                </g>
                                                            </g>
                                                        </>
                                            }

                                            {
                                                net === "5G" ?
                                                    <text
                                                        fill="#3a3a3a"
                                                        data-name="5G"
                                                        fontFamily="Roboto-Medium, Roboto"
                                                        fontSize="63"
                                                        fontWeight="600"
                                                        transform="translate(3395 230)"
                                                    >
                                                        <tspan x="0" y="0">
                                                            5G
                                                        </tspan>
                                                    </text> :

                                                    net === "4G" ?
                                                        <text
                                                            fill="#3a3a3a"
                                                            data-name="4G"
                                                            fontFamily="Roboto-Medium, Roboto"
                                                            fontSize="63"
                                                            fontWeight="600"
                                                            transform="translate(3391 230)"
                                                        >
                                                            <tspan x="0" y="0">
                                                                4G
                                                            </tspan>
                                                        </text>
                                                        :
                                                        <>
                                                            <path
                                                                fill="#3a3a3a"
                                                                d="M99.606 192a52.69 52.69 0 00-35.3 14.074 1.27 1.27 0 00-.048 1.817l4.256 4.447a1.309 1.309 0 001.849.048 42.819 42.819 0 0129.263-11.428 42.819 42.819 0 0129.263 11.428 1.309 1.309 0 001.849-.048l4.256-4.447a1.271 1.271 0 00-.048-1.817A52.831 52.831 0 0099.606 192z"
                                                                data-name="Path 73"
                                                                transform="translate(3335.104 -8)"
                                                            ></path>
                                                            <path
                                                                fill="#3a3a3a"
                                                                d="M221.936 432.967l4.558 4.511a1.307 1.307 0 001.785.048 24.792 24.792 0 0132.8 0 1.307 1.307 0 001.785-.048l4.559-4.511a1.273 1.273 0 00-.048-1.865 33.99 33.99 0 00-45.425 0 1.3 1.3 0 00-.014 1.865zm22.76 7.443a12.987 12.987 0 00-9.468 4.064 1.275 1.275 0 00.032 1.785l8.511 8.4a1.308 1.308 0 001.849 0l8.511-8.4a1.275 1.275 0 00.032-1.785 13.048 13.048 0 00-9.463-4.063z"
                                                                data-name="Path 72"
                                                                transform="translate(3190.015 -220.039)"
                                                            ></path>
                                                        </>

                                            }
                                            {
                                                battery === "78" ?
                                                    <>
                                                        <rect
                                                            width="110"
                                                            height="60"
                                                            fill="#3a3a3a"
                                                            data-name="Rectangle 245"
                                                            rx="23"
                                                            transform="translate(3506 178)"
                                                        ></rect>
                                                        <path
                                                            fill="#818d9d"
                                                            d="M0 0a6 6 0 016 6v3a6 6 0 01-6 6V0z"
                                                            data-name="Rectangle 250"
                                                            transform="translate(3617 202)"
                                                        ></path>
                                                        <path
                                                            fill="#818d9d"
                                                            d="M0 0h5a23 23 0 0123 23v14A23 23 0 015 60H0V0z"
                                                            data-name="Rectangle 246"
                                                            transform="translate(3588 178)"
                                                        ></path>
                                                        <text
                                                            fill="#fff8f6"
                                                            data-name="78"
                                                            fontFamily="HelveticaWorld-Bold, Helvetica World"
                                                            fontSize="50"
                                                            fontWeight="700"
                                                            transform="translate(3532 226)"
                                                        >
                                                            <tspan x="0" y="0">
                                                                78
                                                            </tspan>
                                                        </text>
                                                    </>
                                                    :
                                                    battery === "50" ?
                                                        <>
                                                            <path
                                                                fill="#3a3a3a"
                                                                d="M23 0h64a23 23 0 0123 23v14a23 23 0 01-23 23H23A23 23 0 010 37V23A23 23 0 0123 0z"
                                                                data-name="Path 74"
                                                                transform="translate(3506 178)"
                                                            ></path>
                                                            <path
                                                                fill="#818d9d"
                                                                d="M0 0a6 6 0 016 6v2a6 6 0 01-6 6V0z"
                                                                data-name="Rectangle 251"
                                                                transform="translate(3617 202)"
                                                            ></path>
                                                            <path
                                                                fill="#818d9d"
                                                                d="M0 0h31a23 23 0 0123 23v14a23 23 0 01-23 23H0V0z"
                                                                data-name="Rectangle 247"
                                                                transform="translate(3562 178)"
                                                            ></path>
                                                            <text
                                                                fill="#fff8f6"
                                                                data-name="50"
                                                                fontFamily="HelveticaWorld-Bold, Helvetica World"
                                                                fontSize="50"
                                                                fontWeight="700"
                                                                transform="translate(3532 226)"
                                                            >
                                                                <tspan x="0" y="0">
                                                                    50
                                                                </tspan>
                                                            </text>
                                                        </>
                                                        :
                                                        <>
                                                            <path
                                                                fill="#3a3a3a"
                                                                d="M23 0h64a23 23 0 0123 23v13a23 23 0 01-23 23H23A23 23 0 010 36V23A23 23 0 0123 0z"
                                                                data-name="Path 75"
                                                                transform="translate(3506 179)"
                                                            ></path>
                                                            <path
                                                                fill="#818d9d"
                                                                d="M0 0a6 6 0 016 6v5a6 6 0 01-6 6V0z"
                                                                data-name="Rectangle 248"
                                                                transform="translate(3617 201)"
                                                            ></path>
                                                            <path
                                                                fill="#818d9d"
                                                                d="M0 0h57a23 23 0 0123 23v13a23 23 0 01-23 23H0V0z"
                                                                data-name="Rectangle 249"
                                                                transform="translate(3536 179)"
                                                            ></path>
                                                            <text
                                                                fill="#fff8f6"
                                                                data-name="25"
                                                                fontFamily="HelveticaWorld-Bold, Helvetica World"
                                                                fontSize="50"
                                                                fontWeight="700"
                                                                transform="translate(3532 226)"
                                                            >
                                                                <tspan x="0" y="0">
                                                                    25
                                                                </tspan>
                                                            </text>
                                                        </>
                                            }
                                            <g data-name="Group 173" transform="translate(-8 1)">
                                                <path
                                                    fill="url(#pattern)"
                                                    d="M0 0H625V417H0z"
                                                    transform="translate(2072 107)"
                                                ></path>
                                                <path
                                                    fill="#f9f9f9"
                                                    d="M0 0H573V118H0z"
                                                    data-name="Rectangle 252"
                                                    transform="translate(2248 348)"
                                                ></path>
                                                <text
                                                    fill="#f0b90b"
                                                    fontFamily="Roboto-Regular, Roboto"
                                                    fontSize="81"
                                                    letterSpacing=".073em"
                                                    transform="translate(2451 435)"
                                                >
                                                    <tspan x="-187.867" y="0">
                                                        BINANCE
                                                    </tspan>
                                                </text>
                                            </g>
                                            <rect
                                                width="1489"
                                                height="2977"
                                                fill="#fff"
                                                data-name="Rectangle 253"
                                                rx="5"
                                                transform="translate(2134 519)"
                                            ></rect>
                                            <g data-name="Group 175" transform="translate(59 385.871)">
                                                <path
                                                    d="M31.745 49.488l-23.28-22.3L32.4 3.907 28 0 0 27.186l9.178 8.645L28 53.559z"
                                                    data-name="Path 15"
                                                    transform="translate(2173.783 345.129)"
                                                ></path>
                                                <path
                                                    d="M0 0H54.521V5.963H0z"
                                                    data-name="Rectangle 72"
                                                    transform="translate(2180.479 369.576)"
                                                ></path>
                                            </g>
                                            <text
                                                fill="#262626"
                                                data-name="Withdrawal Result"
                                                fontFamily="Roboto-Medium, Roboto"
                                                fontSize="61"
                                                fontWeight="600"
                                                transform="translate(2885 778)"
                                            >
                                                <tspan x="-246.264" y="0">
                                                    Withdrawal Result
                                                </tspan>
                                            </text>
                                            <text
                                                fill="#262626"
                                                data-name="Withdrawal Request Submitted"
                                                fontFamily="Roboto-Medium, Roboto"
                                                fontSize="53"
                                                fontWeight="600"
                                                transform="translate(2872 1474)"
                                            >
                                                <tspan x="-365.333" y="0">
                                                    Withdrawal Request Submitted
                                                </tspan>
                                            </text>
                                            <g data-name="Group 177" transform="translate(-313.8 694)">
                                                <circle
                                                    cx="138.788"
                                                    cy="138.788"
                                                    r="138.788"
                                                    fill="url(#linear-gradient)"
                                                    data-name="Ellipse 25"
                                                    transform="translate(3061.062 356.424)"
                                                ></circle>
                                                <circle
                                                    cx="101.523"
                                                    cy="101.523"
                                                    r="101.523"
                                                    fill="#028d56"
                                                    data-name="Ellipse 26"
                                                    transform="translate(3098.367 393.73)"
                                                ></circle>
                                                <path
                                                    fill="#fff"
                                                    d="M10651.249-12480.354l13.645-13.644 29.276 29.276 10.744-10.744 47.647-47.647 14.889 14.891-72.475 72.476z"
                                                    data-name="Path 45"
                                                    transform="translate(-7509.405 12978.58)"
                                                ></path>
                                                <path
                                                    fill="#0d8b5c"
                                                    d="M0 0H18.192V18.192H0z"
                                                    data-name="Rectangle 174"
                                                    transform="rotate(44.03 1125.522 4008.258)"
                                                ></path>
                                                <path
                                                    fill="#0d8b5c"
                                                    d="M0 0H9.389V9.389H0z"
                                                    data-name="Rectangle 175"
                                                    transform="rotate(44.03 1184.427 4321.347)"
                                                ></path>
                                                <path
                                                    fill="#0d8b5c"
                                                    d="M0 0H13.303V13.303H0z"
                                                    data-name="Rectangle 176"
                                                    transform="rotate(44.03 941.305 4419.645)"
                                                ></path>
                                                <path
                                                    fill="#0d8b5c"
                                                    d="M0 0H13.303V13.303H0z"
                                                    data-name="Rectangle 177"
                                                    transform="rotate(44.03 916.158 3996.648)"
                                                ></path>
                                            </g>
                                            <text
                                                fill="#262626"
                                                data-name="16,262.55"
                                                fontFamily="Roboto-Bold, Roboto"
                                                fontSize="119"
                                                fontWeight="700"
                                                transform="translate(3000 1644)"
                                            >
                                                <tspan x="-130" y="0" textAnchor="middle">
                                                    {data.amount}
                                                </tspan>
                                            </text>
                                            <path
                                                fill="#eee"
                                                d="M0 0H1298V173H0z"
                                                data-name="Rectangle 254"
                                                transform="translate(2233 1811)"
                                            ></path>
                                            <text
                                                fill="#262626"
                                                data-name="Withdrawal Address"
                                                fontFamily="Roboto-Regular, Roboto"
                                                fontSize="47"
                                                fontWeight="500"
                                                transform="translate(2507 1920)"
                                            >
                                                <tspan x="-208.918" y="0">
                                                    Withdrawal Address
                                                </tspan>
                                            </text>
                                            <text
                                                fill="#262626"
                                                fontFamily="Roboto-Bold, Roboto"
                                                fontSize="43"
                                                fontWeight="700"
                                                transform="translate(3177 1886)"
                                            >
                                                <tspan x="298" y="-6" textAnchor="end">
                                                    {data.address}
                                                </tspan>
                                            </text>
                                            <text
                                                fill="#262626"
                                                fontFamily="Roboto-Bold, Roboto"
                                                fontSize="43"
                                                fontWeight="700"
                                                transform="translate(3341 1928)"
                                            >
                                                <tspan x="135" y="6" textAnchor="end">
                                                    {data.address2}
                                                </tspan>
                                            </text>
                                            <rect
                                                width="1252"
                                                height="150"
                                                fill="#facf2b"
                                                data-name="Rectangle 255"
                                                rx="12"
                                                transform="translate(2253 3200)"
                                            ></rect>
                                            <text
                                                fill="#262626"
                                                data-name="View History"
                                                fontFamily="Roboto-Bold, Roboto"
                                                fontSize="56"
                                                fontWeight="700"
                                                transform="translate(2879 3295)"
                                            >
                                                <tspan x="-159.414" y="0">
                                                    View History
                                                </tspan>
                                            </text>
                                            <rect
                                                width="732"
                                                height="24"
                                                fill="#3b3b3b"
                                                data-name="Rectangle 256"
                                                rx="12"
                                                transform="translate(2513 3880)"
                                            ></rect>
                                        </g>
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
                        <label>Withdrawal Address</label>
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

export default ThirtyNinePage;