#The Multimodal Interaction Module

A simple, illustrative implementation of the Mim (Multimodal Interaction Module) concept.

Mims are used to simplify the development of user interaction, particularly those involving dialog.

Mims encapsulate logic that is required by all dialog interactions, i.e. to handle input errors and retry attempts.

See the Mim Example tutorial screencast for a detailed explanation.

# Jibo SDK

Refer to the [Jibo SDK Documentation](https://developers.jibo.com/sdk/docs) for further tools usage and API reference.

## To view sample code:

### 1. Install the mim-example skill

You will need a [GitHub](https://github.com/) account to clone this repository.

Note: Setting up an [SSH key](https://help.github.com/articles/generating-ssh-keys/) will allow you to download other examples without needing to provide your github credentials each time.

If you downloaded a ZIP file of the mim-example code, unzip it and skip to [Step 2](#install_the_jibo_module).

```
git clone https://github.com/jiborobot/mim-example.git

```

### 2. Install the jibo module

```
cd ~/<path>/mim-example
npm install
atom .
```
If you don't `npm install`, the Behavior Tree Tool cannot render the behaviors!

### 3. Play a sample behavior tree in the simulator

1. Press **cmd-r** (Macs) or **ctrl-r** (PCs) to run the mim-example behavior tree in the Jibo simulator.
2. To view the debugger, press **cmd-opt i** (Macs) or **ctrl-alt-i** (PCs), or click **View > Developer > Developer Tools**.
3. Press **cmd-r** (Macs) or **ctrl-r** (PCs) to stop the simulator.
