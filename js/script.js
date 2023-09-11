import * as Element from './element.js';
import * as Settings from './settings.js';
import * as NotificationManager from './notification.js';
import * as Main from './main.js';
import * as TabManager from './tab-manager.js';

(async () => {
	Element.createTimers();
	Settings.initializeShowAll();
	Settings.initializeNotifications();

	window.onTimeChecked = Settings.onTimeChecked;
	
	window.onTextChange = Settings.onTextChange;

	window.toggleShowAll = Settings.onToggleShowAll;

	window.toggleEnableNotifications = NotificationManager.toggleEnableNotifications;

	TabManager.registerVisibilityChangeEvent();

	var worker = new Worker('./js/worker.js');
	worker.onmessage = function () {
			Main.run()
	}
})();
