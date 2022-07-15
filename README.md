Issue:
### Describe the bug

When using fragments in queries which use fragements in multiple positions, the fragments are beeing repeated in the string concatenation, so that most server will complain about it `Error: There can be only one fragment named "addressFields".`

### Your Example Website or App

https://github.com/bastiion/graphql-codegen-duplicate-fragments-issue

### Steps to Reproduce the Bug or Issue

1. formulate a query that uses same fragments within two other fragments
2. run codegen


### Expected behavior

fragments must be deduplicated

### Screenshots or Videos

_No response_

### Platform

-    "@graphql-codegen/cli": "2.3.0",
-    "@graphql-codegen/fragment-matcher": "~3.3.0",
-    "@graphql-codegen/introspection": "~2.2.0",
-    "@graphql-codegen/typescript": "~2.7.1",
-    "@graphql-codegen/typescript-document-nodes": "~2.3.1",
-    "@graphql-codegen/typescript-operations": "~2.5.1",
-    "@graphql-codegen/typescript-react-query": "~3.6.1",


### Codegen Config File

```yaml
overwrite: true
schema:
  - http://localhost:9002/graphql
documents: 'graphql/**/*.graphql'
generates:
  graphql/generated/index.ts:
    plugins:
      - 'typescript'
      - 'typescript-operations'
      - 'typescript-react-query'
    config:
      pureMagicComment: true
      fetcher:
        func: ../fetcher#useFetchData
        isReactHook: true
```

### Additional context

example query:

```graphql
fragment addressFields on Address {
  address
  city
}

fragment personFields on Person {
  name
  address {
    ...addressFields
  }
}

query company {
  company {
    name
    address {
      ...addressFields
    }
    employees {
      ...personFields
    }
  }
}
```

will produce:

```ts
export const AddressFieldsFragmentDoc = /*#__PURE__*/ `
    fragment addressFields on Address {
  address
  city
}
    `;
export const PersonFieldsFragmentDoc = /*#__PURE__*/ `
    fragment personFields on Person {
  name
  address {
    ...addressFields
  }
}
    ${AddressFieldsFragmentDoc}`;
export const CompanyDocument = /*#__PURE__*/ `
    query company {
  company {
    name
    address {
      ...addressFields
    }
    employees {
      ...personFields
    }
  }
}
    ${AddressFieldsFragmentDoc}
${PersonFieldsFragmentDoc}`;
```
