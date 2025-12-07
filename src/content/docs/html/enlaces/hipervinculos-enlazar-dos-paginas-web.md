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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSN5CL56%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T201355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSdrguH8V6IdTW%2FBfiHWb5kl0nFlHX1a7GJpFEtiBGTwIgBoQaxm8ww27NweNtts0%2FJa7aE96qQrtgdIXbmKh7j5IqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEN7S1mv6XZQpJQZIyrcAwx%2Flk6FutF0squn%2F0kxA76BhFanNy350DCLD1X41aEFIwa8D%2FZLIl03IdH30fIXeuOLRpdAbHkUFyjZQWZeSIbyZayB8i4mrvNY2LaFJCc%2F55aswSXsPYLWLTKXyhiOaWhIx1RCentX91cexQ6v%2BSDZqPeJO%2FObZCnTUvk1igpWg7EdDyTlJWbfysXF2CTwaVBlU6kUwK%2F5AkWAWpBxaAeNBjen6ZbWJgI%2BFJQQ9BbcFdP0MM2RyNJR2c5FB%2F5ZIRWiaekFGIApzPUX%2BPfnIpdWFOgouVnEujP%2FssfOZ%2FMKOEIRC7KtsYsVNa%2Bj%2BoQIgUNuTbs5I2VRmz8Hf4WjoKtftccA5exy6SCfNB3w10WcpygRCbb1DtOrG9NE7AwwaSjD9l7MsA2%2FRmKxpxOMcjwW1Go0F7NXSV5oU%2Bn7PAQd6lDlOMvKdmUVEmjd9P3HSQo2JKnNWvHo08yHmZ2ixOjrd%2BSUOha07YI0pdEJtC4X6D5Ipxr6hI8LjtA26rj9lFrCXdJbBNNMx0tN93Yx210kmChr%2F3CNd13zO8GDBMimTBxoiS4tua517Jn6WJrNGeJTWCbN8h0oZr47rG88uHZK6WT6Y722pLxb4JlgXHo6vO2hCPRObJBzUlKHMMqo18kGOqUBftcFlAJktikcFI6m%2FrZ8iqzsQNNSWLx%2BqTY4rm3woPBv5MrKWsUqUIOjQu4ZUXTbL2j1353iyGVnRhO22Zqi33VsZdnNKHMklVb81PVEJshQMmSZQX59Nx7Y7zf2JaGvVbhr9oCFH%2BJNOrUbBoK8ucgf365jWyqOwxHLHMwxOfHfaeAH7oYj9zWmGZzeg1QFz9DEMsArriOONNgHbyaDVJB2XOcE&X-Amz-Signature=6ab830324024eabf01aa1c4b855175eee7aaebb1978640ce92d32e5298ef332c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

