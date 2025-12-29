// 07/10/2025 Strudel Sesh 1

setcpm(130/4)              // 140 BPM with 4 beats per cycle

$: s("sbd!4")._scope()     // kick every step
$bass:
  n(irand(10).sub(7).seg(16))   // random scale degrees, held in 16ths
  .scale("C:minor")             // map degrees to C minor
  .s("sawtooth")
  .rib(46,1)
    .distort("2.2:.3").scope()

