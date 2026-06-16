# Setting Up Remote Play: How to Stream Your PS5 or PC to Your Handheld

Remote play is the most underappreciated capability of modern handheld gaming PCs. Your ROG Xbox Ally X or Steam Deck OLED packs enough raw power to run AAA games natively at `30-60 FPS`, but there are scenarios where streaming from a more powerful host makes far more sense: playing graphically demanding titles that push the handheld's APU to its wattage limits, accessing your full game library without managing storage space, or simply preserving battery life by offloading rendering to a desktop PC plugged into the wall [^195^][^222^]. When your handheld acts only as a display and input device, it can throttle its own APU to `5W` and stretch battery life to `6-8 hours` while the host PC does the heavy lifting [^222^].

The remote play landscape in 2026 has four viable options, each with distinct latency characteristics, image quality, setup complexity, and ecosystem lock-in. This guide covers all four: Moonlight paired with Sunshine for local PC streaming, Steam Remote Play for Steam library access, Chiaki-ng for PS5 streaming, and Xbox Remote Play for Game Pass and Xbox titles. By the end, you will know which solution fits your use case and exactly how to configure it for minimum latency and maximum visual fidelity.

## What You Need

### Universal Requirements

- A handheld gaming PC (Steam Deck OLED, ROG Xbox Ally X, Legion Go 2, MSI Claw 8 AI+, or similar)
- A `5 GHz` Wi-Fi 6 or Wi-Fi 6E network (Wi-Fi 5 works but adds `5-15 ms` of latency)
- Your host device (gaming PC, PS5, or Xbox Series X/S) connected to the same local network via **Ethernet** (strongly recommended)
- A router that supports `5 GHz` band with adequate range to your gaming location

### Host PC Requirements (for Moonlight/Steam Remote Play)

- Windows 10/11 PC with a dedicated GPU (NVIDIA GeForce GTX 600+, AMD RX 5000+, or Intel Arc)
- Wired Ethernet connection to your router
- The latest GPU drivers from NVIDIA, AMD, or Intel

### Console Requirements

- **PS5:** Firmware updated, Remote Play enabled in system settings
- **Xbox Series X/S:** Game Pass Ultimate subscription for cloud streaming, or local console streaming enabled

### Network Bandwidth Requirements

| Stream Quality | Resolution | Bitrate | Minimum Bandwidth | Recommended Bandwidth |
|---|---|---|---|---|
| **Low (mobile/away from home)** | `720p` @ `60 FPS` | `10 Mbps` | `15 Mbps` upload (host) | `25 Mbps` upload |
| **Standard (local Wi-Fi)** | `1080p` @ `60 FPS` | `20 Mbps` | `30 Mbps` upload (host) | `50 Mbps` upload |
| **High (local Wi-Fi, good router)** | `1440p` @ `60 FPS` | `40 Mbps` | `50 Mbps` upload (host) | `100 Mbps` upload |
| **Ultra (local, ideal conditions)** | `4K` @ `60 FPS` | `80-150 Mbps` | `150 Mbps` upload (host) | `1 Gbps` LAN |

These bandwidth figures refer to your **local network throughput**, not your internet speed. Local streaming does not use your internet connection at all, provided both devices are on the same LAN [^216^][^220^].

## Option Comparison: Choose Your Streaming Solution

| Feature | Moonlight + Sunshine | Steam Remote Play | Chiaki-ng (PS5) | Xbox Cloud Gaming |
|---|---|---|---|---|
| **Latency** | Very Low (`5-15 ms`) | Low (`15-30 ms`) | Low (`15-25 ms`) | High (`50-120 ms`) |
| **Image quality** | Excellent (up to `4K HDR`) | Good (`1080p` max) | Good (`1080p`) | Good (depends on server) |
| **Setup difficulty** | Moderate | Easy | Moderate | Easy |
| **Host GPU support** | AMD, NVIDIA, Intel | NVIDIA best; AMD/Intel OK | N/A (console) | N/A (cloud) |
| **Local network required?** | Yes (optimal) | No (works over internet) | Yes | No (internet only) |
| **Platform support** | Steam Deck, Windows, Linux, Android | Steam Deck, Windows, Linux, mobile | Steam Deck (Linux) | Browser-based, any device |
| **HDR support** | Yes | Limited | No | Limited |
| **Best use case** | Local PC streaming | Steam library anywhere | PS5 exclusives | Game Pass cloud games |

Moonlight paired with Sunshine is the gold standard for local PC streaming. It delivers the lowest latency, the highest image quality, and the most customization of any solution [^195^][^216^]. Steam Remote Play is the easiest to set up but produces higher latency and lower visual fidelity. Chiaki-ng is the only practical option for PS5 streaming to a handheld. Xbox Cloud Gaming requires no setup but introduces internet-dependent latency that makes it unsuitable for fast-paced games [^196^][^201^].

## Option 1: Moonlight + Sunshine (Recommended for PC Streaming)

Moonlight is an open-source game streaming client derived from NVIDIA's GameStream protocol. Sunshine is the open-source host server that replaced NVIDIA's proprietary GameStream server, which NVIDIA discontinued. Together they form a fully open-source, cross-platform streaming stack that outperforms every commercial alternative for local network gaming [^195^][^220^].

### Why Moonlight/Sunshine Over Steam Remote Play

Independent testing and community benchmarks consistently show Moonlight/Sunshine delivering lower latency, better image quality at equivalent bitrates, more stable connections, and broader codec support including HEVC (H.265) and AV1 [^195^][^221^]. Steam Remote Play is convenient for its zero-configuration setup and internet streaming capability, but its encoder produces more compression artifacts and its latency is `10-20 ms` higher than Moonlight under identical network conditions [^221^].

### Step 1: Install Sunshine on Your Host PC

1. On your gaming PC, download the latest Sunshine release from GitHub (`LizardByte/Sunshine`).
2. Run the installer. Sunshine installs as a Windows service that starts automatically.
3. Open the Sunshine web interface by navigating to `https://localhost:47990` in your browser.
4. Create a username and password on first launch.
5. Go to the **Configuration** tab and verify your encoder settings:
   - **Encoder:** Select your GPU (NVIDIA NVENC, AMD AMF, or Intel QuickSync)
   - **Resolution:** Match your handheld's display (`1280x800` for Steam Deck, `1920x1080` for ROG Ally X)
   - **FPS:** `60` or `120` if your handheld supports high refresh
   - **Bitrate:** Start with `20 Mbps` for `1080p`, adjust based on network quality

### Step 2: Install Moonlight on Your Handheld

**Steam Deck:**
1. Switch to Desktop Mode.
2. Open the **Discover** software store.
3. Search for **"Moonlight"** and install the Flatpak version.
4. Return to Gaming Mode.

**Windows Handhelds (ROG Ally X, Legion Go 2, MSI Claw):**
1. Download Moonlight from the official website or Microsoft Store.
2. Install and launch.

### Step 3: Pair the Devices

1. Launch **Moonlight** on your handheld.
2. It will scan your local network and detect the Sunshine host automatically.
3. Click the detected PC. Moonlight will display a **PIN**.
4. On your host PC, open the Sunshine web interface (`https://localhost:47990`), go to the **PIN** tab, and enter the PIN from Moonlight.
5. The devices are now paired. Your PC will appear in Moonlight's device list permanently.

### Step 4: Add Games to Sunshine

In the Sunshine web interface, navigate to the **Applications** tab. Here you define which games and apps Moonlight can launch. The default entry is "Desktop," which streams your entire Windows desktop. Add individual games by clicking **Add New** and filling in:

- **Name:** The game's display name
- **Command:** The full path to the game's executable
- **Image:** Optional box art (Moonlight displays this in the client)

Save each entry. These will appear as selectable tiles in Moonlight on your handheld.

### Step 5: Latency Optimization

To achieve the lowest possible latency, apply these settings in the Sunshine web interface [^216^][^222^]:

| Setting | Recommended Value | Notes |
|---|---|---|
| **Video codec** | `H.264` (compatibility) or `HEVC/H.265` (quality/efficiency) | HEVC reduces bandwidth by `~40%` at equivalent quality; requires decode support on handheld |
| **Bitrate** | `20-40 Mbps` for `1080p`; `40-80 Mbps` for `1440p` | Higher is better quality but more latency; start at `20 Mbps` and increase |
| **Frame pacing** | Enabled | Reduces micro-stutter |
| **V-sync** | Disabled on host | Adds `1-2` frames of latency; leave off for streaming |
| **Audio buffer** | `Min` | Reduces audio latency at cost of occasional crackles |

Additional network optimizations:
- **Use Ethernet on the host PC.** Wi-Fi on the host adds `5-20 ms` of unpredictable latency.
- **Use `5 GHz` Wi-Fi on the handheld.** The `2.4 GHz` band introduces severe interference and packet loss.
- **Position your router** within line-of-sight of your gaming location if possible.
- **Enable QoS** on your router and prioritize the host PC's IP address.

## Option 2: Steam Remote Play (Easiest Setup)

Steam Remote Play is built into the Steam client and requires no additional software installation. It works both locally and over the internet, making it the best choice for streaming your Steam library when you are away from home [^193^].

### Setup

1. Ensure both your host PC and handheld are logged into the **same Steam account**.
2. On the host PC, open Steam > Settings > Remote Play > Enable Remote Play.
3. On your handheld (Steam Deck or Steam client), navigate to your library.
4. Games installed on your host PC will appear with a **"Stream"** button instead of **"Play."**
5. Click **Stream** and the game launches remotely.

### Optimization

- In Steam Link settings on the handheld, set **"Balanced"** or **"Fast"** streaming quality. "Beautiful" adds latency for marginal visual improvement.
- Enable **"Hardware encoding"** on the host PC in Steam > Remote Play > Advanced.
- Disable **"Change desktop resolution to match streaming client"** to avoid resolution switching delays.
- For `720p` streaming to the Steam Deck's `800p` display, set the client resolution to `1280x720` in the Steam Link advanced settings.

### Limitations

Steam Remote Play only works with games launched through Steam. If you want to stream an Epic Games Store title, a console emulator, or a desktop application, you need Moonlight/Sunshine instead.

## Option 3: Chiaki-ng for PS5 Streaming

Chiaki-ng (formerly chiaki4deck) is the community-maintained open-source client for streaming PlayStation 5 games to a handheld. It uses Sony's Remote Play protocol and delivers lower latency than Sony's official PS Remote Play application on PC [^373^][^376^][^384^].

### Step 1: Enable Remote Play on Your PS5

1. On your PS5, go to **Settings > System > Remote Play > Enable Remote Play**.
2. Go to **Settings > System > Power Saving > Features Available in Rest Mode** and enable **"Stay Connected to the Internet"** and **"Enable Turning on PS5 from Network."**

### Step 2: Install Chiaki-ng on Steam Deck

1. Switch to **Desktop Mode**.
2. Open the **Discover** store and search for **"chiaki-ng"**.
3. Install the application.
4. For easy access from Gaming Mode, right-click Chiaki-ng in the applications menu and select **"Add to Steam"**.

For Windows handhelds, download chiaki-ng from its GitHub releases page and install the Windows build.

### Step 3: Register Your PS5

1. Launch **Chiaki-ng**.
2. It should auto-discover your PS5 on the local network. If not, enter your PS5's IP address manually (found in PS5 Settings > Network > Connection Status).
3. Click **Register**. Chiaki-ng will prompt for a registration PIN.
4. On your PS5, go to **Settings > System > Remote Play > Link Device** to display the PIN.
5. Enter the PIN in Chiaki-ng and click **Register**.
6. Retrieve your **PSN Account ID** using the built-in lookup tool in chiaki-ng (enter your PSN username; the tool queries a public API).
7. Enter the Account ID and complete registration.

### Step 4: Stream and Play

Your PS5 will appear in Chiaki-ng's main window. Click it to connect. The PS5 will wake from rest mode if configured, and you will see your PS5 home screen on the handheld. All controller inputs are forwarded over the network with approximately `15-25 ms` of added latency on a local `5 GHz` network.

### Performance Notes

- PS5 streaming is capped at `1080p` and `60 FPS` regardless of the host game's output resolution.
- Haptic feedback and adaptive triggers from the DualSense are not transmitted to the handheld's controls; standard rumble works.
- Both devices must be on the same network for initial pairing; after that, internet streaming works with manual IP configuration and port forwarding.

## Option 4: Xbox Remote Play & Cloud Gaming

Microsoft offers two distinct streaming paths for Xbox: local console streaming (from your own Xbox Series X/S) and cloud gaming (from Microsoft's Azure servers). Both work through a browser interface, making them universally compatible but introducing higher latency than local PC solutions [^196^][^201^].

### Xbox Cloud Gaming

1. On any handheld, open a browser (Chrome or Edge) and navigate to **xbox.com/play**.
2. Log in with your Xbox Game Pass Ultimate subscription.
3. Select a game and click Play. The game streams from Microsoft's cloud servers.
4. On Windows handhelds, you can install the site as an Edge PWA app for a native-like experience.

Microsoft rolled out a new web UI redesign in early 2026, accessible via a Preview Features toggle in your Xbox profile settings [^201^]. The new interface is cleaner and more responsive on handheld screens.

### Xbox Local Console Streaming

Local streaming from your own Xbox Series X/S requires the Xbox app (Windows) or a browser-based connection. Latency is lower than cloud gaming (`25-40 ms` vs. `50-120 ms`) but still higher than Moonlight/Sunshine due to the Xbox's encoder and network stack.

## Real-World Latency Numbers

Latency is the defining metric for remote play usability. Below are measured end-to-end latency figures (input on handheld to pixel on screen) from community testing under ideal conditions: host PC on Ethernet, handheld on `5 GHz` Wi-Fi 6, same room as the router, `1080p` @ `60 FPS` stream [^195^][^216^][^221^].

| Streaming Solution | Local Network Latency | Internet Streaming Latency | Usable for Competitive? |
|---|---|---|---|
| **Moonlight + Sunshine** | `5-15 ms` | `20-50 ms` (depends on connection) | Yes (local) |
| **Steam Remote Play** | `15-30 ms` | `40-80 ms` | No (local borderline) |
| **Chiaki-ng (PS5)** | `15-25 ms` | `40-70 ms` | No |
| **Xbox Local Streaming** | `25-40 ms` | N/A | No |
| **Xbox Cloud Gaming** | N/A (cloud) | `50-120 ms` | No |

For context, `15 ms` is approximately one frame at `60 FPS`. Moonlight/Sunshine at `5-15 ms` adds effectively `0-1` frames of delay, making it indistinguishable from native play for most users. At `50+ ms` (cloud gaming), the delay is `3+` frames, which is perceptible and problematic for rhythm games, fighting games, and competitive shooters.

## Ideal Use Cases for Each Solution

### Moonlight + Sunshine is best when:
- You have a powerful gaming PC on your local network
- You want the lowest possible latency and best image quality
- You want to stream non-Steam games, emulators, or your desktop
- You have a `5 GHz` Wi-Fi 6 network and Ethernet on the host

### Steam Remote Play is best when:
- You want the simplest possible setup (zero configuration)
- You need to stream over the internet while traveling
- Your entire library is on Steam
- You can tolerate slightly higher latency for convenience

### Chiaki-ng is best when:
- You want to play PS5 exclusives (Spider-Man 2, Demon's Souls, Returnal) on your handheld
- You have a PS5 on the same local network
- You do not mind `15-25 ms` of additional latency

### Xbox Cloud Gaming is best when:
- You want instant access to a large library without downloading
- You have a stable high-speed internet connection (`50+ Mbps`)
- You are playing slower-paced, single-player games where latency is less critical
- You already have Game Pass Ultimate

## Battery Optimization During Streaming

The most overlooked advantage of remote play is the dramatic battery savings on your handheld. When streaming, the handheld's APU does minimal work: it decodes a video stream and forwards controller inputs. You can force the APU into a low-power state without affecting the stream quality [^222^].

### Steam Deck Battery During Moonlight Streaming

| APU Power Setting | Estimated Battery Life (50 Wh) | Notes |
|---|---|---|
| Default (`15W` TDP) | `3-4 hours` | Unnecessary power consumption |
| `10W` TDP | `4-5 hours` | Still more than needed |
| `5W` TDP | `6-8 hours` | Optimal; smooth decoding, minimal drain |
| `3W` TDP | `7-9 hours` | May stutter on HEVC decode; test first |

Set TDP to `5W` on the Steam Deck before starting a Moonlight session. The video decode hardware operates independently of the CPU/GPU power budget and can handle `1080p H.264` or `HEVC` streams at `5W` without frame drops [^222^]. This is the single most effective battery optimization for streaming use.

On Windows handhelds, use Handheld Companion or the manufacturer's utility to set a `5-8W` TDP profile specifically for streaming applications.

## Troubleshooting

### Moonlight shows black screen or fails to connect

Verify Sunshine is running on the host PC (check the system tray icon). Ensure both devices are on the same network. Try manually entering the host PC's IP address in Moonlight instead of relying on auto-discovery. Check Windows Firewall settings and allow Sunshine through both private and public networks.

### Stuttering or frame drops during stream

The most common cause is Wi-Fi interference. Switch your router to a less congested `5 GHz` channel (`36`, `40`, `44`, or `48` are typically clearest). Reduce bitrate in Sunshine by `5-10 Mbps`. If using HEVC, try switching to H.264 as a test; some devices decode H.264 more reliably even if less efficient.

### Chiaki-ng cannot find the PS5

Ensure both devices are on the same subnet. Some routers isolate wireless clients from wired clients (AP isolation); disable this feature. Try entering the PS5's IP address manually. If the PS5 is in rest mode, verify "Enable Turning on PS5 from Network" is enabled in power settings.

### Steam Remote Play shows "Busy" or "Computer is unavailable"

The host PC must be logged into Steam and not in sleep mode. Disable sleep on the host: Control Panel > Power Options > Change when the computer sleeps > Never. If streaming over the internet, ensure both devices have been online recently; Steam needs to establish a relay connection.

### Audio desync or crackling

In Sunshine settings, increase the audio buffer size slightly. If using Bluetooth audio on the handheld, the additional Bluetooth latency (typically `30-50 ms`) can cause lip-sync issues. Use wired headphones or the handheld's built-in speakers for the lowest audio latency.

## Final Thoughts

Remote play transforms a handheld from a self-contained gaming device into a window to your entire gaming ecosystem. Moonlight paired with Sunshine is the technical standout: open-source, actively developed, and capable of sub-`15 ms` latency with `1080p` quality that rivals native play [^195^][^216^]. For PlayStation exclusives, Chiaki-ng delivers a console-to-handheld experience that the official PS Portal cannot match because it runs on any handheld, not just Sony's single-purpose device [^373^]. The battery savings are the hidden superpower: at `5W` TDP, your Steam Deck OLED streams for `6-8 hours` instead of the `2-3 hours` you would get running the same game natively [^222^]. Set up Moonlight/Sunshine on your host PC, configure Sunshine for HEVC at `20-40 Mbps`, lock your handheld to `5-8W`, and you have a remote gaming setup that outperforms cloud gaming services in every metric that matters: latency, image quality, and cost.
