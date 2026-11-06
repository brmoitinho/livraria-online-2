import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

const products = [
  { 
    id: 1, 
    name: 'Livro de Programação Avançada', 
    image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=300&q=80' 
  },
  { 
    id: 2, 
    name: 'Design e Arquitetura de Software', 
    image: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=300&q=80' 
  }
];

const App = () => {
  return (
    <Router>
      <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
        <nav style={{ marginBottom: '20px' }}>
          <Link to="/" style={{ marginRight: '15px', textDecoration: 'none', color: '#0066cc' }}>Catálogo</Link> | 
          <Link to="/cart" style={{ marginLeft: '15px', textDecoration: 'none', color: '#0066cc' }}>Carrinho</Link>
        </nav>
        <hr />
        <Switch>
          <Route path="/" exact>
            <ProductList products={products} />
          </Route>
          <Route path="/cart" component={Cart} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;