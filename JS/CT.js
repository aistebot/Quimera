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
  const orO = Math.floor((baseAngle * (180 / Math.PI)) / 0.06); // convierte a milésimas

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

  // Ángulo base en milésimas (1 mil = 0.06°)
  const baseAngle = Math.atan2(Math.abs(dx), Math.abs(dy));
  const dDr = Math.floor((baseAngle * (180 / Math.PI)) / 0.06); // conversión directa

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
  const alcance = alcancePvCb();
  let alza = null;

  if (alcance >= 6000 && alcance < 7000) {
    alza = (0.01728571428094 * alcance + 40.14).toFixed(2);
  } else if (alcance >= 7000 && alcance < 8000) {
    alza = (0.01999999999602 * alcance + 21).toFixed(2);
  } else if (alcance >= 8000 && alcance < 9000) {
    alza = (0.02114285714286 * alcance + 11.619).toFixed(2);
  } else if (alcance >= 9000 && alcance < 10000) {
    alza = (0.02371428571429 * alcance - 11.2857).toFixed(2);
  } else if (alcance >= 10000 && alcance < 11000) {
    alza = (0.027 * alcance - 44.333).toFixed(2);
  } else if (alcance >= 11000 && alcance < 12000) {
    alza = (0.03071428571429 * alcance - 85.0476).toFixed(2);
  } else if (alcance >= 12000 && alcance < 13000) {
    alza = (0.03428571428571 * alcance - 127.9).toFixed(2);
  } else if (alcance >= 13000 && alcance < 14000) {
    alza = (0.03814285714286 * alcance - 178.42).toFixed(2);
  } else if (alcance >= 14000 && alcance < 15000) {
    alza = (0.042 * alcance - 232.33).toFixed(2);
  } else if (alcance >= 15000 && alcance < 15500) {
    alza = (0.04737288135593 * alcance - 312.74576).toFixed(2);
  } else if (alcance >= 15500 && alcance < 16000) {
    alza = (0.04923728813559 * alcance - 341.881).toFixed(2);
  } else if (alcance >= 16000 && alcance < 16500) {
    alza = (0.05 * alcance - 354).toFixed(2);
  } else if (alcance >= 16500 && alcance < 17000) {
    alza = (0.05610169491525 * alcance - 455.05).toFixed(2);
  } else if (alcance >= 17000 && alcance < 17500) {
    alza = (0.05813559322034 * alcance - 489.543).toFixed(2);
  } else if (alcance >= 17500 && alcance < 18000) {
    alza = (0.06423728813559 * alcance - 596.3559).toFixed(2);
  } else if (alcance >= 18000 && alcance < 18200) {
    alza = (0.07 * alcance - 700).toFixed(2);
  } else if (alcance >= 18200 && alcance < 18400) {
    alza = (0.07 * alcance - 700).toFixed(2);
  } else if (alcance >= 18400 && alcance < 18600) {
    alza = (0.075 * alcance - 792).toFixed(2);
  } else if (alcance >= 18600 && alcance < 18800) {
    alza = (0.08 * alcance - 885).toFixed(2);
  } else if (alcance >= 18800 && alcance < 19000) {
    alza = (0.09 * alcance - 1073).toFixed(2);
  } else if (alcance >= 19000 && alcance < 19200) {
    alza = (0.09 * alcance - 1073).toFixed(2);
  } else if (alcance >= 19200 && alcance < 19400) {
    alza = (0.105 * alcance - 1361).toFixed(2);
  } else if (alcance >= 19400 && alcance < 19600) {
    alza = (0.11 * alcance - 1548).toFixed(2);
  } else if (alcance >= 19600 && alcance < 19800) {
    alza = (0.14 * alcance - 2046).toFixed(2);
  } else if (alcance >= 19800 && alcance < 20000) {
    alza = (0.185 * alcance - 2937).toFixed(2);
  } else if (alcance >= 20000 && alcance < 20127) {
    alza = (0.5511811023622 * alcance - 10260).toFixed(2);
  }

  document.getElementById("alza").value = alza;
  return alza;
}
/*function alzaInni(){
    var alzaIni = Number.parseFloat(alzaCb () + corrAlc ()).toFixed(2);
    document.getElementById("alzaIni").value = alzaIni;
    return alzaIni;
}*/
/*---------------------------------------------------------------------------------------------------------------------------------*/
function altMaxCB() {
  const alcance = alcancePvCb();
  let altMax = null;

  if (alcance >= 6000 && alcance < 8000) {
    altMax = 0.01290909090909 * alcance - 25.90;
  } else if (alcance >= 8000 && alcance < 9000) {
    altMax = 0.01571428571429 * alcance - 47.90;
  } else if (alcance >= 9000 && alcance < 10000) {
    altMax = 0.01728571428571 * alcance - 61.71;
  } else if (alcance >= 10000 && alcance < 11000) {
    altMax = 0.01885714285714 * alcance - 77.66;
  } else if (alcance >= 11000 && alcance < 12000) {
    altMax = 0.02071428571429 * alcance - 98.04;
  } else if (alcance >= 12000 && alcance < 13000) {
    altMax = 0.02428571428571 * alcance - 140.90;
  } else if (alcance >= 13000 && alcance < 14000) {
    altMax = 0.02714285714286 * alcance - 180.43;
  } else if (alcance >= 14000 && alcance < 15000) {
    altMax = 0.02928571428571 * alcance - 209.48;
  } else if (alcance >= 15000 && alcance < 16000) {
    altMax = 0.03228571428571 * alcance - 254.43;
  } else if (alcance >= 16000 && alcance < 17000) {
    altMax = 0.035 * alcance - 298.00;
  } else if (alcance >= 17000 && alcance < 18000) {
    altMax = 0.03928571428571 * alcance - 371.33;
  } else if (alcance >= 18000 && alcance < 18500) {
    altMax = 0.045 * alcance - 474.00;
  } else if (alcance >= 18500 && alcance < 19000) {
    altMax = 0.04686440677966 * alcance - 508.66;
  } else if (alcance >= 19000 && alcance < 19200) {
    altMax = 0.055 * alcance - 633.00;
  } else if (alcance >= 19200 && alcance < 19400) {
    altMax = 0.060 * alcance - 759.00;
  } else if (alcance >= 19400 && alcance < 19600) {
    altMax = 0.070 * alcance - 953.00;
  } else if (alcance >= 19600 && alcance < 19800) {
    altMax = 0.080 * alcance - 1149.00;
  } else if (alcance >= 19800 && alcance < 20000) {
    altMax = 0.095 * alcance - 1446.00;
  } else if (alcance >= 20000 && alcance < 20127) {
    altMax = 0.283464566291 * alcance - 5215.29;
  }

  const result = altMax !== null ? altMax.toFixed(2) : null;
  document.getElementById("altMax").value = result;
  return result;
}
function velVientoAMEA() {
  const velViento = Number(document.getElementById("velViento").value);
  const altMax = altMaxCB(); 
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
  const alcance = alcancePvCb();
  let E = null;

  if (alcance >= 6000 && alcance < 7000) {
    E = ((0.00013 * alcance - 0.003) * -1).toFixed(2);
  } else if (alcance < 11000) {
    E = ((0.00015 * alcance - 0.14) * -1).toFixed(2);
  } else if (alcance < 12000) {
    E = ((0.000157142857 * alcance - 0.22) * -1).toFixed(2);
  } else if (alcance < 13000) {
    E = ((0.00018 * alcance - 0.49333) * -1).toFixed(2);
  } else if (alcance < 15000) {
    E = ((0.0002 * alcance - 0.75) * -1).toFixed(2);
  } else if (alcance < 16000) {
    E = ((0.000207142857 * alcance - 0.8590) * -1).toFixed(2);
  } else if (alcance < 17000) {
    E = ((0.00023 * alcance - 1.22333) * -1).toFixed(2);
  } else if (alcance < 18000) {
    E = ((0.00028857 * alcance - 2.22333) * -1).toFixed(2);
  } else if (alcance < 19000) {
    E = ((0.00046143 * alcance - 5.33476) * -1).toFixed(2);
  } else if (alcance < 20000) {
    E = ((0.00114 * alcance - 18.3666) * -1).toFixed(2);
  }

  return E;
}
function colF() {
  const alcance = alcancePvCb();
  let F = null;

  if (alcance >= 6000 && alcance < 8400) {
    F = ((0.0000211538461538 * alcance + 0.7476923) * -1).toFixed(2);
  } else if (alcance < 12000) {
    F = ((0.00001149122807018 * alcance + 0.825947) * -1).toFixed(2);
  } else if (alcance < 17600) {
    F = ((-0.00002167487684729 * alcance + 1.24147783) * -1).toFixed(2);
  } else if (alcance < 19600) {
    F = ((-0.00005 * alcance - 0.02) * -1).toFixed(2);
  } else if (alcance < 20000) {
    F = ((-0.0004 * alcance - 4.93333) * -1).toFixed(2);
  }

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
/*
function alargarY (){
    var orO = Number.parseFloat(Math.atan2((deltaXB ()), (deltaYB ())));
    var alargar = Number(document.getElementById("alargar").value);
    var y1;
    if(orO >= 0){
        y1 = (Math. sin(orO)) * alargar;
    }else {
        y1 = (Math. cos(orO)) * alargar;
    }
    return y1;
}

function acortarY (){
    var orO = Number.parseFloat(Math.atan2((deltaXB ()), (deltaYB ())));
    var acortar = Number(document.getElementById("acortar").value);
    var y2;
    if(orO >= 0){
        y2 = (Math. cos(orO)) * (acortar * (-1));
    }else {
        y2 = (Math. sin(orO)) * (acortar * (-1));
    }
    return y2;
}
function derechaY (){
    var orO = Number.parseFloat(Math.atan2((deltaXB ()), (deltaYB ())));
    var derecha = Number(document.getElementById("derecha").value);
    var y3;
    if(orO >= 0){
        y3 = (Math. sin(orO)) * (derecha * (-1));
    }else {
        y3 = (Math. cos(orO)) * derecha;
    }
    return y3;
}
function izquierdaY (){
    var orO = Number.parseFloat(Math.atan2((deltaXB ()), (deltaYB ())));
    var izquierda = Number(document.getElementById("izquierda").value);
    var y4;
    if(orO >= 0){
        y4 = (Math. sin(orO)) * izquierda;
    }else {
        y4 = (Math. cos(orO)) * (izquierda * (-1));
    }
    return y4;
}

function yPrima (){
    var yPrima = Number.parseInt(alargarY () + acortarY () + derechaY () + izquierdaY ());
    return yPrima;
}

/*-
function alargarX (){
    var orO = Number.parseFloat(Math.atan2((deltaXB ()),(deltaYB ())));
    var alargar = Number(document.getElementById("alargar").value);
    var x1;
    if(orO >= 0){
        x1 = (Math. sin(orO)) * alargar;
    }else {
        x1 = (Math. cos(orO)) * (alargar * (-1));
    }
    return x1;
}

function acortarX (){
    var orO = Number.parseFloat(Math.atan2((deltaXB ()), (deltaYB ())));
    var acortar = Number(document.getElementById("acortar").value);
    var x2;
    if(orO >= 0){
        x2 = (Math. sin(orO)) * (acortar * (-1));
    }else {
        x2 = (Math. cos(orO)) * acortar;
    }
    return x2;
}
function derechaX (){
    var orO = Number.parseFloat(Math.atan2((deltaXB ()), (deltaYB ())));
    var derecha = Number(document.getElementById("derecha").value);
    var x3;
    if(orO >= 0){
        x3 = (Math. cos(orO)) * derecha;
    }else {
        x3 = (Math. sin(orO)) * derecha;
    }
    return x3;
}
function izquierdaX (){
    var orO = Number.parseFloat(Math.atan2((deltaXB ()), (deltaYB ())));
    var izquierda = Number(document.getElementById("izquierda").value);
    var x4;
    if(orO >= 0){
        x4 = (Math. sin(orO)) * (izquierda * (-1));
    }else {
        x4 = (Math. cos(orO)) * (izquierda * (-1));
    }
    return x4;       
}

function xPrima (){
    var xPrima = Number.parseInt(alargarX () + acortarX () + derechaX () + izquierdaX ());
    return xPrima;
}
*/
function calcularComponentes(valor, anguloMil) {
  const rad = anguloMil * 0.06 * 0.0174533;
  return {
    x: Math.sin(rad) * valor,
    y: Math.cos(rad) * valor
  };
}

function calcularComponentes(valor, anguloMil) {
  const rad = anguloMil * 0.06 * 0.0174533; // Conversión a radianes
  return {
    x: Math.sin(rad) * valor,
    y: Math.cos(rad) * valor
  };
}

function calcularComponentes(valor, anguloMil) {
  const rad = anguloMil * 0.06 * 0.0174533; // convierte milésimas a radianes
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

  const angBase = orientObs(); // dirección central del observador

  const compAlargar   = calcularComponentes(alargar, angBase);
  const compAcortar   = calcularComponentes(acortar, angBase + 3000);    // opuesta
  const compDerecha   = calcularComponentes(derecha, angBase + 1500);    // perpendicular
  const compIzquierda = calcularComponentes(izquierda, angBase - 1500);  // opuesta perpendicular

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
/*function deltaXAPri() {
  const { xPrima } = calcularXY(); 
  const xcb = Number(document.getElementById("xcb").value);
  const xpv = Number(document.getElementById("xpv").value);
  const xpri = xpv + xPrima;
  return xpri - xcb;
}

function deltaYAPri() {
  const { yPrima } = calcularXY();
  const ycb = Number(document.getElementById("ycb").value);
  const ypv = Number(document.getElementById("ypv").value);
  const ypri = ypv + yPrima;
  return ypri - ycb;
}
function alcancePvCbPri() {
  const dx = deltaXAPri();
  const dy = deltaYAPri();
  const alcance = Math.hypot(dx, dy).toFixed(2);

  document.getElementById("alcance").value = alcance;
  return alcance;
}*/
/*function deltaXAPri (){
    var xcb = Number(document.getElementById("xcb").value);
    var xpv = Number(document.getElementById("xpv").value);
    var xpri = Number.parseInt(xpv + xPrima);
    var deltaXAPri = Number.parseInt(xpri - xcb)
    return deltaXAPri;
}
function deltaYAPri (){
    var ycb = Number(document.getElementById("ycb").value);
    var ypv = Number(document.getElementById("ypv").value);
    var ypri = Number.parseInt(ypv + yPrima ());
    var deltaYAPri = Number.parseInt(ypri - ycb)
    return deltaYAPri;
}
function alcancePvCbPri (){
    var alcance = Math.hypot(deltaXAPri (), deltaYAPri ()).toFixed(2);
    document.getElementById("alcance").value = alcance; 
    return alcance;
}  
    */
function sitioPvCbPri (){
    var sitio = Number.parseFloat(deltaZ () / (alcancePvCbPri () / 1000)).toFixed(2);
    document.getElementById("sitio").value = sitio;
    document.getElementById("sitioIni").value =  sitio;
}
function alzaCbPri (){

    if(alcancePvCbPri () >=6000 && alcancePvCbPri () <7000){
    var alza = Number.parseFloat((0.01728571428094 * alcancePvCbPri ()) + (40.14)).toFixed(2);
        }
    else if(alcancePvCbPri () >=7000 && alcancePvCbPri () <8000){
        var alza = Number.parseFloat((0.01999999999602 * alcancePvCbPri ()) + (21)).toFixed(2);
        }
    else if(alcancePvCbPri () >=8000 && alcancePvCbPri () <9000){
        var alza = Number.parseFloat((0.02114285714286 * alcancePvCbPri ()) + (11.619)).toFixed(2);
        }
    else if(alcancePvCbPri () >=9000 && alcancePvCbPri () <10000){
        var alza = Number.parseFloat((0.02371428571429 * alcancePvCbPri ()) - (11.2857)).toFixed(2);
        }
    else if(alcancePvCbPri () >=10000 && alcancePvCbPri () <11000){
        var alza = Number.parseFloat((0.027000000000 * alcancePvCbPri ()) - (44.333)).toFixed(2);
        }
    else if(alcancePvCbPri () >=11000 && alcancePvCbPri () <12000){
        var alza = Number.parseFloat((0.03071428571429 * alcancePvCbPri ()) - (85.0476)).toFixed(2);
        }
    else if(alcancePvCbPri () >=12000 && alcancePvCbPri () <13000){
        var alza = Number.parseFloat((0.03428571428571 * alcancePvCbPri ()) - (127.900)).toFixed(2);
        }  
    else if(alcancePvCbPri () >=13000 && alcancePvCbPri () <14000){
        var alza = Number.parseFloat((0.03814285714286 * alcancePvCbPri ()) - (178.42)).toFixed(2);
        }   
    else if(alcancePvCbPri () >=14000 && alcancePvCbPri () <15000){
        var alza = Number.parseFloat((0.04200000000000 * alcancePvCbPri ()) - (232.33)).toFixed(2);
        }  
    else if(alcancePvCbPri () >=15000 && alcancePvCbPri () <15500){
        var alza = Number.parseFloat((0.04737288135593 * alcancePvCbPri ()) - (312.74576)).toFixed(2);
        }  
    else if(alcancePvCbPri () >=15500 && alcancePvCbPri () <16000){
        var alza = Number.parseFloat((0.04923728813559 * alcancePvCbPri ()) - (341.881)).toFixed(2);
        } 
    else if(alcancePvCbPri () >=16000 && alcancePvCbPri () <16500){
        var alza = Number.parseFloat((0.05000000000000 * alcancePvCbPri ()) - (354)).toFixed(2);
        } 
    else if(alcancePvCbPri () >=16500 && alcancePvCbPri () <17000){
        var alza = Number.parseFloat((0.05610169491525 * alcancePvCbPri ()) - (455.050)).toFixed(2);
        } 
    else if(alcancePvCbPri () >=17000 && alcancePvCbPri () <17500){
        var alza = Number.parseFloat((0.05813559322034 * alcancePvCbPri ()) - (489.543)).toFixed(2);
        } 
    else if(alcancePvCbPri () >=17500 && alcancePvCbPri () <18000){
        var alza = Number.parseFloat((0.06423728813559 * alcancePvCbPri ()) - (596.3559)).toFixed(2);
        } 
    else if(alcancePvCbPri () >=18000 && alcancePvCbPri () <18200){
        var alza = Number.parseFloat((0.07000000000000 * alcancePvCbPri ()) - (700.0)).toFixed(2);
        } 
    else if(alcancePvCbPri () >=18200 && alcancePvCbPri () <18400){
        var alza = Number.parseFloat((0.07000000000000 * alcancePvCbPri ()) - (700.0)).toFixed(2);
        } 
    else if(alcancePvCbPri () >=18400 && alcancePvCbPri () <18600){
        var alza = Number.parseFloat((0.07500000000000 * alcancePvCbPri ()) - (792.0)).toFixed(2);
        } 
    else if(alcancePvCbPri () >=18600 && alcancePvCbPri () <18800){
        var alza = Number.parseFloat((0.08000000000000 * alcancePvCbPri ()) - (885.0)).toFixed(2);
        } 
    else if(alcancePvCbPri () >=18800 && alcancePvCbPri () <19000){
        var alza = Number.parseFloat((0.09000000000000 * alcancePvCbPri ()) - (1073.0)).toFixed(2);
        } 
    else if(alcancePvCbPri () >=19000 && alcancePvCbPri () <19200){
        var alza = Number.parseFloat((0.09000000000000 * alcancePvCbPri ()) - (1073.0)).toFixed(2);
        } 
    else if(alcancePvCbPri () >=19200 && alcancePvCbPri () <19400){
        var alza = Number.parseFloat((0.10500000000000 * alcancePvCbPri ()) - (1361.0)).toFixed(2);
        } 
    else if(alcancePvCbPri () >=19400 && alcancePvCbPri () <19600){
        var alza = Number.parseFloat((0.11000000000000 * alcancePvCbPri ()) - (1548.0)).toFixed(2);
        } 
    else if(alcancePvCbPri () >=19600 && alcancePvCbPri () <19800){
        var alza = Number.parseFloat((0.14000000000000 * alcancePvCbPri ()) - (2046.0)).toFixed(2);
        } 
    else if(alcancePvCbPri () >=19800 && alcancePvCbPri () <20000){
        var alza = Number.parseFloat((0.18500000000000 * alcancePvCbPri ()) - (2937.0)).toFixed(2);
        } 
    else if(alcancePvCbPri () >=20000 && alcancePvCbPri () <20127){
        var alza = Number.parseFloat((0.5511811023622 * alcancePvCbPri ()) - (10260.0)).toFixed(2);
        }
    else{
        var alza = null;
        }
    return alza;
}
/*-------------------------------------------------------------------------------------------------------------------------------------*/
/*function alzaIniC(){
    var alzaIniC = Number.parseFloat(Number(alzaCbPri ()) + Number(corrAlc ())).toFixed(2);
    document.getElementById("alzaIni").value = alzaIniC;
    return alzaIniC;
}

function dirVPri (){
    var dirv = Number.parseInt(((Math.atan2(Math.abs(deltaXAPri ()), Math.abs(deltaYAPri ()))) / 0.0174533) / 0.06);
    var dVP;
    
    if(deltaXAPri () > 0 && deltaYAPri () > 0){
        dVP = Math.abs(dirv);
    }else if(deltaXAPri () > 0 && deltaYAPri () < 0){
        dVP = (3000 - Math.abs(dirv));
    }else if(deltaXAPri () < 0 && deltaYAPri () < 0){
        dVP = (3000 + Math.abs(dirv));
    }else {
        dVP = (6000 - Math.abs(dirv));
    }
    
    return dVP;
}
function difDV (){
    var difDV = Number.parseInt(dirV () - dirVPri ());
    return difDV;
}
function orIniP(){
    if(deltaXB() >= 0 && deltaYB() >= 0){
        var orIniP = Number.parseFloat(Number(4604) + Number(corrOR ()) + Number(difDV ())).toFixed(2);
    }else {
        var orIniP = Number.parseFloat(Number(4604) + Number(corrOR ()) - Number(difDV ())).toFixed(2);
    }
    document.getElementById("orientIni").value = orIniP;
    return orIniP;
}
*/
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