---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQDXY33S%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T020155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCUOoEtNLkUpRRVszv6VRWnxWwDXRLLwimTxlH837lACQIhAIn1kq2DcBeo541rYwtI2oqDiMmSXli0lG4P%2FnILttPdKv8DCDsQABoMNjM3NDIzMTgzODA1Igw%2BMpYU%2BOWBEDDSKo8q3AOWzNlR22ujs6CsdSXCnIFPA9fvhjn2eerug8Yz3p%2FJcUZHyKv9BZfPfC4ccS7sC%2B%2Fl6GhhQs7LkJLHz%2FFirBag40lJ%2BHw2T6KduUdowmcR8384SB4je%2FONdjKQK1xo6HKLb7%2BGY2X5DGAjQlzKAIXr%2FeUvL6QpX0xRkQyd0o1P508hM9QlKnu6DSf6pha%2F1Vt%2F%2F9BPIPqSxmMieygyRCe%2BGQAuN53kB0%2BcOoQnjmN%2FPkzS%2BoLj4CnVmTdH6S92VMoYxlz40ZQpqOQ%2FWagdTLGg8veUYBjCloQSQhr%2F%2BvPhTFW%2FpfFLHtixpdJfUIx6gX1jhAhvpq9UZN6s7y2ecqu%2FY7hPZDGlCBsVFnwI24l4ZeXfwO9Pv0QVPxSr%2F3HEnlznoPuANDnAJ560LD8%2Bo1Qibv8x%2BQ%2FT73yG8cXOwwarB2owNEZVcxsQq8bAh5uAQFzatuapYrqkGNlsdQgErL32IYkd1W7cCvjaiSdtki4i3xlBoKlPa7x4dnf3g5JTBE91sGL7vomLYFsY7iGw0KktV2jMTtAXVAAKw5KoO%2BGjzsLxnkyAZNzBwN2rrNlhwdP5CX%2ByevzqVE%2FsyfVCvckC2mamqkHw3sbmbDGiJiB9gcUD1rzEHguYW%2Bg7ODD008PJBjqkAXIkjrYefz%2F4BnLCbsPJ6PH2npB8BNgIj7XF6%2B%2BRGz%2Bbc%2FVazrPaBBg7Qc7Zc8kMej%2BEEuZOYnhoRS2kUMJYg%2B%2FaEJcvDmFXgP7HNeaDyKsJW7kBltoAmutmOhLhu9K2r7nbZRJW0muT7jBTeHgwZYKp1q0YgztgukOc8RvIhUVOApORHDIJt%2Brr%2BIk%2B8Tg3%2FE%2BGQ9QGJ8uIvWW4rV%2FqEzxKODvi&X-Amz-Signature=0ed726e0b1e334b0e928d954a820f048b3d78001364a8dc5f78a676b588b4283&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

