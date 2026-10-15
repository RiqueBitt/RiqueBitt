// Arquivo .yml extra além do config.yml (ex.: mensagens.yml), copiando o padrão do jar.
import org.bukkit.configuration.file.FileConfiguration;
import org.bukkit.configuration.file.YamlConfiguration;
import org.bukkit.plugin.java.JavaPlugin;
import java.io.File;
import java.io.IOException;

public final class CustomConfig {
    private final JavaPlugin plugin;
    private final File file;
    private FileConfiguration config;

    public CustomConfig(JavaPlugin plugin, String name) {
        this.plugin = plugin;
        this.file = new File(plugin.getDataFolder(), name);
        if (!file.exists()) plugin.saveResource(name, false);
        reload();
    }

    public void reload() { config = YamlConfiguration.loadConfiguration(file); }

    public FileConfiguration get() { return config; }

    public void save() {
        try { config.save(file); }
        catch (IOException e) { plugin.getLogger().severe("Não deu pra salvar " + file.getName() + ": " + e.getMessage()); }
    }
}
