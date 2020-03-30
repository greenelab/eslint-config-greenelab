### eslint-config-rubinetti

ESLint config for React applications



### Benefits

- Centralized configuration for consistent coding style.
- Simplified, single install.
No numerous local and global plugin and config packages to install.
- More up-to-date than some other configs, like Google's.
- Explicitly includes all available rules from ESLint core and included plugins.
No digging through dependencies to find what a particular rule is set to.
- Nothing imported/extended.
Avoids confusion about rules from different configs overriding each other in unexpected ways.
- **Declarative, explicit, single source of truth**.
What you see in this config is exactly what you should get, without exception or confusion.
- YAML looks nicer than JSON and supports comments.
- A bit better organized and documented than our previous configs, and possibly third-party configs.



### Installation

`yarn add --dev git+https://git@github.com/vincerubinetti/eslint-config-rubinetti.git`



### Usage

See: https://eslint.org/docs/user-guide/configuring

In a `.eslintrc.yaml` file:

```yaml
extends:
  - rubinetti
```



### Usage with `create-react-app`

See: https://create-react-app.dev/docs/setting-up-your-editor

Adding an `.eslintrc` file will only affect ESLint in your editor.
To ensure this package completely overrides the `create-react-app` built-in rules -- in your command-line and browser console as well -- additional steps are required.

In your `.env`:

```
EXTEND_ESLINT=true
```

AND

In a `.eslintrc.yaml` file:

```yaml
extends:
  - react-app
  - rubinetti
```



### Usage in `VSCode`

Install the [`ESLint extension for VSCode`](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).

Then, in `settings.json`:

```json
"eslint.packageManager": "yarn"
```

Then, in `keybindings.json`:

```json
{
  "key": "ctrl+alt+l",
  "command": "eslint.executeAutofix"
}
```
