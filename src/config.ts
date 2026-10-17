export const SITE = 'https://www.diarioversatil.com.br';
export const NOME = 'DIÁRIO VERSÁTIL';
export const CATEGORIAS = {
  'receitas': { nome: 'Receitas', descricao: 'Receitas práticas e testadas para o dia a dia.' },
  'receitas-para-diabeticos': { nome: 'Receitas para diabéticos', descricao: 'Receitas pensadas para quem convive com diabetes. Não substituem o acompanhamento médico ou nutricional.' },
  'produtos': { nome: 'Produtos', descricao: 'Análises e recomendações de produtos de cozinha e alimentação.' },
} as const;
export type Categoria = keyof typeof CATEGORIAS;
