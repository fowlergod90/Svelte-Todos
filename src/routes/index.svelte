<script>
    import TodoItem from "$lib/todo-item.svelte";

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

    .newe input{
        font-size : 28px;
    }

</style>

<svelte:head>
    <title>{title}</title>
</svelte:head>

<div class="todos" >
    <h1>{title}</h1>
    <form action="" method="" class="new" >
        <input type="text" name="text" aria-label="Add a todo" placeholder="+ Type to add a Todo"/>
    </form>

    <TodoItem />
    <TodoItem />
    <TodoItem />
</div>