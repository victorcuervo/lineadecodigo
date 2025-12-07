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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665V47AQNY%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T003647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCv4VLCRlSpUl%2BDrJt%2BxZzEb8bfg4f89N%2Fu6JmWfDH49wIgMr3XUzSPsZRIeIeGbm6p%2Fd6eX9gvqoj0rRa4H9UVNP8qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOE2AEeaCb7mv%2B7RZSrcA1aNrP4sMFyNgIpgpyOGzRSQVMyQ0eRO9KLI9hg%2FftLiOERk5nWEW1fvHi5wxyhFPAIbjSYwtwNbgrXiS3CG7pXamHZ%2FoWOlPZNH%2FGihASwZ3tTSyMz0ffmkQZ88j7bT7nTX02CHZ1Uaf28EoToOxQqm6Xb4fUeNm2zwzKzZqGVLtYPkavkMYBC5LMbW54z%2F5Iyq%2FvZv8pVTCfyapD4PMnvbO2trt5EoH6%2BlDEs5ck6N0cdR6mftLS3ziyEBGWwlzpudXm0pIdPPiPb1roer9v8jDGiuzcsizV%2FKUjaDd3ywwFZdFwUuuVrETOhYJ5LpGMMJyOWknvHZZzbSN6VQeP%2BizrMlaTNjD0gBfXNL7%2F3Xy0vN%2FPRVYD80kkiOGXuQd8xFS2Z5b2%2FL2U9ddl1Su2gS%2BCNp%2FJPC1BQ1ehGQMPKZFzsc5cCpG1ab1584%2F14EHFa7AG5QfkBtTR%2FxYSMeYxbApjs1yYTiNk7YnatUqjkVJ2ERsdt3AIk1RM1MArY5wizynAbPg7KlmqadCmU8xods%2F%2BCv3fobP9FNRiQVvSh2rZ%2FS9WFTmT1Vq9Lrd8GIBFm1huQtwyrjtb8rkDDAqaDin1Ag0r0KLMHjk5Ux3xVPVBxdQqJocw02o7ENMN390skGOqUBZK2QE2pcRBm3GREIQBfF82dALv6j1ywep08f9m5sMp3b5AGBuJ%2F5QI7mR%2BQS%2BcPIeaK2XIpa71HKvZLs91WOXDdwugtN%2Fw0oM%2F0jiuaHY5Xu6suLUl70pQ9LpTv31SGkWdOOCTA8z%2B2%2Bkp8jP1tOBCK%2Fie1993tnLzYdfCghLYUooqWJTPefcKhHOK8TuprHQ5GJTibLQCe260U3qfOIxIQl6RCO&X-Amz-Signature=2671df06063776544bec7914eb4d1f718b8a4d1e2003884aa61b78c1d8be0e49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

