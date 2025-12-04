---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AP6WMIM%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T083604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIGyTvQY3EJ9DIGVPvXYV7st3E3KcDRGb9%2BBB06pZ02kvAiEAhNXGPBLk7hB%2Bw2ai6uvoooatNe6%2FvcbtSQ5KgnlbKmEq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDHhTVtSSWL07HU5I4ircA5xOYpIvt6MeDUCZ94bjrPcDuLhPpLvHnS4etwZnkjX2Lq3m9dZyJtM6oXr8g5oHbMuojyJ63Fwh5bhV5miE1MZc%2FEZNeazPh7avRoP8Ka8jx1dJwjG2%2FHhGzToTaV3U93CUZ5aFrp8udKlmQ6o16k5S7s1X99wKQ0%2FQT%2FKFCukJJcQlLo%2FlnK9PA%2FyXmpnZoLO%2F4ZenEp%2BjTMOWYH71k5qjD6MB5WO61qA6tpmQG%2BL4h7IpJhQxRhr63mLP7NlHFx6G0k2GO%2FYA%2FGnD0uEOqJxxzKPD5LTdmECP3NGAKU70n9ivjzi70uZ48zJZoZ9iTWycxEuL8VEEj9qKPDpfHUJLIuXJXEa5dDwv9D%2B8Cqgf4iqzWlfru2A2fPB8ThOBKOMM9MghVyNgVUtrbof65UyRwGXNfCoabtvgn24no3FirGbdnk52A%2FfGNxHNF%2FlLEUcEE66lBvN9P0lOSOrrM8A8yVJkbLlk0kImQvmgLutAi0sekeMY1mTXlrmaSb0hxth4g0KV6%2BICVV1wZC7sOkWZx9NpPBq91QGz8Qx%2BE8aNg8rvDm%2F8Zv5N4U8eKN0S4dbpEUxNLsAucMDKltueihqatW1xDxI3IlIVPsBL6E97joeXK%2FvSL%2F%2B%2FaRVdMMiFxckGOqUBxsS44XvzaaIYIn%2FP1MNr0eAjkpBQK9mHciKM3HgV8b4WNLUMcp8VdqvRqSbcXYeDfsFtfb6HGiBFGzQSkHnMluuakCLMgjzea%2Fbf9PQvBGPac6GedJRPUlWA8o%2FBnFGBvOoslreyUy1SMibUpkzXgEX72gXu822PYLmGm4YJ7gGIkvzIe5dzOL8e%2BqyYBNDqlpr3ggo5igPTBGYgweO7y1YVUF7r&X-Amz-Signature=5cbf4c1e2ee05c1df28cef4b7f08932ed4f6a98e1afc63484cb26f26acd11027&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

