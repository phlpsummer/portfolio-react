import { useState } from "react";

function Btn(props){
    let [slide,setSlide] = useState(0);

    function down(){
        if(slide==3) return;
        setSlide(++slide);
        props.frame.current.style.transform = `translateY(-${100*slide}vh)`;
    }
    function up(){
        if(slide==0) return;
        setSlide(--slide);
        props.frame.current.style.transform = `translateY(${100*slide}vh)`;
    }

    return (
        <>
            <div className="btnUp" onClick={()=>up()}>up</div>
            <div className="btnDown" onClick={()=>down()}>down</div>
        </>
    )
}
export default Btn;