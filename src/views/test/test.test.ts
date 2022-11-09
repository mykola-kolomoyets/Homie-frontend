// import { describe, expect, it } from 'vitest';
import { screen, render, cleanup } from '../../utils/test.utils';
// import { describe, expect, beforeEach, it, jest } from '@jest/globals';

import { testController } from './test.controller';
import { TestModel } from './test.model';

let initialControllerArgs: TestModel;
afterEach(() => {
	cleanup();
});

describe('test controller', () => {
	beforeEach(() => {
		initialControllerArgs = {
			count: 0,
		};
	});

	it('mounts with default value 0', async () => {
		const { onMount, getCounter } = testController({
			model: initialControllerArgs,
		});

		await onMount();

		expect(getCounter()).toEqual(0);
	});

	it('increases the value', async () => {
		const { onMount, getCounter, increase } = testController({
			model: initialControllerArgs,
		});

		await onMount();

		increase();

		expect(getCounter()).toEqual(1);
	});

	it('decreases the value', async () => {
		const { onMount, getCounter, decrease } = testController({
			model: initialControllerArgs,
		});

		await onMount();

		decrease();

		expect(getCounter()).toEqual(-1);
	});
});
