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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YN2DRAWC%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T221821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHX3JXb7xGlcpSUDhYsGE9gkx1%2Fcm8xOqAdUnyFOfOEmAiEA4aaWqoiuyhLFEV%2B6Z7WMPxcsxY%2FR%2Bu3%2Fv0g6LHyt18wqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG7AmqrsD%2FPsMyOwIircAy5odRFAQBwjuMUnv%2FXrskr8yCA1vLF6FdaS14%2BHZrWvWDvW5qLhQceeaakok%2FCAX5uYX2SECvhXNzzCKJbkpnXPwnY%2BdqBbQOHL1f1a1toa%2FVAyOJYdPtL2UNcRpUYpQpQTEQILfi%2FuqKbZUl2KnMiZ1J%2FH8qk1ZN98FW3fqW%2FO4y8Jfn3tjHaUeGc7LxFtmGePYn0cP%2F1uni4jUQ2CnTx1bo%2F6TCRv%2Fxgok0sMpPWY3xx2EkrYmIv5oLH0BR%2Ba%2FC0q%2FdvY0InoEc00oydqd%2FgqJmzqREZFWcXdIo%2F0wHCE%2FbNJLaQFYAXHWBsq1b6xcRH7WByDvJ4IMCu0JyyJnUHkauNRjWuc4LbJYVJxfgMML%2F5GojwZy%2F%2BQDAOqd%2Bn7PZUQwu3J5uJBcmOXp3%2B%2BUZaUp7MeZw6vm7Ac5td24eLwJZ6G0Jo1S0iBu1wdaND6pDnyjKTeAE2QxMt%2Fcy%2FI6EIeXUw1FtsLPg9%2FN850kJTN3A5lY%2BT3JnNRhon00nJTIN8vpx18f5lyJw5vyPWI7wa3t5AeEptr7YYfaNmvVJzj%2B2w9GbLmIQG5lbW7DqLG%2FbKrlxSI%2FEsNuOzlNKVs3ymNCJVujG1xHV%2Fp54jCuBFNa07ZWp%2F5SztJb1IxMOGf4skGOqUB8x1PljpRls%2FJnIIO3y8q8YFhdpd2jpD0kJFaej%2BQpS6tZa32M6Ly5Y0z0ElQ10a6DCrmEwYshaZQmaO7L1wuE5NX6ZQqxG%2Fx0dCEVnywUtiXdagjxjH4AzGMgrJUxJf3DYspasd5Mt7yWupF5%2Bz6%2BBYRESDqexqilVrxCBjss9jtjA6AXUpqXYQ%2BEB05ZVoX1kmiBARQ6l%2BH3I0cFOcgcW6%2FQBzC&X-Amz-Signature=d5296ac8368ab109ceb8d787696a299114d22287025c7b5f934af53ba4a7e42f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

