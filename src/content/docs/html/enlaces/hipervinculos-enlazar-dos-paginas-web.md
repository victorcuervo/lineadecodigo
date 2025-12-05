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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDQLWFHU%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T195944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClnZ8i6UWmhL93uhycym7go2oyYjFmtsQ24rAhMdR4yAIga6%2BiTPEdmsSxcGgb028e0PSQnAuwtm%2BJBkIiqhryyAsq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDGXyDMevWlSmBxgQcCrcA6CPxPt7P9hOGilcquFL%2F0qZa8BBhrCR9g4YO6eJFk8T8%2FM4Spc2canyu4AiscSRezZPGUayiVJQC4Vc0hlukd45tsginur57q47enre054SvCCq2F%2BystN5CftVEbT1uBQ5Ma7gBsqi%2BEmCgq5haD0i1uG1aShLcfYqjx7HRPzviZ0YercXBPh1bI%2BzdZ%2FIVOGRLph4dc5BFyiI2a8sZF%2F2jlOVFP1JSlPflQrL%2BruHWReHgecwJHyTdu%2F12xMrxks7Vp6QiiIM0X389E3o7iqRY9xwn4X%2BAxrXQMKhG0nDtWT3XtDARFa%2Fmls7J3mlVLtFu1JKKHBjG7EXDKE%2FRPMEkfCroPO4QMzMTbWVdwtFR1f9W1AzOAuPGouvW7AYXYiz1cAMepYveY2IZ4a1HjGlZJOy9hWFCnPiZ1G6SeeAkPa2QG9DNGQuwSkmjkZOEVJ0APdvNjKyrLXA76oxunhzrWwXs4%2BeWc6h8ENwIJgAZ1puI6RVL1N7LbNaW7vuPd2Z%2FlMFGbAipcvTrJpfeC4knS8VbRIyeuuBwQilZnWPlR8hI%2B1RUymHW3dx9NCCC3eEeItm5NDFuE4%2B7LRXY5tftzicQ1bsGizVkSw0MmQEgy7pc0HhH6K4M26VMI7xy8kGOqUBg82sGUCGp28eanxyWuOSSx11XzINA6Vu%2FBWA4jGIuMnlqEBNan41Niln6TxxHwFuQe1Id8ADseRDpdD74vmqQXfQlkSaBnz7abFCyXyuTXNyXnCkz1%2BpiqEOABUDmSDmMJedzouJqKs3mxrwbuYaMw8jhb%2BPU2eRdPPqRqfifpkw9n%2FNGjdMFGGgT7PSiuHEtpkwyzUFA9ZfIbglfr3aGVehz28a&X-Amz-Signature=418d17a48dcc4d90f1d5bdb23a1bbc15f41fcc8c12f6ad7dc4100ca39c19888f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

