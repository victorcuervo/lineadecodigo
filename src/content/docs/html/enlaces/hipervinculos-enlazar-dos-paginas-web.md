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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGCYNMSQ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T220741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDHaBQyPjX9jfLKTo3nHLioRFx%2BeYOkeOmhp4RmNYkf5gIgDWmBhi5xCGALeLxDvd8spyf%2FoG108xNV28%2BKtsWS2YAq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDNNeSkqjnZVEzjFDWCrcA9%2FHgSuySICOzrLGYoqzVojkemy5raTfbJl5zm2UkYOJIJ%2F5Fu0765uAMh4pOxn0GAIky1LKAvIbUte8aEyg3Exna9ty61kHTivqWtvBuM09A%2B0Jizt7osZlg1xVA82XXeidib6HBuSCWpiJyHHzl6Qaa%2F2CzlZP0ULPQH9fuN9LshJGxQbQJ0WYZ3p1GUzQEpUGfcN%2F3KVzrPFHAGE7nUHPgjbENP%2BrDYUyCJW%2FjLgAhrXxftLMcHaRzAS0xtfTTVYJWf9zB8PN%2FU50Ot0AXCVa%2Fjz%2F8%2BhGNoSnOTMrqF1vaiaF9NxZWGqfBTObJmr%2BlvjLiVpN3r7vnkcFCT2bphZYH7S7zUl6G4iJcPAfSgab63zZA0%2BEZRy%2Bsv%2BSSw5i23I8c3Io%2Fp5247JYSMJ0x1xB9XiwCH58EluO1qvt5eprjd%2F%2Bb25FHEFnqaOMlu383K1Bt8Ag%2FROKYG%2F9GJbfXLpvy1%2FiiU%2BzrjyY5IgZHNHAF3mFjHBCSY%2B4OMyBVzvWHRYbloKOXjOKn9XwAlyxEXvNVdSd%2BMVqfl2wYX6wKypb6EMRau6Q9FDArDB96GYs8pEmAt76%2FRy93pkLFwtzAYUdlUawbTSaw2HA%2Fh2JNUiA%2BBE0c7N8VKBc9geeMIeQzckGOqUBG5d8JHBz4Wq6upE62QTVlfq%2BDdcmXmyLUl%2F8g05EvZQl9Ge%2FU7yVcoRIq9mrSAsrPNBwwQ8LSTFaxAORWOcOIuYPPLspd2gQOX%2BaJlXZohWbQtrxxnJZDYcCMqyGLTiNRt23de5RozYHH6XIq4wdc5ujjzFtXA1izQ3t6Cc8%2FuYMbfkogpqvIZV24FeKu%2BlCixDA2UG7EGyj0geppHdyQsIqOFPZ&X-Amz-Signature=b497a4c8b6b2d889e7d615b069ce107f42edb4c70b12e188e7cd8a0dc4b6b653&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

