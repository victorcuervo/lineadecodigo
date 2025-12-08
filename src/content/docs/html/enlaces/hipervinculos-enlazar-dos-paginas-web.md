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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664X3AHGKE%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T092027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmFpARvubHVwcD9uEeSEphuCri1LaLtVkEqBOmv6GMvAIhAMffnlttzciXPvTO29Fl999KSvFGD71qE%2FpSNA%2FW8unaKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxg55t2gsJkfxt%2BBq8q3APlX%2FPusX6fvGUiSwE%2F0bP7i6z1YWBuoRzD91d2uReVKhoxK4%2Bt2ibnxA6QBnjEEe197sINlZfEKmm%2BTLGO8KEguyKAO%2F6JmHlFA0FiG25Ya2FLj3kCF9JxvDye7P4%2BrRFm3uCf4ZEJ8kFNS%2B0W0qk9%2FT%2FO0DEjkykRkviwZladWSZayfragCHNu9F3ykWOGs06iRcmTqrs36LW9Bn0TlPG7D3AEX7Ry7HLVb%2F17FcRCDCX4wSKZnV0hMuQM3KgCgKQZpVc8ZsF2VBWqCxyA%2FT8uAlXhzIqy8NnQP%2BDivzvPlFG0uHA4%2FllTlqshs5schgSgaskz5HTpyf38LTnzA94dd99aJULtyp5dQuVrGcIkbm9fYoN%2F2U1%2FKcEKbz4cVAGHxhmy4hk0CaTWzTBfJUw0TA6OQVaHAUti2EF86VGZSvjcR6%2Fe1DNpNRiS9kIkWMvWG1PO7CMkmDXb2TJpXG0RRajbHsC14wHHoz0ueg330aw%2BtM%2FicIJBlVajULKFuGnFBpI%2F3FwcFW1VBhnf7xsPioKPPUeA%2BtUq%2Fcn91BEe4QjT28%2B8ZYNPEcRfbuuJgI0GIw9BUPY1AGToRlahWTgPctp%2BefU9RcE0oGReuVaoEE3WqGLt6n6zNz2fDCB7tnJBjqkAaeeXw0pxFAGzjvcKDvbKnXP1cHTkSh4NNvPiNvmwlDIyH3ZcnbivTU3gyuKJCwrWOATKvt%2FIbvAXoShr%2Fuv17Z2WXN6Ia1ALx15kyLXbwNQ%2FyepM0blMi%2BAxtbftEOB7QIDWhwb%2BhZ7MqTr1aRqG9uRjcVoaVpkiAfq4gas53egR9nb6DGVfgdKvY6K32JD0DRyE%2FjBvq6iOZ1u6IpEr6zABngQ&X-Amz-Signature=5f2e5e65b8dc3a7b606e8356629243d9b9aeed97f2e08316cca62a79461e6ff7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

