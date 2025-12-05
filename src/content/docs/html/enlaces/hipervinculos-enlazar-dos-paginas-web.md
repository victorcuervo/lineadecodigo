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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TH5QNVH7%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T185550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFok0itjY19Sqh0mEpKHhozbX2CUbVMxfjhURWHl4d1HAiA0I4j0emFJ6ZL0YGtSkvfchkvXeyIOME9mtvJhvGuU0Sr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMtwF3lRG8leZq%2BmNtKtwDOR7S8JvngdnrloUImbv%2B5Tc4iSScqh5No%2Boj4Jua6g8EKs2zODTQtVzP%2FvJ%2Fe9dVfPAcU%2Bv7CJVo3qWzhquTVW%2BJdZl1hhAyRaUOPum1WvgTELfT07QJN7e2W9v7%2Bg5mmsKSUaewHS8Um%2FCuvhbB5l5m3XA5i7qmbPAcK4jV8%2FsD712uk80V2MUHe63aLobR%2F%2FuudRi6bXoDrACPj4%2FNa90yRMAJwjXXpQSTVIcMhhM4GNfuFM8vHYpjHAIksqQy4J1ukQ80kF%2FIOOjhm0glIBCyUIVjhtL7iHXI0DLBFsJ7CeJdaMcRRNgR%2BehjwYC4nMIMoOR6A7XgVl0KM6Rg4b1PM57eVtXJz3SyYJvADec8V%2F6hYZ%2FDcHaeZO46mg3QWhlTBNXmTRKMLnvnFzDCpyi6vvRTKFdJjTxCB%2F%2FB%2Bui7c5nIajO%2Fxlq5Cv0N8cHgNVoKkj4KnLCDeqKpjHhMgj89K8LYcmNGo3Ov8Z7kup2z6ImM8ZsA3fhS2QlJTUDEOapYynEOr3dbBmQKQXelOnOqasN3q0GYL%2FZ6%2BPIiM3iyAYbZKCjnzF%2F%2BZtks3hkI4gR3ArDADCxdxPmbKLZ%2FcytFmgkqKWyDGElXGVBnAMPhQtCYKhfjMl6i%2FyYw2ObLyQY6pgHD5enHv5mFdTHVqgaDkjbLAdSlTszty9Pss94OggUA4uev6pDf%2ByaV2xFky2qAFJkekM8D2rQ1O1bRvbR6ibWd8e96xF1RPISouln0DRI2LpH2HH%2FzrgWBR4%2FI%2BSAZIkUIIsRb2Q7u7qtQu8jj7vLPQqhVTjhU4o7GoDA%2B71cdSv1JoYp8hJHEpOWJRARQhsKpH6cIapyZkj13Mke5vkh%2F6iKDSTo2&X-Amz-Signature=19212d10db12fd5308f04fd1b843c4f9f1c7c433ae6af24156519fc18b3b1868&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

