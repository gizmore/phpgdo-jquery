"use strict";
$(function(){

	window.GDO.shortDebugURL = function(url) {
		let pattern = '(' + GDO_PROTOCOL + "://" + GDO_DOMAIN + GDO_WEB_ROOT;
		pattern += '([^? ]+)[ ?$][^ ]*)';
		pattern = new RegExp(pattern);
		return url.replace(pattern, '<a href="$1">$2</a>');
	};

	window.GDO.error = function(html, title) {
		var dialog = $('<div class="gdo-modal modal"><h5>' + title + '</h5><div class="gdt-divider"></div><pre>' + html + '<pre></div>');
		$('body').append(dialog);
		$('body').append('<div class="blocker"></div>');
		$('.gdo-modal').modal({
			closeClass: 'icon-remove',
		});
		var defer = $.Deferred();
		dialog.on($.modal.CLOSE, function() {
			dialog.remove();
			defer.resolve();
		});
		return defer.promise();
	};

	$(window.document).ajaxError(function(event, jqxhr, settings, thrownError) {
		return window.GDO.responseError(jqxhr.responseText, thrownError);
	});
	
});
