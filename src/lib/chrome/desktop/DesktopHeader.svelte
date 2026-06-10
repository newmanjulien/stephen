<script lang="ts">
	import SidebarSimpleIcon from 'phosphor-svelte/lib/SidebarSimpleIcon';
	import { useChromeShellState } from '$lib/chrome/shared/shell.svelte';
	import { FloatingTooltip, IconButton } from '$lib/ui';

	type Props = {
		title: string;
	};

	let { title }: Props = $props();
	const shellState = useChromeShellState();
	const sidebarToggleTooltipText = $derived(
		shellState.isSidebarExpanded ? 'Close sidebar' : 'Open sidebar'
	);
</script>

<header class="hidden h-11 items-center border-b border-zinc-100 bg-white pl-1 pr-4 md:flex">
	<div class="flex min-w-0 flex-1 items-center">
		<FloatingTooltip
			id="desktop-sidebar-toggle-tooltip"
			text={sidebarToggleTooltipText}
			placement="bottom"
			maxWidth={104}
			fitContent
			panelClass="whitespace-nowrap border-stone-200 bg-stone-100 px-2 py-1 text-[0.68rem] leading-none font-medium text-stone-700 shadow-sm shadow-stone-950/5"
		>
			{#snippet trigger({ describedBy })}
				<IconButton
					aria-label={sidebarToggleTooltipText}
					aria-describedby={describedBy}
					variant="ghost"
					class="mr-1 ml-1 size-7 text-stone-500 hover:bg-stone-100 hover:text-stone-700 focus-visible:bg-stone-100 focus-visible:text-stone-700 focus-visible:ring-2 focus-visible:ring-stone-300"
					onclick={() => {
						shellState.toggleSidebar();
					}}
				>
					<SidebarSimpleIcon size={14} weight="regular" />
				</IconButton>
			{/snippet}
		</FloatingTooltip>

		<p class="min-w-0 truncate text-xs font-medium tracking-wide text-zinc-500">{title}</p>
	</div>

	<div class="flex items-center gap-2"></div>
</header>
