# Test Gowtham App VS Code Extension

A minimal "Hello World" extension to test VS Code packaging and publishing with a new app identifier.

## Features

- Command: "Test Gowtham App: Hello World" (`sample-hello.helloWorld`) shows a notification.

## Development

1. Install dependencies:
   ```bash
   npm install
   ```
2. Build:
   ```bash
   npm run compile
   ```
3. Launch Extension:
   - Press F5 in VS Code to debug/run the extension.

## Packaging

Create a `.vsix` package:
```bash
npm run package
```

## Publishing (Marketplace)

1. Set `publisher` in `package.json` to your publisher ID.
2. Login with `vsce`:
   ```bash
   npx vsce login <your-publisher-id>
   ```
3. Publish:
   ```bash
   npm run publish
   ```


