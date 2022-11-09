import { Mock, vi } from 'vitest';
// import '@testing-library/jest-dom';

import { cleanup, render, screen, userEvent } from '../../../utils/test.utils';

import { Button } from '.';

afterEach(() => {
	cleanup();
});

let onClick: Mock<[], number>;

describe('Button', () => {
	beforeEach(() => {
		onClick = vi.fn(() => 0);
	});

	it('mount correctly', () => {
		render(<Button title="Hello world" />);

		const buttonElement = screen.getByText(/Hello world/);

		expect(buttonElement).toBeDefined();
	});

	it('name applies as attribute', () => {
		render(<Button name="button1" title="Hello world" />);

		const buttonElement = screen.getByRole('button', {
			name: /Hello world/,
		});

		expect(buttonElement).toBeDefined();
	});

	it('by 1 click button clicks 1 time', async () => {
		render(<Button name="button1" title="Test button 1" onClick={onClick} />);

		let button = screen.getByText(/Test button 1/);

		await userEvent.click(button);

		expect(onClick.mock.calls.length).toEqual(1);
	});

	it('disabled button is not clickable', async () => {
		render(
			<Button name="button2" title="Hello world" onClick={onClick} disabled />
		);

		const button = screen.getByText(/Hello world/);

		await userEvent.click(button);

		expect(onClick.mock.calls.length).toEqual(0);
	});
});
