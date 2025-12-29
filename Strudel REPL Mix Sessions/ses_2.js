// 22/10/2025 Strudel Sesh 2

setGainCurve (x => Math.pow(x, 2)) 
samples ('github:switchangel/breaks')
samples ('github:switchangel/pad')
samples ('github:tidalcycles/uzu-drumkit')

setCps(140/60/4)

s("breaks/2").fit()
  .scrub()
  .orbit(2)
   


