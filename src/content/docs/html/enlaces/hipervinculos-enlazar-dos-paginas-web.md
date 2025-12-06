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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWHY4VAN%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T024827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBZ5wxsXFFPBVC%2FBVg5bWaTn5NM38x8Moi1fzTIL%2BpZoAiACvDpFakkGY6j1ad8J3mDXJM7wDb%2B2dYnGRt%2F3SA1CEir%2FAwhrEAAaDDYzNzQyMzE4MzgwNSIMu69OTED3unshg%2FpRKtwDcbVNwVeW5DQgsUxzArz6DOouidQRrldga%2FHHi2tHvEK7YWsCrQLu0loywx8gLKVGvBRs9dyAmu70VNJkQOWNx67XbG48Tgtk8ypLJzYnpzrw1EfqpM%2BkTggvObP1XtT5Ih3OK7AqOhK0pW6u%2FNNJXaA0tFafXL0KTtiaodWhKIulNrAdbF8Qb%2FL2Bt2kYN7ni6JjC9gEq8ICBKfEIlE44pipYL1UPajkUDWwC1smW%2BTRpr3EUJF%2B%2BKxK4WLRrozslKENPXqUoueeozcx4gQP9tmPSYrGUQoDc09P49tE5bA11sJ%2BfdqbBe5vrbdl89CqNlPqZj8kg89%2Fo2WibHJyvDu9o8dCamES3Pg%2BuybQAb%2FI6nHYXSJZTv6LBeiLnQPXQ9A75UAify46X%2Fa9uiCzY1RJqIFw627VTkqOEaMLtMuQkHfWIWtx8RE%2BzvSSyyYeY42ZAM2cheWn%2BZfUzg5HyhKHzF45PX16eBby9IG1bYP9RBHz5%2B3URedIVFbs4gUXfiDB82h0IFlj8JQyGNfH13O5faA5gXsKJQinFdAcofzT05thqlo35GE28pgwPPE4cT9XX7yMm%2BMIqF%2BAfe%2BNjNWoWI8TAQLk3It4PkbccBgi54mAJ8dvwFPohvgwgqjOyQY6pgGP75Qci6r%2Bu%2B8CLM78%2B2t0AAlABZE454vSnIttlAkcG%2BpvFq9q%2F%2FmbqXsbPAie%2FiNkx%2Fh7h2%2Bx%2FSJY%2BWVd6kQ49caahItuzhrcRq6PFQK2FLGD1lJeGMgjy1u%2FOpRbE5ntIk1ktJj5HdGvCJJscetHks7XQsDxZUDFmYPRThem7N37vHNUIWZxQlYNCmUdW6msYm2yI9%2BadsuXgMJmYOpFNYjUJqEp&X-Amz-Signature=b2e9965d7bda320d8af21cfe45afbade9fd45fb16e662605ec723357dd502b45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

