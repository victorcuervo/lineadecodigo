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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKWHHXPA%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T082529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLfPowsmLPzsCYp1ns7kzWiKNMc9aVgge1warUsc1yjgIhALIW3hBh4ElnvgcvGEalVrHtRT7iTXjwxtJNcybaDNtsKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxRmx6G%2BAvMFhVPZRAq3ANN%2F5%2F%2FIMwyTPQtpKH%2Ba4GpfWHq0e1GltfKMR%2F6iB3mPd77eeuqoDnbL5jGJNPwozK1kSPohk%2BKnfu79niXI3oqyL3%2BUwG%2Fdh5y8E9TAHM9ky24LaBWxNcsG7yfLMdUgmEKI%2F09Y97a2KFlMGhcIrccGTC9udoMK1k4tGlCTkNGMypfFnv778LBV%2F82RTjmQoz4sdsZx1CssKREJL3HfO79AUr1QfxBNLivnbifgfUXfIxT0%2B0wkTDeiSZRjm0qRJ%2FO8EZeTylBJ4NjBQsPZTI1l4Tmdtd2A41KulfrKAR8VDnmrG8DSUZ52Gp6cIrfWhjGa4tU1AopwFbzvF9s7U9TtvUgzNHI%2F5Z1stFD8Tx%2BVyNsNp7cuDuMsVn%2BOe73JmydQKmOQvwF3rd%2BfG%2B%2Fj0sjZx53Cj3%2F0UvaQ5vpMG0NJDBYStvjHSMoz3ZLHiqRHZypJiboN3Oo9vbZKFNpjWo5LJpR%2FrbLqNDBmzC4fALxPRgTl9zmhsZrUPUoKs688PMK92kDLwEqRZx92Gvma9NFteXJW7BlUnA4kvt8NQMerrbkxjrHrgrARdixOnZRiY8yBgtb%2FM4X%2FNYy6gOILuUs%2Bgwj15wpyLR9Jr5fw6FhB9lqIM3Vk2EuSSzOWjCwotTJBjqkAfn1%2BQbXb0YaEs%2BryG3Etj%2Fk%2F774KQy8nhfGG5uXGvHAe%2FG8u%2Bv05VNp6fAiWvGZ7n%2BzKfd%2F%2FcUnxdZnLRucjd5u6Ie7ZTm9Yv7nx8IsmTcGNneDsyGAWM9AsZ00X%2FVQhj7Mwl%2B8qCs3y73peWmqGFEoype%2BhcLQtFbbNiFfjv8Xq%2BbDPryYMwBsXzpb%2FgFssXSsd696Uugz%2FFxvnE9wNwiMOgOH&X-Amz-Signature=698d660c69016be9b5e2defc438bd8f041b1b3820d971b1edffabed469c33915&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

