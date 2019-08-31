/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';

class VideoPlayeer extends React.Component{
constructor(props){
    super(props);
    this.preloaderRef = React.createRef();
    this.customModalWindowRef = React.createRef();
    this.overlayRef = React.createRef();
}
preloader(){
    setTimeout( ()=>{
        if(this.preloaderRef.current){
            this.preloaderRef.current.style.opacity = '0';
            this.preloaderRef.current.style.visibility = 'hidden';
        }
    }, 1500 )
};
openYoutubePlayeer(){
    this.overlayRef.current.style.display = 'block';
    setTimeout( ()=>{
        this.customModalWindowRef.current.style.display = 'block';
        this.customModalWindowRef.current.style.opacity = '1';
    }, 500 )
}
closeButton(){
    this.customModalWindowRef.current.style.display = 'none';
    this.customModalWindowRef.current.style.opacity = '0';
    this.overlayRef.current.style.display = 'none';
    this.customModalWindowRef.current.childNodes[1].contentWindow
            .postMessage('{"event":"command", "func":"pauseVideo", "args":""}', '*');
}

    render(){
        return(
            <div>
                <div className="moviePoster">
                    <div className="preloader" ref={this.preloaderRef}>
                        <div className="loader"></div>
                    </div>
                    <button className="play-button"
                            onClick={ ()=>{this.openYoutubePlayeer()} }>
                    </button>
                    <img onLoad={ (e)=>{ this.preloader(e.target)}}
                        className={this.props.conditionClassName}
                        src={this.props.conditionUrl}
                        alt = 'Poster for film' />
                </div>
                <div className="modal-window-for-trailer"
                    ref={ this.customModalWindowRef }>
                    <button onClick={()=>{this.closeButton()}}  className="closeButton">X</button>
                    <iframe id="ytplayer" 
                            type="text/html" 
                            width="720" 
                            height="480"
                            src={this.props.trailer}
                            frameborder="0" 
                            allowfullscreen/>
                </div>
                <div className="overlay" ref={this.overlayRef}></div>
            </div>
        )
    }
}



export default VideoPlayeer;