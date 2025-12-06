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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SHLWRI6%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T045226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3xKk9C3bwnL5KcqipGq9FYLUSaBN%2FXn7crAivUYFWzgIgQxnUPPYAF%2FgQsbrI0DNtExsP7WVoYetv%2Fbud4cbKAcUq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDDkzHDPThUr9of7Y6SrcA6xuPjYwKbHYFf5BYb%2BuCVC8ycLwRQ7Om9JRnR3RIXp3F%2F%2B9vBk24OFxh6MSQqAjoG00ytt3%2FoIHRmc0T%2BW%2BweiZ5hIIJ4SrPBsmI%2F%2B%2BAF%2BUaz3ooHX%2Bydu0gCOTo2Foky6n9DHpknBLUBdyd3CQIGtqq5iF3hmQqX3OyRfoqpNWgLGa5EZIbw2J%2BnN1%2FpT%2FXibCok2GYL3vgi2nGBwc%2FVFxcEZ%2Faqx2OMjlO7CEI%2BsyAxC9%2BLQX%2BWBPmiuWTcPIdnWStwHbwsRKVhhB7BPjqhb5zYnNSaxMl%2F8F3DGCLHTSGfsT5mc%2FVhvjPAsf7D8yDxZVjym4MyR0YCL36kZleM0Zkar5Emfjf9zMReBmIvz9xy6IYkwdemPESjlc%2BfZaicjDWnHB0z1lD3vhsNthOXK%2BGiCsGR7lb7IcRmG9vK52xzF7oxyh3s9ONgY%2FhCeZWKECqeLfinZJ1HT5HVrwD0%2FjgIq%2FO2FkLb3ZIoFa8tKaZQZM2N19mi3wtTleTwHEs%2Bd%2BtxQnAtU30cW8cU9%2F3%2FlG%2BiRylrhEy%2FuCZbIBgglkf%2FuluoqihPp4D7aSNzNomDiU8h1h7XomlcgnNcAxqGyq8c0wRrCbpjNXUDd4me%2FiUN%2FNuOX4MCmA3N4jMKfezskGOqUBcfbtXjamGlLerfsPansY7W%2FBz9X6tCvGgYWo%2Fcw6XS3CQhSjjqN%2FVhQXS12S6zxsqHQly1hLuU2V%2BIKTlbjW0IRiIvlu4P07SanQh8TjkVk4UlHtBILCbldT59u5pDwf7ELNEdhz7zLUOSE7XSPeuneOMgRZEfGCWwFQhdmu0uRrDf25j23B1mK3JbtwLCN0zKc4AingOR9%2BGrmWX4IMAASVD1w3&X-Amz-Signature=a2865b95fb9bff6c42c3f78f89cd316a51a59329fafda6b06718f62f61b8cb63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

