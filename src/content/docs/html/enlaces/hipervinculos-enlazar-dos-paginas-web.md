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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFNBJQ3Q%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T112639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBqczu1dArdHUGdzDZ2hBQcCJqeX23UVM45RPojp%2Fb9wAiEApTBlMHlXz5aQKxeT9mZAPsxlL4XTdQVp1tWxK8UX0%2FMq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDDhQ%2B6hQlPizoSuaRSrcA6PCya05TVSvbbqVGkMTozn7boS8hbNPZYEn3lZPbW9QbdBgDbuv9NIuT%2Bomx6aNQJqHlbNGu2Zii1%2BxrCSCEZTSzJByDWV6SOjngfBEFhdYaXgbmWAN8i2O0BfEjaFwdNjGiOxb0%2BJJ%2FrcMReY00DvK1yQ8NLgrPI%2B7sCWpBX3Z0F7mYVECFIjdO1X%2BunfiSsGBc95zHQ06CaMitTpe2u9yMDo46%2B3UqcDc10n4n3mJWpkXt6L3GXeQGtG%2F9aMp%2FLrWQi%2FnnZeQUS2khyFEXnzBvYb%2BUiYYFkogpc9vC%2BdOCA%2Bxk7YpkutiK0PePgjYX3bepjp%2BK7E%2Bg8qenKUIfEVYBlQxCrtYB0xGkFYNZGCztjJ8uoaRlHjC1ywvfrivnUZ8r9ayxPBIDQ10Ba0sQg4QnQMCO48LqQ86mP8XzysS2uNz8hX6NyA4C8v1nfethV8vYxKdBwpHE1f2H3sGHkuZASQiZ3hKzWdj1ZRKvz%2BuOcyED5iDETWMxZ5mXLVhrjL8eFRIfp4mQZu542G75XUpQ0mmc6dpvG39hRHqb2BXNlo3gUaxDQ0o%2FhlDcj0LIH4BQdBjf0PakyULSNs%2F4OeuV%2FUOGJ09Hc1emoAHc%2FOqz%2BMJNMtGWXYPyO10MJ2K0MkGOqUBKI8Lcwcx3dbA0lE8t25BcA5fuWWm3bjeKPpDWRTc3G89kP%2BCaHEEk9KBcvmcUm8S1BQEA8YbDvvV5p4LYWfLtWF3o%2F8TReaJd3lECLPuH1vFUU06JO2k3o4emW0eGAi%2Fc%2FTMJmMvIEWD79LUCibllI9sj44ejNIpLethxClkw%2FKiYiythzU0OcZQX95Lns5q%2ByhmuiPWr5jhdFnZAEw927l7KukB&X-Amz-Signature=927d39c210020ab35174de32c2f2ceb016494ea3d3a5ae640379ecf96a407a55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

