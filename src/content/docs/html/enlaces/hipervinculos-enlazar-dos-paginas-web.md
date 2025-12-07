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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJAMHVO6%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T220124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FptnAiOnXZi%2FRw%2Bg5NPruZIl6Vl3Vchl0DJNaN8QSQQIgHaV%2BW0uJOKTdvoTOAfQHaEN293qcvlgGp4TbzzWhN%2BYqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJGlxR5kl8hT2krGBSrcAx0bAhHiogOwOIszGC6bmn9w4yvPkKoL%2FUL9aCIaQ2bpXA%2FViq9ASwdwkUnwlmBy8CfrGp%2F%2Fuf87d8oDitZP4gIpznwRiF3yx88jPrp447WsLdfJ1raH0QS0CC8zTCB1F8Yp4zdHyoKPk1CCau5tADO01L5Rqm4ba0wf%2BpwrBGE1FIxGD3vs4W7wb4i6g5tHNTMJoFtqupfel%2FMQ37IvwldMqw%2FJ7J4KlgfcYY2h1Y5nfa0XWwcEF6PR9rYABAA0vF0kpgSmkczFNbxKOM7tFiuZHz%2BSXG9xXnpyc6927ezIxS4nYPL9OI00eVLSsFQ8yeGUgG79cujAls3s%2FArdquDI6cp5ekhQUeqqN2qMUgmfrRoNqRhJg61m02r80vAPKwXlL5fMECfukO1Q8xpdn4hoQxDgM9JFihz6HdFw75n%2B89optXQbLhRmG2WrhOyHs2huGOCpmyOVM3Cgq7VMZRbkh%2BX5%2BqjB2h4fAF9QvGbc%2FozDVkclfMVcRND34487HWLO%2Bc7O15x8qZpOKoPOY0M699SmQo5XsrdDhbHODIenH6HfIFz%2BWReMj5qUiSHeLsX7lFYvyVtewOcruJJHDhA6dszbjJZl2AgFwBDAee1%2B2P6PH%2B8X1i8ghH8SMO3G18kGOqUB7wohYSewa3mmBp5dIW%2F3l4sWJw28L25w%2FheNi396KzQeUsIiIoxi0rjMPhKvYPnf%2FwNpTQtRybf5TAkrqgMkF813Js5IPqljcMosL2RPpBY28JFUqwYCnkRFd9SBHeIn9AAITHRrGTIc7IqsfudySKPjf23nyJq%2BHSEJhprvKh%2BXzCbvb%2BbNknwUK2Cw9qb070%2BcwcmEtreIUgjQSZIMsa37wxlT&X-Amz-Signature=7c6833bba5214e74e875de4464e23b18466bbaaa8f835624ccf700c6fe4a2825&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

