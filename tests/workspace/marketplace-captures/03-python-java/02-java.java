// JAVA | Classes, modifiers, streams, and conditional logic.
import java.util.List;
import java.util.stream.Collectors;

class ThemePreview {
    private static final String ACCENT = "#C58AF6";
    private final String name;
    private boolean enabled;

    ThemePreview(String name, boolean enabled) {
        this.name = name;
        this.enabled = enabled;
    }

    public String getLabel(int score) {
        String level = score >= 100 ? "Premium" : "Standard";
        return name + " | " + level + " | " + ACCENT;
    }

    public boolean isEnabled() {
        return enabled;
    }

    public static List<String> activeNames(List<ThemePreview> themes) {
        return themes.stream()
            .filter(ThemePreview::isEnabled)
            .map(theme -> theme.getLabel(125))
            .collect(Collectors.toList());
    }

    public static void main(String[] args) {
        var themes = List.of(
            new ThemePreview("Medusa", true),
            new ThemePreview("Nova", false)
        );
        activeNames(themes).forEach(System.out::println);
    }
}
