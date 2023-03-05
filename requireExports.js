const testExportVariable = "Hello variable";

function fristExportFunction() {
    console.log("Hello function");
}

// exports.variableFristExport = testExportVariable;
// exports.functionFristExport = fristExportFunction;

export {testExportVariable, fristExportFunction};