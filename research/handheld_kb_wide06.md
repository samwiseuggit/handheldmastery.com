# Facet: Software, Emulation & Gaming Tools

## Key Findings

- **EmuDeck** remains the gold standard for emulation on Steam Deck, supporting 30+ systems from 8-bit consoles through PS3, with automatic configuration and Steam ROM Manager integration [^161^][^352^]
- **SteamOS outperforms Windows 11** on identical handheld hardware by up to 69% in some titles, with significantly better battery life (e.g., Dead Cells: 6+ hours on SteamOS vs. 2h45m on Windows) [^329^][^333^][^334^]
- **Decky Loader** is the essential plugin framework for Steam Deck, with must-have plugins including PowerTools (TDP/overclocking), ProtonDB Badges (compatibility checking), CSS Loader (UI theming), and LSFG-VK (Lossless Scaling frame generation) [^187^][^188^][^191^]
- **ProtonDB** uses a tiered rating system (Platinum, Gold, Silver, Bronze, Borked) for community-reported game compatibility; Proton-GE often improves compatibility beyond official Proton ratings [^182^][^328^][^354^]
- **Lossless Scaling (LSFG)** can double or triple FPS on any handheld for ~$6-7, now available on Steam Deck via the LSFG-VK plugin with 2x/3x/4x frame generation modes [^372^][^378^][^379^]
- **Handheld Companion** is the go-to Windows utility for TDP control, fan curves, performance overlays, and gyro configuration on Windows-based handhelds [^199^][^225^]
- **Moonlight + Sunshine** outperforms Steam Remote Play for local game streaming with lower latency and better image quality, working on Steam Deck, ROG Ally, and other handhelds [^195^][^216^][^220^]
- **RPCS3 PS3 emulation** has improved dramatically on handhelds; many games now run at full speed on Steam Deck including God of War HD, MGS HD Collection, and fighting games [^160^][^375^][^381^]
- **Bazzite** has emerged as the leading SteamOS alternative, supporting 30+ handhelds with atomic updates, broader hardware support, and similar gaming performance [^190^][^194^]
- **Dual-booting SteamOS + Windows** requires rEFInd bootloader, careful partition resizing, and Windows driver installation; guides are well-documented for Steam Deck and Legion devices [^162^][^163^]

---

## EmuDeck Setup & Performance

### What is EmuDeck?

EmuDeck is an all-in-one emulation setup tool that automates the installation and configuration of emulators on Steam Deck and other handhelds. It integrates emulated games directly into the SteamOS interface via Steam ROM Manager and provides a console-like experience through EmulationStation Desktop Edition (ES-DE) [^161^][^352^].

### Installation Steps

1. **Prep Storage**: Format a microSD card (U3/A2 recommended) or use internal SSD
2. **Switch to Desktop Mode**: Press Steam Button > Power > Switch to Desktop
3. **Download Installer**: Visit emudeck.com and download the SteamOS version
4. **Run Installer**: Choose **Custom Mode** to select storage location and configure emulators
5. **Select Systems**: Choose which console emulators to install
6. **Add ROMs**: Place ROM files in `/emulation/roms/` and BIOS files in `/emulation/bios/`
7. **Steam ROM Manager**: Parse games and save to Steam library for Gaming Mode access

### Supported Systems & Emulators

| System(s) | Emulator | Notes |
|---|---|---|
| NES, SNES, GB, GBC, GBA, Genesis, Master System, Game Gear, Saturn, PS1, N64, PSP, Neo Geo, MAME | RetroArch (cores) | Full speed on all handhelds; universal hotkeys |
| GameCube & Wii | Dolphin | Full speed on Steam Deck, ROG Ally; PrimeHack for Metroid Prime Trilogy |
| Wii U | Cemu | Good performance; convert games to WUA format |
| Nintendo Switch | Ryujinx | Requires keys/firmware; 2D games mostly full speed |
| PS2 | PCSX2-Qt | Full speed on Steam Deck OLED, ROG Ally X for most games |
| PS3 | RPCS3 | Select titles full speed; see RPCS3 section below |
| Nintendo 3DS | Citra | Good performance for most titles |
| PS Vita | Vita3K | Growing compatibility |
| Xbox | Xemu | Limited compatibility |
| Dreamcast | Flycast | Full speed on all handhelds |
| DS | melonDS | Full speed; touch controls mapped to screen |
| DOS/ScummVM | ScummVM | Point-and-click adventure games |

### 2026 New Features

- **EmuVirtual (Symlinks)**: Point emulation folders to different locations without breaking paths [^161^]
- **Cloud Sync**: Patreon feature for syncing saves across multiple devices [^161^]
- **MUDI (EmuDecky)**: Plugin for viewing hotkey cheat sheets and changing aspect ratios from Steam Quick Access Menu [^161^]
- **Homebrew Store**: Download free community retro games directly through EmuDeck [^161^]
- **BIOS Checker**: Verifies essential BIOS files are correctly installed [^161^]
- **Game Compressor**: Converts large ISOs to CHD format to save storage [^161^]

### Emulation Performance by System & Device

| System | Steam Deck OLED | ROG Ally X | Legion Go 2 | MSI Claw |
|---|---|---|---|---|
| NES/SNES/GBA | Full speed | Full speed | Full speed | Full speed |
| N64 | Full speed | Full speed | Full speed | Full speed |
| PS1 (DuckStation) | Full speed | Full speed | Full speed | Full speed |
| Dreamcast | Full speed | Full speed | Full speed | Full speed |
| PSP | Full speed | Full speed | Full speed | Full speed |
| DS/3DS | Full speed | Full speed | Full speed | Full speed |
| GameCube (Dolphin) | Full speed | Full speed | Full speed | Full speed |
| Wii (Dolphin) | Full speed | Full speed | Full speed | Full speed |
| PS2 (PCSX2) | ~Full speed* | Full speed | Full speed | Full speed |
| Wii U (Cemu) | Good | Better | Better | Good |
| Switch (Ryujinx) | Partial | Good | Good | Partial |
| PS3 (RPCS3) | Select titles | More titles | More titles | Select titles |

*Most PS2 games run full speed on Steam Deck OLED; some demanding titles may need slight resolution reduction.

---

## Decky Loader Essential Plugins

### What is Decky Loader?

Decky Loader is a homebrew plugin framework for Steam Deck that injects React components into the Steam UI, allowing users to add functionality without modifying Steam files. It is accessed via the Quick Access Menu (QAM) by pressing the "..." button [^188^][^191^].

**Installation**: Switch to Desktop Mode, download from decky.xyz, run installer, return to Gaming Mode. Decky appears as a plug icon in the QAM [^188^].

### Essential Plugins

| Plugin | Function | Rating | Notes |
|---|---|---|---|
| **PowerTools** | TDP control, CPU/GPU frequency adjustment, SMT toggle | Essential | Override TDP beyond 15W; best for performance tuning [^353^][^355^] |
| **ProtonDB Badges** | Shows ProtonDB compatibility ratings in Steam library | Essential | See game compatibility at a glance without leaving Steam [^188^][^191^] |
| **CSS Loader** | Custom SteamOS UI themes and visual customization | Highly Recommended | Hundreds of community themes available [^187^][^191^] |
| **VibrantDeck** | Adjust display saturation and color vibrancy | Highly Recommended | Default 120 setting recommended; makes OLED pop [^227^][^360^] |
| **Decky LSFG-VK** | Lossless Scaling frame generation integration | Highly Recommended | Double/triple FPS in any game; $7 for Lossless Scaling app required [^372^][^379^] |
| **Storage Cleaner** | Clear compatdata and shader cache to free space | Recommended | Easy cleanup without leaving Gaming Mode [^188^] |
| **Junk Store** | Install Epic/GOG games directly through Decky | Recommended | GOG support requires $6 one-time fee [^188^] |
| **Animation Changer** | Replace boot animations with custom clips | Fun | Personalize startup experience [^227^] |
| **HLTB for Deck** | Shows "How Long To Beat" data in game pages | Useful | Plan your gaming sessions [^191^] |
| **SteamGridDB** | Replace game artwork with community creations | Aesthetic | Better library visuals [^227^] |
| **TunnelDeck** | VPN support in Gaming Mode | Niche | Useful for regional restrictions [^227^] |
| **AutoFlatpaks** | Auto-update Flatpak applications | Convenience | Keep apps current [^227^] |
| **Volume Mixer** | Per-app volume control | Useful | Individual app audio levels [^227^] |

### Safety Note

Decky Loader is generally safe but can potentially cause boot issues after major SteamOS updates. Best practice: wait a few days after SteamOS updates, update Decky Loader first, then apply the SteamOS update [^188^].

---

## ProtonDB Game Compatibility

### Understanding ProtonDB Ratings

ProtonDB is a community-driven database where Linux gamers report game compatibility through Proton (Steam's Windows compatibility layer). Ratings are aggregated from user reports [^182^][^354^][^359^].

| Rating | Meaning | Buy Recommendation |
|---|---|---|
| **Platinum** | Runs perfectly out of the box | Buy with confidence |
| **Native** | Has native Linux version | Buy with confidence |
| **Gold** | Runs perfectly after tweaks | Buy; minor config needed |
| **Silver** | Runs with minor issues but playable | Consider; check specific issues |
| **Bronze** | Runs but crashes or has serious issues | Avoid unless dedicated to fixing |
| **Borked** | Won't start or unplayable | Do not buy |

### How to Check Compatibility Before Buying

1. **Steam Store Page**: Check Valve's official Deck Verified badge (Verified/Playable/Unsupported/Unknown) [^182^][^359^]
2. **ProtonDB Website**: Search the game on protondb.com for community ratings [^359^]
3. **ProtonDB Browser Extension**: Install Chrome/Firefox extension to see ratings directly on Steam store pages [^356^]
4. **DeckAlly**: Aggregates Verified status, ProtonDB rating, performance benchmarks, and HLTB data in one view [^182^]
5. **SteamDeckHQ**: Check for actual performance benchmarks with FPS numbers and recommended settings [^182^]

### Proton GE vs. Stock Proton

**Proton-GE** (Glorious Eggroll) is an unofficial fork of Proton maintained by a solo developer. Key differences from Valve's official Proton [^192^][^328^]:

- Based on newer, bleeding-edge Wine versions
- Includes media playback fixes, AMD FSR patches, and per-game "protonfixes"
- Often enables games that don't work on official Proton
- Can offer better performance for certain titles
- May introduce instability or bugs not present in official Proton
- A Silver-rated game on stock Proton may run Platinum on Proton-GE [^328^]

**Installing Proton-GE** [^328^]:
1. Switch to Desktop Mode, open Discover store
2. Install **ProtonUp-Qt**
3. Launch ProtonUp-Qt, select Proton-GE, download latest
4. In Gaming Mode: right-click game > Properties > Compatibility > Force specific tool > Select Proton-GE

### Sample ProtonDB Compatibility Ratings (Popular Games)

| Game | ProtonDB Rating | Deck Verified | Notes |
|---|---|---|---|
| Hades | Platinum | Verified | Locked 60 FPS |
| Dead Cells | Platinum | Verified | Locked 60 FPS |
| Resident Evil 2 | Platinum | Verified | Excellent performance |
| Celeste | Platinum | Verified | Perfect |
| Balatro | Platinum | Verified | Flawless |
| Stray | Platinum | Playable | Works perfectly despite Playable badge |
| Cyberpunk 2077 | Gold | Verified | 35-45 FPS at Deck settings; has Deck preset |
| Sekiro | Gold | Verified | May need settings tweaks for stable FPS |
| Resident Evil 3 | Gold | Playable | Good with minor tweaks |

---

## RPCS3 PS3 Emulation on Handhelds

### Recent Improvements

RPCS3 has made significant strides for handheld gaming. The emulator now features an improved in-game overlay (activated with SELECT + START) that allows changing settings like resolution without restarting the emulator. The team has also added PS3 games as Non-Steam Shortcuts with artwork transfer [^160^].

### Steam Deck Performance

Community-tested games with results on Steam Deck (stock settings, 100% rendering) [^381^]:

| Game | Performance | Notes |
|---|---|---|
| God of War (HD) | Flawless | Locked 60 FPS |
| God of War 2 (HD) | Flawless | Locked 60 FPS |
| MGS HD Collection | Flawless | All 3 games solid 60 FPS |
| Bayonetta | Great | 50-60 FPS |
| Skate 3 | Great | 50-60 FPS |
| Tekken 6/Tag 2 | Flawless | Locked 60 FPS |
| Soul Calibur IV/V | Flawless | Locked 60 FPS |
| Resident Evil 4 HD | Flawless | Locked 30 FPS |
| Heavenly Sword | Great | Locked 30 FPS |
| Yakuza: Dead Souls | Good | Steady 30 FPS [^160^] |
| Ratchet & Clank: Tools of Destruction | Playable | Some slowdown [^160^] |
| God of War 3 | Unplayable | 10-15 FPS |
| Ico & Shadow of Colossus | Unplayable | 10-15 FPS slideshow |
| Gran Turismo 6 | Unplayable | Slideshow, crashes |

**Optimization Tips** [^160^]:
- Enable SPU thread optimization for better Steam Deck performance
- Use the new in-game overlay to adjust resolution on-the-fly
- Some games require "Write Color Buffer" enabled
- CryoUtilities recommended settings help significantly

---

## Handheld Companion (Windows)

### Overview

Handheld Companion is an open-source Windows utility that provides TDP control, fan curve management, performance overlays, button remapping, and gyro configuration for Windows-based handhelds. It supports devices from ASUS, Lenovo, GPD, AYANEO, MSI, and more [^199^][^225^].

GitHub: `Valkirie/HandheldCompanion`

### Key Features

| Feature | Description |
|---|---|
| **TDP Control** | Set power limits globally or per-game profile [^225^] |
| **Fan Curves** | Create custom fan curves with temperature thresholds [^361^] |
| **Performance Overlay** | Built-in FPS, CPU/GPU usage, temperature, power draw display [^199^] |
| **QuickTools** | On-the-fly adjustment via hotkey overlay [^199^] |
| **Gyro/Motion Control** | Configure gyro as right stick camera control with activator buttons [^225^] |
| **Button Remapping** | Full controller layout customization per profile [^225^] |
| **Auto-TDP** | Automatically adjusts TDP to hit target FPS [^223^] |

### Setup Guide [^225^]

1. Download latest `.exe` from GitHub releases
2. Install and restart device
3. Launch Handheld Companion before game launchers
4. Settings: Enable Auto-Start, background launch, minimize to tray
5. Configure QuickTools hotkey for in-game overlay access
6. Create game profiles with custom TDP, fan curves, and button mappings

### TDP Adjustment

- Go to Profiles > Enable Thermal Power (TDP) Limit
- Set TDP per-game or globally
- Fan curves can be customized with "Fan max speed override" flag for critical cooling [^361^]

---

## Windows 11 Optimization for Handhelds

### Debloating Guide

Windows 11 carries significant overhead from background services, telemetry, and pre-installed apps that reduce gaming performance and battery life on handhelds. Debloating frees RAM and CPU resources [^217^][^333^].

**Using Win11Debloat Script** (Recommended method) [^217^]:

1. Right-click Start Menu > Terminal (Admin)
2. Run: `& ([scriptblock]::Create((irm "https://debloat.raphi.re/")))`
3. Choose **Default Mode** (safe for most users) or **Custom Setup** (advanced)
4. Enable "Create system restore point" as safety net
5. Click Apply Changes

**What Default Mode Removes/Disables**:
- Telemetry, targeted advertising, suggested content
- Common pre-installed bloatware (Candy Crush, Spotify, etc.)
- Copilot and Bing web search in Start menu
- Intrusive interface elements
- File Explorer and Settings clutter

### Privacy Settings to Disable [^374^][^377^][^219^]

| Setting | Path | Action |
|---|---|---|
| Optional diagnostic data | Privacy & security > Diagnostics & feedback | Turn OFF |
| Advertising ID | Privacy & security > General | Turn OFF |
| App launch tracking | Privacy & security > General | Turn OFF |
| Suggested content in Settings | Privacy & security > General | Turn OFF |
| Online speech recognition | Privacy & security > Speech | Turn OFF |
| Inking/typing personalization | Privacy & security > Inking & typing | Turn OFF |
| Tailored experiences | Privacy & security > Diagnostics & feedback | Turn OFF |

### Services to Disable for Gaming Performance [^218^][^219^]

| Service | Why Disable |
|---|---|
| Connected User Experiences and Telemetry (DiagTrack) | Constant background data collection |
| dmwappushservice | Telemetry-related push service |
| Xbox Game Bar | Consumes background resources; use handheld tools instead [^332^] |
| Xbox Live services | If not using Xbox features |
| Print Spooler | Unless printing needed |
| Windows Search | Consider disabling on older drives |

**Registry method to disable Xbox Game Bar** [^337^]:
```
HKEY_CURRENT_USER\SOFTWARE\Microsoft\Windows\CurrentVersion\GameDVR
DWORD: AppCaptureEnabled = 0

HKEY_CURRENT_USER\System\GameConfigStore
DWORD: GameDVR_Enabled = 0
```

### Windows 11 vs SteamOS Performance Comparison

| Factor | SteamOS | Windows 11 |
|---|---|---|
| Made for handhelds | Yes | No |
| Game compatibility | Steam-focused | All launchers/services |
| Anti-cheat support | Limited | Full |
| Battery life (Dead Cells) | 6+ hours | 2h 45m [^333^] |
| Cyberpunk 2077 FPS | ~59 FPS (low-medium) | ~46 FPS [^333^] |
| Suspend/resume | Console-like instant | Inconsistent |
| The Witcher 3 FPS | 76 FPS | 66 FPS [^333^] |
| Returnal FPS (1200p High) | 33 FPS | 18 FPS [^334^] |

**Pick SteamOS if**: You primarily play Steam games, value battery life and simplicity, want console-like suspend/resume [^333^]

**Pick Windows 11 if**: You need Game Pass, Epic, anti-cheat games, or use handheld for work [^333^]

---

## Lossless Scaling (LSFG) Performance

### What is Lossless Scaling?

Lossless Scaling is a ~$6-7 utility (on Steam) that adds AI frame generation to any game, regardless of whether the game natively supports it. The LSFG (Lossless Scaling Frame Generation) feature creates interpolated frames to boost perceived framerates [^202^][^372^].

### How It Works

- **2x Mode**: Doubles FPS (e.g., 30 FPS -> 60 FPS)
- **3x Mode**: Triples FPS (e.g., 20 FPS -> 60 FPS)  
- **Platform agnostic**: Works on any GPU (AMD, NVIDIA, Intel)
- **Game agnostic**: Works as a final display output layer - no game integration needed [^202^]
- Also includes upscaling options (FSR, NIS) for additional performance gains [^372^]

### Steam Deck Installation (2026 Method) [^372^][^378^][^379^]

1. Purchase Lossless Scaling on Steam (install on internal storage)
2. Install Decky Loader (if not already installed)
3. Open Decky Plugin Store, search for **"Decky LSFG-VK"**
4. Install plugin, then click "Download LSFG-VK" within plugin
5. Copy launch option from plugin to game's Properties > Launch Options
6. Set multiplier (2x recommended for Steam Deck), adjust Flow Scale if needed
7. Launch game - frame generation activates automatically

### Performance Results

| Game | Native FPS | With LSFG | Multiplier | Device |
|---|---|---|---|---|
| Ghost of Tsushima | ~37 FPS | ~60 FPS | 2x | Steam Deck [^382^] |
| Clear Obscure | ~30 FPS | 60+ FPS | 2x (Flow 0.65) | Steam Deck [^382^] |
| Cyberpunk 2077 | Variable | Improved but inconsistent | 2x | Steam Deck [^382^] |
| General 30 FPS titles | 30 FPS | 60 FPS | 2x | Any handheld |
| General 60 FPS titles | 60 FPS | 120 FPS* | 2x | High-refresh devices |

*120 FPS requires display that supports it (e.g., ROG Ally 120Hz mode)

### Caveats

- **Input latency is noticeable**, especially at 3x/4x; less critical for single-player games [^202^][^372^]
- Can be partially mitigated with Nvidia Reflex or AMD Anti-Lag equivalents
- Some visual artifacts may appear; 2x mode has fewer than 3x [^202^]
- Do not combine with in-game frame generation (DLSS FG, AFMF)
- Experimental; test per title [^382^]

---

## Remote Play & Cloud Gaming

### Local Streaming: Sunshine + Moonlight

The gold standard for low-latency local game streaming. Sunshine runs on your gaming PC; Moonlight is the client on your handheld [^195^][^216^][^220^].

**Why Moonlight/Sunshine over Steam Remote Play?** [^195^][^221^]
- Better throughput and performance
- Lower latency
- More customization options
- More stable connection
- Supports up to 4K HDR streaming
- Virtual display support (with Apollo fork) [^221^]

**Setup** [^216^][^220^]:
1. Install **Sunshine** on host gaming PC (from GitHub)
2. Install **Moonlight** on handheld (Discover Store on Steam Deck)
3. Configure Sunshine via web interface (https://localhost:47990)
4. Pair devices (enter PIN from Moonlight in Sunshine)
5. Add games to Sunshine's Applications tab
6. Connect via Moonlight and play

**Optimization Tips** [^216^][^222^]:
- Use Ethernet on host PC; 5GHz WiFi on handheld
- Set resolution to 1440p or 1080p based on network
- Use HEVC codec for faster decode (AV1 is newer but slower)
- Enable HDR if supported
- For Steam Deck, can throttle to 5W while streaming for massive battery savings [^222^]

| Feature | Moonlight+Sunshine | Steam Remote Play |
|---|---|---|
| Latency | Lower | Higher |
| Image quality | Better | Good |
| Customization | Extensive | Limited |
| HDR support | Yes | Limited |
| Setup difficulty | Moderate | Easy |
| Host GPU support | AMD/NVIDIA/Intel | NVIDIA only (best) |

### Xbox Cloud Gaming [^196^][^201^]

- Access via browser at **xbox.com/play**
- Requires Xbox Game Pass Ultimate subscription
- New 2026 web UI redesign available via Preview Features toggle in profile settings [^201^]
- Can install as Edge PWA app on Windows handhelds
- Works on any device with a supported browser
- Latency depends on internet connection; not suitable for competitive games

### PS Remote Play (Steam Deck) [^373^][^376^][^384^]

Use **chiaki-ng** (formerly chiaki4deck) for PS5 streaming to Steam Deck:

1. Enable Remote Play on PS5 (Settings > System > Remote Play)
2. Install **chiaki-ng** from Discover Store on Steam Deck (Desktop Mode)
3. Create Non-Steam Game shortcut for Gaming Mode access
4. Both devices must be on same network
5. Register PS5 using the Remote Play PIN from console
6. Retrieve PSN Account ID via public lookup in chiaki-ng
7. Stream and play PS5 games on your handheld

### Streaming Services Comparison

| Service | Latency | Quality | Setup Difficulty | Best For |
|---|---|---|---|---|
| Moonlight (local) | Very Low | Excellent | Moderate | Local PC streaming |
| Steam Remote Play | Low | Good | Easy | Steam library streaming |
| Chiaki (PS5) | Low | Good | Moderate | PS5 game streaming |
| Xbox Cloud Gaming | High (internet) | Good (depends) | Easy | Game Pass cloud games |

---

## Dual-Boot Guide Summary

### Overview

Dual-booting SteamOS and Windows 11 gives you the best of both worlds: SteamOS for its superior battery life and gaming performance, Windows for anti-cheat games, Game Pass, and full PC compatibility. The process works on Steam Deck, Legion Go S, Legion Go 2, and other SteamOS-compatible handhelds [^162^][^163^].

### Prerequisites

- USB-C hub with at least 3 USB-A ports, USB-C charging, HDMI, Ethernet
- USB keyboard and mouse
- 8GB+ USB stick or microSD card for recovery media
- Minimum 64GB free space for Windows 11

### Steps

1. **Set SteamOS Password**: Desktop Mode > Settings > Users > Change Password [^162^]

2. **Create SteamOS Recovery Media**: Download SteamOS recovery image, flash to USB with Rufus (Windows) or Balena Etcher (Linux) [^162^]

3. **Install rEFInd Boot Manager** (prevents Windows from hijacking boot):
   ```bash
   cd $HOME && rm -rf $HOME/SteamDeck_rEFInd/ && git clone https://github.com/jlobue10/SteamDeck_rEFInd && cd SteamDeck_rEFInd && chmod +x install-GUI.sh && ./install-GUI.sh
   ```
   Open rEFInd GUI, set SteamOS as default boot, configure timeout [^162^]

4. **Resize Internal Drive**:
   - Boot from SteamOS recovery media (hold Vol Down + Power)
   - Open KDE Partition Manager
   - Resize ext4 home partition to make space
   - Create new NTFS partition in unallocated space [^162^]

5. **Install Windows 11**:
   - Boot from Windows 11 USB (hold Vol Down + Power)
   - Choose "Custom: Install Windows only (advanced)"
   - Select the NTFS partition you created [^162^]

6. **Install Drivers** (Steam Deck only):
   - Download official Windows drivers from Valve
   - Install audio, WiFi, Bluetooth, graphics, SD card drivers
   - Install **Dual Boot Fix** tool to preserve rEFInd menu [^162^]

7. **Final Configuration**:
   - Run `msconfig` in Windows, enable "No GUI boot"
   - Return to SteamOS, open rEFInd GUI > Create Config > Install Config
   - Reboot to see dual-boot menu [^162^]

### Key Considerations

- **CRITICAL**: Never select "delete everything" during Windows installation - this will wipe SteamOS [^162^]
- Windows requires minimum 64GB; leave room for games
- Steam Deck drivers are different for LCD vs OLED models
- The rEFInd boot menu prevents Windows from taking over the bootloader
- Dual Boot Fix tool must be run from Windows after driver installation
- Works on: Steam Deck LCD/OLED, Legion Go S, Legion Go 2 [^162^]

---

## Bazzite: SteamOS Alternative

### What is Bazzite?

Bazzite is a community-driven Linux gaming OS based on Fedora Linux with atomic updates. It provides a Steam Deck-like experience (Game Mode + Desktop Mode) on a much wider range of hardware [^190^][^194^].

### Key Advantages Over SteamOS

- **Broader hardware support**: 30+ handhelds including ROG Ally/X, Legion Go/S, GPD, AYANEO, MSI Claw, Steam Deck LCD/OLED [^190^]
- **Atomic updates**: Always have previous version available via bootloader; auto-rollback after 3 failed boots [^190^]
- **Dual-boot support**: Excellent Windows co-existence [^190^]
- **Latest drivers**: Ships newest Linux kernel, graphics drivers, Gamescope [^190^]
- **Pre-installed tools**: Sunshine (streaming), Lutris, ProtonUp-Qt, Waydroid (Android apps) [^190^]
- **Desktop choice**: KDE Plasma (like SteamOS) or GNOME [^194^]
- **File system**: BTRFS with deduplication and compression vs SteamOS's Ext4 [^190^]

### Performance Comparison

Overall gaming performance is virtually identical between Bazzite and SteamOS. Bazzite uses a faster 1000Hz kernel tick rate (vs SteamOS's 300Hz) which may feel slightly snappier. Battery life gains over SteamOS are negligible (~10 minutes) [^194^].

### When to Choose Bazzite Over SteamOS

- You're using a non-Steam Deck handheld that SteamOS doesn't officially support
- You want GNOME desktop option
- You need the latest drivers and software updates sooner
- You want better dual-boot Windows support
- You value the atomic update/rollback system

### When NOT to Choose Bazzite

- You're primarily a Steam Deck user (SteamOS is optimized for it)
- You want to play anti-cheat multiplayer games (same Linux limitations as SteamOS)
- You need PC Game Pass (streaming only, same as SteamOS) [^194^]

---

## Sources

| Citation | Source | Date |
|---|---|---|
| [^161^] | HandheldGamingHub - EmuDeck for Steam Deck 2026 Setup Guide | 2026-02-23 |
| [^162^] | Yahoo Tech / Windows Central - Steam Deck dual boot guide | 2026-01-19 |
| [^160^] | Steam Deck HQ - RPCS3 Gets Big Improvements on Handhelds | 2026-04-06 |
| [^187^] | GamingOnLinux - 13 Great Decky Loader Plugins for Steam Deck | 2025-02-08 |
| [^188^] | DadWithADeck - How to Install Decky Loader on Steam Deck | 2025-10-09 |
| [^191^] | Decky.xyz - Official Decky Loader Website | N/A |
| [^182^] | DeckAlly - How to Check Steam Deck Compatibility Before Buying | 2026-04-14 |
| [^192^] | Yahoo Tech - Proton vs. Proton GE: What's the Difference | 2025-09-03 |
| [^199^] | GitHub - Valkirie/HandheldCompanion Repository | N/A |
| [^217^] | NerdZap - The Ultimate Windows 11 Debloat Guide | 2026-04-03 |
| [^202^] | Reddit r/pcmasterrace - LSFG Lossless Scaling Frame Gen Discussion | 2025-09-05 |
| [^195^] | XDA Developers - Apollo and Moonlight for couch gaming | 2026-04-18 |
| [^196^] | Xbox Support - Setup handheld for cloud gaming | N/A |
| [^216^] | NerdZap - Stream PC Games with Sunshine & Moonlight Guide | 2026-03-04 |
| [^220^] | GitHub - Moonlight Setup Guide Wiki | 2025-02-27 |
| [^225^] | HandheldModz - Setting up Handheld Companion Guide | 2024-06-15 |
| [^352^] | Wagner's Tech Talk - Guide to EmuDeck on Steam Deck | 2025-07-10 |
| [^329^] | Tech4Gamers - Steam OS vs. Windows: Which Wins for Handheld Gaming | 2026-02-28 |
| [^333^] | Genki - SteamOS vs Windows 11: Which OS Works Better on Handhelds | 2025-08-04 |
| [^334^] | TweakTown - SteamOS dominates Windows 11 in handheld gaming tests | 2025-06-26 |
| [^372^] | Decky.net - Lossless Scaling on Steam Deck 2026 Guide | 2026-03-22 |
| [^379^] | RetroHandhelds.gg - Crank Up Steam Deck Performance with Lossless Scaling | 2026-01-15 |
| [^382^] | DeckFilter - How to Install Lossless Scaling Frame Generation on Steam Deck | 2025-07-20 |
| [^328^] | DeckAlly - Proton-GE on Steam Deck: When ProtonDB Ratings Lie | 2026-05-09 |
| [^354^] | Reddit r/SteamDeck - ProtonDB Compatibility Rating Explanation | N/A |
| [^359^] | Digital Trends - How to check if games will work on Steam Deck | 2022-06-13 |
| [^227^] | Decky.net - Decky Loader Ultimate Guide to Installation and Top Plugins | 2024-02-21 |
| [^375^] | Overclock3D - RPCS3 closer than ever to full PS3 playability | 2026-02-15 |
| [^381^] | Reddit r/SteamDeck - Master RPCS3 Steam Deck Compatibility Tracker | 2025-09-15 |
| [^190^] | Bazzite Docs - Comparison of Bazzite and SteamOS | 2025-01-09 |
| [^194^] | How-To Geek - 5 Reasons to Replace SteamOS With Bazzite | 2025-04-27 |
| [^374^] | PDQ - How to disable Windows telemetry | 2026-03-23 |
| [^377^] | NinjaOne - How to Disable Telemetry in Windows 11 | 2026-03-23 |
| [^219^] | XDA Developers - I disabled these 5 Windows 11 background services | 2026-02-03 |
| [^332^] | WindowsForum - Disable or Remove Xbox Game Bar on Windows 11 | 2025-10-19 |
| [^337^] | Gearspace - Windows 11 Optimization: Disable Game Bar registry | 2025-04-12 |
| [^376^] | Compromath - How To Stream PS5 To Steam Deck | 2026-03-01 |
| [^373^] | YouTube - Turning Steam Deck into Playstation Portal (Chiaki) | 2026-04-25 |
| [^384^] | BenQ - How to Remote Play PS5 on Steam Deck via chiaki4deck | 2025-03-10 |
| [^353^] | Stanto.com - Steam Deck OLED BIOS TDP PowerTools Guide | 2024-04-18 |
| [^355^] | LinuxGamingCentral - Overclock Your Steam Deck For Increased Performance | 2023-12-08 |
| [^360^] | Retro Game Corps - Steam Deck Emulation Starter Guide | 2022-10-16 |
| [^356^] | GitHub - ProtonDB Community Extension for Chrome and Firefox | 2023-08-31 |
| [^197^] | TroubleChute Hub - LSFG Worth Buying? Frame Gen + Upscaling Guide | 2024-06-03 |
| [^193^] | Jahed.dev - Game Streaming with Steam, Sunshine and Moonlight | 2025-10-26 |
| [^221^] | Gauransh Mathur - Self Hosted Cloud Gaming: Apollo/Sunshine and Moonlight | 2025-10-17 |
| [^222^] | Decky.net - In-Home Streaming with Moonlight and Sunshine | 2024-10-27 |
| [^201^] | Yahoo Tech - How to get Xbox Cloud Gaming's new web UI | 2026-01-27 |
| [^336^] | Alibaba Electronics - Best Portable Consoles in 2026 | 2026-04-30 |
| [^327^] | GameFAQs - Steam Deck is basically the ultimate emulation device | 2022-05-27 |
| [^223^] | GPD Store - GPD Optimisation Guide | 2025-10-06 |
| [^361^] | GitHub - HandheldCompanion Issue #1118 (Fan Speed) | 2024-08-21 |
| [^378^] | GamesInHand - How to Install and Use Lossless Scaling on Steam Deck | 2025-11-28 |
| [^380^] | XDA Developers - You can use frame generation in any game on Steam Deck | 2025-08-10 |
| [^383^] | GitHub - xXJSONDeruloXx/decky-lsfg-vk | 2025-07-11 |
| [^330^] | PCMag - The Best Handheld Gaming PCs for 2026 | 2026-01-17 |
| [^331^] | Windows Central - 4 reasons why SteamOS is winning over PC gamers | 2026-01-27 |
| [^335^] | WindowsForum - SteamOS Surpasses Windows 11 in Handheld Gaming Benchmarks | 2025-06-26 |
| [^163^] | Windows Central - How to dual boot Windows and SteamOS on Steam Deck | 2026-01-19 |
| [^362^] | GitHub - NGnius/PowerTools Issue #53 (Overclocking Profiles) | 2022-11-28 |
| [^357^] | HardForum - Steam Deck Overclock & Undervolt Results | 2023-08-25 |
| [^358^] | Steam Deck HQ - Undervolting and Overclocking Guide | 2023-04-07 |
| [^224^] | Atera - How to debloat Windows 11 | 2026-01-08 |
| [^226^] | LemonPyHub - Windows Debloater EXE Guide | 2026-01-20 |
| [^218^] | YouTube - How to Optimize Windows 11: Disable Non Essential Services | 2026-02-26 |
| [^362^] | GitHub - PowerTools Overclocking Profiles | 2022-11-28 |
| [^189^] | Digimorphosis - Don't Be Afraid To Try Games With Varying Compatibility Ratings | 2025-01-21 |
