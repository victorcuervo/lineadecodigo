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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VCNSIJU%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T194948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFYWcLP2JrDO%2Fcx5DcyXck6c2RCMsc8qHWZwCdAyzCNvAiAdHgpUpvb8pFWQWgLstPs6MW%2BDCyM7TklPy%2BmDS7J2JCqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPQmUOk6Mo0gWrqTjKtwDgCHNhk8VqBwqXZeFyLp%2F70%2BNBTRVrbK38xNayi6VNwqNl%2FP7r0LgivrUVHHal3v0Ulx8y%2FqDr5PQdvg5%2BMutckYGrbb%2F7uj6ff5PIPCpUNn1XMDx54MZ4t6eWZpFfoK3tY7h2usHqKGU%2FsEwO1DNzX5pSxaWD0roUDPr6zvEuXFVQGwnQCqZ5vkmzRGkzo3hbg1Z%2BKhTjA%2Ba4JRh0%2FZ%2BMSExRqqcnfRXznqiznVKeMLSA1brL%2Bo%2F4n6LTPfgVAJwTFp4h8JbhKVlCW4mszaqLuckJvUY97uCdZnI5PU5jC183BDjO8tnbgfRvdXtmaF%2FaqAdwsOin0N7FTJBRIY5lj%2BbjY5lTuBz2q8BzoP72R%2BzG20qITAagC6qY9f719V5m%2FgvRM8FcLQA5e%2BAVGJr0raeyQDHMag%2BWrYSzJTpfooslLTwwCGWq8AQHis3%2BIY4c4QBkR8JXBjpXN6dRMgJ%2F6Bo0jBiPM7YgQPx8HGp%2FYruzbccP%2FnliWJ6O7Xb5IzoqLYo%2B3TbeEcevYrkCoKHMX69YA7u87hILnc22UBsGY%2Bz%2B7dtrQgmnWtfBJ3I0aH7XEFy55pOUNchNCcF9j9GqPd8rgcrA1prRlpyoquBsUJ4p2XdOZ1S6zgRWtow%2FrPcyQY6pgG43DnFuAiMReZs9j%2Fp5v9whJCjEy3iA9Qm%2FTZF%2BosgNWeTS7RjnawS2sF104QHKH4HRxNk8wzAizK2hZP4x9I5UvDXuPpMAXstlS6rljKH4cp5SNk8vgbXvZK030Xz%2BWLM%2BFKuwL7OSMZ%2FErI5zBaVRWwqeRLWb%2FBANNgfzvU61aKHD0yrX26kidAo5lvjJVivcrHHcE3KonmfGS4bDCb0yX7GaXx2&X-Amz-Signature=e27ad8b457c2104dea93f6f85da236c17ac47a7fa01015749902013750d2797b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

