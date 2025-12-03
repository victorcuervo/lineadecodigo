---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Uno de los principios sobre los que se sustenta la WWW es el enlazado de documentos. Así que vamos a aprender a enlazar dos páginas web. Esto se basa en el concepto de Hipertexto, que viene a decir algo así como presentar documentos que puedan bifurcarse o ejecutarse cuando sea solicitado. Esta definición se data en 1963 por **el sociólogo Theodore Holm Nelson**, mucho antes de que naciese la WWW.


Una de las formas del hipertexto son los _hipervínculos_ o _hiperenlaces_ o enlaces (forma vulgar más conocida de las tres).


Así que si queremos hacer páginas web utilizando [HTML](https://www.manualweb.net/html), lo primero que tenemos que aprender, o una de las primeras cosas, es [cómo hacer enlaces](https://lineadecodigo.com/tag/html-enlaces/).


Para ello nos tenemos que apoyar en [el elemento ](https://w3api.com/HTML/a/)[`a`](https://w3api.com/HTML/a/)[ ](https://w3api.com/HTML/a/)que viene del ingles _"anchor"_ (ancla) y que es uno de los elementos base del lenguaje [HTML](http://www.manualweb.net/html).


### Atributos del elemento a para enlazar dos páginas web


Los atributos [del elemento ](https://w3api.com/HTML/a/)[`a`](https://w3api.com/HTML/a/)[ ](https://w3api.com/HTML/a/)que tenemos que conocer para generar los enlaces son los siguientes:

- [`href`](https://w3api.com/HTML/a/href/), donde habrá que especificar la página (o recurso) de destino. Este podrá ser con la dirección absoluta o relativa al enlace que queremos poner.
- [`target`](https://w3api.com/HTML/a/target/), donde indicaremos el frame destino de la página. Si queremos que el enlace se abra sobre la misma página, lo dejamos vacío.
- [`title`](https://w3api.com/HTML/title/), título del enlace. Será útil para que se interprete por los clientes qué significa el enlace que se muestra. Suele ser útil en temas de SEO.
- [`type`](https://w3api.com/HTML/a/type/), que especifica el tipo MIME del recurso enlazado, es decir, si es una página, si es una image, un archivo de vídeo,…, ayudando al [navegador web](https://www.ayudaenlaweb.com/navegadores/que-es-un-navegador/) a determinar cómo manejar el contenido al que se está enlazando. Este atributo es especialmente útil cuando se enlaza a recursos que no son páginas web estándar.

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZ3YGBJG%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T231128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIFpU86%2Fl8aO1af3fe1u7CZPR%2FBUT%2BESqIapRgweYnA4ZAiBs%2Bqf41%2Fmb4PKH2OTUBZpH%2Fk95CgPGtM2my7csLQXkVir%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIMN5eTOg6MC9YfzVSdKtwDHifdPcz8bt%2B6hMe3BuP3fmxCsptMB6oAVKHB7lsYfwXw4qZAbPC0DUj%2BM1l0HWbTdcPtFCPYkesN%2BCIzOM26Okz91jDoZwrs69PT2N84PLRwPk90xF%2BwA9JMyKPlYEMMZEOqcK3MosNVs5qsatLu3bRD%2BBpVmhDcvTTs9sf8G48i2II5kK9XdbG67KR2%2FBm6M9k6UCJbKIPYjvKqIL4hQhSVBL0b4ctAzzW5ltE52VtiOxiqJBC7jCU3XsqDmVlnIUOnhO4ehAFrRHccwE%2FCE3Zcuhn6wtx%2F8gFcqXL6pwz0fPZeQM6AvpDcyifZW%2FiX5m0Sa5JuokLOfvAno15La5In8%2B7NyquyIWHNGFdPkGGEicLB4D553cU5%2FnFLdYflKPHyKl5k9vPxwCeTD9C09EUDmUuYFtcZ2JeD7Ed7%2BWIZijURh1pEE8qkqAgvrpcx9CVM3SZloI5%2B6D1v0g2Mjduh6knTEYhmo%2B4lLs0dMJClLVId7J32%2FFHRxMOfivDvK8sEwzmcbwn%2F%2BKkhwBav377dwTMjF4rW7djHeLg2TFdbFD1zkvUiRKCUZlVtdHD9mdCdeDrBqdHZbXDqEJXkFDtnOyvQAeBrpGhLHEhNm3OfSuYMkb6jHV1Wcn0wq%2FjCyQY6pgGTHdlAD4H8x0bENjSUjxQAXa9tJzYbgMVCV3zPeLCCn94rNi2A%2BJ8hGacBWRYOZSzSxBavMdRXtp3RWeVbwDyG%2F%2FrbWO0F%2FB0rI0L6%2BLs30RNosf0DoA6G%2FoZhDGzVvmlNDXRdaEwQnTlwKwLcUvwHT3nqP3PFjz3dEfvy7pywDPFyHAyavaXHIdQW%2BlGnaf1TjUPHo6d1Vl0kfXcayjC6tUZEHCUx&X-Amz-Signature=9dd5e00fe9874ae69a72b8991bfa95ce6b2bf35417d4f8bd5ebe0a05c00d2c30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

