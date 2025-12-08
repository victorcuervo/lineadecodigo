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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSPNSFIU%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T071415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFu5wO6GjzgflSiU1MWZ5GgBLzn30S4d9sVJjihXb8avAiEAiOKbSYAxruZNl5Z87HPnJsiv1fPcT2w2RBKFVA00YCgqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB9Z%2F8H4BKEi%2FoO%2BWCrcAz9gUbez62qOl%2FqZfPO%2FmE1cdz1j1y1MBwr3h1cNklzoGtj4OCq75VpDmurCTh9k2Soh52ogPKiBEVjNBWNMjoAZxko7nLzNbugXmo%2BydPklOmHsgeJkfzHd6FTImZOqAzXkKMrP%2FP9zlqeBU2Cf%2BVY12eOYUiU5C%2B5bryeSaDtZcruDj3gvQVtFUa28Svy1C0VydaUfTsvPs2GICJuJytowFVgUhOstPJDMR1JduYW1dto3owoQXFjsgqG%2FUju1NmMjQgNRwdb4z61nqO%2BDWG1aealJkI39ECejdD5z%2FdpDr7FbJ3ObPHWUKv0SDwWfdUNAAnI2f%2BdtyFG669wDQtQ3SnOiqGKOie64MtKrIZDCTsiJAZRE3%2BWr%2FFE0A6vf7a80H1kHRAw76h1GONV4pIwFTOCBUVentPYxxdJxfFVuKTqTeI5cEqsC9HsYh6fuy3S3AVi%2FeEHKrht0UviwKdiuUqUtqROzvk8YiZkBvMxKhNwJPdCegpL50B0onDQpbZupFotuEtHfUiLS9b6GmGGxujAlKGFZStG6wLG8%2F62o5KKlKOs%2FLAbiRwsrlfzX6ZyX996pISeiKwk%2Bs6Km8nRPvoQoKELPynrzmSep1e6PX6xwJsqXH2%2FW7q6hMP7s2ckGOqUBE%2BJyuSomWyH39qkzSQ47awPh6VMYAyxhBYZYg24RiWnkqY21eyUKiKNNoReHBa6dUwf8xTUDtvrwau%2BZYdfvZu4mtewmeEFgU5AY%2Bly5fJY7Hkr7gSZHx7x%2FaavgEZ0sN9RfE7az8Bvc4mPfIN6KVHPfKJZ%2FSmsKDQxfkPoUtTlBokmFpU5fp8gCk5pZjwtpBY4Z4Kt7A0iqselgg8Uc2ktf07tC&X-Amz-Signature=fbc95187d423ce92eece8c662d1ada8c17e0e5505058fc0ea1302ed370aaca65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

