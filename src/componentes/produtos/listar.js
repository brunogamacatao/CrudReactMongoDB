import React, {useState, useEffect} from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import ProdutosService from '../../servicos/produtos_service';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function ListarProdutos() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    setProdutos(ProdutosService.getProdutos());
  }, []);

  const renderProduto = (produto) => {
    return (
      <Card className="produto">
        <Card.Img variant="top" src={produto.foto} />
        <Card.Body>
          <Card.Title>{produto.nome}</Card.Title>
          <LinkContainer to={"/produtos/" + produto.id}>
            <Button variant="primary" block>Visualizar</Button>
          </LinkContainer>
        </Card.Body>
      </Card>
    );
  };

  return (
    <div className="listaDeProdutos">
      { produtos.map(renderProduto) }
    </div>
  );
}

export default ListarProdutos;