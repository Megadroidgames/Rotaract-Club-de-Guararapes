window.MAOS_DATA = {
  courses: [
    {
      id: 'fundamentos',
      title: 'Fundamentos de Libras',
      level: 'Iniciante',
      duration: '4h 20min',
      lessons: 12,
      progress: 42,
      description: 'Alfabeto manual, cumprimentos, expressões faciais e primeiros diálogos.',
      accent: 'pink',
      icon: 'hands'
    },
    {
      id: 'cotidiano',
      title: 'Libras no cotidiano',
      level: 'Básico',
      duration: '5h 10min',
      lessons: 15,
      progress: 18,
      description: 'Família, escola, trabalho, alimentação e situações do dia a dia.',
      accent: 'blue',
      icon: 'chat'
    },
    {
      id: 'atendimento',
      title: 'Atendimento inclusivo',
      level: 'Intermediário',
      duration: '6h',
      lessons: 18,
      progress: 0,
      description: 'Comunicação acessível em serviços públicos, eventos e instituições.',
      accent: 'gold',
      icon: 'heart'
    },
    {
      id: 'jovem',
      title: 'Libras para jovens',
      level: 'Infantojuvenil',
      duration: '3h 30min',
      lessons: 10,
      progress: 0,
      description: 'Jogos, histórias e atividades visuais adaptadas ao público jovem.',
      accent: 'pink',
      icon: 'spark'
    }
  ],
  lessons: [
    { id: 1, title: 'Boas-vindas e cultura surda', type: 'Vídeo', duration: '08:35', done: true },
    { id: 2, title: 'Alfabeto manual: A a M', type: 'Vídeo', duration: '11:20', done: true },
    { id: 3, title: 'Alfabeto manual: N a Z', type: 'Vídeo', duration: '10:45', done: false },
    { id: 4, title: 'Prática guiada do alfabeto', type: 'Exercício', duration: '06:00', done: false },
    { id: 5, title: 'Cumprimentos essenciais', type: 'Vídeo', duration: '09:10', done: false },
    { id: 6, title: 'Desafio de fixação', type: 'Quiz', duration: '05:00', done: false },
    { id: 7, title: 'Podcast: inclusão no cotidiano', type: 'Podcast', duration: '12:30', done: false }
  ],
  ranking: [
    { name: 'Marina Costa', xp: 2840, streak: 19, initials: 'MC' },
    { name: 'Rafael Mendes', xp: 2510, streak: 14, initials: 'RM' },
    { name: 'Você', xp: 2180, streak: 7, initials: 'JL', me: true },
    { name: 'Bianca Lima', xp: 1960, streak: 11, initials: 'BL' },
    { name: 'Caio Nunes', xp: 1710, streak: 6, initials: 'CN' }
  ],
  events: [
    { day: '22', month: 'JUL', title: 'Roda de conversa: cultura surda', time: '19:00', type: 'Ao vivo' },
    { day: '25', month: 'JUL', title: 'Prática supervisionada — básico', time: '20:00', type: 'Videochamada' },
    { day: '29', month: 'JUL', title: 'Plantão com instrutor', time: '18:30', type: 'Mentoria' }
  ],
  achievements: [
    { title: 'Primeiro sinal', desc: 'Concluiu sua primeira aula', icon: 'spark', unlocked: true },
    { title: 'Em sequência', desc: '7 dias de prática', icon: 'fire', unlocked: true },
    { title: 'Comunicador', desc: 'Conclua 3 práticas ao vivo', icon: 'video', unlocked: false },
    { title: 'Mão amiga', desc: 'Ajude 5 pessoas na comunidade', icon: 'heart', unlocked: false }
  ]
};
