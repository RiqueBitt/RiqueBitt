// Contagem regressiva (ex.: início de evento) com ação a cada segundo e no fim.
import org.bukkit.plugin.Plugin;
import org.bukkit.scheduler.BukkitRunnable;
import java.util.function.IntConsumer;

public final class Countdown {
    private Countdown() {}

    public static BukkitRunnable start(Plugin plugin, int seconds, IntConsumer onTick, Runnable onEnd) {
        BukkitRunnable task = new BukkitRunnable() {
            int left = seconds;
            @Override public void run() {
                if (left <= 0) { cancel(); onEnd.run(); return; }
                onTick.accept(left--);
            }
        };
        task.runTaskTimer(plugin, 0L, 20L);
        return task;
    }
}
