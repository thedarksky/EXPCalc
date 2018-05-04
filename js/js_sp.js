/*Code by Altivu
 */

// Global variables to be used for multiple functions

var expValues = [0, 80, 152, 248, 368, 512, 680, 872, 1088, 1328, 1592, 1880, 2192, 2528, 2888, 3272, 3680, 4112, 4568, 5048, 5552, 6080, 6632, 7208, 7808, 8432, 9080, 9752, 10448, 11168, 11912, 12680, 13472, 14288, 15128, 15992, 16880, 17792, 18728, 19688, 20672, 21680, 22712, 23768, 24848, 25952, 27080, 28232, 29408, 30608, 32240, 33904, 35600, 37328, 39088, 40880, 42704, 44560, 46448, 48368, 50320, 52304, 54320, 56368, 58448, 60560, 62704, 64880, 67088, 69328, 71600, 73904, 76240, 78608, 81008, 83440, 85904, 88400, 90928, 93488, 96080, 98704, 101360, 104048, 106768, 109520, 112304, 115120, 117968, 120848, 123760, 126704, 129680, 132688, 135728, 138800, 141904, 145040, 148208, 151408, 154640, 157904, 161200, 164528, 167888, 171280, 174704, 178160, 181648, 185168, 188720, 192304, 195920, 199568, 203248, 206960, 210704, 214480, 218288, 222128, 226000, 229904, 233840, 237808, 241808, 245840, 249904, 254000, 258128, 262288, 266480, 270704, 274960, 279248, 283568, 287920, 292304, 296720, 301168, 305648, 310160, 314704, 319280, 323888, 328528, 333200, 337904, 342640, 347408, 352208, 358248, 364328, 370448, 376608, 382808, 389048, 395328, 401648, 408008, 414408, 420848, 427328, 433848, 440408, 447008, 453648, 460328, 467048, 473808, 480608, 487448, 494328, 501248, 508208, 515208, 522248, 529328, 536448, 543608, 550808, 558048, 565328, 572648, 580008, 587408, 594848, 602328, 609848, 617408, 625008, 632648, 640328, 648048, 655808, 663608, 671448, 679328, 687248, 695208, 703208, 703851, 704498, 705147, 705800, 706456, 707115, 707778, 708443, 709112, 709784, 710459, 711138, 711819, 712504, 713192, 713883, 714578, 715275, 715976, 716680, 717387, 718098, 718811, 719528, 720248, 720971, 721698, 722427, 723160, 723896, 724635, 725378, 726123, 726872, 727624, 728379, 729138, 729899, 730664, 731432, 732203, 732978, 733755, 734536, 735320, 736107, 736898, 737691, 738488, 739288, 740091, 740898, 741707, 742520, 743336, 744155, 744978, 745803, 746632, 747464, 748299, 749138, 749979, 750824, 751672, 752523, 753378, 754235, 755096, 755960, 756827, 757698, 758571, 759448, 760328, 761211, 762098, 762987, 763880, 764776, 765675, 766578, 767483, 768392, 769304, 770219, 771138, 772059, 772984, 773912, 774843, 775778, 776715, 777656, 778600, 779547, 780498, 781451, 782408, 783368, 784331, 785298, 786267, 787240, 788216, 789195, 790178, 791163, 792152, 793144, 794139, 795138, 796139, 797144, 798152, 799163, 800178, 801195, 802216, 803240, 804267, 805298, 806331, 807368, 808408, 809451, 810498, 811547, 812600, 813656, 814715, 815778, 816843, 817912, 818984, 820059, 821138, 822219, 823304, 824392, 825483, 826578, 827675, 828776, 829880, 830987, 832098, 833211, 834328, 835448, 836571, 837698, 838827, 839960, 841096, 842235, 843378, 844523, 845672, 846824, 847979, 849138, 850299, 851464, 852632, 853803, 854978, 856155, 857336, 858520, 859707, 860898, 862091, 863288, 864488, 865691, 866898, 868107, 869320, 870536, 871755, 872978, 874203, 875432, 876664, 877899, 879138, 880379, 881624, 882872, 884123, 885378, 886635, 887896, 889160, 890427, 891698, 892971, 894248, 895528, 898094, 900667, 903246, 905832, 908424, 911022, 913627, 916238, 918856, 921480, 924110, 926747, 929390, 932040, 934696, 937358, 940027, 942702, 945384, 948072, 950766, 953467, 956174, 958888, 961608, 964334, 967067, 969806, 972552, 975304, 978062, 980827, 983598, 986376, 989160, 991950, 994747, 997550, 1000360, 1003176, 1005998, 1008827, 1011662, 1014504, 1017352, 1020206, 1023067, 1025934, 1028808, 1031688, 1033131, 1034578, 1036027, 1037480, 1038936, 1040395, 1041858, 1043323, 1044792, 1046264, 1047739, 1049218, 1050699, 1052184, 1053672, 1055163, 1056658, 1058155, 1059656, 1061160, 1062667, 1064178, 1065691, 1067208, 1068728, 1070251, 1071778, 1073307, 1074840, 1076376, 1077915, 1079458, 1081003, 1082552, 1084104, 1085659, 1087218, 1088779, 1090344, 1091912, 1093483, 1095058, 1096635, 1098216, 1099800, 1101387, 1102978, 1104571, 1106168, 1107768];

var eleValues_FWET = [0, 30, 48, 75, 111, 156, 210, 273, 345, 426, 516, 615, 723, 840, 966, 1101, 1245, 1398, 1560, 1731, 1791, 1854, 1920, 1989, 2061, 2136, 2214, 2295, 2379, 2466, 2556, 2649, 2745, 2844, 2946, 3051, 3159, 3270, 3384, 3501, 2500, 2586, 2674, 2765, 2857, 2952, 3048, 3147, 3248, 3351, 3456, 3563, 3672, 3783, 3897, 4012, 4130, 4249, 4371, 4495, 3500, 3592, 3685, 3779, 3875, 3973, 4072, 4172, 4274, 4378, 4483, 4589, 4697, 4807, 4918, 5030, 5144, 5260, 5377, 5495, 4500, 4597, 4696, 4795, 4896, 4998, 5101, 5206, 5311, 5418, 5526, 5635, 5746, 5857, 5970, 6084, 6199, 6316, 6433, 6552];

var eleValues_light = [0, 35, 54, 83, 121, 169, 227, 294, 371, 457, 553, 659, 774, 899, 1033, 1177, 1331, 1494, 1667, 1849, 1919, 1993, 2070, 2150, 2234, 2322, 2413, 2507, 2605, 2707, 2812, 2920, 3032, 3148, 3267, 3389, 3515, 3645, 3778, 3914, 2500, 2586, 2674, 2765, 2857, 2952, 3048, 3147, 3248, 3351, 3456, 3563, 3672, 3783, 3897, 4012, 4130, 4249, 4371, 4495, 3500, 3592, 3685, 3779, 3875, 3973, 4072, 4172, 4274, 4378, 4483, 4589, 4697, 4807, 4918, 5030, 5144, 5260, 5377, 5495, 4500, 4597, 4696, 4795, 4896, 4998, 5101, 5206, 5311, 5418, 5526, 5635, 5746, 5857, 5970, 6084, 6199, 6316, 6433, 6552];

var eleValues_dark = [0, 40, 59, 88, 126, 174, 232, 299, 376, 462, 558, 664, 779, 904, 1038, 1182, 1336, 1499, 1672, 1854, 1924, 1998, 2075, 2155, 2239, 2327, 2418, 2512, 2610, 2712, 2817, 2925, 3037, 3153, 3272, 3394, 3520, 3650, 3783, 3919, 2500, 2586, 2674, 2765, 2857, 2952, 3048, 3147, 3248, 3351, 3456, 3563, 3672, 3783, 3897, 4012, 4130, 4249, 4371, 4495, 3500, 3592, 3685, 3779, 3875, 3973, 4072, 4172, 4274, 4378, 4483, 4589, 4697, 4807, 4918, 5030, 5144, 5260, 5377, 5495, 4500, 4597, 4696, 4795, 4896, 4998, 5101, 5206, 5311, 5418, 5526, 5635, 5746, 5857, 5970, 6084, 6199, 6316, 6433, 6552];

// Bronze weapons have different EXP curve; will be ignoring for simplicity

var wepValues = [0, 100, 580, 1220, 2020, 2980, 4100, 5380, 6820, 8420, 10180, 12100, 14180, 16420, 18820, 21380, 24100, 26980, 30020, 33220, 50460, 34080, 34540, 35020, 35520, 36040, 36580, 37140, 37720, 57480, 38940, 39580, 40240, 40920, 62430, 42340, 43080, 43840, 44620, 68130, 45830, 46250, 46680, 47120, 71355, 48030, 48500, 48980, 49470, 74955, 50480, 51000, 51530, 52070, 78930, 53180, 53750, 54330, 54920, 83280, 55825, 56135, 56450, 56770, 85642, 57425, 57760, 58100, 58445, 58795, 59150, 59510, 59875, 60245, 90930, 61000, 61385, 61775, 62170, 93855, 62975, 63385, 63800, 64220, 64645, 65075, 65510, 65950, 66395, 66845, 67300, 67760, 68225, 68695, 69170, 69650, 70135, 70625, 71120, 71620];

// SP Options

var stats = [0, 10, 40, 80, 130, 190, 260, 340, 430, 530, 640, 760, 890, 1030, 1180, 1340, 1510, 1690, 1880, 2080, 2290, 2510, 2740, 2980, 3230, 3490, 3760, 4040, 4330, 4630, 4940, 5260, 5590, 5930, 6280, 6640, 7010, 7390, 7780, 8180, 8590, 9010, 9440, 9880, 10330, 10790, 11260, 11740, 12230, 12730];

var limitBreak = [0, 50000, 50000];

var relative = [0, 10000];

var sparkCrits = [0, 120, 480, 960, 1560, 2160, 2760, 3360, 3960, 4560, 5160, 5760, 6360, 6960, 7560];

var efficacy = [0, 240, 960, 1920, 3120, 4320, 5520, 6720, 7920, 9120];

var BB = [0, 80, 320, 640, 1040, 1520, 2080, 2720, 3040, 3280, 3520, 3760, 4000, 4240, 4480, 4720, 4960, 5200, 5440, 5680, 5920, 6160, 6400, 6640, 6880, 7120, 7360, 7600, 7840, 8080];

var BCHC = [0, 40, 160, 320, 520, 760, 1080, 1360, 1720, 2120];

var consumption = [0, 240, 880, 1920, 3120];

var SAR = [0, 160, 640, 1280, 2080, 2880, 3680, 4480, 5280, 6080];

var AI = [0, 90000];

var statsSP = document.getElementById("maxHP_a");
var relativeSP = document.getElementById("atkRel_a");
var efficacySP = document.getElementById("hcEff_a");
var sparkCritsSP = document.getElementById("sparkCrits_a");
var BBSP = document.getElementById("BB_a");
var BCHCSP = document.getElementById("BCHC_a");
var consumptionSP = document.getElementById("consumption_a");
var SARSP = document.getElementById("SAR_a");
var AISP = document.getElementById("AI_a");

// Populate SP selects with existing HTML onload (saves on lines)

document.getElementById("maxHP_b").innerHTML = statsSP.innerHTML;
document.getElementById("attack_a").innerHTML = statsSP.innerHTML;
document.getElementById("attack_b").innerHTML = statsSP.innerHTML;
document.getElementById("defense_a").innerHTML = statsSP.innerHTML;
document.getElementById("defense_b").innerHTML = statsSP.innerHTML;
document.getElementById("rec_a").innerHTML = statsSP.innerHTML;
document.getElementById("rec_b").innerHTML = statsSP.innerHTML;
document.getElementById("spark_a").innerHTML = statsSP.innerHTML;
document.getElementById("spark_b").innerHTML = statsSP.innerHTML;

document.getElementById("atkRel_b").innerHTML = relativeSP.innerHTML;
document.getElementById("defRel_a").innerHTML = relativeSP.innerHTML;
document.getElementById("defRel_b").innerHTML = relativeSP.innerHTML;

document.getElementById("spark_a").innerHTML = statsSP.innerHTML;
document.getElementById("spark_b").innerHTML = statsSP.innerHTML;

document.getElementById("hcEff_b").innerHTML = efficacySP.innerHTML;
document.getElementById("bcEff_a").innerHTML = efficacySP.innerHTML;
document.getElementById("bcEff_b").innerHTML = efficacySP.innerHTML;

document.getElementById("sparkCrits_b").innerHTML = sparkCritsSP.innerHTML;

document.getElementById("BB_b").innerHTML = BBSP.innerHTML;
document.getElementById("SBB_a").innerHTML = BBSP.innerHTML;
document.getElementById("SBB_b").innerHTML = BBSP.innerHTML;

document.getElementById("BCHC_b").innerHTML = BCHCSP.innerHTML;

document.getElementById("consumption_b").innerHTML = consumptionSP.innerHTML;

document.getElementById("SAR_b").innerHTML = SARSP.innerHTML;

document.getElementById("AI_b").innerHTML = AISP.innerHTML;

document.getElementById("odEff_a").innerHTML = efficacySP.innerHTML;
document.getElementById("odEff_b").innerHTML = efficacySP.innerHTML;

//////////

// Initial Error Checking Function for Proper Input

function errCheck(start, end, remaining, max, arr, nEllie, guildExp) {
    if (end - start < 0) {
        return "Starting level must be lower than desired level!";
    } else if (start < 1 || start > max || end < 1 || end > max) {
        return "Level must be between 1 and " + max + "!";
    } else if (isNaN(start) || isNaN(end) || start % 1 != 0 || end % 1 != 0) {
        return "Level must be an integer!";
    } else if (remaining != "" && (isNaN(remaining) || remaining % 1 != 0)) {
        return "Remaining EXP must be blank or an integer!";
    } else if (remaining > arr[start] || remaining < 0) {
        return "Remaining EXP value not valid relative to starting level!"
    } else if (nEllie > 4 || nEllie < 0) {
        return "Cannot have less than 0 Ellies or more than 4 (without removing the summoner)!"
    } else if (guildExp > 50 || guildExp < 0) {
        return "Guild EXP bonus % must be between 0 and 50!"
    } else {
        return "";
    }
}

// Function for making custom fields visible when applicable

function manual(num, stage) {
    var input = document.getElementsByClassName("custom")[num];
    var stage = document.getElementById(stage);

    if (stage.value == "custom") {
        input.style.visibility = "visible";
    } else {
        input.style.visibility = "hidden";
    }
}

function calcExp() {
    var total = 0;
    var start = Number(document.getElementById("startLevel").value);
    var end = Number(document.getElementById("endLevel").value);
    var remaining = Number(document.getElementById("remaining").value);
    var stage = document.getElementById("stage");
    var nEllie = Number(document.getElementById("nEllie").value);
    var guildExp = Number(document.getElementById("guildExp").value); // THIS WILL NOT BE A DECIMAL unless the html file is changed

    var stpSelect = "";
    var expSelect = "";
    var STP_EN = "STP";

    // Residual values for when the attribute isn't your focus (averages)

    var res_exp = 10;
    var res_ele = 14;
    var res_wep = Math.floor((27 + 47) / 2);
    var res_sp = Math.floor((1 + 6) / 2);

    var stp = {
        level1: 100,
        level2: 300,
        level3: 1000
    };
    var exp = {
        level1: 1000,
        level2: 3000,
        level3: 15000
    };

    var result = document.getElementById("output");

    // Initial error checking for bad inputs
    // Additional Code for Ellie and Guild

    result.value = errCheck(start, end, remaining, 500, expValues, nEllie, guildExp);

    if (result.value != "") {
        return;
    }

    try {

        for (levels = start; levels < end; levels++) {
            total += expValues[levels];
        }

        if (remaining != "") {
            total -= (expValues[start] - remaining);
        }

        result.value += "Total Experience Required: " + numberWithCommas(total);

        if (stage.value == "custom") {
            expSelect = Number(document.getElementsByClassName("customEXP")[0].value);
            stpSelect = Number(document.getElementsByClassName("customCost")[0].value);
            if (document.getElementsByClassName("stpEN")[0].value == "EN") {
                STP_EN = "EN";
            }
        } else {
            expSelect = exp[stage.value];
            stpSelect = stp[stage.value];
        }

        var stpExText = "";
        var expExText = "";

        result.value += "\n\nAmount of " + STP_EN + " required per run: ";

        if (document.getElementById("halfstp").checked) {
            stpSelect /= 2;
            stpExText += " (Half STP active)";
        }

        result.value += numberWithCommas(stpSelect) + stpExText;

        result.value += "\nAmount of EXP acquired per run: ";

        if (document.getElementById("twotimesexp").checked) {
            expSelect *= 2;
            expExText += "(2x EXP lab active) ";
        }

        if (document.getElementById("onepointfive").checked) {
            expSelect *= 1.5;
            res_wep *= 1.5;
            res_sp *= 1.5;
            expExText += "(1.5x EXP booster active)";
        } else if (document.getElementById("two").checked) {
            expSelect *= 2;
            res_wep *= 2;
            res_sp *= 2;
            expExText += "(2x EXP booster active) ";
        }

        if (nEllie != 0) {
            ellieValue = (0.05 * nEllie) + 1; // 2 Ellies * 5% = 10% = 0.1 | 0.1 + 1 = 1.1 
            expSelect *= ellieValue;
            expExText += "(" + nEllie + " Ellie" + (nEllie > 1 ? "s" : "") + " = +" + (5 * nEllie) + "% Summoner EXP) ";
        }
        if (guildExp != 0) {
            guildExpValue = (0.01 * guildExp) + 1; // conversion to decimal to directly multiply with expSelect 
            expSelect *= guildExpValue;
            expExText += "(+" + guildExp + "% Guild Summoner EXP bonus) ";
        }

        result.value += numberWithCommas(Math.floor(expSelect)) + "\n" + expExText;

        var runs = Math.ceil(total / expSelect);
        var req = runs * stpSelect;

        result.value += "\n\nMaximum amount of " + STP_EN + " required: " + numberWithCommas(Math.ceil(req));

        result.value += "\nMaximum number of runs required: " + numberWithCommas(Math.ceil(runs));

        if (stage.value != "custom") {
            result.value += "\n\nResidual values acquired (averages):";
            result.value += "\nElement EXP: " + numberWithCommas(res_ele * runs);
            result.value += "\nWeapon EXP: " + numberWithCommas(res_wep * runs);
            result.value += "\nSP: " + numberWithCommas(res_sp * runs) + " (Not including level-up SP)";
        }

    } catch (err) {
        result.value = err.message;
    }
}

function calcEle() {
    var total = 0;
    var start = Number(document.getElementById("startLevel2").value);
    var end = Number(document.getElementById("endLevel2").value);
    var remaining = Number(document.getElementById("remaining2").value);
    var stage = document.getElementById("stage2");

    var stpSelect = "";
    var expSelect = "";
    var STP_EN = "STP";

    // Residual values for when the attribute isn't your focus (averages)

    var res_exp = 10;
    var res_ele = 14;
    var res_wep = Math.floor((27 + 47) / 2);
    var res_sp = Math.floor((1 + 6) / 2);

    var stp = {
        level1: 200,
        level2: 500,
        level3: 1000
    };
    var exp = {
        level1: 259,
        level2: 709,
        level3: 1809
    };

    var result = document.getElementById("output2");

    // Initial error checking for bad inputs

    result.value = errCheck(start, end, remaining, 100, eleValues_dark); //Band-aid solution for remaining EXP check; largest of three arrays

    if (result.value != "") {
        return;
    }

    try {
        var element = document.getElementById("elements");

        if (element.value == "fwte") {
            for (levels = start; levels < end; levels++) {
                total += eleValues_FWET[levels];
            }
            if (remaining != "") {
                total -= (eleValues_FWET[start] - remaining);
            }
        } else if (element.value == "light") {
            for (levels = start; levels < end; levels++) {
                total += eleValues_light[levels];
            }
            if (remaining != "") {
                total -= (eleValues_light[start] - remaining);
            }
        } else if (element.value == "dark") {
            for (levels = start; levels < end; levels++) {
                total += eleValues_dark[levels];
            }
            if (remaining != "") {
                total -= (eleValues_dark[start] - remaining);
            }
        }

        result.value = "Total Elemental Experience Required: " + numberWithCommas(total);

        if (stage.value == "custom") {
            expSelect = Number(document.getElementsByClassName("customEXP")[1].value);
            stpSelect = Number(document.getElementsByClassName("customCost")[1].value);
            if (document.getElementsByClassName("stpEN")[1].value == "EN") {
                STP_EN = "EN";
            }
        } else {
            expSelect = exp[stage.value];
            stpSelect = stp[stage.value];
        }

        var stpExText = "";
        var expExText = "";

        result.value += "\n\nAmount of " + STP_EN + " required per run: ";

        if (document.getElementById("halfstp2").checked) {
            stpSelect /= 2;
            stpExText += " (Half STP active)";
        }

        result.value += numberWithCommas(stpSelect) + stpExText;

        result.value += "\nAmount of EXP acquired per run: ";

        if (document.getElementById("twotimesexp2").checked) {
            expExText += "(2x EXP lab active) ";
        }

        if (document.getElementById("onepointfive2").checked) {
            //expSelect *= 1.5;
            res_exp *= 1.5;
            res_wep *= 1.5;
            res_sp *= 1.5;
            expExText += "(1.5x EXP booster active)";
        } else if (document.getElementById("two2").checked) {
            //expSelect *= 2;
            res_exp *= 2;
            res_wep *= 2;
            res_sp *= 2;
            expExText += "(2x EXP booster active)";
        }

        result.value += numberWithCommas(expSelect) + "\n" + expExText;

        var runs = Math.ceil(total / expSelect);
        var req = runs * stpSelect;

        result.value += "\n\nMaximum amount of " + STP_EN + " required: " + numberWithCommas(Math.ceil(req));

        result.value += "\nMaximum number of runs required: " + numberWithCommas(Math.ceil(runs));

        if (stage.value != "custom") {
            result.value += "\n\nResidual values acquired (averages):";
            result.value += "\nLevel EXP: " + numberWithCommas(res_exp * runs);
            result.value += "\nWeapon EXP: " + numberWithCommas(res_wep * runs);
            result.value += "\nSP: " + numberWithCommas(res_sp * runs);
        }

    } catch (err) {
        result.value = err.message;
    }
}

function calcWep() {
    var total = 0;
    var start = Number(document.getElementById("startLevel3").value);
    var end = Number(document.getElementById("endLevel3").value);
    var remaining = Number(document.getElementById("remaining3").value);
    var stage = document.getElementById("stage3");

    var stpSelect = "";
    var expSelect = "";
    var STP_EN = "STP";

    // Residual values for when the attribute isn't your focus (averages)

    var res_exp = 10;
    var res_ele = 14;
    var res_wep = Math.floor((27 + 47) / 2);
    var res_sp = Math.floor((1 + 6) / 2);

    var stp = {
        level1: 200,
        level2: 500,
        level3: 1000
    };
    var exp = {
        level1: Math.floor((3007 + 3027) / 2),
        level2: Math.floor((7507 + 7527) / 2),
        level3: Math.floor((20007 + 20035) / 2),
    };

    var result = document.getElementById("output3");

    // Initial error checking for bad inputs

    result.value = errCheck(start, end, remaining, 100, wepValues);

    if (result.value != "") {
        return;
    }

    try {
        for (levels = start; levels < end; levels++) {
            total += wepValues[levels];
        }

        if (remaining != "") {
            total -= (wepValues[start] - remaining);
        }

        result.value = "Total Weapon Experience Required: " + numberWithCommas(total);

        if (stage.value == "custom") {
            expSelect = Number(document.getElementsByClassName("customEXP")[2].value);
            stpSelect = Number(document.getElementsByClassName("customCost")[2].value);
            if (document.getElementsByClassName("stpEN")[2].value == "EN") {
                STP_EN = "EN";
            }
        } else {
            expSelect = exp[stage.value];
            stpSelect = stp[stage.value];
        }

        var stpExText = "";
        var expExText = "";

        result.value += "\n\nAmount of " + STP_EN + " equired per run: ";

        if (document.getElementById("halfstp3").checked) {
            stpSelect /= 2;
            stpExText += " (Half STP active)";
        }

        result.value += numberWithCommas(stpSelect) + stpExText;

        result.value += "\nAmount of EXP acquired per run: ";

        if (document.getElementById("twotimesexp3").checked) {
            expSelect *= 2;
            expExText += "(2x EXP lab active) ";
        }

        if (document.getElementById("onepointfive3").checked) {
            expSelect *= 1.5;
            res_exp *= 1.5;
            res_sp *= 1.5;
            expExText += "(1.5x EXP booster active)";
        } else if (document.getElementById("two3").checked) {
            expSelect *= 2;
            res_exp *= 2;
            res_sp *= 2;
            expExText += "(2x EXP booster active)";
        }

        result.value += numberWithCommas(expSelect) + "\n" + expExText;

        var runs = Math.ceil(total / expSelect);
        var req = runs * stpSelect;

        result.value += "\n\nMaximum amount of " + STP_EN + " required: " + numberWithCommas(Math.ceil(req));

        result.value += "\nMaximum number of runs required: " + numberWithCommas(Math.ceil(runs));

        if (stage.value != "custom") {
            result.value += "\n\nResidual values acquired (averages):";
            result.value += "\nLevel EXP: " + numberWithCommas(res_exp * runs);
            result.value += "\nElement EXP: " + numberWithCommas(res_ele * runs);
            result.value += "\nSP: " + numberWithCommas(res_sp * runs);
        }

    } catch (err) {
        result.value = err.message;
    }
}

function calcSP(row, type) {
    var start = Number(document.getElementById("table").rows[row].cells[1].getElementsByTagName("select")[0].value);
    var end = Number(document.getElementById("table").rows[row].cells[2].getElementsByTagName("select")[0].value);
    var result = document.getElementById("table").rows[row].cells[3].getElementsByTagName("input")[0];
    var total = 0;

    var stpSelect = "";
    var expSelect = "";
    var STP_EN = "STP";

    for (levels = start; levels < end; levels++) {
        total += window[type][levels];
    }

    //result.value = numberWithCommas(total); //Not using this for now since it messes up the total SP calculation
    result.value = total;

    var totalSP = 0;
    var rows = document.getElementById("table").getElementsByTagName("tr").length;

    for (field = 1; field < rows; field++) {
        totalSP += Number(document.getElementById("table").rows[field].cells[3].getElementsByTagName("input")[0].value);
    }

    var total = 0;
    var stage = document.getElementById("stage4");

    // Residual values for when the attribute isn't your focus (averages)

    var res_exp = 10;
    var res_ele = 14;
    var res_wep = Math.floor((27 + 47) / 2);
    var res_sp = Math.floor((1 + 6) / 2);

    var stp = {
        level1: 100,
        level2: 300,
        level3: 1000
    };
    var exp = {
        level1: 16,
        level2: 56,
        level3: 201
    };

    var result = document.getElementById("output4");

    try {
        result.value = "Total SP Required: " + numberWithCommas(totalSP);

        if (stage.value == "custom") {
            expSelect = Number(document.getElementsByClassName("customEXP")[3].value);
            stpSelect = Number(document.getElementsByClassName("customCost")[3].value);
            if (document.getElementsByClassName("stpEN")[3].value == "EN") {
                STP_EN = "EN";
            }
        } else {
            expSelect = exp[stage.value];
            stpSelect = stp[stage.value];
        }

        var stpExText = "";
        var expExText = "";

        result.value += "\n\nAmount of " + STP_EN + " required per run: ";

        if (document.getElementById("halfstp4").checked) {
            stpSelect /= 2;
            stpExText += " (Half STP active)";
        }

        result.value += numberWithCommas(stpSelect) + stpExText;

        result.value += "\nAmount of SP acquired per run: ";

        if (document.getElementById("twotimesexp4").checked) {
            expSelect *= 2;
            expExText += "(2x EXP lab active) ";
        }
        if (document.getElementById("onepointfive4").checked) {
            expSelect *= 1.5;
            res_wep *= 1.5;
            res_exp *= 1.5;
            expExText += "(1.5x EXP booster active)";
        } else if (document.getElementById("two4").checked) {
            expSelect *= 2;
            res_wep *= 2;
            res_exp *= 2;
            expExText += "(2x EXP booster active)";
        }

        result.value += numberWithCommas(expSelect) + "\n" + expExText;

        var runs = Math.ceil(totalSP / expSelect);
        var req = runs * stpSelect;

        result.value += "\n\nMaximum amount of " + STP_EN + " required: " + numberWithCommas(Math.ceil(req));

        result.value += "\nMaximum number of runs required: " + numberWithCommas(Math.ceil(runs));

        if (stage.value != "custom") {
            result.value += "\n\nResidual values acquired (averages):";
            result.value += "\nLevel EXP: " + numberWithCommas(res_exp * runs);
            result.value += "\nElement EXP: " + numberWithCommas(res_ele * runs);
            result.value += "\nWeapon EXP: " + numberWithCommas(res_wep * runs);
        }

    } catch (err) {
        result.value = err.message;
    }
}

//World's most inefficient code
function calcSPAll() {
    calcSP(1, 'stats');
    calcSP(2, 'stats');
    calcSP(3, 'relative');
    calcSP(4, 'limitBreak');
    calcSP(5, 'stats');
    calcSP(6, 'relative');
    calcSP(7, 'stats');
    calcSP(8, 'efficacy');
    calcSP(9, 'stats');
    calcSP(10, 'sparkCrits');
    calcSP(11, 'BB');
    calcSP(12, 'BB');
    calcSP(13, 'BCHC');
    calcSP(14, 'consumption');
    calcSP(15, 'efficacy');
    calcSP(16, 'SAR');
    calcSP(17, 'AI');
    calcSP(18, 'efficacy');
}

//World's most inefficient code
function SPToggle() {
    document.getElementById("maxHP_b").value = 50;
    document.getElementById("attack_b").value = 50;
    document.getElementById("atkRel_b").value = 2;
    document.getElementById("atkCap_b").value = 2;
    document.getElementById("defense_b").value = 50;
    document.getElementById("defRel_b").value = 2;
    document.getElementById("rec_b").value = 50;
    document.getElementById("hcEff_b").value = 10;
    document.getElementById("spark_b").value = 50;
    document.getElementById("sparkCrits_b").value = 15;
    document.getElementById("BB_b").value = 30;
    document.getElementById("SBB_b").value = 30;
    document.getElementById("BCHC_b").value = 10;
    document.getElementById("consumption_b").value = 5;
    document.getElementById("bcEff_b").value = 10;
    document.getElementById("SAR_b").value = 10;
    document.getElementById("AI_b").value = 2;
    document.getElementById("odEff_b").value = 10;
    calcSPAll();
}

//Code retrieved from https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
