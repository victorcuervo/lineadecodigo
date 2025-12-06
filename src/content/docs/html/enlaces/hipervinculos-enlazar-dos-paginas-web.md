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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QCH3GUP%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T110331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBLf3%2Fxg6%2BA5%2FczgWMOk%2FfucAm7piC9v%2B9IM%2FwRwLUEFAiBXq4kn5fvyBIF3r5S%2B%2B%2BSpO%2BX1ZoBMMWyzFfK%2BaFth9yr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMsxN%2FrfP53d5Nw5TxKtwDLv25PhRY6SOelX39iDP7MGfeRzqL51if%2BR%2Bg0LtDVGott6G5tqroNeBGJdbnJDl86PGkRjw8r3Q7YE%2BV7dH6WsYDcQUh1TeSFe19flJ13%2FXI6U6uQPKMeZK%2BWvd64AGGG8qYQhomMF2PPjTWpXeR2TrUX5wKvuUXCm9Rx2fj%2BR14K0zBVKw5t763CyHXF65OYSBX3QY7%2FO7b0Xn1%2FCzVuMW7CGwvNwsSz7NAZS%2Bk5VhU%2FVctfMxBfxISxK2QStJ1zYds8vrWW7eGqH7cKkvSRA2bT4dabZ3AMKcPtLLX%2BhYNcjOOlwQBEryYMOsKUvV9kOZxXiDEjeHrk0jFErhi5BeRXk%2BN0Hna2QQMjIPcqu%2BjkYWK4jW8mtGZKUDYVCOwLsV0Biu0bAV4SBFidtTMHfkTgzPJNCV36hemKgsNCRW7CxMeJ%2B8zpRV2xhjTgUT2aiWrb0Exb8uH4Yr1IfD0G9r8Ss%2BuDr1%2BWRLoQ4sg3xF9qjTNceyca%2BZafqq8RqFc%2BGYul9Y5sSzw3NGVDFgGhUz7A5jyAVSpC8vDbx6v%2FaaGj9b0PgaiLnI1BXoJjiz%2F%2BX37aVEwttrRlPcinbtyqc3oTNlXNlMxEI2y%2BcjyMWUjXYh3KG2BvRNs%2BK8wt4nQyQY6pgHccltsD0FGXCSYCdiOJ3r%2BhPKautp981vU%2FMuFM0Gy0Uqmowy7Ge4yZYdItaN3FPPgFGcL6GVIKrYsVah8qDsHDFl9lxjcGP6AqQodukVFdR5Oa9jX2QMUGja0LZsp1S%2B1KWbcmgqz7m8e4UzLO3wG7NbTPuqlfXCz5pR2nlsDYiHOdglRMxdHcAv1tByOQOD9ux%2FpBnUdgcp2pjgPPo%2Fj5TDS3L4r&X-Amz-Signature=7c5e0a76a8c667e432573c556d5d82d627a9c39e82d49097f94c18a74dd8b2dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

