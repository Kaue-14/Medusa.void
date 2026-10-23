// JAVASCRIPT | Soft pastels, functions, objects, and nested blocks.
const theme = {
    name: "OLED Preview",
    background: "#040508",
    accents: ["lavender", "mint", "rose"],
    enabled: true,
    opacity: 0.85,
};

const users = [
    { id: 1, name: "Medusa", active: true, score: 125.5 },
    { id: 2, name: "Nova", active: false, score: 64.0 },
];

function formatUser(user, prefix = "Welcome") {
    if (!user?.active) {
        return null;
    }

    const { name, score } = user;
    const level = score >= 100 ? "premium" : "standard";
    return `${prefix}, ${name}! Your level is ${level}.`;
}

export async function getActiveUsers(items = users) {
    const filtered = items.filter(user => user.active);

    return filtered.map(user => ({
        ...user,
        message: formatUser(user),
        accent: theme.accents[0],
    }));
}

getActiveUsers().then(result => console.log(result));
