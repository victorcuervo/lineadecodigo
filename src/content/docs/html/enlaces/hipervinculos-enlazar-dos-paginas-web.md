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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TX2AT4HD%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T023828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFFJ7oNzrDAsxVsVdgjR%2B8RG1W7W2Itikj%2Frr9ZryuUsAiEAz02EOWHUt3iwptgxrjz%2F5Clasi9LWXNFsMV5SF4z2BIqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD20szwg%2BsWaO8ZW0CrcA1Tyfc7aVfzx4OT9tro0wt42JWSDdjUOTHUN26CXtIpQHqNAywhIK9P8UM0WuGeFnjLRHR2mB%2Bk4OLbm5zoIGC5vQ065%2FWF72b0g07NGF4ildb6y6X0o4DFFNE2rr%2FRGjwiC%2FC7sP3W%2FuS034RMBALgbf07UeRbMxOGCNeT%2BOGi51SiA2VzKhy%2B%2FQ8pJOdgbbu855%2Bv%2B8z7A9LirQ7s73rzraYPxFO4UrgNwWjZoSGTnoMHLA9rDCuiorgDNv5PWhWExrMTcHvVq10LImEKX7eGnV4y3MTQ7qGTuNv4hAHMHQVt%2BuuPORidtBzsiMSEGB96C5gMdakrd1368ykII5PBC7JwFUQ99pyYKPkneZgSDbnDvbOp%2BXni7H03TZI0h5XVp%2F%2FpT2CIObQjSfJzl8aTq4Mr3W2hwcQsOQKJdTCOv8FviCB6mcx6L7nB%2FqbpH46YQuTqGM7lpU2vrY%2BMI%2B08js4bFQHaJg0yNA0wOGC6UvChUbBjPKuY5UTGghm15YplrQYHkDki46V4SFUN33%2B6ejEWq8UgLn8MjifkVslV%2FUOGrKJx7OylI%2BKpYZcfqh8pZDlTuDUPFF3qPMfXttfBYHJBXxTYIa3yZIz9ckWCdrN19U8OeSp0hOw5QMMGN3skGOqUBPBOJIxg2vnYwQla5g144FExFPxvV4D8YOJziqNZucE%2FvgWLMxK6PvhTVbm8OsBhp0ukn1WipTRtfYRfwBI2v8K5cCfCKsoZub8wSVDbTWRgn%2FDrHH7dAAWAWJNNQ5GsAq9Rh0EPZW7mJ7SYBensIbo78XnFvnnAQlXB%2BhAuaF5Duvropgervd5khRp%2BNU7PibQLWgI8thAuwCEiKaiUvEKpSddIu&X-Amz-Signature=f2a414cc623c8186850838b08cce707d3c2d686f3d741ba24e6e065d1509bad9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

