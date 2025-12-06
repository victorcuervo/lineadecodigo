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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662P6RLTWS%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T082737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvk%2FK9uQByYciaWPiuEWsrFQfPA1EFgkt5G%2Bj53YBsEgIhAK%2BMvzE3XIjcJt9%2FVSQ9euhzWZDQGscx7kVJM0GPVN06Kv8DCHEQABoMNjM3NDIzMTgzODA1IgxqDWVq7UhEnQ4zD1Aq3AN8rM8QC4oIrbf6YUCCg4ACpQkqOH4YS3hKe8t0XQAMm9grJVwYzPvQutDwLTxWeeVX4cCsX5jbeei6QTBRWwDJyUGs1DcLELl7UvHf30GSXkM4pPa4lA5WarnFs6dWjzng2wFFRRUzXpHvOD0QQBjI0qhP7ckYAv7k%2FVlog03%2BORthN36x7%2BGq9dcVQMuIkfPXPrZSJlB8MpfPVI02WEZTtQ8hCKuV2MqjaNpifniYw3gbTGIrD1DPMAtMEXg8Y7GeN6nue6plwjQ8QuJR2hLovkNHXkhDe1xGibg1YYQAbOOQsRb0h%2FWcH0m2di7SGB%2F1JELbMip%2BFHCY8dVzDweLS4gixyxY2I4wKyolj20%2FD18euKZy8KLX5cuXJ%2F2lgfu9jHeH75phyD8kjFfoFYull%2BtR769RmBuzEv45jbbhbrxabDuzGcDSmr2KtA4PP%2B24PfZnjHUaNE14gKcJD6WyGFwlJC24gKztIvwwbI2miPzO1%2BGnKj3LMjb0RKMY%2BmOVVKnQIIZhHfFrSdy6JgbHAofP2hKMl%2FYmtHnZUmKgn%2Bk%2Fo502vFW3AEeXNEtetVxtskSopwcXplUF2PdkiTTQWsUwpTLb6g4duyFCL%2FKSKrrsC6qapaJpc4uYGjCnvM%2FJBjqkAXGBavRpfgWooABV%2F8XQeNrX8Mr%2BcpVz%2FULBC8XQ1l6DLR590Ha%2FE5MyCAsnv3g0tsMlZVwYBq4%2FibfEWHvBCpBqUTpzISeVlDrA%2BYaaKjmWVdLRan01wrqwiOa7Y51gYAAi4L37toGrf3YWxLGSk9JyZ%2F%2BYiXdKrNYB0zL2g4cImgPN3Sgi1GsVTEgEDvLgsQCxpLwuW1YP2sCJkaxp0ikWS3na&X-Amz-Signature=2f1baf274c48660b88e76602c85d1d3475b020f925a3bbb47200c9841aec4475&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

