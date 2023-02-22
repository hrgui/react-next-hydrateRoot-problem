# react-next-hydrateRoot-problem

To reproduce

0. Use Chrome or anything that can install Dark Reader.
1. `yarn`
1. `yarn start`
1. Install Dark Reader Chrome Extension: https://chrome.google.com/webstore/detail/dark-reader/eimadpbcbfnmbkopoojfekhnkhdbieeh?hl=en-US
1. Go to http://localhost:4000 in your browser.

The following errors occur:

```
react-dom.development.js:94 Warning: Expected server HTML to contain a matching <link> in <head>.
    at link
    at head
    at html
    at Html (http://localhost:4000/main.js:40629:21)
    at App (http://localhost:4000/main.js:40452:21)
printWarning @ react-dom.development.js:94
react-dom.development.js:14146 Uncaught Error: Hydration failed because the initial UI does not match what was rendered on the server.
    at throwOnHydrationMismatch (react-dom.development.js:14146:1)
    at tryToClaimNextHydratableInstance (react-dom.development.js:14196:1)
    at updateHostComponent (react-dom.development.js:22013:1)
    at beginWork (react-dom.development.js:23849:1)
    at HTMLUnknownElement.callCallback (react-dom.development.js:4442:1)
    at Object.invokeGuardedCallbackDev (react-dom.development.js:4491:1)
    at invokeGuardedCallback (react-dom.development.js:4555:1)
    at beginWork$1 (react-dom.development.js:31746:1)
    at performUnitOfWork (react-dom.development.js:30622:1)
    at workLoopSync (react-dom.development.js:30427:1)
react-dom.development.js:94 Warning: An error occurred during hydration. The server HTML was replaced with client content in <#document>.
printWarning @ react-dom.development.js:94
react-dom.development.js:14146 Uncaught Error: Hydration failed because the initial UI does not match what was rendered on the server.
    at throwOnHydrationMismatch (react-dom.development.js:14146:1)
    at tryToClaimNextHydratableInstance (react-dom.development.js:14196:1)
    at updateHostComponent (react-dom.development.js:22013:1)
    at beginWork (react-dom.development.js:23849:1)
    at beginWork$1 (react-dom.development.js:31724:1)
    at performUnitOfWork (react-dom.development.js:30622:1)
    at workLoopSync (react-dom.development.js:30427:1)
    at renderRootSync (react-dom.development.js:30392:1)
    at performConcurrentWorkOnRoot (react-dom.development.js:29538:1)
    at workLoop (scheduler.development.js:275:1)
react-dom.development.js:21960 Uncaught Error: There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering.
    at updateHostRoot (react-dom.development.js:21960:1)
    at beginWork (react-dom.development.js:23832:1)
    at beginWork$1 (react-dom.development.js:31724:1)
    at performUnitOfWork (react-dom.development.js:30622:1)
    at workLoopSync (react-dom.development.js:30427:1)
    at renderRootSync (react-dom.development.js:30392:1)
    at recoverFromConcurrentError (react-dom.development.js:29664:1)
    at performConcurrentWorkOnRoot (react-dom.development.js:29551:1)
    at workLoop (scheduler.development.js:275:1)
    at flushWork (scheduler.development.js:244:1)
```

The application renders, then when client takes over, it re-renders the entire DOM because Dark Reader made changes to the DOM.
