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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSOPOHAF%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T024819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQQ5vTEYQAkYdNtv7yh0PllL9UBUgXgGNe92iQDdWgNgIgVFkgxTgxRauUHevhYpBWJzoAKTcLKVtvpP4uO32N17sqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL8jlAXlJ22l8f%2FLJSrcA56g%2B6hH%2Blh%2FUCl3QhbH0sUEWWrRilBLScB2sQAQ5JIkzMKR2Ht%2BrOSlGI7spD0dET38gGML9WqFqNmPcNhY5ZntqXH7%2B2zMV7pZHhD188gJnmNqOEs2hcKqj9IO8mC%2FxLWmtlCrpWzUDJdnqSg3%2FFAvxYf3zmGAgVRyNPtnADTNcd%2FHzHX7FYevVz%2BcJtnoUenIIf%2FYbujq3qbqXPatDnkmH505238gQ3N2rbf2ev08Nn%2FbHBH%2F2bUocMzpCk1vl21Cnfx0107cVuF9lqcic9gJX3oiM1%2BaUh%2Fg71WCF%2FXABdqEWiPRWjTVmD2qiub1rzBORDBeXeKeMh%2FUoakYDdsur7pWXXhCGLkFRKSCp0tTKqXUcgS0Seb5TFfN23sQx6ShXXdY0qeuEQR3TiA8djbY77RAWtHKNvRP%2BrNjMwsJtaocRAOic1f3dO9F6GhUE4dCambmo09HuM40i5Lwoq4DpOJl50Y2%2FxaUYMdpCQAtC3FK6wJA0Ocr7BKWcWg4mI3wHUelzo0nkxvqyaZoBR8%2BC9b3iWBmAlildvyhv%2Bwd8VYFsI12C6sQhAPOBg9XGeSj%2Bein%2BPeWbEx5q9gCHSgmJzKnNrrfcTntoa50ctoQ1RW604%2BBCWXR2xlUMKvu2MkGOqUB6Uk1R90lWy8qJYAOYtR3304GpAyda5%2F2VL4X6L0ESNPlSWgqmOwH1n7RtHvceATN%2F7zihnZgP1LyMciD%2FfymVCCvw3x4Q57y65LGAxxKOCvs1Dlcp0zH4OnmfS1rYbsfIsUNCL834uS3D2oUtrl8PQ8nLexj8PNdw4DMb5FBXAaaxu%2F9xnUTD3J%2FneXmg%2FqDc%2BfUlpyYuv0FOs8o26pwoPMuJTKy&X-Amz-Signature=6a90f4c01ebeee1cf59716fdadd66263b9ded080f6fa38adf9378f7437ad5455&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

