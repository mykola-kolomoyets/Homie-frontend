import { describe, expect as Expect, test } from 'vitest';
import { render, queryByAttribute } from '@testing-library/react';

import App from './App';

const getById = queryByAttribute.bind(null, 'id');

describe('App.tsx', () => {
	test('initial render', () => {
		const app = render(<App />);

		const appElement = getById(app.container, 'app');

		Expect(appElement).toBeDefined();
	});
});
