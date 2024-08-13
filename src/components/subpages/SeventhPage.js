import React, { useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import { write } from 'clipboard-polyfill';
import "../../assets/styles/secondpage.scss";
import { ToastContainer, toast } from 'react-toastify';

const SeventhPage = () => {
    const screenshotRef = useRef(null);

    const [data, setData] = useState({
        time: "16:52",
        amount: "$ 176.31",
        transaction_category: "Uncategorized",
        confirmation_number: "18Y7IVD54ET",
        status: "Accepted",
        from: "Chequing ****9687",
        reciepient_information: "afn.9995@gmail.com",
        transaction_type: "interac e-Tranfer",
        transfer_type: "e-Transfer",
        transaction_Date: "Aug 3, 2023",
        expiry_date: "Sep 2, 2023",
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
                        <h3>PREVIEW - <span>Mobile 7</span></h3>
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
                                    viewBox="0 0 1877 4059"
                                >
                                    <defs>
                                        <linearGradient
                                            id="linear-gradient"
                                            x1="0.565"
                                            x2="0.569"
                                            y1="0.105"
                                            y2="-0.159"
                                            gradientUnits="objectBoundingBox"
                                        >
                                            <stop offset="0" stopColor="#fff"></stop>
                                            <stop offset="1" stopColor="gray"></stop>
                                        </linearGradient>
                                        <pattern
                                            id="pattern"
                                            width="100%"
                                            height="100%"
                                            preserveAspectRatio="none"
                                            viewBox="0 0 123 38"
                                        >
                                            <image
                                                width="123"
                                                height="38"
                                                xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHsAAAAmCAYAAADk1+RWAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAwhSURBVHhe7dlnqF1FFwbgib0n9hbRaOwFKyqKIgqCGoK9ImL9oaKgiKCCgj/EHyIiKIL+EEQQGyqWgIoitlix966x9162+xm+N2zCPeeeeG/87vfd88Kw58ysWbPWeteUvc+UpkUZYlLgv0626X///fey+OKL1xL8+eeftfz1119lqaWWqm2LLbZY+e2336r8csstV6ZMmVJ/G6cvutSXWGKJ+f1LLrlk+eOPP2q/etr9JudJh3ZzeqZEX7dtQbCxH3qNWxDs6D6DQcePhglBdqCewHUd9NQXQhGiroT8pZdeuhIWHSEo0KZvJFJTJ5P5ySldpD/j6IvOfoh8L0hEWFBP1xdlrJgw2zgzspI51nVc388//1zbrUTBUUewvrhgrD7kayNrJdMVOTKQAHZJCJGR68qwLUlBX+S0jYbI90J0dO0xfwo/FkyEf4IJsbIRxKH8Bo53+wQkwfjll19qHZFW9jLLLFOfZENu0C/IgXm6REICbR5PUFeArDFdu3ohY8aCQfwYDROCbETlXPZbEXRPwfz2228rocsvv3xts3KRCt988838dgFJO+LpBbq0h7jIqpNLOyy4iiLXJcxvdoH+rvxIIBv9IyF95lDoVIK0jRUTgmzBSMCyBYccdcHgrN/qWc1glRurkDH+119/rX1kolcfXYp6gpffnoB8dXNltwnIsTWy40VC9HV1aUtS/V9t45wKsYINHAxxyy67bPnpp5/qGa2AvgQ723fqaVec9d9//3357rvvqg5t+smvuOKKZdq0aTVhVlpppRpQtmTniD62JEzRq51uhZ5+ZPCB3l7I2MjEviQ8mHOsmBBkC4ZtvOuQdlv0l19+Wa677rrat91225W99967rLLKKnV1kzGumyxA9quvviqPPPJIeeihh8qLL75YPv744/L1119XGUH06rbmmmuW9dZbrxx22GFlq622Kuuuu24lNqsJJII5ojvE0PXuu++WDz74oCZR+kdCCOsF9iTJyDqW1lhjjbLOOuuUVVddte5Qo+kYBIucbOoVjghaVo3VZkX8+OOPNfCcRaA6+G3cqaeeWm688cbatuWWW5Y5c+aUFVZYofZJEoFIsoAEufvuu8tNN91USf7ss88qeebNKkWY357GsWPrrbcuBxxwQNl3333LhhtuWOUkmj76EZBkdId48sknqw2bbLJJmTp1al8yEoNeSJ+4mEv56KOPyieffFJ22mmnsvLKK1c7zcGGxAb4MGgi/CtkWx0cYRhCu6SHBFs1OeRJAMH94Ycfyj777FOeeuqpqmeLLbaoQU5CRF5w6Hr22WfLnXfeWe66667y0ksvVb36kb322mvX1WKs4ND94Ycflk8//bTKsWnGjBl15zjwwAPLbrvtNj+4Sla4uZ5//vlq9wYbbFDefPPN8uijj1ab/yno5x+fJY6kZgvCEa0ePx1j2XXYzcbsNqPhX1vZAs44pDDQyhYwDgqi4D/++OO1jez+++9fg2ClPfjgg33JlumvvfZaufzyy8sdd9xRt3ABIb/55puXgw8+uG7RzuUESuCee+65mkjIU2cTmb322quceeaZZccdd5xPRPrYzh4rnp3nnXdeTSz1XkjC9AKyjPcUj/3226+ccsop9T4giew65uNnFg0YQy+bBkLryCJFa2DTEtm0hjdtgJuW8NrWEtW0W2797XnzzTc32267bTNz5sxmhx12aJ5++ummPQubdqU1rTNN61TTZnzTOv8fzU3VGbRbdnPIIYc0LZnN9OnTmxNPPLG55557mvfff7/qac/Y5vXXX2/aZGlaYmv7F1980cybN69pz/bmnHPOadpzu2mD2ey6667NvffeW200BxvVPfnw2GOPNa+++mpzyy23NOuvv77FMqZizjbh67Mlstl9992b9q7RzJ07t2kTq9ooRmxI7NpFUest4fU5CMZ+6g8AK1exqqxgRYa289dbsr428OWFF14ob731VnnjjTfqypOxVu5ocDRstNFG5dBDDy1HHnlkOe2008oFF1xQ9txzz/Lee++VCy+8sK6Uo48+uhx77LG1nHDCCeWSSy6pq9Tqdzc444wzyjHHHFOOO+64sv3229dVw05PNrKJ7eZjWxv0eoHKp9pehWy/Ysczh1VtPhc+q7YlscbIvC6D7h/q2sAz9UHwr5DNYRcnDjibnUXtyqg3WdsThxkdh23lAuqZbbcfjBdw53u7QitZdF155ZXl9NNPLzfccEM9x5955pmaSC+//HK9pV977bXl0ksvLZdddlm9XTurzzrrrNLuEJVEWzcIMELMwV4Jyjbtjgy28q1XQVq/wnf6bNnmoY/9mVtfuytVu10Ok0DaFwaLnOwYzWlGOocuuuiiGtCTTjqp3H777bWfnMJ5K0YAsiOMBnrp98682Wab1d9u485w5LrVIsnZ1x4VVcaFTWCdt1dddVVNBonldk2WDUCGDWwTYLr1uTe4PNl5EvxeRX+/YgHkIqkgGMzLJrGwo2RVJ1YK5DkaFjnZjFNcbkDg77vvvrqyX3nllXqDjrHJavICwNFBbrlx3FirzlybbrppJUSAjjjiiLqCrXCvcZ5WvXY7CdLMF3JAoJFuWw1hWWVWuHa7FRIQFD9HKiGxVwm5dJo3q53/Chm+tPeD6ptkY4c+fpMdBONCtskYjJg4Jwj3339/3RaV2267rRpILrdpcggWNG2c1SbIZDmtj86cZdqN0cfZgAzHkYccH2Cs7Kuvvrqcf/75dYv2WkOfLdp57iwnc8UVV5RZs2bNJzzJh2CQRIAI85PRpt+8o5XRwA9xMS//IQlgvORir/d/NtgFQvTCYMxkM0bwASHACMTbSn39uv7668utt95aMzIByzh1H0k4h0BjkeqDhmD6WuapT5DJhoS8mtBlnADQr9/XsfZWW19j1K3s448/vpx77rnl8MMPL2effXYdi2SvWF7N6A/oU8zLLzuGuoRgN1+sNIE3rl+Jrn6F3fQi2xFjt/FbLOjIkaHOP8+Fxbis7BjAaCsnW6+PFtqR4uwMwWS0y1grEVyQBNW5K6CcBzsEGeMUSFDoEABgQwLADsTbIXxIkVBu3Q8//HA9Np544on6Tv/555/XORNI47Ky6PIbPDNn5nC5ZGv7mlZWW221ujP1KuzvV+gVC7Ibb7xxTVIJak5zkOFPVnPsWliM+aOK4YKZFSATtbnJeo3xfRq22Wab0r6f1pv4LrvsUgkXOK9JF198cbnmmmvqTZqD9LTvyGWPPfYos2fPLg888EBNoPb9u+rgtDkUgUpiQNqUBIZO+p3VPqA4zw866KBy8skn12SQNBlL1pgElm/qnrZuNvtq5u7hMmeFe200Xy+MRg77JbiER7pv4tq8ijpyXCgRDl1d7A1GmwPGZWULVoKRbJWlyJGhLhUCI5AMnDlzZll99dVrsX1KkOnTp1enyCODs1Y1HfRz2ru0JDEXPQJv+xdov+M8eQmDpNS9W3vPlnQuZkcddVSdX383aFnRXX0hnE2efDFu7ty59T2e30mwkYqF0K/wSfI4KiT122+/Xb/omR/xYsmmrl1K2pRBMC6fS6ngMMNth+oMmDdvXv28iShnLxLJahMETvoGLTkE1KoVbEHdeeedqy4fWd55552aKM4yr0+AZOe3s91Wl0CMFIAcBewRRAlk6847Kz1IDBISz5SAXmOsZvazwzHF917o2tILEpIc/8XC77XWWqvGjW1dmyA6B9EdjJlsTspGwVRnbG7Nbr+2OW2KoAuy4AiYYJMhK3sFz1M/fUwjR6/iN+dSJyMJyPiddiDXrefbNnvMwWZEOdcFk0wCl3H0QXQDPyRq5swXQO29EH29YHEgl87sBGyS7Oy0tZsDuj51n4NgXM5sBpoUeYxiZLZs9WyDyES2wGtPEnCOo1mBVis5OukRiATZb+10a9PXdWEkd8i7jLlIscXv6AA6gu54MmBec0nCBB34lL7I/hPwiQ5zi4V6EgD8ViD2Zb6FmXfc/vWiRiAZlaxX4gSjOCVAnmTiAJAROO30xNE4b3x0pg7RH3Sd77ZHJ31kIhd9XZ1ddNu7xHbHjRXdeaM3diZGI9kGCzP/uJE9xMTHuNzGh/jfwJDsSYQh2ZMIQ7InEYZkTyIMyZ5EGJI9iTAkexJhSPYkwpDsSYQh2ZMGpfwN6unRnBXl2i8AAAAASUVORK5CYII="
                                            ></image>
                                        </pattern>
                                        <pattern
                                            id="pattern-2"
                                            width="100%"
                                            height="100%"
                                            preserveAspectRatio="none"
                                            viewBox="0 0 64 53"
                                        >
                                            <image
                                                width="64"
                                                height="53"
                                                xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAA1CAYAAADxhu2sAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAABgASURBVGhDxZppcxzXdYZPd0/PisFKAFwAUqQkkiIly468VMrl5HN+cb4lVa5KbMehLVsrRYriApIgdszWs/SS5z09AwKkVAkrrOIlL3q6+/a957xnv91BQbP/U8st19CgsMICzsLpdf0+3YrpHY0qj+F0hSLT6Jcj1F4uzp3ZSZCzzGwFzc65flZi7ulqOfPbaG8EQOEciKDQ2cstctIyZtAkKT9C6AuCkhmRGQCYeMjTzCKID3XV//OPo89WDvfxeQ7AecY8hVWiSFdsMh7bmN6ca3P9HQJgxZheApBDvQNQAEAgIMwyiFcrcrSFXgkjiyvOKtLX6JJpke8gTfnQQU9OJszvyDF+BgkACjZRGVcq/tz0sbfS3gyAbMQxgxgIhOkCaSAr7gACXdKruJRF+lSF0ZrxMLEkGdjS8lLJuMPli3Nfyxd+pXDmpF0lwGM0IQU4x5U+V2v4/O8YAJmCiEU9AUBEawoRKVU2iA7SCZZCdynCQJZalk0sjtEBmYRfV5OEdWCkVFvASqPoeVS1olJj3sjSAkDQvBbXKg7S22tvaAIphEyHixC6WlHAbIZ/yAFIx4JjSh8nFiR9y9QnI0xkgkNkHp6LIjpOLYirZrUaDo5jvQEQNXDgd1S3NKhZGlYtB4gQA9Lf8F0BIJt0NYUBPSBJVvwOJpHC6GTIPWx4PLBgcGhZ98D6e9vW2dmyzu4Ol/s2pAeYhBiIKpFVACCG6ZAeVOu2/t6H1l69aOHahgWtZcCu2TANAAHWAaRR5fjuAMBJ0Z19/odEgwpnYTZG8F0Lxl2zYce6O09s9+E3dvzkBxsePLdieGwxkq9DeAV7xlG4k1QLIuQKCEVcR8p1S5B4ffWSLV65YcuXb/D7suWtJUyhBWJVi0JBLs3zx99KAwAFMTU5n9fbbC3dG0J3Nr0QA0c1H2PvXSv6+2ajQ7v7h3+zwf5zG+xumXUPrZENrW5jqyL1GJxj1DzAWShCeJ9in8NYFsBcY946aWRJ1LL5S+/bxq3PbPHabQvnVyGEHKA5DxAAhjm47/GnSxrldP2KX+SKozSjvgR8NvJ0QyPH/khByBIIWPDZiXlWaqtFu+PManUW100k3ix6hqit89Uf7PndP1t39xGqfmgrjaZZMrTaBMnDZAVz6aH+0fyiDcb4AjShXq/jJ1JCZWCtBqrOeIkiqrWsl4aWhA2rrVxCCzZteeMDa9/4mYWtdRsDTji3YpOoYofdARoU2AI+JMRBV6AzZL0CQNWxmym/ol+xRYH4bB4BbyOWlRdWLA8t5eIMAIdEAODZ9bhGDnFm0ItUB5Y9/tqOv/2jJXf/ZJ2nXzMeO086dmn9oqU9kpdOYsswHcDkBHV/McZZAs5oOLSFNtJkruO9XZuvVTAnwGVcJY5Zo7AhV4LmEgw3rbq4bks3fm7zH/+OWHjBxvVFG8VNGypqQGMNJ9wIMqsSbcRegbYUaAro8Fsj4MozS5yuotcpADxUz5qGnu6zNovdcQU1y7qoftei3rbtf33Hnvzlj9Z7tmU1tKMyTG21tYjXHxO/kUarbZ0wts+f7drDQW79ShPntmSDoGG7/RS4MJBq20bYeAWpFnHDEuZJACgi4tSC1IJRx46f/2BPv/qL9R5+B2h9fIoizMAaRJIqwE7SsWeIAecyDedqyqNcpn6+ZPlscw3wrB0NYDnvYl4PCKsKJ4GcFignac/icGxxf9f2vrpj2//1e5s8e2jzaR9QEqsCUBUTOep1YWjOjnEaqSRVbdi1Wz/zPKAS12wsKcj+j4/t+aOH1j/csflqBBxIitCZohkRWV8sbcEmE12uLVt14xO79tt/sca1W2hUk96wVPUBvqhF2hwCmmfq8ifqUxNA/zx6BT+iAdQcJQBKbKT+UqKZ9EsAsH4lNyhlv/vUWph37/M/2rf//q9W3d+2BRaPyPSasWI0eTszjDmmzaY9OOzY1V/82hZR3xrStV7HDnZ2bJQHNt9esKVWywasljx9ZA+++Cv+AkYAscbzBXlEzrpiIif762ZVO4pW7Pwnv7X3fv3PVtv40EZhHRAIpThXhUcBIOYwJA6eeMOwhKfcRJJUKn0WgBMTkJMoXUUZ72etdKaCZGK1iDj/4p69+Dt2//hbWyjw8unQUhKdOoQkvSEagnMjkTnoJnbp5i07f/tT20UT7j7bsQ6m0V5cxv6XbAJND7cPUIKRLeHkrn78mQ2RaFJgt2hJpMSIiBFDVSsqPKLMF4k9++q/7enn/2mTzrZVQ7JLmJb3yqExhzn1DKIlVKfdyee3fFl5eqbNKlUemPXyn36VoYUuAHI8Niaw/+Ud62CL5/C+cxFcAEAEgRlOKK4iDZKVw24fz9SwzV/9xnZ7PdvaemYXNi+7vdaAvFmv2sLCgq2snUfdM3u+d2RL125Ye/2SjXBgveHEpa5sURGkRm+y1lIFZrs7tvf9lzZ48JUZEadqI/ybijRIdACUnquLq6nsJP2faK4B7gOmnuPl0BIAOT+vAElm7MWWbX/5uYXHR3YO9U1RfcoVay40rU8yJIfRnyQWEiauXL9udexz6/ET+2Bzw2qjxA6fPrR7X9yxrz//s9350394pbjGvWcvdixLc7vy4U1SgSVLJqml+B2pa8bvbExM0PqDI1vHkmrDQ9u/94WNnz8iA02IcvLyolZhXPrwiqyFhvfp+akG1xoM40IQlQsZmFHMCA5Zi2K1AzAa2t7f/mb1Xt8a2PBkMEHqOBVi8CjAQWIOKRIaZIlFzZrNX7xAGrxjawB1oRbb4Td/t/0HX1sXjx5PuqTJz+3OH35v+bBnH9y8bk8e/mC1hUVKghodM8L2J2hHRChTBpiPxx7uWsHIquOOHT65T/R5yPXEJghCNMqE0Uk/qnjK0dpZ1jll87VG7JhWdJyoEvMx7jGFJ1flWKjkrN+x3taWNcepVXEmacoihLgU7zuCsDwuyNlTm9BzHGJQJ60lx984f96i/pElTx5YKx9aOwIsskVliBk5w96zJ9ZEEwoRW3GFhCStrAqQvzCvHrFOjaQkpuao4g9Mc+KEcxxrpJA7VfOZFys9mph3zujMTVXpP0+1Ew3wExIR3ddfbUnJewZSLxZND/ZsuE/KmxCi5EmRTApgqtn1eEQYGxGfizBj2dzGB/sWJwOrDvswj6SOdi0c9awOEwtoyFKbym9CMjUmQ6yG1ukcwjBrYbQqT0onJhDAH42LMaeIeyFrKFzG1CD9vRdOV5Xr5PTu7EpeZkzDg3u/2fVZf9lKb+Fca8FSA0r150GY11aHYvPxzgsbDXr4wlEZXpV0QLB2elTixi41QiZVXoEJPX9w357d/87279+z7e/vuiOrkuV1cJAVnKVqgZTMsNmokw4b6TChDMAj3DJTsy7zQo/S5jHjTgQDPTzt3r8PyIP9XV+XCacglONETSnOEkzX8rO8ezurAdMHZhkzFHKKRHFgeztUdiyaI2Ej/ATYYoT3raIBMRVShbK1SsVWpX4ngFlvb896+AAB1+v3bGn9PEofW4O0dkzVt0+YvPL+dVu8uOG5werqOcroru8baE2BKo0UYxl+qEAVMtcMGpexGhv3+/jFI4QiYUk7SuHJHEoH7qOd8RPHOD3MmvM5a7N7EQsLPSdGdQDHw/0dSkBGVAAg4jqJUZXEpcn9OswrRQjG3EeLG9hsDQYiANR2WDRHdffRTbv46a9s7epH1qbev/2P/2RXSJJ294/sCWGytblph0g0ASxtihb4HWlCzB8JJkKCYkI7R9IeT3zQ0HGfVAoNiXQNxh04Z77spUgFgjhSP9vOAKC7UiGhq7AgVfZJWKjTObKMWCxPn4fyA2Wp6wAwTJhElLJZMkEbckAgjkPUmIowoPCJLl+z+Y33bYHydu3Dn1ubSu/R1jYuJbMNEqZ0kNgO4XCsOgBCChybijBVi6VJlIyU0YEFMQ3dy0b4nRFlOf+0W6jERjw4GM4y9PMwbuQ15tUcgNkNLSIEtX3tV2HAgeDaEDOYUJykJDzlZohsUb6CpRlaYAbtZhuHicr2E6qzyFokQxF2r60ubWh8c/+R/fWr7+zr+w/smFJ2ZX7BLl3etCXC5A9/vWODvR2P93WWD7W2vLuoggP5AiU4hnYpPGbci+R35KQJkQ6Aq74Yn2kAtJ9mXAy+0kJtcMzQ0X2p2oSYr1Doe/AQEtWQtaRRJR5znsFkiKUX2PKQ0DKQt67H1sfjxzjBJqlswJgCTajyO6Zr9oNu1/aODmxl86ItzMUwbtZ9dNe2//Yns90tmyOZWiAc1rH5eh6SVwEz5hWQWuP2SJ9hkmigrvmUswTaREgxS2kMXCj3d0XnKI9xJiQC0KtNLs2xYgT3mRQAlAgp/jgAoBIixZBcXx7eQRRqGb4Yh5eSC4ywmQlZYI4X0rsMJVCFpESHH3IG/gBcnaSoQTV1cXXZDsgKt+99aUf3SWu3vrcFQuICPmMeidbI/qoQSwbAY7DDGtrgEK0qclQpKmLpPUSokKRFEZiroo/RH0lf5yUMOv5YO1ULgJPUjqd9Uqm+bnjMC5x47dHrHkWto6a4W4EYDUmJyzFOMge8lNQ1RyJKbwdJYiPslAedhpbMYTiyh9/dt+c/PKTex5+gwhFOr9zRkTPT5EgOQAWqd5iSdhZIO1TyBp0pAERkogGhVEyXFIt7dYzH9X92rv56U6A5ue3lJy0UojTfXCDhQQWo4pZshERlYQKhfEbxf+o0CYkpfkKZo4oY8ZsynzZG/H0e1V29UrP1hRUWxZRGZI9IWurLXcplpOprill1AFRSxe8MAAoVW6IHDZGWEhjxSUyLRoXNBiAJFM3ERc/43CVyPgXCZ3+9nQGgtBFQFdN6GLXzTUgAWFEcR/VzTQxDcjraKAnEMM6xIokpL+CRqlJhiKzAlFRek48PD23jwoatrV0kXGY2VyM0Npo2SYbkWYkNqBr93aNsVgy71Esg1DF2bZJhs9DIfzJxr0NqVJUBiVURlxulJSdiGkKmQDgvYu1H2gkAarJ5jdN2taQWyNlM7W/1/CY/QRrpuW9mMTmbQi876KwP89NNkYleZlLB4TPqjYb1BwN7TEbYOTyyZ48e272/fwHDXRIncnzmaTXJBnlWGuWpq1v7S2c2Ow+xaXBxIeh9ZH1x0RoraJR8kzLQmRZMpU8A5TkBMOPw9QYAJTQaEsF4+ZqAowAgdLmBowWL1OqtpTUykyYRQQkpT0B8ju2q6hIAYl6vwSa+84t6M5f7BOK2QGkirRbq2qzXAYbIgu2n3K8AhNJYjZdTUo+mvkAhTXmBFzvCRwKA+aJSt/bqBaudOwctCEJ+YaoBgUsegtQdEA5TPl9tL02Ah2Vb5V69JhNHdC2GFsSLK9ZaXre81vbQh9uCkJCwrxQVncDuyy0swj6VYKOJ6mMiygTbLarCGzdgOLGYcLn+4VVbv7DujjMDPG24KKZLViXzHAE5gpZoelTIywmNGbToTVFea1rr3JqFi8umjX3gPmHRtcC7QNDxpxt3pWJ6tHxc9i0Pq6NvLEqdVJ/X5+zS9U9sGLWsl5OMIIEOtpypTG21bYA31xtdOVCv5pBsprAGEBtrazaHdn1/90v77t43eO2KnVtbtuGEhGmuAYB65ygVZ0mXNBRwqCDBCuuHMF7QJ8oLanNW1Odtbn3T2hc2/T2CPpxw6UuSNE+HeM61GGAl3J9qDs/stmuB6wSru0pJASEAE1Amt3DlQ2udv2KZ9uUjwlmjbWlUtwGSnrAQuY+XrrJYzZFPc/QWzlAbluNR34bjHvdwmpTAelmq0Cn6GpiENLCUgyxYhEf81bMwqLyzMW8HpCgJZrjy3nVrQEsQkU2509ZTzrrzUwKiX5pf8+nX683ZlRbIAZXDOeMBxd3yKI2QNkBAa9k2PvmV1dcuOyFFY8HGaMJef2RBvW0ZoU67ygFOs1YlDWauATVEf3/PrHdst3/5qd36+Ka/xRl0DlB7vD2+IsVnjJKBJ0zKRZT8KNlOpWmSfE7+H9ad8b0MZhcv2Ny1WxYurBIN0BLMQsi5z5DTlC+C/jLLFUdcQrNm4Jxu4u6E8bM3X151aDCHcdi0ues/s9UPbls/ajoIQyQwqRAdIM5gOoV5ZaaKKA1tkuIXurvb9vybL82O92188MIeff5ne/r9XWuCa4u4qVwiw1FqS85FwRwZWjcGhCHMJzCZkHXukBbXL12z8x9/ZjVpYgHg3Iu4V7q7UpDKALVLLGVSCiBzkoP9seYmMGtaXn9fbbqqzcaxmGyv2sr1j23t2kf+eors319a6lXWEGlpk1ofNCgLjLH7eRxiNBna0bMt0t67lrx4aoPnWxRMHQomiCR50n6fWqgUFy0qYhjD5Eaodh8whiRQQ2w9XThnlz79pS3d+ASw51hH22VkgnCpcFoCUO5IifET7+bM/xQAEvJJE2pSk7P/1KTaKRGgB631C1ftvd/8zpY2r2ECTRtRFB1T1g6QEG7e3/5ouzultK2gAQ3mrBMuw17HqknfqnqRoqKHe54Kc1QmKABymB6jPX0Y6rFmDwBGjZblC8t28ZPP7NzHv7Bo6TwOEanHLcy/Pi2PmYtoVCZTOGfYdxNwjoAC0yq14CwQ8nTltel1sTvrp5uc4RhV6yre4InnLr9vF65/ZCuXrljcWrBEdouklDsEqK+ez0h3VeeHRIQ5dG0ORiMyvpjMr82ANslLGzNpiHkIUHEzxo771Bw9CO4DhN4w1VbXccDv2flPf2ExoVhfjuQAL7D1CY12hAryDO1YSVTSANgvjzCtct6LJc5fbW4CrzI7O3/1+pCFKrV5kK2RFofW2vjALn32W1t9/5YFc6v+ovOYBP1orHeCdXImQhTMCXmpZwWHFxEZ2lybo8LMcX7aAPEPoQAtR/1HOLQEtU6Qbtpasnh10xau3bS12/9g1XMX8Qv6ZKZO+GtQaI0tGZKRKAxKwuIPgXoYhmFto2nt8ly95ON0I533UdOz8nDaNeiOuhRrH1ttsFiDBCZMjiwuKH5SQtveYzvYfmRbX9yx7HjXKqj6nN7z6e2uPqwqiBLMEGEiIUm8f+5GxqOMcSKqYL6AISOS7APesdSbrHPp8nVbuXrd5i9cIec/B8jnkC/hEqcrpzyCedlwlZBaiCbltfCgVF1viQS7J1VTDVCO4vnNKdESHX4Ml5dtdlPgdrHrEMemoBNTnAR6JeXfBw1gbGA7D7+14YtHdvj4niW7jy3v7Vtlgs2HkI1N1zBKvU3z5jk+sEBUhp1PMK8RjI3rC1Zd2bClqzdt+dpta8F8IK1D1UMk//Ll5qzrr6h8yUZ5Vt6fsVqOKX+dbv8rALOmQQlxWh87qB7XHr1Cjgl5eqCXFWjD5HjHejuPHYDB3jNLDrZtMuj4p3PZAE1gOYUlpb+hagBtmVWxacLp4sUrVl+/bE1Mq7m6QW5BwkX8z0m29JFUDZCULJ1l4f/X3gAA7BobVlYlEEp8uS7Vkuclq0uHHTw6YOSAMenZpHtow8MdGx8f2mQ4sIk2RgQcK+Lf0OKYChOnSajEudgyAETtZQtai5iFvg2IPLTmaEZMr6P2CnfvBAAZgV6KsD5PQYSnyjqR/2YKgMgnI860h483zhmL/Qd6Bun7SxSNQ/UFgCup8lAVXPgE9JsV6BwLJG0qeOj6eMq/G2Q9/1rwXQKgV+GlN4BpCJeTKb8tKi1MO7ViTO9otaXtiQnaoa9E9RlLQx9PuQYICs2Dp56tLu8l1tx5lZVmRkKl2l8gaReqxrV3ZgLOuF5Fu/hmjMuBiWD3Bp7HSys0o8KShz55ZoBJAaFe01egYqBcUkdffhqI0glFErlBRdkg/1Jyat/4xFHqw2tJ37XPn3477Q0BQANOAFCoIe8v5ewClAJIYJpRYIhBpcO+zwAj8t+nm1jx6aYkaHNE7yQil7hgnQJEV0zXOwYvbd8iAm8GgHZ5dJT9i3GpqZMJgwJAt0QffTar9EMEK+ppO6u0fz1zqmn87Kd+6GF+aBXXLcBURhcRLd4hAKUUnFSIEGlqKjelrjO6db+ksZy2HFnW4/6tLaqiJ/15/sPedL5XmjvLUotO7nqKXT73ttobAACxZ4aWVPjLB12fHZ1YEV0SP2s+WvvYshGdCCWNmh59pG7PwPBEqWR+No+nYNzXE2+rvSEA0x8nTRdKZiXLlwyX52WfNt1Seea6wFHM+hN0Z3p2nM5a2op++V89GfPP8xC/8jaa2f8AGHiW3aX7NKQAAAAASUVORK5CYII="
                                            ></image>
                                        </pattern>
                                        <pattern
                                            id="pattern-3"
                                            width="100%"
                                            height="100%"
                                            preserveAspectRatio="none"
                                            viewBox="0 0 2560 528"
                                        >
                                            <image
                                                width="2560"
                                                height="528"
                                                xlinkHref="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gAtQ29udmVydGVkIGZyb20gIFdlYlAgdG8gSlBHIHVzaW5nIGV6Z2lmLmNvbf/bAEMABQMEBAQDBQQEBAUFBQYHDAgHBwcHDwsLCQwRDxISEQ8RERMWHBcTFBoVEREYIRgaHR0fHx8TFyIkIh4kHB4fHv/bAEMBBQUFBwYHDggIDh4UERQeHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHv/AABEIAhAKAAMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABgcEBQgDAgH/xABSEAEAAQMBAwQLCwkGBgIDAQEAAQIDBAUGBxESITFBEzZRYXF0gZGhsbIUFhciNVJVcpLB0iMyQlRic5Oz0RUzNJSiwkNTgoPh8CRjJYSjJkT/xAAbAQEAAgMBAQAAAAAAAAAAAAAABgcDBAUCAf/EAEARAQABAwAECAsIAQUBAQEAAAABAgMEBQYRcSExUWGRobHREhUWIjM0QVOBweETFDI1UmNyovAjQmLi8SRDkv/aAAwDAQACEQMRAD8A7K4x3YOMd2HMAhXlh+z/AG/6pp5I/vf1+rp/jHdg4x3YcwB5Yfs/2/6nkj+9/X6un+Md2DjHdhzAHlh+z/b/AKnkj+9/X6un+Md2DjHdhzAHlh+z/b/qeSP739fq6f4x3YOMd2HMAeWH7P8Ab/qeSP739fq6f4x3YOMd2HMAeWH7P9v+p5I/vf1+rp/jHdg4x3YcwB5Yfs/2/wCp5I/vf1+rp/jHdg4x3YcwB5Yfs/2/6nkj+9/X6un+Md2DjHdhzAHlh+z/AG/6nkj+9/X6un+Md2DjHdhzAHlh+z/b/qeSP739fq6f4x3YOMd2HMAeWH7P9v8AqeSP739fq6f4x3YOMd2HMAeWH7P9v+p5I/vf1+rp/jHdg4x3YcwB5Yfs/wBv+p5I/vf1+rp/jHdg4x3YcwB5Yfs/2/6nkj+9/X6un+Md2DjHdhzAHlh+z/b/AKnkj+9/X6un+Md2DjHdhzAHlh+z/b/qeSP739fq6f4x3YOMd2HMAeWH7P8Ab/qeSP739fq6f4x3YOMd2HMAeWH7P9v+p5I/vf1+rp/jHdg4x3YcwB5Yfs/2/wCp5I/vf1+rp/jHdg4x3YcwB5Yfs/2/6nkj+9/X6un+Md2DjHdhzAztA+XtP8at+1D1Rrd4VUU/Y8f/AC+jxXqn4NM1fbcX/H6ukgEzQ4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABX28fbr+zKq9J0euJzI5r1+OeLPeju1erw9Gpm5trDtTduzwdvNDaw8O7mXYtWo4eznlI9qNrNH2fo5OXem5kzHGnHtcJr8vcjwq11veXruZVVTgU2tPtdXJiK6+HfmebzRCFXrty9dru3rlVy5XPKqqqnjNU92ZfCv87WLLyZmKJ8Cnm4+lPsHV7Fxoia48Orn4uhnZusatm1TOXqWZf49Vd6qY83FhxcrirlRXVE93i+Rw6rlVc7ap2y7lNumiNlMbIbLB1/W8GqJxNVzLUR+jF6Zp808yX6DvQ1PHqpt6vj282113KI5FyPN8WfNCvht42ksrGnbbrmOzo4mpk6OxcmNlyiJ7enjdGbPa/pevY3ZtOyabkxHx7dXNXR4Y+/obRzPp+bl6fl0ZeFfrsX7c8aa6J4T/AOY7y69322NnaKx7lyYps6lbp410RzU3I+dT98JxofWCjMmLV2PBr6p+vMhOl9AV4cTdtT4VHXH050tASRHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGg242ks7NaT7ommLuTdmaMe1M81U9cz3o/p3WK/fosW5uXJ2RDLYs137kW7cbZlv35yqfnR53Oeta9q+sX6ruoZ167EzzW4q4UU+CmOaGsRK5rfRFWyi1tjnnZ8pSu3qlXNO2u7snmjb84dP8qn50ec5VPzo87mAePLD9n+30ZPJH97+v1dP8qn50ec5VPzo87mAPLD9n+30PJH97+v1dP8AKp+dHnOVT86PO5gDyw/Z/t9DyR/e/r9XT/Kp+dHnOVT86PO5gDyw/Z/t9DyR/e/r9XT/ACqfnR5zlU/OjzuYA8sP2f7fQ8kf3v6/V0/yqfnR5zlU/OjzuYA8sP2f7fQ8kf3v6/V0/wAqn50ec5VPzo87mAPLD9n+30PJH97+v1dP8qn50ec5VPzo87mAPLD9n+30PJH97+v1dP8AKp+dHnOVT86PO5gDyw/Z/t9DyR/e/r9XT/Kp+dHnOVT86PO5gDyw/Z/t9DyR/e/r9XT/ACqfnR5zlU/OjzuYA8sP2f7fQ8kf3v6/V0/yqfnR5zlU/OjzuYA8sP2f7fQ8kf3v6/V0/wAqn50ec5VPzo87mAPLD9n+30PJH97+v1dP8qn50ec5VPzo87mAPLD9n+30PJH97+v1dP8AKp+dHnOVT86PO5gDyw/Z/t9DyR/e/r9XT/Kp+dHnImJ6JiXMD9pqqoqiqmqaZjrieB5Yfs/2+j55I/vf1+rp8UDoG2ev6Pdp7Hm15FiOmzkVTXTMd7jzx5Fx7IbS4O0mBN/G4271vhF6xVPGqifvjuS7mjdOY+fPgR5tXJPycXSOhMjBjw586nlj5uegFXLNAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGdoHy9p/jVv2oYLO0D5e0/xq37UMtn0lO+GO96OrdLpIBcqnQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEU3lbSzoGjdjxq4jPyuNFnu0R11+Tq7895RdVVVVU1VVTVVM8ZmZ55lv94GsVa1tRlZEV8qxaq7DY7nIpnhxjwzxnyo+q7TmkJzcmdk+bTwR3/FZ+hNHxh40bY86rhnu+AA4zrgAAAD3wMvIwcy1mYt2q1ftVRVRVHVLwH2mqaZ2xxvkxFUbJ4nRGx+uWdoNDs6hbiKbn5l63E/mVx0x4OuO9MNwpjc5rFWDtHOnXK+FjOp5MRPRFynjNM+WOMeWFzrU0Nn/AH3Fiur8UcE7/qq7TGD9yypop/DPDG76ADquWAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKa315Fy5tVZsVTPY7OLTyY78zMzPq8y5Va76tCvX7ePrmNbmuLNHYsiIjninjxpq8ETMxPhhwtY7VdzAq8D2TEzu/zhdzV27RbzqfD9u2I3/5wKpAVksoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAbjY7WbuhbQY2dRVMWuVFF+PnW5nn/r4YhpxktXarNcXKJ2THC8XbVN2ibdccE8AAxvYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAztA+XtP8at+1DBZ2gfL2n+NW/ahls+kp3wx3vR1bpdJALlU6AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANbtTmVafs3qOZRPCu1j1zRP7XDhHp4NkjW9CqadhNTmOnk2489ylrZtybeNcrjjimZ6mzh0RcyLdE8UzEdahAFPLdAAAAAAAAZGm5VeDqONmW/z7F2m5T4aZ4ul6Kqa6IrpnjTVHGJ7sOYHSmhVTVomBVV0zjW5n7MJpqhcnbdo9nBPahuttEbLVft4Y7GYAmyFgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD8rppromiumKqao4TExxiYfoCEa9u10TPrrvYNdzTrtXPwo+Nb4/Vno8kxCCa5u92i03lV2bFOfZjn5WPPGrh9WefzcV5Dh5er2FkbZinwZ5Y7uJ28TWDNx+CavCjknv43MNyiu1cm3coqorpnhNNUcJifA+XR2taFpOs2+RqODavzw4RXMcK6fBVHPCv9od1tdPKvaHmcuOnsGRzT5Ko++PKi2bqxlWPOtefHRPR3JRh6zYt/zbvmT1dPerEZmq6XqGlZHYNRw72Nc6orp4RPgnonyMNHK6KqJ8GqNkpFTXTXHhUztgAeX0AAAAAAAAAAAAAAAAAAAAAAAAAAbXZPSbmt6/i6fRTM011xN2Y/Rojnqnzeng1S7t1ezf8AYuj+7cq3wzsymKqomOe3R0xT4eufJ3HW0No6c7Jimfwxwzu5Pi5emNIRg401f7p4I3/RSIDkuoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAM7QPl7T/ABq37UMFnaB8vaf41b9qGWz6SnfDHe9HVul0kAuVToAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA0e32POVsbqtqmOMxjzXEfV+N9zePm7RRdtV2rkRVRXTNNUT1xLFftfa2qrc+2JjpZbFz7K7Tcj2TE9DmEZuu6fc0rWMvTrvHlWLs0RM9cdU+WOE+VhKdromiqaauOFv0VxXTFVPFIA8PQAAAAAD6t0VXLlNuiJmqqYiIjrmXTOJZjHxbNimeMW6KaI8kcFEbtdMnVNr8OiaeNrHq90XJ7kU88eerhHlX4neqViabVy7PtmI6P/AFB9bL8VXLdqPZEz0/8AgAl6IgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMfPwsTPxqsfNxrWRZq6aLlMVQrvajdhbrirI0C/yKun3Neq40z9Wrpjy+dZg0c3R2Nm07L1O3n9vS3cPSORh1bbVWzm9nQ5p1PT83TcqrFz8a5j3qemmuOHHvx3Y78MV0lrOk6drGJOLqOLRft9XGPjUz3YnpiVUbYbus/S4ry9JmvOxI55o4flaI8EfnR348yD6S1cv4u2u159PXHw7k30brFYytlF3zauqfj3oIHekRtIgAAAAAAAAAAAAAAAAAAAAAAGXpGn5OqalY0/Eo5V69XFNPcjuzPeiOd6ppmuqKaY2zL5VVFFM1VTsiEq3U7N/wBsav8A2hlW+OFh1RMxMc1y50xT4I6Z8ndXWwNn9KxtF0ixp2LHxLVPPVw566uuqe/Ms9amiNHRgY8Uf7p4Z3/RV2ltITnZE1/7Y4I3fVy+AqlaQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAztA+XtP8AGrftQwWdoHy9p/jVv2oZbPpKd8Md70dW6XSQC5VOgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKz3z7PVXbdvaDFo4zbiLeVER+j+jX5OifIqt07et271muzdoprt10zTVTVHGJiemJUhvC2Ov7P5dWVi0V3dMuVfEr6ZtTP6NX3T96C6yaJqprnKtRwT+Lmnl3T7U41c0tTVRGLdnhj8PPHJ3IiAh6XAAAAALE3YbFV5l61rWrWZpxaJirHs1R/ez1VTHzfX4OncwsK7m3YtW4+kcstXNzbWHam7cn68yU7qNnqtH0OczJo5OXm8K6omOeij9Gnw8/GfDHcTMFrYmNRi2abNHFCq8vJryr1V6vjkAbDXAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQ3bbYTB1ymvLwYow9Qnn5URwouz+1Edffj0qc1fTc7Sc6vD1DHrsXqOqromO7E9cd+HSrU7T7P6dtBgTi51v40cZtXafz7c92J+5G9L6v28uJu2fNr6p+vP0pHonT9zFmLd7zqOuPpzdDnUbnazZ3P2c1D3Nl08u1Vxmzfpj4tyPunuw0yvbtquzXNFyNkwn9q7Reoiu3O2JAGNkAAAAAAAAAAAAAAAAAAFxbodm/7P06dZy7fDKyqfyUTHPRa/rV0+Dgg+7bZudf1uK79Ezg4sxXf49Fc9VHl6+9Er1iIiIiIiIjoiEy1Y0Z4U/e7kcEfh+cohrNpPwY+6W54Z/F8ofoCcIQhPwY7N/Ozv40fhPgx2b+dnfxo/Cmw5vifB91HQ6XjfO97PShPwY7N/Ozv40fhPgx2b+dnfxo/CmweJ8H3UdB43zvez0oT8GOzfzs7+NH4T4Mdm/nZ38aPwpsHifB91HQeN873s9KE/Bjs387O/jR+E+DHZv52d/Gj8KbB4nwfdR0HjfO97PShPwY7N/Ozv40fhPgx2b+dnfxo/CmweJ8H3UdB43zvez0oT8GOzfzs7+NH4T4Mdm/nZ38aPwpsHifB91HQeN873s9KE/Bjs387O/jR+E+DHZv52d/Gj8KbB4nwfdR0HjfO97PShPwY7N/Ozv40fhfk7sdm+E/Hzv40fhTcnok8T4Puo6Dxvne9npcvgKnWoAAAAAAMnTLNGTqWLj3OPIu3qKKuHTwmYiWMzdC+W8Dxm37UMlqImuInleLszFEzHIt34Mdm/nZ38aPwnwY7N/Ozv40fhTYWp4nwfdR0Ku8b53vZ6UJ+DHZv52d/Gj8J8GOzfzs7+NH4U2DxPg+6joPG+d72elCfgx2b+dnfxo/CfBjs387O/jR+FNg8T4Puo6Dxvne9npQn4Mdm/nZ38aPwnwY7N/Ozv40fhTYPE+D7qOg8b53vZ6UJ+DHZv52d/Gj8J8GOzfzs7+NH4U2DxPg+6joPG+d72elCfgx2b+dnfxo/CfBjs387O/jR+FNg8T4Puo6Dxvne9npQn4Mdm/nZ38aPwnwY7N/Ozv40fhTYPE+D7qOg8b53vZ6UJ+DHZv52d/Gj8L0xN2+z2NlWsm3Vm8u1XFdPG7HDjE8Y6kyH2NEYMTti1HQ+TpbNmNk3Z6QB0XOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHxkWbWRZrsX7dF21XHJqorjjFUdyYfY+TETGyX2JmJ2wq7a7dnVy68rZ6uJieecW5Vw4fVqn1T51c6hg5mn5E4+di3ce7H6NymYn/wAul3jmYmLmWZs5eNZyLc/oXaIqjzSjOdqvYvzNdmfAnk9n0/zgSXB1mv2Iii9Hhxy+36/5wuZRfGbsDsrk1TV/ZvYap67V2qn0ceHoYkbtNmeVx5OZMdzs3N6nCq1VzYngmmfjPc7lOtOHMcMVR8I71JM/R9H1PV78WdOwr2RVx4TNNPxafDV0R5V3YGw+y2HVFVGk2rtUdd6qq5x8lU8PQkFi1asWqbVm3Rat081NNFMREeSG3japXJnbfuREc3fPdLUydbKIjZYomZ5+6O9Adjt2+Ng10ZuuVUZeRHPTYp57dE9/50+jwrBiIiOERwgEuw8Gxh0eBZp2ds70TzM29mV+Heq29kbgBttQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABha1peFrGn3MHPsxds1+emeqYnqlRW2ezOZs3qPYbvG7jXOM2L8RzVx3J7kx1w6CYGvaVh61pl3AzrfKtVxzTHTRV1VRPVMOLpjQ9Gfb2xwVxxT8p/wA4HZ0RpevAubJ4aJ44+cf5wubhtNp9Ey9A1a5gZcceHPbuRHNco6qo/wDelq1Z3LddquaK42TCyrdym7RFdE7YkAY3sAAAAAAAAAAAAAAe2Di383MtYmNbm5evVxRRTHXMvFa+5zZrsNidoMy3+UuRNOLTMfm09dfl6I73Huuho3AqzsiLVPF7Z5IaOks6nBx5u1cfsjllM9ktEsaBolnT7PCquI5V65Efn1z0z90d6IbYFrWrVFqiKKI2RHAqu7dqu1zXXO2ZAGRjAAAAAAAAAAAAAACeiQnokHL4ClVzAAAAAADN0L5bwPGbftQwmboXy3geM2/ahls+kp3wx3vR1bpdJgLlU6AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAj+3WzlnaPRqrHCmnLtca8e5PVV3J70/wBJ6lB5Nm7jZFzHv26rd23VNNdFUc9MxzTDpxV++XZyOFO0OJb7lGXER5Ka/unyInrNouLtv71bjzqePnjl+HZuSvVvSk2rn3W5Pmzxc08nx7d6rwEBTsAAAAAAAAAAAAB92bdy9eos2qKq7ldUU0U0xxmZnmiIfYjbwQTOxvdg9nq9otdt41UTGLa4XMmuOqnueGejzz1L+tW7dq1RatUU0W6KYppppjhERHRENHsLs/b2d0K3izFM5Vz8pkVx119zwR0enrb5Z2gtGfccfzo8+rhnu+HarPTmkvvuR5s+ZTwR3/HsAHbcUAAAAAAAAAAAAAAAAJ6JCeiQcvgKVXMAAAAAAM3QvlvA8Zt+1DCZuhfLeB4zb9qGWz6SnfDHe9HVul0mAuVToAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8c3Gs5mJdxMmiLlm9RNFdM9cTHCXsPkxExsl9iZidsOcNpdKvaLreTpt7jM2q/iVfOpnnpnyw1y2N9ujRdwcfW7NHx7E9hvTHXRM/FnyTzf9Sp1UaWwvuWVVaji443T/mxauis375i03fbxTvj/ADaAOa6AAAAAAAAAAAsvc3s32W7O0OZb+JRM0YtMx01dE1+Tojv8e4heyGh39oNcs4FrjTb/AD71yP0KI6Z8PVHfmHQmHjWMPEtYuNbi3ZtURRRTHVEJVqzoz7e795uR5tPFzz9O1F9ZNJ/Y2/u9ufOq4+aPr2PUBYCAgAAAAAAAAAAAAAAAAABPRIT0SDl8BSq5gAAAAABm6F8t4HjNv2oYTN0L5bwPGbftQy2fSU74Y73o6t0ukwFyqdAAAAAAAAAABh6rqmn6VjTkajl2sa31TXPPPeiOmZ8Cv9f3p2qOVa0TCm7P/OyOanyUxzz5ZjwNHM0ljYcf6teyeT29DexNG5OZP+lRtjl9nSsxqtT2j0LTZmM3VcW3XT00RXyq4/6Y4z6FHaztTr+rTV7s1K/2Of8AhW55FHDwR0+VpUZydbo4rFv4z3R3pJjapzx37nwjvnuXPnbz9n7HGMazmZU9U024ppnzzx9DTZW9m5PGMXRaKe5NzI4+iKY9asRx7usmkK+KqI3RHz2uxa1cwKOOmZ3zPy2J9e3qa7V/dYOnUR36K5n2njO8/aSZ5renx/2avxIONWdNZ8//AKy2o0Ngx/8AlCdU70too6cbTavDar/Ey7G9fU44dn0vDr7vIqqp9fFXQ+06bz6eK7LzVoXAq47ULYw97GFVMe69IyLXdm1div1xS32n7wNl8yYpnOqxq5/Rv25p9PPHpUSN2zrRnUfimKt8d2xpXdWcGv8ADE07p79rprEysXMtRdxMmzkW5/StVxVHnh7OZcPLysO9F7EybuPdjort1zTPnhNNA3mazhTTb1KijULPzp+JcjyxzT5Y8ru4mtdi5Oy/TNPPxx39riZWqt+3G2xVFXNxT3di5ho9mtqtG1+mIwsnk3+HGqxd+Lcjydfk4t4k1m9bvURXbqiY5kZu2blmqaLkbJ5wFab39a1bS9UwbenZ9/GorsTVVFurhEzyulgz82nCsTerjbEcjYwMKrNvRZonZM8qyxz377tpvpvM+2e+7ab6bzPto/5W436Kurvd7yTyP1x19zoQc9++7ab6bzPtnvu2m+m8z7Z5W436KurvPJPI/XHX3OhBz377tpvpvM+2e+7ab6bzPtnlbjfoq6u88k8j9cdfc6EHPfvu2m+m8z7Z77tpvpvM+2eVuN+irq7zyTyP1x19zoQVhui1zV9U17Ks6hqF/Jt04s1U03KuMRPKpjj6ZWe7+j86jOsxeojZHO4WfhVYV6bNc7Z5gButIEP3t6jnaZs1YyNPyrmNdqy6aJrtzwmaeRXPD0Qqv33bTfTeZ9twdIafs4N77GumZnj4Nju6P0DezrP2tFURHPtdCDnv33bTfTeZ9s9920303mfbaPlbjfoq6u9u+SeR+uOvudCDnv33bTfTeZ9s9920303mfbPK3G/RV1d55J5H646+50IOe/fdtN9N5n2z33bTfTeZ9s8rcb9FXV3nknkfrjr7nQg579920303mfbSzdXr+taltT7mz9SyMiz7nrq5FdXGOMcOdsYus1jIvU2qaJiap2exgydWr+PZqu1VxMRG32rYASRHAEe2n2w0XQIqt5N/s2VEc2Pa+NX5eqnysV+/bsUeHdqiI52WzYuX6/At07Z5khYWqatpmmUcrUM/HxubjEXK4iZ8EdM+RT20O8XXdSmq3h1xptif0bM8a58NfT5uCIXbly9cquXblVyuqeNVVU8Znwyi2XrZaonwcenwueeCOjj7EoxNVbtceFkVeDzRwz08XauTU95+gY8zTiWsrNq6ppo5FM+Wrn9CP5m9fUKpn3HpONajq7Lcqr9XJVwOBe1jz7vFX4O6I+su9Z1dwLfHT4W+f/ITO9vK2nuceRcxLX1LEffMsed4e1kz8o0R/wDr2/wooNKdK5s//rV0y3I0XhR/+VPRCX29421VM8asyzX3qrFP3Qzcbelr9vhF7FwL0fUqpn0VfcgY9UaXzqeK7PTt7XmrRGDVx2o6NnYtTB3sWJmIztHuUR11Wb0VeiYj1pJpe3uzGfMU+7/ctc/o5NPI9P5vpUOOhY1nzrf45irfHdsaF/VnCufhiad09+109Zu271um7ZuUXKKo401UzxifLD6c26Tq+p6Te7Lp2dexquPGYoq+LPhjonyrB2b3o1RNNjXsWJjo90WI5479VP8ATzJFha0Y16fBvR4E9MdP0R7M1YybMeFanw46J6FojG0zUMLU8WnKwMm3kWauiqiePDvT3J70slJKaoqjwqZ2wjlVM0z4NUbJAHp5AAAAAAAAAAAAAAB5ZeTjYdiq/l37Vi1T013KoppjyyhGvbzdHw6qrWm2bmoXI5uV+Zb8888+bytTKzsfEjberiO3o421i4ORlTss0TPZ08SePLJyMfFtTdyb9qzRH6VyuKY88qQ1feDtLnzVTbyqcK1P6OPTyZ+1PGfNKMZORkZN2buTfu3rk9NVyuap88o5ka22aeCzRM7+Dv8AkkWPqpeq4b1cRu4e75r6zdttl8SZi5rFiuY6rMTc9NMTDU5G8/Zy1PC3bz7/AH6LURHpqhSw5VzWrMq/DFMfD6urb1Ww6fxTM/H6Lcub19MifiaXmVR+1VTH9XxG9jB48+kZMR+9p/oqYa06y6Q/XHRDZjVzR/6J6ZW/a3raPM/ldNz6Y/Z5FX3wz8XeVsxenhcu5WP+8sTPs8VIjJRrRn08cxPw7tjHXqzg1cUTHx79rojA2o2ezuEY2sYlVU9FNdzkVT5KuEtvTMVRFVMxMTzxMOYGfpes6rplUTp+oZOPETx5NFyeTPhp6JdKxrdVxXrfRPynvc6/qlHHZudMfOO50iKi0LejqNiaber4tvLt9dy18S54eHRPoWJs7tPouvU8MDLp7Nw4zYufFuR5OvycUiwtMYmZwW6uHkngn6/BHczRGXh8Nyng5Y4Y/wA3tyA6jmAKP2s2n2hxtp9Tx8fV8q3at5VymiimvmpiKp4RDmaT0nb0fRTXXEztnZwOlo3RlzSFdVFExGyNvCvAc9++7ab6bzPtnvu2m+m8z7bjeVuN+irq73Y8k8j9cdfc6EHPfvu2m+m8z7Z77tpvpvM+2eVuN+irq7zyTyP1x19zoQc9++7ab6bzPtnvu2m+m8z7Z5W436KurvPJPI/XHX3OhBz377tpvpvM+2e+7ab6bzPtnlbjfoq6u88k8j9cdfc6EGBs3du39ntNv3q5ru3MS1XXVPTVVNETMs9KbdcV0xVHtReujwKppn2AD28gAAAAAAAA88m/YxrFV/JvW7NqiONVddUU0xHfmUE2i3nabicuzpFirOuxzdkq+LaifXPo8LUy8/HxKfCvVbO3obeLg5GXV4Nmnb2dKftPq+1GgaTNVObqdii5T026J5dfmp4zHlUrru1+0GscqnKz67dmf+DZ+JR4J4c8+WZaFFsrW2I4Mej4z3R3pPi6pzx5FfwjvnuW5qW9XTbUzTp+m5OTMdFVyqLcT659SP529HXrvGMbGwsanqnkTXV55nh6EDHCvafz7v8A+mzdwfV3LOgcC1/s27+H6JLkbd7V35+Nq1dEdy3bop9UMO5tTtJXPGdc1CPq36o9TTDQqzsmv8VyqfjLfpwcaj8NumPhDbRtLtFE8f7d1P8AzVf9Xpb2r2lt/m63nT9a7NXraUeYy78cVc9MvU4tieOiOiEmx9vNq7PRq1Vcdyu1RV64bPE3n7Q2ua9awciOuarc0z6JiPQgw2Lelc23+G7V0zPa17mi8K5x2qeiI7FqYG9izPCM/R7lHdqs3Yq9ExHrSTTNvtmM7hT/AGh7lrn9HIomjh5fzfSocdKxrPnW/wAUxVvju2Odf1Zwrn4YmndPftdOY9+zk2ou4963et1dFdFUVRPlh6OadP1DO0+92bBy7+NX3bdc08fDw6U10Hefq2LNNvVbFvPt9E10/k7kebmnzR4XexNase5wXqZpnpjv6nBytVsi3w2aoqjonu61wjQ7O7W6HrsU04eXFF+f+Be+JX5I6J8nFvkls37d+nw7dUTHMjl6zcs1eBcpmJ5wBlYgAAAAAAAAQHfFq2paVjabVp2bexZuV3Irm3Vw5XCKeHrVz77tpvpvM+2j+drDZwr82a6ZmY2cWz2xtd/B1fvZliL1NURE7/ZOx0IOe/fdtN9N5n2z33bTfTeZ9tp+VuN+irq7235J5H646+50IOe/fdtN9N5n2z33bTfTeZ9s8rcb9FXV3nknkfrjr7nQg579920303mfbPfdtN9N5n2zytxv0VdXeeSeR+uOvudCDnv33bTfTeZ9tOtz+tatqmp51vUc+/k0UWaaqYuVceE8ptYesdjLv02aaJiZ3NbM1dvYtmq9VXExG9ZQCRI8AACKbR7e6DpHKtUXvd2THN2OxMTET36uiPTPeV/rW8nX86aqMKbWn2p6rccqvy1T90Q42Zp7DxZ8GavCnkjh+nW7GHoLMyo2xT4Mcs8H16l0Xrtqzbm5euUW6I6aqqoiI8stNm7X7M4kzF7WcSZjpi3V2T2eKg87Ozc652TNy7+TX867cmqfSx0fva3XJ9FbiN87ezY79nVK3HpbkzujZ27V4Xt5Gy1ufiZGRd+pYn7+Dx+E7Zrjw5Od/Bj+qlRpTrTnT+no+rdjVfCj9XT9F42d4+y1c/Gyr9r61ir7uLd6HtBo+tzcjS82nIm3ETXEUVUzET0dMQ5zWVuJ/wAdqn7q366nS0VrDlZWVRZuRGyeadvFM8rm6V1fxsXFrvW5nbHPGzj2ci1gE0Q0Gg3h5eTg7HZ+ViXq7F+3FHIronhMca6Y9Uqa9920303mfxHE0lpy1o+7FuumZmY28Gzn7na0boS7n2puUVREROzh+He6EHPfvu2m+m8z+Ie+7ab6bzP4jneVuN+irq73Q8k8j9cdboQc9++7ab6bzP4h77tpvpvM/iHlbjfoq6u88k8j9cdboQc9++7ab6bzP4h77tpvpvM/iHlbjfoq6u88k8j9cdboQc9++7ab6bzP4h77tpvpvM/iHlbjfoq6u88k8j9cdboQYuj3K7ukYd25VNVddiiqqqemZmmOMspKqavCpieVF6qfBqmOQAenkFE6/tVtFY17ULNrWMui3byrlNFMV80RFUxEMH33bTfTeZ9tFq9a8eiqaZong3d6UUaq5FdMVRXHDvdCDnv33bTfTeZ9s9920303mfbePK3G/RV1d715J5H646+50IOe/fdtN9N5n2z33bTfTeZ9s8rcb9FXV3nknkfrjr7nQg579920303mfbPfdtN9N5n2zytxv0VdXeeSeR+uOvudCDnv33bTfTeZ9teOyl+7k7M6ZkZFyq5duYtuuuurpqmaY4zLp6M01a0hXVRRTMbI28Lm6S0Nd0fRTXXVE7Z2cDZgOy44PDOzMXBxa8rMyLdizR+dXXVwiFd7S70bVuarGg40Xp6PdF+JinyU9M+Xh4GjmaRxsKnbeq2c3t6G7h6OyMyrZZp28/s6VlXK6LdE13KqaKaY4zVVPCIRvVtudmdOmaa9RpyLkfoY8dk9Mc3pUtrOu6trFzl6jn3r8ceMUTVwojwUxzQ1qK5Wttc8GPRs557o75SrF1Tojhv17eaO+e6FqZ+9ixEzTgaPcrjqqvXYp9ERPrabJ3o7QXJ/I4+BZjvW6qp9NX3IIOLd09pC5x3Nm7ZDs2tBYFvit7d+2Utr3i7V1TxjOtUd6Mej74fkbw9rI6dRonw49v8AoiY1vGmb72rplseLMP3VPRCaWd5m01uY5c4d369n+kw2eHvXz6Zj3XpGNdjr7Fcqo9fKVwM1vTefRxXZ+PD2sVehcCvjtR8ODsXNp29DQb8xTl2MvDqnpmaIrpjyxz+hKtJ1vSdVp46fqGPkTw48mmv40eGmeePM5vftFVVFcV0VTTVE8YmJ4TDqY+teVROy7TFUdE93U5eRqrjV8NqqaZ6Y7+t0+KM2f2/2g0uabd2/7vx4/wCHkTxq4d6rp8/HwLN2W220XXpps03JxMuebsF6Yiap/Znoq9feSjA07iZkxTE+DVyT8vZKM52gsvDiapjwqeWPn7UmAdlxgAAAAAAAAAAAAAAAAaDaTa7RNC5VGXldkyI/4Fn41fl6o8vBXGv7zNZzZqt6bRb0+z0RVHx7k+WeaPJHlcnN01iYfBXVtq5I4Z+nxdXC0Ll5nDRTsp5Z4I+vwW/nZuHg2ZvZuVZx7cfpXa4pj0opqm8jZvDmabFy/m1x/wAm3wp89XD0cVL5mVk5l+b+XkXci7PTXcrmqfPLxRjJ1sv18FmiKY5+Ge7tSbG1UsU8N6uap5uCO/sWTn718yqZjA0mxajqm9cmv0Rw9bSZW8Xaq9M8jMs48T1W7FP+6JREca7prPu/iuz8ODs2Oxa0Ng2vw2o+PD27W9vbX7T3fztby4+rXyfU8J2l2inp13Uv81X/AFakak5eRVx1z0y24xLFPFRHRDb07T7R09Guaj5ciqfvZNnbTam1McnWcieHzuFXrhHwpzMiniuVdMlWHj1cduOiEwxt4+1NqY7JlWL/AA6rlimOP2eDb4W9fPpmPduk412OvsVyqj18pXA27ems+3xXZ+PD27Wrc0Ng3OO1Hw4OzYufTd5+gZExTl2svDq65qo5dMeWnn9CUaXrmj6pw9waljZFU/oU1xyvszz+hzg/aZmJiaZmJjniYdXH1ryqOC7TFUdE93U5V/VXFr4bVU0z0x39bp8UHom220WlTTTbzqsm1H/CyfykefpjySn+z283SsyabOqWa9Puzzcv8+3Pl6Y83lSLD1jw8jgqnwJ5+Lp4unYj2Zq7mY/DTHhRzcfRx9G1PR549+zk2Kb+Pet3rVccaa6KoqpnwTD0d6JiY2w4UxMTskAfXwAAAAAAAAAAAAAAAAABh63gW9U0jK0+7w5GRaqo49yZjmnyTwlzfkWbmPkXLF2mabluuaK4nqmJ4TDpxRe9fT4wNssmumnhbyqacinwzzVf6onzohrbi+Faovx7J2Tun/OtLtVMnwbtdifbG2N8f51ImAgicAAAAAAAAD9piapimmJmZ5oiH4n+6DZv3fqH9t5dvjjYtXCzExzV3O74Kenw8O5LbwsSvMv02aPb1RytXNy6MSzVer9nXPInO7fZyNn9Dib9ERnZPCu/PXT3KPJ65lKAWxjY9GNaptW44IVTkZFeRdqu3J4ZAGdhAAAAAAAAAAAAAAAAAACeiQnokHL4ClVzAAAAAADN0L5bwPGbftQwmboXy3geM2/ahls+kp3wx3vR1bpdJgLlU6AAAAAAA021O0em7O4fZ825yrtUT2KzT+fcnvdyO+x3btFmia7k7IhktWq71cUW42zLa5N+xi49eRk3qLNqiONVddXCmmO/Kttrd5tNNVeLs9biueicq7Tzf9NM+ufMhO1e1OqbRZHKyrnY8emeNvHon4lPh7s9+fQ0SC6T1muXZm3i+bTy+2d3J27k40Zq1btRFzJ86rk9kb+Xs3sjUM3L1DKqyc3IuZF6rprrq4z/AOIY4IrVVNU7ZnbKU00xTGyI2QAPL6AAAAAAAAAA+rVyu1cpuWq6qK6Z401UzwmJ7sSsrYfePXRVbwNoa+VRPCmjL4c8fX7sd/z91WY3cHSF/CueHanfHsne083AsZtHgXY3T7Y3On7ddFy3Tct1U10VRxpqpnjEx3YVLv0+WNO8Xq9pjbsts69KyKNJ1O7M6fcq4W66p/uKp/2z6OnusnfnMTrGnTx//wCer2ku0lpK3n6JquUcExMbY5OFE9G6OuYGlaaK+GJidk8vAroBBE4AAAAAAWBuO7ZMzxOfbpXAp/cd2yZnic+3SuBZWrPqEb5VxrL6/VujsAEgcBBN93alj+O0exWppcu+7tSx/HaPYrU0rfWf1+d0LG1Z9RjfIAjqQAAAACa7me3L/wDWufchSa7me3L/APWufc6WiPXrX8oc7S/qN3dK63nlX7OLj15GTdotWbdPKrrrnhFMd+Xxn5ePgYd3My7tNqxap5VddXREKO272vy9o8qbVvl2NPt1fk7PHnq/aq7s97q9KwtK6WtaPt7Z4ap4o7+ZX+i9FXdIXNkcFMcc/wCe1vNtd42RlzXhaDVXj4/RVk9Fyv6vzY7/AE+BXldVVdU1V1TVVM8ZmZ4zMvwVvmZ1/MueHeq29kbljYeDZw6PAtU7O2d4A022AAAAAAAAAA2Gh6xqOi5kZWnZNdmv9KOmmuO5VHRMLk2I21wdoaIxr0U4uoRHPZmea536J6/B0x3+lRb6tXK7V2m7arqoromKqaqZ4TEx0TEutozTF/Aq82dtPtju5JcrSeiLGfT50bKvZPfyw6eEF3bbbU6xRTpeqV006hTH5O50RfiP93rTpZWHmWsy1F21O2J6uaVb5eJdxLs2rscMdfPAA2msAAAAAAAAA1O0u0Gm7P4XujPvcKpiex2qeeu5PciPv6GO7dotUTXXOyIe7Vqu7XFFEbZltLty3at1XLtdNFFMcaqqp4REd2ZV9tXvMxMSa8XQ7dOXejmm/X/d0z3o6avRHhQTa7a/VNors0Xq+wYcTxoxrc/F8NU/pT/7EQjqEaT1orrmaMXgjl9vw5O3cm2jdWaKIivK4Z5PZ8eXs3s/WdY1PWMjs+pZl3Iq6oqn4tPgjojyMAETrrquVTVVO2ZSuiimimKaY2RAA8PQAAAAAAAA+rdddu5Tct11UV0zxpqpnhMT3Yl8j6LE2O3k5OLVRia/NWTY6IyIjjco+t86PT4VrYWVj5uLbysW9Res3I40V0TxiYcypHsRtZm7N5kRE1XsG5P5axM/6qe5V6/VKtEax3LMxayZ208vtjvjrRbS2rtF6Ju40bKuT2T3T1L9c77bdt+reOXPalf+mZ2LqWBazcK7TdsXaeVTVHqnuT3lAbbdt+reOXPal0NbKoqxrdVM7Ymfk5+qtM05FymqNkxHzacBBE5AAAAAAdHbKdq2k+JWfYhsmt2U7VtJ8Ss+xDZLkxvQ0bo7FP5Hpq989oAzMIAAAADwz8zFwMS5l5l+ixYtxxqrrnhEPlVUUxtnifaaZqnZHG90L2w3gabo814uByc/NjmmKavyduf2pjpnvR6EN243gZmrVXMHSaq8XB/NmuOa5djv9yO95+4gqGaU1n2TNvE//ru70x0XqztiLmX/APz39zabQa/quu5HZdRyqrkRPGi3HNRR4Kfv6WrBDblyu7VNdc7ZnlTG3botUxRRGyI5ABjewAAAAAAAAAAAH7EzExMTMTHPEwm2ym8TVNLmjH1KatQxI5uNU/laI71XX4J88IQNnFzL2JX4dmrZP+cbXysSzlUeBep2x/nE6P0HWtN1zD91adk03af06eiqie5VHU2LmrSdSzdKzaMzT8muxep/SpnpjuTHXHelcuwu3GJr9NOHlxRjajEfmcfi3e/T3+960+0TrDbzNlq75tfVO7uQPSur9zE23LXnUdcb+9MAEjR0AAAAABWm/f8Awuk/Xu+qlVS1d+/+F0n6931UqqVjrH+Y1/DshZerv5fR8e2QBw3bAAAAFjbi/lfUf3FPtK5WNuL+V9R/cU+06+gfzC1vnslydO/l9zdHbC2gRbb3bDG2bxuw2opv6hcp427XHmoj51Xe73WszJybeNbm7dnZEK2x8e5k3It2o2zLZbTbRaZs9idnz73x6v7uzRz13PBHc7/Qp/azbfWNdqrs03Jw8KeaLFqr86P2qumr1d5H9Tz8vUs25mZ1+u/fuTxqqqn0R3I7zGV3pTT9/MmaKPNo5PbO/u4lhaM0DYw4iuvzq+X2Ru7wBwHdAAAAFlbif8dqn7q366larK3E/wCO1T91b9dTs6A/Mbfx7JcjT35fc+HbC1gFoqwRrej2ian9W3/MpUIvvej2ian9W3/MpUIr7Wz1yj+Mdsp/qp6pV/KeyABFknAAAAAAdKaF8iYHi1v2YZjD0L5EwPFrfswzFzWfR07oU7e9JVvkAZGNzhtN2yan45d9uWubHabtk1Pxy77ctcpvI9LVvlcOP6KndAAwsoAAAA6J2L7UdI8TtezDnZ0TsX2o6R4na9mEu1R9Pc3fNFNbPQW9/wAm3RjbXbLT9nLfYebJz6o40WKavze/VPVHpn0sDePtrRodudO06qmvUa6fjVdMWInrn9ruR5Z79MX712/erv37ldy7XM1V11Txmqe7MunprWCMaZsY/DX7Z5Pr2OZoXQE5MReyOCj2Ry/TtbDaHXtT13LnI1HJqr4T8S3HNRR3oj7+lrAQK5cru1TXXO2ZTu3botUxRRGyIAGN7AAAAAAAAH7E8J4xPCYfgCfbE7w8vTqqMLWqq8vD6IvTz3Lcf7o9PqW5hZWPm4tvKxL1F6xcjjRXRPGJhzKkmw+1mZs3mRHGq9gXKvy1jj/qp7k+v1SrQ+sVdiYtZM7aeX2x3wi+l9X6L8Tdx42Vcnsnulfgx9NzcXUcG1m4V2m7Yu08qiqP/eaWQn9NUVRFVM7YlAqqZpmYmNkwAPr4AAAAAAAAAhu3W3WJoUV4eFyMrUeiaePGi19bv97z8GvlZdrFtzcuzshsYuLdyrkW7UbZSLXda03RMT3TqWTRZpn82npqrnuUx0yqbazeJqmqcvG03lafiTzcaZ/K1x36urwR55RPVtSztVza8zUMmu/eq/SqnojuRHREd6GIgGk9Yr+VM0WvNo653z8o6090bq9YxYiu751XVG6PnL9mZqmZmZmZ6Zl+AjiQgAAAAAAAAAAAAANpoGv6roWR2XTsuu3Ezxqtzz0V+Gno8vStjY/eBpusTRi58U4ObVzRFU/k7k/sz1T3p88qTHV0fpjJwZ2UTtp5J4vo5ekND42dG2uNlXLHH9XUAprYbeBlaVNvB1aqvKweammvpuWY/wB0d7zdxb+Fk4+Zi28rFvUXrNynlUV0TxiYWHo7SljPo2252THHHtj6c6vtI6Mv4Fey5G2J4p9k/wCcj2AdJzgAAAAAAAAAAAAAAABWm/TCicXTdRiOeiuqzVPd4xyo9mrzrLRPe1i+6diMquI41WK6LsfaiJ9FUuXpqz9tg3aebb0cPydPQ177HOt1c+zp4FFgKpWmAAAAAAAA2Gzuk5Ot6xY07Fj412r41XDmop66p8EOhtJwMbTNNsYGJRyLNmiKaY657sz35nnRbdVs3/Y2j+7sq3wzsymKqomOe3R0xT4eufJ3EzWRq9oz7pY+1rjz6uqOTv8AorrWDSf3u99lRPmU9c8vd9QBIkeAAAAAAAAAAAAAAAAAAAACeiQnokHL4ClVzAAAAAADN0L5bwPGbftQwmboXy3geM2/ahls+kp3wx3vR1bpdJgLlU6AAAAAju3W1GPs3pvL+LdzbsTFizM/6p70enoYb9+3j25uXJ2RDNYsXMi5Fu3G2Zee3W12Ls3icink39QuU/krPHo/aq7kev0xR+q6hmapnXM3Ov1Xr9yeeqrq70R1R3nzqGZk6hm3czMvVXr92rlV11dc/wDvUx1ZaW0vd0hc5KI4o+c86ytFaJt4Fvlrnjn5RzADkOsAAAAAAAAAAAAAAAANlq+r5Gp4WBYyZmqvDtTZprmeeqjjxjj4OjyQ1o903KqaZpieCeN5qt01VRVMcMcQA8PQAAAAACwNx3bJmeJz7dK4FP7ju2TM8Tn26VwLK1Z9QjfKuNZfX6t0dgAkDgIJvu7Usfx2j2K1NLl33dqWP47R7Famlb6z+vzuhY2rPqMb5AEdSAAAAATXczzbZcZ/Vrn3IUytOz8nT5v1YtfIrvWarNVUdMU1cOPDyRw8rbwb8Y+RRdq4qZ2tXNsTkY9dqOOqNiU7ztq6tc1CcDCuT/Z2PVwiYnmvV/O8Hc8/WhgPOXlXMq7N25PDP+bHrFxbeLai1bjgj/NoA1mwAAAAAAAAAAAAAA+7Ny5Zu0XbVdVFyiqKqaqZ4TTMdEwvTd1tRRtFpfIvzTTqGPERep6OXHVXHh6+5PkUQ2Wzer5Oh6zY1HGmZm3Px6OPNXRPTTPhdfQ+k6sC/tn8E8cfP4OTpjRlOfY2R+KOKfl8XRwx9NzcfUcCxnYtfLs36IronvT3e+yFpU1RVETHFKsKqZpmYnjgAfXwAAAABG9vNqsfZvTvi8m7nXonsFqZ/wBVXej0+rDkZFvHtzcuTsiGbHsXMi5Fu3G2ZfO3O12Js3iciOTfz7lPG1Y49H7VXcj1+mKR1fUs3Vs6vNz79V69X0zPREdyI6o7zyz8vJz8y7mZd6q9fu1cquurpmXgrPS2l7ukK+SiOKPnPOsrRWibWBRy1zxz8o5gBx3WAAAAAAAAAAAAAAAATLdftRVomqxhZVz/APH5VURVxnmt19EVeDqn/wANLtt236t45c9qWnfd25XduVXLtc111TxqqmeMzLdrza68WnHq4YpnbHc06MKijJqyKeCao2T3vgBpNwAAAAAB0dsp2raT4lZ9iGya3ZTtW0nxKz7ENkuTG9DRujsU/kemr3z2gDMwgAAMTWNSxNJ067n5t2Ldm1HGZ65nqiI65l5rrpopmqqdkQ9UU1V1RTTG2ZfGuarg6Np1zOz7sW7VHNEfpVz1UxHXKjNstqc/aTM5V6ZtYlE/kcemeanvz3Z7/mfG2O0eZtHqc5N+Zt2KOMWLMTzUU/fM9ctGrnTWnK82qbVqdluOvfzckLE0LoSnDpi7djbcnq3c/OAI6kAAAAAAAAAAAAAAAAAAA+rdddu5Tct1VUV0zxpqpnhMT3Yl8j6Lh3bbcRqkW9J1a5FOdEcLV2eaL3en9r1+FP3MNFVVFdNdFU01UzxiYnhMT3V1bstro13E9wZ1cRqNinpn/jU/O8Mdfn8E81f05N/ZjX5872Ty808/bv44Lp/QkWduRYjzfbHJzxzdm7imgCWomAAAArTfv/hdJ+vd9VKqlq79/wDC6T9e76qVVKx1j/Ma/h2QsvV38vo+PbIA4btgAAACxtxfyvqP7in2lcrB3K37WNnatkX64t2rWLFddU9ERE8Zl19BTEZ9uZ5+yXK05EzgXIjm7YT/AG62ks7N6RN/4teXd4049qeuruz3o/pHWobOy8nOzLuXl3ar1+7Vyq66umZbHbDXL20GuXs65yqbXHkWLc/oUR0R4eue/LTsmm9K1Z97ZTPmRxd/+exj0LounBs7ao8+ePu/z2gDiOyAAAAAALK3E/47VP3Vv11K1WVuJ/x2qfurfrqdnQH5jb+PZLkae/L7nw7YWsAtFWCNb0e0TU/q2/5lKhF970e0TU/q2/5lKhFfa2euUfxjtlP9VPVKv5T2QAIsk4AAAAADpTQvkTA8Wt+zDMYehfImB4tb9mGYuaz6OndCnb3pKt8gDIxucNpu2TU/HLvty1zY7Tdsmp+OXfblrlN5Hpat8rhx/RU7oAGFlAAAAFy5u01vZzd1pNVuaas6/hW6ceieqeRHGqe9Hpngpplajn5OfVYnIr4xYsUWLVPVTTTHCP6+GXT0fpCrCpuTR+KqNkc3O52fo+nNqtxX+Gmds8/M8ci9dyL9d+/cquXblU1V11TxmqZ6Zl5g5szMztl0YiIjZAA+AAAAAAAAAAAAAACX7ttq69A1GMXKrmdOyKuFyP8AlVfPj7+94F4U1U1UxVTVFVMxxiYnmmHMC3dzu0c5mFVoWXc438anlY9Uz+db+b5PV4Ey1Z0rNNX3S7PBP4e7uRDWXRcVU/e7ccMfi7+9YYCcIQAAAAAAArbejtrON2XQ9Iu8L0xycm/TP5ndopnu92ero6ejTzs61hWZu3J+s8jcwcK7m3YtW4+kcr93jbe+5armk6Hdib8cab+TTP5n7NPf7/V4eiqKqpqqmqqZmqZ4zMzzy/BWGkNI3s679pcndHshZmBo+zg2vAtxvn2yANBvAAAAAAAAAAAAAAAAAACS7DbW5mzeZFMzVewLlX5Wxx6P2qe5Pr9UaGbHyLmPci5bnZMMORj28i3Nu5G2JdL6ZnYupYNrNwr1N6xdp401R6u9PeZKid3u1d7Z3UItX6qq9Ov1R2ajp5E/Pjv93ux5F52Ltu/ZovWa6blu5TFVFVM8YqieiYWfonSlGkLXhcVUccf57FaaW0XXo+74PHTPFP8AntfYDquUAAAAAAAAAAAAAANVthY907K6pZ4cZqxLkxHfimZj0w2rxzbfZcK/a+fbqp88Md6jw7dVPLEslmvwLlNXJMOZQFMriAAAAAAE03VbN/2zq/u/Kt8cHDqiqYmOa5c6Yp8EdM+TuorpOBk6pqVjAxKOXevVxTTHVHdme9Ec7obZ7SsbRNIsadix8S1T8arhz11ddU+GUi1d0Z97v/a1x5lPXPsj5z9Uf1h0n90s/ZUT59XVHtn5R9GwAWQrkAAAAAAAAAAAAAAAAAAAAAAJ6JCeiQcvgKVXMAAAAAAM3QvlvA8Zt+1DCZuhfLeB4zb9qGWz6SnfDHe9HVul0mAuVToAABMxEcZnhANftFq+Joek3tRy6viW44U0x011dVMd+XP2varl61ql7UM2vlXLk80R0UU9VMd6G93l7S1a9rM2ce5xwMWZps8Oiueuvy9Xe8MomrfWDS05l37K3PmU9c8vcsbQGioxLX2tyPPq6o5O8AR1IAAAAAAAAAAAAAAAAAAAAAAAAAAAAFgbju2TM8Tn26VwKf3HdsmZ4nPt0rgWVqz6hG+Vcay+v1bo7ABIHAQTfd2pY/jtHsVqaXLvu7Usfx2j2K1NK31n9fndCxtWfUY3yAI6kAAAAAAAAAAAAAAAAAAAAAAAAAAC0NyeuTxv6Bfr5ue9jcZ+1T9/nWg5s0PULulavi6jZ48uxcivh3Y648scY8ro/Fv2snGtZNmrlWrtEV0Vd2JjjErE1YzZv402auOjsni/zcr7WbCizkRep4q+2OP/ADe9AEmRoAAB+V1U0UTXXVFNNMcZmZ4REA1u0+tYug6Rd1DKnjyfi26InhNyueimP/eji5/1vU8vV9Tvahm3OXeuzx71MdVMdyIbneJtJXtDrVU2q59w48zRj093u1+GfVwRlWuntLTm3vs6J8yni555e5ZGgtFRh2vtK48+rj5o5O8AR93gAAAAAAAAAAAAAAAAAAAAAAAAAAAHR2ynatpPiVn2IbJrdlO1bSfErPsQ2S5Mb0NG6OxT+R6avfPaAMzCAA+btyi1aru3a6aLdFM1VVVTwimI6ZlRW8Pam5tFqc27FVVOnWKpizR0cufnz356u5HlSjfFtPNPHZ3Cuc8xFWXVE+WKPvnyd9VyB6y6Wm5XOLangjj555Ph27k61b0VFumMq7HDPFzRy/Hs3gCIpYAAAAAAAADYadomsajEVYOmZd+mf06LU8nz9DdY+77au9HGdOptRPz79EeiJbVrCyb0bbduZ3RLWu5uPanZcuRG+YRUTL4Ndp+HHsWL4Ozwx7+73au1HGNNpuR+xfo++WadFZscM2quiWKNKYU8V2nphFRs8/Z/XMCJqy9JzLVMdNc2pmnzxzNY067ddudlcTE87bouUXI20TtjmAGN7AAAAAAGRp2ZkafnWc3EuTbv2aoqoqjqn+jHHqmqaZiY44fKqYqiYnidE7Ja5j7QaLaz7PCmv829b4/mVx0x98d6W3URu12inQteopvXOGFlTFu/EzzUz+jX5J9EyvdaOhdJRn48VVfijgnv+KsdM6OnByJpj8M8Md3wAHXcgABWm/f/AAuk/Xu+qlVS1d+/+F0n6931UqqVjrH+Y1/DshZerv5fR8e2QBw3bAAAAGXiZ9/FwcvEszyacuKabk9fJiePDyzw8zEHqmqaZ20y+VUxVGyQB5fQAAAAAAABZW4n/Hap+6t+upWqytxP+O1T91b9dTs6A/Mbfx7JcjT35fc+HbC1gFoqwRrej2ian9W3/MpUIvvej2ian9W3/MpUIr7Wz1yj+Mdsp/qp6pV/KeyABFknAAAAAAdKaF8iYHi1v2YZjD0L5EwPFrfswzFzWfR07oU7e9JVvkAZGNzhtN2yan45d9uWubHabtk1Pxy77ctcpvI9LVvlcOP6KndAAwsoAAAAAAAAAAAAAAAAAAAAAAAAzNF1G/pOq42o408LliuKoj50dcT3pjjHlYY9UV1UVRVTOyYfK6IrpmmqNsS6Y03Msahp9jOx6uVav24ronvTHrZCu9yerzkaXk6Pdr414tXZLUT8yrpjyVe0sRbej8uMvGovR7Y4d/t61TaQxJxMmuzPsng3ewAbrTAAAa3aXWMbQtGv6jk88W44UUceeuueimP/AHo4vFy5TbomuudkQ927dVyuKKI2zKPbztrI0PA9wYVyP7RyKeaY/wCDR87w9zz9Sk6pmqqaqpmZmeMzPWydWz8nVNRv5+Zc5d69Vyqp6o7kR3ojmYqrNLaSrz781z+GOKObvlaGitG0YFiKI/FPHPP3QAOW6YAAAAAAD1xsfIyrsWsaxdv3J6KbdE1T5ofYiZnZBMxEbZeQkOHsTtTlRE29Hv0R/wDbNNv0VTEthRu32oqjjOPjUeG/H3N2jRuZXG2m1V0S0q9JYlE7KrtPTCHCX3N3G1NMcYxbFf1b9P38Gvy9jNqMWJm5o2TVEf8AK4XPZmXyvRuXRG2q1V0S+0aRxK52U3aemGgHrk49/GuTayLFyzXHTTcommfNLyacxMTsluRMTG2AB8AAAAAABZe5/aibV2Nns65+TrmZxKqp/Nq66PBPTHf8KtH1brrtXKbluqaK6JiqmqJ4TEx0S3cDNrwr8XaPZx88cjTz8KjNsTar+HNPK6eGg2C1+naDZ+1lVzHuq3+TyKY+fHX4Jjn8/cb9bFi9Rft03KJ4J4VVX7Ndi5VbrjhjgAGViAAAAAAAAAAAAAAcxXo5N2unuVTD4emTMVZF2Y665n0vNS08a5Y4gB8fQAAEp3b7OTr+txN+iZwcbhXfnqq7lHl9USz42PXk3abVuOGWHJyKMe1VduTwQnG6HZr+z9OnWsu3wycqnhZiY56LXd8NXT4OHdT8iIpiKaYiIjmiI6hbGFiUYdimzRxR1zyqpzcuvLvVXq+OeqOQAbbVAAAAAAAAAAAAAAAAAAAAAACeiQnokHL4ClVzAAAAAADN0L5bwPGbftQwmboXy3geM2/ahls+kp3wx3vR1bpdJgLlU6AAIRvc2g/svRY03GucMrNiaZ4Tz0Wv0p8vR5+4mt25RatV3blUUUUUzVVVPRER0y532u1i5ruv5OoVcYoqq5Nmmf0aI5qY+/wzKP6xaQ+643gUT51fB8PbPyd/V7A+9ZPh1R5tHD8fZ3tSArVY4AAAAAAAANhoej6lrWX7m03Frv1/pTHNTRHdmeiFmbObr8DHppva3fqy7vXZtTNNuPDPTPodLB0TlZ3oqeDlngj/ADc52dpXGwvS1cPJHH/m9U1m1dvXIt2bddyueimimZmfJDeYWxu0+ZETa0bJpieu7wt+1ML307TsDTrXYsDDsY1HXFuiKePh7rKSexqjbiP9a5M7uDt29iM39bLkz/o24jfw9mztUja3a7UVxxqs4tvvVX4+7i+q92m09McYoxK+9F7+sLsG75K4Ozjq6fo0/KjN28VPR9VB5mwu1WNEzXpNy5THXarpr9ETxaLMxMvDu9iy8W9j1/Nu25pnzS6ZeeTj4+VZmzk2LV+3PTRcoiqmfJLUvao2Zj/SuTG/ZPc2rOtl6J/1bcTu4O9zGLq2g3b6HnxVcwOVp1+eeOx/GtzPfpno8kwrHafZbV9n7n/zcflWJnhTkW/jW6vL1T3pRrP0Ll4XnV07aeWOL6JJg6Zxc3zaJ2Vck8f1aMByXVAAAAAAAAAAWBuO7ZMzxOfbpXAp/cd2yZnic+3SuBZWrPqEb5VxrL6/VujsAEgcBBN93alj+O0exWppcu+7tSx/HaPYrU0rfWf1+d0LG1Z9RjfIAjqQAAAAAAAAA2uzmganr+Z7n06xyop4dkuVc1FuO7M/d0rZ2a3d6LpdNN3NojUcnrm7T+Tie9T0efi62j9DZOdw0Rsp5Z4vq5ekNMY2DwVztq5I4/op7TdJ1PUquGBp+Tk9+3bmYjwz0Q3+Nu82qvRyqsCizE/8y9RHoiZXlboot0RRbopoopjhFNMcIiH0lFnVLHpj/VrmZ5tkd6MXta8iqf8AToiI59s9yk53Z7TRTx5OHM9zs3/hi5W77auxHGNOpvRHXbvUT6OPFewz1aq4UxwTVHxjuYKdac2J4Ypn4T3ua9Q0vUtPq4Z2Bk43fuWppifBM9LDdP3KKLlE0XKaa6ZjhNNUcYlD9pd3uiapTVdxKI07Jnoqs0/Eme/R0ebg5OXqndojwrFfhc08E9PF2Oria1W658G/R4PPHDHRx9qkBttpdntT2fy+wahZ4U1cex3aOei5Hen7p52pRS7artVzRXGyY9iVWrtF2iK6J2xIAxvYAAAAAAvDdFqU52yFuxXVxuYdybM93k9NPonh5FHrD3HZ02tZzdPqq+Lfsxcpj9qif6VT5ne1cyPsc6mPZVwd3W4esWP9tg1T7aeHv6lugLMVqAAIDvi2hnA0unRsavhkZlPG7MTz02u5/wBU83giU6yr9rGxruTfrii1aomuuqeqIjjMudNpdVva1reTqV7jE3a/iUz+jTHNTHkjgjmsmkPu2N9lRPnV8Hw9vckWrmB95yPta482jh+Ps72uAVwsQAAAAAAAAG32c2c1bX7/AGPT8aaqKZ4V3q/i26PDP3RxlZ+z27TR8Kmm7qldeoX+umeNNuJ8Ec8+WfI6uBobKzeG3Tsp5Z4I+vwczO0xi4XBcq21ckcM/T4qexcbIyrsWsXHu37k9FNuiap80N9h7D7U5URVRpF2iJ67tVNv0VTEr3w8TFw7MWcTGs49uOii1RFMeaHsk1jVG1Ef6tyZ3cHbtRq9rZdmf9K3Eb+Hs2KSt7tNpqo4zRiUd6b39Ifl3drtPRHGm1i3O9Tfj7+C7ht+SuDs46un6NTyozdvFT0fVz9nbG7T4cTN7RsmqI67XC57My0d23ctXJt3aKrddPTTVHCY8jp1h6npenana7FqGFYyaerslETMeCemPI0r+qNEx/o3Jjf3xs7G7Y1srif9a3E7u6dva5rFsbSbr8a7FV7QsmbFfT2C9M1UT3oq6Y8vFWer6Zn6Tl1YmoYtzHux1VRzTHdieiY78IvnaLycKf8AVp4OWOL/ADek2FpTGzY/0quHknj/AM3MMBznQAAAAAAAAAAdHbKdq2k+JWfYhsmt2U7VtJ8Ss+xDZLkxvQ0bo7FP5Hpq989oAzMI0+2Ot29A0C/qFXCbsRyLFE/pXJ6I++e9EtwpTe7rn9p7QzgWa+ONg8aOaeaq5+lPk6PJPdcnTOf9xxZrj8U8Eb/o6uhsD77lRRP4Y4Z3fVDsm/dyci5kX7lVy7dqmuuqemqZnjMvMFWTMzO2VoxERGyAB8AAAAAiJmeEPXExr+Xk28bGtV3b1yrk0UUxxmZXNsHsJiaLRbztRooyNR6Y489Fn6vdnv8Am7/T0bou9pCvwaOCI459kfXmc7SWlLOBR4VfDM8Ucv0QrZXd3quq005OfVOnYs88RXTxuVx3qerwz5pWVoWx2z+kU0zYwKL16P8AjX45dfHu8/NHkiEgFgYOhMTDiJpp21cs8P8A4gGdprLy5mJq2U8kcH/oA67kgADUazs1oerxV7u02xXXP/Epp5Nf2o523GO5aou0+DcpiY5+Fkt3a7VXhUTMTzKm2m3YZNiKr+hZE5NEc/YL0xFfkq6J8vBXmTYvY1+uxkWq7V2ieFdFdPCaZ78OnEf2x2V0/aPFmL1MWcumPyWRTHxqe9PdjveZFdJ6sW64mvF4J5PZO7k7NyUaN1muUTFGVwxy+2N/L273P4z9d0nN0XUrmBn2uRdo54mOemuOqqJ64YCDV0VW6ppqjZMJxRXTcpiqmdsSAPD0AAAALy3Va5/a+zdOPer5WVhcLVzjPPVT+jV5ubyKNSjdjrH9kbV4/Lq4Y+V+Qu9znn4s+SeHk4u1oLO+6ZdO2fNq4J+XRLj6dwvveJVsjzqeGPn0wvgBaCsQAFab9/8AC6T9e76qVVLV37/4XSfr3fVSqpWOsf5jX8OyFl6u/l9Hx7ZAHDdsAAAAAAAAAAAAB72MLMyP7jEv3fqW5q9T1FM1TsiHyaop4ZeA2FOh61VHGnR9QnwY1f8AR83NI1a3HG5pebRH7ViqPue5sXY4fBnoePtrc8HhR0sFZW4n/Hap+6t+upW9y3Xbq5NyiqiruVRwlZG4n/Hap+6t+up1NAcGkbfx7JczT3Do+58O2FrALRVgjW9HtE1P6tv+ZSoRfe9HtE1P6tv+ZSoRX2tnrlH8Y7ZT/VT1Sr+U9kACLJOAAAAAA6U0L5EwPFrfswzGHoXyJgeLW/ZhmLms+jp3Qp296SrfIAyMbnDabtk1Pxy77ctc2O03bJqfjl325a5TeR6WrfK4cf0VO6ABhZQAAAAAAH7TE1VRTTEzMzwiI630fj6t267lcUW6Kq66uaKaY4zKwtkN2uTmUUZeu114lmeenHp/vKo78/o+Dp8CzNH0XStItdj07Bs4/NwmqmnjVV4ap55SPA1aycmIrueZTz8fR3o7nayY2NM0W/Pnm4unuUfgbGbT5tMVWdHyKaZ67vC37Uw2dvdptPVHxreJR9a9/SF2jv29VMOmPOqqno7nBua1ZdU+bTTHT3qQu7ttqKImabGNc71N+Pv4NVn7I7S4NM1ZGjZXJjpm3TFyI+zxdCD5c1TxKo82qqOifk+29asumfOppnpj5uYK6aqKporpmmqJ4TExwmH46P1nQtJ1i3NGo4Fm/PDhFc08K48FUc8Kx2w3b5WDTXl6JXXmY8c9Vir+9pjvfO9fhcDP1aycaJrt+fTzcfR3O9g6x42TMUXPMq5+Lp71fD9mJieExwl+I4kIAAAAAAACSbttSnTNscK5NXC3fq9z3PBXzR6eE+RfjmGiqqiumuiqaaqZ4xMdUulNHy6dQ0nEzqeHDIs0XPBxiJTrVLI227lmfZwx8ePsQjWzH2XLd6PbwT8OLtZQCYIgAAKS3r7Qzq+uTg49zjh4UzRTwnmrufpVfdHg76yd42uf2Hs1euWq+TlZH5Gxw6YmemryRxnw8FBobrVpDwYjFonj4Z+UfPoTHVfR/hTOVXHFwR85+XSAIOmoAAAAAA2mz+g6pruV2DTsaq5ET8e5PNRR4Z+7pb3d/sTka/cpzc3l2NNpn86Oaq9MdVPe7s/+xc+nYWJp2HRiYViixYtxwpoojm/8z30l0Rq9XmRF295tHXP050c0trBRiTNqz51fVH15kL2d3Z6Th003dVuVZ97pmiJmm1E+COefLPkTXCw8TCsxZw8azj24/RtURTHoe4nWLgY+JGyzREdvTxoPlZ2RlTtvVzPZ0cQA22oAA8czExcyzNnLxrORbnpou0RVHmlDdoN2ui51NVzTqq9Ovz0RT8a3M9+mejyT5E4Grk4OPlRsvURPb08baxs3IxZ22q5js6OJzztNsxq+z93hn4/GzVPCi/b+Nbq8vVPenhLSunMrHsZWPXj5Nqi9ZuRya6K44xVHfhTu8TYavRpr1LS6armnTPx6Omqx/Wnv+fuoPpfV2rFibtjho9se2O+E20RrDTlTFq/wVeyfZPdKCgIukwAAAAACV7r9c/sbaW3bu18nFzOFm7xnmif0avJPomV6uX3QWwGsf23svi5VdXKv0R2G/wDXp6/LHCfKm+qmdtirFqni4Y+ff0oVrVhbJpyaY4+Cfl3dDfAJmhwAAAAAAAAAAAA+btUUW6q56KYmZfTD1272DRM+/PRbxrlfmpmXmurwaZq5Hqinwqop5XNkzxmZnrfgKXXIAAAA9sLGv5mXaxMa3Ny9driiimOuZdB7I6JY2f0SzgWuFVcfGvXIj8+uemfujvRCGbm9muxWZ2hzLfx7kTTi0zHRT0TX5eiO9x7qylgataM+wtfebkedVxc0fXsQHWTSf29z7vbnzaePnn6doAlSLgAAAAAAAAAAAAAAAAAAAAAAABPRIT0SDl8BSq5gAAAAABm6F8t4HjNv2oYTN0L5bwPGbftQy2fSU74Y73o6t0ukwFyqdAAQve/rE6dsz7jtV8m9nVdj78URz1z6o8qk0v3tap/aG116xRVxtYdMWKe5yumr0zw8iIKv0/mfec2rZxU8EfDj61naBxPu2HTt46uGfjxdQA4rsAAAAAACXbBbF5W0N2MrJmvH02meE3OHxrkx0xT/AFee7vZWvaPUpuX4qo0/HmJvVRzcueqiO/PX3I8i8sezaxrFFjHt0WrVumKaKKY4RTEdUJRoHQf3r/Xvx5nsjl+iM6d0391/0LE+f7Z5Pq8NJ03C0rCow8DHosWaOimnrnuzPTM9+WWCwKaaaKYppjZEIDVVVXM1VTtmQB6eQAAAB8X7NrIs12b9ui7arjhVRXHGKo7kw+x8mNvBL7E7J2wqTeDsBVg0XNU0SiqvFjjVdx+mq3Hdp7tPe6Y9VdOoFQ71dj6dPuVa3plrk4lyr/5FqmOa1VP6Ufsz6J8PNB9PaBi1E5OPHB7Y5OeOblhNtBadm7MY+RPD7J5eaefkV6AhyXgAAAAAAALA3HdsmZ4nPt0rgU/uO7ZMzxOfbpXAsrVn1CN8q41l9fq3R2ACQOAgm+7tSx/HaPYrU0uXfd2pY/jtHsVqaVvrP6/O6Fjas+oxvkAR1IAAAAAABvtitm8naTVPc9uZt41vhVfvcPzKe5HfnqafDxr2Zl2sTHomu9eriiimOuZnhDoTZPRMfQNFs4FmKZriOVeuRH95XPTP3R3oh3dBaK+/3ttf4KePn5nE05pT7jZ2Ufjq4ubnZWj6ZhaRgUYWBYps2aOqOmqe7M9c99mAsuiimimKaY2RCtq66q6pqqnbMgD08gAAAMTV9Ow9VwLmDnWKb1m5HPE9MT3YnqnvqG202cydm9WnFuzNyxc+NYvcPz6f6x1/+XQjR7b6Db2g0C9h8KYyKPymPXP6NcdEeCeifC4enNE051maqY8+ni5+budvQmlasK9FNU+ZPHzc/e57H1XTVRXVRXTNNVM8JiY54l8qyWWAPgAAAAJFu2ypxNttNr48IruTanv8qJp9cwjrK0i/7m1bDyePDsV+ivj4KolsYt37K/Rc5Jietgyrf2tmujliY6nSwC4lQAAIJvm1f3Fs/b021Xwu51fCrh0xbp4TPnnhHnU0lO9LVJ1LbDJppq42sXhj0f8AT+d/qmUWVbp3L+9ZtcxxRwR8PrtWhoPE+7YdETxzwz8fpsAHHdYAAAAAATvd9sHc1eLepatFdnAnnt245q739Ke/0z1d187r9kY1nJ/tPULfHT7NXCmiY/vq46vqx193o7q5qYimmKaYiIiOERHUl2gdBRfiMjIjzfZHLzzzdu7jiendOTYmcfHnzvbPJzRz9m/i88PGx8PGoxsWzRZs244U0UU8IiHqCdxERGyEGmZmdsgD6+AAAADA13R9P1rCqxNRx6btE/mz0VUT3aZ6pZ48V0U3KZprjbEvVFdVuqKqZ2TCg9ttk83ZvL41TN/CuTwtX4j/AE1dyfX6o26Y1LCxdRwbuFmWqbti7Tya6Z/95p76g9tNncjZzWKsW5xrx6+NWPdmPz6e/wB+Oif/ACrzTuhPuU/a2vwT1fTkWFoPTX3yPsrv446/rytGAjaRAAAAAAAAOjtlO1bSfErPsQ2TW7Kdq2k+JWfYhslyY3oaN0din8j01e+e0AZmFqdr9Wp0TZ3L1DjHZKKOTaieuuean08/ghzvXVVXXVXXVNVVU8ZmemZWVvx1War+Fo1ur4tEe6Lsd+eMU+jleeFZq51nzPtsv7KOKjg+M8fd8FiatYn2OJ9pPHXw/D2d/wAQBG0iAAAAH7ETMxERxmX4nO6LZ+nU9Zq1PJo5WNhTE0xMc1d3q83T5m1h4teXfps0cc/5ta2ZlUYlmq9XxQme7LZKjRMGnUc61E6lfp48Kv8Ag0z+jHf7vm8M0Ba+Ji28S1Fq3HBH+bVVZeVcyrs3bk8M/wCbABstcAAAAAAABHdvdmrO0ekVW6aaac2zE1Y9ye782e9P9JUJftXLF6uzeomi5bqmmumY54mOaYdOqg3z6HGHqtrWMejk2sv4t3h0RciOnyx6pRDWjRsVUfe6I4Y493L8Ozcl2rGkppr+61zwTxb+T4/5xq+AQROAAAAB+xMxMTE8Jh+AOitj9T/tjZrBz5njcuW4i59eOar0xLbK23G6hy8HP0uurntVxeoie5VHCfTEedZK2tF5X3rEt3Z45jh3xwSqjSmN92y67ccUTwbp4YAHQaCtN+/+F0n6931UqqWrv3/wuk/Xu+qlVSsdY/zGv4dkLL1d/L6Pj2yAOG7YAAAAAAAA/aYmqqKaYmZmeERHW2Wzmh6hr2oRh4FrlT013Kuai3HdqldOyOxulbPW6blFEZObw+NkXKeePqx+jHp77saM0Nfz52xwU8vdyuTpPTNjAjZPDVyd/IrXZ7d3rup003sqmnTrE8/G9Hx5jvUdPn4JzpO7XZ7EimrKi/n3I6eyV8mnzU8PTMpqJviav4WPHDT4U8s8PVxITl6fzcieCrwY5I4OvjYGDo2kYPD3HpmHYmOuizTE+fhxZ4OzRRTRGymNkOPXXVXO2qdsgD08vi9atXqORetUXKe5VTEx6WPhabp2FeuXsPBxsau5ERXVatRRyuHd4dLLHmaKZnwpjheorqiPBieAAenlGt6PaJqf1bf8ylQi+96PaJqf1bf8ylQivtbPXKP4x2yn+qnqlX8p7IAEWScAAAAAB0poXyJgeLW/ZhmMPQvkTA8Wt+zDMXNZ9HTuhTt70lW+QBkY3OG03bJqfjl325a5sdpu2TU/HLvty1ym8j0tW+Vw4/oqd0ADCygAAAAAP2mJqmKaYmZnmiIXJu32JtaTZt6nqlqm5qFcRVboqjjFiPxd/qR7c7s3TmZlWu5luKrGPVycemqPzrnzvJ6/AtxN9W9D0+DGXej+MfPu6UL1j0vV4U4tmf5T8u/oAEzQ0AAAAABXm8/YujNs3da0qzFOXRE1X7VMf30ddUR871+HpqJ1ApHets/To2ve6sajk4mbxrpiI5qK/wBKn08Y8PeQfWXRNNEfe7Ufy7+9NtW9K1Vz91uz/Hu7kNAQ1MAAAAAABe26jKnJ2Iw4meNVmqu1PkqmY9Ewolb242/ytBzsfj/d5MV/apiP9qR6r3PAzvB5YmPn8ke1nt+Hg+FyTE/L5rCAWOroBgbRajTpOh5mo18J7BamqmJ66uimPLPCHiuum3TNdXFHC9UUVXKoop454FQb3NY/tLaerEt1cbGDHYo7k1/pz5+Ef9KGvu7cru3a7tyqaq66pqqqnpmZ6ZfCocvJqyb9V6rjmVuYmPTjWKbVPsgAazYAAAAEp3d7L17Rapyr9NVOn48xN+qOblT1URPdnr7keRG8THvZeXaxceia716uKKKY65meEOiNl9HsaFomPp1jhPIjjcr4fn1z01f+9XB39AaLjNv+FcjzKePnn2R3uFp7Sc4VjwaJ8+ri5o9s9zYY9m1j2KLFi3TbtW6YpoopjhFMR0RD7BZURERshW8ztnbIA+vgAAAAAA+btui7bqt3KKa6K4mmqmqOMTE9MS+g4ziURvH2ZnZ7WOVj0z7gyZmqxPTyJ66J8HV3vKizobbXRaNd2dycGaYm9EdksTPVcjo8/R4Jc9VU1U1TTVTNNUTwmJ6YlWWn9GxhZG2iPNq4Y5uWFlaB0jOZj7K586ngnn5JfgDhO4AAAALE3I6pNnVsrSa6viZFvsluJ+fT0+eJ/wBKu2y2Z1CdL2gwdQirhFm9TNf1eir0TLe0bk/dcqi77Inh3TwT1NLSWN96xa7XtmODfxx1ujgiYmOMTxgW4qYAAAAAAAAAAAAaLeBf9z7F6rcmeHHHmj7Xxfvb1Dd8eT2DYuu1x/xF+3b80zV/taWkrn2eJdq/4z2N3R1v7TLt0/8AKO1SIColsgADf7CbP3Notdt40xVGLa+Pk1x1U9zwz0eeepo7Nu5evUWbVFVdyuqKaaaY4zMz0RC/thNn7ezuhW8aYpnKu8K8muOurueCOjzz1u3oLRn37I86PMp4Z7vj2OLpzSX3LH82fPq4I7/h2t5Zt27Nmizaopot0UxTTTTHCIiOaIh9gs+I2cEKzmdoAAAAAAAAAAAAAAAAAAAAAAAAAAT0SE9Eg5fAUquYAAAAAAZuhfLeB4zb9qGEzdC+W8Dxm37UMtn0lO+GO96OrdLpMBcqnRj6nl0YGm5Obd/MsWqrlXf4RxZCIb3c33HsZftxPCrKuUWY8HHlT6KZjytbMv8A3fHru8kTLZw7H3jIotcsxCksi9cyMi5fu1cq5crmuqe7Mzxl5gp+ZmZ2yt2I2RsgAfAAAAAZWlYORqWo2MDFp5V6/XFFMffPejpYqz9yWixNWTrt6j838hj8e701T6o87f0bhTm5NNmOKePd7WjpLMjDxqrs8ccW/wBiwdntKxtF0ixp2LHxLVPxquHPXV11T35lsAWxbopt0xRTGyIVVXXVcqmuqdsyAPbwAAAAAAAAPPKsWcrGuY2RbpuWrtM0V0VdFUT0w9B8mImNkvsTMTthzxtlolzZ/Xr+BVxqtfn2K5/Sono8vVPfhpl0b4tGjO2ejUrVHG/gzypmOmbc81UeTmnySpdVemcD7llVUR+GeGN304lo6HzvvuLTXP4o4J3/AF4wBynUAAAAAAWBuO7ZMzxOfbpXAp/cd2yZnic+3SuBZWrPqEb5VxrL6/VujsAEgcBBN93alj+O0exWppcu+7tSx/HaPYrU0rfWf1+d0LG1Z9RjfIAjqQAAAAAALC3KaPGTq2Rq96jjRiU8i1x/5lXTPkjj9qFvIxuuwIwNi8Pm4V5HG/X3+V0f6YpSdamhMWMbCop9s8M/H6cCrtN5U5ObXV7I4I+H+bQB1nKAAAAAAAAUbvZ0uNO2uu3bdPJtZlMX6eHzp5qvTEz5URW1vzw4r0rT8+I+NavVWpnvVU8f9vpVKqzTmPGPnXKY4p4enh7Vo6EyJv4NFU8ccHRwdgA5DqgAAAAAOm8S52XEs3Z/Tt01eeHqw9EnlaLg1d3Htz/phmLntztoiVOXI8GuYGLq+ZTp+lZedXw4Y9mq5w7vCJngykQ3u5nuXYu/bieFWTdosx5+VPoplhzb/wB3x67vJEyzYdj7fIotcsxCkbtyu7dru3KpqrrqmqqZ65npfAKfmdq3YjYAPgAAAANls1pN/W9axtNscYm7V8erh+ZTHPNXkhrVt7k9HixpuRrV2j8pkVditTPVRTPPPlq9l0tE4P33KptTxcc7o/zY52lc37li1XY4+KN8/wCbU907Dx9PwbOFiW4t2LNEUUUx3P6sgFr00xTERHFCq6qpqmZnjkAfXwAAAAAAAAaLbnQLe0Og3cThTGTR+Ux656q46vBPRP8A4b0Yr9mi/bm3XG2J4GWzersXIuUTsmHMNyiu3cqt3KZprpmaaqZjhMTHTD5TXfBo8adtLGbao5NnPpm5zdEXI5qvunyoUqPMxqsW/VZq9k/+LZw8mnKsU3qfbAA1mwAAAAAA6O2U7VtJ8Ss+xDZNbsp2raT4lZ9iGyXJjeho3R2KfyPTV757QGt2qzZ07ZvUM2mrk12seuaJ/a4cKfTMPdy5Fuia54oja8W6JuVxRHHM7FE7aajOq7U6hmcrlUVXpptz+xT8Wn0RDTgpy7cqu3KrlXHM7elcFq3Taopop4ojZ0ADG9gAAADoTYTSY0bZfDxJp4XaqOy3vr1c8+bmjyKP2Swo1DabTsOqnlUXMijlx3aYnjV6Il0YmmqWNEzcvzujtn5IdrZkzEW7Eb57I+YAmyFAAAAAAAAAACPbxdOjU9j8+1yeNy1b7Pb7vGjn9McY8qQvyummuiqiuIqpqjhMT1ww5FmL9qq3VxTEwy2L02btNynjiYlzAPbOsTi5t/Gq6bVyqifJPB4qcmJidkrgiYmNsAD4+gAAAJdukzfcm2mPbmrhRk267NXm5UemmF5ObNCyvcOt4OZx4RYyKLk+CKomXSaf6pXvCx67fJPb/wCIHrXZ8HIoucsdn/oAlaKq037/AOF0n6931UqqWrv3/wALpP17vqpVUrHWP8xr+HZCy9Xfy+j49sgDhu2AAAAAANjs7o+XrmrWtPw6eNdc8aqpjmop66p70NcvTdjs5ToehU379HDOy4iu7Mxz0U/o0eTr78951tD6NnPyPAn8McM93xcrTGkowLHhR+KeCO/4N1s3omFoOmUYOFRwiOe5cmPjXKuuqf8A3mbIFo27dNqmKKI2RCsblyq5VNdc7ZkAe3gAAAAAAABGt6PaJqf1bf8AMpUIvvej2ian9W3/ADKVCK+1s9co/jHbKf6qeqVfynsgARZJwAAAAAHSmhfImB4tb9mGYw9C+RMDxa37MMxc1n0dO6FO3vSVb5AGRjc4bTdsmp+OXfblrmx2m7ZNT8cu+3LXKbyPS1b5XDj+ip3QAMLKAAAAPTGsXcnJtY9mma7t2uKKKY65meEQ80t3TYEZ22ePXVHGjFoqvzHfjmj01RPkbGJYnIv0Wo/3TEMGXfjHsV3Z9kTK5dB06zpGj4unWIjkWLcUzPzp658s8ZZwLgoopopimmOCFRV11V1TVVPDIA9PIAAAAAAjO83S41TZDLimnjexo90W/DT0/wCnikz5uUU3LdVuuIqpqiYqieuJYMmxTkWarVXFMbGbGv1WLtN2njidrmEZGp404epZWHVx42L1dueP7NUx9zHU9VTNMzErfpqiqImAB5fQAAABZ+4i5PL1e11TFmqP9asFkbip/wDyWpx3bNE+mXZ1fnZpG38eyXH0/G3R9z4dsLYAWirEV9vu1GbGh4unUVcKsq7Ndf1aOrzzHmWCpPfJmzk7X1Y0VcacSzRb4d+fjT7UeZwtY8j7HAqiOOrZHf1bXc1ex/ts6mZ4qeHu69iFgKyWUAAAAAAn25bSYy9evandp40YVHxOPz6uMR5oirzwuJDdzuFGNsbbv8nhVlXq7kz18Inkx7PpTJaOgcaMfBo5auGfj9NisdPZM386vkp4I+H12gDsuOAAAAAAAAAAKF3m6dGm7ZZlNFPC3kTGRR/1dP8Aq5S+lVb9caKcvS8yI566LlqqfqzEx7Uo7rPYi5gzX7aZifl80h1ZvzbzYo9lUTHz+StAFbrFAAAAAAdEbE5v9obJ6blTPKqqsU01T3aqfiz6YluEF3K5XZtlLuPM8+Pk1REfszET65lOluaNvfb4lu5PtiPqqbSVn7HLuUR7JkAbzSAAAAAAAAAAFZb9cvha0zBiemqu7VHg4RHrqWapLfHme6dsq7ETxjFsUWvLPxp9r0OBrLe+zwKo/VMR8/k72rdn7TPpn9MTPy+aGAK0WQA2+yWiX9oNcs6fa400TPKvVx+hRHTP3R35hktWq7tcUURtmeB4u3abVE11zsiEz3ObNdmvTtDmW/yduZpxaZj86romvydEd/j3FrPHCxrGFh2sTGtxbs2aIoopjqiHstfRuBRg48WqeP2zyyqvSWdVnZE3auL2RyQAN9oAAAAAAAAAAAAAAAAAAAAAAAAAABPRIT0SDl8BSq5gAAAAABm6F8t4HjNv2oYTN0L5bwPGbftQy2fSU74Y73o6t0ukwFyqdFX79cv5LwaZ+fdqjzRH+5aClt9GRN3a+m1x5rONRTw78zNX3w4Gst3wMCqOWYjr2/J3tW7Xh59M8kTPVs+aEAK0WQAAAAAAREzPCHRuymmxpGzuDp8REVWrUdk79c89XpmVF7E4cahtZpmLVHGmq/TVVHdpp+NPoiXQ6bao48bLl+d0ds/JC9bMidtuzG+eyPmAJohoAAAAAAAAAAADzy7FvKxbuNep5Vq7RNFcd2JjhLmzU8S5galk4N38/Hu1W6u/MTwdLqN3uYcYm2uRXTHCnJt0Xo83Jn00yiWtmPFVii9HHE7PhP8A4leqmRNN+uzPFMbfjH/qIgIEnYAAAAACwNx3bJmeJz7dK4FP7ju2TM8Tn26VwLK1Z9QjfKuNZfX6t0dgAkDgIJvu7Usfx2j2K1NLl33dqWP47R7Famlb6z+vzuhY2rPqMb5AEdSAAAAAO9A9sGnl5tij51ymPS+xG2dj5M7I2uktNx4xNOxsWmOEWbVFuI8ERDIBdFNMUxEQpuqqapmZAH18AAAAAAAARLe7a7JsPlV8P7q5br/1xT/uUYvvejHHYTU4/Ztz/wD0pUIrzWynZmUz/wAY7ZWDqrVtw6o/5T2QAIwkoAAAAADpPQPkLT/FrfswzWFoHyFp/i1v2YZq5rPo6d0Kdvekq3yKz37ZPDH0vDifzq7l2qPBERHrlZin9+N7lbR4djqoxIq8s11f0hxtY7ngaPrjl2R1uxq7b8PPonk2z1K/AVksoAAAAAB+0U1VVU00xM1VTwiI65dJaDgU6Zo2Hp9ERwsWaaJ4dc8OefLPGVC7EYsZm12l48xxpnJpqqjuxTPKn0Q6HTfVGxHg3L080fOfkhWtt+fCt2Y55+UfMATNDgAAAAAAAAAAAEN3wafGZshXkxTxuYdym7Hd5M/FmPTx8ikXSev4sZuh52HMcezY9dEeGaZ4ObEA1ssRRk0XI/3R2f8AsJ7qpfmvHrtz/tnt/wDJAEUSkAAAAAB0dsp2raT4lZ9iGya3ZTtW0nxKz7ENkuTG9DRujsU/kemr3z2iF75cr3PsbNmJ4Tk5FFuY70cav9sJorLftf4WdKxon86q7cmPBFMR65aGnLv2WBdnm2dM7Pm39CWvtM+1HPt6OH5KsAVUtEAAAAABs9l9W/sPXMfVIx4yJscrhbmrkxPGmaenhPdTn4Wb/wBB2/8AMz+FWY6GLpTLxKJos17I4+KPnDQytF4uXXFd6jbPFxz8pWZ8LN/6Dt/5mfwnws3/AKDt/wCZn8Ksxs+UGkfedUdzW8QaP931z3rM+Fm/9B2/8zP4T4Wb/wBB2/8AMz+FWYeUGkfedUdx4g0f7vrnvWZ8LN/6Dt/5mfwnws3/AKDt/wCZn8Ksw8oNI+86o7jxBo/3fXPesz4Wb/0Hb/zM/hPhZv8A0Hb/AMzP4VZh5QaR951R3HiDR/u+ue9Znws3/oO3/mZ/CfCzf+g7f+Zn8Ksw8oNI+86o7jxBo/3fXPesz4Wb/wBB2/8AMz+E+Fm/9B2/8zP4VZh5QaR951R3HiDR/u+ue9Znws3/AKDt/wCZn8J8LN/6Dt/5mfwqzDyg0j7zqjuPEGj/AHfXPeydVyvd2p5Wb2OLXui9Xd5HHjyeVVM8OPlYwORVVNUzVPHLr00xTERHFAA8voAAAA6T0LI916HgZXHj2bGt1+emJc2Ogd3d3s2xWl18ePCzyPszNP3JdqjXsv3KOWNvRP1RPWyjbYt18k7OmPo34CeIKrTfv/hdJ+vd9VKqlq79/wDC6T9e76qVVKx1j/Ma/h2QsvV38vo+PbIA4btgAAAAAJPu00aNY2qsUXaOVj435e73Jinojyzw8nFfKAbk9OjH0DI1KqnhXl3uTTP7FHN65q8yfrL1cxIsYUVTx18Pd1dqt9Ysub+ZNMcVPB39fYAO+4IAAAAAAAAACNb0e0TU/q2/5lKhF970e0TU/q2/5lKhFfa2euUfxjtlP9VPVKv5T2QAIsk4AAAAADpTQvkTA8Wt+zDMYehfImB4tb9mGYuaz6OndCnb3pKt8gDIxucNpu2TU/HLvty1zY7Tdsmp+OXfblrlN5Hpat8rhx/RU7oAGFlAAAAFm7iceJv6rlTHPTTbt0z4ZqmfVCslt7i6eGkajX3cimPNT/5dzVyiKtIUbfZt7JcXWGqadH17Pbs7YWKAs5WYAAAAAAAAADn7eHZ7DtrqtHDpv8v7URV97QJPvTiI281KI7tuf/5UIwqHSFPg5d2P+U9srbwKvCxbUz+mOyABptsAAAAWPuL+VdS/cU+0rhY+4v5V1L9xT7TsaB/MLW+eyXJ07+X3N0dsLZAWkq8c5bVZXu3aXUsrjxi5k1zTP7PKmI9HB0NqF73NgZGR/wAq1VX5omXM8zMzMzzzKGa33fNtW989iY6pWvOu3N0dr8AQhNQAAAAAE+2f3kXNI0bF02jR6LtNijk8ub8xyu/w5LO+Fm/9B2/8zP4VZjr0adz7dMUU3OCODijucmvQeBXVNVVvhnh4571mfCzf+g7f+Zn8J8LN/wCg7f8AmZ/CrMevKDSPvOqO558QaP8Ad9c96zPhZv8A0Hb/AMzP4T4Wb/0Hb/zM/hVmHlBpH3nVHceINH+76571mfCzf+g7f+Zn8J8LN/6Dt/5mfwqzDyg0j7zqjuPEGj/d9c96zPhZv/Qdv/Mz+E+Fm/8AQdv/ADM/hVmHlBpH3nVHceINH+76571mfCzf+g7f+Zn8J8LN/wCg7f8AmZ/CrMPKDSPvOqO48QaP931z3rM+Fm/9B2/8zP4T4Wb/ANB2/wDMz+FWYeUGkfedUdx4g0f7vrnvWZ8LN/6Dt/5mfwo9tvtjXtPi41mvTqcWbFc1xVF3lceMcOHRCKDFf0zm5FubdyvbTPNHcy2ND4Vi5Fy3RsmOee8Act0wAAAAAFm7icjhe1XFmfzqbdyI8E1RPrhaamtyV3kbV37UzzXMOqPLFVM/1XKszVqvwtH0xyTMde35q21ko8HPqnliJ6tnyAHecIAAAAAAAAAAlzftFm/2lr2dnceMXr9ddP1ePN6ODovLt1XcS9aonhVXRVTTPcmYczXKKrdyq3XTNNdMzFUT0xKGa311eDao9nDPYmOqVFPhXa/bwR2vkBCE1fsRMzEREzM80RC9t22zcaBokVX6IjOyeFd+eunuUeT1zKD7odmv7Q1H+2su3xxcWr8lExzV3O74Kenw8O+uFOdWNGeDT97uRwz+H5yhOs2k/Cq+6W54I/F3ACYoeAAAAAAAAAAAAAAAAAAAAAAAAAAAAE9EhPRIOXwFKrmAAAAAAGboXy3geM2/ahhM3QvlvA8Zt+1DLZ9JTvhjvejq3S6TAXKp0ULvRuzd261KePNTVRTHkophfTnvb+rlbZ6rM/rFUebmRXW2r/5aI/5fKUp1Up/+quf+PzhowFfp6AAAAAAmu5nHi9tl2SY/uMa5cjy8Kf8AcutUe4yjjrWoXPm40U+eqP6LcWTqxR4OBE8sz3fJXOs1fhZ0xyRHf8wBIUfAAAAAAAAAAAAFUb9rEU5+l5XDnrtXLf2Zif8ActdW+/WiJ0/S7ncu1x54j+ji6w0eFo65zbO2Ha1fr8HSFvn29kqnAVeswAAAAABYG47tkzPE59ulcCn9x3bJmeJz7dK4Flas+oRvlXGsvr9W6OwASBwEE33dqWP47R7Famly77u1LH8do9itTSt9Z/X53QsbVn1GN8gCOpAAAAAMjTPlLF/fUeuGOyNM+UsX99R64e7f44ebn4ZdMALnU2AAAAAAAAAAjW8/tE1P6tH8ylQi+95/aJqf1aP5lKhFfa2+t0fxjtlP9VPVK/5T2QAIsk4AAAAADpPQPkLT/FrfswzWFoHyFp/i1v2YZq5rPo6d0Kdvekq3yKT3y1zVtnVHzce3Hrn712KQ3wx//tb3fs2/Uj+tU/8Awx/KPm7+q/rs/wAZ+SHAK5WGAAAAAAlu6S3FzbnEqn/h0XKv9Ex9681I7nZj362u/YuepdyxdVY2YU/ynshXutM7c2P4x2yAJKjYAAAAAAAAAAAA5mz7cWc7IsxHCKLtVPmmYdMua9amJ1nNmOici5w+1KG63x5lqd/yTDVGfPuxu+bDAQdNgAAAAAHR2ynatpPiVn2IbJrdlO1bSfErPsQ2S5Mb0NG6OxT+R6avfPaKh35XOOv4Nnj+bi8rh4a5j7lvKY311cdrrUfNw6I/1VuJrPVswJjlmHa1Zp258TyRKDAK2WMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAL13TV8vYTBj5lV2n/8ApVP3qKXhufnjsTZ716560m1UnZmz/Ge2Eb1pjbhR/KOyUwAWIr1Wm/f/AAuk/Xu+qlVS1d+/+F0n6931UqqVjrH+Y1/DshZerv5fR8e2QBw3bAAAAAeuJanIy7NiOm5XTRHlng+xEzOyCZ2Rtl0JsZhxgbK6Zi8OE049NVUftVRyp9My278ppiimKaY4REcIh+rltW4tW6aI9kRHQp27cm5cqrn2zM9IAyMYAAAAAAAAACNb0e0TU/q2/wCZSoRfe9HtE1P6tv8AmUqEV9rZ65R/GO2U/wBVPVKv5T2QAIsk4AAAAADpTQvkTA8Wt+zDMYehfImB4tb9mGYuaz6OndCnb3pKt8gDIxucNpu2TU/HLvty1zY7Tdsmp+OXfblrlN5Hpat8rhx/RU7oAGFlAAAAFu7jPkTUPGY9mFRLd3GfImoeMx7MO/q1+YU7p7HC1k9Qq3x2rDAWWrYAAAAAAAAABQ+9Tt91L/tfyqEXSjep2+6l/wBr+VQi6otJeuXf5Vdsra0b6na/jT2QANJuAAAACx9xfyrqX7in2lcLH3F/KupfuKfadjQP5ha3z2S5Onfy+5ujthbIC0lXtRtpc7Fsjq1cTwn3Jcjz0zH3udnQG8ark7EapP8A9UR56ohz+gOttX/00R/x+cp5qnT/APPXPP8AKABE0qAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAS/dBXyNt8en59q5T/p4/cvFRO6ieG3mnx3Yu/wAupeyxNVJ24VX8p7IV9rVGzMp/jHbIAkyNAAAAAAAAAACr95OwuVezbusaLZ7L2WZqv49P53K66qY6+PXHTx9FoDSz8C1nWvs7vwn2w3cDPu4N37S38Y9kuYr1q7YuTavW67ddPTTXTMTHklINlNj9X17IommxcxsPj8fIuUzFPD9nj+dPg9C+6qKKpiaqaZmOiZjofSO2dUrVNzbcubY5Nmzr2ykF7Wy7VRst29k8u3b1bIYuk4GNpenWMDDt8ixZp5NMdc92Z78zzsoEtppiimKaY2RCKVVTVM1VTtmQB6eQAAAAAAAAAAAAAAAAAAAAAAAAAAAAnokJ6JBy+ApVcwAAAAAAzdC+W8Dxm37UMJm6F8t4HjNv2oZbPpKd8Md70dW6XSYC5VOjnnbqOG2Orcf1qv1uhnP28Ojse2uq0z13+V54ifvRTW2P/mon/l8pSrVOf/orj/j84aABAE8AAAAAAWRuKn/8nqcf/TR7UrYVBuOuxG0WbZ+ficrzV0/1W+szVqduj6d89qttZI2Z9W6OwAd5wgAAAAAAAAAAABXW/Sf/AMTp0f8A31eysVWO/e7wtaTZ65qu1T5ORH3y4+n6tmjrnw7YdjQMbdIW/j2Sq0BVqzgAAAAAFgbju2TM8Tn26VwKf3HdsmZ4nPt0rgWVqz6hG+Vcay+v1bo7ABIHAQTfd2pY/jtHsVqaXLvu7Usfx2j2K1NK31n9fndCxtWfUY3yAI6kAAAAAyNM+UsX99R64Y7I0z5Sxf31Hrh7t/jh5ufhl0wAudTYAAAAAAAAACNbz+0TU/q0fzKVCL73n9omp/Vo/mUqEV9rb63R/GO2U/1U9Ur/AJT2QAIsk4AAAAADpPQPkLT/ABa37MM1haB8haf4tb9mGauaz6OndCnb3pKt8ild9FvkbY01fPxaKvTVH3LqVHvzscnW9PyOH5+NNH2apn/c4Ws9HhYEzyTHd83c1Zq8HPiOWJ71dgK2WMAAAAAAlO6q9FrbrA480Vxco89FXD08F7ucdl8uMDaPTsuqeFNrJomqf2eMcfRxdHJ/qlcicaujknb0x9ED1st7MmivljZ0T9QBK0VAAAAAAAAAAAAflUxTTNVU8IiOMy5kybk3si5dnprrmrzzxdEbXZcYOy+pZXHhNGNXyfrTHCPTMOc0H1vuRNdq3yRM9OzuTbVK3MUXa+XZHRt7wBDUwAAAAAAdHbKdq2k+JWfYhsmt2U7VtJ8Ss+xDZLkxvQ0bo7FP5Hpq989opbfTHDbCme7iUeupdKm991HJ2qxq+qrCp9Fdbh60RtwJ3w7erE7M74SgYCt1igAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC8Nz8cNibE929cn/Uo9e26ejkbCYE8Pzpu1f/ANKo+5JtVI25s/xnthG9ap2YUfyjslKgFiK9Vpv3/wALpP17vqpVUtXfv/hdJ+vd9VKqlY6x/mNfw7IWXq7+X0fHtkAcN2wAAABs9lKOy7UaVbmOMVZlmJ8HLhrG42JjjtfpPjdv2oZ8WNt+iOeO1hyZ2Wa55p7HRAC41PgAAAAAAAAAAAI1vR7RNT+rb/mUqEX3vR7RNT+rb/mUqEV9rZ65R/GO2U/1U9Uq/lPZAAiyTgAAAAAOlNC+RMDxa37MMxh6F8iYHi1v2YZi5rPo6d0Kdvekq3yAMjG5w2m7ZNT8cu+3LXNjtN2yan45d9uWuU3kelq3yuHH9FTugAYWUAAAAW7uM+RNQ8Zj2YVEt3cZ8iah4zHsw7+rX5hTunscLWT1CrfHasMBZatgAAAAAAAAAFD71O33Uv8AtfyqEXSjep2+6l/2v5VCLqi0l65d/lV2ytrRvqdr+NPZAA0m4AAAALH3F/KupfuKfaVwsfcX8q6l+4p9p2NA/mFrfPZLk6d/L7m6O2FsgLSVeju8qOOw+qR/9dPt0qBdB7wKJubF6rTHVjzV5uf7nPiAa2x/9VE/8fnKe6pz/wDLXH/L5QAIolIAAAAAAAAAAAAAAAAAAAAAAAAAAAAACVbp447eYE9yLs//AM6l7KP3P0crbaxV8yzcn/Tw+9eCxNVI2YU/ynshX2tU7c2P4x2yAJMjQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT0SE9Eg5fAUquYAAAAAAZuhfLeB4zb9qGEzdC+W8Dxm37UMtn0lO+GO96OrdLpMBcqnRRW9iz2LbrNq4c1ym3XH2KY9cSvVTu+/G7HtLi5MRzXsWInw01T90wjetNvwsHbyTE9sfNI9V7ng5uzliY7J+SAgK5WGAAAAAAl26PJjH23xqJnhF+3ctz9nlR6aYXk5t0DN/s7W8LP4zEWL9FdXDriJjjHm4ukaZiqIqpmJiY4xMJ/qle8LHrt8k7emPogetdnwcii5yxs6J+r9AStFQAAAAAAAAAAABT2+/Ji5tHi4sTxizjRM96aqp+6IXC592/zo1HbDUsimrjRF3sVHc4URyfu4+VGdar3gYcUfqmOrh7kl1Xs+HmTX+mJ6+DvaEBXawQAAAAAFgbju2TM8Tn26VwKf3HdsmZ4nPt0rgWVqz6hG+Vcay+v1bo7ABIHAQTfd2pY/jtHsVqaXLvu7Usfx2j2K1NK31n9fndCxtWfUY3yAI6kAAAAAyNM+UsX99R64Y7I0z5Sxf31Hrh7t/jh5ufhl0wAudTYAAAAAAAAACNbz+0TU/q0fzKVCL73n9omp/Vo/mUqEV9rb63R/GO2U/1U9Ur/lPZAAiyTgAAAAAOk9A+QtP8Wt+zDNYWgfIWn+LW/Zhmrms+jp3Qp296SrfIrnfpi8vStOzIj+6v1W5n61PH/YsZGN6WFOZsTnRTTxrscm9T3uTPP/p4tHTFn7bBu0823o4fk3tEXvsc23Vz7Ong+ahgFTrUAAAAAAHRWx2pRq2zOBncrlV12opufXp5qvTEudVnbktaimvJ0K9Xw5f5exxnr6Ko83CfJKSasZcWMv7OrirjZ8fZ3fFHdZsSb2J9pTx0cPw9vf8ABaQCxldgAAAAAAAAAAAIHvq1GMbZyzp9NXCvMvRxj9ijnn08lTaUbzdZjWNqb02q+Vj4sdgtTHRPCfjT5Z4+Tgi6rNOZcZWbXVTxRwR8PrtWhoTEnFw6aZ454Z+P02ADkOsAAAAAA6O2U7VtJ8Ss+xDZNbsp2raT4lZ9iGyXJjeho3R2KfyPTV757RU+/WzNOpaZkdVdmuj7MxP+5bCut+ePNej6fl8P7rIqt/ap4/7XL1ht+Ho+5zbJ64dPV+54GkLfPtjqlUgCr1mgAAAAAMzTNK1HU5uRp+Ffypt8OX2KiauTx6OPmlne9TaT6Dz/AODKVbjL8U63qGNM89zHiuP+mqI/3LcSzRWr9nOxovVVzEzt5OVFdK6fvYWTNmmiJjg5XPPvU2k+g8/+DJ71NpPoPP8A4Muhh0fJHH95PU53lZke7jrc8+9TaT6Dz/4MnvU2k+g8/wDgy6GDyRx/eT1HlZke7jrc8+9TaT6Dz/4MnvU2k+g8/wDgy6GDyRx/eT1HlZke7jrc8+9TaT6Dz/4MnvU2k+g8/wDgy6GDyRx/eT1HlZke7jrc8+9TaT6Dz/4MnvU2k+g8/wDgy6GDyRx/eT1HlZke7jrc8+9TaT6Dz/4MnvU2k+g8/wDgy6GDyRx/eT1HlZke7jrc8+9TaT6Dz/4MnvU2k+g8/wDgy6GDyRx/eT1HlZke7jrc8+9TaT6Dz/4MnvU2k+g8/wDgy6GDyRx/eT1HlZke7jrc8+9TaT6Dz/4MnvU2k+g8/wDgy6GDyRx/eT1HlZke7jrc8+9TaT6Dz/4MnvU2k+g8/wDgy6GDyRx/eT1HlZke7jrc8+9TaT6Dz/4MnvU2k+g8/wDgy6GDyRx/eT1HlZke7jrc8+9TaT6Dz/4Mrr2DxL2Dsjp2LkWqrV2i3PLoqjhNMzVM8/nbsdLRmg7Wj7k3KKpmZjZwudpLTd3SFuLddMRETt4AB23FVpv3/wALpP17vqpVUtXfv/hdJ+vd9VKqlY6x/mNfw7IWXq7+X0fHtkAcN2wAAABudiO3DSfG7ftQ0zc7EduGk+N2/ahs4nrFG+O1gy/QV7p7HQ4C4VQAAAAAAAAAAAAI1vR7RNT+rb/mUqEX3vR7RNT+rb/mUqEV9rZ65R/GO2U/1U9Uq/lPZAAiyTgAAAAAOlNC+RMDxa37MMxh6F8iYHi1v2YZi5rPo6d0Kdvekq3yAMjG5w2m7ZNT8cu+3LXNjtN2yan45d9uWuU3kelq3yuHH9FTugAYWUAAAAW7uM+RNQ8Zj2YVEt3cZ8iah4zHsw7+rX5hTunscLWT1CrfHasMBZatgAAAAAAAAAFD71O33Uv+1/KoRdKN6nb7qX/a/lUIuqLSXrl3+VXbK2tG+p2v409kADSbgAAAAsfcX8q6l+4p9pXCx9xfyrqX7in2nY0D+YWt89kuTp38vubo7YWyAtJV7XbT2ZyNm9TsRHPXiXaY8PIng5wdPXaKbluq3Vz01RMT4Jcy5VmrHybtiv8AOt1zRV4YnghGt9vzrVe+OxNtUrnm3aN09rzAQxMAAAAB+001V1RTTEzVM8IiOt+PqiqaK6a6Z56Z4w+wS3HvU2k+g8/+DJ71NpPoPP8A4Mugsa7Tfx7V+j825RFceCY4vRPI1Sx5jbFyepBZ1ryInZNuOtzz71NpPoPP/gye9TaT6Dz/AODLoYPJHH95PU+eVmR7uOtzz71NpPoPP/gye9TaT6Dz/wCDLoYPJHH95PUeVmR7uOtzz71NpPoPP/gye9TaT6Dz/wCDLoYPJHH95PUeVmR7uOtzz71NpPoPP/gye9TaT6Dz/wCDLoYPJHH95PUeVmR7uOtzz71NpPoPP/gye9TaT6Dz/wCDLoYPJHH95PUeVmR7uOtzz71NpPoPP/gye9TaT6Dz/wCDLoYPJHH95PUeVmR7uOtzz71NpPoPP/gye9TaT6Dz/wCDLoYPJHH95PUeVmR7uOtzz71NpPoPP/gye9TaT6Dz/wCDLoYPJHH95PUeVmR7uOtzz71NpPoPP/gye9TaT6Dz/wCDLoYPJHH95PUeVmR7uOtzz71NpPoPP/gye9TaT6Dz/wCDLoYPJHH95PUeVmR7uOtzz71NpPoPP/gye9TaT6Dz/wCDLoYPJHH95PUeVmR7uOtVO6TQdW0/aa7k6hp2TjW4xaopquW5piapqp5vNxWsDv6OwKMGz9lRO2Nu1wtIZ1ede+1rjZOzYAN5ogAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABPRIT0SDl8BSq5gAAAAABm6F8t4HjNv2oYTN0L5bwPGbftQy2fSU74Y73o6t0ukwFyqdFcb9MTl6Zp2dEf3V6q1M/Wjj/ALVjo3vLwfd+xefRTTxrs0Rfp73InjPo4ubpex9vhXKObb0cPydHRN77DNt18+zp4PmoMBU61QAAAAABfu7fVI1XZHDu1Vcq7Yp7Bd7vGnmjzxwnyqCTvc5rkYGuV6Xfr4WM6IijjPNFyOjzxxjw8Hf1czYxsyKauKrg+Ps7vi4WsOHOTiTVTx08Pf3/AAXKAstWwAAAAAAAAAAADV7V6nTo+z2bqEzEVWrU9j79c81MeeYc6TM1TMzMzM88zKyd9euRdybGhWK+NNnheyOE/pTHxafJE8fLCtVc6zZsX8r7OmeCjg+Pt7vgsTVrDmxi/aVcdfD8PZ3/ABAEbSIAAAAABYG47tkzPE59ulcCn9x3bJmeJz7dK4Flas+oRvlXGsvr9W6OwASBwEE33dqWP47R7Famly77u1LH8do9itTSt9Z/X53QsbVn1GN8gCOpAAAAAMjTPlLF/fUeuGOyNM+UsX99R64e7f44ebn4ZdMALnU2AAAAAAAAAAjW8/tE1P6tH8ylQi+95/aJqf1aP5lKhFfa2+t0fxjtlP8AVT1Sv+U9kACLJOAAAAAA6T0D5C0/xa37MM1haB8haf4tb9mGauaz6OndCnb3pKt8jyzLFvKxL2NdjjbvW6rdUd6Y4S9R7mImNkvETMTthzNn413Czr+HejhcsXKrdcd+J4S8E03w6XODtVOXRTwtZ1EXI7nLjmqj1T/1IWqDNx5xsiu1Psn/AM6luYeRGTYoux7Y/wDesAarZAAAAGTpebkadqFjOxa+ResVxXRPg6p73Uxh6pqmmYqjjh8qpiqJpnil0fs5q+Nrmj2NRxZ+Lcj41HHnoqjppnwNioXYDam9s3qX5TlXMC/MRftx0x+1Hfj0+ZemFlY+biW8rFu0XrF2nlUV0zzTC0ND6Voz7PD+OOOPnulWOmNF1YF7g/BPFPy3vYB2HIAAAAAAAAES3nbRxoeiVWMe5wzsuJotcJ56Keuv7o7/AIG62l1zC0DTK87Nr6Oa3bifjXKuqmP/AHmUFtBq+Xreq3dRzK+Ny5PCmmOiinqpjvQjun9LRiWps258+rqjl7ulIdAaJnLuxduR5lPXPJ39DXgK3WKAAAAAAAA6O2U7VtJ8Ss+xDZNbsp2raT4lZ9iGyXJjeho3R2KfyPTV757RFt6uJOXsTmTTHGqxNN6PJVHH0TKUsfU8WnO03Jwq/wA2/ZqtT/1RMfe85dn7exXb5YmOp6xL32F+i5yTEuZx93rddm9XZuU8muiqaao7kxzS+FPTGzglb0Tt4QB8AAAAEl3ZZ8YG2mDVVVwovVTYq/6o4R/q4L7cw2667dym5bqmmumYqpmOmJh0ZsxqlvWdBxNRomON23HLiP0a45qo8/FOdUsqJorx5444Y7J+XShOtmLMV0X44p4J7Y+fQ2QCYoeAAAAAAAAAAAADwz8qzg4N/Mv1cLVi3VcrnvRHFANK3q4NyYo1LTb2P+3Zqi5HlieEx6Wlk6QxsWumi9XsmeJuY2j8nKpqrs07YjjWMNRpG0uharwjB1PHuVz0W6quRX9mrhLbtm3dou0+FRVExzcLXuWq7VXg1xMTz8AAyMYAAAAACtN+/wDhdJ+vd9VKqlq79/8AC6T9e76qVVKx1j/Ma/h2QsvV38vo+PbIA4btgAAADc7EduGk+N2/ahpm52I7cNJ8bt+1DZxPWKN8drBl+gr3T2OhwFwqgAAAAAAAAAAAARrej2ian9W3/MpUIvvej2ian9W3/MpUIr7Wz1yj+Mdsp/qp6pV/KeyABFknAAAAAAdKaF8iYHi1v2YZjD0L5EwPFrfswzFzWfR07oU7e9JVvkAZGNzhtN2yan45d9uWubHabtk1Pxy77ctcpvI9LVvlcOP6KndAAwsoAAAAt3cZ8iah4zHswqJbu4z5E1DxmPZh39WvzCndPY4WsnqFW+O1YYCy1bAAAAAAAAAAKH3qdvupf9r+VQi6Ub1O33Uv+1/KoRdUWkvXLv8AKrtlbWjfU7X8aeyABpNwAAAAWPuL+VdS/cU+0rhY+4v5V1L9xT7TsaB/MLW+eyXJ07+X3N0dsLZAWkq8c+7wcScLbPVLPDhFV+bseCv433uglQb78CbOu4eoUxwpybE0T9aif6VR5ka1psfaYcVx/tmOieDuSTVe/wCBmTRP+6J6uHvV8ArpYQAAAAAC/wDdznxqGxun3OPGu1b7DX3po+L6oifKkKqdyOrxby8rRbtXCL0dmsxPzojhVHljhP8A0ytZa2hsqMnCor9sRsnfH+bVWaYxZxsyuj2TO2N0/wCbAB1HMAAAAAAAAAAAABDNstvLOz2uW9OjC91x2OK7003OTNEz0R0Tx5ufyw99I3hbNZ/CmvKrwrk/o5NHJj7UcY88uf41w/tZszciKo4OHg7eBv8AivL+yi7FuZpnh4OH6pYPPHv2Mm1F3HvW71ueiu3VFUT5YejfiYmNsNGYmJ2SAPr4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE9EhPRIOXwFKrmAAAAAAGboXy3geM2/ahhM3QvlvA8Zt+1DLZ9JTvhjvejq3S6TAXKp0fN63RetV2rlMVUV0zTVE9cT0voJjaROxzVrOFc03VsrAuceVj3arfGeuInmnyxzsRP8AfVpU42vWdUop/J5lvk1z+3TzezyfNKAKi0hizi5Ndrknq9nUtvAyYysai7yx1+3rAGk2wAAAB9W667dym5bqmmumYqpqieExMdb5H0X/ALA7RW9otEovVVUxmWYijJoj53zvBPT546khc6bL65l7P6tbz8SePD4t23M81yjrif8A3pX3s/rGFrmm287Bucqirmqpn86irrpqjqlZWgtL05tr7OufPp4+fn71b6c0TVhXftKI8yerm7mwAd9wQAAAAAAABqNrtcx9n9Fu597hVX+bZt8f7yueiPB1z3oZuq6hiaXgXc7OvU2bFuONVU+qO7PeUPtrtJk7SarOTc428a3xpx7PH8ynuz356/8Aw4mmtLU4FrZTPnzxc3O7WhdFVZ13bVHmRx8/M0+bk383MvZeTcm5evVzXXVPXMvEFYzM1TtlZcRERsgAfH0AAAAABYG47tkzPE59ulcCn9x3bJmeJz7dK4Flas+oRvlXGsvr9W6OwASBwEE33dqWP47R7Famly77u1LH8do9itTSt9Z/X53QsbVn1GN8gCOpAAAAAMjTPlLF/fUeuGOyNM+UsX99R64e7f44ebn4ZdMALnU2AAAAAAAAAAjW8/tE1P6tH8ylQi+95/aJqf1aP5lKhFfa2+t0fxjtlP8AVT1Sv+U9kACLJOAAAAAA6T0D5C0/xa37MM1haB8haf4tb9mGauaz6OndCnb3pKt8gDIxojvX0f8AtTZW5et0crIwp7NRwjnmn9OPNz+SFGun6oiqmaaoiYmOExPW59270OrQdo8jEimYx657Jjz3aJ6I8nPHkQfWvB2VU5VMcfBPy7uhNtVc7bTVjVTxcMfPvaIBDUwAAAAAAEk2K2uz9m8jkU8cjBrq43MeqfTTPVPrRsZrGRcx7kXLU7Jhiv49vItzbuRtiXRuz2vaZr2J2fTsmmvhHx7c81dHemPv6Gzcy4WVk4WTRk4l+5YvUTxprt1TEwn2z+9HOx6abOsYtOZRHN2W1woueWOifQnGBrTZuRFOTHgzyxxd8ITn6r3bczVjT4Uck8fdK3BGtK262Z1CIinUaMauf0MmOxzHln4vpSDHycfJo5ePftXqe7briqPQktnJs342264ndKN3sa9YnZcpmN8PUBnYAY+Zm4WHTy8vLx8enu3bkUx6Ub1feFs1gRMW8qvNuR+jj0cY+1PCPNLWv5ljHjbdriN8tixiX787LVEzuhLEc2v2w0vZ21NFyuMjNmPiY1urn8NU/owrnaPeRrOo01WdPpp02xPNxonlXJj63V5IjwoVcrquV1V3Kqq66p41VVTxmZRfSOtNERNGJG2eWflHelGj9V65mK8qdkckfOe5sdo9c1DXtQnMz7vKnooop5qbcdyIawEJuXK7tU11ztmUzt26bdMUURsiAB4ewAAAAAAAHR2ynatpPiVn2IbJrdlO1bSfErPsQ2S5Mb0NG6OxT+R6avfPaAMzCobehps6btllxFPC3kzGRR/1dP8AqipGFvb7NJ90aRjatbp414tfIuTHzKuifJVw+0qFVem8X7tm10+yeGPj9eBaOhcr7zhUVe2OCfh9OEAcl1QAAABYO53aKMHUK9FyrnCxl1cqzMzzU3ejh/1R6Yjuq+ftNVVFUVUzNNUTxiYnhMS28HLrw79N6j2dce2Grm4lGXYqs1+3qnldPiH7ttrbevYEYmXXFOpWKfjxP/Fp+fHf7v8A5TBa+LlW8q1F23O2JVXlY1zFuzauRsmABsNcAAAAAAAABr9odWxNE0m9qOZVwotx8WmJ566uqmO/Lxcrpt0zXVOyIe6KKrlUUUxtmUL30a7GPp1rQ7Ff5XJ4XL/DqtxPNHlmPR31RszWtRydW1TI1HLq5V29Vyp7lMdUR3ojmYaqdK5852TVd9nFG7/OFaei8GMLGpte3jnf/nANzpG1Gv6VyYw9UyKaI6LddXLo+zVxiPI0w0rV65aq8K3VMTzcDduWrd2nwblMTHPwrJ0jerl0cKNV021ep667FU0T5p4xPnhL9J292Z1Hk0+7vclyf0MmnkcP+r830qHHcxtZc6zwVTFUc/fDiZOreFe4aYmmebul07Zu2r9uLlm5Rcoq6KqKomJ8r7c1adqWoadc7JgZuRjVdfY7k08fDw6Us0neZtBicKMynHz6I6Zrp5Ffnp5vRKQY2tePXwXqZp647+pwMnVXIo4bNUVdU93WukQ/ZbeBpmuZtnA9y5ONl3eMU0zEV0zwjjPxo70T0xCYJFjZVnKo8OzVthHsnFvYtfgXqdkgDYa6tN+/+F0n6931UqqWrv3/AMLpP17vqpVUrHWP8xr+HZCy9Xfy+j49sgDhu2AAAANzsR24aT43b9qGmbnYjtw0nxu37UNnE9Yo3x2sGX6CvdPY6HAXCqAAAAAAAAAAAABGt6PaJqf1bf8AMpUIvvej2ian9W3/ADKVCK+1s9co/jHbKf6qeqVfynsgARZJwAAAAAHSmhfImB4tb9mGYw9C+RMDxa37MMxc1n0dO6FO3vSVb5AGRjc4bTdsmp+OXfblrmx2m7ZNT8cu+3LXKbyPS1b5XDj+ip3QAMLKAAAALd3GfImoeMx7MKiW7uM+RNQ8Zj2Yd/Vr8wp3T2OFrJ6hVvjtWGAstWwAAAAAAAAACh96nb7qX/a/lUIulG9Tt91L/tfyqEXVFpL1y7/KrtlbWjfU7X8aeyABpNwAAAAWPuL+VdS/cU+0rhY+4v5V1L9xT7TsaB/MLW+eyXJ07+X3N0dsLZAWkq8Q3e/pvu7ZGvIop43MO5F2OHTyfzavXx8iZPLNx7WXh3sW/TyrV63VbrjuxMcJa2Zjxk2K7U+2Gzh5E41+i7HslzIMrVsK7pup5OBe/vMe7Vbnv8J6fL0sVUFVM0VTTVxwtymqKoiqOKQB5fQAAAGTpebf03UbGdi1cm9YriumfB1T3p6HRGgapjazpOPqOLP5O9Txmnroq66Z78S5uS7dvtXVs/qM4+VVM6dkVR2WOnsdXVXH397wJDq/pSMO99ncnzKuqeXvR/T+i5zLP2luPPp645O5eQ+bVyi7apu2q6a6K4iqmqmeMTE9ExL6WTE7VczwAAAAAAAAAADG1TOx9N06/n5VXJs2KJrqnwdUd+ehkqi3u7UU52V/YWDc449irjkVUzzV3I/R8EevwOdpTSFODjzcnj9kcsuhozAqzsiLccXtnkhB9Zz72qark6hkT+Uv3JrmOPR3I8ERwjyMQFUV1TXVNVXHK1aaYopimnihkYOdmYN3suFl38av51q5NM+hK9I3k7RYUU0ZNVjOtx/zaOFXD61PD08UMGxj5uRjTttVzHx+TXyMLHyI/wBWiJ/zlXHpG9DRcnhTqGPkYNc9NUR2SiPLHP6Eu0vWdK1SnlafqGPkc3Hk0Vxyo8NPTDm5+0VVUVRVTVNNUTxiYnhMO/ja15Vvgu0xVHRPd1ODk6rY1zhtVTTPTHf1unxQWkbbbS6bwptalcv24/QyPykeeeePJKX6RvWonhRq2lzT3bmNVx/01f1d/G1mwr3BXM0zz8XTH0cHJ1azbXDREVRzcfRKzhiaRqGPqum2dQxJrmxep5VHLp5M9PDo8jLSCiqK6YqpnbEuBVTNFU01RsmAB6eQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAnokJ6JBy+ApVcwAAAAAAzdC+W8Dxm37UMJm6F8t4HjNv2oZbPpKd8Md70dW6XSYC5VOgAI9vE0ada2Wyce3Tysiz+Wsd2aqeryxxjyqAdQKJ3naF/Yu0lyq1RycTL43rPDoiZn41Pkn0TCGa14O2KcqmOaflPy6Ey1Vztk1YtU88fOPn0oqAhCaAAAAAADa7M6/qGz+fGVg3OaeEXLVX5lyO5Mff1NUMlq7Xariuidkw8XLVF2iaK42xLoDZLa3StorMRYuRZy4jjXjXJ+NHfj50d+PLwSBzDauV2rlNy3XVRXTPGmqmeExPdiU42c3lavgU02dSt06jZjm5VU8m7EfW6/LHHvpto7WmiqIoyo2TyxxfGO5C9Iar10zNeLO2OSeP4T3rmEW0jb/ZnUIiKs2cO5P6GTTyOH/V+b6UkxsnGyrfZMbItX6PnW64qj0JRYy7GRG21XE7pRi/i3rE7LtExvh6gNhrg+L121Zom5euUW6I6aq6oiI86P6ttxszp0TFepUZFyP0Mb8pM+WObzyw3smzYjbdqiN8s1nHu352W6ZndCRtPtPtJpez2L2XOvx2SY427FHPcr8EdUd+eZXO0W8/UMqKrOj41OFbnm7LXwruT4I6I9KBZWRfyr9d/JvXL12ueNVdyqaqpnvzKMaQ1ptURNGLHhTyzxfVJtH6sXa5irJnwY5I4/o3G1+0+obSZnZMmrsePRP5HHpn4tHf7899ogQe9euX65uXJ2zKbWbNuzRFu3GyIAGJkAAAAAAAAWBuO7ZMzxOfbpXAp/cd2yZnic+3SuBZWrPqEb5VxrL6/VujsAEgcBBN93alj+O0exWppcu+7tSx/HaPYrU0rfWf1+d0LG1Z9RjfIAjqQAAAADI0z5Sxf31HrhjsjTPlLF/fUeuHu3+OHm5+GXTAC51NgAAAAAAAAAI1vP7RNT+rR/MpUIvvef2ian9Wj+ZSoRX2tvrdH8Y7ZT/VT1Sv8AlPZAAiyTgAAAAAOk9A+QtP8AFrfswzWFoHyFp/i1v2YZq5rPo6d0Kdvekq3yAMjGIpvO2d/t3QZu49HKzcTjcs8I564/So8vDm78QlYwZOPRk2qrVfFLPjZFeNdpu0ccOXxPd7Wy86bnzrOFb/8Ah5NX5WmmOa1cn7p9fHvIEqbNxLmHeqs3OOOvnWth5dvLs03bfFPVzADVbIAAAAAAAA+qKqqKuVRVNMx1xPCXyPozKNV1S3HC3qWZTHev1R978uanqVyOFzUMuuO5Veqn72IPf2tzZs8Kel4+yt7dvgw/ZmZmZmZmZ65fgMb2AAAAAAAAAAAAAA6O2U7VtJ8Ss+xDZNbsp2raT4lZ9iGyXJjeho3R2KfyPTV757QBmYWNquFZ1LTcjAyI42r9uaKu9xjp8MdLnDUsO9p+oZGDkU8m7YuTbq8MT0umFV76tCmi9Z1/Ht/Fr4WsnhHRP6NXm5vJCL60YP21iL9McNHHu+nek+rGd9jfmxVPBVxb/r3KzAV6n4AAAAAD2wcrIwcu1l4l6qzftVcqiumeeJXTsJtxia9RRh5k0Y2pRHDk8eFN3v09/vetSD9pmaaoqpmYmJ4xMdTqaM0re0fXto4aZ445e6XN0loqzn0bK+CqOKf89jp8U9slvJzcCmjE1mivNx45ovRP5WmO/wAfzvLz99aGia5pWs2eyadm2r/NxmiJ4V0+GmeeFh4Gl8bNj/Tq2Vck8f1+Cvc7ROThT/qU7Y5Y4vp8WxAdNzQAAAAJnhEzM8IhEdqNv9F0emq1jXI1DLjmi3Zq40Uz+1V0eSOMtfJyrONR4d2qIhsY+Leya/AtUzMpHq+pYWk4FzNz79NmzRHPM9Mz3IjrnvKL242oytpNR7JVFVrDtTMWLPHoj50/tT/4Ye0u0Gp7QZnujUL3GKf7u1TzUW470ff0tUr/AEzp2rO/0rfBR1zv7k+0NoOnC/1bnDX1Ru7wBHUgAAAAAfsRMzERHGZ6IBYu5DS5u6nl6vcp+Jj0ditzPzqunzRH+pbTR7DaP/YezOLhVU8L809kv/Xq55jyc0eRvFraHw/umHRbnj453z3cSrNMZf3vLruRxcUbo/zaAOo5itN+/wDhdJ+vd9VKqlq79/8AC6T9e76qVVKx1j/Ma/h2QsvV38vo+PbIA4btgAAADc7EduGk+N2/ahpm52I7cNJ8bt+1DZxPWKN8drBl+gr3T2OhwFwqgAAAAAAAAAAAARrej2ian9W3/MpUIvvej2ian9W3/MpUIr7Wz1yj+Mdsp/qp6pV/KeyABFknAAAAAAdKaF8iYHi1v2YZjD0L5EwPFrfswzFzWfR07oU7e9JVvkAZGNzhtN2yan45d9uWubHabtk1Pxy77ctcpvI9LVvlcOP6KndAAwsoAAAAt3cZ8iah4zHswqJbu4z5E1DxmPZh39WvzCndPY4WsnqFW+O1YYCy1bAAAAAAAAAAKH3qdvupf9r+VQi6Ub1O33Uv+1/KoRdUWkvXLv8AKrtlbWjfU7X8aeyABpNwAAAAWPuL+VdS/cU+0rhY+4v5V1L9xT7TsaB/MLW+eyXJ07+X3N0dsLZAWkq8ABUu+vRuwahj63Zo+JkR2K9MR0VxHNPljm/6Vcujtp9Jta3oeVpt3hHZaPiVT+jXHPTPnc7ZePexMq7i5FE271quaK6Z6YmJ4SrnWXB+75P2tMebXw/H296xNW877fG+yqnzqOD4ezueQCNpEAAAAAAmu77bi9oU06fqHLvadM/FmOeqz347sd7zd+5cLKxs3Ft5WJeovWbkcaK6J4xLmVudmNpNV2eyeyYN/wDJVTxuWK+eivwx1T3450n0PrDXiRFq/wANHs5Y74RrS+r9GVM3bPBX7eSe6XQ4iGzO8HRNWpptZVyNOyp5povVfEme9X0efgl1MxVTFVMxMTHGJjrTvGy7OTR4dqqJhBsjFvY1XgXaZiX6A2GuAAAADX61rWl6NY7NqWZasRw400zPGqrwUxzyqzbLeLmanTXh6RTXhYlXNVcmfytceT82PBz99zNIaWxsGnz521ckcf0+LpYGicnOq8yNlPLPF9W/3k7c28O3d0jRr0VZVXxb1+iea1HXTTPzu/1eHoqSeee6/BXGkdI3c+79pc+EcixtH6PtYNr7O38Z5QBz28AAAAPfAxrubnWMOxTxu37lNuiO/M8IeCfbmNGnL1y5q12njZw6eFHHruVRw9EcfPDcwMWcvIosx7Z6vb1NTOyoxceu9Psjr9nWtrTcS1gafj4VmPydi1Tbp8ERwZALdppimIiOKFS1VTVMzPGAPr4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE9EhPRIOXwFKrmAAAAAAGboXy3geM2/ahhM3QvlvA8Zt+1DLZ9JTvhjvejq3S6TAXKp0AAaDb3QKdoNn7uNREe6rX5THqn58dXgno83cb8Yr9mi/bqt1xwTwMti9XYuU3KJ4Y4XMNyiu3cqt3KZprpmaaqZjhMTHTD5WTvg2XmzfnaHCt/krkxGVTEfm1dEV+Ceie/4VbKnz8KvCv1Wa/Zxc8cq1cDNozbEXaPbx808gA0m4AAAAAAAAPq3XXbqiq3XVRVHXTPCXyPvENha1rWbUcLWr59Efs5Ncfe/a9d1u5HCvWNRqjuTk1z97XDL9vd2bPCnpYvsLW3b4MdD0vXr1+rlXrtdyru11TM+l5gxTMzwyyxERwQAPgAAAAAAAAAAAAsDcd2yZnic+3SuBT+47tkzPE59ulcCytWfUI3yrjWX1+rdHYAJA4CCb7u1LH8do9itTS5d93alj+O0exWppW+s/r87oWNqz6jG+QBHUgAAAAGRpnyli/vqPXDHZGmfKWL++o9cPdv8cPNz8MumAFzqbAAAAAAAAAARref2ian9Wj+ZSoRfe8/tE1P6tH8ylQivtbfW6P4x2yn+qnqlf8p7IAEWScAAAAAB0noHyFp/i1v2YZrC0D5C0/xa37MM1c1n0dO6FO3vSVb5AGRjAAeGfiY+fhXcPLtRdsXqZprpnrhQu22zWTs3qs2K4quYtyZqx73D86nuT3463QLA1/SMLW9MuYGdb5VuvniqPzqKuqqJ6phxtM6Jp0ha4OCuOKflPN2OxofStWBd4eGieOPnHP2ubhudrdnc7Z3UZxcqma7VXGbN6I+Lcp+6e7DTKzu2q7Nc27kbJhZVq7Reoiu3O2JAGJkAAAAAAAAAAAAAAAAB74OLfzcmjGxrc3LtXHhEdyI4zPgiImXg+7J2bfY+bY27AB8fQAAAAAHR2ynatpPiVn2IbJrdlO1bSfErPsQ2S5Mb0NG6OxT+R6avfPaAMzCMbVMHH1LTr+BlU8qzfomiqPvjvx0skeaqYqiaauKX2mqaZiqOOHN+0OlZOi6vkadlR8e1V8WrhzV09VUeGGvXhvP2X/t3S/deJRx1DFpmaIiOe5R0zR4euO/4VITExMxMcJjphVmmNG1YGRNP+2eGJ5votHRGkac+xFX+6OCd/wBX4A5TqAAAAAAD7s3bti7Tds3K7dymeNNVFUxMT3ph8D7E7OGCY28EpZo+8HaXT4iivKpzbcfo5NPKn7UcJ88pPhb2LfCIzdGqpnrqs3uPomPvVYOpY03nWI2U3J2c/D2uXf0Lg3521W4283B2Lns70Nna4+PY1C3Pcm1TPqqelW83ZqOiM2rwWY/qpQb0a0Z2z2dDSnVjB2+3pXBkb1dGpifc+n59yerlxRTE+mWk1HetqNyJjA0zHx/2rtc3J9HBXQwXdYtIXI2eHs3RDPa1ewLc7fA275luda2n13WImnO1G9Xan/hUTyKPsxzT5WmBx7t65dq8K5VMzz8Lr2rVu1T4NumIjm4ABjewAAAAABMt0+gzq20NOZeo44uDMXKuMc1Vf6Mefn8nfRPDxr+Zl2sXGtzcvXa4oopjpmZdB7IaJZ2f0Kzp9vhVcj416uP0656Z+6O9EJBq9o6cvJ+0qjzaOHfPshwdYNIxi4/gUz51XBuj2y24CylbgAK037/4XSfr3fVSqpau/f8Awuk/Xu+qlVSsdY/zGv4dkLL1d/L6Pj2yAOG7YAAAA3OxHbhpPjdv2oaZudiO3DSfG7ftQ2cT1ijfHawZfoK909jocBcKoAAAAAAAAAAAAEa3o9omp/Vt/wAylQi+96PaJqf1bf8AMpUIr7Wz1yj+Mdsp/qp6pV/KeyABFknAAAAAAdKaF8iYHi1v2YZjD0L5EwPFrfswzFzWfR07oU7e9JVvkAZGNzhtN2yan45d9uWubHabtk1Pxy77ctcpvI9LVvlcOP6KndAAwsoAAAAt3cZ8iah4zHswqJbu4z5E1DxmPZh39WvzCndPY4WsnqFW+O1YYCy1bAAAAAAAAAAKH3qdvupf9r+VQi6Ub1O33Uv+1/KoRdUWkvXLv8qu2VtaN9Ttfxp7IAGk3AAAABY+4v5V1L9xT7SuFj7i/lXUv3FPtOxoH8wtb57JcnTv5fc3R2wtkBaSrwABVm+bZyablO0OJR8WrhRlREdE9FNf3T5FpvLLx7OXi3cXItxcs3aJorpnomJ6WjpLBpzseq1V8J5Jb2js6rCyIu0/HnhzIN5trs/f2d1qvEr5VWPX8fHuT+nR/WOif/LRqovWa7NybdcbJhalm9RetxconbEgDEyAAAAAADbaNtHrekcI0/Ub9qiP+HM8qj7M8YakZLd2u1V4VEzE83A8XLVF2nwa4iY51iabvV1K1EU5+m42Tw/StVTbn749TeYu9XRq+bI0/OtT+xFNceuFPjr2tYtIW42eHt3xH/rkXdXsC5O3wNm6Z/8AF1xvN2amOP8A82O92GP6vK9vR2eoj4mPqFye9apj11KZGxOtGdPJ0MEasYMcvStPN3sWoiYwtGrq7lV69EeiIn1o3q28TaXOpqot37WFRPVj0cJ4fWnjPm4IgNK/pvPvxsquTEc3B2N2xoTBsztptxM8/D2vTIv3si9VeyL1y9dq56q7lU1VT4Zl5g5UzMztl1IiIjZAA+AAAAAAD7s2rl69RZtUVV3K6opppiOeZnmiHQuxujUaDs/j6fHCbsRy71UfpXJ6f6eCIV9uc2bm/lTtBl2/yVmZpxomPzq+urwR0eHwLZT3VfR02rc5NccNXFu5fj2b0E1n0jF25GNRPBTx7/oAJaigAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT0SE9Eg5fAUquYAAAAAAZuhfLeB4zb9qGEzdC+W8Dxm37UMtn0lO+GO96OrdLpMBcqnQAAAHnk2bWTj3Me/bpuWrlM010VRxiqJ6YlRG32y97ZzVJ7HTVXgXpmce5PV+xPfj0+dfbC1rTMPWNNu4Gda5dm5HlpnqmJ6phyNMaKp0hZ2RwVxxT8tzraI0pVgXdvHTPHHz3ubBu9r9nM3ZzUpxsiJrsV8ZsXojmuU/dMdcNIrG9Zrs1zbuRsmFmWb1F6iLludsSAMTIAAAAAAAAAAAAAAAAA96MS/Vg3M2Lc+57dym3VX1cqqJmI81MvUUzPE+TVEcbwAeX0AAAAABYG47tkzPE59ulcCn9x3bJmeJz7dK4Flas+oRvlXGsvr9W6OwASBwEE33dqWP47R7Famly77u1LH8do9itTSt9Z/X53QsbVn1GN8gCOpAAAAAMjTPlLF/fUeuGOyNM+UsX99R64e7f44ebn4ZdMALnU2AAAAAAAAAAjW8/tE1P6tH8ylQi+95/aJqf1aP5lKhFfa2+t0fxjtlP9VPVK/5T2QAIsk4AAAAADpPQPkLT/FrfswzWFoHyFp/i1v2YZq5rPo6d0Kdvekq3yAMjGAAAAwta0vB1jT7mDn2Yu2a/PTPVMT1SpPbXY7P2cvTdjlZOBVPxL9Mfm96qOqfRPoXy+b1u3etVWrtum5brjhVTVHGJjuTDkaU0PZ0hTw8FUcU9/LDraL0vewKuDhpnjju5Jcwi0dst2sVTXm7OzwmeerErq5v+iZ9U+fqVnlY9/EyK8fKs3LN6ieFVFdMxMeSVd52jsjBr8G7Tun2SsPB0jYzaPCtTvj2w8gGg3QAAAAAAAAAAAB9W6K7lym3boqrrqmIpppjjMzPVD1wMPKz8u3iYViu/fuTwpoojjM/+91cm7/YexoUU5+oci/qMxzcOemz3o7s9/zd/qaM0Vez7myjgp9s8n15nN0lpSzgUba+Gr2Ry/R4bFbJRoOz2Zm51FM6jfxq+MdPYaeTPxY7/d83hpt0vq3yVl/uK/ZlzQ62smLbxabNq3HBET8nJ1cyrmVVeu3J4ZmPmAIqlAAAAAADo7ZTtW0nxKz7ENk1uynatpPiVn2IbJcmN6GjdHYp/I9NXvntAGZhAAFV72NkJt13NoNMtcaKvjZdqmPzZ/5kR3O75+6tR+VRFVM01RExMcJieto6QwLedZm1X8J5Jb2j8+5g3ou0fGOWHMAn28nYirS669V0m1NWBVPG7apjjNie79X1ICq7Mw7uHdm1djh7eeFn4eZazLUXbU8HZzSANRsgAAAAAAAAAAAAAAAAAAAALB3X7GTqF23rOqWuGFRPGxaqj++mOuf2Y9PgbeFh3cy9Fq3HDPVHLLVzcy1h2pu3J4O3mbzdLspODYjXdQtcMm9T/wDHoqjnt0T+l4Z9XhWGC1MHDt4dmLNv2dc8qrs3MuZl6btz29UcgA22oAArTfv/AIXSfr3fVSqpau/f/C6T9e76qVVKx1j/ADGv4dkLL1d/L6Pj2yAOG7YAAAA3OxHbhpPjdv2oaZudiO3DSfG7ftQ2cT1ijfHawZfoK909jocBcKoAAAAAAAAAAAAEa3o9omp/Vt/zKVCL73o9omp/Vt/zKVCK+1s9co/jHbKf6qeqVfynsgARZJwAAAAAHSmhfImB4tb9mGYw9C+RMDxa37MMxc1n0dO6FO3vSVb5AGRjc4bTdsmp+OXfblrmx2m7ZNT8cu+3LXKbyPS1b5XDj+ip3QAMLKAAAALd3GfImoeMx7MKiW7uM+RNQ8Zj2Yd/Vr8wp3T2OFrJ6hVvjtWGAstWwAAAAAAAAACh96nb7qX/AGv5VCLpRvU7fdS/7X8qhF1RaS9cu/yq7ZW1o31O1/GnsgAaTcAAAAFj7i/lXUv3FPtK4WPuL+VdS/cU+07GgfzC1vnslydO/l9zdHbC2QFpKvAAAAafa7QMXaLSK8K/wouR8azd4c9uvu+DuwoLV9Oy9K1C7gZtqbd+1PCY6p7kx3Yl0qje3WymNtJg83JtZ1qJ7Be/21d71euOae0N99p+1tfjjrjk38iRaC0z9zq+yu/gnqnl3cqgxkalhZWnZt3DzbNVm/anhVRVH/vGO+x1dVUzTMxMbJhYdNUVRExO2AB5fQAAAAAAAAAAAAAAAAAAABvNi9nsjaPWKMS3yqMejhVkXYj8yn+s9Ef+GFoOk5ut6lbwMG3y7lc89U/m0U9dUz1RC/NltCw9n9KowcWOVP5127MfGuVdcz90dTvaD0RVnXPDrj/Tjj5+bvcLTel6cG34FE+fPFzc/cz8LFsYWJaxMW3Tbs2aYoopjqiHsCy4iKY2QreZmqdsgD6+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABPRIT0SDl8BSq5gAAAAABm6F8t4HjNv2oYTN0L5bwPGbftQy2fSU74Y73o6t0ukwFyqdAAAAAAYWtaXhaxp9zBz7MXbNfnpnqmJ6pUftpsln7N5PKrib+FXVwtZFMc3gq7k+vqX68srHsZWPXj5Nqi9ZuRya6K6eMVR34cfSuh7WkKNs8FccU/KeZ19FaXu4FWyOGieOPnHO5kFjbabuL+NNzN0CKr9j86rGmeNdH1fnR3unwq6qpqoqmmqmaaonhMTHCYlXOZg38KvwL1OzsncsTDzrGZR4dqdvbG9+ANNtgAAAAAAAAAAAAMzR9MzdXz7eFgWKr16vqjopjuzPVD1RRVXVFNMbZl5rrpopmqqdkQaLpuXq+pWsDCtzXeuzwjuUx1zPciFj7xtGxdB3dYenYscYpzKJuV8Oe5XNFfGqf/ejglexGy2Js1gcmnk3s27Ednv8On9mnuU+v1affb2o2PHaPYrTS3ob7jo27cu/jmnojk70OuaY++6RtW7f4Inpnl7lMgISmYAAAAACwNx3bJmeJz7dK4FP7ju2TM8Tn26VwLK1Z9QjfKuNZfX6t0dgAkDgIJvu7Usfx2j2K1NLl33dqWP47R7Famlb6z+vzuhY2rPqMb5AEdSAAAAAZGmfKWL++o9cMdkaZ8pYv76j1w92/wAcPNz8MumAFzqbAAAAAAAAAARref2ian9Wj+ZSoRfe8/tE1P6tH8ylQivtbfW6P4x2yn+qnqlf8p7IAEWScAAAAAB0noHyFp/i1v2YZrC0D5C0/wAWt+zDNXNZ9HTuhTt70lW+QBkYwAAAAABq9f2f0nXbPY9SxKLtURwpuRzV0eCqOfydDaDxctUXaZorjbE8r3buV2qoronZMcin9o92OpYnKvaPejOsxz9jq4U3Yj1VejwILmYmVhX5sZePdx7sdNFyiaZ80ummNqOn4Oo2ew5+JYybfVTcoirh4OPQi+bqrYuedYq8GeTjjvjrSfD1pv2/Nv0+FHLxT3djmgXPq+7HQsqaq8G7kYFc9EUzy6PNPP6UU1LddrtjjVh5GJmUx0RypoqnyTzelG8jV7Ps/wCzwo5uH69SRY+sGDe/3+DPPwdfF1oGN5m7I7S4nHs2i5cxHTNujskf6eLU5GLlY88MjGvWZ7ldE0+tyrmPdtfjpmN8bHVt37V38FUTuna8QGFlB+xEzPCI4yzcTSNWy+HuXTM2/wAeu3Yqqj0Q900VVzspja81V00RtqnYwRKtP3f7U5cxM4FONRP6V+5FPDyRxn0JTpG6m3TMV6rqlVfdt41PD/VV/R0sfQudf/DbmN/B2udf0zhWPxXIndw9iraYmqqKaYmZmeERHWmWzG7zWdUqovZ1M6dizz8bkflKo71PV5eHlWtoWzWiaLETp+Bat3P+bVHKrn/qnnjyNukuDqpRTMVZNW3mji6ePsRvN1qrqiacanZzzx9HF2tTs3s9pegY3YdPx4prmPj3q+e5X4Z+7obYEstWqLVMUURsiORFLt2u7VNdc7Zli6xPJ0jMnuY9c/6Zc0ujtqbnYdmdUuz+jh3Z/wBEucUJ1vn/AFLUc0/JNNUo/wBO7PPAAh6XAAAAAAOj9mI5Ozel09zDtR/ohsWLpFvsWlYdqeaaLFFPmphlLmsx4NumOaFO3p8K5VPPIAyMYAAAD8qppqpmmqImmY4TExzSqreBu+rszc1TQLU1Wueq7i0xz0d2aO7He6urvWsNHP0dZzrfgXY3T7Yb2BpC9g3PDtzvj2S5gnmnuPxdu22wWDrfLzMGaMPUJ55mI+Jdn9qI6J78elT+s6VqGj5lWJqONXYux0cY5qo7sT0THgVxpLRGRgVefG2n2THF9Fi6O0tYz6fMnZV7Y9v1YQDlOmAAAAAAAAAAAAAAAAD2w8bIzMmjGxbFy9euTwpoop4zK19ht3dnBm3qGu00X8mPjUY/TRbn9r50+jwujo/Rl/Pr8G3HB7Z9kf5yNDP0lYwaPCuTw+yPbP8AnK0e7vYO5qNVvVNZtVW8OOFVqxPNVe789yn1+Bb1FNNFFNFFMU00xwppiOERHch+iydHaNs4FrwLfH7Z9sq40jpG9n3PDucXsj2QAOg54AAACtN+/wDhdJ+vd9VKqlq79/8AC6T9e76qVVKx1j/Ma/h2QsvV38vo+PbIA4btgAAADc7EduGk+N2/ahpm52I7cNJ8bt+1DZxPWKN8drBl+gr3T2OhwFwqgAAAAAAAAAAAARrej2ian9W3/MpUIvvej2ian9W3/MpUIr7Wz1yj+Mdsp/qp6pV/KeyABFknAAAAAAdKaF8iYHi1v2YZjD0L5EwPFrfswzFzWfR07oU7e9JVvkAZGNzhtN2yan45d9uWubHabtk1Pxy77ctcpvI9LVvlcOP6KndAAwsoAAAAt3cZ8iah4zHswqJbu4z5E1DxmPZh39WvzCndPY4WsnqFW+O1YYCy1bAAAAAAAAAAKH3qdvupf9r+VQi6Ub1O33Uv+1/KoRdUWkvXLv8AKrtlbWjfU7X8aeyABpNwAAAAWPuL+VdS/cU+0rhY+4v5V1L9xT7TsaB/MLW+eyXJ07+X3N0dsLZAWkq8AAAAABH9tNlcHaTDim7ws5duPyOREc8d6e7T3lH6/o2oaHn1YeoWZt1xz01Rz01x3aZ64dIMHXNI0/WsGrD1HHpu25/Nn9Kie7TPVLgaX0Fbzv8AUo82vqnf3u/ojTlzCn7Ovho643dzm0S/bLYTUtCmvKxuVm4Ec/ZKafj24/aj745vAiCvMnFu4tf2d2nZKwMbKtZNH2lqrbAA12cAAAAAAAAAAAAAAAAbLZ3RNQ17UKcPAtcqemuufzbdPdqluNjNidS2grpyLkVYmn8ee9VHPXHcojr8PR6lz6FpGBomBTh6fYi1bjnqnpqrnu1T1ykWiNAXcyYuXfNo653d6P6W09aw4m3a86vqjf3MTZLZzB2c073Nixy7tfCb1+qPjXJ+6O5DdAsSzZos0RbtxsiFe3btd6ua7k7ZkAZGMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJ6JCegHL4n/wVa5+v6d9qv8J8FWufr+nfar/CqrxJn+6laXjrA97CACf/AAVa5+v6d9qv8J8FWufr+nfar/CeJM/3UnjrA97CACf/AAVa5+v6d9qv8J8FWufr+nfar/CeJM/3UnjrA97CACf/AAVa5+v6d9qv8J8FWufr+nfar/CeJM/3UnjrA97CAM3QvlvA8Zt+1CZfBVrn6/p32q/wsjTd2Os42o42TXnafNNq7TXMRVXxmImJ+ayWtC58VxM2p43i5pnBmiYi5HEtkBaKsAAAAAAAABHdqtjtH2gpm5fte58vhzZFqIiqfrR0VeXn76RDDfx7WRRNF2nbHOy2L9yxXFdurZKiNpdhdd0Wa7kWJzcWOfs1iOPCP2qemPV30WdQI/r+x2ga1yq8nCptX6ufs1j4lfHuz1T5YlEs7VSJ87Fq+E9/f0pbha1THm5NPxju7uhz+LE1rdZqFmaq9KzbWVT1W7scivwceeJ9CIars7rmlzPu7S8m1THTXyOVR9qOMelF8nRmXjeltzEcvHHTHAk2NpPEyfR1xM8nFPRLVANBvAAAAAPbFxsnLuxaxce7fuT0UW6JqnzQ+xEzOyCZiI2y8RMtE3c7Q6hNNeTbo0+zPTVenjXw71Mc/n4LB2c2A0LSJpu3bU5+THP2S/ETTE96no8/GXbw9X8zJnbNPgxyzwdXG4uZp/Dxo2RV4U8kd/ErXZLYjVteqovVUTh4U8837lP50fsx1+Ho7649m9A03QML3Np9nkzP95dq567k92Z+7obQTfRuhcfAjbTw1cs/LkQnSWmcjPnZVwU8kfPlEF329qNjx2j2K06RzeFoGVtHodvAw7tm1cpyKbszdmYjhFNUdUT3WxpS1Xdw7lFEbZmGDRd2i1l26652REqCE/8Agq1z9f077Vf4T4Ktc/X9O+1X+FXPiTP91Kw/HWB72EAE/wDgq1z9f077Vf4T4Ktc/X9O+1X+E8SZ/upPHWB72EAE/wDgq1z9f077Vf4T4Ktc/X9O+1X+E8SZ/upPHWB72EAE/wDgq1z9f077Vf4T4Ktc/X9O+1X+E8SZ/upPHWB72H7uO7ZMzxOfbpXAgm7rYzUdm9WyMvMycS7RcsTbiLU1TMTyonriO4nad6Ax7uPhxRdjZO2UG09kW8jMmu1O2NkADtOMgm+7tSx/HaPYrU0vzeHoGVtHolrBw7tm1coyKbszdmYjhFNUdUTz86BfBVrn6/p32q/woLrBozKyMya7VEzGyE40BpLFx8SKLtcRO2UAE/8Agq1z9f077Vf4T4Ktc/X9O+1X+FxPEmf7qXa8dYHvYQAT/wCCrXP1/TvtV/hPgq1z9f077Vf4TxJn+6k8dYHvYQAT/wCCrXP1/TvtV/hPgq1z9f077Vf4TxJn+6k8dYHvYQBkaZ8pYv76j1wm/wAFWufr+nfar/C9cTdfrdnLs3qs7TppouU1TEVV8eaePzXqjQufFUTNqXmvTWDNMx9rC3AFpqvAAAAAAAAAARref2ian9Wj+ZSoR0Vthpl7Wdm8zTMeu3bu34pimq5M8mOFUTz8OPcVp8FWufr+nfar/ChesmjsnKyaa7NEzHg7OuUz1c0hjY2NVTdriJ8Lb1QgAn/wVa5+v6d9qv8ACfBVrn6/p32q/wAKPeJM/wB1Lv8AjrA97CACf/BVrn6/p32q/wAJ8FWufr+nfar/AAniTP8AdSeOsD3sIAJ/8FWufr+nfar/AAnwVa5+v6d9qv8ACeJM/wB1J46wPewgAn/wVa5+v6d9qv8ACfBVrn6/p32q/wAJ4kz/AHUnjrA97C1NA+QtP8Wt+zDNY+mWKsXTsbGrmJrs2aKKpjomYiIZC0bUTFERPIrC7MTXMxygDI8AAAAANPqm1Gz+m8Yy9Wxqao6aKKuXVH/TTxljuXrdqPCuVREc87GS3auXZ8GimZnm4W4FearvU0yzxp07AyMqqOiq5MW6fvn0QwNmN4Wq6rtZhYmVRjWMO9XNuaLdE8ZmYnk88zPXw6ODlVaewYuU26a9szMRwcXDz8TqU6CzZt1XKqNkRG3h5uZaQDsuOAAAA8bmHiXJ43MWxXPdqtxL4jTtPieMYOLE961T/RkjxNuifY9xcqj2vi1Zs2v7q1bo+rTEPsHqIiOJ5mZnjAH18AAAARzeXkRjbEalXx4TXbi3Hf5VUR96glwb782LWgYmDE8KsjI5cx3aaI5/TVSp9XWtN7w82KY/2xEfP5rD1XteBheFP+6Z7vkAI0kYAAAA9cW1N/JtWKem5XFMeWeDybjYnGnL2u0qzw4x7qoqmO9TPKn0Qy2Lf2lymjlmIY71z7O3VXyRMuiIiIiIjmiOgBcqnQAAAAAAABiatpmBq2JVi6hi28i1PVVHPE92J6Ynvwyx5roprpmmqNsS9U11UTFVM7JhUu1G7HKx+VkaFenKt9Pue5MRcjwT0T6PKr/MxcnDyKsfLsXbF6n86i5TNMx5JdNMHV9I0zVrHYdSwrOTT0RNdPxqfBPTHkRbP1Ws3dtWPPgzyezvjrSfB1ovWtlORHhRy+3ulzaLW13dXYrmq7o2fNmZ6LORHKp8lUc8eaUH1jY/aLS+VORpl6u3H/Esx2Snh3ebo8vBE8rQ+Zi/jonZyxwx1fNK8XS+HlfgrjbyTwT/AJuaEfsxMTwmOEvxzHSAAAAAAAABn6Xo2q6pVFOn6fkZHPw5VFE8mPDV0Qmmh7rdRvzTc1bLtYlHXbt/Hr8HHoj0t7F0blZU/wClRM8/s6eJpZOkcXF9LXEc3t6ONXsRMzERHGZTDZfd9rOrTRey6Z0/Enn5V2n49Ud6n754eVaWz2yWhaHya8PDprvx/wAe98evyT0R5IhvUrwNVKaZirKq280fOe7pRbO1pqq204tOznn5R39DUbN7OaToGP2PT8eIuTHCu9Xz3K/DP3RzNuCW2rVFmiKLcbIjkRO7dru1TXXO2Z5QBkYwAAAAAFab9/8AC6T9e76qVVLy3kbL5u01nCowr+PanHqrmrs0zHHjEdHCJ7iGfBVrn6/p32q/woDpzReXkZ1dy3bmYnZw/CE90JpPEsYVFu5XETG3tlABP/gq1z9f077Vf4T4Ktc/X9O+1X+FyPEmf7qXV8dYHvYQAT/4Ktc/X9O+1X+E+CrXP1/TvtV/hPEmf7qTx1ge9hABP/gq1z9f077Vf4T4Ktc/X9O+1X+E8SZ/upPHWB72EAbnYjtw0nxu37UJN8FWufr+nfar/Cz9nd3GsadruFn3szArt49+m5VTRVXxmInjzcaWfG0NnU3qKptzsiY7WHJ0xg1Wa6YuRtmJ7FpALOVmAAAAAAAAAAAAjW9HtE1P6tv+ZSoR0Ttjpd7Wtm8vTMe5bt3b8UxTVcmeTHCqJ5+ET3Fa/BVrn6/p32q/woXrJo7JysmmuzRMx4OzrlM9XNIY2NjVUXa4ifC29UIAJ/8ABVrn6/p32q/wnwVa5+v6d9qv8KPeJM/3Uu/46wPewgAn/wAFWufr+nfar/CfBVrn6/p32q/wniTP91J46wPewgAn/wAFWufr+nfar/CfBVrn6/p32q/wniTP91J46wPewgAn/wAFWufr+nfar/CfBVrn6/p32q/wniTP91J46wPewtXQvkTA8Wt+zDMY+m2KsbTsbGrmJqtWaKJmOiZiIhkLStRMURE8isLsxNczHKAPbw5w2m7ZNT8cu+3LXLJ1fdnrWZq2Zl283T6aL9+u5TFVVfGIqqmY4/F77F+CrXP1/TvtV/hVde0LnVXKpi1PHKzrOmcGm3TE3I4oQAT/AOCrXP1/TvtV/hPgq1z9f077Vf4WPxJn+6lk8dYHvYQAT/4Ktc/X9O+1X+E+CrXP1/TvtV/hPEmf7qTx1ge9hABP/gq1z9f077Vf4T4Ktc/X9O+1X+E8SZ/upPHWB72EAW7uM+RNQ8Zj2YaH4Ktc/X9O+1X+FON3OzeZs1p2VjZl6xdqu3Yrpm1MzERwiOfjEOzoHRmXj5tNy7RMRsnscjTuk8XIw6qLVcTO2O1KQE8QQAAAAAAAAABQ+9Tt91L/ALX8qhF1r7Z7v9V1vaXL1TGy8K3avcjk03KqoqjhRTTz8KZ64af4Ktc/X9O+1X+FWufofNuZVyum3MxNUzHSsjB0vhW8a3RVciJimI6kAE/+CrXP1/TvtV/hPgq1z9f077Vf4Wp4kz/dS2vHWB72EAE/+CrXP1/TvtV/hPgq1z9f077Vf4TxJn+6k8dYHvYQAT/4Ktc/X9O+1X+E+CrXP1/TvtV/hPEmf7qTx1ge9hAFj7i/lXUv3FPtMf4Ktc/X9O+1X+FK93GyGobNZuXfzcjFu03rcUUxamqZiYnjz8Yh09D6KzLObbuXLcxEd0ubpjSmJewrlu3ciZnvhNgFhK/AAAAAAAAEM2r3e6Tq9VeThcNPy555minjbrnv09Xhj0pmNfJxLOVR4F6nbDYxsu9i1+HZq2S552i2Y1rQq593YlXYePCL9v41ufL1eCeEtK6frppromiumKqao4TExxiYRHaDd7oGqcq5YtTp9+f0rERFM+Gjo83BDs3VSuNtWNVt5p4+n/xL8LWqifNyadnPHd/6o4TXWt2uv4UzXh9i1C1HXbnk18O/TP3TKJZ2FmYN3sObi38a5827RNM+lGMjCyMadl2iY7OniSbHzcfJjbarif8AOTjY4DVbIAAAAAAD7s2rt65FuzbruV1c0U0UzMz5IfYjbwQTOzhl8CVaNsBtJqUxVVhxhWp/TyZ5E/Z/O9Cd6Buz0fCmm7qV25qF2Ofkz8S3Hkjnnyz5HXxNBZuVwxRsjlng+vU5OXpzDxuCa9s8kcP0VZoeh6rrd/sOm4dy9wn41fDhRT4ap5oWjslu3wNPmjJ1iqjOyY54txH5KmfB+l5ebvJzjWLGNYpsY1m3ZtURwpoopimmPBEPRMNH6t42Nsru+fVz8XR3ohpDWPIydtFvzKebj6e5+UxFNMU0xEREcIiOp+gkSPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANdn6Fo2fM1Zml4d6qemqqzHK8/S0mVu82VvzM04NyxM9du9V6pmYSwat3Bxr3DctxPwhtWs3Js8Fu5MfGUCvbq9Cq4zazdRonv10THssardRp/6OrZUeG3TKxhp1aD0fVx2o6+9t06cz6eK7PV3K6o3UadH5+q5c+CimGXj7rtnrcxN3I1C93puUxHop4+lOh9p0HgU8VqOt8q03n1cd2epHMHYbZbEmKqNJtXKo671VVzj5Jnh6G+xcbGxbXYsXHtWLcfo26IpjzQ9RvWcazZ9HREboiGldyb170lczvmZAGdgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQDeLttqez+qxp2FiY/xrNNyL13jVzTMxzRHDrie61czMtYdr7W7xNrDw7uZd+ytcafsDUtZ0nTYn3fqOLjzH6NdyIqnwR0yovVNrto9SiacnVb8UT+hansdPDucKeHHytHMzVMzMzMz0zKL5Gt1McFm3090d6T4+qdU8N650d89y59U3m7P43GnDoyc6vqmmjkU+ern9CKapvR1vI404ONi4VM9EzE3K48s83oQIcPI1hz73+/wY5uDr4+t28fV/Bs/wCzwp5+Hq4upstU17WtT4xn6nk3qZ6aJrmKPsxzehrQca5cruT4VczM87sUW6LceDRGyOYeuJfuYuXZybM8Llmum5RPcmJ4w8h5iZidsPUxExsl0xpmZa1DTsfOsTxt37dNynwTHFkK73La5GRp13Q79f5XGmblnjPTRM88eSZ/1LEW5o/LpzMai9Htjh3+1UukMScTIqtT7J4N3sAG60wAAAAAAAAAAGu2l1WzouiZOpXuE9io+JTP6Vc81MeWXi5cpt0TXVOyI4Xu3bquVRRTG2Z4FR74NTjO2rnFt1cbeFbi13uVPPV64jyIY9Mm9cyci5kXqpru3a5rrqnrmZ4zLzVDmZM5N+u9PtlbeHjxjWKLUeyABrNgAAAATTc3ie6Nsab8xzYtiu5x78/F/wB0oWtjcZg8jT9Q1Kqnnu3abNE96mOM+1HmdfQVj7bPtxyTt6OHtcnTt/7HBuTyxs6eDsWQAtNV4AAAAAAAAAAAAADA1LRtJ1KJ936djZE/OrtxNUeXpRzP3a7M5MzNq1k4kz/yb3GP9XFMhqX8DGv8Ny3E/D5tqznZNj0dcx8fkrPK3TWZmZxdauUR1RcsRV6YmPU1t7dTq8TPYdSwa4/b5dPqiVvDnV6uaPr/ANmzdM97o0axaQp/37d8R3KYq3X7Rx0XtOq8F2r8L8jdhtJPTcwI8N6r8K6Bh8l8Hn6WbynzuboU7a3V67PDsmdp1Ed6uuZ9ln426a7MxOTrVFMdcW8eZ9M1QtMZKNWtH08dMz8Z+THXrHn1cVUR8IQPC3W6Fa4Tk5WbkT3OVTRTPmjj6Ug07ZHZvAmJx9Ixpqjoqu09knz1cW8G/Z0Xh2fwW46Nva0L2k8u9+O5PT3PymmmmmKaYimmOaIiOaH6DfaIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+L9mzkWptX7Vu7bnpprpiqJ8kvsfJiJjZL7EzHDCN6jsNsvm8Zr0u3Zqn9KxVNvh5Inh6GhzN1Wk18ZxNRzLMz/zIpriPRCwhz72icK9+O1HRs7G/Z0tm2fwXJ7e1VGTunzKf8PrFi5+8szR6plhXN1m0FM/Ey9Nrj95XE+yuQaNWrWj6uKmY+M/NvU6yZ9PHVE/CPkpad2G0nH8/An/AL0/hfdG63aKqfjZOm0eG7X91K5h4jVfB5+l78p87m6FSWN1GpVf3+q4lH1KKqvXwbTE3UYNMx7r1fIux1xatU0eualjjPb1d0fR/s275nvYLmsOkK/9+zdEdyKafu92XxJiasK5k1R137sz6I4R6EiwcDBwLfY8LDx8anri1binj5mSOlZw8ex6KiI3Q5t7Lv3/AElczvkAbLXAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFX79cLn03Uaaeb49iuf9VP+5aCN7ytNnU9j823TTxu2I7Pb8NPPP+nlR5XM0zj/AHjCuURx7NvRwunofI+75tuueLbs6eBQYCqFpgAAAAAM3RNSydI1XH1HEq4XbNfKiOqqOuJ70xzOg9n9WxNb0mzqOHVxouR8amemirrpnvw5vSHYjajK2a1HslMVXcS7wi/Z49Md2O/CQaC0v9xueBc/BVx808ve4OndE/frfh2/x09ccncv8Ymj6lhatgW87AvU3rNyOaY6YnriY6p7zLWRRXTXTFVM7YlXNVFVFU01RsmAB6eQAAAAAAABS29baenWdSp07CucrBxKp41RPNdudEz4I6I8vdbreXt1RVbu6Nol7lcrjTkZNE83Drppn1yq5BtYtM03InFsTwe2fl3pvq9oeq3MZN6OH2R8+4AQ5LwAAAAAB0LsJp39lbJ6fiVU8m52KLlyOvlVfGmJ8HHh5FK7D6VOs7UYWHNPKtcvsl7ucinnnz9HldCprqli/jyJ3R2z8kM1syvwY8b57I+YAmqGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD8mIqiaaoiYmOExPW/QHO+2WkVaJtHl4HCYt018qzPdtzz0/08MS064d8mgzm6Tb1jHt8b+HzXeEc82p6/JPP4JlTyqdMYM4WVVRH4Z4Y3T3cS09EZsZmLTXPHHBO+O/jAHLdMAAAAABtdm9f1LQM33Tp97hE/3lqrnouR3Jj7+lb+yu3mja1TRZv3IwcyebsV2r4tU/s1dE+CeEqLHX0dpnIwOCmdtPJPy5HK0jobHzuGqNlXLHz5XUA590Pa7aDRoijEz667Mf8ABvfHo4d6J6PJwTHTd69XJinUtJiZ668e5w/01f1TDG1nw7sf6m2iefhjpj6Ihk6s5lqf9PZVHNwT0T9VoiGY28vZm9Edkry8fj/zLPHh9mZZlO3+yVUcf7WiPDj3fwupTpTCq4rtPTDmVaLzaZ2Taq6JScRaveDslT0apVV4Me5+Fh5O83Zq1E9jjNvz+xZiPamHyrSuFTx3aemJKdFZtXFaq6JhNRWGfvYp4TTgaPMz1VX7v+2I+9F9Y292l1GKqPdsYluf0Mankf6uer0udkazYNqPMmap5o79jo2NWs27PnRFMc8921cOv7R6PodqatQzKKLnDjFmmeVcq8FMeueZVG2W3+o63TXiYUVYODVzTTE/lLkftT1R3o9KHV11XK5rrqqqqqnjNUzxmZfKLaR1hycuJop82nkjjnfKUaP1fxsSYrq86rn4vhAAj7vAAAAAAAM/Z7S7+s6zjadjxPKvVxE1cPzaeuryRxe6KKrlUUUxtmXmuum3TNdU7IhZu5TRvc+m39avU8K8mex2ePzKZ558tXsrEeOBi2MHCs4eNRyLNmiKKI7kRD2W3o/EjDx6bMezj3+1U+flzl5FV6fbxbvYANxpgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPm7bou2q7V2mK6K6ZpqpmOMTE9MKA262fubPa7cxoiqcW58fGrnro7nhjo9PW6BaPbTZ6xtHo1eHXMUX6Pj492Y/Mr/pPRP/AIcXTmjPv1jzfx08Md3x7XZ0JpP7jf8AO/BVwT3/AAc9j3z8TIwcy7iZVqq1ftVTTXRV0xLwVhVE0zsnjWZExVG2OIAfH0AAAAAAAAAAAAAAAAAAAAAAAAXJuh2cnTdMnV8u3wysymOxxMc9Frpj7XT4OCF7stlp13U/deXbn+zsaqJr49F2rqo++e94V4REREREcIjoTPVjRczP3u5H8e/uQ7WbSkRH3S3P8u7vAE3QoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABDN5Ox9OvYvu7Bppp1KzTzR0Repj9Ge/3J8ngpS7brtXarV2iqiuiZpqpqjhMTHTEw6eQreHsRa1yirUNOpptalTHPHRTfiOqe5V3J8/eimntBfeNuRjx53tjl+vbvSrQWnPu+zHvz5vsnk+nZuUoPXKx7+LkXMfJtV2b1ueTXRXHCaZ77yQGYmJ2SnkTExtgAfAAAAAAAAAAAAAAAAAAAAAbvY/Z3L2j1SMWxE0WaOFV+9Mc1un75nqg2R2az9o8+LGLTyLFEx2a/VHxbcffPcheuz+j4Oh6bRg4FrkUU89VU/nV1ddUz1ykOhNCVZtUXLkbLcdfNHzlwNNaapwqZt2523J6ueflD20nT8XS9Ps4GFai3YtU8KY657sz3ZnpZQLHppiimKaY2RCuqqprqmqqdsyAPTyAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAjm2WyOnbSWOVcjsGbTTwt5FMc/gqjrhS20eganoGZ7n1CxNMT/AHd2nnouR3Yn7ul0Yx9QwsTUMSvFzse3kWa+miuOMf8Aie+4OldA2c7bXT5tfL7J397u6L07ewtlFXnUcntjd3OZxZO1m7K/ZmvK0C5N+30zjXJ4Vx9Wrr8E8/hV3lY+RiX68fKsXLF2ieFVFymaao8koBmaPyMKrwb1Ozn9k/FPcPSGPmU+FZq283tj4PIBpNwAAAAAAAAAAAAAABstC0LVdbyOw6bh3L3CeFVfDhRR4ap5oe7duu5VFNEbZnkeblyi3TNVc7Ijla1MtiNhM7XKqMvOivE0/p5Uxwrux+zE9Xf9aa7I7utO0uaMrVJpz8uOeKZj8lRPeifzvDPmTlMdF6sTti5l/wD89/dCH6T1mjZNvE//AK7u9i6Xp+HpeDbwsGxRYsW45qafXM9c99lAmlNMURFNMbIhDaqprmaqp2zIA9PIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA12t6JpWs2exalhWr/COFNUxwrp8FUc8NiPFy3RcpmmuNsTyvdFyq3VFVE7J5lV6/usu0zVd0TNi5HTFjI5p8lUc0+WI8KCaxoer6RXydR0+/jxx4RVNPGifBVHNPndHvyummumaa6YqpnmmJjjEo5l6r4t7htTNE9MdH1SLE1nyrPBdiK46J6fo5gF/arsTszqPGq7pluzcn9OxPY580c0+WEX1HdRi1cZ07Vr1vuU37cV+mOHqR7I1Xzbf4NlUc09+xILGs2Fc/Htpnnju2qpE3zd2W0diZ7BOHlR1ci7yZ/1RDUZOxe1GPMxXo2RV+74V+zMuXc0ZmWvxWquiXUt6Tw7n4btPTCPjY3dC1u1M9l0fUKPrY1cfcx6sDPp/OwsmPDaq/o1Zs3KeOmehsxet1cVUdLGGTTgZ1X5uFkz4LVX9Hra0fV7s8LWlZ1f1ceufufItVzxUy+zdojjqhgjdWNlNpL88KNEzo+vZmj18Gyxd3m1V+Y5WDbsRPXcv0eqJmWxRo/Kufht1T8Ja9efi2/xXKY+MImLFwd1OpVzHu3VMWzHX2Kiq5Pp5KQ6buw0DHmKsy9lZlXXE18imfJTz+l0bOrmfd46PB3z/wCz1Ofe1iwLXFXt3R/kKapiaqoppiZmeaIjrSPRNiNo9VmmqjAqxrU/8XJ/Jx5umfJC7NL0PSNLiP7P07Gx6ujl00RyvtdLYO5i6pURw369vNHfPc4mTrZXPBYo2c8931QHZ7dlpWHybuq3q8+7HPyI+Jbj758/kTnFx7GLYpsY1m3ZtURwpot0xTTHkh6iTYuDj4lOyzREdvTxo1lZ2Rl1bb1Uz2dHEANtqAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/Z"
                                            ></image>
                                        </pattern>
                                    </defs>
                                    <g data-name="Group 5" transform="translate(-402 -4)">
                                        <g data-name="Group 4">
                                            <g data-name="Group 3" transform="translate(-91 1)">
                                                <g data-name="Group 1">
                                                    <path
                                                        fill="#fff"
                                                        d="M0 0H1875V4059H0z"
                                                        data-name="Rectangle 1"
                                                        transform="translate(495 3)"
                                                    ></path>
                                                    <path
                                                        fill="url(#linear-gradient)"
                                                        d="M0 0H1875V1215H0z"
                                                        data-name="Rectangle 13"
                                                        opacity="0.19"
                                                        transform="translate(493 543)"
                                                    ></path>
                                                    <text
                                                        fill="#2a2a2a"
                                                        fontFamily="Roboto-Bold, Roboto"
                                                        fontSize="75"
                                                        fontWeight="700"
                                                        transform="translate(696 1705)"
                                                    >
                                                        <tspan x="0" y="71">
                                                            {data.status}
                                                        </tspan>
                                                    </text>
                                                    <text
                                                        fill="#2a2a2a"
                                                        data-name="Chequing ***9687"
                                                        fontFamily="Roboto-Bold, Roboto"
                                                        fontSize="83"
                                                        fontWeight="700"
                                                        transform="translate(683 2066)"
                                                    >
                                                        <tspan x="0" y="79">
                                                            {data.from}
                                                        </tspan>
                                                    </text>
                                                    <text
                                                        fill="#303030"
                                                        data-name="Transacation Type"
                                                        fontFamily="Roboto-Bold, Roboto"
                                                        fontSize="65"
                                                        fontWeight="700"
                                                        transform="translate(683 2723)"
                                                    >
                                                        <tspan x="0" y="62">
                                                            Transacation Type
                                                        </tspan>
                                                    </text>
                                                    <text
                                                        fill="#303030"
                                                        data-name="Transfer Type"
                                                        fontFamily="Roboto-Bold, Roboto"
                                                        fontSize="65"
                                                        fontWeight="700"
                                                        transform="translate(683 3027)"
                                                    >
                                                        <tspan x="0" y="62">
                                                            Transfer Type
                                                        </tspan>
                                                    </text>
                                                    <text
                                                        fill="#303030"
                                                        data-name="Transaction Date"
                                                        fontFamily="Roboto-Bold, Roboto"
                                                        fontSize="66"
                                                        fontWeight="700"
                                                        transform="translate(690 3359)"
                                                    >
                                                        <tspan x="0" y="63">
                                                            Transaction Date
                                                        </tspan>
                                                    </text>
                                                    <text
                                                        fill="#303030"
                                                        data-name="Expiry Date"
                                                        fontFamily="Roboto-Bold, Roboto"
                                                        fontSize="66"
                                                        fontWeight="700"
                                                        transform="translate(1491 3359)"
                                                    >
                                                        <tspan x="0" y="63">
                                                            Expiry Date
                                                        </tspan>
                                                    </text>
                                                    <text
                                                        fill="#7d7d7d"
                                                        fontFamily="Roboto-Medium, Roboto"
                                                        fontSize="50"
                                                        fontWeight="500"
                                                        transform="translate(696 1629)"
                                                    >
                                                        <tspan x="0" y="48">
                                                            Status
                                                        </tspan>
                                                    </text>
                                                    <text
                                                        fill="#8e8e8e"
                                                        fontFamily="Roboto-Medium, Roboto"
                                                        fontSize="50"
                                                        fontWeight="500"
                                                        transform="translate(688 1994)"
                                                    >
                                                        <tspan x="0" y="48">
                                                            from
                                                        </tspan>
                                                    </text>
                                                    <text
                                                        fill="#8e8e8e"
                                                        data-name="Reciepient information"
                                                        fontFamily="Roboto-Medium, Roboto"
                                                        fontSize="50"
                                                        fontWeight="500"
                                                        transform="translate(688 2399)"
                                                    >
                                                        <tspan x="0" y="48">
                                                            Reciepient information
                                                        </tspan>
                                                    </text>
                                                    <path
                                                        fill="url(#pattern)"
                                                        d="M0 0H421V130H0z"
                                                        data-name="Image 1"
                                                        transform="translate(1866 83)"
                                                    ></path>
                                                    <path
                                                        fill="url(#pattern-2)"
                                                        d="M0 0H272V225H0z"
                                                        transform="translate(1941 999)"
                                                    ></path>
                                                    <text
                                                        fill="#505050"
                                                        data-name="Confirmation Number"
                                                        fontFamily="Roboto-Medium, Roboto"
                                                        fontSize="62"
                                                        fontWeight="500"
                                                        transform="translate(683 1356)"
                                                    >
                                                        <tspan x="0" y="59">
                                                            Confirmation Number
                                                        </tspan>
                                                    </text>
                                                    <text
                                                        fill="#4c4c4c"
                                                        data-name="Sep 2, 2023"
                                                        fontFamily="Roboto-Regular, Roboto"
                                                        fontSize="63"
                                                        transform="translate(1519 3439)"
                                                    >
                                                        <tspan x="0" y="60">
                                                            {data.expiry_date}
                                                        </tspan>
                                                    </text>
                                                    <text
                                                        fill="#4c4c4c"
                                                        data-name="Aug 3, 2023"
                                                        fontFamily="Roboto-Regular, Roboto"
                                                        fontSize="63"
                                                        transform="translate(721 3439)"
                                                    >
                                                        <tspan x="0" y="60">
                                                            {data.transaction_Date}
                                                        </tspan>
                                                    </text>
                                                    <text
                                                        fill="#f58426"
                                                        data-name="-$12.00"
                                                        fontFamily="Roboto-Bold, Roboto"
                                                        fontSize="160"
                                                        fontWeight="700"
                                                        transform="translate(585 575)"
                                                    >
                                                        <tspan x="0" y="152">
                                                            -{data.amount}
                                                        </tspan>
                                                    </text>
                                                    <text
                                                        fill="#1d1d1d"
                                                        data-name="7:08"
                                                        fontFamily="Roboto-Medium, Roboto"
                                                        fontSize="76"
                                                        fontWeight="500"
                                                        transform="translate(668 94)"
                                                    >
                                                        <tspan x="0" y="72">
                                                            {data.time}
                                                        </tspan>
                                                    </text>
                                                    <text
                                                        fill="#eb9029"
                                                        data-name="18Y7IVD54ET"
                                                        fontFamily="Roboto-Medium, Roboto"
                                                        fontSize="82"
                                                        fontWeight="500"
                                                        transform="translate(1313 1335)"
                                                    >
                                                        <tspan x="0" y="78">
                                                            {data.confirmation_number}
                                                        </tspan>
                                                    </text>
                                                    <image
                                                        width="723"
                                                        height="69"
                                                        data-name="Image 2"
                                                        transform="translate(1095 3961)"
                                                        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPEAAAAXCAYAAADa1qmWAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAARMSURBVHhe7Zu5SmxZFIaX8zxPiChiYKSZiJE+gG/iCwi+irGBCibmxgZiIiaCYKaIIjjP3vpW91/uKr32qduW3eL6YHHOnveF89Xa58iteMlh/4C6VFRU+FWkQ3X/9PTk1yAIXqmsrPT4iGK/svIpEqdT/OlGguCnU3aJs4qaYbog+NHIH7mSXmkjY5ci9B9JDOki6aaen5/9PgiCQvCkWE55lXpTVVX1+RILuqbd39tQCdMFwY/hPYFTUnfKkokFXfnFUGioFuRaU1Pj90EQvIIvxR99JTZR/NFLTmWhpOM0myAeHx/z92oLguD3FEspcTk6E9XV1X6VzCVJnPuFeGFAsYzUaSJ+RU5OTmx3d9eOj4/t+vrabm9v7ebmxsdocfojeBZC/OC/IIsc5Xg28YOQZyoTtbW11tXVZf39/TYwMGC9vb1eRz/ck4vp3kmglP39OVd40eQ6IqeDKJ+entr29rYtLy/b3t6eXV1ducgXFxfehyM0c3DP5Flg3iD4Sng+s/LZzydr44gcky/yZ2hoyMbHx21iYsJmZmasp6cn7xNXl/Xv/ox/eHjwORhbkIlZgAagzAR0Xl9ft9XVVdvc3LS7uztrbGz0wep/f3/vYnNta2vz8UEQvIIrBMdmwDmgDqeQtKWlxQYHB21+ft6mpqbcJTzkdMs4eUqZcYzJSyyBQcYjMJNzZF5cXLSlpSU7ODjwNF9XV+eT0V5fX+91GoP0QRAUQrKTiDiiEysScq/X0ObmZpubm7PZ2VkbGRnxdk69OMd4PCVZcq/5KpHxvQCuDGKSy8tLr0NYAtlBG6CfT5jbbJagbxB8JVmfz3I8m/iBvHIFcCj1Cd/ow2sqyVNi0z/1EtJ95r9rqyLtTEdsb2hosKamJl8MaKdNi7MYH7rIzKXAmhERXxlZeG/cvw2cwZNUYuq5Vx1O4Vpra6tnXtpBp2OQe7qHN+/EXpkMYIG1tTVbWVmxra0t/0oNCMy7Mcdp0ju/IIxXhs6C1gmCr0APfRY++9nEi/Q4jFecYgnKHJs7OjpseHjYFhYWbHJy0trb2/PCQuoo9ezRIzdJwddpggZ1ov7o6Mh2dnZsY2PDr4eHh368ZgPKxPRlk+miQRD8hX5AuOIL4AsZl/dgvk6Pjo7a2NiYTU9PW2dnZ95BHMM13GS8PiqrzSWmAOpEWQFk2bOzM9vf3/dMfH5+7sdnycsCLEh2pm8QBG/BFaTDMUmtDE0W7uvr878Td3d3exteMUZe4SeeIX6aON9IDJSL67gyEYPYQCq8JGZDWSXWPyIIvhI91x9RrmeTtREQcIYAhMQfMizC0o8jtryinu9NOIdjvMLiGf1oK3gnFioTLMCVOiZgUrUR1El0+hBBEBSCR3iCpCrjj8pKinKKK+AbcPKVxIxBcgn+ocRBEJQXJb3f+Za2E8VJknJJ/4spCIL/H/EpOQi+OSFxEHxzQuIg+NaY/QK6p1NyNUL8kwAAAABJRU5ErkJggg=="
                                                    ></image>
                                                    <text
                                                        fill="#433f3f"
                                                        data-name="Uncategorized"
                                                        fontFamily="Roboto-Bold, Roboto"
                                                        fontSize="84"
                                                        fontWeight="700"
                                                        transform="translate(683 1093)"
                                                    >
                                                        <tspan x="0" y="80">
                                                            {data.transaction_category}
                                                        </tspan>
                                                    </text>
                                                    <text
                                                        fill="#8e8e8e"
                                                        data-name="Transaction Category"
                                                        fontFamily="Roboto-Medium, Roboto"
                                                        fontSize="54"
                                                        fontWeight="500"
                                                        transform="translate(683 1013)"
                                                    >
                                                        <tspan x="0" y="51">
                                                            Transaction Category
                                                        </tspan>
                                                    </text>
                                                    <g
                                                        fill="none"
                                                        stroke="#d9d9d9"
                                                        strokeWidth="8"
                                                        data-name="Rectangle 14"
                                                    >
                                                        <path
                                                            stroke="none"
                                                            d="M32 0h1589a32 32 0 0132 32v2671H0V32A32 32 0 0132 0z"
                                                            transform="translate(585 880)"
                                                        ></path>
                                                        <path
                                                            d="M32 4h1589a28 28 0 0128 28v2667h0H4h0V32A28 28 0 0132 4z"
                                                            transform="translate(585 880)"
                                                        ></path>
                                                    </g>
                                                    <path
                                                        fill="#d9d9d9"
                                                        d="M0 0H1645V7H0z"
                                                        data-name="Rectangle 15"
                                                        transform="translate(593 1883)"
                                                    ></path>
                                                    <path
                                                        fill="#d9d9d9"
                                                        d="M0 0H1645V7H0z"
                                                        data-name="Rectangle 24"
                                                        transform="translate(593 1272)"
                                                    ></path>
                                                    <path
                                                        fill="#d9d9d9"
                                                        d="M0 0H1645V7H0z"
                                                        data-name="Rectangle 17"
                                                        transform="translate(585 2267)"
                                                    ></path>
                                                    <path
                                                        fill="#d9d9d9"
                                                        d="M0 0H1645V7H0z"
                                                        data-name="Rectangle 18"
                                                        transform="translate(589 2660)"
                                                    ></path>
                                                    <path
                                                        fill="#d9d9d9"
                                                        d="M0 0H1645V7H0z"
                                                        data-name="Rectangle 19"
                                                        transform="translate(589 2964)"
                                                    ></path>
                                                    <path
                                                        fill="#d9d9d9"
                                                        d="M0 0H1645V7H0z"
                                                        data-name="Rectangle 20"
                                                        transform="translate(589 3296)"
                                                    ></path>
                                                    <path
                                                        fill="#d9d9d9"
                                                        d="M0 0H6V269H0z"
                                                        data-name="Rectangle 22"
                                                        transform="translate(1397 3303)"
                                                    ></path>
                                                    <path
                                                        fill="#d9d9d9"
                                                        d="M0 0H1816V7H0z"
                                                        data-name="Rectangle 21"
                                                        transform="translate(504 3624)"
                                                    ></path>
                                                    <path
                                                        fill="#d9d9d9"
                                                        d="M0 0H1645V21H0z"
                                                        data-name="Rectangle 16"
                                                        transform="translate(593 1490)"
                                                    ></path>
                                                    <text
                                                        fill="#333"
                                                        data-name="afn.9995@gmail.com"
                                                        fontFamily="Roboto-Bold, Roboto"
                                                        fontSize="73"
                                                        fontWeight="700"
                                                        transform="translate(683 2471)"
                                                    >
                                                        <tspan x="0" y="69">
                                                            {data.reciepient_information}
                                                        </tspan>
                                                    </text>
                                                    <text
                                                        fill="#515151"
                                                        data-name="Interac e-Tranfer"
                                                        fontFamily="Roboto-Regular, Roboto"
                                                        fontSize="71"
                                                        transform="translate(690 2812)"
                                                    >
                                                        <tspan x="0" y="67">
                                                            Interac e-Tranfer
                                                        </tspan>
                                                    </text>
                                                    <text
                                                        fill="#515151"
                                                        data-name="Interac e-Tranfer"
                                                        fontFamily="Roboto-Italic, Roboto"
                                                        fontSize="71"
                                                        fontStyle="italic"
                                                        transform="translate(683 3114)"
                                                    >
                                                        <tspan x="0" y="67">
                                                            Interac
                                                        </tspan>
                                                        <tspan
                                                            y="67"
                                                            fontFamily="Roboto-Regular, Roboto"
                                                            fontStyle="normal"
                                                        >
                                                            {" "}
                                                            e-Tranfer
                                                        </tspan>
                                                    </text>
                                                    <g
                                                        fill="#fff"
                                                        stroke="#707070"
                                                        strokeWidth="3"
                                                        data-name="Ellipse 1"
                                                        transform="translate(1210 3114)"
                                                    >
                                                        <circle cx="19" cy="19" r="19" stroke="none"></circle>
                                                        <circle cx="19" cy="19" r="17.5" fill="none"></circle>
                                                    </g>
                                                    <text
                                                        fill="#515151"
                                                        fontFamily="Roboto-Medium, Roboto"
                                                        fontSize="25"
                                                        fontWeight="500"
                                                        transform="translate(1221 3142)"
                                                    >
                                                        <tspan x="0" y="0">
                                                            R
                                                        </tspan>
                                                    </text>
                                                    <rect
                                                        width="578"
                                                        height="165"
                                                        fill="#e97025"
                                                        data-name="Rectangle 23"
                                                        rx="82.5"
                                                        transform="translate(1656 3687)"
                                                    ></rect>
                                                    <text
                                                        fill="#fff"
                                                        fontFamily="Roboto-Medium, Roboto"
                                                        fontSize="91"
                                                        fontWeight="500"
                                                        transform="translate(1840 3801)"
                                                    >
                                                        <tspan x="0" y="0">
                                                            Done
                                                        </tspan>
                                                    </text>
                                                    <path
                                                        fill="url(#pattern-3)"
                                                        d="M0 0H533V110H0z"
                                                        data-name="ezgif.com-webp-to-jpg (2)"
                                                        transform="translate(1184 333)"
                                                    ></path>
                                                    <rect
                                                        width="15"
                                                        height="116"
                                                        fill="#f58426"
                                                        data-name="Rectangle 25"
                                                        rx="7.5"
                                                        transform="rotate(44.03 -75.276 990.763)"
                                                    ></rect>
                                                </g>
                                                <rect
                                                    width="15"
                                                    height="116"
                                                    fill="#f58426"
                                                    data-name="Rectangle 25"
                                                    rx="7.5"
                                                    transform="matrix(.682 -.731 .731 .682 585 342.582)"
                                                ></rect>
                                            </g>
                                        </g>
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
                            <label>Time-Updated</label>
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
                            <label>Transacation Category</label>
                            <input
                                type="text"
                                value={data.transaction_category}
                                name="transaction_category"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                        <div className="global_form_inner">
                            <label>Confirmation Number</label>
                            <input
                                type="text"
                                value={data.confirmation_number}
                                name="confirmation_number"
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
                            <label>from</label>
                            <input
                                type="text"
                                value={data.from}
                                name="from"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                        <div className="global_form_inner">
                            <label>Reciepient information</label>
                            <input
                                type="text"
                                value={data.reciepient_information}
                                name="reciepient_information"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                        {/* <div className="global_form_inner">
                            <label>Transacation Type</label>
                            <input
                                type="text"
                                value={data.transaction_type}
                                name="transaction_type"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                        <div className="global_form_inner">
                            <label>Transfer Type</label>
                            <input
                                type="text"
                                value={data.transfer_type}
                                name="transfer_type"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div> */}
                        <div className="global_form_inner">
                            <label>Transacation Date</label>
                            <input
                                type="text"
                                value={data.transaction_Date}
                                name="transaction_Date"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                        <div className="global_form_inner">
                            <label>Expiry Date</label>
                            <input
                                type="text"
                                value={data.expiry_date}
                                name="expiry_date"
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                    </div>
                </div>
            </>
        </>
    )
}

export default SeventhPage;