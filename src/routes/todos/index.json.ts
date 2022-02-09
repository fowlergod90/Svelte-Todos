import type { RequestHandler } from "@sveltejs/kit"

export const get: RequestHandler = () => {
    return {
        status:200,
        body : "Hello Get API"
    }
   
}

export function post( {request} ) {

    return {
        status : 200,
        body: request.formData() 
    }
}