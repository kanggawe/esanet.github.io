var wpindischool = {
	registerEvents: function() {
		//var self = this;

        //modal show
        if ($(callmodal).length > 0){
            $(callmodal).modal('show');
        }


        // Match to Bootstraps data-toggle for the modal
        // and attach an onclick event handler
        $('a[data-toggle="modal"]').on('click', function(e) {

            // From the clicked element, get the data-target arrtibute
            // which BS3 uses to determine the target modal
            var target_modal = $(e.currentTarget).data('target');
            // also get the remote content's URL
            var remote_content = e.currentTarget.href;

            // Find the target modal in the DOM
            var modal = $(target_modal);
            // Find the modal's <div class="modal-body"> so we can populate it
            var modalBody = $(target_modal + ' .modal-body');

            // Capture BS3's show.bs.modal which is fires
            // immediately when, you guessed it, the show instance method
            // for the modal is called
            modal.on('show.bs.modal', function () {
                // use your remote content URL to load the modal body
                modalBody.load(remote_content);
            }).modal();
            // and show the modal

            // Now return a false (negating the link action) to prevent Bootstrap's JS 3.1.1
            // from throwing a 'preventDefault' error due to us overriding the anchor usage.
            return false;
        });

        $('select').change(function () {
            if($('#wifiPay').val() == 1 ){
                window.location = 'http://' + domainUrl + '/' + dirMethod + '/spin_indi2/?' + qs;
                //window.location = 'http://welcome.wifi.id/wifi.id/spin_indi2/?' + qs;
            }
        })

	},

	fixUI: function() {
		// Content height
		var windowHeight = window.innerHeight;
		$('#wrapper-wp').css('min-height', windowHeight - 190);
	},

	initialize: function() {
		var self = this;

		self.registerEvents();
		self.fixUI();
	}
}

$(document).ready(function() {
	wpindischool.initialize();
});