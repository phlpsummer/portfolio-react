import axios from "axios";
import { useEffect, useState } from "react";

const baseURL = "https://www.flickr.com/services/rest/?";
const method = "flickr.people.getPhotos";
const key = "48fa09238ff7a579f7c89acef3c946b7";
const count = 10;
const user = "194176696@N08";
const url = `${baseURL}method=${method}&api_key=${key}&per_page=${count}&user_id=${user}&format=json&nojsoncallback=1&privacy_filter=1`;

// const searchBar = document.querySelector(".searchBar");
// const btnSearch = document.querySelector(".btnSearch");
// const pop = document.querySelector("aside");

function Gallery(){
    let [pics,setPics] = useState([]);
    let [done,setDone] = useState(false);

    useEffect(()=>{
        getFlickr(url);
    },[]);

    return (
        <main className="content gallery">
            <div className="titBanner" >
                <h2>Gallery</h2>
                <img src={process.env.PUBLIC_URL + '/img/sub_gallery.jpg'} />
            </div>

            <div className="inner">
                <section className="searchBox">
                    <input type="text" className="searchBar" placeholder="검색어를 입력해주세요." />
                    <button className="btnSearch">검색</button>
                </section>

                {
                    (done) ?
                    <section id="wrap">
                        {
                            pics.map((pic,index)=>{
                                let thumbSrc = `https://live.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}_m.jpg`;
                                let imgSrc = `https://live.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}_b.jpg`;

                                return (
                                    <article key={index} className="item">
                                        <div className="panel">
                                            <div className="txt">
                                                <p>{pic.title}</p>
                                                <span>{pic.owner}</span>
                                            </div>
                                            <a href={imgSrc} className="pic">
                                                <img src={thumbSrc} />
                                            </a>
                                        </div>
                                    </article>
                                )
                            })
                        }
                    </section>
                    : <img src={process.env.PUBLIC_URL + '/img/loading.gif'} className="loading"/>
                }
            </div>

            <aside>
                <img src="#" id="popImg"/>
                <span className="btnClose">close</span>
            </aside>
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

        setDone(true);
        // isotopeLayout();
    }

    // function isotopeLayout(){
    //     new Isotope("#wrap",{
    //         itemSelector: ".item",
    //         columnWidth: ".item",
    //         transitionDuration: "0.5s"
    //     });
    // }
}
export default Gallery;