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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBPOVLL5%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T202329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFvWJg%2FLOkvcSmvd%2BaJaALhXvxIzQVrr%2Fa2dy%2BfgcQylAiBdkOgatL7kj6RBV0wfXjF4LBu6LeQhX6qBjhY4Ti63Air%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMyO166%2F4vWFXBgVb9KtwDm3rs4RzQd3CPRUQoNXa2js96ZgXBNSSADjDvIbqh0c3n%2BbvuvZkB31%2BJfVDNZRPPCKK%2Bohz7xREdZGQWGHJL12T55hPkNCEQhopIx4quF7MsbxNg6h%2FM3ndby26wup52mmaqv4kHGl31WKiI8dT89VtKnjtU4fTxDbd%2FQxlf%2FEonZd6TA20cg9ukPaCqi0%2FcqD5ywVjlck9eoGFKWMDd4yyWU5FC8y2mgIxF2SgKzwCnBkkk%2B%2B39YYl4DWpaO1tu5gPXrzSKwCvdfX6we9IPXZi4VJlNw2h4am6dXX%2FOAF%2BreV3%2BGpQZRSt8%2BBY%2FXym1JYhQLlpF5xLO3OGHaIsGU9Nw6Q1GLapwYMa0CgWKFqifCJeevbbDkXRwYF8tfGtGR0soN%2BNcOvOoxzRZuPuH%2FcczNJwDvqIYIGXVZjsOULX77xHiygLK0fUFc87uvDay7WUSiwaNApTm5ZH89CQM6ra0rm2aIjgcMXhKGKR9598maq%2FgQcYIuhjjeZ6scLv9kqix%2FfNYYvlKMbTrI%2FDba9C%2Bphvrq2UHTVkiGqBS%2BDtvAWUqzpdL79uIvznMHdZh1zEDpX0arS7RAgLR9wbArPsGv28KDQIJee9eHVamb%2BKvlBMBVcnbAp67MHcwjsbRyQY6pgE2RVH1IIjRi8oRzKJK57FLaZu%2Fvjr4s6VK73RZinPGnoqNVEKAb1zx0I3BfbRBXvPZVerSCSFkUW9WMInQ2LX51bU%2FwtLbf%2B1Uf%2BiEEuL5xaNm%2BVB6ZTpp92B9jgiC9z%2B304x7%2FqUHue2yWJvcvGVk4%2FSOeeAHiF5Lt8ECdjfS9VdjqNt2%2Filn7Xnm54BHz0PNrhjEyJpqVfee0uRC8VhVRMK126fr&X-Amz-Signature=a1f4ad1d12069c0e236cb511a9507069a88f68790ebfe4f7cbd9cf42b295e4b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

