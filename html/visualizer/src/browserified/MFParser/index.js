(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.MFParser = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

function atomSorter(a, b) {
  if (a === b) return 0;
  if (a === 'C') return -1;
  if (b === 'C') return 1;
  if (a === 'H') return -1;
  if (b === 'H') return 1;
  if (a < b) return -1;
  return 1;
}

module.exports = atomSorter;

},{}],2:[function(require,module,exports){
'use strict';

module.exports = {
  ELECTRON_MASS: 5.48579909070e-4
};

},{}],3:[function(require,module,exports){
'use strict';

module.exports = { H: { number: 1, isotopes: [{ nominal: 1, mass: 1.00782503223, abundance: 0.999885 }, { nominal: 2, mass: 2.01410177812, abundance: 0.000115 }], mass: 1.0079407540557772, name: 'Hydrogen', monoisotopicMass: 1.00782503223 }, He: { number: 2, isotopes: [{ nominal: 3, mass: 3.0160293201, abundance: 0.00000134 }, { nominal: 4, mass: 4.00260325413, abundance: 0.99999866 }], mass: 4.002601932120929, name: 'Helium', monoisotopicMass: 4.00260325413 }, Li: { number: 3, isotopes: [{ nominal: 6, mass: 6.0151228874, abundance: 0.0759 }, { nominal: 7, mass: 7.0160034366, abundance: 0.9241 }], mass: 6.94003660291572, name: 'Lithium', monoisotopicMass: 7.0160034366 }, Be: { number: 4, isotopes: [{ nominal: 9, mass: 9.012183065, abundance: 1 }], mass: 9.012183065, name: 'Beryllium', monoisotopicMass: 9.012183065 }, B: { number: 5, isotopes: [{ nominal: 10, mass: 10.01293695, abundance: 0.199 }, { nominal: 11, mass: 11.00930536, abundance: 0.801 }], mass: 10.811028046410001, name: 'Boron', monoisotopicMass: 11.00930536 }, C: { number: 6, isotopes: [{ nominal: 12, mass: 12, abundance: 0.9893 }, { nominal: 13, mass: 13.00335483507, abundance: 0.0107 }], mass: 12.010735896735248, name: 'Carbon', monoisotopicMass: 12 }, N: { number: 7, isotopes: [{ nominal: 14, mass: 14.00307400443, abundance: 0.99636 }, { nominal: 15, mass: 15.00010889888, abundance: 0.00364 }], mass: 14.006703211445798, name: 'Nitrogen', monoisotopicMass: 14.00307400443 }, O: { number: 8, isotopes: [{ nominal: 16, mass: 15.99491461957, abundance: 0.99757 }, { nominal: 17, mass: 16.9991317565, abundance: 0.00038 }, { nominal: 18, mass: 17.99915961286, abundance: 0.00205 }], mass: 15.999404924318277, name: 'Oxygen', monoisotopicMass: 15.99491461957 }, F: { number: 9, isotopes: [{ nominal: 19, mass: 18.99840316273, abundance: 1 }], mass: 18.99840316273, name: 'Fluorine', monoisotopicMass: 18.99840316273 }, Ne: { number: 10, isotopes: [{ nominal: 20, mass: 19.9924401762, abundance: 0.9048 }, { nominal: 21, mass: 20.993846685, abundance: 0.0027 }, { nominal: 22, mass: 21.991385114, abundance: 0.0925 }], mass: 20.18004638052026, name: 'Neon', monoisotopicMass: 19.9924401762 }, Na: { number: 11, isotopes: [{ nominal: 23, mass: 22.989769282, abundance: 1 }], mass: 22.989769282, name: 'Sodium', monoisotopicMass: 22.989769282 }, Mg: { number: 12, isotopes: [{ nominal: 24, mass: 23.985041697, abundance: 0.7899 }, { nominal: 25, mass: 24.985836976, abundance: 0.1 }, { nominal: 26, mass: 25.982592968, abundance: 0.1101 }], mass: 24.3050516198371, name: 'Magnesium', monoisotopicMass: 23.985041697 }, Al: { number: 13, isotopes: [{ nominal: 27, mass: 26.98153853, abundance: 1 }], mass: 26.98153853, name: 'Aluminium', monoisotopicMass: 26.98153853 }, Si: { number: 14, isotopes: [{ nominal: 28, mass: 27.97692653465, abundance: 0.92223 }, { nominal: 29, mass: 28.9764946649, abundance: 0.04685 }, { nominal: 30, mass: 29.973770136, abundance: 0.03092 }], mass: 28.085498705705955, name: 'Silicon', monoisotopicMass: 27.97692653465 }, P: { number: 15, isotopes: [{ nominal: 31, mass: 30.97376199842, abundance: 1 }], mass: 30.97376199842, name: 'Phosphorus', monoisotopicMass: 30.97376199842 }, S: { number: 16, isotopes: [{ nominal: 32, mass: 31.9720711744, abundance: 0.9499 }, { nominal: 33, mass: 32.9714589098, abundance: 0.0075 }, { nominal: 34, mass: 33.967867004, abundance: 0.0425 }, { nominal: 36, mass: 35.96708071, abundance: 0.0001 }], mass: 32.06478740612706, name: 'Sulfur', monoisotopicMass: 31.9720711744 }, Cl: { number: 17, isotopes: [{ nominal: 35, mass: 34.968852682, abundance: 0.7576 }, { nominal: 37, mass: 36.965902602, abundance: 0.2424 }], mass: 35.452937582608, name: 'Chlorine', monoisotopicMass: 34.968852682 }, Ar: { number: 18, isotopes: [{ nominal: 36, mass: 35.967545105, abundance: 0.003336 }, { nominal: 38, mass: 37.96273211, abundance: 0.000629 }, { nominal: 40, mass: 39.9623831237, abundance: 0.996035 }], mass: 39.947798563582005, name: 'Argon', monoisotopicMass: 39.9623831237 }, K: { number: 19, isotopes: [{ nominal: 39, mass: 38.9637064864, abundance: 0.932581 }, { nominal: 40, mass: 39.963998166, abundance: 0.000117 }, { nominal: 41, mass: 40.9618252579, abundance: 0.067302 }], mass: 39.098300910086, name: 'Potassium', monoisotopicMass: 38.9637064864 }, Ca: { number: 20, isotopes: [{ nominal: 40, mass: 39.962590863, abundance: 0.96941 }, { nominal: 42, mass: 41.95861783, abundance: 0.00647 }, { nominal: 43, mass: 42.95876644, abundance: 0.00135 }, { nominal: 44, mass: 43.95548156, abundance: 0.02086 }, { nominal: 46, mass: 45.953689, abundance: 0.00004 }, { nominal: 48, mass: 47.95252276, abundance: 0.00187 }], mass: 40.078022511017735, name: 'Calcium', monoisotopicMass: 39.962590863 }, Sc: { number: 21, isotopes: [{ nominal: 45, mass: 44.95590828, abundance: 1 }], mass: 44.95590828, name: 'Scandium', monoisotopicMass: 44.95590828 }, Ti: { number: 22, isotopes: [{ nominal: 46, mass: 45.95262772, abundance: 0.0825 }, { nominal: 47, mass: 46.95175879, abundance: 0.0744 }, { nominal: 48, mass: 47.94794198, abundance: 0.7372 }, { nominal: 49, mass: 48.94786568, abundance: 0.0541 }, { nominal: 50, mass: 49.94478689, abundance: 0.0518 }], mass: 47.866744962721995, name: 'Titanium', monoisotopicMass: 47.94794198 }, V: { number: 23, isotopes: [{ nominal: 50, mass: 49.94715601, abundance: 0.0025 }, { nominal: 51, mass: 50.94395704, abundance: 0.9975 }], mass: 50.941465037425004, name: 'Vanadium', monoisotopicMass: 50.94395704 }, Cr: { number: 24, isotopes: [{ nominal: 50, mass: 49.94604183, abundance: 0.04345 }, { nominal: 52, mass: 51.94050623, abundance: 0.83789 }, { nominal: 53, mass: 52.94064815, abundance: 0.09501 }, { nominal: 54, mass: 53.93887916, abundance: 0.02365 }], mass: 51.9961317554337, name: 'Chromium', monoisotopicMass: 51.94050623 }, Mn: { number: 25, isotopes: [{ nominal: 55, mass: 54.93804391, abundance: 1 }], mass: 54.93804391, name: 'Manganese', monoisotopicMass: 54.93804391 }, Fe: { number: 26, isotopes: [{ nominal: 54, mass: 53.93960899, abundance: 0.05845 }, { nominal: 56, mass: 55.93493633, abundance: 0.91754 }, { nominal: 57, mass: 56.93539284, abundance: 0.02119 }, { nominal: 58, mass: 57.93327443, abundance: 0.00282 }], mass: 55.845144433865904, name: 'Iron', monoisotopicMass: 55.93493633 }, Co: { number: 27, isotopes: [{ nominal: 59, mass: 58.93319429, abundance: 1 }], mass: 58.93319429, name: 'Cobalt', monoisotopicMass: 58.93319429 }, Ni: { number: 28, isotopes: [{ nominal: 58, mass: 57.93534241, abundance: 0.68077 }, { nominal: 60, mass: 59.93078588, abundance: 0.26223 }, { nominal: 61, mass: 60.93105557, abundance: 0.011399 }, { nominal: 62, mass: 61.92834537, abundance: 0.036346 }, { nominal: 64, mass: 63.92796682, abundance: 0.009255 }], mass: 58.69334710994765, name: 'Nickel', monoisotopicMass: 57.93534241 }, Cu: { number: 29, isotopes: [{ nominal: 63, mass: 62.92959772, abundance: 0.6915 }, { nominal: 65, mass: 64.9277897, abundance: 0.3085 }], mass: 63.54603994583, name: 'Copper', monoisotopicMass: 62.92959772 }, Zn: { number: 30, isotopes: [{ nominal: 64, mass: 63.92914201, abundance: 0.4917 }, { nominal: 66, mass: 65.92603381, abundance: 0.2773 }, { nominal: 67, mass: 66.92712775, abundance: 0.0404 }, { nominal: 68, mass: 67.92484455, abundance: 0.1845 }, { nominal: 70, mass: 69.9253192, abundance: 0.0061 }], mass: 65.37778252952499, name: 'Zinc', monoisotopicMass: 63.92914201 }, Ga: { number: 31, isotopes: [{ nominal: 69, mass: 68.9255735, abundance: 0.60108 }, { nominal: 71, mass: 70.92470258, abundance: 0.39892 }], mass: 69.7230660725936, name: 'Gallium', monoisotopicMass: 68.9255735 }, Ge: { number: 32, isotopes: [{ nominal: 70, mass: 69.92424875, abundance: 0.2057 }, { nominal: 72, mass: 71.922075826, abundance: 0.2745 }, { nominal: 73, mass: 72.923458956, abundance: 0.0775 }, { nominal: 74, mass: 73.921177761, abundance: 0.365 }, { nominal: 76, mass: 75.921402726, abundance: 0.0773 }], mass: 72.6275501646868, name: 'Germanium', monoisotopicMass: 73.921177761 }, As: { number: 33, isotopes: [{ nominal: 75, mass: 74.92159457, abundance: 1 }], mass: 74.92159457, name: 'Arsenic', monoisotopicMass: 74.92159457 }, Se: { number: 34, isotopes: [{ nominal: 74, mass: 73.922475934, abundance: 0.0089 }, { nominal: 76, mass: 75.919213704, abundance: 0.0937 }, { nominal: 77, mass: 76.919914154, abundance: 0.0763 }, { nominal: 78, mass: 77.91730928, abundance: 0.2377 }, { nominal: 80, mass: 79.9165218, abundance: 0.4961 }, { nominal: 82, mass: 81.9166995, abundance: 0.0873 }], mass: 78.95938855701361, name: 'Selenium', monoisotopicMass: 79.9165218 }, Br: { number: 35, isotopes: [{ nominal: 79, mass: 78.9183376, abundance: 0.5069 }, { nominal: 81, mass: 80.9162897, abundance: 0.4931 }], mass: 79.90352778050999, name: 'Bromine', monoisotopicMass: 78.9183376 }, Kr: { number: 36, isotopes: [{ nominal: 78, mass: 77.92036494, abundance: 0.00355 }, { nominal: 80, mass: 79.91637808, abundance: 0.02286 }, { nominal: 82, mass: 81.91348273, abundance: 0.11593 }, { nominal: 83, mass: 82.91412716, abundance: 0.115 }, { nominal: 84, mass: 83.9114977282, abundance: 0.56987 }, { nominal: 86, mass: 85.9106106269, abundance: 0.17279 }], mass: 83.7979999953261, name: 'Krypton', monoisotopicMass: 83.9114977282 }, Rb: { number: 37, isotopes: [{ nominal: 85, mass: 84.9117897379, abundance: 0.7217 }, { nominal: 87, mass: 86.909180531, abundance: 0.2783 }], mass: 85.46766359561973, name: 'Rubidium', monoisotopicMass: 84.9117897379 }, Sr: { number: 38, isotopes: [{ nominal: 84, mass: 83.9134191, abundance: 0.0056 }, { nominal: 86, mass: 85.9092606, abundance: 0.0986 }, { nominal: 87, mass: 86.9088775, abundance: 0.07 }, { nominal: 88, mass: 87.9056125, abundance: 0.8258 }], mass: 87.61664446962, name: 'Strontium', monoisotopicMass: 87.9056125 }, Y: { number: 39, isotopes: [{ nominal: 89, mass: 88.9058403, abundance: 1 }], mass: 88.9058403, name: 'Yttrium', monoisotopicMass: 88.9058403 }, Zr: { number: 40, isotopes: [{ nominal: 90, mass: 89.9046977, abundance: 0.5145 }, { nominal: 91, mass: 90.9056396, abundance: 0.1122 }, { nominal: 92, mass: 91.9050347, abundance: 0.1715 }, { nominal: 94, mass: 93.9063108, abundance: 0.1738 }, { nominal: 96, mass: 95.9082714, abundance: 0.028 }], mass: 91.22364159706, name: 'Zirconium', monoisotopicMass: 89.9046977 }, Nb: { number: 41, isotopes: [{ nominal: 93, mass: 92.906373, abundance: 1 }], mass: 92.906373, name: 'Niobium', monoisotopicMass: 92.906373 }, Mo: { number: 42, isotopes: [{ nominal: 92, mass: 91.90680796, abundance: 0.1453 }, { nominal: 94, mass: 93.9050849, abundance: 0.0915 }, { nominal: 95, mass: 94.90583877, abundance: 0.1584 }, { nominal: 96, mass: 95.90467612, abundance: 0.1667 }, { nominal: 97, mass: 96.90601812, abundance: 0.096 }, { nominal: 98, mass: 97.90540482, abundance: 0.2439 }, { nominal: 100, mass: 99.9074718, abundance: 0.0982 }], mass: 95.959788541188, name: 'Molybdenum', monoisotopicMass: 97.90540482 }, Tc: { number: 43, isotopes: [], mass: null, name: 'Technetium' }, Ru: { number: 44, isotopes: [{ nominal: 96, mass: 95.90759025, abundance: 0.0554 }, { nominal: 98, mass: 97.9052868, abundance: 0.0187 }, { nominal: 99, mass: 98.9059341, abundance: 0.1276 }, { nominal: 100, mass: 99.9042143, abundance: 0.126 }, { nominal: 101, mass: 100.9055769, abundance: 0.1706 }, { nominal: 102, mass: 101.9043441, abundance: 0.3155 }, { nominal: 104, mass: 103.9054275, abundance: 0.1862 }], mass: 101.06494013916, name: 'Ruthenium', monoisotopicMass: 101.9043441 }, Rh: { number: 45, isotopes: [{ nominal: 103, mass: 102.905498, abundance: 1 }], mass: 102.905498, name: 'Rhodium', monoisotopicMass: 102.905498 }, Pd: { number: 46, isotopes: [{ nominal: 102, mass: 101.9056022, abundance: 0.0102 }, { nominal: 104, mass: 103.9040305, abundance: 0.1114 }, { nominal: 105, mass: 104.9050796, abundance: 0.2233 }, { nominal: 106, mass: 105.9034804, abundance: 0.2733 }, { nominal: 108, mass: 107.9038916, abundance: 0.2646 }, { nominal: 110, mass: 109.9051722, abundance: 0.1172 }], mass: 106.41532750734, name: 'Palladium', monoisotopicMass: 105.9034804 }, Ag: { number: 47, isotopes: [{ nominal: 107, mass: 106.9050916, abundance: 0.51839 }, { nominal: 109, mass: 108.9047553, abundance: 0.48161 }], mass: 107.868149634557, name: 'Silver', monoisotopicMass: 106.9050916 }, Cd: { number: 48, isotopes: [{ nominal: 106, mass: 105.9064599, abundance: 0.0125 }, { nominal: 108, mass: 107.9041834, abundance: 0.0089 }, { nominal: 110, mass: 109.90300661, abundance: 0.1249 }, { nominal: 111, mass: 110.90418287, abundance: 0.128 }, { nominal: 112, mass: 111.90276287, abundance: 0.2413 }, { nominal: 113, mass: 112.90440813, abundance: 0.1222 }, { nominal: 114, mass: 113.90336509, abundance: 0.2873 }, { nominal: 116, mass: 115.90476315, abundance: 0.0749 }], mass: 112.411557818268, name: 'Cadmium', monoisotopicMass: 113.90336509 }, In: { number: 49, isotopes: [{ nominal: 113, mass: 112.90406184, abundance: 0.0429 }, { nominal: 115, mass: 114.903878776, abundance: 0.9571 }], mass: 114.81808662944559, name: 'Indium', monoisotopicMass: 114.903878776 }, Sn: { number: 50, isotopes: [{ nominal: 112, mass: 111.90482387, abundance: 0.0097 }, { nominal: 114, mass: 113.9027827, abundance: 0.0066 }, { nominal: 115, mass: 114.903344699, abundance: 0.0034 }, { nominal: 116, mass: 115.9017428, abundance: 0.1454 }, { nominal: 117, mass: 116.90295398, abundance: 0.0768 }, { nominal: 118, mass: 117.90160657, abundance: 0.2422 }, { nominal: 119, mass: 118.90331117, abundance: 0.0859 }, { nominal: 120, mass: 119.90220163, abundance: 0.3258 }, { nominal: 122, mass: 121.9034438, abundance: 0.0463 }, { nominal: 124, mass: 123.9052766, abundance: 0.0579 }], mass: 118.71011259301059, name: 'Tin', monoisotopicMass: 119.90220163 }, Sb: { number: 51, isotopes: [{ nominal: 121, mass: 120.903812, abundance: 0.5721 }, { nominal: 123, mass: 122.9042132, abundance: 0.4279 }], mass: 121.75978367348, name: 'Antimony', monoisotopicMass: 120.903812 }, Te: { number: 52, isotopes: [{ nominal: 120, mass: 119.9040593, abundance: 0.0009 }, { nominal: 122, mass: 121.9030435, abundance: 0.0255 }, { nominal: 123, mass: 122.9042698, abundance: 0.0089 }, { nominal: 124, mass: 123.9028171, abundance: 0.0474 }, { nominal: 125, mass: 124.9044299, abundance: 0.0707 }, { nominal: 126, mass: 125.9033109, abundance: 0.1884 }, { nominal: 128, mass: 127.90446128, abundance: 0.3174 }, { nominal: 130, mass: 129.906222748, abundance: 0.3408 }], mass: 127.6031264846604, name: 'Tellurium', monoisotopicMass: 129.906222748 }, I: { number: 53, isotopes: [{ nominal: 127, mass: 126.9044719, abundance: 1 }], mass: 126.9044719, name: 'Iodine', monoisotopicMass: 126.9044719 }, Xe: { number: 54, isotopes: [{ nominal: 124, mass: 123.905892, abundance: 0.000952 }, { nominal: 126, mass: 125.9042983, abundance: 0.00089 }, { nominal: 128, mass: 127.903531, abundance: 0.019102 }, { nominal: 129, mass: 128.9047808611, abundance: 0.264006 }, { nominal: 130, mass: 129.903509349, abundance: 0.04071 }, { nominal: 131, mass: 130.90508406, abundance: 0.212324 }, { nominal: 132, mass: 131.9041550856, abundance: 0.269086 }, { nominal: 134, mass: 133.90539466, abundance: 0.104357 }, { nominal: 136, mass: 135.907214484, abundance: 0.088573 }], mass: 131.29276144779053, name: 'Xenon', monoisotopicMass: 131.9041550856 }, Cs: { number: 55, isotopes: [{ nominal: 133, mass: 132.905451961, abundance: 1 }], mass: 132.905451961, name: 'Caesium', monoisotopicMass: 132.905451961 }, Ba: { number: 56, isotopes: [{ nominal: 130, mass: 129.9063207, abundance: 0.00106 }, { nominal: 132, mass: 131.9050611, abundance: 0.00101 }, { nominal: 134, mass: 133.90450818, abundance: 0.02417 }, { nominal: 135, mass: 134.90568838, abundance: 0.06592 }, { nominal: 136, mass: 135.90457573, abundance: 0.07854 }, { nominal: 137, mass: 136.90582714, abundance: 0.11232 }, { nominal: 138, mass: 137.905247, abundance: 0.71698 }], mass: 137.3268916286322, name: 'Barium', monoisotopicMass: 137.905247 }, La: { number: 57, isotopes: [{ nominal: 138, mass: 137.9071149, abundance: 0.0008881 }, { nominal: 139, mass: 138.9063563, abundance: 0.9991119 }], mass: 138.90546887371266, name: 'Lanthanum', monoisotopicMass: 138.9063563 }, Ce: { number: 58, isotopes: [{ nominal: 136, mass: 135.90712921, abundance: 0.00185 }, { nominal: 138, mass: 137.905991, abundance: 0.00251 }, { nominal: 140, mass: 139.9054431, abundance: 0.8845 }, { nominal: 142, mass: 141.9092504, abundance: 0.11114 }], mass: 140.1157307378545, name: 'Cerium', monoisotopicMass: 139.9054431 }, Pr: { number: 59, isotopes: [{ nominal: 141, mass: 140.9076576, abundance: 1 }], mass: 140.9076576, name: 'Praseodymium', monoisotopicMass: 140.9076576 }, Nd: { number: 60, isotopes: [{ nominal: 142, mass: 141.907729, abundance: 0.27152 }, { nominal: 143, mass: 142.90982, abundance: 0.12174 }, { nominal: 144, mass: 143.910093, abundance: 0.23798 }, { nominal: 145, mass: 144.9125793, abundance: 0.08293 }, { nominal: 146, mass: 145.9131226, abundance: 0.17189 }, { nominal: 148, mass: 147.9168993, abundance: 0.05756 }, { nominal: 150, mass: 149.9209022, abundance: 0.05638 }], mass: 144.241596031827, name: 'Neodymium', monoisotopicMass: 141.907729 }, Pm: { number: 61, isotopes: [], mass: null, name: 'Promethium' }, Sm: { number: 62, isotopes: [{ nominal: 144, mass: 143.9120065, abundance: 0.0307 }, { nominal: 147, mass: 146.9149044, abundance: 0.1499 }, { nominal: 148, mass: 147.9148292, abundance: 0.1124 }, { nominal: 149, mass: 148.9171921, abundance: 0.1382 }, { nominal: 150, mass: 149.9172829, abundance: 0.0738 }, { nominal: 152, mass: 151.9197397, abundance: 0.2675 }, { nominal: 154, mass: 153.9222169, abundance: 0.2275 }], mass: 150.36635571193, name: 'Samarium', monoisotopicMass: 151.9197397 }, Eu: { number: 63, isotopes: [{ nominal: 151, mass: 150.9198578, abundance: 0.4781 }, { nominal: 153, mass: 152.921238, abundance: 0.5219 }], mass: 151.96437812637998, name: 'Europium', monoisotopicMass: 152.921238 }, Gd: { number: 64, isotopes: [{ nominal: 152, mass: 151.9197995, abundance: 0.002 }, { nominal: 154, mass: 153.9208741, abundance: 0.0218 }, { nominal: 155, mass: 154.9226305, abundance: 0.148 }, { nominal: 156, mass: 155.9221312, abundance: 0.2047 }, { nominal: 157, mass: 156.9239686, abundance: 0.1565 }, { nominal: 158, mass: 157.9241123, abundance: 0.2484 }, { nominal: 160, mass: 159.9270624, abundance: 0.2186 }], mass: 157.25213064687998, name: 'Gadolinium', monoisotopicMass: 157.9241123 }, Tb: { number: 65, isotopes: [{ nominal: 159, mass: 158.9253547, abundance: 1 }], mass: 158.9253547, name: 'Terbium', monoisotopicMass: 158.9253547 }, Dy: { number: 66, isotopes: [{ nominal: 156, mass: 155.9242847, abundance: 0.00056 }, { nominal: 158, mass: 157.9244159, abundance: 0.00095 }, { nominal: 160, mass: 159.9252046, abundance: 0.02329 }, { nominal: 161, mass: 160.9269405, abundance: 0.18889 }, { nominal: 162, mass: 161.9268056, abundance: 0.25475 }, { nominal: 163, mass: 162.9287383, abundance: 0.24896 }, { nominal: 164, mass: 163.9291819, abundance: 0.2826 }], mass: 162.499472819424, name: 'Dysprosium', monoisotopicMass: 163.9291819 }, Ho: { number: 67, isotopes: [{ nominal: 165, mass: 164.9303288, abundance: 1 }], mass: 164.9303288, name: 'Holmium', monoisotopicMass: 164.9303288 }, Er: { number: 68, isotopes: [{ nominal: 162, mass: 161.9287884, abundance: 0.00139 }, { nominal: 164, mass: 163.9292088, abundance: 0.01601 }, { nominal: 166, mass: 165.9302995, abundance: 0.33503 }, { nominal: 167, mass: 166.9320546, abundance: 0.22869 }, { nominal: 168, mass: 167.9323767, abundance: 0.26978 }, { nominal: 170, mass: 169.9354702, abundance: 0.1491 }], mass: 167.259082649669, name: 'Erbium', monoisotopicMass: 165.9302995 }, Tm: { number: 69, isotopes: [{ nominal: 169, mass: 168.9342179, abundance: 1 }], mass: 168.9342179, name: 'Thulium', monoisotopicMass: 168.9342179 }, Yb: { number: 70, isotopes: [{ nominal: 168, mass: 167.9338896, abundance: 0.00123 }, { nominal: 170, mass: 169.9347664, abundance: 0.02982 }, { nominal: 171, mass: 170.9363302, abundance: 0.1409 }, { nominal: 172, mass: 171.9363859, abundance: 0.2168 }, { nominal: 173, mass: 172.9382151, abundance: 0.16103 }, { nominal: 174, mass: 173.9388664, abundance: 0.32026 }, { nominal: 176, mass: 175.9425764, abundance: 0.12996 }], mass: 173.05415016631702, name: 'Ytterbium', monoisotopicMass: 173.9388664 }, Lu: { number: 71, isotopes: [{ nominal: 175, mass: 174.9407752, abundance: 0.97401 }, { nominal: 176, mass: 175.9426897, abundance: 0.02599 }], mass: 174.96681495785498, name: 'Lutetium', monoisotopicMass: 174.9407752 }, Hf: { number: 72, isotopes: [{ nominal: 174, mass: 173.9400461, abundance: 0.0016 }, { nominal: 176, mass: 175.9414076, abundance: 0.0526 }, { nominal: 177, mass: 176.9432277, abundance: 0.186 }, { nominal: 178, mass: 177.9437058, abundance: 0.2728 }, { nominal: 179, mass: 178.9458232, abundance: 0.1362 }, { nominal: 180, mass: 179.946557, abundance: 0.3508 }], mass: 178.4849787234, name: 'Hafnium', monoisotopicMass: 179.946557 }, Ta: { number: 73, isotopes: [{ nominal: 180, mass: 179.9474648, abundance: 0.0001201 }, { nominal: 181, mass: 180.9479958, abundance: 0.9998799 }], mass: 180.9478756362269, name: 'Tantalum', monoisotopicMass: 180.9479958 }, W: { number: 74, isotopes: [{ nominal: 180, mass: 179.9467108, abundance: 0.0012 }, { nominal: 182, mass: 181.94820394, abundance: 0.265 }, { nominal: 183, mass: 182.95022275, abundance: 0.1431 }, { nominal: 184, mass: 183.95093092, abundance: 0.3064 }, { nominal: 186, mass: 185.9543628, abundance: 0.2843 }], mass: 183.841777550513, name: 'Tungsten', monoisotopicMass: 183.95093092 }, Re: { number: 75, isotopes: [{ nominal: 185, mass: 184.9529545, abundance: 0.374 }, { nominal: 187, mass: 186.9557501, abundance: 0.626 }], mass: 186.20670454560002, name: 'Rhenium', monoisotopicMass: 186.9557501 }, Os: { number: 76, isotopes: [{ nominal: 184, mass: 183.9524885, abundance: 0.0002 }, { nominal: 186, mass: 185.953835, abundance: 0.0159 }, { nominal: 187, mass: 186.9557474, abundance: 0.0196 }, { nominal: 188, mass: 187.9558352, abundance: 0.1324 }, { nominal: 189, mass: 188.9581442, abundance: 0.1615 }, { nominal: 190, mass: 189.9584437, abundance: 0.2626 }, { nominal: 192, mass: 191.961477, abundance: 0.4078 }], mass: 190.22485962823998, name: 'Osmium', monoisotopicMass: 191.961477 }, Ir: { number: 77, isotopes: [{ nominal: 191, mass: 190.9605893, abundance: 0.373 }, { nominal: 193, mass: 192.9629216, abundance: 0.627 }], mass: 192.2160516521, name: 'Iridium', monoisotopicMass: 192.9629216 }, Pt: { number: 78, isotopes: [{ nominal: 190, mass: 189.9599297, abundance: 0.00012 }, { nominal: 192, mass: 191.9610387, abundance: 0.00782 }, { nominal: 194, mass: 193.9626809, abundance: 0.3286 }, { nominal: 195, mass: 194.9647917, abundance: 0.3378 }, { nominal: 196, mass: 195.96495209, abundance: 0.2521 }, { nominal: 198, mass: 197.9678949, abundance: 0.07356 }], mass: 195.084456864931, name: 'Platinum', monoisotopicMass: 194.9647917 }, Au: { number: 79, isotopes: [{ nominal: 197, mass: 196.96656879, abundance: 1 }], mass: 196.96656879, name: 'Gold', monoisotopicMass: 196.96656879 }, Hg: { number: 80, isotopes: [{ nominal: 196, mass: 195.9658326, abundance: 0.0015 }, { nominal: 198, mass: 197.9667686, abundance: 0.0997 }, { nominal: 199, mass: 198.96828064, abundance: 0.1687 }, { nominal: 200, mass: 199.96832659, abundance: 0.231 }, { nominal: 201, mass: 200.97030284, abundance: 0.1318 }, { nominal: 202, mass: 201.9706434, abundance: 0.2986 }, { nominal: 204, mass: 203.97349398, abundance: 0.0687 }], mass: 200.59916703455602, name: 'Mercury', monoisotopicMass: 201.9706434 }, Tl: { number: 81, isotopes: [{ nominal: 203, mass: 202.9723446, abundance: 0.2952 }, { nominal: 205, mass: 204.9744278, abundance: 0.7048 }], mass: 204.38341283936, name: 'Thallium', monoisotopicMass: 204.9744278 }, Pb: { number: 82, isotopes: [{ nominal: 204, mass: 203.973044, abundance: 0.014 }, { nominal: 206, mass: 205.9744657, abundance: 0.241 }, { nominal: 207, mass: 206.9758973, abundance: 0.221 }, { nominal: 208, mass: 207.9766525, abundance: 0.524 }], mass: 207.216908063, name: 'Lead', monoisotopicMass: 207.9766525 }, Bi: { number: 83, isotopes: [{ nominal: 209, mass: 208.9803991, abundance: 1 }], mass: 208.9803991, name: 'Bismuth', monoisotopicMass: 208.9803991 }, Po: { number: 84, isotopes: [], mass: null, name: 'Polonium' }, At: { number: 85, isotopes: [], mass: null, name: 'Astatine' }, Rn: { number: 86, isotopes: [], mass: null, name: 'Radon' }, Fr: { number: 87, isotopes: [], mass: null, name: 'Francium' }, Ra: { number: 88, isotopes: [], mass: null, name: 'Radium' }, Ac: { number: 89, isotopes: [], mass: null, name: 'Actinium' }, Th: { number: 90, isotopes: [{ nominal: 232, mass: 232.0380558, abundance: 1 }], mass: 232.0380558, name: 'Thorium', monoisotopicMass: 232.0380558 }, Pa: { number: 91, isotopes: [{ nominal: 231, mass: 231.0358842, abundance: 1 }], mass: 231.0358842, name: 'Protactinium', monoisotopicMass: 231.0358842 }, U: { number: 92, isotopes: [{ nominal: 234, mass: 234.0409523, abundance: 0.000054 }, { nominal: 235, mass: 235.0439301, abundance: 0.007204 }, { nominal: 238, mass: 238.0507884, abundance: 0.992742 }], mass: 238.0289104616574, name: 'Uranium', monoisotopicMass: 238.0507884 }, Np: { number: 93, isotopes: [], mass: null, name: 'Neptunium' }, Pu: { number: 94, isotopes: [], mass: null, name: 'Plutonium' }, Am: { number: 95, isotopes: [], name: 'Americium', mass: null }, Cm: { number: 96, isotopes: [], name: 'Curium', mass: null }, Bk: { number: 97, isotopes: [], name: 'Berkelium', mass: null }, Cf: { number: 98, isotopes: [], name: 'Californium', mass: null }, Es: { number: 99, isotopes: [], name: 'Einsteinium', mass: null }, Fm: { number: 100, isotopes: [], name: 'Fermium', mass: null }, Md: { number: 101, isotopes: [], name: 'Mendelevium', mass: null }, No: { number: 102, isotopes: [], name: 'Nobelium', mass: null }, Lr: { number: 103, isotopes: [], name: 'Lawrencium', mass: null }, Rf: { number: 104, isotopes: [], name: 'Rutherfordium', mass: null }, Db: { number: 105, isotopes: [], name: 'Dubnium', mass: null }, Sg: { number: 106, isotopes: [], name: 'Seaborgium', mass: null }, Bh: { number: 107, isotopes: [], name: 'Bohrium', mass: null }, Hs: { number: 108, isotopes: [], name: 'Hassium', mass: null }, Mt: { number: 109, isotopes: [], name: 'Meitnerium', mass: null }, Ds: { number: 110, isotopes: [], name: 'Darmstadtium', mass: null }, Rg: { number: 111, isotopes: [], name: 'Roentgenium', mass: null }, Cn: { number: 112, isotopes: [], name: 'Copernicium', mass: null }, Nh: { number: 113, isotopes: [], name: 'Nihonium', mass: null }, Fl: { number: 114, isotopes: [], name: 'Flerovium', mass: null }, Mc: { number: 115, isotopes: [], name: 'Moscovium', mass: null }, Lv: { number: 116, isotopes: [], name: 'Livermorium', mass: null }, Ts: { number: 117, isotopes: [], name: 'Teennessine', mass: null }, Og: { number: 118, isotopes: [], name: 'Oganesson', mass: null } };

},{}],4:[function(require,module,exports){
'use strict';

module.exports = {
  O: 0,
  N: 1,
  H: -1,
  Na: -1,
  K: -1,
  Li: -1,
  Ca: -2,
  C: 2,
  F: -1,
  Si: 4,
  Cl: -1,
  Br: -1,
  I: -1,
  S: 0,
  P: 1
};

},{}],5:[function(require,module,exports){
'use strict';

module.exports = { Abu: { name: '2-Aminobutyric acid diradical', mf: 'C4H7NO', mass: 85.10463700109551, monoisotopicMass: 85.05276384961, unsaturation: 2, elements: [{ symbol: 'C', number: 4 }, { symbol: 'H', number: 7 }, { symbol: 'N', number: 1 }, { symbol: 'O', number: 1 }] }, Acet: { name: 'Acetyl', mf: 'C2H3O', mass: 43.04469897995611, monoisotopicMass: 43.01838971626, unsaturation: 1, elements: [{ symbol: 'C', number: 2 }, { symbol: 'H', number: 3 }, { symbol: 'O', number: 1 }] }, Acm: { name: 'Acetamidomethyl', mf: 'C3H6NO', mass: 72.08596035030448, monoisotopicMass: 72.04493881738, unsaturation: 1, elements: [{ symbol: 'C', number: 3 }, { symbol: 'H', number: 6 }, { symbol: 'N', number: 1 }, { symbol: 'O', number: 1 }] }, Adao: { name: 'Adamantyloxy', mf: 'C10H15O', mass: 151.2258752025074, monoisotopicMass: 151.11229010302, unsaturation: 5, elements: [{ symbol: 'C', number: 10 }, { symbol: 'H', number: 15 }, { symbol: 'O', number: 1 }] }, Aib: { name: 'alpha-Aminoisobutyric acid diradical', mf: 'C4H7NO', mass: 85.10463700109551, monoisotopicMass: 85.05276384961, unsaturation: 2, elements: [{ symbol: 'C', number: 4 }, { symbol: 'H', number: 7 }, { symbol: 'N', number: 1 }, { symbol: 'O', number: 1 }] }, Ala: { name: 'Alanine diradical', mf: 'C3H5NO', mass: 71.07801959624871, monoisotopicMass: 71.03711378515, unsaturation: 2, elements: [{ symbol: 'C', number: 3 }, { symbol: 'H', number: 5 }, { symbol: 'N', number: 1 }, { symbol: 'O', number: 1 }] }, Arg: { name: 'Arginine diradical', mf: 'C6H12N4O', mass: 156.18592219918227, monoisotopicMass: 156.10111102405, unsaturation: 4, elements: [{ symbol: 'C', number: 6 }, { symbol: 'H', number: 12 }, { symbol: 'N', number: 4 }, { symbol: 'O', number: 1 }] }, Argp: { name: 'Arginine triradical', mf: 'C6H11N4O', mass: 155.1779814451265, monoisotopicMass: 155.09328599182, unsaturation: 5, elements: [{ symbol: 'C', number: 6 }, { symbol: 'H', number: 11 }, { symbol: 'N', number: 4 }, { symbol: 'O', number: 1 }] }, Asn: { name: 'Asparagine diradical', mf: 'C4H6N2O2', mass: 114.10280438280381, monoisotopicMass: 114.04292744137999, unsaturation: 4, elements: [{ symbol: 'C', number: 4 }, { symbol: 'H', number: 6 }, { symbol: 'N', number: 2 }, { symbol: 'O', number: 2 }] }, Asnp: { name: 'Asparagine triradical', mf: 'C4H5N2O2', mass: 113.09486362874803, monoisotopicMass: 113.03510240915, unsaturation: 5, elements: [{ symbol: 'C', number: 4 }, { symbol: 'H', number: 5 }, { symbol: 'N', number: 2 }, { symbol: 'O', number: 2 }] }, Asp: { name: 'Aspartic acid diradical', mf: 'C4H5NO3', mass: 115.08756534162052, monoisotopicMass: 115.02694302429, unsaturation: 4, elements: [{ symbol: 'C', number: 4 }, { symbol: 'H', number: 5 }, { symbol: 'N', number: 1 }, { symbol: 'O', number: 3 }] }, Aspp: { name: 'Aspartic acid triradical', mf: 'C4H4NO3', mass: 114.07962458756472, monoisotopicMass: 114.01911799206, unsaturation: 5, elements: [{ symbol: 'C', number: 4 }, { symbol: 'H', number: 4 }, { symbol: 'N', number: 1 }, { symbol: 'O', number: 3 }] }, Asu: { name: 'alpha-Aminosuberic acid diradical', mf: 'C8H13NO3', mass: 171.19403496100773, monoisotopicMass: 171.08954328213002, unsaturation: 4, elements: [{ symbol: 'C', number: 8 }, { symbol: 'H', number: 13 }, { symbol: 'N', number: 1 }, { symbol: 'O', number: 3 }] }, Asup: { name: 'alpha-Aminosuberic acid triradical', mf: 'C8H12NO3', mass: 170.18609420695194, monoisotopicMass: 170.0817182499, unsaturation: 5, elements: [{ symbol: 'C', number: 8 }, { symbol: 'H', number: 12 }, { symbol: 'N', number: 1 }, { symbol: 'O', number: 3 }] }, Boc: { name: 't-Butoxycarbonyl', mf: 'C5H9O2', mass: 101.12395611881479, monoisotopicMass: 101.06025452921, unsaturation: 1, elements: [{ symbol: 'C', number: 5 }, { symbol: 'H', number: 9 }, { symbol: 'O', number: 2 }] }, Bom: { name: 'Benzyloxymethyl', mf: 'C8H9O', mass: 121.15675888470227, monoisotopicMass: 121.06533990964, unsaturation: 7, elements: [{ symbol: 'C', number: 8 }, { symbol: 'H', number: 9 }, { symbol: 'O', number: 1 }] }, Brz: { name: '2-Bromobenzyloxycarbonyl', mf: 'C8H6BrO2', mass: 214.03586932736317, monoisotopicMass: 212.95511703252, unsaturation: 9, elements: [{ symbol: 'C', number: 8 }, { symbol: 'H', number: 6 }, { symbol: 'Br', number: 1 }, { symbol: 'O', number: 2 }] }, Bu: { name: 'Butyl', mf: 'C4H9', mass: 57.114410373442986, monoisotopicMass: 57.07042529007, unsaturation: -1, elements: [{ symbol: 'C', number: 4 }, { symbol: 'H', number: 9 }] }, Bum: { name: 't-Butoxymethyl', mf: 'C5H11O', mass: 87.14043270260808, monoisotopicMass: 87.08098997409999, unsaturation: -1, elements: [{ symbol: 'C', number: 5 }, { symbol: 'H', number: 11 }, { symbol: 'O', number: 1 }] }, Bz: { name: 'Benzoyl', mf: 'C7H5O', mass: 105.1142599717439, monoisotopicMass: 105.03403978072, unsaturation: 9, elements: [{ symbol: 'C', number: 7 }, { symbol: 'H', number: 5 }, { symbol: 'O', number: 1 }] }, Bzl: { name: 'Benzyl', mf: 'C7H7', mass: 91.13073655553718, monoisotopicMass: 91.05477522561, unsaturation: 7, elements: [{ symbol: 'C', number: 7 }, { symbol: 'H', number: 7 }] }, Bn: { name: 'Benzyl', mf: 'C7H7', mass: 91.13073655553718, monoisotopicMass: 91.05477522561, unsaturation: 7, elements: [{ symbol: 'C', number: 7 }, { symbol: 'H', number: 7 }] }, Bzlo: { name: 'Benzyloxy', mf: 'C7H7O', mass: 107.13014147985547, monoisotopicMass: 107.04968984518, unsaturation: 7, elements: [{ symbol: 'C', number: 7 }, { symbol: 'H', number: 7 }, { symbol: 'O', number: 1 }] }, Cha: { name: 'beta-Cyclohexylalanine diradical', mf: 'C9H15NO', mass: 153.22184251721796, monoisotopicMass: 153.11536410745, unsaturation: 4, elements: [{ symbol: 'C', number: 9 }, { symbol: 'H', number: 15 }, { symbol: 'N', number: 1 }, { symbol: 'O', number: 1 }] }, Chxo: { name: 'Cyclohexyloxy', mf: 'C6H11O', mass: 99.15116859934332, monoisotopicMass: 99.08098997409999, unsaturation: 1, elements: [{ symbol: 'C', number: 6 }, { symbol: 'H', number: 11 }, { symbol: 'O', number: 1 }] }, Cit: { name: 'Citrulline diradical', mf: 'C6H11N3O2', mass: 157.170683157999, monoisotopicMass: 157.08512660696, unsaturation: 4, elements: [{ symbol: 'C', number: 6 }, { symbol: 'H', number: 11 }, { symbol: 'N', number: 3 }, { symbol: 'O', number: 2 }] }, Citp: { name: 'Citrulline triradical', mf: 'C6H10N3O2', mass: 156.16274240394318, monoisotopicMass: 156.07730157473, unsaturation: 5, elements: [{ symbol: 'C', number: 6 }, { symbol: 'H', number: 10 }, { symbol: 'N', number: 3 }, { symbol: 'O', number: 2 }] }, Clz: { name: '2-Chlorobenzyloxycarbonyl', mf: 'C8H6ClO2', mass: 169.58527912946118, monoisotopicMass: 169.00563211451998, unsaturation: 9, elements: [{ symbol: 'C', number: 8 }, { symbol: 'H', number: 6 }, { symbol: 'Cl', number: 1 }, { symbol: 'O', number: 2 }] }, Cp: { name: 'Cyclopentadienyl', mf: 'C5H5', mass: 65.09338325395512, monoisotopicMass: 65.03912516115, unsaturation: 5, elements: [{ symbol: 'C', number: 5 }, { symbol: 'H', number: 5 }] }, Cys: { name: 'Cysteine diradical', mf: 'C3H5NOS', mass: 103.14280700237578, monoisotopicMass: 103.00918495955, unsaturation: 2, elements: [{ symbol: 'C', number: 3 }, { symbol: 'H', number: 5 }, { symbol: 'N', number: 1 }, { symbol: 'O', number: 1 }, { symbol: 'S', number: 1 }] }, Cysp: { name: 'Cysteine triradical', mf: 'C3H4NOS', mass: 102.13486624831998, monoisotopicMass: 102.00135992732, unsaturation: 3, elements: [{ symbol: 'C', number: 3 }, { symbol: 'H', number: 4 }, { symbol: 'N', number: 1 }, { symbol: 'O', number: 1 }, { symbol: 'S', number: 1 }] }, D: { name: 'Deuterium', mf: '[2H]', mass: 2.01410177812, monoisotopicMass: 2.01410177812, unsaturation: -1, elements: [{ symbol: 'H', number: 1, isotope: 2 }] }, Dde: { name: 'Dde', mf: 'C10H13O2', mass: 165.20939861871415, monoisotopicMass: 165.09155465812998, unsaturation: 7, elements: [{ symbol: 'C', number: 10 }, { symbol: 'H', number: 13 }, { symbol: 'O', number: 2 }] }, Dnp: { name: '2,4-Dinitrophenyl', mf: 'C6H3N2O4', mass: 167.09926376274353, monoisotopicMass: 167.00928158383, unsaturation: 11, elements: [{ symbol: 'C', number: 6 }, { symbol: 'H', number: 3 }, { symbol: 'N', number: 2 }, { symbol: 'O', number: 4 }] }, Et: { name: 'Ethyl', mf: 'C2H5', mass: 29.061175563749384, monoisotopicMass: 29.03912516115, unsaturation: -1, elements: [{ symbol: 'C', number: 2 }, { symbol: 'H', number: 5 }] }, Fmoc: { name: 'Fluorenylmethoxycarbonyl', mf: 'C15H11O2', mass: 223.24719659427882, monoisotopicMass: 223.07590459367, unsaturation: 19, elements: [{ symbol: 'C', number: 15 }, { symbol: 'H', number: 11 }, { symbol: 'O', number: 2 }] }, For: { name: 'Formyl', mf: 'CHO', mass: 29.018081575109303, monoisotopicMass: 29.0027396518, unsaturation: 1, elements: [{ symbol: 'C', number: 1 }, { symbol: 'H', number: 1 }, { symbol: 'O', number: 1 }] }, Gln: { name: 'Glutamine diradical', mf: 'C5H8N2O2', mass: 128.12942178765059, monoisotopicMass: 128.05857750584, unsaturation: 4, elements: [{ symbol: 'C', number: 5 }, { symbol: 'H', number: 8 }, { symbol: 'N', number: 2 }, { symbol: 'O', number: 2 }] }, Glnp: { name: 'Glutamine triradical', mf: 'C5H7N2O2', mass: 127.12148103359483, monoisotopicMass: 127.05075247361, unsaturation: 5, elements: [{ symbol: 'C', number: 5 }, { symbol: 'H', number: 7 }, { symbol: 'N', number: 2 }, { symbol: 'O', number: 2 }] }, Glp: { name: 'Pyroglutamine', mf: 'C5H5NO2', mass: 111.09889631403748, monoisotopicMass: 111.03202840472, unsaturation: 6, elements: [{ symbol: 'C', number: 5 }, { symbol: 'H', number: 5 }, { symbol: 'N', number: 1 }, { symbol: 'O', number: 2 }] }, Glu: { name: 'Glutamic acid diradical', mf: 'C5H7NO3', mass: 129.11418274646732, monoisotopicMass: 129.04259308875, unsaturation: 4, elements: [{ symbol: 'C', number: 5 }, { symbol: 'H', number: 7 }, { symbol: 'N', number: 1 }, { symbol: 'O', number: 3 }] }, Glup: { name: 'Glutamic acid triradical', mf: 'C5H6NO3', mass: 128.10624199241153, monoisotopicMass: 128.03476805652002, unsaturation: 5, elements: [{ symbol: 'C', number: 5 }, { symbol: 'H', number: 6 }, { symbol: 'N', number: 1 }, { symbol: 'O', number: 3 }] }, Gly: { name: 'Glycine diradical', mf: 'C2H3NO', mass: 57.051402191401905, monoisotopicMass: 57.021463720689994, unsaturation: 2, elements: [{ symbol: 'C', number: 2 }, { symbol: 'H', number: 3 }, { symbol: 'N', number: 1 }, { symbol: 'O', number: 1 }] }, Hci: { name: 'Homocitrulline diradical', mf: 'C7H13N3O2', mass: 171.19730056284578, monoisotopicMass: 171.10077667142, unsaturation: 4, elements: [{ symbol: 'C', number: 7 }, { symbol: 'H', number: 13 }, { symbol: 'N', number: 3 }, { symbol: 'O', number: 2 }] }, Hcip: { name: 'Homocitrulline triradical', mf: 'C7H12N3O2', mass: 170.18935980879002, monoisotopicMass: 170.09295163918998, unsaturation: 5, elements: [{ symbol: 'C', number: 7 }, { symbol: 'H', number: 12 }, { symbol: 'N', number: 3 }, { symbol: 'O', number: 2 }] }, His: { name: 'Histidine diradical', mf: 'C6H7N3O', mass: 137.13951521745759, monoisotopicMass: 137.05891185847, unsaturation: 8, elements: [{ symbol: 'C', number: 6 }, { symbol: 'H', number: 7 }, { symbol: 'N', number: 3 }, { symbol: 'O', number: 1 }] }, Hisp: { name: 'Histidine triradical', mf: 'C6H6N3O', mass: 136.13157446340182, monoisotopicMass: 136.05108682624, unsaturation: 9, elements: [{ symbol: 'C', number: 6 }, { symbol: 'H', number: 6 }, { symbol: 'N', number: 3 }, { symbol: 'O', number: 1 }] }, Hser: { name: 'Homoserine diradical', mf: 'C4H7NO2', mass: 101.10404192541378, monoisotopicMass: 101.04767846918, unsaturation: 2, elements: [{ symbol: 'C', number: 4 }, { symbol: 'H', number: 7 }, { symbol: 'N', number: 1 }, { symbol: 'O', number: 2 }] }, Hserp: { name: 'Homoserine triradical', mf: 'C4H6NO2', mass: 100.09610117135801, monoisotopicMass: 100.03985343695001, unsaturation: 3, elements: [{ symbol: 'C', number: 4 }, { symbol: 'H', number: 6 }, { symbol: 'N', number: 1 }, { symbol: 'O', number: 2 }] }, Hyp: { name: 'Hydroxyproline diradical', mf: 'C5H7NO2', mass: 113.11477782214904, monoisotopicMass: 113.04767846918, unsaturation: 4, elements: [{ symbol: 'C', number: 5 }, { symbol: 'H', number: 7 }, { symbol: 'N', number: 1 }, { symbol: 'O', number: 2 }] }, Hypp: { name: 'Hydroxyproline triradical', mf: 'C5H6NO2', mass: 112.10683706809326, monoisotopicMass: 112.03985343695001, unsaturation: 5, elements: [{ symbol: 'C', number: 5 }, { symbol: 'H', number: 6 }, { symbol: 'N', number: 1 }, { symbol: 'O', number: 2 }] }, Ile: { name: 'Isoleucine diradical', mf: 'C6H11NO', mass: 113.15787181078912, monoisotopicMass: 113.08406397853, unsaturation: 2, elements: [{ symbol: 'C', number: 6 }, { symbol: 'H', number: 11 }, { symbol: 'N', number: 1 }, { symbol: 'O', number: 1 }] }, Ivdde: { name: '1-[4,4-dimethyl-2,6-dioxocyclohexylidene)-3-methylbutyl', mf: 'C14H21O2', mass: 221.31586823810136, monoisotopicMass: 221.15415491597, unsaturation: 7, elements: [{ symbol: 'C', number: 14 }, { symbol: 'H', number: 21 }, { symbol: 'O', number: 2 }] }, Leu: { name: 'Leucine diradical', mf: 'C6H11NO', mass: 113.15787181078912, monoisotopicMass: 113.08406397853, unsaturation: 2, elements: [{ symbol: 'C', number: 6 }, { symbol: 'H', number: 11 }, { symbol: 'N', number: 1 }, { symbol: 'O', number: 1 }] }, Lys: { name: 'Lysine diradical', mf: 'C6H12N2O', mass: 128.17251577629068, monoisotopicMass: 128.09496301519, unsaturation: 2, elements: [{ symbol: 'C', number: 6 }, { symbol: 'H', number: 12 }, { symbol: 'N', number: 2 }, { symbol: 'O', number: 1 }] }, Lysp: { name: 'Lysine triradical', mf: 'C6H11N2O', mass: 127.16457502223491, monoisotopicMass: 127.08713798295999, unsaturation: 3, elements: [{ symbol: 'C', number: 6 }, { symbol: 'H', number: 11 }, { symbol: 'N', number: 2 }, { symbol: 'O', number: 1 }] }, Mbh: { name: "4,4'-Dimethoxybenzhydryl", mf: 'C15H15O2', mass: 227.27895961050194, monoisotopicMass: 227.10720472258998, unsaturation: 15, elements: [{ symbol: 'C', number: 15 }, { symbol: 'H', number: 15 }, { symbol: 'O', number: 2 }] }, Me: { name: 'Methyl', mf: 'CH3', mass: 15.03455815890258, monoisotopicMass: 15.02347509669, unsaturation: -1, elements: [{ symbol: 'C', number: 1 }, { symbol: 'H', number: 3 }] }, Mebzl: { name: '4-Methylbenzyl', mf: 'C8H9', mass: 105.15735396038399, monoisotopicMass: 105.07042529007, unsaturation: 7, elements: [{ symbol: 'C', number: 8 }, { symbol: 'H', number: 9 }] }, Meobzl: { name: '4-Methoxybenzyl', mf: 'C8H9O', mass: 121.15675888470227, monoisotopicMass: 121.06533990964, unsaturation: 7, elements: [{ symbol: 'C', number: 8 }, { symbol: 'H', number: 9 }, { symbol: 'O', number: 1 }] }, Met: { name: 'Methionine diradical', mf: 'C5H9NOS', mass: 131.19604181206938, monoisotopicMass: 131.04048508847, unsaturation: 2, elements: [{ symbol: 'C', number: 5 }, { symbol: 'H', number: 9 }, { symbol: 'N', number: 1 }, { symbol: 'O', number: 1 }, { symbol: 'S', number: 1 }] }, Mmt: { name: '4-Methoxytrityl', mf: 'C20H17O', mass: 273.3491156779715, monoisotopicMass: 273.12794016748, unsaturation: 23, elements: [{ symbol: 'C', number: 20 }, { symbol: 'H', number: 17 }, { symbol: 'O', number: 1 }] }, Mtc: { name: '2,2,5,7,8-pentamethylchroman-6-sulphonyl', mf: 'C14H19O3S', mass: 267.36417906043516, monoisotopicMass: 267.10549064548, unsaturation: 9, elements: [{ symbol: 'C', number: 14 }, { symbol: 'H', number: 19 }, { symbol: 'O', number: 3 }, { symbol: 'S', number: 1 }] }, Mtr: { name: '4-Methoxy-2,3,6-trimethylbenzenesulphonyl', mf: 'C10H13O3S', mass: 213.27359094915948, monoisotopicMass: 213.05854045209998, unsaturation: 7, elements: [{ symbol: 'C', number: 10 }, { symbol: 'H', number: 13 }, { symbol: 'O', number: 3 }, { symbol: 'S', number: 1 }] }, Mts: { name: 'Mesitylene-2-sulphonyl', mf: 'C9H11O2S', mass: 183.24756861999438, monoisotopicMass: 183.04797576807, unsaturation: 7, elements: [{ symbol: 'C', number: 9 }, { symbol: 'H', number: 11 }, { symbol: 'O', number: 2 }, { symbol: 'S', number: 1 }] }, Mtt: { name: '4-Methyltrityl', mf: 'C20H17', mass: 257.3497107536532, monoisotopicMass: 257.13302554791, unsaturation: 23, elements: [{ symbol: 'C', number: 20 }, { symbol: 'H', number: 17 }] }, Nle: { name: 'Norleucine diradical', mf: 'C6H11NO', mass: 113.15787181078912, monoisotopicMass: 113.08406397853, unsaturation: 2, elements: [{ symbol: 'C', number: 6 }, { symbol: 'H', number: 11 }, { symbol: 'N', number: 1 }, { symbol: 'O', number: 1 }] }, Npys: { name: '3-Nitro-2-pyridinesulphenyl', mf: 'C5H3N2O2S', mass: 155.1545054234988, monoisotopicMass: 154.99152351908998, unsaturation: 9, elements: [{ symbol: 'C', number: 5 }, { symbol: 'H', number: 3 }, { symbol: 'N', number: 2 }, { symbol: 'O', number: 2 }, { symbol: 'S', number: 1 }] }, Nva: { name: 'Norvaline diradical', mf: 'C5H9NO', mass: 99.13125440594231, monoisotopicMass: 99.06841391407, unsaturation: 2, elements: [{ symbol: 'C', number: 5 }, { symbol: 'H', number: 9 }, { symbol: 'N', number: 1 }, { symbol: 'O', number: 1 }] }, Odmab: { name: 'Odmab', mf: 'C20H26NO3', mass: 328.4260955245558, monoisotopicMass: 328.19126870111995, unsaturation: 15, elements: [{ symbol: 'C', number: 20 }, { symbol: 'H', number: 26 }, { symbol: 'N', number: 1 }, { symbol: 'O', number: 3 }] }, Orn: { name: 'Ornithine diradical', mf: 'C5H10N2O', mass: 114.14589837144388, monoisotopicMass: 114.07931295072999, unsaturation: 2, elements: [{ symbol: 'C', number: 5 }, { symbol: 'H', number: 10 }, { symbol: 'N', number: 2 }, { symbol: 'O', number: 1 }] }, Ornp: { name: 'Ornithine triradical', mf: 'C5H9N2O', mass: 113.13795761738811, monoisotopicMass: 113.0714879185, unsaturation: 3, elements: [{ symbol: 'C', number: 5 }, { symbol: 'H', number: 9 }, { symbol: 'N', number: 2 }, { symbol: 'O', number: 1 }] }, Pbf: { name: '2,2,4,6,7-pentamethyldihydrobenzofurane-5-sulfonyl', mf: 'C13H17O3S', mass: 253.33756165558833, monoisotopicMass: 253.08984058101998, unsaturation: 9, elements: [{ symbol: 'C', number: 13 }, { symbol: 'H', number: 17 }, { symbol: 'O', number: 3 }, { symbol: 'S', number: 1 }] }, Pen: { name: 'Penicillamine diradical', mf: 'C5H9NOS', mass: 131.19604181206938, monoisotopicMass: 131.04048508847, unsaturation: 2, elements: [{ symbol: 'C', number: 5 }, { symbol: 'H', number: 9 }, { symbol: 'N', number: 1 }, { symbol: 'O', number: 1 }, { symbol: 'S', number: 1 }] }, Penp: { name: 'Penicillamine triradical', mf: 'C5H8NOS', mass: 130.1881010580136, monoisotopicMass: 130.03266005624, unsaturation: 3, elements: [{ symbol: 'C', number: 5 }, { symbol: 'H', number: 8 }, { symbol: 'N', number: 1 }, { symbol: 'O', number: 1 }, { symbol: 'S', number: 1 }] }, Ph: { name: 'Phenyl', mf: 'C6H5', mass: 77.10411915069038, monoisotopicMass: 77.03912516115, unsaturation: 7, elements: [{ symbol: 'C', number: 6 }, { symbol: 'H', number: 5 }] }, Phe: { name: 'Phenylalanine diradical', mf: 'C9H9NO', mass: 147.1741979928833, monoisotopicMass: 147.06841391407002, unsaturation: 10, elements: [{ symbol: 'C', number: 9 }, { symbol: 'H', number: 9 }, { symbol: 'N', number: 1 }, { symbol: 'O', number: 1 }] }, Phepcl: { name: '4-Chlorophenylalanine diradical', mf: 'C9H8ClNO', mass: 181.6191948214355, monoisotopicMass: 181.02944156384, unsaturation: 10, elements: [{ symbol: 'C', number: 9 }, { symbol: 'H', number: 8 }, { symbol: 'Cl', number: 1 }, { symbol: 'N', number: 1 }, { symbol: 'O', number: 1 }] }, Phg: { name: 'Phenylglycine', mf: 'C8H7NO', mass: 133.1475805880365, monoisotopicMass: 133.05276384961002, unsaturation: 10, elements: [{ symbol: 'C', number: 8 }, { symbol: 'H', number: 7 }, { symbol: 'N', number: 1 }, { symbol: 'O', number: 1 }] }, Pmc: { name: '2,2,5,7,8-Pentamethylchroman-6-sulphonyl', mf: 'C14H19O3S', mass: 267.36417906043516, monoisotopicMass: 267.10549064548, unsaturation: 9, elements: [{ symbol: 'C', number: 14 }, { symbol: 'H', number: 19 }, { symbol: 'O', number: 3 }, { symbol: 'S', number: 1 }] }, Pro: { name: 'Proline diradical', mf: 'C5H7NO', mass: 97.11537289783075, monoisotopicMass: 97.05276384961, unsaturation: 4, elements: [{ symbol: 'C', number: 5 }, { symbol: 'H', number: 7 }, { symbol: 'N', number: 1 }, { symbol: 'O', number: 1 }] }, Pyr: { name: 'Pyroglutamine', mf: 'C5H5NO2', mass: 111.09889631403748, monoisotopicMass: 111.03202840472, unsaturation: 6, elements: [{ symbol: 'C', number: 5 }, { symbol: 'H', number: 5 }, { symbol: 'N', number: 1 }, { symbol: 'O', number: 2 }] }, Sar: { name: 'Sarcosine diradical', mf: 'C3H5NO', mass: 71.07801959624871, monoisotopicMass: 71.03711378515, unsaturation: 2, elements: [{ symbol: 'C', number: 3 }, { symbol: 'H', number: 5 }, { symbol: 'N', number: 1 }, { symbol: 'O', number: 1 }] }, Ser: { name: 'Serine diradical', mf: 'C3H5NO2', mass: 87.07742452056698, monoisotopicMass: 87.03202840472, unsaturation: 2, elements: [{ symbol: 'C', number: 3 }, { symbol: 'H', number: 5 }, { symbol: 'N', number: 1 }, { symbol: 'O', number: 2 }] }, Serp: { name: 'Serine triradical', mf: 'C3H4NO2', mass: 86.06948376651121, monoisotopicMass: 86.02420337249, unsaturation: 3, elements: [{ symbol: 'C', number: 3 }, { symbol: 'H', number: 4 }, { symbol: 'N', number: 1 }, { symbol: 'O', number: 2 }] }, Sta: { name: 'Statine diradical', mf: 'C8H15NO2', mass: 157.210511544801, monoisotopicMass: 157.11027872702002, unsaturation: 2, elements: [{ symbol: 'C', number: 8 }, { symbol: 'H', number: 15 }, { symbol: 'N', number: 1 }, { symbol: 'O', number: 2 }] }, Stap: { name: 'Statine triradical', mf: 'C8H14NO2', mass: 156.2025707907452, monoisotopicMass: 156.10245369479, unsaturation: 3, elements: [{ symbol: 'C', number: 8 }, { symbol: 'H', number: 14 }, { symbol: 'N', number: 1 }, { symbol: 'O', number: 2 }] }, Tacm: { name: 'Trimethylacetamidomethyl', mf: 'C6H12NO', mass: 114.16581256484488, monoisotopicMass: 114.09188901076, unsaturation: 1, elements: [{ symbol: 'C', number: 6 }, { symbol: 'H', number: 12 }, { symbol: 'N', number: 1 }, { symbol: 'O', number: 1 }] }, Tbdms: { name: 't-Butyldimethylsilyl', mf: 'C6H15Si', mass: 115.2690253969541, monoisotopicMass: 115.09430201810001, unsaturation: 1, elements: [{ symbol: 'C', number: 6 }, { symbol: 'H', number: 15 }, { symbol: 'Si', number: 1 }] }, Tbu: { name: 't-Butyl', mf: 'C4H9', mass: 57.114410373442986, monoisotopicMass: 57.07042529007, unsaturation: -1, elements: [{ symbol: 'C', number: 4 }, { symbol: 'H', number: 9 }] }, Tbuo: { name: 't-Butoxy', mf: 'C4H9O', mass: 73.11381529776126, monoisotopicMass: 73.06533990964, unsaturation: -1, elements: [{ symbol: 'C', number: 4 }, { symbol: 'H', number: 9 }, { symbol: 'O', number: 1 }] }, Tbuthio: { name: 't-Butylthio', mf: 'C4H9S', mass: 89.17919777957005, monoisotopicMass: 89.04249646446999, unsaturation: -1, elements: [{ symbol: 'C', number: 4 }, { symbol: 'H', number: 9 }, { symbol: 'S', number: 1 }] }, Tfa: { name: 'Trifluoroacetyl', mf: 'C2F3O', mass: 97.01608620597878, monoisotopicMass: 96.99012410776, unsaturation: 1, elements: [{ symbol: 'C', number: 2 }, { symbol: 'F', number: 3 }, { symbol: 'O', number: 1 }] }, Thr: { name: 'Threonine diradical', mf: 'C4H7NO2', mass: 101.10404192541378, monoisotopicMass: 101.04767846918, unsaturation: 2, elements: [{ symbol: 'C', number: 4 }, { symbol: 'H', number: 7 }, { symbol: 'N', number: 1 }, { symbol: 'O', number: 2 }] }, Thrp: { name: 'Threonine triradical', mf: 'C4H6NO2', mass: 100.09610117135801, monoisotopicMass: 100.03985343695001, unsaturation: 3, elements: [{ symbol: 'C', number: 4 }, { symbol: 'H', number: 6 }, { symbol: 'N', number: 1 }, { symbol: 'O', number: 2 }] }, Tfsi: { name: '(Bis)(trifluoromethanesulfonyl)imide', mf: 'C2F6NO4S2', mass: 280.1457884908235, monoisotopicMass: 279.91729380789, unsaturation: -1, elements: [{ symbol: 'C', number: 2 }, { symbol: 'F', number: 6 }, { symbol: 'N', number: 1 }, { symbol: 'O', number: 4 }, { symbol: 'S', number: 2 }] }, Tips: { name: 'Triisopropylsilyl', mf: 'C9H21Si', mass: 157.34887761149452, monoisotopicMass: 157.14125221148, unsaturation: 1, elements: [{ symbol: 'C', number: 9 }, { symbol: 'H', number: 21 }, { symbol: 'Si', number: 1 }] }, Tms: { name: 'Trimethylsilyl', mf: 'C3H9Si', mass: 73.1891731824137, monoisotopicMass: 73.04735182472, unsaturation: 1, elements: [{ symbol: 'C', number: 3 }, { symbol: 'H', number: 9 }, { symbol: 'Si', number: 1 }] }, Tos: { name: 'Tosyl', mf: 'C7H7O2S', mass: 155.1943338103008, monoisotopicMass: 155.01667563914998, unsaturation: 7, elements: [{ symbol: 'C', number: 7 }, { symbol: 'H', number: 7 }, { symbol: 'O', number: 2 }, { symbol: 'S', number: 1 }] }, Trp: { name: 'Tryptophan diradical', mf: 'C11H10N2O', mass: 186.21031375185538, monoisotopicMass: 186.07931295073, unsaturation: 14, elements: [{ symbol: 'C', number: 11 }, { symbol: 'H', number: 10 }, { symbol: 'N', number: 2 }, { symbol: 'O', number: 1 }] }, Trpp: { name: 'Tryptophan triradical', mf: 'C11H9N2O', mass: 185.20237299779959, monoisotopicMass: 185.07148791850003, unsaturation: 15, elements: [{ symbol: 'C', number: 11 }, { symbol: 'H', number: 9 }, { symbol: 'N', number: 2 }, { symbol: 'O', number: 1 }] }, Trt: { name: 'Trityl', mf: 'C19H15', mass: 243.32309334880637, monoisotopicMass: 243.11737548345, unsaturation: 23, elements: [{ symbol: 'C', number: 19 }, { symbol: 'H', number: 15 }] }, Tyr: { name: 'Tyrosine diradical', mf: 'C9H9NO2', mass: 163.1736029172016, monoisotopicMass: 163.06332853364, unsaturation: 10, elements: [{ symbol: 'C', number: 9 }, { symbol: 'H', number: 9 }, { symbol: 'N', number: 1 }, { symbol: 'O', number: 2 }] }, Tyrp: { name: 'Tyrosine triradical', mf: 'C9H8NO2', mass: 162.16566216314578, monoisotopicMass: 162.05550350141, unsaturation: 11, elements: [{ symbol: 'C', number: 9 }, { symbol: 'H', number: 8 }, { symbol: 'N', number: 1 }, { symbol: 'O', number: 2 }] }, Val: { name: 'Valine', mf: 'C5H9NO', mass: 99.13125440594231, monoisotopicMass: 99.06841391407, unsaturation: 2, elements: [{ symbol: 'C', number: 5 }, { symbol: 'H', number: 9 }, { symbol: 'N', number: 1 }, { symbol: 'O', number: 1 }] }, Valoh: { name: 'beta-Hydroxyvaline diradical', mf: 'C5H9NO2', mass: 115.13065933026058, monoisotopicMass: 115.06332853364, unsaturation: 2, elements: [{ symbol: 'C', number: 5 }, { symbol: 'H', number: 9 }, { symbol: 'N', number: 1 }, { symbol: 'O', number: 2 }] }, Valohp: { name: 'beta-Hydroxyvaline triradical', mf: 'C5H8NO2', mass: 114.1227185762048, monoisotopicMass: 114.05550350141002, unsaturation: 3, elements: [{ symbol: 'C', number: 5 }, { symbol: 'H', number: 8 }, { symbol: 'N', number: 1 }, { symbol: 'O', number: 2 }] }, Xan: { name: 'Xanthyl', mf: 'C13H9O', mass: 181.21043836837848, monoisotopicMass: 181.06533990964002, unsaturation: 17, elements: [{ symbol: 'C', number: 13 }, { symbol: 'H', number: 9 }, { symbol: 'O', number: 1 }] }, Z: { name: 'Benzyloxycarbonyl', mf: 'C8H7O2', mass: 135.14028230090898, monoisotopicMass: 135.04460446475, unsaturation: 9, elements: [{ symbol: 'C', number: 8 }, { symbol: 'H', number: 7 }, { symbol: 'O', number: 2 }] }, Damp: { name: 'Desoxyadenosine monophosphate diratical', mf: 'C10H12N5O5P', mass: 313.2069506932622, monoisotopicMass: 313.05760550518, unsaturation: 14, elements: [{ symbol: 'C', number: 10 }, { symbol: 'H', number: 12 }, { symbol: 'N', number: 5 }, { symbol: 'O', number: 5 }, { symbol: 'P', number: 1 }] }, Dcmp: { name: 'Desoxycytidine monophosphate diratical', mf: 'C9H12N3O6P', mass: 289.18221329795364, monoisotopicMass: 289.04637211589, unsaturation: 10, elements: [{ symbol: 'C', number: 9 }, { symbol: 'H', number: 12 }, { symbol: 'N', number: 3 }, { symbol: 'O', number: 6 }, { symbol: 'P', number: 1 }] }, Dgmp: { name: 'Desoxyguanosine monophosphate diratical', mf: 'C10H12N5O6P', mass: 329.20635561758047, monoisotopicMass: 329.05252012475, unsaturation: 14, elements: [{ symbol: 'C', number: 10 }, { symbol: 'H', number: 12 }, { symbol: 'N', number: 5 }, { symbol: 'O', number: 6 }, { symbol: 'P', number: 1 }] }, Dtmp: { name: 'Desoxythymidine monophosphate diratical', mf: 'C10H13N2O7P', mass: 304.1935916616171, monoisotopicMass: 304.04603776326, unsaturation: 10, elements: [{ symbol: 'C', number: 10 }, { symbol: 'H', number: 13 }, { symbol: 'N', number: 2 }, { symbol: 'O', number: 7 }, { symbol: 'P', number: 1 }] }, Dump: { name: 'Desoxyuridine monophosphate diratical', mf: 'C9H11N2O7P', mass: 290.1669742567703, monoisotopicMass: 290.0303876988, unsaturation: 10, elements: [{ symbol: 'C', number: 9 }, { symbol: 'H', number: 11 }, { symbol: 'N', number: 2 }, { symbol: 'O', number: 7 }, { symbol: 'P', number: 1 }] }, Dadp: { name: 'Desoxyadenosine diphosphate diratical', mf: 'C10H13N5O8P2', mass: 393.1868682186928, monoisotopicMass: 393.02393639454, unsaturation: 14, elements: [{ symbol: 'C', number: 10 }, { symbol: 'H', number: 13 }, { symbol: 'N', number: 5 }, { symbol: 'O', number: 8 }, { symbol: 'P', number: 2 }] }, Dcdp: { name: 'Desoxycytidine diphosphate diratical', mf: 'C9H13N3O9P2', mass: 369.16213082338425, monoisotopicMass: 369.01270300525005, unsaturation: 10, elements: [{ symbol: 'C', number: 9 }, { symbol: 'H', number: 13 }, { symbol: 'N', number: 3 }, { symbol: 'O', number: 9 }, { symbol: 'P', number: 2 }] }, Dgdp: { name: 'Desoxyguanosine diphosphate diratical', mf: 'C10H13N5O9P2', mass: 409.186273143011, monoisotopicMass: 409.01885101411, unsaturation: 14, elements: [{ symbol: 'C', number: 10 }, { symbol: 'H', number: 13 }, { symbol: 'N', number: 5 }, { symbol: 'O', number: 9 }, { symbol: 'P', number: 2 }] }, Dtdp: { name: 'Desoxythymidine diphosphate diratical', mf: 'C10H14N2O10P2', mass: 384.1735091870477, monoisotopicMass: 384.01236865262, unsaturation: 10, elements: [{ symbol: 'C', number: 10 }, { symbol: 'H', number: 14 }, { symbol: 'N', number: 2 }, { symbol: 'O', number: 10 }, { symbol: 'P', number: 2 }] }, Dudp: { name: 'Desoxyuridine diphosphate diratical', mf: 'C9H12N2O10P2', mass: 370.1468917822009, monoisotopicMass: 369.99671858816, unsaturation: 10, elements: [{ symbol: 'C', number: 9 }, { symbol: 'H', number: 12 }, { symbol: 'N', number: 2 }, { symbol: 'O', number: 10 }, { symbol: 'P', number: 2 }] }, Datp: { name: 'Desoxyadenosine triphosphate diratical', mf: 'C10H14N5O11P3', mass: 473.16678574412344, monoisotopicMass: 472.9902672839, unsaturation: 14, elements: [{ symbol: 'C', number: 10 }, { symbol: 'H', number: 14 }, { symbol: 'N', number: 5 }, { symbol: 'O', number: 11 }, { symbol: 'P', number: 3 }] }, Dctp: { name: 'Desoxycytidine triphosphate diratical', mf: 'C9H14N3O12P3', mass: 449.14204834881485, monoisotopicMass: 448.97903389461004, unsaturation: 10, elements: [{ symbol: 'C', number: 9 }, { symbol: 'H', number: 14 }, { symbol: 'N', number: 3 }, { symbol: 'O', number: 12 }, { symbol: 'P', number: 3 }] }, Dgtp: { name: 'Desoxyguanosine triphosphate diratical', mf: 'C10H14N5O12P3', mass: 489.16619066844174, monoisotopicMass: 488.98518190347005, unsaturation: 14, elements: [{ symbol: 'C', number: 10 }, { symbol: 'H', number: 14 }, { symbol: 'N', number: 5 }, { symbol: 'O', number: 12 }, { symbol: 'P', number: 3 }] }, Dttp: { name: 'Desoxythymidine triphosphate diratical', mf: 'C10H15N2O13P3', mass: 464.15342671247834, monoisotopicMass: 463.97869954198, unsaturation: 10, elements: [{ symbol: 'C', number: 10 }, { symbol: 'H', number: 15 }, { symbol: 'N', number: 2 }, { symbol: 'O', number: 13 }, { symbol: 'P', number: 3 }] }, Dutp: { name: 'Desoxyuridine triphosphate diratical', mf: 'C9H13N2O13P3', mass: 450.1268093076315, monoisotopicMass: 449.96304947752, unsaturation: 10, elements: [{ symbol: 'C', number: 9 }, { symbol: 'H', number: 13 }, { symbol: 'N', number: 2 }, { symbol: 'O', number: 13 }, { symbol: 'P', number: 3 }] }, Dade: { name: 'Desoxyadenine diratical', mf: 'C10H11N5O2', mass: 233.22703316783156, monoisotopicMass: 233.09127461582, unsaturation: 14, elements: [{ symbol: 'C', number: 10 }, { symbol: 'H', number: 11 }, { symbol: 'N', number: 5 }, { symbol: 'O', number: 2 }] }, Dcyt: { name: 'Desoxycytosine diratical', mf: 'C9H11N3O3', mass: 209.202295772523, monoisotopicMass: 209.08004122653, unsaturation: 10, elements: [{ symbol: 'C', number: 9 }, { symbol: 'H', number: 11 }, { symbol: 'N', number: 3 }, { symbol: 'O', number: 3 }] }, Dgua: { name: 'Desoxyguanine diratical', mf: 'C10H11N5O3', mass: 249.22643809214986, monoisotopicMass: 249.08618923539, unsaturation: 14, elements: [{ symbol: 'C', number: 10 }, { symbol: 'H', number: 11 }, { symbol: 'N', number: 5 }, { symbol: 'O', number: 3 }] }, Dthy: { name: 'Desoxythymine diratical', mf: 'C10H12N2O4', mass: 224.2136741361865, monoisotopicMass: 224.07970687390002, unsaturation: 10, elements: [{ symbol: 'C', number: 10 }, { symbol: 'H', number: 12 }, { symbol: 'N', number: 2 }, { symbol: 'O', number: 4 }] }, Dura: { name: 'Desoxyuracil diratical', mf: 'C9H10N2O4', mass: 210.1870567313397, monoisotopicMass: 210.06405680944, unsaturation: 10, elements: [{ symbol: 'C', number: 9 }, { symbol: 'H', number: 10 }, { symbol: 'N', number: 2 }, { symbol: 'O', number: 4 }] }, Amp: { name: 'Adenosine monophosphate diratical', mf: 'C10H12N5O6P', mass: 329.20635561758047, monoisotopicMass: 329.05252012475, unsaturation: 14, elements: [{ symbol: 'C', number: 10 }, { symbol: 'H', number: 12 }, { symbol: 'N', number: 5 }, { symbol: 'O', number: 6 }, { symbol: 'P', number: 1 }] }, Cmp: { name: 'Cytidine monophosphate diratical', mf: 'C9H12N3O7P', mass: 305.1816182222719, monoisotopicMass: 305.04128673546, unsaturation: 10, elements: [{ symbol: 'C', number: 9 }, { symbol: 'H', number: 12 }, { symbol: 'N', number: 3 }, { symbol: 'O', number: 7 }, { symbol: 'P', number: 1 }] }, Gmp: { name: 'Guanosine monophosphate diratical', mf: 'C10H12N5O7P', mass: 345.20576054189877, monoisotopicMass: 345.04743474432, unsaturation: 14, elements: [{ symbol: 'C', number: 10 }, { symbol: 'H', number: 12 }, { symbol: 'N', number: 5 }, { symbol: 'O', number: 7 }, { symbol: 'P', number: 1 }] }, Tmp: { name: 'Thymidine monophosphate diratical', mf: 'C10H13N2O8P', mass: 320.1929965859354, monoisotopicMass: 320.04095238282997, unsaturation: 10, elements: [{ symbol: 'C', number: 10 }, { symbol: 'H', number: 13 }, { symbol: 'N', number: 2 }, { symbol: 'O', number: 8 }, { symbol: 'P', number: 1 }] }, Ump: { name: 'Uridine monophosphate diratical', mf: 'C9H11N2O8P', mass: 306.1663791810886, monoisotopicMass: 306.02530231837, unsaturation: 10, elements: [{ symbol: 'C', number: 9 }, { symbol: 'H', number: 11 }, { symbol: 'N', number: 2 }, { symbol: 'O', number: 8 }, { symbol: 'P', number: 1 }] }, Adp: { name: 'Adenosine diphosphate diratical', mf: 'C10H13N5O9P2', mass: 409.186273143011, monoisotopicMass: 409.01885101411, unsaturation: 14, elements: [{ symbol: 'C', number: 10 }, { symbol: 'H', number: 13 }, { symbol: 'N', number: 5 }, { symbol: 'O', number: 9 }, { symbol: 'P', number: 2 }] }, Cdp: { name: 'Cytidine diphosphate diratical', mf: 'C9H13N3O10P2', mass: 385.1615357477025, monoisotopicMass: 385.00761762482, unsaturation: 10, elements: [{ symbol: 'C', number: 9 }, { symbol: 'H', number: 13 }, { symbol: 'N', number: 3 }, { symbol: 'O', number: 10 }, { symbol: 'P', number: 2 }] }, Gdp: { name: 'Guanosine diphosphate diratical', mf: 'C10H13N5O10P2', mass: 425.1856780673293, monoisotopicMass: 425.01376563368, unsaturation: 14, elements: [{ symbol: 'C', number: 10 }, { symbol: 'H', number: 13 }, { symbol: 'N', number: 5 }, { symbol: 'O', number: 10 }, { symbol: 'P', number: 2 }] }, Tdp: { name: 'Thymidine diphosphate diratical', mf: 'C10H14N2O11P2', mass: 400.172914111366, monoisotopicMass: 400.00728327219, unsaturation: 10, elements: [{ symbol: 'C', number: 10 }, { symbol: 'H', number: 14 }, { symbol: 'N', number: 2 }, { symbol: 'O', number: 11 }, { symbol: 'P', number: 2 }] }, Udp: { name: 'Uridine diphosphate diratical', mf: 'C9H12N2O11P2', mass: 386.14629670651925, monoisotopicMass: 385.99163320773005, unsaturation: 10, elements: [{ symbol: 'C', number: 9 }, { symbol: 'H', number: 12 }, { symbol: 'N', number: 2 }, { symbol: 'O', number: 11 }, { symbol: 'P', number: 2 }] }, Atp: { name: 'Adenosine triphosphate diratical', mf: 'C10H14N5O12P3', mass: 489.16619066844174, monoisotopicMass: 488.98518190347005, unsaturation: 14, elements: [{ symbol: 'C', number: 10 }, { symbol: 'H', number: 14 }, { symbol: 'N', number: 5 }, { symbol: 'O', number: 12 }, { symbol: 'P', number: 3 }] }, Ctp: { name: 'Cytidine triphosphate diratical', mf: 'C9H14N3O13P3', mass: 465.1414532731331, monoisotopicMass: 464.97394851418, unsaturation: 10, elements: [{ symbol: 'C', number: 9 }, { symbol: 'H', number: 14 }, { symbol: 'N', number: 3 }, { symbol: 'O', number: 13 }, { symbol: 'P', number: 3 }] }, Gtp: { name: 'Guanosine triphosphate diratical', mf: 'C10H14N5O13P3', mass: 505.16559559276, monoisotopicMass: 504.98009652304, unsaturation: 14, elements: [{ symbol: 'C', number: 10 }, { symbol: 'H', number: 14 }, { symbol: 'N', number: 5 }, { symbol: 'O', number: 13 }, { symbol: 'P', number: 3 }] }, Ttp: { name: 'Thymidine triphosphate diratical', mf: 'C10H15N2O14P3', mass: 480.15283163679663, monoisotopicMass: 479.97361416155, unsaturation: 10, elements: [{ symbol: 'C', number: 10 }, { symbol: 'H', number: 15 }, { symbol: 'N', number: 2 }, { symbol: 'O', number: 14 }, { symbol: 'P', number: 3 }] }, Utp: { name: 'Uridine triphosphate diratical', mf: 'C9H13N2O14P3', mass: 466.12621423194986, monoisotopicMass: 465.95796409709004, unsaturation: 10, elements: [{ symbol: 'C', number: 9 }, { symbol: 'H', number: 13 }, { symbol: 'N', number: 2 }, { symbol: 'O', number: 14 }, { symbol: 'P', number: 3 }] }, 'Ade ': { name: 'Adenine diratical', mf: 'C10H11N5O3', mass: 249.22643809214986, monoisotopicMass: 249.08618923539, unsaturation: 14, elements: [{ symbol: 'C', number: 10 }, { symbol: 'H', number: 11 }, { symbol: 'N', number: 5 }, { symbol: 'O', number: 3 }] }, Cyt: { name: 'Cytosine diratical', mf: 'C9H11N3O4', mass: 225.20170069684127, monoisotopicMass: 225.0749558461, unsaturation: 10, elements: [{ symbol: 'C', number: 9 }, { symbol: 'H', number: 11 }, { symbol: 'N', number: 3 }, { symbol: 'O', number: 4 }] }, Gua: { name: 'Guanine diratical', mf: 'C10H11N5O4', mass: 265.22584301646816, monoisotopicMass: 265.08110385496, unsaturation: 14, elements: [{ symbol: 'C', number: 10 }, { symbol: 'H', number: 11 }, { symbol: 'N', number: 5 }, { symbol: 'O', number: 4 }] }, Thy: { name: 'Thymine diratical  ', mf: 'C10H12N2O5', mass: 240.21307906050478, monoisotopicMass: 240.07462149347, unsaturation: 10, elements: [{ symbol: 'C', number: 10 }, { symbol: 'H', number: 12 }, { symbol: 'N', number: 2 }, { symbol: 'O', number: 5 }] }, Ura: { name: 'Uracil diratical', mf: 'C9H10N2O5', mass: 226.18646165565798, monoisotopicMass: 226.05897142901, unsaturation: 10, elements: [{ symbol: 'C', number: 9 }, { symbol: 'H', number: 10 }, { symbol: 'N', number: 2 }, { symbol: 'O', number: 5 }] } };

},{}],6:[function(require,module,exports){
'use strict';

/**
 * Defines static variables corresponding to the various formatting possibilities
 */

module.exports = {
  SUBSCRIPT: 'subscript',
  SUPERSCRIPT: 'superscript',
  SUPERIMPOSE: 'superimpose',
  TEXT: 'text'
};

},{}],7:[function(require,module,exports){
'use strict';
/**
 * Define static variable corresponding to the various Kinds of a molecular formula part.
 */

module.exports = {
  BEGIN: 'begin',
  ATOM: 'atom',
  MULTIPLIER_RANGE: 'multiplierRange',
  ISOTOPE: 'isotope',
  ISOTOPE_RATIO: 'isotopeRatio',
  CHARGE: 'charge',
  SALT: 'salt',
  OPENING_PARENTHESIS: 'openingParenthesis',
  CLOSING_PARENTHESIS: 'closingParenthesis',
  PRE_MULTIPLIER: 'preMultiplier',
  MULTIPLIER: 'multiplier',
  TEXT: 'text',
  COMMENT: 'comment'
};

},{}],8:[function(require,module,exports){
'use strict';

const parse = require('./parse');
const toDisplay = require('./util/toDisplay');
const toHtml = require('./util/toHtml');
const toParts = require('./util/toParts');
const getInfo = require('./util/getInfo');
const getEA = require('./util/getEA');
const getIsotopesInfo = require('./util/getIsotopesInfo');
const partsToMF = require('./util/partsToMF');
const partsToDisplay = require('./util/partsToDisplay');

class MF {
  constructor(mf) {
    this.parsed = parse(mf);
    this.cache = {};
  }

  toDisplay() {
    if (!this.cache.displayed) this.cache.displayed = toDisplay(this.parsed);
    return this.cache.displayed;
  }

  toHtml() {
    if (!this.cache.html) {
      this.toDisplay();
      this.cache.html = toHtml(this.cache.displayed);
    }
    return this.cache.html;
  }

  toParts(options) {
    if (!this.cache.parts) {
      this.cache.parts = toParts(this.parsed, options);
    }
    return this.cache.parts;
  }

  /**
   * Returns an object with the global MF, global charge, monoisotopic mass and mass
   * as well as the same informations for all the parts
   */
  getInfo(options = {}) {
    if (!this.cache.info) {
      this.toParts();
      this.cache.info = getInfo(this.cache.parts, options);
    }
    return this.cache.info;
  }

  /**
   * Returns an object with the elemental analysis
   */
  getEA(options = {}) {
    if (!this.cache.ea) {
      this.toParts();
      this.cache.ea = getEA(this.cache.parts, options);
    }
    return this.cache.ea;
  }

  /**
   * Returns an array with each atom and isotopic composition
   */
  getIsotopesInfo(options = {}) {
    if (!this.cache.isotopesInfo) {
      this.toParts();
      this.cache.isotopesInfo = getIsotopesInfo(this.cache.parts, options);
    }
    return this.cache.isotopesInfo;
  }

  /**
   * Get a canonized MF
   */
  toMF() {
    if (!this.cache.mf) {
      this.toParts();
      this.cache.mf = partsToMF(this.cache.parts);
    }
    return this.cache.mf;
  }

  canonize() {
    this.toParts();
    this.cache.displayed = partsToDisplay(this.cache.parts);
    this.cache.html = undefined;
  }
}

module.exports = MF;

},{"./parse":11,"./util/getEA":13,"./util/getInfo":14,"./util/getIsotopesInfo":16,"./util/partsToDisplay":21,"./util/partsToMF":22,"./util/toDisplay":23,"./util/toHtml":24,"./util/toParts":25}],9:[function(require,module,exports){
'use strict';

module.exports = {
  SUPERIMPOSE: 'flex-direction: column;display: inline-flex;justify-content: center;text-align: left;vertical-align: middle;',
  SUPERIMPOSE_SUP_SUB: 'line-height: 1; font-size: 70%'
};


},{}],10:[function(require,module,exports){
'use strict';

const toDisplay = require('./util/toDisplay');
const parse = require('./parse');
const toHtml = require('./util/toHtml');

/**
 * Parse a molecular formula and converts it to an HTML code
 * @param {String} mf String containing the molecular formula
 */
function parseToHtml(mf) {
  var parsed = parse(mf);
  var display = toDisplay(parsed);
  return toHtml(display);
}

module.exports = {
  Kind: require('./Kind'),
  Format: require('./Format'),
  Style: require('./Style'),
  parse: require('./parse'),
  toDisplay,
  toHtml,
  parseToHtml,
  MF: require('./MF'),
};

},{"./Format":6,"./Kind":7,"./MF":8,"./Style":9,"./parse":11,"./util/toDisplay":23,"./util/toHtml":24}],11:[function(require,module,exports){
'use strict';


const Kind = require('./Kind');
const parseCharge = require('./util/parseCharge');

/**
 * Parse a mf to an array of kind / value
 * @param {String} mf
 */

module.exports = function parse(mf) {
  return new MFParser().parse(mf);
};

class MFParser {
  parse(mf = '') {
    this.mf = mf;
    this.i = 0;
    this.result = [];

    let lastKind = Kind.BEGIN;
    while (this.i < mf.length) {
      if (this.result.length > 0 && this.result[this.result.length - 1].kind !== Kind.TEXT) {
        lastKind = this.result[this.result.length - 1].kind;
      }
      let char = mf.charAt(this.i);
      let ascii = mf.charCodeAt(this.i);
      let nextAscii = 0;
      if (this.i + 1 < mf.length) nextAscii = mf.charCodeAt(this.i + 1);

      if ((ascii > 47 && ascii < 58) || (char === '-' && nextAscii > 47 && nextAscii < 58)) { // a number
        let value = this.getNumber(ascii);
        if (lastKind === Kind.SALT || lastKind === Kind.BEGIN || lastKind === Kind.OPENING_PARENTHESIS) {
          if (value.to) throw new MFError(this.mf, this.i, 'Premultiplier may not contain a -');
          this.result.push({ kind: Kind.PRE_MULTIPLIER, value: value.from });
        } else {
          if (value.to) {
            this.result.push({ kind: Kind.MULTIPLIER_RANGE, value });
          } else {
            this.result.push({ kind: Kind.MULTIPLIER, value: value.from });
          }
        }

        continue;
      } else if (char === '.') { // a point
        this.result.push({ kind: Kind.SALT, value: char });
        // it is not in a number otherwise it would have been taken before
        // it must be in a salt
      } else if (ascii > 64 && ascii < 91) { // an uppercase = new atom
        let value = this.getAtom(ascii);
        this.result.push({ kind: Kind.ATOM, value });
        continue;
      } else if (ascii > 96 && ascii < 123) { // a lowercase
        throw new MFError(this.mf, this.i, 'found a lowercase not following an uppercase');
      } else if (char === '(') {
        let charge = this.getParenthesisCharge(ascii);
        if (charge) {
          this.result.push({ kind: Kind.CHARGE, value: charge });
        } else {
          this.result.push({ kind: Kind.OPENING_PARENTHESIS, value: '(' });
        }
      } else if (char === ')') {
        this.result.push({ kind: Kind.CLOSING_PARENTHESIS, value: ')' });
      } else if (char === '[') { // defines an isotope
        let isotope = this.getIsotope(ascii);
        this.result.push({ kind: Kind.ISOTOPE, value: isotope });
      } else if (char === ']') {
        throw new MFError(this.mf, this.i, 'should never meet an closing bracket not in isotopes');
      } else if (char === '{') { // can define an exotic isotopic ratio or mixtures of groups
        let isotopeRatio = this.getCurlyBracketIsotopeRatio(ascii);
        if (lastKind === Kind.ATOM) {
          let lastResult = this.result[this.result.length - 1];
          lastResult.kind = Kind.ISOTOPE_RATIO;
          lastResult.value = {
            atom: lastResult.value,
            ratio: isotopeRatio
          };
        } else {
          throw new MFError(this.mf, this.i, 'isotopic composition has to follow an atom');
        }
      } else if (char === '}') {
        throw new MFError(this.mf, this.i, 'found a unexpected closing curly bracket');
      } else if (char === '+') { // charge not in parenthesis
        let charge = this.getNonParenthesisCharge(ascii);
        this.result.push({ kind: Kind.CHARGE, value: charge });
      } else if (char === '-') { // charge not in parenthesis
        let charge = this.getNonParenthesisCharge(ascii);
        this.result.push({ kind: Kind.CHARGE, value: charge });
      } else if (char === '$') { // it is a comment after
        this.result.push({ kind: Kind.COMMENT, value: this.mf.substring(this.i + 1) });
        break;
      } else {
        this.result.push({ kind: Kind.TEXT, value: char });
      }
      this.i++;
    }

    this.checkParenthesis();
    return this.result;
  }

  checkParenthesis() {
    let counter = 0;
    for (let line of this.result) {
      if (line.kind === Kind.OPENING_PARENTHESIS) counter++;
      if (line.kind === Kind.CLOSING_PARENTHESIS) counter--;
    }
    if (counter !== 0) {
      throw new MFError(this.mf, this.i, 'number of opening and closing parenthesis not equal');
    }
  }

  getNumber(ascii) {
    let number = '';
    let previous;
    do {
      previous = ascii;
      number += String.fromCharCode(ascii);
      this.i++;
      ascii = this.mf.charCodeAt(this.i);
    } while (ascii > 47 && ascii < 58 || ascii === 46 || ascii === 45); // number, . or -
    // we need to deal with the case there is a from / to
    if (previous === 46) this.i--;
    let indexOfDash = number.indexOf('-', 1);

    if (indexOfDash > -1) {
      return { from: Number(number.substr(0, indexOfDash)), to: Number(number.substr(indexOfDash + 1)) };
    }
    return { from: Number(number) };
  }

  getAtom(ascii) {
    let atom = '';
    do {
      atom += String.fromCharCode(ascii);
      this.i++;
      ascii = this.mf.charCodeAt(this.i);
    } while (ascii > 96 && ascii < 123);
    return atom;
  }

  getIsotope(ascii) { // [13C]
    let substring = '';
    do {
      substring += String.fromCharCode(ascii);
      this.i++;
      ascii = this.mf.charCodeAt(this.i);
    } while (ascii !== 93 && this.i <= this.mf.length);

    let atom = substring.replace(/[^a-zA-Z]/g, '');
    let isotope = Number(substring.replace(/[^0-9]/g, ''));
    return { atom, isotope };
  }


  getCurlyBracketIsotopeRatio(ascii) {
    let substring = '';
    let first = true;
    do {
      if (!first) {
        substring += String.fromCharCode(ascii);
      } else {
        first = false;
      }
      this.i++;
      ascii = this.mf.charCodeAt(this.i);
    } while (ascii !== 125 && this.i <= this.mf.length); // closing curly bracket
    if (substring.match(/^[0-9,]+$/)) {
      return substring.split(',').map((a) => Number(a));
    }
    throw new MFError(this.mf, this.i, 'Curly brackets should contain only number and comma');
  }

  getParenthesisCharge(ascii) {
    let substring = '';
    let begin = this.i;
    do {
      substring += String.fromCharCode(ascii);
      this.i++;
      ascii = this.mf.charCodeAt(this.i);
    } while (ascii !== 41 && this.i <= this.mf.length); // closing parenthesis
    if (substring.match(/^\([0-9+-]+$/)) {
      return parseCharge(substring.substring(1));
    } else {
      this.i = begin;
      return undefined;
    }
  }

  getNonParenthesisCharge(ascii) {
    let substring = '';
    do {
      substring += String.fromCharCode(ascii);
      this.i++;
      ascii = this.mf.charCodeAt(this.i);
    } while (ascii === 43 || ascii === 45 || (ascii > 47 && ascii < 58));
    this.i--;
    return parseCharge(substring);
  }
}
class MFError extends SyntaxError {
  constructor(mf, i, message) {
    let text = `${message}\n\n${mf}\n${' '.repeat(i)}^`;
    super(text);
  }
}

},{"./Kind":7,"./util/parseCharge":18}],12:[function(require,module,exports){
'use strict';

module.exports = function formatCharge(charge) {
  if (charge === 1) return '+';
  if (charge > 1) return `+${charge}`;
  if (charge < 0) return String(charge);
  return '';
};

},{}],13:[function(require,module,exports){
'use strict';

const elements = require('chemical-elements/src/elementsAndStableIsotopesObject.js');
const groups = require('chemical-groups/src/groupsObject.js');

const Kind = require('../Kind');

const isotopes = require('./getIsotopesObject');
const getIsotopeRatioInfo = require('./getIsotopeRatioInfo');

/**
 *
 * @param {*} parts
 * @param {*} [options={}]
 */
module.exports = function getInfo(parts) {
  var results = {};
  for (let part of parts) {
    for (let line of part) {
      switch (line.kind) {
        case Kind.ISOTOPE: {
          let isotope = isotopes[line.value.isotope + line.value.atom];
          if (!isotope) {
            throw new Error(
              `Unknown isotope: ${line.value.isotope}${line.value.atom}`
            );
          }
          addMass(results, line.value.atom, isotope.mass * line.multiplier);
          break;
        }

        case Kind.ISOTOPE_RATIO: {
          let isotopeRatioInfo = getIsotopeRatioInfo(line.value);
          addMass(
            results,
            line.value.atom,
            isotopeRatioInfo.mass * line.multiplier
          );
          break;
        }

        case Kind.ATOM: {
          let element = elements[line.value];
          if (!element) {
            element = groups[line.value];
            if (!element) throw Error(`Unknown element: ${line.value}`);
            // need to explode group ????
          }
          addMass(results, line.value, element.mass * line.multiplier);
          break;
        }

        case Kind.CHARGE:
          break;
        default:
          throw new Error('partToMF unhandled Kind: ', line.kind);
      }
    }
  }

  let eas = [];
  let sum = 0;
  for (let key in results) {
    sum += results[key];
    eas.push({
      element: key,
      mass: results[key]
    });
  }

  eas.forEach((ea) => {
    ea.ratio = ea.mass / sum;
  });

  return eas;
};

function addMass(results, atom, mass) {
  if (!results[atom]) results[atom] = 0;
  results[atom] += mass;
}

},{"../Kind":7,"./getIsotopeRatioInfo":15,"./getIsotopesObject":17,"chemical-elements/src/elementsAndStableIsotopesObject.js":3,"chemical-groups/src/groupsObject.js":5}],14:[function(require,module,exports){
'use strict';

const elements = require('chemical-elements/src/elementsAndStableIsotopesObject.js');
const groups = require('chemical-groups/src/groupsObject.js');
const unsaturations = require('chemical-elements/src/unsaturationsObject.js');

const Kind = require('../Kind');

const { ELECTRON_MASS } = require('chemical-elements/src/constants');

const partToMF = require('./partToMF');
const partToAtoms = require('./partToAtoms');
const isotopes = require('./getIsotopesObject');
const getIsotopeRatioInfo = require('./getIsotopeRatioInfo');

/**
 *
 * @param {*} parts
 * @param {*} [options={}]
 */
module.exports = function getInfo(parts, options = {}) {
  let { customUnsaturations = {} } = options;
  if (parts.length === 0) return {};
  if (parts.length === 1) {
    return getProcessedPart(parts[0], customUnsaturations);
  }

  var result = { parts: [] };
  for (let part of parts) {
    result.parts.push(getProcessedPart(part, customUnsaturations));
  }

  result.monoisotopicMass = 0;
  result.mass = 0;
  result.charge = 0;
  result.mf = result.parts.map((a) => a.mf).join('.');
  result.parts.forEach((a) => {
    result.mass += a.mass;
    result.monoisotopicMass += a.monoisotopicMass;
    result.charge += a.charge;
  });
  return result;
};

function getProcessedPart(part, customUnsaturations) {
  let currentPart = {
    mass: 0,
    monoisotopicMass: 0,
    charge: 0,
    mf: '',
    atoms: partToAtoms(part)
  };
  let unsaturation = 0;
  let validUnsaturation = true;
  currentPart.mf = partToMF(part);

  for (let line of part) {
    let currentElement = '';
    switch (line.kind) {
      case Kind.ATOM: {
        currentElement = line.value;
        let element = elements[line.value];

        // todo should we have a kind GROUP ?
        if (!element) {
          element = groups[line.value];
          if (!element) throw Error(`Unknown element: ${line.value}`);
          if (!customUnsaturations[line.value]) {
            customUnsaturations[line.value] = element.unsaturation;
          }
        }

        if (!element) throw new Error(`Unknown element: ${line.value}`);
        currentPart.monoisotopicMass +=
          element.monoisotopicMass * line.multiplier;
        currentPart.mass += element.mass * line.multiplier;
        break;
      }
      case Kind.ISOTOPE: {
        currentElement = line.value.atom;
        let isotope = isotopes[line.value.isotope + line.value.atom];
        if (!isotope) {
          throw new Error(
            `Unknown isotope: ${line.value.isotope}${line.value.atom}`
          );
        }
        currentPart.monoisotopicMass += isotope.mass * line.multiplier;
        currentPart.mass += isotope.mass * line.multiplier;
        break;
      }
      case Kind.ISOTOPE_RATIO: {
        currentElement = line.value.atom;
        let isotopeRatioInfo = getIsotopeRatioInfo(line.value);
        currentPart.monoisotopicMass +=
          isotopeRatioInfo.monoisotopicMass * line.multiplier;
        currentPart.mass += isotopeRatioInfo.mass * line.multiplier;
        break;
      }
      case Kind.CHARGE:
        currentPart.charge = line.value;
        if (validUnsaturation) {
          unsaturation -= line.value;
        }
        break;
      default:
        throw new Error('Unimplemented Kind in getInfo', line.kind);
    }
    if (currentElement) {
      if (customUnsaturations[currentElement] !== undefined) {
        unsaturation += customUnsaturations[currentElement] * line.multiplier;
      } else if (unsaturations[currentElement] !== undefined) {
        unsaturation += unsaturations[currentElement] * line.multiplier;
      } else {
        validUnsaturation = false;
      }
    }
  }

  // need to calculate the observedMonoisotopicMass
  if (currentPart.charge) {
    currentPart.observedMonoisotopicMass =
      (currentPart.monoisotopicMass - currentPart.charge * ELECTRON_MASS) /
      Math.abs(currentPart.charge);
  }
  if (validUnsaturation) {
    currentPart.unsaturation = unsaturation / 2 + 1;
  }
  return currentPart;
}


},{"../Kind":7,"./getIsotopeRatioInfo":15,"./getIsotopesObject":17,"./partToAtoms":19,"./partToMF":20,"chemical-elements/src/constants":2,"chemical-elements/src/elementsAndStableIsotopesObject.js":3,"chemical-elements/src/unsaturationsObject.js":4,"chemical-groups/src/groupsObject.js":5}],15:[function(require,module,exports){
'use strict';

const elements = require('chemical-elements/src/elementsAndStableIsotopesObject.js');

function getIsotopeRatioInfo(value) {
  let result = { mass: 0, monoisotopicMass: 0 };
  let element = elements[value.atom];
  if (!element) throw new Error(`Element not found: ${value.atom}`);
  let isotopesArray = element.isotopes;
  let ratios = normalize(value.ratio);
  let max = Math.max(...ratios);
  if (ratios.length > isotopesArray.length) {
    throw new Error(
      `the number of specified ratios is bigger that the number of stable isotopes: ${
        value.atom
      }`
    );
  }
  for (let i = 0; i < ratios.length; i++) {
    result.mass += ratios[i] * isotopesArray[i].mass;
    if (max === ratios[i] && result.monoisotopicMass === 0) {
      result.monoisotopicMass = isotopesArray[i].mass;
    }
  }
  return result;
}

function normalize(array) {
  let sum = array.reduce((prev, current) => prev + current, 0);
  return array.map((a) => a / sum);
}

module.exports = getIsotopeRatioInfo;

},{"chemical-elements/src/elementsAndStableIsotopesObject.js":3}],16:[function(require,module,exports){
'use strict';

const elements = require('chemical-elements/src/elementsAndStableIsotopesObject.js');

const Kind = require('../Kind');

const isotopes = require('./getIsotopesObject');

/**
 *
 * @param {*} parts
 * @param {*} options
 */
module.exports = function getIsotopesInfo(parts) {
  if (parts.length === 0) return [];
  if (parts.length > 1) throw new Error('getIsotopesInfo can not be applied on multipart MF');

  return getProcessedPart(parts[0]);
};

function getProcessedPart(part) {
  let result = {
    charge: 0,
    isotopes: []
  };
  for (let line of part) {
    switch (line.kind) {
      case Kind.ISOTOPE: {
        let isotope = isotopes[line.value.isotope + line.value.atom];
        if (!isotope) throw Error('unknown isotope:', line.value.atom, line.value.isotope);
        result.isotopes.push({
          atom: `[${line.value.isotope}${line.value.atom}]`,
          number: line.multiplier,
          distribution: [{ x: isotope.mass, y: 1 }]
        });
        break;
      }
      case Kind.ISOTOPE_RATIO: {
        let element = elements[line.value.atom];
        if (!element) throw new Error('unknown element:', line.value);

        let distribution = getDistribution(element.isotopes, line.value.ratio);
        result.isotopes.push({
          atom: `${line.value.atom}{${line.value.ratio.join(',')}}`,
          number: line.multiplier,
          distribution
        });
      }
        break;
      case Kind.ATOM: {
        let element = elements[line.value];
        if (!element) throw new Error('unknown element:', line.value);
        result.isotopes.push({
          atom: line.value,
          number: line.multiplier,
          distribution: element.isotopes.map((e) => ({ x: e.mass, y: e.abundance }))
        });
        break;
      }
      case Kind.CHARGE:
        result.charge += line.value;
        break;
      default:
        throw new Error('partToMF unhandled Kind: ', line.kind);
    }
  }
  return result;
}


function getDistribution(isotopesArray, ratio) {
  let ratios = normalize(ratio);
  let result = [];
  if (ratios.length > isotopesArray.length) {
    throw new Error(`the number of specified ratios is bigger that the number of stable isotopes: ${isotopes}`);
  }
  for (let i = 0; i < ratios.length; i++) {
    result.push({
      x: isotopesArray[i].mass,
      y: ratios[i]
    });
  }
  return result;
}

function normalize(array) {
  let sum = array.reduce((prev, current) => prev + current, 0);
  return array.map((a) => a / sum);
}

},{"../Kind":7,"./getIsotopesObject":17,"chemical-elements/src/elementsAndStableIsotopesObject.js":3}],17:[function(require,module,exports){
'use strict';

const elements = require('chemical-elements/src/elementsAndStableIsotopesObject.js');

const isotopes = {};
Object.keys(elements).forEach((key) => {
  let e = elements[key];
  e.isotopes.forEach((i) => {
    isotopes[i.nominal + key] = {
      abundance: i.abundance,
      mass: i.mass
    };
  });
});

module.exports = isotopes;


},{"chemical-elements/src/elementsAndStableIsotopesObject.js":3}],18:[function(require,module,exports){
'use strict';


/**
 * Parse a string to extract the charge
 * The charge may be in the form --, +++, +3, -2, 4+, 2-
 * @param {*} charge
 */

module.exports = function parseCharge(charge) {
  charge = charge.replace(/[()]/g, '');
  var chargeNumber = 0;
  if (charge.match(/^[+-]+$/)) {
    for (var i = 0; i < charge.length; i++) {
      if (charge.charAt(i) === '+') chargeNumber++;
      else chargeNumber--;
    }
  } else if (charge.match(/^[0-9]+[+-]$/)) {
    chargeNumber = Number(charge.charAt(charge.length - 1) + charge.substring(0, charge.length - 1));
  } else {
    chargeNumber = Number(charge);
  }
  return chargeNumber;
};

},{}],19:[function(require,module,exports){
'use strict';

const Kind = require('../Kind');

/**
 * Convert a MF part to an array of atoms
 * This procedure will suppress the isotopes !
 * This is mainly used to make queries
 */

module.exports = function partToAtoms(part) {
  var atoms = {};
  for (let line of part) {
    switch (line.kind) {
      case Kind.ISOTOPE:
        if (!atoms[line.value.atom]) atoms[line.value.atom] = 0;
        atoms[line.value.atom] += line.multiplier;
        break;
      case Kind.ISOTOPE_RATIO:
        if (!atoms[line.value.atom]) atoms[line.value.atom] = 0;
        atoms[line.value.atom] += line.multiplier;
        break;
      case Kind.ATOM:
        if (!atoms[line.value]) atoms[line.value] = 0;
        atoms[line.value] += line.multiplier;
        break;
      case Kind.CHARGE:
        break;
      default:
        throw new Error('partToMF unhandled Kind: ', line.kind);
    }
  }
  return atoms;
};

},{"../Kind":7}],20:[function(require,module,exports){
'use strict';

const Kind = require('../Kind');

module.exports = function partToMF(part) {
  var mf = [];
  for (let line of part) {
    switch (line.kind) {
      case Kind.ISOTOPE:
        if (line.multiplier !== 0) {
          mf.push(
            `[${line.value.isotope}${line.value.atom}]${
              line.multiplier !== 1 ? line.multiplier : ''
            }`
          );
        }
        break;
      case Kind.ISOTOPE_RATIO:
        if (line.multiplier !== 0) {
          mf.push(
            `${line.value.atom}{${line.value.ratio.join(',')}}${
              line.multiplier !== 1 ? line.multiplier : ''
            }`
          );
        }
        break;
      case Kind.ATOM:
        if (line.multiplier !== 0) {
          mf.push(line.value + (line.multiplier !== 1 ? line.multiplier : ''));
        }
        break;
      case Kind.CHARGE:
        if (line.value === 0) break;
        mf.push(`(${line.value > 0 ? `+${line.value}` : line.value})`);
        break;
      default:
    }
  }
  return mf.join('');
};

},{"../Kind":7}],21:[function(require,module,exports){
'use strict';

const Kind = require('../Kind');

const toDisplay = require('./toDisplay');
/**
 * Converts an array of mf elements to an array of formatting information
 * @param {Array<Object>} result of the parse method
 */

module.exports = function partsToDisplay(parts) {
  var lines = [];
  for (let part of parts) {
    if (lines.length > 0) lines.push({ kind: Kind.SALT, value: '•' });
    for (let partLine of part) {
      lines.push(partLine);
      if (partLine.multiplier) {
        lines.push({
          kind: Kind.MULTIPLIER,
          value: partLine.multiplier
        });
      }
    }
  }

  return toDisplay(lines);
};

},{"../Kind":7,"./toDisplay":23}],22:[function(require,module,exports){
'use strict';

const partToMF = require('./partToMF');

module.exports = function partsToMF(parts) {
  var mf = [];
  for (let part of parts) {
    mf.push(partToMF(part));
  }
  return mf.join(' . ');
};

},{"./partToMF":20}],23:[function(require,module,exports){
'use strict';

const Kind = require('../Kind');
const Format = require('../Format');

const formatCharge = require('./formatCharge');

/**
 * Converts an array of mf elements to an array of formatting information
 * @param {Array<Object>} result of the parse method
 */

module.exports = function convertForDisplay(lines) {
  let results = [];
  let result = {};
  for (let line of lines) {
    switch (line.kind) {
      case Kind.MULTIPLIER:
        if (line.value !== 1) {
          result = {
            kind: Format.SUBSCRIPT,
            value: String(line.value)
          };
          results.push(result);
        }
        break;
      case Kind.MULTIPLIER_RANGE:
        result = {
          kind: Format.SUBSCRIPT,
          value: `${String(line.value.from)}-${line.value.to}`
        };
        results.push(result);
        break;
      case Kind.CHARGE:
        if (result.kind === Format.SUBSCRIPT) {
          result.kind = Format.SUPERIMPOSE;
          result.over = formatCharge(line.value);
          result.under = result.value;
          result.value = undefined;
        } else {
          result = {
            kind: Format.SUPERSCRIPT,
            value: formatCharge(line.value)
          };
          results.push(result);
        }

        break;

      case Kind.ISOTOPE:
        result = {
          kind: Format.SUPERSCRIPT,
          value: line.value.isotope
        };
        results.push(result);
        result = {
          kind: Format.TEXT,
          value: line.value.atom
        };
        results.push(result);
        break;

      case Kind.ISOTOPE_RATIO:
        if (result.kind === Format.TEXT) {
          result.value += line.value.atom;
        } else {
          result = {
            kind: Format.TEXT,
            value: line.value.atom
          };
          results.push(result);
        }
        result = {
          kind: Format.SUPERSCRIPT,
          value: `{${line.value.ratio.join(',')}}`
        };
        results.push(result);
        break;
      case Kind.SALT:
        if (result.kind === Format.TEXT) {
          result.value += '•';
        } else {
          result = {
            kind: Format.TEXT,
            value: ' • '
          };
          results.push(result);
        }
        break;
      default:
        if (result.kind === Format.TEXT) {
          result.value += line.value;
        } else {
          result = {
            kind: Format.TEXT,
            value: line.value
          };
          results.push(result);
        }
    }
  }
  return results;
};

},{"../Format":6,"../Kind":7,"./formatCharge":12}],24:[function(require,module,exports){
'use strict';

const Format = require('../Format');
const Style = require('../Style');

module.exports = function getHtml(lines) {
  var html = [];
  for (let line of lines) {
    switch (line.kind) {
      case Format.SUBSCRIPT:
        html.push(`<sub>${line.value}</sub>`);
        break;
      case Format.SUPERSCRIPT:
        html.push(`<sup>${line.value}</sup>`);
        break;
      case Format.SUPERIMPOSE:
        html.push(`<span style="${Style.SUPERIMPOSE}">`);
        html.push(`<sup style="${Style.SUPERIMPOSE_SUP_SUB}">${line.over}</sup>`);
        html.push(`<sub style="${Style.SUPERIMPOSE_SUP_SUB}">${line.under}</sub>`);
        html.push('</span>');
        break;
      default:
        html.push(line.value);
    }
  }
  return html.join('');
};

},{"../Format":6,"../Style":9}],25:[function(require,module,exports){
'use strict';

const groups = require('chemical-groups/src/groupsObject.js');
const atomSorter = require('atom-sorter');

const Kind = require('../Kind');

/**
 *
 * @param {*} lines
 * @param {object} options
 * @param {boolean} [true] options.expand - Should we expand the groups
 */

module.exports = function toParts(lines, options = {}) {
  const { expand: shouldExpandGroups = true } = options;
  let parts = [];
  let currentPart = createNewPart();
  let previousKind = Kind.BEGIN;
  parts.push(currentPart);
  for (let line of lines) {
    switch (line.kind) {
      case Kind.ATOM:
      case Kind.ISOTOPE_RATIO:
      case Kind.ISOTOPE:
      case Kind.CHARGE:
        currentPart.lines.push(Object.assign({}, line, { multiplier: 1 }));
        break;
      case Kind.OPENING_PARENTHESIS:
        openingParenthesis(currentPart);
        break;
      case Kind.CLOSING_PARENTHESIS:
        closingParenthesis(currentPart);
        break;
      case Kind.PRE_MULTIPLIER:
        preMultiplier(currentPart, line);
        break;
      case Kind.MULTIPLIER:
        postMultiplier(currentPart, line.value, previousKind);
        break;
      case Kind.SALT:
        globalPartMultiplier(currentPart);
        currentPart = createNewPart();
        parts.push(currentPart);
        break;
      case Kind.COMMENT: // we ignore comments to create the parts and canonized MF
        break;
      case Kind.TEXT:
        break;
      default:
        throw new Error(`Can not process mf having: ${line.kind}`);
    }
    previousKind = line.kind;
  }
  globalPartMultiplier(currentPart);
  if (shouldExpandGroups) expandGroups(parts);
  return combineAtomsIsotopesCharges(parts);
};

function createNewPart() {
  let currentMultiplier = { value: 1, fromIndex: 0 };
  return { lines: [], multipliers: [currentMultiplier], currentMultiplier };
}

function openingParenthesis(currentPart) {
  currentPart.currentMultiplier = {
    value: 1,
    fromIndex: currentPart.lines.length
  };
  currentPart.multipliers.push(currentPart.currentMultiplier);
}

function closingParenthesis(currentPart) {
  currentPart.currentMultiplier = currentPart.multipliers.pop();
  if (currentPart.currentMultiplier !== 1) {
    for (
      let i = currentPart.currentMultiplier.fromIndex;
      i < currentPart.lines.length;
      i++
    ) {
      currentPart.lines[i].multiplier *= currentPart.currentMultiplier.value;
    }
  }
}

function preMultiplier(currentPart, line) {
  currentPart.currentMultiplier.value *= line.value;
}

function globalPartMultiplier(currentPart) {
  for (
    let i = currentPart.multipliers[0].fromIndex;
    i < currentPart.lines.length;
    i++
  ) {
    currentPart.lines[i].multiplier *= currentPart.multipliers[0].value;
  }
}

function postMultiplier(currentPart, value, previousKind) {
  if (previousKind === Kind.CLOSING_PARENTHESIS) {
    // need to apply to everything till the previous parenthesis
    for (
      let i = currentPart.currentMultiplier.fromIndex;
      i < currentPart.lines.length;
      i++
    ) {
      currentPart.lines[i].multiplier *= value;
    }
  } else {
    // just applies to the previous element
    currentPart.lines[currentPart.lines.length - 1].multiplier *= value;
  }
}

function expandGroups(parts) {
  for (let part of parts) {
    let expanded = false;
    for (let i = 0; i < part.lines.length; i++) {
      let line = part.lines[i];
      if (line.kind === Kind.ATOM) {
        let group = groups[line.value];

        if (group) {
          expanded = true;
          for (let element of group.elements) {
            if (element.isotope) {
              part.lines.push({
                kind: 'isotope',
                value: { atom: element.symbol, isotope: element.isotope },
                multiplier: line.multiplier * element.number
              });
            } else {
              part.lines.push({
                kind: 'atom',
                value: element.symbol,
                multiplier: line.multiplier * element.number
              });
            }
          }
          part.lines[i] = undefined;
        }
      }
    }
    if (expanded) part.lines = part.lines.filter((a) => a);
  }
}

function combineAtomsIsotopesCharges(parts) {
  let results = [];
  for (let part of parts) {
    let result = [];
    results.push(result);
    calculateAndSortKeys(part);

    let currentKey = '';
    for (let key of part.keys) {
      if (key.key === Kind.CHARGE) {
        if (currentKey !== key.key) {
          result.push({
            kind: Kind.CHARGE,
            value: key.value.value * key.value.multiplier
          });
        } else {
          result[result.length - 1].value +=
            key.value.value * key.value.multiplier;
        }
      } else {
        if (currentKey !== key.key) {
          result.push(key.value);
        } else {
          result[result.length - 1].multiplier += key.value.multiplier;
        }
      }
      currentKey = key.key;
    }

    result.sort((a, b) => {
      if (a.kind === Kind.CHARGE) return 1;
      if (b.kind === Kind.CHARGE) return -1;

      let atomA = a.kind === Kind.ATOM ? a.value : a.value.atom;
      let atomB = b.kind === Kind.ATOM ? b.value : b.value.atom;
      if (atomA !== atomB) return atomSorter(atomA, atomB);
      // same atome but some isotopes ...
      if (a.kind === Kind.ATOM) return -1;
      if (b.kind === Kind.ATOM) return 1;
      if (a.kind === Kind.ISOTOPE) return -1;
      if (b.kind === Kind.ISOTOPE) return 1;
      if (a.kind === Kind.ISOTOPE_RATIO) return -1;
      if (b.kind === Kind.ISOTOPE_RATIO) return 1;
      return 0;
    });
  }
  return results;
}

function calculateAndSortKeys(part) {
  part.keys = [];
  for (var line of part.lines) {
    part.keys.push({ key: getKey(line), value: line });
  }
  part.keys.sort((a, b) => stringComparator(a.key, b.key));
}

function getKey(line) {
  let key = [line.kind];

  switch (line.kind) {
    case Kind.CHARGE:
      break;
    default:
      if (typeof line.value === 'string') {
        key.push(line.value);
      } else {
        for (let prop of Object.keys(line.value).sort()) {
          key.push(line.value[prop]);
        }
      }
  }
  return key.join('-');
}

function stringComparator(a, b) {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
}

},{"../Kind":7,"atom-sorter":1,"chemical-groups/src/groupsObject.js":5}]},{},[10])(10)
});
