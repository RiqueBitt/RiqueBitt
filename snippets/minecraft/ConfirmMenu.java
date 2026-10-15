// Menu de confirmação (3 linhas): lã verde confirma, vermelha cancela.
import org.bukkit.Bukkit;
import org.bukkit.Material;
import org.bukkit.entity.Player;
import org.bukkit.event.EventHandler;
import org.bukkit.event.Listener;
import org.bukkit.event.inventory.InventoryClickEvent;
import org.bukkit.inventory.Inventory;
import org.bukkit.inventory.InventoryHolder;

public final class ConfirmMenu implements InventoryHolder, Listener {
    private final Inventory inv;
    private final Runnable onConfirm;

    public ConfirmMenu(String title, Runnable onConfirm) {
        this.onConfirm = onConfirm;
        this.inv = Bukkit.createInventory(this, 27, ColorUtil.color(title));
        inv.setItem(11, new ItemBuilder(Material.LIME_WOOL).name("&aConfirmar").build());
        inv.setItem(15, new ItemBuilder(Material.RED_WOOL).name("&cCancelar").build());
    }

    public void open(Player p) { p.openInventory(inv); }

    @Override public Inventory getInventory() { return inv; }

    // Registre uma vez: Bukkit.getPluginManager().registerEvents(new ConfirmMenu.ClickListener(), plugin);
    public static final class ClickListener implements Listener {
        @EventHandler
        public void onClick(InventoryClickEvent e) {
            if (!(e.getInventory().getHolder() instanceof ConfirmMenu menu)) return;
            e.setCancelled(true);
            if (e.getRawSlot() == 11) { e.getWhoClicked().closeInventory(); menu.onConfirm.run(); }
            if (e.getRawSlot() == 15) e.getWhoClicked().closeInventory();
        }
    }
}
