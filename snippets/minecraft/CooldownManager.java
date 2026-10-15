// Cooldown por jogador e por ação (ex.: /kit, /home).
import java.util.Map;
import java.util.UUID;
import java.util.concurrent.ConcurrentHashMap;

public final class CooldownManager {
    private final Map<String, Long> until = new ConcurrentHashMap<>();

    /** Retorna os segundos restantes (0 = liberado) e já marca o uso quando liberado. */
    public long use(UUID player, String action, long seconds) {
        String key = action + ":" + player;
        long now = System.currentTimeMillis();
        long end = until.getOrDefault(key, 0L);
        if (end > now) return (end - now + 999) / 1000;
        until.put(key, now + seconds * 1000);
        return 0;
    }

    public void clear(UUID player) {
        until.keySet().removeIf(k -> k.endsWith(":" + player));
    }
}
