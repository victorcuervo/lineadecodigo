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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667J2KU5J5%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T162539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFmJ8%2FNBHrHNJqYL1%2FaxO4uLjsmZRlWFeS%2FqyPLJxb73AiEA1fErDFej5Horc8d%2FO7%2Fy5A6H2c6VzjP8jao01YTbyCgq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDCUyPXiCY61z16e9lCrcA9OViIDRi5olRKKTsnQ2T6JkC71gr%2BL6LIdnL5ysFSNydAkLU%2BmenZN0gXzW5uobxDjiiFTmhMqpArKEQn2WP4gewI57UiGpx66GX9bQ0TQ%2BYMJnlkKudvooSEbAxbNfn5Gxhxk0V%2BcAeOCXewBEU4Mvx8AtWmwUkjTE%2BmagikgC3YHBp0I9FgC6CS%2B4%2BMC6f0f8%2BZ1W8%2FWtoFVqpESAddSylnorM58cFKh%2BTABYvZ0FlGnOilSMMK6b5Kuwice0EURHeUqgJG5gHgqj70JVxATRZd%2BXoOr25E2Epgjq1m3xDys53CvX3nJ57ZODLaWGx8xmmpYD5T%2F%2BvE01ZABRZItYRnokumz34EdISgXxY9up%2BFeGFSo%2B1uKpUSe2xpNRemtq09v7PtmAUAObh63qmH5dbl0SN90cvAOcRwhavgN0PRFugfzDNQv1SePn907HDOdBKHX8VMpR6UM1LE63oRhIwe%2B06sKQWdHQK%2BTjJ3YJtjKeaotC9yYoxt7SY7UiPajSyVUYdm5UM5%2BQf3H5c6zv%2BtaO2lqvaZoLZEbxI7YbujGU5%2Fz2gfNecQvP0VDHbmdjoEdnamVmimyliK3dm1KBXPL%2BXzJYOLGhG9V9Yq4ZfdMkqdJiiYFVrXX5MLjny8kGOqUBW18Yh9%2FgBQwbKRshHtQZWDjZh8mCoXzG33JAc9j99djBt8lbR%2BFwuFHTTEEP%2BE2hW5RXuGuc2aTwThXB0HjwOcHoOIcVqjyXPfIJCGTskae4E%2BOvmB33ngBox%2FdhDG8Wphcxb29DJQnLW0A6uOakLu4k1THKefil%2FeUBKR5S2dpSK9ogaeHKoHCsMI3uulDBz972Mtq0d2%2FGJ5tV0fNYlUPaWjNB&X-Amz-Signature=c87652309f6ed3ae0f320ab0db4848e2880f17d4663c3dafc59017bb6636129f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

