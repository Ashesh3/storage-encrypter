const path = require('path');
var JavaScriptObfuscator = require('webpack-obfuscator');
module.exports = {
    target: "node",
    entry: {
        app: ["./index.js"]
    },
    mode: 'production',
    output: {
        path: path.resolve(__dirname, "./build"),
        filename: "compiled.js"
    },
    plugins: [
        new JavaScriptObfuscator({
            compact: true,
            controlFlowFlattening: true,
            controlFlowFlatteningThreshold: 1,
            deadCodeInjection: true,
            deadCodeInjectionThreshold: 1,
            debugProtection: true,
            debugProtectionInterval: true,
            disableConsoleOutput: false,
            domainLock: [],
            identifierNamesGenerator: 'hexadecimal',
            identifiersDictionary: [],
            identifiersPrefix: '',
            inputFileName: '',
            log: false,
            renameGlobals: false,
            reservedNames: [],
            reservedStrings: [],
            rotateStringArray: true,
            seed: 0,
            selfDefending: true,
            shuffleStringArray: true,
            sourceMap: false,
            sourceMapBaseUrl: '',
            sourceMapFileName: '',
            sourceMapMode: 'separate',
            splitStrings: false,
            splitStringsChunkLength: 10,
            stringArray: true,
            stringArrayEncoding: 'rc4',
            stringArrayThreshold: 1,
            target: 'node',
            transformObjectKeys: false,
            unicodeEscapeSequence: false
        })
    ],
};