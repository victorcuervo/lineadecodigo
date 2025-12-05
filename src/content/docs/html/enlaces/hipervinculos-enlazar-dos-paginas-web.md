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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466234QGG4K%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T123554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvjOA5S9WcX4PxmYpdEVaNnQ5mYyx23nQhT%2FGMMk7qcgIhAKmplSv3NNfUobPPV%2F5PJGuTOwpmEUD%2BFaWsezJy2f3eKv8DCFsQABoMNjM3NDIzMTgzODA1IgwF5KeUkkjHSPeKFd8q3AM5ncRm9K5AqH%2Fw7cE1Zl%2F1oLlbvskYpgcdaLDH9SOuAvegOPPBWPdmH5IZthSq8GxBJjekq4qbsQ4Kaa8jsTzWIsU%2F%2BjyFOzfAzRHL2sy0Klo0s48EWFMpbnOY2UiOQGUGelqLXtNejtPvxtA3KlJUl3W9Edt4MRj0IJwl34DoAQplCY3bhU2ApSfEAtSIdO%2BZ9%2BqehDlcIrbGdKUiE9%2Fdz7qLXx%2FX%2FE%2BwUCkM6YkD6qrsB1Pyplzt8015Gh%2BpxW%2BdDRwZig1ne%2F2UmnoKinLSsyt5j6OpUXRoffNAWlmmURyVIvKFBaRtLMZU6Ss5kZSqc5uI4MPqZvxi1O9t1XOYREzofuCR5kgI1L6umrpp2FonmXJIP2pAhnTCQKa7M%2F1TTpQ5oqIVA3S3t6m9MUWLtfGNWHADR3ZSMD%2B7nd61CKBfMmjUUg2HpiP7gqdZ4xe6avcih4RKFzqeoPz0N6rZUBIbq5Z76GPQ28i6tfBC%2BlOwLApoAXZ0QX4H4VmjfwUGw1OzNdL8U%2Flswjhi3LdFZzEIxkT2Zmf6BRKbTcrAizM84%2FWMLSdiMZKVxUopKKWkfGRDdktmPrFkuItmhCTv%2FvzDOxveRg0RHJbghcqkRaovocfIMjtrsWsrFTDq0srJBjqkAXNl3X0PxRbzHlw%2F00cBlI0RcI06u5QiBIuNZQxkFCI12ziZoHJBQtwVzGubcNK172l0F4N5gkbgNm4eOZMjKbW1IDzXPgzGDAH%2BBDtBP73hYqUQE23qCTTFB7jAgd2T1eKK5o9vXXMjzf1crIX%2BsEglgR5C4LWSVRbNT1cldwJMTSYpA%2F8%2Bo7NeCd8hX8A58RuRAqUKCkAjWa4jugeLWvDnrrqy&X-Amz-Signature=53008bdc9c930ae2c443196a937bad6d393c645200223c098c5d5272c37caaf2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

