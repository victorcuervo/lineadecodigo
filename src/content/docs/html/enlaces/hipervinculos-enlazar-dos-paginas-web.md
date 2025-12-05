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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466356WM5IT%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T175504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBEUzyzd0wNrmsQFJgSrz9NSTmBf7%2Bh5gtA%2BSCH2CoLRAiEAomK5CSPwDi51uJR6V0TR53ZFk7dxlP4AeRL2TmLVcFkq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDLZ%2F9RznF5RcAwOvqyrcA3K%2B7fydlRWj7KySQiEYkqu3AlpTsdxeaD2cOPurfpi9HqWeV08LfXRBHQjn2PI%2FcX0P2sk%2BEFPXZfYYyMYxmo8%2F6yJW5mdNCFzLO0hXQRyNx00vAccRK0ujKcHnPbDdr2Y6DbgmnqpiFKt06NV0Yug1UHhoKug7%2FF0OprSVoztTngSNVEIv5VKWV5Sd5FqKOqnTt3wJRthh8LDNszBsjbNyixkeKvBbJvQ5bp37d77ZOh%2Beo7Qqp1G%2B2JjLqOhF0gEvhtWgimB0E2m%2FFTiEOwaf0DlEjkkEJFa5O0V5Rd2i2T9yjMJCOrZienI309zivyoWLQsZjmsde2vIKVUrGjGsE4ANi43zfKcVVyrqJKg2DXmEA9CdEK%2FgjKEZg8EFHEIncIEfrO0OESpoOv27QQJeBbVWBhvO6t44LrQLbESlY7EmxCwW6AtlKmUujGaatyMrSn%2FpHC70pDdQ9TIHqF8%2BD8AYwHGKkXrcJnNs1u6FmVBNrTh2B0oobs4XUIugdoWDr4nGVQnFiYG5z2S3wmynR8duSunElKPNiPBw8crEDCHMPAS%2Ft6v1HOvbyKxsye7ioDyHjitmIiR7eWECjTdjhee5p7E9GaLmA0Asb63VEVUxlP9A7a0Tu4vzMPn0y8kGOqUBOwmoQwXHABnsWTPRoZr5pOnNwpnrVax3zaTcatdBPxTZXfGjdD5kMLZmnU3R5nHih4lglREI7ty16qA44r9o9KYQhtjVJiQXJFIc4NI3iOs%2F66G7Uw7wNI%2FO0jlEXDr2KvFZ%2BE7NgWw0ZZ7zsS2KdHMDz2qHBF1TgGz7yXNjGLtK7fExzH8LDFoC7SddDN7ZNYtgRg%2BGQ7t3jq0iZjd3vDSJaPXH&X-Amz-Signature=887b0bca7c20c35ff72718fd326ed70dd99a8b3bf5d11747d6629ae9eb97d5f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

