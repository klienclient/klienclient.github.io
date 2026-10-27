export const MODULE_GROUPS = [
  {
    id: 'combat',
    label: 'Combat',
    summary: 'Fast combat tools with control over targeting, timing and safety.',
    modules: [
      ['Crystal Aura', 'Places and breaks end crystals for the most damage.'],
      ['Anchor Aura', 'Places and detonates respawn anchors within range.'],
      ['Auto Totem', 'Keeps a totem in your offhand without touching your hotbar.'],
      ['Friend Guard', 'Stops you from hitting players on your friends list.']
    ]
  },
  {
    id: 'recon',
    label: 'Recon',
    summary: 'Read chunks, entities and underground activity with less guesswork.',
    modules: [
      ['Player Bypass', 'Flags chunks with signs of underground player bases.'],
      ['Chunk Finder', 'Finds light and redstone changes below Y 0.'],
      ['Anti Vanish', 'Catches staff who vanish near you.'],
      ['Spawner Notifier', 'Scans chunks for mob spawners and highlights them.']
    ]
  },
  {
    id: 'visuals',
    label: 'Visuals',
    summary: 'Turn hidden information into readable overlays and distinct effects.',
    modules: [
      ['Target ESP', 'Draws an Egyptian mark on your combat target.'],
      ['Atmosphere', 'Adds a custom sky with stars and an aurora.'],
      ['Storage ESP', 'Highlights storage blocks and spawners by type.'],
      ['Trajectories', 'Shows where your projectiles will land.']
    ]
  },
  {
    id: 'utility',
    label: 'Utility',
    summary: 'Practical automation for inventory, movement and repeated actions.',
    modules: [
      ['AH Sniper', 'Refreshes the auction house and buys below your price.'],
      ['Auto Replenish', 'Refills a hotbar or offhand slot once it runs low.'],
      ['No Inv Leak', 'Hides your items on screen for screen shares.'],
      ['Elytra Fly', 'Gives you more control over your elytra.']
    ]
  }
];
