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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIAAE3EX%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T025054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3bPNni3ivdxhtHnlTTRQz0z7XHwx01GRKkHA3NUvetAIgFEQFFr6HPtlP27c2RX9zMtzmNOIc2CDElR4UXnKp1ikqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOcp%2Fd%2BJno5NBAKiISrcA%2BVz%2FDm45hcM3zV7LdOKpbe2p9onZwioZxiRZCKuXa%2BXwvaGEjVksLvICz5e7GowYAnANzF7EBweW76ZzjCvcbaCvPAFAMCqBBKd2QD7480jPgs%2B2972Gj8devO6Fw5EJYXdQxtjOPg8YSHfXcTybetmOkjG9ZMmF3SdIMGoPk1DNkrlh7OoADuVAAEglJ8EL6Qc60vV6iphfzgM6At5zMc%2FR3bkMG8KwHi4oEBIzT%2BZe4CZHPJDdyzOLzT7jDzGscllKWmOcoZYJs5GPHyqKTtIwv0yk9it3T3%2BMcFtAExpyGy4cpgVu74EFB%2BA4nyb3cedras%2FWu0%2BfpHTbVdV0NQlzYZgv%2BhL%2BXoN6ry07u8CpUCPplIe4Do2X9Jt81sT%2BFqE29I0xbPe7IMCD5jPLnT44XX5M7wxF%2FaWcPRe1krcpzTjhTYGg4tMst00e5HkXtoYtWQFhApqkAj%2FwEZAf534eelgbmHG%2FATzzKd9O8Kt4oTE%2F4NAujx0X8kpH9dq2RmjJQeDiR2YnwzaeOP9vA0rx%2FyAcuO%2F4SvwWFt1jxPC05Ss5N2WJ1dvDagPkI0REdMUrfPKf0kvuzKyBs6WkIZuzWDYgjTqwBNg%2FBJjrPPWIIIlyATurkc7YglJMLeO3skGOqUBTwD1cuFYIOWG2dppuUh%2FXReZ1OpNSH9To%2FBQwXFIl7ZZ3nQvHzJjbj%2FKaWUJdJg%2F0yUUzRmzWSssLLWOopGhaZC1%2F9x1GafeK5PAMrnhYYEVDr9h7rPJ6bLRDk%2FE8myfLswDK3gpJpCm8lJWxlrLRxO9vpZ07Ec4NlH%2B8iSo2BeV53EQtV7zSs1NnRjWrhmMeUzupPr5CvWlbH2F7kMCV%2BuVwoeD&X-Amz-Signature=7107fe4c8172d720d806f8133b0f67aa372229190b549afaa04c79e853a591ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

