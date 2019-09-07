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
    }, 1000 )
};
openYoutubePlayeer(){
    this.overlayRef.current.style.display = 'block';
    setTimeout( ()=>{
        this.customModalWindowRef.current.style.display = 'block';
        this.customModalWindowRef.current.style.opacity = '1';
        if(this.props.trailer){
            this.customModalWindowRef.current.childNodes[1].src = 'https://www.youtube.com/embed/' + 
                                                                    this.props.trailer.slice(27, this.props.trailer.length) + 
                                                                    '?version=3&autoplay=1&enablejsapi=1&start=0&controls=2'
        }
    }, 500 )
}
closeButton(){
    this.customModalWindowRef.current.style.display = 'none';
    this.customModalWindowRef.current.style.opacity = '0';
    this.overlayRef.current.style.display = 'none';
    if(this.props.trailer){
        this.customModalWindowRef.current.childNodes[1].src = '';
    }
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
                    { this.props.trailer ? <iframe id="ytplayer" 
                            type="text/html" 
                            width="960" 
                            height="540"
                            src={'https://www.youtube.com/embed/' + 
                                    this.props.trailer.slice(27, this.props.trailer.length) + 
                                    '?version=3&autoplay=1&enablejsapi=1&start=0&controls=2' }
                            frameBorder="0"
                            allowFullScreen/> : <h2 className="trailerNotFound">Sorry, trailer not found</h2> }
                </div>
                <div className="overlay" ref={this.overlayRef}></div>
            </div>
        )
    }
}




export default VideoPlayeer;