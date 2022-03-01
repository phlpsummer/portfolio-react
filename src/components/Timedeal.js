function Timedeal(){

    // Set the date we're counting down to
    var countDownDate = new Date("Jan 5, 2024 23:37:25").getTime();
    // Update the count down every 1 second
    var x = setInterval(function() {
        // Get today's date and time
        var now = new Date().getTime();
        // Find the distance between now and the count down date
        var distance = countDownDate - now;
        // Time calculations for days, hours, minutes and seconds
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        // Display the result in the element with id="demo"
        document.getElementById("demo").innerHTML = "딜 종료까지 " + hours + "시간 " + minutes + "분 " + seconds + "초.";
        // If the count down is finished, write some text
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("demo").innerHTML = "딜이 종료되었습니다.";
        }
    }, 1000);

    return(
        <section className='timedeal'>
            <div className="inner">
                <h2 className='title'>Don't miss this time.</h2>
                <div className="tdContent" onMouseOver={(e)=>e.currentTarget.querySelector("video").play()} onMouseLeave={(e)=>e.currentTarget.querySelector("video").pause()}>
                    <div className="tdProduct">
                        <video src={process.env.PUBLIC_URL + '/img/timedeal_product.mp4'} muted loop></video>
                    </div>
                    <div className="con">
                        <div id="demo"></div>
                        <p>#터키 일주 #9/10일 #전일정특급호텔+VIP버스<br/>#동서양의조화</p>
                        <div className="price">
                                <div className="tag">타임딜가</div><span>899,000원~</span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
export default Timedeal;