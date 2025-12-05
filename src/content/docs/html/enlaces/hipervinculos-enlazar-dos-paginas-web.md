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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NDY5VK2%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T190034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgOuP0X0i0Qv6frpCD3ERuUU%2BSUYfOhWRwROl4rg4kxAIhAIYrEeXNtuZ2%2FzfL4MWfvZ%2FPZt6zLFp9MBUI8ggzo8rFKv8DCGAQABoMNjM3NDIzMTgzODA1Igx2EbLZw%2FAmfV024e4q3AO2GzH%2B6t9y3aDaMjq8GNeO0WI3Zw%2BfdL6%2F3nBRDSxsp%2BD247HgfYVA0PgHIlPByVR08ar1JLbDbSg1dg7I1qDlKj5I146ygr%2Bk82qxWx9yMGdB7XsybxkMaf5M7%2FRtl8qSKO%2BR2Q9Bhi5dq2oGul40CoTrqGralRLcwhx%2Bf3F%2FIJ3MTxVZYsvHLqU8WnJ8XwadhoJiyK5Tdf0r4vFzeGMJkADKLgb17fqoOZLJLVkXwOy4RJixzAsKqQvyR8Ona2RSufdveexXS%2Bx8hnXUdBI2TyCqCdeZm29YHxbEwJnZAYCHDFOfr7u93271iJJ%2FQFh3yeiNJH28M4hZ%2BUzETOO%2BfYOcI%2Fhmn9fOen5D4%2FzrpClbDM2nRlS%2BPfM%2B1N8bPTzAnGWW7i1jwZfkLN6uFNfyvaXaJthNlIzluBZaShAInaPyR7vDwk1orzuMCT03ahid62pef%2Bz%2BA3U7m%2FzLsYPGZHU24a2n3joi%2B4S7%2Bws6hZbyUy7wumNxn4WQUrAloTAP%2FiqkDTrHxtvzDYqOlmw%2Blk%2BkRR8KnyAfcSzTiq14Ge5tKmYgLv6nWBgYUNPhGYfP1x3sj%2FHSqyDBD%2Fb9haQUibcUdgSD55zUSwP%2BsAUKBKzD%2BcRCFgpCjIQDXzC58MvJBjqkAdE5yY4BswIw630A8OaW0scrYcY6r57fAWwvXnilNP3CGvnzFKYG6VEElXGRxnpfef%2BcJ48aLVVnRLJv6nGcBCF2FVE16eYDgqLE5X8U4yS4Yk5zL0%2B%2BjsZuaw2aMksj6KiHycUWzU5RhqXW1vaq3WWty9jmZ9DOxNAaQ2PKuuBiLdTagtGP%2FBbHgnpgHz%2FaEb%2B8OnzE8bJIqJ6eijUzZFhPoSuz&X-Amz-Signature=9e697992ec13873bf3a7502239cc16846f416b7c9f0ba7f5d880fff191f4d205&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

