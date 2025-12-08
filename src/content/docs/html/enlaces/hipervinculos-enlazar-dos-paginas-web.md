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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUZJ7RXJ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T163422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFQ8oE3Fuh0GEsVG9vK9RjJIeGYdPsjI2MdVYfMzXcFgIgbbSK3zFwXcttPRZlotkyrJXTap%2FYh7zCdbs9xGovXa8qiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNhGwZhvTDd01ByEQyrcA3PQzYHnXrd4uaWPvQpLtlW2UpXLEw8VDDG2YEImYS1SW8OL06d9wyBtcWUaGtWqOztZFcRZUfbMsZO%2FfTvUK4nNo6JtIvuw9fVo0BUPX8PXED92toBCBjz2qQGShlnGycxHoWncSSw1j%2F0dAH%2B7i8mzJ6NSwellCrALLcf8b9Z%2BqcphCUkVxVdmoNc6Scn%2BUqrivEmzTI69PKk1WYfQN5b6hi60tIPCBDPF3v7IdjsJ8byypJ8Zbt6YfHNf%2F%2FLjaLQcWYR%2Fs7R1LbVMvC6ClJJfGQUlI9OPwTepUtepRlNgCCZat41LyEhYlltb5Y5nGwLwadEk7xe9B943Q8n1sFpyWELFcKLqNe1vk37eXTLwxC%2BmjiPF5lMxoxRSaO0ddFyv0YIOhta0HZ%2BhwJHx4rucplof2VwrMcaAGKhLZJFC9a3gP6wPCMIJCub6usLxsH%2B1%2F%2FUXbgyS%2BRDFlOEVcWl%2Buc%2BZyn6UaRGZwzqJMIGsob%2FrkTxkpzZhm%2FhKL4DlCPfWTVMtxA7N1X5W%2BOyOAzDsI%2B0gRGbiYkKQrUkqrAGquxioqNJ8AIbqUa%2F%2BFok8mI3BxpA7qBONRGpjQU0vbACVl28DzFQSUvDwK5PCuYyBX84%2B4DpPWbFBFE2zMLLk28kGOqUBmVXF6EUARN1pnCvuqFPh%2F2MiRD4OjqDwtdg1aHFnGY9fNxmTr7p5%2FeM3NisqCeKAZK9Wzdh3%2BLRr6C%2FpcMuo%2BSEExGC1dK9Xo122p2uY5Jc3mgw0eF5J8r25rCH2tBwKNS1JKgHlFkgASFOm%2F4NGSPvYhBE5kr%2Fwpy5PrCGAaFQhvmNUtWcI7IwErhaZCh9z%2FNi1l1O2NcATagqOCcIjXDGWMjxm&X-Amz-Signature=922775ead06de8c47826a112fe4101e4bba665e937ecc86192b113906cd466ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

