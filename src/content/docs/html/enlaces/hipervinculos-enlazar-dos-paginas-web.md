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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQ5EBVD6%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T005027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSGH6zCflilP3SN%2BNAfaFP5hVvqiDHqp2pmSxH6V4PbAIga6VX%2Fed%2BsovJdOWgvFiseZNxqC1CIu%2FOGqeTrexb5RMq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDBLzZ%2BI9%2F6cigINVUyrcAwVoR3xA%2F0ModP541%2B0Sws0tHyZ41vVfGEhBUHgD7EmHwOBf3QdTnTH8NKyBdInob98Wrws%2FBQckEERD9PVkS2Ybf8YMdG7Id4qBn%2BbWogGFfISJOgjZJUTZ7TkUG2%2FmCVrVfOHRpN76f72VH%2BwHYEljc41Bn0l6ZAYbIawmcNpvXqHlFfn%2BD3WtgKJdZ%2BbE6ZWTuHSj6rknQvGVfd0ol%2F2FBAydoIrK5OwBtP6KOuxoN4gEk8wBRWyO7SwKRVldIE%2BrXT11ajlbN9%2FI8x6sHGmzcP%2FxHr%2FM8pdwE0U8ZEt2AvJEc9bv%2B%2FnCJMZmYFrHAbTgXN9APAHfikOcEHbMvyW5EfmwjONpxLZDnszfHDKjMdwnrDHJ%2FE%2BrG2abLGL0DOcqUw7%2BX6XwYG40bI6OrF%2ByeBSlRFHU611%2FvBKNm5aCGQZBQP0Rs56j%2FCQkp9Yc2bmuyGpcZnV7K8NKm3Ran6frwiUwTqntmWNJYnvgrHMXlAcz8DamiXlRtGlZLsdP9fpknHZWgaC%2FZVKvtlMqMr7YxjlBryMsXTTPXBdB8fIxmlpkkqKvQ14MeSiZVQYpugU5mYVFN9NZwy1u%2BH8OC9zx1s1Zs0MOL9tUJFX9KeaoiWKTXpTHLjoipphdMLOMyMkGOqUByRCkqLauPSu7AHPAgpQ9cr5OQSh3uEJS5Ex%2FC3Ch4cpH%2BOAvIUjvN3%2FVF5vdh1Otr8xXE41yXSIVnqg5BplddvvzPVIYBIGSnuq1sUgvO7ak7HK13lQxoi8%2Bfa37G8Y%2BXeRxauLSvbTXvhoRh3NZXG1MdiKaH2Xh5SASWgpOQFK0JN9qIAIsaw2teBu1BeEMPxyR%2FpFrbDSX2N51VYD%2BmW51rozT&X-Amz-Signature=36af5153aa4360920860560750b8987b46eaba291ceee98802793cd80c6a0270&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

