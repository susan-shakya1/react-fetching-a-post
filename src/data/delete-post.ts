import { StimulatedError } from "../utils"

 export async function Deletepost (postId:number){
    StimulatedError("Failed to delete the post")
     const response=await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`,
    {
        method:"DELETE",
        headers:{
            "content-type":"application/json"
        }
    }
    )
    const data = await response.json()
    console.log("the deleted post",postId)
    return data
}