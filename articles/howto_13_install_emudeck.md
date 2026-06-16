# How to Install EmuDeck: The Easiest Way to Set Up Retro Emulation

EmuDeck is the closest thing handheld PC gaming has to a universal emulation installer. Instead of manually configuring a dozen emulators, hunting down BIOS files, mapping controllers for each system, and scraping metadata one game at a time, EmuDeck automates the entire process into a single script that runs in under fifteen minutes [^161^][^352^]. It installs and pre-configures emulators for more than thirty gaming systems, places your ROMs in the correct folder structure, handles controller mapping through Steam Input, and integrates everything into your Steam library via Steam ROM Manager so your retro games appear alongside your Steam titles in Gaming Mode.

Whether you want to play GameCube classics at full speed on a Steam Deck OLED, revisit PS2 exclusives on the ROG Xbox Ally X, or experiment with Switch emulation on a Legion Go 2, this guide walks you through every step from a blank storage device to a fully operational emulation library.

## What You Need

### Hardware

- A Steam Deck (LCD or OLED), ROG Xbox Ally X, Legion Go 2, or Legion Go S
- At least `50 GB` of free storage (internal SSD or microSD card)
- A microSD card reader or USB-C hub with USB-A ports (for transferring ROMs from a PC)
- An active internet connection during installation

### Software Prerequisites

- **SteamOS** (EmuDeck's primary target and best-supported platform) or **Windows 11** (with Desktop Mode access for Steam Deck)
- Your own legally obtained **ROM files** and **BIOS dumps** from consoles you own
- A **microSD card formatted to ext4** (for Steam Deck) or **exFAT/NTFS** (for Windows handhelds); U3/A2 speed class recommended minimum

**Important legal note:** EmuDeck does not provide ROMs or BIOS files. You must supply your own, dumped from hardware you legally own. Downloading copyrighted ROMs from the internet is piracy regardless of whether you own the original cartridge or disc.

### Storage Recommendations

| Use Case | Minimum Storage | Recommended | Format |
|---|---|---|---|
| 8-bit/16-bit systems only (NES through PS1) | `16 GB` | `64 GB` microSD | ext4 (SteamOS) / exFAT (Windows) |
| Through GameCube/PS2/PSP | `128 GB` | `256 GB` microSD | ext4 (SteamOS) / exFAT (Windows) |
| Through Wii U/Switch/PS3 | `512 GB` | `1 TB` microSD or internal SSD | ext4 (SteamOS) / NTFS (Windows) |
| Full library (all 30+ systems) | `1 TB` | `2 TB` internal SSD | ext4 (SteamOS) / NTFS (Windows) |

## Step 1: Prepare Your Storage

EmuDeck can install to internal storage or a microSD card. For Steam Deck users, a high-quality microSD card is the most practical choice because it keeps your emulation library portable and preserves precious internal SSD space for AAA PC games.

### Formatting a microSD Card on Steam Deck

1. Insert the microSD card into the slot on the top of the Steam Deck.
2. Switch to **Desktop Mode** (instructions in Step 2).
3. Open **KDE Partition Manager** from the application menu.
4. Select your microSD card from the device list (check the capacity to confirm you have the right device).
5. Delete any existing partitions, then create a new partition table (GPT) and a single ext4 partition.
6. Apply changes and wait for formatting to complete.

The ext4 format is required on SteamOS because certain emulators and Steam ROM Manager have compatibility issues with exFAT's file permission model [^352^].

## Step 2: Enter Desktop Mode

EmuDeck cannot be installed from SteamOS Gaming Mode. You must switch to Desktop Mode, which provides a full KDE Plasma desktop environment.

1. Press the **Steam button** on the left side of the Deck.
2. Navigate to **Power > Switch to Desktop**.
3. The Steam Deck will exit Gaming Mode and load the KDE desktop. This may take `20-30 seconds`.

If you are using a Windows handheld (ROG Ally X, Legion Go 2), simply log into Windows Desktop as normal. The EmuDeck installer has a Windows-specific version available from the same website [^161^].

## Step 3: Download and Run the EmuDeck Installer

1. Open the **Chrome** browser from the KDE desktop taskbar (or any browser on Windows).
2. Navigate to **https://www.emudeck.com**.
3. Click the download button for **SteamOS** (or Windows, depending on your device).
4. The installer downloads as an `.AppImage` file (SteamOS) or `.exe` (Windows).
5. Run the installer. On SteamOS, right-click the downloaded `.AppImage` and select **Properties > Permissions**, then check **"Is executable."** Double-click to launch.

The EmuDeck installer window will appear with two primary options: **Easy Mode** and **Custom Mode** [^161^].

### Easy Mode vs. Custom Mode

**Easy Mode** installs all supported emulators with recommended settings, uses internal storage as the default ROM path, applies community-validated controller configurations, and enables all available features including Steam ROM Manager. This is the fastest path to a working setup and is recommended for first-time users [^352^].

**Custom Mode** gives you granular control over:
- Storage location (internal vs. microSD)
- Which specific emulators to install
- Individual emulator settings (resolution, widescreen patches, rewind)
- Controller mapping preferences
- Whether to enable Steam ROM Manager integration
- Additional tools like the Game Compressor

If you have specific performance targets or want to skip emulators for systems you do not plan to play, Custom Mode is worth the extra five minutes of configuration.

## Step 4: Configure Storage Location and Emulator Selection

During Custom Mode setup (or after Easy Mode completes), you will be prompted to select your storage device. Choose the microSD card you formatted earlier, or select internal storage if you have sufficient free space.

EmuDeck then presents a list of supported systems. A checkmark beside a system means its emulator will be installed and configured. The 2026 EmuDeck installer includes the following emulators by default [^161^]:

| System(s) | Emulator | Default Selection |
|---|---|---|
| NES, SNES, GB, GBC, GBA, Genesis, Saturn, PS1, N64, Neo Geo | RetroArch (multiple cores) | Yes |
| GameCube, Wii | Dolphin | Yes |
| Wii U | Cemu | Yes |
| Nintendo Switch | Ryujinx | Yes |
| PS2 | PCSX2-Qt | Yes |
| PS3 | RPCS3 | Yes (optional, large install) |
| Nintendo 3DS | Lime3DS/Citra | Yes |
| PS Vita | Vita3K | Yes |
| Xbox (original) | Xemu | No |
| Dreamcast | Flycast | Yes |
| Nintendo DS | melonDS | Yes |
| DOS/ScummVM games | ScummVM | Yes |
| Arcade (MAME) | MAME (various cores) | Yes |
| PSP | PPSSPP | Yes |

Leave the defaults unless you are certain you will not play a particular system. Disk space for the emulators themselves is modest (`2-3 GB` total); the bulk of your storage will go to ROMs and game assets.

## Step 5: Install Emulators and Complete Setup

Click **Install** and wait. The script downloads each emulator, extracts it to the correct location, installs required dependencies (including Flatpak runtimes on SteamOS), configures controller profiles, and sets up the folder structure for ROMs and BIOS files [^352^].

Installation time varies by internet speed and system:

| Device | Approximate Install Time |
|---|---|
| Steam Deck OLED | `10-15 minutes` |
| ROG Xbox Ally X | `8-12 minutes` |
| Legion Go 2 | `8-12 minutes` |

When complete, EmuDeck will prompt you to add ROMs and run Steam ROM Manager.

## Step 6: Add Your ROMs and BIOS Files

EmuDeck creates a standardized folder structure in `/run/media/mmcblk0p1/emulation/roms/` (if using microSD on SteamOS) or the equivalent path on your chosen storage device. Each system has its own subfolder [^161^].

### ROM Folder Structure

```
emulation/
├── roms/
│   ├── gb/              (Game Boy)
│   ├── gba/             (Game Boy Advance)
│   ├── gbc/             (Game Boy Color)
│   ├── genesis/         (Sega Genesis/Mega Drive)
│   ├── n64/             (Nintendo 64)
│   ├── nds/             (Nintendo DS)
│   ├── nes/             (NES/Famicom)
│   ├── psx/             (PlayStation 1)
│   ├── ps2/             (PlayStation 2)
│   ├── ps3/             (PlayStation 3)
│   ├── psp/             (PlayStation Portable)
│   ├── saturn/          (Sega Saturn)
│   ├── snes/            (Super NES)
│   ├── switch/          (Nintendo Switch)
│   ├── wii/             (Nintendo Wii)
│   ├── wiiu/            (Wii U)
│   └── ... (additional systems)
└── bios/                (BIOS files for all systems)
```

### Transferring ROMs

Use one of these methods to copy your ROM files:

1. **SFTP/SCP:** From a PC on the same network, SFTP to the Steam Deck's IP address (visible in Desktop Mode network settings). User: `deck`, password: your SteamOS password.
2. **USB drive:** Copy ROMs to a USB drive on your PC, then plug it into the Steam Deck via a USB-C hub and copy files using the Dolphin file manager.
3. **SMB/Samba:** Share a folder from your PC and mount it in Dolphin (requires enabling Samba in SteamOS).

Place ROM files in the appropriate subfolder. File extensions vary by system: `.iso` and `.chd` for PS2/GameCube, `.nsp` and `.xci` for Switch, `.3ds` and `.cia` for 3DS, `.zip` or individual ROM files for RetroArch cores [^352^].

### BIOS Files

Many emulators require original console BIOS files to function. Place all BIOS files in the `/emulation/bios/` folder. EmuDeck's 2026 release includes a **BIOS Checker** tool that verifies your BIOS files are correct and complete [^161^]. Run it from the EmuDeck application menu to see which systems have valid BIOS dumps and which are missing files.

| System | Required BIOS File(s) | Notes |
|---|---|---|
| PlayStation 1 | `scph5501.bin` (NA), `scph5502.bin` (EU) | Region must match your ROMs |
| PlayStation 2 | `PS2 Bios 30004R V6 Pal.bin` (various) | Multiple versions supported |
| Sega Saturn | `sega_101.bin` (JP), `mpr-17933.bin` (US) | Required for most games |
| Game Boy Advance | `gba_bios.bin` | Optional but improves accuracy |
| Nintendo DS | `bios7.bin`, `bios9.bin`, `firmware.bin` | Required for melonDS |

## Step 7: Configure Steam ROM Manager

Steam ROM Manager (SRM) is what makes EmuDeck feel like a native console feature. It parses your ROM folders, downloads artwork and metadata, and adds each game to your Steam library as a non-Steam shortcut. The result is that your retro games appear in Gaming Mode with cover art, just like your Steam purchases [^161^][^352^].

### Running Steam ROM Manager

1. From Desktop Mode, launch **Steam ROM Manager** (installed automatically by EmuDeck).
2. The left panel lists all configured parsers (one per emulator/system).
3. Click **Preview** in the top-right.
4. Steam ROM Manager will scan your ROM folders and match games against its databases.
5. Review the matches. Most will be correct; some may need manual correction if your ROM filenames are non-standard.
6. Click **Parse** to generate the Steam shortcuts.
7. Click **Save to Steam** to write the entries to your Steam library.
8. Exit Steam ROM Manager and return to Gaming Mode. Your emulated games will now appear in the library.

### Artwork and Metadata

Steam ROM Manager pulls artwork from **SteamGridDB**, a community database of high-resolution cover art, banners, and logos for non-Steam games. If a game shows no artwork, you can manually search SteamGridDB from within SRM and assign art. Alternatively, the **Decky SteamGridDB** plugin lets you change artwork directly from Gaming Mode after the games are added [^227^].

## Step 8: Per-System Emulator Configuration

While EmuDeck applies sensible defaults, each emulator has settings you may want to tweak for your specific handheld's performance characteristics.

### Dolphin (GameCube & Wii)

On Steam Deck OLED and ROG Xbox Ally X, Dolphin runs at full speed for virtually all GameCube and Wii titles at `2x` internal resolution (`1280x1056` for GameCube, `1584x1320` for Wii). The Legion Go 2 can push `3x` resolution thanks to the RDNA 3.5 GPU [^161^].

Key settings to adjust:
- **Graphics > Internal Resolution:** `2x` for Steam Deck, `2-3x` for Z2 Extreme handhelds
- **Graphics > Aspect Ratio:** Auto (or Force 16:9 for widescreen hack-compatible games)
- **Graphics > Backend:** Vulkan (default; best performance on AMD APUs)

### PCSX2-Qt (PS2)

PCSX2 performance varies by game complexity. Most titles run full speed on Steam Deck OLED at `2x` native resolution (`1080p`). The ROG Xbox Ally X and Legion Go 2 can handle `3x` (`1440p`) for many games [^161^].

Key settings:
- **Graphics > Renderer:** Vulkan
- **Graphics > Internal Resolution:** `2x` (Steam Deck), `3x` (Z2 Extreme)
- **Graphics > Anisotropic Filtering:** `8x` or `16x` (minimal performance impact)
- **System > Emulation Settings > Preset:** Safe (default) or Switch to Unsafe for problematic games

### RPCS3 (PS3)

PS3 emulation is the most demanding system EmuDeck supports. Not all games are playable, but community testing has validated a growing list of titles that run at full speed on modern handhelds [^160^][^381^].

| Game | Performance on Steam Deck | Notes |
|---|---|---|
| God of War (HD) | Flawless, locked `60 FPS` | One of the best-performing titles |
| God of War 2 (HD) | Flawless, locked `60 FPS` | Same engine, same performance |
| MGS HD Collection | Flawless, locked `60 FPS` | All three games solid |
| Bayonetta | `50-60 FPS` | Occasional minor dips |
| Skate 3 | `50-60 FPS` | Very playable |
| Tekken 6 / Tag 2 | Flawless, locked `60 FPS` | Fighting games run well |
| Soul Calibur IV/V | Flawless, locked `60 FPS` | Excellent performance |
| Resident Evil 4 HD | Flawless, locked `30 FPS` | 30 FPS cap in original |
| God of War 3 | Unplayable | `10-15 FPS`; too demanding |
| Gran Turismo 6 | Unplayable | Slideshow, crashes |

Key RPCS3 settings for handhelds [^160^]:
- **CPU > PPU Decoder:** LLVM Recompiler
- **CPU > SPU Decoder:** LLVM Recompiler or ASMJIT (test both per-game)
- **GPU > Renderer:** Vulkan
- **GPU > Resolution Scale:** `100%` (higher scales tank performance)
- **Advanced > Enable SPU thread optimization:** Checked (improves Steam Deck performance)
- Some games require **"Write Color Buffer"** enabled in GPU settings

### Cemu (Wii U)

Cemu requires games in `.wua` format for best performance. Convert your `.rpx` or `.wud` dumps using the Cemu built-in tool or external utilities. Performance is generally good across all current handhelds at `1080p` render resolution [^161^].

### Ryujinx (Nintendo Switch)

Switch emulation remains the most legally and technically complex system. You need your own `prod.keys` and `title.keys` dumped from a Switch console, plus firmware files. Ryujinx on Steam Deck runs 2D titles at full speed but struggles with demanding 3D games. The ROG Xbox Ally X and Legion Go 2 with Z2 Extreme APUs handle a broader library at playable speeds [^161^].

## Step 9: Controller Mapping and Hotkeys

EmuDeck configures Steam Input profiles for each emulator, mapping the Steam Deck's physical controls (and by extension, other handheld controls) to the emulated console's inputs. The default profiles are community-tuned and work well for most games [^352^].

### Universal EmuDeck Hotkeys (Steam Deck)

| Button Combination | Function |
|---|---|
| **L4 + R4** (back paddles) | Open emulator quick menu |
| **Steam + Left D-Pad** | Save state |
| **Steam + Right D-Pad** | Load state |
| **Steam + Up D-Pad** | Increase save state slot |
| **Steam + Down D-Pad** | Decrease save state slot |
| **Steam + A** | Fast-forward toggle |
| **Steam + B** | Screenshot |
| **Steam + X** | Toggle fullscreen |
| **... (QAM) + L1** | Rewind (if enabled) |

These hotkeys are configured through Steam Input and work across all RetroArch cores and most standalone emulators. If a specific emulator does not respond to the hotkeys, open its settings and verify that the Steam Input profile is active.

The 2026 EmuDeck release includes the **MUDI (EmuDecky)** plugin for Steam Deck, which displays a hotkey cheat sheet in the Quick Access Menu and lets you change aspect ratios without leaving a game [^161^]. Install it from the Decky Loader plugin store after completing EmuDeck setup.

## Step 10: Use the Game Compressor to Save Space

ISO dumps of GameCube, Wii, and PS2 games are often `4.7 GB` (single-layer DVD) or `8.5 GB` (dual-layer). EmuDeck's built-in **Game Compressor** converts these to CHD (Compressed Hunks of Data) format, which typically reduces file sizes by `30-60%` with zero impact on loading times or performance [^161^].

To use it, open the EmuDeck application from Desktop Mode and select **Game Compressor**. Point it at your ROM folders, choose which systems to compress, and let it run. A `4.7 GB` GameCube ISO often compresses to `1.2-2.0 GB` as CHD. On a `512 GB` microSD card, compression can free up `50-100 GB` of space depending on your library.

## Performance Expectations by Handheld

The table below summarizes emulation performance across current-generation handhelds. "Full speed" means the emulator maintains the original console's target framerate (`60 FPS` for most systems, `30 FPS` for some PS2/PS3 titles) [^161^].

| System | Steam Deck OLED | ROG Xbox Ally X | Legion Go 2 | MSI Claw 8 AI+ |
|---|---|---|---|---|
| NES / SNES / GBA | Full speed | Full speed | Full speed | Full speed |
| N64 | Full speed | Full speed | Full speed | Full speed |
| PS1 (DuckStation) | Full speed | Full speed | Full speed | Full speed |
| Dreamcast | Full speed | Full speed | Full speed | Full speed |
| PSP | Full speed | Full speed | Full speed | Full speed |
| DS / 3DS | Full speed | Full speed | Full speed | Full speed |
| GameCube (Dolphin) | Full speed (`2x`) | Full speed (`2-3x`) | Full speed (`3x`) | Full speed (`2x`) |
| Wii (Dolphin) | Full speed (`2x`) | Full speed (`2-3x`) | Full speed (`3x`) | Full speed (`2x`) |
| PS2 (PCSX2) | ~Full speed* | Full speed | Full speed | Full speed |
| Wii U (Cemu) | Good | Better | Better | Good |
| Switch (Ryujinx) | Partial (2D titles) | Good | Good | Partial |
| PS3 (RPCS3) | Select titles | More titles | More titles | Select titles |

*Most PS2 games run full speed on Steam Deck OLED; some demanding titles may need slight resolution reduction.

## Troubleshooting

### Steam ROM Manager shows no games

Verify your ROM files are in the correct subfolders under `/emulation/roms/`. Files in the wrong folder will not be detected by the parser. Also check that the parser for that system is enabled in SRM's left panel.

### Emulator crashes on launch

The most common cause is missing BIOS files. Run the **BIOS Checker** from the EmuDeck application menu to identify which systems need BIOS files [^161^]. Another frequent issue is incorrect file permissions on ext4-formatted microSD cards; ensure the `deck` user owns the files.

### Poor performance in specific games

Try the following in order:
1. Reduce internal resolution by one step (e.g., `2x` to `1x`).
2. Switch graphics backend between Vulkan and OpenGL (rarely helps on AMD, but some games prefer one).
3. Enable the emulator's built-in frame skip if available.
4. For RPCS3, try toggling **SPU thread optimization** and testing both LLVM and ASMJIT SPU decoders [^160^].

### Controller not responding in emulator

Open Steam Input configuration for that game's shortcut and verify the EmuDeck controller profile is selected. Some standalone emulators override Steam Input; check the emulator's own controller settings and manually bind inputs if necessary.

## Final Thoughts

EmuDeck removes virtually every pain point that made emulation tedious on PC. In under twenty minutes, you go from a blank storage device to a unified retro gaming library with `30+` systems, proper controller mapping, artwork, and Steam integration [^161^][^352^]. The 2026 additions, Game Compressor, BIOS Checker, MUDI plugin, and EmuVirtual symlinks, address the few remaining rough edges of the previous versions. For Steam Deck owners especially, EmuDeck is practically mandatory software. For Windows handheld users, it is the most polished and automated path to a comprehensive emulation setup without spending hours in individual emulator configuration menus. Dump your ROMs, install EmuDeck, and enjoy four decades of gaming history in a device that fits in your hands.
