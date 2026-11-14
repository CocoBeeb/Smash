
const ARENA_W = 2000;
const ARENA_H = 1100;
const STAGE_THEMES = [
  {
    id: 'starfall',
    name: 'Starfall Summit',
    description: 'Floating platforms above a midnight observatory.',
    theme: 'stars',
    sky: ['#07152f', '#172554', '#312e81'],
    accent: '#a5b4fc',
    ground: { x: 700, w: 600, y: 350 },
    platforms: [
      { x: 470, y: 590, w: 250, h: 22 },
      { x: 1280, y: 590, w: 250, h: 22 },
      { x: 880, y: 510, w: 240, h: 20 }
    ]
  },
  {
    id: 'mosswood',
    name: 'Mosswood Hollow',
    description: 'A sunlit forest with stepping-stone branches.',
    theme: 'forest',
    sky: ['#14352b', '#28604a', '#8eaa64'],
    accent: '#bef264',
    ground: { x: 560, w: 880, y: 330 },
    platforms: [
      { x: 590, y: 520, w: 250, h: 24 },
      { x: 1160, y: 520, w: 250, h: 24 },
      { x: 860, y: 600, w: 280, h: 22 }
    ]
  },
  {
    id: 'gearworks',
    name: 'Clockwork Foundry',
    description: 'Copper gears turn beneath a furnace-lit sky.',
    theme: 'gears',
    sky: ['#1f1720', '#57342b', '#b45309'],
    accent: '#fbbf24',
    ground: { x: 650, w: 700, y: 310 },
    platforms: [
      { x: 400, y: 530, w: 230, h: 24 },
      { x: 1370, y: 530, w: 230, h: 24 },
      { x: 870, y: 580, w: 260, h: 22 }
    ]
  },
  {
    id: 'crystalbay',
    name: 'Crystal Bay',
    description: 'Glassy blue cliffs above a luminous tide.',
    theme: 'crystals',
    sky: ['#082f49', '#155e75', '#164e63'],
    accent: '#67e8f9',
    ground: { x: 750, w: 500, y: 380 },
    platforms: [
      { x: 500, y: 590, w: 220, h: 22 },
      { x: 1280, y: 590, w: 220, h: 22 },
      { x: 890, y: 650, w: 220, h: 20 }
    ]
  }
];
const STAGE_LAYOUTS = [
  {
    name: 'Classic',
    description: 'A broad center arena with three staggered platforms.',
    ground: { x: 600, w: 800, y: 330 },
    platforms: [
      { x: 350, y: 500, w: 300, h: 22 },
      { x: 1350, y: 500, w: 300, h: 22 },
      { x: 850, y: 560, w: 300, h: 22 }
    ]
  },
  {
    name: 'Open Field',
    description: 'A long, flat battlefield with no platforms.',
    ground: { x: 250, w: 1500, y: 330 },
    platforms: []
  },
  {
    name: 'High Wings',
    description: 'Two high side platforms surround a narrow ground.',
    ground: { x: 700, w: 600, y: 300 },
    platforms: [
      { x: 150, y: 500, w: 400, h: 24 },
      { x: 1450, y: 500, w: 400, h: 24 }
    ]
  },
  {
    name: 'Rising Steps',
    description: 'A staircase climbs from the left edge to the right.',
    ground: { x: 650, w: 700, y: 300 },
    platforms: [
      { x: 210, y: 380, w: 280, h: 22 },
      { x: 500, y: 440, w: 280, h: 22 },
      { x: 790, y: 500, w: 280, h: 22 },
      { x: 1080, y: 560, w: 280, h: 22 }
    ]
  },
  {
    name: 'Falling Steps',
    description: 'A descending staircase gives the right side the high ground.',
    ground: { x: 650, w: 700, y: 300 },
    platforms: [
      { x: 1640, y: 380, w: 280, h: 22 },
      { x: 1350, y: 440, w: 280, h: 22 },
      { x: 1060, y: 500, w: 280, h: 22 },
      { x: 770, y: 560, w: 280, h: 22 }
    ]
  },
  {
    name: 'Sky Tower',
    description: 'Small platforms stack into a tall central tower.',
    ground: { x: 700, w: 600, y: 300 },
    platforms: [
      { x: 790, y: 380, w: 420, h: 22 },
      { x: 850, y: 450, w: 300, h: 22 },
      { x: 900, y: 520, w: 200, h: 22 }
    ]
  },
  {
    name: 'Skybridge',
    description: 'A high bridge spans the arena above two side ledges.',
    ground: { x: 600, w: 800, y: 300 },
    platforms: [
      { x: 180, y: 460, w: 420, h: 24 },
      { x: 1400, y: 460, w: 420, h: 24 },
      { x: 600, y: 520, w: 800, h: 26 }
    ]
  },
  {
    name: 'Crossroads',
    description: 'A wide center platform connects four offset ledges.',
    ground: { x: 400, w: 1200, y: 300 },
    platforms: [
      { x: 150, y: 400, w: 300, h: 22 },
      { x: 1550, y: 400, w: 300, h: 22 },
      { x: 600, y: 470, w: 800, h: 24 },
      { x: 350, y: 530, w: 300, h: 22 },
      { x: 1350, y: 530, w: 300, h: 22 }
    ]
  },
  {
    name: 'Zigzag',
    description: 'Three offset platforms make a winding route across the stage.',
    ground: { x: 650, w: 700, y: 300 },
    platforms: [
      { x: 180, y: 390, w: 360, h: 22 },
      { x: 820, y: 470, w: 360, h: 22 },
      { x: 1460, y: 550, w: 360, h: 22 }
    ]
  },
  {
    name: 'Split Levels',
    description: 'A low central floor sits beneath two levels of separated ledges.',
    ground: { x: 500, w: 1000, y: 280 },
    platforms: [
      { x: 170, y: 390, w: 460, h: 24 },
      { x: 1370, y: 390, w: 460, h: 24 },
      { x: 580, y: 460, w: 340, h: 22 },
      { x: 1080, y: 460, w: 340, h: 22 },
      { x: 800, y: 530, w: 400, h: 24 }
    ]
  }
];
const STAGES = Array.from({ length: 100 }, (_, index) => {
  const base = STAGE_THEMES[index % STAGE_THEMES.length];
  const layout = STAGE_LAYOUTS[index % STAGE_LAYOUTS.length];
  const variant = Math.floor(index / STAGE_LAYOUTS.length);
  const groundWidth = Math.max(500, Math.min(1600, layout.ground.w + ((variant % 5) - 2) * 36));
  const groundX = Math.max(100, Math.min(ARENA_W - groundWidth - 100,
    layout.ground.x + ((variant * 73) % 161) - 80));
  const groundY = Math.max(260, Math.min(390, layout.ground.y + ((variant % 3) - 1) * 16));
  const platforms = layout.platforms.map((platform, platformIndex) => ({
    ...platform,
    x: Math.max(20, Math.min(ARENA_W - platform.w - 20,
      platform.x + ((variant * (platformIndex + 3) * 31) % 121) - 60)),
    y: Math.max(420, Math.min(820,
      platform.y + ((variant * (platformIndex + 2) * 13) % 81) - 40))
  }));
  return {
    ...base,
    id: `${base.id}-${String(index + 1).padStart(3, '0')}`,
    name: `${base.name} ${String(index + 1).padStart(2, '0')}`,
    description: `${layout.name}: ${layout.description}`,
    ground: { x: groundX, w: groundWidth, y: groundY },
    platforms
  };
});
let selectedStage = STAGES[0];

const MAX_STOCKS = 3;
const keys = {};
let gameRunning = false;
let gameMode = 'two-player';
let cpuFrame = 0;
let onlineFrame = 0;
const online = {
  socket: null,
  role: null,
  roomCode: '',
  peerConnected: false,
  remoteFighterId: null,
  remoteReady: false,
  remoteKeys: {}
};
let particles = [];
let projectiles = [];

const EXTRA_FIGHTERS = (() => {
  const rows = [
    ['Aster Vale', '✨', 'Stardust Knuckle', 'Northstar Volley', 'projectile'],
    ['Comet Kestrel', '☄️', 'Perihelion Pounce', 'Tailfire Drift', 'dash'],
    ['Nebula Nix', '🌌', 'Cloudbank Crush', 'Mauve Maelstrom', 'orbit'],
    ['Orbit Oona', '🪐', 'Ring-Sling Sweep', 'Saturn Return', 'orbit'],
    ['Quasar Quill', '💫', 'Photon Quillshot', 'Blue-Shift Bolt', 'projectile'],
    ['Solstice Spark', '🌞', 'Daybreak Drive', 'Longest-Day Lance', 'leap'],
    ['Lunar Lumen', '🌙', 'Moonrise Mace', 'Crater Call', 'slam'],
    ['Meteor Mallow', '🌠', 'Meteor-Mash', 'Marshmallow Meteor', 'slam'],
    ['Gravity Gable', '🛰️', 'Tidal Pull', 'Pocket Singularity', 'trap'],
    ['Pulsar Puck', '💥', 'Beacon Bop', 'Pulsar Ping', 'barrage'],
    ['Zenith Zori', '🌟', 'Peak-Point Palm', 'Zenith Beam', 'projectile'],
    ['Void Vesper', '🌑', 'Quietus Quake', 'Black-Sky Fold', 'trap'],
    ['Aurora Axle', '🌈', 'Ribbon-Radiance Rake', 'Polar Prism', 'barrage'],
    ['Eclipse Ember', '🌘', 'Umbra Uppercut', 'Corona Catch', 'guard'],
    ['Telescope Tavi', '🔭', 'Far-Sight Feint', 'Deep-Space Dispatch', 'projectile'],
    ['Brinebell', '🐚', 'Shellshock Shunt', 'Undertow Bell', 'projectile'],
    ['Captain Kelp', '🌿', 'Seaweed Snare', 'Green-Tide Grapple', 'trap'],
    ['Mira Mantaray', '🪽', 'Wingwash Whip', 'Bluewater Glide', 'dash'],
    ['Coral Caper', '🪸', 'Reef-Rake', 'Coral Crown', 'orbit'],
    ['Guppy Gusto', '🐟', 'Fin-Flip Flick', 'School of One', 'barrage'],
    ['Tidepool Tilda', '🫧', 'Bubble-Press', 'Pocket Tidepool', 'trap'],
    ['Abyssal Ada', '🦑', 'Inkline Jab', 'Midnight Inkfall', 'projectile'],
    ['Barnacle Buck', '🦀', 'Craggy Claw', 'Barnacle Barricade', 'guard'],
    ['Siren Silt', '🧜', 'Current-Carol', 'Siren Songwave', 'orbit'],
    ['Marina Moth', '🦋', 'Foamwing Flutter', 'Moonlit Shoal', 'leap'],
    ['Lanternfish Lux', '🏮', 'Glowfin Glimmer', 'Abyss Lantern', 'projectile'],
    ['Kelpcoil Kito', '🐍', 'Coil-and-Catch', 'Kelp-Cage Whorl', 'trap'],
    ['Pebble Puffer', '🐡', 'Puffball Pop', 'Pressure-Puff Burst', 'barrage'],
    ['Skipper Shoal', '⛵', 'Deckhand Doubletap', 'Rogue Wave Ride', 'dash'],
    ['Whirlpool Wren', '🌀', 'Spiral Splash', 'Maelstrom Mouth', 'orbit'],
    ['Acorn Atlas', '🌰', 'Husk-Hammer', 'Mighty Oak Drop', 'slam'],
    ['Fern Fable', '🌱', 'Frond Flick', 'Storybook Sprout', 'leap'],
    ['Moss Morrow', '🍀', 'Moss-Covered Mace', 'Velvet-Green Veil', 'guard'],
    ['Bramble Bea', '🌹', 'Thorn-Thrust', 'Bramble Maze', 'trap'],
    ['Pollen Penny', '🌼', 'Petal-Pollen Puff', 'Golden Haze', 'projectile'],
    ['Cedar Cipher', '🌲', 'Barkcode Bash', 'Root-Rune Snare', 'trap'],
    ['Tumble Toadstool', '🍄', 'Cap-Top Bonk', 'Sporestorm', 'barrage'],
    ['Sundew Suki', '🌿', 'Dewdrop Lariat', 'Sticky Sunrise', 'trap'],
    ['Thistle Tuck', '🌾', 'Prickle-Poke', 'Thistledown Twister', 'orbit'],
    ['Bonsai Bix', '🪴', 'Branch-Bend Chop', 'Pocket-Grove Pop', 'leap'],
    ['Clover Coil', '☘️', 'Lucky-Loop Lunge', 'Four-Leaf Flurry', 'dash'],
    ['Fossil Fern', '🦴', 'Ancient-Rib Rattle', 'Petrified Bloom', 'slam'],
    ['Orchid Oddity', '🌺', 'Bloom-Boom', 'Glasshouse Gust', 'projectile'],
    ['Cattail Cricket', '🦗', 'Reed-Whistle Kick', 'Marshlight Chorus', 'barrage'],
    ['Juniper Jinx', '🫐', 'Berry-Bramble Bash', 'Juniper Jolt', 'dash'],
    ['Willow Whistle', '🎋', 'Weeping-Wand Whack', 'Wind-in-the-Willows', 'projectile'],
    ['Mushroom Mettle', '🍄', 'Gills-and-Grit', 'Mycelium Network', 'orbit'],
    ['Vinegaroon Vee', '🌿', 'Vine-Vise', 'Canopy Catapult', 'leap'],
    ['Pinecone Pogo', '🌲', 'Cone-Head Crash', 'Evergreen Eruption', 'slam'],
    ['Hollow Huckle', '🪵', 'Knothole Knuckle', 'Hollow-Log Hideout', 'guard'],
    ['Copper Kettle', '🫖', 'Spout-Side Swing', 'Whistling Steamshot', 'projectile'],
    ['Tinker Tallow', '🪛', 'Socket-Snap', 'Ratchet Rumble', 'barrage'],
    ['Moxie Magnet', '🧲', 'Polarity Punch', 'North-Pole Nudge', 'trap'],
    ['Gadget Grommet', '⚙️', 'Cogwheel Cross', 'Grommet Grapple', 'dash'],
    ['Patch Panel', '🔌', 'Live-Wire Lariat', 'Circuit-Skip', 'dash'],
    ['Sprocket Sable', '🛠️', 'Gear-Grind Jab', 'Sprocket Cyclone', 'orbit'],
    ['Rivet Rook', '🔩', 'Rivet Ricochet', 'Ironclad Install', 'projectile'],
    ['Velcro Vandal', '🧵', 'Hook-and-Loop Hook', 'Stickfast Snare', 'trap'],
    ['Origami Olli', '🗞️', 'Paper-Crane Cut', 'Thousand-Fold Falcon', 'barrage'],
    ['Marble Millie', '⚪', 'Catseye Clobber', 'Marble Runaway', 'dash'],
    ['Pendulum Pip', '⏱️', 'Clock-Swing Clout', 'Grandfather Drop', 'slam'],
    ['Rubberband Rex', '🪢', 'Snapback Smack', 'Elastic Ambush', 'trap'],
    ['Tin Can Tessa', '🥫', 'Can-Opener Chop', 'Rattletrap Roll', 'dash'],
    ['Button Barlow', '🔘', 'Press-Here Pummel', 'Button-Mash Barrage', 'barrage'],
    ['Kaleido Kit', '🔮', 'Facet-Face Feint', 'Kaleidoscope Crash', 'orbit'],
    ['Looma Spindle', '🧶', 'Thread-the-Needle', 'Spindle Whirl', 'orbit'],
    ['Latchkey Lou', '🗝️', 'Keyhole Kick', 'Skeleton-Key Skip', 'dash'],
    ['Piston Poppy', '🔧', 'Hydraulic Headbutt', 'Piston-Punch Pop', 'leap'],
    ['Crankshaft Cora', '🛞', 'Crank-and-Crank', 'Overdrive Orbit', 'dash'],
    ['Gasket Gale', '🧰', 'Seal-the-Deal Slam', 'Pressure-Gasket Pop', 'slam'],
    ['Bolt Biscuit', '🔩', 'Hex-Head Haymaker', 'Bolt-Action Boomerang', 'projectile'],
    ['Solder Sprite', '🪄', 'Hot-Iron Hook', 'Molten Circuit', 'projectile'],
    ['Blueprint Blue', '📐', 'Drafting-Table Drop', 'Plan A: Perimeter', 'trap'],
    ['Kiln Kid', '🏺', 'Clay-Crack Chop', 'Fired-Up Fanfare', 'barrage'],
    ['Whisker Wrench', '🔧', 'Spanner Spin', 'Toolbox Tornado', 'orbit'],
    ['Noodle Noodleton', '🍜', 'Noodle-Slap', 'Brothwave Blast', 'projectile'],
    ['Dumpling Dynamo', '🥟', 'Steamer Slammer', 'Bun-Burst Bounce', 'slam'],
    ['Pepper Pippa', '🌶️', 'Capsaicin Cross', 'Five-Alarm Fan', 'barrage'],
    ['Meringue Mags', '🍰', 'Whipped-Cream Whip', 'Sugarcloud Swirl', 'orbit'],
    ['Pickle Puckett', '🥒', 'Dill-Pickle Drill', 'Brine-Bubble Barrage', 'projectile'],
    ['Saffron Sizzle', '🧂', 'Spice-Rack Smack', 'Saffron Sunburst', 'projectile'],
    ['Crusty Crouton', '🍞', 'Crust-Crunch Cross', 'Pop-Up Toast', 'leap'],
    ['Boba Bubbles', '🧋', 'Tapioca Tap', 'Pearl-Pop Volley', 'projectile'],
    ['Radish Rumble', '🥕', 'Root-Cellar Rake', 'Radish Rocket', 'projectile'],
    ['Miso Meteor', '🥣', 'Umami Uppercut', 'Miso-Meteor Shower', 'slam'],
    ['Waffle Warden', '🧇', 'Gridiron Griddle', 'Syrup Slipstream', 'trap'],
    ['Olive Overture', '🫒', 'Pitted-Palm Poke', 'Olive-Branch Orbit', 'orbit'],
    ['Cocoa Comet', '🍫', 'Fudge-Fist Feint', 'Cocoa-Crater Crash', 'dash'],
    ['Turnip Tuba', '🥬', 'Leafy Low Blow', 'Root-Note Rumble', 'barrage'],
    ['Sushi Swerve', '🍣', 'Maki-Mat Misdirect', 'Wasabi Wake', 'dash'],
    ['Pancake Paladin', '🥞', 'Flapjack Flurry', 'Stack Attack', 'slam'],
    ['Cinnamon Cyclone', '🌀', 'Spice-Swirl Sweep', 'Cinnamon Whirlwind', 'orbit'],
    ['Gingersnap Gus', '🍪', 'Cookie-Crumb Cross', 'Snap-Crackle Slam', 'slam'],
    ['Taffy Tangle', '🍬', 'Stretch-and-Smack', 'Sugar-Rope Snare', 'trap'],
    ['Pesto Prowler', '🌿', 'Basilisk Bash', 'Basil-Burst Bolero', 'projectile'],
    ['Crumble Crumb', '🥧', 'Shortcrust Shove', 'Crumbquake', 'slam'],
    ['Fritter Fox', '🍩', 'Glaze-Ring Grapple', 'Donut Dash', 'dash'],
    ['Bassline Bex', '🎸', 'Low-Note Lariat', 'Bass Drop', 'slam'],
    ['Marimba Moth', '🎼', 'Mallet-Moth Mash', 'Wooden-Key Whirl', 'orbit'],
    ['Saxophone Sid', '🎷', 'Reed-Rattle Rake', 'Blue-Note Blast', 'projectile'],
    ['Timpani Taro', '🥁', 'Kettle-Drum Kick', 'Rolling Crescendo', 'barrage'],
    ['Viola Voltage', '🎻', 'Bowstring Backhand', 'Arco Arc', 'projectile'],
    ['Chime Chandra', '🔔', 'Bell-Clapper Bop', 'Chime-Time Ring', 'orbit'],
    ['Harmonica Hush', '🎶', 'Reed-Breath Jab', 'Crossharp Cyclone', 'barrage'],
    ['Turntable Trix', '💿', 'Needle-Drop Nudge', 'Scratch Track', 'dash'],
    ['Kazoo Kestrel', '📯', 'Buzzbox Bonk', 'Kazoom', 'projectile'],
    ['Cymbal Saffy', '🥁', 'Crash-Cymbal Catch', 'Shimmering Crash', 'barrage'],
    ['Cello Cinder', '🎻', 'Endpin Uppercut', 'Deep-String Quake', 'slam'],
    ['Harpsichord Hex', '🎹', 'Keybed Knuckle', 'Pluck-and-Run Fugue', 'dash'],
    ['Tambourine Tumble', '🪇', 'Jingle-Jangle Jab', 'Tambourine Tempest', 'orbit'],
    ['Whistle Wicket', '🪈', 'Referee Rattle', 'Foul-Call Flash', 'projectile'],
    ['Metronome Mica', '⏲️', 'Tempo Tap', 'Allegro Afterimage', 'dash'],
    ['Lullaby Lark', '🎵', 'Snooze-Song Sweep', 'Dreamnote Drift', 'trap'],
    ['Feedback Frankie', '📢', 'Amp-Scream Elbow', 'Feedback Wall', 'guard'],
    ['Choirboy Coda', '🎤', 'Counterpoint Chop', 'Coda Crescendo', 'barrage'],
    ['Gong Goliath', '🛎️', 'Resonance Ram', 'Gong-Tide Wave', 'projectile'],
    ['Waltz Wisp', '🩰', 'Three-Step Thump', 'Waltz of the Wisp', 'dash'],
    ['Riddle Runa', '🧩', 'Puzzle-Box Pop', 'Unsolved Equation', 'trap'],
    ['Hexa Hazel', '🔯', 'Six-Sided Slice', 'Hexahedron Hex', 'projectile'],
    ['Tarot Tansy', '🃏', 'Card-Cut Cross', 'The Fool’s Flight', 'projectile'],
    ['Rune Rook', 'ᚱ', 'Runestone Rake', 'Runic Rebound', 'guard'],
    ['Cauldron Caper', '⚗️', 'Bubbling Bonk', 'Witching-Hour Whorl', 'orbit'],
    ['Mirage Miko', '🪞', 'Shimmer-Shift Shove', 'Threefold Mirage', 'dash'],
    ['Maskmaker Marn', '🎭', 'Persona Pummel', 'Many-Faced Feint', 'trap'],
    ['Lantern Ludo', '🏮', 'Wick-Whip', 'Foxfire Flare', 'projectile'],
    ['Threadbare Theo', '🧶', 'Seam-Ripper Swing', 'Patchwork Portal', 'trap'],
    ['Prism Pru', '🔷', 'Spectrum Sweep', 'Prismatic Split', 'barrage'],
    ['Broomstick Brio', '🧹', 'Straw-Bale Sweep', 'Midair Dust-Up', 'dash'],
    ['Jinx Junebug', '🐞', 'Bad-Luck Bugaboo', 'Unlucky Seven', 'trap'],
    ['Fable Fenn', '📖', 'Page-Turner Punch', 'Once Upon a Knockout', 'slam'],
    ['Mirrorball Miri', '🪩', 'Disco-Glint Jab', 'Mirrorball Mayhem', 'orbit'],
    ['Knotwitch Nori', '🪢', 'Bowline Bash', 'Impossible Knot', 'trap'],
    ['Dreamcatcher Dax', '🕸️', 'Nightmare Net', 'Dreamcatcher Drop', 'trap'],
    ['Hollow Hocus', '🪄', 'Sleeve-Trick Swipe', 'Now You See Me', 'dash'],
    ['Caveat Kiki', '🦇', 'Fine-Print Feint', 'Terms-and-Conditions Trap', 'trap'],
    ['Glyph Gilda', '✒️', 'Inkstroke Impale', 'Living Letterform', 'projectile'],
    ['Resonance Rhea', '📣', 'Reverb Reversal', 'Ricochet Refrain', 'barrage'],
    ['Stalagmite Stan', '🪨', 'Stone-Tooth Stomp', 'Cave-Point Crash', 'slam'],
    ['Geode Gemma', '💎', 'Crystal-Core Cross', 'Geode Geyser', 'projectile'],
    ['Cinderblock Cid', '🧱', 'Brick-Breaker Bash', 'Wall-to-Wall Wreck', 'slam'],
    ['Quartz Quibble', '⏳', 'Sandglass Sidekick', 'Time-Slip Shard', 'dash'],
    ['Flintlock Ferno', '🔥', 'Flint-Kick Flick', 'Spark-and-Scatter', 'projectile'],
    ['Cobalt Crawler', '🪲', 'Ore-Cart Overhand', 'Blue-Vein Burrow', 'dash'],
    ['Obsidian Oboe', '🪨', 'Blackglass Backspin', 'Obsidian Rain', 'barrage'],
    ['Fumarole Fizz', '🌋', 'Steam-Vent Shoulder', 'Geyser Grenade', 'projectile'],
    ['Crystal Crawler', '🕷️', 'Cave-Web Cross', 'Crystal-Cave Collapse', 'trap'],
    ['Mica Mender', '🪨', 'Flake-Off Flurry', 'Glitterstone Guard', 'guard'],
    ['Chamber Choir', '🗣️', 'Cavernous Clapback', 'Sevenfold Shout', 'barrage'],
    ['Scree Scully', '🪨', 'Gravel-Grind Grapple', 'Scree-Slide', 'dash'],
    ['Dripstone Dot', '💧', 'Stalactite Stinger', 'Slow-Drip Spear', 'projectile'],
    ['Dune Dancer', '🏜️', 'Sandstep Spin', 'Sirocco Waltz', 'orbit'],
    ['Compass Cactus', '🧭', 'Needle-North Nudge', 'Eight-Point Escape', 'dash'],
    ['Mirage Mesa', '🌵', 'Heat-Haze Hook', 'Tableland Teeter', 'trap'],
    ['Sundial Saffron', '☀️', 'Shadow-Hand Chop', 'Noon-Sun Nova', 'projectile'],
    ['Nomad Nettle', '🐪', 'Caravan-Kick', 'Dune-Buggy Dash', 'dash'],
    ['Oasis Oona', '🌴', 'Date-Palm Drop', 'Hidden-Spring Surge', 'leap'],
    ['Sandstorm Scribe', '📜', 'Scroll-Snap Strike', 'Blinding Script', 'barrage'],
    ['Canyon Crier', '🏞️', 'Cliffside Cry', 'Grand-Canyon Gust', 'projectile'],
    ['Mirage Mongoose', '🦦', 'Doppel-Dash', 'Vanishing Burrow', 'dash'],
    ['Saltflat Sal', '🧂', 'Whiteout Whack', 'Salt-Crystal Scatter', 'barrage'],
    ['Tumbleweed Tuck', '🌾', 'Drybrush Doubletake', 'Rolling Tumbletrap', 'dash'],
    ['Mesa Marmoset', '🐒', 'Butte-Bounce Bonk', 'Red-Rock Rebound', 'leap'],
    ['Pyramid Pasha', '🔺', 'Obelisk Overhand', 'Pharaoh’s Floorplan', 'trap'],
    ['Cairn Keeper', '🪨', 'Stacked-Stone Strike', 'Waymarker Ward', 'guard'],
    ['Mirage Moth', '🦋', 'Mirage-Moth Misdirect', 'Duskwing Decoy', 'trap'],
    ['Dustdevil Didi', '🌪️', 'Dustpan Drill', 'Miniature Monsoon', 'orbit'],
    ['Kiosk Kismet', '🛒', 'Token-Toss Tackle', 'Prize-Counter Pop', 'projectile'],
    ['Mailbox Mox', '📫', 'Postmark Pummel', 'Return-to-Sender', 'projectile'],
    ['Streetlight Sola', '🚦', 'Crosswalk Cross', 'Green-Light Getaway', 'dash'],
    ['Turnstile Tern', '🚪', 'Gatecheck Grapple', 'One-Way Whirl', 'orbit'],
    ['Puddle Pacer', '☔', 'Rainboot Rake', 'Splash-Zone Sprint', 'dash'],
    ['Chalkline Charlie', '🖍️', 'Sidewalk Scribble', 'Hopscotch Hazard', 'trap'],
    ['Manhole Marnie', '🕳️', 'Lid-Lift Lariat', 'Down-the-Drain Drop', 'slam'],
    ['Neon Noodle', '💡', 'Signboard Smack', 'Flicker-Fast Feint', 'dash'],
    ['Crosswalk Cricket', '🦗', 'Pedestrian Pounce', 'Walk-Signal Whistle', 'leap'],
    ['Taxi Taffy', '🚕', 'Farebox Feint', 'Meter-Running Rush', 'dash'],
    ['Pigeon Post', '🐦', 'Breadcrumb Backhand', 'Rooftop Relay', 'projectile'],
    ['Parkbench Puck', '🪑', 'Slat-Smack Sweep', 'Bench-Press Bounce', 'slam'],
    ['Fireplug Fenn', '🚒', 'Hydrant Headbutt', 'Redline Riptide', 'projectile'],
    ['Alleycat Alibi', '🐈', 'Dumpster-Dive Doubletap', 'Nine-Lives Shuffle', 'dash'],
    ['Ticket Ticker', '🎟️', 'Stub-Snip Strike', 'Last-Call Lunge', 'leap'],
    ['Snailmail Nell', '🐌', 'Envelope Elbow', 'Special-Delivery Spiral', 'projectile'],
    ['Umbrella Undertow', '☂️', 'Canopy-Clip Chop', 'Inside-Out Squall', 'guard'],
    ['Raccoon Ruckus', '🦝', 'Bin-Lid Bonk', 'Midnight Recycle', 'trap'],
    ['Velvet Vole', '🐁', 'Curtain-Call Claw', 'Velvet-Rope Vault', 'leap'],
    ['Kite Kestrel', '🪁', 'String-Snap Swing', 'Windcatcher Whip', 'projectile'],
    ['Molehill Mabel', '🐾', 'Subterranean Shoulder', 'Pop-Up Burrow', 'leap'],
    ['Wombat Wicket', '🦫', 'Tunnel-Tap Tackle', 'Wicket-Wall Wedge', 'guard'],
    ['Fennec Flick', '🦊', 'Ear-Flick Feint', 'Dune-Dancer Decoy', 'dash'],
    ['Pangolin Purl', '🦔', 'Scale-Mail Spin', 'Rolling Rind', 'orbit'],
    ['Axolotl Axle', '🦎', 'Gilled-Grapple', 'Regrowth Ripple', 'guard'],
    ['Mantis Mettle', '🦗', 'Scythe-Slice Snap', 'Praying Mantis Press', 'slam'],
    ['Hedgehog Hush', '🦔', 'Bristle-Bristle Bash', 'Quiet Quill Quake', 'slam'],
    ['Opossum Opal', '🐾', 'Playing-Possum Poke', 'Unconscious U-Turn', 'trap'],
    ['Chameleon Chord', '🦎', 'Color-Shift Chop', 'Camouflage Curtain', 'guard'],
    ['Cindercoil', '🦎', 'Magma-Tail Sweep', 'Caldera Crash', 'slam'],
    ['Zephyrnib', '🐇', 'Cloudskip Kick', 'Updraft Dash', 'dash'],
    ['Tideglass Wyrm', '🐉', 'Reefline Coil', 'Undertow Spiral', 'orbit'],
    ['Moonmote Moth', '🦋', 'Glimmerwing Flick', 'Lunarglow Volley', 'projectile'],
    ['Rubblejack', '🔨', 'Quarry Hammer', 'Faultstone Drop', 'slam'],
    ['Mossbyte', '🌿', 'Canopy Chop', 'Bramble Barrier', 'trap'],
    ['Cobalt Cubit', '🔷', 'Facet Jab', 'Prism Skip', 'dash'],
  ];

  const forms = [
    'beast', 'block', 'wing', 'orb', 'horn', 'serpent', 'sprout',
    'avian', 'shell', 'wheel', 'crystal', 'fungi', 'manta', 'jelly',
    'mech', 'puppet', 'aquatic', 'hero'
  ];
  const normalStyles = ['jab', 'heavy', 'sweep', 'lunge', 'launcher', 'reach', 'spin', 'jab', 'heavy', 'sweep', 'lunge', 'shot'];
  const seriesRanges = [
    { first: 0, last: 14, name: 'Starfall Circuit' },
    { first: 15, last: 29, name: 'Tidepool Legends' },
    { first: 30, last: 47, name: 'Mosswood Chronicles' },
    { first: 48, last: 74, name: 'Clockwork Carnival' },
    { first: 75, last: 96, name: 'Pantry Brawlers' },
    { first: 97, last: 116, name: 'Rhythm Rumble' },
    { first: 117, last: 134, name: 'Enchanted Almanac' },
    { first: 135, last: 149, name: 'Deepstone Delvers' },
    { first: 150, last: 164, name: 'Sunscorch Stories' },
    { first: 165, last: 179, name: 'Sidewalk Showdown' },
    { first: 180, last: 194, name: 'Wild Neighbors' },
    { first: 195, last: 198, name: 'Wildspark Atlas' },
    { first: 199, last: 201, name: 'Voxel Frontier' }
  ];
  const creatureProfiles = {
    195: { form: 'serpent', color: '#c2410c', accent: '#fde047', speed: 0.96, weight: 1.08, gravity: 0.46 },
    196: { form: 'wing', color: '#6366f1', accent: '#bae6fd', speed: 1.12, weight: 0.84, gravity: 0.4 },
    197: { form: 'aquatic', color: '#0f766e', accent: '#5eead4', speed: 0.98, weight: 1.02, gravity: 0.43 },
    198: { form: 'manta', color: '#4c1d95', accent: '#f0abfc', speed: 1.04, weight: 0.9, gravity: 0.39 }
  };
  const voxelProfiles = {
    199: { form: 'voxel', color: '#92400e', accent: '#fbbf24', speed: 0.9, weight: 1.16, gravity: 0.5, series: 'Voxel Frontier', voxelStyle: 0 },
    200: { form: 'voxel', color: '#166534', accent: '#bef264', speed: 1.02, weight: 0.94, gravity: 0.44, series: 'Voxel Frontier', voxelStyle: 1 },
    201: { form: 'voxel', color: '#1e3a8a', accent: '#67e8f9', speed: 1.12, weight: 0.86, gravity: 0.4, series: 'Voxel Frontier', voxelStyle: 2 }
  };
  const fighters = rows.map(([name, glyph, normalMove, specialMove, specialType], index) => {
    const creature = creatureProfiles[index] || voxelProfiles[index];
    const hue = (index * 137.508) % 360;
    const id = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    const rangedAlternatives = ['grapple', 'counter', 'buff', 'multiHit', 'dash', 'leap', 'slam', 'orbit', 'guard', 'trap'];
    const variedSpecialType = !creature && ['projectile', 'barrage'].includes(specialType) &&
      index % (specialType === 'projectile' ? 5 : 4) !== 0
      ? rangedAlternatives[(index * 7 + Math.floor(index / 3)) % rangedAlternatives.length]
      : specialType;
    return {
      id,
      name,
      glyph,
      width: 52 + index % 5 * 4,
      height: 58 + index % 4 * 5,
      jumps: 2 + index % 4,
      color: creature?.color || `hsl(${hue} 72% 54%)`,
      accent: creature?.accent || `hsl(${(hue + 62) % 360} 88% 76%)`,
      form: creature?.form || forms[(index * 7 + Math.floor(index / 3)) % forms.length],
      speed: creature?.speed || 0.84 + (index % 9) * 0.045,
      weight: creature?.weight || 0.78 + (index % 7) * 0.09,
      gravity: creature?.gravity || 0.38 + (index % 5) * 0.035,
      original: true,
      identity: index + 1,
      series: creature?.series || seriesRanges.find(({ first, last }) => index >= first && index <= last).name,
      voxelStyle: creature?.voxelStyle,
      appendage: index % 10,
      crest: (index * 7) % 10,
      formStyle: index % 13,
      attackStyle: (index * 5) % 17,
      motionRate: 0.78 + (index % 8) * 0.09,
      normalMove,
      normalStyle: normalStyles[index % normalStyles.length],
      specialMove,
      specialType: variedSpecialType,
      projectileStyle: index % 8,
      projectileSpeed: 8 + index % 5,
      projectileRadius: 10 + index % 8
    };
  });

  if (fighters.length !== 202 || new Set(fighters.map((fighter) => fighter.id)).size !== 202) {
    throw new Error('The extra fighter catalog must contain 202 uniquely named fighters.');
  }
  return fighters;
})();


const CHARACTERS = {
  jigglypuff: { name: 'Jigglypuff', series: 'Pokémon', glyph: '🎤', width: 58, height: 58, jumps: 5, color: '#f472b6', accent: '#db2777', form: 'orb', speed: 1, weight: 0.76 },
  steve: { name: 'Steve', series: 'Minecraft', glyph: '🧱', width: 52, height: 68, jumps: 2, color: '#fcd34d', accent: '#0284c7', form: 'block', speed: 1, weight: 1.18 },
  mario: { name: 'Mario', series: 'Super Mario', glyph: '🍄', width: 52, height: 68, jumps: 2, color: '#ef4444', accent: '#1d4ed8', form: 'hero', speed: 1, weight: 1.02 },
  pikachu: { name: 'Pikachu', series: 'Pokémon', glyph: '⚡', width: 58, height: 62, jumps: 3, color: '#facc15', accent: '#a16207', form: 'beast', speed: 1, weight: 0.84 },
  'gyro-bot': { name: 'Orbit, the Gyro Bot', series: 'Orbit Workshop', glyph: '🪀', width: 68, height: 78, jumps: 2, color: '#0f766e', accent: '#fb923c', form: 'mech', speed: 0.98, weight: 1.04, gravity: 0.44 },
  morrow: {
    name: 'Morrow, the Glasswing',
    series: 'Glasswing Tales',
    glyph: '🦋',
    width: 76,
    height: 78,
    jumps: 4,
    color: '#5eead4',
    accent: '#c084fc',
    speed: 1.08,
    weight: 0.88,
    gravity: 0.4,
    projectile: true,
    projectileSpeed: 10,
    projectileRadius: 13,
    projectileStyle: 3,
    projectileRotation: 0.04
  }
};

for (const fighter of EXTRA_FIGHTERS) {
  CHARACTERS[fighter.id] = fighter;
}
CHARACTERS['veyra-stormglass'] = {
  id: 'veyra-stormglass',
  name: 'Veyra Stormglass',
  series: 'Stormglass Saga',
  glyph: '⚔️',
  width: 66,
  height: 74,
  jumps: 2,
  color: '#334155',
  accent: '#67e8f9',
  form: 'hero',
  speed: 0.96,
  weight: 1.08,
  gravity: 0.46,
  original: true,
  identity: 196,
  attackStyle: 196,
  motionRate: 1,
  weapon: 'stormblade',
  normalMove: 'Tideglass Cut',
  specialMove: 'Tempest Arc',
  specialType: 'projectile',
  projectileStyle: 5,
  projectileSpeed: 11,
  projectileRadius: 14
};
CHARACTERS['kael-cinderwake'] = {
  id: 'kael-cinderwake',
  name: 'Kael Cinderwake',
  series: 'Stormglass Saga',
  glyph: '🔥',
  width: 70,
  height: 78,
  jumps: 2,
  color: '#7f1d1d',
  accent: '#fb923c',
  form: 'hero',
  speed: 0.88,
  weight: 1.18,
  gravity: 0.5,
  original: true,
  identity: 197,
  attackStyle: 197,
  motionRate: 0.82,
  weapon: 'ember-greatsword',
  combatKit: 'cinder',
  normalMove: 'Furnace Edge',
  specialMove: 'Faultline Flare'
};
CHARACTERS['sable-quicksteel'] = {
  id: 'sable-quicksteel',
  name: 'Sable Quicksteel',
  series: 'Stormglass Saga',
  glyph: '🗡️',
  width: 58,
  height: 70,
  jumps: 3,
  color: '#312e81',
  accent: '#c4b5fd',
  form: 'hero',
  speed: 1.16,
  weight: 0.88,
  gravity: 0.42,
  original: true,
  identity: 198,
  attackStyle: 198,
  motionRate: 1.22,
  weapon: 'twin-edges',
  combatKit: 'quicksteel',
  normalMove: 'Crosswind Pair',
  specialMove: 'Afterimage Step'
};
CHARACTERS['tamsin-runevale'] = {
  id: 'tamsin-runevale',
  name: 'Tamsin Runevale',
  series: 'Stormglass Saga',
  glyph: '📖',
  width: 62,
  height: 76,
  jumps: 2,
  color: '#115e59',
  accent: '#f0abfc',
  form: 'hero',
  speed: 0.94,
  weight: 0.98,
  gravity: 0.45,
  original: true,
  identity: 199,
  attackStyle: 199,
  motionRate: 0.96,
  weapon: 'rune-codex',
  combatKit: 'runevale',
  normalMove: 'Margin Notes',
  specialMove: 'Boundless Index'
};
CHARACTERS.sam = {
  id: 'sam',
  name: 'Sam',
  series: 'Original Fighters',
  glyph: '🛡️',
  width: 66,
  height: 76,
  jumps: 2,
  color: '#155e75',
  accent: '#fb923c',
  form: 'mech',
  speed: 0.98,
  weight: 1.06,
  gravity: 0.45,
  original: true,
  identity: 213,
  attackStyle: 213,
  motionRate: 0.96,
  weapon: 'prism-cannon',
  combatKit: 'sam',
  series: 'Starward Vanguard',
  normalMove: 'Pulse Gauntlet',
  normalStyle: 'heavy',
  specialMove: 'Charge Shot'
};
CHARACTERS['dark-sam'] = {
  ...CHARACTERS.sam,
  id: 'dark-sam',
  name: 'Dark Sam',
  glyph: '🌑',
  color: '#312e81',
  accent: '#a78bfa'
};
CHARACTERS['space-dragon'] = {
  id: 'space-dragon',
  name: 'Space Dragon',
  series: 'Starward Vanguard',
  glyph: '🐉',
  width: 82,
  height: 88,
  jumps: 2,
  color: '#4c1d95',
  accent: '#f97316',
  form: 'space-dragon',
  speed: 0.94,
  weight: 1.18,
  gravity: 0.48,
  original: true,
  identity: 215,
  attackStyle: 215,
  motionRate: 0.84,
  combatKit: 'space-dragon',
  normalMove: 'Comet Claw',
  normalStyle: 'lunge',
  specialMove: 'Meteor Snatch'
};

const CHARACTER_IDS = Object.keys(CHARACTERS);
if (CHARACTER_IDS.length !== 215) {
  throw new Error(`Expected 215 fighters, found ${CHARACTER_IDS.length}`);
}

// Web Audio API Synthesizer
let audioCtx = null;
let audioEnabled = true;
let musicTimer = null;
let musicStep = 0;
const MUSIC_TEMPO = 112;
const MUSIC_STEP_MS = 60_000 / MUSIC_TEMPO / 4;
const MUSIC_SCALE = [0, 2, 4, 7, 9, 12, 14, 16, 19, 21];
const MUSIC_LEAD = [
  7, null, 9, null, 7, 4, 2, null, 4, null, 7, null, 9, 7, 4, null,
  5, null, 7, null, 9, 7, 5, null, 4, null, 2, null, 4, 7, 9, null,
  9, null, 8, null, 7, 4, 5, null, 7, null, 9, null, 7, 5, 4, null,
  5, null, 7, null, 9, 7, 5, null, 4, null, 2, null, 4, 2, 0, null
];
const MUSIC_CHORDS = [
  { root: 48, quality: [0, 4, 7] },
  { root: 45, quality: [0, 3, 7] },
  { root: 41, quality: [0, 4, 7] },
  { root: 43, quality: [0, 4, 7] }
];

function midiFrequency(note) {
  return 440 * 2 ** ((note - 69) / 12);
}

function initAudio() {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    audioCtx = new AudioContextClass();
    startMusicLoop();
  } else if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
}

function playTone(freq, type, duration, vol = 0.15) {
  if (!audioEnabled || !audioCtx) return;
  try {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
    gain.gain.setValueAtTime(vol, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + duration);
  } catch (err) {}
}

function playSound(type) {
  initAudio();
  if (!audioEnabled || !audioCtx) return;
  if (type === 'hit') {
    playTone(180, 'square', 0.1, 0.18);
    setTimeout(() => playTone(90, 'sawtooth', 0.12, 0.2), 30);
  } else if (type === 'rest') {
    playTone(520, 'sine', 0.08, 0.25);
    setTimeout(() => playTone(880, 'triangle', 0.25, 0.3), 40);
    setTimeout(() => playTone(110, 'sawtooth', 0.4, 0.35), 100);
  } else if (type === 'swing') {
    playTone(320, 'triangle', 0.08, 0.08);
  } else if (type === 'jump') {
    playTone(300, 'sine', 0.1, 0.12);
  } else if (type === 'ko') {
    playTone(220, 'sawtooth', 0.2, 0.25);
    setTimeout(() => playTone(110, 'square', 0.4, 0.3), 100);
  }
}

function startMusicLoop() {
  if (musicTimer) clearInterval(musicTimer);
  musicTimer = setInterval(() => {
    if (!audioEnabled || !audioCtx || !gameRunning) return;
    const step = musicStep % 16;
    const bar = Math.floor(musicStep / 16);
    const chord = MUSIC_CHORDS[bar % MUSIC_CHORDS.length];

    if (step === 0) {
      for (const interval of chord.quality) {
        playTone(midiFrequency(chord.root + 24 + interval), 'triangle', 0.48, 0.014);
      }
    }
    if (step % 4 === 0) {
      playTone(midiFrequency(chord.root), 'triangle', 0.2, 0.075);
      playTone(step === 0 || step === 8 ? 62 : 150, 'sine', 0.11, step === 0 || step === 8 ? 0.075 : 0.026);
    } else if (step % 2 === 1) {
      playTone(1500, 'sine', 0.025, 0.008);
    }
    if (step === 4 || step === 12) {
      playTone(196, 'triangle', 0.09, 0.035);
      playTone(392, 'sine', 0.045, 0.012);
    }

    const lead = MUSIC_LEAD[musicStep % MUSIC_LEAD.length];
    if (lead !== null) {
      playTone(midiFrequency(60 + MUSIC_SCALE[lead]), 'triangle', 0.19, 0.05);
    }
    musicStep++;
  }, MUSIC_STEP_MS);
}

function makeFighter(x, y, dir, char) {
  const character = CHARACTERS[char];
  return {
    x, y, vx: 0, vy: 0,
    facing: dir, char,
    percent: 0, stocks: MAX_STOCKS,
    invincible: 60, onGround: false,
    action: 'idle', attackFrame: 0, attack: null, hasHit: false,
    guard: 0, guardCounterDamage: 0,
    jumpsLeft: character.jumps,
    speed: character.speed,
    weight: character.weight || 1,
    gravity: character.gravity || 0.48,
    jumpLock: false, attackLock: false, specialLock: false,
    hitstun: 0,
    powerBoost: 0,
    gyroActive: false,
    hasGyro: false,
    chargeFrames: 0,
    storedCharge: 0,
    smashChargeFrames: 0,
    smashCharging: false,
    grabTarget: false,
    grabbedBy: false,
    grabTicks: 0,
    grabEscape: 0,
    grabMashInputs: {}
  };
}

function getStageSpawnPoints() {
  const ground = selectedStage.ground;
  return [
    { x: ground.x + ground.w * 0.2, y: ground.y + 50 },
    { x: ground.x + ground.w * 0.8, y: ground.y + 50 }
  ];
}

const initialSpawns = getStageSpawnPoints();
let p1 = makeFighter(initialSpawns[0].x, initialSpawns[0].y, 1, 'jigglypuff');
let p2 = makeFighter(initialSpawns[1].x, initialSpawns[1].y, -1, 'steve');

const TIER_ORDER = ['S', 'A', 'B', 'C', 'D', 'NEW'];
const TIER_SIMULATION_MATCHES = 23008;
const TIER_SIMULATION_PAIRS = 11504;
const TIER_SIMULATION_TIMEOUTS = 9156;
const SIMULATED_FIGHTER_RESULTS = {
  'abyssal-ada': [0.59009, 222],
  'acorn-atlas': [0.59069, 204],
  'alleycat-alibi': [0.65848, 224],
  'aster-vale': [0.76157, 216],
  'aurora-axle': [0.62028, 212],
  'axolotl-axle': [0.625, 208],
  'barnacle-buck': [0.55909, 220],
  'bassline-bex': [0.42361, 216],
  'blueprint-blue': [0.28261, 230],
  'boba-bubbles': [0.66295, 224],
  'bolt-biscuit': [0.67308, 208],
  'bonsai-bix': [0.46429, 210],
  'bramble-bea': [0.33182, 220],
  'brinebell': [0.67202, 218],
  'broomstick-brio': [0.47381, 210],
  'button-barlow': [0.52455, 224],
  'cairn-keeper': [0.69159, 214],
  'canyon-crier': [0.5771, 214],
  'captain-kelp': [0.25476, 210],
  'cattail-cricket': [0.675, 220],
  'cauldron-caper': [0.50652, 230],
  'caveat-kiki': [0.21359, 206],
  'cedar-cipher': [0.55134, 224],
  'cello-cinder': [0.24048, 210],
  'chalkline-charlie': [0.47588, 228],
  'chamber-choir': [0.66591, 220],
  'chameleon-chord': [0.52412, 228],
  'chime-chandra': [0.48469, 196],
  'choirboy-coda': [0.4838, 216],
  'cinderblock-cid': [0.57767, 206],
  'cindercoil': [0.61239, 218],
  'cinnamon-cyclone': [0.56651, 218],
  'clover-coil': [0.63915, 212],
  'cobalt-crawler': [0.55973, 226],
  'cobalt-cubit': [0.59951, 206],
  'cocoa-comet': [0.53066, 212],
  'comet-kestrel': [0.61384, 224],
  'compass-cactus': [0.625, 224],
  'copper-kettle': [0.74083, 218],
  'coral-caper': [0.36947, 226],
  'crankshaft-cora': [0.44554, 202],
  'crosswalk-cricket': [0.47304, 204],
  'crumble-crumb': [0.3701, 204],
  'crusty-crouton': [0.60817, 208],
  'crystal-crawler': [0.34009, 222],
  'cymbal-saffy': [0.58654, 208],
  'dreamcatcher-dax': [0.33559, 222],
  'dripstone-dot': [0.49029, 206],
  'dumpling-dynamo': [0.46458, 240],
  'dune-dancer': [0.57407, 216],
  'dustdevil-didi': [0.55042, 238],
  'eclipse-ember': [0.49769, 216],
  'fable-fenn': [0.55505, 218],
  'feedback-frankie': [0.55227, 220],
  'fennec-flick': [0.39113, 248],
  'fern-fable': [0.52857, 210],
  'fireplug-fenn': [0.53704, 216],
  'flintlock-ferno': [0.61136, 220],
  'fossil-fern': [0.48109, 238],
  'fritter-fox': [0.53972, 214],
  'fumarole-fizz': [0.44369, 222],
  'gadget-grommet': [0.5, 228],
  'gasket-gale': [0.45213, 188],
  'geode-gemma': [0.31311, 206],
  'gingersnap-gus': [0.5303, 198],
  'glyph-gilda': [0.78261, 230],
  'gong-goliath': [0.62295, 244],
  'gravity-gable': [0.18632, 212],
  'guppy-gusto': [0.31068, 206],
  'gyro-bot': [0.64224, 232],
  'harmonica-hush': [0.49505, 202],
  'harpsichord-hex': [0.51699, 206],
  'hedgehog-hush': [0.50721, 208],
  'hexa-hazel': [0.53037, 214],
  'hollow-hocus': [0.51271, 236],
  'hollow-huckle': [0.46739, 230],
  'jigglypuff': [0.475, 220],
  'jinx-junebug': [0.40046, 216],
  'juniper-jinx': [0.43807, 218],
  'kael-cinderwake': [0.61298, 208],
  'kaleido-kit': [0.49324, 222],
  'kazoo-kestrel': [0.6348, 204],
  'kelpcoil-kito': [0.31696, 224],
  'kiln-kid': [0.43137, 204],
  'kiosk-kismet': [0.52857, 210],
  'kite-kestrel': [0.42523, 214],
  'knotwitch-nori': [0.46711, 228],
  'lantern-ludo': [0.27294, 218],
  'lanternfish-lux': [0.53095, 210],
  'latchkey-lou': [0.61869, 198],
  'looma-spindle': [0.4823, 226],
  'lullaby-lark': [0.26359, 184],
  'lunar-lumen': [0.54286, 210],
  'mailbox-mox': [0.41239, 234],
  'manhole-marnie': [0.48544, 206],
  'mantis-mettle': [0.37963, 216],
  'marble-millie': [0.68873, 204],
  'marimba-moth': [0.36343, 216],
  'marina-moth': [0.50877, 228],
  'mario': [0.60981, 214],
  'maskmaker-marn': [0.37245, 196],
  'meringue-mags': [0.34016, 244],
  'mesa-marmoset': [0.66304, 230],
  'meteor-mallow': [0.44397, 232],
  'metronome-mica': [0.57883, 222],
  'mica-mender': [0.61386, 202],
  'mira-mantaray': [0.38366, 202],
  'mirage-mesa': [0.28066, 212],
  'mirage-miko': [0.59298, 242],
  'mirage-mongoose': [0.50225, 222],
  'mirage-moth': [0.33894, 208],
  'mirrorball-miri': [0.62955, 220],
  'miso-meteor': [0.54955, 222],
  'molehill-mabel': [0.51887, 212],
  'moonmote-moth': [0.59069, 204],
  'morrow': [0.53505, 214],
  'moss-morrow': [0.57917, 240],
  'mossbyte': [0.34524, 210],
  'moxie-magnet': [0.21818, 220],
  'mushroom-mettle': [0.55275, 218],
  'nebula-nix': [0.51535, 228],
  'neon-noodle': [0.47857, 210],
  'nomad-nettle': [0.43319, 232],
  'noodle-noodleton': [0.76591, 220],
  'oasis-oona': [0.59, 200],
  'obsidian-oboe': [0.46272, 228],
  'olive-overture': [0.45413, 218],
  'opossum-opal': [0.30357, 224],
  'orbit-oona': [0.5925, 200],
  'orchid-oddity': [0.5042, 238],
  'origami-olli': [0.55894, 246],
  'pancake-paladin': [0.4881, 210],
  'pangolin-purl': [0.49279, 208],
  'parkbench-puck': [0.46171, 222],
  'patch-panel': [0.56313, 198],
  'pebble-puffer': [0.62019, 208],
  'pendulum-pip': [0.49561, 228],
  'pepper-pippa': [0.46711, 228],
  'pesto-prowler': [0.27381, 210],
  'pickle-puckett': [0.29798, 198],
  'pigeon-post': [0.40708, 226],
  'pikachu': [0.56591, 220],
  'pinecone-pogo': [0.40714, 210],
  'piston-poppy': [0.41337, 202],
  'pollen-penny': [0.29208, 202],
  'prism-pru': [0.60049, 204],
  'puddle-pacer': [0.60514, 214],
  'pulsar-puck': [0.50708, 212],
  'pyramid-pasha': [0.30097, 206],
  'quartz-quibble': [0.55198, 202],
  'quasar-quill': [0.23198, 222],
  'raccoon-ruckus': [0.28017, 232],
  'radish-rumble': [0.37136, 206],
  'resonance-rhea': [0.62383, 214],
  'riddle-runa': [0.35714, 224],
  'rivet-rook': [0.51364, 220],
  'rubberband-rex': [0.38235, 204],
  'rubblejack': [0.47566, 226],
  'rune-rook': [0.68973, 224],
  'sable-quicksteel': [0.52455, 224],
  sam: [0, 0],
  'dark-sam': [0, 0],
  'space-dragon': [0, 0],
  'saffron-sizzle': [0.58784, 222],
  'saltflat-sal': [0.61283, 226],
  'sandstorm-scribe': [0.55046, 218],
  'saxophone-sid': [0.53009, 216],
  'scree-scully': [0.42437, 238],
  'siren-silt': [0.45682, 220],
  'skipper-shoal': [0.375, 248],
  'snailmail-nell': [0.47837, 208],
  'solder-sprite': [0.27982, 218],
  'solstice-spark': [0.60052, 194],
  'sprocket-sable': [0.56364, 220],
  'stalagmite-stan': [0.56364, 220],
  'steve': [0.69348, 230],
  'streetlight-sola': [0.49773, 220],
  'sundew-suki': [0.34579, 214],
  'sundial-saffron': [0.41284, 218],
  'sushi-swerve': [0.48585, 212],
  'taffy-tangle': [0.26802, 222],
  'tambourine-tumble': [0.4351, 208],
  'tamsin-runevale': [0.47706, 218],
  'tarot-tansy': [0.44471, 208],
  'taxi-taffy': [0.58186, 226],
  'telescope-tavi': [0.45833, 216],
  'thistle-tuck': [0.3799, 204],
  'threadbare-theo': [0.45093, 214],
  'ticket-ticker': [0.59848, 198],
  'tideglass-wyrm': [0.43805, 226],
  'tidepool-tilda': [0.36591, 220],
  'timpani-taro': [0.65278, 216],
  'tin-can-tessa': [0.51974, 228],
  'tinker-tallow': [0.61449, 214],
  'tumble-toadstool': [0.53738, 214],
  'tumbleweed-tuck': [0.52027, 222],
  'turnip-tuba': [0.59135, 208],
  'turnstile-tern': [0.46495, 214],
  'turntable-trix': [0.52455, 224],
  'umbrella-undertow': [0.67117, 222],
  'velcro-vandal': [0.22391, 230],
  'velvet-vole': [0.48284, 204],
  'veyra-stormglass': [0.76563, 224],
  'vinegaroon-vee': [0.49115, 226],
  'viola-voltage': [0.52826, 230],
  'void-vesper': [0.39183, 208],
  'waffle-warden': [0.35714, 224],
  'waltz-wisp': [0.46396, 222],
  'whirlpool-wren': [0.51961, 204],
  'whisker-wrench': [0.37832, 226],
  'whistle-wicket': [0.74779, 226],
  'willow-whistle': [0.73485, 198],
  'wombat-wicket': [0.74065, 214],
  'zenith-zori': [0.78689, 244],
  'zephyrnib': [0.47917, 216],
};

if (Object.keys(SIMULATED_FIGHTER_RESULTS).length !== CHARACTER_IDS.length ||
    CHARACTER_IDS.some((id) => {
      const result = SIMULATED_FIGHTER_RESULTS[id];
      return !result || !Number.isFinite(result[0]) || !Number.isInteger(result[1]) ||
        (['sam', 'dark-sam', 'space-dragon'].includes(id) ? result[1] !== 0 : result[1] < 1);
    })) {
  throw new Error('Simulated tier results must cover every roster fighter exactly once.');
}

function getFighterTiers() {
  const ranked = CHARACTER_IDS.map((id) => ({
    id,
    character: CHARACTERS[id],
    winRate: SIMULATED_FIGHTER_RESULTS[id][0],
    matches: SIMULATED_FIGHTER_RESULTS[id][1]
  })).sort((a, b) => b.winRate - a.winRate || a.character.name.localeCompare(b.character.name));
  const tiers = Object.fromEntries(TIER_ORDER.map((tier) => [tier, []]));
  for (const fighter of ranked) {
    const tier = fighter.matches === 0 ? 'NEW'
      : fighter.winRate >= 0.65 ? 'S'
      : fighter.winRate >= 0.55 ? 'A'
        : fighter.winRate >= 0.45 ? 'B'
          : fighter.winRate >= 0.3 ? 'C' : 'D';
    tiers[tier].push(fighter);
  }
  return tiers;
}

const percent1 = document.getElementById('percent1');
const percent2 = document.getElementById('percent2');
const stocks1 = document.getElementById('stocks1');
const stocks2 = document.getElementById('stocks2');
const label1 = document.querySelector('.hud-p1 .fighter-label');
const label2 = document.querySelector('.hud-p2 .fighter-label');
const avatar1 = document.querySelector('.hud-p1 .fighter-avatar');
const avatar2 = document.querySelector('.hud-p2 .fighter-avatar');
const banner = document.getElementById('match-banner');
const gfx = document.getElementById('gfx');
const ctx = gfx.getContext('2d');
const btnAudio = document.getElementById('btn-audio');
const audioIcon = document.getElementById('audio-icon');
const audioText = document.getElementById('audio-text');
const characterSelect = document.getElementById('character-select');
const stageSelectScreen = document.getElementById('stage-select-screen');
const tierListScreen = document.getElementById('tier-list-screen');
const fighterGrid = document.getElementById('fighter-grid');
const characterSearch = document.getElementById('character-search');
const stageGrid = document.getElementById('stage-grid');
const tierListGrid = document.getElementById('tier-list-grid');
const tierListMethod = document.getElementById('tier-list-method');
const tierListOpen = document.getElementById('tier-list-open');
const tierListClose = document.getElementById('tier-list-close');
const selectedStageDescription = document.getElementById('selected-stage-description');
const backToFighters = document.getElementById('back-to-fighters');
const fightNow = document.getElementById('fight-now');
const p1SelectionStatus = document.getElementById('p1-selection-status');
const p2SelectionStatus = document.getElementById('p2-selection-status');
const p2SelectionTitle = document.getElementById('p2-selection-title');
const p2SelectionHelp = document.getElementById('p2-selection-help');
const selectSubtitle = document.getElementById('select-subtitle');
const gameModeButtons = document.querySelectorAll('[data-game-mode]');
const onlineControls = document.getElementById('online-controls');
const onlineHostControls = document.getElementById('online-host-controls');
const onlineGuestControls = document.getElementById('online-guest-controls');
const createOnlineRoom = document.getElementById('create-online-room');
const onlineRoomCodeInput = document.getElementById('online-room-code');
const joinOnlineRoom = document.getElementById('join-online-room');
const onlineStatus = document.getElementById('online-status');
const selectCpuFighter = document.getElementById('select-cpu-fighter');
const p1Hint = document.getElementById('p1-hint');
const p2Hint = document.getElementById('p2-hint');
const p1SelectionTitle = document.querySelector('.p1-player strong');
const lockP1 = document.getElementById('lock-p1');
const lockP2 = document.getElementById('lock-p2');
const startMatch = document.getElementById('start-match');
const winScreen = document.getElementById('win-screen');
const winnerPlayer = document.getElementById('winner-player');
const winnerName = document.getElementById('winner-name');
const winnerAvatar = document.getElementById('winner-avatar');
const backToSelect = document.getElementById('back-to-select');
const SELECT_GRID_COLUMNS = 10;
let visibleCharacterIds = CHARACTER_IDS.slice();
let stageCursorIndex = 0;
const cursorIndices = { p1: 0, p2: 1 };
const playerLocked = { p1: false, p2: false };
let lastCursorPlayer = 'p1';

function canEnterStageSelect() {
  if (gameMode === 'online-host') {
    return playerLocked.p1 && online.peerConnected && online.remoteReady;
  }
  if (gameMode === 'online-guest') return false;
  return playerLocked.p1 &&
    (gameMode === 'one-player' || playerLocked.p2) &&
    visibleCharacterIds.length > 0;
}

function setGameMode(mode) {
  if (!['one-player', 'two-player', 'online-host', 'online-guest'].includes(mode)) {
    throw new Error(`Unknown game mode: ${mode}`);
  }
  if (online.socket && mode !== gameMode) disconnectOnline();
  gameMode = mode;
  playerLocked.p1 = false;
  playerLocked.p2 = false;
  lastCursorPlayer = mode === 'online-guest' ? 'p2' : 'p1';
  const onlineMode = mode === 'online-host' || mode === 'online-guest';
  onlineControls.hidden = !onlineMode;
  onlineHostControls.hidden = mode !== 'online-host';
  onlineGuestControls.hidden = mode !== 'online-guest';
  onlineStatus.textContent = onlineMode ? 'Create or join a room to play online.' : '';
  characterSearch.disabled = onlineMode;
  if (onlineMode && characterSearch.value) {
    characterSearch.value = '';
    populateCharacterGrid('');
  }
  if (!onlineMode) onlineStatus.textContent = '';
  for (const button of gameModeButtons) {
    button.setAttribute('aria-pressed', String(button.dataset.gameMode === gameMode));
  }
  updateCharacterSelectUI();
}

function startNewMatch() {
  if (!canEnterStageSelect()) return;
  const fighter1 = visibleCharacterIds[cursorIndices.p1];
  const fighter2 = visibleCharacterIds[cursorIndices.p2];
  if (!fighter1 || !fighter2) return;
  if (gameMode === 'online-host') {
    const sent = sendOnlineMessage({
      type: 'start',
      fighter1,
      fighter2,
      stageId: selectedStage.id
    });
    if (!sent) return;
  }
  beginMatch(fighter1, fighter2, selectedStage);
}

function beginMatch(fighter1, fighter2, stage) {
  selectedStage = stage;
  initAudio();
  musicStep = 0;
  cpuFrame = 0;
  onlineFrame = 0;
  online.remoteKeys = {};
  for (const key of Object.keys(keys)) keys[key] = false;
  const [spawn1, spawn2] = getStageSpawnPoints();
  p1 = makeFighter(spawn1.x, spawn1.y, 1, fighter1);
  p2 = makeFighter(spawn2.x, spawn2.y, -1, fighter2);
  label1.textContent = CHARACTERS[p1.char].name.toUpperCase();
  label2.textContent = CHARACTERS[p2.char].name.toUpperCase();
  p1Hint.textContent = gameMode === 'online-guest'
    ? 'ONLINE · Host controls Player 1'
    : 'WASD move · W aim up · Space jump · F attack · G + direction special · mash to escape grabs';
  p2Hint.textContent = gameMode === 'one-player'
    ? 'CPU · Tournament move-aware AI'
    : gameMode === 'online-host'
      ? 'ONLINE · Opponent controls Player 2'
      : gameMode === 'online-guest'
        ? 'IJKL/arrows · Right Shift jump · O attack · P + direction special · mash to escape grabs'
        : 'IJKL/arrows · I aim up · Right Shift jump · O attack · P + direction special · mash to escape grabs';
  setFighterAvatar(avatar1, p1.char);
  setFighterAvatar(avatar2, p2.char);
  percent1.textContent = '0%';
  percent2.textContent = '0%';
  banner.textContent = '';
  particles = [];
  projectiles = [];
  gameRunning = true;
  characterSelect.hidden = true;
  stageSelectScreen.hidden = true;
  winScreen.hidden = true;
  updateStockUI();
}

function connectOnline(action, roomCode = '') {
  if (online.socket && online.socket.readyState < WebSocket.CLOSING) {
    onlineStatus.textContent = 'Already connected to a room.';
    return;
  }
  const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
  const socket = new WebSocket(`${protocol}//${window.location.host}/ws`);
  online.socket = socket;
  onlineStatus.textContent = 'Connecting to the online room server...';

  socket.addEventListener('open', () => {
    socket.send(JSON.stringify(action === 'create'
      ? { type: 'create-room' }
      : { type: 'join-room', roomCode }));
  });
  socket.addEventListener('message', (event) => {
    let message;
    try {
      message = JSON.parse(event.data);
    } catch {
      onlineStatus.textContent = 'Received an invalid message from the room server.';
      return;
    }
    handleOnlineMessage(message);
  });
  socket.addEventListener('error', () => {
    onlineStatus.textContent = 'Could not connect. Start the online server and try again.';
  });
  socket.addEventListener('close', () => {
    if (online.socket !== socket) return;
    const hadJoinedRoom = Boolean(online.role);
    online.socket = null;
    online.role = null;
    online.roomCode = '';
    online.peerConnected = false;
    online.remoteReady = false;
    online.remoteKeys = {};
    if (gameRunning) {
      gameRunning = false;
      banner.textContent = 'Online connection lost.';
    }
    onlineStatus.textContent = hadJoinedRoom
      ? 'Disconnected from the online room.'
      : 'Could not join the room. Check the server and invite code.';
    updateCharacterSelectUI();
  });
}

function disconnectOnline() {
  const socket = online.socket;
  online.socket = null;
  online.role = null;
  online.roomCode = '';
  online.peerConnected = false;
  online.remoteFighterId = null;
  online.remoteReady = false;
  online.remoteKeys = {};
  if (socket && socket.readyState < WebSocket.CLOSING) socket.close();
}

function sendOnlineMessage(message) {
  if (!online.socket || online.socket.readyState !== WebSocket.OPEN) {
    onlineStatus.textContent = 'Not connected to an online room.';
    return false;
  }
  if (online.socket.bufferedAmount > 128_000) {
    onlineStatus.textContent = 'Connection is too slow; waiting for the opponent.';
    return false;
  }
  online.socket.send(JSON.stringify(message));
  return true;
}

function setRemoteSelection(player, fighterId, isReady) {
  if (!CHARACTERS[fighterId]) {
    onlineStatus.textContent = 'The opponent selected an unknown fighter.';
    return;
  }
  const visibleIndex = visibleCharacterIds.indexOf(fighterId);
  if (visibleIndex < 0) {
    onlineStatus.textContent = 'The opponent selected a fighter that is not available.';
    return;
  }
  const localPlayer = online.role === 'host' ? 'p1' : 'p2';
  const cursorPlayer = player === 1 ? 'p1' : 'p2';
  if (cursorPlayer === localPlayer) return;
  cursorIndices[cursorPlayer] = visibleIndex;
  playerLocked[cursorPlayer] = isReady;
  online.remoteFighterId = fighterId;
  online.remoteReady = isReady;
  updateCharacterSelectUI();
}

function sendSelectionUpdate() {
  if (online.role === 'host') {
    const fighterId = visibleCharacterIds[cursorIndices.p1];
    if (fighterId) {
      sendOnlineMessage({
        type: 'host-selection',
        fighterId,
        ready: playerLocked.p1
      });
    }
  } else if (online.role === 'guest') {
    const fighterId = visibleCharacterIds[cursorIndices.p2];
    if (fighterId) {
      sendOnlineMessage({
        type: 'selection',
        fighterId,
        ready: playerLocked.p2
      });
    }
  }
}

function handleOnlineMessage(message) {
  if (!message || typeof message !== 'object') return;
  if (message.type === 'error') {
    onlineStatus.textContent = message.message || 'Online room error.';
    if (!online.role && online.socket) {
      const socket = online.socket;
      online.socket = null;
      socket.close();
    }
    return;
  }
  if (message.type === 'created') {
    online.role = 'host';
    online.roomCode = message.roomCode;
    onlineStatus.textContent = `Room ${message.roomCode} created. Share the code and choose your fighter.`;
    updateCharacterSelectUI();
    sendSelectionUpdate();
    return;
  }
  if (message.type === 'joined') {
    online.role = 'guest';
    online.roomCode = message.roomCode;
    online.peerConnected = true;
    onlineStatus.textContent = `Joined room ${message.roomCode}. Choose your fighter.`;
    updateCharacterSelectUI();
    sendSelectionUpdate();
    return;
  }
  if (message.type === 'peer-joined' && online.role === 'host') {
    online.peerConnected = true;
    onlineStatus.textContent = 'Opponent connected. Choose and lock your fighter.';
    updateCharacterSelectUI();
    sendSelectionUpdate();
    return;
  }
  if (message.type === 'peer-left') {
    online.peerConnected = false;
    online.remoteReady = false;
    online.remoteKeys = {};
    if (gameRunning) {
      gameRunning = false;
      banner.textContent = 'Opponent disconnected.';
    }
    onlineStatus.textContent = 'Opponent disconnected from the room.';
    updateCharacterSelectUI();
    return;
  }
  if (message.type === 'selection' && online.role === 'host') {
    setRemoteSelection(2, message.fighterId, message.ready);
    onlineStatus.textContent = message.ready
      ? 'Opponent is ready. Lock in your fighter to choose the stage.'
      : 'Opponent is choosing a fighter.';
    updateCharacterSelectUI();
    return;
  }
  if (message.type === 'host-selection' && online.role === 'guest') {
    setRemoteSelection(1, message.fighterId, message.ready);
    onlineStatus.textContent = message.ready
      ? 'Host is ready. Lock in your fighter to begin.'
      : 'Host is choosing a fighter.';
    updateCharacterSelectUI();
    return;
  }
  if (message.type === 'start' && online.role === 'guest') {
    const stage = STAGES.find((candidate) => candidate.id === message.stageId);
    if (!CHARACTERS[message.fighter1] || !CHARACTERS[message.fighter2] || !stage) {
      onlineStatus.textContent = 'The host sent an invalid match setup.';
      return;
    }
    onlineStatus.textContent = 'Match starting...';
    beginMatch(message.fighter1, message.fighter2, stage);
    return;
  }
  if (message.type === 'input' && online.role === 'host') {
    online.remoteKeys = message.keys;
    return;
  }
  if (message.type === 'state' && online.role === 'guest') {
    applyOnlineState(message.state);
    return;
  }
  if (message.type === 'game-over' && online.role === 'guest' &&
      CHARACTERS[message.winner?.char] &&
      (message.playerNumber === 1 || message.playerNumber === 2)) {
    if (message.state) applyOnlineState(message.state);
    gameRunning = false;
    showWinScreen(message.winner, message.playerNumber);
  }
}

function applyOnlineState(state) {
  if (!state || !CHARACTERS[state.p1?.char] || !CHARACTERS[state.p2?.char] ||
      !Array.isArray(state.projectiles) ||
      typeof state.gameRunning !== 'boolean') {
    onlineStatus.textContent = 'Received an invalid game-state update.';
    return;
  }
  const stage = STAGES.find((candidate) => candidate.id === state.stageId);
  if (!stage) {
    onlineStatus.textContent = 'Received an unknown arena update.';
    return;
  }
  p1 = state.p1;
  p2 = state.p2;
  projectiles = state.projectiles;
  particles = [];
  selectedStage = stage;
  gameRunning = state.gameRunning;
  percent1.textContent = `${Math.round(p1.percent)}%`;
  percent2.textContent = `${Math.round(p2.percent)}%`;
  updateStockUI();
}

function sendOnlineInput() {
  if (gameMode !== 'online-guest' || !gameRunning) return;
  sendOnlineMessage({
    type: 'input',
    keys: {
      j: Boolean(keys.j || keys.arrowleft),
      l: Boolean(keys.l || keys.arrowright),
      i: Boolean(keys.i || keys.arrowup),
      k: Boolean(keys.k || keys.arrowdown),
      o: Boolean(keys.o),
      p: Boolean(keys.p),
      rshift: Boolean(keys.rshift)
    }
  });
}

function applyRemoteInput() {
  for (const key of ['j', 'l', 'i', 'k', 'o', 'p', 'rshift']) {
    keys[key] = Boolean(online.remoteKeys[key]);
  }
}

function sendOnlineState() {
  if (online.role !== 'host' || !gameRunning || ++onlineFrame % 2 !== 0) return;
  sendOnlineMessage({
    type: 'state',
    state: {
      p1,
      p2,
      projectiles,
      stageId: selectedStage.id,
      gameRunning
    }
  });
}

function populateCharacterSelect() {
  characterSearch.addEventListener('input', () => {
    playerLocked.p1 = false;
    playerLocked.p2 = false;
    populateCharacterGrid(characterSearch.value);
  });
  characterSearch.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      fighterGrid.focus();
    }
  });
  lockP1.addEventListener('click', () => togglePlayerLock('p1'));
  lockP2.addEventListener('click', () => togglePlayerLock('p2'));
  startMatch.addEventListener('click', enterStageSelect);
  tierListOpen.addEventListener('click', openTierList);
  tierListClose.addEventListener('click', closeTierList);
  backToFighters.addEventListener('click', returnToCharacterSelect);
  fightNow.addEventListener('click', startNewMatch);
  backToSelect.addEventListener('click', returnToCharacterSelect);
  for (const button of gameModeButtons) {
    button.addEventListener('click', () => setGameMode(button.dataset.gameMode));
  }
  createOnlineRoom.addEventListener('click', () => connectOnline('create'));
  joinOnlineRoom.addEventListener('click', () => {
    const roomCode = onlineRoomCodeInput.value.trim().toUpperCase();
    if (!/^[ABCDEFGHJKLMNPQRSTUVWXYZ23456789]{8}$/.test(roomCode)) {
      onlineStatus.textContent = 'Enter the 8-character room code shared by the host.';
      return;
    }
    connectOnline('join', roomCode);
  });
  onlineRoomCodeInput.addEventListener('input', () => {
    onlineRoomCodeInput.value = onlineRoomCodeInput.value
      .toUpperCase()
      .replace(/[^ABCDEFGHJKLMNPQRSTUVWXYZ23456789]/g, '')
      .slice(0, 8);
  });
  selectCpuFighter.addEventListener('click', () => {
    lastCursorPlayer = 'p2';
    fighterGrid.focus();
    const activeCard = fighterGrid.querySelector(
      `[data-character-id="${visibleCharacterIds[cursorIndices.p2]}"]`
    );
    activeCard?.scrollIntoView({ block: 'nearest', inline: 'nearest' });
  });
  populateStageSelect();
  populateCharacterGrid('');
  populateTierList();
}

function populateTierList() {
  tierListGrid.replaceChildren();
  const timeoutRate = (TIER_SIMULATION_TIMEOUTS / TIER_SIMULATION_MATCHES * 100).toFixed(1);
  tierListMethod.textContent =
    `${TIER_SIMULATION_MATCHES.toLocaleString()} move-aware AI matches across ${TIER_SIMULATION_PAIRS.toLocaleString()} pairings (about 200 matches per fighter), with player sides swapped. ` +
    `Score is win rate (ties count as half); ${timeoutRate}% reached the 2,200-frame limit and were decided by stocks, then damage. ` +
    `The AI scores move reach and damage, and uses fighter-specific options like Jigglypuff's Sing and Rest. ` +
    `Bands: S 65%+, A 55–65%, B 45–55%, C 30–45%, D below 30%. New fighters are not yet simulated. This is not human-player data.`;
  const tiers = getFighterTiers();
  for (const tier of TIER_ORDER) {
    const section = document.createElement('section');
    section.className = `tier-row tier-${tier.toLowerCase()}`;
    const heading = document.createElement('h3');
    heading.className = 'tier-label';
    heading.textContent = `${tier} · ${tiers[tier].length}`;
    const fighters = document.createElement('div');
    fighters.className = 'tier-fighters';
    for (const { id, character, winRate, matches } of tiers[tier]) {
      const card = document.createElement('article');
      card.className = 'tier-fighter';
      card.title = matches === 0
        ? `${character.name} — ${character.series || 'Unsorted'} · Not yet simulated`
        : `${character.name} — ${character.series || 'Unsorted'} · ${(winRate * 100).toFixed(1)}% simulated win score across ${matches} matches`;
      const glyph = document.createElement('span');
      glyph.className = 'tier-fighter-glyph';
      glyph.textContent = character.glyph || '✦';
      glyph.setAttribute('aria-hidden', 'true');
      const name = document.createElement('span');
      name.className = 'tier-fighter-name';
      name.textContent = character.name;
      const rating = document.createElement('span');
      rating.className = 'tier-fighter-score';
      rating.textContent = matches === 0 ? 'NEW' : `${Math.round(winRate * 100)}%`;
      card.dataset.characterId = id;
      card.append(glyph, name, rating);
      fighters.appendChild(card);
    }
    section.append(heading, fighters);
    tierListGrid.appendChild(section);
  }
}

function openTierList() {
  characterSelect.hidden = true;
  tierListScreen.hidden = false;
  tierListClose.focus();
}

function closeTierList() {
  tierListScreen.hidden = true;
  characterSelect.hidden = false;
  tierListOpen.focus();
}

function populateStageSelect() {
  stageGrid.replaceChildren();
  for (const [index, stage] of STAGES.entries()) {
    const card = document.createElement('button');
    card.type = 'button';
    card.className = 'stage-card';
    card.dataset.stageId = stage.id;
    card.setAttribute('aria-pressed', String(stage.id === selectedStage.id));
    card.setAttribute('aria-label', `${stage.name}: ${stage.description}`);
    const preview = document.createElement('span');
    preview.className = `stage-preview stage-${stage.theme}`;
    preview.setAttribute('aria-hidden', 'true');
    const previewSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    previewSvg.setAttribute('viewBox', `0 0 ${ARENA_W} ${ARENA_H}`);
    previewSvg.setAttribute('preserveAspectRatio', 'none');
    for (const platform of [...stage.platforms, { ...stage.ground, h: 34 }]) {
      const top = ARENA_H - platform.y;
      const height = platform.h || 27;
      const body = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
      body.setAttribute('x', platform.x);
      body.setAttribute('y', top);
      body.setAttribute('width', platform.w);
      body.setAttribute('height', height);
      body.setAttribute('rx', '12');
      body.setAttribute('fill', stage.accent);
      body.setAttribute('stroke', '#f8fafc');
      body.setAttribute('stroke-width', '9');
      previewSvg.appendChild(body);
    }
    preview.appendChild(previewSvg);
    const name = document.createElement('strong');
    name.textContent = stage.name;
    const description = document.createElement('span');
    description.textContent = stage.description;
    card.append(preview, name, description);
    card.addEventListener('click', () => {
      stageCursorIndex = index;
      selectedStage = stage;
      updateStageSelectUI();
    });
    stageGrid.appendChild(card);
  }
  updateStageSelectUI();
}

function updateStageSelectUI() {
  for (const [index, card] of Array.from(stageGrid.children).entries()) {
    const isSelected = card.dataset.stageId === selectedStage.id;
    card.setAttribute('aria-pressed', String(isSelected));
    card.tabIndex = isSelected ? 0 : -1;
    if (isSelected) stageCursorIndex = index;
  }
  selectedStageDescription.textContent = `${selectedStage.name} — ${selectedStage.description}`;
}

function enterStageSelect() {
  if (!canEnterStageSelect()) return;
  characterSelect.hidden = true;
  stageSelectScreen.hidden = false;
  updateStageSelectUI();
  const selectedCard = stageGrid.children[stageCursorIndex];
  selectedCard?.focus();
  selectedCard?.scrollIntoView({ block: 'nearest', inline: 'nearest' });
}

function handleStageSelectKeydown(event) {
  const key = event.key.toLowerCase();
  if (key === 'escape' || key === 'backspace') {
    event.preventDefault();
    returnToCharacterSelect();
    return;
  }
  if (key === 'enter') {
    event.preventDefault();
    startNewMatch();
    return;
  }
  const gridStyle = window.getComputedStyle?.(stageGrid);
  const columns = gridStyle
    ? Math.max(1, gridStyle.gridTemplateColumns.trim().split(/\s+/).length)
    : 4;
  const delta = {
    arrowleft: -1,
    arrowright: 1,
    arrowup: -columns,
    arrowdown: columns
  }[key];
  if (!delta) return;
  event.preventDefault();
  stageCursorIndex = (stageCursorIndex + delta + STAGES.length) % STAGES.length;
  selectedStage = STAGES[stageCursorIndex];
  updateStageSelectUI();
  const selectedCard = stageGrid.children[stageCursorIndex];
  selectedCard?.focus();
  selectedCard?.scrollIntoView({ block: 'nearest', inline: 'nearest' });
}

function populateCharacterGrid(query) {
  const searchTerm = query.trim().toLowerCase();
  const previousIds = {
    p1: visibleCharacterIds[cursorIndices.p1],
    p2: visibleCharacterIds[cursorIndices.p2]
  };
  visibleCharacterIds = CHARACTER_IDS.filter((id) =>
    !searchTerm ||
    CHARACTERS[id].name.toLowerCase().includes(searchTerm) ||
    (CHARACTERS[id].series || 'Unsorted').toLowerCase().includes(searchTerm)
  );
  for (const player of ['p1', 'p2']) {
    const previousIndex = visibleCharacterIds.indexOf(previousIds[player]);
    cursorIndices[player] = previousIndex >= 0
      ? previousIndex
      : Math.min(cursorIndices[player], Math.max(visibleCharacterIds.length - 1, 0));
  }

  fighterGrid.innerHTML = '';
  if (visibleCharacterIds.length === 0) {
    const emptyMessage = document.createElement('p');
    emptyMessage.className = 'no-fighters';
    emptyMessage.textContent = 'No fighters found. Try another search.';
    fighterGrid.appendChild(emptyMessage);
  } else {
    const groups = new Map();
    for (const id of visibleCharacterIds) {
      const series = CHARACTERS[id].series || 'Unsorted';
      if (!groups.has(series)) groups.set(series, []);
      groups.get(series).push(id);
    }

    for (const [series, ids] of groups) {
      const section = document.createElement('section');
      section.className = 'fighter-series';
      const heading = document.createElement('h3');
      heading.className = 'fighter-series-title';
      heading.textContent = series;
      const cards = document.createElement('div');
      cards.className = 'fighter-series-grid';

      for (const id of ids) {
        const index = visibleCharacterIds.indexOf(id);
        const character = CHARACTERS[id];
        const card = document.createElement('button');
        card.type = 'button';
        card.className = 'fighter-card';
        card.dataset.characterId = id;
        card.dataset.series = series;
        card.setAttribute('aria-label', `${character.name}, ${series} series`);
        card.title = `${character.name} — ${series}`;

        const cursors = document.createElement('span');
        cursors.className = 'fighter-card-cursors';
        const p1Tag = document.createElement('span');
        p1Tag.className = 'cursor-tag p1';
        p1Tag.textContent = 'P1';
        p1Tag.hidden = true;
        const p2Tag = document.createElement('span');
        p2Tag.className = 'cursor-tag p2';
        p2Tag.textContent = 'P2';
        p2Tag.hidden = true;
        cursors.append(p1Tag, p2Tag);

        const glyph = document.createElement('span');
        glyph.className = 'fighter-card-glyph';
        glyph.textContent = character.glyph || '✦';
        const name = document.createElement('span');
        name.className = 'fighter-card-name';
        name.textContent = character.name;
        card.append(cursors, glyph, name);
        card.addEventListener('click', () => {
          const player = online.role === 'host' ? 'p1'
            : online.role === 'guest' ? 'p2'
              : lastCursorPlayer;
          cursorIndices[player] = index;
          playerLocked[player] = false;
          lastCursorPlayer = player;
          updateCharacterSelectUI();
          sendSelectionUpdate();
        });
        cards.appendChild(card);
      }

      section.append(heading, cards);
      fighterGrid.appendChild(section);
    }
  }
  updateCharacterSelectUI();
}

function updateCharacterSelectUI() {
  for (const card of fighterGrid.querySelectorAll('.fighter-card')) {
    const id = card.dataset.characterId;
    if (!id) continue;
    const p1Cursor = id === visibleCharacterIds[cursorIndices.p1];
    const p2Cursor = id === visibleCharacterIds[cursorIndices.p2];
    card.dataset.p1Cursor = String(p1Cursor);
    card.dataset.p2Cursor = String(p2Cursor);
    card.querySelector('.cursor-tag.p1').hidden = !p1Cursor;
    const p2Tag = card.querySelector('.cursor-tag.p2');
    p2Tag.textContent = gameMode === 'one-player' ? 'CPU' : 'P2';
    p2Tag.hidden = !p2Cursor;
  }

  const selectedP1 = CHARACTERS[visibleCharacterIds[cursorIndices.p1]];
  const selectedP2 = CHARACTERS[visibleCharacterIds[cursorIndices.p2]];
  p1SelectionTitle.textContent = gameMode === 'online-guest' ? 'PLAYER 1 · HOST' : 'PLAYER 1';
  p1SelectionStatus.textContent = selectedP1
    ? `${gameMode === 'online-guest' ? 'REMOTE · ' : ''}${selectedP1.glyph || ''} ${selectedP1.name}${playerLocked.p1 ? ' — READY' : ''}`.trim()
    : 'No fighter selected';
  p2SelectionTitle.textContent = gameMode === 'one-player'
    ? 'CPU OPPONENT'
    : gameMode === 'online-host'
      ? 'PLAYER 2 · OPPONENT'
      : gameMode === 'online-guest'
        ? 'PLAYER 2 · YOU'
        : 'PLAYER 2';
  p2SelectionHelp.textContent = gameMode === 'one-player'
    ? 'Choose the CPU fighter with IJKL or the button; its move-aware AI uses attacks and projectiles.'
    : gameMode === 'online-host'
      ? 'Your opponent chooses this fighter after joining your room.'
      : gameMode === 'online-guest'
        ? 'IJKL / arrows move · I aim up · Right Shift jump · O lock · P unlock'
        : 'IJKL / arrows move · I aim up · Right Shift jump · O lock · P unlock';
  p2SelectionStatus.textContent = selectedP2
    ? `${gameMode === 'one-player' ? '🤖 CPU · ' : gameMode === 'online-host' ? 'REMOTE · ' : ''}${selectedP2.glyph || ''} ${selectedP2.name}${(gameMode === 'two-player' || gameMode === 'online-host' || gameMode === 'online-guest') && playerLocked.p2 ? ' — READY' : ''}`.trim()
    : 'No fighter selected';
  lockP2.hidden = gameMode === 'one-player';
  selectCpuFighter.hidden = gameMode !== 'one-player';
  lockP1.disabled = gameMode === 'online-guest';
  lockP2.disabled = gameMode === 'online-host';
  lockP1.textContent = playerLocked.p1 ? 'Unlock (G)' : 'Lock In (F)';
  lockP2.textContent = playerLocked.p2 ? 'Unlock (P)' : 'Lock In (O)';
  lockP1.setAttribute('aria-pressed', String(playerLocked.p1));
  lockP2.setAttribute('aria-pressed', String(playerLocked.p2));
  startMatch.disabled = !canEnterStageSelect();
  selectSubtitle.textContent = gameMode === 'one-player'
    ? 'Choose your fighter and a CPU opponent, lock in your pick, then start the match.'
    : gameMode === 'online-host'
      ? 'Choose Player 1. Your opponent chooses Player 2; then you select the stage.'
      : gameMode === 'online-guest'
        ? 'Choose and lock Player 2. The host chooses the stage and starts the match.'
        : 'Move each cursor to a fighter. Lock both picks, then start the match.';

  const activeSelection = visibleCharacterIds[cursorIndices[lastCursorPlayer]];
  const activeCard = Array.from(fighterGrid.querySelectorAll('.fighter-card'))
    .find((card) => card.dataset.characterId === activeSelection);
  activeCard?.scrollIntoView({ block: 'nearest', inline: 'nearest' });
}

function togglePlayerLock(player) {
  if ((player === 'p2' && (gameMode === 'one-player' || gameMode === 'online-host')) ||
      (player === 'p1' && gameMode === 'online-guest')) return;
  if (visibleCharacterIds.length === 0) return;
  setPlayerLocked(player, !playerLocked[player]);
  lastCursorPlayer = player;
}

function setPlayerLocked(player, isLocked) {
  if (visibleCharacterIds.length === 0) return;
  playerLocked[player] = isLocked;
  updateCharacterSelectUI();
  sendSelectionUpdate();
}

function moveSelectionCursor(player, dx, dy) {
  if ((gameMode === 'online-host' && player !== 'p1') ||
      (gameMode === 'online-guest' && player !== 'p2')) return;
  if (visibleCharacterIds.length === 0) return;
  const cards = Array.from(fighterGrid.querySelectorAll('.fighter-card'));
  const currentId = visibleCharacterIds[cursorIndices[player]];
  const currentCard = cards.find((card) => card.dataset.characterId === currentId);
  if (currentCard && typeof currentCard.getBoundingClientRect === 'function') {
    const current = currentCard.getBoundingClientRect();
    const currentX = current.left + current.width / 2;
    const currentY = current.top + current.height / 2;
    const candidates = cards
      .filter((card) => card !== currentCard)
      .map((card) => {
        const rect = card.getBoundingClientRect();
        return { card, x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 };
      })
      .filter(({ x, y }) => {
        if (dx < 0) return x < currentX - 1;
        if (dx > 0) return x > currentX + 1;
        if (dy < 0) return y < currentY - 1;
        return y > currentY + 1;
      })
      .sort((a, b) => {
        const distance = dx
          ? Math.abs(a.x - currentX) + Math.abs(a.y - currentY) * 2
          : Math.abs(a.y - currentY) + Math.abs(a.x - currentX) * 2;
        const otherDistance = dx
          ? Math.abs(b.x - currentX) + Math.abs(b.y - currentY) * 2
          : Math.abs(b.y - currentY) + Math.abs(b.x - currentX) * 2;
        return distance - otherDistance;
      });

    if (candidates.length > 0) {
      cursorIndices[player] = visibleCharacterIds.indexOf(candidates[0].card.dataset.characterId);
      playerLocked[player] = false;
      lastCursorPlayer = player;
      updateCharacterSelectUI();
      sendSelectionUpdate();
      return;
    }
    if (current.width || current.height) return;
  }

  const columns = getGridColumnCount();
  const current = cursorIndices[player];
  const rowCount = Math.ceil(visibleCharacterIds.length / columns);
  const row = Math.floor(current / columns);
  const column = current % columns;
  const nextRow = Math.max(0, Math.min(rowCount - 1, row + dy));
  const columnsInRow = Math.min(
    columns,
    visibleCharacterIds.length - nextRow * columns
  );
  const nextColumn = Math.max(0, Math.min(columnsInRow - 1, column + dx));
  cursorIndices[player] = nextRow * columns + nextColumn;
  playerLocked[player] = false;
  lastCursorPlayer = player;
  updateCharacterSelectUI();
  sendSelectionUpdate();
}

function getGridColumnCount() {
  const seriesGrid = fighterGrid.querySelector('.fighter-series-grid');
  const computedStyle = window.getComputedStyle?.(seriesGrid || fighterGrid);
  if (!computedStyle) return SELECT_GRID_COLUMNS;
  return Math.max(1, computedStyle.gridTemplateColumns.trim().split(/\s+/).length);
}

function handleCharacterSelectKeydown(event) {
  if (event.target === characterSearch || stageGrid.contains(event.target)) return;
  const key = event.key.toLowerCase();
  const p1Moves = { a: [-1, 0], d: [1, 0], w: [0, -1], s: [0, 1] };
  const p2Moves = {
    j: [-1, 0], l: [1, 0], i: [0, -1], k: [0, 1],
    arrowleft: [-1, 0], arrowright: [1, 0], arrowup: [0, -1], arrowdown: [0, 1]
  };
  const p1Move = gameMode === 'online-guest' ? null : p1Moves[key];
  const p2Move = gameMode === 'online-host' ? null : p2Moves[key];

  if (p1Move || p2Move) {
    event.preventDefault();
    const player = p1Move ? 'p1' : 'p2';
    const [dx, dy] = p1Move || p2Move;
    moveSelectionCursor(player, dx, dy);
    return;
  }

  if (event.repeat && ['f', 'g', 'o', 'p', 'enter'].includes(key)) return;
  if (key === 'f' && gameMode !== 'online-guest') setPlayerLocked('p1', true);
  else if (key === 'g' && gameMode !== 'online-guest') setPlayerLocked('p1', false);
  else if (key === 'o' && ['two-player', 'online-guest'].includes(gameMode)) setPlayerLocked('p2', true);
  else if (key === 'p' && ['two-player', 'online-guest'].includes(gameMode)) setPlayerLocked('p2', false);
  else if (key === 'enter' && !startMatch.disabled) enterStageSelect();
  else return;
  event.preventDefault();
}

function returnToCharacterSelect() {
  gameRunning = false;
  winScreen.hidden = true;
  stageSelectScreen.hidden = true;
  characterSelect.hidden = false;
  if (gameMode === 'online-host') playerLocked.p1 = false;
  else if (gameMode === 'online-guest') playerLocked.p2 = false;
  else {
    playerLocked.p1 = false;
    playerLocked.p2 = false;
  }
  updateCharacterSelectUI();
  sendSelectionUpdate();
  fighterGrid.focus();
}

function showWinScreen(winner, playerNumber) {
  const character = CHARACTERS[winner.char];
  if (online.role === 'host') {
    sendOnlineMessage({
      type: 'game-over',
      winner: { char: winner.char },
      playerNumber,
      state: {
        p1,
        p2,
        projectiles,
        stageId: selectedStage.id,
        gameRunning: false
      }
    });
  }
  winnerPlayer.textContent = gameMode === 'one-player' && playerNumber === 2
    ? 'CPU WINS'
    : `PLAYER ${playerNumber} WINS`;
  winnerName.textContent = character.name;
  winnerAvatar.textContent = character.glyph || '✦';
  winnerAvatar.style.backgroundColor = character.color;
  winnerAvatar.style.borderColor = character.accent;
  winnerAvatar.style.borderRadius = character.form === 'orb' || character.form === 'beast' ? '50%' : '24px';
  winScreen.hidden = false;
  backToSelect.focus();
}

function setFighterAvatar(avatar, char) {
  const character = CHARACTERS[char];
  avatar.className = 'fighter-avatar';
  avatar.textContent = character.glyph || '';
  avatar.style.backgroundColor = character.color;
  avatar.style.borderColor = character.accent;
  avatar.style.borderRadius = character.form === 'orb' || character.form === 'beast' ? '50%' : '8px';
}

populateCharacterSelect();

btnAudio.addEventListener('click', () => {
  initAudio();
  audioEnabled = !audioEnabled;
  audioIcon.textContent = audioEnabled ? '🔊' : '🔇';
  audioText.textContent = audioEnabled ? 'Audio: ON' : 'Audio: OFF';
});

function updateStockUI() {
  stocks1.innerHTML = stockIcons(p1);
  stocks2.innerHTML = stockIcons(p2);
}

function stockIcons(fighter) {
  const character = CHARACTERS[fighter.char];
  const shape = ['orb', 'beast', 'wing', 'sprout'].includes(character.form) ? '50%' : '3px';
  return Array.from({ length: fighter.stocks }, () =>
    `<span class="stock-icon" style="background-color:${character.color};border-color:${character.accent};border-radius:${shape}"></span>`
  ).join('');
}

function spawnVFX(x, y, type, color, size = 16) {
  particles.push({ x, y, type, color, size, life: 1, maxLife: 18 });
}

function getFighterDim(p) {
  const character = CHARACTERS[p.char];
  return { w: character.width, h: character.height };
}

function isOriginalFighter(p) {
  return p.char === 'morrow' || CHARACTERS[p.char].original === true;
}

function executeExtraSpecial(p, dir, character) {
  const identity = character.identity;
  const base = {
    anim: `${p.char}-${character.specialType}-${dir}`,
    move: dir,
    kind: 'special',
    specialType: character.specialType,
    label: character.specialMove,
    startup: 4 + identity % 5,
    active: 5 + identity % 7,
    endlag: 12 + identity % 10,
    dmg: 7 + identity % 5,
    kbx: 4 + identity % 6,
    kby: 3 + identity % 6,
    reach: 68 + identity % 45,
    color: character.accent
  };

  if (character.specialType === 'projectile' || character.specialType === 'barrage') {
    const projectileAngle = dir === 'up' ? Math.PI / 4 :
      dir === 'down' ? -Math.PI / 4 : dir === 'side' ? 0 : identity % 2 ? Math.PI / 12 : -Math.PI / 12;
    return {
      ...base,
      anim: `${p.char}-cast-${character.specialMove}`,
      isProjectile: true,
      projectileCount: character.specialType === 'barrage' ? 3 : 1,
      projectileAngle,
      projectileStyle: character.projectileStyle,
      projectileSpeed: character.projectileSpeed,
      projectileRadius: character.projectileRadius,
      projectileRotation: 0.025 * (identity % 5),
      startup: base.startup + 2,
      active: 2,
      endlag: base.endlag + 3
    };
  }

  if (character.specialType === 'guard') {
    p.guard = 52 + identity % 20;
    p.guardCounterDamage = 4 + identity % 5;
    return {
      ...base,
      anim: `${p.char}-ward-${character.specialMove}`,
      isGuard: true,
      active: 1,
      dmg: 0,
      endlag: 20 + identity % 12,
      counterDamage: p.guardCounterDamage
    };
  }

  if (character.specialType === 'trap') {
    return {
      ...base,
      anim: `${p.char}-snare-${character.specialMove}`,
      isProjectile: true,
      isTrap: true,
      projectileAngle: dir === 'up' ? Math.PI / 2 : dir === 'down' ? -Math.PI / 5 : 0,
      projectileSpeed: 0,
      projectileCount: 1,
      projectileRadius: 22 + identity % 12,
      projectileStyle: character.projectileStyle,
      trapDuration: 600 + identity % 180,
      dmg: 6 + identity % 5,
      startup: base.startup + 3,
      active: 2,
      endlag: 24 + identity % 12
    };
  }

  if (character.specialType === 'orbit') {
    return {
      ...base,
      anim: `${p.char}-orbit-${character.specialMove}`,
      reach: 112 + identity % 22,
      active: 10,
      kbx: 5,
      kby: 5,
      pullTarget: true,
      startup: base.startup + 1,
      endlag: base.endlag + 4
    };
  }

  if (character.specialType === 'dash') {
    if (dir === 'up') {
      p.vy = 13 + identity % 4;
      p.vx = p.facing * 4;
    } else if (dir === 'down') {
      p.vy = -9 - identity % 4;
      p.vx = p.facing * 2;
    } else {
      p.vx = p.facing * (9 + identity % 5);
      if (dir === 'neutral') p.vy = 2;
    }
    return {
      ...base,
      anim: `${p.char}-rush-${character.specialMove}`,
      reach: 98,
      kbx: 8 + identity % 4,
      startup: Math.max(2, base.startup - 2),
      active: 8 + identity % 6
    };
  }

  if (character.specialType === 'leap') {
    if (dir === 'down') {
      p.vy = -8 - identity % 4;
      p.vx = p.facing * 3;
    } else {
      p.vy = 12 + identity % 5;
      if (dir === 'side') p.vx = p.facing * (5 + identity % 4);
    }
    return {
      ...base,
      anim: `${p.char}-skyward-${character.specialMove}`,
      reach: 82,
      kby: 10 + identity % 4,
      startup: 3 + identity % 3
    };
  }

  if (character.specialType === 'slam') {
    if (dir === 'up') {
      p.vy = 5;
      return { ...base, anim: `${p.char}-quake-${character.specialMove}`, reach: 105, kby: 11, dmg: base.dmg + 1 };
    }
    if (dir === 'side') p.vx = p.facing * 2;
    if (p.onGround && dir !== 'down') p.vy = -4;
    else p.vy = -11 - identity % 5;
    return {
      ...base,
      anim: `${p.char}-impact-${character.specialMove}`,
      reach: 100 + identity % 18,
      dmg: base.dmg + 3,
      kby: -7,
      startup: base.startup + 2,
      active: 8
    };
  }

  if (character.specialType === 'grapple') {
    return {
      ...base,
      anim: `${p.char}-grapple-${character.specialMove}`,
      reach: 94 + identity % 24,
      pullTarget: true,
      kby: 4 + identity % 4,
      dmg: 5 + identity % 4,
      startup: base.startup + 1,
      active: 8,
      endlag: base.endlag + 2
    };
  }

  if (character.specialType === 'counter') {
    p.guard = 34 + identity % 16;
    p.guardCounterDamage = 8 + identity % 7;
    return {
      ...base,
      anim: `${p.char}-counter-${character.specialMove}`,
      isGuard: true,
      active: 1,
      dmg: 0,
      endlag: 16 + identity % 10,
      counterDamage: p.guardCounterDamage
    };
  }

  if (character.specialType === 'buff') {
    p.powerBoost = 240 + identity % 120;
    p.vx = p.facing * (4 + identity % 4);
    return {
      ...base,
      anim: `${p.char}-surge-${character.specialMove}`,
      reach: 94,
      dmg: base.dmg + 2,
      kbx: base.kbx + 2,
      startup: Math.max(2, base.startup - 2),
      endlag: base.endlag + 5
    };
  }

  if (character.specialType === 'multiHit') {
    return {
      ...base,
      anim: `${p.char}-flurry-${character.specialMove}`,
      isMultiHit: true,
      reach: 88,
      dmg: 3 + identity % 3,
      kbx: 2,
      kby: 2,
      active: 10,
      endlag: base.endlag + 3
    };
  }

  return { ...base, anim: `${p.char}-burst-${character.specialMove}`, reach: 90 };
}

function executeSpecial(p, dir) {
  playSound('swing');
  const fighter = CHARACTERS[p.char];
  if (fighter.combatKit === 'sam') {
    if (dir === 'neutral') {
      const charge = Math.min(180, p.storedCharge || 0);
      return {
        anim: 'sam-charge-shot',
        kind: 'special',
        specialType: 'projectile',
        move: dir,
        startup: 8,
        active: 2,
        endlag: 28,
        dmg: 14 + Math.floor(charge / 12),
        kbx: 10 + Math.floor(charge / 18),
        kby: 6 + Math.floor(charge / 36),
        color: '#67e8f9',
        isProjectile: true,
        isChargedShot: true,
        projectileStyle: 7,
        projectileSpeed: 9,
        projectileRadius: 16 + Math.floor(charge / 15),
        projectileLife: 220
      };
    }
    if (dir === 'side') {
      return {
        anim: 'sam-seeking-missile',
        kind: 'special',
        specialType: 'projectile',
        move: dir,
        startup: 6,
        active: 2,
        endlag: 17,
        dmg: 8,
        kbx: 8,
        kby: 4,
        color: '#fb923c',
        isProjectile: true,
        isHoming: true,
        projectileStyle: 1,
        projectileSpeed: 7.5,
        projectileRadius: 10,
        projectileLife: 100
      };
    }
    if (dir === 'up') {
      p.vy = 15;
      p.vx = p.facing * 1.5;
      return {
        anim: 'sam-helix-rise',
        kind: 'special',
        specialType: 'spin',
        move: dir,
        startup: 3,
        active: 12,
        endlag: 20,
        dmg: 4,
        kbx: 3,
        kby: 10,
        reach: 80,
        color: '#67e8f9',
        isMultiHit: true
      };
    }
    p.guard = 24;
    p.guardCounterDamage = 10;
    return {
      anim: 'sam-aegis-pulse',
      kind: 'special',
      specialType: 'guard',
      move: dir,
      startup: 4,
      active: 1,
      endlag: 20,
      dmg: 0,
      kbx: 0,
      kby: 0,
      color: '#fb923c',
      isGuard: true,
      counterDamage: 10
    };
  }
  if (fighter.combatKit === 'space-dragon') {
    if (dir === 'neutral') {
      return {
        anim: 'space-dragon-astral-breath',
        kind: 'special',
        specialType: 'barrage',
        move: dir,
        startup: 9,
        active: 2,
        endlag: 22,
        dmg: 5,
        kbx: 5,
        kby: 3,
        color: fighter.accent,
        isProjectile: true,
        projectileCount: 3,
        projectileAngle: 0,
        projectileSpeed: 9,
        projectileRadius: 11,
        projectileLife: 170
      };
    }
    if (dir === 'side') {
      p.vx = p.facing * 12;
      return {
        anim: 'space-dragon-comet-snatch',
        kind: 'special',
        specialType: 'grapple',
        move: dir,
        startup: 5,
        active: 10,
        endlag: 25,
        dmg: 2,
        kbx: 11,
        kby: 5,
        reach: 132,
        color: fighter.accent,
        carryTarget: true
      };
    }
    if (dir === 'up') {
      p.vy = 16;
      p.vx = p.facing * 2;
      return {
        anim: 'space-dragon-orbit-break',
        kind: 'special',
        specialType: 'spin',
        move: dir,
        startup: 4,
        active: 12,
        endlag: 21,
        dmg: 4,
        kbx: 3,
        kby: 11,
        reach: 92,
        color: fighter.accent,
        isMultiHit: true
      };
    }
    p.vy = -9;
    return {
      anim: 'space-dragon-stardust-stomp',
      kind: 'special',
      specialType: 'slam',
      move: dir,
      startup: 7,
      active: 9,
      endlag: 20,
      dmg: 12,
      kbx: 8,
      kby: -7,
      reach: 112,
      color: fighter.accent
    };
  }
  if (p.char === 'kael-cinderwake') {
    if (dir === 'neutral') {
      return { anim: 'kael-cinderline', kind: 'special', specialType: 'projectile', move: dir, startup: 10, active: 2, endlag: 20, dmg: 8, kbx: 7, kby: 3, color: '#fb923c', isProjectile: true, projectileStyle: 2, projectileSpeed: 9, projectileRadius: 16 };
    }
    if (dir === 'up') {
      p.vy = 14;
      return { anim: 'kael-ash-lifter', kind: 'special', move: dir, startup: 5, active: 8, endlag: 19, dmg: 9, kbx: 3, kby: 11, reach: 94, color: '#fb923c' };
    }
    if (dir === 'down') {
      p.guard = 22;
      p.guardCounterDamage = 15;
      return { anim: 'kael-anvil-guard', kind: 'special', specialType: 'counter', move: dir, startup: 4, active: 1, endlag: 22, dmg: 0, kbx: 0, kby: 0, color: '#f97316', isGuard: true, counterDamage: 15 };
    }
    p.vx = p.facing * 6;
    return { anim: 'kael-faultline-flare', kind: 'special', move: dir, startup: 10, active: 10, endlag: 25, dmg: 15, kbx: 11, kby: 4, reach: 130, color: '#f97316' };
  }
  if (p.char === 'sable-quicksteel') {
    if (dir === 'neutral') {
      return { anim: 'sable-needle-fan', kind: 'special', specialType: 'barrage', move: dir, startup: 6, active: 2, endlag: 18, dmg: 5, kbx: 4, kby: 2, color: '#c4b5fd', isProjectile: true, projectileCount: 3, projectileStyle: 5, projectileSpeed: 12, projectileRadius: 8 };
    }
    if (dir === 'up') {
      p.vy = 16;
      p.vx += p.facing * 2;
      return { anim: 'sable-skyline-cross', kind: 'special', move: dir, startup: 3, active: 10, endlag: 17, dmg: 8, kbx: 3, kby: 11, reach: 82, color: '#c4b5fd' };
    }
    if (dir === 'down') {
      p.guard = 18;
      p.guardCounterDamage = 12;
      return { anim: 'sable-parry-and-pivot', kind: 'special', specialType: 'counter', move: dir, startup: 3, active: 1, endlag: 16, dmg: 0, kbx: 0, kby: 0, color: '#a78bfa', isGuard: true, counterDamage: 12 };
    }
    p.vx = p.facing * 14;
    return { anim: 'sable-afterimage-step', kind: 'special', move: dir, startup: 2, active: 7, endlag: 18, dmg: 7, kbx: 8, kby: 4, reach: 106, color: '#c4b5fd' };
  }
  if (p.char === 'tamsin-runevale') {
    if (dir === 'neutral') {
      return { anim: 'tamsin-prism-index', kind: 'special', specialType: 'projectile', move: dir, startup: 8, active: 2, endlag: 17, dmg: 8, kbx: 6, kby: 5, color: '#f0abfc', isProjectile: true, projectileStyle: 6, projectileSpeed: 10, projectileRadius: 13 };
    }
    if (dir === 'up') {
      p.vy = 13;
      p.vx += p.facing * 3;
      return { anim: 'tamsin-folded-page', kind: 'special', move: dir, startup: 4, active: 9, endlag: 16, dmg: 7, kbx: 3, kby: 10, reach: 84, color: '#f0abfc' };
    }
    if (dir === 'down') {
      p.guard = 20;
      p.guardCounterDamage = 10;
      return { anim: 'tamsin-errata-ward', kind: 'special', specialType: 'counter', move: dir, startup: 4, active: 1, endlag: 19, dmg: 0, kbx: 0, kby: 0, color: '#5eead4', isGuard: true, counterDamage: 10 };
    }
    return { anim: 'tamsin-binding-glyph', kind: 'special', specialType: 'trap', move: dir, startup: 9, active: 2, endlag: 22, dmg: 7, kbx: 5, kby: 4, color: '#5eead4', isProjectile: true, isTrap: true, projectileAngle: 0, projectileSpeed: 0, projectileRadius: 24, projectileStyle: 6, trapDuration: 600 };
  }
  if (p.char === 'veyra-stormglass') {
    const base = {
      kind: 'special',
      specialType: 'stormblade',
      move: dir,
      label: 'Tempest Arc',
      startup: 5,
      active: 7,
      endlag: 14,
      dmg: 9,
      kbx: 7,
      kby: 4,
      reach: 94,
      color: '#67e8f9'
    };
    if (dir === 'neutral') {
      return {
        ...base,
        anim: 'veyra-tempest-arc',
        specialType: 'projectile',
        isProjectile: true,
        projectileAngle: 0,
        projectileStyle: 5,
        projectileSpeed: 11,
        projectileRadius: 14,
        dmg: 8
      };
    }
    if (dir === 'up') {
      p.vy = 15;
      p.vx += p.facing * 2;
      return { ...base, anim: 'veyra-gale-riser', active: 9, dmg: 8, kby: 11, reach: 78 };
    }
    if (dir === 'down') {
      return { ...base, anim: 'veyra-breakwater-cleave', startup: 8, active: 5, endlag: 20, dmg: 13, kbx: 9, kby: -5, reach: 110 };
    }
    p.vx = p.facing * 10;
    return { ...base, anim: 'veyra-crosswind-lunge', startup: 3, active: 6, endlag: 17, dmg: 10, kbx: 10, reach: 100 };
  }
  if (p.hasGyro && dir === 'down') {
    return {
      anim: 'gyro-bot-gyro',
      kind: 'special',
      specialType: 'gyro',
      move: dir,
      startup: 5,
      active: 3,
      endlag: 14,
      dmg: 10,
      kbx: 9,
      kby: 4,
      color: '#fb923c',
      isProjectile: true,
      isGyro: true,
      projectileStyle: 8,
      projectileSpeed: 13,
      projectileRadius: 18,
      projectileRotation: 0.22
    };
  }
  if (p.char === 'gyro-bot') {
    if (dir === 'down') {
      return {
        anim: 'gyro-bot-gyro',
        kind: 'special',
        specialType: 'gyro',
        move: dir,
        startup: 7,
        active: 3,
        endlag: 18,
        dmg: p.hasGyro ? 10 : 8,
        kbx: p.hasGyro ? 9 : 7,
        kby: 4,
        color: '#fb923c',
        isProjectile: true,
        isGyro: true,
        projectileStyle: 8,
        projectileSpeed: p.hasGyro ? 13 : 10,
        projectileRadius: p.hasGyro ? 18 : 16,
        projectileRotation: 0.22
      };
    }
    if (dir === 'up') {
      p.vy = 17;
      p.vx = p.facing * 2;
      return { anim: 'gyro-bot-lifter', move: dir, startup: 3, active: 10, endlag: 16, dmg: 7, kbx: 3, kby: 11, reach: 68, color: '#34d399' };
    }
    if (dir === 'side') {
      p.vx = p.facing * 5;
      return { anim: 'gyro-bot-rotor-arm', move: dir, startup: 4, active: 12, endlag: 17, dmg: 3, kbx: 2, kby: 2, reach: 82, color: '#fb923c', isMultiHit: true };
    }
    return {
      anim: 'gyro-bot-prism-beam',
      move: dir,
      startup: 9,
      active: 3,
      endlag: 22,
      dmg: 11,
      kbx: 8,
      kby: 6,
      color: '#34d399',
      isProjectile: true,
      projectileStyle: 4,
      projectileSpeed: 14,
      projectileRadius: 9
    };
  }
  if (p.char === 'morrow') {
    if (dir === 'neutral') {
      return {
        anim: 'morrow-prism-seed', move: dir,
        startup: 8, active: 3, endlag: 20,
        dmg: 8, kbx: 7, kby: 5,
        color: '#c084fc', isProjectile: true,
        projectileStyle: 3, projectileSpeed: 10,
        projectileRadius: 13, projectileRotation: 0.04
      };
    }
    if (dir === 'up') {
      p.vy = 15;
      p.vx += p.facing * 2;
      return { anim: 'morrow-glasswing-lift', move: dir, startup: 4, active: 8, endlag: 14, dmg: 7, kbx: 3, kby: 10, reach: 76, color: '#5eead4' };
    }
    if (dir === 'down') {
      return { anim: 'morrow-shatter-bloom', move: dir, startup: 8, active: 5, endlag: 24, dmg: 12, kbx: 4, kby: 8, reach: 105, color: '#c084fc' };
    }
    p.vx = p.facing * 12;
    return { anim: 'morrow-needle-dash', move: dir, startup: 5, active: 10, endlag: 18, dmg: 9, kbx: 8, kby: 4, reach: 88, color: '#5eead4' };
  }
  const character = CHARACTERS[p.char];
  if (character.original) return executeExtraSpecial(p, dir, character);
  if (p.char === 'jigglypuff') {
    if (dir === 'up') {
      p.vy = 13; p.vx *= 0.85;
      return { anim: 'rising-swirl', startup: 4, active: 14, endlag: 14, dmg: 7, kbx: 3.5, kby: 11, color: '#f472b6' };
    } else if (dir === 'down') {
      return { anim: 'rest', startup: 2, active: 4, endlag: 100, dmg: 30, kbx: 1.2, kby: 20, isRest: true, color: '#fef08a' };
    } else if (dir === 'side') {
      p.vx = p.facing * 10;
      return { anim: 'rollout', startup: 8, active: 16, endlag: 12, dmg: 10, kbx: 8, kby: 4, color: '#fbcfe8' };
    }
    return { anim: 'sing', startup: 10, active: 22, endlag: 24, dmg: 0, hitstun: 120, isSing: true, color: '#67e8f9' };
  } else {
    if (p.char === 'mario') {
      if (dir === 'up') {
        p.vy = 13;
        return { anim: 'super-jump', startup: 3, active: 8, endlag: 12, dmg: 8, kbx: 3, kby: 10, color: '#f87171' };
      } else if (dir === 'down') {
        return { anim: 'ground-pound', startup: 6, active: 10, endlag: 16, dmg: 10, kbx: 3, kby: -5, color: '#f97316' };
      } else if (dir === 'side') {
        p.vx = p.facing * 8;
        return { anim: 'dash-punch', startup: 5, active: 14, endlag: 12, dmg: 9, kbx: 7, kby: 4, color: '#ef4444' };
      }
      return { anim: 'fireball', startup: 8, active: 16, endlag: 18, dmg: 10, kbx: 7, kby: 6, color: '#fb923c', isProjectile: true, projectileStyle: 2, projectileSpeed: 9, projectileRadius: 13 };
    }
    if (p.char === 'pikachu') {
      if (dir === 'up') {
        p.vy = 14;
        return { anim: 'thunder', startup: 4, active: 12, endlag: 14, dmg: 9, kbx: 3, kby: 11, color: '#fde047' };
      } else if (dir === 'down') {
        return { anim: 'spark', startup: 3, active: 8, endlag: 12, dmg: 7, kbx: 3, kby: -4, color: '#facc15' };
      } else if (dir === 'side') {
        p.vx = p.facing * 11;
        return { anim: 'quick-attack', startup: 3, active: 10, endlag: 14, dmg: 8, kbx: 8, kby: 5, color: '#facc15' };
      }
      return { anim: 'thunderbolt', startup: 7, active: 14, endlag: 16, dmg: 9, kbx: 6, kby: 7, color: '#fde047', isProjectile: true, projectileStyle: 3, projectileSpeed: 12, projectileRadius: 11 };
    }
    if (dir === 'up') {
      p.vy = 14; p.vx = p.facing * 5;
      return { anim: 'elytra', startup: 4, active: 18, endlag: 12, dmg: 7, kbx: 3, kby: 10, color: '#a5b4fc' };
    } else if (dir === 'down') {
      p.vy = -10;
      return { anim: 'anvil', startup: 6, active: 20, endlag: 16, dmg: 12, kbx: 2.5, kby: -8, color: '#475569' };
    } else if (dir === 'side') {
      p.vx = p.facing * 9;
      return { anim: 'minecart', startup: 6, active: 16, endlag: 12, dmg: 9, kbx: 8.5, kby: 4.5, color: '#94a3b8' };
    }
    return { anim: 'tnt', startup: 18, active: 10, endlag: 24, dmg: 16, kbx: 14, kby: 12, reach: 92, color: '#ef4444' };
  }
}

function executeNormal(p, dir) {
  playSound('swing');
  const character = CHARACTERS[p.char];
  if (character.combatKit === 'sam') {
    if (dir === 'up') return { anim: 'sam-cannon-uppercut', move: dir, startup: 4, active: 7, endlag: 12, dmg: 7, kbx: 3, kby: 10, reach: 78, color: character.accent };
    if (dir === 'down') return { anim: 'sam-low-arc', move: dir, startup: 5, active: 8, endlag: 13, dmg: 8, kbx: 6, kby: 2, reach: 94, color: character.accent };
    if (dir === 'side') return { anim: 'sam-pulse-gauntlet', move: dir, startup: 5, active: 6, endlag: 13, dmg: 9, kbx: 8, kby: 4, reach: 106, color: character.accent };
    return { anim: 'sam-close-pulse', move: dir, startup: 3, active: 5, endlag: 9, dmg: 6, kbx: 5, kby: 3, reach: 72, color: character.accent };
  }
  if (character.combatKit === 'space-dragon') {
    if (dir === 'up') return { anim: 'space-dragon-wing-rise', move: dir, startup: 4, active: 8, endlag: 13, dmg: 7, kbx: 3, kby: 10, reach: 88, color: character.accent };
    if (dir === 'down') return { anim: 'space-dragon-tail-sweep', move: dir, startup: 5, active: 8, endlag: 13, dmg: 8, kbx: 7, kby: -3, reach: 112, color: character.accent };
    if (dir === 'side') return { anim: 'space-dragon-comet-claw', move: dir, startup: 4, active: 6, endlag: 12, dmg: 9, kbx: 8, kby: 4, reach: 105, color: character.accent };
    return { anim: 'space-dragon-bite', move: dir, startup: 3, active: 5, endlag: 9, dmg: 6, kbx: 5, kby: 3, reach: 76, color: character.accent };
  }
  if (character.combatKit === 'cinder') {
    if (dir === 'up') return { anim: 'kael-chimney-cleave', move: dir, startup: 7, active: 8, endlag: 15, dmg: 10, kbx: 3, kby: 11, reach: 84, color: character.accent };
    if (dir === 'down') return { anim: 'kael-slag-sweep', move: dir, startup: 7, active: 9, endlag: 16, dmg: 9, kbx: 7, kby: 2, reach: 106, color: character.accent };
    if (dir === 'side') return { anim: 'kael-smelter-swing', move: dir, startup: 9, active: 6, endlag: 18, dmg: 14, kbx: 10, kby: 4, reach: 124, color: character.accent };
    return { anim: 'kael-forge-tap', move: dir, startup: 4, active: 5, endlag: 10, dmg: 7, kbx: 5, kby: 3, reach: 86, color: character.accent };
  }
  if (character.combatKit === 'quicksteel') {
    if (dir === 'up') return { anim: 'sable-rising-cross', move: dir, startup: 3, active: 7, endlag: 9, dmg: 7, kbx: 3, kby: 9, reach: 74, color: character.accent, isMultiHit: true };
    if (dir === 'down') return { anim: 'sable-low-cross', move: dir, startup: 3, active: 8, endlag: 9, dmg: 6, kbx: 5, kby: 2, reach: 86, color: character.accent, isMultiHit: true };
    if (dir === 'side') return { anim: 'sable-scissor-rush', move: dir, startup: 4, active: 7, endlag: 11, dmg: 8, kbx: 8, kby: 4, reach: 98, color: character.accent, isMultiHit: true };
    return { anim: 'sable-double-feint', move: dir, startup: 2, active: 8, endlag: 8, dmg: 5, kbx: 4, kby: 2, reach: 72, color: character.accent, isMultiHit: true };
  }
  if (character.combatKit === 'runevale') {
    if (dir === 'up') return { anim: 'tamsin-bookmarked-rise', move: dir, startup: 4, active: 7, endlag: 11, dmg: 7, kbx: 3, kby: 9, reach: 78, color: character.accent };
    if (dir === 'down') return { anim: 'tamsin-footnote-sweep', move: dir, startup: 5, active: 7, endlag: 12, dmg: 6, kbx: 5, kby: 2, reach: 84, color: character.accent };
    if (dir === 'side') return { anim: 'tamsin-rune-edge', move: dir, startup: 5, active: 6, endlag: 12, dmg: 9, kbx: 7, kby: 4, reach: 96, color: character.accent };
    return { anim: 'tamsin-margin-cut', move: dir, startup: 3, active: 5, endlag: 8, dmg: 5, kbx: 4, kby: 2, reach: 70, color: character.accent };
  }
  if (p.char === 'veyra-stormglass') {
    if (dir === 'up') return { anim: 'veyra-rising-edge', move: dir, startup: 4, active: 7, endlag: 10, dmg: 8, kbx: 3, kby: 10, reach: 72, color: character.accent };
    if (dir === 'down') return { anim: 'veyra-low-tide', move: dir, startup: 5, active: 8, endlag: 12, dmg: 7, kbx: 5, kby: 2, reach: 94, color: character.accent };
    if (dir === 'side') return { anim: 'veyra-longshore-thrust', move: dir, startup: 6, active: 5, endlag: 14, dmg: 11, kbx: 9, kby: 4, reach: 112, color: character.accent };
    return { anim: 'veyra-guardline-cut', move: dir, startup: 3, active: 5, endlag: 8, dmg: 6, kbx: 5, kby: 3, reach: 82, color: character.accent };
  }
  if (character.original) {
    const identity = character.identity;
    const base = {
      anim: `${p.char}-${dir}-${character.normalMove}`,
      move: dir,
      kind: 'normal',
      normalStyle: character.normalStyle,
      label: character.normalMove,
      startup: 2 + identity % 4,
      active: 4 + identity % 4,
      endlag: 6 + identity % 8,
      dmg: 4 + identity % 5,
      kbx: 3 + identity % 6,
      kby: dir === 'up' ? 8 + identity % 4 : 2 + identity % 5,
      reach: 62 + identity % 35,
      color: character.accent
    };
    switch (character.normalStyle) {
      case 'heavy':
        return { ...base, startup: base.startup + 4, active: base.active + 2, endlag: base.endlag + 8, dmg: base.dmg + 5, kbx: base.kbx + 4, reach: base.reach + 24 };
      case 'sweep':
        return { ...base, anim: `${p.char}-sweep-${character.normalMove}`, kby: -2 - identity % 3, kbx: base.kbx + 2, reach: base.reach + 12 };
      case 'lunge':
        p.vx = p.facing * (5 + identity % 4);
        return { ...base, anim: `${p.char}-lunge-${character.normalMove}`, reach: base.reach + 25, kbx: base.kbx + 2 };
      case 'launcher':
        return { ...base, anim: `${p.char}-launcher-${character.normalMove}`, kby: 11 + identity % 5, kbx: Math.max(2, base.kbx - 2), reach: base.reach + 8 };
      case 'reach':
        return { ...base, anim: `${p.char}-reach-${character.normalMove}`, reach: base.reach + 48, dmg: Math.max(3, base.dmg - 1), kbx: base.kbx + 1 };
      case 'shot':
        return {
          ...base,
          anim: `${p.char}-capacitor-strike-${character.normalMove}`,
          normalStyle: 'reach',
          reach: base.reach + 20,
          dmg: base.dmg + 1,
          kbx: base.kbx + 1
        };
      case 'spin':
        return { ...base, anim: `${p.char}-spin-${character.normalMove}`, reach: base.reach + 32, kbx: base.kbx + 1, active: base.active + 3 };
      default:
        return base;
    }
  }
  if (p.char === 'gyro-bot') {
    if (dir === 'up') return { anim: 'gyro-bot-crane-swing', move: dir, startup: 4, active: 7, endlag: 10, dmg: 8, kbx: 3, kby: 10, reach: 64, color: '#34d399' };
    if (dir === 'down') return { anim: 'gyro-bot-skid-sweep', move: dir, startup: 5, active: 8, endlag: 11, dmg: 7, kbx: 5, kby: 2, reach: 76, color: '#fb923c' };
    if (dir === 'side') return { anim: 'gyro-bot-pincer-thrust', move: dir, startup: 3, active: 5, endlag: 8, dmg: 9, kbx: 8, kby: 3, reach: 80, color: '#34d399' };
    return { anim: 'gyro-bot-tap', move: dir, startup: 2, active: 4, endlag: 6, dmg: 5, kbx: 4, kby: 2, reach: 56, color: '#fb923c' };
  }
  if (p.char === 'morrow') {
    if (dir === 'up') return { anim: 'morrow-crescent-rake', move: dir, startup: 4, active: 6, endlag: 10, dmg: 7, kbx: 2.5, kby: 9, reach: 70, color: '#c084fc' };
    if (dir === 'down') return { anim: 'morrow-tendril-sweep', move: dir, startup: 5, active: 8, endlag: 12, dmg: 8, kbx: 5, kby: 3, reach: 92, color: '#5eead4' };
    if (dir === 'side') return { anim: 'morrow-needle-lunge', move: dir, startup: 3, active: 5, endlag: 9, dmg: 9, kbx: 8, kby: 4, reach: 86, color: '#c084fc' };
    return { anim: 'morrow-orbiting-flick', move: dir, startup: 3, active: 5, endlag: 8, dmg: 5, kbx: 4, kby: 2.5, reach: 64, color: '#5eead4' };
  }
  if (p.char === 'jigglypuff') {
    if (dir === 'up') return { anim: 'headbutt', startup: 4, active: 4, endlag: 7, dmg: 6, kbx: 2.5, kby: 8.5, color: '#f9a8d4' };
    if (dir === 'down') return { anim: 'drill', startup: 4, active: 8, endlag: 9, dmg: 7, kbx: 2, kby: -4, color: '#f43f5e' };
    if (dir === 'side') return { anim: 'pound', startup: 6, active: 5, endlag: 8, dmg: 8, kbx: 7.5, kby: 3.5, color: '#ec4899' };
    return { anim: 'slap', startup: 3, active: 4, endlag: 5, dmg: 4, kbx: 5, kby: 2.5, color: '#fb7185' };
  } else if (p.char === 'steve') {
    if (dir === 'up') return { anim: 'axe-swing', startup: 4, active: 5, endlag: 8, dmg: 7, kbx: 2.5, kby: 9, color: '#cbd5e1' };
    if (dir === 'down') return { anim: 'shovel', startup: 4, active: 5, endlag: 9, dmg: 6, kbx: 5.5, kby: 5, color: '#a1a1aa' };
    if (dir === 'side') return { anim: 'sword-slash', startup: 3, active: 5, endlag: 7, dmg: 8, kbx: 7.5, kby: 3.5, color: '#38bdf8' };
    return { anim: 'pickaxe', startup: 3, active: 4, endlag: 6, dmg: 5, kbx: 4.5, kby: 2.5, color: '#fdba74' };
  }
  if (p.char === 'mario') {
    if (dir === 'up') return { anim: 'uppercut', startup: 3, active: 5, endlag: 8, dmg: 7, kbx: 2.5, kby: 9, color: '#f87171' };
    if (dir === 'down') return { anim: 'sweep', startup: 4, active: 6, endlag: 8, dmg: 6, kbx: 5, kby: 3, color: '#fb923c' };
    if (dir === 'side') return { anim: 'punch', startup: 3, active: 5, endlag: 7, dmg: 8, kbx: 7, kby: 4, color: '#ef4444' };
    return { anim: 'jab', startup: 2, active: 4, endlag: 5, dmg: 5, kbx: 4, kby: 2, color: '#fca5a5' };
  }
  if (dir === 'up') return { anim: 'electric-jump', startup: 3, active: 5, endlag: 8, dmg: 7, kbx: 2.5, kby: 9, color: '#fde047' };
  if (dir === 'down') return { anim: 'tail-swipe', startup: 4, active: 6, endlag: 8, dmg: 6, kbx: 5, kby: 3, color: '#facc15' };
  if (dir === 'side') return { anim: 'quick-punch', startup: 2, active: 4, endlag: 6, dmg: 7, kbx: 7, kby: 4, color: '#facc15' };
  return { anim: 'spark', startup: 2, active: 4, endlag: 5, dmg: 5, kbx: 4, kby: 2, color: '#fde047' };
}

function prepareDirectionalAttack(p, dir, attack, isSpecial) {
  attack.move = dir;
  if (attack.isProjectile) {
    if (attack.specialType !== 'gyro') {
      if (dir === 'up') attack.projectileAngle = Math.PI / 2;
      else if (dir === 'down') attack.projectileAngle = -Math.PI / 2;
      else if (dir === 'side') {
        attack.projectileAngle = 0;
        attack.projectileSpeed = (attack.projectileSpeed || 10) + 2;
        p.vx = p.facing * Math.max(Math.abs(p.vx) * 0.75, isSpecial ? 4.5 : 2.2);
      } else {
        attack.projectileAngle = 0;
        attack.projectileRadius = (attack.projectileRadius || 12) + 4;
      }
    }
    return attack;
  }
  if (attack.isGuard) return attack;

  const reach = attack.reach || 64;
  if (dir === 'up') {
    attack.hitbox = { x: 56, y: 112, offsetX: p.facing * 8, offsetY: 38 };
    attack.kby = Math.max(attack.kby || 0, isSpecial ? 10 : 8);
    if (isSpecial) p.vy = Math.max(p.vy, 7);
  } else if (dir === 'down') {
    attack.hitbox = { x: Math.max(58, reach), y: 54, offsetX: p.facing * 8, offsetY: -28 };
    if (!p.onGround) {
      p.vy = Math.min(p.vy, -6);
      attack.kby = Math.min(attack.kby || 0, -7);
    } else {
      attack.kby = Math.max(2, attack.kby || 0);
      p.vx *= 0.55;
    }
  } else if (dir === 'side') {
    attack.hitbox = { x: Math.max(68, reach), y: 62, offsetX: p.facing * (reach * 0.38), offsetY: 0 };
    attack.kbx = Math.max(attack.kbx || 0, isSpecial ? 8 : 6);
    p.vx = p.facing * Math.max(Math.abs(p.vx) * 0.75, isSpecial ? 4.5 : 2.2);
  } else {
    attack.hitbox = { x: Math.min(74, Math.max(48, reach)), y: 58, offsetX: p.facing * 20, offsetY: 0 };
  }
  return attack;
}

const CPU_DIRECTIONS = ['neutral', 'up', 'down', 'side'];
const cpuMoveCache = new Map();

function getCpuMoves(fighter) {
  const cacheKey = `${fighter.char}|${fighter.hasGyro}|${fighter.onGround}`;
  if (cpuMoveCache.has(cacheKey)) return cpuMoveCache.get(cacheKey);
  const moves = [];
  const originalPlaySound = playSound;
  playSound = () => {};
  try {
    for (const special of [false, true]) {
      for (const direction of CPU_DIRECTIONS) {
        const clone = {
          ...fighter, action: 'idle', attack: null, attackFrame: 0, hasHit: false,
          facing: 1, vx: 0, vy: 0, guard: 0, guardCounterDamage: 0, powerBoost: 0
        };
        const attack = prepareDirectionalAttack(
          clone,
          direction,
          special ? executeSpecial(clone, direction) : executeNormal(clone, direction),
          special
        );
        if (attack) moves.push({ attack, direction, special });
      }
    }
  } finally {
    playSound = originalPlaySound;
  }
  cpuMoveCache.set(cacheKey, moves);
  return moves;
}

function getCpuHitChance(choice, fighter, opponent, distance, heightDifference) {
  const attack = choice.attack;
  if (attack.isGuard) {
    return opponent.attack && ['startup', 'active'].includes(opponent.action) && distance < 220 ? 0.9 : 0;
  }
  if (attack.isProjectile) {
    if (attack.isTrap) {
      return distance < 155 && heightDifference < 115 ? 0.58 : distance < 220 && heightDifference < 90 ? 0.2 : 0;
    }
    const range = (attack.projectileSpeed || 10) * Math.min(90, attack.projectileLife || 130);
    if (distance > range + 100) return 0;
    const pathError = Math.abs(
      heightDifference -
      (CHARACTERS[opponent.char].height * 0.5 - CHARACTERS[fighter.char].height * 0.65) -
      Math.tan(attack.projectileAngle || 0) * distance
    );
    const radius = attack.projectileRadius || 14;
    const verticalChance = pathError < radius + CHARACTERS[opponent.char].height * 0.48
      ? 0.88
      : pathError < radius + CHARACTERS[opponent.char].height ? 0.28 : 0.04;
    return (distance < range ? 0.78 : 0.25) * verticalChance;
  }
  const box = attack.hitbox || {
    x: attack.reach || 82, y: 82, offsetX: 24, offsetY: 0
  };
  if (opponent.action === 'hitstun' &&
      distance < box.x + Math.abs(box.offsetX || 0) + 25 &&
      heightDifference < 150) return 0.98;
  const horizontalError = Math.max(
    0, distance - Math.abs(box.offsetX || 0) - Math.min(32, (attack.startup || 0) * 1.5)
  );
  const verticalError = Math.max(0, heightDifference - Math.abs(box.offsetY || 0));
  const horizontalChance = horizontalError < box.x - 12 ? 0.96
    : horizontalError < box.x + 38 ? 0.42
      : horizontalError < box.x + 85 ? 0.12 : 0;
  const verticalChance = verticalError < box.y - 12 ? 0.96
    : verticalError < box.y + 55 ? 0.38 : 0.08;
  return horizontalChance * verticalChance;
}

function getCpuRecoveryInput(fighter) {
  const platforms = [...selectedStage.platforms, selectedStage.ground];
  const dim = getFighterDim(fighter);
  const lowestSurface = Math.min(...platforms.map((platform) => platform.y));
  if (fighter.onGround ||
      (fighter.y >= lowestSurface - 50 && fighter.x >= -50 &&
       fighter.x + dim.w <= ARENA_W + 50)) return null;

  const centerX = fighter.x + dim.w / 2;
  const target = platforms
    .map((platform) => {
      const targetX = Math.max(
        platform.x + dim.w / 2,
        Math.min(platform.x + platform.w - dim.w / 2, centerX)
      );
      return {
        x: targetX,
        y: platform.y,
        score: Math.abs(targetX - centerX) + Math.abs(platform.y - fighter.y) * 0.35
      };
    })
    .sort((a, b) => a.score - b.score)[0];
  if (!target) return null;

  const recovery = {};
  if (target.x < centerX - 10) recovery.j = true;
  else if (target.x > centerX + 10) recovery.l = true;
  if (target.y > fighter.y + 20 && fighter.jumpsLeft > 0) recovery.jump = true;
  return recovery;
}

function constrainCpuMovement(fighter, input) {
  if (!fighter.onGround) return;
  const direction = input.j ? -1 : input.l ? 1 : 0;
  if (!direction) return;

  const dim = getFighterDim(fighter);
  const support = [...selectedStage.platforms, selectedStage.ground].find((platform) =>
    Math.abs(fighter.y - platform.y) < 1 &&
    fighter.x + dim.w > platform.x &&
    fighter.x < platform.x + platform.w
  );
  if (!support) return;

  const margin = Math.max(18, dim.w * 0.45);
  const safeLeft = support.x + margin;
  const safeRight = support.x + support.w - dim.w - margin;
  const nextX = fighter.x + direction * Math.max(4, Math.abs(fighter.vx) + 2);
  if ((direction < 0 && nextX < safeLeft) ||
      (direction > 0 && nextX > safeRight)) {
    delete input[direction < 0 ? 'j' : 'l'];
    if (fighter.vx * direction > 0) input[direction < 0 ? 'l' : 'j'] = true;
  }
}

function chooseCpuInput(fighter, opponent, frame, isP1 = false) {
  const recoveryInput = getCpuRecoveryInput(fighter);
  if (recoveryInput) return recoveryInput;

  const dx = opponent.x - fighter.x;
  const toward = dx >= 0 ? 1 : -1;
  const distance = Math.abs(dx);
  const heightDifference = Math.abs(
    opponent.y + CHARACTERS[opponent.char].height / 2 -
    fighter.y - CHARACTERS[fighter.char].height / 2
  );
  const character = CHARACTERS[fighter.char];
  const keysForFighter = {};
  if (fighter.action === 'idle') fighter.facing = toward;

  if (fighter.action === 'idle' && fighter.char === 'jigglypuff' &&
      fighter.onGround && distance < 100 && heightDifference < 100) {
    keysForFighter[isP1 ? 's' : 'k'] = true;
    const useRest = opponent.onGround && opponent.action === 'hitstun' &&
      opponent.percent >= 28 && distance < 95 && heightDifference < 120;
    keysForFighter[isP1 ? (useRest ? 'g' : 'f') : (useRest ? 'p' : 'o')] = true;
    return keysForFighter;
  }

  const ranged = ['projectile', 'barrage', 'trap', 'gyro'].includes(character.specialType);
  if (fighter.action === 'idle') {
    let best = null;
    let bestValue = 0;
    for (const choice of getCpuMoves(fighter)) {
      const attack = choice.attack;
      if (attack.isRest && !(
        fighter.char === 'jigglypuff' && fighter.onGround &&
        opponent.onGround && opponent.action === 'hitstun' &&
        opponent.percent >= 28 && distance < 95 && heightDifference < 120
      )) continue;
      const probability = getCpuHitChance(choice, fighter, opponent, distance, heightDifference);
      if (probability < 0.08) continue;
      let value;
      if (attack.isSing) {
        value = opponent.action === 'hitstun' ? 0
          : probability * (2.5 + Math.min(opponent.percent, 100) * 0.018);
      } else {
        let damage = attack.dmg || attack.counterDamage || 0;
        if (attack.isMultiHit) damage *= 1.35;
        if (attack.projectileCount > 1) {
          damage *= Math.min(1.7, 1 + (attack.projectileCount - 1) * 0.28);
        }
        const launch = (
          Math.abs(attack.kbx || 0) * 0.4 + Math.abs(attack.kby || 0) * 0.55
        ) * (0.65 + opponent.percent / 100 * 0.65);
        value = (
          (damage * 1.3 + launch + getHitstunFrames(attack) * 0.08) /
          (5 + (attack.startup || 0) + (attack.endlag || 0) * 0.42 + (attack.active || 0) * 0.18)
        ) * probability;
        if (attack.isRest && opponent.percent >= 28) {
          value += probability * Math.min(6, (opponent.percent - 20) * 0.1);
        }
        if (attack.isRest && opponent.action === 'hitstun') value += probability * 3;
        if (attack.isGuard) value = probability * (1.6 + (attack.counterDamage || 0) * 0.12);
      }
      value += (
        (frame * 17 + (character.identity || 0) * 31 +
          (choice.special ? 13 : 0) + CPU_DIRECTIONS.indexOf(choice.direction) * 7) % 19
      ) * 0.0007;
      if (value > bestValue) {
        bestValue = value;
        best = choice;
      }
    }
    if (best && bestValue > 0.1) {
      if (best.direction === 'up') keysForFighter[isP1 ? 'w' : 'i'] = true;
      else if (best.direction === 'down') keysForFighter[isP1 ? 's' : 'k'] = true;
      else if (best.direction === 'side') {
        keysForFighter[isP1 ? (toward > 0 ? 'd' : 'a') : (toward > 0 ? 'l' : 'j')] = true;
      }
      keysForFighter[isP1 ? (best.special ? 'g' : 'f') : (best.special ? 'p' : 'o')] = true;
      return keysForFighter;
    }
  }
  const preferredGap = character.id === 'jigglypuff' ? 58 : ranged ? 185 : 68;
  if (distance > preferredGap + 26) {
    keysForFighter[isP1 ? (toward > 0 ? 'd' : 'a') : (toward > 0 ? 'l' : 'j')] = true;
  } else if (distance < preferredGap - 38 && distance > 40) {
    keysForFighter[isP1 ? (toward > 0 ? 'a' : 'd') : (toward > 0 ? 'j' : 'l')] = true;
  }
  return keysForFighter;
}

function handleInput(p, isP1) {
  const left = isP1 ? keys['a'] : (keys['j'] || keys['arrowleft']);
  const right = isP1 ? keys['d'] : (keys['l'] || keys['arrowright']);
  const up = isP1 ? keys['w'] : (keys['i'] || keys['arrowup']);
  const jump = isP1 ? keys.space : keys.rshift || keys.jump;
  const down = isP1 ? keys['s'] : (keys['k'] || keys['arrowdown']);
  const atk = isP1 ? keys['f'] : (keys['o'] || keys['1'] || keys['numpad1']);
  const spc = isP1 ? keys['g'] : (keys['p'] || keys['2'] || keys['numpad2']);

  if (p.action === 'grabbed') {
    const mashKeys = isP1
      ? ['a', 'd', 'w', 's', 'space', 'f', 'g']
      : ['j', 'l', 'i', 'k', 'arrowleft', 'arrowright', 'arrowup', 'arrowdown',
          'rshift', 'jump', 'o', 'p', '1', 'numpad1', '2', 'numpad2'];
    let newMashPress = false;
    for (const key of mashKeys) {
      if (keys[key] && !p.grabMashInputs[key]) newMashPress = true;
      p.grabMashInputs[key] = Boolean(keys[key]);
    }
    if (newMashPress) p.grabEscape++;
    if (p.grabEscape >= 8) escapeGrapple(isP1 ? p2 : p1, p);
    return;
  }

  // Cannot move/attack during hitstun
  if (p.action === 'hitstun') return;

  const boost = p.powerBoost > 0 ? 1.18 : 1;
  const accel = (p.onGround ? 0.8 : 0.45) * p.speed * boost;
  const maxSpeed = (p.onGround ? 5.5 : 4.5) * p.speed * boost;
  if (left) {
    p.vx = Math.max(p.vx - accel, -maxSpeed);
    if (p.action === 'idle' || p.action === 'grabbing') p.facing = -1;
  } else if (right) {
    p.vx = Math.min(p.vx + accel, maxSpeed);
    if (p.action === 'idle' || p.action === 'grabbing') p.facing = 1;
  } else if (p.onGround) {
    p.vx *= 0.82;
  } else {
    p.vx *= 0.97;
  }

  if (jump && p.jumpsLeft > 0 && !p.jumpLock) {
    p.vy = 12.5;
    p.onGround = false;
    p.jumpsLeft--;
    p.jumpLock = true;
    playSound('jump');
    spawnVFX(p.x + 26, p.y, 'ring', '#cbd5e1', 12);
  }
  if (!jump) p.jumpLock = false;

  const dir = up ? 'up' : down ? 'down' : (left || right) ? 'side' : 'neutral';
  if (p.grabTarget) {
    if (spc && !p.specialLock) releaseGrapple(p, isP1 ? p2 : p1);
    if (!spc) p.specialLock = false;
    return;
  }
  if (CHARACTERS[p.char].combatKit === 'sam' && p.chargeFrames > 0) {
    if (spc) {
      p.chargeFrames = Math.min(180, p.chargeFrames + 1);
      if (p.chargeFrames % 12 === 0) {
        const dim = getFighterDim(p);
        spawnVFX(p.x + dim.w / 2 + p.facing * 26, p.y + dim.h * 0.65, 'ring', '#67e8f9', 10 + p.chargeFrames / 8);
      }
      return;
    }
    if (p.action === 'idle') {
      p.storedCharge = p.chargeFrames;
      p.chargeFrames = 0;
      p.specialLock = false;
      return;
    }
  }
  if (p.smashCharging) {
    if (atk) {
      p.smashChargeFrames = Math.min(60, p.smashChargeFrames + 1);
      return;
    }
    const charge = p.smashChargeFrames;
    p.smashCharging = false;
    p.smashChargeFrames = 0;
    let attack = executeNormal(p, dir);
    if (!p.onGround) {
      attack.isAerial = true;
      attack.dmg = Math.max(2, Math.round(attack.dmg * 0.72));
      attack.kbx *= 0.82;
      attack.kby = dir === 'down' ? Math.min(-7, attack.kby) : attack.kby * 0.82;
      attack.startup = Math.max(1, attack.startup - 1);
      attack.endlag = Math.max(4, attack.endlag - 3);
    } else if (charge >= 12) {
      const chargeRatio = charge / 60;
      attack.isSmash = true;
      attack.chargeRatio = chargeRatio;
      attack.dmg += 5 + Math.round(chargeRatio * 6);
      attack.kbx *= 1.3 + chargeRatio * 0.25;
      attack.kby *= 1.15 + chargeRatio * 0.2;
      attack.startup += 3;
      attack.endlag += 6;
    }
    p.attack = prepareDirectionalAttack(p, dir, attack, false);
    p.action = 'startup';
    p.attackFrame = p.attack.startup;
    p.hasHit = false;
    p.attackLock = true;
    return;
  }
  if (p.action === 'idle') {
    if (atk && !p.attackLock && tryPickupNearbyGyro(p)) {
      p.attackLock = true;
      return;
    }
    if (atk && !p.attackLock) {
      if (p.onGround) {
        p.smashCharging = true;
        p.smashChargeFrames = 0;
        p.attackLock = true;
        return;
      }
      const attack = executeNormal(p, dir);
      attack.isAerial = true;
      attack.dmg = Math.max(2, Math.round(attack.dmg * 0.72));
      attack.kbx *= 0.82;
      attack.kby = dir === 'down' ? Math.min(-7, attack.kby) : attack.kby * 0.82;
      attack.startup = Math.max(1, attack.startup - 1);
      attack.endlag = Math.max(4, attack.endlag - 3);
      p.attack = prepareDirectionalAttack(p, dir, attack, false);
      p.action = 'startup';
      p.attackFrame = p.attack.startup;
      p.hasHit = false;
      p.attackLock = true;
    } else if (spc && !p.specialLock) {
      if (CHARACTERS[p.char].combatKit === 'sam' && dir === 'neutral' && !p.storedCharge) {
        p.chargeFrames = 1;
        p.specialLock = true;
      } else {
        const attack = prepareDirectionalAttack(p, dir, executeSpecial(p, dir), true);
        if (CHARACTERS[p.char].combatKit === 'sam' && dir === 'neutral') p.storedCharge = 0;
        p.attack = attack;
        p.action = 'startup';
        p.attackFrame = p.attack.startup;
        p.hasHit = false;
        p.specialLock = true;
      }
    }
  }

  if (!atk) p.attackLock = false;
  if (!spc) p.specialLock = false;
}

function getHitstunFrames(attack, damage = attack.dmg) {
  const launchStrength = Math.abs(attack.kbx || 0) * 0.45 + Math.abs(attack.kby || 0) * 0.65;
  const commitment = (attack.startup || 0) * 0.2 +
    (attack.active || 0) * 0.35 +
    (attack.endlag || 0) * 0.15;
  const multiHitScale = attack.isMultiHit ? 0.68 : 1;
  return Math.min(36, Math.max(3, Math.round((10 + damage * 1.15 + launchStrength + commitment) * multiHitScale * 0.85)));
}

function applyHitstun(target, frames) {
  target.action = 'hitstun';
  target.hitstun = frames;
  target.attack = null;
  target.attackFrame = 0;
  target.hasHit = false;
  target.chargeFrames = 0;
  target.smashCharging = false;
  target.smashChargeFrames = 0;
}

function releaseGrapple(p, target) {
  if (!p.grabTarget || !target.grabbedBy) return;
  const scale = 0.55 + (target.percent / 100) * 0.65;
  const damage = 9 + Math.min(7, Math.floor(p.grabTicks / 8));
  target.percent += damage;
  target.vx = p.facing * (14 + Math.min(4, p.grabTicks / 20)) * scale / target.weight;
  target.vy = (7 + Math.min(3, p.grabTicks / 30)) * scale / target.weight;
  target.grabbedBy = false;
  target.grabEscape = 0;
  target.grabMashInputs = {};
  applyHitstun(target, 24);
  p.grabTarget = false;
  p.grabTicks = 0;
  p.action = 'idle';
  p.attack = null;
  p.attackFrame = 0;
  p.hasHit = false;
  p.vx *= 0.4;
  p.specialLock = true;
  playSound('hit');
  spawnVFX(target.x + getFighterDim(target).w / 2, target.y + getFighterDim(target).h / 2, 'burst', CHARACTERS[p.char].accent, 32);
}

function escapeGrapple(p, target) {
  if (!p.grabTarget || !target.grabbedBy) return;
  target.grabbedBy = false;
  target.grabEscape = 0;
  target.grabMashInputs = {};
  target.action = 'idle';
  target.attack = null;
  target.attackFrame = 0;
  target.hasHit = false;
  target.vx = -p.facing * 3.5 / target.weight;
  target.vy = 2.5 / target.weight;
  p.grabTarget = false;
  p.grabTicks = 0;
  p.action = 'idle';
  p.attack = null;
  p.attackFrame = 0;
  p.hasHit = false;
  p.specialLock = true;
  playSound('hit');
  spawnVFX(target.x + getFighterDim(target).w / 2, target.y + getFighterDim(target).h / 2, 'ring', CHARACTERS[target.char].accent, 24);
}

function cancelGrapple(p, target) {
  if (p.grabTarget || target.grabbedBy) {
    p.grabTarget = false;
    p.grabTicks = 0;
    target.grabbedBy = false;
    target.grabEscape = 0;
    target.grabMashInputs = {};
    if (p.action === 'grabbing') {
      p.action = 'idle';
      p.attack = null;
      p.attackFrame = 0;
      p.hasHit = false;
    }
    if (target.action === 'grabbed') {
      target.action = 'idle';
      target.attack = null;
      target.attackFrame = 0;
      target.hasHit = false;
    }
  }
  if (p.grabbedBy || target.grabTarget) {
    p.grabbedBy = false;
    target.grabTarget = false;
    target.grabTicks = 0;
    if (p.action === 'grabbed') {
      p.action = 'idle';
      p.attack = null;
      p.attackFrame = 0;
      p.hasHit = false;
    }
    if (target.action === 'grabbing') {
      target.action = 'idle';
      target.attack = null;
      target.attackFrame = 0;
      target.hasHit = false;
    }
  }
}

function updateGrapple(p, target) {
  if (!p.grabTarget) return;
  if (!target.grabbedBy || p.action !== 'grabbing' || target.action !== 'grabbed') {
    cancelGrapple(p, target);
    return;
  }
  const pDim = getFighterDim(p);
  const targetDim = getFighterDim(target);
  target.x = Math.max(0, Math.min(
    ARENA_W - targetDim.w,
    p.x + (pDim.w / 2 + targetDim.w / 2 - 8) * p.facing
  ));
  target.y = p.y;
  target.vx = 0;
  target.vy = 0;
  target.grabbedBy = true;
  p.grabTicks++;
  const carrySpeed = 3.2;
  const ground = selectedStage.ground;
  const nextX = p.x + p.facing * carrySpeed;
  if (nextX < ground.x || nextX + pDim.w > ground.x + ground.w) {
    p.vx = 0;
  } else {
    p.vx = p.facing * carrySpeed;
  }
  if (p.grabTicks % 10 === 0) target.percent += 1.2;
}

function updatePhysics(p) {
  if (p.guard > 0 && --p.guard === 0) p.guardCounterDamage = 0;
  if (p.powerBoost > 0) p.powerBoost--;
  // Hitstun timer decrement - ensures fighters never get permanently stuck!
  if (p.action === 'hitstun') {
    p.hitstun--;
    if (p.hitstun <= 0) {
      p.action = 'idle';
      p.attack = null;
      p.hasHit = false;
    }
  }

  if (p.action === 'grabbed') {
    p.vx = 0;
    p.vy = 0;
    if (p.invincible > 0) p.invincible--;
    return;
  }

  p.x += p.vx;
  p.y += p.vy;
  p.vy -= p.gravity;

  const dim = getFighterDim(p);
  let grounded = false;

  const ground = selectedStage.ground;
  if (p.x + dim.w > ground.x && p.x < ground.x + ground.w && p.y <= ground.y && p.y > ground.y - 24 && p.vy <= 0) {
    p.y = ground.y;
    p.vy = 0;
    grounded = true;
  }

  for (const plat of selectedStage.platforms) {
    if (p.x + dim.w > plat.x && p.x < plat.x + plat.w && p.y <= plat.y && p.y > plat.y - 20 && p.vy <= 0) {
      p.y = plat.y;
      p.vy = 0;
      grounded = true;
    }
  }

  p.onGround = grounded;
  if (grounded) p.jumpsLeft = CHARACTERS[p.char].jumps;
  if (p.invincible > 0) p.invincible--;
}

function handleCombat(p, opp) {
  if (!p.attack) return;
  p.attackFrame--;

  if (p.action === 'startup' && p.attackFrame <= 0) {
    p.action = 'active';
    p.attackFrame = p.attack.active;
    p.hasHit = false;
  } else if (p.action === 'active') {
    if (!p.attack.isProjectile && !p.attack.isGuard && p.attackFrame % 4 === 0) {
      hitGyroWithMelee(p, p.attack);
    }
    if (p.attack.isMultiHit && (p.attack.hitCount || 0) < 3 && p.attackFrame % 3 === 0) {
      p.hasHit = false;
    }
    if (!p.hasHit) {
      if (p.attack.isGuard) {
        p.hasHit = true;
      } else if (p.attack.isProjectile) {
        p.hasHit = true;
        launchProjectile(p, p.attack);
      } else {
        const pDim = getFighterDim(p);
        const oDim = getFighterDim(opp);
        const hitbox = p.attack.hitbox || { x: p.attack.isRest ? 48 : p.attack.reach || 82, y: 82, offsetX: p.facing * 24, offsetY: 0 };
        const hitCenterX = p.x + pDim.w / 2 + hitbox.offsetX;
        const hitCenterY = p.y + pDim.h / 2 + hitbox.offsetY;
        const overlapsTarget =
          hitCenterX + hitbox.x >= opp.x &&
          hitCenterX - hitbox.x <= opp.x + oDim.w &&
          hitCenterY + hitbox.y >= opp.y &&
          hitCenterY - hitbox.y <= opp.y + oDim.h;

        if (overlapsTarget && opp.invincible <= 0) {
          p.hasHit = true;
          const atk = p.attack;
          if (atk.isMultiHit) atk.hitCount = (atk.hitCount || 0) + 1;
          if (opp.guard > 0) {
            const counterDamage = opp.guardCounterDamage || opp.attack?.counterDamage || 0;
            opp.guard = 0;
            opp.guardCounterDamage = 0;
            opp.vx = -p.facing * 6 / opp.weight;
            opp.vy = 5 / opp.weight;
            applyHitstun(opp, getHitstunFrames(atk, atk.dmg * 0.35));
            if (counterDamage > 0) {
              p.percent += counterDamage;
              p.vx = -opp.facing * (5 + counterDamage * 0.35) / p.weight;
              p.vy = (3 + counterDamage * 0.25) / p.weight;
              applyHitstun(p, 8 + counterDamage);
            }
            spawnVFX(opp.x + oDim.w / 2, opp.y + oDim.h / 2, 'ring', CHARACTERS[opp.char].accent, 32);
            playSound('hit');
          } else if (atk.isSing) {
            applyHitstun(opp, atk.hitstun);
            playSound('hit');
            spawnVFX(opp.x + 20, opp.y + 30, 'ring', '#38bdf8', 32);
          } else if (atk.isRest) {
            opp.percent += atk.dmg;
            const scale = 1.1 + (opp.percent / 100) * 1.1;
            opp.vx = p.facing * atk.kbx * scale / opp.weight;
            opp.vy = atk.kby * scale / opp.weight;
            applyHitstun(opp, getHitstunFrames(atk));
            playSound('rest');
            spawnVFX(opp.x + 26, opp.y + 30, 'burst', '#fef08a', 44);
          } else {
            const damage = p.powerBoost > 0 ? atk.dmg * 1.2 : atk.dmg;
            opp.percent += damage;
            const scale = 0.55 + (opp.percent / 100) * 0.65;
            if (atk.carryTarget) {
              p.grabTarget = true;
              p.grabTicks = 0;
              p.action = 'grabbing';
              p.attackFrame = 0;
              p.hasHit = false;
              opp.grabbedBy = true;
              opp.grabEscape = 0;
              opp.grabMashInputs = {};
              opp.action = 'grabbed';
              opp.attack = null;
              opp.attackFrame = 0;
              opp.hasHit = false;
              opp.vx = 0;
              opp.vy = 0;
              playSound('hit');
              spawnVFX(opp.x + oDim.w / 2, opp.y + oDim.h / 2, 'burst', atk.color || '#f43f5e', 22);
              return;
            } else if (atk.pullTarget) {
              opp.vx = (p.x - opp.x) * 0.08 / opp.weight;
              opp.vy = Math.max(2, atk.kby * scale) / opp.weight;
            } else {
              opp.vx = p.facing * atk.kbx * scale / opp.weight;
              opp.vy = atk.kby * scale / opp.weight;
            }
            applyHitstun(opp, getHitstunFrames(atk, damage));
            playSound('hit');
            spawnVFX(opp.x + 26, opp.y + 30, 'burst', atk.color || '#f43f5e', 22);
          }
        }
      }
    }

    if (p.action === 'active' && p.attack && p.attackFrame <= 0) {
      p.action = 'endlag';
      p.attackFrame = p.attack.endlag;
    }
  } else if (p.action === 'endlag' && p.attackFrame <= 0) {
    p.action = 'idle';
    p.attack = null;
    p.hasHit = false;
  }
}

function launchProjectile(fighter, attack) {
  if (attack.isGyro && fighter.gyroActive) return;
  const dim = getFighterDim(fighter);
  const count = attack.projectileCount || 1;
  for (let shot = 0; shot < count; shot++) {
    const spread = count === 1 ? 0 : (shot - (count - 1) / 2) * 0.16;
    const angle = attack.projectileAngle || 0;
    const speed = attack.projectileSpeed || 11;
    const trap = attack.isTrap === true;
    const projectileRadius = attack.projectileRadius || 15;
    projectiles.push({
      x: fighter.x + dim.w / 2 + fighter.facing * (attack.isGyro
        ? dim.w / 2 + projectileRadius + 2
        : trap ? 44 : 30),
      y: attack.isGyro
        ? fighter.y + (attack.projectileRadius || 16) + 1
        : fighter.y + (trap ? dim.h * (angle < 0 ? 0.18 : angle > 0 ? 0.95 : 0.3) : dim.h * 0.65),
      vx: trap ? 0 : fighter.facing * speed * Math.cos(angle),
      vy: attack.isGyro ? 2.8 : trap ? 0 : speed * (Math.sin(angle) + spread),
      owner: fighter,
      color: attack.color,
      style: attack.projectileStyle || 0,
      isTrap: trap,
      isHoming: attack.isHoming === true,
      homingSpeed: attack.projectileSpeed || 11,
      isChargedShot: attack.isChargedShot === true,
      isGyro: attack.isGyro === true,
      gyroBounces: 0,
      gyroGrounded: false,
      hitCooldown: 0,
      rotation: 0,
      rotationSpeed: attack.projectileRotation || (attack.isGyro ? 0.22 : 0),
      damage: attack.dmg / count,
      hitstun: getHitstunFrames(attack),
      kbx: attack.kbx,
      kby: attack.kby,
      life: trap ? attack.trapDuration || 100 : attack.projectileLife || (attack.isGyro ? 600 : 130),
      radius: projectileRadius
    });
    if (attack.isGyro) {
      fighter.gyroActive = true;
      fighter.hasGyro = false;
    }
  }
  playTone(680, 'triangle', 0.12, 0.1);
}

function removeProjectile(index) {
  const [projectile] = projectiles.splice(index, 1);
  if (projectile?.isGyro) projectile.owner.gyroActive = false;
  return projectile;
}

function hitGyroWithMelee(fighter, attack) {
  const dim = getFighterDim(fighter);
  const hitbox = attack.hitbox || {
    x: attack.reach || 72,
    y: 70,
    offsetX: fighter.facing * 22,
    offsetY: 0
  };
  const hitX = fighter.x + dim.w / 2 + hitbox.offsetX;
  const hitY = fighter.y + dim.h / 2 + hitbox.offsetY;
  for (const projectile of projectiles) {
    if (!projectile.isGyro || projectile.hitByAttackCooldown > 0) continue;
    if (Math.abs(projectile.x - hitX) > hitbox.x + projectile.radius ||
        Math.abs(projectile.y - hitY) > hitbox.y + projectile.radius) continue;
    deflectGyro(projectile, fighter, false);
    projectile.hitByAttackCooldown = 14;
    spawnVFX(projectile.x, projectile.y, 'ring', '#fb923c', 24);
    playSound('hit');
  }
}

function deflectGyro(projectile, target, damageTarget) {
  const previousOwner = projectile.owner;
  if (!damageTarget) projectile.owner = target;
  if (projectile.owner !== previousOwner) previousOwner.gyroActive = false;
  projectile.owner.gyroActive = true;
  projectile.gyroGrounded = false;
  projectile.canPickup = true;
  projectile.hitCooldown = 12;
  projectile.lastHitTarget = target;
  projectile.hitByAttackCooldown = 14;
  projectile.vx = -Math.sign(projectile.vx || target.facing) * Math.max(3, Math.abs(projectile.vx) * 0.58);
  projectile.vy = 4;
  projectile.rotationSpeed = Math.sign(projectile.vx) * 0.34;
  projectile.gyroBounces = 0;
  projectile.damage = Math.max(3, projectile.damage * 0.82);
}

function tryPickupGyro(projectile, picker = null) {
  if (!projectile.isGyro ||
      (!picker && (!projectile.canPickup || !projectile.gyroGrounded || projectile.vx !== 0))) {
    return false;
  }
  let closestFighter = null;
  let closestDistance = Infinity;
  for (const fighter of picker ? [picker] : [p1, p2]) {
    const dim = getFighterDim(fighter);
    const centerX = fighter.x + dim.w / 2;
    const dx = projectile.x - centerX;
    const dy = projectile.y - fighter.y;
    if (Math.abs(dx) >= dim.w / 2 + projectile.radius ||
        Math.abs(dy) >= dim.h * 0.7 + projectile.radius) continue;
    const distance = dx * dx + dy * dy;
    if (distance < closestDistance) {
      closestFighter = fighter;
      closestDistance = distance;
    }
  }
  if (!closestFighter) return false;
  closestFighter.hasGyro = true;
  closestFighter.gyroActive = false;
  removeProjectile(projectiles.indexOf(projectile));
  spawnVFX(projectile.x, projectile.y, 'ring', '#67e8f9', 20);
  playSound('jump');
  return true;
}

function tryPickupNearbyGyro(fighter) {
  let closest = null;
  let closestDistance = Infinity;
  const dim = getFighterDim(fighter);
  const centerX = fighter.x + dim.w / 2;
  for (const projectile of projectiles) {
    if (!projectile.isGyro) continue;
    const dx = projectile.x - centerX;
    const dy = projectile.y - (fighter.y + dim.h / 2);
    const distance = dx * dx + dy * dy;
    if (Math.abs(dx) <= dim.w / 2 + projectile.radius + 22 &&
        Math.abs(dy) <= dim.h / 2 + projectile.radius + 22 &&
        distance < closestDistance) {
      closest = projectile;
      closestDistance = distance;
    }
  }
  return closest ? tryPickupGyro(closest, fighter) : false;
}

function updateProjectiles() {
  for (let i = projectiles.length - 1; i >= 0; i--) {
    const projectile = projectiles[i];
    if (projectile.hitCooldown > 0) projectile.hitCooldown--;
    if (projectile.hitByAttackCooldown > 0) projectile.hitByAttackCooldown--;
    const previousY = projectile.y;
    if (projectile.isHoming) {
      const target = projectile.owner === p1 ? p2 : p1;
      const targetDim = getFighterDim(target);
      const targetX = target.x + targetDim.w / 2;
      const targetY = target.y + targetDim.h / 2;
      const angle = Math.atan2(projectile.vy, projectile.vx);
      const targetAngle = Math.atan2(targetY - projectile.y, targetX - projectile.x);
      const turn = Math.atan2(Math.sin(targetAngle - angle), Math.cos(targetAngle - angle));
      const nextAngle = angle + Math.max(-0.035, Math.min(0.035, turn));
      projectile.vx = Math.cos(nextAngle) * projectile.homingSpeed;
      projectile.vy = Math.sin(nextAngle) * projectile.homingSpeed;
    }
    if (projectile.isGyro && projectile.gyroGrounded) {
      const platforms = [...selectedStage.platforms, selectedStage.ground];
      const supported = platforms.some((platform) =>
        Math.abs(projectile.y - (platform.y + projectile.radius)) < 1 &&
        projectile.x >= platform.x &&
        projectile.x <= platform.x + platform.w
      );
      if (!supported) {
        projectile.gyroGrounded = false;
        projectile.vy = -0.5;
      }
    }
    if (projectile.isGyro && projectile.gyroGrounded) {
      projectile.vx *= 0.94;
      projectile.rotationSpeed = Math.sign(projectile.vx) * 0.28;
    } else {
      projectile.x += projectile.vx;
      if (projectile.isGyro) projectile.vy -= 0.48;
    }
    if (projectile.isGyro && projectile.gyroGrounded) projectile.x += projectile.vx;
    projectile.y += projectile.vy;
    projectile.rotation += projectile.rotationSpeed;
    projectile.life--;

    if (projectile.isGyro && !projectile.gyroGrounded && projectile.vy <= 0) {
      const platforms = [...selectedStage.platforms, selectedStage.ground];
      for (const platform of platforms) {
        const crossedSurface = previousY >= platform.y + projectile.radius &&
          projectile.y <= platform.y + projectile.radius;
        if (crossedSurface && projectile.x >= platform.x && projectile.x <= platform.x + platform.w) {
          projectile.y = platform.y + projectile.radius;
          projectile.gyroBounces++;
          if (projectile.gyroBounces >= 3 || Math.abs(projectile.vy) < 3.5) {
            projectile.vy = 0;
            projectile.gyroGrounded = true;
            projectile.rotationSpeed = Math.sign(projectile.vx) * 0.28;
          } else {
            projectile.vy = Math.abs(projectile.vy) * 0.58;
            projectile.vx *= 0.96;
          }
          break;
        }
      }
    }

    if (projectile.isGyro && projectile.gyroGrounded && Math.abs(projectile.vx) < 0.55) {
      projectile.vx = 0;
      projectile.canPickup = true;
    }
    if (projectile.hitCooldown <= 0) projectile.lastHitTarget = null;
    if (tryPickupGyro(projectile)) continue;

    const targets = projectile.isGyro
      ? [p1, p2]
      : [projectile.owner === p1 ? p2 : p1];
    let hitTarget = false;
    for (const target of targets) {
      const dim = getFighterDim(target);
      const targetX = target.x + dim.w / 2;
      const targetY = target.y + dim.h / 2;
      const overlapsTarget =
        Math.abs(projectile.x - targetX) < projectile.radius + dim.w / 2 &&
        Math.abs(projectile.y - targetY) < projectile.radius + dim.h / 2;
      if (!overlapsTarget) continue;

      if (target.guard > 0) {
        target.guard = 0;
        spawnVFX(targetX, targetY, 'ring', CHARACTERS[target.char].accent, 32);
        playSound('hit');
        if (projectile.isGyro) {
          deflectGyro(projectile, target, false);
        } else {
          removeProjectile(i);
        }
        hitTarget = true;
        break;
      }

      if (target.invincible > 0 ||
          projectile.hitCooldown > 0 ||
          projectile.lastHitTarget === target) continue;
      target.percent += projectile.damage;
      target.vx = Math.sign(projectile.vx) * projectile.kbx * (0.55 + target.percent / 100 * 0.65) / target.weight;
      target.vy = projectile.kby * (0.55 + target.percent / 100 * 0.65) / target.weight;
      applyHitstun(target, projectile.hitstun);
      spawnVFX(targetX, target.y + dim.h / 2, 'burst', projectile.color, 24);
      playSound('hit');
      if (projectile.isGyro) {
        deflectGyro(projectile, target, true);
      } else {
        removeProjectile(i);
      }
      hitTarget = true;
      break;
    }
    if (hitTarget) continue;

    if (projectile.life <= 0 || projectile.x < -40 || projectile.x > ARENA_W + 40) {
      removeProjectile(i);
    }
  }
}

function checkBlastZones(p, isP1) {
  if (!gameRunning) return;
  if (p.x < -100 || p.x > ARENA_W + 100 || p.y < -150 || p.y > ARENA_H + 200) {
    cancelGrapple(p, isP1 ? p2 : p1);
    p.stocks--;
    playSound('ko');
    updateStockUI();
    spawnVFX(Math.max(50, Math.min(ARENA_W - 50, p.x)), Math.max(50, p.y), 'burst', '#fbbf24', 40);
    if (p.stocks <= 0) {
      gameRunning = false;
      showWinScreen(isP1 ? p2 : p1, isP1 ? 2 : 1);
    } else {
      const spawn = getStageSpawnPoints()[isP1 ? 0 : 1];
      p.x = spawn.x;
      p.y = spawn.y;
      p.vx = 0;
      p.vy = 0;
      p.percent = 0;
      p.action = 'idle';
      p.attack = null;
      p.grabTarget = false;
      p.grabbedBy = false;
      p.grabTicks = 0;
      p.chargeFrames = 0;
      p.storedCharge = 0;
      p.smashCharging = false;
      p.smashChargeFrames = 0;
      p.invincible = 90;
    }
  }
}

function drawJigglypuff(f) {
  const anim = f.attack ? f.attack.anim : null;
  const isActive = f.action === 'active';

  ctx.save();
  // Squash and stretch based on attack or physics
  if (anim === 'rest' && isActive) {
    ctx.scale(1.15, 0.85); // Sleeping puff
  } else if (anim === 'headbutt' && isActive) {
    ctx.rotate(0.35);
    ctx.scale(1.2, 0.9);
  } else if (anim === 'drill' && isActive) {
    ctx.rotate((Date.now() / 40) % (Math.PI * 2));
  } else if (anim === 'rollout' && isActive) {
    ctx.rotate((Date.now() / 25) % (Math.PI * 2));
  }

  // Body circle
  ctx.fillStyle = '#f472b6';
  ctx.beginPath();
  ctx.arc(0, 0, 28, 0, Math.PI * 2);
  ctx.fill();

  // Ears
  ctx.fillStyle = '#db2777';
  ctx.beginPath();
  ctx.moveTo(-16, -18); ctx.lineTo(-24, -36); ctx.lineTo(-8, -26); ctx.fill();
  ctx.beginPath();
  ctx.moveTo(16, -18); ctx.lineTo(24, -36); ctx.lineTo(8, -26); ctx.fill();

  // Eyes
  if (anim === 'rest') {
    // Closed sleeping eyes
    ctx.strokeStyle = '#831843';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(-8, -2, 5, Math.PI, 0);
    ctx.arc(10, -2, 5, Math.PI, 0);
    ctx.stroke();
  } else {
    ctx.fillStyle = '#0284c7';
    ctx.beginPath();
    ctx.arc(-8, -4, 6, 0, Math.PI * 2);
    ctx.arc(10, -4, 6, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#fff';
    ctx.beginPath();
    ctx.arc(-6, -6, 2.5, 0, Math.PI * 2);
    ctx.arc(12, -6, 2.5, 0, Math.PI * 2);
    ctx.fill();
  }

  // Physical swinging arm / hand
  if (anim === 'pound' || anim === 'slap') {
    ctx.fillStyle = '#ec4899';
    ctx.beginPath();
    ctx.arc(28, 4, anim === 'pound' ? 14 : 9, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.restore();
}

function drawSteve(f) {
  const anim = f.attack ? f.attack.anim : null;
  const isAttacking = f.action === 'active' || f.action === 'startup';
  let armAngle = 0.2; // default standing arm angle

  if (isAttacking) {
    armAngle = Math.sin(Date.now() / 40) * 1.2 - 0.4;
  }

  ctx.save();
  // Head
  ctx.fillStyle = '#fcd34d';
  ctx.fillRect(-14, -34, 28, 28);
  // Hair
  ctx.fillStyle = '#451a03';
  ctx.fillRect(-14, -34, 28, 8);
  // Face eye
  ctx.fillStyle = '#1e3a8a';
  ctx.fillRect(4, -22, 5, 4);

  // Torso
  ctx.fillStyle = '#0284c7';
  ctx.fillRect(-12, -6, 24, 24);

  // Legs
  ctx.fillStyle = '#1e3a8a';
  ctx.fillRect(-10, 18, 9, 14);
  ctx.fillRect(1, 18, 9, 14);

  // Animated Tool Arm (Rotates around shoulder at x=2, y= -2)
  ctx.save();
  ctx.translate(2, -2);
  ctx.rotate(armAngle);

  // Arm
  ctx.fillStyle = '#fcd34d';
  ctx.fillRect(-4, 0, 8, 20);

  // Held Weapon/Tool
  if (anim === 'sword-slash') {
    ctx.fillStyle = '#38bdf8';
    ctx.fillRect(0, 18, 28, 6);
    ctx.fillStyle = '#0284c7';
    ctx.fillRect(26, 18, 6, 6);
  } else if (anim === 'pickaxe') {
    ctx.fillStyle = '#78350f';
    ctx.fillRect(0, 18, 22, 5);
    ctx.fillStyle = '#64748b';
    ctx.fillRect(18, 12, 6, 17);
  } else if (anim === 'axe-swing') {
    ctx.fillStyle = '#78350f';
    ctx.fillRect(0, 18, 20, 5);
    ctx.fillStyle = '#94a3b8';
    ctx.fillRect(14, 10, 12, 14);
  } else if (anim === 'shovel') {
    ctx.fillStyle = '#78350f';
    ctx.fillRect(0, 18, 20, 5);
    ctx.fillStyle = '#cbd5e1';
    ctx.fillRect(18, 16, 8, 9);
  } else if (anim === 'tnt') {
    ctx.fillStyle = '#ef4444';
    ctx.fillRect(6, 10, 20, 20);
    ctx.fillStyle = '#fff';
    ctx.font = 'bold 8px sans-serif';
    ctx.fillText('TNT', 8, 24);
  } else if (anim === 'anvil') {
    ctx.fillStyle = '#334155';
    ctx.fillRect(-8, 20, 26, 16);
  }
  ctx.restore();

  // Minecart vehicle wrapper
  if (anim === 'minecart' && isAttacking) {
    ctx.fillStyle = '#64748b';
    ctx.fillRect(-22, 10, 44, 22);
    ctx.fillStyle = '#020617';
    ctx.beginPath();
    ctx.arc(-12, 32, 6, 0, Math.PI * 2);
    ctx.arc(12, 32, 6, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.restore();
}

function drawGyroBot(f) {
  const attack = f.attack?.anim;
  const active = f.action === 'active';
  const time = Date.now();
  const armAngle = attack === 'gyro-bot-rotor-arm'
    ? time / 22
    : attack === 'gyro-bot-crane-swing' ? -1.45
      : attack === 'gyro-bot-skid-sweep' ? 1.05
        : attack === 'gyro-bot-pincer-thrust' ? -0.18
          : Math.sin(time / 280) * 0.08;
  const bodyBob = f.onGround ? Math.sin(time / 190) * 1.5 : 0;
  const lifting = attack === 'gyro-bot-lifter' && active;

  ctx.save();
  ctx.translate(0, bodyBob);
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';

  const shell = ctx.createLinearGradient(-25, -5, 24, 24);
  shell.addColorStop(0, '#f8fafc');
  shell.addColorStop(0.52, '#cbd5e1');
  shell.addColorStop(1, '#64748b');

  ctx.fillStyle = '#334155';
  ctx.strokeStyle = '#0f172a';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.ellipse(0, 27, 28, 10, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  ctx.fillStyle = '#fb923c';
  ctx.beginPath();
  ctx.ellipse(0, 27, 16, 4, 0, 0, Math.PI * 2);
  ctx.fill();
  for (const [x, y] of [[-23, 28], [23, 28], [0, 33]]) {
    ctx.fillStyle = '#0f172a';
    ctx.beginPath();
    ctx.ellipse(x, y, 7, 4, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#67e8f9';
    ctx.beginPath();
    ctx.arc(x, y, 1.6, 0, Math.PI * 2);
    ctx.fill();
  }

  const headTilt = attack === 'gyro-bot-crane-swing' ? -0.18 :
    attack === 'gyro-bot-skid-sweep' ? 0.15 :
      active && attack === 'gyro-bot-prism-beam' ? -0.08 : Math.sin(time / 420) * 0.025;
  ctx.fillStyle = '#475569';
  ctx.strokeStyle = '#0f172a';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.roundRect(-8, -25, 16, 32, 5);
  ctx.fill();
  ctx.stroke();
  ctx.fillStyle = '#fb923c';
  ctx.fillRect(-9, -17, 18, 4);
  ctx.fillRect(-8, -7, 16, 3);
  ctx.fillStyle = shell;
  ctx.beginPath();
  ctx.roundRect(-13, 8, 26, 22, 6);
  ctx.fill();
  ctx.stroke();
  ctx.fillStyle = '#0f766e';
  ctx.fillRect(-8, 13, 16, 5);
  ctx.fillStyle = '#67e8f9';
  ctx.beginPath();
  ctx.arc(0, 22, 3, 0, Math.PI * 2);
  ctx.fill();

  ctx.save();
  ctx.translate(3, -43);
  ctx.rotate(headTilt);
  ctx.strokeStyle = '#334155';
  ctx.lineWidth = 3;
  ctx.fillStyle = shell;
  ctx.beginPath();
  ctx.moveTo(-22, -12); ctx.quadraticCurveTo(-25, -18, -18, -22);
  ctx.lineTo(18, -20); ctx.quadraticCurveTo(25, -17, 23, -10);
  ctx.lineTo(20, 7); ctx.quadraticCurveTo(18, 12, 12, 11);
  ctx.lineTo(-17, 13); ctx.quadraticCurveTo(-23, 11, -23, 5);
  ctx.fill();
  ctx.stroke();
  ctx.fillStyle = '#0f766e';
  ctx.beginPath();
  ctx.roundRect(-18, -15, 37, 22, 8);
  ctx.fill();
  ctx.fillStyle = '#082f49';
  ctx.strokeStyle = '#99f6e4';
  ctx.lineWidth = 1.5;
  for (const [x, y, radius] of [[-8, -4, 5], [7, -3, 3.5]]) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = '#67e8f9';
    ctx.beginPath();
    ctx.arc(x + 1, y - 1, radius * 0.48, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#082f49';
  }
  ctx.fillStyle = '#fb923c';
  ctx.beginPath();
  ctx.arc(19, -17, 3, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#fb923c';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(17, -19); ctx.lineTo(22, -27);
  ctx.stroke();
  ctx.fillStyle = '#f8fafc';
  ctx.beginPath();
  ctx.arc(22, -28, 2, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();

  for (const side of [-1, 1]) {
    const angle = side > 0
      ? armAngle
      : attack === 'gyro-bot-skid-sweep' ? 0.95 : -0.18 + Math.sin(time / 310) * 0.06;
    ctx.save();
    ctx.translate(side * 20, -9);
    ctx.rotate(angle);
    ctx.fillStyle = '#334155';
    ctx.strokeStyle = '#0f172a';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(0, 0, 7, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = side < 0 ? '#fb923c' : '#cbd5e1';
    ctx.beginPath();
    ctx.roundRect(side < 0 ? -8 : -6, 4, side < 0 ? 16 : 12, 16, 4);
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = '#0f766e';
    ctx.fillRect(side < 0 ? -6 : -4, 8, side < 0 ? 12 : 8, 4);
    if (side > 0) {
      ctx.strokeStyle = '#334155';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(0, 18); ctx.lineTo(-4, 26);
      ctx.moveTo(0, 18); ctx.lineTo(5, 25);
      ctx.stroke();
    } else {
      ctx.fillStyle = '#0f172a';
      ctx.beginPath();
      ctx.arc(0, 23, 8, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#67e8f9';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(0, 23, attack === 'gyro-bot-rotor-arm' ? 14 : 9, -1.2, 1.2);
      ctx.stroke();
    }
    if (lifting) {
      ctx.strokeStyle = '#67e8f9';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(0, 27); ctx.lineTo(0, 40);
      ctx.stroke();
    }
    if (side > 0 && (attack === 'gyro-bot-pincer-thrust' || attack === 'gyro-bot-rotor-arm')) {
      ctx.strokeStyle = '#fdba74';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(0, 23, attack === 'gyro-bot-rotor-arm' ? 22 : 14, -1.3, 1.3);
      ctx.stroke();
    }
    ctx.restore();
  }
  if (attack === 'gyro-bot-prism-beam' && (f.action === 'startup' || active)) {
    ctx.strokeStyle = '#67e8f9';
    ctx.shadowColor = '#67e8f9';
    ctx.shadowBlur = active ? 18 : 6;
    ctx.lineWidth = active ? 7 : 2;
    ctx.beginPath();
    ctx.moveTo(18, -51);
    ctx.lineTo(active ? 132 : 48, -51);
    ctx.stroke();
    ctx.shadowBlur = 0;
  }
  if (attack === 'gyro-bot-gyro' && (f.action === 'startup' || active)) {
    ctx.save();
    ctx.translate(25, 17);
    ctx.rotate(time / 22);
    ctx.fillStyle = '#fb923c';
    ctx.strokeStyle = '#ffedd5';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(0, -13); ctx.lineTo(11, 0); ctx.lineTo(0, 13); ctx.lineTo(-11, 0); ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.strokeStyle = '#134e4a';
    ctx.beginPath();
    ctx.moveTo(-7, 0); ctx.lineTo(7, 0);
    ctx.moveTo(0, -7); ctx.lineTo(0, 7);
    ctx.stroke();
    ctx.restore();
  }
  ctx.restore();
}

function drawMario(f) {
  const anim = f.attack ? f.attack.anim : null;
  const move = f.attack?.move;
  const attacking = f.action === 'active' || f.action === 'startup';
  ctx.save();
  if (attacking && move === 'up') {
    ctx.translate(0, -5);
    ctx.scale(0.9, 1.12);
  } else if (attacking && move === 'down') {
    ctx.translate(0, 5);
    ctx.scale(1.12, 0.88);
  } else if (attacking && move === 'side') {
    ctx.rotate(-0.12);
    ctx.translate(5, 0);
  }
  ctx.fillStyle = '#fcd34d';
  ctx.fillRect(-13, -34, 26, 22);
  ctx.fillStyle = '#b91c1c';
  ctx.fillRect(-15, -38, 30, 9);
  ctx.fillRect(-18, -32, 36, 5);
  ctx.fillStyle = '#1e3a8a';
  ctx.fillRect(4, -26, 4, 4);
  ctx.fillStyle = '#2563eb';
  ctx.fillRect(-13, -12, 26, 26);
  ctx.fillStyle = '#facc15';
  ctx.fillRect(-8, -8, 4, 4);
  ctx.fillRect(4, -8, 4, 4);
  ctx.fillStyle = '#7f1d1d';
  ctx.fillRect(-11, 12, 9, 18);
  ctx.fillRect(2, 12, 9, 18);
  if (attacking) {
    ctx.strokeStyle = '#fcd34d';
    ctx.fillStyle = '#fcd34d';
    ctx.lineWidth = 6;
    if (move === 'up') {
      ctx.beginPath();
      ctx.moveTo(8, -8); ctx.lineTo(15, -29);
      ctx.stroke();
      ctx.fillStyle = '#fef08a';
      ctx.beginPath();
      ctx.arc(16, -32, 8, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#fbbf24';
      ctx.beginPath();
      ctx.moveTo(-17, -10); ctx.lineTo(-27, -22); ctx.lineTo(-20, -35);
      ctx.stroke();
    } else if (move === 'down') {
      ctx.beginPath();
      ctx.moveTo(-28, 19); ctx.quadraticCurveTo(0, 30, 30, 19);
      ctx.stroke();
      ctx.fillStyle = '#fb923c';
      ctx.beginPath();
      ctx.ellipse(20, 17, 15, 5, 0, 0, Math.PI * 2);
      ctx.fill();
    } else if (move === 'side') {
      ctx.lineWidth = 8;
      ctx.beginPath();
      ctx.moveTo(8, -5); ctx.lineTo(35, -4);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(26, -14); ctx.lineTo(46, -4); ctx.lineTo(26, 6);
      ctx.stroke();
    } else {
      ctx.fillStyle = anim === 'fireball' ? '#fb923c' : '#fcd34d';
      ctx.beginPath();
      ctx.arc(anim === 'fireball' ? 28 : 20, -4, anim === 'fireball' ? 10 : 7, 0, Math.PI * 2);
      ctx.fill();
    }
    if (anim === 'fireball') {
      ctx.fillStyle = '#fef3c7';
      ctx.beginPath();
      ctx.arc(28, -4, 5, 0, Math.PI * 2);
      ctx.fill();
    }
  }
  ctx.restore();
}

function drawPikachu(f) {
  const anim = f.attack ? f.attack.anim : null;
  const move = f.attack?.move;
  const attacking = f.action === 'active' || f.action === 'startup';
  ctx.save();
  if (attacking && move === 'up') {
    ctx.translate(0, -4);
    ctx.scale(0.82, 1.18);
  } else if (attacking && move === 'down') {
    ctx.translate(0, 5);
    ctx.scale(1.16, 0.84);
  } else if (attacking && move === 'side') {
    ctx.translate(7, 0);
    ctx.rotate(-0.08);
    if (anim === 'quick-attack') ctx.globalAlpha = 0.55;
  }
  ctx.fillStyle = '#facc15';
  ctx.beginPath();
  ctx.ellipse(0, 0, 25, 27, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(-17, -19); ctx.lineTo(-27, -43); ctx.lineTo(-8, -30); ctx.fill();
  ctx.moveTo(11, -22); ctx.lineTo(22, -43); ctx.lineTo(20, -15); ctx.fill();
  ctx.fillStyle = '#27272a';
  ctx.beginPath();
  ctx.arc(-9, -6, 3, 0, Math.PI * 2);
  ctx.arc(10, -6, 3, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#ef4444';
  ctx.beginPath();
  ctx.arc(-20, 4, 5, 0, Math.PI * 2);
  ctx.arc(20, 4, 5, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#a16207';
  ctx.beginPath();
  ctx.moveTo(18, 8); ctx.lineTo(31, 0); ctx.lineTo(25, 12);
  ctx.lineTo(36, 20); ctx.lineTo(24, 17); ctx.lineTo(20, 29);
  ctx.lineTo(17, 18); ctx.lineTo(7, 13); ctx.fill();
  if (attacking) {
    ctx.strokeStyle = '#fef08a';
    ctx.lineWidth = move === 'side' ? 7 : 5;
    ctx.beginPath();
    if (move === 'up') {
      ctx.moveTo(-19, -13); ctx.lineTo(-26, -27); ctx.lineTo(-18, -38);
      ctx.moveTo(2, -16); ctx.lineTo(8, -30); ctx.lineTo(16, -37);
    } else if (move === 'down') {
      ctx.arc(0, 12, 34, 0.12, Math.PI - 0.12);
      ctx.moveTo(-25, 16); ctx.lineTo(-34, 22);
      ctx.moveTo(24, 16); ctx.lineTo(34, 22);
    } else if (move === 'side') {
      ctx.moveTo(14, -4); ctx.lineTo(39, -4);
      ctx.moveTo(27, -13); ctx.lineTo(42, -4); ctx.lineTo(27, 5);
      ctx.moveTo(-30, -12); ctx.lineTo(-42, -20);
    } else {
      ctx.moveTo(-23, -2); ctx.lineTo(-30, -10); ctx.lineTo(-24, -16);
    }
    ctx.stroke();
  }
  ctx.restore();
}

function drawMorrow(f) {
  const time = Date.now();
  const active = f.action === 'active';
  const starting = f.action === 'startup';
  const move = f.attack?.anim;
  const flap = Math.sin(time / (active ? 42 : 150)) * (active ? 0.62 : 0.28);
  const lean = starting ? -0.18 : active && move === 'morrow-needle-lunge' ? 0.42 : 0;

  ctx.save();
  ctx.rotate(lean);

  for (const side of [-1, 1]) {
    ctx.save();
    ctx.translate(side * 7, -7);
    ctx.rotate(side * (flap + (active && move === 'morrow-glasswing-lift' ? -0.45 : 0)));
    ctx.fillStyle = 'rgba(94, 234, 212, 0.42)';
    ctx.strokeStyle = '#ccfbf1';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.quadraticCurveTo(side * 11, -36, side * 35, -42);
    ctx.quadraticCurveTo(side * 32, -13, side * 11, 12);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(side * 28, -29);
    ctx.moveTo(side * 5, 5);
    ctx.lineTo(side * 25, -5);
    ctx.stroke();
    ctx.restore();
  }

  ctx.fillStyle = '#0f172a';
  ctx.beginPath();
  ctx.moveTo(0, -31);
  ctx.quadraticCurveTo(18, -18, 12, 4);
  ctx.quadraticCurveTo(8, 24, 0, 30);
  ctx.quadraticCurveTo(-8, 24, -12, 4);
  ctx.quadraticCurveTo(-18, -18, 0, -31);
  ctx.fill();

  ctx.fillStyle = '#c084fc';
  ctx.beginPath();
  ctx.moveTo(0, -25);
  ctx.lineTo(7, -13);
  ctx.lineTo(0, -2);
  ctx.lineTo(-7, -13);
  ctx.closePath();
  ctx.fill();

  ctx.fillStyle = '#e9d5ff';
  ctx.beginPath();
  ctx.arc(-4, -19, 1.8, 0, Math.PI * 2);
  ctx.arc(4, -19, 1.8, 0, Math.PI * 2);
  ctx.fill();

  ctx.strokeStyle = '#5eead4';
  ctx.lineWidth = 3;
  for (const side of [-1, 1]) {
    const swing = Math.sin(time / (active ? 36 : 110) + side) * (active ? 0.8 : 0.25);
    ctx.beginPath();
    ctx.moveTo(side * 8, 9);
    ctx.quadraticCurveTo(side * (18 + swing * 8), 18, side * (13 + swing * 12), 35);
    ctx.stroke();
    ctx.fillStyle = '#c084fc';
    ctx.beginPath();
    ctx.arc(side * (13 + swing * 12), 35, 3, 0, Math.PI * 2);
    ctx.fill();
  }

  if (active && move === 'morrow-prism-seed') {
    ctx.save();
    ctx.translate(27, -8);
    ctx.rotate(time / 160);
    ctx.shadowColor = '#c084fc';
    ctx.shadowBlur = 18;
    ctx.fillStyle = '#e9d5ff';
    ctx.beginPath();
    ctx.moveTo(0, -11); ctx.lineTo(8, 0); ctx.lineTo(0, 11); ctx.lineTo(-8, 0);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  } else if (active && move === 'morrow-shatter-bloom') {
    ctx.strokeStyle = '#c084fc';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(0, 0, 30 + Math.sin(time / 25) * 5, 0, Math.PI * 2);
    ctx.stroke();
    for (let shard = 0; shard < 6; shard++) {
      const angle = time / 130 + shard * Math.PI / 3;
      ctx.fillStyle = shard % 2 ? '#5eead4' : '#e9d5ff';
      ctx.beginPath();
      ctx.moveTo(Math.cos(angle) * 36, Math.sin(angle) * 36);
      ctx.lineTo(Math.cos(angle + 0.16) * 49, Math.sin(angle + 0.16) * 49);
      ctx.lineTo(Math.cos(angle - 0.12) * 49, Math.sin(angle - 0.12) * 49);
      ctx.closePath();
      ctx.fill();
    }
  } else if (active && move === 'morrow-crescent-rake') {
    ctx.strokeStyle = '#e9d5ff';
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.arc(10, -5, 35, -1.2, 0.8);
    ctx.stroke();
  } else if (active && move === 'morrow-tendril-sweep') {
    ctx.strokeStyle = '#c084fc';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(-8, 10); ctx.quadraticCurveTo(-36, -4, -43, 14);
    ctx.moveTo(-4, 17); ctx.quadraticCurveTo(-24, 37, -37, 31);
    ctx.moveTo(8, 10); ctx.quadraticCurveTo(36, -4, 43, 14);
    ctx.moveTo(4, 17); ctx.quadraticCurveTo(24, 37, 37, 31);
    ctx.stroke();
  } else if (active && move === 'morrow-needle-lunge') {
    ctx.globalAlpha = 0.38;
    ctx.fillStyle = '#5eead4';
    for (const offset of [-17, -29]) {
      ctx.beginPath();
      ctx.ellipse(offset, 0, 9, 25, -0.25, 0, Math.PI * 2);
      ctx.fill();
    }
  } else if (active && move === 'morrow-glasswing-lift') {
    ctx.strokeStyle = '#e9d5ff';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(0, 0, 39, Math.PI, Math.PI * 2);
    ctx.stroke();
  }
  ctx.restore();
}

function drawPersonalAppendage(character, time, attacking) {
  const rate = character.motionRate || 1;
  const phase = time / ((attacking ? 32 + character.identity % 45 : 105 + character.identity % 120) * rate);
  const sway = Math.sin(phase + character.identity) * 0.3;
  ctx.save();
  ctx.fillStyle = character.accent;
  ctx.strokeStyle = character.accent;
  ctx.lineWidth = 3 + character.identity % 3;

  if (character.appendage === 0) {
    ctx.beginPath();
    ctx.moveTo(-8, -20); ctx.quadraticCurveTo(-18, -43, -27, -34);
    ctx.moveTo(8, -20); ctx.quadraticCurveTo(18, -43, 27, -34);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(-27, -34, 4 + character.identity % 3, 0, Math.PI * 2);
    ctx.arc(27, -34, 4 + character.identity % 3, 0, Math.PI * 2);
    ctx.fill();
  } else if (character.appendage === 1) {
    for (const side of [-1, 1]) {
      ctx.beginPath();
      ctx.moveTo(side * 13, -2);
      ctx.lineTo(side * (28 + character.identity % 8), -13 + sway * 8);
      ctx.lineTo(side * 21, 9);
      ctx.closePath();
      ctx.fill();
    }
  } else if (character.appendage === 2) {
    ctx.save();
    ctx.rotate(phase * 0.3);
    ctx.beginPath();
    ctx.ellipse(0, 0, 34, 25 + character.identity % 7, 0, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  } else if (character.appendage === 3) {
    ctx.save();
    ctx.translate(-17, 7);
    ctx.rotate(sway);
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.quadraticCurveTo(-22, -9, -18, -28 - character.identity % 9);
    ctx.quadraticCurveTo(-11, -13, 2, -9);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  } else if (character.appendage === 4) {
    for (const side of [-1, 1]) {
      ctx.save();
      ctx.translate(side * 17, -2);
      ctx.rotate(side * sway);
      ctx.beginPath();
      ctx.ellipse(side * 15, -3, 16, 7 + character.identity % 5, side * 0.35, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
  } else if (character.appendage === 5) {
    ctx.beginPath();
    ctx.moveTo(-10, -20);
    ctx.lineTo(-4, -35 - character.identity % 9);
    ctx.lineTo(3, -23);
    ctx.lineTo(13, -39);
    ctx.lineTo(16, -18);
    ctx.closePath();
    ctx.fill();
  } else if (character.appendage === 6) {
    for (let mote = 0; mote < 3; mote++) {
      const angle = phase + mote * Math.PI * 2 / 3;
      const x = Math.cos(angle) * (31 + character.identity % 9);
      const y = Math.sin(angle) * (24 + character.identity % 7);
      ctx.beginPath();
      ctx.moveTo(x, y - 5); ctx.lineTo(x + 4, y);
      ctx.lineTo(x, y + 5); ctx.lineTo(x - 4, y); ctx.closePath();
      ctx.fill();
    }
  } else if (character.appendage === 7) {
    ctx.beginPath();
    ctx.moveTo(-13, 5); ctx.lineTo(-29, 15 + sway * 7);
    ctx.lineTo(-17, 22); ctx.moveTo(13, 5);
    ctx.lineTo(29, 15 - sway * 7); ctx.lineTo(17, 22);
    ctx.stroke();
  } else if (character.appendage === 8) {
    ctx.save();
    ctx.rotate(sway);
    ctx.beginPath();
    ctx.moveTo(-18, -15); ctx.lineTo(-32, 25 + character.identity % 10);
    ctx.quadraticCurveTo(0, 16, 31, 25 - character.identity % 10);
    ctx.lineTo(17, -15); ctx.closePath(); ctx.fill();
    ctx.restore();
  } else {
    ctx.save();
    ctx.rotate(phase * 0.4);
    ctx.beginPath();
    ctx.ellipse(0, -4, 17 + character.identity % 8, 36, 0, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  }
  ctx.restore();
}

function drawIndividualFighter(f) {
  const character = CHARACTERS[f.char];
  const id = character.identity;
  const time = Date.now();
  const active = f.action === 'active';
  const attacking = active || f.action === 'startup';
  const rate = character.motionRate;
  const pulse = Math.sin(time / (90 * rate) + id) * 0.06;
  const lean = attacking ? Math.sin(time / (35 * rate) + id) * 0.18 : Math.sin(time / (190 * rate) + id) * 0.035;

  ctx.save();
  ctx.rotate(lean);
  if (f.action === 'startup') ctx.scale(0.9 + pulse, 0.88 - pulse);
  else if (active) ctx.scale(1.05 + pulse, 0.94 - pulse);
  else if (f.action === 'hitstun') ctx.rotate(Math.sign(f.vx || 1) * 0.22);
  else if (!f.onGround) ctx.rotate(Math.sign(f.vx) * 0.08);

  const silhouette = 5 + id % 8;
  const bodyW = 17 + id % 13;
  const bodyH = 17 + (id * 7) % 17;
  const variation = (index) => {
    const value = Math.sin((id + 1) * 127.1 + (index + 1) * 311.7) * 43758.5453;
    return value - Math.floor(value);
  };

  ctx.fillStyle = character.color;
  ctx.strokeStyle = character.accent;
  ctx.lineWidth = 2 + id % 4;
  ctx.beginPath();
  for (let point = 0; point < silhouette; point++) {
    const angle = -Math.PI / 2 + point * Math.PI * 2 / silhouette;
    const scale = 0.7 + variation(point) * 0.65;
    const x = Math.cos(angle) * bodyW * scale;
    const y = Math.sin(angle) * bodyH * scale;
    if (point === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  const headX = (variation(20) - 0.5) * 24;
  const headY = -bodyH * (0.55 + variation(21) * 0.3);
  const headPoints = 3 + id % 7;
  const headRx = 7 + variation(22) * 9;
  const headRy = 7 + variation(23) * 10;
  ctx.fillStyle = character.accent;
  ctx.beginPath();
  for (let point = 0; point < headPoints; point++) {
    const angle = -Math.PI / 2 + point * Math.PI * 2 / headPoints;
    const scale = 0.78 + variation(24 + point) * 0.44;
    const x = headX + Math.cos(angle) * headRx * scale;
    const y = headY + Math.sin(angle) * headRy * scale;
    if (point === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.closePath();
  ctx.fill();

  const limbCount = 2 + id % 7;
  const moveDirection = f.attack?.move || 'neutral';
  const attackAngle = moveDirection === 'up' ? -Math.PI / 2 :
    moveDirection === 'down' ? Math.PI / 2 :
      moveDirection === 'side' ? 0 : (id % 8) * Math.PI / 4;
  for (let limb = 0; limb < limbCount; limb++) {
    const baseAngle = limb * Math.PI * 2 / limbCount + id * 0.17;
    const swing = attacking ? Math.sin(time / (30 * rate) + limb + id) * 0.75 : Math.sin(time / (140 * rate) + limb + id) * 0.18;
    const angle = baseAngle + swing + (attacking && limb === id % limbCount ? attackAngle * 0.3 : 0);
    const startX = Math.cos(baseAngle) * bodyW * 0.62;
    const startY = Math.sin(baseAngle) * bodyH * 0.62;
    const length = 9 + variation(40 + limb) * (15 + id % 15);
    const jointX = startX + Math.cos(angle + swing * 0.35) * length * 0.55;
    const jointY = startY + Math.sin(angle + swing * 0.35) * length * 0.55;
    const endX = startX + Math.cos(angle) * length;
    const endY = startY + Math.sin(angle) * length;

    ctx.strokeStyle = limb % 2 ? character.color : character.accent;
    ctx.lineWidth = 2 + variation(60 + limb) * (2 + id % 5);
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.quadraticCurveTo(jointX, jointY, endX, endY);
    ctx.stroke();
    ctx.fillStyle = character.accent;
    ctx.beginPath();
    if ((id + limb) % 3 === 0) {
      ctx.arc(endX, endY, 2 + variation(70 + limb) * 5, 0, Math.PI * 2);
    } else {
      ctx.moveTo(endX, endY);
      ctx.lineTo(endX - Math.cos(angle - 0.5) * 6, endY - Math.sin(angle - 0.5) * 6);
      ctx.lineTo(endX - Math.cos(angle + 0.5) * 6, endY - Math.sin(angle + 0.5) * 6);
      ctx.closePath();
    }
    ctx.fill();
  }

  const eyeCount = 1 + id % 4;
  ctx.fillStyle = '#0f172a';
  for (let eye = 0; eye < eyeCount; eye++) {
    const x = headX + (eye - (eyeCount - 1) / 2) * (3 + id % 4);
    const y = headY + (variation(90 + eye) - 0.5) * 8;
    ctx.beginPath();
    ctx.arc(x, y, 1.3 + variation(100 + eye) * 1.8, 0, Math.PI * 2);
    ctx.fill();
  }

  if (attacking) {
    const effect = id % 6;
    ctx.globalAlpha = 0.45 + variation(110) * 0.5;
    ctx.strokeStyle = character.accent;
    ctx.fillStyle = character.accent;
    ctx.lineWidth = 2 + id % 5;
    ctx.beginPath();
    if (effect === 0) {
      ctx.arc(0, 0, 25 + id % 23, attackAngle - 0.9, attackAngle + 0.9);
      ctx.stroke();
    } else if (effect === 1) {
      for (let ray = 0; ray < 3 + id % 5; ray++) {
        const angle = attackAngle + (ray - 2) * 0.19;
        ctx.moveTo(0, 0);
        ctx.lineTo(Math.cos(angle) * (26 + id % 19), Math.sin(angle) * (26 + id % 19));
      }
      ctx.stroke();
    } else if (effect === 2) {
      ctx.ellipse(Math.cos(attackAngle) * 25, Math.sin(attackAngle) * 25, 8 + id % 11, 5 + id % 7, attackAngle, 0, Math.PI * 2);
      ctx.fill();
    } else if (effect === 3) {
      ctx.moveTo(0, 0);
      ctx.lineTo(Math.cos(attackAngle - 0.45) * (34 + id % 20), Math.sin(attackAngle - 0.45) * (34 + id % 20));
      ctx.lineTo(Math.cos(attackAngle) * (42 + id % 22), Math.sin(attackAngle) * (42 + id % 22));
      ctx.lineTo(Math.cos(attackAngle + 0.45) * (34 + id % 20), Math.sin(attackAngle + 0.45) * (34 + id % 20));
      ctx.stroke();
    } else if (effect === 4) {
      ctx.arc(0, 0, 18 + id % 17, time / 130, time / 130 + Math.PI * (0.7 + variation(111)));
      ctx.stroke();
    } else {
      for (let spark = 0; spark < 4 + id % 5; spark++) {
        const angle = attackAngle + spark * Math.PI * 2 / (4 + id % 5);
        ctx.fillRect(Math.cos(angle) * (23 + id % 21), Math.sin(angle) * (23 + id % 21), 3 + id % 4, 3 + id % 3);
      }
    }
    ctx.globalAlpha = 1;
  }
  ctx.restore();
}

function drawOriginalFighter(f) {
  const character = CHARACTERS[f.char];
  const time = Date.now();
  const active = f.action === 'active';
  const attacking = active || f.action === 'startup';
  const identity = character.identity ?? getOriginalStyle(character, f.char);
  const animationStyle = character.attackStyle ?? identity;
  const motionRate = character.motionRate || 1;
  const idleBob = f.onGround && f.action === 'idle'
    ? Math.sin(time / (160 + animationStyle * 11) + identity) * (1.2 + animationStyle % 4 * 0.35)
    : 0;
  ctx.save();

  if (f.action === 'startup') {
    ctx.translate(-4 - animationStyle % 4, 1 + animationStyle % 3);
    ctx.rotate(-0.14 - (animationStyle % 5) * 0.025);
    ctx.scale(0.92, 1.07);
  } else if (active) {
    ctx.translate(5 + animationStyle % 5, -2 - animationStyle % 3);
    ctx.rotate(0.09 + (animationStyle % 5) * 0.025);
    ctx.scale(1.08, 0.94);
  } else if (f.action === 'hitstun') {
    ctx.rotate(Math.sign(f.vx) * 0.22);
  } else {
    ctx.translate(0, idleBob);
  }

  ctx.fillStyle = character.color;
  ctx.strokeStyle = character.accent;
  ctx.lineWidth = 4;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.shadowColor = character.accent;
  ctx.shadowBlur = f.powerBoost > 0 ? 14 : 5;
  ctx.scale(character.bodyScaleX || 1, character.bodyScaleY || 1);

  if (!['orb', 'jelly', 'wheel', 'crystal', 'manta', 'voxel'].includes(character.form)) {
    const armReach = active ? 36 : f.action === 'startup' ? 15 : 25;
    const armLift = active ? -12 : f.action === 'startup' ? 7 : 3;
    const armSwing = Math.sin(time / (active ? 35 : 160) + identity) * (active ? 8 : 3);
    ctx.strokeStyle = character.accent;
    ctx.lineWidth = 7;
    ctx.beginPath();
    ctx.moveTo(-12, 1);
    ctx.quadraticCurveTo(-22, 5 + armSwing, -armReach * 0.5, 12 + armSwing);
    ctx.moveTo(12, 1);
    ctx.quadraticCurveTo(20, armLift + armSwing, armReach, armLift + armSwing);
    ctx.stroke();
    ctx.fillStyle = character.accent;
    ctx.beginPath();
    ctx.arc(-armReach * 0.5, 12 + armSwing, 4, 0, Math.PI * 2);
    ctx.arc(armReach, armLift + armSwing, 4.5, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = character.color;
  }

  if (character.weapon === 'stormblade') {
    ctx.fillStyle = '#0f172a';
    ctx.beginPath();
    ctx.moveTo(-17, 4); ctx.lineTo(-27, 29); ctx.lineTo(0, 20);
    ctx.lineTo(26, 29); ctx.lineTo(17, 4); ctx.closePath();
    ctx.fill();
    ctx.fillStyle = character.color;
    ctx.beginPath();
    ctx.moveTo(-18, -18); ctx.lineTo(-24, 10); ctx.lineTo(-12, 31);
    ctx.lineTo(0, 23); ctx.lineTo(12, 31); ctx.lineTo(24, 10);
    ctx.lineTo(18, -18); ctx.closePath();
    ctx.fill();
    ctx.fillStyle = '#cbd5e1';
    ctx.fillRect(-18, -12, 36, 7);
    ctx.fillStyle = character.accent;
    ctx.beginPath();
    ctx.moveTo(-16, -25); ctx.lineTo(-12, -38); ctx.lineTo(0, -43);
    ctx.lineTo(12, -38); ctx.lineTo(16, -25); ctx.closePath();
    ctx.fill();
    ctx.fillStyle = '#082f49';
    ctx.fillRect(-9, -34, 18, 7);
    ctx.fillStyle = '#f8fafc';
    ctx.fillRect(-7, -32, 4, 2);
    ctx.fillRect(3, -32, 4, 2);
    ctx.strokeStyle = '#f8fafc';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(-10, -15); ctx.lineTo(0, 8); ctx.lineTo(10, -15);
    ctx.stroke();
  } else if (character.weapon === 'ember-greatsword') {
    ctx.fillStyle = '#451a03';
    ctx.beginPath();
    ctx.moveTo(-19, -20); ctx.lineTo(-27, -5); ctx.lineTo(-18, 12);
    ctx.lineTo(-7, 5); ctx.lineTo(0, 14); ctx.lineTo(8, 3);
    ctx.lineTo(22, 12); ctx.lineTo(27, -5); ctx.lineTo(17, -20);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = '#b91c1c';
    ctx.fillRect(-21, -17, 42, 8);
    ctx.fillStyle = '#f97316';
    ctx.beginPath();
    ctx.moveTo(-15, -25); ctx.lineTo(-9, -38); ctx.lineTo(0, -31);
    ctx.lineTo(8, -40); ctx.lineTo(16, -24); ctx.closePath();
    ctx.fill();
    ctx.fillStyle = '#1c1917';
    ctx.fillRect(-9, -32, 5, 3);
    ctx.fillRect(4, -32, 5, 3);
    ctx.strokeStyle = '#fbbf24';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(-15, -14); ctx.lineTo(15, -14);
    ctx.stroke();
  } else if (character.weapon === 'twin-edges') {
    ctx.fillStyle = '#1e1b4b';
    ctx.beginPath();
    ctx.moveTo(-18, -22); ctx.lineTo(-27, -5); ctx.lineTo(-13, 1);
    ctx.lineTo(-6, -12); ctx.closePath();
    ctx.moveTo(18, -22); ctx.lineTo(27, -5); ctx.lineTo(13, 1);
    ctx.lineTo(6, -12); ctx.closePath();
    ctx.fill();
    ctx.fillStyle = '#c4b5fd';
    ctx.fillRect(-20, -17, 40, 6);
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(-8, -31, 16, 5);
    ctx.fillStyle = '#f5f3ff';
    ctx.fillRect(-7, -30, 4, 2);
    ctx.fillRect(3, -30, 4, 2);
  } else if (character.weapon === 'rune-codex') {
    ctx.fillStyle = '#134e4a';
    ctx.beginPath();
    ctx.moveTo(-16, -23); ctx.lineTo(-23, 3); ctx.lineTo(-12, 30);
    ctx.lineTo(0, 25); ctx.lineTo(12, 30); ctx.lineTo(23, 3);
    ctx.lineTo(16, -23); ctx.closePath();
    ctx.fill();
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(-9, -34, 18, 7);
    ctx.fillStyle = '#f0abfc';
    ctx.fillRect(-7, -32, 4, 2);
    ctx.fillRect(3, -32, 4, 2);
    ctx.strokeStyle = '#5eead4';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(-9, -14); ctx.lineTo(0, 8); ctx.lineTo(9, -14);
    ctx.stroke();
  } else if (character.form === 'space-dragon') {
    const wing = Math.sin(time / (active ? 32 : 115)) * 5;
    ctx.fillStyle = '#1e1b4b';
    ctx.beginPath();
    ctx.moveTo(-7, -9);
    ctx.lineTo(-38, -37 - wing);
    ctx.lineTo(-28, -5);
    ctx.lineTo(-39, 11);
    ctx.lineTo(-4, 8);
    ctx.closePath();
    ctx.moveTo(7, -9);
    ctx.lineTo(38, -37 + wing);
    ctx.lineTo(28, -5);
    ctx.lineTo(39, 11);
    ctx.lineTo(4, 8);
    ctx.closePath();
    ctx.fill();
    ctx.strokeStyle = character.accent;
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.fillStyle = character.color;
    ctx.beginPath();
    ctx.ellipse(-1, 4, 22, 17, -0.12, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(-16, 11);
    ctx.quadraticCurveTo(-31, 16, -39, 28);
    ctx.lineTo(-50, 25);
    ctx.lineTo(-41, 20);
    ctx.quadraticCurveTo(-30, 7, -17, 4);
    ctx.fill();
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(7, -5);
    ctx.lineTo(20, -23);
    ctx.lineTo(36, -21);
    ctx.lineTo(46, -13);
    ctx.lineTo(33, -9);
    ctx.lineTo(21, -11);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = character.accent;
    ctx.beginPath();
    ctx.moveTo(20, -23);
    ctx.lineTo(15, -34);
    ctx.lineTo(28, -25);
    ctx.moveTo(28, -21);
    ctx.lineTo(37, -31);
    ctx.lineTo(35, -20);
    ctx.fill();
    ctx.fillStyle = '#fef08a';
    ctx.beginPath();
    ctx.arc(34, -17, 2.5, 0, Math.PI * 2);
    ctx.fill();
    for (const side of [-1, 1]) {
      ctx.fillStyle = character.color;
      ctx.beginPath();
      ctx.moveTo(side * 9, 12);
      ctx.lineTo(side * 18, 30);
      ctx.lineTo(side * 7, 27);
      ctx.closePath();
      ctx.fill();
    }
  } else if (character.form === 'beast') {
    const stride = attacking ? Math.sin(time / (45 * motionRate)) * 5 : 0;
    ctx.fillRect(-18, 12 + stride, 8, 18);
    ctx.fillRect(10, 12 - stride, 8, 18);
    ctx.beginPath();
    ctx.ellipse(0, 0, 24, 17, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(-14, -10); ctx.lineTo(-20, -32); ctx.lineTo(-3, -18);
    ctx.moveTo(5, -15); ctx.lineTo(12, -32); ctx.lineTo(16, -10);
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(19, 3); ctx.quadraticCurveTo(39, -5, 28, -19);
    ctx.stroke();
    ctx.fillStyle = '#0f172a';
    ctx.beginPath(); ctx.arc(9, -5, 2.5, 0, Math.PI * 2); ctx.fill();
  } else if (character.form === 'voxel') {
    const style = character.voxelStyle ?? 0;
    const bob = active ? Math.sin(time / (34 * motionRate)) * 3 : 0;
    const step = attacking ? Math.sin(time / (42 * motionRate)) * 4 : 0;
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(-14, 11, 11, 22 + step);
    ctx.fillRect(3, 11, 11, 22 - step);
    ctx.fillStyle = character.color;
    ctx.fillRect(-17, -16 + bob, 34, 31);
    ctx.fillStyle = character.accent;
    ctx.fillRect(-22, -13 + bob, 7, 18);
    ctx.fillRect(15, -13 + bob, 7, 18);
    ctx.fillStyle = '#cbd5e1';
    ctx.fillRect(-18, -19 + bob, 36, 5);
    ctx.fillStyle = style === 0 ? '#78350f' : style === 1 ? '#365314' : '#172554';
    ctx.fillRect(-16, -39 + bob, 32, 22);
    ctx.fillStyle = character.accent;
    if (style === 0) {
      ctx.fillRect(-19, -42 + bob, 38, 6);
      ctx.fillRect(-7, -45 + bob, 14, 4);
    } else if (style === 1) {
      ctx.fillRect(-19, -35 + bob, 6, 12);
      ctx.fillRect(13, -35 + bob, 6, 12);
      ctx.fillRect(-8, -31 + bob, 16, 3);
    } else {
      ctx.fillRect(-20, -35 + bob, 7, 14);
      ctx.fillRect(13, -35 + bob, 7, 14);
      ctx.fillStyle = '#e0f2fe';
      ctx.fillRect(-13, -35 + bob, 26, 10);
    }
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(-9, -31 + bob, 5, 5);
    ctx.fillRect(4, -31 + bob, 5, 5);
    ctx.fillStyle = character.accent;
    ctx.fillRect(-8, -19 + bob, 16, 3);
    if (style === 0) {
      ctx.fillStyle = '#78350f';
      ctx.fillRect(20, -8 + bob, 8, 24);
      ctx.fillStyle = '#fef3c7';
      ctx.fillRect(15, -17 + bob, 18, 12);
      ctx.fillStyle = '#92400e';
      ctx.fillRect(18, -14 + bob, 12, 6);
    } else if (style === 1) {
      ctx.fillStyle = '#854d0e';
      ctx.fillRect(20, -10 + bob, 5, 28);
      ctx.fillStyle = '#a3e635';
      ctx.fillRect(15, -18 + bob, 15, 8);
      ctx.fillRect(17, -14 + bob, 11, 14);
    } else {
      ctx.fillStyle = '#cbd5e1';
      ctx.fillRect(20, -14 + bob, 5, 30);
      ctx.fillStyle = '#67e8f9';
      ctx.fillRect(15, -22 + bob, 15, 12);
      ctx.fillRect(18, -10 + bob, 9, 6);
    }
  } else if (character.form === 'block') {
    const bounce = active ? -4 : 0;
    ctx.fillRect(-22, -24 + bounce, 44, 44);
    ctx.fillRect(-25, -12 + bounce, 10, 24);
    ctx.fillRect(15, -12 + bounce, 10, 24);
    ctx.fillRect(-18, 20, 13, 12);
    ctx.fillRect(5, 20, 13, 12);
    ctx.fillStyle = character.accent;
    ctx.fillRect(-14, -16 + bounce, 7, 5);
    ctx.fillRect(7, -16 + bounce, 7, 5);
    ctx.fillRect(-8, -1 + bounce, 16, 5);
  } else if (character.form === 'wing') {
    const flap = Math.sin(time / ((active ? 38 : 115) * motionRate)) * 0.35;
    ctx.save();
    ctx.rotate(flap);
    ctx.beginPath();
    ctx.ellipse(-22, -2, 15, 23, -0.5, 0, Math.PI * 2);
    ctx.ellipse(22, -2, 15, 23, 0.5, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
    ctx.beginPath();
    ctx.ellipse(0, 2, 9, 28, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(-4, -6, 2, 0, Math.PI * 2);
    ctx.arc(4, -6, 2, 0, Math.PI * 2);
    ctx.fillStyle = '#0f172a';
    ctx.fill();
    ctx.strokeStyle = character.accent;
    ctx.beginPath();
    ctx.moveTo(-3, -22); ctx.quadraticCurveTo(-18, -38, -20, -27);
    ctx.moveTo(3, -22); ctx.quadraticCurveTo(18, -38, 20, -27);
    ctx.stroke();
  } else if (character.form === 'orb') {
    const pulse = active ? 1 + Math.sin(time / (40 * motionRate)) * 0.12 : 1 + Math.sin(time / (180 * motionRate)) * 0.04;
    ctx.scale(pulse, pulse);
    ctx.shadowColor = character.accent;
    ctx.shadowBlur = attacking ? 22 : 10;
    ctx.beginPath();
    ctx.arc(0, 0, 24, 0, Math.PI * 2);
    ctx.fill();
    ctx.shadowBlur = 0;
    ctx.strokeStyle = character.accent;
    ctx.beginPath();
    ctx.ellipse(0, 0, 33, 11, time / 650, 0, Math.PI * 2);
    ctx.stroke();
    ctx.fillStyle = '#0f172a';
    ctx.beginPath();
    ctx.arc(-8, -3, 3, 0, Math.PI * 2);
    ctx.arc(8, -3, 3, 0, Math.PI * 2);
    ctx.fill();
  } else if (character.form === 'horn') {
    ctx.fillRect(-17, 11, 9, 21);
    ctx.fillRect(8, 11, 9, 21);
    ctx.beginPath();
    ctx.ellipse(0, 1, 21, 21, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(-12, -13); ctx.quadraticCurveTo(-25, -34, -26, -21);
    ctx.moveTo(12, -13); ctx.quadraticCurveTo(25, -34, 26, -21);
    ctx.stroke();
    ctx.fillStyle = character.accent;
    ctx.beginPath();
    ctx.moveTo(-8, -14); ctx.lineTo(-2, -26); ctx.lineTo(2, -14);
    ctx.moveTo(8, -14); ctx.lineTo(14, -26); ctx.lineTo(18, -12);
    ctx.fill();
  } else if (character.form === 'serpent') {
    const coil = Math.sin(time / ((active ? 45 : 160) * motionRate)) * 3;
    ctx.beginPath();
    ctx.ellipse(-4, 9, 21, 12 + coil, 0, 0, Math.PI * 2);
    ctx.ellipse(4, 2, 15, 10, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(9, -13, 15, 12, -0.2, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#0f172a';
    ctx.beginPath(); ctx.arc(15, -16, 2.5, 0, Math.PI * 2); ctx.fill();
    ctx.strokeStyle = character.accent;
    ctx.beginPath();
    ctx.moveTo(-20, 8); ctx.quadraticCurveTo(-36, -4, -29, -17);
    ctx.stroke();
  } else if (character.form === 'sprout') {
    const sway = Math.sin(time / ((active ? 48 : 160) * motionRate)) * 0.13;
    ctx.save();
    ctx.rotate(sway);
    ctx.fillRect(-5, -3, 10, 29);
    ctx.beginPath();
    ctx.ellipse(0, -13, 15, 16, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = character.accent;
    ctx.beginPath();
    ctx.ellipse(-13, -25, 13, 6, -0.5, 0, Math.PI * 2);
    ctx.ellipse(13, -25, 13, 6, 0.5, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#0f172a';
    ctx.beginPath();
    ctx.arc(-5, -14, 2.5, 0, Math.PI * 2);
    ctx.arc(5, -14, 2.5, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  } else if (character.form === 'avian') {
    const flap = Math.sin(time / ((active ? 35 : 100) * motionRate)) * 0.6;
    ctx.save();
    ctx.rotate(flap);
    ctx.beginPath();
    ctx.moveTo(-7, -4); ctx.quadraticCurveTo(-40, -36, -34, -2);
    ctx.lineTo(-8, 8); ctx.fill();
    ctx.beginPath();
    ctx.moveTo(7, -4); ctx.quadraticCurveTo(40, -36, 34, -2);
    ctx.lineTo(8, 8); ctx.fill();
    ctx.restore();
    ctx.beginPath();
    ctx.ellipse(0, 3, 10, 23, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(7, -12); ctx.lineTo(20, -8); ctx.lineTo(7, -4); ctx.fill();
    ctx.fillStyle = '#0f172a';
    ctx.beginPath(); ctx.arc(-4, -7, 2.5, 0, Math.PI * 2); ctx.fill();
  } else if (character.form === 'shell') {
    ctx.fillRect(-18, 8, 11, 23);
    ctx.fillRect(7, 8, 11, 23);
    ctx.beginPath();
    ctx.ellipse(0, 1, 25, 19, 0, Math.PI, Math.PI * 2);
    ctx.lineTo(25, 6);
    ctx.ellipse(0, 6, 25, 10, 0, 0, Math.PI);
    ctx.fill();
    ctx.strokeStyle = character.accent;
    ctx.beginPath();
    ctx.moveTo(-13, -11); ctx.lineTo(-7, -2); ctx.lineTo(0, -14);
    ctx.lineTo(8, -2); ctx.lineTo(15, -11); ctx.stroke();
    ctx.beginPath(); ctx.arc(24, 1, 10, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = '#0f172a'; ctx.fillRect(27, -2, 2, 3);
  } else if (character.form === 'wheel') {
    const roll = time / ((active ? 25 : 120) * motionRate);
    ctx.beginPath(); ctx.arc(0, 0, 25, 0, Math.PI * 2); ctx.fill();
    ctx.save();
    ctx.rotate(roll);
    ctx.strokeStyle = character.accent;
    ctx.lineWidth = 4;
    for (let spoke = 0; spoke < 6; spoke++) {
      ctx.rotate(Math.PI / 3);
      ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(0, 22); ctx.stroke();
    }
    ctx.restore();
    ctx.fillStyle = character.accent;
    ctx.beginPath(); ctx.arc(0, 0, 7, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = '#0f172a';
    ctx.beginPath(); ctx.arc(-8, -4, 2.5, 0, Math.PI * 2); ctx.fill();
  } else if (character.form === 'crystal') {
    const turn = active ? Math.sin(time / (55 * motionRate)) * 0.2 : Math.sin(time / (230 * motionRate)) * 0.06;
    ctx.save();
    ctx.rotate(turn);
    ctx.beginPath();
    ctx.moveTo(0, -34); ctx.lineTo(23, -10); ctx.lineTo(17, 20);
    ctx.lineTo(0, 31); ctx.lineTo(-21, 12); ctx.lineTo(-18, -15);
    ctx.closePath(); ctx.fill();
    ctx.strokeStyle = character.accent;
    ctx.beginPath(); ctx.moveTo(0, -32); ctx.lineTo(2, 12); ctx.lineTo(-18, -15);
    ctx.moveTo(2, 12); ctx.lineTo(22, -9); ctx.moveTo(2, 12); ctx.lineTo(0, 30);
    ctx.stroke();
    ctx.restore();
    ctx.fillStyle = '#0f172a'; ctx.fillRect(-8, -4, 4, 5); ctx.fillRect(5, -4, 4, 5);
  } else if (character.form === 'fungi') {
    const bounce = active ? Math.sin(time / (40 * motionRate)) * 4 : Math.sin(time / (170 * motionRate)) * 1.5;
    ctx.fillRect(-5, -4 + bounce, 10, 31);
    ctx.beginPath();
    ctx.ellipse(0, -17 + bounce, 29, 17, 0, Math.PI, Math.PI * 2);
    ctx.lineTo(25, -12 + bounce);
    ctx.quadraticCurveTo(0, -1 + bounce, -25, -12 + bounce);
    ctx.fill();
    ctx.fillStyle = character.accent;
    for (const spot of [-15, 0, 15]) {
      ctx.beginPath(); ctx.arc(spot, -20 + bounce, 4, 0, Math.PI * 2); ctx.fill();
    }
    ctx.fillStyle = '#0f172a';
    ctx.beginPath(); ctx.arc(-7, -9 + bounce, 2, 0, Math.PI * 2); ctx.arc(7, -9 + bounce, 2, 0, Math.PI * 2); ctx.fill();
  } else if (character.form === 'manta') {
    const flap = Math.sin(time / ((active ? 36 : 110) * motionRate)) * 0.45;
    ctx.save(); ctx.rotate(flap);
    ctx.beginPath();
    ctx.moveTo(-4, -2); ctx.quadraticCurveTo(-45, -40, -35, 18);
    ctx.lineTo(-4, 12); ctx.fill();
    ctx.beginPath();
    ctx.moveTo(4, -2); ctx.quadraticCurveTo(45, -40, 35, 18);
    ctx.lineTo(4, 12); ctx.fill();
    ctx.restore();
    ctx.beginPath();
    ctx.ellipse(0, 2, 12, 24, 0, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath();
    ctx.moveTo(0, 20); ctx.quadraticCurveTo(5, 33, 0, 38); ctx.stroke();
    ctx.fillStyle = '#0f172a';
    ctx.beginPath(); ctx.arc(-6, -7, 2, 0, Math.PI * 2); ctx.arc(6, -7, 2, 0, Math.PI * 2); ctx.fill();
  } else if (character.form === 'jelly') {
    const pulse = active ? 1 + Math.sin(time / (35 * motionRate)) * 0.16 : 1 + Math.sin(time / (180 * motionRate)) * 0.05;
    ctx.save(); ctx.scale(1, pulse);
    ctx.globalAlpha = 0.78;
    ctx.beginPath();
    ctx.moveTo(-22, 1); ctx.quadraticCurveTo(-27, -24, 0, -27);
    ctx.quadraticCurveTo(27, -24, 22, 1);
    ctx.quadraticCurveTo(0, 15, -22, 1); ctx.fill();
    ctx.globalAlpha = 1;
    ctx.restore();
    ctx.strokeStyle = character.accent;
    ctx.lineWidth = 4;
    for (let tendril = -2; tendril <= 2; tendril++) {
      const sway = Math.sin(time / (90 * motionRate) + tendril) * 5;
      ctx.beginPath();
      ctx.moveTo(tendril * 8, 5);
      ctx.quadraticCurveTo(tendril * 9 + sway, 20, tendril * 7 - sway, 31);
      ctx.stroke();
    }
    ctx.fillStyle = '#0f172a';
    ctx.beginPath(); ctx.arc(-8, -9, 2, 0, Math.PI * 2); ctx.arc(8, -9, 2, 0, Math.PI * 2); ctx.fill();
  } else if (character.form === 'mech') {
    const gear = time / ((active ? 30 : 100) * motionRate);
    ctx.fillRect(-18, -19, 36, 39);
    ctx.fillRect(-25, -12, 8, 24);
    ctx.fillRect(17, -12, 8, 24);
    ctx.fillRect(-15, 20, 10, 14);
    ctx.fillRect(5, 20, 10, 14);
    ctx.fillStyle = character.accent;
    ctx.fillRect(-11, -12, 22, 11);
    ctx.beginPath(); ctx.arc(0, -27, 11, 0, Math.PI * 2); ctx.fill();
    ctx.save(); ctx.translate(0, 6); ctx.rotate(gear);
    ctx.strokeStyle = character.accent; ctx.lineWidth = 3;
    ctx.beginPath(); ctx.arc(0, 0, 8, 0, Math.PI * 2); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(-8, 0); ctx.lineTo(8, 0); ctx.moveTo(0, -8); ctx.lineTo(0, 8); ctx.stroke();
    ctx.restore();
  } else if (character.form === 'puppet') {
    const sway = attacking ? Math.sin(time / (35 * motionRate)) * 0.35 : Math.sin(time / (150 * motionRate)) * 0.08;
    ctx.save();
    ctx.rotate(sway);
    ctx.strokeStyle = character.accent;
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(0, -23); ctx.lineTo(-15, -5); ctx.lineTo(-20, 15);
    ctx.moveTo(-14, -6); ctx.lineTo(15, -6); ctx.lineTo(20, 14);
    ctx.moveTo(0, -23); ctx.lineTo(0, 14);
    ctx.moveTo(0, 14); ctx.lineTo(-11, 31);
    ctx.moveTo(0, 14); ctx.lineTo(11, 31);
    ctx.stroke();
    ctx.fillStyle = character.color;
    ctx.beginPath(); ctx.arc(0, -28, 12, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = '#0f172a';
    ctx.beginPath(); ctx.arc(-4, -29, 2, 0, Math.PI * 2); ctx.arc(4, -29, 2, 0, Math.PI * 2); ctx.fill();
    ctx.restore();
  } else if (character.form === 'aquatic') {
    const tail = Math.sin(time / ((active ? 35 : 120) * motionRate)) * 0.45;
    ctx.beginPath();
    ctx.ellipse(0, 1, 24, 16, 0, 0, Math.PI * 2); ctx.fill();
    ctx.save(); ctx.translate(-20, 2); ctx.rotate(tail);
    ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(-17, -13); ctx.lineTo(-14, 0); ctx.lineTo(-17, 13); ctx.closePath(); ctx.fill();
    ctx.restore();
    ctx.fillStyle = character.accent;
    ctx.beginPath(); ctx.moveTo(-4, -11); ctx.lineTo(5, -27); ctx.lineTo(12, -9); ctx.fill();
    ctx.fillStyle = '#0f172a';
    ctx.beginPath(); ctx.arc(12, -4, 2.5, 0, Math.PI * 2); ctx.fill();
  } else {
    const step = attacking ? Math.sin(time / 45) * 5 : 0;
    ctx.fillRect(-17, -23, 34, 33);
    ctx.fillRect(-13, 10 + step, 10, 22);
    ctx.fillRect(3, 10 - step, 10, 22);
    ctx.fillRect(-22, -17, 8, 24);
    ctx.fillRect(14, -17, 8, 24);
    ctx.fillStyle = character.accent;
    ctx.beginPath();
    ctx.moveTo(-17, -23); ctx.lineTo(-12, -37); ctx.lineTo(12, -37);
    ctx.lineTo(17, -23); ctx.fill();
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(-9, -17, 4, 4);
    ctx.fillRect(5, -17, 4, 4);
    ctx.fillStyle = character.color;
  }

  if (character.weapon === 'stormblade' || character.weapon === 'ember-greatsword' ||
      character.weapon === 'twin-edges' || character.weapon === 'rune-codex') {
    const move = f.attack?.move;
    const angle = move === 'up' ? -1.35 : move === 'down' ? 0.9 : move === 'side' ? -0.15 : -0.75;
    const swing = active ? Math.sin(time / 34) * 0.16 : 0;
    if (character.weapon === 'twin-edges') {
      for (const facing of [-1, 1]) {
        ctx.save();
        ctx.translate(17 * facing, 1);
        ctx.scale(facing, 1);
        ctx.rotate(angle + swing);
        ctx.fillStyle = '#312e81';
        ctx.fillRect(-3, 0, 6, 15);
        ctx.fillStyle = '#ddd6fe';
        ctx.beginPath();
        ctx.moveTo(-4, 0); ctx.lineTo(-3, -30); ctx.lineTo(0, -41);
        ctx.lineTo(4, -30); ctx.lineTo(4, 0); ctx.closePath();
        ctx.fill();
        ctx.restore();
      }
    } else {
      ctx.save();
      ctx.translate(18, 0);
      ctx.rotate(angle + swing);
      ctx.fillStyle = character.weapon === 'ember-greatsword' ? '#7c2d12' : '#0f172a';
      ctx.fillRect(-4, 4, 8, character.weapon === 'ember-greatsword' ? 30 : 24);
      ctx.fillStyle = character.weapon === 'ember-greatsword' ? '#fb923c' : '#fbbf24';
      ctx.fillRect(-11, 0, 22, 5);
      ctx.fillStyle = character.weapon === 'ember-greatsword' ? '#fca5a5' : '#dbeafe';
      ctx.beginPath();
      if (character.weapon === 'ember-greatsword') {
        ctx.moveTo(-9, 0); ctx.lineTo(-12, -48); ctx.lineTo(-7, -72);
        ctx.lineTo(0, -83); ctx.lineTo(8, -72); ctx.lineTo(12, -48);
        ctx.lineTo(9, 0); ctx.closePath();
      } else {
        ctx.moveTo(-5, 0); ctx.lineTo(-7, -51); ctx.lineTo(0, -70);
        ctx.lineTo(7, -51); ctx.lineTo(5, 0); ctx.closePath();
      }
      ctx.fill();
      ctx.strokeStyle = character.accent;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(0, character.weapon === 'ember-greatsword' ? -72 : -62);
      ctx.lineTo(1, -6);
      ctx.stroke();
      ctx.restore();
    }

    if (character.weapon === 'rune-codex') {
      const pageTurn = Math.sin(time / 260) * 3;
      ctx.save();
      ctx.translate(-28, -5 + Math.sin(time / 210) * 3);
      ctx.rotate(-0.2 + pageTurn * 0.01);
      ctx.fillStyle = '#422006';
      ctx.fillRect(-12, -16, 25, 32);
      ctx.fillStyle = '#fef3c7';
      ctx.fillRect(-9, -13, 19, 26);
      ctx.strokeStyle = '#a855f7';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(-5, -7); ctx.lineTo(5, 7); ctx.lineTo(-5, 7); ctx.lineTo(5, -7);
      ctx.stroke();
      ctx.restore();
    }
  }

  if (character.weapon === 'prism-cannon') {
    const charge = Math.max(f.chargeFrames || 0, f.storedCharge || 0);
    ctx.save();
    ctx.translate(19, 3);
    ctx.fillStyle = '#0c4a6e';
    ctx.strokeStyle = character.accent;
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(-7, -8);
    ctx.lineTo(9, -8);
    ctx.lineTo(18, -5);
    ctx.lineTo(18, 5);
    ctx.lineTo(9, 8);
    ctx.lineTo(-7, 8);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = '#a5f3fc';
    ctx.shadowColor = '#67e8f9';
    ctx.shadowBlur = charge > 0 ? 8 + charge / 3 : 3;
    ctx.beginPath();
    ctx.arc(15, 0, 3 + Math.min(5, charge / 12), 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  if (character.appendage !== undefined) {
    drawPersonalAppendage(character, time, attacking);
  }

  if (character.crest !== undefined) {
    ctx.fillStyle = character.accent;
    ctx.strokeStyle = character.accent;
    ctx.lineWidth = 3;
    if (character.crest === 0) {
      ctx.beginPath();
      ctx.moveTo(-9, -23); ctx.lineTo(-5, -34); ctx.lineTo(0, -26);
      ctx.lineTo(6, -37); ctx.lineTo(10, -23); ctx.fill();
    } else if (character.crest === 1) {
      ctx.beginPath();
      ctx.moveTo(-19, 0); ctx.lineTo(-34, -9); ctx.lineTo(-27, 8);
      ctx.moveTo(18, 0); ctx.lineTo(33, -9); ctx.lineTo(26, 8); ctx.fill();
    } else if (character.crest === 2) {
      ctx.beginPath();
      ctx.moveTo(-8, -23); ctx.quadraticCurveTo(-22, -39, -23, -29);
      ctx.moveTo(8, -23); ctx.quadraticCurveTo(22, -39, 23, -29); ctx.stroke();
    } else if (character.crest === 3) {
      const orbit = time / 180 + identity;
      for (let shard = 0; shard < 3; shard++) {
        const angle = orbit + shard * Math.PI * 2 / 3;
        ctx.beginPath();
        ctx.arc(Math.cos(angle) * 34, Math.sin(angle) * 27, 3, 0, Math.PI * 2);
        ctx.fill();
      }
    } else if (character.crest === 4) {
      ctx.fillRect(-28, -10, 9, 14);
      ctx.fillRect(19, -10, 9, 14);
    } else if (character.crest === 5) {
      ctx.beginPath();
      ctx.moveTo(-12, -22); ctx.lineTo(-7, -34); ctx.lineTo(-2, -22);
      ctx.moveTo(2, -22); ctx.lineTo(7, -34); ctx.lineTo(12, -22); ctx.fill();
    } else if (character.crest === 6) {
      ctx.beginPath();
      ctx.moveTo(-17, 7); ctx.quadraticCurveTo(-36, -4, -29, -23);
      ctx.quadraticCurveTo(-25, -10, -13, -4); ctx.fill();
    } else if (character.crest === 7) {
      ctx.beginPath();
      ctx.arc(-20, -23, 6, 0, Math.PI * 2);
      ctx.arc(0, -30, 7, 0, Math.PI * 2);
      ctx.arc(20, -23, 6, 0, Math.PI * 2);
      ctx.fill();
    } else if (character.crest === 8) {
      ctx.beginPath();
      ctx.moveTo(-20, 4); ctx.quadraticCurveTo(-34, -14, -24, -23);
      ctx.moveTo(20, 4); ctx.quadraticCurveTo(34, -14, 24, -23); ctx.stroke();
    } else {
      const starTurn = time / 260 + identity;
      for (let star = 0; star < 4; star++) {
        const angle = starTurn + star * Math.PI / 2;
        const x = Math.cos(angle) * 34;
        const y = Math.sin(angle) * 28;
        ctx.beginPath();
        ctx.moveTo(x, y - 3); ctx.lineTo(x + 2, y); ctx.lineTo(x, y + 3);
        ctx.lineTo(x - 2, y); ctx.closePath(); ctx.fill();
      }
    }

    ctx.globalAlpha = 0.75;
    if (character.formStyle % 2 === 0) {
      ctx.beginPath();
      ctx.arc(-8, -3, 2, 0, Math.PI * 2);
      ctx.arc(8, -3, 2, 0, Math.PI * 2);
      ctx.fill();
    } else {
      ctx.beginPath();
      ctx.moveTo(-7, 2); ctx.lineTo(0, 5); ctx.lineTo(7, 2); ctx.stroke();
    }
    ctx.globalAlpha = 1;
  }

  ctx.shadowBlur = 0;
  ctx.globalAlpha = 0.18;
  ctx.fillStyle = '#fff';
  ctx.beginPath();
  ctx.ellipse(-8, -9, 5, 9, -0.35, 0, Math.PI * 2);
  ctx.fill();
  ctx.globalAlpha = 1;

  if (attacking) {
    const combatStyle = identity;
    const attack = f.attack;
    ctx.globalAlpha = f.action === 'startup' ? 0.42 : 0.76;
    ctx.strokeStyle = character.accent;
    ctx.fillStyle = character.accent;
    ctx.lineWidth = 3 + combatStyle % 4;
    ctx.beginPath();

    if (attack.kind === 'special') {
      if (attack.specialType === 'projectile') {
        ctx.arc(29, -2, 8 + combatStyle % 6, 0, Math.PI * 2);
        ctx.moveTo(20, -2);
        ctx.lineTo(43, -2);
      } else if (attack.specialType === 'barrage') {
        for (let ray = 0; ray < 5; ray++) {
          const angle = -0.55 + ray * 0.275;
          ctx.moveTo(12, 0);
          ctx.lineTo(18 + Math.cos(angle) * 35, Math.sin(angle) * 35);
        }
      } else if (attack.specialType === 'trap') {
        ctx.moveTo(29, -15); ctx.lineTo(42, 0); ctx.lineTo(29, 15);
        ctx.lineTo(16, 0); ctx.closePath();
        ctx.moveTo(29, -8); ctx.lineTo(29, 8);
        ctx.moveTo(21, 0); ctx.lineTo(37, 0);
      } else if (attack.specialType === 'orbit') {
        ctx.ellipse(0, 0, 40 + combatStyle % 14, 17 + combatStyle % 8, time / 400, 0, Math.PI * 2);
        ctx.moveTo(-26, 0);
        ctx.arc(0, 0, 28, Math.PI * 0.75, Math.PI * 1.65);
      } else if (attack.specialType === 'guard') {
        ctx.arc(0, 0, 37, -Math.PI * 0.75, Math.PI * 0.75);
        ctx.moveTo(18, -28); ctx.lineTo(29, -20); ctx.lineTo(37, 0);
        ctx.lineTo(29, 20); ctx.lineTo(18, 28);
      } else if (attack.specialType === 'dash') {
        for (let trail = 0; trail < 4; trail++) {
          const y = -18 + trail * 12;
          ctx.moveTo(-16, y);
          ctx.lineTo(-45 - trail * 5, y + (trail % 2 ? 3 : -3));
        }
      } else if (attack.specialType === 'leap') {
        ctx.arc(0, 0, 38 + combatStyle % 10, Math.PI * 1.1, Math.PI * 1.9);
        ctx.moveTo(0, 12); ctx.lineTo(0, -40);
        ctx.lineTo(-7, -29); ctx.moveTo(0, -40); ctx.lineTo(7, -29);
      } else if (attack.specialType === 'slam') {
        ctx.moveTo(-43, 22); ctx.quadraticCurveTo(0, 34, 43, 22);
        for (let spike = -2; spike <= 2; spike++) {
          ctx.moveTo(spike * 13, 23);
          ctx.lineTo(spike * 17, 7 + Math.abs(spike) * 3);
        }
      } else if (attack.specialType === 'grapple') {
        ctx.moveTo(12, -4);
        ctx.quadraticCurveTo(44, -30, 55, 2);
        ctx.quadraticCurveTo(52, 18, 38, 12);
        ctx.moveTo(38, 12); ctx.lineTo(48, 7);
        ctx.moveTo(38, 12); ctx.lineTo(42, 23);
      } else if (attack.specialType === 'counter') {
        ctx.arc(0, 0, 42, -Math.PI * 0.7, Math.PI * 0.7);
        ctx.moveTo(22, -30); ctx.lineTo(34, -20); ctx.lineTo(41, 0);
        ctx.lineTo(34, 20); ctx.lineTo(22, 30);
      } else if (attack.specialType === 'buff') {
        ctx.arc(0, 0, 38 + Math.sin(time / 55) * 5, 0, Math.PI * 2);
        for (let ray = 0; ray < 8; ray++) {
          const angle = ray * Math.PI / 4 + time / 180;
          ctx.moveTo(Math.cos(angle) * 28, Math.sin(angle) * 28);
          ctx.lineTo(Math.cos(angle) * 44, Math.sin(angle) * 44);
        }
      } else if (attack.specialType === 'multiHit') {
        for (let slash = 0; slash < 3; slash++) {
          ctx.moveTo(14 + slash * 8, -24 + slash * 12);
          ctx.lineTo(42 + slash * 5, -12 + slash * 12);
          ctx.lineTo(25 + slash * 8, 2 + slash * 12);
        }
      } else if (attack.specialType === 'spin') {
        ctx.arc(0, 0, 36 + Math.sin(time / 35) * 5, time / 70, time / 70 + Math.PI * 1.65);
        ctx.arc(0, 0, 25, -time / 70, -time / 70 + Math.PI * 1.35);
      }
    } else if (attack.normalStyle === 'heavy') {
      ctx.lineWidth = 7;
      ctx.arc(6, 0, 40 + combatStyle % 12, -0.95, 0.95);
      ctx.moveTo(15, 0); ctx.lineTo(45, 0);
    } else if (attack.normalStyle === 'sweep') {
      ctx.ellipse(12, 18, 42, 13, -0.08, Math.PI * 1.05, Math.PI * 1.95);
    } else if (attack.normalStyle === 'lunge') {
      ctx.moveTo(-12, -12); ctx.lineTo(48, 0); ctx.lineTo(-12, 12);
      ctx.moveTo(-28, -19); ctx.lineTo(-5, -12);
      ctx.moveTo(-28, 19); ctx.lineTo(-5, 12);
    } else if (attack.normalStyle === 'launcher') {
      ctx.arc(2, 4, 37, Math.PI * 1.15, Math.PI * 1.88);
      ctx.moveTo(5, 12); ctx.lineTo(5, -37);
      ctx.lineTo(-2, -25); ctx.moveTo(5, -37); ctx.lineTo(13, -25);
    } else if (attack.normalStyle === 'reach') {
      ctx.moveTo(5, 0); ctx.lineTo(57, 0);
      ctx.moveTo(43, -9); ctx.lineTo(57, 0); ctx.lineTo(43, 9);
    } else if (attack.normalStyle === 'shot') {
      ctx.ellipse(29, 0, 12, 7, time / 150, 0, Math.PI * 2);
      ctx.moveTo(12, 0); ctx.lineTo(17, 0);
    } else if (attack.normalStyle === 'spin') {
      ctx.arc(0, 0, 39 + Math.sin(time / 40) * 4, time / 200, time / 200 + Math.PI * 1.6);
      ctx.arc(0, 0, 27, -time / 200, -time / 200 + Math.PI);
    } else {
      ctx.moveTo(8, -8); ctx.lineTo(34, 0); ctx.lineTo(8, 8);
      ctx.moveTo(17, -15); ctx.lineTo(42, -8);
    }

    ctx.stroke();
    if (attack.specialType === 'projectile' || attack.normalStyle === 'shot') {
      ctx.beginPath();
      ctx.arc(29, -2, 3 + combatStyle % 4, 0, Math.PI * 2);
      ctx.fill();
    } else if (attack.specialType === 'trap') {
      ctx.beginPath();
      ctx.arc(29, 0, 4, 0, Math.PI * 2);
      ctx.fill();
    } else if (attack.specialType === 'slam') {
      ctx.beginPath();
      ctx.arc(0, 20, 32 + combatStyle % 12, 0.1, Math.PI - 0.1);
      ctx.stroke();
    }

    ctx.globalAlpha = f.action === 'startup' ? 0.32 : 0.9;
    ctx.lineWidth = 3;
    ctx.beginPath();
    if (attack.move === 'up') {
      ctx.moveTo(0, 12); ctx.lineTo(0, -47);
      ctx.moveTo(-9, -35); ctx.lineTo(0, -47); ctx.lineTo(9, -35);
    } else if (attack.move === 'down') {
      ctx.moveTo(-35, 18); ctx.quadraticCurveTo(0, 30, 35, 18);
      ctx.moveTo(0, -2); ctx.lineTo(0, 27);
      ctx.moveTo(-8, 18); ctx.lineTo(0, 27); ctx.lineTo(8, 18);
    } else if (attack.move === 'side') {
      ctx.moveTo(8, -12); ctx.lineTo(48, 0); ctx.lineTo(8, 12);
      ctx.moveTo(-24, -18); ctx.lineTo(-8, -12);
      ctx.moveTo(-24, 18); ctx.lineTo(-8, 12);
    } else {
      ctx.arc(18, 0, 16 + combatStyle % 7, -0.8, 0.8);
      ctx.moveTo(12, -8); ctx.lineTo(27, 0); ctx.lineTo(12, 8);
    }
    ctx.stroke();
  }
  ctx.restore();
}

function drawProjectiles() {
  for (const projectile of projectiles) {
    const x = projectile.x;
    const y = ARENA_H - projectile.y;
    const pulse = 1 + Math.sin(Date.now() / 45 + x) * 0.12;
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate((projectile.vx < 0 ? Math.PI : 0) + projectile.rotation);
    ctx.scale(pulse, pulse);
    ctx.shadowColor = projectile.color;
    ctx.shadowBlur = 18;
    ctx.fillStyle = projectile.color;
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 2;
    if (projectile.isChargedShot) {
      ctx.beginPath();
      ctx.arc(0, 0, projectile.radius * 1.35, 0, Math.PI * 2);
      ctx.stroke();
    }
    if (projectile.isTrap) {
      ctx.rotate(projectile.rotation + Math.PI / 4);
      ctx.fillRect(-projectile.radius * 0.55, -projectile.radius * 0.55, projectile.radius * 1.1, projectile.radius * 1.1);
      ctx.strokeRect(-projectile.radius * 0.55, -projectile.radius * 0.55, projectile.radius * 1.1, projectile.radius * 1.1);
      ctx.beginPath();
      ctx.arc(0, 0, projectile.radius * 0.72, 0, Math.PI * 2);
      ctx.stroke();
    } else if (projectile.isGyro) {
      ctx.fillStyle = '#fb923c';
      ctx.beginPath();
      ctx.moveTo(0, -projectile.radius);
      ctx.lineTo(projectile.radius * 0.72, -projectile.radius * 0.36);
      ctx.lineTo(projectile.radius * 0.72, projectile.radius * 0.36);
      ctx.lineTo(0, projectile.radius);
      ctx.lineTo(-projectile.radius * 0.72, projectile.radius * 0.36);
      ctx.lineTo(-projectile.radius * 0.72, -projectile.radius * 0.36);
      ctx.closePath();
      ctx.fill();
      ctx.strokeStyle = '#ffedd5';
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.strokeStyle = '#0f766e';
      ctx.lineWidth = 3;
      for (let spoke = 0; spoke < 4; spoke++) {
        const angle = spoke * Math.PI / 2;
        ctx.beginPath();
        ctx.moveTo(Math.cos(angle) * 3, Math.sin(angle) * 3);
        ctx.lineTo(Math.cos(angle) * projectile.radius * 0.55, Math.sin(angle) * projectile.radius * 0.55);
        ctx.stroke();
      }
      ctx.fillStyle = '#67e8f9';
      ctx.shadowColor = '#67e8f9';
      ctx.shadowBlur = 7;
      ctx.beginPath();
      ctx.arc(0, 0, 5, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;
    } else if (projectile.isHoming) {
      ctx.beginPath();
      ctx.moveTo(16, 0);
      ctx.lineTo(-8, -8);
      ctx.lineTo(-4, 0);
      ctx.lineTo(-8, 8);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      ctx.fillStyle = '#ffedd5';
      ctx.beginPath();
      ctx.moveTo(-8, -3);
      ctx.lineTo(-15, 0);
      ctx.lineTo(-8, 3);
      ctx.fill();
    } else if (projectile.style === 1) {
      ctx.beginPath();
      ctx.moveTo(17, 0); ctx.lineTo(0, -12); ctx.lineTo(-13, 0);
      ctx.lineTo(0, 12); ctx.closePath();
      ctx.fill();
      ctx.stroke();
    } else if (projectile.style === 2) {
      ctx.beginPath();
      ctx.ellipse(0, 0, 18, 9, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
    } else if (projectile.style === 3) {
      ctx.beginPath();
      ctx.moveTo(-12, -9); ctx.lineTo(-2, -3); ctx.lineTo(-10, 0);
      ctx.lineTo(9, 11); ctx.lineTo(3, 2); ctx.lineTo(13, -2);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
    } else if (projectile.style === 4) {
      ctx.beginPath();
      ctx.moveTo(0, -14); ctx.lineTo(4, -4); ctx.lineTo(14, 0);
      ctx.lineTo(4, 4); ctx.lineTo(0, 14); ctx.lineTo(-4, 4);
      ctx.lineTo(-14, 0); ctx.lineTo(-4, -4); ctx.closePath();
      ctx.fill();
      ctx.stroke();
    } else if (projectile.style === 5) {
      ctx.beginPath();
      ctx.moveTo(-13, -10); ctx.lineTo(13, -10); ctx.lineTo(0, 12);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
    } else if (projectile.style === 6) {
      ctx.beginPath();
      ctx.arc(0, 0, 12, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(0, 0, 5, 0, Math.PI * 2);
      ctx.stroke();
    } else if (projectile.style === 7) {
      ctx.beginPath();
      ctx.moveTo(-12, -8); ctx.lineTo(0, -12); ctx.lineTo(12, -8);
      ctx.lineTo(8, 0); ctx.lineTo(12, 8); ctx.lineTo(0, 12);
      ctx.lineTo(-12, 8); ctx.lineTo(-8, 0); ctx.closePath();
      ctx.fill();
      ctx.stroke();
    } else {
      for (const offset of [-9, 0, 9]) {
        ctx.beginPath();
        ctx.arc(offset, Math.sin(Date.now() / 50 + offset) * 5, 6, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
      }
    }
    ctx.restore();
  }
}

function drawFighter(f) {
  ctx.save();
  const dim = getFighterDim(f);
  const screenY = ARENA_H - f.y;
  ctx.globalAlpha = 0.2;
  ctx.fillStyle = '#020617';
  ctx.beginPath();
  ctx.ellipse(f.x + dim.w / 2, screenY + 2, dim.w * 0.48, 7 + dim.w * 0.04, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.globalAlpha = 1;
  ctx.translate(f.x + dim.w / 2, screenY - dim.h / 2);
  ctx.scale(f.facing, 1);

  if (f.invincible > 0 && Math.floor(Date.now() / 60) % 2 === 0) {
    ctx.globalAlpha = 0.5;
  }

  const isOriginal = isOriginalFighter(f);
  if (!isOriginal && f.action === 'startup') {
    ctx.rotate(-0.08);
  } else if (!isOriginal && f.action === 'active') {
    ctx.translate(4, -2);
    ctx.rotate(Math.sin(Date.now() / 35) * 0.08);
  } else if (!isOriginal && f.action === 'hitstun') {
    ctx.rotate(Math.sign(f.vx) * 0.16);
  } else if (!isOriginal && f.action === 'idle' && f.onGround) {
    ctx.translate(0, Math.sin(Date.now() / 190) * 1.8);
  }

  if (isOriginal) {
    if (f.char === 'morrow') drawMorrow(f);
    else drawOriginalFighter(f);
  } else if (f.char === 'jigglypuff') {
    drawJigglypuff(f);
  } else if (f.char === 'steve') {
    drawSteve(f);
  } else if (f.char === 'gyro-bot') {
    drawGyroBot(f);
  } else if (f.char === 'mario') {
    drawMario(f);
  } else {
    drawPikachu(f);
  }

  if (f.guard > 0) {
    ctx.strokeStyle = CHARACTERS[f.char].accent;
    ctx.lineWidth = 3;
    ctx.globalAlpha = 0.45 + Math.sin(Date.now() / 60) * 0.15;
    ctx.beginPath();
    ctx.arc(0, 0, Math.max(dim.w, dim.h) * 0.62, 0, Math.PI * 2);
    ctx.stroke();
  }
  if (f.powerBoost > 0) {
    ctx.globalAlpha = 0.25 + Math.sin(Date.now() / 70) * 0.08;
    ctx.strokeStyle = '#fde047';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(0, 0, Math.max(dim.w, dim.h) * 0.7, 0, Math.PI * 2);
    ctx.stroke();
  }
  if (f.smashCharging || f.chargeFrames > 0 || f.storedCharge > 0) {
    const charge = Math.max(f.smashChargeFrames || 0, f.chargeFrames || 0, f.storedCharge || 0);
    ctx.globalAlpha = 0.3 + Math.min(0.45, charge / 220);
    ctx.strokeStyle = f.smashCharging ? '#fbbf24' : CHARACTERS[f.char].accent;
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(0, 0, Math.max(dim.w, dim.h) * (0.62 + Math.min(0.24, charge / 400)), 0, Math.PI * 2);
    ctx.stroke();
  }
  ctx.restore();
}

function drawStage() {
  const stage = selectedStage;
  const sky = ctx.createLinearGradient(0, 0, 0, ARENA_H);
  sky.addColorStop(0, stage.sky[0]);
  sky.addColorStop(0.58, stage.sky[1]);
  sky.addColorStop(1, stage.sky[2]);
  ctx.fillStyle = sky;
  ctx.fillRect(0, 0, ARENA_W, ARENA_H);

  const horizon = ctx.createLinearGradient(0, ARENA_H * 0.35, 0, ARENA_H * 0.85);
  horizon.addColorStop(0, 'rgba(255,255,255,0)');
  horizon.addColorStop(1, `${stage.accent}33`);
  ctx.fillStyle = horizon;
  ctx.fillRect(0, ARENA_H * 0.35, ARENA_W, ARENA_H * 0.5);

  if (stage.theme === 'stars') {
    for (let star = 0; star < 95; star++) {
      const x = (star * 197 + 73) % ARENA_W;
      const y = (star * 83 + 29) % 610;
      const radius = 1.5 + (star % 4) * 0.65;
      ctx.globalAlpha = 0.35 + (star % 5) * 0.1;
      ctx.fillStyle = star % 6 === 0 ? stage.accent : '#fff';
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = 0.12;
    ctx.strokeStyle = stage.accent;
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.ellipse(1000, 290, 430, 115, -0.16, 0, Math.PI * 2);
    ctx.stroke();
  } else if (stage.theme === 'forest') {
    for (let tree = 0; tree < 16; tree++) {
      const x = tree * 145 - 20;
      const height = 220 + (tree % 4) * 35;
      ctx.globalAlpha = 0.28 + (tree % 3) * 0.06;
      ctx.fillStyle = tree % 2 ? '#0b3028' : '#164e3e';
      ctx.fillRect(x - 9, ARENA_H - height, 18, height);
      ctx.beginPath();
      ctx.moveTo(x, ARENA_H - height - 90);
      ctx.lineTo(x - 75, ARENA_H - height + 40);
      ctx.lineTo(x + 75, ARENA_H - height + 40);
      ctx.closePath();
      ctx.fill();
    }
    ctx.globalAlpha = 0.2;
    ctx.fillStyle = '#d9f99d';
    for (let mote = 0; mote < 28; mote++) {
      ctx.beginPath();
      ctx.arc((mote * 251 + 80) % ARENA_W, 120 + (mote * 89) % 540, 3 + mote % 3, 0, Math.PI * 2);
      ctx.fill();
    }
  } else if (stage.theme === 'gears') {
    for (let gear = 0; gear < 9; gear++) {
      const x = 120 + gear * 235;
      const y = 180 + (gear % 3) * 105;
      const radius = 55 + (gear % 3) * 15;
      ctx.globalAlpha = 0.18;
      ctx.strokeStyle = '#fcd34d';
      ctx.lineWidth = 8;
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(x, y, radius * 0.42, 0, Math.PI * 2);
      ctx.stroke();
      for (let tooth = 0; tooth < 8; tooth++) {
        const angle = tooth * Math.PI / 4;
        ctx.beginPath();
        ctx.moveTo(x + Math.cos(angle) * radius * 0.72, y + Math.sin(angle) * radius * 0.72);
        ctx.lineTo(x + Math.cos(angle) * radius * 1.08, y + Math.sin(angle) * radius * 1.08);
        ctx.stroke();
      }
    }
    ctx.globalAlpha = 0.16;
    ctx.fillStyle = '#fb923c';
    for (let furnace = 0; furnace < 7; furnace++) {
      ctx.beginPath();
      ctx.ellipse(145 + furnace * 285, 710, 82, 16, 0, 0, Math.PI * 2);
      ctx.fill();
    }
  } else {
    for (let crystal = 0; crystal < 15; crystal++) {
      const x = crystal * 150 - 30;
      const height = 140 + (crystal % 5) * 38;
      ctx.globalAlpha = 0.18 + (crystal % 3) * 0.04;
      ctx.fillStyle = crystal % 2 ? '#a5f3fc' : '#22d3ee';
      ctx.beginPath();
      ctx.moveTo(x, ARENA_H - 220);
      ctx.lineTo(x + 38, ARENA_H - 220 - height);
      ctx.lineTo(x + 78, ARENA_H - 220);
      ctx.closePath();
      ctx.fill();
      ctx.strokeStyle = '#cffafe';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(x + 38, ARENA_H - 220 - height);
      ctx.lineTo(x + 43, ARENA_H - 220);
      ctx.stroke();
    }
  }
  ctx.globalAlpha = 1;

  const platforms = [...stage.platforms, { ...stage.ground, h: 34 }];
  for (const platform of platforms) {
    const top = ARENA_H - platform.y;
    const height = platform.h || 27;
    const gradient = ctx.createLinearGradient(0, top, 0, top + height);
    gradient.addColorStop(0, '#e2e8f0');
    gradient.addColorStop(0.12, stage.accent);
    gradient.addColorStop(0.22, '#475569');
    gradient.addColorStop(1, '#0f172a');
    ctx.save();
    ctx.shadowColor = stage.accent;
    ctx.shadowBlur = 20;
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.roundRect(platform.x, top, platform.w, height, [8, 8, 3, 3]);
    ctx.fill();
    ctx.shadowBlur = 0;
    ctx.strokeStyle = `${stage.accent}bb`;
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(platform.x + 8, top + 5);
    ctx.lineTo(platform.x + platform.w - 8, top + 5);
    ctx.stroke();
    ctx.globalAlpha = 0.23;
    ctx.fillStyle = '#fff';
    for (let panel = platform.x + 18; panel < platform.x + platform.w - 12; panel += 54) {
      ctx.fillRect(panel, top + 14, 28, 3);
    }
    ctx.restore();
  }
}

function render() {
  drawStage();

  for (let i = particles.length - 1; i >= 0; i--) {
    const p = particles[i];
    ctx.save();
    ctx.globalAlpha = p.life;
    ctx.strokeStyle = p.color;
    ctx.fillStyle = p.color;
    if (p.type === 'ring') {
      ctx.beginPath();
      ctx.arc(p.x, ARENA_H - p.y, p.size * (2 - p.life), 0, Math.PI * 2);
      ctx.stroke();
    } else {
      ctx.beginPath();
      ctx.arc(p.x, ARENA_H - p.y, p.size * p.life, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.restore();
    p.life -= 1 / p.maxLife;
    if (p.life <= 0) particles.splice(i, 1);
  }

  drawFighter(p1);
  drawProjectiles();
  drawFighter(p2);
}

function gameLoop() {
  if (gameRunning && gameMode !== 'online-guest') {
    handleInput(p1, true);
    if (gameMode === 'one-player') {
      for (const key of ['j', 'l', 'i', 'k', 'o', 'p', 'jump']) keys[key] = false;
      const cpuInput = chooseCpuInput(p2, p1, cpuFrame++);
      constrainCpuMovement(p2, cpuInput);
      Object.assign(keys, cpuInput);
    }
    if (gameMode === 'online-host') applyRemoteInput();
    handleInput(p2, false);
    updatePhysics(p1);
    updatePhysics(p2);
    updateGrapple(p1, p2);
    updateGrapple(p2, p1);
    handleCombat(p1, p2);
    handleCombat(p2, p1);
    updateProjectiles();
    checkBlastZones(p1, true);
    checkBlastZones(p2, false);
    percent1.textContent = Math.round(p1.percent) + '%';
    percent2.textContent = Math.round(p2.percent) + '%';
    sendOnlineState();
  }
  render();
  requestAnimationFrame(gameLoop);
}

function getKeyboardKey(event) {
  if (event.code === 'Space') return 'space';
  if (event.code === 'ShiftRight') return 'rshift';
  return event.key.toLowerCase();
}

const ONLINE_GUEST_KEYS = [
  'j', 'l', 'i', 'k', 'o', 'p', 'rshift',
  'arrowleft', 'arrowright', 'arrowup', 'arrowdown'
];

window.addEventListener('keydown', (e) => {
  initAudio();
  const key = getKeyboardKey(e);
  const alreadyPressed = keys[key];
  keys[key] = true;
  if (gameMode === 'online-guest' && gameRunning &&
      ONLINE_GUEST_KEYS.includes(key)) {
    if (!alreadyPressed) sendOnlineInput();
    e.preventDefault();
    return;
  }
  if (gameRunning && (key === 'space' || key === 'rshift')) e.preventDefault();
  if (!winScreen.hidden) {
    if (e.key === 'Enter' || e.key === 'Escape') {
      e.preventDefault();
      returnToCharacterSelect();
    }
    return;
  }
  if (!tierListScreen.hidden) {
    if (e.key === 'Escape' || e.key === 'Backspace') {
      e.preventDefault();
      closeTierList();
    }
    return;
  }
  if (!characterSelect.hidden) {
    handleCharacterSelectKeydown(e);
    return;
  }
  if (!stageSelectScreen.hidden) {
    handleStageSelectKeydown(e);
    return;
  }
});

window.addEventListener('keyup', (e) => {
  const key = getKeyboardKey(e);
  keys[key] = false;
  if (gameMode === 'online-guest' && gameRunning &&
      ONLINE_GUEST_KEYS.includes(key)) {
    sendOnlineInput();
    e.preventDefault();
  }
});

window.addEventListener('blur', () => {
  for (const key of [
    'a', 'd', 'w', 's', 'f', 'g',
    'j', 'l', 'i', 'k', 'o', 'p',
    'arrowleft', 'arrowright', 'arrowup', 'arrowdown',
    'space', 'rshift', 'jump'
  ]) {
    keys[key] = false;
  }
  sendOnlineInput();
});

updateStockUI();
requestAnimationFrame(gameLoop);