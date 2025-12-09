---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2025-12-09
slug: html/hipervinculos-enlazar-dos-paginas-web
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5BISH6U%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T222201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH4eHuHxgEJejQV2Uw6uODxaucFQAhka9U6pT%2B2rwvLlAiANB2s%2BJP%2FEAOixzdr%2B3hy8J%2BeQ7sYJgYUvIZbfCFWeFSqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYdKSQmh9AMYb3pWhKtwDUfDgRv3mGNHAl46asZIwNh%2F%2Fk8nWYCJMiL1b45vjoUiFmyfFTk4vi2Jxo1sUJzpsYJgFE4BPFefQgEEMKRKgNlVynR9rYlcqcwwd1siSbZlmfJKdxREsf5W7oTORo0GKi1uS9Um2rIT9ZZMfhFu8qia1lSPHN09yT29DMA9eD3xHlwT2RZ63mHE1FLIW9%2F9hE0bo0ITndMxRdXwLYCMPJAV%2BcOcDwYVWkOEHSPO4v%2BETAbNpYWTrS4jJLoa87uIvhGG1sFt%2FXWXbj9feXT5S4WwE1OIUMILI6eNwBtytiU2vjoKVxT9b%2F4C7wWTTFyOLkA%2B%2FdLDlt66eJXcXGhh7yslpSeQKnYRa%2FnjlFUE%2F3EjLM9pYLsOVbuSTQF0rIFGxGRVVI9xtO5Q9sCpoJVL7dn5QX5HnaImkhuCHyjpYIwBWYm%2FjPLqOVqa1g17Ht9Y75aloFn5HCLafEp5osxlwnjWI91uCDihjEph%2FwQM7u27RKS96JEZ1FGnw0hzhytVYzFQEExxza2Ao8aD%2BYLir2kd491mtV5yx2%2BUursTtfmlT%2B4ICcqlHDf2UDzkFur1qfR5HSPdp3uUfJGlWtbX8pxsgFp9Z1nwrt6R8TqJIXeAcmQDWStFDRFGGaZYw8Z7iyQY6pgEfshMrqI32WiHtBRcsdwAFkIF1aPmUspMq%2FEJA1Y8uE6h%2Bw1PgGK%2F8IQ42Ejd%2Buxv7QUf%2Bga4niitotewF5ybamahavx6QPcalcrsFMk57vAltbNLSILuDJYdIaxWyQzJDy2HgCiHJ5mFTuz6amCMkku7WxDnQyND7T19DSzNql2gC3q3TKRG3bueHOFwIzEO%2BnD79iqi1g8z%2Fpsko6e5v3SzogpX5&X-Amz-Signature=28027fd8ce43cc2e7fba14e5c0946310dec1dc1e3a6e591513421b126ab44b56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

