---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NBTLSEO%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T053956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQDsZvKy7zk2S%2BQCw7tCeITOJapU5Tl08JOih%2BIC3XcrNgIgEtbJQlwQfnW1vfTxbqUsHNLwfcNZOGAt04%2FFbhZccrAq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDD9ZhOow6UIu%2FLUzRSrcA7EUb6fcUTa%2BZxpxjoOaKccyD8ZTD3xQBDvRsKDb3YRaHtc79DcposW1k4qVyDnMkkySjKsKYD%2Fwdpa3jDwJvao9lIb%2Br%2F7iR5UVE0yR58oaLHz%2BdIYB%2BAWkUk6bxH1x%2F7cuBXc6slKJQ7nXzW9Jkv9eEt7Pnkz7QI8hICC6ie5GbT%2BY1ykZ2zwF%2BjElVG4WUepDnbtIrP0aRtoFfjZT0CGdI8b3HCapc1%2FhfiIINrgr3bd%2FNES9%2F9HDv8oz4D7k0cuO1qYnunCEuL6vKosVdek0YbDfA53Mfx1fDEY7YGR%2F39YZA7NjlFxXFIn7D6F%2BvBJbvfu0Td57B0ndysBkWclUXK1wfl82I4HV60QntDO%2FO2dNjHzP%2BLJtClAuKj6CptTsQoMnMEjkl4SAmzLFcj%2F4BCDsrv0zE6XPbghgsn9aQS%2FE%2BIRBEMC4vtHxw9VL0unASKTNrnZRPcB21NQ3fQs5zQJqklhMFwj6fgceANZlDokmbeVLhK4c8vU0aNCArHO4gq8L0AlccI1pjLNmRWPKYuGnJFT4HWLSRbuywdvrb7Dk6GniuEkcUBMUzyEpIJi8JjO8La%2ByleJrxXGZGgVx481%2FEwbFmVP%2FHAcwkS5CKd126XGJOgttqr1TMKiuxMkGOqUBpOGGJKZF%2FJYb81EWhhpORIMmCGkNIKPknKUAJhJcF3dutujL%2F0oiZUFL0zIbt4pt14M5MzOl1mLLXaYywUnh1i876C2hvDittqeEXEiouWWjyUaO5EjpBPMWmSQYvRZMWLyY%2Fd6s22brxwPUs5pukqCkQOiakFbpoOkvBY3T0VYdqVoXrHtlMVH9wnbrILVDM439kZ%2Ff%2FYc2bKTROD8%2FovoQNa3T&X-Amz-Signature=3d4436ad302694132693584b55f52fdf1a0a8d5f0feb2d77f332d3ada78f11cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

