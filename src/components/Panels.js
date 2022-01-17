import { useState } from "react";

const arr = ['Bali','Taipei','Macao','Osaka'];
const len = arr.length;
const deg = 360/len;
const path = process.env.PUBLIC_URL;

function Panels(){
    let [names, setNames] = useState(arr);
    return (
        <>
            {
                names.map((name,index)=>{
                    let style = {transform: `rotate(${deg*index}deg) translateY(-100vh)`}
                    let imgSrc = `${path}/img/${name}.jpg`;
                    return (
                        <article key={index} style={style}>
                            <div className="inner">
                                <div className="pic">
                                    <img src={imgSrc} />
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