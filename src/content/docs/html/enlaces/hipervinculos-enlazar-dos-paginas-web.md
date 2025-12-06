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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2T4XTZY%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T103623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0WGTYhAQ%2B9lVJ3AaFqDA4yOk4uWJED1AmrsyVQ7Qf9QIgEE%2BgoZcUsonfTdrx9pkcTSDIumcsNH2xXJb%2BTljOEjwq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDCM0xe%2BQPa%2BS%2BQ9kJircA97ivplbX%2FpyfmWIHg7Aq64vCwwPBYa%2BbPegwIVIeVSmIkq8zXjVK1Q8G7407uvuT4CF6TsGdqWceRqsdNtgODeqlvdshYbbtUOjx40zP2Z0l4XZuFgscOc2ITvOrgGxzbnnLCi40at%2Bt6dGpcaZHSAWaQVUwpgtjb0fruqr3xZ%2B5zM3QId9mgfILz3tRSDFnPzgIdrczGegit8X%2BDAJK5gGADD4NWj48J%2BhdxV2YVbXFyDnSWgLCCdiLNVm1kVb0MDmDB9dA3rnupUnv%2F0W5lpU1Jop3275B8hYW3Gp7T3i4%2F0rxxj3hxhpSGT1QyIIUpxYrpz2l5OiXz%2BOYtESo5kxZqRk2aUNdJpcLBj%2B0pzPDmju0ooj%2BUPXF3hkKWpJnk6oVEaXOehdtdSokm9RMglwBf8ywq6%2FzuQiWe3vjNvM3h13sd3nH4dKPWnET4gMS2lI2znP8ddJ9doMheI6PnCKKKbyhVUQt%2FPrYG6Az0PIwi6skXUFEEgT7QdhgyhT1znUTGjOvi%2F7NkK4Zx9Ay1jhw773kuMkM%2FPN5AzLH%2BjkBvEZw07mnDZxCOL3Z2hc072Xdr0G2HAfEUKvz6ElRRzfOIqyjjD5soNNUua6qLSp5wpBscIyQZmkLCWxMKKJ0MkGOqUB7DondxN%2BfjYgrLRAKV%2FmHpDrIQ7DPlRD0PBwlYliAQD%2BGvAInfFecjNThL%2BSk0D1LqB9ypYUX0P2bQ3YPicPZrNpwZ2REsfr26RW6Wi6SUcdEgyE4JTG1qWZkvMFFUsBB9WHKOOlFiDxXtVbJM2ce47IJ9gUKSLEXBpgR3rC9He4P7k8xDEAWO6qyAei%2FyiNnLUmZybZ5foeTY6qvZmfxWmZOGzf&X-Amz-Signature=472285b45d85e2c5d973af19bca0d27b5cfee02929441d5b42440e8e0c2ee883&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

