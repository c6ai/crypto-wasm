// This ends up pointing to a CJS version of the ES module generated by wasm-pack
// which is done post-compile via rollup

const {
    wasm, requireWasmInitialized
} = require('./init_wasm');

const {
    ensurePositiveInteger
} = require('./common');

module.exports.DEFAULT_BLS12381_BBS_PLUS_PRIVATE_KEY_LENGTH = 32;

module.exports.DEFAULT_BLS12381_BBS_PLUS_G1_PUBLIC_KEY_LENGTH = 48;

module.exports.DEFAULT_BLS12381_BBS_PLUS_G2_PUBLIC_KEY_LENGTH = 96;

module.exports.DEFAULT_BLS12381_BBS_PLUS_SIGNATURE_LENGTH = 112;

module.exports.bbsPlusGenerateSigningKey = (seed) => {
    requireWasmInitialized();
    return wasm.bbsPlusGenerateSigningKey(seed);
};

module.exports.bbsPlusGenerateSignatureParamsG1 = (messageCount, label) => {
    requireWasmInitialized();
    ensurePositiveInteger(messageCount);
    return wasm.bbsPlusGenerateSignatureParamsG1(messageCount, label);
};

module.exports.bbsPlusIsSignatureParamsG1Valid = (params) => {
    requireWasmInitialized();
    return wasm.bbsPlusIsSignatureParamsG1Valid(params);
};

module.exports.bbsPlusSignatureParamsG1MaxSupportedMsgs = (params) => {
    requireWasmInitialized();
    return wasm.bbsPlusSignatureParamsG1MaxSupportedMsgs(params);
};

module.exports.bbsPlusGenerateSignatureParamsG2 = (messageCount, label) => {
    requireWasmInitialized();
    ensurePositiveInteger(messageCount);
    return wasm.bbsPlusGenerateSignatureParamsG2(messageCount, label);
};

module.exports.bbsPlusIsSignatureParamsG2Valid = (params) => {
    requireWasmInitialized();
    return wasm.bbsPlusIsSignatureParamsG2Valid(params);
};

module.exports.bbsPlusSignatureParamsG2MaxSupportedMsgs = (params) => {
    requireWasmInitialized();
    return wasm.bbsPlusSignatureParamsG2MaxSupportedMsgs(params);
};

module.exports.bbsPlusSignatureParamsG1ToBytes = (params) => {
    requireWasmInitialized();
    return wasm.bbsPlusSignatureParamsG1ToBytes(params);
};

module.exports.bbsPlusSignatureParamsG1FromBytes = (bytes) => {
    requireWasmInitialized();
    return wasm.bbsPlusSignatureParamsG1FromBytes(bytes);
};

module.exports.bbsPlusSignatureParamsG2ToBytes = (params) => {
    requireWasmInitialized();
    return wasm.bbsPlusSignatureParamsG2ToBytes(params);
};

module.exports.bbsPlusSignatureParamsG2FromBytes = (bytes) => {
    requireWasmInitialized();
    return wasm.bbsPlusSignatureParamsG2FromBytes(bytes);
};

module.exports.bbsPlusGeneratePublicKeyG1 = (secretKey, params) => {
    requireWasmInitialized();
    return wasm.bbsPlusGeneratePublicKeyG1(secretKey, params);
};

module.exports.bbsPlusIsPublicKeyG1Valid = (publicKey) => {
    requireWasmInitialized();
    return wasm.bbsPlusIsPublicKeyG1Valid(publicKey);
};

module.exports.bbsPlusGeneratePublicKeyG2 = (secretKey, params) => {
    requireWasmInitialized();
    return wasm.bbsPlusGeneratePublicKeyG2(secretKey, params);
};

module.exports.bbsPlusIsPublicKeyG2Valid = (publicKey) => {
    requireWasmInitialized();
    return wasm.bbsPlusIsPublicKeyG2Valid(publicKey);
};

module.exports.bbsPlusGenerateKeyPairG1 = (params, seed) => {
    requireWasmInitialized();
    return wasm.bbsPlusGenerateKeyPairG1(params, seed);
};

module.exports.bbsPlusGenerateKeyPairG2 = (params, seed) => {
    requireWasmInitialized();
    return wasm.bbsPlusGenerateKeyPairG2(params, seed);
};

module.exports.bbsPlusGetBasesForCommitmentG1 = (params, indicesToCommit) => {
    requireWasmInitialized();
    return wasm.bbsPlusGetBasesForCommitmentG1(params, indicesToCommit);
};

module.exports.bbsPlusGetBasesForCommitmentG2 = (params, indicesToCommit) => {
    requireWasmInitialized();
    return wasm.bbsPlusGetBasesForCommitmentG2(params, indicesToCommit);
};

module.exports.bbsPlusSignG1 = (
    messages,
    secretKey,
    params,
    encodeMessages
) => {
    requireWasmInitialized();
    return wasm.bbsPlusSignG1(messages, secretKey, params, encodeMessages);
};

module.exports.bbsPlusSignG1ConstantTime = (
    messages,
    secretKey,
    params,
    encodeMessages
) => {
    requireWasmInitialized();
    return wasm.bbsPlusSignG1ConstantTime(messages, secretKey, params, encodeMessages);
};

module.exports.bbsPlusSignG2 = (
    messages,
    secretKey,
    params,
    encodeMessages
) => {
    requireWasmInitialized();
    return wasm.bbsPlusSignG2(messages, secretKey, params, encodeMessages);
};

module.exports.bbsPlusSignG2ConstantTime = (
    messages,
    secretKey,
    params,
    encodeMessages
) => {
    requireWasmInitialized();
    return wasm.bbsPlusSignG2ConstantTime(messages, secretKey, params, encodeMessages);
};

module.exports.bbsPlusVerifyG1 = (
    messages,
    signature,
    publicKey,
    params,
    encodeMessages
) => {
    requireWasmInitialized();
    return wasm.bbsPlusVerifyG1(messages, signature, publicKey, params, encodeMessages);
};

module.exports.bbsPlusVerifyG1ConstantTime = (
    messages,
    signature,
    publicKey,
    params,
    encodeMessages
) => {
    requireWasmInitialized();
    return wasm.bbsPlusVerifyG1ConstantTime(messages, signature, publicKey, params, encodeMessages);
};

module.exports.bbsPlusVerifyG2 = (
    messages,
    signature,
    publicKey,
    params,
    encodeMessages
) => {
    requireWasmInitialized();
    return wasm.bbsPlusVerifyG2(messages, signature, publicKey, params, encodeMessages);
};

module.exports.bbsPlusVerifyG2ConstantTime = (
    messages,
    signature,
    publicKey,
    params,
    encodeMessages
) => {
    requireWasmInitialized();
    return wasm.bbsPlusVerifyG2ConstantTime(messages, signature, publicKey, params, encodeMessages);
};

module.exports.bbsPlusCommitMsgsInG1 = (
    messages,
    blinding,
    params,
    encodeMessages
) => {
    requireWasmInitialized();
    return wasm.bbsPlusCommitMsgsInG1(messages, blinding, params, encodeMessages);
};

module.exports.bbsPlusCommitMsgsInG1ConstantTime = (
    messages,
    blinding,
    params,
    encodeMessages
) => {
    requireWasmInitialized();
    return wasm.bbsPlusCommitMsgsInG1ConstantTime(messages, blinding, params, encodeMessages);
};

module.exports.bbsPlusCommitMsgsInG2 = (
    messages,
    blinding,
    params,
    encodeMessages
) => {
    requireWasmInitialized();
    return wasm.bbsPlusCommitMsgsInG2(messages, blinding, params, encodeMessages);
};

module.exports.bbsPlusCommitMsgsInG2ConstantTime = (
    messages,
    blinding,
    params,
    encodeMessages
) => {
    requireWasmInitialized();
    return wasm.bbsPlusCommitMsgsInG2ConstantTime(messages, blinding, params, encodeMessages);
};

module.exports.bbsPlusBlindSignG1 = (
    commitment,
    uncommittedMessages,
    secretKey,
    params,
    encodeMessages
) => {
    requireWasmInitialized();
    return wasm.bbsPlusBlindSignG1(commitment, uncommittedMessages, secretKey, params, encodeMessages);
};

module.exports.bbsPlusBlindSignG1ConstantTime = (
    commitment,
    uncommittedMessages,
    secretKey,
    params,
    encodeMessages
) => {
    requireWasmInitialized();
    return wasm.bbsPlusBlindSignG1ConstantTime(commitment, uncommittedMessages, secretKey, params, encodeMessages);
};

module.exports.bbsPlusBlindSignG2 = (
    commitment,
    uncommittedMessages,
    secretKey,
    params,
    encodeMessages
) => {
    requireWasmInitialized();
    return wasm.bbsPlusBlindSignG2(commitment, uncommittedMessages, secretKey, params, encodeMessages);
};

module.exports.bbsPlusBlindSignG2ConstantTime = (
    commitment,
    uncommittedMessages,
    secretKey,
    params,
    encodeMessages
) => {
    requireWasmInitialized();
    return wasm.bbsPlusBlindSignG2ConstantTime(commitment, uncommittedMessages, secretKey, params, encodeMessages);
};

module.exports.bbsPlusUnblindSigG1 = (
    signature,
    blinding,
) => {
    requireWasmInitialized();
    return wasm.bbsPlusUnblindSigG1(signature, blinding);
};

module.exports.bbsPlusUnblindSigG2 = (
    signature,
    blinding,
) => {
    requireWasmInitialized();
    return wasm.bbsPlusUnblindSigG2(signature, blinding);
};

module.exports.bbsPlusInitializeProofOfKnowledgeOfSignature = (
    signature,
    params,
    messages,
    blindings,
    revealedIndices,
    encodeMessages
) => {
    requireWasmInitialized();
    return wasm.bbsPlusInitializeProofOfKnowledgeOfSignature(signature, params, messages, blindings, revealedIndices, encodeMessages);
};

module.exports.bbsPlusInitializeProofOfKnowledgeOfSignatureConstantTime = (
    signature,
    params,
    messages,
    blindings,
    revealedIndices,
    encodeMessages
) => {
    requireWasmInitialized();
    return wasm.bbsPlusInitializeProofOfKnowledgeOfSignatureConstantTime(signature, params, messages, blindings, revealedIndices, encodeMessages);
};

module.exports.bbsPlusGenProofOfKnowledgeOfSignature = (
    protocol,
    challenge
) => {
    requireWasmInitialized();
    return wasm.bbsPlusGenProofOfKnowledgeOfSignature(protocol, challenge);
};

module.exports.bbsPlusVerifyProofOfKnowledgeOfSignature = (
    proof,
    revealedMessages,
    challenge,
    publicKey,
    params,
    encodeMessages
) => {
    requireWasmInitialized();
    return wasm.bbsPlusVerifyProofOfKnowledgeOfSignature(proof, revealedMessages, challenge, publicKey, params, encodeMessages);
};

module.exports.bbsPlusVerifyProofOfKnowledgeOfSignatureConstantTime = (
    proof,
    revealedMessages,
    challenge,
    publicKey,
    params,
    encodeMessages
) => {
    requireWasmInitialized();
    return wasm.bbsPlusVerifyProofOfKnowledgeOfSignatureConstantTime(proof, revealedMessages, challenge, publicKey, params, encodeMessages);
};

module.exports.bbsPlusChallengeContributionFromProtocol = (
    protocol,
    revealedMessages,
    params,
    encodeMessages
) => {
    requireWasmInitialized();
    return wasm.bbsPlusChallengeContributionFromProtocol(protocol, revealedMessages, params, encodeMessages);
};

module.exports.bbsPlusChallengeContributionFromProtocolConstantTime = (
    protocol,
    revealedMessages,
    params,
    encodeMessages
) => {
    requireWasmInitialized();
    return wasm.bbsPlusChallengeContributionFromProtocolConstantTime(protocol, revealedMessages, params, encodeMessages);
};

module.exports.bbsPlusChallengeContributionFromProof = (
    proof,
    revealedMessages,
    params,
    encodeMessages
) => {
    requireWasmInitialized();
    return wasm.bbsPlusChallengeContributionFromProof(proof, revealedMessages, params, encodeMessages);
};

module.exports.bbsPlusChallengeContributionFromProofConstantTime = (
    proof,
    revealedMessages,
    params,
    encodeMessages
) => {
    requireWasmInitialized();
    return wasm.bbsPlusChallengeContributionFromProofConstantTime(proof, revealedMessages, params, encodeMessages);
};

module.exports.bbsPlusAdaptSigParamsG1ForMsgCount = (params, generating_label, new_count) => {
    requireWasmInitialized();
    return wasm.bbsPlusAdaptSigParamsG1ForMsgCount(params, generating_label, new_count);
};

module.exports.bbsPlusAdaptSigParamsG2ForMsgCount = (params, generating_label, new_count) => {
    requireWasmInitialized();
    return wasm.bbsPlusAdaptSigParamsG2ForMsgCount(params, generating_label, new_count);
};
