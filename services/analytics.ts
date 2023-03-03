import axios from "axios"
// const url = `https://script.google.com/macros/s/${process.env.ANALYTICS}/exec`
const url = `https://script.google.com/macros/s/${process.env.ANALYTICS}/exec`


export const savePageView = async (page:string) => {
    
}

export const Analytics = {
    savePage:async (page:string) => {
        await axios.post(url,JSON.stringify({page}))
    },

    chat:async (chat:string) => {await axios.post(url + '?type=chat',JSON.stringify({chat}))},
}
