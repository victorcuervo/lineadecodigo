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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRTUE33F%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T005359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtzVt7Knv8Dow%2FU1nIpwgSIGRjwvFZk5nejvY4ZgvktgIgLzvR4Y8eTusJ7eoBy%2BhNvKHBi3%2FLwdNaE4gs5Cou5dcqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDbisZVNPzQMkWoLsSrcA7GrDDjYXBjCdlrJ4CcDVvIpcDDzPjA6crVGfUkn%2FP8bs9sIdQmpqXMay7WFIrQmqWT6ODRNPMM00eTnbytja3OCYqNwbPpGgxEpsmT3MaVfQ20eh99VtzWY79dG2dXXdu3o%2FgiHG8bXzyqNKwjvJpx4TxjxCdJgF42WGdgTJTe32LPjHKDelTtFY26QJkSHiSmY4S2f2oy8S7jbAFIcRARX1AWC%2BKeACxU1CZpIZ1MIyYrHMJuTWD2VOHHWnfNVRA7o7ZOyDf8%2BYb%2FFZ%2Bg7UyJBDe3QcnTa32zXizxN%2FbiFhaj%2BEDG4kFYQezcM31RyAx8w8SECG8sLgawVi7tT%2BisdgWzjHh5Tga1LYZ1Wc0W7lZ7heoImYGfZmY%2BO0j6YMxSshNxameBUVOrRx%2F31ymJZ9%2BxdAfab73QlSKbxqvf1qslTylmH7F8vEovO4Y0uMHqxAlpNvFc7SHS6OkidhR3qBf34xbJhJ3vcyFcBjrn5dunQoUk3aLIpOXJ5yjEEFY2OrR91T4Dlr%2BKWubI0j58oRyHmzpDS7bz9M2iuBK5J1c9%2BBEHJx8hD4Ja97MQBb5U%2Bj7OWTQWp0gPmIh%2FnEA8iTf64uSA4dk%2B2ppq1uE7CHQp7RPGlDrAvgFSuMP%2FC3ckGOqUBpBD%2Fbw6Aw5WO9uTYW2eawlBuWOSCMh7zM6Rb3Sdd29AScic2Kijnd0mF4ts4lQLMKpiIZ99hcSGiKWwThiJIiYFfj%2B0WmSp6im71dzSiVCY5zYfVIW1eLS3TVpD0nZVTEEeqmaw88cWb8%2BpC%2BV9oE5O1TjagCWibgf1FoJWj8q390LM%2F2Bwa9l%2BuWWEPBdb78xwCTxN9QetSbZjPtPY9sTI8MAId&X-Amz-Signature=137f169abae0b926c87e4655d1bb9d260bcf34782ba9c740823be7cdfbf4afeb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

