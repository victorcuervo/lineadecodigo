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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646O4VEDH%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T052745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcu8xmeCC6ZLBAl34o8MeIGzmZX4sQGECQZBZ%2BFdvviwIganb3ojf1DwlpORIKCedBUt6IDsD2RlMrGiG2BkFn92oqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEvl3TVemeXUD%2BwTQCrcA%2BQB4dm6Tww%2Bq7n1UWJh1%2FZGcLtkdnaym7Ds32D88OgunPkRJMdHwOs%2B6yAIQ%2BNGegxvMT9JWv%2FZ1LZzNv%2Flknb65pVHF7hT%2BfivFaE3UknphpYQiYbUfKHh2ybRtvQUOPa50cRzYAER9qRdxHrp4TBU8tXRMYHILlh98SFX%2FxRVOjedtrW0Nh%2BjnZsAW1OEu3cZClc7eafPJQKzeqhsVCofl4gVTlln1MZCdyRSLygKbiSqM2CU%2BBt3%2Bk6MGXbydR42m5Z7%2B7M5RP7n3aNEVYwzq2Ff%2BSAP%2FYtS6It5alkg2YlnqiO36CbOTHtVwR7svdLENVTYgTKCsihMBNkS6rnZHEQQ1cG4J6o2HmxlQ0Ewho4twEAtsQ5JmB7IEI%2FWVjnEvAWkmhfbPiNn1fLZHYFCQOK0mO59oYMar4gUnpTSOtcG7lzxv8neQc7dGqibNQX%2FkXBzZjj1IcmaKgt2eNNwzEaMcgBz3m20sHZjjJX2M%2FoUXoVo8MPv7nbFwQjkEejcZyiOvg7PQcZSI6l8dUrsg8w%2B1i8bgoeBk%2BfT7YVYWTPDj4FI2MZBZTlRbAc7Y6vi%2BQh8Zs2oBOh3fCe%2BMgiCHrgeraX%2BXsV2L7cj4ohMI6eyqh0t2TwYIeqrMKO02ckGOqUBIHG3IXXVxUTVBoiIsvC07y5Ilg2bWUEWgIcZhjKL539W%2BwAbfr6fg%2Fnr02FgZJTOSHvxhqb3owB7e8MtLR2uJZGe9vTfNXdV4lAAl3bJ5iS80sZNft2mx2lCUemCOcy2fLXy5rDztyvmqf0SPucTbMw0ipTE%2BT7vTlJwm7BraXPsia3ZnQnwFF18FnvCsHo7ZTCHnQ17xLl%2FRgShI9mDGE3xJIg6&X-Amz-Signature=c022e951a0c0e22c61b297a298caadd70f02e005001b13b68a58dba381f54ff2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

