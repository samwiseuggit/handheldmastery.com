# How to Use "Lossless Scaling": Doubling Your FPS Using AI Frame Generation

Frame generation used to be a luxury reserved for desktop GPUs with dedicated AI accelerators. NVIDIA's DLSS 3 Frame Generation requires RTX 40-series hardware. AMD's FSR 3 Frame Generation requires game-specific integration. But what if you could apply frame generation to any game on any handheld, regardless of the GPU or whether the developer implemented support? Lossless Scaling Frame Generation (LSFG) does exactly that. It is a $6-7 tool on Steam that intercepts the final rendered output and interpolates synthetic frames between the real ones, effectively doubling or tripling the perceived framerate [^202^][^372^]. For handhelds where every watt and every frame counts, LSFG can be the difference between a stuttery 30 FPS experience and a fluid 60 FPS one.

---

## What Is LSFG and How Does It Work?

Lossless Scaling Frame Generation operates at the display level rather than the engine level. Unlike DLSS 3 or FSR 3, which require the game engine to provide motion vectors and depth buffers, LSFG works purely from the final 2D image stream. It analyzes consecutive frames, detects motion, and generates intermediate frames using AI-driven interpolation [^202^].

| Mode | Multiplier | Input FPS | Output FPS | Use Case |
|---|---|---|---|---|
| **2x** | Double | 30 FPS | 60 FPS | Standard handheld gaming; best balance |
| **3x** | Triple | 20 FPS | 60 FPS | Heavy AAA titles that struggle to hit 30 |
| **4x** | Quadruple | 15 FPS | 60 FPS | Aggressive; high artifact risk on handhelds |

Because LSFG operates at the final output stage, it is agnostic to the game, the engine, the API (DirectX, Vulkan, OpenGL), and the GPU vendor. An RDNA 2 Steam Deck benefits as much as an RDNA 3.5 ROG Ally X or an Intel Arc-powered MSI Claw [^202^][^372^].

The tool also includes upscaling options — FSR 1.0, NIS (NVIDIA Image Scaling), and nearest-neighbor scaling — that can be combined with frame generation for additional performance headroom [^372^].

---

## Prerequisites

| Requirement | Notes |
|---|---|
| **Steam Deck or Windows handheld** | LSFG works on any GPU architecture |
| **Lossless Scaling purchased on Steam** | ~$6-7; must be installed on internal storage for Decky plugin |
| **Decky Loader installed** | For Steam Deck method (see below) |
| **Game running in windowed or borderless mode** | LSFG captures the output buffer; some games need specific display modes |
| **Target game at stable framerate** | LSFG works best when the base framerate is consistent, not fluctuating wildly |

**Important**: LSFG adds latency. It is a frame interpolation technique — the generated frames are always one frame behind the real ones. This makes it ideal for single-player RPGs, strategy games, and exploration titles. It is not suitable for competitive multiplayer where input lag determines outcomes [^202^][^372^].

---

## Performance Gains: What to Expect

The effectiveness of LSFG varies by title, base framerate stability, and the complexity of on-screen motion. Here are community-tested results on Steam Deck hardware:

| Game | Native FPS | With LSFG 2x | Perceived FPS | Quality Notes |
|---|---|---|---|---|
| Ghost of Tsushima | ~37 FPS | ~60 FPS | 60 FPS | Smooth with minor ghosting on fast camera pans [^382^] |
| Clear Obscure | ~30 FPS | 60+ FPS | 60 FPS | Flow Scale 0.65 recommended for clean output [^382^] |
| Cyberpunk 2077 | Variable | Improved | 45-60 FPS | Inconsistent base FPS causes artifacting; cap framerate first [^382^] |
| General 30 FPS titles | 30 FPS | 60 FPS | 60 FPS | Excellent results when base framerate is rock-solid |
| General 60 FPS titles | 60 FPS | 120 FPS | 120 FPS | Requires 120Hz display (ROG Ally 120Hz mode) |

The pattern is clear: LSFG shines when the game maintains a stable base framerate. A game fluctuating between 25-45 FPS will produce uneven results because the interpolation algorithm cannot predict timing for irregular frame delivery. Cap your game's framerate to a stable target (30 or 60) before enabling LSFG for best results.

---

## Method A: Steam Deck via Decky Loader (Recommended)

The Decky LSFG-VK plugin integrates Lossless Scaling directly into SteamOS Gaming Mode, allowing frame generation without switching to Desktop Mode [^372^][^378^][^379^].

### Step 1: Install Lossless Scaling

1. Purchase **Lossless Scaling** on Steam (search for it in the Steam Store).
2. Install it to the **internal SSD**, not a microSD card. The Decky plugin needs fast access to the binary.

### Step 2: Install the Decky LSFG-VK Plugin

1. If Decky Loader is not already installed, switch to Desktop Mode, visit decky.xyz, and run the installer [^188^].
2. Return to Gaming Mode.
3. Press the **... (Quick Access Menu)** button.
4. Navigate to the **Decky** plug icon.
5. Open the **Plugin Store** (shopping bag icon).
6. Search for **"Decky LSFG-VK"** and install it.
7. Within the plugin settings, click **"Download LSFG-VK"** to fetch the Vulkan backend [^372^][^379^].

### Step 3: Configure Per-Game Settings

1. In Gaming Mode, highlight the game you want to enhance.
2. Press the Options button > **Properties**.
3. Navigate to the **Decky LSFG-VK** tab (or copy the launch option from the plugin's settings page).
4. Paste the provided launch command into the game's **Launch Options** field.
5. Set the **frame generation multiplier**:
   - **2x**: Recommended for most games (30 → 60 FPS).
   - **3x**: For games that cannot hold 30 FPS base (20 → 60 FPS).
6. Adjust **Flow Scale** if available:
   - Default (1.0): Standard motion interpolation.
   - Lower values (0.5-0.7): Reduce motion blur/ghosting at the cost of some smoothness.
   - Higher values: More interpolated motion, more potential artifacts [^382^].

### Step 4: Launch and Verify

1. Start the game from Gaming Mode.
2. The LSFG-VK overlay appears briefly in the corner, confirming activation.
3. Use the Quick Access Menu (Decky tab) to toggle frame generation on/off in real time for comparison.
4. Verify perceived framerate by feel or enable Steam's FPS counter (Steam > Settings > In-Game > In-Game FPS Counter).

---

## Method B: Windows Handhelds (Direct LSFG)

On Windows-based handhelds like the ROG Ally X, Legion Go 2, and MSI Claw, you run Lossless Scaling directly without a plugin wrapper.

### Step 1: Install and Configure

1. Purchase and install **Lossless Scaling** from Steam.
2. Launch Lossless Scaling before your game.
3. In the LSFG window, configure:
   - **Mode**: LSFG 2.0 or LSFG 1.1 (2.0 is newer, slightly lower latency).
   - **Multiplier**: 2x for most use cases.
   - **Rendering**: Select your game's window from the dropdown, or use Auto-detect.
   - **Scale**: If your game runs below native resolution, enable FSR or NIS upscaling here.

### Step 2: Launch Your Game

1. Start your game in **windowed** or **borderless windowed** mode.
2. Alt-tab back to Lossless Scaling and confirm it has captured the game window.
3. The tool automatically begins generating frames.
4. Press the hotkey (default F11) to toggle the LSFG overlay, showing input FPS and output FPS.

### Step 3: Fine-Tune Settings

| Setting | Recommended Value | Notes |
|---|---|---|
| **Frame Generation** | LSFG 2.0 | Lower latency than 1.1 |
| **Multiplier** | 2x | Best quality-to-latency ratio |
| **Upscaling** | FSR 1.0 Performance | Only if game runs below native res |
| **VSync** | Off in LSFG, cap FPS in game | Avoid double VSync for minimum latency |
| **Capture mode** | Auto | Fallback to BitBlt if Window fails |

---

## Input Lag Considerations

Frame generation inherently adds latency because each interpolated frame is synthesized from previously rendered frames. At 2x mode, the minimum added latency is one frame (8.3ms at 120Hz output, 16.7ms at 60Hz output). In practice, total added latency is typically 1.5-2.5 frames [^202^][^372^].

| Scenario | Base Latency | LSFG 2x Added Latency | Total (Estimated) |
|---|---|---|---|
| 30 FPS game → 60 FPS output | ~50ms (20ms render + 30ms display) | +25-40ms | ~75-90ms |
| 60 FPS game → 120 FPS output | ~25ms | +12-20ms | ~37-45ms |

**Mitigation strategies:**

1. **Use the highest stable base framerate**: A 60 FPS base with 2x LSFG to 120 FPS has less total latency than a 30 FPS base with 2x to 60 FPS, even though both deliver the same perceived smoothness.
2. **Enable low-latency modes**: In-game settings like NVIDIA Reflex or AMD Anti-Lag reduce the render queue depth, minimizing the pipeline delay before LSFG receives frames.
3. **Avoid 3x/4x modes on handhelds**: The latency penalty scales with the multiplier. 3x mode at 20 FPS base adds 2-3 frames of latency — noticeable in any game requiring reflexes.
4. **Combine with capped framerates**: Set the in-game cap slightly below your average sustained FPS to maintain a stable input cadence. For example, if a game fluctuates between 32-40 FPS, cap it at 30 FPS and use 2x LSFG for clean 60 FPS output.

---

## When NOT to Use Lossless Scaling

LSFG is a powerful tool with specific limitations. Do not use it in these scenarios:

1. **Competitive multiplayer games**: The added 1.5-2.5 frames of latency puts you at a measurable disadvantage in FPS multiplayer, fighting games, and rhythm games.
2. **Games with native frame generation**: Running LSFG on top of DLSS 3 or FSR 3 Frame Generation produces severe visual artifacts, double-counted frames, and unstable output. Use one or the other, never both [^202^].
3. **Games with highly variable framerates**: If your base FPS swings between 20 and 50, LSFG cannot produce consistent output. The interpolation algorithm needs stable input timing.
4. **2D pixel-art games at native framerate**: If you are already at 60 FPS locked, LSFG offers no visual benefit and adds unnecessary latency.
5. **Cutscene-heavy games with letterboxing**: LSFG can produce artifacts at the border between letterbox bars and active video content.

---

## Visual Quality and Artifacts

LSFG 2.0 is a significant improvement over the original implementation, but it is not flawless. The most common artifact is **ghosting** — a faint trail behind fast-moving objects caused by the interpolation algorithm carrying motion data across multiple frames. This is most visible in:

- Rapid camera rotations (first-person games)
- Fast UI element animations
- Particle effects with high velocity

The **Flow Scale** parameter controls the trade-off between smoothness and ghosting. Lower values reduce ghosting but can make motion appear slightly more stuttery. The optimal setting varies by game and personal preference. Community testing suggests **Flow Scale 0.65** works well for most titles on Steam Deck hardware [^382^].

---

## Troubleshooting

| Problem | Cause | Fix |
|---|---|---|
| **LSFG overlay not appearing** | Decky plugin not loaded | Restart Steam Deck; verify Decky and plugin are updated |
| **Black screen in game** | Capture mode incompatibility | Switch capture method in LSFG settings (Window → BitBlt) |
| **Severe artifacting/ghosting** | Flow Scale too high or base FPS unstable | Reduce Flow Scale; cap in-game framerate |
| **Game crashes on launch** | Launch option conflict | Remove other launch options; add LSFG command last |
| **No performance change** | Game already GPU-bound beyond display refresh | LSFG cannot exceed display max; check if you are already at 60/120 |
| **Audio desync** | Frame generation altering timing | Enable audio sync option in LSFG; cap base framerate |

---

## Expected Results

After completing this guide, you will have:

- Lossless Scaling configured on your handheld with optimal settings for your target games.
- Frame generation active in Gaming Mode (Steam Deck) or directly on Windows handhelds.
- A stable 2x multiplier delivering perceived 60 FPS from a 30 FPS base in compatible titles.
- Realistic expectations about latency trade-offs and artifact behavior.
- A workflow for evaluating new games: test native performance first, enable LSFG second, tune Flow Scale last.

The $7 cost of Lossless Scaling pays for itself in a single game that moves from "unplayable on handheld" to "smooth enough to finish." Combined with the Decky LSFG-VK plugin on Steam Deck, it is the most impactful performance upgrade available for zero hardware cost [^372^][^379^].
