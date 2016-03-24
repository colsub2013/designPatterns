$(function() {
/***** Inicio Patron Mediator *****/
	
	var $mediator = $('#mediator');

	var Mediator = (function(window, undefined) {

		function Mediator() {
			this._topics = {};
		}

		// Suscriptor Mediator
		Mediator.prototype.subscribe = function mediatorSubscribe(topic, callback) {
			if (!this._topics.hasOwnProperty(topic)) {
				this._topics[topic] = [];
			}
			this._topics[topic].push(callback);
			return true;
		};

		// Se baja suscriptor Mediator
		Mediator.prototype.unsubscribe = function mediatorUnsubscrive(topic, callback) {
			if (!this._topics.hasOwnProperty(topic)) {
				return false;
			}
			for (var i = 0, len = this._topics[topic].length; i < len; i++) {
				if (this._topics[topic][i] === callback) {
					this._topics[topic].splice(i, 1);
					return true;
				}
			}
			return false;
		};

		// Publicacion
		Mediator.prototype.publish = function mediatorPublish() {
			var args = Array.prototype.slice.call(arguments);
			var topic = args.shift();

			if (!this._topics.hasOwnProperty(topic)) {
				return false;
			}

			for (var i = 0, len = this._topics[topic].length; i < len; i++) {
				this._topics[topic][i].apply(undefined, args);
			}
			return true;
		};

		return Mediator;

	})(window);

	// example subscriber function
	var Subscriber = function ExampleSubscriber(myVariable) {
		$mediator.append('<tr><td>' + myVariable + '</td></tr>');
		// console.log(myVariable);
	};

	// example usages
	var myMediator = new Mediator();
	myMediator.subscribe('some event', Subscriber);
	myMediator.publish('some event', 'foo bar'); // console logs "foo bar"

/***** Fin Patron Mediator *****/
});