# Descrição

Este projeto foi desenvolvido durante o período de Curso da Trybe 🚀

O projeto tem por objetivo a avaliação e prática dos conhecimentos adquiridos na Trybe, visando o cumprimento do requisitos solicitados.

:busts_in_silhouette: Projeto desenvolvido em um squad de 4 integrantes.
- [Matheus Amaral](https://github.com/matheus-amsfer)
- [Williamgfl](https://github.com/Williamgfl)
- [Larissa Silva](https://github.com/larissaassilva)

---

# Sumário
- [Descrição](#descrição)
- [Habilidades](#habilidades-requeridas)
- [O que foi desenvolvido](#o-que-foi-desenvolvido)
- [Tecnologias utilizadas](#tecnologias-utilizadas)
- [Demonstração da aplicação](#demonstração-da-aplicação)
- [Protótipo do projeto](#protótipo-do-projeto)
- [ANTES DE INICIALIZAR A APLICAÇÃO](#antes-de-inicializar-a-aplicação)
- [Linter](#linter)
- [APIs](#apis)
  - [API do Mercado Livre](#api-do-mercado-livre)

---

# Habilidades requeridas

  - Entender o que são Métodos Ágeis;
  - Entender o que é Kanban;
  - Entender o que é Scrum;
  - Trabalhar em equipes utilizando Kanban ou Scrum de maneira eficaz;
  - Praticar todas as habilidades desenvolvidas até agora no módulo de Front-end.

---

## O que foi desenvolvido

Foi implementado, em equipe, uma versão simplificada de uma loja online, onde se a pessoa usuária pode buscar produtos por termos e categorias a partir da API do Mercado Livre. A partir dessas demandas, temos uma aplicação onde o usuário pode:

- Buscar produtos por termos e categorias a partir da API do Mercado Livre;
- Interagir com os produtos buscados de modo a adicioná-los e removê-los de um carrinho de compras em diferentes quantidades;
- Visualizar detalhes e avaliações prévias de um produto, bem como criar novas avaliações;
- E por fim, finalizar a compra (simulada) dos itens selecionados.

---

## Tecnologias utilizadas

- ![JavaScript](https://img.shields.io/badge/JavaScript%20-%23F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=black) , ![CSS3](https://img.shields.io/badge/CSS%20-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) , ![REACT](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB).

---

## Demonstração da aplicação

![caption](https://github.com/PauloScapol/GIFS/blob/main/FrontEndStore.gif)

---

## Protótipo do projeto

No desenvolvimento também foi usado a ferramenta "Figma" para analisar mais detalhadamente as "views" da apliacação;

O protótipo foi usado como base para o desenvolvimento do projeto.

[Acesse o Protótipo](https://www.figma.com/file/E3KIkTRcdEnF30cKEqKFjn/%5BProjeto%5D%5BFrontend%5D-Front-end-Online-Store)

---

## ANTES DE INICIALIZAR A APLICAÇÃO:

1. Clone o repositório
  * `git clone git@github.com:PauloScapol/FrontEnd_Online_Store.git`
  * Entre na pasta do repositório que você acabou de clonar:
    * `cd FrontEnd_Online_Store`

2. Instale as dependências e inicialize o projeto
  * Instale as dependências:
    * `npm install`
  * Inicialize o projeto:
    * `npm start` (uma página de Login deve abrir no seu navegador)
    * ⚠️ Lembrando que já deve se estar dentro da pasta do projeto `FrontEnd_Online_Store` ⚠️
---

## Linter

Para garantir a qualidade do código de forma a tê-lo mais legível, de mais fácil manutenção e seguindo as boas práticas de desenvolvimento foi utilizado neste projeto o linter `ESLint`. Para rodar o linter localmente execute o comando abaixo:

```bash
npm run lint
```
---

## APIs

  ### API do Mercado Livre

  Sua página _web_ irá consumir os dados da API do _Mercado Livre_ para realizar a busca de itens da sua loja online. Para realizar essas buscas, você precisará consultar os seguintes _endpoints_:

  - Para listar as categorias disponíveis:
    - Endpoint: https://api.mercadolibre.com/sites/MLB/categories
  - Para buscar por itens por termo:
    - Parâmetro de busca $QUERY (este parâmetro deve ser substituído pelo valor do campo de busca)
    - Endpoint: https://api.mercadolibre.com/sites/MLB/search?q=$QUERY
  - Para buscar itens por categoria:
    - Parâmetro de busca $CATEGORY_ID (este parâmetro deve ser substituído pelo ID da categoria selecionada)
    - Endpoint: https://api.mercadolibre.com/sites/MLB/search?category=$CATEGORY_ID
  - Para buscar itens de uma categoria por termo (vale ressaltar, que este endpoint não necessariamente precisa receber ambos os parâmetros para funcionar):
    - Parâmetro de busca $QUERY (este parâmetro deve ser substituído pelo valor do campo de busca)
    - Parâmetro de busca $CATEGORY_ID (este parâmetro deve ser substituído pelo ID da categoria selecionada)
    - Endpoint: https://api.mercadolibre.com/sites/MLB/search?category=$CATEGORY_ID&q=$QUERY
  - Para buscar detalhes de um item especifico:
    - Parâmetro de busca $PRODUCT_ID (este parâmetro deve ser substituído pelo valor do campo de busca)
    - Endpoint: https://api.mercadolibre.com/items/$PRODUCT_ID


  Se você quiser aprender mais sobre a API do _Mercado Livre_, veja a [documentação](https://developers.mercadolivre.com.br/pt_br/itens-e-buscas).

  #### Exemplo de requisição para listar categorias

  ```
  "https://api.mercadolibre.com/sites/MLB/categories"
  ```

  O retorno desse endpoint será algo no formato:

  ```json
  [
      {
          "id": "MLB5672",
          "name": "Acessórios para Veículos"
      },
      ...
  ]
  ```

  #### Exemplo de requisição de busca

  ```
  "https://api.mercadolibre.com/sites/MLB/search?category=MLB1055&q=Motorola"
  ```

  O retorno desse endpoint será algo como o exemplo [deste arquivo](exemplo-motorola.json).

---

Os ingredientes seguem uma ordem lógica onde o nome dele (`strIngredient1`) e a quantidade (`strMeasure1`) tem o mesmo número no final (1, nesse caso).

---
