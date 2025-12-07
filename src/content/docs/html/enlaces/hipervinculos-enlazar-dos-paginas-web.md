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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2DG26SU%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T122518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpgJ2aICFp7GJR7DucVwbSDIoFdoRl%2ByezmjogeNix2QIgFP4UcLKO5vJPjEoN4VFTRi9I2qqWpae%2B3eMCxSuesvAqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDg5tCpSKOAAXTPYBCrcA%2FkuHcAJJOhtAGXFVj7%2FXD2Z6yjCSN6HzccAVyPLagqaxVt1sxjfphNvOyLfb6KJcXs4i3k5PtYtCZj7DYrlQ4o1R8WyJbw0EZZ4Zyk%2BZkF%2F%2BC0zaAcmv0pKsWE%2BudYaIpL4wKHOt0KePLbuMg646b38%2F1o%2B5SqaDgiyKo0AnVnznuo5jPGtum9BNis4o5bGF%2BDcBHKa5cNtskT4xLWTGwR7eZF6bbw11GdZELDeKXkA4Z90iZrr0wxov0WYOQJEz%2Fv8kU0cWsFp9kCVDqiN3BOnNnFAxwSw3QQ7ehE0muBvyXA2XA1Y1EDKUlmMQ05LE1B0jY9hKvxmAZ47lYzNL9AVxbT%2F%2FikXxBA8m%2BHlKi%2B2weIMLTWAAUu4kTGtrVeZg3AULW%2BHDmJOjakbiGv%2BqEtFJZYY8a7%2BPfRD3gEGIlDsSChoLczrWiDko%2BcD2%2FiL1NwWz%2FGGilmxl599f2OZZ%2FofVPYLYgQlp6Qm%2FsyRKCrJpgMh2cMpDpqu26OWZbPRtx%2FAjq5WsNyVeZnT9cUNuaC2Ln1sNMaTwEBzCZj3XdaQZTfjGvx6%2Bo4xQuDHcsib94ay2elgjWZWtMb2rOLcKU%2Ba%2F2KIHb%2BU8ac6cegrvGb%2BqPtaYw%2F8mpBQ4HGyMPyZ1ckGOqUBWWOGJnMdeG13bwrxbEfhmOWbyUP1VZOZF%2B00CZ9vFzywxGk75rKNpedgrywf6svV6d4fyJ8lEBLQm3jx%2FeufRHnClOj23dqOlee%2FgViNg2FFDdtjzvclsa6CggK96eMwkqd4dLX4viuP1wL%2F53tF7yofowj01C97rIugVp2YTKCaAiRXUPTPHKD4Chy7nzPT5QCIPPi%2BeXpC%2FYQt6Ol2vg4i9EaC&X-Amz-Signature=90f7122ad47fe3fdf0a9a7d5f38d065f475fc4f519081ccc952fcae53bc44793&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

