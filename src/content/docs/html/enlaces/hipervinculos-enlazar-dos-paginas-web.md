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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YUVWMHL%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T151005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHMVSVG%2B5AWWft5WlQe4rZv%2FMEBQ%2FQ5eZ%2Ba0kWYnuYb9AiEAyAFuvr6yck%2BbpHeia6e38nXh5aOEHVk%2F1zYHVUOL0lsq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDIbC7IktArOerOI6JCrcA4csJ6tOTskF1rMZArMNpMqw0LAEPYvHErEiVHL4jKzzZegeWW819hbCAE9Y9LXziZFtvGIqvHaMkJ1OJujJjPaL4H2t%2F3XJZYr9pEUDmhTkeWXWhNRF1t%2BPlwdN9ZMDsGVBLnzBssx9MrC5Fn%2FY9Qsu8qNeT2EoDaLkvjHA6NA2FIs%2BjK9NIEWjisXObDFNx89ZS9h5izf5i3iZ0h0xXh8nSZwnAN2f0%2F%2FHKIZoIloUSg2npXQoVzmMIqx%2BmJMD36RlrGNNVXTyliZ7NuFZ2o8bMPh98wnVgT6Lyv1YJ0N1XPmFQwRhsRuwhb8vy1SqG%2B0mEM0m0OuwIToGWMK3UVEECDxljPgItX9eVgHEuAdxtHW48EvbNvVVU9oSmlnsWys%2FieIM%2Bt83bLRBYi%2F4CorOdApjC9Ow2q4Nyj95IyTUveviAQv61Sm5CzJeTlsOiKQxBMku0TTwUwhuxJvestWeCFaCwv4hZ3cJhOA5wQDuiR9KlrPH0p6hESykaf%2Fpq84ZzXPI9rJKmty2wSXDwHungkGs1AGknd0jbBStLn6qp4AaIzGpbrjvAtC1TiRFdRLi9x6OKhbpYe8aCo1E6zOS3cRiF42kV0UeN1dStWJELyym6xIxjJRfvDfwMKWm0MkGOqUBnR6VLhKbk38%2FP1Laddi%2FQV%2BiIt2WTLyORvi7EkTtDO2D30Ip9s0xx5Tzz0I72UvtUO1vlkDEzvO%2FPTVckx8E2oRAd1cefu%2Bkz%2BHbaLaxxn8XeAtNw2AGlertU6S7GMqg5pdbaiEFkERxOSzX9mp9mrytsLkMufn5xEaN1gAymNiAcP3tDZblHc4Kh%2B8Xrz79BfrINd4iteoC9zOa%2FE%2BdeHU6MbLf&X-Amz-Signature=169f20506976f4662247840e9095e55a3e28fd67dbe4bcd0311b4b2ded4a885e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

