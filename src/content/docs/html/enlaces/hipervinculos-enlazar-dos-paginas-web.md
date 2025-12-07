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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUBMZSAR%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T202038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDWB3pxVjreCRPUf%2BJzk7YXV5yqHdVOis%2FAMBWlT5H6%2BAiB4%2BQOCkS4ImZ3pDfZTHr3jKSt7HNF7QYt384F1MsLimyqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMF36O3CjZNYC5nvnyKtwDKdGiCHInOLMpBfZDZX1Iki3Zj7UsILPbo3LCR2tt66djtzqHiL1CwFgeqG86Vmu8MjV522PlYcIshET0u%2B4%2BpNx%2FYXxhbGpcuags63kV5YnWDyQv0XghIYiWWtXbE3yOpMHQjhWKnw9yhI5wDnkRI%2FxfQvbGfBXjgkIT2e3rlLCbBvwJmrZvK%2BIx7YwsmUi8fZM6ZcwWYMsX5YwK6C%2B93btPjIESYlUc8MmwPD1p0isBKEOHqThXnZKAHGyPXnR4%2BH5z6MtS7GCl7mbla%2Bz%2Bfnt4ypmGgzx07sucGgdXsHC9oXHRy1emZTqB7FTs%2B7CiacVKRbi0F34gn7RtLflArMnhWeue0E0RdeFP2PcM5QgplMBVU0ma95IUhkE9yg6GzV9tbt8AwFfEcNGz4vRzlDrdGVQ8h%2Fo%2BSdJsXNjoOQDfbfkHXoMYOqGgnI1QRq9ayWsi%2FnQdK68pyuy4f3GwKop%2FeMd80X7ZYETMbztFdhoxZr3wENo6sqUXvMqA9TA4TCkDsqsH8GbyM0VYGaVweeywc2M0PtFcEkEDwpzmFbl6mEBGcLRs5TRk%2BT8yyDWUxbB3dz%2Fmi%2FhFqK%2B2GJJtsuaaYVEnrhz0bnUYndJOhxlwJwzewBMtIWsk0Agw0KjXyQY6pgFzeC8htnscVGse20rhvfjEN8OOFADSaY2yV2QZL%2BEtJV8QLNKsAlYlgCF1iVvJGNnAzrV40isJp7yLRgD3WmzEhu9f2yR82MiWE6AvDBE2k7ZJ0UJD704fg01Fbyl8Ng2N7OSl3k4qR04qUsYHkJWk0EUWqAsQa0cVcZAC55plTo2l8a4WKaamwCk57fWUXQvqX4DS3E7hgB8nSD10bS218Gnua3eu&X-Amz-Signature=bc0231cad12ea6e433c6774b0613665d6f9f434dabedd07ab0cdbbb782adb9a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

