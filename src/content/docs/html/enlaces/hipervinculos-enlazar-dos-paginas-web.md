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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLUMZXCY%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T081358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHyu57E3Hn0km4qC%2FSSkQX6Bg2FF2GGohnR3hJwPi2nAAiBRmqHLCrTNNoqOb4%2F197e0EpD8Hc1z14j%2FH48e2MOEfSqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5anxRTa54pPywd3VKtwD6z1Zscjl8O0KV3fTp3BeJ%2Be2aho8%2B0TX1MMtS8%2FpOgAvPro9%2ByPLGVvSkjySEdosSBgTI%2FPOz1N19Q%2FJxhv8GHYzBcCu89JQ7cAPr3BFXjFsfEVvNkiQowQ6DseWOCb0sSpyyh3CvWp%2BjCL3XG5GWedk6LvZ65h%2BlGEq%2BD1GXYcxbbVGa%2FYz9bM%2FCLii3gW%2Bdem2o%2FI94SC9D0Q7QKfEUgs88wEZwAuTe%2BI8ilU4KjosmQ35MAwq7TvrZnesZjbEd2rWSY%2BpEx5cQNpXGjhTJpibshIIhH8OkZDFQdq%2FmqZw1Lk1ASoodcywg3DCNvHT1wEchFSx7Rxx9Ef00RX%2BWkDOfMkkkn6IiZRHdd2G4ftAtr%2By%2FKmqhPaHg4SEvgdNQRKoaIvT6U62Fvl00JqVwaFWmldpY0rjiaaQwovdFXKhu2qJA2XH%2FfW60wnuc8hx6w6BtX%2Fv5Md37%2BXrjMz7azF0YzQlDduRUktzLo8B1lPM8YsLcuD0Q5%2FFnIXCieN3BopVJo1eojnFly06rzu7Qj8l%2FFybDzfIkvhpRrcTYXiJXJzzG8WUYyspn32LOPpLk3reCVFsaYdDu0KsfGoIBKVQQA2Qk7aVESXo5VbFq2k5cSFc8osyjeLOq4AwypjUyQY6pgG3bkliAC0t6vM2ut7JenLtTOyTBtf8D2FAkijqGzgZuFjoeJK56pnHrmjSsQMXaH8Q8s6847JbUZ6IGFMYehK0afPYPayIYYSZwOgj4jR3T5LuE6vkLwnkzWLJGFbFS5HWgeBWcwfSdswxW1AmMMvc%2Bi993H3bPkW0sXlOTlzaoVfr7uZtiptQZmLCLv0QNFaiKac6KKGxqfwJABp2jYW%2FSbmm8lBI&X-Amz-Signature=a3601f7054439eddfbbd425f21d7d4b3dc6fab4f5acbfa22812502875724249d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

