var expValues = [0, 80, 152, 248, 368, 512, 680, 872, 1088, 1328, 1592, 1880, 2192, 2528, 2888, 3272, 3680, 4112, 4568, 5048, 5552, 6080, 6632, 7208, 7808, 8432, 9080, 9752, 10448, 11168, 11912, 12680, 13472, 14288, 15128, 15992, 16880, 17792, 18728, 19688, 20672, 21680, 22712, 23768, 24848, 25952, 27080, 28232, 29408, 30608, 32240, 33904, 35600, 37328, 39088, 40880, 42704, 44560, 46448, 48368, 50320, 52304, 54320, 56368, 58448, 60560, 62704, 64880, 67088, 69328, 71600, 73904, 76240, 78608, 81008, 83440, 85904, 88400, 90928, 93488, 96080, 98704, 101360, 104048, 106768, 109520, 112304, 115120, 117968, 120848, 123760, 126704, 129680, 132688, 135728, 138800, 141904, 145040, 148208, 151408, 154640, 157904, 161200, 164528, 167888, 171280, 174704, 178160, 181648, 185168, 188720, 192304, 195920, 199568, 203248, 206960, 210704, 214480, 218288, 222128, 226000, 229904, 233840, 237808, 241808, 245840, 249904, 254000, 258128, 262288, 266480, 270704, 274960, 279248, 283568, 287920, 292304, 296720, 301168, 305648, 310160, 314704, 319280, 323888, 328528, 333200, 337904, 342640, 347408, 352208, 358248, 364328, 370448, 376608, 382808, 389048, 395328, 401648, 408008, 414408, 420848, 427328, 433848, 440408, 447008, 453648, 460328, 467048, 473808, 480608, 487448, 494328, 501248, 508208, 515208, 522248, 529328, 536448, 543608, 550808, 558048, 565328, 572648, 580008, 587408, 594848, 602328, 609848, 617408, 625008, 632648, 640328, 648048, 655808, 663608, 671448, 679328, 687248, 695208, 703208, 703851, 704498, 705147, 705800, 706456, 707115, 707778, 708443, 709112, 709784, 710459, 711138, 711819, 712504, 713192, 713883, 714578, 715275, 715976, 716680, 717387, 718098, 718811, 719528, 720248, 720971, 721698, 722427, 723160, 723896, 724635, 725378, 726123, 726872, 727624, 728379, 729138, 729899, 730664, 731432, 732203, 732978, 733755, 734536, 735320, 736107, 736898, 737691, 738488, 739288, 740091, 740898, 741707, 742520, 743336, 744155, 744978, 745803, 746632, 747464, 748299, 749138, 749979, 750824, 751672, 752523, 753378, 754235, 755096, 755960, 756827, 757698, 758571, 759448, 760328, 761211, 762098, 762987, 763880, 764776, 765675, 766578, 767483, 768392, 769304, 770219, 771138, 772059, 772984, 773912, 774843, 775778, 776715, 777656, 778600, 779547, 780498, 781451, 782408, 783368, 784331, 785298, 786267, 787240, 788216, 789195, 790178, 791163, 792152, 793144, 794139, 795138, 796139, 797144, 798152, 799163, 800178, 801195, 802216, 803240, 804267, 805298, 806331, 807368, 808408, 809451, 810498, 811547, 812600, 813656, 814715, 815778, 816843, 817912, 818984, 820059, 821138, 822219, 823304, 824392, 825483, 826578, 827675, 828776, 829880, 830987, 832098, 833211, 834328, 835448, 836571, 837698, 838827, 839960, 841096, 842235, 843378, 844523, 845672, 846824, 847979, 849138, 850299, 851464, 852632, 853803, 854978, 856155, 857336, 858520, 859707, 860898, 862091, 863288, 864488, 865691, 866898, 868107, 869320, 870536, 871755, 872978, 874203, 875432, 876664, 877899, 879138, 880379, 881624, 882872, 884123, 885378, 886635, 887896, 889160, 890427, 891698, 892971, 894248, 895528, 898094, 900667, 903246, 905832, 908424, 911022, 913627, 916238, 918856, 921480, 924110, 926747, 929390, 932040, 934696, 937358, 940027, 942702, 945384, 948072, 950766, 953467, 956174, 958888, 961608, 964334, 967067, 969806, 972552, 975304, 978062, 980827, 983598, 986376, 989160, 991950, 994747, 997550, 1000360, 1003176, 1005998, 1008827, 1011662, 1014504, 1017352, 1020206, 1023067, 1025934, 1028808, 1031688, 1033131, 1034578, 1036027, 1037480, 1038936, 1040395, 1041858, 1043323, 1044792, 1046264, 1047739, 1049218, 1050699, 1052184, 1053672, 1055163, 1056658, 1058155, 1059656, 1061160, 1062667, 1064178, 1065691, 1067208, 1068728, 1070251, 1071778, 1073307, 1074840, 1076376, 1077915, 1079458, 1081003, 1082552, 1084104, 1085659, 1087218, 1088779, 1090344, 1091912, 1093483, 1095058, 1096635, 1098216, 1099800, 1101387, 1102978, 1104571, 1106168, 1107768, 0];

function calcExp() {
    var total = 0;
    var start = Number(document.getElementById("startLevel").value);
    var end = Number(document.getElementById("endLevel").value);
    var remaining = Number(document.getElementById("remaining").value);
    var stage = document.getElementById("stage");
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

    // Residual values for when the attribute isn't your focus (averages)

    var res_exp = 10;
    var res_ele = 14;
    var res_wep = Math.floor((27 + 47) / 2);
    var res_sp = Math.floor((1 + 6) / 2);

    var result = document.getElementById("output");

    // Initial error checking for bad inputs
    
    if (end - start < 0) {
        result.value = "Starting level must be lower than desired level!";
        return;
    } else if (start < 1 || start > 500 || end < 1 || end > 500) {
        result.value = "Level must be between 1 and 500!";
        return;
    } else if (isNaN(start) || isNaN(end) || start % 1 != 0 || end % 1 != 0) {
        result.value = "Level must be an integer!";
        return;
    } else if (remaining != "" && (isNaN(remaining) || remaining % 1 != 0)) {
        result.value = "Remaining EXP must be blank or an integer!";
        return;
    } else if (remaining > expValues[start] || remaining < 0) {
        result.value = "Remaining EXP value not valid relative to starting level!"
        return; 
    }

    try {
        for (levels = start; levels < end; levels++) {
            total += expValues[levels];
        }
        
        if (remaining != "") {
            total -= (expValues[start] - remaining);
        }
        
        result.value = "Total Experience Required: " + numberWithCommas(total);

        if (document.getElementById("twotimesexp").checked) {}

        if (stage.value && stage.value != "custom") {

            var stpSelect = stp[stage.value];
            var expSelect = exp[stage.value];

            var stpExText = "";
            var expExText = "";

            result.value += "\n\nAmount of STP required per run: ";

            if (document.getElementById("halfstp").checked) {
                stpSelect /= 2;
                stpExText += " (Half STP active)";
            }

            result.value += numberWithCommas(stpSelect) + stpExText;

            result.value += "\nAmount of EXP acquired per run: ";

            if (document.getElementById("twotimesexp").checked) {
                expSelect *= 2;
                res_wep *= 2;
                res_sp *= 2;
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
                expExText += "(2x EXP booster active)";
            }

            result.value += numberWithCommas(expSelect) + "\n" + expExText;

            numberWithCommas(exp[stage.value]) + "\n";

            var runs = Math.ceil(total / expSelect);
            var req = runs * stpSelect;

            result.value += "\n\nMaximum amount of STP required: " + numberWithCommas(Math.ceil(req));

            result.value += "\nMaximum number of runs required: " + numberWithCommas(Math.ceil(runs));

            result.value += "\n\nResidual values acquired (averages):";
            result.value += "\nElement EXP: " + numberWithCommas(Math.ceil(res_ele * runs));
            result.value += "\nWeapon EXP: " + numberWithCommas(Math.ceil(res_wep * runs));
            result.value += "\nSP: " + numberWithCommas(Math.ceil(res_sp * runs));
        }

    } catch (err) {
        result.value = err.message;
    }


}

//Code retrieved from https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
