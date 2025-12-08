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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOHADGJC%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T140438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBUjf97quiW8L6PaEQeag1YY1h76mTDtu1JQm%2Bh9ZmppAiEAsBVYaFbs5fmakoRy%2BNa8C09qOM%2FUXhFVcxXLNuK1QQUqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDSYL9k5cyVmTEK9KircAwrSaSV4%2B%2Bor7nnFB92O5RttdK73iiDBrrbgMXZ1XjzvkKD6br2AN6JU3vyE95j8pd4WP2u%2FsyARqYhQK0LrGQNCZNvTxugxqgF9ojZuoaUolcr1yM69h3o6c9rY6oMJlICX%2FPvuQP0j8%2BCwm7XCFcVDbyxonJkVKNjlxTW12KtzfgK%2F2olnn6Jp%2B4M%2BhtTVDJL3vyYQzgfchSVytHWbQpjShtekgYfLyy%2Fq00yVY6kkj09qtocvI%2B5Cm5pYli5rwKiyrmmEscdEg6hZcfH%2BY9mJSZQ%2FZRYCJ7GU5yEoZ%2BN8Kl3YpEgUssumhvJb0AjYFNlEu%2FsoVwIrXxi226b9vnIRXb2o%2BLMKUT98ff0UT%2FM1ucodkrjrKlHygqWmv9wL3Ccf%2FRYFCpCQuuhMW6clxKM6NgQ19ciTmS0rLvSawEmwY9sO8ns9lsJREulngaNGofblMRcUgLJ9NZ5fOkeuLZzIvUNDaoiRqJBszBC0G3dC7bhV7pdduj7GdpX0VmSGKN7qqVMCBXg2NIRL5n81x799m3m8sPiyAXHlz8GnFYLzKmYYwQ%2F8wiUfImZqNQGGOuDIJ%2FhxTKEeH6LW2SAgsotvd%2FL9Er7ay%2FVUiRnyeH%2F6KYeX8hNmTAnEb1xuMNOP28kGOqUBm9RZE%2BcNQPIKjk8NUh%2BDP3Hn1q2tYLrBQ4r1NRonMi32USxb0gdFyZu%2BSiIeSNi15xzEuZFd5PDXKKyVLsjy1%2B%2FtHRZbIJLWzl%2F6NyOBIWeu%2F2z32n9T2fWYn5lvgx2HFwScAfkpJ1gvbQmAxk4WSGHuvmWQCaYc%2BeLBpaMEtowVY3%2BAV59vw%2FKgW3heVdfQsSG1W%2BqW4w4%2B%2BhisLu7EYfJ2Rnw%2F&X-Amz-Signature=30b62b313d15b6b3a048fc3a4a014f41982aed363ee5be9da27d25758de06952&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

