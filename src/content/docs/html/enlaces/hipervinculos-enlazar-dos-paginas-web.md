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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667V7TOBTK%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T071444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWQU0%2FkaFgSR9qO5qc%2Fe4%2F4sdYQp2shNEvKgYEFjr6JQIgOYLBlzRtRa%2BBAQfFDpcR3LuZ2QQNEPibKzsFmXXBRPYq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDJ%2BefMZxZGcDZbW0lyrcAzllYJzXrJOoGzQpdybLiKMm6fwoZweguL0HfwSiOMX4TEp6%2B5508UnPegae79%2BplAYsytaRERXuoR19OUvOgHelrt%2BJYpJvhqaZfpYnpTagg0iZdOkmsVyUdy2V5rQn8pV7xW9A6sXVNaMsL84QrNrnDZUMQakP1Q0WYhzV2jk3bCBRLby%2BCgMcBI7oAVPputllMHyOCBcAcxJjOU8B6Sb01Y3StIyygiHa8GjfUUKtfBxkRZJVAsb%2FZpJIMkiwS6X268EbNipXEXOCADaPMKFfst%2B%2BHqebpyGyJXeFs9ISiRYsP%2BccTqQwuEyrn7G2B6DL6u%2BQGlRg3HH8KXy49Tp9mrfg2FtfiDgs2Ide2JeouFdtoXZOxIJj9qRdct%2B46OmtERbluiQgcWn3ukTGi3YdVK4NuUxp1Sv8oiMwiEXPvW%2FT%2BGWTUwQMHdEmW1IK45uc7iA5poPi%2FtZbTbK7jdw%2B23pGbb%2B%2B0jTT32JDvf99uuW5giYpYnDlUKkchQEbfX8H8qZjfZ%2B%2Bs9HxSxWFEouhJNueNGg1gNeYKeVOJZ%2B7JpundKHkf11Hi5AIsH2n1byEERjJJdZdpAUei20I%2FmWIef1Ux6YOVkqhhgQed9SurZpiff9IGsB%2BW%2FkFMN6ez8kGOqUB%2FFV4u5ZbQa%2B9irZWUMmrQycqiAJnMEZjFs89irHe2XWT4xHB5NCipRttanymYuXHUeJg8POgxI47cCWaasnaFvdbmy6W4akRQ0XwBKU0TQkwMs4XDRsmQwZfhVMsn%2BQs33xd72S14R6z6z1y6lJrHD8cuPGAJNrR7p2sqKwCmdk04wGt8uI9zdzPSFzuhTlPT1Knw%2BTTh1HC95OXU1MldKY2RWvj&X-Amz-Signature=a42558e067f08ed7c4c81be42be69342de59753300d5ea1704dd71033937604d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

