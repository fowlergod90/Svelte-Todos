let todos: Todo[] = [];

export async function api( method , request?: Request , uid?) {
    let status = 500;
    let body = {};
    
    switch( method ) {
        case "GET":
                status  = 200;
                body    = todos;
            break;
        case "POST":
                const data = await request.text();
                console.log("post111");                
                todos.push({
                    uid: Date.now().toString(),  // uid should be generated from DB. This is a workaorund to use milisec 
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
            };
        case "DELETE":
            console.log("del");
            console.log(uid);
            todos = todos.filter(todo => todo.uid != uid );
            body = todos;
            status = 200;
            return {
                status : 303,  // 303 == tell browser to redirect to a root '/'
                headers: {
                    location:  "/"
                }
            };
        default:
            break;
    }

    return {
        status,
        body
    }
        
}