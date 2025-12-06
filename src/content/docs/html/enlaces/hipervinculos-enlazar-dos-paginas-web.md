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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3YLQVTZ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T085040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDJxr7f4D4bI7RdvfAvxukwXrjFa9ddUj9SjOujod4PXAiAsvjYS8mKwIJ6bsShpqZ1OaJEMbTBfrrAI0V15Sw0Mnir%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMyg8rL6mbzDR%2FqjxiKtwDItHhl%2F85tQf%2Fzu%2ByHevPKy9ZPDXy6g425dIcwmwru1Wc2ne5Gz1u8kZ6yC9ZPI5ZgvRDoX69GmLULwhybkk2GwwWCNQF75YJsj9hf8JZEh7E7h%2Fv%2B4cuvGoGl%2F2Ps%2BdEAYQPja3mI2pkqsTUR0zjcVDMYN2mFtEfNVQJaD8m1FXIDyp1mBUVUcjLqUn6dlAfmwGLIJjYrpuTy433nfBWQUaGYtP11JUZmEI%2F55IaOYNe6GVtB%2BRjL7T0pz4dWvoVnUPwqisr3kb5fvZtntSiSId4UN55OggCTQ%2F80Oj3H19NirvfjSTo92hF1IO4Syo6nVfdBde03aoYXpBsIBMVZWE1xbeQe3nnGE%2Bm8hIBfWQEdVyL41YbJ9%2BnPSDsKFA4X%2FK%2Byy4ULqLmB5TZt1UABWNRXWUotm5jf4eYZ1dImXJkKhqp2ayeqfZ9GU33dOr%2Fmskbr9HAj3RZMI62zdLVivpLd3IY8Hl%2FP5Jx7nDw0GSo2X5coGWNTyg%2BlUzil5HkVODhY1IjHsFq%2Fo46Juax%2BEclImf2ywNFkseCprNSRni0skDKtEhzX2dsteybrdBa344buWPVX43vpsyLFQympRFWZ44AcKQYMGi14R2%2FGjtr%2BbPVGiy2ypMBPzwwjLzPyQY6pgF31QpYNPhRNkskRGdTHixvvs5qRcYyBtl4wulX1A%2Fqj4LWlEpp%2Bk4kjDm5Xj2%2F2pMCo072qy9q7swy5LZ%2Flv2F1KCjNSycdxiW7XBJxvlac2C3VZcXywZXLjP%2FAvjzNp69Vz9cVBOyT44%2BmOC2LwwY32uK2u7%2BIQ9U%2FjEZ8YxiZFz69N6sSKbYpD8ae24T4YYDgmekksu9M6TFMBCPLCygCjd6cBSV&X-Amz-Signature=c94dd035d9dd8ca54aac3afbd7cc2d351f1589339cf26cb9ec7dbd6bdeadeb69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

