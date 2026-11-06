import React from 'react';
import { useDispatch } from 'react-redux';

const ProductList = ({ products }) => {
  const dispatch = useDispatch();

  const addToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Catálogo de Livros</h1>
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        {products && products.map(product => (
          <div 
            key={product.id} 
            style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px', width: '220px', backgroundColor: '#fff' }}
          >
            <img 
              src={product.image} 
              alt={`Capa do livro ${product.name}`} 
              style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '4px', marginBottom: '10px' }}
            />
            <h2 style={{ fontSize: '16px', margin: '10px 0' }}>{product.name}</h2>
            
            {/* Botão com atributo aria-label para enriquecer a acessibilidade */}
            <button 
              tabIndex="0"
              aria-label={`Adicionar o livro ${product.name} ao carrinho de compras`}
              onClick={() => addToCart(product)} 
              style={{ 
                padding: '8px 12px', 
                cursor: 'pointer', 
                backgroundColor: '#0066cc', 
                color: '#fff', 
                border: 'none', 
                borderRadius: '4px' 
              }}
            >
              Adicionar ao Carrinho
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;