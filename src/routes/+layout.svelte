<script>
	import ModeSelect from '../lib/TopLevelModeSelect.svelte';
	import '../lib/styles.css';
</script>

<div class="app ">
	<ModeSelect />

	<main>
		<slot />
	</main>

	<footer>
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
    margin-top: 0.5em;
    margin-left: 0.5em;
    margin-right: 0.5em;
	}

	main {
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}

/*---------------------*/



</style>
