import { AsyncStorage } from 'react-native';
import Config from '../config';

function withLeadingZero(amount){
  if (amount < 10 ){
    return `0${ amount }`;
  } else {
    return `${ amount }`;
  }
}

export function formattedTime( timeInSeconds ){
  let minutes = Math.floor(timeInSeconds / 60);
  let seconds = timeInSeconds - minutes * 60;

  if( isNaN(minutes) || isNaN(seconds) || minutes < 0 && seconds < 0){
    return "";
  } else {
    return(`${ withLeadingZero( minutes ) }:${ withLeadingZero( seconds.toFixed(0) ) }`);
  }
}
 
export function isAudioObject(contentType) {
  return contentType == "audio/mpeg";
}

export async function getStorage(key) {
  let storage = await AsyncStorage.getItem(key);
  storage = storage || JSON.stringify([]);
  return JSON.parse(storage);
}
