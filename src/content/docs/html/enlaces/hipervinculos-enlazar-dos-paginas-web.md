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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGJ3TLDQ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T232239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGHJnohQq6AbvuUBXAJGtiCHwZ5O%2B7CogcBG7bNNS51hAiEAz0kuXHLHRq8rB9gBRieyynmOTtVxPDI%2Bj3Tu7coCrCMqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA0OxkbvpPHaHLTqeCrcA60KF296kQ%2FMvgLGzxf86rPtWKfkfdpsuxDTu%2FcQwLA7Boqr0MXfL05nq5fi9PMZi3gfFlVsQ5eU2HiWHXa87QM7aeynPfW3TL2RrVq5DpsjgZ8NSVIJzekd%2FZ3yOms2wCCKnzjZmSWvIlAlFXofCvT3XHunAqv%2Ftp9IMWaskD5rOm6YpUUn%2BUuS13iPG%2FQid4YPihNNLYL1AalkWwFmG8svlacH%2Fa2%2BCllNMZtlYcsDFNarpZHZdRaC1NkZIzwEOj%2FX9b0REjcQZam4u3AXD7JuTNtPUYTaKKD3hgwmCKWlKdL%2B5fsTJYMDAn8Q%2BEVKv7eZylp12jJJ4U8GwNsZWhv66E4CrQ8xi%2FVBJG5VjtOVJvg9A9CX7EwVMs8KVlrrB%2FE7K9tDnV1BlC1%2FmAaCLxm9J5KBWyByfMZfSNfpzkts67lCym0KXJ4miV20QB%2FJ3dYGf58Gc9O7h82F8uBq1XZyLBR8N0TY05BgoJ4eToDYoh3jcrY25d3IHGMPy8MK%2FK6T2I3DAySCB1C%2FSLW6%2FnoJDcUXpv0Ob7F%2BE7j3t%2BuAa%2FasEw83hYHLOgG5e0t9zst0rhpYm7qNWly0xSyweOSZCLPKM81UiVogw2PO8w4wsGCB6t1Vdofd1lqwMLmi3ckGOqUBWXUSWbIl0wm33KJ%2BT3Rjr1lq09rkNIRDP5485tar8kMKZk8942yssmGo%2FFL9OSJDiEJYZREloY93rZanzVgTmSpEd%2FAhqirgb0eenppKVVT26OoFyMAeuGb%2F%2FG2%2FgC8iC8jO2LBNlNBzKz0wpDTdYmk%2FZd9CBR%2FZCJktFe1b9hRrfNvEDxHrt02H3Hs24%2Fz5GwtcE0c8osj3Hv%2FM2qOGkfnNRXeZ&X-Amz-Signature=1e3e83928f8f2feeca5fef266eb08b9a56c20f73cb85e6d70d9a61294b710bb6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

