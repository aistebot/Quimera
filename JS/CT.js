const cuadrantem = document.getElementById("ncuadrante");
const comp = document.getElementById("4");
const orRef = document.getElementById("4600");




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
    var alcance = Math.hypot(deltaXA (), deltaYA ());
    document.getElementById("alcance").value = alcance; 
    return alcance;
}  
function alcancePvPo (){
    var alcPvPo = Number.parseInt(Math.hypot(deltaXB (), deltaYB ()));
    document.getElementById("alcPvPo").value = alcPvPo;
}  
function cuadrante (){

    if(deltaXA () > 0 && deltaYA () > 0){
        var ncuadrante = "Primer cuadrante"
    }else if(deltaXA () > 0 && deltaYA () < 0){
        var ncuadrante = "Segundo cuadrante"
    }else if(deltaXA () < 0 && deltaYA () < 0){
        var ncuadrante = "Tercer cuadrante"
    }else {
        var ncuadrante = "Cuarto cuadrante"
    }

    cuadrantem.innerHTML = ncuadrante;
}  
function visible (){
    comp.innerHTML = "4";
    orRef.innerHTML = "4600";
}  
function orientObs (){
    var orO = Number.parseInt(((Math.atan2(deltaXB (), deltaYB ())) / 0.0174533) / 0.06);

    if(deltaXB () > 0 && deltaYB () > 0){
        var orObs = Math.abs(orO);
    }else if(deltaXB () > 0 && deltaYB () < 0){
        var orObs = (3000 - Math.abs(orO));
    }else if(deltaXB () < 0 && deltaYB () < 0){
        var orObs = (3000 + Math.abs(orO));
    }else {
        var orObs = (6000 - Math.abs(orO));
    }

    document.getElementById("orObs").value = orObs;
    return orObs;
}  
function rdirV (){
    var dirv = Number.parseInt(((Math.atan2(deltaXA (), deltaYA ())) / 0.0174533) / 0.06);
    return dirv;
}
function dirV (){
    if(deltaXA () > 0 && deltaYA () > 0){
        var dV = Math.abs(rdirV ());
    }else if(deltaXA () > 0 && deltaYA () < 0){
        var dV = (3000 - Math.abs(rdirV ()));
    }else if(deltaXA () < 0 && deltaYA () < 0){
        var dV = (3000 + Math.abs(rdirV ()));
    }else {
        var dV = (6000 - Math.abs(rdirV ()));
    }
    document.getElementById("dV").value = dV;
    return dV;
}
function direcDr (){
    var dDr = Number.parseInt(((Math.atan2(deltaXC (), deltaYC ())) / 0.0174533) / 0.06);
    document.getElementById("dDr").value = dDr;
    return dDr;
}
function orDr (){
    if(deltaXC () > 0 && deltaYC () > 0){
        var oDr = Math.abs(direcDr ());
    }else if(deltaXC () > 0 && deltaYC () < 0){
        var oDr = (3000 - Math.abs(direcDr ()));
    }else if(deltaXC () < 0 && deltaYC () < 0){
        var oDr = (3000 + Math.abs(direcDr ()));
    }else {
        var oDr = (6000 - Math.abs(direcDr ()));
    }
    return oDr;
}   
function angVigi (){
    if(orDr () > dirV ()){
        var angVig = Number.parseInt(direcDr () - dirV ());
    }
    else{
        var angVig = Number.parseInt((6000 + direcDr ()) - dirV ());
    }
    document.getElementById("angVig").value = angVig;
    return angVig;
}
function sitioPvCb (){
    
    var sitio = Number.parseInt(deltaZ () / (alcancePvCb () / 1000));
    document.getElementById("sitio").value = sitio;
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

    if(dirV () > orV){
        var angViento = dirV () - orV;
    }
    else{
        var angViento = (6000 + dirV ()) - orV;
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