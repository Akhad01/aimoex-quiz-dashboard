import { iconsImgs, personsImgs } from '../utils/images';

export interface NavigationLink {
  id: number;
  title: string;
  image: string;
}

// export const navigationLinks: NavigationLink[] = [
//     { id: 1, title: 'Home', image: iconsImgs.home },
//     { id: 2, title: 'Budget', image: iconsImgs.budget },
//     { id: 3, title: 'Transactions', image: iconsImgs.plane },
//     { id: 4, title: 'Subscriptions', image: iconsImgs.wallet },
//     { id: 5, title: 'Loans', image: iconsImgs.bills },
//     { id: 6, title: 'Reports', image: iconsImgs.report },
//     { id: 7, title: 'Savings', image: iconsImgs.wallet },
//     { id: 8, title: 'Financial Advice', image: iconsImgs.wealth },
//     { id: 9, title: 'Account', image: iconsImgs.user },
//     { id: 10, title: 'Settings', image: iconsImgs.gears }
// ];

export const navigationLinks: NavigationLink[] = [
    { id: 1, title: 'Пользовательский панель', image: iconsImgs.home },
    { id: 2, title: 'Профиль', image: iconsImgs.user },
    { id: 3, title: 'Последние тесты', image: iconsImgs.budget },
    { id: 4, title: 'Результаты', image: iconsImgs.check },
    { id: 5, title: 'Баланс/Мой тариф', image: iconsImgs.wallet },
    { id: 6, title: 'Достижения', image: iconsImgs.report },
];

export interface Transaction {
  id: number;
  name: string;
  image: string;
  date: string;
  amount: number;
}

export const transactions: Transaction[] = [
    {
        id: 11, 
        name: "Sarah Parker",
        image: personsImgs.person_four,
        date: "23/12/04",
        amount: 22000
    },
    {
        id: 12, 
        name: "Krisitine Carter",
        image: personsImgs.person_three,
        date: "23/07/21",
        amount: 20000
    },
    {
        id: 13, 
        name: "Irene Doe",
        image: personsImgs.person_two,
        date: "23/08/25",
        amount: 30000
    }
];

export interface ReportEntry {
  id: number;
  month: string;
  value1: number;
  value2: number | null;
}

export const reportData: ReportEntry[] = [
    {
        id: 14,
        month: "Jan",
        value1: 45,
        value2: null
    },
    {
        id: 15,
        month: "Feb",
        value1: 45,
        value2: 60
    },
    {
        id: 16,
        month: "Mar",
        value1: 45,
        value2: null
    },
    {
        id: 17,
        month: "Apr",
        value1: 45,
        value2: null
    },
    {
        id: 18,
        month: "May",
        value1: 45,
        value2: null
    }
];

export interface BudgetItem {
  id: number;
  title: string;
  type: string | null;
  amount: number;
}

export const budget: BudgetItem[] = [
    {
        id: 19, 
        title: "Subscriptions",
        type: "Automated",
        amount: 22000
    },
    {
        id: 20, 
        title: "Loan Payment",
        type: "Automated",
        amount: 16000
    },
    {
        id: 21, 
        title: "Foodstuff",
        type: "Automated",
        amount: 20000
    },
    {
        id: 22, 
        title: "Subscriptions",
        type: null,
        amount: 10000
    },
    {
        id: 23, 
        title: "Subscriptions",
        type: null,
        amount: 40000
    }
];

export interface Subscription {
  id: number;
  title: string;
  due_date: string;
  amount: number;
}

export const subscriptions: Subscription[] = [
    {
        id: 24,
        title: "LinkedIn",
        due_date: "23/12/04",
        amount: 20000
    },
    {
        id: 25,
        title: "Netflix",
        due_date: "23/12/10",
        amount: 5000
    },
    {
        id: 26,
        title: "DSTV",
        due_date: "23/12/22",
        amount: 2000
    }
];

export interface Saving {
  id: number;
  image: string;
  saving_amount: number;
  title: string;
  date_taken: string;
  amount_left: number;
}

export const savings: Saving[] = [
    {
        id: 27,
        image: personsImgs.person_one,
        saving_amount: 250000,
        title: "Pay kid bro’s fees",
        date_taken: "23/12/22",
        amount_left: 40000
    }
]