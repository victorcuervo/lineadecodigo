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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDJ2PGOC%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T002130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDm%2F9i%2FPlreODUEiTTkzdavGM7OwqGO7lOkF07UN4CUHgIhAIPAYMtqFG9N9U2npbAvlvgpYxdnQIpxvWnqRRiU6V8tKv8DCGkQABoMNjM3NDIzMTgzODA1IgwAuiSMahHjVhhdkKwq3AOm7Of%2FEAELCOz1on6JTJm8sOMYYfiWRMXu0axT3XzTgNUoO5MK%2B55B%2FOgoaSMkj4ituiheInaokMyDQBwjswdx0buK0%2B%2FLGfapeLJ%2FcF0pqQQRZ5V4k1mP0YO5jZDwnDyosXJWcNfj5C1Wkh6J1ujyFjSVCQkNKbLPZzgtwPt02ntqzzJMctO7XVq1m614h7PP3n22DCJD6j4kj82mA36ErTJz9EWqBs5d6T3MUU6%2F6wl1vHeCgP9y83L50iZifqdC5uh4WkDmwgAgZ%2Fy0BoU50fYGXRhQvd4xWMjixCGkry5szBeFWJQT3r1CbfOZdPjK0r9EAxWSeic4InaYx%2Fh93z1UwtHnMeN3hnzq8TueAMPpglbFoY1BXYHkhZYe0KXtjoUKOrjM6Vow9uP92NUIRyV%2FDlK6cef7yinHOnGKQF%2BVNw5dDeHZWiHBIzKTnAzV6%2FtfWENRqNmiIc2h0OB2MC0eHXUHMdKzPQ9kHiJ5KLKA7vPTJbp%2Bz0urGf0Q8ti7ClpXsMfaZF%2BJhUcW6SdqaYK1TbF8ayI2Ojg6pwJVo6iu7lKUdeknzlGsQ51jdGbdrP2cwOojykOwztjdR%2BQItsEU%2BUqOXTpXp6KiSjTwo%2FTbWpZavrGHwSuiGzCP6M3JBjqkAfhPzzIF6Ozh2z2ZtKVB7%2F92BhT0VI04vmKFXWcrZnbWaXXPwop8GbMq5SGVul%2Bd3ctmzKux5mNFE7w5R3qfmk%2F4iJLcnu4SaDrnapruN5FwHMfujTtaP6yciqLrjIQWlw29W%2Bwl8fl9Z6T0hkVgFeq%2FzPD7og5XLYzAqfYWwsXnmjPf1LZYuwJZOIJ9eCvic%2FUHBS8qOUtVOaa35wKlKCkf2PNf&X-Amz-Signature=86682f3d899f41027d1ed34960a1fff611bfcc29a25fc624a488cb804691dda9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

