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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SN23UXA%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T172007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCr%2Ft%2Bc9hTMcuyFrMPY8XDOLx%2B%2FmssWnG0%2FCr4D7bXjAQIgP6bFjEv6ew6gkVLp3GX3AC7NSlFpatSXKptXC%2FAedxwqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJyXfgFJYwOUcOKYNyrcAz53p%2BE53xE7gw0YAlf0KYWIgghWQTizM0rDBdkboaJrH%2F1uPlZ59cnRTA26SOuUMCyKyqOu%2B7ePv4l%2FBAtQOnVp%2BWizfdrjB1CPQCTwZdINIyfxFJYqDA6EkYQFCne%2BniwHyYK2PbfSHzvhMPU52p5cE5lrMIwTq2cR4znH3Uczm25qSxDpERnJbRzUJ8vyfhMDyO0cZj3U%2FlvaHjPY4%2FykdpHbTTfcok4PkYTyJ09fuYqCCqRMDKutOCu0uCuI%2FzVRhL2ra57gM8D%2BrcURIJc1Yl6KSzjwJwg3HpVjkUghniwEGyMf6dAHOnBwDvek811T6NtXfI1bCK85lRsH1bRw2w3Q7m1VNkBycZzyhFsFpcnrDTuIiODC8IhfNCKpZcgQqvHLxIqukyyIclxiDTEXlDYjgpjMiv7O5qE3fL5E8gLeHvRTDjI4OABf7LuOSybn5GAyeaGCzHsn7kLLKbGEJazKcJJEF2jRGej0Lfi%2FHtGdGJFo8AExnit1CwCPIuNt1A%2BC8YoS3QFdISYr9NXIzbxS1Ody7Wp7IFBICbgHzH49GbUg0QSDuoKHFZ2TOwW%2FXJOHn9e7R5%2F0N6BmxkSR0OSsKnykvaZI3r8UDUPWGE%2F8rHHgTimzF8hyMP2W4ckGOqUB8ZwD8M53IaCuzB6T2RVdDI6J2H5uQjmAqAcCPIXzAYKAUXDxc68ZS71gq4kvDxIwvP2mibP3H1Mg3obZ%2BO%2BSYIYpLOIIrvDGxftDvSy8wuovQAUMy0N1DbMczEMS6Ekzadoyj6YWHFiYSYlRmR4C5e7PlOQZfJXIblL1Oey9ahcBNIjWRle6%2FIM2b%2Bs0fR3327T7dkKQAUUlw0pdhkgamNrRUbTn&X-Amz-Signature=52ab7702111f6910b447139c463a5efb396b7312a7b76a47c2fc189a72178c48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

