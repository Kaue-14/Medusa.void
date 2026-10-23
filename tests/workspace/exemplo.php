<?php
declare(strict_types=1);
/** Apenas demonstracao visual: nao precisa de servidor. */
function gerarMensagem(array $pessoa): string {
    if (($pessoa['ativo'] ?? false) === true) {
        if (($pessoa['pontos'] ?? 0) > 10) {
            return "Ola, {$pessoa['nome']}!";
        }
    }
    return 'Acesso negado';
}
echo gerarMensagem(['nome' => 'Medusa', 'ativo' => true, 'pontos' => 25]);
