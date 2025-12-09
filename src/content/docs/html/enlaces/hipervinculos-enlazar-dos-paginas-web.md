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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HE43QSM%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T164322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFzaB%2Fu7Gj1rzeekL%2FSFHRDjJtP47HZ66MZuaH%2Be9OKbAiAdwqT3QjVOQjyHW9nYWku%2FGKD2rAaf1HJadwNFjOEGtiqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8CHqyGIsI7kaVPloKtwDrR%2BtxobcpYI9XLaf3eoVoJ9aeK4PhEWDhGTqFwNNKBCFS74%2FUKr3o9SeEBmtU%2BU33XMVO8ZphEE28uHgDunxcNX3N0XdUAWTn5GDYr3qz43FzVaU5QderGu4xfOgYrN3t3%2BVZPl7vXo4xpI5MSYU386ei74004PlB3II9WR%2BCnuSSqeJIBvSpaesgbaVHFftkheMa1C0bFkM6rpQOi90wBuXgjDGMqO18hZGprXbdY1FYk7N%2F8V2gMYJ3iM43kOfLLCsHI%2FFPAbYdDwsNtHS8GjFCtshxphAsn2RKJZFSxs4H2N451TaCnKu5OD7TT%2FfDXTlUWbwBVdgEbYHrU4Rj6pJQNks%2BPi9WIywrgqkcMn%2BrhcUGwe5JXfrrkCAeiX8RUaoYNHLf1O%2Fq9zWxBU7poNkeWF5PFEK%2BolEoKGrr5LYTjNbTNazZN8v94tp1GpcFvx966eX8QlyHOw00Q2fNkyfLOTOt8JCChsEUHDHSOAYL9nXmFIkL7x4ermgxGma8NVo%2F3X4JwbXeLFxaURCZRMsr1YKzIN9aCfPJbR%2FSBQfR6BtVIMJwT5dyotGwT5IPXRZ%2Blo91Z5AOOIUk%2FjsmWxsnlGKRTMfStupNwfnO5PDIGppglruv21rFTUw%2FJfhyQY6pgEoeC23awO%2F%2F4FL0v1WSW6h649g2XM2TfiE3x7aSZqUaC9tJLXucCCfrk4FeMpUN86CTanaz4iEVlkN2ADjRS6G4htI9GKtxuRU8bU%2FuAwh24GbSuSaYVYok53WQgNQ%2Bc2fJLx6QVBddy2RbsOXJ%2FcQmWJhFUN7e2WxHbiS62Bo26lw2RAB21hMwS4wkKyHT4SW27kv7cdViCjEVk3gnTCN5r31GpsH&X-Amz-Signature=87cf2a74dbde06e79958a45f659b8e30d8596b939f2ff4c636f563356faad16a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

