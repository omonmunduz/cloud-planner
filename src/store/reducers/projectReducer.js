const initState = {};

const projectReducer = (state=initState,action) => {
    switch (action.type){
        case 'CREATE_PROJECT':
            console.log('craeted project',action.project)
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log("couldn't create a project",action.err)
            return state;
        default:
            return state;
    }
}
export default projectReducer;