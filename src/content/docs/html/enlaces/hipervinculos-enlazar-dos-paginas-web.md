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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ET7DYJS%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T172841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEgtQBMRxyCeklhzFMzQRA9r%2FGACofd9MbNp1bLfe%2BsoAiEA5BtV6QuoT%2FXsrzEi5ekk7OdZxEeORL%2BP466cvlol%2BtkqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKgLXf5rAurjHVyH0ircA6b0Gg9fcUMNOYB5F8SG5Ci7eL%2FRDQDvF2XhkRj9KTiKAbLED7FmsCfQJ6cYSXzWPhoPTTas7Cm0YMkXL%2FTyBvbqynCrocWgmSVCsqElLSxBZPdbHVaaXihHQbDLkXArs9Mhbna69TTZ6VlVKAyzGA8XBtLLn4LGOiLIQPJpBBwS2lYHSUwpLhJVFTrvuODdo4pukXeeTLK%2BbSA4sd%2FKskaL8VL%2FiYiorAXkJaaNx6nwSYpgpceFePImTydwyjnlN8S%2FaCJ7TIN21EfdPmWGzics6L23TZkCA565MzNdpcULqCGIPTu%2BM0CXWO%2BP9iZ6vxgPnzPk2urmlwAuqBGjXw%2Fb7HaiNwXY63nF%2Fr3emzT40tJYAf%2Fgf3EzDz3wzvt4LAZxixjoIOpMWbQmsuygnb183733NJPo7bYdyHyFigWvsw70sZD4RuGt%2BcdvHIYmtYy0LbYxcAR4d0m0mU%2BzMoAQw%2Bu%2FzcMoobr1cunI2Z4AFMweirGZ7mZgzxm36aUihyPysKgj2KSVAbC0c%2FmiioRAFsuvMB5cK6A98ehaOjmqFssCdlcezllALsQ0EShCpl3b%2BjoJQK1XVjfdKJFc6WMdfx6ZEaoXfmUqvkQslz4xVpu0tti7ToRp6I%2BAMOqX4ckGOqUBvPYk%2BQ5C0wg1s4l1BKRLbvcteYrKEwQKoJ2OEiL0hl%2F6eF2UuSQIwTHtAgY2f03KR5BYUAuy562L9oUSa6iHcxkxRVbtXBHWv8UJ54FcHQCXg1Rvwk5NjF1jYgND8bxQJ960aCAxCxyWS%2BmJrJWhVII0K00%2BYZD9FxL4wB%2BoD6DQbcX%2BRpH6nXu5I3iYOgC6df4DvsWFL5sQuuvOV75G9APHO91I&X-Amz-Signature=7455a8c085dd970368e50ec36f2773f3c5330462584713d4472617d4db2dc2ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

