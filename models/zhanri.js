function zhanri(key){
    const obj={
    'Drame': 1,
    'Tragjedi': 2,
    'Romance': 3,
    'Roman': 4, 
    'Poeme': 5
    }
    return obj[key];
}

module.exports  = zhanri;