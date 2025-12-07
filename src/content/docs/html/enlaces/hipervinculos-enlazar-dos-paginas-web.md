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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664KNTFWN%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T002017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDiNYlsqhfOSxl9%2B2DBsYZUNwZLNHmx05Q5Dfmk2IzugAiEAo1uiCNKjqo1pxWNxGZNHdMHd1TUG%2BU2p63fOq5Et8rUqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNPAKw8AEvAmrbxtuyrcAxTgl0RI1LOHUM9%2BgYFl4TVpbWl333MzL1cs3n34yx8HUxV2DOPgdbDA4spCUp%2Fthu0JdU9bnWKF0UuxHMIf6wltfljjKXqv8wD2mo87KyTnLSQQsx1Sb2h0trY4%2BcENsY5XQShMFHQsOF3cf8akLKPBhaMochtJpd5ZKz5gHbUepaazXIMri8UbCw0TjTM5H3QcZfl%2FcbGptzKtCFNqt2kOWhHyZeKoS6E4c%2BgJ6AUAA99yoscqXwbdOQY%2FpkK%2B7%2BsggfuODiqDA4ovN%2BNwUGJI8vw4A15wh2bDYb0MBzS7ugnABio24tZDsSFQ0bImMMFQZBnoZZFmOA9sZuvPpThTOJAOlTgXTj%2B0aZv53YX5VhkT60AmcCrXV6f5qUugXtVs0JjqU7ubXpCAOI1cing7fzf4M5gGbSc%2FtjRDbvqJNTD0OrK3zG3tfJImRM%2FBWDIBCd1%2F8hp7X4FS9OHQsI6h%2BQKnB86azby816c%2FAlYvKgKJREnAcolInRQwDyUR96h62kTu61SHNtnElsjLOQHT9SR2k3iGwS2dBc49OEldjEwAjJJpnIL0UfSEGv4cub1gpQe9DtE6%2Br9uqS3kdyaoXKlDQ%2BQgbshMSbaqrJyR75gY%2BGaxXJaMYq7PMPL90skGOqUB0lSWDrjv8XCS7cqEedqmGcrWHWlZ6k60OLVVH7pOwk4tZZGIEKGdA6epLlyGp2h%2F7q57nL%2BgtryEycLND4sboRj90KoOKuKOLgPlAZzXwfZcTrOTEpvQ61%2FzauA01w%2BdVhJunN2kLXpGucuyWtJayEgHfT8vu1ygfiiY%2BqfFZt%2BJvp4U1uKumZdAOi7ua7RQb7GVt7Da%2FdmgGLCgK29S2olJN%2F8b&X-Amz-Signature=a36d3a1880e5a0496c8e77917d92b650b549aa3e7f263c103c4c314e48bc0586&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

