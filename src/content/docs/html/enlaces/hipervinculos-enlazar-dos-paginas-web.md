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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZST4ZIV7%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T190444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTKjnkbivLcq0YedlZLJBRMLPgFUZyZaqo7kbDpqqwpAIgX6WY46yUvFiD%2BmcQaJvArcRj%2FiiMq5u2F5bMSH6Gco8qiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPQ5LAo3igm6b6%2Bj7CrcA53pfzfAVlou%2FcNt4YDroHNg0KDm19%2FCikDrl2EPkq%2Bf9YOyiJ9Gvh3ffFxaCQhAQfZxI5%2BTIvNTsRVOL8mNrTEp6g7wwEzugfmknkail36yFB%2BnTaJ2V53eRXgY6VJqo9sjrYgZ%2BjYnPXH4%2FCZrl4BBVuA3SsQ2Th1%2Fwq5inOlKkGPHLwKOMfqlYX2w%2BaHJS2iBN1hVd6w1Qam1AqtU6DUa8j74bPaRiFmdw4xkJx1DkHxrRBIwW%2B2MX8dFIcrN%2FT5Y%2BdYntRCFrh5YRAZ3U5YsuN%2F5wPZmfA2vwx%2B%2BKrQibZAPca8yOG3kobjDQroeJ%2Fx3RhfcN7YPnBd856ViWZ4XzIRSFiZUNDiBDLfSK6QM7YlUUnIM3y%2B%2BCkL6wj87txazWumpf7KqznfW%2BOMSLaj0mv3K%2BzQFUg9GfKE4N7N5chPSurRsnGhacuTVKFX1mhQiQl%2FAaLwZGaMF4lla9bFrEU30i5AKIsL%2FH9OXj1JwJDK4yDgtwKLwrwjB%2F1yQSJUxKQU%2FGHkPKYDHc2%2B2gSaGf7z2OA2O4ZnUhOpa2RkyHNv5uRNTkYf%2FHpPNz2912Qrv%2FMbZgS9fyvxSy8rZZOVrASE0RZLyDQryKNh7%2FWwlALhSfCfVLxYvtYWAMOLe4ckGOqUBTI5zTNeIinRpRUt79N9NYio1rKgoRMJWMe%2FirZ2QML%2FKIIk7Ei4370xMFzdILAuq3%2FxMMGo47gwam2i%2BEmj3cQ8%2FdPF7EMW8rQi%2FJKA4EPeO7FZ05R7qLF0%2B86tkjMKR%2BQqmCZPj6BNK5uF2yxvOXgxMI64Cn2CAuvS6DeqBOh6bVooUVWMrIhQKFI%2Fy7HVuEj4inUhBbxxZ5WSiIODubFmRVK1d&X-Amz-Signature=b37d8784830df8c5875aea72d8e9f1f91a2978683b611a115a53b5cb6cc4beff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

