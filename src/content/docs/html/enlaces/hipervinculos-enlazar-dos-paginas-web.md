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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6VKTXNM%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T232942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZEgmSAdrOI911iebd4DId5lvGJDLJ%2BdnpgKK%2BJKe35gIgUq%2FJrIs4ytdb3ScHQWqsNuKMKj6Jv4Rup5hqGkVA%2Bx8q%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDAB0dkjdm13HQBKEsSrcAxjH0ptxN%2BwgOZ0o7BGoXul7JIlAXcc4Ae%2B0CppSYseiyVhj6IIft7WvrejxGB5nRRdYH1FQnqCHuQ73c4oNIiAF55isESMt1ZtHEGj2Vy8U%2B73KkThpl%2FLZhfgRgSJk2n%2FLSPn00QKEYbzQ5RQAjmuSbGiks5Z16WylghCIYYtsyTsaNsiKdrVppcieOHX2SZn%2F5qAX0ncvMijF4b%2BPjzrJlBKf0yA3Em8r%2BRhjU%2F%2B3fooNgIgeN1Rq03Yc6kVXj7E1tw%2B4ovFLv3eTAUwZ%2BX%2FZaK4TWM6fnet2amBk2WEUOvGcQ4nS13KswEYxX6i4NeH0PQ1SWSvt8UzUFBBZytsftzDdcclRS9NJSJv3j4Lcol%2FufTDfFH79OZeYutf5EIE6qSBcz48MAEyhSfbPiYR%2FPkhxL2YYoycncF5eheOS2Z8%2B5R0nNS3ff9mG%2BRs1ZHEQfXf3m3TkccVw0xEF2%2FrIXA4FeqFT9i537jnM9Fh1qtC38Rph3e1GkTTYULk1NnKere5PHP1Ss7X8eYf3K2%2BDko%2FhBok9luu5qy%2BYmXYUL7mgKwvJYg5Zfl6DI1DSXE2kNYGCtwU3p5S7J2TaMCyutC8oNpHCw4JY4ZxjtF0Q9b3aNtWn1PX0h%2Fs%2BMIjGzckGOqUBqXCky3VMaj%2Bosjg43ovFQXROAEfMHg2PrLTQdgZzEOV%2B4Ut4rhy4Rx4MyK4lz6n4%2B5eNF91whF024%2BAbkCa5yhpo6sekAVhC9XMB4aJgZ%2Bg8w0vni6GcW4wyMGaFZmtavQc%2FH06kclK8nuuArdbE2qgjxosachdvex3lpNlMiHopQGM7JNNIsLkpbu2e%2BpQlDA6tzP8lFrLiW2HZS07nqvashLix&X-Amz-Signature=6887a3de36ad8d39d429595e5921c0185639df05764502dcedf5311676947105&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

