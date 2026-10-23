"""Cria um Git local de demonstração, apenas nesta pasta de testes.
Execute: python preparar_git_demo.py. Requer Git instalado.
"""
from pathlib import Path
import shutil
import subprocess
import sys

pasta = Path(__file__).resolve().parent
if shutil.which("git") is None:
    sys.exit("Git não foi encontrado no PATH. Instale Git for Windows para testar.")
if (pasta / ".git").exists():
    sys.exit("Git de teste já existe nesta pasta. Nada foi modificado.")

def git(*args):
    subprocess.run(["git", "-C", str(pasta), *args], check=True)

git("init")
git("add", "README.md", "app.js", "app.py", "exemplo.php", "estilo.css", "dados.json")
git("-c", "user.name=OLED Preview Demo", "-c", "user.email=oled-demo@example.invalid", "commit", "-m", "Primeiro commit de teste")
with (pasta / "app.js").open("a", encoding="utf-8") as arquivo:
    arquivo.write("\n// Modificacao de teste para aparecer em lilas no Git\n")
(pasta / "ARQUIVO_NOVO.txt").write_text("Arquivo novo para teste da cor do Git\n", encoding="utf-8")
git("status", "--short")
print("Abra Ctrl+Shift+G no VS Code; clique no app.js para ver o Diff.")
