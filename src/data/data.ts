import { routes } from '../app/routes';
import { iconsImgs } from '../utils/images';

export interface NavigationLink {
  id: number;
  title: string;
  image: string;
  link: string
}

export const navigationLinks: NavigationLink[] = [
    { id: 1, title: 'Dashboard', image: iconsImgs.home, link: routes.root },
    { id: 2, title: 'Профиль', image: iconsImgs.user, link: routes.profile },
    { id: 3, title: 'Последние тесты', image: iconsImgs.budget, link: routes.recentTests },
    { id: 4, title: 'Результаты', image: iconsImgs.check, link: routes.results },
    { id: 5, title: 'Баланс/Мой тариф', image: iconsImgs.wallet, link: routes.balance },
    { id: 6, title: 'Достижения', image: iconsImgs.report, link: routes.achievements },
];

export const recentTestResults = [
  { title: "Математика", score: 85 },
  { title: "История", score: 65 },
  { title: "Английский язык", score: 92 },
  { title: "Физика", score: 74 },
];

export const progressStats = [
  { title: "Количество пройденных тестов", averageScore: 60 },
  { title: "Средний балл", averageScore: 82 },
];

export const quizData = {
  question: "Which word is a synonym for 'happy'?",
  options: ["Sad", "Joyful", "Angry", "Tired"],
  correctIndex: 1,
};

