<style>
    .todo {
        display: grid;
        grid-template-columns: 2rem 1fr 2rem;
        gap: 0.5rem;
        align-items: center;
        margin: 0 0 0.5rem 0;
        padding: 0.5rem;
        background-color: white;
        border-radius: 8px;
        filter: drop-shadow(2px 4px 6px rgba(0,0,0,0.1));
        transform: translate(-1px,-1px);
        transition: filter 0.2s transform 0.2s;
    }
</style>

<div class="todo">
    <form action="" method="" >
        <input type="hidden" name="done" value="" />
        <button aria-label="Mark done/undone" class="toggle">Done/Undone</button>    
    </form>

    <form action="" method="">
        <input type="text"/>
        <button aria-label="Save todo" class="save">Save</button>
    </form>
    
    <form action="" method="">
        <button aria-label="Delete todo" class="delete">Delete</button>
    </form>
</div>