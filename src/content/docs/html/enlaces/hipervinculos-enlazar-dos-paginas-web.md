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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IJNJ7GK%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T090009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICdJy5qr2VA6EvYb5VnSXxPbTlWAztfmsA%2FS6a9iZXC5AiEA0MKwcVo4BgWJ0lixGNTASiGmre54VBocm6Cx7newheAqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDELvngSOrys9%2F9WEQircA%2FckVqgWhfx8fmr3AX7J3rH0DTR0gqP6I89pltijxMlMPxY91HYjtwYbJ8MeUdqSc0TDlu3xzOLQ%2BxNwq50BMp6Jm9C4Jqmwq1bpHmasUwd3biVuP9ZchR0yhHetkntNGdu0yxHyFGvgi8%2FIruMKdfseTpYiSAU6bqXvviVhMmIgdWpWjARyScgt4SpyL743XDi%2Fk8K4jd%2Bh4JFWs3g%2BNDkPrKYWmrrZKWLob%2FRDN0rKwmRufJWTykyCC1WnTOQBEw9ySbU0CdZ%2Fhnd26QG8%2BJvwkRtb2YK2SlzBMCVikja5Rm57KRP8%2F80jz0V4ezzJCjH5a5JBgOj41ChqwRhp4cMqBcguTALppBR%2BEB0kpZ0PkP1WrjLHZ1A3nBcYiOFR7%2F%2BG2PoK3u22D24V1N81xDMQ%2F8AFBqYiHNme1uXITMuIPovVUPp%2FEDZybYCEKiNYlSQ48OENf8IiSIS%2FcPAr8mA9%2FU2mF%2BCL5fiTM9LA4eq08VDaB1NdmrOB7ShIeDjHVwJ%2BR%2FPxBUt48wkZW8FXUKzNhHhpnZN8rNNckXmddRQ1ItbKhkrp7%2Bu8ltTBZvky8575%2FtMS3bYtgHHZ2t7EbWla7OZlcFNiQUx2MkKCqLMaER7jjZevuNpAVWeuMP%2FD38kGOqUBH8MiLEOQGYYpC7MM%2BHUZF3TLAYqggXBfJ4nKZ%2FVtnTu0zuWkDsEL0mSEhjwVFBara2rMkHr4ZXhtsjaDcVigfKQp7z13sZj7PVjax5UXVSWjFhIq2ED7LM084sH3UqASkWSy9dZ8NuV9z501SHvMkf8DmpWSDTrIcO70D0np1vwclwllbHknxMUmCbCQktuvAHxk81wnFUnVCv01%2BFIYi1LhFl5Z&X-Amz-Signature=e913fd9df33295b0b29152eaeebdac4d4e035c497712ff05a944e661a7c12819&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

