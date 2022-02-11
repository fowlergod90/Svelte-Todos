import {api} from "./_api"

export async function del({request} , {params}) {
    return api("DELETE", request ,params.uid );
    // return {
    //     status:200,
    //     body : params.uid
    // }
}