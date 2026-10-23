"""Demo de sintaxe, IntelliSense e estrutura de blocos no tema OLED."""
from dataclasses import dataclass
from typing import Optional

@dataclass
class Cliente:
    nome: str
    ativo: bool = True
    saldo: float = 150.75

def validar(cliente: Cliente, minimo: float = 50.0) -> Optional[str]:
    if cliente.ativo:
        if cliente.saldo >= minimo:
            return f"Bem-vindo, {cliente.nome}!"
        else:
            return "Saldo insuficiente"
    return None

usuario = Cliente(nome="Kaue")
print(validar(usuario))

# Teste o IntelliSense: digite "print(" ou "usuario." na linha abaixo.
# Para testar o hover, passe o mouse sobre `validar` ou `Optional`.
# Para testar o realce de pares de chaves, clique dentro dos `if`.
