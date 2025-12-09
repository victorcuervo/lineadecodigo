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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPUKHJ5E%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T190534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUXI21efK27S1PAztEgq3FArmqLodaz9SWW9yEjzbyXwIhAIXLadw3R%2BcM223PYKkDkFpoLxr8AYpxoYgcJKJHNmf6KogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxULZKsnMSXUnhbXMUq3AMBtN1F7qEEHBlFqTiyj7%2BLRwayPrHJ9YuvG0RUh%2FrlKoqJpEof26%2Bv9i9Daq5nmabR7bCkkFnb6qFQJxy9P9te7fkiYXOFzZMuT2JZAhGGIe2YVd8pG0D%2F4%2FIE2pGotU0pNlUI7P3yP20i59zk8Up%2Fofbj1xlw2P44EXePp%2BIk1pkSx7ljS6kycTJG40IKCvtlavLBxgKsWxwDVVyGwkVzqcZHfmu9SJKc%2F8UJqfUAEpVDTOZ8fA%2Fgm0t%2Fr%2BKHYbxZ6oKL0lfFdVUe96%2FsCo%2FReCtaOzT0qlHgOzh6DWa1jP0hRtmp3HAXSfYVr%2BB27%2FTVZdHSCYuTL4NTBpQp9C%2FgduY0jk8L2zCWOsUE%2BQn02SAKsd%2Bx4ARW7cTmRhGYlGBHnFwKFhuYy1Njom2jszZidwnqPNX%2BMLvDmirJTs1ugJAfvHvEgxKRQAbexwqQm4WyeGVyUq7xOgjXK5nJOWweyG2zTnTJN9Cxt9Lu7UceK1gAlbHeot7vZLGo9CFPQCLIouQFZ473s3QsdGU1yWoeN7LCgsIEkOBLAFuy8lQEW1TR4gtectXLptRNBXnwLUKbRcfn6ISqorr5QedH0%2BkZ%2B3VJ0Dgr%2Fj9i86LA%2B25xfT9bdMwd8WKqBM%2BqpDC93uHJBjqkAaJ%2FpQlQxoPrm34a07e3uKLvVqVU4ZTogqP6%2BH4t36SZsmUgDp5pyLfRy4bft7Mlm3eWsEPlgH6BOahr5QkZVGdQ7WOhuIH9Y7uuQBZeeGVUCy2WDlE4DzbhfOzH5R2EIX7NlJeKkpV43QgTWvqftiRQs%2F77WoaG3mYqslHwCzH2nlkkDHVb9zdOlbgE4iykhFU%2FltEJ0AVLrrq6SWmBRZUILaV6&X-Amz-Signature=e8228542bbddb1465ac22f3dc20ec31367d403d6716cb9857058a9e9341581d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

