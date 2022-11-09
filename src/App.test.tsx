import { describe, expect, it } from 'vitest';

import { cleanup, render, screen } from './utils/test.utils';

import App from './App';

afterEach(() => {
	cleanup();
});

describe('App', () => {
	it('renders headline on any page', () => {
		render(<App />);

		expect(screen.getAllByText(/Homie/)).toBeDefined();
	});
});
