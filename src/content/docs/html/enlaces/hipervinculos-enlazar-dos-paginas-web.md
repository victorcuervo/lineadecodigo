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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYK5QB4C%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T035004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZseOqp12HdF8e3mD5Q0%2FI05GqB84cBLNo5aKAqSqKEAIgExpqxfP5tVxPuOlrPmbSSuHMT%2F9sgKaMoY4eS2eIUOcqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH9Zc4oBd6aoMHr06SrcA7mobzpqNrAFHgNYjPuGomaeoSBuRmfuNlILj8V4aIDCADO73Cu3HVONBkdeVgsgiJ4EfGXeARh%2BoMw%2BRdljYRq85j3kvsnwolDSxB5lekk9u8iPl0IUntsWRpBgyx3eDxLJmL%2FET%2F77rLL0zq%2B58Uoy8BBBBk0nW0XRjNAl5wm%2BR3fbHf2dhwwbMrsGBRaVuzJVst%2Bud3w%2FLOJQEq68SsOTGk4Qg%2ByC98gtUFzvNTkmmVK9Cmf5e5EPBJa%2BSdAAC4LmNHOr9C74D1%2F4pGJFgRA6BAWDcGq3DJCXTXdZltunAWNm6q7GBPb6P%2FGTXM0I9mHLd3LYBfPkLQOOldzQxymEWVJno%2FVGnxMkpjjsQEA2bUzfamgb6Xxhrp%2BnQgc9C1QQWjO3J%2B2DRJZ2xHQicFWgrS8TP%2Bpt6pyARAsWPtprJWIuou1EHGhvUkriBngKJZ6N2QHbI2i2r3gpmWTOY2ld4Vki5%2BqOIbdGpDhwK2K5E%2FgfCccoXsBE%2Bc6zwFTpH9i8QyoJxGl9BGwAqgJuwgmM5M509sXli2kAdY3ioVOmpVFwwUj9Rt11DwcP7W9W6ZRm2K6kcx2uLdwWZSBIvRaVp%2B98Mk04TM1PK6MYym2lNfzoXGSMj1dY9xAZMJ6U2ckGOqUBtND9Ur7uuIWcXJezhkIN0NjC7q4ZpszYBssQ%2BQMxkfZrJEmrNWF8onTf9udocuoqtvsVR63sUcg3%2FDUa01NP6GoebRqQvgiF2Ue8YjuZ5LQqfX7uunkY0q83QDvvP6bA9Bq0U701QAPDzhsAWkUbcHxmCVwTbiGEWW1NCWRejIcN2EK7zWsrfgArr0qZKmDUvxcVsH%2F%2BrpQAnFQFJQnopMtk%2B5Jn&X-Amz-Signature=abb2d0313ffa4393e1c8251e268eb5ac6d09fffba786192872a544f81ef2176f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

