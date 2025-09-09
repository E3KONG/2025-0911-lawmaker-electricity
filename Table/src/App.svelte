<script>
	import Header from './lib/Header.svelte';
	import Footer from './lib/Footer.svelte';
	import Table from './lib/Table.svelte';
  import {membersSpeech} from './assets/data-store.js';

	let title = "2024年第11屆立委上任後，誰討論最多國家能源政策？";
	let subtitle;
	let footer = [
		"註：截至2025年9月初，立法院第3會期公報未完整公布，本表僅統計2020年至2024年第2會期結束",
		"資料來源：立法院議事公報、報導者觀測站",
		"資料整理：簡毅慧  ｜  設計：江世民"
	];
</script>
<div class="container">
  <Header {title} {subtitle}/>
  <div class="chartContainer">
	  <Table tableData={$membersSpeech} style={"base"}/>
  </div>
  <Footer {footer}/>
</div>