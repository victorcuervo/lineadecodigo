---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2025-12-09
slug: html/hipervinculos-enlazar-dos-paginas-web
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DXGY34N%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T170838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRJ62ARrh4gFKqFmJsN2M3TT6QbadJwWxiZO4RPIY0VgIgNcEvm6mKpzLJHZVwP39uyvgQ8Uc1OfQMbQef0bMihBwqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIFCosMchzJR3to3byrcAwX1YP%2FNvMLbzrNXSzpBQBoC8DdwsASnnD3%2BInhMuzzQSGsMCuAG0TcyTYWCT7aEv%2FbxDLnmvjc3vRsBPH%2BhX1m3ulYaqm5iXmEtwTDDpI%2Fw9wDGxSIdQeuQkzRnGrfkf9rfs6%2FVteO6LplSVz4VOwrKTg3bZXmRokvS1l5gSwjfvWHlWec%2B2V4bmUKO8PDH%2BMgYtNtKIs4Ad6yacJvtgbbnopd%2Bjx1z23U5qNYX3jsa%2BX6jOYIYd%2Fed0TA4o0xUXjdbHLjQKdRTo6T6SjW%2BJU9kRQnVCTDgzxZnlmtzfDqhIv73bNkx1efRftuFTKhUaKWpDG84qF2k9Rqnp0kYV03KFoZeJV22%2BOzed33WOI0NYUVjukXvyxIdwtwVUFqBfR2vuW6T4krTrdG3%2FxyH9xnTdfLYNPLmd5blFzfrhpSRl0FMacvUUIHRZN3TGJQNWGhUXeqHqcn7QWkx3b%2FRLtBoomwS8cAOePM%2BRk%2FGSpBAfDC2fLpS5pSeW2Y8pikVm5YDVkqS%2FMqirTqiDYxyAu9fhFkcgRql6EDPE3v1XqK2crHn4ZggAAAoKEbC9nBZyPCV6dM%2FFH9b582T5FSPfGiEo5Nn7cV6ygsZ6Wtvsuj5W19e60thTb0swPmLMO6X4ckGOqUBvuwj8d0fVXA8xp2opLB81B5h1kS7PLlqmKvwnH1XokZhvxMkD9BLyiK1fH9yEl6INRrae6N1EBNSeJR5WDxw1el2Dxx1SvnH%2BJNDZGG55cR48ipytsF4jFSaOe3f6z6%2FBg8xrr3zXZIrcZGgCxL0hmSRwDec%2FqqfbAvV0gMdsuWSOld8ET%2FiR7LuoaNJHIbLLAtF%2FFMHXZF0zN6IbG9cH9o%2Fp%2FO4&X-Amz-Signature=f78c60c8307487cc5a06cf85f1dae76df935c78bdf87dcba3189ceb687009c6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

