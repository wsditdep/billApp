import React, { useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import { write } from 'clipboard-polyfill';
import { ToastContainer, toast } from 'react-toastify';

const NinthPage = () => {
    const screenshotRef = useRef(null);
    const [data, setData] = useState({
        time: "14:57",
        amount: "- 299.47 USDT",
        block_chain: "TRC20",
        type: "On-chain withdrawal",
        status: "sent",
        address_up: "ThyYHVBgFZCenF6a8vgLrebF",
        address_down: "GGbpGrASPg",
        transaction_id_1: "35b25f82b4740f8a7815274a14",
        transaction_id_2: "4f26afdc3929cf621afad032017",
        transaction_id_3: "30e05f5ac63",
        fee: "1 USDT",
        date_and_time: "08/04/2023, 14:56:25"
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
                        <h3>PREVIEW - <span>Mobile 9</span></h3>
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
                                    viewBox="0 0 1765 3820"
                                >
                                    <defs>
                                        <pattern
                                            id="pattern"
                                            width="100%"
                                            height="100%"
                                            preserveAspectRatio="none"
                                            viewBox="0 0 269 89"
                                        >
                                            <image
                                                width="269"
                                                height="89"
                                                xlinkHref="data:image/png;base64,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"
                                            ></image>
                                        </pattern>
                                        <pattern
                                            id="pattern-2"
                                            width="100%"
                                            height="100%"
                                            preserveAspectRatio="none"
                                            viewBox="0 0 109 100"
                                        >
                                            <image
                                                width="109"
                                                height="100"
                                                xlinkHref="data:image/png;base64,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"
                                            ></image>
                                        </pattern>
                                        <pattern
                                            id="pattern-3"
                                            width="100%"
                                            height="100%"
                                            preserveAspectRatio="none"
                                            viewBox="0 0 955 154"
                                        >
                                            <image
                                                width="955"
                                                height="154"
                                                xlinkHref="data:image/png;base64,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cgvh89fqLv7PxTyuPCNvZ8W9Vj4+rghq1qxZSsG91gorrKBUuIIAt615P7jx4Pape/3M/T53rDt27KgU8u+cM2eOUpg3b55S6+Led50ChTrfU2npa3Xo0EGp+MIXvqAU3D6dNm2aUsjntRu7jts3wGdNPg/c+equlW5+zj/bpUsXpdC2bVul8NZbbymFfB101zK3DXlb3ba7c99dw/M1ye0b93NO/p3uvsWV9eTXX2211ZRC3WOWr11z585VCu666O5b8r533+O2CwtXdyz9X8vH1t1z1ZkjXNGZu/a7krQ8dt3Pufkg39tWVl55ZaXCld+9/vrrSsHdm+f7XbcNaJn/OaIAAAAAAFjM8bALAAAAAGgcHnYBAAAAAI3T6tfs/m37lEKnTp2UijZt2igFt24nr9F75513lIJbK+DWneT/l759+/ZKYZVVVlH6eDNmzFAq3nzzTaXg1l+4bc3rAJZZZhml0K1bN6XQuXNnpWL27NlKYerUqUqha9euSqFv375KhVuf+8ADDygF9/p1PkjcreWpswa57vqr/DvdOs5evXophQEDBiiF/H4effRRpXDDDTcotS5ujUzm9mndNWD5+9z3OMcdd5xS0a5dO6UwefJkpTB27Fil8PzzzysVddc9uX3j1tEBTZbPYXfuu6+59aW582DgwIFKYZNNNlEKbj3uWWedpVS4Nfzz589XCnXmJHfNcOqsVXTq/E63xtX1neQ1zltuuaVS2HnnnZXCu+++qxTGjRunVOT/rrh96rY1z59unWXd/YWi7rj8v5aPY917hjxG3L1nv379lIIbS7/73e+UiieffFIpuPXs2267rVLI55B79hg9erRSePzxx5VCvtfkHmLRqXc3CQAAAADAYoSHXQAAAABA4/CwCwAAAABoHB52AQAAAACN86kUVC3KD7PebLPNlMIZZ5yhVPTo0UMpuAXngwcPVipcOZArlfrTn/6kFPIHRx9//PFK4cADD1QKbsH58OHDlYrLLrtMKbgPqnYFBHlhv9t/Rx99tFLo3bu3UnHVVVcphTvuuEMp7Ljjjkrh29/+tlLhCgiGDRumFEaMGKG0cMsvv7xSWHvttZVCLsFw5VczZ85UCm4/1ylK6t+/v1K48MILlUL+8PJLLrlEKZx55plKIRd91C2fcO8nF64ttdRSSqHueMuv5QrEXHlTnQISd67kD3Cv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ypQpSuGcc85RCnfddZdSOO2005SK3XbbTSnkEp5KLsD67W9/qxRWXnllpeAKNfL7cdxC/z/+8Y9KYZdddlEq8gL+iitUyOUCkydPVgr33Xef0sebOHGiUuH2uysNcMcsl664MpXp06crhXzMXEGE24Z1111XKTz//PNKxSWXXKIUXEHZtttuqxRyQdkGG2ygFKZNm6YUxo0bpxTeeOMNpaJbt25KYdNNN1UKubzLFXw98MADSsGVt+UiK1fo4wrKXPFT3g5XePLcc88phbffflupyOOv4vapmwdzAZI7r13RnSsCy/u+f//+SsEV0uTil0svvVQp5Lm5csoppyiFPL5cEZQrmnJlPbm866CDDlIKbu53ZT2XX365UvHzn/9cKbjCkzzv7rTTTkrhscceUwruOpWLhVy5idsGV5TywgsvKBVf+tKXlMLuu++uFPL89utf/1opuHnRXZPatWunVLjCP3d+unMjX5NcQZUrLMzXdfc9jiuIyfOZK510c6wrLcpzST5eFXes8zb07NlTKbgytzwnVXIp2xVXXKEU/nZ/qRTcebbPPvsoFa6UzRX1Pfroo0ohH6PttttOKWy55ZZK4cknn1Qq8j1e5d1331UKG2+8sVLYfPPNlYo111xTKbg56aGHHlIKuZDKHR93nuVzas8991QK7l7NXT9zSae7V3Nli67QK88Ro0ePVgrDhw9XCnke3HXXXZWC+zn3fi666CKlIo/lirtXP/LII5VCHruu8DFfayrufmDHHXdUKvL9fGXFFVdUCg8++KBS4c6V5ZZbTin069dPKeT7KTe2XDFka8dfdgEAAAAAjcPDLgAAAACgcXjYBQAAAAA0Tqtfs7vkkksqhbx+xH1I+dFHH60UBg4cqFTk9XmV/EHcla5duyqFvG4vf1B25Sc/+YlScP+//bBhw5QK957zmrDKTTfdpBTyhz2vttpqSsF9YHdes+DWPbl1W+5DyfM63g8++EApuHV1N954o1LIa3d69+6tFNwHied1IW5fuTWBbq1VXjP1pz/9SSnstddeSuG4445TCnndhFsbecIJJyiFJ554Qqlo27atUnBr9Nx25e136wvd+qujjjpKKeQPVHfb9Ytf/EIpuA8qz+vO3Dqnb3zjG0ohr6NZdtlllYI71935mdfRuPVebr1Kly5dlMLMmTOViquvvlop3HzzzUrhrbfe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"
                                            ></image>
                                        </pattern>
                                        <pattern
                                            id="pattern-4"
                                            width="100%"
                                            height="100%"
                                            preserveAspectRatio="none"
                                            viewBox="0 0 131 138"
                                        >
                                            <image
                                                width="131"
                                                height="138"
                                                xlinkHref="data:image/png;base64,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"
                                            ></image>
                                        </pattern>
                                        <pattern
                                            id="pattern-5"
                                            width="100%"
                                            height="100%"
                                            preserveAspectRatio="none"
                                            viewBox="0 0 57 68"
                                        >
                                            <image
                                                width="57"
                                                height="68"
                                                xlinkHref="data:image/png;base64,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"
                                            ></image>
                                        </pattern>
                                        <pattern
                                            id="pattern-7"
                                            width="100%"
                                            height="100%"
                                            preserveAspectRatio="none"
                                            viewBox="0 0 581 100"
                                        >
                                            <image
                                                width="581"
                                                height="100"
                                                xlinkHref="data:image/png;base64,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"
                                            ></image>
                                        </pattern>
                                    </defs>
                                    <g data-name="Group 1" transform="translate(-1088 -100)">
                                        <path
                                            fill="#121212"
                                            d="M0 0H1765V3820H0z"
                                            data-name="Rectangle 1"
                                            transform="translate(1088 100)"
                                        ></path>
                                        <path
                                            fill="url(#pattern)"
                                            d="M0 0H380V126H0z"
                                            data-name="Image 1"
                                            transform="translate(2390 135)"
                                        ></path>
                                        <text
                                            fill="#b8b8b8"
                                            data-name="14:57"
                                            fontFamily="Roboto-Medium, Roboto"
                                            fontSize="65"
                                            fontWeight="500"
                                            transform="translate(1210 228)"
                                        >
                                            <tspan x="0" y="0">
                                                {data.time}
                                            </tspan>
                                        </text>
                                        <path
                                            fill="#1b1b1b"
                                            d="M0 0H1765V7H0z"
                                            data-name="Rectangle 2"
                                            transform="translate(1088 488)"
                                        ></path>
                                        <text
                                            fill="#616161"
                                            fontFamily="Roboto-Medium, Roboto"
                                            fontSize="60"
                                            fontWeight="500"
                                            transform="translate(1860 677)"
                                        >
                                            <tspan x="0" y="0">
                                                Amount
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#fff"
                                            data-name="- 299.47 USDT"
                                            fontFamily="Roboto-Medium, Roboto"
                                            fontSize="107"
                                            fontWeight="500"
                                            transform="translate(1930 830)"
                                        >
                                            <tspan x="0" y="0" textAnchor="middle">
                                                {data.amount}
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#e6e0e0"
                                            fontFamily="Roboto-Medium, Roboto"
                                            fontSize="59"
                                            fontWeight="500"
                                            transform="translate(1925 952)"
                                        >
                                            <tspan x="0" y="0">
                                                Sent
                                            </tspan>
                                        </text>
                                        <path
                                            fill="url(#pattern-2)"
                                            d="M0 0H151V139H0z"
                                            data-name="Image 2"
                                            transform="translate(1767 862)"
                                        ></path>
                                        <path
                                            fill="url(#pattern-3)"
                                            d="M0 0H735V119H0z"
                                            data-name="Image 3"
                                            transform="translate(1618 350)"
                                        ></path>
                                        <path
                                            fill="url(#pattern-4)"
                                            d="M0 0H98V104H0z"
                                            data-name="Image 4"
                                            transform="translate(1112 350)"
                                        ></path>
                                        <rect
                                            width="1608"
                                            height="273"
                                            fill="#1a1a1a"
                                            data-name="Rectangle 3"
                                            rx="21"
                                            transform="translate(1164 1134)"
                                        ></rect>
                                        <image
                                            width="188"
                                            height="178"
                                            data-name="Image 5"
                                            transform="translate(1221 1187)"
                                            xlinkHref="data:image/png;base64,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"
                                        ></image>
                                        <text
                                            fill="#e6e0e0"
                                            data-name="Crypto transferred out of OKX"
                                            fontFamily="Roboto-Medium, Roboto"
                                            fontSize="57"
                                            fontWeight="500"
                                            transform="translate(1444 1256)"
                                        >
                                            <tspan x="0" y="0">
                                                Crypto transferred out of OKX
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#2680eb"
                                            data-name="Why hasn't my transaction arrived?"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="54"
                                            transform="translate(1444 1329)"
                                        >
                                            <tspan x="0" y="0">
                                                Why hasn&apos;t my transaction arrived?
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#888"
                                            fontFamily="Roboto-Medium, Roboto"
                                            fontSize="57"
                                            fontWeight="500"
                                            transform="translate(1167 1595)"
                                        >
                                            <tspan x="0" y="0">
                                                Blockchain
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#c5c5c5"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="57"
                                            transform="translate(2730 1595)"
                                        >0
                                            <tspan x="0" y="0" textAnchor="end">
                                                {data.block_chain}
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#c5c5c5"
                                            data-name="On-chain withdrawal"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="62"
                                            transform="translate(2760 1751)"
                                        >
                                            <tspan x="0" y="0" textAnchor="end">
                                                {data.type}
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#c5c5c5"
                                            data-name="Sent"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="62"
                                            transform="translate(2760 1908)"
                                        >
                                            <tspan x="0" y="0" textAnchor="end">
                                                {data.status}
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#c5c5c5"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="62"
                                            transform="translate(2650 2066)"
                                        >
                                            <tspan x="0" y="0" textAnchor="end">
                                                {data.address_up}
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#c5c5c5"
                                            data-name="35b25f82b4740f8a7815274a14"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="62"
                                            transform="translate(2650 2292)"
                                        >
                                            <tspan x="0" y="0" textAnchor="end">
                                                {data.transaction_id_1}
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#c5c5c5"
                                            data-name="4f26afdc3929cf621afad032017"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="62"
                                            transform="translate(2650 2360)"
                                        >
                                            <tspan x="0" y="0" textAnchor="end">
                                                {data.transaction_id_2}
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#c5c5c5"
                                            data-name="30e05f5ac63"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="62"
                                            transform="translate(2660 2424)"
                                        >
                                            <tspan x="0" y="0" textAnchor="end">
                                                {data.transaction_id_3}
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#c5c5c5"
                                            data-name="1 USDT"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="62"
                                            transform="translate(2760 2579)"
                                        >
                                            <tspan x="0" y="0" textAnchor="end">
                                                {data.fee}
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#c5c5c5"
                                            data-name="08/04/2023, 14:56:25"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="62"
                                            transform="translate(2760 2734)"
                                        >
                                            <tspan x="0" y="0" textAnchor="end">
                                                {data.date_and_time}
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#c5c5c5"
                                            fontFamily="Roboto-Regular, Roboto"
                                            fontSize="61"
                                            transform="translate(2650 2129)"
                                        >
                                            <tspan x="0" y="0" textAnchor="end">
                                                {data.address_down}
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#888"
                                            fontFamily="Roboto-Medium, Roboto"
                                            fontSize="57"
                                            fontWeight="500"
                                            transform="translate(1167 1749)"
                                        >
                                            <tspan x="0" y="0">
                                                Type
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#888"
                                            fontFamily="Roboto-Medium, Roboto"
                                            fontSize="57"
                                            fontWeight="500"
                                            transform="translate(1167 1903)"
                                        >
                                            <tspan x="0" y="0">
                                                Status
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#888"
                                            data-name="Address/domain"
                                            fontFamily="Roboto-Medium, Roboto"
                                            fontSize="57"
                                            fontWeight="500"
                                            transform="translate(1167 2057)"
                                        >
                                            <tspan x="0" y="0">
                                                Address/domain
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#888"
                                            data-name="Transaction ID"
                                            fontFamily="Roboto-Medium, Roboto"
                                            fontSize="57"
                                            fontWeight="500"
                                            transform="translate(1167 2287)"
                                        >
                                            <tspan x="0" y="0">
                                                Transaction ID
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#888"
                                            fontFamily="Roboto-Medium, Roboto"
                                            fontSize="57"
                                            fontWeight="500"
                                            transform="translate(1167 2581)"
                                        >
                                            <tspan x="0" y="0">
                                                Fee
                                            </tspan>
                                        </text>
                                        <text
                                            fill="#888"
                                            fontFamily="Roboto-Medium, Roboto"
                                            fontSize="57"
                                            fontWeight="500"
                                            transform="translate(1161 2735)"
                                        >
                                            <tspan x="0" y="0">
                                                Time
                                            </tspan>
                                        </text>
                                        <path
                                            fill="url(#pattern-5)"
                                            d="M0 0H115V137H0z"
                                            data-name="Image 7"
                                            transform="translate(2692 1984)"
                                        ></path>
                                        <path
                                            fill="url(#pattern-5)"
                                            d="M0 0H115V137H0z"
                                            data-name="Image 8"
                                            transform="translate(2692 2210)"
                                        ></path>
                                        <rect
                                            width="1632"
                                            height="224"
                                            fill="#fff"
                                            data-name="Rectangle 4"
                                            rx="106"
                                            transform="translate(1140 3554)"
                                        ></rect>
                                        <path
                                            fill="url(#pattern-7)"
                                            d="M0 0H1081V186H0z"
                                            data-name="Image 9"
                                            transform="translate(1453 3582)"
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
                            <label>Blockchain</label>
                            <input
                                type="name"
                                value={data.block_chain}
                                name="block_chain"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                        <div className="global_form_inner">
                            <label>Type</label>
                            <input
                                type="text"
                                value={data.type}
                                name="type"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                        <div className="global_form_inner">
                            <label>Status</label>
                            <input
                                type="text"
                                value={data.status}
                                name="status"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                        <div className="global_form_inner">
                            <label>Address/domain</label>
                            <input
                                type="text"
                                value={data.address_up}
                                name="address_up"
                                onChange={(e) => onChangeHandler(e)}
                            />
                            <input
                                type="text"
                                value={data.address_down}
                                name="address_down"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                        <div className="global_form_inner">
                            <label>Transation ID</label>
                            <input
                                type="text"
                                value={data.transaction_id_1}
                                name="transaction_id_1"
                                onChange={(e) => onChangeHandler(e)}
                            />
                            <input
                                type="text"
                                value={data.transaction_id_2}
                                name="transaction_id_2"
                                onChange={(e) => onChangeHandler(e)}
                            />
                            <input
                                type="text"
                                value={data.transaction_id_3}
                                name="transaction_id_3"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                        <div className="global_form_inner">
                            <label>Fee</label>
                            <input
                                type="text"
                                value={data.fee}
                                name="fee"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                        <div className="global_form_inner">
                            <label>Time</label>
                            <input
                                type="text"
                                value={data.date_and_time}
                                name="date_and_time"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                    </div>
                </div>
            </>
        </>
    )
}

export default NinthPage;