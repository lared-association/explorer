
![](https://i.imgur.com/r8mM1TN.gif)
# LaRed Explorer v0.8.0

[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

LaRed Explorer is a read-only web application to browse the content of the blockchain. 
The explorer supports searching for transactions, accounts, namespaces, tokens, and blocks information on a given network.
***
## Features
### Explore recent block and transaction changes in real time.

![](https://i.imgur.com/0bKFHAq.gif)

### View statistics such as block time differences, recommended fees multiplier, transaction per block and effective rental fees.

![](https://i.imgur.com/7koJ07o.gif)

* Easily search transactions, addresses, namespaces, tokens and blocks.
* Browse block, transaction, account, namespace, token and node details.

***
## Requirements

**Node.js 8, 9 or 10** is required to run LaRed Wallet as a web application.
It is recommended to install **npm**, the Node.js package manager. This can be done by executing the following command:

   ```
sudo apt install npm
   ```
***
## Building instructions

1. Clone the project.


    ```
git clone https://github.com/superhow/lared-explorer.git
    ```

2. Navigate to the project folder.

    ```
cd lared-explorer
    ```
	
3. Install the dependencies. This may take a while.

    ```
npm install 
    ```

4. Start the development server.

    ```
npm run dev 
    ```

5. Visit http://localhost:8080/#/ in your browser.
***
## Feature status
### Features currently working
* Real-time display of recent blocks and transactions ✔️
* Block information display ✔️
* Transaction detail display ✔️
* Account detail display ✔️
* Namespace detial display ✔️
* Token detail display ✔️
* Block, transaction, account, token, namespace search ✔️
* Statistics display (block time differences, transaction per block etc.) ✔️
### Features currently not working
* Nothing to report so far.
***
## Main changes
* Altered UI elements (header, footer, colors, text, icons) for a more appealing, consistent and coherent appearance.
* Changed some terminology:
	* Mosaics changed to Tokens
	* Harvesting changed to Staking
* Removed some irrelevant UI elements for less intrusive appearance.
***
## Known issues
* No major known issues so far.
***
## Developer notes

### Architecture

* `/src/config`: Handles the explorer configuration.
* `/src/infrastructure`: Handles the API / SDK request from Symbol nodes.
* `/src/store`: Handles the application logic with state management.
* `/src/views`: Handles the UI of the explorer.

### How to change the node list

The file `/src/config/setup.json.mt` contains the node list shown in the node selector dropdown.

1. Edit `peersApi.nodes` array to set up the custom node list.
2. Set `peersApi.defaultNode` property to the default node url.

***