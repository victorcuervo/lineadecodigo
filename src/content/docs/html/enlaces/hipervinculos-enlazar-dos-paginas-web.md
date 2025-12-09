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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNPBDJJ5%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T183832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTl4s6UEzGqq%2FPceXOmCDwbM6%2Ba5tHlz4eEKoQlk94GwIgIcKe42zYG3MenjCGfOsqCzipTBPzBkB84cRdnQ6gfcwqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2Bjyz9RWLRbNOfZzircA9aM30XzqZENaxtP3hw9Yn7OOI1nNpXQ%2FIJiAYUMpKSZ6vXAdUIG9JJKWryw%2FuXRvTRIafEoKSB%2Bo3bW8rudTpw29aNaX%2BoBD66Q3azrUfYZzOBL%2FEazaaTCUzg0Snl9xJM9PHYdPdav9X%2BpgsrTdVVa6bUbt8gs7tbPwgQJR%2BEIj7XrnG%2BLWtDtsfeV9jJ%2F7BGLof6s%2BWcPARldyk9EVluA6%2FJFCNQNzUXVGNBfQDg0zH1f5qkpwAYQrmsf3022DGQVDmqh3%2FbnkFpJAiSp8a0ZrDI5v4BW%2BIv9CFMwRCibTOIlJUbb0osKCrnozq0PsT%2B2DotyD5eOPM%2BKkMspE0UgU8ak%2Fx%2FAdXB59hc7wJUWfDYu6TYJJG5%2F4NHmGj5%2FJHA49XIVSFpn1e7Cg6klfRFgjrv3IsWqhN8ebyMX44fhLLP0qPuf9bNKlJANJ%2BaoOeizZuq64Qibvkvm8%2FttUarBMW6MGeytRrq6mJyzKAIorRcGZxAmjTjnHDkWC6z1cgtJ12Y8xhOXJ8KwfzZOHc2zzbNZy9lQ79bMKeKppDaObfSIW5%2BLCwXBM43UCcGStBZFkmd1WfkUS0AxGIrwN3ayJ6StoEfXGVPWT%2BbkdYTTaU23WsBnMs51rbZjMP274ckGOqUBOGRUiznEQoIGtb6LUdZFVqF4nbstHHHYMeFhLnTd6sjn0EsupVgGh0r89A4NlN2LtU13Bx6qlmWil%2FawSqsndkJn%2BdUSE3dpnpB89aStG4WzM5esswYBY70ZJ%2B35IQInWvAOogo7OItr3x1B%2BUj9dRUV3M6suyBkuuy6KHSJwTkQ%2FpcoZGLGdZG4Z811m6%2FCjSmdrcESsCFYkyAeoTn8V%2FLuMCBX&X-Amz-Signature=a871aa3bcd99e2a6ba472ae966aa48b49bad4b80afb0b0b10e909b5fd24e1556&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

