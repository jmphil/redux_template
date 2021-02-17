
//this is an aciton creator and it return an obj{}
export const increment = (n) => {
    

    return {
        type: "INCREMENET",
        data: n 
    }
}

//this is not a name export. When we import out componentn we have to import {increment} from '/.path'