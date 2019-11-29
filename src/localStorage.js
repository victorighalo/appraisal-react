

export const loadState = ()=>{
    try{
        const seriaizedState = localStorage.getItem('state');
        if(seriaizedState == null){
            return undefined;
        }
        return JSON.parse(seriaizedState)
    }
    catch(err){
        return undefined;
    }
}

export const saveState = (state) =>{
    try{
        const seriaizedState = JSON.parse(state);
        localStorage.setItem('state', seriaizedState)
    }catch(err){

    }
}