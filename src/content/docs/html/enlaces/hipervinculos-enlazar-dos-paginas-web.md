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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XI2WSRUL%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T165241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMoUKPUzs31qieBDkHrtGw0msJifai9zc5f2qcxB5fTQIhAPFaEL6bzDJgqVG6hCHcWSlbeijlrZp7JibDJ6tSxn9%2BKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy7FOm0DIj3n94BS%2FMq3AONXP2pU4Mx%2BZceNW3Pyvl4MbmmHpCXTmZC5f0yFzT6d%2FYrJyWCHrw%2BNRlatDpP6EuX46bccaBAt3g9NCk17SNKbTazikQ6nrmFgT8x16KaQDqtg7eTeMMDFbpDrW0ZDUknbHtZrKs4uiG%2BaL0rZorphZ%2FvjW9KpcdaheiD%2BG15TUDu6MIJMk%2FMznN8Of8ed8Q4OVQ7qAZEtV%2BlgMaV9Z5S5dN%2BlhjHq8IOJEWlreblYA8ofoTalU%2BbT%2FVHMcb53S4p8MaFgHHYwMYeDKqfbIlOz7%2BkXmztcH%2BAMeoSrfaCLkNZlIAKiNFpYhtsc85CWzoBh6YAFhMvfX6uoqPYYnzmDcmzMRVPpO5VMpKfoz%2BfdiiKpWV6wF6mIFwLRAFGH77gdDHXH0Rtc9RQTGjsxBfttESNiUtscOY%2BVXlVu66%2BBpO%2BU28qt5BLZSTZPrqigCt7PDioVqzajHzO4JTjsTYJkA1KwDnGTeRj0goqayVX06wG%2F8D23MVlduj7eoU%2B%2FcHXYpYXB%2BzkPtHDA%2BBhtyhPC5V%2F7%2BZhFFGBL%2BuyLtdzLeGY63bqv0G4DiBXrY7N6y7V%2Fl5QpSmCPgTqbA0BvcNAKPjU1uoPbxc2M3ph2Pn7TJ7v065RP%2BtDJHoZgzDgmeHJBjqkAe5QjTVBZ8sCKld5DbYcCqgTiL7MyX9t%2FdZ1doxsF1lA%2FX0RGlsShnL%2BM11LFaJqX7d%2FilMfuPlC1lwIad24EVEdSn0q%2FVpPrUdpwn6F%2FxoWHYeoT4q0vEYhiO5olzwdBssNYTSCbFU%2BmGXHi8fOyGxyKv0V21Db6A1yTPXxjac5XoDPL8bD9jgvGD1uqplTiZzolNppScDmvXd2H2cDqvUS3Ymk&X-Amz-Signature=5b7efc41508f973c901ab246d51092b5c6679645b3ec107f21387a0c7ab05842&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

