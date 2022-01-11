
import { useState } from "react";

const baseURL = "https://www.flickr.com/services/rest/?";
const method = "flickr.people.getPhotos";
const key = "48fa09238ff7a579f7c89acef3c946b7";
const count = 10;
const user = "194176696@N08";
const url = `${baseURL}method=${method}&api_key=${key}&per_page=${count}&user_id=${user}&format=json&nojsoncallback=1&privacy_filter=1`;

function Gallery(){
    let [pics,setPics] = useState([]);

    return (
        <main className="content gallery">
            <h2>Gallery</h2>

            <section>
                {
                    pics.map((pic,index)=>{
                        let imgSrc = `https://live.staticflickr.com/{server-id}/{id}_{secret}_{size-suffix}.jpg`;
                        return (
                            <article>

                            </article>
                        )
                    })
                }
            </section>
        </main>
    )



}
export default Gallery;