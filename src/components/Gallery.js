import axios from "axios";
import { useEffect, useState } from "react";

const baseURL = "https://www.flickr.com/services/rest/?";
const method = "flickr.people.getPhotos";
const key = "48fa09238ff7a579f7c89acef3c946b7";
const count = 10;
const user = "194176696@N08";
const url = `${baseURL}method=${method}&api_key=${key}&per_page=${count}&user_id=${user}&format=json&nojsoncallback=1&privacy_filter=1`;

function Gallery(){
    let [pics,setPics] = useState([]);

    useEffect(()=>{
        getFlickr(url);
    },[]);

    return (
        <main className="content gallery">
            <h2>Gallery</h2>

            <section>
                {
                    pics.map((pic,index)=>{
                        let imgSrc = `https://live.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}_m.jpg`;
                        return (
                            <article key={index}>
                                <div className="inner">
                                    <div className="pic">
                                        <img src={imgSrc} />
                                    </div>
                                    <div className="con">
                                        <p>{pic.title}</p>
                                        <span>{pic.owner}</span>
                                    </div>
                                </div>
                            </article>
                        )
                    })
                }
            </section>
        </main>
    )
    
    async function getFlickr(url){
        await axios.get(url)
        .then(item=>{
            const data = item.data.photos.photo;
            setPics(data);
        })
        .catch(err=>{
            console.error(err);
        })
    }
}
export default Gallery;