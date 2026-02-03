---
title: "¿Soporta mi navegador la caché local de HTML5?"
description: "Descubre si tu navegador soporta la caché local de HTML5 con un simple código. Asegúrate de aprovechar esta funcionalidad y mejora tu experiencia web."
date: 2010-12-01
updatedDate: 2026-01-23
tags: ["localstorage","typeof"]
slug: webapi/almacenamiento/soporta-mi-navegador-la-cache-local-de-html5
author: victor_cuervo
type: doc
topic: webapi
id: 2c8a9dfb-adca-81ca-b87d-e705de96a4c7
download: https://github.com/victorcuervo/lineadecodigo_html5/blob/master/WebStorage/soporte-cache-local-html5.html
---

## Comprobar soporte de caché local HTML5


Si quieres saber si tu navegador soporta la caché local de [HTML5](https://www.manualweb.net/html5/) solo tienes que insertar el siguiente código [HTML5](https://www.manualweb.net/html5/).


```javascript
if (typeof(Storage) !== "undefined") {
    if (localStorage) {
        document.write("Tu navegador soporta la caché local de HTML5");
    }
} else {
    document.write("Tu navegador NO soporta la caché local de HTML5");
}
```


El elemento `localStorage` es quien nos permite saber si está implementada la caché local [HTML5](https://www.manualweb.net/html5/) en tu navegador o no.


[Puedes comprobarlo sobre tu propio navegador](http://lineadecodigo.com/wp-content/uploads/2010/10/soporte-cache-local-html5.html).

