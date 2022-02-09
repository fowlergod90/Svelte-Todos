import type { RequestHandler } from "@sveltejs/kit"

let todos: Todo[] = [];

export const get: RequestHandler = () => {
    return {
        status:200,
        body : todos
    }
   
}

export function post( {request} ) {

    todos.push({
        created_at: new Date(),
        done: false,
        text: request.body.get("text")
     }
    )
    return {
        status : 303,
        headers: {
            location:  "/"
        }
    }
}