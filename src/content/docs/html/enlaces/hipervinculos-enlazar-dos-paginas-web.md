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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKV2FV4X%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T171343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFJCA4EfTjTm1aiVfHiDqwi81Ls7C8jmp3zGOGd1mneLAiBQ%2FV5k7t43wx68raJky5BmCLCODO178%2BBT8c3EkGRcNSqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXmheexkAXZGG1mwuKtwDJyt1TzO8A6lM00FPO8xMP0KCqN41Yx5wgyZ5Qp8BKWOP9IrjSn0A4m3U0CqvMqTOosPFVR3q%2BVj3rKjN%2BnX4nWGnWc%2BZsYqFgBUimV1Fhu8XSXiLWhNTvviPv1d0H27XqD1U6pBeCYD7YDxQ2cpAxkubqvj00gtUCgfcF%2Fuj%2BdkeOxxN8PIcYQPw%2BCIEA%2Bja%2BuGd5HpYcRUAcWgeCzgznSaeJ2zmuRx5XIzqlFDU%2FEarZ%2BFDt1bXiJLPHIlXMLIkO6%2BJAwR4CmZNXxMGgbbjr4Uu1X%2F41a%2Fm9eGp5qPXifuid2RtnjQEeXyRNSmcTQljMAjQpdTeUxT2IJHdnxJ01B6SjPrD8%2BrgyUu2TUhGUFqIRIPIdcdbnWkc1pGynqT%2Fs386VYm3S8xj5S8VJI3bebwt%2FdBXIyDk8dZnN51b%2B76y1nQzMV4ICE%2FY7Ofonz7IxWyybpJTU6uZF6rqhCNEKSEH1StXwFDgShrpydFkUiiCbFT3EtTGC32GUpMR5Ws6VbzhxkJjAeGw0JwgtPmrrQZEIV%2FDyrEfiDx0D3REoNOqOdxBkh1hZ14TWmz9Vmcu1ACExIuf86InsxJ%2Bx5lzfSZSfKJYdTcwGMM%2Fe9e%2FUhElUlkcAGCq8ORTCoUw1obcyQY6pgEExzYUi0IhMifY04G0%2BqauEDjTqCqYkOsBcj4HcvPk9CZZFboygcLpeDYqdIHzrSmrM78vOa8ToQsz7IfO8yKn7rsU%2ByCP6YXNSdgLGgvKDGmJ%2BQLkmTLifrRUD3mhDPS210hmobw8GFchq46YkzcU%2BflyzosXyrmjcwah4cL7b9s6EAuoTE2D5cNdbhELBMFof5SgZRM6LVU0N6UTG8w2u4ok%2BtoR&X-Amz-Signature=6b08178b82060f1a2475b820a5ec3770a1696b2cd23853e9abe406a3131f4b99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

