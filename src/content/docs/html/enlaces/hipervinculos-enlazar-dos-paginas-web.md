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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUVOQ554%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T000142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8xyYGgDFIaT0S4Top47HbPhBVdGnGeR%2F%2FZgyeNDIUEAIgIAB4IUhsEy8N%2BrU4aHqktMYyalORwgcnfX4KcHlD0OUq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDAYtJF4O1GN8NTO7MSrcA6ht%2BBFB7vuLvDtxSO%2FHbt7zQ9ZKLA3yk1xu0M66nsfWIPrDl4IUcB4ri21ngEzMNIcGAQkN6euaniXULceOaJqOJGoaKNts9iBIE7Lu1QDErEBsst0Dx1TvIxRrTWpQkdgN0YPKf7mpJqoLn7mEMftpYi5wAt6zwwbh%2BaYlVoU9VRdqYXkt9vh4CK6t35QCmpxHag%2B3NGvTD5bBLW2h%2BOJGiqsr1ZTwLba4Ob5KurmDjcZR%2FAJZIU9Oa%2Bxbe%2BZMrTzJnBP73mYndz%2BvJ6IHXF9vxHXGOm27g9zno%2FWvKvLxWM2PLiI%2FieafN%2BhnqopCzrjwYWOJk1SBLF%2B%2FU4qCOwIeJqG%2BhQ0yTeaj%2FkGB0EW70KoNJAlpjbjxwbnip89ZqZ%2BsRirmucCUeazRXQtRVi9dDBENVWzpFVbzXSpqDdRWCKFx8s7tytxbUA8nPc8W5cQ6AaIqxP5uxf0ZajzOR2FybTjZWV%2Fu%2BZEBFo87jQP%2FeA7i1IDCwbaA4ulZi8LJlhA9nVCNvKwOqGIulR%2B44R3ZdMntHVC2J6%2BqcvWLIfbooeoPgtw7N6uEPKLVBTsToiiyqSB5FMaVveIgy04Rpv4SCmk%2FI69%2FpB3zy8nE8CPzu63j0WwdoUAdkUDhMJvGzckGOqUBU4eC3qhkeFMp%2FOjGA8UtT87R0uwNuUdtcQpYgUUJI6IustYLRHwkGtyNUoz2WR6a94w9%2FyiWoUgATuXaT%2FDABUpBrtSpoi6x99kRkBli4Uupatg2nxKXRMlegZ%2BQtqeVbCxyP9jCYD1Iy7Raamm914B2jEIR6qkNeCHWmYxwyCSA3jAkYlIHyB8ByE9nBEV0%2Fm449y2HoBliTgq9q5HFivczdIhf&X-Amz-Signature=1d6d09cbc3d9d0f1e406564e825f16f7e32c64dea04b7959489b1a7b58212ad4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

