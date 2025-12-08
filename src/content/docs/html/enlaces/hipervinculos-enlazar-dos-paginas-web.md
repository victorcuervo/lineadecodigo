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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMDHGBAK%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T065046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGlJcMBa0C7j7hXJApThZhdJHhSGK9jHtI7DSuMLDFpTAiBOqKleRkS9pvTDm1p%2BNMpglrBVLV5OXp7zNaMI2ihB2SqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMI2GRuX6jFdIsaNoZKtwD1DuXQ5%2BZaBTP0dBeIXB2gJnRpc0P3pjc1mG2aA7MYsxuJMmyAJaW4tCe7tatx7W8lxKj24ruW3%2BUfaXSM7%2BxCw0g%2FbHgtHStsQTaESj0XQmvxq%2BtkbVMpR0jcdZglFziMX3dGdv3auUlpx%2FQZ4vZKlPuCS3JapbiGfKAyYNHhPuDEytieeq4tBzTTgT6%2FEpC%2BqzmcaAyfgYivY4p2ie92ZnhDorW4GbffOtfO3pAJZ94c6jPKW6MFsc1XGzjfenCc4C7hrRgjiASY%2Bl14cDWc2rKOtiz7KiUJll2xn%2F4NKujVuqNr2EYkgQXVGE2dh1eylKA0wLhSpxzircynjhYe5hNUk1%2FDLSGfLNsWwWvVXmAbjrPwJqh6t5FI6M3csz3PVWQhBLqbX6FJt5Zl9xe8KLcn2Yhq4bjgFdLDS5%2Fb5xladgHnbyEelQ1%2B5M5gDFW8G9CMT%2BBiICJeid8wgQoRr%2F6HKMGmR2g2xq7PzVGqxSdwrA9zebc1pX%2F4%2BTKwDiP%2BKTN%2F6LqFlX4s8vOMK%2BkxBQS0%2B9yrJQkvUI1hGZFTbelZwNdBHMA2UqQS8V67Ugoai0tBl4CMhy2NqYK6sTPEfZDW8XSIHGlZ%2BKX4huiwY2CDcAiIWWFLco38pww4tLZyQY6pgFMWOCdLYE5xpkuWqeWki76tFsIvLNc9cI%2FkRBPPf76MWIrMaXaZGgon1nO9f0kYKTdcEdN70f3KwbyqwovxG%2F5xFD2Gk3FkvdeXJ5oHA02E9%2FHVNfR%2BD0b30xrjV1jVkBLs%2FHTjNZE02wkUK2KL%2B8zoDE5iEIUuLfy00lwT23HpDnF1iTZPZAAv1wx2khwwW9zHiB2cYU46xjkKQx74K69Pb0rCNCE&X-Amz-Signature=0f7214d077dab3d6c017141f25b00604f6cef300039b99cf0519cc14a5642522&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

