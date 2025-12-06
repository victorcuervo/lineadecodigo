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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2V7KZVL%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T095542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEhDJua6dyFui8lbzq2z1%2FjoChzy%2F2DfO5yzltjcdLyhAiEAzi%2Fb5zVXxLYWi%2F1roCHkV2ET55K0I0G0KHXayGI%2FQ7Eq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDFqMJ83QdiBzIyM87SrcA7DRhtHeZyVfjXq0yBhCCCvxdzhGemi2GUpqljYOGBiBsQTa1DxIt8sNKl%2BYijOfjyQSZgxzmlN3GZM0bn5eaWzEFjM1R9KUOGxR7VwdAHCD7l8%2BoNq0iRBQqiMzGntPLsL%2FzLRLZ%2BeZ3VtSwzTw51qw%2Fc6tdlDUtX8Jq2ql5dGOQBqVLzMhGk%2Fb9Ujq2ve9WS%2FcjnOSz5GnOfjnkAAQdE2e2Ai2YadkYhtRUEuNlZl5PTq%2BUfMjETv5ALlnGCgKT8RNi7MCpmamqHEcxRw5J0J%2BmncEy9BBLMCvQK2o7DzfBWscQ280oKy3b%2FTQbITXzPAgvvPh1Xyj7UQ%2BTN%2BcvxXl7W93r8Hlk2XEL5opbv6RSzIYvXV1clCDm32pW6TkH2jUFI%2FPXZEFJfxaRAQDfE%2BkRr%2BOLEedivEJWVdzw8vyueOBfKJsIfozGJaI2o3b0dspSa9RE3e4AKKYcy5txsmHZzbAtAJutOl2IvBTfSjh7nkjgqKweKM%2BaK2K9dIX88lLNtzr1n5lXuvyP8QhENlwIv1Ib9VARIWDiVOzjeVLFNi4Tqg6W6U%2Bo18GqV8BIe%2F5mlLvBz7IRzoey4dEqVAPtQ1k60Xrc1W%2FIU2MPMjQSy3YWC0fhl6BdC31MKrrz8kGOqUBSpqVe6i8FJQOBMuJgpCS2TuhtyLXtW3dSzZOrD6r4giXRAtnm6hMeaMb3U%2FqlAflTsWcv9iePY6zpSFBlU5bicbkueFP2p%2FlZil9OybQBpVAtA%2FrvOERY14D%2BQ%2FDOtaEK2SrzzUQTjmW6yrLYFvvNb6KGxwmhAvM8oHn3FggK5xY1i9e1fkmipORyXEeV2n0ha7CNoIK9T2BoY4CXfnckIAynbwg&X-Amz-Signature=ad950d93e8b9801ba36216ec1f830d1d4a088289086ee991a54f491cb3c5fa23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

