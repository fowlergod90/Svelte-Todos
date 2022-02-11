import type { RequestHandler } from "@sveltejs/kit"
import { api } from "./_api";

//let todos: Todo[] = [];

// export const get: RequestHandler = () => {
//     return {
//         status:200,
//         body : todos
//     }
// }

export async function get(){
    return api( "GET" );
    // return {
    //     status:200,
    //     body : todos
    // }
}

export async function post( {request} ) {
    return api("POST", request);
//     const data = await request.text();
// //    console.log(data);
    
//     todos.push({
//         created_at: new Date(),
//         done: false,
//         text: data
//      }
//     )
    // return {
    //     status : 303,  // 303 == tell browser to redirect to a root '/'
    //     headers: {
    //         location:  "/"
    //     }
    //     // status: 200,
    //     // body: data
    // }
}