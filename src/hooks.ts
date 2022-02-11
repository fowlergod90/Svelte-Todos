import type { Handle } from "@sveltejs/kit";

export async function handle({ event, resolve }) {

    console.log("hooks");
    console.log(event.params);
    console.log(event.url.searchParams.get('_mt'));
    console.log(event.request.method);
//    console.log(event);
	const response = await resolve(event);

	return response;
}