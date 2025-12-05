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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMMJ5XYC%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T025948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0DNIeqDxNAZrNbxbTf7M4juzd4au2ea3sOiu8fCVqhAIgL01RfzgZ%2BE2MRAKNfNwl06ffmVJ4icdqDVZsOJoCkosq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDEx%2FI5iQuMrpDqFPjyrcAyJCoPenGd8QNo9RYzPQYg3O8rCv9VOsmy5boJ8G7C2YRIMRQTIl7Adw%2FKOgpDuACzJJXQysDrbRfAhjbspJ6al3mt1FgmV5B4GOee7dwv0%2FAh%2FZCpHs9Wfyfvd1ovy8gXagEAUfuVuf7JsaZTNXZ%2BhIcf%2BhcOYPeWI8oK6owz7QuPLe8xnm2mfo8fb2ot4rFQ%2FJrqfJ2DCBhWrpChGZ6hlcnfxRitgJRNu2eE81cMsjfJ4rFEMnrzhWhEPC3FhiOByUU3dEH9rki5HsF%2FTGPlz84wQ8qO6Udj%2FGbLxtQOiZKdnTG3%2FI9nL5DzHhm5x1Wwnm%2Bh8gfQRjdcfr1yhAicmLX9VusroZaxgjr5WXCQ3a3Zf9MQ3CnYzxyiCcyFdRkgadydRzP4J1huC6qDYqIB6pi9wXz7xaS6ULND0GRLbEUKjg0d1dIfY7qlCYXdCT0OkcSyZdZ%2B0E8%2FmQ9IZOK8ZlPIgtb8DN7935X%2Fdey28vycJoo590sFsEonNIP2cc4Tvj2qJpeTn7r9%2BB9A9AJpAE9fWLpFGaXwC%2BdOLZ6PadhUBG0iZBIqXDlDJ%2FHMq%2B4ue%2BAY2yXX%2B7x1v7tk4vqGIkruKdlIjOjzzEnmc5BFX31aoQBu0VMCbMgAsfMLKMyMkGOqUB53EPeML2Ji6zSNTcCGzG1JXC6%2Ffew3SzFWOrOO92W9Gnh8otUDRWw5LhE8N3bO6M29jBDmNBh3MKlJyzJvEBTSvGzNllo8MQ6DTB3PpASucT20Gf%2BVHWoWf4M3KfWkQcFDPyFXkLsjWQkxetnqdkS%2B2YcN%2F%2FGrWkTwrNt2ctcudo%2FNLavULer5f7M1Zs3olkwMmf2dHCbNAviVPgmUEYelM6Tw%2BE&X-Amz-Signature=da20a0aecb4a2ccb4e666ea82f7a3547afeaca2b055df8eb74b40dcd26246ab0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

