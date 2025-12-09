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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662N4HCWOM%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T162952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHKgHb1lyLFRIT5gRWua9A4Ul2Cy55B0DTe5%2BKbBXvszAiEApQpY%2Bml4rolH4z17o5VpaOB02kDnZJ8PDEI3grmeDLMqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPobq8R31M8%2B2kbcOCrcA7AoV7eA1rfhpgwrdWOeGew0EQyBJiyvZ1jfRoZoTgTxMSr4DKcRL9q3k9yLJrK2iqoL%2BvJiVn99DbAK%2BBQNWTuys74p98kqbXymMFmDmGNNVhNJjzMSTNX35rrKuqjlaXA9WwsI%2BcgMAGPozZCNUBQay315JegkRsE0MVP1C7sDP121FcVW%2Fdjh%2F56CkU00eu2Aj4M6Av2KBSEaJlvBkj3JyQt9NBNlzkklrFjqBRlBv%2Frrl2KhwhXdWUOKP1hDqkLOMn%2Bjz5sJHJ6baqd91LqdR8JtLapXa%2FAdlefVzgNd0IMpLUZfEGdu0SpjxiYGcD5y6a2O8bDXOjQh%2B6WfSJIUODhCgz4Zlbb7P94Gxkl5GZntt05U%2FiOGnKpbSZ9KonDc5KpR6CK%2FN4iGle4XFKRn%2BpKqsUrZQMgPlWPe6LKGPrUaCy9ATE8SemNae0L4dHZaECiju2yTnssoAcMmXUvjstCxoC76YP8OcnzRueFtYdoE0LNDo8z5GUBpYkYa6JoprZGSMGb2hSEmV2lto9pFg5gGko9teBE688gsqkCiub6pBfYU0yVOx1bLcDgNDekT93ve6NPnSecrMrCOksgzh0U6E43cpcMXMt5dVITEvApsmiQQ9tOCtPikMKOY4ckGOqUBQlFmFTuXGLrSqGMulE9AMUt1lFcToUN6hs8M4pitBR6g4h4FTL320QleSvm3jwBYWEkLkUl4rPMt9sNlyPOjCjZAl1NYfbGMLK8J%2F0S5Km07zaw22iKqewcy3b8ONnG6wTz%2FsBM%2BatqqYdb2J0bqU%2Blet33%2F7YN8EMMqquBuJY6%2Bi12PWy66zbMt%2FsiDeTOrXDwk7KIpa%2FiFI63weCa5U2MaMrhc&X-Amz-Signature=761323a05c4b31cdf4f4f1276ea2cc22f4b115fcfcf7a90ae943378c524b874c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

