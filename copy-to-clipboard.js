if (pm.response.status == "Created") {
    let resolvedURL = "https://localhost/Dev/tracker/MatterOptions?id=-1&highqId=" + pm.response.json().id;

    let template = `
    <html>
    <head>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/jquery@3.4.1/dist/jquery.min.js"></script>
    </head>
    <body>
        <div>
        <div>
            <pre><code style="width:max-content!important;" id="copyText">${resolvedURL}</code></pre>
        </div>
        <button class="copyButton" type="button" data-clipboard-action="copy" data-clipboard-target="#copyText" style="background:green;color:white;">Copy to Clipboard</button>
        </div>
    </body>
    </html>
    <script>
        var clipboard = new ClipboardJS('.copyButton');

        clipboard.on('success', function(e) {
            e.clearSelection();
            e.trigger.textContent = 'Copied!';
            window.setTimeout(function() {
                e.trigger.textContent = 'Copy to Clipboard';
            }, 2000);
        });
        clipboard.on('error', function(e) {
            e.clearSelection();
            e.trigger.textContent = '✗ Not Copied';
            window.setTimeout(function() {
                e.trigger.textContent = 'Copy to Clipboard';
            }, 2000);
        });

    </script>`

    pm.visualizer.set(template, pm.response.json())
}