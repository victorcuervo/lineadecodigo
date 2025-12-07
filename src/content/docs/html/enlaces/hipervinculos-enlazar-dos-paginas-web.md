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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667P3KRS5E%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T191600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDzpW9XDG0LYt1Kk1GWu%2FAZs3z5X1NxXZUxU5uLt2lARAiBs5yYD5S8aPu6KpWGAyuf%2FWnS6n0huHQm1w9BrFwoquCqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSc5pnkde9%2BGbnZmVKtwDA79NcxScjXXhfmtvCoXNjQPkWbbAKLN6NT%2BUIESIf3bwbBz5H%2Bax%2BWJHAq%2FEQ5ujTO%2FEhXEu1oBtX1HUj4e0z3pckxWLYHI0jagMydDq%2BLzZpuKU8xGCEeeKUQUyLKR5yIDz%2BTx3efMgBzvySuiR0ZA3BzXlL%2BI0%2BE0kaoPcw3JRaC0O0nIuRAWWTSbVHq8Wtyp%2FlEbIkeZ74%2FSEXFdk65SGK%2B3O8SqHXX6GsSoBd7IRIw85jmx5ryS2NZ0UbtCAHn1SR3iR%2BpHA%2FtvVJAnX2zbz28yca7E%2FIv%2BZ3oD3SnKar8N3wHnPyu2ggerWHbNqmvHfSo6APy%2BTKGpz0n7VMmC1AMSDjQwob0avDSL60bwzSjetzWtz9vNz27Qqr2%2BAFv7m4nNEvSRIMrrKTY%2FWaXWTjfRNb2E7vHJovIEoBDNmf38JXjJX3lQ9vsiIsLpz8YikYQz%2FT0eInWvnpKDvQb5N9mNu1v9Wj0w5XWqQj8TGRSLJYAoWTTRlLAgB9UbmEt6zPyD5hGCuxUQ4%2B71NxsBqksaIN03BEYRAGiw%2BUI%2BRrQ%2FEOxL3y096JxzZ4iYwnBWUmKQIOsum3WoCVLHioJ04QfLkSH4WuwwrbBnd4xMVc1xu0yp9o%2FP%2Byqcwq7vWyQY6pgEuJD8dnvEBFcPwFitqGn9QxNhQ35oF96GpLMloBdrYsYhmOcvFqyzjL9HYTNy5orenhOqxQ7bQsqFrxUjRoEeHLYjiUscL7baiO%2FSwMzTqOGF%2FVKuPA8t2rfbQe4WK4tDfOewIgjnY2HJAgzhYCMANDivO1Kxxthq9DWWdU8tWnp0dTGpWatcwUf%2BW0gtt%2BvCIaS%2BPFffVGffH2MQqyJNRayqh9LCF&X-Amz-Signature=e693bf311c0f2004f3cee6ee546e1f9c005eb9dacb6b33fe1a965e212cb5b8c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

