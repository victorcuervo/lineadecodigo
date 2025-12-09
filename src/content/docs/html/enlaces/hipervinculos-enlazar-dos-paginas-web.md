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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZV3KUYF%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T031254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYU4R%2BA06Ub2o5YP3KfwCxBEiOMXjeo%2Fx96RIFQwRGAgIgTX26koGIZgwnVD0iXCYYT7YoC7nDwuU9G202mzpQC38qiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJEgEJXSGkijt8iWZCrcA%2Fm3V%2FDagTK%2BiHqjBwt0OXqGcP7mHbHdlt3oL86c3K5%2BIUJdH5T0XCwZRl%2Fd%2FMWquW3XGsVgUbg91fVjRnTYhh2PpXWumKVBcV22RiwaaAW4Ic42st5m9UbRSEB%2F1ClM6RxtJDiJrV%2BC3FvHfCR3b73xDOcVYHrLqH0rXFe%2Bj0L8BTvGBfxIiJWktGmZAfd8AKSvEN4UD8EoS%2BHLQsOhzSa0d3iKm4MSJ3w1hJU%2F0qN2nogQbdiO05gY19NpXOB325ReELCYY3EEz1aafxQ6Pz6x3Ws5%2Ff3sqo6zCJK8vBLqEjIcm10ZjZShAyKfS9fRACODjpWE4mhXRCMTZvwQth2ReRVjQN8p0xM0yVSUuECGd3WdKJYELbrhMLllgax0BFCG7RtdM5hPalnBdRhQU9f6SzQ75X9oWLsgq5ANJOkjP%2F0AbfpC3u7MFO01bwbMBCotf%2FxoCuNxqabEKUneAeu%2BNilTBwzv4uleOP4mixIchcVgRp3H%2F1T7w3iXw%2BVwKi38h45d%2FxHIcxAMlmXdHTIf5chCVSpYn5MFQaNJjEefOsWUIhTO0Y4lF8Zqu9v%2BceF%2BAyVOCFQLiuhlfcP3MYicd87WbnVFE5d%2BroGcaZybBHJx9jWFuV9v%2Fw%2BjMLyO3skGOqUBOuxNDTnmfYhLaK%2FlMTVI3RKdKVwTQ5%2FlNHzja5BIo%2FB9nsIw67B3%2BeOapzekCYKEGZnBTSzGBt54SFlZB03hMpu%2FuaMtQfk2DLoZjQJnCDttjnmB1OodRO3hp6ed2IbVbJDMKdKvNEsYlTPRIAIUAbuQuFNUVW56SZAOcgQ4q%2BPWDGmvtN975Jf%2F8ERquFEq7dRvuVP9lZFfVsd5063TxKgSwQAw&X-Amz-Signature=3e043f2aeaf70e02b99190c46e7007de8b5e197befa76ba37a16f07f2d88cdb5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

