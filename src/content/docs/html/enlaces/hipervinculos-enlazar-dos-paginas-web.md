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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTG26UKX%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T053044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkWRsJrvRFWauyDa60HJm1n2i%2BuBASBw80sXgXfZFsNgIgVkHWEtRsYMZMknRzNS5IEmFu%2BaYeD%2FlplaJ8cPH62rMqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKoto%2F7EoerzFV4gpyrcAwYNUj2y66LpveEW5UYG4Vu4jDl0VXdyMT70x6wULk8PS9hWchZJt2YC6Sf8ghXIeJR6bnwCbbHpdGLDGvLTPH30sUSezoDvDQCUmf1bY39QjZ50wyQXbee7FIHJfI0p6DFI22wgXeiog6aMWiUMuXpYebJe5xZWje194aUI%2FMmRLKzszouO%2FygreeT6kwXUa5H%2FATQyAk1pDSyu9O1yu0uSfhV2RDJwY1uEvQQJJJJGOGT77hAe%2BptKmtrLkcXdfIW32A1%2BLX9SM%2B%2FTEMR23KLH7a7AElx3ecwtD%2FTXUjYRwBXGQNk6GbcaRu1VLYYew5Pn9rTkdOOWicyjhHXTFaBqlkWq3i83gwsntEvcWJzFRNR5qBZwkXCAkWviZmuw3luGCIgDb6VboTaL7lmRRlSZVexDXppixrjrk%2Bi0iCtxEW%2BOWsRmVAjC8OH%2BTCZEIoQ%2F4U5An6VxlmUdjTqzqv%2B3hnfI6sY80z8KN3wPGv5tAygLlFHi86zwSav7f7dX8z1LA549gHlNMSI2mpJegZeXSWRYkS0FZQwoWUbcLRqyAjZJQE7B%2FR4%2Bo3P%2F3gBvO2DUFVwzRcLibli4ihhH4uHtJ33NKYdB8JOWws3shBDHsrrH9lO%2BLelaCg9pMKa02ckGOqUBYUN%2BAUmNw1Rm7uGZRQveoNy1zuw8u1Jo3aQ%2FZifFtLxZtMHwUMvRAtklDXAkuGSqsBarXWkpy8X6RVZY9S86e91JskchPJvcWGFDoMwduVaCuw5DPdI7hbOjZ%2FwTK5%2BIQMfspDN2KDc36hacpOt%2BKwtYqFHIYqhPpsp38e2XPPekYrVzF5042PcGRT%2FgRCWNeNwpYpHuu1vwg5PKSf%2B9OBSZ%2Br6r&X-Amz-Signature=91d9945e012f46c75abf2be269dc96ff3bdccb7689ffccc44d5bef0c8703f6e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

