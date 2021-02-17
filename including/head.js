var heads={
    "httpEquiv": [
        {
            "name": "Cache-Control",
            "content": "no-cache, no-store, must-revalidate"
        },
        {
            "name": "Expires",
            "content": "0"
        }
    ],
    "meta": [
        {
            "name": "revisit-after",
            "content": "1days"
        },
        {
            "name": "viewport",
            "content": "width=device-width, initial-scale=1.0"
        },
        {
            "name": "author",
            "content": "我是废物"
        },
        {
            "name": "generator",
            "content": "我是废物"
        },
        {
            "name": "copyright",
            "content": "Copyrights (C) 2020 我是废物 All Rights Reserved"
        },
        {
            "name": "viewport",
            "content": "width=device-width, initial-scale=1.0"
        }
    ],
    "styles": [
        {
            "rel": "stylesheet",
            "href": "/stylesheet.css"
        },
        {
            "rel": "icon",
            "href": "/img/icon.ico"
        },
        {
            "rel": "icon",
            "href": "/favicon.ico"
        },
        {
            "rel": "apple-touch-icon",
            "href": "/favicon.ico"
        },
        {
            "rel": "stylesheet",
            "href": "/including/assets/waifu.css"
        }
    ],
    "scripts": [
        {
            "name": "JQuery",
            "loadtype": "async",
            "src": "/including/jquery.min.js"
            //"src": "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"
        },
        {
            "name": "JQuery-UI",
            "loadtype": "async",
            "src": "/including/jquery-ui.min.js"
            //"src": "https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"
        }
    ]
};

console.log("Importing Heads...");
//http-equiv
console.log("Importing HTTP Equiv...");
for(var i=0;i<heads.httpEquiv.length;i++){
    var element=document.createElement("meta");
    element.httpEquiv=heads.httpEquiv[i].name;
    element.content=heads.httpEquiv[i].content;
    document.head.appendChild(element);
}
console.log("Importing Meta Data...");
//metas
for(var i=0;i<heads.meta.length;i++){
    var element=document.createElement("meta");
    element.name=heads.meta[i].name;
    element.content=heads.meta[i].content;
    document.head.appendChild(element);
}
console.log("Importing Styles...");
//styles
for(var i=0;i<heads.styles.length;i++){
    var element=document.createElement("link");
    element.rel=heads.styles[i].rel;
    element.href=heads.styles[i].href;
    document.head.appendChild(element);
}
console.log("Importing Scripts...");
//scripts
for(var i=0;i<heads.scripts.length;i++){
    var element=document.createElement("script");
    element.type="text/javascript";
    element.src=heads.scripts[i].src;
    document.head.appendChild(element);
}

heads=null;
element=null;