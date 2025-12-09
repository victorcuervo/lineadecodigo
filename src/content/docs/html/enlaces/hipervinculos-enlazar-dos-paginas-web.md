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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BG36O4K%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T232226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFrXrOJT1We%2BUauP%2BdRhIrrfdJEq9FeHbHYpVe2wNRaKAiB80A43awRP5jo8VMV5vChvPTcJMmrHxkjP1%2BMvUseehCqIBAjI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6GF%2BS0kOjEEuvVtnKtwDP2192mAFQEtajTtJ01H42QnvAmxlgkc3UAFhM5u0VmUk9Z6YUGE3y1MFSaPi4wE3I9fSlU7ZsGHn%2B8HIxFbdt1bGEPx%2BGutGDYQzDx9xtneHrF5ymYTwVPeOqaRwzgkST5ZIEKaUY%2BwpwQ8HM5OQEzaK9hktTqGsSpCm%2FNJSdkpXR%2FEgvDQUxarsV6eBQ%2FnipFlLQd67%2BUQXfMHrbMZ%2BnrOhhCNmhISlhZmgZcvo13Q6aRXSNu3%2FHxZS7I6vmp6tLyM4Zgc%2Bs0vdoZtdmz65NB5K%2BjrVDpj29FgKrqa1wSZ1DJiu0EvjanClYIEBX2V4h7VN6AVK1vGQbk93WPjSWZV6JHaX9AJ8fVbGLNmpw4u1WKFKvWvvEZPF%2BL8QPiLbd7fy7y5tK%2Bd0ecBYJ1uKs4e0Xb8FpCxmwq8Cpz8d6bQdinvptb4uQrbTFnvIDc1Wuf%2BOn1qAdKp%2BBtHRk%2Bo7SVZi6N5bHU099F6MX03t2SQRfIUT8HUccl8sfwTNOgzD8yJQr0mKyUdSuQbo6zZNcJKx28UkLho1Mz39q6HWmop2xAPv2i%2BD4c6TvCcQgu%2B4IRkiq%2B9YQNzpA06pwxbtEcgQ6dXCTYrNjo%2Fq1SJ1m9x3yRtlmQzG177jJVUwlcPiyQY6pgFy%2Fki3UI5g6Pbsn5m2UPvSpMdX7HQ7q5XiOkADnqBHBTzjbD%2BHKK2NIHOtJAgZKJEtvFBZ0jHiQArjY%2BlsEPetGrgrBKcdgT0nmF2JsASisvcpWhDIUBBldbv%2F2uv6D0E8YgttEHDY1GInFBKNxwlsCR60plEN9GqrYEStpgy%2FIM%2BBPaxl8bhbz%2B%2BwGH169VpzSvG6jIR9gfBuKjwoax2I%2FrDM9ehl&X-Amz-Signature=7e7996b7be0dd7b2d8209750e8272f364e2007dea7726c5350a8eea4769dcbf0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

