import Plugin from '@swup/plugin';
import loadComponents from 'gia/loadComponents';
import removeComponents from 'gia/removeComponents';
import config from 'gia/config';

export default class SwupGiaPlugin extends Plugin {
	name = 'SwupGiaPlugin';

	requires = { swup: '>=4' };

	defaults = {
		components: {},
		firstLoad: true,
		log: false
	};

	get containers() {
		const selector = this.swup.context.containers.join(', ');
		return Array.from(document.querySelectorAll(selector));
	}

	constructor(options) {
		super();
		this.options = { ...this.defaults, ...options };
		config.set('log', this.options.log);
	}

	mount() {
		this.swup.hooks.before('replaceContent', this.unloadComponents);
		this.swup.hooks.on('replaceContent', this.mountComponents);
		if (this.options.firstLoad) {
			this.mountComponents();
		}
	}

	unmount() {
		this.swup.hooks.off('replaceContent', this.unloadComponents);
		this.swup.hooks.off('replaceContent', this.mountComponents);
		this.unloadComponents();
	}

	mountComponents = () => {
		const { components } = this.options;
		this.containers.forEach((container) => loadComponents(components, container));
	}

	unloadComponents = () => {
		this.containers.forEach((container) => removeComponents(container));
	}
}
