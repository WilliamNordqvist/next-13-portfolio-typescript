import axios from "axios"

const url = process.env.NEXT_PUBLIC_ANALYTICS as string
export const Analytics = {
    savePage: async (page:string) => await axios.post(url,JSON.stringify({page})),
    chat: async (chat:string[]) => await axios.post(url + '?type=chat',JSON.stringify({q:chat[0], a:chat[1]})),
}
