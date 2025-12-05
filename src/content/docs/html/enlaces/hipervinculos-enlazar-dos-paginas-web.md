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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WHQKZPY%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T150945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHnKSaQSJ5VHk%2Bgv9l1XbnWA8zOdDozChlSfTvB2OvdlAiEAqm514kE7uJjPjgFAVohkqNsVmTFmBB7Lu0EiXyzQkkEq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDFRSdyR%2Bq5vU4wlRMSrcA56y4eNv23csheMjFFb5lTHAcMZRy2cgHahis4c7KTm1hJmWPLWcD8SG1uLfqGO3GA6DlhFXLnd8FjXG3ZaT9MwpbzaydqNbiNhIrI9oT0lDAzdzXurmpm14qHZ9oyVhJbaZd2MY0xlzF%2BauAgO68mcRbCT0XkBj56hk%2FuIeSmD7VjeSgsVlB8ftp7r31PNK8O3nQ3vcgDC2YB1K6uepYd2gcufUdvr7jMDBWlPRsMdZYw%2BgOY5D4gWNZoSYVWlyVEXfJ6Ql49XG9gGvM4ICDI2D%2FnyfrXhl34mS27g71450X077A%2BJ%2Fepr8WF3nMWT4TfUXA9e6IsTzTZtbVXJcKPT4Rpm%2FsQ8AY39Hmc9WJv9CowmOKbae2%2BmYRmBIoCEtUHvJd%2FSh9a3Lk%2F7MUJnJNC2Hbnrphx%2BRW7O9cg5Qhg3xUKwXu9d9nGnLBq9lh%2BG3m%2FIig1M4nSfyiedCTgGzGJF7RuJCiXK%2FQlo0C37Sq9avEnUfCEuLrJ7dB%2FkRAj864VmkFK3D%2FsOuJFcvRqObdU%2BRER0HrMH6wD4En0gHCyJWf2g3FwWM4e2a1RkA5WIkh6kidOe3qRZ48Ro6fvgG64SskF5QmvlLivoeTCRd05dBq937I80qRjku9nndMNOyy8kGOqUBGgJyP1lkOtjtNzblAaDcMVYoZun21TXFJnRBa7NpKqRXJvIL5wmgzmi%2B7filAUTOZbJw4QwLAUGZH4lwxufuCRcC2FOhzAc8%2Bp8YDLx6Atr50uNOak1cFfwfdOtol1lj%2FotzJpq0jn9SNSAL2%2ByLocqDLxZs%2FW%2FNlDgWD4AxG%2FWpXKsAumY73ZkyYA2rx3c7fnPndHPkCIMXYEEoo8zlQYM0eX6a&X-Amz-Signature=98702df28e84233274aa99c248c3064014812de987923b168d91cc23f6e14858&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

