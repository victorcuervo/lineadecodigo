---
title: Hipervinculos: enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastupdates: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAGRYJQU%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T211959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIBbKVqqvnTPH7kEElyURNtGPlTX6%2BLPHDaeR9%2FFzE0FHAiEApG%2FbqjPtJDplp7D8jUd%2FSqhVpclKya3sJRCSqMiVQCIq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDHceSSHwailxvQFkZircA87Y%2B9AoFx3XyypPN7G%2F8W65ZUn99Ee19fj70C6Yfs1WvYWD2dY6Ow%2FmLI6nSa4lLKfTvlS0RiPcOgSHUc8TZtkd%2FkPHg8u2jj2KQrvgwJre%2B1Gb8LEnrRX1UDcbIQXcEG6iHTQlHfNtiwRpT87uMP1LEc9h9upZ6g8BcOS9uT3Qpq%2FRN%2BlWhAbMQX%2FnGzL5%2B12DxpCpWHR%2F4c9xh%2BMa1d1cEGRadcJ9dILE2Z4iCkv4xj5RlLMZJdPkayKEkwf6UP4qZVsvKs%2BoGqeOfKOpLo6dhDiV6siqJD5JvnVgwMEQW11gnKSmC9zB9m%2FpxKuSESxvEFbBMUaevAM4HRUZmrIm%2FvT9FWAXm0NztsF8VtuUzwaCAlAeEVVEz2wmOIQPiaHU3OQTJrXovG0op1r8WDtzsmdNdBVXTOX%2F%2Fh2tcohM5fdLBJezm3uyNttBuy7o9cCa4dM%2FaDVcJ32dLh2AmAW5dNzWnZtgjIwNNADTEqqBqPB5FcxyQLQHgNr30Ta8tv7b8YchGXCK%2FP7hu7UYAuIR6XcjAE%2BfAgg%2FuY4GxqRKTIbx28qd%2Fz2BjzAwFBhU8Cc%2BtajMm0Qm0E83z5jadTb0Ysx%2FvZ2B4nyaxV1auQYdVYOk92M0VTysq4LDMOe9wskGOqUBlCSA481Ecw2c5QK3%2FjIp89u%2B2C4G9xeILJdJtlHKkIl7acvm1kDHfyqvSITj7P2eHKEkQk5Po0Om1%2BX9aiwt4VoMNgFy3aYfK2yZmQIEG1ldOAARAc5EPMm2M1O4mS3ZH4joMtvYcXiaH5td9MmfB1vrykzH%2FoqBCNbLDxYvJuBqC%2FzABQgUq%2Bl5BFX%2Bn0ZdaXDY70vLhfjq%2FUAStezx1xRgWKy9&X-Amz-Signature=b5f8b697c6ceb5fae69a4f93ec15c047c6dffe960169d0f2f845548b4d4f6641&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

