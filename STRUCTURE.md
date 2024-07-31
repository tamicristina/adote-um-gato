## 📖 Sobre

Este projeto foi gerado com [Angular CLI](https://github.com/angular/angular-cli) versão 18.1.2.

## 🛠 Tecnologias Utilizadas

- [The Cat API](https://thecatapi.com/)

  - O The Cat API foi o serviço escolhido para a aplicação.

- [Angular Elements](https://angular.dev/guide/elements)

  - O angular elements foi utilizado neste projeto para a criação de webcomponents utilizando o `createCustomElement()`.

- [Angular Material](https://material.angular.io/)

  - O angular material foi utilizado para facilitar a utilização de componentes prontos, exemplo: loading, formulário etc...

- [ngx-logger](https://www.npmjs.com/package/ngx-logger)

  - O ngx-logger foi utilizado para a implementação de logs do tipo Warning, error, debug, info e trace.

- [Jasmine](https://jasmine.github.io/)
  - Ferramenta utilizada para os testes unitários.

## 📁 Estrutura do projeto

- `.src/app`: Aqui ficam as principais estruturas de pastas e arquivos do projeto.

📂 `components`

- `.src/components`: Aqui ficam os componentes utilizados para compor as páginas, nela você encontrará os componentes `<header>`, `<footer>`, `<gallery>`

📂 `pages`

- `.src/app/pages`: Aqui ficam as principais páginas do projeto sendo elas: `home` e `adoption`

📂 `services`

- `.src/app/services`: Aqui fica a lógica responsável por fazer a requisição para o `The Cat API`

📂 `webcomponents`

- `.src/app/webcomponents`: Aqui ficam os webcomponentes utilizados para montar o formulário dentro da página `adoption`, nela você encontrará os componentes `<form>` sendo o componente mãe que recebe o `<custominput>` como componente filho. Cada componente tem seu próprio arquivo de `service` onde é feito a criação dos componentes, os registros deles como webcomponent você encontrará no arquivo `app.component.ts`

📄 `app.routes`
Aqui ficam as configurações de rotas do projeto.

📂 `assets`

- `.src/assets`: Aqui ficam todas as imagens e fontes utilizadas no projeto.

📂 `environments`

- `.src/environments`: Arquivo responsável por guardar variávels de ambiente que são necessárias para a request na aplicação `The Cat API`.

- `.src/app/routes`: Arquivo com as configurações que o Angular usa para montar o sistema de roteamento.

## Como me localizar no projeto?

- Todas as páginas do projeto estão dentro de `.src/pages`
- Todos os `componentes` utilizados para montar as páginas estão em `./src/app/components` e `./src/app/webcomponents`
  - Uma vez dentro de uma página você pode ir navegando pelos componentes para ir se encontrando e fazer a alteração que deseja
- As principais páginas, componentes, e arquivos de serviço possuem testes unitários, você pode localizar procurando pelos arquivos que possuem a extensão `spec.ts`

## 💻 Usabilidade

### Página Inicial

A página inicial fornece uma visão geral da aplicação, nela é possível visualizar cards que possuem as fotos e uma breve descrição dos gatos disponíveis para a adoção. Cada card possue um botão chamado `Quero Adotar`, que redireciona o usuário para a página `adoption`.

### Cenário de Erro

Caso ocorra algum tipo de erro com a requisicão o usuário terá um feedback visual descontraído informando sobre o ocorrido, conforme imagem abaixo:

![imagem de um gato dentro de uma caixa](./src/assets/images/error-image.png)

### Página Adoption

A página adoption recebe os usuários que possuem interesse em adotar um gato, nela ele pode informar os dados de contato para que o time de adoção entre em contato posteriormente. o campo `Pet Escolhido` já vem preenchido de acordo com o gatinho que foi escolhido na página anterior.

## 🔎 Logs

Os principais logs implementados na aplicação estão localizados no arquivo principal da aplicação que é o `app.component.ts`

## Arquitetura

```
src/
├── app/
│   ├── components/
│   │   ├── footer/
│   │   │   ├── footer.component.html
│   │   │   ├── footer.component.scss
│   │   │   ├── footer.component.spec.ts
│   │   │   └── footer.component.ts
│   │   ├── gallery/
│   │   │   ├── gallery.component.html
│   │   │   ├── gallery.component.scss
│   │   │   ├── gallery.component.spec.ts
│   │   │   └── gallery.component.ts
│   │   ├── header/
│   │       ├── header.component.html
│   │       ├── header.component.scss
│   │       ├── header.component.spec.ts
│   │       └── header.component.ts
│   ├── interfaces/
│   │   └── cat.interface.ts
│   ├── pages/
│   │   ├── adoption/
│   │   │   ├── adoption.component.html
│   │   │   ├── adoption.component.scss
│   │   │   ├── adoption.component.spec.ts
│   │   │   └── adoption.component.ts
│   │   ├── home/
│   │       ├── home.component.html
│   │       ├── home.component.scss
│   │       ├── home.component.spec.ts
│   │       └── home.component.ts
│   ├── services/
│   │   ├── cat-api.service.spec.ts
│   │   └── cat-api.service.ts
│   ├── webcomponents/
│   │   ├── form/
│   │       ├── components/
│   │       │   ├── custom-input/
│   │       │   │   ├── custom-input.component.html
│   │       │   │   ├── custom-input.component.scss
│   │       │   │   ├── custom-input.component.spec.ts
│   │       │   │   ├── custom-input.component.ts
│   │       │   │   ├── input.service.spec.ts
│   │       │   │   └── input.service.ts
│   │       ├── form.component.html
│   │       ├── form.component.scss
│   │       ├── form.component.spec.ts
│   │       └── form.component.ts
│   ├── app.component.html
│   ├── app.component.scss
│   ├── app.component.spec.ts
│   ├── app.component.ts
│   ├── app.config.ts
│   └── app.routes.ts
├── assets/
│   ├── fonts/
│   │   ├── zain/
│   │   │   ├── Zain-black.woff2
│   │   │   ├── Zain-bold.woff2
│   │   │   ├── Zain-extrabold.woff2
│   │   │   ├── Zain-extralight.woff2
│   │   │   ├── Zain-light.woff2
│   │   │   └── Zain-regular.woff2
│   ├── images/
│   │   ├── black_paw.svg
│   │   ├── cat_error.png
│   │   ├── favicon.ico
│   │   ├── happy_cat.png
│   │   └── orange_paw.svg
├── environments/
│   └── environment.ts
├── index.html
├── main.ts
└── styles.scss

```
