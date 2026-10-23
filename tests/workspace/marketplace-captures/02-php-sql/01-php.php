<?php
// PHP | Typed properties, arrays, functions, and nested conditions.
declare(strict_types=1);

final class ThemeCard
{
    public function __construct(
        public readonly string $name,
        public readonly string $accent,
        public bool $enabled = true,
    ) {}

    public function label(int $score): string
    {
        $level = match (true) {
            $score >= 100 => 'Premium',
            $score >= 50 => 'Standard',
            default => 'Starter',
        };

        return "{$this->name} - {$level}";
    }
}

/** @return array<int, string> */
function getActiveCards(array $cards): array
{
    $result = [];

    foreach ($cards as $card) {
        if ($card->enabled === true) {
            $result[] = strtoupper($card->label(125));
        }
    }

    return $result;
}

$cards = [new ThemeCard('Medusa', '#C58AF6')];
$names = getActiveCards($cards);
echo implode(', ', $names);
