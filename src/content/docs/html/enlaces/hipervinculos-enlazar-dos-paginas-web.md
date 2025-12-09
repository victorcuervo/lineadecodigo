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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7XG4IJA%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T153845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHFwy2kJYwztal%2B%2FakoIkLGD2MWL5oG8dNyeSVN22hrbAiEAuRD0p6eGJNBuvHVi4n0BUYlKchHsrgfj%2FL%2BQh3Jdr4kqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOHV7hKe3m8uDHsy7yrcAzRBMN2PreRwEKHDztkilumfV%2BiJRXlHDip5L0SADJTzdxyb7lvr6YGWlxkxsovkIJ3Bg7dRN5MXxjJLz4tVdBqXI0TXSIerNvh86pfyKOtn3M2hcsgPCAskHb507ZvJz1B09Q%2Byd0NtC%2FgrCLLo1HZfl7ef7%2BRb75eURO1V6g1evkVeasfPECfo92Jl2bNNjWqzXNYRf7DocwCaX37xNmEhFflde4V%2Fws6AgTQiKJ3sODmwo3IOy%2FOTT3tJ03dhzR9W6S4fs%2FiWPBUv9HI%2FpiMP6s0DCw1%2BMt4v%2FaLiELPy%2FquTtLuAGvwZeYuz2x7wtE6dcoYmF5rvQHdgo3BG7yva3LGPj0RBV44yJpP1y9j30RyxxMp4jIoaky381cxuh9rNReCIxyNbiwF4z%2Fr6Xy9v3%2F17QF3Rz%2BtdSPDFhgibzkXx8EeNpLIV4K0YsJFCY9ooWdxyojtoIBsqx9VVQJKIE2JT21Od%2FO2hkV6r5UY8YdfK2Gb6wKziJ66%2BydbS3pdZB4ZHHpkZ7LfgafPHDdJavR3Sz4tVX52Vl6bLYSbGPLDVD9fv6odQv1HeBuC18k63Rt3JeJOZ6CYbHv3bgeHF%2BqLHXe9CX%2BEir8%2FNhp8MzNd%2FJ4b4E%2Ff2QiQbMOPc4MkGOqUBLS5lpw%2Bgk8l4a9vbO2mr5qHECv4CZIc2MIQu1q1xNbbcr2VSCQiiEWkf4RtGq5Q3or6BTqz7eVJ3UGLKPuBRAs3onqS3pkfQZbCzgUGgWomRYFhDMAPiSEOYT2uSJTu9EKQmDvMAKt0%2FlI%2BwNTAyJeyL4gCr3IdpbQ%2F2psaseDDnENw1nbAzMxrEN9BNUvA7EqWByNarZ2rEdlh1nRPZzjOnbHx9&X-Amz-Signature=2abd1db740f8618093359f233e22750996f752b0e0a09020949b9ff98863618a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

