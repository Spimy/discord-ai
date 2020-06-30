<script>
    export let showModal;

</script>

{#if showModal}
    <div id="Modal" class="backdrop" on:click|self>
        <form class="modal" on:submit|preventDefault>
            <slot></slot>
        </form>
    </div>
{/if}