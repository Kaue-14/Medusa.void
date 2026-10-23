# Marketplace Screenshots — Real VS Code Test

This folder contains **real source files**, not rendered or simulated screenshots. All code examples are in English. Open them in the **Extension Development Host** so the Medusa.void theme renders the actual syntax colors.

## Screenshot groups

| Screenshot | Left editor | Right editor |
| --- | --- | --- |
| **01 — JavaScript & TypeScript** | [01-javascript.js](01-javascript-typescript/01-javascript.js) | [02-typescript.ts](01-javascript-typescript/02-typescript.ts) |
| **02 — PHP & SQL** | [01-php.php](02-php-sql/01-php.php) | [02-sql.sql](02-php-sql/02-sql.sql) |
| **03 — Python & Java** | [01-python.py](03-python-java/01-python.py) | [02-java.java](03-python-java/02-java.java) |
| **04 — HTML & CSS** | [01-html.html](04-html-css/01-html.html) | [02-css.css](04-html-css/02-css.css) |

## HTML v1.0.1 check

Open [01-html.html](04-html-css/01-html.html) and [02-css.css](04-html-css/02-css.css) for the fourth Marketplace screenshot. You can also open [03-html-attributes.html](04-html-css/03-html-attributes.html) to inspect the new value colors by category: **blue** for IDs/classes/references, **mint** for URLs and resource paths, **caramel** for state/type/configuration values. Only the HTML syntax rules were added; the UI and other language palettes are unchanged.

## Como tirar os quatro prints (na janela do Host)

1. Abra o `INDEX.md` na pasta `marketplace-captures` e clique nos arquivos da primeira linha da tabela (`Ctrl` + clique, ou abra pelo Explorer).
2. Abra o **primeiro arquivo** e pressione `Ctrl + \` para dividir o editor em duas colunas.
3. No editor da direita, abra o **segundo arquivo** do par (`Ctrl + P` e digite o nome do arquivo).
4. Se quiser mostrar **só código**, esconda o Explorer com `Ctrl + B` e o painel inferior com `Ctrl + J`.
5. Ajuste o zoom do código conforme preferir (`Ctrl` + roda do mouse, se essa função estiver ativada, ou altere temporariamente o tamanho da fonte no Host).
6. Tire um print. Repita para cada grupo, sempre com as duas linguagens lado a lado.
7. Envie os **quatro prints** aqui; vamos conferir e cortar cada um certinho antes de colocar no README.

**Importante:** o `F5` abre o Host diretamente em `tests/workspace`. Não é preciso executar o terminal, Git ou abrir a prévia HTML. O código já está salvo nos oito arquivos. Não edite o `settings.json` pessoal para capturar essas imagens.
