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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZW2VMDF%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T205057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEv7ZYFtHkK2Mx14Wd9%2B%2BIMy3pmIPOchF4BLPSsHbeoqAiBOA9HhOzxn2ppJgs6VAn4Z0Ejhaiui2bP%2FXV%2FC%2Byrz%2FCqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3Tmj7ozUM2aIxN0UKtwDfX2oYRiznvzcV0LEyjGpVjAyhoJ19tpbtkOp7lTfSZMbI275zomOwdJaFb7fDkr6kWGyQ6FZc%2BQyqLqiiANIO0xhu3iEVkkoKUDX5VMUQrVyHIPKoWbgiRezH60D2JI7FsMLWZsPMj1qwuqxBSldC7iDTQCInZpUea3QN6L4ch8o0nmS06eZUc50OuVT%2Ff8qDtOJ09pQrQxcQjlMjMTNbwVujYQLjIam1aO%2B1pu92JQRB3uXWvUiCAb6HGWHacG3nZxdOcJ4ZKS6HUA8O7FTk0ERIM6MwRf0z3ozHYBHhskExGJRYSue7JgQBBt%2Fz3y8ChGR%2FnEjlPxPY%2FfgaEPewTJg072KlGZABX2stZHHPaDnq9KWqiOCyxHB9uB8LukdQ9NJg5R1wOQEw7lwDZgLY5A6T6KkeENobta%2Bork2R3XW7UN42Sq6WB7LQ2wAN%2BuYqOUI1vOek7PnR1iFpUSRl1g1BpOaoA5da4xu22%2Fa6VvWrTVtW8f4EG%2BRZ2KxUbLTVqWExl%2FrlhyrL%2FGLF6Ys1cL7ZlucTIYcxY%2BAEfk5olHjIGdbVrXqjefKMpYFfZ6UVX3GfAueri0OAnfTu4Jfd1N%2BtHYgsnRWsLNrD7BV%2FjOVtx%2FDSJFwIikSgqQw3f7hyQY6pgFPDgEL7rTw4En%2FslNeNZZaGl%2BJKGKTKdRQnsoOF6SJ8LogtSodUwuBu1L9WeaYwOwg7MEhY0HNHY4%2F2crFBAoUYyVuoO3piuQyp3JRklhs5ZbcQnnwiCdh5TwGFSywCK15Orff26r6of%2BfRRuZ9D4y5MMqiR1IY%2FdX02UEsdqdmGv8e%2Bz%2BdxNR6P%2F7eEsLu1vcBmDRul8Cc4I1UyjVPOd3n4jIjogJ&X-Amz-Signature=86a60fafd80752cced0b94274059522c2b0f77a4f36fad025c70937c353c182b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

