import { calculaNovoSaldo } from './index';

describe('Quando eu realizo uma transacao', () => {
  test('Que e um deposito, o saldo deve aumentar', () => {
    const transacao = {
      transacao: 'Deposito',
      valor: 50,
    };

    const novoSaldo = calculaNovoSaldo(transacao, 100);
    expect(novoSaldo).toBe(150);
  });
});

test('Que e uma transferencia, o saldo deve diminuir', () => {
  const transacao = {
    transacao: 'Transferencia',
    valor: 50,
  };

  const novoSaldo = calculaNovoSaldo(transacao, 100);
  expect(novoSaldo).toBe(150);
});

test('Deve retornar o valor do saldo atualizado com o rendimetno', () => {
  const calculaRendimento = jest.fn((saldo) => saldo + saldo * 0.005);

  const saldo = 100;

  const novoSaldo = calculaRendimento(saldo);

  expect(novoSaldo).toBe(100.5);
  expect(calculaRendimento).toBeCalled();
  expect(calculaRendimento).toHaveBeenCalledWith(saldo);
});
