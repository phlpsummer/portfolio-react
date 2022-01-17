import { useState } from "react";

const arr = ['Bali','Hongkong','Vietnam','Osaka'];
const len = arr.length;
const deg = 360/len;
const path = process.env.PUBLIC_URL;

function Panels(){
    let [names, setNames] = useState(arr);
    return (
        <>
            {
                names.map((name,index)=>{
                    let style = {transform: `rotate(${deg*index}deg) translateY(-140vh)`}
                    let imgSrc = `${path}/img/${name}.mp4`;
                    return (
                        <article key={index} style={style}>
                            <div className="inner">
                                <div className="pic">
                                    <video src={imgSrc} autoPlay loop muted></video>
                                </div>
                                <h2>{name}</h2>
                            </div>
                        </article>
                    )
                })
            }
        </>
    )
}
export default Panels;