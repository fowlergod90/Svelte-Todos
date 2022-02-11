import type { Handle } from "@sveltejs/kit";

export async function handle({ event, resolve }) {

    console.log("hooks");
    console.log(event.params);
    console.log(event.request.url.searchParams);
    console.log(event.request.method);
//    console.log(event);
	const response = await resolve(event);

	return response;
}