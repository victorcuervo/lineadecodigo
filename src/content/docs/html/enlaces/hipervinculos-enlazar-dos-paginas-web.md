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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667A36HOLU%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T081831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDxSqzUAj5aRJ8ZEVQ9UuEoSDOi0P1sFLGw8QIwyasU2AiBp%2FZv3E0FDdljLzJAt%2FFxvegvB4mk17F5XIPUu0CZbuyr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMljY%2BITpj45iRBYVgKtwDrLOQZyTfYBy%2FQ8kMtcCQlCR5D5V6PqhAwp6QjHuDzPJnCyq%2FivAMfP9OHqCzysU2JE1K%2FGyw2kCWF%2FOBYaTWGHZqPI40%2Bb3C9EvaTgcRCHQvZo%2B90RTk3g7p%2BvDXzSiyZaka4KeROZlkUM9Q3z%2FoP4Z35Kjd2kAh%2FsB03WtFUDyu0U2uRbXgqO4Qr3Nd3EBDO6fZ1NpVY8VAjuWFBJdbEBuwakZaa2IZvDEKFcLYyA7Zwt1C%2F%2BfcRLIRCu2l%2B4lfzMPHswfM06GOuw%2BcUvGAyyJZUprOESMqpOu0fW4pWT8TMVIncZRsSQNeajnhVlrh1vLbLg31T459RAJzWcqVCz%2FMFPpCvW5R1qPFJVJAlQwzyzTu7yyTWLuPsimucbDdOsCk9ohT65Abv6cCR0AF3b25zyCVYyd6i9YTpQJGMKDQDEvbnwXSzbzizo53S8KM5gPepV58dhAaa8uTTsHlHwAGHC%2Fa%2FDFFrRGuFRKOUreGwATE4PG25JDr34F%2FITkwt7dfFbN%2FdH8z4mUIlZYt2QHm1KMnZir6RL29Jyta9hlVUToabu5DDpsR6jgjk9G1DY8TuN7NTvGNLVDqo%2BpQtFofHUmaV%2FRQzMxAIc0psKLtaL2PSJpBNxTWEwEw6LzPyQY6pgEQ9Rl3tGgjkSOK2qA0xD0f4VtmTgDpTnUp5ZdcZTVrP9f5YIdm7yK5%2Fuog0m4ednZdvZAqL%2Fl428X4Z%2Bz%2FgzIGrSko348RY60hYNOtsBld%2FPjL4Msqi73RZNUaJWJ1FTaNU3ZvigBR12%2FW0MaxFoNjTMIkPx%2BFbJaQS%2FesJyj6nWeuiN5o4mk%2BabI6h6GNVnkAjJV8ROOP0PpB%2Bz%2FoRaaEU01CNR5c&X-Amz-Signature=0261b43707001494ab460b866cc0cd5c4d887522de5aece8159d46ab8060e779&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

