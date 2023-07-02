import Plugin from '@swup/plugin';
import loadComponents from 'gia/loadComponents';
import removeComponents from 'gia/removeComponents';
import config from 'gia/config';

export default class SwupGiaPlugin extends Plugin {
	name = 'SwupGiaPlugin';

	constructor(options) {
		super();

		const defaultOptions = {
			components: {},
			firstLoad: true,
			log: false,
		};

		this.options = {
			...defaultOptions,
			...options
		};

		config.set('log', this.options.log);
	}

	mount() {
		if (this.options.firstLoad) {
			this.mountComponents();
		}

		this.swup.on('contentReplaced', this.mountComponents);
		this.swup.on('willReplaceContent', this.unloadComponents);
	}

	unmount() {
		this.unloadComponents();
		this.swup.off('contentReplaced', this.mountComponents);
		this.swup.off('willReplaceContent', this.unloadComponents);
	}

	mountComponents = () => {
		const containers = Array.prototype.slice.call(document.querySelectorAll('[data-swup]'));

		containers.forEach(container => loadComponents(this.options.components, container));
	}

	unloadComponents = () => {
		const containers = Array.prototype.slice.call(document.querySelectorAll('[data-swup]'));

		containers.forEach(container => removeComponents(container));
	}
}
