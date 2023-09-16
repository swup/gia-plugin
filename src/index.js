import Plugin from '@swup/plugin';
import loadComponents from 'gia/loadComponents.js';
import removeComponents from 'gia/removeComponents.js';
import config from 'gia/config.js';

export default class SwupGiaPlugin extends Plugin {
	name = 'SwupGiaPlugin';

	requires = { swup: '>=4' };

	defaults = {
		components: {},
		firstLoad: true,
		log: false
	};

	get containers() {
		const selector = this.swup.visit.containers.join(', ');
		return Array.from(document.querySelectorAll(selector));
	}

	constructor(options = {}) {
		super();
		this.options = { ...this.defaults, ...options };
	}

	mount() {
		config.set('log', this.options.log);

		this.before('content:replace', this.unloadComponents);
		this.on('content:replace', this.mountComponents);

		if (this.options.firstLoad) {
			this.mountComponents();
		}
	}

	unmount() {
		super.unmount();
		this.unloadComponents();
	}

	mountComponents() {
		const { components } = this.options;
		this.containers.forEach((container) => loadComponents(components, container));
	}

	unloadComponents() {
		this.containers.forEach((container) => removeComponents(container));
	}
}
