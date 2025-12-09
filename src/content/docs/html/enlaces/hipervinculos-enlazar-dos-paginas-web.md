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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466336QPOFC%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T190957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDUBGHo50uT80vtqZqZG39w1tLDFGUCoGeGcJeTceWzuAiAXOHsLm6%2FZnZeu9vrFsWuBCNMLKD79Wxg8LVCCbrthECqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkvC4VS5corhQebOgKtwDrTPjWNE4fLG%2FPxohY8mkLgQSMh4o8uSI2SiiFKVqwt6ggtXspXcPPM2lrC1EPDO3keQibIIUjsmv9VYkIazv8Id5VFM9V5YEw%2B0tBFN9TfGMjozTj6giYUH4KLxC071L4Q1FEL9U2PbHa4ZYBKjpT4v%2BejTOBHnE9oE%2BtLms0EDDaZH8Y5pmMVsNm3a%2FGDivsNvg687U7qVpkDCo%2BuH3N0qC0yRXjjWXywJPRLsDH07BJpqWSRKDFeIrKgTMlvhOVjayxGLm3gZoWGkTtZ0TzaYJrgvenROH3uWoeukyY4F35u27euORAOYJc3QX0EDMU%2FEOYKu%2B4Lpk1CH8saOKX8lzR6A2fb55z5vxkOOYQlLH9TzMEDdEu2gSAE7d2seksZ6oj1B2iXDtmo1Z2WBhJzaZKOcVyfuCVdUmFuoCsuLfR%2BhlS7iL0cJrp8aKIAIErRpoASMSLVVnl%2BlSH%2Bo4n8PJTDSTS%2FRlLV%2FSBBo78PKPwgX5On5PFbxeotDPa6uwpRKl4uK63kfTkpo6dGrAitV7SRq%2BRHppktATGpycojpz%2Fg%2B%2FvxWYJlKK93Lgg3bp2hRDeghz2QFaf48xTmzyd1%2FDDjD4HCXe4LVnbjO4QkzmI86teia5RzmQXQsw7d7hyQY6pgEiIXA5BKxHv2W669Km8C4yFcVy6ijuppJvYnnqVtqkJkYzO%2BbBKKDpQcn5qrI2RzvI9y1cZqeBNKOMqvnv%2Fm3txjuVg356xHY8eb412jobRtEqWSvAgh3Wl0N1gu6ywl3qBeMS4gNEpWZV4xKW2QavgKjd%2FhZOI859TRQhA0c6tluYXBh0RZbzfX6%2BHY%2FxclGT1LEgK1jUj51%2BAAnuLLr8CZVjSFgX&X-Amz-Signature=6f8e7b02dc59ef71bb56c6be2fb4dbdf57785c5e3231069a457ca1ddc9e502f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

