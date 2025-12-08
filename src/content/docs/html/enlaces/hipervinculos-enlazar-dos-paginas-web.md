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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466755KFF5J%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T075836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvysJerz7%2FGy5BkxscfmoC3ttUy1aujGWorv5GWDFz4AIhAJcAxhwlWnwjpYSIP2nW6ikOBGgE%2B2gzWMPMVyn2vq0RKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx3b0OFMtEitXwZYxoq3AMVqdtzdswH%2BFqOYYgSy4R%2FAptkKERjhfTZl3mlbzIyT%2BGrGV5YctMTKpEtzoibvXnmcAYKeqYbvEg04Y62qEwn4CIKOOxrvA%2FLMVnmofg7Lha8XPHxGyWdHCrLoQlodaRbaqJNmhr126DWCHytrdtvsRNjamERfXEOcnWZ9q%2BQfI36PpHY%2BikVtc7PPx0gWESmWoDVjSHV9%2B66qdNR%2BLC%2FP6WPiAucMAnhbf%2FzTBefZdb3AV5%2F3LqODfHWBpJzscLqOUUSXuIfrD2h39aqrrSgkGrFKv8w8tPlqGJJz96dO0iciCR5oJlpy0vwxrGkPQ2cZ0nX6EKlxjIFuNWQDxWTnfSYPRImbe5rsgLNinQ5aXyKjngd27oqSGh7jYgqrbD4yNw4cZ%2BmyntNq2djBTDnI1DPA18ACbbc1L39MmnwIdSDEZxTHqFc6n%2FKUDMVNJsC%2BQCpU%2BMmA7JbNfIH9swKwKQiFR%2FuptBfBsLrBYS2G5QU8D0F9jff%2BNQvlG4NHM6z3o3C9eLuW0KtRzvV9rTd9xeU3%2FoFzJ%2B%2B8d8Xo%2FdJzl6w9jTm%2FyOmkoFWMG7qg1M65BVU6%2BLqaI7OTqutNqWZJtdJK2sjN4DRlgK3NJMpFI515%2FJzJgPyPBPu3zCx7tnJBjqkAfZqRLjLkEBgMpu6W4ZhizSJorWpzsaxKzQhCxsKvAa5LHLspkv%2FHQx7lJ5tJZbNPV8tDbLPUffzSxht47U0L2wqjVt6iA78YqlpZOducEMfQ6p5g7ilFKb5ZFFZwPv1pnScAIpcwlCWz5GMVEAyq0D6dV0hs%2FsssiWvyDf8VrGRlxMGE9V1IF203gQDkAYOf2eGhhk3ZSTQadWGXtMYdGKTkKoi&X-Amz-Signature=017f4aac97a539e855d3702977bffebb018709d95a26ee093fdaded9b18967f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

