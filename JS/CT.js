function deltaXA (){
    var xcb = Number(document.getElementById("xcb").value);
    var xpv = Number(document.getElementById("xpv").value);
    return xpv - xcb;
    
}
function deltaYA (){
    var ycb = Number(document.getElementById("ycb").value);
    var ypv = Number(document.getElementById("ypv").value);
    return ypv - ycb;
}
function deltaXB (){
    var xpo = Number(document.getElementById("xpo").value);
    var xpv = Number(document.getElementById("xpv").value);
    return xpv - xpo;
}

function deltaYB (){
    var ypo = Number(document.getElementById("ypo").value);
    var ypv = Number(document.getElementById("ypv").value);
    return ypv - ypo;
}
function deltaXC (){
    var xcb = Number(document.getElementById("xcb").value);
    var xdr = Number(document.getElementById("xdr").value);
    return xdr - xcb;
}
function deltaYC (){
    var ycb = Number(document.getElementById("ycb").value);
    var ydr = Number(document.getElementById("ydr").value);
    return ydr - ycb;
}
function deltaZ (){
    var zcb = Number(document.getElementById("zcb").value);
    var zpv = Number(document.getElementById("zpv").value);
    return zpv - zcb;
}
function alcancePvCb (){
    var alcance = Math.hypot(deltaXA (), deltaYA ()).toFixed(2);
    document.getElementById("alcance").value = alcance; 
    return alcance;
}  
function alcancePvPo (){
    var alcPvPo = Number.parseInt(Math.hypot(deltaXB (), deltaYB ())).toFixed(2);
    document.getElementById("alcPvPo").value = alcPvPo;
}  

function cuadrante() {
  const dx = deltaXA();
  const dy = deltaYA();
  let cuadrante;

  if (dx > 0 && dy > 0) {
    cuadrante = 1;
  } else if (dx > 0 && dy < 0) {
    cuadrante = 2;
  } else if (dx < 0 && dy < 0) {
    cuadrante = 3;
  } else {
    cuadrante = 4;
  }

  document.getElementById("cuadrante").value = cuadrante;
  return cuadrante;
}

function orientObs() {
  const dx = deltaXB();
  const dy = deltaYB();

  const baseAngle = Math.atan2(Math.abs(dx), Math.abs(dy));
  const orO = Math.floor((baseAngle * (180 / Math.PI)) / 0.06); 

  let orObs;
  if (dx >= 0 && dy >= 0) {
    orObs = orO;
  } else if (dx >= 0 && dy < 0) {
    orObs = 3000 - orO;
  } else if (dx < 0 && dy < 0) {
    orObs = 3000 + orO;
  } else {
    orObs = 6000 - orO;
  }

  document.getElementById("orObs").value = orObs;
  return orObs;
}
function dirV() {
  const dx = deltaXA();
  const dy = deltaYA();

  const baseAngle = Math.atan2(Math.abs(dx), Math.abs(dy));
  const dirv = Math.floor((baseAngle * (180 / Math.PI)) / 0.06); 

  let dV;
  if (dx > 0 && dy > 0) {
    dV = dirv;
  } else if (dx > 0 && dy < 0) {
    dV = 3000 - dirv;
  } else if (dx < 0 && dy < 0) {
    dV = 3000 + dirv;
  } else {
    dV = 6000 - dirv;
  }

  document.getElementById("dV").value = dV;
  return dV;
}
function orDr() {
  const dx = deltaXC();
  const dy = deltaYC();
  const baseAngle = Math.atan2(Math.abs(dx), Math.abs(dy));
  const dDr = Math.floor((baseAngle * (180 / Math.PI)) / 0.06);

  let oDr;
  if (dx > 0 && dy > 0) {
    oDr = dDr;
  } else if (dx > 0 && dy < 0) {
    oDr = 3000 - dDr;
  } else if (dx < 0 && dy < 0) {
    oDr = 3000 + dDr;
  } else {
    oDr = 6000 - dDr;
  }

  document.getElementById("oDr").value = oDr;
  return oDr;
}

function angVigi() {
  const observacion = orDr(); 
  const direccion = dirV();   

  let angVig;
  if (observacion > direccion) {
    angVig = observacion - direccion;
  } else {
    angVig = (6000 + observacion) - direccion;
  }

  angVig = Math.floor(angVig); 
  document.getElementById("angVig").value = angVig;
  return angVig;
}

function sitioPvCb() {
  const dz = deltaZ();                 
  const alcance = alcancePvCb();      
  const sitio = (dz / (alcance / 1000)).toFixed(2); 

  document.getElementById("sitio").value = sitio;
  document.getElementById("sitioIni").value = sitio;

  return sitio;
}

function alzaCb() {
  const x = alcancePvCb(); 
  const xs = Array.from({ length: 71 }, (_, i) => 6000 + i * 200);
  const ys = [
    144, 147, 151, 154, 158, 161, 165, 169, 173, 177,
    181, 185, 189, 193, 198, 202, 207, 212, 216, 221,
    226, 231, 236, 242, 247, 253, 259, 265, 271, 277,
    284, 290, 297, 304, 311, 318, 325, 332, 340, 348,
    356, 364, 372, 381, 389, 398, 407, 417, 426, 436,
    446, 456, 466, 476, 487, 499, 510, 522, 534, 547,
    560, 574, 588, 603, 619, 637, 655, 676, 698, 726,
    763
  ];

  function catmullRom(p0, p1, p2, p3, t) {
    const t2 = t * t, t3 = t2 * t;
    return 0.5 * ((2 * p1) +
      (-p0 + p2) * t +
      (2 * p0 - 5 * p1 + 4 * p2 - p3) * t2 +
      (-p0 + 3 * p1 - 3 * p2 + p3) * t3);
  }

  function interpolate(x) {
    const step = 200;
    if (x < xs[0] || x > xs[xs.length - 1]) return null;

    const i = Math.floor((x - xs[0]) / step);
    const t = (x - xs[i]) / step;

    const p0 = ys[Math.max(0, i - 1)];
    const p1 = ys[i];
    const p2 = ys[i + 1];
    const p3 = ys[Math.min(ys.length - 1, i + 2)];

    return catmullRom(p0, p1, p2, p3, t);
  }

  const alza = interpolate(x);
  const result = alza !== null && !isNaN(alza) ? alza.toFixed(2) : "Fuera de rango";
  document.getElementById("alza").value = result;
  return result;
}

function altMaxCb() {
  const x = alcancePvCb(); 
  const xs = Array.from({ length: 71 }, (_, i) => 6000 + i * 200);
  const ys = [
    52, 54, 57, 59, 62, 64, 67, 69, 72, 75,
    78, 81, 84, 87, 90, 94, 97, 101, 104, 108,
    111, 115, 118, 122, 126, 130, 134, 138, 142, 146,
    151, 155, 160, 165, 170, 175, 180, 185, 190, 195,
    201, 206, 212, 218, 224, 230, 236, 243, 249, 256,
    262, 269, 276, 283, 290, 297, 304, 312, 320, 328,
    336, 345, 354, 363, 372, 382, 393, 405, 419, 435,
    454
  ];

  function catmullRom(p0, p1, p2, p3, t) {
    const t2 = t * t, t3 = t2 * t;
    return 0.5 * ((2 * p1) +
      (-p0 + p2) * t +
      (2 * p0 - 5 * p1 + 4 * p2 - p3) * t2 +
      (-p0 + 3 * p1 - 3 * p2 + p3) * t3);
  }

  function interpolate(x) {
    const step = 200;
    if (x < xs[0] || x > xs[xs.length - 1]) return null;

    const i = Math.floor((x - xs[0]) / step);
    const t = (x - xs[i]) / step;

    const p0 = ys[Math.max(0, i - 1)];
    const p1 = ys[i];
    const p2 = ys[i + 1];
    const p3 = ys[Math.min(ys.length - 1, i + 2)];

    return catmullRom(p0, p1, p2, p3, t);
  }

  const altMax = interpolate(x);
  const result = altMax !== null && !isNaN(altMax) ? altMax.toFixed(2) : "Fuera de rango";
  document.getElementById("altMax").value = result;
  return result;
}

function velVientoAMEA() {
  const velViento = Number(document.getElementById("velViento").value);
  const altMax = altMaxCb();
  const factor = Math.pow(altMax / 1.7, 0.075);

  const vVAltMax = (factor * velViento).toFixed(2);

  document.getElementById("vVAltMax").value = vVAltMax;
  return vVAltMax;
}

function AngVient() {
  const orV = Number(document.getElementById("orV").value);
  const dirViento = dirV();
  const modulo = 6000;
  const orVM = orV / 0.06;

  let angViento = dirViento >= orVM
    ? dirViento - orVM
    : modulo + dirViento - orVM;

  document.getElementById("angViento").value = angViento;
  return angViento;
}

function descX() {
  const ang = AngVient();
  const viento = velVientoAMEA();
  const rad = ang * 0.06 * 0.0174533;
  const componenteX = Math.abs(Math.cos(rad) * viento).toFixed(2);

  const signoNegativo = ang < 1500 || ang >= 4500;
  const wX = signoNegativo ? -componenteX : +componenteX;

  document.getElementById("wX").value = wX;
  return wX;
}

 function descZ() {
  const ang = AngVient();
  const viento = velVientoAMEA();
  const rad = ang * 0.06 * 0.0174533; 

  const componenteZ = Math.abs(Math.sin(rad) * viento).toFixed(2);
  const signoNegativo = ang >= 3000; 
  const wZ = signoNegativo ? -componenteZ : +componenteZ;

  document.getElementById("wZ").value = wZ;
  return wZ;
}

function colK() {
  const alcance = alcancePvCb();
  let k;

  if (alcance < 8000) {
    k = -0.1;
  } else if (alcance < 10000) {
    k = -0.02;
  } else {
    k = -0.3;
  }

  return k;
}

function colD (){
    if(alcancePvCb () < 8400){
        var D = 5.1;
    }
    else if(alcancePvCb () < 11600){
        var D = 5.2;
    }
    else if(alcancePvCb () < 13400){
        var D = 5.3;
    }
    else if(alcancePvCb () < 14600){
        var D = 5.4;
    }
    else if(alcancePvCb () < 15600){
        var D = 5.5;
    }
    else if(alcancePvCb () < 16400){
        var D = 5.6;
    }
    else if(alcancePvCb () < 17000){
        var D = 5.7;
    }
    else if(alcancePvCb () < 17600){
        var D = 5.8;
    }
    else if(alcancePvCb () < 18000){
        var D = 5.9;
    }
    else if(alcancePvCb () < 18400){
        var D = 6;
    }
    else if(alcancePvCb () < 18800){
        var D = 6.1;
    }
    else if(alcancePvCb () < 19000){
        var D = 6.2;
    }
    else if(alcancePvCb () < 19200){
        var D = 6.3;
    }
    else if(alcancePvCb () < 19400){
        var D = 6.4;
    }
    else if(alcancePvCb () < 19600){
        var D = 6.5;
    }
    else if(alcancePvCb () < 19800){
        var D = 6.6;
    }
    else if(alcancePvCb () < 19900){
        var D = 6.7;
    }
    else if(alcancePvCb () < 20000){
        var D = 7;
    }
    return D;
}

function corrOR() {
  const a1 = descX() * colK(); 
  const a2 = descZ() * colD();
  const correcOr = (a1 + a2).toFixed(2);
  document.getElementById("correcOr").value = correcOr;

  return correcOr;
}

function colE() {
  const x = alcancePvCb();
  const xs = Array.from({ length: 71 }, (_, i) => 6000 + i * 200);
  const ys = [
    -0.78, -8, -0.83, -0.85, -0.88, -0.91, -0.94, -0.97,
    -1.00, -1.03, -1.06, -1.09, -1.12, -1.15, -1.18, -1.21,
    -1.24, -1.27, -1.30, -1.33, -1.36, -1.39, -1.42, -1.45,
    -1.48, -1.51, -1.54, -1.57, -1.60, -1.63, -1.67, -1.70,
    -1.74, -1.77, -1.81, -1.85, -1.89, -1.93, -1.97, -2.01,
    -2.05, -2.09, -2.13, -2.17, -2.21, -2.25, -2.29, -2.33,
    -2.37, -2.41, -2.46, -2.50, -2.55, -2.59, -2.64, -2.69,
    -2.74, -2.79, -2.85, -2.91, -2.98, -3.06, -3.15, -3.24,
    -3.34, -3.44, -3.54, -3.65, -3.80, -4.05, -4.70
  ]; 

  function catmullRom(p0, p1, p2, p3, t) {
    const t2 = t * t, t3 = t2 * t;
    return 0.5 * ((2 * p1) +
      (-p0 + p2) * t +
      (2 * p0 - 5 * p1 + 4 * p2 - p3) * t2 +
      (-p0 + 3 * p1 - 3 * p2 + p3) * t3);
  }

  function interpolate(x) {
    const step = 200;
    if (x < xs[0] || x > xs[xs.length - 1]) return null;

    const i = Math.floor((x - xs[0]) / step);
    const t = (x - xs[i]) / step;

    const p0 = ys[Math.max(0, i - 1)];
    const p1 = ys[i];
    const p2 = ys[i + 1];
    const p3 = ys[Math.min(ys.length - 1, i + 2)];

    return catmullRom(p0, p1, p2, p3, t);
  }

  const E = interpolate(x);
  return E;
}

function colF() {
  const x = alcancePvCb(); 
  const xs = Array.from({ length: 71 }, (_, i) => 6000 + i * 200);
  const ys = [
    -0.87, -0.88, -0.88, -0.89, -0.89, -0.90, -0.90, -0.91, -0.91, -0.91,
    -0.92, -0.92, -0.92, -0.93, -0.93, -0.93, -0.93, -0.93, -0.94, -0.94,
    -0.94, -0.94, -0.94, -0.95, -0.95, -0.95, -0.95, -0.96, -0.96, -0.96,
    -0.97, -0.97, -0.97, -0.96, -0.96, -0.96, -0.96, -0.95, -0.95, -0.95,
    -0.94, -0.94, -0.94, -0.93, -0.93, -0.92, -0.92, -0.91, -0.91, -0.90,
    -0.89, -0.89, -0.88, -0.88, -0.87, -0.86, -0.86, -0.86, -0.87, -0.87,
    -0.88, -0.89, -0.90, -0.91, -0.92, -0.93, -0.94, -0.95, -0.96, -0.98,
    -1.08
  ]; 

  function catmullRom(p0, p1, p2, p3, t) {
    const t2 = t * t, t3 = t2 * t;
    return 0.5 * ((2 * p1) +
      (-p0 + p2) * t +
      (2 * p0 - 5 * p1 + 4 * p2 - p3) * t2 +
      (-p0 + 3 * p1 - 3 * p2 + p3) * t3);
  }

  function interpolate(x) {
    const step = 200;
    if (x < xs[0] || x > xs[xs.length - 1]) return null;

    const i = Math.floor((x - xs[0]) / step);
    const t = (x - xs[i]) / step;

    const p0 = ys[Math.max(0, i - 1)];
    const p1 = ys[i];
    const p2 = ys[i + 1];
    const p3 = ys[Math.min(ys.length - 1, i + 2)];

    return catmullRom(p0, p1, p2, p3, t);
  }

  const F = interpolate(x);
  return F;
}

function corrAlc() {
  const E = colE();
  const F = colF();

  if (E === null || F === null) return null;

  const a1 = descX() * parseFloat(E);
  const a2 = descZ() * parseFloat(F);
  const correcAlc = (a1 + a2).toFixed(2);

  document.getElementById("correcAlc").value = correcAlc;
  return correcAlc;
}

function alzaIni() {
  const base = parseFloat(alzaCb());
  const correccion = parseFloat(corrAlc());

  if (isNaN(base) || isNaN(correccion)) return null;

  const alzaIni = base + correccion;

  document.getElementById("alzaIni").value = alzaIni.toFixed(2);

  return alzaIni;
}

function orIni() {
  const baseOrient = 4604;
  const correccion = parseFloat(corrOR());

  if (isNaN(correccion)) return null;

  const orIni = baseOrient + correccion;

  document.getElementById("orientIni").value = orIni.toFixed(2);

  return orIni;
}

function calcularComponentes(valor, anguloMil) {
  const rad = anguloMil * 0.06 * 0.0174533;
  return {
    x: Math.sin(rad) * valor,
    y: Math.cos(rad) * valor
  };
}

function calcularComponentes(valor, anguloMil) {
  const rad = anguloMil * 0.06 * 0.0174533; 
  return {
    x: Math.sin(rad) * valor,
    y: Math.cos(rad) * valor
  };
}

function calcularComponentes(valor, anguloMil) {
  const rad = anguloMil * 0.06 * 0.0174533; 
  return {
    x: Math.sin(rad) * valor,
    y: Math.cos(rad) * valor
  };
}

function calcularXY() {
  const alargar   = parseFloat(document.getElementById("alargar").value)   || 0;
  const acortar   = parseFloat(document.getElementById("acortar").value)   || 0;
  const derecha   = parseFloat(document.getElementById("derecha").value)   || 0;
  const izquierda = parseFloat(document.getElementById("izquierda").value) || 0;

  const angBase = orientObs(); 

  const compAlargar   = calcularComponentes(alargar, angBase);
  const compAcortar   = calcularComponentes(acortar, angBase + 3000);    
  const compDerecha   = calcularComponentes(derecha, angBase + 1500);    
  const compIzquierda = calcularComponentes(izquierda, angBase - 1500); 

  const xPrima = compAlargar.x + compAcortar.x + compDerecha.x + compIzquierda.x;
  const yPrima = compAlargar.y + compAcortar.y + compDerecha.y + compIzquierda.y;

  return { xPrima, yPrima };
}

function deltaXAPri() {
  const { xPrima } = calcularXY();
  const xcb = parseFloat(document.getElementById("xcb").value);
  const xpv = parseFloat(document.getElementById("xpv").value);
  return (xpv + xPrima) - xcb;
}

function deltaYAPri() {
  const { yPrima } = calcularXY();
  const ycb = parseFloat(document.getElementById("ycb").value);
  const ypv = parseFloat(document.getElementById("ypv").value);
  return (ypv + yPrima) - ycb;
}

function alcancePvCbPri() {
  const dx = deltaXAPri();
  const dy = deltaYAPri();
  const alcance = Math.hypot(dx, dy);

  document.getElementById("alcance").value = alcance.toFixed(2);
  return alcance;
}
function sitioPvCbPri (){
    var sitio = Number.parseFloat(deltaZ () / (alcancePvCbPri () / 1000)).toFixed(2);
    document.getElementById("sitio").value = sitio;
    document.getElementById("sitioIni").value =  sitio;
}

function alzaCbPri () {
  const x = alcancePvCbPri (); 
  const xs = Array.from({ length: 71 }, (_, i) => 6000 + i * 200);
  const ys = [
    144, 147, 151, 154, 158, 161, 165, 169, 173, 177,
    181, 185, 189, 193, 198, 202, 207, 212, 216, 221,
    226, 231, 236, 242, 247, 253, 259, 265, 271, 277,
    284, 290, 297, 304, 311, 318, 325, 332, 340, 348,
    356, 364, 372, 381, 389, 398, 407, 417, 426, 436,
    446, 456, 466, 476, 487, 499, 510, 522, 534, 547,
    560, 574, 588, 603, 619, 637, 655, 676, 698, 726,
    763
  ];

  function catmullRom(p0, p1, p2, p3, t) {
    const t2 = t * t, t3 = t2 * t;
    return 0.5 * ((2 * p1) +
      (-p0 + p2) * t +
      (2 * p0 - 5 * p1 + 4 * p2 - p3) * t2 +
      (-p0 + 3 * p1 - 3 * p2 + p3) * t3);
  }

  function interpolate(x) {
    const step = 200;
    if (x < xs[0] || x > xs[xs.length - 1]) return null;

    const i = Math.floor((x - xs[0]) / step);
    const t = (x - xs[i]) / step;

    const p0 = ys[Math.max(0, i - 1)];
    const p1 = ys[i];
    const p2 = ys[i + 1];
    const p3 = ys[Math.min(ys.length - 1, i + 2)];

    return catmullRom(p0, p1, p2, p3, t);
  }

  const alza = interpolate(x);
  const result = alza !== null && !isNaN(alza) ? alza.toFixed(2) : "Fuera de rango";
  document.getElementById("alza").value = result;
  return result;
}

function alzaIniC() {
  const alzaIniC = parseFloat(alzaCbPri()) + parseFloat(corrAlc());
  document.getElementById("alzaIni").value = alzaIniC.toFixed(2);
  return alzaIniC;
}

function dirVPri() {
  const dx = deltaXAPri();
  const dy = deltaYAPri();
  const angleDeg = Math.atan2(Math.abs(dx), Math.abs(dy)) * (180 / Math.PI) / 0.06;
  const dirv = Math.round(angleDeg);
  let dVP;

  if (dx > 0 && dy > 0) dVP = Math.abs(dirv);
  else if (dx > 0 && dy < 0) dVP = 3000 - Math.abs(dirv);
  else if (dx < 0 && dy < 0) dVP = 3000 + Math.abs(dirv);
  else dVP = 6000 - Math.abs(dirv);

  return dVP;
}

function difDV() {
  return Math.round(dirV() - dirVPri());
}

function orIniP() {
  const baseOrient = 4604;
  const correccion = parseFloat(corrOR());
  const ajusteDV = difDV();
  const signo = deltaXB() >= 0 && deltaYB() >= 0 ? 1 : -1;
  const orIniP = baseOrient + correccion + (signo * ajusteDV);

  document.getElementById("orientIni").value = orIniP.toFixed(2);
  return orIniP;
}