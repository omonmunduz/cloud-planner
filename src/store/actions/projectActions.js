export const createProject = (project) => {
    return (dispatch,getState,{getFirebase,getFirestore}) => {
        //make async call to database
        //use getFirestore to add project to the database before dispatching ana ction
        const firestore = getFirestore(); // now we have access to db. 
        firestore.collections('projects').add({
            ...project, // destructured title: project.title, content:project.content
            authFirstName:'net',
            authLastName:'tuma',
            authId:12345,
            createdAt: new Date()
        }).then(()=>{
            dispatch({type:'CREATE_PROJECT',project});
        }).catch((err)=>{
            dispatch({type:'CREATE_PROJECT_ERROR',err})
        })
    }
}