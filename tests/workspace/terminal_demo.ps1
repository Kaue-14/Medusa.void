# Rode no PowerShell integrado: .\terminal_demo.ps1
# Se a politica bloquear scripts, rode em vez disso: python terminal_demo.py
$esc = [char]27
Write-Host 'OLED Preview | Cores no PowerShell'
30..37 | ForEach-Object { Write-Host "$esc[$($_)m  COR ANSI $($_)  $esc[0m" }
90..97 | ForEach-Object { Write-Host "$esc[$($_)m  COR CLARA $($_)  $esc[0m" }
Write-Host "$esc[31m[ERROR]$esc[0m Erro de exemplo (simulado)"
Write-Host "$esc[32m[OK]$esc[0m    Sucesso simulado"
Write-Host "$esc[33m[WARN]$esc[0m  Alerta simulado"
Write-Host "$esc[36m[INFO]$esc[0m  Mensagem de informacao"
