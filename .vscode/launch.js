{
	"version": "0.2.0",
	"configurations": [
		{
			"name": "Launch",
			"type": "node",
			"request": "launch",
			"program": "${workspaceRoot}/prod/index.js",
			"stopOnEntry": false,
			"args": [],
			"cwd": "${workspaceRoot}",
			"preLaunchTask": null,
			"runtimeExecutable": null,
			"runtimeArgs": [
				"--nolazy"
			],
			"env": {
				"NODE_ENV": "development"
			},
			"externalConsole": false,
			"sourceMaps": false,
			"outDir": null
		},
		{
			"name": "Attach",
			"type": "node",
			"request": "attach",
			"port": 5858,
			"address": "localhost",
			"restart": false,
			"sourceMaps": false,
			"outDir": null,
			"localRoot": "${workspaceRoot}",
			"remoteRoot": null
		},
		{
			"name": "Attach to Process",
			"type": "node",
			"request": "attach",
			"processId": "${command.PickProcess}",
			"port": 5858,
			"sourceMaps": false,
			"outDir": null
		}
	]
}