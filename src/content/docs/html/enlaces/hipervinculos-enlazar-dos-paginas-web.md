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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNGWKONU%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T225848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFWUrECRVKSHtW3nARcd%2BrDCpfJ9S2elpp49%2FX5rjrx5AiEAnpygO7OQBntHnhj2QloPSVsDJE7RtbGq%2BRsK87tQvssq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDLtsXIj3d%2BGN81ZNICrcA9KGuXPzFJsY9unXRn%2FFrmKYuIE2DMXxBUZX6EeUp5y1ZmwTt3asXKOcnDOXrgkKoErxBPZrr39%2B0d%2B7xWLYTozcPy9%2B575ZqXxPrp6uwKiigES1M3MQFNBusDhzhm2AuupmJdAy7wHB5vKXYstGas5mrotnyXVjbFP9ibvlz0K1O6hgfXHX5yw4PN4Hfa3C%2B1rLYBF%2FAdKtMRRxYPris4MmQUSnyNoPGqHE%2BN7rjfEjyQBfLj7dsuvFKDvwavx1lRl7LApSDy7O0lsU4OU%2B1iOCDN5DOiMgG8tDUfdBaLzkjUrfvLjXUn0FJq0P0pN9XQ8z9MM%2B63NzqTXURhi6urxR3XGihGKJwADi1zR9WnGkPwTIzhQitBoOOOizLS6kNCvgNTcPiigcYQsQNlhAcHIdtxx8QJgW5clWofax%2B%2BEEL79PPcNgKf%2FnZETJZvH5S1KIy9SZ7Aj8PyWtcf273QjXpEhdPaKiv%2F9ytPpSyhUlVmIAFqfsVas7Ny%2F2cdVQNpDQfpAvSABdA9hV1NHII8nJSwq8sl1x8u3nJo4StvXkGxfAccdq2NulO9xiHqL6FFDW1A03SaT5EEJKoXAM88KmfWsn9GGoQ89hDc6lAkIxA%2F6x32X8IQs14rTQMPPFzckGOqUBnA6P5%2F5Cra00vtItrOu3WSGXcfObXyshRBT27GLKyPlHgwEYVcvB%2F5TJeet7vepdjIuimKg8OVug1txxhj1UnnNzHiOe%2BcG0w0hgDz3vHdlVgrfvcEA7Wj7J%2BHraFmWojzkdAw1wODgqyfy5OWM3xRsotj%2FkCE%2FtVH61i4Xc2iMu1UrbFSQdYtmi4%2BpMk6ESx%2FXeduJUlgroQO2GR8xo42ojpyla&X-Amz-Signature=003ac4af86382c2f0bfc8eedc5f0e236f43e0a5efbe924b4a92d88a65402a2dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

