"""Rode `python terminal_demo.py` no terminal integrado do VS Code.

Usa ANSI padrao: funciona no Terminal integrado, sem bibliotecas extras.
Exibe as 16 cores ANSI, destaques de fundo, logs e uma barra de progresso.
"""
from datetime import datetime

RESET = "\033[0m"

def color(code, text):
    return f"\033[{code}m{text}{RESET}"

print("=" * 66)
print(color("1;35", "  OLED Preview | Teste completo do terminal"))
print("=" * 66)
print("\nCORES NORMAIS (30-37):")
for n, label in enumerate(("Preto", "Vermelho", "Verde", "Amarelo", "Azul", "Magenta", "Ciano", "Branco"), 30):
    print(f"  {n}  {color(n, '██████  ' + label)}")

print("\nCORES CLARAS (90-97):")
for n, label in enumerate(("Cinza", "Vermelho", "Verde", "Amarelo", "Azul", "Magenta", "Ciano", "Branco"), 90):
    print(f"  {n}  {color(n, '██████  ' + label)}")

print("\nESTILOS E FUNDOS:")
print("  " + color("1", "NEGRITO") + "    " + color("2", "TEXTO SUAVE") + "    " + color("4", "SUBLINHADO"))
for n, label in ((41, "ERRO"), (42, "SUCESSO"), (43, "ATENCAO"), (44, "INFO"), (45, "ROXO"), (46, "CIANO")):
    print("  " + color(f"30;{n}", f" {label:<12} "))

print("\nLOGS E SAIDA DE UM COMANDO:")
clock = datetime.now().strftime("%H:%M:%S")
print(color("90", f"[{clock}]") + color("36", " [DEBUG]") + " Conexao iniciada")
print(color("90", f"[{clock}] ") + color("32", "[OK]") + " 3 arquivos preparados")
print(color("90", f"[{clock}] ") + color("33", "[WARN]") + " Aviso simulado (nenhum erro real)")
print(color("90", f"[{clock}] ") + color("31", "[ERROR]") + " Erro simulado para conferir contraste")
print("\nPROGRESSO:")
for p in (0, 25, 50, 75, 100):
    bar = color("35", "█" * (p // 5)) + color("90", "░" * (20 - p // 5))
    print(f"  {bar} {p:3d}%")

print("\n" + color("1;32", "Fim do teste: tudo OK!"))
print("Dica: abra Ctrl+F no terminal e procure por [WARN].")
