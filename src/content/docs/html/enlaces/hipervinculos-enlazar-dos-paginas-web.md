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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677PBRQPZ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T203745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNXPfWPu9s6Ar7pEpYAQM%2BCRGrSmAcXzt2UyD90eCwhQIhAKT4%2B7dVfrZtdqv9Rf4ixKG2zKJDXePDLOYPak%2FJIUDyKv8DCHoQABoMNjM3NDIzMTgzODA1Igyl1a4Wg%2F6cWDMHo00q3ANEvn2CllmBNoG8vDKzWMd%2BNPVE52eh3cQhe7YE%2Fsa1G27paktz9yeQRNDWIZW825BklZMxmdR1ORZSF42pEPPlJJBnAPNLB5SeG8rVn2JXISdCIwECgbVBt07ZdKbuJpsiAisyqLXhmg%2FJwU4yCaLDTQcAYmuh0AbkpKNUphddTwdGJes18y7cGKLCV3Ool6L%2BTdJA8ydjYJ9qSjeIqC8Bd2cuh1pNuO%2BZmBE%2ByQfkbR372JiGeepLZLoBjOHb25PRMmch0%2BKi2FIXMGzpgub0crFvoJ0BdzglVqwnafWhrtNmY5QnuS0fJyy%2FJPUg12v1diBzzznBBUpfLsLJOhxHubAxL9WhGinCnwTxZVvvOBP3%2BMh7mUATtSv%2Bc%2FaPoWk0lPYYtPZF8INm7Fo3ylY7YSxmdS60i4Zxo8B%2BOqgXmLa%2BjlwLAEVgvdVeO%2BlXRl4hqUwZd5n8VKsH1cUwOMLfta7b%2B7aqzp0P2TQ3GU0nxpkEXzSjR%2FtLLvqze8GL%2B7jXJpSxQsYlb05OQlJU3cEKLZg1O%2FEkeWMtWKhGBU1TFNKRxMcTBkiVvRDr%2Bx5cgoiufUT8tD%2FOdpu%2BKqn0BrLiavve%2FvSgdo98ge%2FlpasjgKKIBIK72EmCVtZtZTC3y9HJBjqkAXOq%2BFSq9w%2FCAkmiy1GIcdBwYS6NLAvXGvywgIVxMwM8ULMFKMssmzbINvlXpIoG6tuG6KBuwaYfLdSVPoD%2BhGAglnracWqr4EkmaU3u1mg18r%2BTz8bDpiu0gJYCMRUuxSy6AjswL%2Ba%2BjakKtnogQUNEdM5MumVBVwd%2FO7qr%2BOAj0eVJVlZ3syO3Q%2F1f%2F6nmJNQgWBb9%2BTnRGQEWX%2BWgUkrCR5sL&X-Amz-Signature=a45a68bfadfa0f3293bbbdc907aa35016515d8892ec78114c6eb5d2258203f42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

