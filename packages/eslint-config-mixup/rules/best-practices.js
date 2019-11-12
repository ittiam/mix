module.exports = {
  rules: {
    //Best Practices
    'accessor-pairs': [2, { getWithoutSet: true }],
    'block-scoped-var': 2,
    complexity: [1, 6],
    'consistent-return': 2,
    curly: 2,
    'default-case': 2,
    'dot-location': [2, 'property'],
    'dot-notation': [2, { allowKeywords: false }],
    eqeqeq: [2, 'always'],
    'guard-for-in': 2,
    'no-alert': 0,
    'no-caller': 2,
    'no-case-declarations': 2,
    'no-div-regex': 2,
    'no-else-return': [2, { allowElseIf: false }],
    'no-empty-pattern': 2,
    'no-eq-null': 2,
    'no-eval': 2,
    'no-extend-native': 2,
    'no-extra-bind': 2,
    'no-fallthrough': 2,
    'no-floating-decimal': 2,
    'no-implicit-coercion': [2, { boolean: false }],
    'no-implied-eval': 2,
    'no-iterator': 2,
    'no-labels': 2,
    'no-lone-blocks': 2,
    'no-loop-func': 2,
    'no-multi-assign': 0,
    'no-multi-spaces': 2,
    'no-multi-str': 2,
    'no-native-reassign': 2,
    'no-new-func': 2,
    'no-new-wrappers': 2,
    'no-new': 2,
    'no-octal-escape': 2,
    'no-octal': 2,
    'no-param-reassign': 0,
    'no-process-env': 2,
    'no-proto': 2,
    'no-redeclare': 2,
    'no-restricted-properties': 0,
    'no-return-assign': [2, 'always'],
    'no-script-url': 2,
    'no-self-compare': 2,
    'no-self-assign': [2, { props: true }],
    'no-sequences': 2,
    'no-throw-literal': 2,
    'no-unsafe-finally': 2,
    'no-unused-expressions': 2,
    'no-useless-call': 2,
    'no-useless-concat': 2,
    'no-useless-escape': 2,
    'no-useless-return': 2,
    'no-useless-catch': 2,
    'no-void': 2,
    'no-warning-comments': 1,
    'no-with': 2,
    radix: 2,
    'vars-on-top': 2,
    'wrap-iife': [2, 'inside', { functionPrototypeMethods: true }],
    yoda: 2
  }
};
