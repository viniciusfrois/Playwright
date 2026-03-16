# PlaywrightCI

- Projeto para aprender teste automatizados com Playwright, além de integração com CI do GitHub Actions.
- Utilizando o site: https://www.saucedemo.com/ para realização dos testes (Login e adicionar remover itens do carrinho)

## Objetivos

- Explorar testes automatizados com Playwright   
- Integrar testes com GitHub Actions para CI

## Estrutura

- `e2e`: Testes automatizados
- `pages/index.js`: Ações/Comportamento da Página (Abstração)
- `pages/elements.js`: Elementos/Seletores da Página (Abstração)
- `screenshots`: Screenshots dos testes
- `.github/workflows/`: Configuração do CI

## Requisitos

- Node.js
- Playwiright

## Como executar

```bash
npm init playwright@latest
```

## Integração CI

Os testes são executados automaticamente via GitHub Actions a cada push.
