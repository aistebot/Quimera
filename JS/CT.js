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

function cuadrante (){

    if(deltaXA () > 0 && deltaYA () > 0){
        var cuadrante = 1;
    }else if(deltaXA () > 0 && deltaYA () < 0){
        var cuadrante = 2;
    }else if(deltaXA () < 0 && deltaYA () < 0){
        var cuadrante = 3;
    }else {
        var cuadrante = 4;
        }
    document.getElementById("cuadrante").value = cuadrante;
    return cuadrante;
}  

function orientObs (){
    var orO = Number.parseInt(((Math.atan2(Math.abs(deltaXB ()), Math.abs(deltaYB ()))) / 0.0174533) / 0.06);
    var orObs;

    if(deltaXB() >= 0 && deltaYB() >= 0){
        orObs = orO;
    }else if(deltaXB() >= 0 && deltaYB() < 0){
        orObs = 3000 - orO;
    }else if(deltaXB() < 0 && deltaYB() < 0){
        orObs = 3000 + orO;
    }else {
        orObs = 6000 - orO;
    }
    document.getElementById("orObs").value = orObs;
    return orObs;
}

function dirV (){
    var dirv = Number.parseInt(((Math.atan2(Math.abs(deltaXA ()), Math.abs(deltaYA ()))) / 0.0174533) / 0.06);
    var dV;
    
    if(deltaXA () > 0 && deltaYA () > 0){
        dV = Math.abs(dirv);
    }else if(deltaXA () > 0 && deltaYA () < 0){
        dV = (3000 - Math.abs(dirv));
    }else if(deltaXA () < 0 && deltaYA () < 0){
        dV = (3000 + Math.abs(dirv));
    }else {
        dV = (6000 - Math.abs(dirv));
    }
    document.getElementById("dV").value = dV;
    return dV;
}

function orDr (){
    var dDr = Number.parseInt(((Math.atan2(Math.abs(deltaXC ()), Math.abs(deltaYC ()))) / 0.0174533) / 0.06);
    var oDr;
    if(deltaXC () > 0 && deltaYC () > 0){
        oDr = Math.abs(dDr);
    }else if(deltaXC () > 0 && deltaYC () < 0){
        oDr = (3000 - Math.abs(dDr));
    }else if(deltaXC () < 0 && deltaYC () < 0){
        oDr = (3000 + Math.abs(dDr));
    }else {
        oDr = (6000 - Math.abs(dDr));
    }
    document.getElementById("oDr").value = oDr;
    return oDr;
}

function angVigi (){
    if(orDr () > dirV ()){
        var angVig = Number.parseInt(orDr () - dirV ());
    }
    else{
        var angVig = Number.parseInt((6000 + orDr ()) - dirV ());
    }
    document.getElementById("angVig").value = angVig;
    return angVig;
}
function sitioPvCb (){
    var sitio = Number.parseFloat(deltaZ () / (alcancePvCb () / 1000)).toFixed(2);
    document.getElementById("sitio").value = sitio;
    document.getElementById("sitioIni").value = sitio;
}
function alzaCb (){

    if(alcancePvCb () >=6000 && alcancePvCb () <7000){
    var alza = Number.parseFloat((0.01728571428094 * alcancePvCb ()) + (40.14)).toFixed(2);
        }
    else if(alcancePvCb () >=7000 && alcancePvCb () <8000){
        var alza = Number.parseFloat((0.01999999999602 * alcancePvCb ()) + (21)).toFixed(2);
        }
    else if(alcancePvCb () >=8000 && alcancePvCb () <9000){
        var alza = Number.parseFloat((0.02114285714286 * alcancePvCb ()) + (11.619)).toFixed(2);
        }
    else if(alcancePvCb () >=9000 && alcancePvCb () <10000){
        var alza = Number.parseFloat((0.02371428571429 * alcancePvCb ()) - (11.2857)).toFixed(2);
        }
    else if(alcancePvCb () >=10000 && alcancePvCb () <11000){
        var alza = Number.parseFloat((0.027000000000 * alcancePvCb ()) - (44.333)).toFixed(2);
        }
    else if(alcancePvCb () >=11000 && alcancePvCb () <12000){
        var alza = Number.parseFloat((0.03071428571429 * alcancePvCb ()) - (85.0476)).toFixed(2);
        }
    else if(alcancePvCb () >=12000 && alcancePvCb () <13000){
        var alza = Number.parseFloat((0.03428571428571 * alcancePvCb ()) - (127.900)).toFixed(2);
        }  
    else if(alcancePvCb () >=13000 && alcancePvCb () <14000){
        var alza = Number.parseFloat((0.03814285714286 * alcancePvCb ()) - (178.42)).toFixed(2);
        }   
    else if(alcancePvCb () >=14000 && alcancePvCb () <15000){
        var alza = Number.parseFloat((0.04200000000000 * alcancePvCb ()) - (232.33)).toFixed(2);
        }  
    else if(alcancePvCb () >=15000 && alcancePvCb () <15500){
        var alza = Number.parseFloat((0.04737288135593 * alcancePvCb ()) - (312.74576)).toFixed(2);
        }  
    else if(alcancePvCb () >=15500 && alcancePvCb () <16000){
        var alza = Number.parseFloat((0.04923728813559 * alcancePvCb ()) - (341.881)).toFixed(2);
        } 
    else if(alcancePvCb () >=16000 && alcancePvCb () <16500){
        var alza = Number.parseFloat((0.05000000000000 * alcancePvCb ()) - (354)).toFixed(2);
        } 
    else if(alcancePvCb () >=16500 && alcancePvCb () <17000){
        var alza = Number.parseFloat((0.05610169491525 * alcancePvCb ()) - (455.050)).toFixed(2);
        } 
    else if(alcancePvCb () >=17000 && alcancePvCb () <17500){
        var alza = Number.parseFloat((0.05813559322034 * alcancePvCb ()) - (489.543)).toFixed(2);
        } 
    else if(alcancePvCb () >=17500 && alcancePvCb () <18000){
        var alza = Number.parseFloat((0.06423728813559 * alcancePvCb ()) - (596.3559)).toFixed(2);
        } 
    else if(alcancePvCb () >=18000 && alcancePvCb () <18200){
        var alza = Number.parseFloat((0.07000000000000 * alcancePvCb ()) - (700.0)).toFixed(2);
        } 
    else if(alcancePvCb () >=18200 && alcancePvCb () <18400){
        var alza = Number.parseFloat((0.07000000000000 * alcancePvCb ()) - (700.0)).toFixed(2);
        } 
    else if(alcancePvCb () >=18400 && alcancePvCb () <18600){
        var alza = Number.parseFloat((0.07500000000000 * alcancePvCb ()) - (792.0)).toFixed(2);
        } 
    else if(alcancePvCb () >=18600 && alcancePvCb () <18800){
        var alza = Number.parseFloat((0.08000000000000 * alcancePvCb ()) - (885.0)).toFixed(2);
        } 
    else if(alcancePvCb () >=18800 && alcancePvCb () <19000){
        var alza = Number.parseFloat((0.09000000000000 * alcancePvCb ()) - (1073.0)).toFixed(2);
        } 
    else if(alcancePvCb () >=19000 && alcancePvCb () <19200){
        var alza = Number.parseFloat((0.09000000000000 * alcancePvCb ()) - (1073.0)).toFixed(2);
        } 
    else if(alcancePvCb () >=19200 && alcancePvCb () <19400){
        var alza = Number.parseFloat((0.10500000000000 * alcancePvCb ()) - (1361.0)).toFixed(2);
        } 
    else if(alcancePvCb () >=19400 && alcancePvCb () <19600){
        var alza = Number.parseFloat((0.11000000000000 * alcancePvCb ()) - (1548.0)).toFixed(2);
        } 
    else if(alcancePvCb () >=19600 && alcancePvCb () <19800){
        var alza = Number.parseFloat((0.14000000000000 * alcancePvCb ()) - (2046.0)).toFixed(2);
        } 
    else if(alcancePvCb () >=19800 && alcancePvCb () <20000){
        var alza = Number.parseFloat((0.18500000000000 * alcancePvCb ()) - (2937.0)).toFixed(2);
        } 
    else if(alcancePvCb () >=20000 && alcancePvCb () <20127){
        var alza = Number.parseFloat((0.5511811023622 * alcancePvCb ()) - (10260.0)).toFixed(2);
        }
    else{
        var alza = null;
        }
    document.getElementById("alza").value = alza;
    return alza;
}
function alzaInni(){
    var alzaIni = Number.parseFloat(alzaCb () + corrAlc ()).toFixed(2);
    document.getElementById("alzaIni").value = alzaIni;
    return alzaIni;
}
/*---------------------------------------------------------------------------------------------------------------------------------*/
function altMaxCB (){

    if(alcancePvCb () >=6000 && alcancePvCb () <8000){
    var altMax = Number.parseFloat((0.01290909090909 * alcancePvCb ()) - (25.90)).toFixed(2);
    }
    else if(alcancePvCb () >=8000 && alcancePvCb () <9000){
        var altMax = Number.parseFloat((0.01571428571429 * alcancePvCb ()) - (47.90)).toFixed(2);
        }
    else if(alcancePvCb () >=9000 && alcancePvCb () <10000){
        var altMax = Number.parseFloat((0.01728571428571 * alcancePvCb ()) - (61.71)).toFixed(2);
        }
    else if(alcancePvCb () >=10000 && alcancePvCb () <11000){
        var altMax = Number.parseFloat((0.01885714285714 * alcancePvCb ()) - (77.66)).toFixed(2);
        }
    else if(alcancePvCb () >=11000 && alcancePvCb () <12000){
        var altMax = Number.parseFloat((0.02071428571429 * alcancePvCb ()) - (98.04)).toFixed(2);
        }
    else if(alcancePvCb () >=12000 && alcancePvCb () <13000){
        var altMax = Number.parseFloat((0.02428571428571 * alcancePvCb ()) - (140.90)).toFixed(2);
        }
    else if(alcancePvCb () >=13000 && alcancePvCb () <14000){
        var altMax = Number.parseFloat((0.02714285714286 * alcancePvCb ()) - (180.43)).toFixed(2);
        }  
    else if(alcancePvCb () >=14000 && alcancePvCb () <15000){
        var altMax = Number.parseFloat((0.02928571428571 * alcancePvCb ()) - (209.48)).toFixed(2);
        }   
    else if(alcancePvCb () >=15000 && alcancePvCb () <16000){
        var altMax = Number.parseFloat((0.03228571428571 * alcancePvCb ()) - (254.43)).toFixed(2);
        }  
    else if(alcancePvCb () >=16000 && alcancePvCb () <17000){
        var altMax = Number.parseFloat((0.03500000000000 * alcancePvCb ()) - (298.00)).toFixed(2);
        }  
    else if(alcancePvCb () >=17000 && alcancePvCb () <18000){
        var altMax = Number.parseFloat((0.03928571428571 * alcancePvCb ()) - (371.33)).toFixed(2);
        } 
    else if(alcancePvCb () >=18000 && alcancePvCb () <18500){
        var altMax = Number.parseFloat((0.04500000000000 * alcancePvCb ()) - (474.00)).toFixed(2);
        } 
    else if(alcancePvCb () >=18500 && alcancePvCb () <19000){
        var altMax = Number.parseFloat((0.04686440677966 * alcancePvCb ()) - (508.66)).toFixed(2);
        } 
    else if(alcancePvCb () >=19000 && alcancePvCb () <19200){
        var altMax = Number.parseFloat((0.05500000000000 * alcancePvCb ()) - (633.00)).toFixed(2);
        } 
    else if(alcancePvCb () >=19200 && alcancePvCb () <19400){
        var altMax = Number.parseFloat((0.06000000000000 * alcancePvCb ()) - (759.00)).toFixed(2);
        } 
    else if(alcancePvCb () >=19400 && alcancePvCb () <19600){
        var altMax = Number.parseFloat((0.07000000000000 * alcancePvCb ()) - (953.00)).toFixed(2);
        } 
    else if(alcancePvCb () >=19600 && alcancePvCb () <19800){
        var altMax = Number.parseFloat((0.08000000000000 * alcancePvCb ()) - (1149.0)).toFixed(2);
        } 
    else if(alcancePvCb () >=19800 && alcancePvCb () <20000){
        var altMax = Number.parseFloat((0.09500000000000 * alcancePvCb ()) - (1446.00)).toFixed(2);
        } 
    else if(alcancePvCb () >=20000 && alcancePvCb () <20127){
        var altMax = Number.parseFloat((0.283464566291 * alcancePvCb ()) - (5215.29)).toFixed(2);
        } 
    else{
        var altMax = null;
        }
    document.getElementById("altMax").value = altMax;
    return altMax;
}
function velVientoAMEA (){
    var velViento = Number(document.getElementById("velViento").value);

    var vVAltMax = Number.parseFloat((Math.pow((altMaxCB ()/1.7), 0.075)) * velViento).toFixed(2);
    document.getElementById("vVAltMax").value = vVAltMax; 
    return vVAltMax;
}
function AngVient (){
    var orV = Number(document.getElementById("orV").value);
    var orVM = Number(orV / 0.06);

    if(dirV () > orVM){
        var angViento = dirV () - orVM;
    }
    else{
        var angViento = (6000 + dirV ()) - orVM;
    }
    document.getElementById("angViento").value = angViento; 
    return angViento;
} 
function descX (){
    if(AngVient () < 1500){
        var wX = Number.parseFloat((Math.abs((Math.cos(AngVient () * 0.06 * 0.0174533)) * velVientoAMEA ()).toFixed(2)) * (-1));
    }
    else if(AngVient () >= 1500 && AngVient () < 3000){
        var wX = Number.parseFloat(Math.abs((Math.cos(AngVient () * 0.06 * 0.0174533)) * velVientoAMEA ()).toFixed(2));
    }
    else if(AngVient () >= 3000 && AngVient () < 4500){
        var wX = Number.parseFloat(Math.abs((Math.cos(AngVient () * 0.06 * 0.0174533)) * velVientoAMEA ()).toFixed(2));
    }
    else{
        var wX = Number.parseFloat((Math.abs((Math.cos(AngVient () * 0.06 * 0.0174533)) * velVientoAMEA ()).toFixed(2)) * (-1));
    }
        document.getElementById("wX").value = wX;
        return wX;
}
function descZ (){
    if(AngVient () < 1500){
        var wZ = Number.parseFloat(Math.abs((Math.sin(AngVient () * 0.06 * 0.0174533)) * velVientoAMEA ()).toFixed(2));
    }
    else if(AngVient () >= 1500 && AngVient () < 3000){
        var wZ = Number.parseFloat(Math.abs((Math.sin(AngVient () * 0.06 * 0.0174533)) * velVientoAMEA ()).toFixed(2));
    }
    else if(AngVient () >= 3000 && AngVient () < 4500){
        var wZ = Number.parseFloat((Math.abs((Math.sin(AngVient () * 0.06 * 0.0174533)) * velVientoAMEA ()).toFixed(2)) * (-1));
    }
    else{
        var wZ = Number.parseFloat((Math.abs((Math.sin(AngVient () * 0.06 * 0.0174533)) * velVientoAMEA ()).toFixed(2)) * (-1));
    }
        document.getElementById("wZ").value = wZ;
        return wZ;
}  
function colK (){
    if( alcancePvCb () < 8000){
        var k = (-0.1);
    }
    else if (alcancePvCb () >= 8000 && alcancePvCb () < 10000){
        var k = (-.02);
    }
    else{
        var k = (-0.3);
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
function corrOR (){
    var a1 = Number.parseFloat(descX () * colK ());
    var a2 = Number.parseFloat(descZ () * colD ());
    var correcOr = Number.parseFloat(a1 + a2).toFixed(2);
    document.getElementById("correcOr").value = correcOr;
    return correcOr;
}
function colE (){

    if(alcancePvCb () >=6000 && alcancePvCb () <7000){
        var E = Number.parseFloat(((0.00013 * alcancePvCb ()) - (0.003)) * (-1)).toFixed(2);
        }
        else if(alcancePvCb () >=7000 && alcancePvCb () <11000){
            var E = Number.parseFloat(((0.00015 * alcancePvCb ()) - (0.14)) * (-1)).toFixed(2);
            }
        else if(alcancePvCb () >=11000 && alcancePvCb () <12000){
            var E = Number.parseFloat(((0.000157142857 * alcancePvCb ()) - (0.22)) * (-1)).toFixed(2);
            }
        else if(alcancePvCb () >=12000 && alcancePvCb () <13000){
            var E = Number.parseFloat(((0.00018 * alcancePvCb ()) - (0.49333)) * (-1)).toFixed(2);
            }
        else if(alcancePvCb () >=13000 && alcancePvCb () <15000){
            var E = Number.parseFloat(((0.0002 * alcancePvCb ()) - (0.75)) * (-1)).toFixed(2);
           }
        else if(alcancePvCb () >=15000 && alcancePvCb () <16000){
            var E = Number.parseFloat(((0.000207142857 * alcancePvCb ()) - (0.8590)) * (-1)).toFixed(2);
           }
        else if(alcancePvCb () >=16000 && alcancePvCb () <17000){
            var E = Number.parseFloat(((0.00023 * alcancePvCb ()) - (1.22333)) * (-1)).toFixed(2);
           }
        else if(alcancePvCb () >=17000 && alcancePvCb () <18000){
            var E = Number.parseFloat(((0.00028857 * alcancePvCb ()) - (2.22333)) * (-1)).toFixed(2);
           }
        else if(alcancePvCb () >=18000 && alcancePvCb () <19000){
            var E = Number.parseFloat(((0.00046143 * alcancePvCb ()) - (5.33476)) * (-1)).toFixed(2);
           }
        else if(alcancePvCb () >=19000 && alcancePvCb () <20000){
            var E = Number.parseFloat(((0.00114 * alcancePvCb ()) - (18.3666)) * (-1)).toFixed(2);
           }
           else{
            var E = null;
           }
        return E;
}
function colF (){

    if(alcancePvCb () >=6000 && alcancePvCb () <8400){
        var F = Number.parseFloat(((0.0000211538461538 * alcancePvCb ()) + (0.7476923)) * (-1)).toFixed(2);
        }
    else if(alcancePvCb () >=8400 && alcancePvCb () <12000){
        var F = Number.parseFloat(((0.00001149122807018 * alcancePvCb ()) + (0.825947)) * (-1)).toFixed(2);
        }
    else if(alcancePvCb () >=12000 && alcancePvCb () <17600){
        var F = Number.parseFloat(((-0.00002167487684729 * alcancePvCb ()) + (1.24147783)) * (-1)).toFixed(2);
        }
    else if(alcancePvCb () >=17600 && alcancePvCb () <19600){
        var F = Number.parseFloat(((-0.00005 * alcancePvCb ()) - (0.02)) * (-1)).toFixed(2);
        }
    else if(alcancePvCb () >=19600 && alcancePvCb () <20000){
        var F = Number.parseFloat(((-0.0004 * alcancePvCb ()) - (4.93333)) * (-1)).toFixed(2);
        }
    else{
        var F = null;
    }
    return F;
}
function corrAlc (){
    var a1 = Number.parseFloat(descX () * colE ());
    var a2 = Number.parseFloat(descZ () * colF ());
    var correcAlc = Number.parseFloat(a1 + a2).toFixed(2);
    document.getElementById("correcAlc").value = correcAlc;
    return correcAlc;
}
function alzaIni(){
    var alzaIni = Number.parseFloat(Number(alzaCb ()) + Number(corrAlc ())).toFixed(2);
    document.getElementById("alzaIni").value = alzaIni;
    return alzaIni;
}
function orIni(){
    var orIni = Number.parseFloat(Number(4604) + Number(corrOR ())).toFixed(2);
    document.getElementById("orientIni").value = orIni;
    return orIni;
}
/*----------------------------------------------------------------------------------------------------------*/
function alargarY (){
    var orO = Number.parseFloat(Math.atan2(Math.abs(deltaXB ()), Math.abs(deltaYB ())));
    var alargar = Number(document.getElementById("alargar").value);
    var y1;
    if(deltaXB() >= 0 && deltaYB() >= 0){
        y1 = (Math.abs(Math. sin(orO))) * alargar;
    }else {
        y1 = (Math.abs(Math. cos(orO))) * alargar;
    }
    return y1;
}

function acortarY (){
    var orO = Number.parseFloat(Math.atan2(Math.abs(deltaXB ()), Math.abs(deltaYB ())));
    var acortar = Number(document.getElementById("acortar").value);
    var y2;
    if(deltaXB() >= 0 && deltaYB() >= 0){
        y2 = (Math.abs(Math. sin(orO))) * (acortar * -1);
    }else {
        y2 = (Math.abs(Math. cos(orO))) * (acortar * -1);
    }
    return y2;
}
function derechaY (){
    var orO = Number.parseFloat(Math.atan2(Math.abs(deltaXB ()), Math.abs(deltaYB ())));
    var derecha = Number(document.getElementById("derecha").value);
    var y3;
    if(deltaXB() >= 0 && deltaYB() >= 0){
        y3 = (Math.abs(Math. cos(orO))) * (derecha * -1);
    }else {
        y3 = (Math.abs(Math. sin(orO))) * derecha;
    }
    return y3;
}
function izquierdaY (){
    var orO = Number.parseFloat(Math.atan2(Math.abs(deltaXB ()), Math.abs(deltaYB ())));
    var izquierda = Number(document.getElementById("izquierda").value);
    var y4;
    if(deltaXB() >= 0 && deltaYB() >= 0){
        y4 = (Math.abs(Math. cos(orO))) * izquierda;
    }else {
        y4 = (Math.abs(Math. sin(orO))) * (izquierda * -1);
    }
    return y4;
}

function yPrima (){
    var yPrima = Number.parseInt(alargarY () + acortarY () + derechaY () + izquierdaY ());
    return yPrima;
}

/*-------------------------------------------------------------------------------------------------*/
function alargarX (){
    var orO = Number.parseFloat(Math.atan2(Math.abs(deltaXB ()), Math.abs(deltaYB ())));
    var alargar = Number(document.getElementById("alargar").value);
    var x1;
    if(deltaXB() >= 0 && deltaYB() >= 0){
        x1 = (Math.abs(Math. cos(orO))) * alargar;
    }else {
        x1 = (Math.abs(Math. sin(orO))) * (alargar * -1);
    }
    return x1;
}

function acortarX (){
    var orO = Number.parseFloat(Math.atan2(Math.abs(deltaXB ()), Math.abs(deltaYB ())));
    var acortar = Number(document.getElementById("acortar").value);
    var x2;
    if(deltaXB() >= 0 && deltaYB() >= 0){
        x2 = (Math.abs(Math. cos(orO))) * (acortar * -1);
    }else {
        x2 = (Math.abs(Math. sin(orO))) * acortar;
    }
    return x2;
}
function derechaX (){
    var orO = Number.parseFloat(Math.atan2(Math.abs(deltaXB ()), Math.abs(deltaYB ())));
    var derecha = Number(document.getElementById("derecha").value);
    var x3;
    if(deltaXB() >= 0 && deltaYB() >= 0){
        x3 = (Math.abs(Math. sin(orO))) * (derecha * -1);
    }else {
        x3 = (Math.abs(Math. cos(orO))) * derecha;
    }
    return x3;
}
function izquierdaX (){
    var orO = Number.parseFloat(Math.atan2(Math.abs(deltaXB ()), Math.abs(deltaYB ())));
    var izquierda = Number(document.getElementById("izquierda").value);
    var x4;
    if(deltaXB() >= 0 && deltaYB() >= 0){
        x4 = (Math.abs(Math. sin(orO))) * izquierda;
    }else {
        x4 = (Math.abs(Math. cos(orO))) * (izquierda * -1);
    }
    return x4;
}

function xPrima (){
    var xPrima = Number.parseInt(alargarX () + acortarX () + derechaX () + izquierdaX ());
    return xPrima;
}

function deltaXAPri (){
    var xcb = Number(document.getElementById("xcb").value);
    var xpv = Number(document.getElementById("xpv").value);
    var xpri = Number.parseInt(xpv + xPrima ());
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
function alzaIniC(){
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
   /* var orIniP = Number.parseFloat(Number(4604) + Number(corrOR ()) + Number(difDV ())).toFixed(2);
    document.getElementById("orientIni").value = orIniP;
    return orIniP;*/
    if(deltaXB() >= 0 && deltaYB() >= 0){
        var orIniP = Number.parseFloat(Number(4604) + Number(corrOR ()) + Number(difDV ())).toFixed(2);
    }else {
        var orIniP = Number.parseFloat(Number(4604) + Number(corrOR ()) - Number(difDV ())).toFixed(2);
    }
    document.getElementById("orientIni").value = orIniP;
    return orIniP;
}