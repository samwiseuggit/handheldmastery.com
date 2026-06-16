## Facet: Storage Solutions for Handheld Gaming

### Key Findings

- **M.2 2230 SSDs offer 20-70% faster game loading than microSD cards**, with the largest gaps in open-world/asset-heavy titles like No Man's Sky (SSD 56s vs microSD 95s) [^51^][^65^]
- **The Steam Deck's microSD slot is limited to UHS-I (104 MB/s)**, making UHS-II cards pointless for Deck owners; UHS-II only benefits ROG Ally/Ally X users [^45^][^16^]
- **NAND flash prices roughly doubled since mid-2025** due to AI datacenter demand, with shortages expected into 2027, making steep discounts unlikely in 2026 [^79^]
- **The Corsair MP600 Mini (E27T) and Crucial P310 are the fastest 2230 SSDs** available, both using the Phison E27T controller with sequential reads up to 7,100 MB/s [^13^][^81^]
- **The WD Black SN770M is the only retail 2TB TLC option**, offering superior endurance (1,200 TBW) over QLC alternatives, though at a premium price [^13^][^84^]
- **microSD cards are 3-5x cheaper per GB than 2230 SSDs**, making them ideal for budget-conscious gamers with large libraries of indie/older titles [^15^]
- **The Samsung PM9B1 is a popular OEM budget option** available through AliExpress at ~$38-75 for 512GB, delivering ~3,480/2,950 MB/s read/write [^59^]
- **The Foresee XP2000 is the stock 64GB eMMC drive** in base-model Steam Deck units, not a 2230 NVMe SSD; it is dramatically slower than any upgrade option [^27^]
- **The SanDisk Extreme PRO microSD is the only card tested that consistently beats the Steam Deck's internal SSD** in select loading tests, making it the fastest microSD option [^17^]
- **The TeamGroup ULTRA A2 V30 microSD delivers strong gaming performance on ROG Ally X** with 300+ GB of games loaded, feeling "like playing off internal storage" [^34^]

---

### Top 5 M.2 2230 SSDs

| # | Product | Capacities | Seq Read/Write | Price/GB (2026) | Best For |
|---|---------|-----------|----------------|-----------------|----------|
| 1 | **Corsair MP600 Mini (E27T)** | 1TB, 2TB | 7,000 / 6,500 MB/s | ~$0.15/GB | Best overall: TLC NAND, top performance, 2TB option [^13^][^48^] |
| 2 | **WD Black SN770M** | 500GB, 1TB, 2TB | 5,150 / 4,850 MB/s | ~$0.18/GB | Best endurance: 1,200 TBW at 2TB, only retail TLC at 2TB [^13^][^82^] |
| 3 | **Crucial P310** | 1TB, 2TB | 7,100 / 6,000 MB/s | ~$0.13/GB | Fastest sequential: Phison E27T + QLC, excellent efficiency [^81^][^80^] |
| 4 | **Sabrent Rocket 2230** | 512GB, 1TB, 2TB | 4,750 / 4,300 MB/s | ~$0.11/GB | First high-performance 2230; TLC at 1TB, great for ROG Ally PCIe 4.0 [^21^] |
| 5 | **Samsung PM9B1** | 256GB, 512GB, 1TB | 3,480 / 2,950 MB/s | ~$0.07/GB | Best budget: OEM drive via AliExpress, reliable Samsung V-NAND [^59^] |

#### Quick Notes on Key SSDs

**Corsair MP600 Mini (E27T):** Uses Phison E27T controller with Kioxia BiCS6 162-layer TLC NAND. Single-sided design. 5-year warranty, 600 TBW (1TB). The new E27T revision is significantly faster than the original E21T version; pay attention when ordering as both share the same name [^13^][^48^].

**WD Black SN770M:** Retail version of the popular SN740 OEM drive. Uses WD's in-house controller with BiCS5 112-layer TLC NAND. Only retail 2230 drive with TLC at 2TB. Runs hotter and less power-efficient than competitors but offers best endurance. 5-year warranty [^13^][^82^].

**Crucial P310:** Uses Phison E27T + Micron 232-layer QLC NAND. Fastest sequential reads of any 2230 drive. Excellent power efficiency. Massive 400GB pSLC cache at 2TB. However, QLC endurance is lower (440 TBW at 2TB) and sustained writes drop to ~336 MB/s after cache exhaustion [^80^][^81^].

**Sabrent Rocket 2230:** Phison E21T + Micron 176-layer TLC (1TB) or QLC (2TB). One of the first dedicated 2230 gaming SSDs. Good balance of performance and price. Random 4K performance is excellent for game loading [^21^].

**Samsung PM9B1:** Samsung's OEM offering with proprietary V-NAND and controller. Gen3 drive limited to ~3,500 MB/s but excellent power efficiency and thermal performance. Best value when purchased from AliExpress at $38-75 for 512GB [^59^].

**Foresee XP2000:** This is the **stock 64GB eMMC drive** included in base-model Steam Deck units, NOT an M.2 2230 NVMe SSD. It is the slowest storage option and should be upgraded immediately if you own this model. Sequential reads of only ~200-300 MB/s [^27^][^30^].

---

### Top 5 microSD Cards

| # | Product | Capacities | Seq Read/Write | Price/GB (2026) | Best For |
|---|---------|-----------|----------------|-----------------|----------|
| 1 | **Samsung PRO Ultimate** | 128GB, 256GB, 512GB | 200 / 130 MB/s | ~$0.13/GB | Best premium: Fastest UHS-I reads, A2 rated, 10-year warranty [^83^][^85^] |
| 2 | **SanDisk Extreme PRO** | 128GB-1TB | ~191 / 133 MB/s | ~$0.12/GB | Only card to beat Steam Deck SSD in some load tests [^17^][^85^] |
| 3 | **Lexar Professional Silver Plus** | 128GB-1TB | 160 / 130 MB/s | ~$0.09/GB | Best UHS-I value: strong random IOPS, competitive pricing [^63^][^35^] |
| 4 | **Kingston Canvas React Plus** | 32GB-256GB (SD) | 300 / 260 MB/s (UHS-II) | ~$0.15/GB | Best UHS-II option for ROG Ally; V90 rated, 300 MB/s reads [^25^][^33^] |
| 5 | **TeamGroup ULTRA A2 V30** | 128GB-1TB | 200 / 170 MB/s (claimed) | ~$0.08/GB | Best budget A2: 167/144 MB/s tested, ROG Ally X proven [^29^][^34^] |

#### Important microSD Compatibility Notes

- **Steam Deck:** The microSD slot is **UHS-I only** (max 104 MB/s). UHS-II and UHS-III cards work but are limited to UHS-I speeds. Focus on A2 rating and good random read/write performance, not sequential speeds [^45^][^16^].
- **ROG Ally/Ally X:** Has a **UHS-II microSD slot** (up to 312 MB/s). UHS-II cards like the Kingston Canvas React Plus will deliver better performance here.
- **All handhelds:** microSD cards with A2 (Application Performance Class 2) rating provide better random IOPS for game loading than A1 cards. A2 guarantees 4,000 IOPS read and 2,000 IOPS write minimum [^15^].

#### microSD Card Details

**Samsung PRO Ultimate:** UHS-I DDR200 technology enables 200 MB/s reads (with compatible reader). A2, V30, U3 rated. Uses Samsung V-NAND. 10-year warranty. Available in 128GB ($21), 256GB ($41), 512GB ($65). Benchmarked at 193 MB/s read, 129 MB/s write [^83^][^85^][^87^].

**SanDisk Extreme PRO:** Long-time performance leader. Consistently the fastest microSD in Steam Deck loading tests, even beating the internal SSD in Shadow of the Tomb Raider (15.6s vs 15.9s). A2, V30, U3 rated [^17^].

**Lexar Professional Silver Plus:** UHS-I card rated at 160 MB/s read. Strong random IOPS performance. Previously a value leader but prices have increased. Up to 1TB capacity. Best choice for maximizing UHS-I performance on Steam Deck [^63^][^35^].

**Kingston Canvas React Plus:** UHS-II card with V90 rating. 300 MB/s read, 260 MB/s write (tested at 292/273 MB/s). Primarily an SD card; microSD availability is limited. Best for ROG Ally's UHS-II slot. Lifetime warranty [^25^][^33^].

**TeamGroup ULTRA A2 V30:** A2, V30, U3 rated. Claims 200 MB/s reads, 170 MB/s writes. Tested at 167/144 MB/s. Proven gaming performance on ROG Ally X with 300GB+ of games. Lifetime warranty. Likely ~$120 for 1TB [^29^][^31^][^34^].

---

### Loading Time Comparison

Data synthesized from multiple sources [^51^][^65^][^66^][^17^]. Times are approximate and vary by handheld model and game version.

| Game | Internal SSD (PCIe 3.0) | microSD UHS-I (A2) | microSD vs SSD Penalty |
|------|------------------------|-------------------|----------------------|
| **No Man's Sky** | 56s | 95s | +69% slower |
| **Cyberpunk 2077** | 12s | 19s | +58% slower |
| **Shadow of the Tomb Raider** | 21.7s | 26-27s | +20-24% slower |
| **Days Gone** | 22.2s | 30-33s | +35-49% slower |
| **GTA V** | 27s | 33s | +22% slower |
| **Horizon Zero Dawn** | ~60s | ~90s | +50% slower |
| **Rollerdrome** | 4.75s | 5.4-5.6s | +14-18% slower |
| **Returnal** | ~25s | ~30s | +20% slower |
| **Aperture Desk Job** | ~10s | ~11s | +10% slower |
| **Hollow Knight** | ~3s | ~4s | +33% slower |

#### Key Observations:

1. **Open-world games with heavy asset streaming** (No Man's Sky, Horizon Zero Dawn) suffer the most on microSD, with 50-70% longer load times.
2. **Linear/indie games** (Rollerdrome, Aperture Desk Job) show minimal difference (10-18%), making microSD perfectly acceptable.
3. **In-game performance/framerates are virtually identical** between SSD and microSD once loaded; differences only appear during level transitions and asset streaming [^65^].
4. **Cyberpunk 2077 showed minimum FPS drops to 20** when loading from microSD vs 29 from SSD during benchmark scene transitions [^51^].
5. **Texture pop-in and stuttering** during fast travel is more noticeable on microSD in open-world titles [^51^].

---

### Price/Performance Analysis

#### Cost Per GB Comparison (2026)

| Storage Type | Capacity | Typical Price | Price/GB | Value Rating |
|-------------|----------|--------------|----------|-------------|
| Budget 2230 SSD (PM9B1) | 512GB | $40-55 | $0.08-0.11 | Excellent |
| Budget 2230 SSD (PM9B1) | 1TB | $80-100 | $0.08-0.10 | Excellent |
| Mid-range 2230 SSD (NV3/UD90) | 1TB | $85-110 | $0.09-0.11 | Very Good |
| Mid-range 2230 SSD (Rocket Q4/MP44S) | 2TB | $140-180 | $0.07-0.09 | Very Good |
| Premium 2230 SSD (MP600 Mini E27T) | 1TB | $110-130 | $0.11-0.13 | Good |
| Premium 2230 SSD (SN770M) | 2TB | $220-265 | $0.11-0.13 | Good |
| Premium 2230 SSD (P310) | 2TB | $215-264 | $0.11-0.13 | Good |
| microSD Budget (Evo Select/Ultra) | 512GB | $35-45 | $0.07-0.09 | Excellent |
| microSD Budget (Evo Select/Ultra) | 1TB | $70-90 | $0.07-0.09 | Excellent |
| microSD Premium (PRO Ultimate) | 512GB | $65 | $0.13 | Good |
| microSD Premium (Extreme PRO) | 512GB | $52 | $0.10 | Very Good |
| microSD Premium (Lexar Silver Plus) | 1TB | $90-100 | $0.09-0.10 | Very Good |

#### Value Analysis

**Budget Tier (<$100 for 1TB equivalent):**
- **microSD wins for raw capacity per dollar.** A 1TB microSD costs $70-90 vs $85-110 for a 1TB budget 2230 SSD.
- **Samsung PM9B1 512GB at ~$40 from AliExpress** is the cheapest way to get NVMe speeds, but requires dealing with OEM/OEM-adjacent sellers.
- **Kingston NV3 2230** is the retail budget leader at ~$85-100 for 1TB [^79^].

**Mid-Range Tier ($100-200):**
- **Crucial P310 2TB and TeamGroup MP44S 2TB** offer the best capacity at ~$140-180.
- **QLC vs TLC trade-off:** QLC drives (P310, MP44S) are cheaper but have lower endurance and slower sustained writes. TLC drives (SN770M) cost more but last longer and maintain performance when full.

**Premium Tier ($200+):**
- **WD SN770M 2TB** is the endurance king at 1,200 TBW with TLC NAND, but costs $220-265.
- **Corsair MP600 Mini (E27T)** offers the best balance of performance, efficiency, and TLC at 2TB, but expect to pay $220+.

**The Verdict:** For gamers on a tight budget, a **1TB microSD ($70-90)** is the best immediate expansion. For those wanting the best experience, a **1TB 2230 SSD ($85-130)** offers 20-70% faster loading and should be prioritized for AAA titles. Many users adopt a **hybrid approach**: SSD for frequently-played AAA games, microSD for indie titles and emulation [^15^].

---

### Installation Guides

#### Steam Deck / Steam Deck OLED

**Difficulty: Moderate (7/10)** -- Requires disassembly and OS reinstallation [^42^][^49^]

**Tools Required:**
- Phillips #0 and #1 screwdrivers
- Plastic opening tool/spudger
- Tweezers (optional)
- Thermal pad (reuse original or buy new)
- ESD protection (anti-static wrist strap)

**Steps (LCD Model):**
1. Power off completely and unplug all cables
2. Remove 8 back cover screws (4 long, 4 short -- keep track of positions)
3. Pry open back cover starting near triggers
4. Remove EMI shield (3 screws on older models, 2 on newer)
5. Disconnect battery (critical safety step)
6. Remove single M.2 2230 screw, slide out old SSD
7. Transfer EMI shield/antistatic cover to new SSD
8. Insert new 2230 SSD at 30-degree angle, secure with screw
9. Reconnect battery, reattach EMI shield, snap on back cover
10. Reinstall all screws
11. **Reinstall SteamOS** using Valve's recovery image (USB-C flash drive required) [^42^]

**Steps (OLED Model):**
1. Discharge battery to below 25%
2. Enter Battery Storage Mode in BIOS (recommended)
3. Remove microSD card before opening (will break if left in)
4. Remove 8 T6 Torx screws (5.8mm)
5. Pry open back cover, disconnect battery and button board cable
6. Remove motherboard shield (additional steps)
7. Swap SSD, reassemble
8. Reinstall SteamOS [^49^]

**Important Notes:**
- Only single-sided 2230 SSDs fit properly
- After OS reinstall, touchscreen may not work during initial setup -- use touchscreen to complete setup and update, then reboot
- Keep track of screw lengths and positions
- The EMI shield transfer is critical for WiFi performance

#### ROG Ally (Original)

**Difficulty: Moderate (6/10)** [^40^][^43^]

**Tools Required:**
- Size 0 Phillips head screwdriver
- Plastic guitar pick or prying tool
- Spudger (optional)

**Steps:**
1. Discharge battery to 25% or below
2. Remove microSD card
3. Remove 6 back panel screws (bottom middle is shorter)
4. Use guitar pick to unclip back panel starting near triggers
5. Lift black flap between fans, slide metal retaining clip back
6. Pull battery connector upward to disconnect
7. Remove single screw holding SSD, slide out old drive
8. Insert new M.2 2230 SSD, secure with screw
9. Reconnect battery, snap back panel on, reinstall screws
10. Enter BIOS (hold Volume Down + Power), use ASUS Cloud Recovery to reinstall Windows [^40^]

#### ROG Ally X / ROG Xbox Ally / Xbox Ally X

**Difficulty: Moderate (7/10)** [^40^][^41^]

- **ROG Ally X** uses **M.2 2280** SSDs (not 2230), enabling larger/cheaper drives up to 4TB+
- **ROG Xbox Ally** still uses M.2 2230 but requires battery removal on some models before SSD swap
- **ROG Xbox Ally X** also uses M.2 2280
- All models have a **ribbon cable** connecting the back panel to the motherboard -- do NOT tear it when opening
- Use ASUS Cloud Recovery (hold Volume Down + Power, select in BIOS) to reinstall Windows [^40^]

#### Legion Go 2 / MSI Claw 8 AI+

**Legion Go 2:** Uses M.2 2230 or 2242 SSDs (varies by model). Similar disassembly process to Steam Deck.

**MSI Claw 8 AI+:** Uses M.2 2230 SSD. Internal layout varies; consult MSI's service manual. [^47^]

#### MSI Claw

**Difficulty: Moderate (7/10)**

- Uses M.2 2230 NVMe SSD
- MSI provides service manuals for SSD replacement
- Windows reinstall required after swap [^47^]

#### General Tips for All Consoles

1. **Always backup data** before swapping -- cloud saves protect game progress but local files are lost
2. **Clone instead of clean install** using an M.2 USB enclosure + Macrium Reflect if you want to preserve your setup [^46^]
3. **Disable BitLocker** before cloning to avoid encryption issues
4. **Take photos** of screw positions and cable routing before disassembly
5. **Ground yourself** -- touch a metal object before handling components
6. **Never force** the back cover -- clips can break with excessive pressure
7. **Battery disconnection** is a critical safety step on all models

---

### Console Compatibility Matrix

| Handheld | SSD Slot | microSD Slot | Best SSD Form Factor | Notes |
|----------|----------|-------------|---------------------|-------|
| **Steam Deck (LCD)** | M.2 2230 PCIe 3.0 | UHS-I | M.2 2230 single-sided | PCIe 4.0 drives work at 3.0 speeds [^13^] |
| **Steam Deck OLED** | M.2 2230 PCIe 3.0 | UHS-I | M.2 2230 single-sided | Same as LCD, improved thermals [^49^] |
| **ROG Ally** | M.2 2230 PCIe 4.0 | UHS-II | M.2 2230 | Full PCIe 4.0 speeds [^43^] |
| **ROG Ally X** | M.2 2280 PCIe 4.0 | UHS-II | M.2 2280 | Standard laptop SSD size [^40^] |
| **ROG Xbox Ally** | M.2 2230 PCIe 4.0 | UHS-II | M.2 2230 | May require battery removal [^40^] |
| **ROG Xbox Ally X** | M.2 2280 PCIe 4.0 | UHS-II | M.2 2280 | Same as Ally X [^40^] |
| **Legion Go 2** | M.2 2230/2242 PCIe 4.0 | UHS-I | M.2 2230/2242 | Check specific model [^18^] |
| **MSI Claw 8 AI+** | M.2 2230 PCIe 4.0 | UHS-I | M.2 2230 | Consult MSI manual [^47^] |

---

### Recommendations

#### Best Premium SSD
**Corsair MP600 Mini (E27T) 1TB or 2TB** -- The Phison E27T controller with Kioxia TLC NAND delivers the best balance of performance, efficiency, and endurance. The E27T is significantly faster and more efficient than older E21T drives, and TLC NAND means consistent performance even when the drive is nearly full. At ~$110-130 for 1TB or ~$220 for 2TB, it's worth the premium over QLC alternatives for serious gamers [^13^][^48^].

#### Best Budget SSD
**Samsung PM9B1 512GB/1TB via AliExpress** -- At ~$38-55 for 512GB or ~$80-100 for 1TB, this OEM drive offers unbeatable value. Samsung V-NAND is reliable, power efficiency is excellent for handhelds, and ~3,500 MB/s reads are more than enough for Steam Deck's PCIe 3.0 limit. Buy only from sellers with 98%+ feedback [^59^][^62^].

**Retail Alternative:** Kingston NV3 1TB at ~$85-100 if you prefer retail warranty and support [^79^].

#### Best microSD Card
**Samsung PRO Ultimate 512GB** -- At ~$65 for 512GB, it offers the best combination of 200 MB/s reads, A2 app performance, 130 MB/s writes, and a 10-year warranty. The UHS-I DDR200 technology extracts maximum performance from Steam Deck's limited slot. For ROG Ally owners with UHS-II slots, the **Kingston Canvas React Plus** at 300 MB/s is the better choice [^83^][^85^].

**Budget Alternative:** SanDisk Extreme PRO or TeamGroup ULTRA A2 V30 at ~$40-50 for 512GB [^17^][^34^].

#### Best Value Overall
**Hybrid Setup: 1TB Budget SSD + 1TB microSD** -- For ~$160-180 total, install a Samsung PM9B1 or Kingston NV3 1TB SSD internally for AAA titles, and add a 1TB Samsung PRO Ultimate or Lexar Silver Plus microSD for indie games, emulation, and media. This gives you 2TB total with optimal performance where it matters most, at roughly half the cost of a 2TB premium SSD alone [^15^].

---

### Sources

| Citation | Source | URL |
|----------|--------|-----|
| [^13^] | Tom's Hardware - Best SSD for Steam Deck 2026 | https://www.tomshardware.com/best-picks/best-ssd-for-steam-deck |
| [^14^] | Eurogamer/Digital Foundry - Best Steam Deck SSD | https://www.eurogamer.net/digitalfoundry-best-steam-deck-ssd-upgrade |
| [^15^] | EveZone - 1TB SSD vs microSD for Handheld Gaming | https://evezone.evetech.co.za/upgrade-path/1tb-ssd-vs-microsd-handheld-gaming |
| [^16^] | KingSpec Tech - Best SD Card for Steam Deck | https://www.kingspectech.com/blogs/posts/best-sd-card-for-steam-deck |
| [^17^] | Rock Paper Shotgun - Best microSD Cards for Steam Deck | https://www.rockpapershotgun.com/best-microsd-cards-for-steam-deck |
| [^18^] | KingSpec - Best 2230 SSD | https://www.kingspectech.com/blogs/news/best-2230-ssd |
| [^19^] | Tom's Hardware - SSD Benchmarks Hierarchy | https://www.tomshardware.com/features/ssd-benchmarks-hierarchy |
| [^21^] | XDA Developers - Sabrent Rocket 2230 Review | https://www.xda-developers.com/sabrent-rocket-2230-ssd-review/ |
| [^25^] | Alik Griffin - Kingston Canvas React Plus Review | https://alikgriffin.com/kingston-canvas-react-memory-card-review/ |
| [^26^] | Engadget - Best microSD Cards 2026 | https://www.engadget.com/computing/accessories/best-microsd-card-130038282.html |
| [^27^] | Tom's Hardware - Testing Steam Deck SSDs | https://www.tomshardware.com/best-picks/best-ssd-for-steam-deck |
| [^29^] | TeamGroup - ULTRA A2 V30 Product Page | https://www.teamgroupinc.com/en/product-detail/card/TEAMGROUP/ultra-a2-v30/ |
| [^30^] | AliExpress - SSD 2230 for Steam Deck Review | https://www.aliexpress.com/s/wiki-ssr/article/ssd-2030 |
| [^31^] | TechRadar - TeamGroup ULTRA microSD Review | https://www.techradar.com/computing/teamgroup-ultra-microsdxc-a2-v30-memory-card-review |
| [^33^] | Camera Memory Speed - Kingston Canvas React Plus Review | https://www.cameramemoryspeed.com/reviews/sd-cards/kingston-canvas-react-plus-64gb-uhs-ii-memory-card/ |
| [^34^] | BabelTech Reviews - TeamGroup Ultra microSD Gaming Test | https://babeltechreviews.com/teamgroup-triple-threat-review-ultra-microsdxc-1tb-cr1-card-reader-and-pu-leather-square-bag/ |
| [^35^] | Yahoo Tech - Best microSD Cards 2026 | https://tech.yahoo.com/computing/article/best-microsd-card-160000699.html |
| [^40^] | ASUS ROG - SSD Upgrade Guide | https://rog.asus.com/articles/guides/how-to-upgrade-the-ssd-and-reinstall-windows-on-your-rog-ally/ |
| [^42^] | iFixit - Steam Deck SSD Replacement | https://www.ifixit.com/Guide/Steam+Deck+SSD+Replacement/148989 |
| [^44^] | TechPowerUp - Corsair MP600 Mini 2TB Review | https://www.techpowerup.com/review/corsair-mp600-mini-2-tb/ |
| [^45^] | Rock Paper Shotgun - microSD FAQ | https://www.rockpapershotgun.com/best-microsd-cards-for-steam-deck |
| [^47^] | Kingston - ROG Xbox Ally SSD Upgrade | https://www.kingston.com/unitedkingdom/en/blog/gaming/upgrade-your-rog-xbox-ally-ssd |
| [^48^] | Tom's Hardware - Corsair MP600 Mini E27T Review | https://www.tomshardware.com/pc-components/ssds/corsair-mp600-mini-1tb-e27t-ssd-review |
| [^49^] | iFixit - Steam Deck OLED SSD Replacement | https://www.ifixit.com/Guide/Steam+Deck+OLED+SSD+Replacement/168255 |
| [^51^] | TechteamGB - SSD vs microSD Loading Times | https://techteamgb.co.uk/2023/04/24/steam-deck-1tb-ssd-vs-micro-sd-card-speed-loading-times-performance/ |
| [^59^] | AliExpress - Samsung PM9B1 Review | https://www.aliexpress.com/s/wiki-ssr/article/samsung-pm9b1-512gb-ssd |
| [^62^] | Danchar Blog - M.2 2230 SSD List | https://dancharblog.wordpress.com/2024/01/01/upgrade-sl3-or-spx-to-1tb/ |
| [^63^] | Lexar - Fastest microSD Cards | https://americas.lexar.com/fastest-microsd-cards/ |
| [^65^] | How-To Geek - Steam Deck SD Card Loading Times | https://www.howtogeek.com/892157/does-your-steam-deck-sd-card-affect-game-loading-times/ |
| [^66^] | Steam Deck HQ - Drive Size Performance Test | https://steamdeckhq.com/news/can-steam-deck-drive-size-impact-performance/ |
| [^78^] | Tom's Hardware - Steam Deck SSD Comparison Table | https://www.tomshardware.com/best-picks/best-ssd-for-steam-deck |
| [^79^] | Gaming PC Builder - 2230 SSD Roundup 2026 | https://www.gamingpcbuilder.com/m-2-2230-ssd-roundup/ |
| [^80^] | Tom's Hardware - Crucial P310 Review | https://www.tomshardware.com/pc-components/ssds/crucial-p310-ssd-review/ |
| [^81^] | XDA Developers - Crucial P310 2TB Review | https://www.xda-developers.com/crucial-p310-2230-m2-ssd-2tb-review/ |
| [^82^] | GamesRadar - WD SN770M Review | https://www.gamesradar.com/wd-black-sn770m-review/ |
| [^83^] | Samsung - PRO Ultimate 512GB Product Page | https://www.samsung.com/us/memory-storage/memory-card/pro-ultimate-adapter-microsdxc-512gb/ |
| [^84^] | PCWorld - WD SN770M Review | https://www.pcworld.com/article/2095268/wd-black-sn770m-nvme-ssd-review.html |
| [^85^] | StorageReview - Samsung PRO Ultimate microSD Review | https://www.storagereview.com/review/samsung-pro-ultimate-microsd-card-review-512-gb |
| [^87^] | SamMobile - Samsung PRO Ultimate Launch | https://www.sammobile.com/news/samsung-pro-ultimate-microsd-card-launched-200mbps-read-speeds/ |
| [^98^] | Disk Prices - Current SSD Pricing | https://diskprices.com/ |

---

*Report compiled May 2026. Prices are approximate and fluctuate based on retailer, region, and NAND market conditions. NAND flash prices have approximately doubled since mid-2025 due to AI datacenter demand; expect elevated pricing through 2027.*
