const {
    wasm, initialize
} = require('./init_wasm');

const {
    throwErrorOnRejectedPromise
} = require('./util');

// This ends up pointing to a CJS version of the ES module generated by wasm-pack
// which is done post-compile via rollup
/*const {
    generateRandomFieldElement, generateRandomG1Element, generateRandomG2Element,
    generateFieldElementFromBytes, fieldElementAsBytes, generateChallengeFromBytes,
    generateFieldElementFromNumber
} = require("./index");*/

module.exports.generateRandomFieldElement = async (seed) => {
    await initialize();
    return throwErrorOnRejectedPromise(
        wasm.generateRandomFieldElement(seed)
    );
};

module.exports.generateRandomG1Element = async () => {
    await initialize();
    return throwErrorOnRejectedPromise(
        wasm.generateRandomG1Element()
    );
};

module.exports.generateRandomG2Element = async () => {
    await initialize();
    return throwErrorOnRejectedPromise(
        wasm.generateRandomG2Element()
    );
};

module.exports.generateFieldElementFromBytes = async (bytes) => {
    await initialize();
    return throwErrorOnRejectedPromise(
        wasm.generateFieldElementFromBytes(bytes)
    );
};

module.exports.fieldElementAsBytes = async (element) => {
    await initialize();
    return throwErrorOnRejectedPromise(
        wasm.fieldElementAsBytes(element)
    );
};

module.exports.generateChallengeFromBytes = async (bytes) => {
    await initialize();
    return throwErrorOnRejectedPromise(wasm.generateChallengeFromBytes(bytes));
};

module.exports.generateFieldElementFromNumber = async (num) => {
    await initialize();
    return throwErrorOnRejectedPromise(
        wasm.generateFieldElementFromNumber(num)
    );
};
