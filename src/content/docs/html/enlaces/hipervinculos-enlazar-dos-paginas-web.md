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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNR3XVS4%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T062933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFyWNSm7AMRXb1CfZDizJSYm7fQuRL6ho7vpSqG6P9EKAiAWJ5a%2BGJj%2BARZAL%2BC7Ze4f4KFuTPx%2FLZyGCrMcQvLU6iqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbZRf1DvrPfnryVI%2FKtwDT8LPKG5hW0n2F1OYONHMyLHgoj5OGAG3Numvp0BAXpxJuqLO71fRfBT9ryhWr6GSCX6SRM3OkzR7H8NKyIV5EMDsXJl%2FcIRPqeXYqeZ63QD0fsuwRHQG3jrYRt3%2BZP2QQCXP89ph2Ea3d0o1Bco9jJt2YDSMoYso3K%2BC6hg8553JZyWgH%2Bw%2BI6Q1foEjRG9GpzQggBSI4ZccvXrbL7AckpfWCRCKZAw8%2FRKXtgF6DkgetRGmftcSRTjnlq2afCCgW53HJ3sVSs%2BfUcjCI7SbttFt1VVbu5zSowddyTwhLoIpONhZs50ZtR3FiKTEwt2JVSLgtyL0UIPMErJNBFCU7f9EoAOwIlkIa3FTkb5%2FtFx5sUgeNMUDfqq12Ee1vKpU0qN3GjRlUvB%2FV4i23lYxOJuRH1oDEV6%2BLs2OogXgFQJR7kkFXgCedrNfcD3398TnutZL8X6NBjH29e3pj1XGmqiVS5u7Ys50YrH2m4Hk0AiDHkjDGC%2FVC4%2B54xCKKKjhVskIFiWTEwY0XSVVKbcG4FLRTKEtCLWS3tjka9b8wp8ss51z5DrBTjAjTc1yL6oM172WBh0MHgbcj41VuQg7ymdwzHdtYtxKKaxEqtVX688C8pYKGDNJqo55fXswmpvUyQY6pgEdq3Cy3pbQDCAA3L9FlPQsWvZp4FV9opWEcnf1V%2FggzOO6hlbTBPAO0sH8cokUrQfqKYLxS6nW9AkEgi9A7uTCwcOYLDsQ0UwUqaN7oIvs70xUUnSrnznQGjjlsqYD324%2B0yBlS079O0tCSFiTVtFmSGAkzEHl2d0pqbIDrpQqoga%2BTVIWctEiLT8DSpQDEdokCj1r9ioSaWMEUW6ZnQOb8yRfnWdu&X-Amz-Signature=376c0008767f3f1a6fa34214e25ecee69c9a148b71c11bffdfc3a3121b87d941&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

