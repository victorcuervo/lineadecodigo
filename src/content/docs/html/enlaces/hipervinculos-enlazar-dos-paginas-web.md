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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDIJXVHT%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T163744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHMaX1JEfLmwUOVVLFpyLnBq6QbrtwPX2ujvcsJpjk86AiEAqr3z7l8KCw9Q6edY8SdNheJzCBX2yR2TeMprzW4Rg8UqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPlUAM62VMopU4BP0yrcA%2BxqciWQ%2FbMkgiTkba%2BidFuGMm7YqUIMJzzVnOggSUV2XKTJzQ3b%2FbDpZz4vbOSOM%2Bn4Ver8S3i42ergCpbt9Fz%2BrmLGhwBGDUT%2FEItLEz7iJJwM1q1A5%2BYb6Tt9LSldVCSgtsNeQkwk2UL4kcwPwqQp7L2S9VR0xGNHHOM54drvFZnCXsMsbOJLsHNbFwqBXmE0e3vBfxKLbHSphR3SMRBZIVsDQf7TzlnTCk5CHNBSaCCmDCGSTIQXXbH4vFGaq%2F4P5XMFSdhkRckGEczjo2hZ1WeaIN1MkdD%2B8QoYdMtutpW7fcVY4bA3K2uw1Nj5EadELKCFRTWKw6%2FpVGUiNTukduQQyGJC%2BhbG1%2FN8ASDoM97OkEaQb8UVLpNHHek4RhqRhRWI4E2qf7nh1y2Nij5zk3jvjkD8be81pkJfZP7BNjTs%2BMvq1xzSDg0LJa0Oe7NI%2BPRhvZWrGtmKOMzPpNCM8nG7AIe%2BmDYn8E%2BXcWRkrT6CnU6I9hNtYmNyhel8hIzXLhIrV6kJw2Pf5Gm6GuN8sWOu5Nqcu%2F5RZFxbqPKRG4EQVHWBe3FaBgkBfxCWGivD6T%2BBzw1VtzsJ6laIWKfp98EQvzkcsnGe3UDwSsiBjzNSuuzabId2jAYNMNnk28kGOqUB%2F4%2BaRyZ2zSGgujeOEhptp4tXKCxuCOSvMa7oRWYwEZZYjg%2BIMHZ5QxsRfwWU3dTTfAhdvg5LLgmrOQoObFORpIwPsdmtd3kZXYtboMsk5mG9CvKWPfejwUKDdliNa5J7dQxzPUOmFrfC%2BnPMrEqKEv9IFJqfkb4Frjelf1zCL9MWndcXktguRGwDRB9lklgOkGnGXefzfiK3So6JbJObHwaHXuyb&X-Amz-Signature=f7bfd60a90675d1dad8c768612a1e6334b28191fc0e761e51e1e6cd6b68cdf08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

