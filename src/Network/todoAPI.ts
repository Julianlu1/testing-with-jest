export async function getAllTodos(){
    const result = await fetch('https://jsonplaceholder.typicode.com/todos?&_limit=5')
    const data = await result.json().then(data =>{
        return data;
    });
    return data;
}


