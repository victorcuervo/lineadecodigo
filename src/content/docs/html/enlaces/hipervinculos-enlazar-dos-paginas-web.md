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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGIF4GY5%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T235656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEdrksR2DO9EY4IvAkjkExWuuFUo5SJZJ6AxnWzWyvFMAiAa65bss6EMR2lnPqDORxgW3kOj7imHSRQGLLWPz8RJiiqIBAjI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8cpWYF87m%2B0hwDERKtwDRPkbZm9W1vp1MYXMOIGjNdhRP%2FS2ARTf%2BadysUYn6mNLY%2B8vpcci77JRmdQ0n4CTQkiGSXVtbrgk9TtF2osDhR6u%2Blu1MehW0AF%2B1eq%2Bpp1E5y153xu0w0MWA8TMZLVeqrGVB6KTcAuLRpzgMCPkax%2BQ97MsaSN7ktD7fs9cxposeJcTYWlXW1FLReZzJl4TLDdIzu%2FIXpKRHpo8Mt%2BMjWAuEu%2BY0FP%2BKcE6sph2HtIJl3lbgd890w8I%2BYdfHXu87l9tdNw7jjmz3VexTv0%2FiBoBBowqO7EGl2PLSUf1apEgK%2FD4Mr%2Fc6ikMjRWik6tt5d8m1YrGHVhaDiRZRbDokc5Ubg3rd8NyhmT%2BuE2s50enUt8mJ9cZw%2FhHzJecH2tXMgObWGsGOXUZCjJhvX9zrBd5CAatROu216IwPqjHh2S1zO%2Bu3d3meevOt1MYUxMozzrF3rJIvGTRRFIVcJM1Yat%2FXqSSmNFqRyT56bBsOlTuEJA9qlZXf3XjABCgQpvDxqgmvoapZ6OxMZV6OLl3iIy6EXzT5r7jhS53OdZn65Zu001np97X3bfoBkyygKJexMyrb%2Fka7oqorwf2d0w%2Fvlm554Ozg4RxL%2B8VmHQi1xACaSRxpWbJe5MYAFgw1sPiyQY6pgGaG%2FlDZS9IszX8XkIWKuw7%2BIjwfd5j7L9vJ8u2KUTUhBgV5qEE%2Bp2jxJgG7PKq0UockdK6YBrDw3hHHyJw1SMBg7RPl5nk5iv%2BOzGNjwEeaOlqUHivD1%2FZNVyEoUruAXMS1%2F7l1cwBPLu59CYSl8UVDm7PEqIMxq9wnBRKgy0ulIluHmV4FcJ1FCp3w9yF%2FxbU0kprk%2BnJlbF6GSBbEzH712SQLTn4&X-Amz-Signature=d81364dc5fc971c56b9cf6da22feb34f7bc5f1bb8a41ceccd162daeb3cce92cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

