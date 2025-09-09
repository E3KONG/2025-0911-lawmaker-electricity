<script>
	import { membersIdentityByName } from '../assets/data-store.js';

	export let tableData = [
		{
			vitae : "dolorem",
			lectus : "ipsum",
			quisquam : "quia"
		},
		{
			vitae : "amet",
			lectus : "consectetur",
			quisquam : "adipisci"
		}
	];
	export let style;
  const columns = tableData.length ? Object.keys(tableData[0]): [];

	function identityTooltipFor(name) {
		if (!name) return null;
		const match = $membersIdentityByName && $membersIdentityByName.get
			? $membersIdentityByName.get(name)
			: null;
		if (!match) return null;
		const parts = [match.name, match.party, match.group].filter(Boolean);
		return parts.join('\n');
	}
</script>

<table class={style}>
	<thead>
	<tr>
		<th>議題</th>
		<th colspan={tableData.length}>立法委員</th>
	</tr>
	</thead>
	<tbody>
	{#each columns as col}
		<tr>
			<th>{col}</th>
			{#each tableData as row}
				<td data-tooltip={ identityTooltipFor(row[col]) || undefined }>{row[col]}</td>
			{/each}
		</tr>
	{/each}
	</tbody>
</table>

<style>
  table, th, td {
    border-collapse: collapse;
  }
  td {
    white-space: pre-line;
  }
  table.base {
    border: 1px solid #ccc;
    background-color: #eee;
    width: 100%;
    text-align: center;
    border-collapse: collapse;
  }
  table.base td, table.base th {
    border: 1px solid #bbb;
    padding: 3px 2px;
  }
  table.base tbody td {
    font-size: var(--fs-m);
    color: #333;
    font-weight: 400;
  }
  table.base tr:nth-child(even) {
    background: #ddd;
  }
  table.base thead {
    background: #333;
  }
  table.base thead th {
    font-size: var(--fs-m);
    font-weight: 500;
    color: #FFFFFF;
    text-align: center;
    border-left: 1px solid #f1f1f1;
  }
  table.base thead th:first-child {
    border-left: none;
  }
  td[data-tooltip] {
    position: relative;
    --tt-speed: 150ms;
    --tt-bgColor: #ffffffcc;
    --tt-fontColor: #333;
    --tt-maxWidth: 150px;
  }
  td[data-tooltip]::after {
    content: attr(data-tooltip);
    position: absolute;
    left: 50%;
    bottom: 100%;
    transform: translate(-50%, 4px) scale(1);
    background: var(--tt-bgColor);
    color: var(--tt-fontColor);
    padding: 4px 6px;
    border-radius: 3px;
    font-size: var(--fs-s);
    line-height: 1.4;
    white-space: pre-wrap;
    pointer-events: none;
    opacity: 0;
    transition: opacity var(--tt-speed) ease, transform var(--tt-speed) ease;
    width: max-content;
    max-width: var(--tt-maxWidth);
  }
  td[data-tooltip]::before {
    content: "";
    position: absolute;
    left: 50%;
    bottom: calc(100% - 10px);
    transform: translateX(-50%) scale(1);
    border: 5px solid transparent;
    border-top-color: var(--tt-bgColor);
    opacity: 0;
    transition: opacity var(--tt-speed) ease, transform var(--tt-speed) ease;
  }
  td[data-tooltip]:hover::after,
  td[data-tooltip]:hover::before {
    opacity: 1;
    transform: translate(-50%, 0) scale(1);
    backdrop-filter: blur(5px);
    filter: drop-shadow(0 0 5px rgba(0, 0, 0, 0.2));
  }
  td:not([data-tooltip])::after,
  td:not([data-tooltip])::before {
    content: none;
  }
  @media (prefers-reduced-motion: reduce) {
    td[data-tooltip]::after,
    td[data-tooltip]::before {
      transition: none;
    }
  }
</style>