import { FC } from 'react';

interface PercentBadgeProps {
	number: number;
}

export const PercentBadge: FC<PercentBadgeProps> = ({ number }) => {
	let textColor = number > 0 ? 'text-green' : 'text-red';
	if (number === 0) textColor = 'text-gray-500';

	return (
		<article
			aria-label="percent-badge"
			// className={`flex shrink-0 items-center px-s py-1 bg-white/50 font-bold rounded-ll ${textColor} text-p3`}
		>
			<p aria-label="percent-badge-label">
				{number > 0 ? '+' : ''}
				{number}%
			</p>
		</article>
	);
};
