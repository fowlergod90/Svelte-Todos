<script context="module" lang="ts">
    import type { Load } from "@sveltejs/kit";

    export async function load({fetch}) {
        const res = await fetch("/todos.json");

        if ( res.ok  ){
            const todos = await res.json();
            return {
                props: {todos}
            }
        }

        const { message } = await res.json();
        return {
            error: Error(message)
            
        }
    }
</script>


<script lang="ts">
    import TodoItem from "$lib/todo-item.svelte";

    export let todos: Todo[];

    const title = "Todos";
</script>

<style >
    .todos{
        width : 100%;
        max-width: 42rem;
        margin: 4rem auto 0 auto;
    }

    .new{
        margin : 0 0 0.5rem 0;
    }

    .new input{
        font-size : 28px;
        width : 100%;
        padding: 0.5em 1em 0.3em 1em;
        box-sizing: border-box;
        background: rgba(255, 255, 255, 0.05);
        border-radius: 8px;
        text-align: center;
    }

    /* this is to target to removal border from all input fields in class todos and its child component */
    /* i.e. within TodoItem.  This is svelte way. */

    .todos :global(input){
        border: 1px solid transparent;
    }

    /* this is to removal borer when its focus - svelte way */

    .todos :global(input:focus-visible){
        box-shadow: inset 1px 1px 1px 6px rgba(0, 0, 0, 0.1);
        border: 1px solid #ff3e00 !important;
        outline: none;
    }
</style>

<svelte:head>
    <title>{title}</title>
</svelte:head>

<div class="todos" >
    <h1>{title}</h1>
    <form action="/todos.json" method="post" class="new" >
        <input type="text" name="text" aria-label="Add a todo" placeholder="+ Type to add a Todo"/>
    </form>

    {#each todos as todo}
        <TodoItem {todo}/>
    {/each}

</div>