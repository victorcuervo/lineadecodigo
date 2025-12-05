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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622NQ3PTI%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T103520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtbp7Fip%2FooYdhg7t%2FvE%2F%2F5vckCwhOA6UbKpXLu6L%2FnAIgS3zNLFSiTHxxaon9i3rkJj4PW32VwUPV5bs%2B4A1%2BfuUq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDAC0MFQbzta0GCnEFSrcA%2F1bFxJ%2FIoadUp%2FEtXSZYe5zhJrUTVDMRSwuIKt9a%2F3GqWyJHTtISYfsYxBDZYB1IjM%2Bb6uOU%2FjSRcRAZi0UTAoCIWSftU%2Bc4EpEREcxmSWJSZb3nOIdLKnebUte%2B5EDsYgfW3UM1dBooC9UUUeX1U6%2BkbUWOR5ZsJU7XXjo8piAkUYRJ9OPHl34fpjXab5NeTY4PQ7KK2DT%2Fzj%2F5nc3KFZkryMkUnTTvF6j8yFh%2FMpEDH%2FpT50nWtKa2rsXMpsXaYHoPf5GmqYTgDK8%2BSTtRVTtAYln3U2FuU%2BX5Qt36LM%2FnCcyKiJGO%2By6VaqW90lU5KOzQLPR1dkoT4xuy2v3t2L2T79FGoRsXmG3rDcs%2BX68tYwFSyb9scHeDD%2B%2BvBmNCur8MoVzyqeUi23OGGD1AJJpz%2BUdNQRjU%2FiKcUoc5EZsksdO6h6yFNf1n0KKfDjFDT%2FvtKQzhio0VBXox23MWN%2FvG9f%2F1cvcRQ5rovyFPe48CQ7PrKYbfD%2FRJfoGoE8kS0dsa7bu0JXqxyv60cmtqVxnO4YizbmEfKzHrUgIik%2Bw4j43SwVm7xnX42D6pWK1d0cE%2ByDWMj3Jxn0wC3%2BR6qj%2FQ26NRe3xR2wJt4HR9SINGF4S88dnjS9oGE%2B0MJzNyskGOqUBNAKLC%2BgDI8bL1UFnSYlxvxuo%2FExZ5wLAvVzabPaDc%2FIyl0QwHKGhjsluic3l5ROS%2B5Q4DcuQA3eFA7gtIPtV2Wykc8t3Q%2Fajkai1b0Aop92fGey7QhwrJbtxNuNjngowLmsqN4oweXRTRwzkGofJ8Rii5gE%2Bf95kmWxGbKZJXdxP2C5cpCV3Hjyc2jboiewj92p1tU2YIDlMqRfG3ZAKjwJtp7c5&X-Amz-Signature=a4f3f9c2f290fef04230e07ddbb326de5cbc284b9ae791b4ce88e3940c359241&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

