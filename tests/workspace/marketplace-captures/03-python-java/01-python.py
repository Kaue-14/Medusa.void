# PYTHON | Decorators, functions, types, and nested blocks.
from dataclasses import dataclass
from typing import Iterable


@dataclass(frozen=True)
class Theme:
    name: str
    accent: str = "#C58AF6"
    enabled: bool = True

    @property
    def label(self) -> str:
        return f"{self.name} ({self.accent})"


def filter_themes(items: Iterable[Theme], limit: int = 10) -> list[str]:
    result: list[str] = []

    for item in items:
        if item.enabled and item.name.startswith("M"):
            result.append(item.label.upper())

        if len(result) >= limit:
            break

    return result


def main() -> None:
    themes = [Theme("Medusa"), Theme("Nova", enabled=False)]
    selected = filter_themes(themes, limit=5)

    for index, label in enumerate(selected, start=1):
        print(f"{index:02d} | {label}")


if __name__ == "__main__":
    main()
