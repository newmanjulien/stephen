import {
	CATEGORIES,
	CATEGORY_IDS,
	DEFAULT_POLICY_ID,
	POLICY_IDS,
	getPolicy,
	type CategoryId,
	type PolicyId
} from '$lib/demo-data';
import { POLICY_ICON_MAP, type AppIcon } from '$lib/icons/app-icons';
import { getRouteNavLabel, getRouteTitle } from '$lib/routes/route-metadata';

export type NavSectionId = CategoryId;
export type NavRouteId = PolicyId;
export type NavPath = `/${NavRouteId}`;

type RouteSectionDefinition = {
	id: NavSectionId;
	heading: string;
	routeIds: readonly NavRouteId[];
	desktopSectionClass?: string;
	mobileSectionClass?: string;
	showCollapsedDivider?: boolean;
};

export type AppRouteDefinition = {
	sectionId: NavSectionId;
	href: NavPath;
	navLabel: string;
	headerTitle: string;
	title: string;
	icon: AppIcon;
};

function createRouteDefinition(routeId: NavRouteId): AppRouteDefinition {
	const route = getPolicy(routeId);

	return {
		sectionId: route.categoryId,
		href: `/${routeId}`,
		navLabel: getRouteNavLabel(route),
		headerTitle: getRouteNavLabel(route),
		title: getRouteTitle(route),
		icon: POLICY_ICON_MAP[route.iconId]
	};
}

export const ROUTE_SECTION_DEFINITIONS: readonly RouteSectionDefinition[] = CATEGORY_IDS.map(
	(categoryId, index) => ({
		id: categoryId,
		heading: CATEGORIES[categoryId].title,
		routeIds: CATEGORIES[categoryId].policyIds,
		desktopSectionClass: index === 0 ? 'pt-2' : 'pt-6',
		mobileSectionClass: index === 0 ? undefined : 'pt-4',
		showCollapsedDivider: index > 0
	})
);

export const ROUTE_REGISTRY = Object.fromEntries(
	POLICY_IDS.map((routeId) => [routeId, createRouteDefinition(routeId)])
) as Record<NavRouteId, AppRouteDefinition>;

export const DEFAULT_ROUTE_ID: NavRouteId = DEFAULT_POLICY_ID;
export const DEFAULT_ROUTE_HREF: NavPath = ROUTE_REGISTRY[DEFAULT_ROUTE_ID].href;
export const ROUTE_IDS_IN_ORDER = POLICY_IDS;
