# Desafio Front-end Alce Rocks

Este projeto foi desenvolvido como parte de uma avaliação para uma vaga de trabalho, onde você deveria demonstrar habilidades em HTML, CSS e JavaScript básicos.

## Visão Geral

Este projeto consiste em uma página simples desenvolvida para replicar um layout básico e funcional. Ele inclui:

1. **HTML para estruturação da página.**
2. **CSS para estilização do layout.**
3. **JavaScript para interação com o DOM e manipulação de elementos.**

### Layout da Página

O layout replicado inclui:

- **Header**: Uma seção simples para o logo.
- **Main**: Contendo duas seções principais com imagens e descrições de texto.
- **Botão de Popup**: Ao clicar, um popup será exibido com funcionalidades como fechar e atualizar imagem.

### Funcionalidades Implementadas

1. **Botão de Popup**:

   - **Abrir**: Ao clicar no botão "Botão que abre popup", o modal se exibe e a rolagem da página é desabilitada (`document.body.style.overflow = "hidden"`).
   - **Fechar**: O botão "X" fecha o popup, restabelecendo a rolagem da página (`document.body.style.overflow = "auto"`).
   - **Atualizar**: O botão "Botão atualizar" consulta uma API (no exemplo, uma imagem aleatória do Picsum) e atualiza a imagem exibida no popup.

   #### JavaScript:

   1. **Função para Abrir o Popup (`openPopup()`)**:

      - Exibe o modal configurando o estilo `display` do elemento HTML com `id` `popupModal` para `flex`.
      - Desativa a rolagem da página principal ao configurar `document.body.style.overflow = "hidden"`.
      - Adiciona a classe `active` ao botão de popup para alterar seu estilo e desativar interações simultâneas.

   2. **Função para Fechar o Popup (`closePopup()`)**:

      - Esconde o modal configurando o estilo `display` do elemento HTML com `id` `popupModal` para `none`.
      - Restabelece a rolagem da página ao configurar `document.body.style.overflow = "auto"`.
      - Remove a classe `active` do botão de popup para restaurar seu estilo original.

   3. **Função para Fechar o Popup ao Clicar Fora (`outsideClick(event)`)**:

      - Esta função é chamada quando o usuário clica fora do conteúdo do modal.
      - Verifica se o alvo do clique é o modal (`event.target === modal`). Caso seja, chama a função `closePopup()`.

   4. **Adicionando Event Listener para click na Janela**:

      - Este evento escuta cliques em toda a janela e executa a função `outsideClick` quando o clique ocorre fora do conteúdo do modal.

   5. **Função para Atualizar a Imagem (`updateImage()`)**:

      - Realiza uma chamada à API Picsum para obter uma imagem aleatória.
      - Gera um timestamp para evitar o cache da imagem (garantindo uma imagem nova a cada chamada).
      - Atualiza o `src` do elemento `<img>` com `id` `randomImage` com o URL da nova imagem.
