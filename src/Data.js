export const API_KEY = 'AIzaSyCLYduoPEDDGaFast6jau4g8AWq6_pOdzU';
// export const API_KEY = import.meta.env.API_KEY


export const value_converter=(value)=>{
    if(value>=1000000){
        return Math.floor(value/1000000)+'M';
    }else if(value>=1000){
        return Math.floor(value/1000)+'K';
    }
    else{
        return value;
    }
}


