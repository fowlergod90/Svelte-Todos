export function get({params} ){
    return {
        status:200,
        body : params.uid
    }
}