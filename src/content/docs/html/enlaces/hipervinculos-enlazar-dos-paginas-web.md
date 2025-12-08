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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGFZCWEM%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T215104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTtab1p2EXrqvJHxFBz7uutmb0gfj3bFKb65FzQw3OPQIgUbTiYe80nPt43pdROnTfdHahreihN%2B76PBZ6SBblMMYqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIKwBamOHYlGyP49%2BircA50BPlExcdFAduEXRfuhx9uW7fmTPFCKvfElr42IZ%2BM7BwDuhFZxOJ7Kfvu853kls07F%2FJvaOdK15114%2FHcGmi%2BjP2DcPgJylklxXibV42pK%2Fs14b%2F0Ha3Gto8VYcBHSMycXIZ4vPovzQLVE70Z10%2BMNsFyVKZJ6A2O7I37yUrEPz6M2ol9K5yBZbUuK9jAAEVPC8xF6Todp%2FNzbCInS8C4%2FI8s%2BCX6yyYxtdAxjBxMvuve5qvy%2B7BIt1mYaxDWc30hAXGQcsP8WzlJ4t4mqSWo1dxWVJ8xmxYZ6N7jOJkxHSYEs0JOH2Tq7duz%2FLd6z8x9GHEot4CINyyJ5VzBSDmjJcCQXK2RY9GpVqi3WXZE1QpQZvkY1OBO5SI2QTlxojpNVu9wWDJQ0%2FVZ4TS8gAQYAfh3Uni6%2Fh32yFBxLETiFyxtlniBOc8Yg5NxGE3ZRtZjbBfE6BmTd4%2F0Mj1uIX50nHQASb%2B1ifNx6EDKUaWKNwijMDi5zt6WHNOq1FNJY5wv%2BacWJET2BygEz35UVhoNeQZOd%2BdcwdQxCaBmXtupE4ZNg2YXMtW9tN7vnWB39Xwvx%2BfOyGPNHIBUyVICeNf6kY%2FWNd%2Fy%2Fst%2B2Tft6E%2FN%2Fs5ri6%2F%2Fa6d2eS1DyMIqA3ckGOqUBrfq48s0xRXg84mPpLclCvVSwN7mOnwtYuoH%2BlL6SF0aYF4fdCPrH%2B21UhJDVbkwVFnUBOSDw6QGCpnsjaKsXtHYSAM%2BFKHwRn54ygjeHUpqHcfz75trfRxJxE7TTF2XJXETMQw%2BcJYKNfzNIYKxV2NwpORwn8HfKHkrfzEVcxkqwelQRBc37SMwAVMe01JykTvE8XLGxr%2Bo%2FMDnvDmORw9ucTUhW&X-Amz-Signature=491ce24091b8d0a059238d81c5fd21d972e55074d1ec585ffaeff69897b3122e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

