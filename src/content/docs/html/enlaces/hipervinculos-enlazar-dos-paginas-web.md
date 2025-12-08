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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V24FTSNX%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T193713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCN4crGJ6TYI2aVwbwPxLAKCpIxlSPUVzVRhUAJRcGkmgIgI1tUlZh1V2kCmHbR1KdZMXyT0olTf6zxd1Nt12udTVwqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHmZ91yom2S3SURutyrcA1alXLU01PCYdP9QscQy9cJbtCw%2FBJpyhHiOllcQZ6kjvumMJf80teeqi1KASAFYWlrqyXWcN6E8sq%2FDL5b51xkYy%2BrZ5O%2F6t9Ghsloy2VSIBCGGomh%2BUFIQuvyamck4xMtVY8y%2BcdBxzeLn73lPJZJAosGlfMhxvru0OPUkWF1AZeQsuQhegGOjUlnEoEAnaTxW8u1cqPhl3vE2kM%2F1FN5qNRWApXxp9Jo431MiNNEWigIyDTdEA4AHf4jskmU30gp2tcw7CUidvtgaxJkYuqcBICJtELaQxS5jcIuSM9cCdX7Tszj4i8%2BBgWolh6GnhCpSEhrtlI8LX1fWVdlDqtQvFQAb3itDXwFGfhIvxYqSRr0wEi4%2F8nF1lu8DFGYSaLQLausNr2TVxZc0KU%2FAl6aA42GGG7waHnXLyQ6qDXPjFjmuxCnyNeHQnADqFvqhQP%2F8ymLRkLWUnHAuID6IgZZYRLvWA80QNLe6gK8%2B%2F7hXCMwTcYYtOb20XjQMS4lEB9bxn3yY2gZIMLdC%2FFiExEHjuHUAHJivoVxrwxJExDAhVeYNdmhBuoKMsm0wcgArvYqBCm9y%2Bocp5CAxoF49Y2E6C%2FnKUyLlKr%2F1Y6JJLi2Fu7AwMhX%2Fmtq6MQsUMJW03MkGOqUBwvwrXfyKW40DpvL20mwnchFOBpbKPrMywrqnKjyTgtcCpPKYTYmg%2FnlkDVj0mIL84BXRxTIAx7TtCOZANfg%2BKF%2FixfStM9fs3uQkYwc0b0bY7xsppDZ7wf036UCcTOUtbLjWwbrnOg8xBHbfmrJhOSPZGf11WNU93oJ47nVcXkGco5E463TeDk8ifucw%2BGtEw7%2BddmNIezxhmOpngPmI9VQS3zcM&X-Amz-Signature=f269c4dbc4f7b0944a9a3da8e2b9beac31862e035d04d68381e061e18cdc4098&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

