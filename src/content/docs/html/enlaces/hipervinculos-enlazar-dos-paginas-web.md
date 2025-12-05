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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXW3AJ6U%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T154917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCR4XIMfS8HiDAa5lOr6%2FLPvFCWBdjoL4zbflxrPYi47QIgYwVd%2BbbiOkRNgLtoM36FlowB%2BroXXEZbgN8%2B26hFDRQq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDJCuhN8gUH5FS2h%2BVircA9FGsmYX39ZHkob0Hbq0TwhZbhLV91wIpPlEbrkuptQ9Q74P7dfo%2BXlaEWcVL9gu0AQgeFgQKtha3eQkB8MoG8ig5oahRW7OPXWbvPWHOQELT6%2BIvkVn27FFtmQXq7gHBkUo4WesNnD4FprLTlVcNvVIbjl8VXY0oqPYJmycSg5I4tmBlb9s8DxUhoLnIBkRfIdzlKGlrM9V74xgpQy15vWA%2BAx9J8YR8ejblXy4ZeNPlRL6L95o96nLgihwKDxgtEw58UjT4L3FF4x4aDMpP98BhkJggolbmbule2%2BG8spiaK7%2BBtDxlPtAJOnOjBU0wqYY8P9CvH%2BpdluF2300Jh%2Bt3StK26H2lWEaWFw4eyUWraqmcB0GLsfyEWM4RI5vFzzcYU%2FsUAY%2Fh0tGRrDKepUz4oriIN0Xmze5J0zlEABEp2SuMK66Z0ICd%2F7pGOseCQoz8AKMWB7qXTz10ENnKD9fxIImdi0b9CB2NAlJjHC7hOvg97giHFKcLadjb%2FQescvtxFqX3oX0myCfSRsRgwx%2Bl2ZO%2BEnP2mVVA5mdXjhzSRcXKSc6M9AHTAldIdRkFDmud84U%2F%2BelzT83AHRyWIgyiMVP9247%2FBRcJ4AN%2Bzj0GEYU5GcyQ0YK3mIXMNfly8kGOqUBl%2BmO5DP8tKJdQEtcuY3lsd4H5L7JuyHtohe1hxTo4I6fJvyTC9Pur%2F0AER05LYGIlAfD%2F%2FMXqf8G4Gm%2BBxVHmti6%2B7UxDVvrilnk396nAiPgyXy3%2FYE8NUMX70qU2W3f15rh0cS4O0NePYUMbpAy8mKrNYMl9Z%2FeuKW7l4yQtD%2BtCh9jO%2BfGKg41LIAUghnDrSs165eHKooX%2Fsg88ssGIC1TXWdd&X-Amz-Signature=8c06cb225341b44c5d0610fb30dd5f96f3dda8b3b30d16ed313b43ba09fff2e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

