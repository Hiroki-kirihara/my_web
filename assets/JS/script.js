
jQuery(function () {
    for (var i = 1; i <= 3; i++)
    {
        
        (function() {
            
            var nextIndex = (i != 3) ? (i + 1) : (1);
            var $nextVideo = $("#video" + nextIndex);

            
            $("#video" + i).on("ended", function() {
                $(this).hide();
                $nextVideo.show();

                $nextVideo.get(0).play();
            });
        })(i);
    }
});

