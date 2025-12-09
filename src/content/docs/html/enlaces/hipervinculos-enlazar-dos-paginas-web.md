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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4RC2CMN%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T030910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIENsfdycg%2BaE%2BfkirA0rn5XVtgZUzUdFWtlf2Xsi3D4gAiEAlizYjY6EiarlQ7KaIgJ6joAocQi6F%2Fa%2BWqtm7A55FVkqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHfV5l8tWxhXwWn%2FNircA%2B3r7RoTHw0sjk3RtvRc4egVaWR%2F5DN%2FcwZUium%2Fq1B463A2A4ZcbnhCBH4CY6Vdb9FqLpm9bYWWXcazYgSAlRWvGBAohEK19e%2FQNAnJt6ePieTCgl2k6qp1O%2BoKQRbj8iqoAh%2BYKoeBjMJK7KcXgoeq8YpHBmttuS1VN04ch%2FlhZ2fFuJL2TdwVBkArSTL537lG6aJThmIpDpVyrhSg8MAw99Dj44gLCYEJoJTx1qC73GQc2cZKNIZzKfKonxtARppnu2LFQTZk6hXJtpynt6jDUWD8x3Ji65xKZnqTMVIzyIj9LP3lECgz33uFQFQOrJKElPcudpOJqjun6hcGp47M9EoTyTL7%2F9RR6M13hH3mz9MOWTuaGSq%2BxWvul3kMq86Z3HAyqwJ9Gn4Jy7yUzbJtfimh7hwu%2FmZnL0A%2F%2BqOc98pfAMMpeoUjunMDft5YYdZ2jJf1brRw2QTcKy2lYSb%2F7Jg9IGn6AwbBbo9UIoE7YjWNkOBb7hc8McaYpt4k0fm5YsAaBzQmDA6Kxt8Ie%2FqUDijTdSq4dRqj9%2FcuRiA6evUmDUx4i1aoOvMRM21xAYIYq%2B0IDyw2iP07Tx8sCtiOfXJZm7bwSJeADNGodBju6k2AKE%2BoRAIu%2FbDxMJCO3skGOqUBy%2B9XQ4cwHXQs8Rw5xw0%2BKirJP4MvHdOlkN7IWIOxqxrWNLfBJf2AGwMcbVwnfylB5rUO0%2F%2FBgJCKnv6KOZFvJ4BWmH0qJtOrI8T3oKVt9sue%2B%2B1IqBRno8N3xqDSzosLHC2PdPnPLxf%2FDeh7npQQ1vPXHMUrmwMAvKMYasNU676DY3oWZKX3aalcA1kxyMxDNdvNehztWkV6Q0SGoB9MU%2For%2Fj2Y&X-Amz-Signature=162f7f6be298de3e924100dd4b71b01a7dac67459d6cf2ee99a6b30944bcf4fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

