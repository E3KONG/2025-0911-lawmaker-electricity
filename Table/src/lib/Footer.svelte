<script>
	export let footer = [
		"註：",
		"資料來源：",
		"資料整理：",
		"設計："
	];
</script>

<div class="footer">
	<div class="footerContent">
		{#each footer as item}
			<p>{item}</p>
		{/each}
	</div>
	<img src="The-Reporter_3-Standalone_symbol_bl-RGB.svg" alt="The Reporter">
</div>