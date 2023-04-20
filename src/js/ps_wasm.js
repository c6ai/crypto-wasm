const {
    wasm, requireWasmInitialized
} = require('./init_wasm');

function ensurePositiveInteger(num) {
    if (!Number.isInteger(num) || num < 0) {
        throw new Error(`Need a positive integer but found ${num} `);
    }
}

module.exports.DEFAULT_BLS12381_PRIVATE_KEY_LENGTH = 32;

module.exports.DEFAULT_BLS12381__PUBLIC_KEY_LENGTH = 48;

module.exports.DEFAULT_BLS12381__PUBLIC_KEY_LENGTH = 96;

module.exports.psGenerateSigningKey = (messageCount, seed) => {
    requireWasmInitialized();
    ensurePositiveInteger(messageCount);
    return wasm.psGenerateSigningKey(messageCount, seed);
};

module.exports.psGenerateSignatureParams = (messageCount, label) => {
    requireWasmInitialized();
    ensurePositiveInteger(messageCount);
    return wasm.psGenerateSignatureParams(messageCount, label);
};

module.exports.psIsSignatureParamsValid = (params) => {
    requireWasmInitialized();
    return wasm.psIsSignatureParamsValid(params);
};

module.exports.psSignatureParamsMaxSupportedMsgs = (params) => {
    requireWasmInitialized();
    return wasm.psSignatureParamsMaxSupportedMsgs(params);
};

module.exports.psGenerateSignatureParams = (messageCount, label) => {
    requireWasmInitialized();
    ensurePositiveInteger(messageCount);
    return wasm.psGenerateSignatureParams(messageCount, label);
};

module.exports.psIsSignatureParamsValid = (params) => {
    requireWasmInitialized();
    return wasm.psIsSignatureParamsValid(params);
};

module.exports.psSignatureParamsMaxSupportedMsgs = (params) => {
    requireWasmInitialized();
    return wasm.psSignatureParamsMaxSupportedMsgs(params);
};

module.exports.psSignatureParamsToBytes = (params) => {
    requireWasmInitialized();
    return wasm.psSignatureParamsToBytes(params);
};

module.exports.psSignatureParamsFromBytes = (bytes) => {
    requireWasmInitialized();
    return wasm.psSignatureParamsFromBytes(bytes);
};

module.exports.psSignatureParamsFromBytes = (bytes) => {
    requireWasmInitialized();
    return wasm.psSignatureParamsFromBytes(bytes);
};

module.exports.psGeneratePublicKey = (secretKey, params) => {
    requireWasmInitialized();
    return wasm.psGeneratePublicKey(secretKey, params);
};

module.exports.psIsPublicKeyValid = (publicKey) => {
    requireWasmInitialized();
    return wasm.psIsPublicKeyValid(publicKey);
};

module.exports.psEncodeMessageForSigning = (message) => {
    requireWasmInitialized();
    return wasm.psEncodeMessageForSigning(message);
};

module.exports.psEncodeMessagesForSigning = (messages, indicesToEncode) => {
    requireWasmInitialized();
    return wasm.psEncodeMessagesForSigning(messages, indicesToEncode);
}

module.exports.psGetBasesForCommitment = (params, indicesToCommit) => {
    requireWasmInitialized();
    return wasm.psGetBasesForCommitment(params, indicesToCommit);
};

module.exports.psSign = (
    messages,
    secretKey,
    params,
) => {
    requireWasmInitialized();
    return wasm.psSign(messages, secretKey, params);
};

module.exports.psVerify = (
    messages,
    signature,
    publicKey,
    params
) => {
    requireWasmInitialized();
    return wasm.psVerify(messages, signature, publicKey, params);
};

module.exports.psMessageCommitment = (
    messages,
    blinding,
    params,
    encodeMessages
) => {
    requireWasmInitialized();
    return wasm.psMessageCommitment(messages, blinding, params, encodeMessages);
};

module.exports.psBlindSign = (
    commitment,
    uncommittedMessages,
    secretKey,
    params,
    encodeMessages
) => {
    requireWasmInitialized();
    return wasm.psBlindSign(commitment, uncommittedMessages, secretKey, params, encodeMessages);
};

module.exports.psUnblindSignature = (
    blind_signature,
    indexed_blindings,
    pk,
) => {
    requireWasmInitialized();
    return wasm.psUnblindSignature(blind_signature, indexed_blindings, pk);
};

module.exports.psInitializeSignaturePoK = (
    signature,
    params,
    messages,
    blindings,
    revealedIndices,
    encodeMessages
) => {
    requireWasmInitialized();
    return wasm.psInitializeSignaturePoK(signature, params, messages, blindings, revealedIndices, encodeMessages);
};

module.exports.psInitializeMessagesPoK = (
    params,
    h,
    messages
) => {
    requireWasmInitialized();
    return wasm.psInitializeMessagesPoK(
        params,
        h,
        messages
    );
};

module.exports.psGenSignaturePoK = (
    protocol,
    challenge
) => {
    requireWasmInitialized();
    return wasm.psGenSignaturePoK(protocol, challenge);
};

module.exports.psGenMessagesPoK = (
    protocol,
    challenge
) => {
    requireWasmInitialized();
    return wasm.psGenMessagesPoK(protocol, challenge);
};


module.exports.psVerifySignaturePoK = (
    proof,
    revealedMessages,
    challenge,
    publicKey,
    params
) => {
    requireWasmInitialized();
    return wasm.psVerifySignaturePoK(proof, revealedMessages, challenge, publicKey, params);
};

module.exports.psVerifyMessagesPoK = (
    proof,
    revealedIndices,
    challenge,
    params,
    h
) => {
    requireWasmInitialized();
    return wasm.psVerifyMessagesPoK(proof, revealedIndices, challenge, params, h);
};

module.exports.psChallengeSignaturePoKContributionFromProtocol = (
    protocol,
    revealedMessages,
    params
) => {
    requireWasmInitialized();
    return wasm.psChallengeSignaturePoKContributionFromProtocol(protocol, revealedMessages, params);
};

module.exports.psChallengeMessagesPoKContributionFromProtocol = (
    protocol,
    params,
    h
) => {
    requireWasmInitialized();
    return wasm.psChallengeMessagesPoKContributionFromProtocol(protocol, params, h);
};

module.exports.psChallengeSignaturePoKContributionFromProof = (
    proof,
    publicKey,
    params
) => {
    requireWasmInitialized();
    return wasm.psChallengeSignaturePoKContributionFromProof(proof, publicKey, params);
};

module.exports.psChallengeMessagesPoKContributionFromProof = (
    proof,
    params,
    h
) => {
    requireWasmInitialized();
    return wasm.psChallengeMessagesPoKContributionFromProof(proof, params, h);
};

module.exports.psAdaptSignatureParamsForMsgCount = (params, generating_label, new_count) => {
    requireWasmInitialized();
    return wasm.psAdaptSignatureParamsForMsgCount(params, generating_label, new_count);
};