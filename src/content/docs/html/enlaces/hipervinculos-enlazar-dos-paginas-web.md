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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TR2N7QW7%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T030543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGDpOYDEpu7ICACHh%2Bg%2FbC0LpYMSX1aQtG%2BDjeBV3ym1AiEAgOUQwtM2%2FPjZlMGkqqc85vhGFf92S58Cb2YjWHr%2FSWMqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM9aAgDqcdk68u%2Fb8yrcA5HGDIRMEA0a1K6wYUJtJLTAWrJ7wyrBVDw8%2FysZ1DbI6u96vKhUKdTfffMbcgbI173Si6EV9et%2FaY8TTDwBLw5uuvBYCTQCRF9RpVwlrbYNcfyIHQ2b0jHvwU%2BCBJ3HpBcJQmmcVLqlpnpyDHkQxyVQN8xMfdd464ycdOKF%2B1STIw7MWrvUm%2FyXnELLlXoJSSGniJID5NFP7qE2lLRIpkB%2FfQKZzgZiYfx5THLGm5RUUy7NN0t1wJxg4m4nmrIkxDO3PbZLsnuwGS8cpSQbQ9a7ldZ2pFbd50%2BFBsE5DdpIDFWaSOfxAxbA83zs1Jl3n3KbaYWBYnx0FPOCoiTjqxbiXhkRiJKH3hpuNwhNKVeehHiayBa6wBmtqQ%2Fan9NPCFgYM53fX9JCaLqOYxobPQ6vh%2F%2BU2sCUykeQVBd7Oy9s0%2Fxbiq0yVMengu%2BoES3smrnB8Rt1IdCHpsuKt6v54gDtKr9Lxt3iRUrBfCtNaO6f4lQ5iZeJa0UMPnU%2B8RZzaeR81h%2BcBGhxkzukxLvinaY2btvy3%2F7Yn4dF2XRaxi82Aa9hSMgtUjpqsihauI7tj32qRCMwdo1DFE0WHXGubWE77NSXFRAGcqiLgIr%2F%2FF5mKRn4Mv81VlflvsBEMNKN3skGOqUBa%2FBBYxwZzNv6U93436FMioag0gV0Q1%2FeTjnKcA1OT6gQv7pt4DinwUCtSGh3gQA4qsst4vyCn4s1t%2F%2BA7Jkax8psq0J3tPuaAhUEY1RGVdt9%2F3Qc4vko1%2BtNnmRdA%2BdJ0y%2BrQMXD%2Fw5vHE54YPALbY3NCMCn8JQYEH2DVQHEkktUJoC5RRauddObryE5WDPsyoINFZdtJOMgKAAazqnZbFgkPw51&X-Amz-Signature=f236f43f1222b62c21aca94964127b377e7d4575ad0ac463dc077c4b8bf698dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

