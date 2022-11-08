import { ReactNode } from 'react';

export type ExpenseItemData = {
	amount: number;
	quantity: number;
};

export type PeriodValue<T = number> = {
	previousValue?: T | null;
	currentValue?: T | null;
};
