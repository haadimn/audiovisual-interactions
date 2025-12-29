hydra: 
s0.initImage("https://t4.ftcdn.net/jpg/04/77/36/55/360_F_477365592_KbM6D9A9zG0bagjqzuwouPN7bcfcRJT2.jpg")
src(s0)
  .modulate(osc(20, 0.1, 1))
  .rotate(0.8)
  .rotate(() => a.fft[1] * 0.05)      // Rotate with mid-range frequencies
  .scale(() => a.fft[0] * 0.5 + 1)   // Scale with bass
  .color(
    () => 0.5 + Math.sin(time * 0.5) * 0.3 + a.fft[0] * 0.5, // Base + sin mod + sound
    () => 0.3 + Math.sin(time * 0.3) * 0.3 + a.fft[1] * 0.5,
    () => 0.8 + Math.sin(time * 0.2) * 0.3 + a.fft[2] * 0.5
  )
  .out()