<script>
    const { remote } = require("electron");

    const minimize = () => (
        remote.getCurrentWindow().minimize()
    );

    const minMaximize = () => {
        const window = remote.getCurrentWindow();
        let isMaximized = window.isFullScreen();

        if (isMaximized) {
            window.unmaximize();
        } else {
            window.maximize();
        }
    };

    const quit = () => remote.app.quit();
</script>

<div id="Titlebar">
    <div class="logo">
        <img src="./assets/discord.svg" alt="Discord Logo"/>
        <p>AI</p>
    </div>
    <div class="controls">
        <div class="btn" on:click={minimize}>
            <svg aria-hidden="false" width="12" height="12" viewBox="0 0 12 12">
                <rect fill="currentColor" width="10" height="1" x="1" y="6"/>
            </svg>
        </div>
        <div class="btn" on:click={minMaximize}>
            <svg aria-hidden="false" width="12" height="12" viewBox="0 0 12 12">
                <rect width="9" height="9" x="1.5" y="1.5" fill="none" stroke="currentColor"/>
            </svg>
        </div>
        <div class="btn close" on:click={quit}>
            <svg aria-hidden="false" width="12" height="12" viewBox="0 0 12 12">
                <polygon fill="currentColor" fill-rule="evenodd" points="11 1.576 6.583 6 11 10.424 10.424 11 6 6.583 1.576 11 1 10.424 5.417 6 1 1.576 1.576 1 6 5.417 10.424 1"/>
            </svg>
        </div>
    </div>
</div>