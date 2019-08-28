"use strict";

define(["module", "./libs/MolecularFormula"], function (module, _MolecularFormula) {
  var _MolecularFormula2 = _interopRequireDefault(_MolecularFormula);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function explodeSequences(sample) {
    var sequencePeptidic = getFirstPeptide(sample);

    if (sequencePeptidic && sequencePeptidic.sequence) {
      sequencePeptidic.sequence = _MolecularFormula2["default"].Peptide.sequenceToMF(String(sequencePeptidic.sequence));
    }

    var sequenceNucleic = getFirstNucleotide(sample);

    if (sequenceNucleic && sequenceNucleic.sequence) {
      sequenceNucleic.sequence = _MolecularFormula2["default"].Nucleotide.sequenceToMF(String(sequenceNucleic.sequence));
    }

    sample.triggerChange();
  }

  function calculateMFFromSequence(sample) {
    var sequencePeptidic = getFirstPeptide(sample);

    if (sequencePeptidic) {
      var sequence = _MolecularFormula2["default"].Peptide.sequenceToMF(String(sequencePeptidic.sequence));

      sample.setChildSync(['$content', 'general', 'mf'], sequence);
    }

    var sequenceNucleic = getFirstNucleotide(sample);

    if (sequenceNucleic) {
      sequenceNucleic = JSON.parse(JSON.stringify(sequenceNucleic));
    } // get rid of datatypes


    if (sequenceNucleic && sequenceNucleic.sequence) {
      var _sequence = _MolecularFormula2["default"].Nucleotide.sequenceToMF(sequenceNucleic.sequence, {
        kind: sequenceNucleic.moleculeType,
        circular: sequenceNucleic.circular,
        fivePrime: sequenceNucleic.fivePrime
      });

      sample.setChildSync(['$content', 'general', 'mf'], _sequence);
    }
  }

  function getFirstPeptide(sample) {
    return sample.getChildSync(['$content', 'biology', 'peptidic', '0', 'seq', '0']);
  }

  function getFirstNucleotide(sample) {
    return sample.getChildSync(['$content', 'biology', 'nucleic', '0', 'seq', '0']);
  }

  module.exports = {
    calculateMFFromSequence: calculateMFFromSequence,
    explodeSequences: explodeSequences,
    getFirstNucleotide: getFirstNucleotide,
    getFirstPeptide: getFirstPeptide
  };
});