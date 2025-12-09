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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XSSDV2K%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T035809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF1vmEdC4EjGgqkCn6lFuaOgpQBXf41iUi%2F2FKjsXvjMAiEAgzVlowCiGSeL6L6ZHxHFewE0OgfeOt6gq3NfCSM7oscqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOnwmUqkoDAo6kAeKyrcA5WgTOwJH5lHh53cQhUe6YJ8kIRHmeLJXwwhiQE9QdQCZoE%2BEaxJI5WmzHOV8E8D1lZj%2FAsU0dI6FYRD0NErx2QHuNVMBv8A8DGDb2KJijxOfpWUutNDxDR%2FLoVY2g74KM5YSHqYr2womDy4QNnvoY1uao4s3qYPPaSuW8hHeJUr2B7oPV5IgQ2hdSdwPCLsWimXznB1qpAe6tyXCeGQDUwB2yLuBihibfnQLRfWUai1pF7%2Bm%2FVP%2BSi5xqvEJHdX91jIsj9EqazJrd0Bwr1olGQdKlni%2BsLuLYqfVWGpo3xa%2FfHvXrMbDGj3t7OJSw2QEejYAPWBi40VFSrsZ17U3pxktysmhKK%2BitzIkEhmxqOiI%2Bhtb%2BxJATdjcZI2rcINfpg6WJDQc%2BSzoIUKbIZz5N3BFGXo7pHTnPaavA0zqB0DFTeH9EuZFoNeqcGwgTMHU2r4kuyRe5fPDtdRsg1g8JrA4fH33gNIgMbUilctcLTz%2FdXEXawY6RM%2BMnoUL6Ylx1Wcfw1zRg%2FiCzri8CA7Vezql2n9I2hBx35IHBiWYzuTl2T%2FK75HQoDBq%2FWa8tbvHxgBeamkfRFxYJpQvilLa1U9hKEKTwU2GWpFBHcTrSXmpRZuHMa7uoI7vR0VMKKu3skGOqUBX0ZtiQgseZBJFgX6rY4%2F1PVxJ3JoW%2B3VIE%2FS1ZQXEqE0U9MxlugS6HDuom%2Byw%2FIMhWJERL8Uv6o9U1ILieOE6e48XH81f7uVG0UIEQycsop4RPW7S6umhhmdckJR2k%2BGtkLzGAOPomI7%2F8sl4gRgoeksT5gjvwrj7%2FvVhAULLRA16g9bCdHo4BgHjNjnIEjYAownPb0bBX4VGJMQtkZCZGIFkFXv&X-Amz-Signature=9576be710a5f5162d1b5607ecb821462966bd31dc58235e049e14eb800bd7ec9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

