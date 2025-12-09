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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2EIWSI2%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T230624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFj1xKSxxM7fXMyFKHcy62rrgckFvqACgTSbWf3TjWPTAiEA5NEJYMOZkfPQpdUahdhjPlpBTeg%2BcwiUv1XljGqBvsAqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBoi29M5nKw9uWMGHircA7Jo0rKGjhR7M9f1GgtRh49KhJ7uryIPwjD%2F6FtcOYk7nROTIh4dgwyW65evSId792QHa5pE48EWJCjl3rXUie4cffNvO99p%2BpzPke2BwGTaDTnRXHVuXP%2BHaDxitjLa7z2UH0qb3qPOQxA0du9hn9fD5cfJBbqHD9mgu4Ew5oE1J10pmNFHN9t2eATluekxrJDPNBTZFcja4cfIlUx9pLpxl1qx5%2BoFsv4bogRfpE5Yow%2FHpBz8Jk5Wy4dVtSFhCEgLhwRvqkEN4dT2QHIejruMxiiyUryhhuFR1Dcy2Vvp7gBpgZa%2B7MUi%2FXRMDBrep%2FhNhgfXvDfJyAAy099FzZGdBCg0JTl164Hfp8ar6%2FMelpl0yr%2BdTol8clWsfVGnawtVkvrjz1W8CAx%2BlSTJ2hoMNJAizBrRyHewDGcnFgvpOtj6zysvjWCBPtBs1zLOVmjSfUqngQYzs0g2yY3mf3lkbazh7vxHDJ5gaif8oDI3Iou3J4ZhmbH7%2Bx6iyRq4qVOqiXwYLj7AFPpIdi9GOlOqkGIUjRrYYO0LflfzxzhMYEL9ZwvjE7ncTyTjnCsy%2BK4a8Mzaa3wEGNwI95kPfqFHIwxCtvsLUWhusvXbO0VtRIf90N6taRza3ZF3MLnD4skGOqUBbdgTdUUOCslWLHzfiHTYfq%2B1MpwcoFma4ja8Wx6fQ2Oy4OSf6CRu2KgH04horburd02b6TifdkzcC7W%2FM6kaf7pFquvZItpEpO4TlHEm%2BkOEuWaHQwp08Uo9yHTVoUUyBh%2BR21FxbY7JdEZdYafeND7ju4HB4BAXVuEm8qeLcHKc0SGShPu6oHedhDVfKZUVz5KiZ3%2Bu7ObP1tHcgetVNZnQJ6c%2B&X-Amz-Signature=3d5abfc8bdfcbfa70402d9e76438380eb233b11b17d17c276138618c1955d8cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

