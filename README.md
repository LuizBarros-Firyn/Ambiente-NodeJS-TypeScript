# Ambiente-NodeJS-TypeScript

Precisa de um ambiente NodeJS profissional em TypeScript rápido? Esse repositório te leva direto ao código!

## Configurações instaladas

* Express
* TypeScript
* ts-node-dev - Concede fast-refresh para servidores TS em ambiente de desenvolvimento.
* EditorConfig - Oferece configurações padrão (customizaveis) ao projeto, padronizando o código mesmo em IDEs diferentes.
* ESLint - Monitora e garante que o código não fique despadronizado.
* Prettier - Integra-se ao ESLint para analisar o código de maneira a deixá-lo mais bonito

## Getting Started

Para usar é muito simples! Basta clonar o projeto em sua maquina e dentro dele, executar o comando "<i>yarn add</i>" para instalar as dependencias. Caso não esteja utilizando yarn, execute "<i>npm install</i>"

Lembre-se que para que todos os recursos funcionem corretamente, é necessário haver o Node instalado e os addons EditorConfig e Eslint adicionados a IDE.

## Outras configurações

### Scripts para desenvolvimento (com fast-refresh) e produção.

Dois Scripts estão a sua disposição, sendo eles <i>dev:server</i> e <i>build</i>.

O Script <i>dev:server</i> é muito útil para desenvolvimento, pois conta com fast-refresh. Basta salvar seus arquivos que o servidor reiniciará automáticamente, e sem a necessidade de compilação!

O Script <i>build</i> irá criar o bundle do projeto para que você possa usar em produção!

### Personalize o seu padrão de código!

Acesse os arquivos de configuração do EditorConfg, ESLint e Prettier para ter uma padronização customizada!

Por padrão, o código virá com o consagrado template de regras de padronização do AirBnB, porém, sem trailing commas!

Para saber mais sobre a padronização da AirBnB, acesse: https://github.com/airbnb/javascript

### Correção automática ao salvar

Sempre que você salvar o código, o seu editor irá corrigir quaisquer partes do código que estejam fora do padrão determinado. Serão corrigidos aspectos como a indentação, trailing commas, aspas (simples ou duplas), blocos de código mal-otimizados, entre outros.

Para habilitar o funcionamento descrito acima, adicione os seguintes códigos nas suas configurações do editor

```
"[javascript]": {
        "editor.codeActionsOnSave": {
            "source.fixAll.eslint": true
        }
    },
    "[javascriptreact]": {
        "editor.codeActionsOnSave": {
            "source.fixAll.eslint": true
        }
    },
    "[typescript]": {
        "editor.codeActionsOnSave": {
            "source.fixAll.eslint": true
        }
    },
    "[typescriptreact]": {
        "editor.codeActionsOnSave": {
            "source.fixAll.eslint": true
        }
    },
```

### Habilitando padronização de quebra de linha

Diferentes sistemas operacionais podem usar modelos de quebra de linhas diferentes. Para garantir que isso não vai causar problemas, adicione a seguinte linha às suas configurações do editor

```
"files.eol": "\n",
```

## Recomendações extras

Caso esteja buscando melhorar a experiência de desenvolvimento, considere instalar o <i>tema Dracula</i> e o tema de ícones <i>Material Icon Theme</i>
