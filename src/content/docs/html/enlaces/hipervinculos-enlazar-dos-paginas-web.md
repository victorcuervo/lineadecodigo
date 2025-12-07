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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBILMTRU%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T125254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHBDAtG6z383ZVqtRcKyOY0nLwzLakVJF307J2NHvX98AiBb9%2Fk9nNh1HpnZ2H7NC1SLpf7yZbWdh623HaUagac%2FDyqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbHRQSCGjz24hTUY2KtwDM%2Bw0LTp26pFWYtYS9kxXLjyDkua2oBs5NUuLy46roPB6MsztryXZUgC97amW%2FOAIO2zW%2BVueBY%2B9h2B%2By0NfQsFk%2FD0QmAdzc1IJQDF0ef2L9Ao3RqFUmiOZg4xcfejD1spBltJ%2BpvURK34B078L57lQC2lfai%2Fy3ub26qfverEr%2BbC8kctlmEVGw0U%2B7ujXXNtMm0K%2FmYMmFeRdNEH6ydwcceEHScjhZUWNTCNitGin5xMaiE%2Fq1YoHwUguUaGJgakSMLcwQNKFb96s9TqVvQV7ty0TsRNoUqtg9Pz91EIG88OYKjRGxZwAHRYa9dq9l4SOlfZp1y2F2ehkX6VQo9bZb5uUg3XKiS0uBhg4LTuKrvBoZ4SBJCVjc3G16hHdvr6uHHS8szukl23gYobhQ8oEO0jK9fG79kc%2BNQEfljkwM%2FMy5XeLnR2gd1pkV%2BwtGAiFeim2ghsE9RKYK9sgiEvNPcXujhrIG5iRF%2FjmJaSb6x%2BE4Dwwqgkw7yeqVxWVSdMNWlSyqMzW19nGYC1JJWnwjH6agNyXUJ8MdZmclpHTQYl%2BbuR9ZcVB4ghpc3jT0TUHhsWm9VYXP6g%2FW29tn%2BEh2XJE7FUSvg7EsuYpAfHJFkAnWmTk3C9pCkAwuZrVyQY6pgEDzFU5GaXgdoPZXWmfqZWRa1vJh8eAPkDrXcxr4TlT2eQPA2GP1mB%2B4HJqeCBB2iNUY2q7KpcvvMFuiHoC4dDxfvaK30IHr%2BmET3WH2U1utcjZiM%2B2lP6%2FJoRIhWF8ySorfYenEaLTIL8GAMwgQZxkgpxuJ1tV3H3rGuFSLmX5Q%2BLhSeAEkxHsk7G5eGY%2FJhT2Vjmm0LGDDmKHjUHkZBghZKPxwQnm&X-Amz-Signature=c827f48916aa1b25ba6e6a40241ca4497bf95630131521e6a9ab447f1b1d6dec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

