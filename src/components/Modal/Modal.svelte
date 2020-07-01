<script>
    export let showModal;
</script>

{#if showModal}
    <div id="Modal" class="backdrop" on:click|self>
        <div class="modal" on:submit|preventDefault>
            <slot/>
        </div>
    </div>
{/if}