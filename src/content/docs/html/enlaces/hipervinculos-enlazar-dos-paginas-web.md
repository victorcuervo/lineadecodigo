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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667V4U3KS2%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T002637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcp3HHgmssMtYM1PgjV%2BW8anMXI0oqsISjrpyqYB6b2QIgUwll8pikp8%2Fn81cGcuo0oEXqjsYErdZS1%2FUoBla7mgIq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDJyv7LNS8riXV40W5yrcA603HeDYGZ872ZuHtch8WYEXafcF5AS6cqdIrXD0Wn8FKsojrEHdhTIHW8cVPMTdC3kOj8OsjipRb9IEXq5aiA5SxdxfeC8u9B89nEhzLNfh%2B5%2Feaa1MUzEBN2VnuOQl%2Fyf3YlgOSYrUTuxvg02%2BZLP9fN8P86T2J1aIIezJEoalYf4avTBwpI6R16KVcoYWoOOFgo6Ad2boi6Xvsxmm7Q62jp2r%2B%2FsiSUkOCFZcXYjL70ECvwGMFgojm%2FPkNoLlXyWCNARqW5KMWEMbDudaP8zCEYYyubgDVEdhrwg7nPZkFzs0N8E%2B5gevTJ%2FoDQ3%2FzXE7CBqHmq%2Fx1xVLnyVlhq2mgZbpU9utZ1iH42UhdsXqhVZIG4IE4FlgkmPNVjFvQTxRhdca78W5AFhBTIPgj8UUODne9aVeSn49LMjcEdwLJq0IgHmJu%2BYD%2Fzt9pPhNVZOzS7B46FSYk0Sy%2BoIDtPzXbtbw91oMgZknUEyQa9MHbTbRl8yf1DSPl%2B1C5utRiq0d5MFlGXgq6qkyBRtlDBjah%2FktAZMuOVkKHLSDcbc5ddaOA%2Fhx8qePdh5Qc2S3LeXXhEa4%2FkHJ77byYaYUH09eexzdcYkBnw0aqLQ8mpRcYn9JRO5mwVOlsRWQMI6MyMkGOqUBoB2cen%2BZiuLYSISxZ3TWkemfJN8arWTxJXF0yNABNCdWSB%2BDXC21hNGFYyBu7fl0affC2Tac3LU7HIqfePcXiPb%2FU8xSe4XR9W%2BFDBQyD3yaCnQJpV8xw7hYqwshh9ufxGmM4m3917fY8PEkwh8TXY19zx%2BfridLxqVRvgsAL0PoTVuo%2B9FvmekIyeCtC2toyjFt%2BGklAoaIzltht0DYJFM9E4Hb&X-Amz-Signature=bae9f9173c505c392e4babae134814b4ca9dab1e14efad109351995bd29ed7f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

