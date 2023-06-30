# Kenzie Hub

Este é o repositório do projeto Kenzie Hub, que abrange as funcionalidades de cadastro, login e gerenciamento de tecnologias. O objetivo do projeto é desenvolver um aplicativo web utilizando React, React Hook Form, Zod e requisições POST para interagir com a API Kenzie Hub.

## Sobre o Projeto
O Kenzie Hub é uma plataforma desenvolvida como parte do programa de formação da Kenzie Academy Brasil. O projeto visa oferecer recursos para cadastro de usuários, autenticação de login e um painel de controle (dashboard) para visualizar informações do usuário. Além disso, também permite o gerenciamento de tecnologias, incluindo a listagem, criação, atualização e exclusão das mesmas.

O aplicativo foi desenvolvido seguindo um guia de estilo específico, garantindo uma aparência consistente e agradável ao usuário.

## API
A aplicação utiliza a API Kenzie Hub, que fornece os endpoints necessários para o funcionamento correto das funcionalidades de cadastro, login e gerenciamento de tecnologias. A URL pública da API é: https://Kenzie Hub.herokuapp.com. Certifique-se de consultar a documentação fornecida para mais informações sobre os endpoints e suas respectivas respostas.

## Funcionalidades
### Registro de Usuário
- Criação de um formulário de registro utilizando React Hook Form e Zod para realizar as validações necessárias.
- Os campos obrigatórios são validados corretamente.
- Verificação do formato adequado para o e-mail fornecido.
- Definição de uma senha com no mínimo 8 caracteres, incluindo letras, números e ao menos um caractere especial.
- Confirmação de senha para garantir a precisão do dado.
- Envio do formulário através de uma requisição POST para a rota "/users" da API Kenzie Hub para cadastrar o usuário.
- Exibição de notificações de sucesso ou erro ao usuário.
- Redirecionamento do usuário para a página de login em caso de sucesso.

### Login de Usuário
- Criação de um formulário de login utilizando React Hook Form e Zod para realizar as validações necessárias.
- Os campos obrigatórios são preenchidos corretamente.
- Envio do formulário através de uma requisição POST para a rota "/sessions" da API Kenzie Hub para autenticar o usuário.
- Exibição de notificações informando sobre o sucesso ou falha no login.
- Armazenamento do token e das informações do usuário no armazenamento local (localStorage) para autenticação futura.
- Redirecionamento do usuário para o painel de controle (dashboard) em caso de sucesso.

### Painel de Controle (Dashboard)
- Exibição das informações do usuário, como nome e módulo.
- Disponibilidade de uma função de logout para limpar as informações do usuário no armazenamento local e permitir um novo login.

### Gerenciamento de Tecnologias
- Listagem de todas as tecnologias disponíveis.
- Possibilidade de cadastrar uma nova tecnologia para usuários autenticados.
- Capacidade de atualizar o status de uma tecnologia existente.
- Restrição de atualização apenas para o status, não permitindo a modificação do título da tecnologia.
- Habilidade de apagar uma tecnologia existente.
- Atualização automática da lista de tecnologias após qualquer alteração (edição, exclusão e cadastro).

### Autenticação
- A aplicação permite o login e o cadastro de usuários.
- Após o login, o usuário é redirecionado para o painel de controle.
- Caso o usuário já esteja autenticado com um token válido e recarregue a página (F5), ele permanecerá no painel de controle.
- O usuário não tem acesso ao painel de controle sem estar autenticado.
- Em caso de tentativa de acesso ao painel de controle sem autenticação, o usuário será redirecionado para a página de login.

### Tecnologias Utilizadas
- React
- React Hook Form
- React Modal
- Axios
- Zod
- Styled Components
- Vite

## Contribuição
Este projeto foi desenvolvido como parte do curso de desenvolvimento web da Kenzie Academy Brasil e, no momento, não estão sendo aceitas contribuições adicionais.

## Autor
Gustavo Manrrik
