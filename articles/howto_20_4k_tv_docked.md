# How to Connect to a 4K TV: Best Settings for "Docked Mode" Gaming

Handhelds are designed for portability, but their USB-C ports output video signals that can drive 4K displays. A Steam Deck connected to a 65-inch OLED TV becomes a living-room console — one that draws a fraction of the power of a PlayStation 5 and produces less fan noise than most laptops. The key is understanding what these handheld APUs can realistically output, selecting the right dock for your TV and handheld, and configuring the settings that matter for big-screen play. A naive 4K setup produces a stuttery, overheated mess. A properly configured docked handheld delivers a genuinely enjoyable living-room experience for a wide range of titles.

---

## Prerequisites

| Requirement | Minimum Spec | Notes |
|---|---|---|
| **Handheld with video output** | USB-C with DisplayPort Alt Mode | All major 2026 handhelds support this |
| **Dock or USB-C hub** | HDMI 2.0 minimum; HDMI 2.1 for 120Hz | See recommended dock table below |
| **4K TV** | 3840×2160 resolution | Any modern 4K TV works; HDMI 2.1 ports preferred |
| **Power delivery** | 45W+ through dock's USB-C PD | Required for Turbo Mode on high-TDP handhelds |
| **Controller** | Bluetooth or USB gamepad | Handheld controls are inaccessible when docked |
| **HDMI cable** | High Speed HDMI (2.0) or Ultra High Speed (2.1) | Cable must match your dock's HDMI version |

---

## Understanding the Bottleneck: APU vs Display

The dock does not add performance. It is a passive signal converter — USB-C DisplayPort Alt Mode to HDMI — plus USB hub and power passthrough. The handheld's APU renders every frame whether the display is 800p or 4K. The dock merely transmits that signal.

| Handheld | APU TFLOPS | Internal Resolution | Max Practical Docked Resolution | Notes |
|---|---|---|---|---|
| **Steam Deck OLED** | ~1.6 RDNA 2 [^80^] | 1280×800 | 1080p for AAA, 4K UI output possible | 15W TDP cap limits 4K native rendering [^98^] |
| **ROG Xbox Ally X** | ~5.9 RDNA 3.5 [^144^] | 1920×1080 | 1440p for AAA, 4K output with FSR | 35W Turbo Mode needs 100W charger [^21^] |
| **Legion Go 2** | ~5.9 RDNA 3.5 [^55^] | 1920×1200 | 1440p for AAA, 4K output with FSR | Largest display, best GPU for docked use |
| **Legion Go S** | ~3.4 RDNA 2 [^151^] | 1920×1200 | 1080p for AAA | Entry-level APU; stick to 1080p docked |
| **MSI Claw 8 AI+** | ~4.0 Xe2 [^140^] | 1920×1200 | 1080p for AAA, 4K via eGPU | TB4 enables external GPU for true 4K [^63^] |

Native 4K rendering is not feasible on any current handheld APU for demanding titles [^98^]. The Steam Deck's 1.6 TFLOPS GPU is roughly equivalent to a PlayStation 4 — it can output a 4K signal, but the game itself must render internally at a lower resolution and upscale. The ROG Ally X and Legion Go 2, with their ~5.9 TFLOPS RDNA 3.5 GPUs, approach PlayStation 4 Pro territory and can render at 1440p in some titles before upscaling to 4K.

---

## Recommended Docks for 4K TV Gaming

The dock market has matured significantly. These are the standout options for 4K TV use in 2026, ranked by suitability for big-screen gaming:

| Rank | Dock | HDMI Version | Max Output | PD Pass-Through | Price | Best For |
|---|---|---|---|---|---|---|
| 1 | **BenQ beCreatus GR10** | HDMI 2.1 | 4K@120Hz + VRR + FreeSync | 100W | ~$109 | Premium 4K TV with VRR/ALLM support [^17^][^90^] |
| 2 | **JSAUX Upgraded 5-in-1** | HDMI 2.1 | 4K@120Hz (no VRR) | 100W | ~$45 | Best value — 4K@120Hz at budget price [^14^][^21^] |
| 3 | **JSAUX HB0604 M.2** | HDMI 2.0 | 4K@60Hz | 100W | ~$100 | Docked gaming + storage expansion up to 4TB [^13^][^19^] |
| 4 | **Valve Steam Deck Dock** | HDMI 2.0 + DP 1.4 | 4K@60Hz | 100W (incl. 45W charger) | ~$89 | Steam Deck only; firmware updates via SteamOS [^11^][^62^] |
| 5 | **JSAUX HB0705 RGB Cooling** | HDMI 2.1 | 4K@120Hz + VRR | 100W | ~$60 | Sustained docked sessions; active cooling [^58^][^69^] |
| 6 | **UGREEN 6-in-1** | HDMI 2.1 | 4K@120Hz | 100W | ~$46 | Wide cradle for larger handhelds [^53^][^71^] |
| 7 | **ASUS ROG 65W Charger Dock** | HDMI 2.0 | 4K@60Hz | 65W | ~$30 | Travel — charger and dock in one [^55^][^56^] |
| 8 | **Anker 6-in-1 (A83S1)** | HDMI 2.0 | 4K@60Hz | 100W | ~$23-30 | Ultra-budget entry point [^120^][^124^] |

### Key Dock Selection Criteria

**HDMI 2.1 vs 2.0**: HDMI 2.0 supports 4K at 60Hz — sufficient for nearly all docked handheld gaming. HDMI 2.1 adds 4K at 120Hz, Variable Refresh Rate (VRR), and Auto Low Latency Mode (ALLM). The BenQ GR10 is the only mainstream dock that supports HDMI 2.1 with full VRR and FreeSync [^17^][^90^]. For most users, the JSAUX Upgraded 5-in-1 at ~$45 offers the best balance — it has HDMI 2.1 for 4K@120Hz output, even though handheld APUs rarely feed it content at that rate [^14^][^21^].

**Power Delivery**: The ROG Ally X requires a 100W PD charger to sustain its 35W Turbo Mode when docked [^21^]. Lower-wattage docks like the ASUS ROG 65W Charger Dock will work but cap performance at lower TDP settings. The Steam Deck's 15W maximum is satisfied by any 45W+ charger.

**Cooling**: Docking a handheld eliminates natural airflow around the chassis. The JSAUX HB0705 addresses this with magnetic RGB fans that reduce temperatures by 3-5°C during sustained docked sessions [^69^]. For occasional docked play, this is unnecessary. For multi-hour living-room sessions, it prevents thermal throttling.

---

## Step 1: Physical Connection

1. Connect the dock's USB-C input to your handheld's USB-C port. For the Steam Deck, use the top port (the bottom port is for charging only and does not support DisplayPort Alt Mode).
2. Connect the dock's HDMI output to your TV using an appropriate cable:
   - For HDMI 2.0 docks: High Speed HDMI cable.
   - For HDMI 2.1 docks (BenQ GR10, JSAUX Upgraded): Ultra High Speed HDMI cable (certified for 48Gbps).
3. Connect the dock's USB-C PD input to your power adapter (45W minimum, 100W recommended for Turbo Mode).
4. Place the handheld in the dock's cradle, ensuring the USB-C connector is fully seated.

---

## Step 2: TV Configuration for Minimum Latency

Modern TVs apply image processing that adds 20-80ms of input lag — acceptable for movies, unacceptable for gaming.

1. Locate your TV's **Game Mode** or **PC Mode** setting. On LG OLEDs this is "Game Optimizer"; on Samsung it's "Game Mode"; on Sony it's "Picture Mode: Game".
2. Enable **Game Mode**. This bypasses the TV's motion interpolation, noise reduction, and dynamic contrast processing, reducing input lag from 50-80ms down to 10-20ms.
3. If your TV and dock both support **ALLM** (Auto Low Latency Mode), it should activate automatically. Verify the input icon shows "Game" or "PC".
4. Disable these specific TV features:
   - **Motion smoothing** / **Motion Interpolation** (TruMotion, MotionFlow, Auto Motion Plus) — causes soap-opera effect and adds latency.
   - **Dynamic Contrast** — causes brightness pumping during gameplay.
   - **Noise Reduction** — softens the image from the handheld's already-upscaled output.
5. Set **Color Space** to **Auto** or **PC RGB** (0-255) rather than Limited (16-235) to prevent crushed blacks.

---

## Step 3: Handheld Display Settings

### Steam Deck OLED

1. The Steam Deck auto-detects the external display. Open **Quick Access Menu** (...") > **Display**.
2. Set **Resolution** to match your TV:
   - **4K TV**: Output at 3840×2160 for UI crispness; games will render internally at lower res and upscale via FSR.
   - **1080p/1440p TV**: Match native TV resolution.
3. Enable **FSR** (FidelityFX Super Resolution) in-game:
   - Render at 720p-1080p internally.
   - Upscale to 4K output using FSR 2.0 or FSR 3.
   - Recommended: FSR Quality or Balanced preset for docked play [^98^].
4. Set **Refresh Rate** to 60Hz unless your TV supports 120Hz and you are playing a lightweight title.

### ROG Xbox Ally X / Legion Go 2 (Windows)

1. Right-click desktop > **Display Settings**.
2. Set resolution to your TV's native resolution (3840×2160 for 4K).
3. Set **Refresh Rate** to 60Hz (120Hz if supported by TV and dock).
4. In **AMD Software: Adrenalin Edition**, enable **Radeon Super Resolution (RSR)** or **FSR** for global upscaling:
   - Navigate to Gaming > Global Graphics.
   - Enable Radeon Super Resolution.
   - Set in-game resolution to 1080p; RSR upscales to 4K output.
5. For per-game tuning, use AMD FSR 3 Frame Generation in supported titles to boost docked framerates.

### MSI Claw 8 AI+ (Thunderbolt 4)

The MSI Claw 8 AI+ is unique among handhelds for its **dual Thunderbolt 4 ports**, which provide 40Gbps bandwidth each [^57^][^63^]. This enables:

- **eGPU support**: Connect an external GPU enclosure (e.g., Aoostar AG02 + RTX 5070) for genuine 4K 60 FPS AAA gaming [^63^].
- **Dual 4K displays**: Via a Thunderbolt 4 dock like the Razer TB4 Dock Chroma.
- **Higher-bandput docks**: Full utilization of USB4/Thunderbolt for maximum display output.

For standard docked gaming without eGPU, configure identically to Windows handhelds above. The TB4 advantage only matters if you are using TB4-specific docks or eGPU enclosures.

---

## Step 4: Resolution Scaling Strategy

The single most important decision for docked handheld gaming is your rendering resolution. The TV displays at 4K, but the game almost certainly should not render at 4K.

| Strategy | Render Resolution | Output Resolution | Method | Best For |
|---|---|---|---|---|
| **Native 4K** | 3840×2160 | 3840×2160 | None | Indie games, 2D titles, emulation | 
| **Quality FSR** | 2560×1440 | 3840×2160 | FSR Quality | Good balance for most AAA games |
| **Balanced FSR** | 2259×1270 | 3840×2160 | FSR Balanced | Best FPS/image quality compromise |
| **Performance FSR** | 1920×1080 | 3840×2160 | FSR Performance | Maximum FPS on Steam Deck |
| **Ultra Performance** | 1280×720 | 3840×2160 | FSR Ultra Performance | Only when 30 FPS minimum is essential |

**Recommended per-device docked settings:**

| Device | Internal Render | FSR Setting | Target FPS | Notes |
|---|---|---|---|---|
| Steam Deck OLED | 1080p or 720p | Balanced/Performance | 30-60 | 15W TDP; prioritize stable 30 over stuttery 60 [^98^] |
| ROG Xbox Ally X | 1440p or 1080p | Quality/Balanced | 60 | 30W Turbo; best docked performance |
| Legion Go 2 | 1440p or 1080p | Quality/Balanced | 60 | Identical APU to ROG Ally X |
| Legion Go S | 1080p | Balanced/Performance | 30-60 | Entry APU; stick to 1080p render |
| MSI Claw 8 AI+ | 1080p | Balanced | 30-60 | TB4 + eGPU for true 4K if needed [^63^] |

**Per-game docked benchmarks** (Steam Deck OLED via FSR upscaling to 4K) [^91^]:

| Game | Internal Render | FSR | Output | FPS | Quality |
|---|---|---|---|---|---|
| Baldur's Gate 3 | 1080p | FSR 2.0 Quality | 4K | 30-35 | Excellent |
| Cyberpunk 2077 | 1080p | FSR 3 Frame Gen | 4K | 30 or 60 (with FG) | Good, some artifacting |
| Elden Ring | 720p-1080p | Medium settings | 4K | 30 locked | Good |
| HELLDIVERS 2 | 720p | Medium | 4K | 30-45 | Acceptable |

---

## Step 5: Controller Pairing

When docked, the handheld's integrated controls are inaccessible. You need an external controller.

### Bluetooth Pairing (Steam Deck)

1. In Gaming Mode, open **Settings** > **Bluetooth**.
2. Put your controller in pairing mode:
   - **Xbox Wireless Controller**: Hold Sync button until light flashes.
   - **DualSense / DualShock 4**: Hold Share + PS button until lightbar pulses.
   - **8BitDo controllers**: Hold the pairing combination (varies by model).
3. Select the controller from the Steam Deck's Bluetooth menu.
4. Steam automatically configures button mappings for Xbox-style layouts.

### USB Connection (Any Handheld)

Plugging a controller directly into a USB-A port on the dock provides the lowest latency connection. For competitive docked play, wired is the way to go. Latency difference:

- **Wired USB**: ~2-4ms input lag.
- **Bluetooth (Xbox controller)**: ~8-15ms input lag.
- **2.4GHz wireless (dongle)**: ~4-8ms input lag.

### Steam Input Configuration

1. With the controller connected, open **Steam** > **Settings** > **Controller**.
2. Enable **Xbox Configuration Support** and/or **PlayStation Configuration Support** as needed.
3. For non-standard controllers, apply community layouts from Steam Input.
4. Per-game button remapping is available via the Steam overlay (Steam button + ..." on most controllers).

---

## Step 6: Audio Output Configuration

Docked handhelds can output audio through three paths:

| Method | Setup | Notes |
|---|---|---|
| **HDMI audio to TV** | Automatic — audio follows video over HDMI | Default; use TV speakers or ARC/eARC to soundbar |
| **Bluetooth headphones** | Pair in OS Bluetooth settings | Low latency codecs (aptX LL, LC3) minimize lag |
| **3.5mm jack on dock** | Plug headphones into dock's audio port | Analog; zero latency; only if dock has audio output |

For TV audio, ensure your TV's audio mode is set to **PCM Stereo** or **Auto** rather than bitstream formats that may cause audio delay. If using a soundbar via HDMI ARC, verify the audio sync offset in your TV's sound settings — a 20-40ms delay is common and correctable.

---

## Step 7: Heat Management When Docked

Docking a handheld eliminates the natural hand-held cooling effect. The device sits stationary in a cradle, often with reduced airflow compared to freehand play. This matters for sustained performance.

| Handheld | Docked TDP | Thermal Concern | Mitigation |
|---|---|---|---|
| Steam Deck OLED | 15W max | Low | Built-in fan sufficient; no special measures needed |
| ROG Xbox Ally X | 35W Turbo | Moderate | Use 100W PD; ensure dock does not block vents |
| Legion Go 2 | 35W sustained | Moderate | Detachable controllers improve airflow; avoid enclosed spaces |
| MSI Claw 8 AI+ | 30W | Low | Coolest surface temps of any handheld; dual fans [^63^] |
| **All devices** | Any | Dock blocking vents | Choose docks with open back designs; avoid tight-fitting cradles |

The JSAUX HB0705 RGB Cooling dock includes magnetic fans that actively cool the handheld's backplate, reducing temperatures by 3-5°C during extended docked sessions [^69^]. For the Steam Deck at 15W, this is overkill. For a Legion Go 2 running 35W Turbo Mode docked for three hours, it prevents thermal throttling that would otherwise reduce performance by 10-15%.

**Heat management checklist:**

1. Ensure the dock's cradle does not cover the handheld's intake vents (usually on the back) or exhaust vents (usually on the top).
2. Do not place the dock inside a closed cabinet. Open air circulation is essential.
3. Monitor temperatures via the OS overlay (Steam Deck: ..." > Performance; Windows: Handheld Companion overlay).
4. If the APU exceeds 85°C sustained, reduce TDP by 3-5W or add active cooling.

---

## Troubleshooting

| Issue | Cause | Fix |
|---|---|---|
| **No signal on TV** | Wrong input selected / cable issue | Verify TV input matches HDMI port; try different cable; ensure dock has power |
| **4K@120Hz not available** | HDMI 2.0 dock or cable | Upgrade to HDMI 2.1 dock (BenQ GR10, JSAUX HB0705) + Ultra High Speed cable |
| **Image stutters docked** | TDP insufficient / thermal throttling | Ensure 100W PD for Turbo Mode; check temperatures; improve ventilation |
| **Colors look washed out** | Limited RGB range mismatch | Set handheld to Full RGB (0-255); set TV to PC/Game mode |
| **Audio lag behind video** | TV processing delay | Enable Game Mode on TV; disable audio processing; use TV's AV sync adjustment |
| **Controller not recognized** | Bluetooth pairing lost / wrong mode | Re-pair; for Xbox controllers, ensure firmware is updated via Xbox Accessories app |
| **Performance worse than handheld** | Rendering at native 4K | Lower in-game resolution to 1080p; enable FSR; let display upscale |

---

## Expected Results

After completing this guide, you will have:

- Your handheld connected to a 4K TV through an appropriately specced dock, with HDMI 2.0 or 2.1 depending on your refresh rate needs.
- TV configured in Game Mode with all latency-adding image processing disabled.
- Handheld rendering games at optimal internal resolution (1080p-1440p) with FSR upscaling to 4K output.
- Controller paired via Bluetooth or USB with confirmed low-latency input.
- Audio routed correctly through HDMI to TV speakers, soundbar, or headphones.
- Thermal management plan preventing throttling during multi-hour docked sessions.
- Realistic expectations: the Steam Deck delivers roughly PlayStation 4-quality docked performance at 1080p, while the ROG Ally X and Legion Go 2 approach PlayStation 4 Pro levels with proper FSR configuration.

Docked handheld gaming is not a replacement for a dedicated gaming PC or console. It is a versatility multiplier — the same device that fits in a backpack during the day becomes a living-room console at night, with a single cable connection and thirty seconds of setup.
