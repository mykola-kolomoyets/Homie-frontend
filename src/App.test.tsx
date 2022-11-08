import { describe, expect, it } from 'vitest';

import { render, screen } from './utils/test.utils';

import App from './App';

describe('App', () => {
	it('renders headline', () => {
		render(<App />);

		expect(
			screen.getByRole('heading', {
				level: 1,
			})
		).toHaveTextContent('Homie');
	});
});
