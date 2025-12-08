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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GQRAEJW%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T043056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHYmt%2B0u%2BJvF5d4Mehw7sR2LWl5f9d%2FP7Mp0uBME%2F%2FiDAiEA3hV0n%2BtNM%2BuUZzwVe%2FflDbR%2BL76DkKb50e%2Fq13DUViwqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLawAqOW09Oc3%2FqC4ircA3CvRx1qLZTASFQKPOt1ckvYHW%2Bslz4CVFJCpnsGJJWuWJKiQlbCbghM1nB23l%2F9STAQfRYB9YWn2vt7zLCRFZlBwGVvTJySwFJvt9Q7TcE94Lo1sK4bcPZwLO0aGsGKY%2BhfaxtK%2F%2FuQXSm9oa%2Fdn5rJQS7SHaC4PB5z8tF8CXLjUYhISZxaA8Z3mCtFea0T16rT2e7dv6otc0yJgvSdG24ZBCwmcAH%2F6FQ%2BX44A8DqcjdIlNfexLh71OO1qo44%2BjNB2E3TvYwiAuI0exVMmvgTAXYq3CWed66rRjsRw0HySzge9fgDWJu0CI2zWnMUKIU9z5jxod0AdKsvIQ6PYuy%2Bc%2BgQmRh1zrg7GFSaZdjaTUzPpefRkUtyXUTYXH2xYolQMPrC0bsPxUQqEXr1fZqGytPwYpDTTX6KKs06q1fOTPnUI6GSNNU4zpVX8j4pUxHMyNw3SXtssOLC8eMAwjb57st8J78tOMu5HIode0yEgF4rK2rB62NQgluBmlnNIpgBcETup%2FH4oQoFFOe6NQuonRFwAb2kbiznaPkdfHfJZxOISp6D7tYUnkeZgvuybxRwyj%2FgKszemq3UEQJLEyyiR7YF71vECT%2BArs20HumewYcS4LXrO4QZ76Lh%2BMNuU2ckGOqUBn6txKlyzKS9aZpsWoryidtMFwdNTngFCnhfFFxFOxNmY25OhzGZ9V3cJfZZZsenkm93iyhsuN8MumlDcmq68OxkOD6l%2BGWeqfQ1UK4tCZMKyIaopINfrt0uOjXTfGR7Cj5eP9%2FpDVhRA6KWY8hSza170PoddEyVKgOfUfxodAvnuoaxM7PA0nD3kHD%2B0V3wxRRP1H8Od%2FPYD1z%2FhO1%2BtnqPW4Ssd&X-Amz-Signature=5a64ed7c71e13424a7278dd52558ec4ef9d6d5fd169a40a226af1c7d05a3133c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

