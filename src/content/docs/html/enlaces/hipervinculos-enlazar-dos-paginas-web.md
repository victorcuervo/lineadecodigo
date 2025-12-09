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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KIM6VSF%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T211448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEdwrPiXBqAIdKyTCPddty14DgJSYaXn9kz6U%2BMPI6x%2FAiEA0LSoqMHaBk3C%2BKHicz8nhVHicaQ0Q5AF6ePMUujRCCwqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA6INtLyAGEqIAqrOSrcA43oF4A2hBU3zTj921wZsPhgLF%2BNEiXk6Ovg1whKK25LYLOS3lC0YAG8wm67i1YXCLXfDtnDX9rn4Ty3imH4sZP9EH5kT0MRatMb%2F7O7eKj1MpchAX2xkld7BDDjtTxksv8Juq5188jRoUppgagE6%2FrTQ8G%2FS%2BCKoO0As%2Bn3djHY8BfEuoExtFrb%2Fe7kZRbXRP9Eoypmw3dlsWwlyXdCiC0dGAUV2wMSUEF4l6rYogpnyFo8aOwxt0OJf5vHSsP7JfS%2Bq8BJuAXGjwpjidMZy62BQbgT7ApEOV0URUIGrcpiA4NGj%2BYPq45%2FJpkXmEWPZmjYQtVCzn3Z30Z1Yb5niYVN1iUN5hl26yGU83z5iSVgSdDzpAeRtWNzD4U2yPIrjajXusHb01ad5ak0E0bzVdONQNDqUWkh0KGhakQRNNW1UwbncblyJStEHsI2v3pkTwUT%2FnxE3RxODeRnaMF2vV8hywY550EQJtvP4rPo6DTrBaJ2DwaNkVWKHt0EUGspAd9Fx4BlPWFvozPx%2BGKWB0sImFLX5jfYLI%2FHgxdzyld2ceQ56Y%2Fw%2BTHg0FZDqA2cIA3ydI2YIg7UhI8WuY7Hfadqx%2BtT3BawhTogGBs9xP2wC2KlYC7Y2JTwqdxzMNye4skGOqUBIHeTTYna%2Fz5E%2B7wEtiMDAoRiOKAjwqAW8eayxR2uxrQrHj8mMZNhDX2%2B34S6g2v6FPZCqbVkHsxJSY%2FDI058PVsfW5uz7QMkpZx0Rl6OpkFdrvpX7P2c%2FhUdFfA90KD123wsDrq%2FImH49BiL5nnkMYGXA7clFKIVklS2zyU7CYDcYRL5imntfTjSxo%2FjK%2FXCbBcoRwy0xK4C%2FYOJrPqHCI%2B%2BYDao&X-Amz-Signature=30b143193da383eb6f318a03c278234210315bfcd01cec935cfae6523a343fc9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

