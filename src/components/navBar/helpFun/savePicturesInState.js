import { getPictures } from './index';

export async function savePicturesInState( result, listOfPictures, setPicturesMovie ){
    if( listOfPictures ){
        await setPicturesMovie( [] );
    }
    const pictures = await getPictures( result );
    await setPicturesMovie( pictures );
}