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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLHN2WIX%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T022528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCICjggXmHyika5O3OFD7yEWdJ%2FbwBLu9vvRB3IU49SzLgAiEAtKTSONMJf0uocR7XFaMPxtFfRe5lyM7dRtxX4fXZsEEq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDH44NakVEbjYF%2FiaKSrcA2acBHhvPhtzXtqpFnXvOHE4gFhvH7u%2B%2FDZ0kzK7skr1sWvr5Eweo6arSkanfDJdf1i1RmbYG4VCy2eltSgEuINMgfJFOgSgD79cKRzBnIvOS1fjC7yHCGg%2F8Q5bIJ%2FfVXXsGpOJs1DuCV2zcaVgVjtMGT%2FZEOL8QoDH0R1k52Kl8OTdrzk2rmeBjwKttkMIALmN5PxC9Tz0ubqA%2FX5FT%2BL8zXyoKbUjojuGFa9lkxuheAA7x6wpnsXu98H8OCROsUwcyPRqIzVJjyfwYcOd6Lvwg4QckJcDFSfIYIxL%2F9%2FvtW4vdPZ%2Fa5a32ZCn6%2B6lkPZAmCtLHtl0lRpNsXBOMwfQBTTYj1qA5EC8By7POugzXtVEY2fOz0VTvm2BUwLCQRpaqbKyPqj%2BII9htalVeRtOqAp63O7WD7PFPxdlGbPS5m7Xe%2BStOfFEnMoNm2dEuVrqrtb5yJR5SZmQL1JWlNVjApaXcJkMGZoJRgG3vnFpLjLChYOFLqbXZ5QeO%2FE7%2FlbMAxOo%2FpsKAaxOs%2FMY98tl1fvyeD30X6jeiLYgGTu2e%2FXV7TleHR8efkcWoOmTYhyQicFHbpJeM0NUwyqB6kRSfXva043hNq8y86bizzXwY5PZqQazPJ9G1pbBMPXUw8kGOqUBnmEMl320mUutNItP%2FaWC9gvr2errFIC1U3g9Uofc5Ew0rvsk7vK9YZQTdGAggdw3Ki53ND%2FwtAmrHKRSCX4bKfAzZd1wgwDsaZ0bQz5VkwqPNR3r6TT2EpFLC8eLtf3RNi21oF2qqovVn3y1B2bq5dowCUfbMF2YaPnWkYLrr5BNqqH4XE%2BMmVSQ7DiPox4mnFLU7GNkTQpoKIFJACQaHVZN4bKR&X-Amz-Signature=974b9ba4eae4f460cbd1443edd78862d7a668c538aeb6b9317239c420920d409&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

