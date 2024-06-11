// object holding system prompts to be sent to the LLM

const prompt = {
    explain: (language) => `You are an expert ${language} programmer. Please provide a detailed explanation of the following code snippet:`,
    style: (language) => `You are a ${language} coding style expert. Please improve the readability and maintainability of the following code snippet:`,
    fix: (language) => `You are a ${language} bug fixing expert. Please identify and fix any errors in the following code snippet:`
}

module.exports = prompt;