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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HIW4SKH%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T081016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQk5274jhRp%2B761rmEnQKRMsTwHZ%2FQgyzZ55q5lmmK6wIhAKiChStrKFc%2FdzdYZHIL1XBOQZvooM8ip4ZMwH0OphTyKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzc1q5HHBIp%2FAGITOcq3AMzFV5N55JrF8SgNQs%2F2BwkUTRAMojb7gv2GfqhqcqlnPSbPcnHa%2FE2bcey0s6QaXLidBwl6eju16yOTQtGDGEQTl4JFvkXvALVlZ7K78Qq4coCdDb1rELRxd%2BlLS0rQqEXa%2FDwQnIW58K7g7OV8ge9TIZWFicJib%2B0KhzBU80dRA2I2%2FTrxyum%2Fy3bV2lW%2F%2FKJVmyUKSopIrXmT7Dlec5b0TBnh7abYq1XiBXjA4mpAhqF9r1hjMb6Q3y1ZMF%2B8JbTQk4hChe4%2FEqgu3%2B5onAqqff0AHbA4UVs9eqP8%2F3%2Fi6xnnRAUNqBcffOyR55%2FdJaGl4ErhWdwSit2NwiUPcagaZwBacBa1oeMDdw2dRZ5yrPVyCNX%2F2691mj59bk0t91%2FN6%2FR7hh44lJl9QnohYVFh1pj1LgArBed3FRcdHE%2BN0kirQI62Ovyrw3wgHULYwyMTbrXb0134iNfZ5AycKo8gkm2JWNQCkMDc%2FWki%2BQLz9yK%2F0Kg0%2FlH90uuR3TCFaSDfrkhce3r6WGtS%2BDO5JVMLp6%2BMUksBavjCAtORVsUlsxS7jhCK70HH4saRbepocKHS7HjSnDJrnU8Dj4z%2BfayjJyHD%2F1Fvs6jlbzv2AaKF6Uu%2BZE%2FPvFs8boQHTCApN%2FJBjqkAd%2BhUav1jtplmosmTSXRHa%2FuFIoxIA6rSaYwC6WSwmZ2uwvr45VLQeOdzKVUxxcX5B8JYAM%2FCa2iiOPXL8%2FCfZPe4gyffBiJ%2FLbX9lSlFBJt%2B2R0XeP30Qmb6O0t%2FvW04dtUoS7rqOd3gHz93mGbfW9o50fvb5chTU2NqGl%2BH3t4k6ar4SHwHucU2Zl2m%2FxuVtV0u6dOjrZUyFW7sg7BqTTUGgs2&X-Amz-Signature=cdb9bcf03a7a1a13d506f45f7e26a9a8be6fb4355a1abc07127ab37241643c4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

