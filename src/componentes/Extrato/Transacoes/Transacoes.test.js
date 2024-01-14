import { render, screen } from '@testing-library/react';
import Transacoes from './index';
import estilos from './Extrato.module.css';

test('Deve renderizar o mesmo componente com props atualizado', () => {
  const transacao = {
    transacao: 'Deposito',
    valor: 100,
  };
  const { rerender } = render(
    <Transacoes estilos={estilos} transacao={transacao} />,
  );
  const tipoTransacao = screen.getByTestId('tipoTransacao');
  const valorTransacao = screen.getByTestId('valorTransacao');

  expect(tipoTransacao).toHaveTextContent('Deposito');
  expect(valorTransacao).toHaveTextContent('R$ 100');

  const novaTransacao = {
    transacao: 'Transferencia',
    valor: 50,
  };

  rerender(<Transacoes estilos={estilos} transacao={novaTransacao} />);

  const novoTipoTransacao = screen.getByTestId('tipoTransacao');
  const novoValorTransacao = screen.getByTestId('valorTransacao');

  expect(novoTipoTransacao).toHaveTextContent('Transferencia');
  expect(novoValorTransacao).toHaveTextContent('- R$ 50');
});
