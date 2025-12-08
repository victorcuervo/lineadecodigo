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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QADXITSH%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T135451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC53Ze5%2FDSEM6eHe4xyxJVpxCUNppHEdAsJ5absFMbPvgIhAMWcDDg08aOQBErxHk7Nb6bqGQOf5b28bFgiEO9uqXmMKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxIjuOphB35BuHsfCoq3AOOkWBzTh0oVf1e%2B99xWdqW5iu1cPnJv%2FBLUaAsghG8wMbQxFwjlKwuvE%2BkUasiGgsdZvGs3k5eT%2BjABNFRqmayNalgViFeAUM5e62joqDpBRkDmzAWYzOx%2BqZp8n79tXEnxrzOE6Ugaeee2URSdyzdNqiPtm9eNBOByBfIdebftuarzn9oOsyP43aKyg6mciLiQZD8T9246vC0nGVEfZYE7jGZ091wHjmmT3dDIPXvzeYACbDuAVMvQj%2B5N5JWKuPJPOqFBTJyxH7yluSsp2zGfKaA8uTvq%2ByGZ%2FM1xsA%2FU3PFcXpLVv7dP0QfNgmFL%2BL3sUjnDMMCxQEX3RHxV%2B92K7EAGb%2FltGwykIheGsJRQVVzl9JpTXrkv3%2B8nLcH8%2BNNmeRglE%2BqNlgenA8QUjXJb61c%2B%2Fwb%2Fcn4R47v5FFcwp2lHly4myO7fnSGox8NRWvU%2FgdCGPVcVsH58TBbf%2FaM3ThUCvNKO92DDasl0jtjDPPXHtFhrMIa%2BKFpABNL91KUHV2vJNOShZrsvmIvVWs8GHypN9Kl9r3EDc8y2efGZVJWeST4Xv7AsXuBOC%2FWQFbrFBWXt8CwlIsHtVJk%2B8YWsJ5mFrjUngRPTcmT%2FEs7h23YlzewmNBNyKC2ZzDAj9vJBjqkASrfT347H%2FcWiFBuscaWP1%2B6m542DhEZi7Lb2mm5kKq%2BIJ5qVw%2B5gSTfrwP9arl6KTDfG0VXiSnBvSUuInrwiyUCYeRL7wVsWw6NuM%2BvK5drSzL2YplUyp8EG3BpB64LTDUYB0ap%2BSvr5LhHMhumqzUWqDYp%2F0Zs7yxYtZM8Ar1Q3wU6PEIyDmPqpTbW16lRmm6657fmFhOlCwUntnlXFCpUq0yR&X-Amz-Signature=4b08faf5af127e365608c2c61f43c84196ebf43e29256f9f415f52b86549ea9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

