import type { RequestHandler } from "@sveltejs/kit"

//let todos: Todo[] = [];

// export const get: RequestHandler = () => {
//     return {
//         status:200,
//         body : todos
//     }
// }

export function get(){
    return {
        status:200,
        body : todos
    }
}

export async function post( {request} ) {
    const data = await request.text();
//    console.log(data);
    
    todos.push({
        created_at: new Date(),
        done: false,
        text: data
     }
    )
    return {
        status : 303,  // 303 == tell browser to redirect to a root '/'
        headers: {
            location:  "/"
        }
        // status: 200,
        // body: data
    }
}