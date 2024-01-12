import { render, screen } from '@testing-library/react';
import Menu from './index';

test('Deve rendenizar um link para a pagina inicial ', () => {
  render(<Menu />);
  const linkPaginaInicial = screen.getByText('Inicial');
  expect(linkPaginaInicial).toBeInTheDocument();
});

test('Deve renderizar uma lista de link', () => {
  render(<Menu />);
  const listaDeLink = screen.getAllByRole('link');
  expect(listaDeLink).toHaveLength(4);
});

test('Nao deve renderizar o link para Extrato', () => {
  render(<Menu />);
  const listaExtrato = screen.queryByText('Extrato');
  expect(listaExtrato).not.toBeInTheDocument();
});
test('Deve renderizar uma lista de links com a classe link', () => {
  render(<Menu />);
  const links = screen.getAllByRole('link');
  links.forEach((link) => expect(link).toHaveClass('link'));
  expect(links).toMatchSnapshot();
});
