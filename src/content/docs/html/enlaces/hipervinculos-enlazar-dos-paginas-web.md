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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFEBQGDK%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T151645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDx1R%2BKVAfSkbwQZOZ6zkBx9XfA9DDTU13BC2kSw90ppQIgOvnm%2F%2FS7jxK8ABg6ZSR%2BguOEARmBS0frEAJvd7hD298qiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLMl8xk6bL0QgU9pmSrcA9fpx7KKZLc7JcGCeflFy8uSymf1wFrIZbYT99ixOO%2FS9o5uIAhDiu5vwNJiiJmVcAIzE5GMzlUnh6sGixBKlEhmxh2kiPy0nS87irmtLyqro2hLbbDgc63ZQ%2FX9pW7ytiwlaKd%2BXJXYJfdKdgFf61bgIu%2BhWSyTJZ5IChzN3C1RtLZnxMCQoUn0nfbqoM%2B%2FtMMorrl6sEtjuEQp6f9vtbXZ4AEg9fmDIBXuWkKMhGOLu8WqL3t9shlhSHQlf5VpF3%2Bh2o1s87sBF1PwYPHRDcAMCEIlpYQQ7R1VO1pSLMZ%2FJETuuv%2FhjXHojzSrgema%2BLvCdaMqA64bVNF9p66T9ISaqNYIhG1Ejb0wK0j2B3o4LII%2B5v%2F2laG2QfK72iOwDrzOrz3s6ZM6l1UNVGSI22lgoz3Ub0Nf2jt7mzaCDlvfXR2MWuC1gIIaV3VDfZ8WCTwSese8CPqlwVQf6LsYZhPbHW8xBMCAFKdTrzzl2i3GnVZX%2Bl1490ab%2F2bbO%2Bhin0LJWHufgcubAGq%2B38kwWmSJFjYBHJeZ%2BZdnkFoVkpn33646OGgOBQ65kO7l99qU9PJuto4JK9gu8i0%2F0yoLwvEvPcY7TQaAx1yrksejoW%2F051ZXFK%2BTHDnAQA7eMOfB28kGOqUBY%2FLcsguHQYmNcZyOGzgj06MyKX5b843HEBnDdkLtug%2FKERsVvwaY6SJ8oavIPPu7c2hugr%2BE9osyH22WsOVNvBVY%2BS3jMF%2FxWWzP4LsG1HlvkQ0HAqFZRuppe6vaKUiMIjBKDtJHvyhHOAhNj9wcaTnsHpePi21PoWTB1QC3Xy6CfVK79cViyaYYWSt3aEbK4eCOc7OIPtS3ryslL80madpKlbgs&X-Amz-Signature=5588e9df25ae7a3efa0a7773a7d750bf10970d14b3887e6ef863501c3d0e4d8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

