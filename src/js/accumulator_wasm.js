// This ends up pointing to a CJS version of the ES module generated by wasm-pack
// which is done post-compile via rollup

const {
    wasm, requireWasmInitialized
} = require('./init_wasm');

module.exports.generateAccumulatorSecretKey = (seed) => {
    requireWasmInitialized();
    return wasm.generateAccumulatorSecretKey(seed);
};

module.exports.generateAccumulatorParams = (label) => {
    requireWasmInitialized();
    return wasm.generateAccumulatorParams(label)
};

module.exports.isAccumulatorParamsValid = (params) => {
    requireWasmInitialized();
    return wasm.isAccumulatorParamsValid(params)
};

module.exports.generateAccumulatorParamsForKeyedVerification = (label) => {
    requireWasmInitialized();
    return wasm.generateAccumulatorParamsForKeyedVerification(label)
};

module.exports.generateAccumulatorPublicKey = (secretKey, params) => {
    requireWasmInitialized();
    return wasm.generateAccumulatorPublicKey(secretKey, params)
};

module.exports.isAccumulatorPublicKeyValid = (publicKey) => {
    requireWasmInitialized();
    return wasm.isAccumulatorPublicKeyValid(publicKey)
};

module.exports.generateAccumulatorKeyPair = (params, seed) => {
    requireWasmInitialized();
    return wasm.generateAccumulatorKeyPair(params, seed)
};

module.exports.generateAccumulatorPublicKeyForKeyedVerification = (secretKey, params) => {
    requireWasmInitialized();
    return wasm.generateAccumulatorPublicKeyForKeyedVerification(secretKey, params)
};

module.exports.accumulatorGetElementFromBytes = (bytes) => {
    requireWasmInitialized();
    return wasm.accumulatorGetElementFromBytes(bytes)
};

module.exports.positiveAccumulatorInitialize = (params) => {
    requireWasmInitialized();
    return wasm.positiveAccumulatorInitialize(params)
};

module.exports.positiveAccumulatorGetAccumulated = (accumulator) => {
    requireWasmInitialized();
    return wasm.positiveAccumulatorGetAccumulated(accumulator)
};

module.exports.positiveAccumulatorAdd = (accumulator, element, secretKey) => {
    requireWasmInitialized();
    return wasm.positiveAccumulatorAdd(accumulator, element, secretKey)
};

module.exports.positiveAccumulatorRemove = (accumulator, element, secretKey) => {
    requireWasmInitialized();
    return wasm.positiveAccumulatorRemove(accumulator, element, secretKey)
};

module.exports.positiveAccumulatorMembershipWitness = (accumulator, element, secretKey) => {
    requireWasmInitialized();
    return wasm.positiveAccumulatorMembershipWitness(accumulator, element, secretKey)
};

module.exports.positiveAccumulatorVerifyMembership = (accumulator, element, witness, publicKey, params) => {
    requireWasmInitialized();
    return wasm.positiveAccumulatorVerifyMembership(accumulator, element, witness, publicKey, params)
};

module.exports.positiveAccumulatorAddBatch = (accumulator, elements, secretKey) => {
    requireWasmInitialized();
    return wasm.positiveAccumulatorAddBatch(accumulator, elements, secretKey)
};

module.exports.positiveAccumulatorRemoveBatch = (accumulator, elements, secretKey) => {
    requireWasmInitialized();
    return wasm.positiveAccumulatorRemoveBatch(accumulator, elements, secretKey)
};

module.exports.positiveAccumulatorBatchUpdates = (accumulator, additions, removals, secretKey) => {
    requireWasmInitialized();
    return wasm.positiveAccumulatorBatchUpdates(accumulator, additions, removals, secretKey)
};

module.exports.positiveAccumulatorMembershipWitnessesForBatch = (accumulator, elements, secretKey) => {
    requireWasmInitialized();
    return wasm.positiveAccumulatorMembershipWitnessesForBatch(accumulator, elements, secretKey)
};

module.exports.universalAccumulatorFixedInitialElements = () => {
    requireWasmInitialized();
    return wasm.universalAccumulatorFixedInitialElements()
};

module.exports.universalAccumulatorComputeInitialFv = (initialElements, secretKey) => {
    requireWasmInitialized();
    return wasm.universalAccumulatorComputeInitialFv(initialElements, secretKey)
};

module.exports.universalAccumulatorCombineMultipleInitialFv = (initialFVs) => {
    requireWasmInitialized();
    return wasm.universalAccumulatorCombineMultipleInitialFv(initialFVs)
};

module.exports.universalAccumulatorInitialiseGivenFv = (fV, params, maxSize) => {
    requireWasmInitialized();
    return wasm.universalAccumulatorInitialiseGivenFv(fV, params, maxSize)
};

module.exports.universalAccumulatorGetAccumulated = (accumulator) => {
    requireWasmInitialized();
    return wasm.universalAccumulatorGetAccumulated(accumulator)
};

module.exports.universalAccumulatorAdd = (accumulator, element, secretKey) => {
    requireWasmInitialized();
    return wasm.universalAccumulatorAdd(accumulator, element, secretKey)
};

module.exports.universalAccumulatorRemove = (accumulator, element, secretKey) => {
    requireWasmInitialized();
    return wasm.universalAccumulatorRemove(accumulator, element, secretKey)
};

module.exports.universalAccumulatorMembershipWitness = (accumulator, element, secretKey) => {
    requireWasmInitialized();
    return wasm.universalAccumulatorMembershipWitness(accumulator, element, secretKey)
};

module.exports.universalAccumulatorVerifyMembership = (accumulator, element, witness, publicKey, params) => {
    requireWasmInitialized();
    return wasm.universalAccumulatorVerifyMembership(accumulator, element, witness, publicKey, params)
};

module.exports.universalAccumulatorComputeD = (nonMember, members) => {
    requireWasmInitialized();
    return wasm.universalAccumulatorComputeD(nonMember, members)
};

module.exports.universalAccumulatorCombineMultipleD = (d) => {
    requireWasmInitialized();
    return wasm.universalAccumulatorCombineMultipleD(d)
};

module.exports.universalAccumulatorNonMembershipWitness = (accumulator, d, nonMember, secretKey, params) => {
    requireWasmInitialized();
    return wasm.universalAccumulatorNonMembershipWitness(accumulator, d, nonMember, secretKey, params)
};

module.exports.universalAccumulatorVerifyNonMembership = (accumulator, element, witness, publicKey, params) => {
    requireWasmInitialized();
    return wasm.universalAccumulatorVerifyNonMembership(accumulator, element, witness, publicKey, params)
};

module.exports.universalAccumulatorAddBatch = (accumulator, elements, secretKey) => {
    requireWasmInitialized();
    return wasm.universalAccumulatorAddBatch(accumulator, elements, secretKey)
};

module.exports.universalAccumulatorRemoveBatch = (accumulator, elements, secretKey) => {
    requireWasmInitialized();
    return wasm.universalAccumulatorRemoveBatch(accumulator, elements, secretKey)
};

module.exports.universalAccumulatorBatchUpdates = (accumulator, additions, removals, secretKey) => {
    requireWasmInitialized();
    return wasm.universalAccumulatorBatchUpdates(accumulator, additions, removals, secretKey)
};

module.exports.universalAccumulatorMembershipWitnessesForBatch = (accumulator, elements, secretKey) => {
    requireWasmInitialized();
    return wasm.universalAccumulatorMembershipWitnessesForBatch(accumulator, elements, secretKey)
};

module.exports.universalAccumulatorComputeDForBatch = (nonMembers, members) => {
    requireWasmInitialized();
    return wasm.universalAccumulatorComputeDForBatch(nonMembers, members)
};

module.exports.universalAccumulatorCombineMultipleDForBatch = (d) => {
    requireWasmInitialized();
    return wasm.universalAccumulatorCombineMultipleDForBatch(d)
};

module.exports.universalAccumulatorNonMembershipWitnessesForBatch = (accumulator, d, nonMembers, secretKey, params) => {
    requireWasmInitialized();
    return wasm.universalAccumulatorNonMembershipWitnessesForBatch(accumulator, d, nonMembers, secretKey, params)
};

module.exports.updateMembershipWitnessPostAdd = (witness, member, addition, oldAccumulated) => {
    requireWasmInitialized();
    return wasm.updateMembershipWitnessPostAdd(witness, member, addition, oldAccumulated)
};

module.exports.updateMembershipWitnessPostRemove = (witness, member, removal, oldAccumulated) => {
    requireWasmInitialized();
    return wasm.updateMembershipWitnessPostRemove(witness, member, removal, oldAccumulated)
};

module.exports.updateNonMembershipWitnessPostAdd = (witness, member, addition, oldAccumulated) => {
    requireWasmInitialized();
    return wasm.updateNonMembershipWitnessPostAdd(witness, member, addition, oldAccumulated)
};

module.exports.updateNonMembershipWitnessPostRemove = (witness, member, removal, oldAccumulated) => {
    requireWasmInitialized();
    return wasm.updateNonMembershipWitnessPostRemove(witness, member, removal, oldAccumulated)
};

module.exports.updateMembershipWitnessesPostBatchUpdates = (witnesses, members, additions, removals, oldAccumulated, secretKey) => {
    requireWasmInitialized();
    return wasm.updateMembershipWitnessesPostBatchUpdates(witnesses, members, additions, removals, oldAccumulated, secretKey)
};

module.exports.updateNonMembershipWitnessesPostBatchUpdates = (witnesses, nonMembers, additions, removals, oldAccumulated, secretKey) => {
    requireWasmInitialized();
    return wasm.updateNonMembershipWitnessesPostBatchUpdates(witnesses, nonMembers, additions, removals, oldAccumulated, secretKey)
};

module.exports.publicInfoForWitnessUpdate = (oldAccumulated, additions, removals, secretKey) => {
    requireWasmInitialized();
    return wasm.publicInfoForWitnessUpdate(oldAccumulated, additions, removals, secretKey)
};

module.exports.updateMembershipWitnessUsingPublicInfoAfterBatchUpdate = (witness, member, additions, removals, publicInfo) => {
    requireWasmInitialized();
    return wasm.updateMembershipWitnessUsingPublicInfoAfterBatchUpdate(witness, member, additions, removals, publicInfo)
};

module.exports.updateNonMembershipWitnessUsingPublicInfoAfterBatchUpdate = (witness, nonMember, additions, removals, publicInfo) => {
    requireWasmInitialized();
    return wasm.updateNonMembershipWitnessUsingPublicInfoAfterBatchUpdate(witness, nonMember, additions, removals, publicInfo)
};

module.exports.updateMembershipWitnessUsingPublicInfoAfterMultipleBatchUpdates = (witness, member, additions, removals, publicInfo) => {
    requireWasmInitialized();
    return wasm.updateMembershipWitnessUsingPublicInfoAfterMultipleBatchUpdates(witness, member, additions, removals, publicInfo)
};

module.exports.updateNonMembershipWitnessUsingPublicInfoAfterMultipleBatchUpdates = (witness, nonMember, additions, removals, publicInfo) => {
    requireWasmInitialized();
    return wasm.updateNonMembershipWitnessUsingPublicInfoAfterMultipleBatchUpdates(witness, nonMember, additions, removals, publicInfo)
};

module.exports.generateMembershipProvingKey = (label) => {
    requireWasmInitialized();
    return wasm.generateMembershipProvingKey(label)
};

module.exports.generateNonMembershipProvingKey = (label) => {
    requireWasmInitialized();
    return wasm.generateNonMembershipProvingKey(label)
};

module.exports.accumulatorDeriveMembershipProvingKeyFromNonMembershipKey = (key) => {
    requireWasmInitialized();
    return wasm.accumulatorDeriveMembershipProvingKeyFromNonMembershipKey(key)
};

module.exports.accumulatorInitializeMembershipProof = (member, blinding, witness, publicKey, params, provingKey) => {
    requireWasmInitialized();
    return wasm.accumulatorInitializeMembershipProof(member, blinding, witness, publicKey, params, provingKey)
};

module.exports.accumulatorGenMembershipProof = (protocol, challenge) => {
    requireWasmInitialized();
    return wasm.accumulatorGenMembershipProof(protocol, challenge)
};

module.exports.accumulatorVerifyMembershipProof = (proof, accumulated, challenge, publicKey, params, provingKey) => {
    requireWasmInitialized();
    return wasm.accumulatorVerifyMembershipProof(proof, accumulated, challenge, publicKey, params, provingKey)
};

module.exports.accumulatorInitializeNonMembershipProof = (nonMember, blinding, witness, publicKey, params, provingKey) => {
    requireWasmInitialized();
    return wasm.accumulatorInitializeNonMembershipProof(nonMember, blinding, witness, publicKey, params, provingKey)
};

module.exports.accumulatorGenNonMembershipProof = (protocol, challenge) => {
    requireWasmInitialized();
    return wasm.accumulatorGenNonMembershipProof(protocol, challenge)
};

module.exports.accumulatorVerifyNonMembershipProof = (proof, accumulated, challenge, publicKey, params, provingKey) => {
    requireWasmInitialized();
    return wasm.accumulatorVerifyNonMembershipProof(proof, accumulated, challenge, publicKey, params, provingKey)
};

module.exports.accumulatorChallengeContributionFromMembershipProtocol = (protocol, accumulated, publicKey, params, provingKey) => {
    requireWasmInitialized();
    return wasm.accumulatorChallengeContributionFromMembershipProtocol(protocol, accumulated, publicKey, params, provingKey)
};

module.exports.accumulatorChallengeContributionFromMembershipProof = (proof, accumulated, publicKey, params, provingKey) => {
    requireWasmInitialized();
    return wasm.accumulatorChallengeContributionFromMembershipProof(proof, accumulated, publicKey, params, provingKey)
};

module.exports.accumulatorChallengeContributionFromNonMembershipProtocol = (protocol, accumulated, publicKey, params, provingKey) => {
    requireWasmInitialized();
    return wasm.accumulatorChallengeContributionFromNonMembershipProtocol(protocol, accumulated, publicKey, params, provingKey)
};

module.exports.accumulatorChallengeContributionFromNonMembershipProof = (proof, accumulated, publicKey, params, provingKey) => {
    requireWasmInitialized();
    return wasm.accumulatorChallengeContributionFromNonMembershipProof(proof, accumulated, publicKey, params, provingKey)
};
