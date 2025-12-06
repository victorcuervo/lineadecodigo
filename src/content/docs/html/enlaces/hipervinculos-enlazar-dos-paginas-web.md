---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2023-09-17
slug: /html/hipervinculos-enlazar-dos-paginas-web/
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USRFEHD3%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T181113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfvkSCOUdvny0GisyU%2Bs7NEizTprdI%2FkuXmltfD5uYsQIhAIiNTPmLB16coEv9ZtyLiDATADDwenKN7W4Pbln7UXEHKv8DCHoQABoMNjM3NDIzMTgzODA1Igx1VUljUF27vDBU%2BwAq3AMc2WIuoRaU5%2FfX8JWpmAmKmQG4knX2HTJeeqVOpGQ7EeuSUGKPt3nF5rlivssopeMgEcUHjkp%2F6vTwI18HAIVmcWUg9dNASgYsalXJrZvhYN1qX8Btan89Bs%2Fx4KKjx%2FsCe%2B97IdsdqH9jaZXygqSvIw24ojWGyokhorWg91P6oLsANPxx48bVm8qEfAfZyKdsYA7z6TxcXDAyGPye1%2FTmc0YKbdThpZahIRjkAXS7FtOkDhHwaobr%2F0YqSP1hsSr9JwqJrfmb2T1lUkif9672piAUxGRTbjxTn%2BcHSoLsdWRVoKFUGb%2Bljbrv6LfqDbJ4qrOXLAsex2jUNcxEEj%2Fwh%2BtgDyybzAbKmDFqs7%2B2useJm8LaMwsHYlUzyrBY1UzTCKJe7jAJ%2FJBMkUjHqhBfqTvsvCQVkeSoTwHPTMIJruuqV3y3%2FCNWG%2Brn1QuLhv1cijjQ9FgXeXDUQnSZ1S%2Fa0rq287dm2U3WApDaEMR%2BTejgQ%2BTtHcLsUNAGWPSIcgxli9A%2Bp8Wdohy8vdT9KuXViGWPYrjiOa05dhLz3qvfQIKelaL2ItafBYMx2B3d3jQcYrZwYLo8XkgHxnnt%2F5KuDcA3doeVuKz8PNjgagniXRot74rZqzxWlIL8DjCTy9HJBjqkAR9j9XF2w0nfLia29W0rek0xks6f3hA4t9glyKDxb8Og5L5i6P5z9HlqHmxnPYF4b0hl%2FVoExnI5Q7Sb0IG3K5Cdyq0xPeeaTLT8WjzO9THTAbMuFymxQ%2FO9ykmIKzIc3NlwWdmKWw9tAn%2FXFKVOF3Eg9jbat3Np%2BdtadBoh0wDM%2FxgrX%2Bq2nC8x%2BPQONYCaQl7aEnYEtLo6fUxPASQtf%2F7zpur8&X-Amz-Signature=2c88ea8def77312a38f6dd3ad318b767a0bd8aa6cf12c0839d1fdeee40fc0070&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

