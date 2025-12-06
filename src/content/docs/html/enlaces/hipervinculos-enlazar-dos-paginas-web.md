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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMFLK5AY%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T070546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBG%2BqgnqMpKrHV%2FRUVsCc2Edn%2B0JBlImfSDGRzcyiRllAiB5Y8rXzq1HaWcQVzlbGq%2FxyVSWfjKGn23w6IvFPoMNnyr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMnB2GWgi51I%2BVJGnAKtwD%2BW2AAkVcuVfkzDVdMhxZr1QnL0BXe3oOrecIL9tNmArE%2Fil4XLQMR%2B0y9Y9kS%2Fi4Wxrg5W5m5ZcVMtyoZv%2BaVz5SV%2FWQ78EG3xg4fzuRypXTP3nIaOlSaOawWdTA2EIixeQcWLyr3xYp4Nqj3%2Ft5j%2F%2FD9EC3eU7auSeD7Bb5i0%2B2yLMBFcuefihgrDi2hJCTrvR4A2VV%2Bmj35A0SvBW36P%2Fmp9gQ9vlGlgPa7hM713nV248WR08oqT12JUyIIZeVnjFFArS3HqRT%2Bil8m5tVemy6ufGSx02vWwiXY0wpadv%2FxMsrX6VWASDR1pFHjefXlcuppSabGd%2BzMWmDU5VZNREsZ62MSyKbNvsc3hNB%2BBZApCw%2Fq6aTVwLqHrCp5dbTTZV9bpE9M9k5P7LVwVb8WENApFmtOd%2BKzRbsUlqddca%2FrKP%2B0FVS8LAGkNFe2svhN546h6MpK0M8NzCOJC5viv1SHQEGulWIugpNeU8RMsQDwgC%2FzWmRF9Ak0iKp%2BIG3i8rux%2F6jXaoQmrZQVXM4mQiYL27vwQWz6huABHPzIGMLF50BSafBe2o4leDy6PY%2FB%2B0exu0ECxjY1f3QmWUMm2lB0D6EEMUMRu6rrzo3ZiKqEy1xhltkkVaadtEw%2Fp7PyQY6pgGibOsi11Jz4zFkHSvJKF0BFkTUogJbsyBA6WQ1qTs9mhdcLUcCA%2FGk%2B03hny7Spa0q0zhM4ddBPi%2Bk1c%2BVkHCYYGoX2RILoOEXWhz6AieRH6eX%2FUlxU8GVSB8y2piP9fZGlQbhb6OH5xgIMN%2BDXuUaKRylLsemFrFXEO0H7ubaZXLnEr%2F9BVkj%2BqLcrLpG0Bg7azAboVNFCP6g2%2FrrQi0F%2FAfeV3tw&X-Amz-Signature=35d702d5cfec57fdb42af5935ffd9ac0309ff04833600f34fe028895ec6b4cd2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

