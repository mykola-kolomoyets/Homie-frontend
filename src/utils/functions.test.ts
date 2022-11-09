import { describe, expect, it } from 'vitest';

import { cleanup } from './test.utils';

import { getDecimalNumber, showDeltaPercents } from './functions';

afterEach(() => {
	cleanup();
});

describe('Functions', () => {
	describe('getDecimalNumber', () => {
		it('works with number', () => {
			expect(getDecimalNumber(1)).toBeTruthy();
		});

		it('integer will be equal itself', () => {
			const numbers = [0, 1, 2, 3, 4, 5, -15, -100, 1000];

			numbers.forEach((num) => {
				expect(getDecimalNumber(num)).toEqual(num);
			});
		});

		it('rounds to 1 digit if N.N0 number passed', () => {
			const numbers = [1.1, 100.6];

			const expectedNumber = [1.1, 100.6];

			numbers.forEach((num, index) => {
				expect(getDecimalNumber(num)).toEqual(expectedNumber[index]);
			});
		});

		it('N.NN number equals to itself', () => {
			const numbers = [1.12, 100.67];

			const expectedNumber = [1.12, 100.67];

			numbers.forEach((num, index) => {
				expect(getDecimalNumber(num)).toEqual(expectedNumber[index]);
			});
		});

		it('rounds the floating number to up, as Math.round', () => {
			const numbers = [1.125, 100.623, 12.678];

			const expectedNumber = [1.13, 100.62, 12.68];

			numbers.forEach((num, index) => {
				expect(getDecimalNumber(num)).toEqual(expectedNumber[index]);
			});
		});
	});

	describe('showDeltaPercents', () => {
		it('works with invalid and valid values', () => {
			const invalidValues = [
				{
					currentValue: null,
					previousValue: null,
				},
				{
					currentValue: 0,
					previousValue: null,
				},
				{
					currentValue: 0,
					previousValue: 0,
				},
				{
					currentValue: null,
					previousValue: 0,
				},
				{
					currentValue: 12,
					previousValue: 0,
				},
				{
					currentValue: 0,
					previousValue: -12,
				},
				{
					currentValue: 1,
					previousValue: 2,
				},
				{
					currentValue: 2,
					previousValue: 1,
				},
				{
					currentValue: 12.5,
					previousValue: 12.5,
				},
				{
					currentValue: 12.75,
					previousValue: 12.5,
				},
			];

			const expectedValues = [
				null,
				null,
				null,
				null,
				null,
				null,
				-50,
				100,
				0,
				2,
			];

			invalidValues.forEach((value, index) => {
				expect(showDeltaPercents(value)).toEqual(expectedValues[index]);
			});
		});
	});
});
