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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFLG2LC5%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T031114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFbBFkYa9qI2exubOWd4WpyAqQtifMjwKPLw8lZE9K8CAiEA4TnuJpRAP9cmsSMyj3%2FoUmBjLrFFAR3eC%2B67gAQDXlsq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDMW%2FsUvuoM12nhh%2BoircA%2FS9%2FRS1w6%2FDRvifIuq7QSkI3eUEfeE9rE6LItDdyt5UFvFjY3OR2UvJm48IOqTd7o6V%2B7XgsTgttWen3ph%2FliA4J%2BSxRm3PEGeSzSUOhJpI4QPjxXSBoo5vqmGmILZZNJ%2Fa9u4ofRnDOI9L8UGu%2FKizEw0EkiuWxJW2mi8MG9KoBd2s8Xk7ReHGccrjuMdVStJjrDWSC4hd4gNC29a5Gi7AdaW8upIPxfb9atKvyf%2BhvpHGgg5RmSdvmDCAelXWEC3oafI%2Bptkxg%2FII%2FYjsEbvyRFsfElIGm1IGMqV5hltdFHvyUAy0X2wWP%2BVsrdYgKgycNIvW2Qu5SfF9hir5NH%2BawbaQD84%2FM4XnnYBQ6t8aQoAlWrtmzB44n2sAnlwgqODXIH%2BXYMeqHOaSl%2FqBPWqDYlHSnvBuLm1riAKx2gNvYymQ8RwDWSX2WKM%2FZ%2F8CTCYDV%2BD0gosf%2BxXi%2Bv2qaPtdQ69DAU6VxUeZTkEj%2FdV9BasvumDjYce9jj2Sz5w8UTFaaIj%2FgLarAAhJmAbSxTcCCBJcp%2FfZ3CE%2Fe7hX2XYgv89bQ8WEI1D5zMpnnyfSLDYaMO7lidd%2FRM%2FYdupHGGFlv9W4%2FyyY3Wrp4N4n0MGqkvUC2lI%2FeiuLfNLjMMiMyMkGOqUBAst%2Fu1FW76supehKkL8ngdFaTl8Pc4WQe1VIu1u9MjYB6mYIprhOYMBGlXte2Kh5i%2BtsO14%2FDZqPRBucAC5SUf6PY0gD4cWUFnW48AcSwUhXvZAupXFkuzBzetCP%2F7mgb3cZ2K9dRVwsvDRDs4QclnWs1%2FxlAhj22KbZM0V2XvlnUubWaYvyoOs6HT3bjklkft3EG3Ml9SLHFXVkkWostEsUPpSj&X-Amz-Signature=7c52ee41c7476acaab620deeabfdde27a0167315a140f3a433bc89c91782bbbd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

