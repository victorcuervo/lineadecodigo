---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2025-12-09
slug: html/hipervinculos-enlazar-dos-paginas-web
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y25EZK2V%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T224820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFP5WanXXgyGOTZTUQc%2B7KLS%2Fc2yIYjdv3CnVejjdduRAiEA3Kyc%2FKtgOg%2FZCot1PFmORMi82NtNGjLTABowwOFfuVcqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPiOv8%2FZ22XLJw50fyrcA44SdcdK5qqT8u6vb1sCYEiWTppAoDSRX8qcwaXxEBU8Wq8Qu5BhP7Gux5c35%2BjjLVDA7hbQYnQ9mTWewxB2Ykijr%2FQqRrLI5uJSYZZOwsCXhFhc6PGb1SKKaa7%2BiiMqPBmvuibC7w4vVCGGgLtYMnMVFWQku25DfU98LrGio7m1Fc4Gmezw4W3Ny8uioLx9fpAtcCGphLQZkDPpF3h76OCQrFsxOi7OOBmJyV8nS3m%2FFL33oeQNpbRQqNGV3oDV3zK3wMKYw2%2BozSR8FXPYDVsZZJsW8tv4wBt9RVgTkvc8KAAYGx6rZIQfIPXvh0RV1iEgoLdQy4HeBRrXdGTPJS2dvy38soAcPzlasRRKGaSTihsCFfMNrs4yTJXW%2FKEHHQIzWHLdvsrLOj3%2FGS3MrogUnuUQgcj2Y0xBZ476auCII0ztgDwJ0ewRi%2Be0uetuZZWG%2FObOZrMjssIcLQtUFrP6whO2PGbNL1%2BqRintzuKdqH0LXsl6OjNI8fYL9R3KGLvr52puxEJAB1Mj8D34o9fELcklwZ4QxIDk6aEu4rZQXR3WGw6IzvAPv2kEFoL2Tez4i15IrKBERmrO5BYkTU%2FpZp4HX8xf7E2bFjJ%2BiRvAHL0HliBUKYfBJwvvMNDI4skGOqUBNk3gy0mz1FnKswonxK5O81ObUKtBqAhqyrIO6zYqvQMIOe7ZPQUrYoJYNj%2BLqAvHQJZBmm31bgYdjvNXHeScH0BYtlr5OqPgZMEfXmy5sghhlEq5lqgbYw2DDIkSwgDNRR9pXJp8hEk5gkpmC6q3H7tGyihlA4QTuIJkArZGB4rH5QJ7eMaNP6PqygkNkjXA2lOXKHrIhVIRtACdAKKO%2FbM%2FHyJU&X-Amz-Signature=b56862c5b5360dd770b856284b95a7312be4306171522dca5819623333381ea5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

