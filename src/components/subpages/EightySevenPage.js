import React, { useRef, useState } from 'react';
import "../../assets/styles/secondpage.scss";
import img1 from "../../assets/images/img1.png";
import html2canvas from 'html2canvas';
import { write } from 'clipboard-polyfill';
import { ToastContainer, toast } from 'react-toastify';
import tower_weak from "../../assets/images/mobile2/tower_weak.png";
import tower_strong from "../../assets/images/mobile2/tower_strong.png";
import tower_mid from "../../assets/images/mobile2/tower_mid.png";
import battery78 from "../../assets/images/mobile2/battery78.png";
import battery50 from "../../assets/images/mobile2/battery50.png";
import battery25 from "../../assets/images/mobile2/battery25.png";
import wifi from "../../assets/images/mobile2/wifi.png";
import fourG from "../../assets/images/mobile2/4G.png";
import fiveG from "../../assets/images/mobile2/5G.png";

const EightySevenPage = () => {
    const screenshotRef = useRef(null);

    const [data, setData] = useState({
        time: "11:47",
        withdraw: "USDT (ERC20) Deposit",
        status: "Processed",
        date: "Aug 02, 2024 at 11:47:10 PM",
        amount: "39,490.00",
        amountCda: "39,490.00",
        amountCdaType: "USD",
        sending: "1,636.5 USDT",
        withdraw1: "0xEcE28Be9fdF1Ed725f8a4E",
        withdraw2: "Dd1Cf5bCF591343908",
        fee: "15 USDT",
        networkType: "ERC20",
        note: "jatmohitku",
        total: "1,651.5 USDC",
        type: "USDT",
    });

    const [imageDimension, setImageDimension] = useState("100");

    const [network, setNetwork] = useState("strong");
    const [net, setNet] = useState("wifi");
    const [battery, setBattery] = useState("78");

    const onChangeHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    const takeScreenshot = async () => {
        try {
            const canvas = await html2canvas(screenshotRef.current);
            const dataURL = canvas.toDataURL('image/png');

            const notify = (message) => toast.success(message, {
                containerId: 'success-toast',
                style: {
                    background: 'black',
                    color: 'white',
                },
            });

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
                        <h3>PREVIEW - <span>Mobile 87</span></h3>
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
                    <div className="mobile-view-wrapper go_with_code go_with_code_87" style={{
                        scale: imageDimension + "%",
                        transformOrigin: "top"
                    }}>
                        <div className="artboard secondpage_font" ref={screenshotRef} >
                            <div className="arrow-icons">
                                <img src={img1} alt="arrow_icon" />
                            </div>
                            <div className="arrow-icons2">
                                <div className="network-info-wrapper">
                                    <div className="network-info-childs">
                                        {
                                            network === "low"
                                                ?
                                                <img src={tower_weak} alt="arrow_icon" />
                                                :
                                                network === "mid"
                                                    ?
                                                    <img src={tower_mid} alt="arrow_icon" />
                                                    :
                                                    network === "strong"
                                                        ?
                                                        <img src={tower_strong} alt="arrow_icon" />
                                                        :
                                                        <></>


                                        }
                                    </div>
                                    <div className="network-info-childs">
                                        {
                                            net === "4G"
                                                ?
                                                <img src={fourG} alt="arrow_icon" />
                                                :
                                                net === "5G"
                                                    ?
                                                    <img src={fiveG} alt="arrow_icon" />
                                                    :
                                                    net === "wifi"
                                                        ?
                                                        <img src={wifi} className="wifi" alt="arrow_icon" />
                                                        :
                                                        <></>


                                        }
                                    </div>
                                    <div className="network-info-childs">
                                        {
                                            battery === "78"
                                                ?
                                                <img src={battery78} alt="arrow_icon" />
                                                :
                                                battery === "50"
                                                    ?
                                                    <img src={battery50} alt="arrow_icon" />
                                                    :
                                                    battery === "25"
                                                        ?
                                                        <img src={battery25} alt="arrow_icon" />
                                                        :
                                                        <></>

                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="arrow-icons3">
                                <h3>{data.time}</h3>
                            </div>
                            <div className="header_mob_2">
                                <h3>{data.withdraw}</h3>
                                <h4>{data.status}</h4>
                                <p>{data.date}</p>
                            </div>
                            <div className="mob_2_amount">
                                <p className="mob_2_amountp mob_2_amountpalt">+</p>
                                <h3>{data.amount}</h3>
                                <p className="mob_2_amountp">{data.type}</p>
                            </div>
                            <div className="mob_2_amount2">
                                <div className="mob_2_amount2_wrapper">
                                    <span className="font_change_mob_2"><span>+</span>$</span>{data.amountCda} <span>{data.amountCdaType}</span>
                                </div>
                            </div>
                            <div className="withdraw_details">
                                <h3>Deposit details</h3>
                                <div className="line-break"></div>
                            </div>
                            <div className="mob_2_details">
                                <div className="mob_2_details_childs">
                                    <p>Deposit from</p>
                                </div>
                                <div className="mob_2_details_childs mob_2_details_childs_fixes withdr">
                                    <p>{data.withdraw1}</p>
                                    <p>{data.withdraw2}</p>
                                </div>
                            </div>
                            <div className="mob_2_details">
                                <div className="mob_2_details_childs">
                                    <p>Network Type</p>
                                </div>
                                <div className="mob_2_details_childs mob_2_details_childs_fixes">
                                    <p>{data.networkType}</p>
                                </div>
                            </div>
                            <div className="footer-navigation">
                                <div></div>
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
                            <label>Title</label>
                            <input
                                type="text"
                                value={data.withdraw}
                                name="withdraw"
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
                                value={data.type}
                                name="type"
                                onChange={(e) => onChangeHandler(e)}
                            />
                            <input
                                type="text"
                                value={data.amountCda}
                                name="amountCda"
                                onChange={(e) => onChangeHandler(e)}
                            />
                            <input
                                type="text"
                                value={data.amountCdaType}
                                name="amountCdaType"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                        <div className="global_form_inner">
                            <label>Deposit details</label>
                            <input
                                type="text"
                                value={data.withdraw1}
                                name="withdraw1"
                                onChange={(e) => onChangeHandler(e)}
                            />
                            <input
                                type="text"
                                value={data.withdraw2}
                                name="withdraw2"
                                onChange={(e) => onChangeHandler(e)}
                            />

                        </div>
                        <div className="global_form_inner">
                            <label>Network Type</label>
                            <input
                                type="text"
                                value={data.networkType}
                                name="networkType"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
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
        </>
    )
}

export default EightySevenPage;