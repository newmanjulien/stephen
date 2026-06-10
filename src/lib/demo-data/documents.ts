import type { CategoryId } from './categories';
import { getPolicy, type PolicyId } from './policies';

export type DocumentRecord = {
	id: string;
	title: string;
	href?: string;
};

const SECONDARY_DOCUMENT_SUFFIXES: Record<CategoryId, string> = {
	'environmental-liability': 'Response Guide',
	'directors-officers-liability': 'Response Guide'
};

function toDocumentId(policyId: PolicyId, suffix: string) {
	return `${policyId}-${suffix
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/(^-|-$)/g, '')}`;
}

export function getPolicyDocuments(policyId: PolicyId): readonly DocumentRecord[] {
	const policy = getPolicy(policyId);
	const secondarySuffix = SECONDARY_DOCUMENT_SUFFIXES[policy.categoryId];

	return [
		{
			id: `${policy.id}-coverage-overview`,
			title: `${policy.title} Coverage Overview`
		},
		{
			id: toDocumentId(policy.id, secondarySuffix),
			title: `${policy.title} ${secondarySuffix}`
		}
	];
}
