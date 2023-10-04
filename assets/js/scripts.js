
document.addEventListener("DOMContentLoaded", function() {
    var currentUrl = encodeURIComponent(window.location.href);
    var shareLinks = {
        facebook: "https://www.facebook.com/sharer/sharer.php?u=" + currentUrl,
        twitter: "https://twitter.com/intent/tweet?url=" + currentUrl,
        pinterest: "https://pinterest.com/pin/create/button/?url=" + currentUrl
    };

    for (var platform in shareLinks) {
        var linkElement = document.querySelector('a[data-share="' + platform + '"]');
        if (linkElement) {
            linkElement.href = shareLinks[platform];
        }
    }
});

document.addEventListener("DOMContentLoaded", function() {
    // Get all h2 and h3 elements
    const headers = document.querySelectorAll('h2, h3');

    // Create a div for the table of contents
    const toc = document.createElement('div');
    toc.id = "tableOfContents";
    toc.innerHTML = "<strong>Tabla de contenido</strong>";
    
    // Create a list for the table of contents
    const list = document.createElement('ul');

    headers.forEach(header => {
        // Create a unique ID for each header if it doesn't have one
        if (!header.id) {
            header.id = header.textContent.toLowerCase().replace(/[^a-z0-9]+/g, '-');
        }

        // Create a list item and link for each header
        const item = document.createElement('li');
        const link = document.createElement('a');
        link.href = "#" + header.id;
        link.textContent = header.textContent;
        item.appendChild(link);

        // If it's an h3, indent it
        if (header.tagName.toLowerCase() === 'h3') {
            const subList = document.createElement('ul');
            subList.appendChild(item);
            list.appendChild(subList);
        } else {
            list.appendChild(item);
        }
    });

    toc.appendChild(list);

    // Insert the table of contents at the beginning of the container or another specified location
    const container = document.querySelector('.container');
    container.insertBefore(toc, container.firstChild);
});

document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            var target = document.querySelector(this.getAttribute('href'));
            var headerHeight = document.querySelector('header').offsetHeight;
            var position = target.offsetTop - headerHeight;
            window.scrollTo({ top: position, behavior: 'smooth' });
        });
    });
});
