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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUSIBCHV%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T232112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDsmzqBONA4HQaGHMlchl0T%2BzgDWTDrSy2d%2F5ZHYccU6AiBqRKtsCyAPTlYIp5yzNuoBd6u2bwq5PN%2F9XnFPNhV1FyqIBAiY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyRTVLk6EBQDXRuV0KtwD%2FT8BW8hjbU6lap6Vaox9jpSBv2ujsFl4mxk0s85Az8H%2BZeQsaMrMb1k2weiZgGRYxQB4yuSOp20MtyXwic49JhBdvXKXn7P4gEv5EiW2ICBVi%2BQ45PDx1CGi3XOWeatIo0nF2I0tRWLA0mypkTuJgLTOurbRBO%2Ft3ZrQKD%2F6ThQrkaql2f%2FliwcvxLOrfaCvzidSjFKRGMYwK5Jc0IiVyec7LyZlKtpsOVqWX%2BjXXhi9dbbFR2j3Si2jDWCXlePsZJUHzooNoAZFCP0%2FghU8ioBChpzTuzKNmpm4xj0CU%2F3%2FiAmLZ0ZxayBS6ZU%2FW98XYR4m66OCIj2Bz50oYPjIPS9UdYKmfMxfgEYQLnjsqB0daZDjgTnhfniY0zfHAgbuWAnX03ojcYlQBsQm0S4TpXSKv%2FTsREx6IAvxu58kKDlTO8iNUtJHd06P9QYB5%2F%2BPbufW8yBROX71fI5%2Bs9iv4tOXFQiwv60TSdoOaCFLafYQa4b1GdvE25P9tzd671kpIPXb526RfaOuDp3L7iwd1DIqT4JdB76VqfHeooQnURJNonSwD1RM0lVTOLXQwIH%2FiVB4u422Qje1DTfTyFT2ekW8r6sDqZsgNeDWnhPZngQ2oNOjs5a%2FXTB8J7Uw0YTYyQY6pgHFmQQCwyJanVhG2WGiFK83NUDC3FEN973j0qRvmUPv%2FeIOcADE9FrcLpHwzfK3vGT4XVFx7v20V2gQBdGv%2B0Tbi6O4bJJoFJMoTzknLSaiajq3%2BBXzfCzm8luNdD4jAlJQtovA7aYG05HboVM8lebPfAV%2BP0ETnsUm8QKAonK%2FmQIPLqHocxXe1lQwLHdg2QTuLaA8HCqWJTk4rpZWmDO8mTZl4i1q&X-Amz-Signature=4752cc0951bf75882d19d8e1b18383987194182c50496bd5861249c677fdf9a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

