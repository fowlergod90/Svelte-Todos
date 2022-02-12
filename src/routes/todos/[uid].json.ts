import type { RequestEvent } from "@sveltejs/kit";
import {api} from "./_api"

export async function del( event:RequestEvent) {
    console.log("uid--");
    console.log(event.params.uid);

    return api("DELETE", event.request , event.params.uid);

    // return {
    //     status:200,
    //     body : params.uid
    // }
}

export async function patch( event:RequestEvent) {
    console.log("pacth--");
    console.log(event.params.uid);
    const data = await event.request.text(); 
    console.log(data);

    return api("PATCH", event.request , event.params.uid ,data);

    // return {
    //     status:200,
    //     body : params.uid
    // }
}