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
                //    console.log(data);                
                todos.push({
                    uid: '${Date.now()}',  // uid should be generated from DB. This is a workaorund to use milisec 
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
        case "DELET":
            todos = todos.filter(todo => todo.uid != uid );
            status = 200;
            break;
        default:
            break;
    }

    return {
        status,
        body
    }
        
}