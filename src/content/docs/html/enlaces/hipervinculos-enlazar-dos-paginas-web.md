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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664N3I7W4U%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T105853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpu37JBBQ1s2HsQvorAGS0Nc4Caj1bwMdIIdhxXbW90wIgcJloxPpKcIrHWsxw4YIjCtnNCrrcG5TDn4LQ2218FQsqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMCzjI%2Bxu7%2BHB22%2FdCrcA6m3K4h30laQ6cShJ6VFuqnVCnpxB1WrTlerX68NoZF1wzDvkQP0bGL5q1NYvc%2FBB%2BWUd64d95eVEzZzY3bdf%2BdvLvu9dAoRe8PNFnskZh%2BUSlluIJttadEr1eZFUbpUwszhGjtIIHZZoft%2F0XgwgawkMSUy68bj0XdfMBkauKKZumciej6R2tBPBXmEn5oEygqaqWpzXzgo5a1FppYLTlUEAitIPNwJG7OAb3IzvlAx2OH%2FO64Y64QDjNf2l2a%2B4brvLJwUdTIZdOK8%2FSr07jpQeQ3X%2FMN2Zj1HcdtHhqq0mCAbtVw%2FU69gVwkoWiUw8KliCvbflh1l1CpF2orxhpKqnuvEq%2B3wEhCRe7N0LkIDdr0GWsjvzxWWmnoZzCUNWU9dlVjhkeW%2FGtJGzZJx2gQXrSyshJeg8RMKBDap5qxfbc9iMXt2JWZX3oJVtk7dZgCC6hhzHl1PjUovmZOA9zmPILPHkbZ1p2e1bmZ8uNe09dIBwToLKKivAyoIv7Kjj%2BbH2a0TNj3JfAYlRCYCFU8yKm3y%2Bz%2F7Lb2IISIGrUJwcUzMDbZEHhtFdCx14W31J51%2FgXsn0pvZRTxclIFplr9QNlry9GoO8TR9Vz%2FTMTa3pqeRbOZLEqyvcYGgMP%2Ft2ckGOqUB8fjvKOrj3pxZ14d32QBv%2Bmx7WecLvJNfyqmpYHF3DwUW%2BwnYO%2FyYxlCmp9eE1%2F4QiPBEJb7mYjiaYKPQBwZCmWGCcAzAF6f39OYIkQs923Y9vLRg%2FjO6SDqddqvNuPxXt7ROBDokBYTBK3UEpk8kDZ60uOfTTqz1Xr6Coj6xseXGhWywSaOs3Zv5v6cGun7JLJG%2BWUu5OnsN4SSZNGmYHOg9dPwi&X-Amz-Signature=b8012f3181d4c8b75734cb5d83470149894ee95ba49b28fc36f74a42d90c5425&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

