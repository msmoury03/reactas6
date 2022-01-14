const iniit = [{name:"rahul"}]

const counterreducer = (state = iniit, action)=>{
    switch (action.type) {
        case "INCREASE":
            return state+1

            case "DECRASE":
                return state-1
    
        default:
            return state;
    }
}

export default counterreducer;