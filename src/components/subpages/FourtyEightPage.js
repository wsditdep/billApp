import React, { useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import { write } from 'clipboard-polyfill';
import "../../assets/styles/secondpage.scss";
import { ToastContainer, toast } from 'react-toastify';

const FourtyEightPage = () => {
    const screenshotRef = useRef(null);

    const [data, setData] = useState({
        time: "3:38",
        amount1: "-0.78741744 ETH",
        amount2: "-$2,758.68",
        to: "0x983a12D93B70Bb55ED965",
        to2: "703dd9A2702c6A7Ee05",
        price: "$3,503.45",
        network_fee: "0.002478 ETH",
        confirmations: "3",
        transaction_hash: "17ce1c...a85f03",
        date: "3:34PM - Mat 5, 2024",
    });

    const [imageDimension, setImageDimension] = useState("167");

    const [network, setNetwork] = useState("strong");
    const [net, setNet] = useState("5G");
    const [battery, setBattery] = useState("78");

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
                    <h3>PREVIEW - <span>Mobile 48</span></h3>
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
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                width={imageDimension + "%"}
                                viewBox="0 0 1783 3862"
                            >
                                <defs>
                                    <pattern
                                        id="pattern"
                                        width="100%"
                                        height="100%"
                                        preserveAspectRatio="none"
                                        viewBox="0 0 300 300"
                                    >
                                        <image
                                            width="300"
                                            height="300"
                                            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAMAAABOo35HAAAC+lBMVEVHcExif+hifelhfelhfephfulifuthfehhfeljf+xif+xhfephfephfelhfelifupif+1hfepifuthfutifuthfOphfuphfOlgfOZhf+xdet9de+lifuxhfepifuphfelhfepkge9mg/RnhPVnhfdohvlph/tqiP1ph/pohfhohvhnhPZpiPxkgfBifuthfephfephfuxifulif+ldeORifelif+1hfelifuxlgvJjf+xjf+tif+tifutifupkgO5lgvFohvphfupif+xcfudkgO1hfeplge9jgO9ifutifutgfepifupifutmhPRjgO1hfuphfepif+tkgO9ifupjge9ifepjgO5kgfBkgO9jf+xjgO5gfepjgO9if+xifuxhfepjgO1jfe1kgfBkgO9ifupjgO5jgO5kgfBhfOhjgO5ifuplgvFkgfBifelifulkgfFhfOljgO5kgfBhfupifutge+hee+phfepuiOxlgetfe+pkgOvS2vqJn/BZd+llgvJWdOmqufT///+1wvZkgvFbeOlzje32+P7I0viWqfHJ0/jy9P3DzffAzPd1ju1ceelXdemRpfHBzPfH0PhgfOpgfepeeurn7PzI0fiInfBaeOmywPXAy/fEzve5xvZrhetlgfF8lO76+/6crvJiferU2/rCzfd6ku5hfeqarfLG0PiuvPXt8f2PpPC7x/a/yvdviexdeuqEm+/9/v+ktPPc4vuAl+5kge+ltfO0wvVbeelxi+z09v7H0fdWdenk6fyGnO+wvvXFz/hphOv4+f5hfupqheuOovC+yfeDmu78/P+isvNffOp/lu5rfNa0wfVhfeiUp/Gnt/TCzPe3xPZ4kO1iferP2Plhfenq7v2NofBsh+yBmO6gsfNhfera4Pp/le5hfutifOqLoPDi5/ysuvRnguuYq/LN1vm9yPfX3/pjgfDw8/3Ez/iesPLV3fphfene5PuDme+puPTL1Plifuq/y/eCme59le7x9P3z9f7Ezvj+//+bSJmVAAAA93RSTlMADRklNUlaaHWCj6Kfp7/Dq5N5aVxOOSgcEAILRWLU5fT/////////////////+OeIZEwrBSKV4vP////////////JTgcWQ3PRsH0fVOz/78xAhb/uxl+l6LJruS/z/Vfx/zLemzz62eMtybr98Jr/9VHe+262E/////////////D/////+f////////////////////////////////////////+L////gP//////////////////7P////////////////////////////8B/3H//////9D/2P//////xv//3An///////////3/////4P////+gcfTf6QAAGipJREFUeAHs2XOD7ToQAPCsbXuLpCnXqKY9a9u2ra//3rWNNjl7f/8XcWYGsSElNS09IzMrOyc3L7+g8KWi4vy8kpzSsvKKyqrqmlr0D6pLq2/IyStsbGoWREnGRKGqJouv6JpKFQOrkmhaLY1FBa1t7R0p6Hnq7KrP7i7s6TUJfdEhtuC4nu/D53zPdYJQlHGCiFZLX35pf9oAek4Gh4YLRpptbOgvOgl+2ItOkwgVrcbRsYxx9BykTrQWTdoES4Ljw69wAxHTqemZ3MwulMxqZufmFyRDNx34Ta754jXWYm77IEpK40vLPTaRBRf+EC/QqbSyulaFkkza2novprYDf5gXatRaHNtIojlVtr6Z0AQf/o5Aplt9pR1JsU9tj+5QTYC/alen1npbKuLbXu6+jAWIQKDilYNDxK2U8vUjYvsQET8k4eIan8djWs6xpu5CpBydnOSeIt5U5vcS0YfohcZRcT3iSf3qFjEhJgG1i7Y7+emqkAYQI0eVz7a5yOrUr9sJB2LmydpZOfOzq3LVxq+6ioHuWuxHLDtdDt7MKia6Sz+fRayqzt00AmCIk7hYrmIz9bl2YgjAmF1ymVODmDO0SERgkGkcZ7K2Aq9MzQc2SfIoUymJpRNl9xpY5ZDLUmauEWmjmggsuw6NxUrEhLYV4gDr8NEcAxW0rlEsXgPzrgVlMR3FLHPFcIEP+CY73vTelf7BtGLctUlWY6zNpo8Yu8ARl5zcopiU3WjAl2tJbO2MZQke4PAaOHMdKOvVKHJVZ4oDPCJ3QyhiFSsY+HSt3z+gSGVfiNfAqetQK4kw59zZnTCvgV+7yuMTisjTo/I/c+cdF8W1/v+T3jW9N5ciwnpvegKYA+m93l4N+b3SE9OzI4vub5k4OCqy67iLK2E0xOugi4Brp0RxFSkusffeUGOv+O2ecEXCmYVZdp5H3//mr7zd83A+55x5Howdg02Au4/t/TzS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"
                                        ></image>
                                    </pattern>
                                    <clipPath id="clip-path">
                                        <path
                                            fill="none"
                                            d="M-7.969 2H27.201999999999998V33.381H-7.969z"
                                        ></path>
                                    </clipPath>
                                </defs>
                                <g data-name="Group 207" transform="translate(-2221 -185)">
                                    <g data-name="Group 206">
                                        <path
                                            fill="#fff"
                                            d="M0 0H1783V3862H0z"
                                            data-name="Rectangle 274"
                                            transform="translate(2221 185)"
                                        ></path>
                                        <text
                                            data-name="3:38"
                                            fontFamily="Roboto-Bold, Roboto"
                                            fontSize="82"
                                            fontWeight="700"
                                            transform="translate(2484 329)"
                                        >
                                            <tspan x="-82.14" y="0">
                                                {data.time}
                                            </tspan>
                                        </text>

                                        {
                                            network === "mid"
                                                ?
                                                <g fill="#3b3b3b" transform="translate(228 93)">
                                                    <rect
                                                        width="12"
                                                        height="18"
                                                        data-name="Rectangle 243"
                                                        rx="2"
                                                        transform="translate(3272 213)"
                                                    ></rect>
                                                    <rect
                                                        width="14"
                                                        height="27"
                                                        data-name="Rectangle 241"
                                                        rx="2"
                                                        transform="translate(3295 204)"
                                                    ></rect>
                                                    <rect
                                                        width="13"
                                                        height="39"
                                                        data-name="Rectangle 239"
                                                        opacity="0.5"
                                                        rx="2"
                                                        transform="translate(3318 192)"
                                                    ></rect>
                                                    <rect
                                                        width="13"
                                                        height="52"
                                                        data-name="Rectangle 237"
                                                        opacity="0.5"
                                                        rx="2"
                                                        transform="translate(3342 179)"
                                                    ></rect>
                                                </g>
                                                :
                                                network === "strong"
                                                    ?
                                                    <g fill="#3b3b3b" transform="translate(-973 13913)">
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
                                                    :
                                                    <g fill="#3b3b3b" transform="translate(232 8)">
                                                        <rect
                                                            width="12"
                                                            height="18"
                                                            data-name="Rectangle 244"
                                                            rx="2"
                                                            transform="translate(3268 299)"
                                                        ></rect>
                                                        <rect
                                                            width="14"
                                                            height="27"
                                                            data-name="Rectangle 242"
                                                            opacity="0.5"
                                                            rx="2"
                                                            transform="translate(3291 290)"
                                                        ></rect>
                                                        <rect
                                                            width="13"
                                                            height="39"
                                                            data-name="Rectangle 240"
                                                            opacity="0.5"
                                                            rx="2"
                                                            transform="translate(3314 278)"
                                                        ></rect>
                                                        <rect
                                                            width="13"
                                                            height="52"
                                                            data-name="Rectangle 238"
                                                            opacity="0.5"
                                                            rx="2"
                                                            transform="translate(3338 265)"
                                                        ></rect>
                                                    </g>
                                        }
                                        {
                                            net === "5G"
                                                ?
                                                <text
                                                    fill="#3a3a3a"
                                                    data-name="5G"
                                                    fontFamily="Roboto-Medium, Roboto"
                                                    fontSize="63"
                                                    fontWeight="600"
                                                    transform="translate(3623 325)"
                                                >
                                                    <tspan x="0" y="0">
                                                        5G
                                                    </tspan>
                                                </text>
                                                :
                                                net === "4G"
                                                    ?
                                                    <text
                                                        fill="#3a3a3a"
                                                        data-name="4G"
                                                        fontFamily="Roboto-Medium, Roboto"
                                                        fontSize="63"
                                                        fontWeight="600"
                                                        transform="translate(3619 321)"
                                                    >
                                                        <tspan x="0" y="0">
                                                            4G
                                                        </tspan>
                                                    </text>
                                                    :
                                                    <g fill="#3a3a3a" transform="translate(228 93)">
                                                        <path
                                                            d="M99.606 192a52.69 52.69 0 00-35.3 14.074 1.27 1.27 0 00-.048 1.817l4.256 4.447a1.309 1.309 0 001.849.048 42.819 42.819 0 0129.263-11.428 42.819 42.819 0 0129.263 11.428 1.309 1.309 0 001.849-.048l4.256-4.447a1.271 1.271 0 00-.048-1.817A52.831 52.831 0 0099.606 192z"
                                                            data-name="Path 73"
                                                            transform="translate(3335.104 -8)"
                                                        ></path>
                                                        <path
                                                            d="M221.936 432.967l4.558 4.511a1.307 1.307 0 001.785.048 24.792 24.792 0 0132.8 0 1.307 1.307 0 001.785-.048l4.559-4.511a1.273 1.273 0 00-.048-1.865 33.99 33.99 0 00-45.425 0 1.3 1.3 0 00-.014 1.865zm22.76 7.443a12.987 12.987 0 00-9.468 4.064 1.275 1.275 0 00.032 1.785l8.511 8.4a1.308 1.308 0 001.849 0l8.511-8.4a1.275 1.275 0 00.032-1.785 13.048 13.048 0 00-9.463-4.063z"
                                                            data-name="Path 72"
                                                            transform="translate(3190.015 -220.039)"
                                                        ></path>
                                                    </g>
                                        }
                                        {
                                            battery === "78"
                                                ?
                                                <g transform="translate(228 93)">
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
                                                </g>
                                                :
                                                battery === "50"
                                                    ?
                                                    <g transform="translate(238 179)">
                                                        <path
                                                            fill="#3a3a3a"
                                                            d="M23 0h64a23 23 0 0123 23v14a23 23 0 01-23 23H23A23 23 0 010 37V23A23 23 0 0123 0z"
                                                            data-name="Path 74"
                                                            transform="translate(3496 92)"
                                                        ></path>
                                                        <path
                                                            fill="#818d9d"
                                                            d="M0 0a6 6 0 016 6v2a6 6 0 01-6 6V0z"
                                                            data-name="Rectangle 251"
                                                            transform="translate(3607 116)"
                                                        ></path>
                                                        <path
                                                            fill="#818d9d"
                                                            d="M0 0h31a23 23 0 0123 23v14a23 23 0 01-23 23H0V0z"
                                                            data-name="Rectangle 247"
                                                            transform="translate(3552 92)"
                                                        ></path>
                                                        <text
                                                            fill="#fff8f6"
                                                            data-name="50"
                                                            fontFamily="HelveticaWorld-Bold, Helvetica World"
                                                            fontSize="50"
                                                            fontWeight="700"
                                                            transform="translate(3522 140)"
                                                        >
                                                            <tspan x="0" y="0">
                                                                50
                                                            </tspan>
                                                        </text>
                                                    </g>
                                                    :
                                                    <g transform="translate(228 8)">
                                                        <path
                                                            fill="#3a3a3a"
                                                            d="M23 0h64a23 23 0 0123 23v13a23 23 0 01-23 23H23A23 23 0 010 36V23A23 23 0 0123 0z"
                                                            data-name="Path 75"
                                                            transform="translate(3506 264)"
                                                        ></path>
                                                        <path
                                                            fill="#818d9d"
                                                            d="M0 0a6 6 0 016 6v5a6 6 0 01-6 6V0z"
                                                            data-name="Rectangle 248"
                                                            transform="translate(3617 286)"
                                                        ></path>
                                                        <path
                                                            fill="#818d9d"
                                                            d="M0 0h57a23 23 0 0123 23v13a23 23 0 01-23 23H0V0z"
                                                            data-name="Rectangle 249"
                                                            transform="translate(3536 264)"
                                                        ></path>
                                                        <text
                                                            fill="#fff8f6"
                                                            data-name="25"
                                                            fontFamily="HelveticaWorld-Bold, Helvetica World"
                                                            fontSize="50"
                                                            fontWeight="700"
                                                            transform="translate(3532 311)"
                                                        >
                                                            <tspan x="0" y="0">
                                                                25
                                                            </tspan>
                                                        </text>
                                                    </g>
                                        }

                                        <g data-name="Group 194">
                                            <path
                                                d="M40.9 63.754l-29.994-28.73 30.83-29.99L36.073 0 0 35.024l11.823 11.137L36.073 69z"
                                                data-name="Path 15"
                                                transform="translate(2307.783 485)"
                                            ></path>
                                            <path
                                                d="M0 0H70.239V7.682H0z"
                                                data-name="Rectangle 72"
                                                transform="translate(2316.409 516.495)"
                                            ></path>
                                        </g>
                                        <text
                                            data-name="Send Ethereum"
                                            fontFamily="Roboto-Medium, Roboto"
                                            fontSize="73"
                                            fontWeight="500"
                                            transform="translate(2858 545)"
                                        >
                                            <tspan x="0" y="0">
                                                Send Ethereum
                                            </tspan>
                                        </text>
                                        <text
                                            data-name="-$2,758.68"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="125"
                                            transform="translate(2818 1034)"
                                        >
                                            <tspan x="290" y="0" textAnchor="middle">
                                                {data.amount2}
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#5a5a5a"
                                            data-name="-0.78741744 ETH"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="74"
                                            transform="translate(2836 876)"
                                        >
                                            <tspan x="290" y="0" textAnchor="middle">
                                                {data.amount1}
                                            </tspan>
                                        </text>
                                        <path
                                            fill="#e8e8e8"
                                            d="M0 0H1781V5H0z"
                                            data-name="Rectangle 275"
                                            transform="translate(2222 1215)"
                                        ></path>
                                        <path
                                            fill="#e8e8e8"
                                            d="M0 0H1781V5H0z"
                                            data-name="Rectangle 281"
                                            transform="translate(2222 3200)"
                                        ></path>
                                        <path
                                            fill="#e8e8e8"
                                            d="M0 0H1781V5H0z"
                                            data-name="Rectangle 276"
                                            transform="translate(2222 3634)"
                                        ></path>
                                        <text
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="75"
                                            transform="translate(2325 1447)"
                                        >
                                            <tspan x="0" y="0">
                                                To
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#6e6e6e"
                                            data-name="1.1501935595753267e+25"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="75"
                                            transform="translate(2912 1447)"
                                        >
                                            <tspan x="988" y="0" textAnchor="end">
                                                {data.to}
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#6e6e6e"
                                            data-name="703dd9A2702c6A7Ee05"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="75"
                                            transform="translate(3094 1555)"
                                        >
                                            <tspan x="804" y="0" textAnchor="end">
                                                {data.to2}
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#6e6e6e"
                                            data-name="$3,503.45"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="75"
                                            transform="translate(3569 1813)"
                                        >
                                            <tspan x="330" y="0" textAnchor="end">
                                                {data.price}
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#6e6e6e"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="75"
                                            transform="translate(3578 2056)"
                                        >
                                            <tspan x="0" y="0">
                                                Ethereum
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#6e6e6e"
                                            data-name="0.002478 ETH"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="75"
                                            transform="translate(3423 2329)"
                                        >
                                            <tspan x="480" y="0" textAnchor="end">
                                                {data.network_fee}
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#6e6e6e"
                                            data-name="3"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="75"
                                            transform="translate(3856 2582)"
                                        >
                                            <tspan x="40" y="0" textAnchor="end">
                                                {data.confirmations}
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#6e6e6e"
                                            data-name="17ce1c...a85f03"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="75"
                                            transform="translate(3359 2841)"
                                        >
                                            <tspan x="550" y="0" textAnchor="end">
                                                {data.transaction_hash}
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#6e6e6e"
                                            data-name="3:34PM - Mat 5, 2024"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="75"
                                            transform="translate(3190 3094)"
                                        >
                                            <tspan x="720" y="0" textAnchor="end">
                                                {data.date}
                                            </tspan>
                                        </text>
                                        <text
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="75"
                                            transform="translate(2328 1813)"
                                        >
                                            <tspan x="0" y="0">
                                                Price
                                            </tspan>
                                        </text>
                                        <text
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="75"
                                            transform="translate(2328 2068)"
                                        >
                                            <tspan x="0" y="0">
                                                Network
                                            </tspan>
                                        </text>
                                        <text
                                            data-name="Netwrok fee"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="75"
                                            transform="translate(2325 2323)"
                                        >
                                            <tspan x="0" y="0">
                                                Network fee
                                            </tspan>
                                        </text>
                                        <text
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="75"
                                            transform="translate(2325 2582)"
                                        >
                                            <tspan x="0" y="0">
                                                Confirmations
                                            </tspan>
                                        </text>
                                        <text
                                            data-name="Transaction hash"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="75"
                                            transform="translate(2325 2838)"
                                        >
                                            <tspan x="0" y="0">
                                                Transaction hash
                                            </tspan>
                                        </text>
                                        <text
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="75"
                                            transform="translate(2325 3094)"
                                        >
                                            <tspan x="0" y="0">
                                                Date
                                            </tspan>
                                        </text>
                                        <text
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="75"
                                            transform="translate(2583 3410)"
                                        >
                                            <tspan x="0" y="0">
                                                Status
                                            </tspan>
                                        </text>
                                        <text
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="75"
                                            transform="translate(3534 3410)"
                                        >
                                            <tspan x="0" y="0">
                                                Completed
                                            </tspan>
                                        </text>
                                        <rect
                                            width="76"
                                            height="76"
                                            fill="url(#pattern)"
                                            rx="38"
                                            transform="translate(3463 1992)"
                                        ></rect>
                                        <g
                                            fill="#fff"
                                            stroke="#0c8154"
                                            strokeWidth="7"
                                            data-name="Ellipse 44"
                                            transform="translate(2344 3303)"
                                        >
                                            <circle cx="81" cy="81" r="81" stroke="none"></circle>
                                            <circle cx="81" cy="81" r="77.5" fill="none"></circle>
                                        </g>
                                        <g
                                            fill="url(#pattern)"
                                            stroke="#fff"
                                            strokeWidth="2"
                                            data-name="ethereum-logo-EC6CDBA45B-seeklogo.com"
                                            transform="translate(2435 3401)"
                                        >
                                            <rect width="84" height="85" stroke="none" rx="42"></rect>
                                            <rect width="82" height="83" x="1" y="1" fill="none" rx="41"></rect>
                                        </g>
                                        <g
                                            fill="#0c8154"
                                            data-name="Group 195"
                                            transform="rotate(90 -454.3 2902.82)"
                                        >
                                            <path
                                                d="M27.879 43.461L7.434 23.875 28.451 3.431 24.591 0 0 23.875l8.06 7.592 16.531 15.57z"
                                                data-name="Path 15"
                                            ></path>
                                            <path
                                                d="M0 0H47.881V5.237H0z"
                                                data-name="Rectangle 72"
                                                transform="translate(5.88 21.47)"
                                            ></path>
                                        </g>
                                        <rect
                                            width="1551"
                                            height="291"
                                            fill="#e8e8e8"
                                            data-name="Rectangle 277"
                                            rx="131"
                                            transform="translate(2337 3569)"
                                        ></rect>
                                        <path
                                            fill="#fff"
                                            d="M0 0H1739V399H0z"
                                            data-name="Rectangle 278"
                                            transform="translate(2264 3639)"
                                        ></path>
                                        <g data-name="Group 204" transform="translate(1993)">
                                            <text
                                                fill="#626367"
                                                fontFamily="Roboto-Regular, Roboto"
                                                fontSize="48"
                                                transform="translate(372 3847)"
                                            >
                                                <tspan x="0" y="0">
                                                    Home
                                                </tspan>
                                            </text>
                                            <text
                                                fill="#626367"
                                                fontFamily="Roboto-Regular, Roboto"
                                                fontSize="48"
                                                transform="translate(1393 3847)"
                                            >
                                                <tspan x="0" y="0">
                                                    Explore
                                                </tspan>
                                            </text>
                                            <text
                                                fill="#626367"
                                                fontFamily="Roboto-Regular, Roboto"
                                                fontSize="48"
                                                transform="translate(1067 3847)"
                                            >
                                                <tspan x="0" y="0">
                                                    Trade
                                                </tspan>
                                            </text>
                                            <text
                                                fill="#626367"
                                                fontFamily="Roboto-Regular, Roboto"
                                                fontSize="48"
                                                transform="translate(1772 3847)"
                                            >
                                                <tspan x="0" y="0">
                                                    Earn
                                                </tspan>
                                            </text>
                                            <text
                                                fill="#0552ff"
                                                data-name="My assets"
                                                fontFamily="Roboto-Regular, Roboto"
                                                fontSize="48"
                                                transform="translate(671 3847)"
                                            >
                                                <tspan x="0" y="0">
                                                    My assets
                                                </tspan>
                                            </text>
                                            <path
                                                fill="none"
                                                stroke="#0a0a0a"
                                                strokeWidth="8"
                                                d="M393 3771.001v-49.194l39.836-36.976 39.836 36.976v49.194h-34.339v-30.63h-12v30.63z"
                                                data-name="Path 86"
                                            ></path>
                                            <g
                                                fill="#0552ff"
                                                data-name="Group 196"
                                                transform="translate(33 -189)"
                                            >
                                                <circle
                                                    cx="46"
                                                    cy="46"
                                                    r="46"
                                                    data-name="Ellipse 45"
                                                    transform="translate(701 3868)"
                                                ></circle>
                                                <g stroke="#fff" strokeWidth="5" data-name="Rectangle 279">
                                                    <path
                                                        stroke="none"
                                                        d="M0 0a47 47 0 0147 47H0V0z"
                                                        transform="translate(749 3864)"
                                                    ></path>
                                                    <path
                                                        fill="none"
                                                        d="M2.5 2.5h0a42 42 0 0142 42v0h0-42 0v-42h0z"
                                                        transform="translate(749 3864)"
                                                    ></path>
                                                </g>
                                            </g>
                                            <g data-name="Group 200" transform="translate(-128.173)">
                                                <g data-name="Group 199" transform="translate(1214.5 3692.742)">
                                                    <g data-name="Group 198" transform="translate(4.848)">
                                                        <path
                                                            fill="none"
                                                            stroke="#000"
                                                            strokeWidth="6"
                                                            d="M0 54.943L25.317 16.16l15.621 21.545L70.026-.001"
                                                            data-name="Path 87"
                                                        ></path>
                                                    </g>
                                                    <path
                                                        fill="none"
                                                        stroke="#000"
                                                        strokeWidth="6"
                                                        d="M0 0L86.186 0"
                                                        data-name="Line 13"
                                                        transform="translate(0 73.258)"
                                                    ></path>
                                                </g>
                                                <path
                                                    fill="none"
                                                    stroke="#000"
                                                    strokeWidth="5"
                                                    d="M1269.063 3692.062l22.465-1.519 2.935 21.19"
                                                    data-name="Path 88"
                                                ></path>
                                            </g>
                                            <g data-name="Group 202" transform="translate(-113 2)">
                                                <g
                                                    fill="#fff"
                                                    stroke="#000"
                                                    strokeWidth="8"
                                                    data-name="Ellipse 46"
                                                    transform="translate(1543 3681)"
                                                >
                                                    <circle cx="45" cy="45" r="45" stroke="none"></circle>
                                                    <circle cx="45" cy="45" r="41" fill="none"></circle>
                                                </g>
                                                <g data-name="Group 201" transform="rotate(-8 1548.903 2920.326)">
                                                    <path
                                                        d="M13 0l13 24H0z"
                                                        data-name="Polygon 3"
                                                        transform="rotate(48.01 -3409.017 3519.029)"
                                                    ></path>
                                                    <g
                                                        clipPath="url(#clip-path)"
                                                        data-name="Scroll Group 1"
                                                        transform="translate(1454.508 3712.781)"
                                                        style={{ isolation: "isolate" }}
                                                    >
                                                        <path
                                                            d="M13 0l13 24H0z"
                                                            data-name="Polygon 4"
                                                            transform="rotate(-131 13.516 17.616)"
                                                        ></path>
                                                    </g>
                                                </g>
                                            </g>
                                            <g data-name="Group 203" transform="translate(-1)">
                                                <path
                                                    fill="none"
                                                    stroke="#000"
                                                    strokeWidth="7"
                                                    d="M0 68L68 0"
                                                    data-name="Line 14"
                                                    transform="translate(1786.5 3693.5)"
                                                ></path>
                                                <g fill="#fff" data-name="Path 89">
                                                    <path
                                                        d="M14.5 25.5c-2.938 0-5.7-1.144-7.778-3.222A10.928 10.928 0 013.5 14.5c0-2.938 1.144-5.7 3.222-7.778A10.928 10.928 0 0114.5 3.5c2.938 0 5.7 1.144 7.778 3.222A10.928 10.928 0 0125.5 14.5c0 2.938-1.144 5.7-3.222 7.778A10.928 10.928 0 0114.5 25.5z"
                                                        transform="translate(1785 3691)"
                                                    ></path>
                                                    <path
                                                        fill="#000"
                                                        d="M14.5 7C10.364 7 7 10.364 7 14.5s3.364 7.5 7.5 7.5 7.5-3.364 7.5-7.5S18.636 7 14.5 7m0-7C22.508 0 29 6.492 29 14.5S22.508 29 14.5 29 0 22.508 0 14.5 6.492 0 14.5 0z"
                                                        transform="translate(1785 3691)"
                                                    ></path>
                                                </g>
                                                <g
                                                    fill="#fff"
                                                    stroke="#000"
                                                    strokeWidth="7"
                                                    data-name="Ellipse 48"
                                                    transform="translate(1828 3733)"
                                                >
                                                    <circle cx="14.5" cy="14.5" r="14.5" stroke="none"></circle>
                                                    <circle cx="14.5" cy="14.5" r="11" fill="none"></circle>
                                                </g>
                                            </g>
                                            <rect
                                                width="629"
                                                height="21"
                                                data-name="Rectangle 280"
                                                rx="10.5"
                                                transform="translate(818 3980)"
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
                            value={data.amount1}
                            name="amount1"
                            onChange={(e) => onChangeHandler(e)}
                        />
                        <input
                            type="text"
                            value={data.amount2}
                            name="amount2"
                            onChange={(e) => onChangeHandler(e)}
                        />
                    </div>
                    <div className="global_form_inner">
                        <label>To</label>
                        <input
                            type="text"
                            value={data.to}
                            name="to"
                            onChange={(e) => onChangeHandler(e)}
                        />
                        <input
                            type="text"
                            value={data.to2}
                            name="to2"
                            onChange={(e) => onChangeHandler(e)}
                        />
                    </div>
                    <div className="global_form_inner">
                        <label>Price</label>
                        <input
                            type="text"
                            value={data.price}
                            name="price"
                            onChange={(e) => onChangeHandler(e)}
                        />
                    </div>
                    <div className="global_form_inner">
                        <label>Network fee</label>
                        <input
                            type="text"
                            value={data.network_fee}
                            name="network_fee"
                            onChange={(e) => onChangeHandler(e)}
                        />
                    </div>
                    <div className="global_form_inner">
                        <label>Confirmations</label>
                        <input
                            type="text"
                            value={data.confirmations}
                            name="confirmations"
                            onChange={(e) => onChangeHandler(e)}
                        />
                    </div>
                    <div className="global_form_inner">
                        <label>Transaction hash</label>
                        <input
                            type="text"
                            value={data.transaction_hash}
                            name="transaction_hash"
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

export default FourtyEightPage;