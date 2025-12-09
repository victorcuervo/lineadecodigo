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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBMSJY74%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T022349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUwXB%2F6cm7nJ2ZpY3JSl7pvJIFMvE1wiWrehKDS6F30wIhANSsttX0%2BtUBj%2B7MiDm0ivt7bO1W6jjUV7Pe3DqU4D9YKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy7wbSQeKfIgGPkaqoq3ANdT9gwU9m66su0eztHQ10r7Kz6cv7SJ4Ye%2BUHnwL%2FIQjzsIQe6nZ0dTJ2adZCH7c0lxwKPBNk42A7i2ZEH9y6wRePJi0NHmrOc0QPERvz53Hy7tzDlWcHwKZPy01NAGDVZG29zwRPTXfqF0Ybpvdcdvt8mOmTk4tJ09jHGmtBJfj%2BqHmm%2BmrCRtMSDXG7aOrX0CcCWNAJM4G76Uyx26pvSdQkDLuVAeVKVUGT5QQH4cUOMeVHm70JMBL8RoK8uLBVvoq%2Fr8PQlck4Zj3hdxjk0BPQkHF1cVkyS1XkWDuZC5uV9b%2FCUbvF11cqPqCarSyYWQFO%2BhfuE3Hx81BhV7A3MBqp6Xz%2BFVqjZAsJCulUME9n%2Bf0i%2Bs8Ur%2BNpuxLh9zHeMzYU%2BH6uVFuEPXooxl%2BOaJv%2Bo%2BHLzIDV3%2BZvGY5UqvCXQ9I1ER8TfjGWYxN4O%2FHJStLbxGqGWrBoVL%2FaJsAm%2BuA6sye7VVgxG%2FQYmP%2BIh66IAZt5zeHlQR5vt6w%2BG3lNYYrTUQ0gAgBO2I0lBZfNX%2BghiutmqnvWMhn9oiEM0laTxQnkbCBUX7Yx5%2FFhjIsx7U7cjrD%2BEhogPlW0imqnvdT20w5Nq%2BKSRxcONWaOfss%2BONjYp7HwqQXNuAjDEj97JBjqkAVH3Voq5iA6Ms%2B709Jj5%2F52DtCuxskrbWsbQdcWnq5IpeEDKdef1JQ%2B6lmYNnRHprkv%2BNXlapuz74RKtqu6Og1AgxV7f6WpxK732WrwYEiIKsXCTVEHpuoDVAh8VfPQXbZAHLNqjLrh%2BE7hO7riLZvxatQw6d5l0q9ACvq5XmMr7xy1xAh3UzTY5n1lULAROzBZMbUnxSPTXEMNT3%2BrrN49aTJgq&X-Amz-Signature=e7a8f0790021e90ca489961307e01d18257d9d7596ede3b3d67e0230562212f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

