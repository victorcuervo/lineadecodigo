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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466643QJAGR%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T201819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BgWnVe%2F%2FZxE%2BuFFPdm%2BXepPfsf8gq3lWu06OAG%2FGonwIgNUHYvd9AY0VYDfZX%2FMNzRTUEKdHVU1S%2FU2cWQpTeypsq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDCuzUuCWc%2Bl5LfIDoyrcA%2F1D4PITlOW985h3Q%2F0utDUifJNFpmajhGVEOKLnKGNrl2TOcXnKePtEUgRtzZ%2B7eOLRh8HwNy%2Fp%2BR6G9M1DpkuvxRf74FHwS7igwINnicY1Q%2Ftg5ZcaPluWmF03SRPNRLj5LmwxuQWBxa2CL8XABI1jp64aTAu6v4an1Y49rJGfhzSSUNiuEmAdWhXlgiDV2zpadeNN%2BH106qHWCmqOBG6ZZTdeVAdOeiFy89%2Fs9c8XcmmAiKytOR351eq9jw%2Fnkp0010lGUBiebG8tcLhZi1YOoWmlTC7rPL%2BELsybvjmaNvR%2FYRNw%2BLNDtY8xq8j6mQAyeRVehjGT5osBrrOW9I%2FdBhRziyrn0Bfzo%2FAIq%2Fxi36mc%2Bso1sp3lPqJYoCKMyJ3%2FLPXkc%2F1%2BcG03eQ2GJ3yg3dyRBGjOD2MUPhdJqBNM95AcgjYzVAUAxoUUJ2phfR9JctILTyPY7vxYeM3EXocCH6tBsmclwKSzKu0QgcmeIGEDkLfGctcWgs3o031cNNJ0%2FcqyNt1Tstjky6gqnj480DhWaMZzPpFwAXu5N%2FW%2BxHv2t7jGzOUOdOlmF6NidB4ZiPUlO56sRyt61902DXwuoiei22ICBZORQH6utdQSXMkZ56RhwVZEgVixMJ3my8kGOqUBWsiR4a1llGpoc%2B28%2FIenAAdw6LaFk698LOWhTu6GFH52RhCSBjS1%2BxAnLT9uqOiSnKgGg5MHrk%2BpjbHCBx1ZFEEvMVdvJIeWsEonzeKynrF0zCui9iR%2FbaWDeoAoSfO%2BZamgdkswzK1H%2BKd28hf60u%2BFp5MSkD9TQzB79%2FllFHGlfOk0zEJlnx6kk%2FsWRynWZSpYTZsGFPlRw0tHkKJRwOysmCVp&X-Amz-Signature=078b0738cc4102b884d1b336510da0950de1b75345928ae9d0f28d0848ac68b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

