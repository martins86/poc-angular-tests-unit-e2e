# Poc Angular - Testes: ng test, ng e2e - [![Build Status][travis-img]][travis-url]

<br>

[![Open in Gitpod][open-gitpod-img]][open-gitpod-url]

[![made-with-gitpod][made-gitpod-img]][made-gitpod-url]
[![GitHub stars][git-starts-img]][git-starts-url]

<br>

![GitHub package.json version][version-img]
![GitHub top language][language-img]
[![JavaScript Style Guide][js-style-guide-img]][js-style-guide-url]
[![GitHub license][license-img]][license-url]
![GitHub last commit][commit-img]

<br>

> Aplicação em Angular com testes unitários (Jasmine/Karma) e end-to-end (Protractor), desenvolvido com Gitpod.

<br>

# Instalando Pacotes NPM
Instalando todos os pacotes de package.json :<br>
`npm install`

Angular Material / CDK - [Angular Material](https://material.angular.io/) :<br>
`npm install @angular/material @angular/cdk --save`

Bootstrap - [Get Bootstrap](https://getbootstrap.com/docs/4.0/getting-started/introduction/) :<br>
`npm install bootstrap --save`

JavaScript Standard Style - Code Quality :<br>
`npm install standard --save-dev`

Husky - CI/CD :<br>
`npm install husky@next --save-dev`

<br>

# Criando um novo componente
Modulo com rotas - (alterar pages/home por pasta/nome do novo modulo) :<br>
`ng generate module pages/home --routing`

Componente - (alterar pages/home por folder/name do novo componente) :<br>
`ng generate component pages/home`

<br>

# Subindo o servidor

Execute o comando `ng serve -o` (Sobe o servidor e abre uma janela ou aba do navegador).

<br>

# Rodando os testes unitários

Execute o comando `ng test` rodando com [Karma](https://karma-runner.github.io).

<br>

# Rodando os testes end-to-end

Execute o comando `ng e2e` rodando com [Protractor](http://www.protractortest.org/).

<br>

# Versões

<br>

![npm][npm-img] ![node-current][node-current-img]

<br>

# Dependências em desenvolvimento

| Package | NPMJS | Shields |
| ------ | ------ | ------ |
| Jasmine | https://jasmine.github.io/ | ![GitHub package.json dependency version (dev dep on branch)][jasmine-core-img] |
| Karma | https://karma-runner.github.io/latest/index.html | ![GitHub package.json dependency version (dev dep on branch)][karma-img] |
| Protractor | https://www.protractortest.org/ | ![GitHub package.json dependency version (dev dep on branch)][protractor-img] |
| Husky | https://www.npmjs.com/package/husky | ![GitHub package.json dependency version (dev dep on branch)][husky-img] |
| JavaScript Standard Style | https://www.npmjs.com/package/standard | ![GitHub package.json dependency version (dev dep on branch)][standard-img] |

<!-- Markdown link & images -->

[made-gitpod-img]: https://img.shields.io/badge/Made%20with-Gitpod-1f425f.svg
[made-gitpod-url]: https://gitpod.io/
[git-starts-img]: https://img.shields.io/github/stars/martins86/poc-angular-tests-unit-e2e?style=social&label=Star
[git-starts-url]: https://github.com/martins86/poc-angular-tests-unit-e2e/
[open-gitpod-img]: https://gitpod.io/button/open-in-gitpod.svg
[open-gitpod-url]: https://www.gitpod.io/#https://github.com/martins86/poc-angular-tests-unit-e2e

[version-img]: https://img.shields.io/github/package-json/v/martins86/poc-angular-tests-unit-e2e
[language-img]: https://img.shields.io/github/languages/top/martins86/poc-angular-tests-unit-e2e
[js-style-guide-img]: https://img.shields.io/badge/code_style-standard-brightgreen.svg
[js-style-guide-url]: https://standardjs.com
[license-img]: https://img.shields.io/github/license/martins86/poc-angular-tests-unit-e2e
[license-url]: https://github.com/martins86/poc-angular-tests-unit-e2e/blob/main/LICENSE
[travis-img]: https://travis-ci.com/martins86/poc-angular-tests-unit-e2e.svg?branch=master
[travis-url]: https://travis-ci.com/martins86/poc-angular-tests-unit-e2e
[commit-img]: https://img.shields.io/github/last-commit/martins86/poc-angular-tests-unit-e2e
[npm-img]: https://img.shields.io/npm/v/npm
[node-current-img]: https://img.shields.io/node/v/latest-version

[jasmine-core-img]: https://img.shields.io/github/package-json/dependency-version/martins86/poc-angular-tests-unit-e2e/dev/jasmine-core
[karma-img]: https://img.shields.io/github/package-json/dependency-version/martins86/poc-angular-tests-unit-e2e/dev/karma
[protractor-img]: https://img.shields.io/github/package-json/dependency-version/martins86/poc-angular-tests-unit-e2e/dev/protractor
[husky-img]: https://img.shields.io/github/package-json/dependency-version/martins86/poc-angular-tests-unit-e2e/dev/husky
[standard-img]: https://img.shields.io/github/package-json/dependency-version/martins86/poc-angular-tests-unit-e2e/dev/standard
