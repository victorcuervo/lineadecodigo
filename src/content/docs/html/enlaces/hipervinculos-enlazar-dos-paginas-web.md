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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFN6R32Z%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T043346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQDaidRig%2FPQZ%2By3hLPuS4wJLX3F%2FbHfpXzO4rV21IF6aAIgbRMHh9zDHuc7mRyCrkbm%2FpLszvfVgudrqaINa3%2FYzckq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDNOsJB2DS3jlocfSzyrcA88S%2FDjthEoepZTsrqjuekBJCiisL6TObLle9Rwf8307nKuQjkmoZ6llhw%2BDpOzHfzSmtiltpOwqb8o5Jioj33obepBRUenBsZVfmpd0A5JHn18KgVo4fwRHTgC1sRhJ02YXzsfU9FcoYjnEKHXGWOB9U8dXnp0OPMMFpMv9tbTj2q6MoB%2FeYGOXqhhVLENpNVvEdcaATHYZZGIvvYB1lM%2BVl400zG0oAyuxRUEJzOW%2FBAXfqor3Y3%2FjssK%2Fp8oMwvMqSXiV%2FoXOasIFJIcIbqiIJrW15a7Swj%2FRq7Xkw0GrhsPGOZNykTbkFqIB4MjFOFlWI%2FTrKHGXF%2BfyqqNQ2ja2Jxh%2BzyRbHg2zFQanYHaDY4qfPNska310i8tIXH0vQwaYhn4SqGN%2BYO6xXkdglW3zmzoLmcwZzPwoCDMZIVekH2ifjNc3aI9IUd0x86LNZRZX1n58mUWOc%2BSDW7C9WN9Adp6Ko4MLMT0eyIrXnT5lMg%2BQaVgN%2F3i3C8TJIWvzdhlIGqZZbYyAGNio%2BCOes5b4ALlfOiIYCb8vMT2vIjwq3vU8E5ieYyje09jW%2Bk7dgBZMA2dGUPnSwXLoBkWPfkXi6yDbKIFjYrqGFK5SNztWEvVclkH1pociz0XIMLSQxMkGOqUB549tpCpTvEh5uxPD7VrYKl7eM7X5neb59RVQC5NuB4qLyAoBexyXvlX7q0ry0%2FkeWLkbfqIhGbTRT3x32faghbwivXZppJz5ieN65ky1IdflQqeOWd6AP%2BnjMeUHwP2zykzhSGkX2074aoArYfEmBB%2B%2BoVHIITfzlU1R31wEctU7tVPUqVNI%2Bq175IDA6U1SYXzOrqAbie61dnXmpC7eW64BPlpR&X-Amz-Signature=9df5ad896c366254c3615b64c8b049884fc648f33524acc1997f11f22d63c4df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

