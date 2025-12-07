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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWD3VJJP%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T190716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICSsLgG6VarEI8uiKvMIP1jS6P%2BRVmjMdYTdco7cMWD6AiB%2FGeG8gO4cMPtL8pdZf%2B5fVXP7l6CcELD9Lfi8CtfSjCqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUD5wIDlESyE1ObKHKtwDX57pTyX0df6HI68rCFOOkYOAa3Yba94Kb%2F162%2Fa93osXkI1gTxVKtj4Wo5bppXR0vuxaPAQf0957%2BfkQhfxM1tR%2FUskMjGxj1MbCEjfqWy4EwRe5pzz7J6aFzNrHfhovkpl%2Fre8LfrAX%2BspiNRhZKiljaCuQBZFwlvcgTm2AXyv4C1cghwn%2BSvjhK4%2FLpJs%2FQTr%2FfMuT4U3pPZPkc9MOCwEID%2FojItYm2lvTkL241n1uvDeei414nLDda%2BdwHv%2BFQwefcAHLeb%2BoxpY8wu2VCiDtZA2TJXA5kbOanOw%2BQrTE49Pugsyl764n0%2BvzNAxqVmvXQfFY%2B4DlPJrixbgvu3DwIN6j6eBajSihNO9a7foD2YNpFQ4sB3DO1hO5nyd%2FAjaoykRQrRGEPDeoICml27%2B7dGrKPxp8C2E6FnBJv4JVeWpegeRK7x0XFFyYyovtSbnpDKt%2BZh6%2FDfWAPGirvhDwmX1feZnv1mzItuiP%2B0It9mAIg9b3THvBjU8t4vZgIMZxz49LQ4HlvBqDbsCW9yUwmfDQyg0g03SZ8D9g%2Bw9em3AY7DM1TAEGDGnkCU3B0J8R%2BNO2XK%2F1XCSZqOnolddh0Bp0UeGup2pdD3GouJQfxMjF0sfGwVcSoxww3tfWyQY6pgEYPVHOzmTJCDEWv4M%2FwItSDTDVDx6OiZmKS8VJR%2FgtEl3Ut9VYlGnxZmzI3lB7dhAINXWL83ceeixb23YAGjGIzWJ0VhWa4MRGHnXFp1YbUZPKXKwPSuREbafPED4blH2h65rqWAaokZQhkCvhvoBzh%2FxvQxfH0nmyJROgC%2FZ6AGM%2Bu7UP30awIvO665cQxXbWjqh%2BnRj9BsHw9b7W%2F9fx9Pgq%2BNWL&X-Amz-Signature=7da35f7913b4a3911a8243d649be163b21371c0dd59be87ca5659abe941a9ea5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

