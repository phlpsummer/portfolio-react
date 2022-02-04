import { useState } from "react";

const arr = ['Bali', 'HongKong', 'Vietnam', 'Osaka'];
const len = arr.length;
const path = process.env.PUBLIC_URL;

function Boards(){
    let [countries, setCountries] = useState(arr);
    return (
        <>
        {
            countries.map((country,index)=>{
                let vidSrc = `${path}/img/${country}.mp4`;
                return (
                    <article key={index}>
                        <div className="panel">
                            <video src={vidSrc} className="vidOri" autoPlay loop muted></video>
                            <div className="vidShadow">
                                <video src={vidSrc} className="vidShadow" autoPlay loop muted></video>
                            </div>
                            <div className="inner">
                                <span>I wish I was in . .</span>
                                <h2>{country}.</h2>
                                <div className="view">
                                    <div className="plusBtn">+</div>
                                    <p>view more</p>
                                </div>
                            </div>
                        </div>
                    </article>
                )
            })
        }
        </>
    )
}
export default Boards;