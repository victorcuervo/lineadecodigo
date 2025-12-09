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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSCECYBW%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T040148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGrgt993wSsMu%2FTHu9mDep%2BKWHjRmPyIl%2Bb0HPQcwQXPAiEAnd8luKeq%2BzT1oFLaAP9%2FycmmrJTLGIHB%2BIRqZRL4nHgqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGtoKTew7nhFR93SACrcA60cCFgdzc3mNLZWACukdtggNTzmKM4etmR792ePL5kV6xzfzxOQJI1adcmPtJM3skvSTFFkD2YdcVGFJF8%2BEFQ%2F2Iq98%2BuXHezL75vyGu8V9CMDCGj%2Bn1obh%2BKseNv7cPd4bv9i%2FzA2vkFeq0wSmKLlWhNORzZM3JpykS91O1YClxY8k2aytThRXqE5lZ2t%2FwM0QpUBj1D4Z0IAicbnDlm1O6lso5099QEpL0qDQW2elLkPTP0qseN4wtgrUc8NhuX6yQLnv7aflpBxbp7wsjpu5W%2FL23yJB%2BgjKcO24U2N2Ey6IZjr6SaiwKCXP5BjtwT2dB0jh21Fn2dbPVryBx%2F%2F0xTGd1s6Y5sLBj9NtZ4Ig6ofhjbXQsGVNpRR6vuNGVBkkbEOtUXrs0kF9xfe6TqP1tX%2B2EcG5V64A65s%2Fzy5TuGB2x5LFZFWaOKpRE7mMjlc69cFf2ndYKtS3nGQUSlB9MTtTrPUYVqTjDYcPAVcrT9HlPuEskV%2FjpssahJGIKOHz9QzY4xjJTkgLeJAEkTvv0P98B%2B1GF8S8xOoMM8MHoRo9tBTri7G5%2BluZJsnQ7EArhnMWDpAYYRQDSoPAZAXJfv3gynN6aZrZ32vnpduQ01SXXW5Q1K1aO%2BJMKSu3skGOqUBuOtAUDn7BH5WRbWqVFnVMflMDT7%2BMr3pNKBw35fcTMEaa9NScKSbm5AJWisv1p8zAU%2FH25d2oDacpib3xipIhpn8fJP9d5YTvAXpNinTtZXZXzeCdB3BmdS0z913QRTmrJIGQVV7suw8tElg4k2FUGZKH0U%2Bjba2U4HQHKsafUU0N3ij9wE6UeUNISNaMHoUBbLo56wXsmp%2BKOQh6ePbYGO3T3Ue&X-Amz-Signature=2a118e6b6d4664a3d96afd02328e9b0ae097cec67cf4483859cbec92650d3cea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

