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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZPZMGNA%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T161157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1%2B4%2FO40pRYYsxMPJ8km2%2FD8k%2FCDi1dwAb%2B7wxXAnfjgIhAOgaCJ3e66jHP9N4%2Bz8IvVG7yF4ycD2SFV4nFKfeCHd2Kv8DCHUQABoMNjM3NDIzMTgzODA1Igwvy0iweyTegZT%2FYU8q3AOjJQsu252jzknyPJ3JCiLJFFBDO9%2B6%2F3LFzqV5oh8B8aXdvhAMX6xZKkutLvIZURlXVuVX4A3dODVrZEcgoNEIhIrZNwHx0AdzVN%2FpfozvIFOyccD34Om8ZX7WteaM08vj4hY38JboYEshN8JcEMh1v3VnMp5jUra3Y%2FqfGsAYmb0GHc9KmrJxu3OeXfpbiNk%2FzLukjqd%2BvEziOHHpNPUDKg624V4J4vwQcBtrzNu%2F1dnMeGcNJFn%2Fao2JEAomHogdeU7FAhD2JCqtRWwG62U%2FNC3LyCxkE23Yn4pMFmVBHhtqATfpTjmfOpc4nq0MthSfQKcPpgtTodFxQnxdkbEw%2Fad3loIFT%2Fqr%2BFPDHt%2BsoIw9eB8d6eYzt6vsMpCFH67Y9c0uMcdrYMyM2F4GKXauA82V%2BeDdZ5NhjiLMHqYaD76AX58%2Ff9W2pXeszQVyN5MWu%2BjS5H8eVTvJ7wwhPGG89u1lyegtUD2oGqf4Oz3iMEOL9VgR1VIx3jFm7IlV9YtYtRxBYy4Z7ShiQvlBS%2FIaC6A7MTKsN6H6Dgp4%2BQaLupimFpbwu5ClA4KoZVgSOFU4CPyA9%2B882FK34g1QzKEBlXmeznM1tye2om4oqKWlak71j1tLUlUjQx%2FhlTDrptDJBjqkAbfeyw2NlqqgHe5006%2BO7LMWTQeQiU7j03Dcd7OTvxIV5c017A7IGmaZK3nMFsegPjbR8JvOsKq1WqkUNxo48o4QO3IclRDDyMbuW7KK5Sa5QZv2%2Fws213fZcc7vqnSLcB3YOjHK2sOM%2F2K7qPihDixvBIAjjFoWj5aAya0Q9noTtjB8iCmI03eBhf5MCSr%2BeOVUX1VNfKsfhwc4inZD5OrUZiIl&X-Amz-Signature=78af848f9280d52fad4ee178ef1f35d6d92eb06dff46d4909a1f54783d958d14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

