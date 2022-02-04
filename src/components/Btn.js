import { useState } from "react";

function Btn(props){
    let [slide,setSlide] = useState(0);


    function down(){
        if(slide!==3) {
            setSlide(++slide);
            props.frame.current.style.transform = `translateY(-${100*slide}vh)`;
        }
    }
    function up(){
        if(slide!==0) {
            setSlide(--slide);
            props.frame.current.style.transform = `translateY(-${100*slide}vh)`;
        }
    }

    return (
        <div className="btns">
            <div className="btnUp" onClick={()=>up()}><i class="fas fa-arrow-up"></i></div>
            <span></span>
            <div className="btnDown" onClick={()=>down()}><i class="fas fa-arrow-down"></i></div>
        </div>
    )
}
export default Btn;