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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLVXOAFB%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T194436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDhBgCdjBGZb8mNj0keMvQeunn2nU2RI2O6cnxKBEo%2BYAiEA6EyApTHAQQuRHOR0OmeHoDLRemBgPQABxqLWgIXZLYcq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDBMbjgSb3dLB1igupSrcA7sUny4985bpKDoqeu3yKtjnZiBp8KXnvTHrcfw87xxlZ1W3phsXWZKEGsEb1pRtbfjy6m04OKl%2Bxi9M00uD0NsXc0%2BEnUFsiBVFVwjOOg7lJrWZEuHBV1N%2B6RlOQUV7pe0TW%2BYQo%2B3LXtYlkBwoQi%2FOAZBnRupEBa3dEy5C%2FWTp0JW%2BfJ2vvPhSiWLHJ0%2FuCP4%2FthU8MxrY18SdMQ1izSZ0EH7HD%2FYJhMrYp%2BpZ4LCbv1Ff885AAWRc8KtIUUJWoXD9Q%2BmGF122XEfuhFaMY988pTYIXbz1LFr5E%2Bs7jKLRmwyVus42jzinFgRHTyt8cIi1ZaPmSe1qOQ3oQT1%2B0vnCEYKyIp45ZYJtXtkSAD3m0%2Ff5tF7ftpq5%2BoIof6xBIvOnwJuAnsHZYann3odZ21Me%2Fb4UDrWAbPhdrSdiL1yatsh7syQMWOQkvt1p5WIzBCLh8MhSZkMSFoiEgPqlqbgjbZt%2FKph30zDy2jxAR7dKfAoM982xR0Q6GQ6qXrLhAWIaTYPtqralxCLcJR4RidamQ8qj1nF8je82ZDABsLMKlb4UUbM26soxCpMGGnBjwkvsW0VciA8BWuSspqdI1TFE2JuBLJzMuymREO3q8PT3sdSAeu%2B3OuSmiW%2F5MLzzy8kGOqUBUElhs4z4N7QKeGQpNaTSJ1xjxPzAjKPnUnhxih%2Bv91NvFvZSf0JdOnjO2ZnMzgVPqZL8ct3UlQyExM7pbsYDxtMvugK1KDzLG%2BO3GN5dQNMJIkRbO9%2BLIxVsE0eQvQDOjz66zSIJV8UExxoh5Mnz6brSqXJy2eYtCTxKSyKk24sti0JLCoswCwgcKT3Qk4xhLMIH3%2BEwppvg25E5KUzUirF8l0Ap&X-Amz-Signature=1ecd7468ba8e8b89414d655b1be734fe00dcc8af4f8da713035f4c33cf57fbb1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

