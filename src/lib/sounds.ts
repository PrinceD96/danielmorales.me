/**
 * Web Audio API synth engine — zero network requests, ~2KB.
 *
 * Sounds are synthesized at runtime using oscillator nodes.
 * Respects prefers-reduced-motion and a localStorage toggle.
 */

let ctx: AudioContext | null = null

function getCtx(): AudioContext | null {
	if (ctx) return ctx
	try {
		ctx = new AudioContext()
	} catch {
		// Web Audio API not supported
	}
	return ctx
}

/** Check if sounds should play */
function isEnabled(): boolean {
	// Respect reduced motion as proxy for sound sensitivity
	if (typeof window === 'undefined') return false
	if (window.matchMedia('(prefers-reduced-motion: reduce)').matches)
		return false

	// Respect user preference (default: enabled)
	const pref = localStorage.getItem('sounds')
	if (pref === 'off') return false

	return true
}

/** Toggle sounds on/off. Returns new state. */
export function toggleSounds(): boolean {
	const next = isEnabled() ? 'off' : 'on'
	localStorage.setItem('sounds', next)
	return next === 'on'
}

/** Get current enabled state */
export function getSoundsEnabled(): boolean {
	return isEnabled()
}

const VOLUME = 0.3

type SoundName =
	| 'click'
	| 'toggle-on'
	| 'toggle-off'
	| 'copy'
	| 'navigate'
	| 'hover-tick'

export function playSound(name: SoundName): void {
	if (!isEnabled()) return
	const audio = getCtx()
	if (!audio) return

	// Resume context if suspended (browser autoplay policy)
	if (audio.state === 'suspended') {
		audio.resume()
	}

	switch (name) {
		case 'click':
			synthClick(audio)
			break
		case 'toggle-on':
			synthToggle(audio, 'up')
			break
		case 'toggle-off':
			synthToggle(audio, 'down')
			break
		case 'copy':
			synthCopy(audio)
			break
		case 'navigate':
			synthNavigate(audio)
			break
		case 'hover-tick':
			synthHoverTick(audio)
			break
	}
}

/** Soft tick — 50ms sine at ~800Hz */
function synthClick(ctx: AudioContext) {
	const t = ctx.currentTime
	const osc = ctx.createOscillator()
	const gain = ctx.createGain()

	osc.type = 'sine'
	osc.frequency.setValueAtTime(800, t)
	gain.gain.setValueAtTime(VOLUME, t)
	gain.gain.exponentialRampToValueAtTime(0.001, t + 0.05)

	osc.connect(gain).connect(ctx.destination)
	osc.start(t)
	osc.stop(t + 0.05)
}

/** Frequency sweep — 80ms, up for dark mode, down for light */
function synthToggle(ctx: AudioContext, direction: 'up' | 'down') {
	const t = ctx.currentTime
	const osc = ctx.createOscillator()
	const gain = ctx.createGain()

	osc.type = 'sine'
	const startFreq = direction === 'up' ? 600 : 1000
	const endFreq = direction === 'up' ? 1000 : 600

	osc.frequency.setValueAtTime(startFreq, t)
	osc.frequency.exponentialRampToValueAtTime(endFreq, t + 0.08)
	gain.gain.setValueAtTime(VOLUME, t)
	gain.gain.exponentialRampToValueAtTime(0.001, t + 0.08)

	osc.connect(gain).connect(ctx.destination)
	osc.start(t)
	osc.stop(t + 0.08)
}

/** Ascending dual-tone ding — 100ms */
function synthCopy(ctx: AudioContext) {
	const t = ctx.currentTime

	// First tone
	const osc1 = ctx.createOscillator()
	const gain1 = ctx.createGain()
	osc1.type = 'sine'
	osc1.frequency.setValueAtTime(880, t)
	gain1.gain.setValueAtTime(VOLUME * 0.8, t)
	gain1.gain.exponentialRampToValueAtTime(0.001, t + 0.1)
	osc1.connect(gain1).connect(ctx.destination)
	osc1.start(t)
	osc1.stop(t + 0.1)

	// Second tone (higher, slightly delayed)
	const osc2 = ctx.createOscillator()
	const gain2 = ctx.createGain()
	osc2.type = 'sine'
	osc2.frequency.setValueAtTime(1320, t + 0.04)
	gain2.gain.setValueAtTime(0, t)
	gain2.gain.setValueAtTime(VOLUME * 0.6, t + 0.04)
	gain2.gain.exponentialRampToValueAtTime(0.001, t + 0.12)
	osc2.connect(gain2).connect(ctx.destination)
	osc2.start(t)
	osc2.stop(t + 0.12)
}

/** Soft pop — 40ms sine at ~500Hz */
function synthNavigate(ctx: AudioContext) {
	const t = ctx.currentTime
	const osc = ctx.createOscillator()
	const gain = ctx.createGain()

	osc.type = 'sine'
	osc.frequency.setValueAtTime(500, t)
	osc.frequency.exponentialRampToValueAtTime(400, t + 0.04)
	gain.gain.setValueAtTime(VOLUME * 0.7, t)
	gain.gain.exponentialRampToValueAtTime(0.001, t + 0.04)

	osc.connect(gain).connect(ctx.destination)
	osc.start(t)
	osc.stop(t + 0.04)
}

/** Bubble pop — 25ms sine, rising pitch 600→1200Hz */
function synthHoverTick(ctx: AudioContext) {
  const t = ctx.currentTime;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.type = "sine";
  osc.frequency.setValueAtTime(600, t);
  osc.frequency.exponentialRampToValueAtTime(1200, t + 0.025);
  gain.gain.setValueAtTime(VOLUME * 0.2, t);
  gain.gain.exponentialRampToValueAtTime(0.001, t + 0.025);

  osc.connect(gain).connect(ctx.destination);
  osc.start(t);
  osc.stop(t + 0.025);
}
