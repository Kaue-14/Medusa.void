# Execute no PowerShell integrado apenas para criar um Git de exemplo.
# Os comandos usam o caminho deste script; nao mexem nas suas outras pastas.
$folder = $PSScriptRoot
if (-not (Get-Command git -ErrorAction SilentlyContinue)) {
    Write-Host 'Git nao encontrado. Instale Git for Windows para testar o painel.'
    exit 1
}
if (Test-Path (Join-Path $folder '.git')) {
    Write-Host 'Repositorio de teste ja iniciado; nenhuma alteracao feita.'
    exit 0
}
git -C $folder init
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }
git -C $folder add README.md app.js app.py exemplo.php estilo.css dados.json
git -C $folder -c 'user.name=OLED Preview Demo' -c 'user.email=oled-demo@example.invalid' commit -m 'Criar repositorio de teste'
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }
Add-Content -LiteralPath (Join-Path $folder 'app.js') -Value "`n// Linha modificada para o teste de Git"
Set-Content -LiteralPath (Join-Path $folder 'ARQUIVO_NOVO.txt') -Value 'Arquivo novo para aparecer em verde no controle de versao'
git -C $folder status --short
Write-Host 'Abra Ctrl+Shift+G. Voce vera app.js modificado e ARQUIVO_NOVO.txt nao rastreado.'
