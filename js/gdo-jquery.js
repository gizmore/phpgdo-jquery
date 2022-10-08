"use strict";
$(function(){

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
