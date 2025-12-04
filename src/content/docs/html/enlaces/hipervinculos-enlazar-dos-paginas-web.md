---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2PIUGJX%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T152652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCHzxmsgTWr5QVyVX%2BU1YyElU8lnjyhyzY8RDSpy2HYmsCIQCrjhua91fLRbBgTwUH5JrMir7SbY2G6RcN%2B6N2tvEBKSr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIML0usSW1kcmioGWIWKtwDJ2Fh2o%2BUO6k%2FOBrPfBa7Ft7maQpxTUY1QTkf%2FKNOmhNjgwFTQGjgc%2FdNUB9lTft6DsYcH5zQTybdGKidhtbUvAZtijtm4jcXTVxs4y2nDCndGouChyxyOw%2BxrXAxpr239DwQC%2BHjm34smwJKdmzoztV9KBPcPKcmc52WXQpvAMEKAtNrEnCeLoqx0zw2Jn3bQSoUHoApdu23DPgpjv%2B%2BH0J9cPjmlJD4UCVdG0T5DWmcfrrj0SrFf%2BjuZtUJE3LPU0W2sXrrzxJXJXy0BU4uNjj1tBypYrTZOAz0oB%2Fj2dD%2FzluP0zWBQAf5471EtIgVXnnG8LIAGmU63%2BgI1i9IEVIhEQaQdfr9Q35wmGS6%2F46tZVfO5yI%2BLIzgQF44VaZU20pROzKCk%2FYtJetMNOQ5ObT8xVdAm98kOPz%2Bix5pntdylbJv0Oq1UxV%2FqqBatFTS8qoIFDFoEKxQLkolTk0U1B0P2uMCXEUfFwLgzCHKDcy8FVW%2BhCzcO2GyFLwFIf86zHqpsgeuizVGyeBepTeKrZWunuKWhyYbeuWsR2bY65EGAx%2FXRBaSJh19j0nIWBns2PR9Ug8ki2%2BnOTfG3damSTO6CXvT%2BDI7ie1pB4%2Bx5Z5QQWGUYRab%2BEdWkY8wxb7GyQY6pgGtMeJNqLu3t0c%2FWfVqQFS%2FnlMmLhwsShJKju9uWTzhjVeqCyeWitLsGLZWdIdFTUWQh2T9P1JP8yFPbDxJyFP5cSEW1CphdLnSX6vHFvUIkfGdvyBGcHJErYSzSRdTSyXFn3pyViTPMP8DvPSAHQ02cyu5IMvuagl95JKgGDpt7bn%2FbWefJiC%2F2h7%2Fz8uXOgs%2FB2yhK785RqT0DSOyfzRUBudwuOVK&X-Amz-Signature=a498bcab3e584c7e3a7a74bed097eb23a9b96126bbdaf0d698a45087e95f114d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

