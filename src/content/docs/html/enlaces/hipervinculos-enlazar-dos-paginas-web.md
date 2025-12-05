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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SI24SC2M%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T183503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCH1Xln2I4O2CG2bu1CCtOfwuHcf8TLeBFejzMTckjxQQCIBHZrDYz9o171hKR86%2BSg9DKaZ6J4MsAoRXHJg0%2Fx4O8Kv8DCGEQABoMNjM3NDIzMTgzODA1IgyR1tBcr2Sh%2BAjzt44q3APhba0U1o0FlnDwGBTJGF%2B6UKwdRpxc9r3OHSVE2PbTz0BHQWXgNdyD4QWHL0zudPe59zAohFM8rSr3iZkNRi00LoV8CSbMbCHTa52ROsuOJ%2FBH42O8Xmyf4U%2BDFXBH6obegrlZvo4p3ZEBSqDMk1QH5xfprcYiQ6fc8vhkZdkAnZasj3UfjuZ0z1DYlC6Rdoy9gHTdhghHY8AukVuqXSLobNNDHlV7KXzcnCEz5FPm%2FphgFQJkmMvsW%2BFKrBAl8BIvpEDzGcZlq1j%2F3i2Wws7fICOyN1t2p5nbgDKhrZRr80dkT4XPvixdFzjAwZTnWsBFzXm%2BnEuC09ZskiJepqWwd3YmXyhdQD4NUp7V3AQza0XLSQq9rTAz5gKTjl8%2BrZmdjYzNHcbjh9zxMNO%2FyRUUMiu3bhsuAYHuza8LpVqeLys9HqFRvclnwCf4ai9bxd64J4AGEXIVNncOC1DpeJGxEz7NWO7bJafbUjXyjF5ZZPoJlOh7th0kWFJD%2FxnXtVUag7%2FGuSULmjs7UZdgvse9rFUb1NY1Gg%2Fvw3Wyfd%2FnqtMXLRAPwlKilGVHrBYNcGO%2Bd4SsxxALbEW12e8WAqmlSptjQ3UgzRq0euhPpS9ug4h4DadNwSJEHuJvYDC888vJBjqnAdIMDTBmVuuuoI8n3GqHsoig%2Bl%2FeLa15jamf5raDRaPBNPBrZmucj6aWNk0w9JXi07TKP3asldTdkLhbF8vc%2B0p1owHmkVbJ6UMA1Pvi3pbssAabjDWV9xUWNEGBihLvJS8%2FfXmZSdXer1ZRZDA02%2FWDMcdhC%2BM11Yeu9He9OoXVR65Xml7ZUIRGrEJXVWmR1cExVqLK7dfICHYOSoTMqiz0asPFd8oV&X-Amz-Signature=0606e4c04eeb0f0eff775a81f96132907e5b9b4de03b12423634724418b4649b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

