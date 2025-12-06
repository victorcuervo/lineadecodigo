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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YK5LENMI%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T043346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPtI89D2wC8UuC9vMf8JH9B8wJ46GvzdeReckTGQK9qQIgc4c468T%2F%2BFqPldXMxXva1R9%2B9GKvwoH3A1zh7XUGUKMq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDJr5xMHvOLpkPysLbircA9pP2tvuBfvHPaKl2h2Lkf8Tvk9ybYvszPiLWA0TeCG91tv24tSXNqY%2BbVJs3JYeQiaZX5vlneGPLrJoXaLMvq3nrYTDMy7bC7OgcUJ1JU3GBzNxWnn3GWWnhoqfjbLKFCvl0HulJqxvwYiHNYWXcs3S2gX5vg%2BkCgwEhESW53DJlQjUpKl7eFn8xs3ScaWoD4VQJdYbUOi%2F6AxGz8S03%2FAo8hTjtBhtzr1Rs1vbeJ%2FbkocbX%2FMjP19n7be7QxQkciKJ5uFnkeWgCXN9eE3VLlybR9a6j%2B2zXtaqyAtxFEOelkREfijo7tEPvSNeWibFVzixJGOUVQnCriUSoGHGyoTYGPaMJmOLrUiHE9FeyzrgCo8Pr35hZqPZ8RVCbnqdJbijBH9Jin2g%2BuTydx%2BvSd3vLU%2B3Vx7fhw61n73El25paaCr7uY%2BOy7w1KKpabcNQd8pGNNRlbK6Cqa2B5KASzdc1%2B0nm4ZNYOeoFAC3VZ4udHr0yreN7LG8UsrMPgi%2BNT7%2FN7bpO%2Bz7U6rm2b%2FwXxUCnJzIKj1GSw4sCZHsJuz99GJi9xZWnOTMFXBeQ3eF5lYjpJ2yr5hktrU%2Fkc%2BvHO70xVB8Me8HDw2nrjmLMXwTwkf3Xev1UTSpXFZxMMjezskGOqUBHsiR34OV%2BYJ0kpt3TJNX3y%2BZBCIioNWxWpZrJwTFzbcrw%2BD9um2U5vGeyCNYoOReirFJQD1Odc3zBXTBQRVuwy5ZLhLaLZIMWEge8k8LGeWdsaRwRuqTLr8MjKebKxozo9hfYCw4X92OIuB8K%2BX%2FdNawnGVxdphBrlZjvo298J9H4lpN0sURBCsoGArlExJqX4W20dnfPeYnr%2FzmQbTzHm6dIZ2X&X-Amz-Signature=0023ea56446e4d2891c17aaaf9b5608f38c6eb6d603c68dbdfdbcdba02f08f1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

