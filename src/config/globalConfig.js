const defaultGlobalConfig = {
	'peersApi': {
		'defaultNode': 'http://20.52.146.76:3000',
		'nodes': [
			'http://20.52.146.76:3000',
			'http://51.116.118.178:3000'
		]
	},
	'apiNodePort': 3000,
	'endpoints': {
		'marketData': 'https://min-api.cryptocompare.com/',
		'statisticsService': ''
	},
	'networkConfig': {
		'namespaceName': 'lared.moneda',
		'mosaicId': '4131C5FD69F7A75C',
		'divisibility': '6'
	},
	'footer': {
		'link': []
	}
};

// TODO Migrate this to a rest ajax call instead of a global window variable.
const globalConfig = window.globalConfig || defaultGlobalConfig;

export default globalConfig;
