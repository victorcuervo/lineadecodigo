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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGAPBMB5%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T233415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFZxsBzPYDXvc2dYaMI%2BOLaaBTGqevkEaxQxmMYWtNF0AiEAt59vjJ3KnI2PaRvBYklmSVeYsMaVX6Z4qQhMbq5yZU0qiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDITyPQwQNSKIQXyODCrcA7njAqPwj7xgJGXCVPX8hhyrckuqm2DwzwalZPV9Efcf3t3UgIcD8IlIxwvzg47VOLshFDontGiiK0xn5iWVmf8cV7CBJb6D7R6cbPbemcnvjPpXpVQ5eMk%2B719kgvGk5A%2Fv4ZeRrpizG8Fp3G5D1TaOAZBBiW2JHoX2kslumaFDPdPliXrQ%2BfVTI%2FRjglNa0WRx0sA9qV9r%2F%2FpeiuxiAtz4cQ9ak3lJA746l12ao4jsChcPYL4yDTf8xKlZxQGyZUMWlBoKyu8WGmFkk39rcBpTMW9WrsjOXrxnzggn1pC%2B0eoQphrasjTdJOIqeQfLV0IG91Pvq8INKAQyq%2Fy70%2Beny5e%2BPazP%2FHPKK%2F3u9s2lHYHdNtOM6I0NbalLMwB6YzOx%2BhWdzW5%2F%2BhXHVil8RMMgZRiUnpgKZ1v0RIS421R%2Bv%2BzFtVB9%2FEYkD2S9zQyC%2FdOtLI5I%2B7T8YsLGT1I8ER6p2APSDZP%2FOj2qF0Uc6t9MEjV34X1TXHt3WVWVlPZY0visjLES3QR2fdBO8Zpx7mXKtMgmzAWE4sIZV7BPHtHT5z25fzOmIUHSMME%2BD%2Fwg4PqEz1t9mmLLElZv8%2BHF4xL0XhoHbNdbLiF%2B6xlzrvsKrkD7LiXZlDAfCM%2FPMKDD4skGOqUBvqIZlS6yDHDKllC7kHYpNpaPKCBW428Eoxtu8g%2BGW%2B7p5QqVDbobgwTkyXXu1IZNLUCjlnLxoET4gmkw%2FPtV1s1d1EdC8pQXhQd5pofRRQRiFnY3%2BL%2BVffmVT4n%2Bz1mRTg8yrJfUN5IoY49687XHPqvStjihpuqFE0CLmf%2Fv2rz4453EQmzdriKd1FTYQtUaa7QSDvkS%2FeqjY%2Beck5S8jcTpVGbd&X-Amz-Signature=85398a0e4dcb4d9c3c766892ed52c36338716c5c87c60df21150bf8be307889c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

