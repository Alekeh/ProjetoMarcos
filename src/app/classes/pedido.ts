import {Cliente} from './cliente';
import {Pagamento} from './pagamento';
import {Endereco} from './endereco';

export class Pedido {
  id: number;
  instante: Date;
  pagamento: Pagamento;
  cliente: Cliente;
  enderecoDeEntrega: Endereco;
}
