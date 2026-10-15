// Salva/carrega Location como texto "mundo;x;y;z;yaw;pitch" (bom para config.yml).
import org.bukkit.Bukkit;
import org.bukkit.Location;
import org.bukkit.World;

public final class LocationSerializer {
    private LocationSerializer() {}

    public static String toText(Location l) {
        return String.join(";", l.getWorld().getName(),
            String.valueOf(l.getX()), String.valueOf(l.getY()), String.valueOf(l.getZ()),
            String.valueOf(l.getYaw()), String.valueOf(l.getPitch()));
    }

    public static Location fromText(String text) {
        String[] p = text.split(";");
        World w = Bukkit.getWorld(p[0]);
        if (w == null || p.length < 4) return null;
        float yaw = p.length > 4 ? Float.parseFloat(p[4]) : 0f;
        float pitch = p.length > 5 ? Float.parseFloat(p[5]) : 0f;
        return new Location(w, Double.parseDouble(p[1]), Double.parseDouble(p[2]), Double.parseDouble(p[3]), yaw, pitch);
    }
}
