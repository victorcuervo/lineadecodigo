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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL4IJTB2%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T092155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2B%2FXSsn6zOVP3EbjiMtWiOP8MFZaBHzUEfsTugze3bpAiEAv82DTVa%2BKeElRd%2Fb%2BIYX9N7FBBb5NktiQvGiPpbGy6sqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDblnlVb8vdEPoxXPSrcAyQol6Ga%2FGR7jtHVVgUM1cpU%2BL3tfmgZNnIMHSbKZ3nO4Vw%2BT92KclcK3n45m4LsQk2GYtA%2FYhCiqkP0IJDrOpXcqIjJKexb3djgEAjHngfDnCGNul5Z%2B9lZuxw4fBYiboK66YhpNHrDrtolTMd02%2BsPW3GhuUBSAaxhEdoCab%2F5tTHNydAX%2BPIQP1u2VMvzR35aDAu75N0B5fKtVw2i5WkGkxPPATIXKe%2BbPUuvSv%2FX2rmhrZNhhNLqb0dmxfx2eAQyhB9qWuXqjlW6P%2Fb0MAruu8fkcgOns%2FinciUvoOD3i0LuAUdNCF%2Bffzu0cVU%2FAt2sTH7CYJ0zvB0E5u3kJHNBVnqXxhup%2FNNV6Dc4f2uUWo3OUzB6IEVK1YJVFWDmmAuMVw83jLQk%2FNFzzgOMlGHRGd%2BZXK5l3z4ngl7rM3CijsirwDSDgFlKPXqfS2YDMsBo%2B2%2BKDWwAMWt9xK9s5hcJO9erMM7A9PEK45R7wTzT28IBRT9okdZwpWk7JgPRhq5FmT6QBmEqCY8q2yZR48aBfeg9eMyn%2Fhkpf8f2cX%2Be5IRjUr1ybhN%2FyIrd35ByX3mBbQFA3B8bzK8yfPUVbuLAXbFKkIxh7SPHVCsHx7JIa1ocLbgN1qGCXXVGMKuj1MkGOqUBMkEPdNBDdIYQ1jwPVUZChJXeUZOMwXaWx3L2q7Q0ew7T%2FNCnedmytvVWUBJdo2wATAe5A2nydlHzX3AvdcRxZjA9kisAu0umtQkZoUv3k5zTMc%2BKlb6qbrhpJP4OpgdgrHPA7knq4OlY6uIHpDp3oRStHm7a4Eq4mJ%2BQ%2Fxsit2EcDMuq24EwJKfGahstwmHZv7WRk%2Bz0o25FIddku84EBHwrUqU%2F&X-Amz-Signature=982b569c9a83de9681dc5cfb020f58b72784a5d9cdd4f4fca54754b1b2659ab6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

