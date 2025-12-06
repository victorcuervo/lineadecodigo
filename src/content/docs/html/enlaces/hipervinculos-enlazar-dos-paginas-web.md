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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6JPYQVN%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T190918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHHLRi%2FptN%2BCrqWQh1f65aTUiPtXSFuNY1x93KNrK%2BT%2BAiEA0M4LRdx3k96FYx2%2B7eapnjZz4ROwJkzZ1pwCBI6TDj8q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDHGtB9%2F1E22ddJjOuyrcA5qR554AR9kHMWBI20pq8CTmbLkohuwOijK%2BR4OBJfbpzwrr0zf5hbCfdE3%2BsgvrZ%2B2uk0lzEqdA10opOcjriYc30T7FH5%2BFT5PeTB76ynBeat6HEKKEB1pI2hxuniMMllS7Id2%2B96FRN8HJ44bh%2B98bZi6Srz8XykD2yMi5eMRQVt6PLFOrrPOS6mlBdeJf3jVRCumtz%2B%2B2u1ngz3UXnU%2BxVnltUCRYwFH3%2B7hgBwOOmgHcoI3p%2F5mmwqc1usPR4Oo2dmJn6ATUrPxq2494CoSdb4wi6z90JXDTT2fud9j%2FotUV2WVkDDr59yfTedv%2FCcSF8ybt6Snf3%2B0yK6xkY5JESBnTt61pUwENUM97O7wfNx9BmwKlpsN%2BOzLEnFJMSI1J3eUl9LsD5aEkk00l%2BAx72dfLdh7MbofLQ01yckQae2B7RddYRKsIugGGcv9R3cNFCtl1cZIGKGjgJP%2FKZGfRh8pyEZh3du6tbMie%2B148Ya9vqhfl1WKIOngZ8Yk7tN3u2uo2F8XhJNiZd7BTEpphDPdbo2I8k4%2FCOeXnN5qVWBQzWkD%2FTryClIF70imP%2BFRIdeq2NtPRsx3GoUvDSjG00EAj%2BLT4%2Fu18ZDR%2Bagn045GP9GEBuv%2FAIWphMNHG0ckGOqUB7HHX%2FUScGW1Tg0Mq8MZjIP2DTffxVPhkIPrRW3zqBVHZHOF7Unh7M4%2BB0Ca%2B%2FsKcMVDlrO8RfO5jQIl3ox7XZKBbxhmvItsSG2CrIEuBxjeoZCMFOC%2BttCyP5EqR8JV4DjXvViKPRdIFovyNhTqXbTUfNqxZ1i3csPqQM9yF%2BilrzxVmjDZ1Zk2bXp1vz8mwYJOH8okUZQ%2Fmh016A6VcC%2Frp6KgI&X-Amz-Signature=ce7c03a1f3b6fe61b168bfc9549c7292eb0e32b29d3bc1643e33ed2864e9e47b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

