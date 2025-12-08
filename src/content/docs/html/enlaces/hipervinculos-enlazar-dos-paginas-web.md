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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWKJY5A5%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T033552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAVA909lz4dAhdRyJ7wW%2Fx7iWPx%2B02BzVyz2DxPQNqjwIgQYVlNq1bEzJjlAAUyoNdOpAU17PxU2C7fwmWNfT8XKQqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHr9UbHiRGD50ocjjSrcA%2FxcDMQTRtlhmDan%2BaaRnyCc35KkFbkc4i3ZX5DqzeKTt9WH7w2OjWM4ZTknYj02zDexA26fkLKYcEVDaMVoFhyleDMryO9R%2F0%2B9W9lqZUOC9S%2BUjBOzer0%2B8WrlzFWmeIdS5CRXAO6mY3Mu3Qv5oqIc97lfP4f0fYjctBwc7oLeVdnptHT%2BBFtiQzTGRExkSnAenT8vl9UbHjAfUrgfGQgK5y4cTnFQqmm8s%2FsYNLyV0yZQkDo3AwSBcbnQJjF78qWYoPe2hRplJVdKPJO1vHU%2FTCy9lcOvvTPIfJ6SJDwkCbudPk%2FPLKW3ZFPcx4pwkg1KGmvXgz8mDLxPU1hn%2F0XOU%2BVBgLvPfPXkBvJp5t%2FT7Fj9SipNRN4YvICskwBQqxKnXqbDqEKp5MMUR%2BUSSnEpAtxTco3PgtDe8GrosZjIJrNCWwtSJZtjOhVxtoYdIMZ8LYSeip%2BqkrP%2B42T7KHaOCGbbS98DhrAxcIZLSWudAEBEc4k78Q9RtBjJ3CSD0z%2FjvVZF698zWLrcpUXprgz8a9fafROYnO7uKQQT1%2BhMVqh%2FwTNBIRSFa0uyvm2jAa2uUrs5HOanMN%2FgcjcOkVLPBnLURphU3Ua9dWAP%2B6Xxlgv1aVebu2CjPvD%2FMK3v2MkGOqUBGi1emYeIXdLtVmW1sbFhJF6qLd8FGfXWU93YQAwnujouoYUDsGTxU7t2qAQhbXZL0RGLMGryolmt4i37u5mj%2Bs5zyufAacOC3yEWhFuB%2Fa5NkYwJjr2RLG%2Bpsv5Wn488NefeWt5m%2FFkdxJ04ktWu6wt2iLkb8gsL7eUjHLkg4gAhUHlACtJKks%2BbOi2ft7%2Bd9pUhowwIp6JAwuJTTGVqdiLSVP5B&X-Amz-Signature=ed24a7e5b032be9944278e98f7f82640b8f089b88bdd1e0514d540664bf0e685&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

