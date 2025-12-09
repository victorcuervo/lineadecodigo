---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2025-12-09
slug: html/hipervinculos-enlazar-dos-paginas-web
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVVARXYE%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T213334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG6RkDAuGjppLoIFJsgw5j5KbanWn9QxIsuWfmMG0R8yAiEA5VFX%2FoeZo%2FQ2P4SS%2BoFShpDxHXhGZL5NuFG83YyBunIqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOTJ2CAVPYddiApmXCrcAwg%2FAOotttvAmPS5BEw1QdhXp4jNEjFk8324XJEQhCZKg92bexxmHzdg8pdNnTZaFPXCrj6YjNMPBvP3J5rDDrV3%2B4PAVfC%2BO53VkAw0Nb9GVbAHXffEySUIrmp5EJpNQDcwVED8H5rV%2FVns8U4yP2x2wJcmJNp3fu0lqKV7%2Bbl9g3i0dPeQfrg5Zltzciatfhfhj89SipR05276lyAvfB3Hk8ri3pW6aM8eHT7xFpN6Z1vAhtg6hFLQYcHAQaKA%2BEuNFjE53WYSQmc5lsYyjQc0hohaqoRpjSVzrGoJJZR%2BhD33z%2FC6al%2BxJP6G6%2Bl8bNBkitN886ORmJWQ%2Fynb9spUpiaDbH1xemCc%2BA2ay8o1qcu4rs40DL0wJWMu8ZnaRUmg4wZpiFMP9XMwGYWAv76drtKxK5s7YZb3SYHfv4xWpK8hV9s9WyK9WL5HoFauEzMLvvWJ%2F1FYxipAVCluuqHeY4g9fhiGNR9hcoUI%2F6e87Ns1r2GWx0v8t6yREnNvr5%2FqukxH8NEyVA6XRC6SlqlMP7YwADYYWsFI6X4uRAmzU2Iim6Lg4v%2Bp2v1argrF5Hi%2FiH45BvN2weNLa%2FADfBh4QRo6XLuThG9nDaw8RfhNrJzdDVp%2B8DE1mceeMK6f4skGOqUBdK7%2BE3Cpnok2pxNw3u%2FvCPC5Y54LyySrHghhmd7NHYb68Oo%2B%2BifOPnvbXEsWWBhK%2Fn2v%2F1F0C%2F593gBofgyvW60JHZPKHvsRVwvSWG6PmbJ7Nz63iHyOfsBr17f3C%2Bk73Q4No3U727gQFYvUaS6%2FmMMFBG1lKyhtU73lnQgvuyEug%2F3RAfx7mXHiIewX%2BIwQ70Hozewj6ilKI53hc2wLrlb5%2BjLd&X-Amz-Signature=d2e162abc2ad7258ae3b6e4ecf7a920e53530ad0e368b1a9cdf53fbdabbdee3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

