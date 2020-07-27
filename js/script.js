/* search box */
document.getElementById('search').addEventListener("keyup", imageSearch);

function imageSearch() {
    const input = document.getElementById('search').value.toUpperCase();
    const images = document.querySelectorAll('.inner-wrapper a');
    for (i = 0; i < images.length; i++) {

        const imageCaption = document.getElementsByTagName('a')[i].getAttribute('title').toUpperCase();
        const indexSearch = imageCaption.indexOf(input);

        if (indexSearch > -1) {
            $(document.getElementsByTagName('a')[i]).fadeIn();
        } else {
            $(document.getElementsByTagName('a')[i]).fadeOut();
        }
    }
}