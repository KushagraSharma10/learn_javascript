function pow(x,a){
    if( a === 0){
        return 1
    }

    if( a === 1){
        return x;
    }

    return x * pow(x,a-1)

}


console.log(pow(3,3))