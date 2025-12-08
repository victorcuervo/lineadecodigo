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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJZL3NEF%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T101816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClGmC3ufgJtCpGQ0ULtqLKdY7WYas8sSAN9SwnF2o0lwIgPbG4QKMLMlTovjSn8cTPk5YPJPIPgYGYyj6WC65aUS0qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDWcDQOFHw4qK0YI8yrcAzNT0jR8SNOZ0SvxzKI5dJG7RCUTdS1ic2P7OgD0u29n3TteCIdqh94CplIsjdmh%2Fp7v9U5wRSu7svAYN2twW8EqDlik4X3%2BTJA%2BwY3yKY1%2FuE7kDn0k79bBTROArB2tfoxjLazPdPpStLBuzcvgk879p4FplHM1INJkN4gq1WfZK%2FTsYOGbKmU1D8tn3KhtyCoXGOz6SOEmwvqLebPYNL6HUBxm11Wx9Oy3UD%2BwdmYLtIOtBxlpEbEYWwmtgMCMLPlj9dRw%2BAqycaRpbeGfd%2Fnlm3X0MEOmcszN2xFGiO5wwth01tODo5spZQRBQbuF1%2FGl7VMiigN5v216Ri0Dm3BdFNJcbn25SLZSv5pn0pfAkBWE%2B3EdGzE99iBmJ%2Bv5btwa2ahQg%2B4CqQwDH31gNXgf%2BkUawEof3QChL80TxkorrUDXkcfJzQYIA81Vhw%2F2PIQhlIcRWU8p7uSyGlWCq7ekRQV1NCJvS3rVckyjbYxxM%2BvsKjBahgNWqGT4fRIVD032HSAMVkw%2FRXpuKuplERxqLHk17MYy9MLbvT1MYXHP%2BuYQxx1H7rQHSgH%2B9OIe1zw5%2FXJGMpi0G2nnCemAX5xUYAb4W%2FLOfb70kKHotlnHVQCDi9Ta1nb75P3HMPns2ckGOqUBqwLdg2oOVQ6hHz6Hz96b7PguwK2AbPxK9zqFxhyfwZpU9pA2WgtcOk0c5H5HfG0ZOEnQ%2Ba4%2FfS17vn8OJeB%2BZ%2FpNNEHFKI20oAxKdlmhOdAkEi3ThxcKwffpDa%2BQbJ%2BeW8si7tdnpfhikRhPl3vNjkBG6lwAW3fSTHp4kd7E%2BfRWQYz%2BKnvY0vD0%2Bw1Hy868P5C5dXnaHJQQpvPxRH03z%2FXzZish&X-Amz-Signature=cd8969b711715aa1ee9543750480ae1bd2fc944ff3c9852f3d467c1b79fab220&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

