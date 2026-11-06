# 📚 Livraria Online - Projeto de Acessibilidade Web (WCAG)

Aplicação web de uma livraria e-commerce desenvolvida com **React** e **Redux**, focada na implementação de boas práticas de **Acessibilidade Web (WCAG)**, estruturação semântica, navegabilidade por teclado e suporte a tecnologias de assistência.

---

## 🚀 Tecnologias Utilizadas

- **Core:** React 18, React Router v5
- **Gestão de Estado:** Redux
- **Build Tool:** Vite
- **Acessibilidade & Testes:** Chrome DevTools (Lighthouse), NVDA Screen Reader

---

## ♿ Melhorias de Acessibilidade Implementadas

O projeto foi refatorado para cumprir as diretrizes internacionais das **WCAG (Web Content Accessibility Guidelines)**, contemplando os seguintes aspetos:

1. **Estrutura Semântica e Hierarquia de Cabeçalhos:**
   - Garantida a utilização de um único elemento `<h1>` por página como ponto de referência primário.
   - Organização estritamente sequencial dos níveis de cabeçalho (`<h1>` -> `<h2>`), eliminando saltos na árvore DOM.

2. **Textos Alternativos Significativos (`alt`):**
   - Substituição de imagens temporárias por imagens reais de livros.
   - Adição do atributo `alt` descritivo contextualizado para todas as capas de livros.

3. **Navegação por Teclado e Operabilidade:**
   - Atribuição de `tabIndex="0"` em elementos interativos para assegurar uma ordem lógica de tabulação via `Tab` / `Shift + Tab`.
   - Suporte completo para acionamento de botões e links através das teclas `Enter` e `Space`.

4. **Atributos ARIA (Accessible Rich Internet Applications):**
   - Adição de atributos `aria-label` nos botões de ação para fornecer descrições detalhadas e contextuais aos leitores de ecrã (ex: *"Adicionar o livro [Nome] ao carrinho de compras"*).

---

## 📊 Resultados e Validação

- **Testes com Leitor de Ecrã (NVDA):**
  Foi realizado o download e instalação do **NVDA** conforme as orientações recomendadas. A navegação foi executada exclusivamente via teclado, confirmando que todos os elementos interativos e descrições foram corretamente anunciados sem qualquer problema de acessibilidade aparente.

- **Auditoria Lighthouse (Chrome DevTools):**
  Após as otimizações no código-fonte, a aplicação atingiu a pontuação de **98/100** em Acessibilidade na auditoria automatizada do Lighthouse.

---

## 🛠️ Como Executar o Projeto

1. **Clonar o repositório:**
   ```bash
   git clone <URL_DO_TEU_REPOSITORIO>
   cd projeto_parada_2_full_stack
   ```

2. **Instalar as dependências:**
   ```bash
   npm install
   ```

3. **Executar o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

4. **Aceder no navegador:**
   Abra `http://localhost:5173/`