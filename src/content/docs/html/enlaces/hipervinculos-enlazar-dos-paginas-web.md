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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UX56K5EH%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T164947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDd4dXn7dEX0ncjDQA4kYZHMYERJwwAuU%2BcyPM4ZkHRjQIhAIFNh8MSGgvrXAaKHf1OmrxJBBLQRegNRhsm9LwiBIhiKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxqCfHEMQLd3qXUyFoq3ANaB7wDKjnnPDymzfatWlL60u%2BIEglbTy0ZW6MvXNP%2F5PM1BrY3sbr71trnxkyPDs%2FQaTrRfDZBhp%2FAHC6LXW41sCE3HOv799bjKnfolWVmTRALQ9smxRoVtayHaYVsyz6eeUxeNV1VkCN1JShnHW%2BzLcAEamUkoKAGwRJv4p0HIKLp6tsZF9SB7yn6a1WKU9wSkkYu89sRcIFe3WxXyOUFpUBy1nsKBbFCJowISBJ1oxJpYH57eyGyI2FFj2tlUwOanyfUrRFjlgNLGT03knjwG7XslYWktGg%2BRMaThso5kFdVzoUE0iZH8SoOMrm7axC8kQVEwQpQIvlWqxin%2BplVL4EQYSXLjZIwzu0h%2Bw5%2F1c%2BlmhjdKCK8lpbfce%2FU9pla0mZ1rG8zPY4DOg7SyGU0aOJzo25kUDPjxnghv1QG7gGUCDOB6YtKm5FuWVWi5elO4GUn2Fcx84HYc7V4VvDg0JrZOFUN%2Bk9HuGXcDOFlnL7R9MmJPYqOEnGCNnkYgV%2FZ06izFXBuNM8D9dBgdj836Z7OtlVpizQhvgqO84DLIpSKFTelXlRPZDDPjwC4bxZO7IdMnw5x%2BjjNCM1rVseshf9ZHPubZSqlDZUbk8qLKD9i8N70y2zVdZCxYDCcmOHJBjqkAZFJpjepUYVhEl0hiRwrokPXHTaPNiZGYYPGWg9gWz0shJWPTkdy5iWPlgHyHD2A1Pi6Gq1CA2HNvl3%2FN51k7BLLBUV0qAuDpXqixv8MhPPcgaMc27m623LmeSykwb4Uiw%2FG0QBwLoqHQmvXQFAp%2FbEGfz%2FacfhvHlhglXvABeAO%2F%2Fqi8keGjrOzWxJcFScLzYRuijjnuPOhH2QLpjNnIaaXKTQ9&X-Amz-Signature=3b5382d7dfcec8914fb3a99e26a29f66e309488dce92c39e093daccac5601d28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

