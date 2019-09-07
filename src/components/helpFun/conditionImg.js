import error from '../../img/error.svg'


export const conditionImg = (url)=>{
    if(url === undefined){
        const conditionClassName = 'moviePosterImg';
        return ['', conditionClassName ];
    }else if(url === ''){
        const conditionUrl = error;
        const conditionClassName = 'moviePosterError';
        return [conditionUrl, conditionClassName];
    }else{
        const conditionUrl = url;
        const conditionClassName = 'moviePosterImg';
        return [conditionUrl, conditionClassName];
    }
}