#!/usr/bin/env bash
set -eu
cd "$(dirname "$0")"
if [ -d .git ]; then echo 'Repositorio ja iniciado; nada modificado'; exit 0; fi
git init
git add README.md app.js app.py exemplo.php estilo.css dados.json
git -c user.name='OLED Preview Demo' -c user.email='oled-demo@example.invalid' commit -m 'Criar repositorio de teste'
printf '\n// Linha modificada para testar o Git\n' >> app.js
printf 'Arquivo novo para teste do Git\n' > ARQUIVO_NOVO.txt
git status --short
echo 'Abra Ctrl+Shift+G para conferir as cores.'
