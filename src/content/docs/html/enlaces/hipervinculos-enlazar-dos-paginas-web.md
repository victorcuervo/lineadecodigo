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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7LH5HRE%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T030716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3hI8Bx6wStqx8buCqYn088I9DLDMAzxTKv0MA06N5dAIgBzFC0X9A4P9L0r0sy60Ocwirm8u77xaJddhwvDZaIIoq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDC0F%2BZym3fDZG41LXircA%2BTv%2FES8rg9FmmPp1yqK7fdKXlFbHtPCFCHoHjjVz6%2FCLKmQZ0oIwOiuWkTDoB8vyMQihgwV2wM66q0jb3VbklVbOi2aqugbxxHlQJCLg9iUoGNDZu1z0Fs%2FQmEsyD%2BOjC7TyezxvKaAFpLINdVakILMhmn2lvfL8NL6vRpQy7Em5HaHJErW8aGtx%2BWpyjvqZNm5pr46GsVfY30v8aaNax6NYPE2EikkTj8vJD%2B4SVKHTj1lqbpdOmip6jWkWQV4WWIxMz9CoE70qD3widmj0olxTv8qUMmUMdwdkoKqJZFp%2BEXKoAnuzdKiIe4BAuB9KrkRUu1HpoAe7SXy71iTtjkLiAx73dTYo88D5nUFhnAHxJ2tSXDRrJvE%2BfrOjtraa2hsQJcc9TI8gUXbW63yFqf6VVLHfTPKxVHCgpRfXEpkF7PLY1wD0QO5H7uOVgAGZym79IajEyj%2FauqnB%2FrZd0u69HJRXtg2R2ywm7xos%2F8g9n58%2FJ3H9fNUg6NYacwxZ%2B1eDctKcZ9X7iLMnlNhyAFDjuAPa7ek7ENngT3RAdQdvfGfj0sihjL%2FtITYyg5Yh5K09TFKBqfy1y49OM9FnUPy1P7b05Yuz3qaVPv2CiNerfCpeLs3OovmhfYRMO6nzskGOqUBIoYffkY09gk1xUlV40UWzXefJz662W4c7AvzK9BcObBsmcUKSakSnBTWXUE4NtIdhKCxLAM6MbWGNkGNp%2FLpOXcWXaBsJSN7CWscTFU101ARB6D4fBx7GVH9%2BJh5z4X1cRVMrk2L0qKxfLU0i0%2Bnmvx1WIaS1U%2FslV7nfD0MtNwLgTzGFMtXyQLAgIpByNe6YoKLKe%2BHdIIQt0aMYlTQSMtdxST6&X-Amz-Signature=16c64ee33778a7086bf95f575677fa4797ce40a69d93387ebc73949b1c07e486&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

