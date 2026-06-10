import ArrowUpIcon from 'phosphor-svelte/lib/ArrowUpIcon';
import CaretUpDownIcon from 'phosphor-svelte/lib/CaretUpDownIcon';
import CloudRainIcon from 'phosphor-svelte/lib/CloudRainIcon';
import DropIcon from 'phosphor-svelte/lib/DropIcon';
import ListIcon from 'phosphor-svelte/lib/ListIcon';
import PlusIcon from 'phosphor-svelte/lib/PlusIcon';
import QuestionIcon from 'phosphor-svelte/lib/QuestionIcon';
import SidebarIcon from 'phosphor-svelte/lib/SidebarIcon';
import TreeEvergreenIcon from 'phosphor-svelte/lib/TreeEvergreenIcon';
import WarningCircleIcon from 'phosphor-svelte/lib/WarningCircleIcon';
import XIcon from 'phosphor-svelte/lib/XIcon';
import type { PolicyIconId } from '$lib/demo-data';

export type AppIcon = typeof QuestionIcon;

export const AddIcon: AppIcon = PlusIcon;
export const SubmitIcon: AppIcon = ArrowUpIcon;
export const HelpIcon: AppIcon = QuestionIcon;
export const MenuIcon: AppIcon = ListIcon;
export const CloseIcon: AppIcon = XIcon;
export const SidebarToggleIcon: AppIcon = SidebarIcon;
export const AccountSwitcherIcon: AppIcon = CaretUpDownIcon;

export const POLICY_ICON_MAP = {
	droplets: DropIcon,
	'cloud-rain-wind': CloudRainIcon,
	'tree-pine': TreeEvergreenIcon,
	'mail-warning': WarningCircleIcon
} as const satisfies Record<PolicyIconId, AppIcon>;
