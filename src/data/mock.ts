export type Guild = {
  id: string;
  name: string;
  icon?: string;
  owner: boolean;
};

export type AppointmentData = {
  id: string;
  guild: Guild;
  category: string;
  date: string;
  description: string;
};

export type MemberData = {
  id: string;
  username: string;
  avatarUrl: string;
  status: 'online' | 'busy';
};

export const user = {
  firstName: 'Rodrigo',
  avatarUrl: 'https://i.pravatar.cc/150?img=12',
};

const lendarios: Guild = { id: '1', name: 'Lendários', owner: true };

export const appointments: AppointmentData[] = [
  {
    id: '1',
    guild: lendarios,
    category: '1',
    date: 'Sex 18/06 às 20:40h',
    description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10',
  },
  {
    id: '2',
    guild: { id: '2', name: 'Pro Players', owner: false },
    category: '2',
    date: 'Sáb 19/06 às 18:00h',
    description: 'Quem perder paga a próxima rodada. Sem desculpas de lag!',
  },
  {
    id: '3',
    guild: lendarios,
    category: '3',
    date: 'Dom 20/06 às 15:30h',
    description: 'Partida descompromissada pra relaxar no domingo.',
  },
  {
    id: '4',
    guild: { id: '3', name: 'Os Invencíveis', owner: false },
    category: '4',
    date: 'Seg 21/06 às 21:00h',
    description: 'Treino de estratégia antes do campeonato.',
  },
  {
    id: '5',
    guild: lendarios,
    category: '1',
    date: 'Qua 23/06 às 20:00h',
    description: 'Mais uma rumo ao challenger.',
  },
  {
    id: '6',
    guild: { id: '4', name: 'Squad Noturno', owner: false },
    category: '3',
    date: 'Sex 25/06 às 23:00h',
    description: 'Jogatina da madrugada.',
  },
];

export const members: MemberData[] = [
  { id: '1', username: 'Rodrigo', avatarUrl: 'https://i.pravatar.cc/150?img=12', status: 'online' },
  { id: '2', username: 'Diego', avatarUrl: 'https://i.pravatar.cc/150?img=33', status: 'busy' },
  { id: '3', username: 'Mayk', avatarUrl: 'https://i.pravatar.cc/150?img=59', status: 'online' },
];

export const selectedGuild = lendarios;
