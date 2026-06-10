import type { CategoryId } from './categories';
import type { ExpertId } from './experts';

export const POLICY_IDS = [
	'environmental-liability-cleanup-remediation-costs',
	'environmental-liability-sudden-gradual-pollution',
	'environmental-liability-natural-resource-damages',
	'directors-officers-liability-social-engineering-fraud'
] as const;

export type PolicyId = (typeof POLICY_IDS)[number];

export type PolicyIconId =
	| 'droplets'
	| 'cloud-rain-wind'
	| 'tree-pine'
	| 'mail-warning';

export type PolicyRecord = {
	id: PolicyId;
	categoryId: CategoryId;
	iconId: PolicyIconId;
	title: string;
	expertId?: ExpertId;
};

export const POLICIES = {
	'environmental-liability-cleanup-remediation-costs': {
		id: 'environmental-liability-cleanup-remediation-costs',
		categoryId: 'environmental-liability',
		iconId: 'droplets',
		title: 'Cleanup / Remediation Costs'
	},
	'environmental-liability-sudden-gradual-pollution': {
		id: 'environmental-liability-sudden-gradual-pollution',
		categoryId: 'environmental-liability',
		iconId: 'cloud-rain-wind',
		title: 'Sudden & Gradual Pollution'
	},
	'environmental-liability-natural-resource-damages': {
		id: 'environmental-liability-natural-resource-damages',
		categoryId: 'environmental-liability',
		iconId: 'tree-pine',
		title: 'Natural Resource Damages'
	},
	'directors-officers-liability-social-engineering-fraud': {
		id: 'directors-officers-liability-social-engineering-fraud',
		categoryId: 'directors-officers-liability',
		iconId: 'mail-warning',
		title: 'Social Engineering Fraud'
	}
} as const satisfies Record<PolicyId, PolicyRecord>;

export const DEFAULT_POLICY_ID: PolicyId = 'environmental-liability-cleanup-remediation-costs';

export function getPolicy(policyId: PolicyId): PolicyRecord {
	return POLICIES[policyId];
}
