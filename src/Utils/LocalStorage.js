export const loadInstallationPage = ()=> {
    try{
        const data = localStorage.getItem('MyInstallationPage')
    return data ? JSON.parse(data) : []
    }catch(err){
        console.log(err)
        return []
        
    }
};
 
export const updateList = (app)=> {
const myInstallation = loadInstallationPage()
try{
    const isDuplicate = myInstallation.some(p=> p.id === app.id)
}
}