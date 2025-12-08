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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTYU6IEQ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T175959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEy5pG9HNjMuhWrO0uoGPjj9QOjoJf%2FHvcoNvEmwA%2FNlAiEA9RbACao21TEYomEM4GQKxjAHG7QAVVHBDuTWnH9Fm%2FAqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI8M5zPCHWYjiVtNHSrcA35uxV7DP%2B%2B8Qppe3nsmQedcEVWexe5n50SKKvhxTORxSNLn3najY4mXPLQCcYiYjxNqIIuJ2q%2Fx%2FOQoON8b0JZTXDxZBqpYPtSMAUwd4xV961w9ycHaLabFgbQhWOLKwY4sPgkDJTktu4zp9SNrNS1CGJeIFuVZjwbRhUwDN9GFr4FayTA%2BefKrzDF9HbhS%2FoUxi8aRueWgcSKiEwPoQfeR2vwAIdUAzfvak2DSFnX4Ub6z5vCQFHT6Haztbjc3Egk1NzvfU%2FG1af57iovnQyRnShfb%2BlfdPPm70ru6yIikuP8yiReyfc6JpGKixqwpJhC15tS%2BA66GJkM62cHF0fkPdCfAETxcQnY9QmqR7oWXaQWN38hiJOIBmoUHbQeoxWBfrL8DNpsO%2FZBuzDdRvjupV9sLjUdb0y7h29NmBUc2f5madnARREdHfTk6%2Bq%2BXnQgJQYe5S5hLfKGM%2BYsOzNfYSidkNyA1SDaESg%2BGOHnCAcJCHut1n9nzmLtsVsa%2FAHNxzVC4rwtIPGwmh6W%2FtSUMTKf08HufgsBF252kYQLXVvQI9LrYHCMOt949YnFJ2cB0DMuvjm28aKy8UNfVDN0LQvHsYuzskve2c9IKg5%2BKudUvDU3zULbix4OqMIOI3MkGOqUBZcaxCrs9rR5R6tVwNeZAozSKBJ%2Ba4VR3V3dXYTHW5Wj6c%2BCGow3JI7f6sRPgBYYVnauf7BeMTzS13GO8sfaKKxmLwXAtXParwJDYddGMLJ0s1GtHdIudfCJoT72NnXf8hd9mEKKU3RykokbvW5ebAEvsO1xJmgmNm9O6QmA9lL0orPIO1FQ4m71%2FXdOjx23sPAWE36DaaxO3YN%2BZLO36%2FiEEsU%2FV&X-Amz-Signature=1937da130499397d5423e0c4cff65bb226b89a51d43a040ccc1010e98f1a9859&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

