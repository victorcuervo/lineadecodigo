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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LGS3QDH%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T045211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGPW2IADmQdZSz3FSdYCLE6jfg4bY9WtPUbsS6GIXLigIgc6gldYu87iIMBFRcmFvKYUX8I5Ro23pO2q6MaZ3Okrkq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDPQ6velsIREfPo7NcyrcA6mKeQ0sB5kp5baJjAavr2izTTLlAK7GnS1nfwOeSQlnQAH1Wxmw8cayeMvdHsZfpoLMsdHjw9tSFrX1zdGTbNGwv8iQS%2BjqSSVQiPyz7n46uLn5EbO5y7UdaV3Bacv%2FSg9nWmQY%2FMuzAPNrC%2Bapt5pYH1sTlvoHk7tvjLjOEsWLgyXypY15QODiFdu18WImH4rgjHfLqqQ4d21hjkIFhfmoIfBPatP9o3BIq000US2zWZjylIsg6EhsAnZ6l0rbHlwUPJRH8dHkKEKDjXAt9IhAQAP1%2F9AIklaZFYPQdU21x7z6sTOnvyu9f1coEqYoV7Dzq4pRJsrirJQlJ478ivsXlAYMpxYd2dYG6JfI3wq14hysNvvM9aUX2WjcB%2BEBlyJY3LVr6Xss3arr85ym8w%2B4h3QBpf3sMbmf%2BTlt0Vbqr%2BXRoTi3AL66FAuXvEXah1K3VdnZc5QMVMRYuF0rKee3JXGgWi31M960uqNjcr68cWUEy4b5ejeXKwgOh5ugPz7uW%2Furho1%2Fjgh8QrX4jxpTOTV47BxvlRBmPZSLw4QIoV0AtxidnM0QTejbYmvylxBuAFifAXMRxSTcw%2BNzZdcx0uGN1Dp3r%2FSiwdHZ2G2%2B9r5O4iKAKRGvQmzdMLyryckGOqUBTCEcUrmR9USCEEmb4uIzzg9s29%2BWXgNKcInJ7hc3pTWZYzhx8kemvfsPTgtiwfiLGc%2BwcYzl%2FaB59dxncEV7dlOFWPqOTTThSBeYs2Ug9YGTgZGfLd7Qw4eYRVR8MuJ43EjREvIvpikRDb8rdhE9mJqJyZGYLn9%2BLISKF3eDycHqvFUjPZLVlACuVSRNn%2BQ4y5M1Lsa6ECuqai1Ia4psjSMLJg31&X-Amz-Signature=fddb92b6b17eb4733f337fed63fb4032f97d4496854245cf6163137a2c4a7356&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

