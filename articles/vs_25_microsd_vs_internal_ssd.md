# microSD Card vs. Internal SSD: Which Is Better for Loading Speeds?

Storage is the first upgrade every handheld owner confronts. Modern AAA titles routinely exceed 100 GB — *Baldur's Gate 3* demands ~150 GB, *Cyberpunk 2077* with updates pushes past 90 GB, and even "smaller" games like *Elden Ring* sit at 60 GB. A 512 GB internal drive fills quickly, leaving you with two expansion paths: a microSD card (cheap, instant, zero risk) or an internal M.2 2230 SSD replacement (expensive, requires surgery, dramatically faster). The performance gap between these options is not trivial. In the most storage-intensive titles, an SSD can load levels nearly 70% faster than even the best microSD card. But speed isn't the only variable — cost per gigabyte, installation difficulty, and the reality of how different game types stress storage all factor into the decision. This comparison breaks down the technical differences with real-world loading data, then delivers a concrete recommendation for every type of player.

## The Technical Gap: 35× Theoretical, 20–70% Real-World

On paper, the speed differential is absurd. A PCIe Gen4 x4 M.2 2230 SSD like the Corsair MP600 Mini delivers sequential read speeds up to 7,000 MB/s [^13^][^48^]. A UHS-I microSD card — the only type the Steam Deck can fully utilize — tops out at 104 MB/s [^45^][^16^]. That's a 67× bandwidth gap in sequential throughput. UHS-II cards, supported by the ROG Ally X's microSD slot, raise the ceiling to 312 MB/s theoretical, with the Kingston Canvas React Plus achieving ~292 MB/s in testing [^25^][^33^]. Even then, we're looking at roughly 24× slower than a Gen4 SSD.

But game loading is not a sequential benchmark. It is a workload dominated by random 4K read IOPS — small, scattered file accesses as the engine pulls textures, shaders, audio, and level data from storage. Here, the gap narrows but remains substantial. A quality A2-rated microSD card guarantees 4,000 IOPS read and 2,000 IOPS write [^15^] — adequate for game loading but a fraction of the 200,000+ random read IOPS a PCIe 4.0 SSD can deliver. The A2 (Application Performance Class 2) rating was specifically designed to certify microSD cards for app and game loading, and it makes a measurable difference over non-A2 cards, but it cannot close the architectural gap against NVMe.

### Storage Speed Comparison

| Storage Type | Max Sequential Read | Random 4K Read (IOPS) | Real-World Game Loading | Price per GB (2026) |
|---|---|---|---|---|
| PCIe Gen4 2230 SSD (Corsair MP600 Mini) | ~7,000 MB/s [^13^] | ~200,000+ IOPS | Fastest | ~$0.11–0.13 [^13^][^48^] |
| PCIe Gen4 2230 SSD (Crucial P310) | ~7,100 MB/s [^81^] | ~180,000 IOPS | Fastest | ~$0.11–0.13 [^81^] |
| PCIe Gen3 2230 SSD (Samsung PM9B1) | ~3,480 MB/s [^59^] | ~100,000 IOPS | Very fast | ~$0.07–0.10 [^59^] |
| UHS-II microSD (Kingston Canvas React Plus) | ~292 MB/s [^33^] | ~4,500 IOPS (A2) | Moderate | ~$0.15/GB [^25^] |
| UHS-I microSD (Samsung PRO Ultimate) | ~193 MB/s [^85^] | ~4,000 IOPS (A2) | Moderate | ~$0.13/GB [^83^] |
| UHS-I microSD (SanDisk Extreme PRO) | ~191 MB/s [^17^] | ~4,000 IOPS (A2) | Moderate | ~$0.12/GB [^17^] |
| Budget UHS-I microSD (TeamGroup ULTRA A2) | ~167 MB/s [^29^] | ~3,800 IOPS (A2) | Acceptable | ~$0.08/GB [^29^] |

The critical detail most buyers miss: **the Steam Deck's microSD slot is UHS-I only** [^45^][^16^]. Spending premium money on a UHS-II card like the Kingston Canvas React Plus is wasted for Deck owners — the slot physically cannot exceed 104 MB/s. UHS-II cards are backward-compatible and will work, but they run at UHS-I speeds. Only ROG Ally/Ally X owners with UHS-II slots can extract the additional performance [^16^].

## Real-World Loading Time Tests

Synthetic benchmarks tell only part of the story. The following table synthesizes real-world loading measurements across multiple test sources, comparing internal SSD (PCIe 3.0, representative of Steam Deck OLED's slot) against UHS-I microSD cards [^51^][^65^][^66^][^17^].

### Loading Time Comparison: SSD vs. microSD

| Game | Internal SSD (PCIe 3.0) | microSD UHS-I (A2-rated) | microSD Penalty | Notes |
|---|---|---|---|---|
| **No Man's Sky** (cold boot to menu) | 56s | 95s | +69% slower [^51^] | Open-world asset streaming hammers microSD |
| **Cyberpunk 2077** (fast travel) | 12s | 19s | +58% slower [^51^] | City traversal stutters more on microSD |
| **Horizon Zero Dawn** (area transition) | ~60s | ~90s | +50% slower | Heavy texture streaming between biomes |
| **Days Gone** (load save) | 22.2s | 30–33s | +35–49% slower | Post-apocalyptic open world |
| **Shadow of the Tomb Raider** (level load) | 21.7s | 26–27s | +20–24% slower [^17^] | SanDisk Extreme PRO nearly matched SSD |
| **GTA V** (story mode load) | 27s | 33s | +22% slower | Older, well-optimized streaming |
| **Returnal** (cycle restart) | ~25s | ~30s | +20% slower | Roguelike structure = frequent loading |
| **Rollerdrome** (level load) | 4.75s | 5.4–5.6s | +14–18% slower | Small levels, minimal difference |
| **Aperture Desk Job** (level load) | ~10s | ~11s | +10% slower | Light Source engine title |
| **Hollow Knight** (area transition) | ~3s | ~4s | +33% slower | 2D games load fast regardless |

The pattern is clear: **open-world games with heavy asset streaming suffer the most on microSD**, with 50–70% longer load times in titles like *No Man's Sky* and *Horizon Zero Dawn* [^51^][^65^]. These games continuously stream textures, geometry, and audio data from storage as you traverse the world, and microSD's limited random IOPS creates visible hitching during fast travel and area transitions. One benchmark noted that *Cyberpunk 2077* experienced minimum FPS drops to 20 when loading from microSD versus 29 from SSD during benchmark scene transitions — a playable but perceptible stutter [^51^].

Linear and indie games show minimal differences. *Rollerdrome*, *Aperture Desk Job*, and *Hollow Knight* all load within seconds on either medium because their level sizes are small and their asset footprints modest [^51^]. For these titles, microSD is functionally indistinguishable from SSD once gameplay begins. In-game framerates are virtually identical between storage types — the difference appears only during level transitions and asset streaming events [^65^].

The SanDisk Extreme PRO deserves special mention. It is the only microSD card tested that consistently approaches — and occasionally beats — the Steam Deck's internal SSD in select loading tests. In *Shadow of the Tomb Raider*, it loaded in 15.6 seconds versus the SSD's 15.9 seconds [^17^]. This appears to be an outlier driven by particularly efficient random read patterns on that specific card and title, but it demonstrates that the best microSD cards are far from the "unusable" category some enthusiasts claim.

## Price Per GB: The MicroSD's Killer Advantage

NAND flash prices roughly doubled since mid-2025 due to AI datacenter demand, with shortages expected into 2027 [^79^]. This has impacted both SSDs and microSD cards, but the relative pricing structure remains intact.

### Cost Per GB Comparison (2026)

| Storage Type | Capacity | Typical Price | Price/GB | Value Rating |
|---|---|---|---|---|
| Budget 2230 SSD (Samsung PM9B1) | 512GB | $40–55 | $0.08–0.11 | Excellent [^59^] |
| Budget 2230 SSD (PM9B1) | 1TB | $80–100 | $0.08–0.10 | Excellent [^59^] |
| Mid-range 2230 SSD (Kingston NV3) | 1TB | $85–110 | $0.09–0.11 | Very Good [^79^] |
| Premium 2230 SSD (Corsair MP600 Mini) | 1TB | $110–130 | $0.11–0.13 | Good [^13^][^48^] |
| Premium 2230 SSD (WD SN770M) | 2TB | $220–265 | $0.11–0.13 | Good [^13^][^82^] |
| microSD Budget (TeamGroup ULTRA A2) | 1TB | ~$80–90 | $0.08–0.09 | Excellent [^29^][^31^] |
| microSD Budget (Samsung EVO Select) | 512GB | $35–45 | $0.07–0.09 | Excellent |
| microSD Budget (Evo Select) | 1TB | $70–90 | $0.07–0.09 | Excellent |
| microSD Premium (SanDisk Extreme PRO) | 512GB | $52 | $0.10 | Very Good [^17^] |
| microSD Premium (Lexar Silver Plus) | 1TB | $90–100 | $0.09–0.10 | Very Good [^63^][^35^] |
| microSD Premium (Samsung PRO Ultimate) | 512GB | $65 | $0.13 | Good [^83^][^85^] |

At the budget tier, microSD and 2230 SSDs achieve roughly comparable cost per gigabyte — approximately $0.07–0.11/GB. A 1TB microSD runs $70–100; a 1TB budget 2230 SSD lands at $85–110. The SSD costs marginally more but delivers dramatically better performance. Where the math shifts is at higher capacities: 2TB microSD cards remain rare and expensive, while 2TB 2230 SSDs like the Crucial P310 and TeamGroup MP44S offer the best capacity-per-dollar at $140–180 [^80^][^81^].

The Samsung PM9B1 deserves attention as a special case. Available through AliExpress at ~$38–55 for 512 GB, this OEM drive delivers ~3,480 MB/s reads and 2,950 MB/s writes at a price that undercuts most microSD cards [^59^]. The trade-off is warranty ambiguity and the need to purchase from marketplace sellers with 98%+ feedback. For technically confident buyers, it represents the best price-to-performance ratio in handheld storage [^59^][^62^].

## Installation Difficulty: Plug-and-Play vs. Surgery

The microSD card's greatest practical advantage is its zero-friction installation. Slide it into the slot, format through SteamOS or Windows, and begin installing games. No tools, no disassembly, no risk. For users uncomfortable opening electronics or concerned about warranty implications, this is the deciding factor.

Internal SSD replacement requires disassembly and carries genuine risk. The Steam Deck OLED's procedure involves removing eight T6 Torx screws, prying the back cover, disconnecting the battery, transferring an EMI shield to the new drive, and reinstalling SteamOS from a USB recovery image [^49^]. iFixit rates the procedure as moderate difficulty (7/10). The most commonly reported mistakes include: failing to track screw lengths (the OLED uses five different screw sizes), forgetting to enter Battery Storage Mode before disassembly, and cracking the microSD card if left inserted during opening [^49^].

### Installation Difficulty by Handheld

| Handheld | SSD Form Factor | Difficulty | Key Risks |
|---|---|---|---|
| Steam Deck (LCD) | M.2 2230 PCIe 3.0 | 7/10 | Screw tracking, EMI shield transfer, OS reinstall [^42^] |
| Steam Deck OLED | M.2 2230 PCIe 3.0 | 7/10 | T6 Torx screws, Battery Storage Mode, back cover clips [^49^] |
| ROG Ally X / Xbox Ally X | M.2 2280 PCIe 4.0 | 6–7/10 | Ribbon cable between back panel and motherboard [^40^][^41^] |
| Legion Go 2 | M.2 2230/2242 PCIe 4.0 | 7/10 | Similar to Steam Deck procedure |
| MSI Claw 8 AI+ | M.2 2230 PCIe 4.0 | 7/10 | Consult MSI service manual [^47^] |

For the ROG Ally X, the switch to M.2 2280 (standard laptop SSD size) is a significant upgrade — it enables cheaper, higher-capacity drives up to 4 TB, and the physical installation is slightly easier than 2230 because the drives are larger and easier to handle [^40^][^41^].

Cloning is an alternative to clean installation. Using an M.2 USB enclosure (~$10–15) and software like Macrium Reflect, you can clone your existing drive to the new SSD before swapping, preserving your setup, saves, and configuration [^46^]. This eliminates the OS reinstallation step but requires disabling BitLocker first to avoid encryption issues.

## The Hybrid Setup: The Smart Play

For most users, the optimal approach is not choosing one storage type — it's combining both strategically. A **hybrid setup** pairs an upgraded internal SSD for OS and frequently-played AAA titles with a large microSD for indie games, emulation libraries, and less demanding titles where load times don't matter.

### Recommended Hybrid Configurations

| Budget Tier | Internal SSD | microSD | Total Cost | Total Capacity | Best For |
|---|---|---|---|---|---|
| **Tight Budget** | Samsung PM9B1 512GB (~$45) | TeamGroup ULTRA A2 512GB (~$40) | ~$85 | 1TB | Maximum capacity per dollar [^59^][^29^] |
| **Balanced** | Kingston NV3 1TB (~$95) | Lexar Silver Plus 1TB (~$95) | ~$190 | 2TB | Good performance + large library [^79^][^63^] |
| **Premium** | Corsair MP600 Mini 2TB (~$220) | Samsung PRO Ultimate 1TB (~$130) | ~$350 | 3TB | AAA on fast SSD, everything else on quality microSD [^13^][^83^] |

The logic is straightforward. Install your "forever games" — *Elden Ring*, *Cyberpunk 2077*, *Baldur's Gate 3*, *Red Dead Redemption 2* — on the internal SSD where fast travel and area transitions benefit from NVMe speeds. Use the microSD for indie titles (*Hades*, *Celeste*, *Hollow Knight*), emulation ROMs, and games where you won't notice the loading difference. This approach gives you 80% of a full-SSD setup's practical benefit at roughly 50% of the cost [^15^].

## When to Choose Each Option

### Choose microSD expansion if:

- You prioritize simplicity and zero-risk installation
- Your game library consists primarily of indie titles, 2D games, and older AAA ports where load time differences are 10–20% at most
- You frequently swap games in and out and prefer the flexibility of hot-swappable storage
- Budget is your primary constraint — a 1TB microSD at $70–90 is the cheapest path to large storage
- You own an ROG Ally/Ally X with a UHS-II slot and can leverage cards like the Kingston Canvas React Plus (292 MB/s) [^33^]

### Choose internal SSD replacement if:

- You play open-world AAA titles with heavy asset streaming (*No Man's Sky*, *Horizon Zero Dawn*, *Starfield*, *Cyberpunk 2077*) where the 50–70% loading penalty on microSD directly impacts your experience [^51^][^65^]
- You notice texture pop-in, hitching during fast travel, or FPS drops during area transitions on your current microSD setup
- You're comfortable with moderate electronics disassembly or know someone who is
- You want the absolute fastest loading times and are willing to pay the premium for NVMe speeds
- You own a handheld with M.2 2280 support (ROG Ally X, Xbox Ally X), where SSD upgrades are cheaper and easier than 2230 [^40^]

## Final Verdict: The Data-Driven Recommendation

For the **average handheld owner**, start with a high-quality microSD card. The Samsung PRO Ultimate 512GB ($65, 200 MB/s, A2-rated, 10-year warranty) [^83^][^85^] or SanDisk Extreme PRO 512GB ($52, A2-rated, fastest loading in Steam Deck tests) [^17^] provides ample storage for a diverse library with loading times that are acceptable for all but the most storage-intensive titles. The plug-and-play convenience cannot be overstated — you will spend more time gaming and less time worrying about screwdrivers and OS recovery images.

For the **enthusiast or AAA-focused player**, an internal SSD upgrade is worth the cost and effort. The Corsair MP600 Mini (E27T) at ~$110–130 for 1TB offers Phison E27T controller performance with TLC NAND that won't slow down when full [^13^][^48^]. The Samsung PM9B1 at ~$40–55 for 512GB via AliExpress is the value champion for budget builders willing to navigate OEM marketplaces [^59^]. Pair either with a mid-tier microSD for overflow, and you have a two-tier storage system that optimizes performance where it matters and cost where it doesn't.

The microSD card is not "bad" storage. It is slow storage, and slow storage is perfectly fine for slow-loading games. The internal SSD is not "necessary" for everyone. It is necessary for specific game types and specific player expectations. Match the storage medium to your library, not your ego.
