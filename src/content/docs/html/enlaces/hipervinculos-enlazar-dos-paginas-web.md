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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W523GBV5%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T082632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0XL0awgZEorCupCKrfyc%2BTKVA1a5EDGLYleBh69XfFQIgKvJC%2Fhy4JmjZ%2FSfpLGIw3oEFHJ6J%2B%2FfJjguOsyRgfKIq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDDXf4nW54jIjLXRxeyrcAx6meQI1G0huRuvy7DSMmCvichaqjoCOJ%2BDpRt8WeIorgmXq8yNyf9%2Bmv%2FFJgxGX6UcmgMbivxWcJpWz7J4WyjhZcayA%2Fk6%2BvT5uWCdxQroZlZhbW6ou8PmNtefUoMo%2F9VJ0crTlyshD7iEVB%2BuqYNQRllizCb0kY0ZH4jVxg3%2BNJr72N0NGdRtWtGr09kou1k5I7gJUPjMvs2dTfU7WiTfKRaAvhbb8A5SaOIh32SBQ8qzuQEDZ1AbUIDYrt4%2BCzYCbHvSvAeKmfjYFYP2rIIB%2F9RXX9T%2BdLMcwFj4MwTHvt4d0m9mhv89d9F7cECKbRpYj0OVN08yyOBxc7wgIbPTprSUDCmWqLuOO2%2FdsGhYa5%2FAuMe3NkLgophAOuBe6VslcyiY3VqDcJLAgdoJP%2FOVPc0wCWKtCEFAy8MY2DbgIZTOatGZE7Uix3gJ5oF%2BxgM%2FOutYA9gW%2BbU2Gr2AD9mrwAUo2OXBWhGqb%2FQjiIUVv%2FOtnhfWbABri3BBA8Ap1R98eSlSXTT6vA%2F%2BStimGyEcLbnXLCCp5qRsnZAz%2BzM3xQryCiq7ER8jk43LVTf8LEF7CZPkCW8djHzqYWXuuAg5t3MLBFOgOmGJkGhw%2BkO8H%2B912YAHFG8wdKq%2FSMNCryckGOqUB7ST805gjBNe3wrFmzKY5hJTdGIwqyi4velyeX22KgKuPt3ags3Xe76Ku8Qr5wM44fql%2FjyppzwleGkAPP2on3aD%2B5gN%2FW7I0200MGR3YvXu7jAMPwcApfPmGgDz4xWfiEBUUEfX9cV8%2BkEfxRWYT64OpgaDkIZmPQSRwyfJoUs9nhcikOcs8xwUX11c%2FnfdkX50z5C1yFdFoHgXaTCGwDtY66ZLL&X-Amz-Signature=7313fe917cf010597149cdbb539752efbd3fa41cfc207b10de8b597a5481c94b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

