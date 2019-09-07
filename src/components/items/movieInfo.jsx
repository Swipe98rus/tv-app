import React from 'react';

class MovieInfo extends React.Component{
    render(){
        const rateOthers = this.props.rateOthers;
        const rateIMDB = this.props.rateIMDB;
        let rateVerified;
        if(rateOthers){
            rateVerified = rateOthers;
        }else{
            rateVerified = [];
        }
        return(
            <div className="movieInfo">
                <h4>{ this.props.year }</h4>
                <h4>{rateOthers? rateOthers.Country : 'Searching..'}</h4>
                <p>IMDB:  {rateIMDB ? rateIMDB : 'Searching..'}</p>
                <p>
                   {rateVerified[1] ? rateVerified[1].Source +': '+ rateVerified[1].Value : 'Searching..'}
                </p>
                <p>
                    {rateVerified[2] ? rateVerified[2].Source +': '+ rateVerified[2].Value : 'Searching..'}
                </p>
            </div>
        )
    }
}

export default MovieInfo;