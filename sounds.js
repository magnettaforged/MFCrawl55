// =========================
// SOUNDS.JS
// First-pass audio manager for short SFX.
// Put files in assets/sounds/ using the names below.
// =========================

const SOUND_DATA = {
  ui_click: "assets/sounds/uiclick.mp3",
  chest_open: "assets/sounds/chestopen.mp3",

  walk_castle: "assets/sounds/castlewalk.mp3",
  walk_beach: "assets/sounds/beachwalk.mp3",
  walk_forest: "assets/sounds/forestwalk.mp3",

  fire_attack: "assets/sounds/fireatk.mp3",
  low_hp: "assets/sounds/lifealert.mp3",
  skeleton_death: "assets/sounds/skeledeath.mp3",

  sword01: "assets/sounds/sword01.mp3",
  sword02: "assets/sounds/sword02.mp3",
  sword03: "assets/sounds/sword03.mp3",

  fgrunt01: "assets/sounds/fgrunt01.mp3",
  fgrunt02: "assets/sounds/fgrunt02.mp3",
  fgrunt03: "assets/sounds/fgrunt03.mp3",
  fgrunt04: "assets/sounds/fgrunt04.mp3",
  fgrunt05: "assets/sounds/fgrunt05.mp3"
};

const SOUND_POOLS = {
  sword_attack: ["sword01", "sword02", "sword03"],
  female_hurt: ["fgrunt01", "fgrunt02", "fgrunt03", "fgrunt04", "fgrunt05"]
};

const SOUND_VOLUME = {
  ui_click: 0.28,
  chest_open: 0.75,

  walk_castle: 0.42,
  walk_beach: 0.42,
  walk_forest: 0.42,

  fire_attack: 0.72,
  low_hp: 0.70,
  skeleton_death: 0.78,

  sword01: 0.58,
  sword02: 0.58,
  sword03: 0.58,

  fgrunt01: 0.52,
  fgrunt02: 0.52,
  fgrunt03: 0.52,
  fgrunt04: 0.52,
  fgrunt05: 0.52
};

const SOUND_DEFAULT_VOLUME = 0.6;
const SOUND_LOCAL_KEY = "dungeonSoundMuted";
const SOUND_COOLDOWNS_MS = {
  ui_click: 60,
  walk_castle: 120,
  walk_beach: 120,
  walk_forest: 120,
  low_hp: 1200
};

let soundUnlocked = false;
let soundMuted = false;
let soundLastPlayedAt = {};
let soundAudioCache = {};

try {
  soundMuted = window.localStorage.getItem(SOUND_LOCAL_KEY) === "1";
} catch (err) {
  soundMuted = false;
}

function isGameSoundMuted() {
  return !!soundMuted;
}

function setSoundMuted(value) {
  soundMuted = !!value;

  try {
    window.localStorage.setItem(SOUND_LOCAL_KEY, soundMuted ? "1" : "0");
  } catch (err) {}

  if (typeof syncSoundToggleButton === "function") {
    syncSoundToggleButton();
  }

  return soundMuted;
}

function toggleSoundMute() {
  return setSoundMuted(!soundMuted);
}

function unlockAudio() {
  soundUnlocked = true;
}

function randomSoundId(list) {
  if (!Array.isArray(list) || !list.length) return "";
  return list[Math.floor(Math.random() * list.length)];
}

function getSoundAudio(soundId) {
  const src = SOUND_DATA[soundId];
  if (!src) return null;

  const audio = new Audio(src);
  audio.preload = "auto";
  audio.volume = SOUND_VOLUME[soundId] ?? SOUND_DEFAULT_VOLUME;
  return audio;
}

function playSound(soundId, options = {}) {
  if (!soundId || soundMuted) return false;

  unlockAudio();

  const now = Date.now();
  const cooldown = options.cooldownMs ?? SOUND_COOLDOWNS_MS[soundId] ?? 0;
  if (cooldown && soundLastPlayedAt[soundId] && now - soundLastPlayedAt[soundId] < cooldown) {
    return false;
  }
  soundLastPlayedAt[soundId] = now;

  let audio = null;

  if (options.reuse) {
    if (!soundAudioCache[soundId]) soundAudioCache[soundId] = getSoundAudio(soundId);
    audio = soundAudioCache[soundId];
    if (audio) {
      try { audio.currentTime = 0; } catch (err) {}
    }
  } else {
    audio = getSoundAudio(soundId);
  }

  if (!audio) return false;

  if (typeof options.volume === "number") {
    audio.volume = Math.max(0, Math.min(1, options.volume));
  }

  const result = audio.play();
  if (result && typeof result.catch === "function") {
    result.catch(() => {});
  }

  return true;
}

function playSoundPool(poolId, options = {}) {
  const id = randomSoundId(SOUND_POOLS[poolId]);
  return id ? playSound(id, options) : false;
}

function playPlayerAttackSound(player) {
  // Current first-pass weapons are sword-focused; this works for Maya now.
  return playSoundPool("sword_attack");
}

function isFemalePlayerCharacter(player) {
  const id = String(player?.character || player?.name || "").toLowerCase();
  return ["maya", "kyra", "nadia"].includes(id);
}

function playFemalePlayerHurtSound(player) {
  if (!isFemalePlayerCharacter(player)) return false;
  return playSoundPool("female_hurt", { cooldownMs: 180 });
}

function playMonsterDeathSound(monster) {
  if (!monster) return false;

  const id = String(monster.monId || "").toLowerCase();
  const name = String(monster.monName || "").toLowerCase();
  const type = String(monster.monsterType || monster.type || "").toLowerCase();

  const skeletonLike =
    id.includes("skele") ||
    name.includes("skele") ||
    type.includes("undead");

  if (skeletonLike) {
    return playSound("skeleton_death");
  }

  return false;
}

// First tap/click unlocks audio on mobile.
// UI buttons also get a light click sound without adding onclick code everywhere.
document.addEventListener("pointerdown", () => {
  unlockAudio();
}, { once: true, passive: true });

document.addEventListener("click", (event) => {
  const target = event.target;
  if (!target || typeof target.closest !== "function") return;

  if (target.closest(".uiButton, .tabButton, .equipSlotRow, .sotnRow, .compactRow, .shopRow, .soundToggle")) {
    playSound("ui_click", { cooldownMs: 45 });
  }
}, true);

window.addEventListener("load", () => {
  if (typeof syncSoundToggleButton === "function") {
    syncSoundToggleButton();
  }
});
