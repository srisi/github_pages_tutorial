

function include(filename, filetype, onload) {
    let head = document.getElementsByTagName('head')[0];
    let script = undefined;

    if (filetype === 'script') {
        script = document.createElement('script');
        script.src = filename;
        script.type = 'text/javascript';
    } else {
        script = document.createElement('link');
        script.rel = 'stylesheet';
        script.type = 'text/css';
        script.href = filename;
    }
    script.onload = script.onreadystatechange = function() {
        if (script.readyState) {
            if (script.readyState === 'complete' || script.readyState === 'loaded') {
                script.onreadystatechange = null;
                onload();
            }
        }
        else {
            onload();
        }
    };
    head.appendChild(script);
}

        let body = document.getElementsByTagName('body')[0];
        let blank_page = document.createElement('div');
        blank_page.id = 'blank_page';
        blank_page.style.width = '100%';
        blank_page.style.height = '100%';
        blank_page.style.background = 'white';
        blank_page.style.display = 'block';
        blank_page.style.position = 'fixed';
        blank_page.style.top = 0;
        blank_page.style.left = 0;
        blank_page.style.zIndex = 2000;

        body.appendChild(blank_page);


include('https://code.jquery.com/jquery-3.4.1.min.js', 'script', function() {
    include('https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css', 'css', function () {


        let body = document.getElementsByTagName('body')[0];
        let blank_page = document.createElement('div');
        blank_page.id = 'blank_page';
        blank_page.style.width = '100%';
        blank_page.style.height = '100%';
        blank_page.style.background = 'white';
        blank_page.style.display = 'block';
        blank_page.style.position = 'fixed';
        blank_page.style.top = 0;
        blank_page.style.left = 0;
        blank_page.style.zIndex = 2000;

        body.appendChild(blank_page);

        // equivalent to:
        // <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        let viewport = document.createElement('meta');
        viewport.name = 'viewport';
        viewport.content = 'width=device-width, initial-scale=1, shrink-to-fit=no';
        let head = document.getElementsByTagName('head')[0];
        head.appendChild(viewport);

//        alert('here');
        $("#header").load("header.html");
        $("#blank_page").remove();


    });
});
    //
    // let head = document.getElementsByTagName('head')[0];
    // let bootstrap_css = document.createElement('link');
    // bootstrap_css.rel = 'stylesheet';
    // bootstrap_css.type = 'text/css';
    // bootstrap_css.href = 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css';
    //
    //
    //
    // // head.appendChild(bootstrap_css);
    //
    //
    //
    //
    //
    // let main_css = document.createElement('link');
    // main_css.rel = 'stylesheet';
    // main_css.type = 'text/css';
    // main_css.href = 'css/main.css';

    // head.appendChild(main_css);

//    include('https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css', 'css', function(){

    //});




    // $(document).ready(function() {
    //
    // });

