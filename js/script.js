    var checkinCount = 0;
    function checkIn() {
        checkinCount += 1;
        alert("은지한테 " + checkinCount + "번 인사했어");
    }

    function showBig(imageElement) {
        var bigImage = document.getElementById('big');
        bigImage.src = imageElement.src;
    }
