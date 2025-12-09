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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664R3EAYAK%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T173529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGYMyQprq3a3xMJCJjOZscmX%2FjlkYu6TSTxwNYchLzC5AiEAyL%2FPVMPvtN9jGhMPenikG7LVWy1%2BRfrTILYHEwhnRh0qiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBewlYPYg%2FieO6UZKyrcAz%2B8ufAqwq9B55c%2BKDGIiHbPlnM6TBQOjU1A5IEuOge6ZZkSouvyTtO6qhdm88jUj5ir2Pz1WAaVGBlPmcIEFSnQGCChirDD08SBBa8mA1JuJYzrqRcFfVIzEsNOr0jYmcNRDi3JYBr1olM5cdzDJJDdYuMUP2KYSahMrf%2BuwY0xxtsizS62od5nMehlRfu7z0NlT9hws9xm10e3kpp5QTkyD8vhcPTN9RPIiGsqvlfCPLeFqbKw9%2FBCxymJQiahyag7iIK6Ggf%2B4OMwBhjcFz0d%2FU8rXPUwelVH5wGep%2BEB88cSFPNdpxK0pnMjYC5YSj93jLmpX%2Fw6g8feoTjUGLv1bXIrVVxubLoaNJLwRwMgIdEm%2F1NrsmhxWB7FpBTeqgdJM61SWvFX4r7o6ni7a6hJW4sZzw0vPn6Jd4dvLUsz4I7rpWokYh%2FkPpc%2F2HwzZNKwDhb7r7HVZASHIDZRBAk2JRJ1LPsFzXVLQtsnNP8uBxoerMNuYqGck7w21LfcChnU34TByoTUSwLpzC%2FrhktLPoB%2F4MFwrbvSS%2BDVHsBQtQoOwmdXovs8Kg9WsDwBwyZZ%2F9bgE5AiWfdWOuR5K3HkoJ6uQHwB%2F3sx9htsdIiFZSLz1lWgDJ5BeK6%2FMKuY4ckGOqUBuoCdy1YyR6cXid6NK11iBrSWfO5JSnss5zYeQ1PPExz2Fg5J37hL6Wqc%2BuxFP5sfIM5pEmLPDkZYV9JRYwzuCYbesFlTyIePhCzrO5Z7gZGbUZotXYTRqHCYJFj0LW3oufXTNe70IRKunK%2F4ZPvJSzvYjCUA96U%2BPU3DMeFgCibgimpnLQBkBnqCEkD8zSbF30Qwd5uiM6lDxuyT%2BXDBbef3lcSR&X-Amz-Signature=16c3fe01fe31c93e6945340ff60d6fb226320f13d80d7eebfbc7d2923d391340&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

