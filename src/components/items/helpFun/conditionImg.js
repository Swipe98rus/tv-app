import downloding from '../../../img/downloding.svg';
import error from '../../../img/error.svg'


export const conditionImg = (url)=>{
    if(url === undefined){
        const conditionUrl = downloding;
        const conditionClassName = 'moviePosterDownloding';
        return [conditionUrl, conditionClassName];
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