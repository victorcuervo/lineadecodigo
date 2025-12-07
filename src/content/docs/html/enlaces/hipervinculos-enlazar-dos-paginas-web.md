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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPTWQA7I%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T022658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDd2uxp2KzkxKJ1SoCW84hhYo6N6u4wdlgAAXdD8YEjJAiEAmBhlw2k1CsN%2B1X%2FKspwi9hdoKNmBoD5Hz0Y8z9ve0xgqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBzWo60IvJakc6yxWSrcAz6B0IBeba7eAJY4we%2FrT1xuyDWp%2FbIfg1DMeOkrEoj5Pc9%2BTqK%2B7M16BetKxb%2FiJIpID5Oqov6NkZ1yP%2B1gbEYdUW98w53Q0PnNH%2F6KNvKj4zPh7bikVZ50LijQFWowpbSi7r%2B1nV6Ldm%2FdQbUFdPu6Dy6pPxuS%2BAPzaZ7iJSFez%2BtgZe6hWRZPWm6uFYzf%2BhT5X2JKGKAiCK4lhp2E%2FJFQcg6rRjJKz24TF1xFn3Ye6g963C5n8pGFjes%2FefEbI%2FSAaOoJMxVn60HtCvzyL9NbDCcu0iKGBLrKg6U9Qrw03ZJ2y8g7KqDOf%2FpGYe%2FSkNnSy0VvfG4w5k4OFrYR0pn4QS1JjOuEEJR4ewD%2Fm2IBaYeI14bVED5rUlCVjK7YJzqa2iFk37FTRSPmLaZMDHIyyjo4CD%2BZDAErmkU1T4EIlPYRFXyHCcqDv34eSRwh4%2FYupSoCoEdQKVgQzJZatE%2FROGpPa%2F%2BivUiPugYt8INwK6T3F5nIuTFPF292quEQvXbVlAsc5CHY1C2%2BqdDsXGxgYpBQjSASb4%2B4ON6b5InryFwZfgiLoP3g6ImLA1LDWtminkLaTt4N%2BUDkDmveZ%2Bikj0VS5px1ntavroMPqoWkok3ykmMoy%2Fdvn4O5MMb90skGOqUBMbQdXoXMARCu92li3f0icRLFlQq1RRc71NBucfKnqXVecLMMCZlgo5yffAb4uF0NZ8N62rrQ5eD8OpiWZqJCmCgvJjw%2BX5hMS3b1Suf3%2BXfYyjBjy1ZB%2BTZqNsTuCWerOBHf2t%2BedmWIH2kxIv%2F2KsnITsuEkQgrGwbIJGGDLfjnZ%2BWZJe0DDrxzgfrBDBqEKqnZCOrYeJp%2BUFiUVc35D9qIiI9l&X-Amz-Signature=b2f83d9dc0730c883e9f0fcd43d55d49692639ecf0561d498b1e1ec01e898334&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

