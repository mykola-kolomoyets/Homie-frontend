import { describe, expect, it } from 'vitest';
import '@testing-library/jest-dom';

import { cleanup, render, screen } from '../../../utils/test.utils';

import { PercentBadge } from '.';

/**
 * @jest-environment jsdom
 */

afterEach(() => {
	cleanup();
});

describe('Percent Badge', () => {
	it('mount correctly', async () => {
		render(<PercentBadge number={0} />);

		const percentLabel = screen.getByText(/0%/);

		expect(percentLabel).toBeDefined();
	});

	it('0% displayed when pass 0 as value', async () => {
		render(<PercentBadge number={0} />);

		const percentLabel = screen.getByText(/0%/);

		expect(percentLabel).toBeDefined();
	});

	it('+N% displayed when pass positive integer value', async () => {
		render(<PercentBadge number={2} />);

		const percentLabel = screen.getByText('+2%');

		expect(percentLabel).toBeDefined();
	});

	it('+N.NN% displayed when pass positive floating value', async () => {
		render(<PercentBadge number={2.6} />);

		let percentLabel = screen.getByText(/[+]2.6%/);

		expect(percentLabel).toBeDefined();

		cleanup();

		render(<PercentBadge number={2.62} />);

		percentLabel = screen.getByText(/[+]2.62%/);

		expect(percentLabel).toBeDefined();
	});

	it('-N% displayed when pass negative integer value', async () => {
		render(<PercentBadge number={-2} />);

		const percentLabel = screen.getByText(/[-]2%/);

		expect(percentLabel).toBeDefined();
	});

	it('-N.NN% displayed when pass negative floating value', async () => {
		render(<PercentBadge number={-2.6} />);

		let percentLabel = screen.getByText(/[-]2.6%/);

		expect(percentLabel).toBeDefined();

		cleanup();

		render(<PercentBadge number={-2.62} />);

		percentLabel = screen.getByText(/[-]2.62%/);

		expect(percentLabel).toBeDefined();
	});
});
