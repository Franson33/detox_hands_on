// @ts-check
/** @type {import("@serverless-guru/prettier-plugin-import-order").PrettierConfig} */
module.exports = {
  arrowParens: 'avoid',
  bracketSameLine: true,
  bracketSpacing: true,
  singleQuote: true,
  trailingComma: 'all',
  printWidth: 120,
  plugins: [require.resolve('@serverless-guru/prettier-plugin-import-order')],
  // Imports sorting options
  importOrder: [
    '^react(-native)?$', // React and react-native stuff goes at the top
    '', // use empty strings to separate groups with empty lines
    '<THIRD_PARTY_MODULES>', // Third party modules (this is a plugin keyword)
    '',
    '^(@assets|@components|@constants|@helpers|@hooks|@navigator|@screens|@styles|@theme|@types)(/.*)?$',
    '',
    '^../(.*)$', // Local imports in parent directories
    '^./(.*)$', // Local imports in current directory
  ],
  importOrderSeparation: false, // turn this on to see the sorting groups.
  importOrderSortIndividualImports: true,
  importOrderMergeDuplicateImports: true,
  importOrderTypeImportsToTop: false, // Set this to false if you want type imports to be sorted with the rest of the imports
  importOrderCaseInsensitive: true,
  importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy', 'classProperties'],
};
