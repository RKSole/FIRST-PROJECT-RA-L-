function Sound(game){
  this.track = new Audio ("sound/zapsplat_cartoon_marching_military_band_18128.mp3")
  this.track.loop = true;
  this.track.volume = 0.2;
  this.effect = new Audio ("sound/NFF-notify-02-a (mp3cut.net).mp3")
  this.effect.volume = 0.3
  this.effect2 = new Audio ("sound/NFF-rasp.wav")
  this.effect2.volume = 0.3
  this.effect3 = new Audio ("sound/NFF-zing.wav")
  this.effect3.volume = 0.3
  this.effect4 = new Audio ("sound/Blastwave_FX_BankSafeExplosion_HV.37.mp3")
  this.effect4.volume = 0.3
}