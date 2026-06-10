import type { ExpertId } from './experts';
import type { PolicyId } from './policies';

export const CATEGORY_IDS = [
	'environmental-liability',
	'directors-officers-liability'
] as const;

export type CategoryId = (typeof CATEGORY_IDS)[number];

export type CategoryRecord = {
	id: CategoryId;
	title: string;
	expertId: ExpertId;
	policyIds: readonly PolicyId[];
};

export const CATEGORIES = {
	'environmental-liability': {
		id: 'environmental-liability',
		title: 'Environmental Liability',
		expertId: 'environmental-liability-specialist',
		policyIds: [
			'environmental-liability-cleanup-remediation-costs',
			'environmental-liability-sudden-gradual-pollution',
			'environmental-liability-natural-resource-damages'
		]
	},
	'directors-officers-liability': {
		id: 'directors-officers-liability',
		title: 'Directors & Officers Liability',
		expertId: 'directors-officers-liability-specialist',
		policyIds: ['directors-officers-liability-social-engineering-fraud']
	}
} as const satisfies Record<CategoryId, CategoryRecord>;

export function getCategory(categoryId: CategoryId) {
	return CATEGORIES[categoryId];
}
