export const EXPERT_IDS = [
	'environmental-liability-specialist',
	'directors-officers-liability-specialist'
] as const;

export type ExpertId = (typeof EXPERT_IDS)[number];

export type ExpertRecord = {
	id: ExpertId;
	name: string;
	title: string;
	avatar: string;
};

export const EXPERTS = {
	'environmental-liability-specialist': {
		id: 'environmental-liability-specialist',
		name: 'Aaron Weinstock',
		title: 'National Practice Leader, Environmental Liability',
		avatar: '/avatars/weinstock.webp'
	},
	'directors-officers-liability-specialist': {
		id: 'directors-officers-liability-specialist',
		name: 'Brad Cox',
		title: 'National Practice Leader, Transportation',
		avatar: '/avatars/cox.webp'
	}
} as const satisfies Record<ExpertId, ExpertRecord>;

export function getExpert(expertId: ExpertId) {
	return EXPERTS[expertId];
}
