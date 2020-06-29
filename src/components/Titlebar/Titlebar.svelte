<script>

    const { remote } = require('electron');
    
    const minimize = () => {
        remote.getCurrentWindow().minimize();
    }

    const minMaximize = () => {
        const currentWindow = remote.getCurrentWindow();
        if (currentWindow.isMaximized()) {
            currentWindow.unmaximize();
        } else {
            currentWindow.maximize();
        }
    }

    const quit = () => {
        remote.app.quit();
    }

</script>

<div id="Titlebar">

    <div class="app-name-container">
        <img class="logo" src="./assets/discord.svg" alt="Discord Logo">
    </div>

    <div class="window-controls-container">
        <button id="minimize-button" class="minimize-button" on:click={minimize}>–</button>
        <button id="min-max-button" class="min-max-button" on:click={minMaximize}>◻</button>
        <button id="close-button" class="close-button" on:click={quit}>✕</button>
    </div>

</div>