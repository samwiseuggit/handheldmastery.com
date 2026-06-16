# How to Upgrade Your SSD: A Step-by-Step Guide for Steam Deck & Legion Go

A single modern AAA game now ships with `100-150 GB` of assets, textures, and audio. Install three titles like Call of Duty, Baldur's Gate 3, and Forza Motorsport on a base `512 GB` Steam Deck OLED, and you have already consumed `60-70%` of your internal storage before accounting for the operating system, shader caches, and save files [^80^]. The ROG Xbox Ally X ships with `1 TB` of M.2 2280 storage, which is more generous but still tight if you maintain a library of more than eight to ten large games [^144^]. The Legion Go 2 comes with `1 TB` in an M.2 2242 form factor, a less common size that limits your upgrade options [^55^].

Upgrading the internal SSD is the single most impactful hardware modification you can make to a handheld PC. Unlike external storage over USB-C, an internal NVMe drive runs at full PCIe bandwidth, maintains full power management integration for better battery life, and keeps your game library with the device at all times. This guide covers everything from selecting the right drive to completing the physical swap and getting your system bootable again.

## What You Need

### Universal Tools

- A compatible NVMe SSD (see compatibility table below)
- A **PH0 or PH00 precision Phillips screwdriver** (PH00 fits Steam Deck screws perfectly)
- Plastic spudger or guitar pick (for prying open cases without scratching)
- Tweezers (for handling the tiny M.2 screw)
- Anti-static wrist strap (recommended but not mandatory if you work on a non-carpeted surface and ground yourself before handling components)
- A USB-C hub with at least one USB-A port and HDMI output
- A USB keyboard (for BIOS/UEFI navigation if needed)

### Software Prerequisites

- **SteamOS Recovery Image** (for Steam Deck) or **Windows 11 Installation Media** (for Windows handhelds)
- A `8 GB` or larger USB flash drive for recovery/installation media
- **DiskGenium** or **Macrium Reflect Free** (if cloning your existing drive)
- Optional: **CrystalDiskInfo** and **CrystalDiskMark** for health checks and speed verification post-install

## Choosing the Right SSD

Handhelds use three M.2 form factors, and using the wrong size will either not fit or not screw down properly. The physical dimensions are in the name: `2230` is `22 mm` wide by `30 mm` long; `2242` is `22 mm` by `42 mm`; `2280` is `22 mm` by `80 mm`.

### Form Factor by Handheld

| Handheld | M.2 Form Factor | PCIe Generation | Max Capacity Tested |
|---|---|---|---|
| **Steam Deck OLED** | M.2 2230 | PCIe 3.0 x4 [^80^] | 2 TB (confirmed working) |
| **Steam Deck LCD** | M.2 2230 | PCIe 3.0 x4 | 2 TB (confirmed working) |
| **ROG Xbox Ally X** | M.2 2280 | PCIe 4.0 x4 [^144^] | 4 TB (theoretical, 2 TB tested) |
| **Legion Go 2** | M.2 2242 | PCIe 4.0 x4 [^55^] | 2 TB |
| **Legion Go S** | M.2 2242 | PCIe 4.0 | 2 TB |
| **MSI Claw 8 AI+** | M.2 2230 | PCIe 4.0 x4 [^63^] | 2 TB |

### Recommended SSDs by Form Factor

The table below lists drives that have been community-validated in handhelds as of early 2026. All are DRAM-less HMB (Host Memory Buffer) designs, which is acceptable for gaming loads and necessary to fit within the tight thermal and power budgets of handheld devices.

| SSD Model | Form Factor | Capacity | PCIe Gen | Sequential Read | Notes |
|---|---|---|---|---|---|
| **WD Black SN770M** | 2230 | 1 TB / 2 TB | 4.0 | `5,150 MB/s` | Top community pick for Steam Deck; runs cool, excellent endurance [^80^] |
| **Samsung PM9B1** | 2230 | 512 GB / 1 TB | 4.0 | `3,500 MB/s` | Budget option; runs warm but reliable; common OEM drive |
| **Sabrent Rocket 2230** | 2230 | 1 TB / 2 TB | 4.0 | `5,000 MB/s` | Good balance of price and performance; 2 TB model is Steam Deck's sweet spot |
| **Corsair MP600 Mini** | 2230 | 1 TB / 2 TB | 4.0 | `4,800 MB/s` | Higher endurance rating; good for heavy write workloads |
| **WD Black SN740** | 2230 | 1 TB / 2 TB | 4.0 | `5,150 MB/s` | OEM variant of SN770M; widely available as pulls from tablets |
| **Samsung 990 EVO** | 2242 | 1 TB / 2 TB | 4.0/5.0 | `5,000 MB/s` | Excellent for Legion Go 2; dual-interface works in 4.0 slot |
| **Sabrent Rocket Nano** | 2242 | 1 TB / 2 TB | 4.0 | `5,000 MB/s` | purpose-built for 2242; low profile |
| **WD Blue SN580** | 2280 | 1 TB / 2 TB | 4.0 | `4,150 MB/s` | Budget pick for ROG Ally X; runs very cool |
| **Samsung 980 Pro** | 2280 | 1 TB / 2 TB | 4.0 | `7,000 MB/s` | Overkill for Ally X's constraints but fully compatible |
| **Crucial P3 Plus** | 2280 | 2 TB / 4 TB | 4.0 | `4,800 MB/s` | Best value per terabyte; QLC NAND acceptable for game storage |

**Thermal note:** M.2 2230 drives installed in the Steam Deck sit directly beneath a thermal pad and EMI shield. There is no heatsink fan specifically for the SSD, so selecting a drive with efficient power consumption matters more than peak sequential speeds. The WD Black SN770M and Sabrent Rocket 2230 are community favorites specifically because they maintain reasonable temperatures under sustained gaming loads without throttling.

## Cloning vs. Clean Install: Which Approach?

Before you crack open your handheld, decide whether to clone your existing drive or perform a clean operating system installation.

**Clone** if you want to preserve your current OS setup, installed games, save files, and configurations exactly as they are. This is faster but requires a USB-C NVMe enclosure or dual-M.2 docking station to connect both drives simultaneously. Tools like Macrium Reflect Free or DiskGenium handle the cloning process with a few clicks.

**Clean Install** if your system has accumulated cruft, if you are switching operating systems (e.g., moving from Windows to SteamOS or Bazzite), or if you want the freshest possible start. A clean install takes longer but eliminates any latent configuration issues and ensures your new drive is partitioned optimally for its capacity.

Most users upgrading from `512 GB` to `2 TB` should strongly consider a clean install. The time spent redownloading games is offset by the performance benefits of a fresh OS and the elimination of months of accumulated cache files and fragmented data.

## Steam Deck / Steam Deck OLED SSD Replacement

The Steam Deck's internal layout is well-documented and relatively forgiving for a first-time modder, provided you follow the screw sequence and handle the EMI shield with care.

### Step 1: Prepare the Device

Power down the Steam Deck completely (hold power button, select Shutdown). Do not put it to sleep. Place the device face-down on a clean, soft surface to prevent scratches on the screen. If you have a case or protective shell, remove it.

### Step 2: Remove the Back Cover Screws

The Steam Deck has eight screws on the back panel. They are **not** all the same length, and mixing them up will cause problems during reassembly.

| Screw Location | Length | Thread Type |
|---|---|---|
| Top-left, top-right (near triggers) | `10 mm` | Standard Phillips |
| Bottom-left, bottom-right (near grips) | `8 mm` | Standard Phillips |
| Middle-left, middle-right (center of back) | `6 mm` | Standard Phillips |
| Left-center, right-center (near fan exhaust) | `6 mm` | Standard Phillips |

Use a PH00 screwdriver. Apply firm downward pressure to avoid stripping. Keep a magnetic parts tray or labeled containers nearby.

### Step 3: Pry Off the Back Cover

Starting at the top edge near the fan exhaust, insert a plastic spudger or guitar pick between the back cover and the main chassis. Work your way around the perimeter, releasing the plastic clips as you go. The clips near the grips are the tightest; apply gentle, even pressure rather than forceful prying. The back cover is thick and durable but the clips can break if mishandled.

### Step 4: Locate and Remove the SSD EMI Shield

With the back cover removed, you will see the mainboard with the battery occupying the left side and the SSD sitting beneath a metal EMI shield on the right side of the board, near the fan. The shield is held down by a single Phillips screw and covered with a thermal pad on its underside.

1. Remove the single screw holding the EMI shield.
2. Carefully lift the shield straight up. The thermal pad may adhere to the old SSD; peel it away gently.
3. Do **not** lose the thermal pad. You will reuse it on the new drive.

### Step 5: Remove the Existing SSD

The M.2 2230 SSD is secured by a single small screw at the end opposite the M.2 connector. Remove this screw with tweezers or a precision screwdriver. The SSD will pop up at a `30-degree` angle. Gently pull it straight out of the M.2 slot.

### Step 6: Install the New SSD

1. Remove the thermal pad from the old SSD and apply it to the new one, centering it over the controller and NAND chips.
2. Insert the new M.2 2230 SSD into the slot at a `30-degree` angle. It should slide in smoothly with minimal force.
3. Press the SSD flat against the motherboard and reinstall the retaining screw.
4. Replace the EMI shield over the new SSD and reinstall its screw.

### Step 7: Reassemble and Boot

Replace the back cover, snapping the clips into place starting from the grips and working outward. Reinstall all eight screws in their correct locations. Power on the device.

If you cloned your drive, the Steam Deck should boot normally into SteamOS. If you installed a blank drive, you will need to boot from recovery media (see the Recovery section below).

## Legion Go 2 / Legion Go S SSD Replacement

The Legion Go 2 uses an M.2 2242 form factor, which is `12 mm` longer than the Steam Deck's 2230. The disassembly process differs significantly because the Legion Go 2 has detachable controllers and a kickstand.

### Step 1: Detach Controllers and Close Kickstand

Remove both controllers from the Legion Go 2 (or Go S) by pressing the release buttons on the sides. Close the built-in kickstand so the device lies flat.

### Step 2: Remove the Back Panel Screws

The Legion Go 2 has `10-12` screws around the back panel perimeter, hidden beneath small rubber plugs near the grips and kickstand. Remove the rubber plugs with a spudger, then remove all screws with a PH0 screwdriver. Unlike the Steam Deck, most Legion Go screws are the same length, but keep them organized regardless.

### Step 3: Access the SSD Bay

The Legion Go 2's internal layout separates the SSD into its own bay beneath a secondary metal cover, rather than burying it under the main EMI shield. Pry off the back panel, then locate the small rectangular cover near the center of the board labeled with an SSD icon. Remove the two screws holding this cover, and the M.2 2242 slot is exposed.

### Step 4: Swap the SSD

The M.2 2242 SSD installs the same way as a 2230: insert at an angle, press flat, secure with the retaining screw. The Legion Go 2 includes a thermal pad pre-installed in the SSD bay; reuse it or replace it with a new `1 mm` thermal pad if the original is damaged.

### Step 5: Reassemble

Replace the SSD bay cover, the back panel, and all screws. Reattach the rubber plugs. The process takes roughly `15 minutes` once you are familiar with the screw layout.

## ROG Xbox Ally X SSD Replacement

The ROG Xbox Ally X uses the standard M.2 2280 form factor, the most common size in consumer PCs, giving you the widest selection of drives and the easiest physical installation.

### Step 1: Remove the Back Panel

Power down the Ally X and place it face-down. Remove the `8-10` perimeter screws with a PH0 screwdriver. The back panel is held on with plastic clips; start prying from the bottom edge near the USB-C ports.

### Step 2: Locate the M.2 2280 Slot

The SSD sits near the center of the mainboard, beneath a black heatsink held down by two screws. Unlike the Steam Deck's EMI shield, the Ally X uses an actual aluminum heatsink with a pre-applied thermal pad. Remove the two screws, lift the heatsink, and the SSD is exposed.

### Step 3: Install the New Drive

Remove the old SSD, insert the new M.2 2280 drive, secure with the retaining screw, replace the heatsink, and reinstall both heatsink screws. The thermal pad on the heatsink can be reused if intact; replace it with a new `1.5 mm` pad if it has torn or lost adhesion.

## SteamOS Recovery (Steam Deck)

If you installed a blank SSD in your Steam Deck, you need to reinstall SteamOS from recovery media.

### Creating Recovery Media

1. On a separate PC, download the **SteamOS Recovery Image** from Valve's official Steam Deck support page.
2. Flash the image to a `8 GB` or larger USB drive using **Rufus** (Windows) or **Balena Etcher** (any OS).
3. Connect the USB drive to your Steam Deck via a USB-C hub.

### Booting Recovery

1. Hold **Volume Down** and press the **Power** button.
2. Continue holding Volume Down until the boot manager appears.
3. Select your USB drive from the boot menu.
4. Choose **"Reinstall SteamOS"** from the recovery menu. This preserves the standard partition layout including the home partition for game storage.
5. Follow the on-screen prompts. Installation takes `10-15 minutes`.

After recovery completes, remove the USB drive and the Steam Deck will boot into a fresh SteamOS installation. You will need to re-run initial setup (WiFi, account login) and reinstall your games.

## Windows 11 Clean Install (Legion Go 2 / MSI Claw 8 AI+)

For Windows-based handhelds, a clean Windows 11 installation is straightforward but requires specific drivers post-install.

### Installation Steps

1. Create Windows 11 installation media using Microsoft's **Media Creation Tool** or by downloading the ISO and flashing it with Rufus.
2. Boot from the USB drive (typically by holding a volume button during power-on; check your device's specific key combination).
3. Select **"Custom: Install Windows only (advanced)"** and choose your new, unallocated SSD.
4. Let Windows install. The process takes `15-20 minutes`.

### Post-Install: Install Handheld-Specific Drivers

A clean Windows 11 install will lack drivers for your handheld's audio, WiFi, Bluetooth, and graphics. Download the driver package from the manufacturer's website before starting:

| Handheld | Driver Source | Critical Drivers |
|---|---|---|
| **Legion Go 2** | Lenovo Vantage or Support site | AMD Chipset, Radeon Graphics, Realtek Audio, WiFi 6E, Controller firmware |
| **Legion Go S** | Lenovo Support site | AMD Chipset, Radeon Graphics, Audio, WiFi 6E |
| **MSI Claw 8 AI+** | MSI Center or Support site | Intel Chipset, Arc 140V Graphics, Audio, Thunderbolt, Fingerprint |
| **ROG Xbox Ally X** | MyASUS or Armoury Crate | AMD Chipset, Radeon 890M Graphics, Realtek Audio, WiFi 6E |

Install the graphics drivers first, followed by chipset, then audio and network. Reboot between each major driver category. Once drivers are installed, run Windows Update to catch any missing components.

## Post-Installation Steps for All Handhelds

Regardless of which device you upgraded, perform these verification steps before declaring the job done.

### Step 1: Verify SSD Health and Speed

Run **CrystalDiskInfo** to confirm the drive is recognized, shows **"Good"** health status, and is running at the expected temperature (`30-50°C` at idle is normal for handhelds). Then run **CrystalDiskMark** to verify sequential read speeds are within `10%` of the manufacturer's specification. A Steam Deck's PCIe 3.0 x4 slot will cap reads around `3,500 MB/s`; if you see `1,700 MB/s`, the drive may be running at x2 width instead of x4, indicating a seating issue.

### Step 2: Enable TRIM

Open an Administrator Command Prompt and run:

```cmd
fsutil behavior set DisableDeleteNotify 0
```

This ensures TRIM is enabled, which prevents long-term performance degradation on your SSD.

### Step 3: Partition Unallocated Space (if applicable)

If your new SSD is larger than `2 TB`, verify that the full capacity is visible in Disk Management. SteamOS handles partitioning automatically, but Windows may leave unallocated space that needs to be extended into the primary partition via Disk Management.

### Step 4: Reinstall Handheld Utilities

After a clean install, you will need to reinstall your handheld management tools:

- **ROG Xbox Ally X:** Armoury Crate (for TDP, fan curves, button mapping)
- **Legion Go 2:** Lenovo Legion Space (for controller mode switching, TDP)
- **MSI Claw 8 AI+:** MSI Center M (for performance profiles)
- **Any Windows handheld:** Handheld Companion (open-source alternative for TDP, gyro, overlays) [^199^][^225^]

## Troubleshooting

### Issue: Steam Deck won't boot after SSD swap

Verify the SSD is fully seated in the M.2 slot. A partially inserted drive will not be detected. If the drive was cloned, ensure the EFI partition was included in the clone. If booting from recovery, try a different USB drive or re-flash the recovery image.

### Issue: SSD runs hot and throttles under load

Check that the thermal pad makes proper contact between the SSD and the EMI shield (Steam Deck) or heatsink (Ally X). A `1 mm` pad is standard for 2230 drives. If throttling persists, the drive itself may run warm; consider the WD Black SN770M, which is known for cooler operation.

### Issue: Legion Go 2 doesn't recognize the new SSD

Ensure you purchased an M.2 2242 drive, not a 2280. A 2280 will physically extend past the mounting post and cannot be secured. Also verify the SSD bay cover is not pinching the drive when reinstalled.

### Issue: Windows 11 clean install lacks WiFi drivers

This is common on the MSI Claw 8 AI+ and Legion Go 2. Use a USB-C Ethernet adapter or tether to your phone via USB to get internet access, then download the WiFi driver from the manufacturer's support site.

## Final Thoughts

An SSD upgrade transforms a storage-constrained handheld into a proper portable gaming library. The move from `512 GB` to `2 TB` costs roughly `$120-160` as of early 2026 and takes under an hour even for first-timers. The WD Black SN770M in `2 TB` remains the community's go-to for Steam Deck upgrades, offering the best balance of speed, thermals, and price in the cramped 2230 form factor. For the ROG Xbox Ally X, the M.2 2280 slot opens up budget-friendly options like the Crucial P3 Plus at `4 TB` for users who want to carry their entire Steam library in their backpack. Whatever drive you choose, take your time with the disassembly, keep track of your screws, and always create recovery media before you start. The ten minutes spent preparing recovery tools will save you hours if something goes sideways.
