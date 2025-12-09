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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JPPHIMR%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T021625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgJArM8Mu6C%2F4v53Yg14btlQbnozzK98uqwJWvUrUEGgIgdGs9%2B5A26e0ClIyQ1fLE%2BVLLemsffPOjfFfZ71ZTv2sqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA4WT3o3L5%2BiKUlBmSrcA%2BQYQGq8lBSg7%2BizBT%2Bxn82sZ7sNRHgBT67T2SR442ZwT4z85V%2FEu1UV33zGT1FUjp1x9t%2FLqpqGh8FyvXAe%2FkPe7OwwThhKJPXNuKAsaeXPQPILxmr3ZzMgSJbmlc9W%2Fgg6og7iMXGIdseEhVT8BWEHzwLY2s6%2FeD3jMKRor1MwcFpyNK77%2BA5bIs4vMyWyuHn6uzp0IfUoNpnwZAHB7poByyIWC24xwSZV6n4rX6WFQgNhFhISxI6NEeGfWZDliC4VKyZgZXZyDUfRGC6hfWqO9rQFhW%2BVJ0KMHtYSDqLtfKKHMBVt39LNvPtvcl0stIYwwwgxfjIT3axn7wzn%2F54PtWJcvh%2FP0l5T7Cml6tLqzDS0ZLdzFBdjQFia%2FAlIukHM575w4T5U%2FGgi0FzD0dZwooDxvEiafx3ZiI3cZRSbJ%2B8zQ%2FSHmzkhphs7dPouukMOmvepsbjfqD3M7lbzthxVl2NLCFoUzbiJEjo0NdbNDT3RChFwarPn2D2jLvCoHLtupNmKWbUvem4RO1w7CjFYcIuAuGTJA2DjeFssUIIsEmQqw%2F92D6OgHE0CGid%2Fw%2Fqp4m5zeZbbjOBJMwgCvFQntT5e744G47SJkoJ0W0j4zbv9qUtxAJN16kcdML7y3ckGOqUBTZftkya4%2BxiM9xUBY0G5nikbCH9u4nSHv1FITZJcTLEtR%2FEsJ0m743D4mNB9ABAAnbma4gP2wUxzmIxwu8MkQBapS4GRJnFJxHDEZfgy4qS92J5vqoXxsNVTTg4nzHNA2uUmQC%2BSwt4pLrwhw7LHN9rt6AgMplC7wSLJ7C6IOtGYEfGz9pY5fplVR%2FB9iZwEApFeTPnh%2FS0gVnCwgHh8YuA7os%2BF&X-Amz-Signature=7b9b01e7529bfff879857b51ffea1758c7f751bb84a66f654b309589fb8c242e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

