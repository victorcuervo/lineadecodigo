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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQ2NBNFQ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T090846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHZOuP0GH%2Frc5E4WLAZZvD2kCmI5QnD8KVdhXaId86VOAiEA1YI1ozascnH%2FfcERk%2BYkwA5jRaqc2D%2F239POMC9YAe0qiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNjw0QqsUSMWHjkn0yrcAx8kUePHNVYxQHmSDevORzUKyMuHF3cMXVvLX6piuomy4RPCA6%2FGItbmM8ZXaGmXrjSCajx7M8f6%2FqkElJzHYYyjh9NTntEuC0jEilluz8ADVNmd8%2B43W0iSJKcAyFTwyySRNRVy7hBsAzRd8Tx49ucd3wQfr8qYT2LugdCE2j1z28B1bm8rJ%2BZHgQWxxuJfOK3TuxmgNqHyGm2LByNvQmhaJFOkf5a1EbevwNE%2F4%2FAdBq1OfnOPOtqojl38UP9nSr40q%2BHhz4JmZ3GGGko50rS0UsTWdw0djUnlEyYOQ5UTbFL5793mU%2FoV5Tnp8pbpncp6mEHuK5D3mGBzc1Ug6Qmi%2F3dibNJq6jXkyyVZBKrdxkeFDvq2uXQ4TwtwxKvmSRfiKYeY3r8gQ8kZZQJPuP2CvH46JVg3I3%2FVgbEGBsQSnmUzOG0DqpKjAmhYoomF1sL18XSklUT5hCou8URolCC099WBVLa3xzPCx9Vwd7lMf007ZwL3XKv%2FhaYVE2UDKRGOG8LBydqYQ51h5mqWU0xyNr1LVz7EbmzclVbQoEAJvMxfGuaS8PgZzFjovYntXORgd3NDj9O3RzNdN1tT4gJh5h3MSQEd6kHe1lzcsWLWPUo30Q2TkhlZ4ljXMN2b1MkGOqUBkiRYLNB1HAbFgaZPeh84kaVzkL5MxWmrPf%2BBdon9vSTj57WJUTuPJPe6LfF2bYf0l3yUqtO8uYaTujxwstY9QRLLw9CMDpxLlbkNYX6fofMCQfJ%2FAeyvG7ccKQVM6FGCitUDTrGmLUg70jfLeiCjNG1qkJzgiPvY5TATzlKBczoSp9nrvX4orCmNPCyWhAsEApoxNDdosCUr53LYtVSnDqWRtrrG&X-Amz-Signature=b2d38576f3b8c07d1777ca53aabf4933714fb03b6d33e8aa9b92770deebf6a5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

