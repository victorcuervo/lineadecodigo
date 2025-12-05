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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7CLX2GE%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T222348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICrtH9ypYxLOtJo8wRtNPS2B8ITLzd5TMopvBT7oJPPoAiEAru10NkfJrl%2BIUpU7SD3xO1rnxIg9yxmb0jXfRgeNvHkq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDCECy5ztpzc1SSFiFCrcA5U1GvujpqUshQ%2FNIY2shAWUS7wgH0YWlZuaHmMG2psOrpotvmrgUrcBtd1%2FRod15AAdwl8717FnAMlCD%2BYwweVMiG9fcHFhfiOtGCctr9GgT4BF0qFJ7J%2FAWKdQsQ5dwFdHQxnotZijYKlX%2FkSgpeBNwoyDnH031cXsdWpodxXKtWoBufhtmDPXNp99y39QSDN4RUirYliQuhwFU7q1SXgBB3DNevy2jnHD2nerVIo1UUWIcsLcqsFou%2FeO4UP1ihI2zEkBDxBPoTPFWNwIbLgUtG6wqBfWIw2mRNusSGlG8NSbByC2CZhMuqtLNeQI5hQn2p5Jr8o0Wt98FFpvxDNPv1xkwXl383D3WLIRMqdPxSjrOp6ZcBoi9vSa8paIJ3ySf2UUM1zpUKwt9QHJWhvTw5R4hqrH43VwFtvU95xlGMd%2BVcGqbNoyjcklW8UIdW3Re%2Bqtk%2BJyWgoEuDy%2F%2FrArxqH54XvTSML9yneug9NfrPoJAIJJ3IqTGORHtKvJE1bL6qqHtEqG37YwFccMYGpdhYGMJS%2FnM7UGnLigC9iKmWPa9VDGMF7CMtbFK%2FxmhS%2FPUYC4N2DURYlFGbw0rFU3UAet6YCPG5RqZWy876r%2FxbugdIOl%2Fdrk06M8MOWSzckGOqUBd6fnnjSSMv9dcVlLQnVtyDUzeRT66kVgp3NVLxr%2BDdjASPg4KkBB6rzQujH6WI1GbUsaHSk8cdVOoCNa7jtR%2FyyMeFo%2F8sfhPF%2F7QlyceWMcazux%2FOgrksCjipTWbCyBjqWxok9E5ZFQz5X3u0XdH%2FsKgDLq1maQcWGJ8Z%2BbD%2B6myrTk1VauYNCegvWEBRUkQWaKHrA67adC7Zx33uDC%2F6JJrHsk&X-Amz-Signature=d3be401c3917a02ccbb390978d007fe798b35faa832573ba442c711a981b48be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

