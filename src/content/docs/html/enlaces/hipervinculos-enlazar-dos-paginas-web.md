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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5C64P5O%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T165247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC71FNcIEsC475PBVvzSS5iYTk6PKgDlI0RhZcRi0JlpgIhALncK6pPxcCr6SspDTO9AkpklpyGGQ4YMQ4YPRJmHfcyKogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzUCigN47OLKVDXEpoq3APX%2Bz9HKa6pZVpIX0U%2FlfapOgRPx50qGBAVS3p7uKX%2BfDVYbk6WQOrp3hRtLDJ6LFABGnGkwMEcCrfGbgU%2FbazUKbXVtdUj3TDkNV6wKzfEp7bt2lk0qHx6D1XnUoBaoxs%2FujT2fWHOaJwmiweznLRGP%2BxPaBsPqJyzvx%2BtIhbvXile%2BFz0uZHoBd%2BnZMi%2FprRHBVZW5mtaU90GWiCQ51%2F7zTHzVLFHemyNbsEnNn9rgVy6fNUF42NBOjf5WfE0IloJDHs9CPWa4eQaz5pZSoR1zDhYlkTZrChE6N6Hz3UnV%2B2FfAtiaiouzpKqAGOZT4YEcFNBnWDdbhEh0vcuFXZE26elpcXnKPQTLfjulHMxjhGpOTz%2FmuO5aH%2Fm0%2FCiX%2FuVp%2BU4sSqxtSfN%2BZRMXCI3ix5joSMWDRmnn66Qkp9vBP2F4rOIcvNAKM%2BA3tua6We945eQmgQJapnxXJlbzrVeZP13IN%2FSV9l03EgyOyjWwz6vpyJo2lrJLIJc%2BQYnoBnwBS4tB1jZYcBwLcKz2vYQsEQyGs8A%2FgppnK2TQHvgGJRYyBJKXvi0X0RRjE%2Brkd%2BEWapjMZLmyBg5MQUQh8V7qgyBvTolJwAMpItnHGPzv3qHIuR9UhN3d9qOSDC95NvJBjqkAdEbtm%2B6VM42Ugs45TZZW9TGilEJyWfqKX4pgbu0%2F3bID5v4fd1zc9PpSo9nF45gbpKG7lEOMVrwcmmKFrGde26pIj0a%2Bn3L3sFyiOOdzTljy0oW1bjp22UePQ%2BZk8y%2B9oubsZrSmEuhMbiR5rq1xxVE%2FZsthCB0%2BE0%2F%2FyBzD1xinDQXLsaQJz4seaitbVJn9Xg5qhpcE7jd0sHDaGlFMkmiaBaB&X-Amz-Signature=907d1acc33b89c477570a146882fd04891651989b6afcff5c307fe684b563e32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

