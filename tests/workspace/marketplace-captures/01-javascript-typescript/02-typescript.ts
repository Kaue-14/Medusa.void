// TYPESCRIPT | Types, interfaces, parameters, and async calls.
type ThemeMode = "oled" | "dark" | "light";

interface ThemeOptions {
    readonly name: string;
    mode: ThemeMode;
    primaryColor?: string;
    opacity: number;
}

interface User {
    id: number;
    name: string;
    active: boolean;
}

class ThemeManager<T extends ThemeOptions> {
    constructor(private readonly config: T) {}

    getLabel(user: User): string {
        const prefix = this.config.mode === "oled" ? "Welcome" : "Hello";
        return `${prefix}, ${user.name}!`;
    }

    async loadUsers(limit: number = 10): Promise<User[]> {
        const response = await Promise.resolve<User[]>([
            { id: 1, name: "Medusa", active: true },
            { id: 2, name: "Nova", active: false },
        ]);

        return response.filter(user => user.active).slice(0, limit);
    }
}

const manager = new ThemeManager<ThemeOptions>({
    name: "OLED Preview",
    mode: "oled",
    primaryColor: "#C58AF6",
    opacity: 0.9,
});

void manager.loadUsers().then(users => console.log(users));
