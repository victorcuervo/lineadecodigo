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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5J7M2AF%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T100235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsT3PzSTAfNYC5z%2Fx4gLeMuqLLvqapPISH06Y8Z2ZC0AIhAPyfUemFWuD%2FXsDD81VaiKjoGGzqHM6QHoLepB0QwDG%2BKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx26mXCtba49xRDEUoq3APWbOS5TJOtDbMOsVN1RXTQR4S3FzUcvi9Ln4mOjLlb6z5M4%2BDSjqJ94tZE6oI5IrMWUnt4QMmQPtX0Dk8j%2BJH5DNcwu7bh0zSKvZfIDsT4sluQnJlK9AhFwD7sFwHjCCOE966TPNF3iCSuKkRcDmNfsYQLUhP7H%2BvrgAIzDic2gdhUQg8W%2BxwcO85QqXa9S6K8NGzjD6ip0E4xgnv8VN8aiD5K0YAyYn6OI9auI8KgnhF5d2JssmKJOs86h2yTEKiihtSzUScAWxUIDkxpwUrgJSSzPQxS6Xg%2Fo00Sfm9MOCGNkJQdUhy90sfyOBrWIiueoWDb6CeMAnpLgRXiYKvEeV7BhzcsufrJUB8gx904ZII%2FUqs3rrp738zFvKz5C3PiFgnznrE1w9IOTfD2CiiaEBiSCTIk0R%2FbOn0SMyeI0XIoxFGrb1ifGAcuWESoryehUxV2G1b0rTYLyoNUWkC8D4PHlOcDHQ9bZkBbjO3o3KOs7TUV%2BDKfV1jXptQyXnytTTTtn4Djqwbe%2BojtRJ44fpB7hMPTZEy4ZlWK%2B0lkP0dw33gVgZgKba4yETL8U8YWfdlG0f4vor4qZMAzKg081CC%2BG6jBcNgB8RDxxW5UQbjwMyACCyohxyVIUjDCmtXJBjqkAd8D1AmFN0H%2FxKrfkhLvLu9Wa%2FJBz4yyzHGea%2FMgeJn2%2BcfQnSwXko5PzeZMK7d3pQgK5poF7QcHnlHCDc%2FJgKaXTDJ3XXq4nzvJqrQf4TS69ziKlEXF4oSWZVc94URc8jbMpjsjwbWfQbewo0jmeLrvN4pqB%2Fv79G3Ld1Cej%2BuqtjUS22xHfa%2BpDPugoHeCVruk%2BrvQUBJ9queJVRAQFHta%2BhUs&X-Amz-Signature=9796529dc521352c3301f54266fa73936f5eed0d4ae2dd867cb074fcdd8c555d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

