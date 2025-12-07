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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJNT4M23%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T111532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDRjjnWeP1GFiAOmGXcIOVjxSo1w5H%2BfmpA1ShowM940AiBHVlFElYN0OymJkDkJWwnb4C7wFZHROeSpxKUEiY6VKSqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtrbGzv0Mr71fCTZIKtwDHe7rlqUvryLy7RIlTD1KX257ge7FSHOQoLwH0juLXqIIFt8glTq529WX3OPGY%2FZd1ZTYAWNDKKxaIxXcgk4U2M2F0rizoqPoOOo9etzsQiJt4z46%2FFkx3CsdGH6rhqeHcNgsyammkW%2BU8Jo3pGjxsmPkFYCUj5ucGF1AUm%2F2aVCn2lX%2FNo7Z8STZYmKs%2Fz01L5Q1TEk9eJzxZg2bULxDGBrdUy3oKcO%2B2sVrIL44Fz8WBpVUqsWiSSxr%2FjaWYhlH6Y2DqNPJ5e0HqRSR8nJG%2BonnHQ4BJevQPSgG%2FsXgAtfej1gUI2TLWD6nX4qVduHKLHqFxx4m01Fp8mFBYJib3b2CgDlzxJi07P2NheSt29w%2Br53%2FOU2f1%2BU7l8sJiypP88ErIX8IAVTn1q5UL4kFGCfcN%2BVyKPRawfK%2BOIOVwjmMFCLlbx5fHzNb392%2FRLPWyDUuY4cQi6H3WmltZkJnEhs5L5haQgPfgiIoBLBB8GUnTAcLwhBHIKAuwOtrE25oPUZ88k3fZJgcbVcsCefky1NfE7YcArItuRVKGi%2FI85O9SvHkmhNSqEBfl%2F0Ku5ZF6iuySEHsAWc09B9thfJy1AAGt%2FmARm%2BQUV75CVuCmALRJxr3z88GW2lh8y8wv5nVyQY6pgGPpM2LpA1qROA95gebCwTYJQCg%2FIQHigpg2OhL4iQiaSdGlQnaiMWhgHcOrPCbPuwLmi%2FzRa8049Pe5umAGPMNWT8Y41SPVb8Vn%2BPja6HlkwjlZORRMe8W70VZUQJ7ZvS%2Bu6N5OSTZ0R%2FqcUHogi%2Brnju0F2TR8Ol7Gei5mIfzDf6jqtHlfLNEm66RVU25i9wiCQMONUcGrvUdK9390qr63YTuWKU1&X-Amz-Signature=cf43025438565d3fd5b3b9d39c32ef3a5020e256dc2f03930cd3cbbcf8387d0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

