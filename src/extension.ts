import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	const disposable = vscode.commands.registerCommand('sample-hello.helloWorld', () => {
		vscode.window.showInformationMessage('Hello from Sample Hello extension!');
	});
	context.subscriptions.push(disposable);
}

export function deactivate() {}


