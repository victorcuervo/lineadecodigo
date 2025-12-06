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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NVN6FCZ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T131633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDwuLAxjyURBUs3sEGfVTWO2aS0DY5wJ2mc6zmJg5JGvAiEApaVSuIhzlLHX6HeHU1JMblG39CIqOtGLMm91aeL1OfIq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDOLDxKKjeUNP0C6j6yrcA3FNw%2BEIGz6rgjxR%2BrUx%2By%2FFQ%2BKQ78X%2FVuuHoAVZupR1NiCMHGi0j%2FUazF%2FNZhG%2BTlXvrvKmXfNuMRxEw3xnoI5DvXKP55KzKNPyOK7HBHOCXRFSqnsRuQjMl0XDN4o6J9SkWdubNlBkKXLgy5xD02qlmurJXmZX7cm0Q8EeVUG%2BxA3qLf%2Fi%2BZmGkPQHcVez6KjfBvC1A262b5ks7YliAtUhfbaZXtfqU6PttQLcI9t4elFHibnY0StVhOSIteFbjhKl0sNTjDu9MWa6VlelSlyirkzgD6hQUwT8PTN%2BtRbv3%2B1MEOLYDOpSD%2FSaA2deHUO1l%2FyHa%2Bn00NlnpJRDgWZ623lenzFj0DEY8xf%2FYdFG7l8MKim8HkyDheWDEP0CRQaOUoaNJ6Nr%2FGcbRaTPGNqQB54Au4U9LZ8YOkZUmUweM%2BjZ3sOgm5ouk3OJ8oBoHR56XvptNSnxhTn74yzP9HcLOmd6KdCOan4hxsi2mlF%2FKsQ09aqgmbbYK37Cc5bZY1piZkfStgZAHejw2Xpox9%2B2Klgk5ql8K27Ki7AmfUj7uL6nSxNVgyitkig57fzrSwfoDAWHY8N1yGQx3kw%2FAxcWtYnT2V%2FqtQV8zNFoUO20rrRrkvYCDH9KmphjMNam0MkGOqUB0juyC5P%2Fyi4MLOzOI2YhCvN6VreN%2B2KjX%2FoHV5EvIzaOXiaWPbBmBfb%2FHkFmAe4yymeEW%2BNFg%2FqLL3qFtJpLJwswx4cQ3s%2FuTGcRhWXw9eGX3IrvmLs8vMdMWT4yxWlmcRd%2FTKqlu0QmqOqIZUbLasFLjXFHivXYqadjrnQtPaDIW3R46yGQQfSOn9RMyV3qTieJXguvlR%2FGaAVGYwuef5yIQZE1&X-Amz-Signature=246ea58fd97c8f1877ff0e990d0005d3d76cc26a182aa44e5be25b3f7f92930d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

