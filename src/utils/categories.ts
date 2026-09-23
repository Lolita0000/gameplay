import { DuelIcon, FunIcon, RankedIcon, TrainingIcon } from '@/assets/icons';

export const categories = [
  { id: '1', title: 'Ranqueada', icon: RankedIcon },
  { id: '2', title: 'Duelo 1x1', icon: DuelIcon },
  { id: '3', title: 'Diversão', icon: FunIcon },
  { id: '4', title: 'Treino', icon: TrainingIcon },
];

export type CategoryItem = (typeof categories)[number];
