---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2IJES4T%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T135352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIElBgWXVRSMyIZ5tI7oH8miEVyRsCGE3NYsPJZsmRb5FAiEA7OOe9TP9ut8M6MBHhKEd8Wl2Wfil0mY%2BjokqwgocZfgq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDEk81mQ%2B86HcJm3H1yrcAyHTNHHWWmJ9x40p6yOqr67oIe2iP8%2FNTsRhdhaXMvKuqLHz8oZDB4mcn9oda3EyZv81%2BPyFrtF4P67MRIPlyhCtdsqKoiGdil4lUE0p8g%2Bhr48DGDcIeXgVDL3iWv9bPRT6Z%2FZ3mxDlf5ESJSHOhV%2BjGalA96L4wVYQtl1IrlMvQegPzrZVGFXwplfQGYMPC%2FqygvOb%2BvI8L3GO9ncLxcs%2FgBf%2BG1%2FHlJvUHoF4VO4drvC4TsCY8r31foA0BUbUD0du36Av6shJBqhdch2YtvjbzwZ7keX7cOb9DOEVuGrfN%2B40VhZnluAoivJDUqWRN9M4ok%2B5qzXHjlT1Bp0p9RstfiVLiZ8XkM%2BHMXbiSVxtuJCvJWr4uGyDUc8MNSGvVAMU1e9OfNcdX8YxKpzoKk3EUS9J5126cyReFfLR686tNUnHxXF3yPwTLcBj3VXbb5b8beNP1rqKFw9UMM5U9uwmaXvNk2Yzug%2FlwwLCIOIq5VP5aVfnCFr9F1SjI7YC%2Fqod4a5rr6zcIHEv2Hv0uueHwTc5iDaCgT1kaelT7XRtqmzq%2BVpEGeqGhKgGNOxvNMDc2VY1z%2FT2xtpzRxChHCVx%2FbbUy5IQeEt75Sy4x1Tw21HON2j5an1S%2BcbgMJ2ixskGOqUBqXrmJcq1w79RUe8EzBhVfdMVrStmpqSMLpM7GvJm9cMBh5cyVBXNi2x4xNflNKv81q3iyDbJzWgaBMrXlaeFlBLPUKTTUdgP6u72uPpU7%2BlfeBFye8Sg9HCsUVSAzZHz2So8QBCrcEIPkvV37z8CQic3XEGjwOAJYjOYg4citwVcweEee2ZtLc9R8qZRPgslbqGyIuDwhBsmiTThpzYXib3ZDOBW&X-Amz-Signature=50a7415494c49bfd823695b54f85f9557f7b26e65dd98496e50238d612fe8362&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

