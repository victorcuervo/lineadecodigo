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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUN3WDEH%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T001721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQChLrQ3J%2B8dIE9Jyn%2FjGynaYBhyPw30bdLOmUSZvFmU3AIgUjdwqtjwOgBUZNHByy9lPyf3MZWfANe4N0oy%2FaVn9LEq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDOu8ryNxPyiR2B88FCrcA0iT5qzOp%2B63cmiSbaz2N0P2efUi%2FwpMyTSkn9lcnIoqNnlQDO4KrBadoQ2P%2FU4l3SOZf3cWoVFYd27oeBYB3a7D2i4koIZx4ArUfPFLKeZiW1oj1AY00XGtDmwVX08cTASqZ%2Bl7uYcJ00um0AuNBupZnllngfkc2sg0CCwU%2FKwsvVWsha3I0DRMVP9bRXFtyd96OaJyKqcIzxbzE9ngOOncSPvPxT6dmdr9HiKZmb%2BEMPKAC8rN4WIV%2BuObWohFx%2FKsEBPpRriux1Mj1pNawzHr8bAzgZ8jauQMxUaqrcZf0vt3daDgT8%2BRtIJ60xcoCOymmQvFRVCVFf4RK2v3Y5ANEeIqKbfgMS9jCHvKnElHhoalk0WET93r%2B6WbnvyZaYIEJQihN0WJNKETdQXosPvkDDK1y2EdVUSQK6LJxHN59sV5qSTVlAreFHAEW115AaV5iRImr1PIJoz7sHBEy%2BVGMyrGhylzA3srDpdBdZKhlU6%2Bd1FmbJzr4e%2Fczv1FPeboCSM0JXGvpBcNj1j1zjUQhqBh8qPPUkU7wYBB3wAQF9bk4bH4ZXzZkyVs3RsIUlSAu%2FO38YQ8o%2FNFh3RTy5k2CxNiyJP50YimjNdYCi9cH1FBbU%2BgLcVOLX4TMJyVw8kGOqUBTML%2BBc7U3Mb5QTsQsJ52qFGdCwD3aklzqBDNM1xI3e1ndfl%2FZtn61wwUdmObG%2Fwz%2Fpmrp0DZXfWizpg8JHGj9ERj1QWSx972UhiaOWMxVBS5xoS1vPb8u2chpeLOnbSM955tQVvy6XbqcYZWdBGLfmRHhKSK6QTmfJO8nLF4%2B7O3HQlS3ZMg867OVgDK8MjTTLmeorLFqg2%2FY%2F%2F1eqUWo3zdi%2FMC&X-Amz-Signature=b3ca1906f14aa8bb5c403e2c500af4dabab50765bf4712d6e5ff2a169cd1134c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

