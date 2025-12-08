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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRM2MRGR%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T212554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC4FgJZiSrN7NeQxqEnyj820BeECuKEHbFcFCfF3QQ%2FAAiEAhnx%2FxjQsxP5ErCDgbQzRW7aGFXQ2k5CZ54qVbDZNi58qiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKRWCCM5w3abQ4iP2ircA6CJ02Zv7%2Fdawa%2Fa83eO5yKjPH7lW%2BI1Kw487Bx1yo8Df2jbuvSV10hmZPd6gXHJJj8YrIazpuPLOKgq3YtUC%2Ff0H3nxsmco8%2FG2xvpUSN5DDvsDTQT721Mft5tdzQ6KHJJBTeNSfcsPclmvq7Cr9BLNJPVnsXUQ7lKgEZ%2Ft3EUAZXlnlNVO247L0K7FZ47lceoTMRS%2BH9ENiFcE3H61mWhxbxJMGIMmbQMUTCh%2BDSi4UMnanB85bjR1gN7UjoJTDzllYdWUat7kY3DplsW8v2QZfQAtimiseCLVNJlNWjRlD9mAHHSCIRdBZLL8ZTli8VbPb0mQTDeOrbFwq5Abw%2BJCsnbtW371wZFOCGojy2sP4ROjrih3oLoLZGa9F7UcvFHZg2vST6hvE3beKJ%2BGF4KBS%2Bs8EoZegYKmMsiR%2FttV2FA9wZIXBNY%2F1RbKEh1K9aqG1PN0WgcLMXnd5ZCx95NSG0ELMLmZlWhdkvt5u07nFgeuwqMjGGm52SmvMziJrczWp7%2BF5HddvMVT0EMpsM3Hx9%2FLio42V3nKSALDwslFJl0MY6%2BLbUztLzEgUaV7thOpGfX00ciIBMHv%2FQmMO5U5Orpg%2FLlpNHogY5fbWOgWGpZNiF7Zn5S%2F76O5MMKA3ckGOqUBkO8jloqEgi0YEvrcxof4x0tSA3dS7Bbev4EzIum6xixlFWEdSL1ipivdXLq%2B0MpoZGcXZRqdQkzb7162oPEeourL4s9CpMiYEp%2BqlGc4QP2OtEPGRIhcdlquq%2BjjcD9Adees8ubY7%2FIeYYhl5vGWuNk1FWBmD8ElWxf22tOoBqsPY1d6MhkbJaxJSSzw%2BQAd0bsHZn5KHFi9XEbkfKHyJSolFhbq&X-Amz-Signature=bebcf1f5d3f6fcd4f510f78b032a8587ba8d4237d0243ce7ca11dbaee503fc66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

