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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466735NLSY5%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T124219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB4kQO5LNuR%2BLccSsr3eJPkTehh5rH32FjqMZMRyWU1JAiEAyOdHK5kk2vd23FWa%2B5UzAYsy6%2Fr%2FZMcg3ro1Y2Y7A6gq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDHvQpgb3lK1cINfJ%2FCrcAy0ITE376sd5dgPehXAIXpJdJjzHBbt2HxomsdoIsvTICU6D%2F6uj1LmPVXoOYLktdCFnqH5AKHwpuUMc9ihbovSzWfD6DvtyRsFpbRy9jyTBtAiHQ47GnDLCg8hfq0Eb6X3KTcdsDfuUM%2BXehHmQKCuG%2FYQg4fOcVqds7i5J50SH9TDntN4gtzsItbA0Elcootf9bhP6rej9xpwrqiigdXEBhJI5IZaVJmgf58YCZyN8sfLIOXFrczwPBO9uZiHAEtW0qTkiFvMQT9r3nl1GjJoIzusRaGgXqyDC4cj9cbqrTbyF7JFIlW1gEpR7Ppg7ZHpXWyciQ4tXr%2Frc6x9YUEaVm7AftDAYxe2TQDDDktK%2BoGJSEvjTT%2B31TgcdoG%2B%2FDSFhXAe7c34ktB9OzP8%2BPV2%2BgYo%2F81bQhg2vnj3wM4H%2Fy1Znl3drpsZQY0AmADdmoQw0kLbZ2T0WHVI94s%2FBtKzmOsXKx44rNBsR727I0Yh%2BaAhFmVrDssJc9R0GaB7Y%2BJg7xMeHrYThqtm2SBr3hbnYPuB0Xf2t97VAXOveon%2BK1sG1SDO8xk%2BKa4a1xEh18D52uvlEqvfc4Nz2u1glBVzgUOVM3Efsj4Ak6kC%2FKpdP7I5oSpICHjDfY3DLMOKm0MkGOqUBqkApN0bRqDvuQsqt5qNrw%2FELSFPUERHr8W%2FHV5J42OhvkqRiJ5eq5OdtA4as9v%2B1137S6F3TPw3Esl3MugeiFfPW10ap%2BkbFoMpXDjPBopIDORFWt758Req6s7euidimCkHAqhQg3CAC97kl2QxtBcs7IIQMRuuzfayUYctGJB5WZtwYW1RcHKFGU0L%2BJDSLt9XpEZIBkEl7MsMn2L%2BXTT%2FTHV5H&X-Amz-Signature=a21d0cc717e2418f13ef691cf19cd57859efd1eb6517d432c47966edae576bc5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

