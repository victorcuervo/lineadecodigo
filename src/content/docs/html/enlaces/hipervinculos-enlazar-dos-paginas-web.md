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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZKN4FDE%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T050309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTidXcpEKzWSFd%2BVO2kMHb9u%2F4SMM7ZnwZks7h0yMxuQIhAOpKglrLxMYkw%2FsDOxc8IOOh6NmFu8oTzBNeWIqRhWG9KogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxMPCX%2FPjMuVhLwFpsq3ANn%2F05TNpVG2z7zeYFgPOdMx%2B8z0%2B0ykHVTxtPyLrhLnk7xj5DgJ4%2FPf%2FRLFYfu0n2qEjJ9UkU18u9G0Hj%2Bb7hv%2FUEbCiwxVWXzlGUkHK2kHHgFyKCT6J0gPEaEVxgRVTZAqhDMrFT3mNkqbBva58ntLKoRhYE0HfPevV9k%2BwlSpCSlUa0SS9bgXpHdUr9UTN0mbFQjRikg08suYDRIBjTWWzWWVxHWtNPjYb3TB9OlNFr8NlA5ye0uaUAqPiX22y9XVz35h9YmkEpf1oPesGHBIaWZCvuYe0Ar%2FrlETlrKvBztQql%2FNbI6Q3sq91TgDzDlld7is%2BpYB41CDPK7Cz0U08ZdH%2FiIdq8rZlY1B7ZMC18T0TEVHotpBL8otBUcT4vjUdHYQk3EWlirR5RuRbEQWmzI1svDBtxCU%2Fj1PEkgT%2B%2BRl77jqVREou84hqd%2F0ZH3loqF8B3RoQu0PVnlz8IcB7e%2F69IupQbt2qHN6tdTA2Ky9e2B9V32kmtiTEjy1wOs6SMuB51cxve6lBcTIpmjdluyjajyBKaTHfs5fiqJJJZSbqF7PW1q4Zhce%2F46FrTwXwl4IDr0isry5yxLnZ6UoKt5JmoU3E8YWZPsIyFDaALAOSxIrdefOK47ZzCCyt7JBjqkAcnT55UEgaW%2BqQNY5JISUvIzFe6abLgrvNregQjB4bcngTMrR2QAIJfUWal9UeZ4wz22Q0p4KmaS2u0chlowlg4bokTazRXVD%2FltqitjlQnQhAc3Nds151g3GTN4phOTbXAOhd4tWeRdanjn6U6MNuY3Cq305MXb5XZNwBq12GeQEluR78U%2FowAlblZ%2FeZ3CGlJcv0mlbLOyHMp2fPTZBaLioVbI&X-Amz-Signature=804ae51293d398ae42901c7ad55787e979d97b98d4ae78be0769d2f22fb0ed4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

