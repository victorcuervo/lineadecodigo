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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636PHRO5L%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T155003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICmv1U5AX0GniRENymXe901UYSen%2Bdn7n3Rb7l7c77LQAiACYBC8TOvW3FiEQueDYIgeEMH%2Fhp57AcQzGsou43WicCr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMWWBBIXqDg0ucv4bLKtwDX5jWg%2FGoPMOUpKVSUcv8vatmGRMoxBhFei9LqfURDA%2FIPKDZr8aTNyWnlGEG8xQKfZYoZsRoidEMkLWBXbJ8OVpXixo0YNTouLpS4AbhR%2B8lX0woFTNPQBTqFbH2bQhTjKBILX%2FTCclg25Y2spOtfewIvqqo7s3mH72NozL5sEIqhOEWeqFqgv862f1GYV%2FVPCyGzn31ttGsMl1%2BqosExZ8MnyrGNkYLDFi1cHUBhkiOtZN0WTjwHofSM4mEgLFfueDcRRSRBjciI0bKYrVvV60QqsodffwOp2J1NYxF52S5eQoqPCW50XvqhvLGbYwkFuLzjTXKrDZfTzNG0gwS3gbXr0K0Qf0qAizQ66wno585aB8O3QOudosc0iBEFZbzgH5MIqhf8P5JoxtleeGdBwpYggL7WDABLYqdg3bgRh0Y72G2up8dRnSlw353tS7z1KRkft5KlAJjdYb4SEbeJIlNfkL5845L14BQlB6LLfLz22B8L6Qm7zFIEZrDFVxupUIz1USWXKBQ1T5DEPEqWQQD320uKTsbkSEIftBIcZyE14s79NMPDq5yd94%2FaIVqqm8QgkgPu%2BWJ8cyQ6KNSXBe5y7%2F8XC%2F8x9fARec8Rl3gr1RDAx%2Fkl7wR%2F5owjqfQyQY6pgFwe%2BMB3Gobxm9b03UQVIBhZ%2BfO6Pn8cR9vvsCOjcr7fC0Wykl1TtgWCS3yvPu1qDanlkw9duwv%2Fr%2Fz5yG0YWSfIVS95sCkMZWzoBtG8AG%2Ffb5zJWZterA2HJQXmTFCpAg92Jez1Yy2SFBk0oxqbT%2FcXfz5xJVzu3NYj%2BQzrSFKQA0NL3DCEv5bjOcbFmUE7gDlAPJraC%2BhA%2FDGTXA2PGIiNN1fHFn6&X-Amz-Signature=791a749f680f3b86dcac1c405b95647a9556dd886084291b8f4d9b90bec2276b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

