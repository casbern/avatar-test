# Sobre: Avatar Teste com Cypress 

## Como instalar

### Passo 1:

Adicione as duas variáveis de ambiente com os detalhes de login para acesso ao site. 

```bash
export CYPRESS_AVATAR_USERNAME=username
export CYPRESS_AVATAR_PASSWORD=password
```

Elas devem ser adicionadas no home folder no arquivo <code>~/.bashrc</code> for BASH or no <code>~/.zshenv</code> for ZSH.
Execute <code>source ~/.bashrc</code> or <code>source ~/.zshenv</code>

### Passo 2:

```bash
git clone https://github.com/cah90/avatar-test
npm install
```

## Como usar:

```bash
npm run cypress:open
```

Espere pelo Cypress UI window abrir.

Clique no arquivo teste <code>first.spec.js</code>

Após clicar, uma janela com o teste integrado ao browser irá abrir e começar a executar o teste.

