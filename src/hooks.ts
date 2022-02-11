import type { Handle } from "@sveltejs/kit";
import { api } from "./routes/todos/_api";

export async function handle({ event, resolve }) {

    let response = {};

    console.log("hooks");
    console.log(event.params);
    console.log(event.url.searchParams.get('_mt'));
    console.log(event.request.method);

    if ( event.url.searchParams.get('_mt') ){
        let res = await api("DELETE", event.request);
        console.log("in if");
    }
    else{
    	response = await resolve(event);
    }

	return response;
}