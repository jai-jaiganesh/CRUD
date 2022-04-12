
const initialState=[
    {
        value:0,
        name:"dhoni",
        label:"CSK",
        status:"Active",
        number:"2015-09-30",

        Notes:"Captian Cool"
    },
    {
        value:1,
        name:"Raina",
        label:"RCB",
        status:"Inactive",
        number:"2015-09-30",
        Notes:"Mr.IPL"
    },
];
const memberReducer =(state = initialState,action) =>{
    switch (action.type) {
        case "ADD":
            state=[...state,action.payload];
            return state;
            case "UPDATE":
                const update=state.map(member=>member.value===action.payload.value?
                    action.payload:member);
                    state=update;
                    return state;
            case "DELETE":
                const filter =state.filter(member=>member.value!==action.payload && member);
                    state=filter;
                    return state;
            case "SORTED":
            state =action.payload;
            return state;
            
        default:
            return state;
    }
};


export default memberReducer;