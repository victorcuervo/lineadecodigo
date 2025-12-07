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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBXRU5BO%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T013031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDieeRiayM%2FgjtX1waS20B%2BSTZPPut2MB3ZtP32zw1EXAiB7V0Bt%2BdnFXRBnjt07dwOiypcbGYBpaYThbX%2BEdknd8SqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuTvYfuYzk33m3qwiKtwDFdUgDvWAx1x%2FN%2FuW%2F%2FPnFM7I5KBoRtVVwgBHCeNIPMhDHTjzBQy40UpuSw4mO1ZRRB1SZy0QPJuq8gdpI%2F5cfcLzO37JTUvcsAyfoogFhiNFgPmnz9XH7vBWDikuPjQ4TN9%2BrWyBaHwdMF0NI5O6XIJCaIvTNZergLI9oJMi47UEnSO3jCeY5nKOv5Vq0Gq2Nt3JyzEWP%2FNViFABbWzFll37uMUGR2CH4gExGXZFbTtxmIKx5n%2F%2BZGSReLh0EXRHOCpo%2BWvGjtDOYsybn7FZEEuvIS85Ea6KXE2cekzG24outo9RjwYarjLReuI%2Fa3pTyGU5Lha3OwPIWDPsSUaFsa1%2BifsEk59JGKE%2FASGr%2FcMxIVKbEsbCABtYyMO7cghq%2FVbSZoTMzNRYVORjawSOWAQqIxYcro9Y6zSSjpS24cWX6fTJK40BxpJfxyORzl1ZphQMUgffaEMyNpZHY3CHr%2FwtkaL3Sr2b5%2BxLaZD0RvbiXvUIRIzcK2Vh63%2B2QniX2sFcrXVUVtuOPtsgOH9fk8ZueLSz1MR%2F56IoHEx1%2B%2F%2BrWPqx5IYIbjNJuH%2F2t5HWyg8%2FzG40H9YWD16vgi4TpQO11J3dUO%2FuKHRu6AeJeqtYbRSuGQ3HLKQQhikw6P3SyQY6pgEA6VTfDrgXBPLwemW4XHYu0ZKFviArMS6b6ygWwIhBHrKl9NFJdYcZ4Vv2RiS%2FNRwgNQ3i%2B7cb23YjiNw%2FohSZYUtwMmJg8TZra5MxaUPSQ886Isr3piLb5XpOFoZi5rnc1BcHzsO8uS7MHQLhtKiuSbgnsT6RE0GilW7u6uxLUaS1EqmyjWDju6AkACcqHZogR7nFTNigTf2f0BNra%2Ff1zouPZP7x&X-Amz-Signature=7bbc6c1174f60107bf75910b06f4ad42fc6ec392f10759af1d9101a33f96fac5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

