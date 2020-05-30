# assets

This library was generated with [Nx](https://nx.dev).

## Importing assets into applications

Add the following property in the 'assets' array in angular.json under 'projects/application-name/architect/build/options'.

{
"glob": "\*_/_",
"input": "libs/assets/src/lib/images",
"output": "./assets/images"
}

## Configuring stylesheets

Add the following property in angular.json under 'projects/application-name/architect/build/options'.

"stylePreprocessorOptions": {
"includePaths": ["libs/assets/src/lib/styles/"]
},

https://angular.io/guide/workspace-config
