import axios from "axios";
import { useEffect, useState } from "react";

const playlist = "PL-4RqvSks9qWoKHa8ojDRl_egHrJqsMME";
const key = `AIzaSyAMoGKvrd6wFxpLb2M8fXI83hwwuZjv7is`;
const count = 7;
const url = `https://www.googleapis.com/youtube/v3/playlistItems?key=${key}&part=snippet&playlistId=${playlist}&maxResults=${count}`;

function Media(){
    let [vids,setVids] = useState([]);

    useEffect(()=>{
        getYoutube(url);
    },[]);

    return (
        <main className="content media">
            <div className="titBanner" >
                <h2>Media</h2>
                <img src={process.env.PUBLIC_URL + '/img/sub_media.jpg'} />
            </div>

            <div className="inner">
                <section>
                    {
                        vids.map((vid,index)=>{
                            let vidUrl = `https://www.youtube.com/watch?v=${vid.snippet.resourceId.videoId}`;
                            let vidThumb = `${vid.snippet.thumbnails.standard.url}`;
                            let vidTitle = vid.snippet.title;
                            let vidDesc = vid.snippet.description;
                            let vidDate = vid.snippet.publishedAt;

                            if(vidTitle.length > 50) vidTitle = vidTitle.substr(0,50)+"...";
                            if(vidDesc.length > 120) vidDesc = vidDesc.substr(0,120)+"...";
                            vidDate = vidDate.split("T")[0];

                            return (
                                <article key={index}>
                                    <a href={vidUrl} target="_blank">
                                        <img src={vidThumb} />
                                    </a>
                                    <div className="con">
                                        <div className="title">{vidTitle}</div>
                                        <p>{vidDesc}</p>
                                        <span>{vidDate}</span>
                                    </div>
                                </article>
                            )
                        })
                    }
                </section>
            </div>
        </main>
    )

    function getYoutube(url){
        axios.get(url)
        .then(item=>{
            console.log(item.data.items);
            const data = item.data.items;
            setVids(data);
        })
        .catch(err=>{
            console.error(err);
        })
    }
}
export default Media;