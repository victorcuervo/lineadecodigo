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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UT6WLKF4%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T003854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcNa5%2BOZQpLtXgVka6ubX6UbOMf2QiflvRIK2VkqBY8wIgbkmO9f0UcyJZ762yN1luvv7lxM%2By3qUu3Euyo5hkiAQq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDBtKgRE0it%2Fk23wrRyrcA8iAcSMUkBkht8j24D11eD2OkqoP%2BOtizTzmjFxfZz0QjFzThjbuROzrLHOF%2BYXWx0qRm4wHF9L9rAXswgN%2FfNXswqz0YfE1%2BYM5QrYFqGV7dD3aOk1CxnUIQhDd0V8pJPvliaXSZ731Hp8jLoFp1fC3Zd5zTiQmoi0j2NIEyT9cicWeovwFlwf7XAnmDuMecROAH469eEa%2BCqQYdSx3J6oFtKGdoZ0o8hb3TMB7tskHqcUoVbFqpzE0q1K27fedWwz6dQFUakVQPreG5iQWuSCO8Y87NQEskl953QE7RQzQqEdTc%2FcsLjiCSfOMF006qs9gCZdrR2SYLCvweq%2Fqqi5pquEbrWdbMh%2BuKtxfXqias7SwCh6NpikeQ84KAkq72BxlsQAZHKnhgA8xshXb22h72xvj0P9wbNkN6jp3pf0KRvn0%2FqQQfwKAWzsBgYxXOFiBI4LHzP9xc%2BI0jrijK0i4CKO2rep4M2jju9KATwykPlP8nI%2BdqkMR3GWrUbO1i8VI60WKWPfIvSL55mwXFpsCAK4P0%2BsPDQxsi3zSCO8dSNCv0Xc1MjBzJaBSWE2RzErDHIzpqIE%2BTTQwX4ghA1fM2kQErU34LiCpLuDcbU98fTl8uhybrqloq1fwMNHozckGOqUBwdJORSTcvWC466pf4Rf8qjnh7dVcgfcorMTHQ2SQBvOAwBGwke%2BjZ7aWMRs7mwAKTVaZ8YvcZbtwI4N66OlIm9VN39hTBkm25hJpcbFZbbe%2FjxKpxwYyGkqPm9RDaXXgawkXk9iEZ2U52f0LtXGeGxpfJKJHLpRt%2BY8Ft6E%2FpVsh7KQYm26WrpuukJdUqAD4zJ6j50ahJ46l087SR4e4vibE9X2f&X-Amz-Signature=e5af553d1eaa4661e666907a84fc1b29b195a62ee6c75d336fec1d575ed6ade5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

