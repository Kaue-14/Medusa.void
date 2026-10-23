# Medusa.void — workspace de testes

## Prints reais para o Marketplace

Abra primeiro **[00-PRINTS-DA-LOJA.md](00-PRINTS-DA-LOJA.md)**. Os códigos estão separados em quatro grupos, com dois arquivos por imagem. Siga o guia para abrir os pares lado a lado no VS Code e tirar os prints reais.

# Medusa.void — pasta pronta para testar

**O F5 agora abre automaticamente esta pasta na segunda janela do VS Code.**
Nada aqui altera seu settings.json pessoal. A configuração `.vscode/settings.json`
só se aplica a este pequeno workspace de teste.

## 1. Autocompletar e hover
Abra `app.py` e digite `print(` ou `usuario.`; use `Ctrl+Espaço` para forçar as sugestões.
Passe o mouse sobre `print`, `validar` e `Cliente`. Confira fundo, borda e seleção.
Acesse `Ctrl+Shift+P` para a Paleta de Comandos e `Ctrl+F` para a busca no editor.

## 2. Terminal
Abra **Terminal > Novo Terminal**, depois rode (com Python instalado):

```powershell
python terminal_demo.py
```

Se não tiver Python, no PowerShell execute:

```powershell
.\terminal_demo.ps1
```

Atenção: o PowerShell pode bloquear scripts `.ps1` pela política do computador.
Não precisa alterar sua política de segurança: nesse caso use o Python.
Todos os erros mostrados pelo teste são mensagens **simuladas**.

## 3. Git / Controle de código-fonte
Com **Git for Windows** instalado, rode no terminal integrado:

```powershell
python preparar_git_demo.py
```

Alternativas: `.\preparar_git_demo.ps1` no PowerShell (se a política permitir scripts), ou `bash preparar_git_demo.sh` no Bash.
Isso inicializa **um repositório apenas nesta pasta de exemplo**, cria um commit local
de teste e deixa `app.js` modificado e `ARQUIVO_NOVO.txt` não rastreado.
Não configura `user.name` nem `user.email` globais; usa identificadores locais só no commit.
Depois pressione `Ctrl+Shift+G` e clique no arquivo `app.js` para abrir o Diff.

## 4. Guias e sintaxe
Abra `app.js`, `app.py` ou `exemplo.php` e clique nos blocos internos de `if`.
A indentação e guias de pares estão ativadas só nesta pasta de testes.

## 5. Outros testes
`Ctrl+Shift+X`: Marketplace/extensões (ícone da gata no detalhe da extensão).
`Ctrl+,`: editor visual de Configurações.
`Ctrl+Shift+M`: Problemas; `Ctrl+Shift+U`: Saída.
`Ctrl+P`: Abertura rápida; `Ctrl+Shift+P`: comandos.

**Limites do tema:** algumas telas de extensões são webviews que têm CSS próprio,
e os detalhes de sistema como botões de janela dependem do Windows/VS Code.
Um tema de cores não consegue substituir todos esses fundos.
