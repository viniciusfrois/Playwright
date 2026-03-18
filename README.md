# Playwright

- Projeto para aprender teste automatizados com Playwright aplicando boas práticas como Page Object Model (POM) e AAA (Arrange, Action, Assert), além de integração com CI do GitHub Actions.
- Utilizando o site: https://www.saucedemo.com/ para realização dos testes (Login e adicionar itens no carrinho)

## Objetivos

- Explorar testes automatizados com Playwright
- Utilizar padrões como POM e AAA    
- Integrar testes com GitHub Actions para CI

## Estrutura

- `e2e`: Testes automatizados
- `pages`: Ações/Comportamento das Páginas (Abstração)
- `.github/workflows/`: Configuração do CI

## Requisitos

- Node.js
- Playwright

## Como executar

```bash
npm init playwright@latest
```

## Integração CI

Os testes são executados automaticamente via GitHub Actions a cada push.
