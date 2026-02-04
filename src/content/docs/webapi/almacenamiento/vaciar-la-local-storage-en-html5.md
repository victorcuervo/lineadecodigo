---
title: "Vaciar la Local Storage en HTML5"
description: "Aprende a vaciar la Local Storage en HTML5 fácilmente con el método clear. Elimina toda la información almacenada y optimiza la sesión del usuario."
date: 2010-10-11
updatedDate: 2026-01-19
tags: ["localstorage","clear"]
slug: webapi/almacenamiento/vaciar-la-local-storage-en-html5
type: doc
topic: webapi
id: 17a38bb6-4f25-4058-b2f1-6733f7f767c8
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_html5/blob/master/WebStorage/vaciar-web-storage/logoff.html
---

En el artículo [Acceder a la caché local del navegador con HTML5](http://lineadecodigo.com/html5/acceder-a-la-cache-local-del-navegador-con-html5/) vimos como podemos manipular la Local Storage para almacenar y recuperar información de la cache.


Si el usuario hace una operación de logoff, lo más probable es que queramos vaciar el contenido de la Local Storage.


## El método clear()


Para vaciar la Local Storage, deberemos de ejecutar el método .clear()


```javascript
localStorage.clear();
```


Algo muy sencillo, pero que nos servirá para eliminar toda la información que hayamos almacenado a lo largo de la sesión del usuario.


Puedes descargarte el código completo que inserta elementos, los visualiza y al final vacía la Local Storage.

