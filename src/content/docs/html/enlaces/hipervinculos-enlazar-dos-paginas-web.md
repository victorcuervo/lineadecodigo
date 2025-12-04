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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVZRHLQV%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T160601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2F2aFYAZ00gg%2BpmNExBVzFWJjIE72uQMBLObc7116xiQIhAJLD63oBtPFeo6qjAu6U6rFYUuCC5h8yHS5amXPUpViMKv8DCEkQABoMNjM3NDIzMTgzODA1IgzWgQPOUBnDO0p%2FLKYq3AMP3154k7Azrz%2BIIoYSQWqz7OSqEqnGqKTxivzXJM5Lnhsr6bNW6bfU%2Bv9giUFseRNnNhYme0YBe4U8ukoKGBshLPlwTmHeyfYKQlZOjE6hKqCDwkypK%2Ffn7PvBmM6aU29BuDJC0ejpRM5luMWGDs%2FU1eOeMCWf507DHF7YvUs62%2BYwSWhc0Ej1al6O%2Bd07X3S7kP%2F4RkrezTWI7Ks45fn%2Fbazjt1CR8W9%2FUO9V0W9SZ5ajB60r%2Bg6cKVeMJXBQZwWVMn2DWFxEfA9ze2uIZggR2bn28DmM7m14YIH3pFuKuWmBGylIk0yT%2Bi4%2BJGaS36rx%2Bp%2BB%2FHQAsnw7ZFjDRIONgRKsu3Fw4fXJ5mq0S%2FbG9FclKKYDvSQk3iFO1ZxPNrpGjnyy1g6u23an9O6NOx0uFrJWKrGaRYbKm5vdKeWthBYfuXHCq8oB%2FmmV%2FuoQf%2BRr%2F83KKLkvcYkwV7a0NPqWL2Dl41ld%2Bvj7ynySMwbsQZOykvclhBy7BmVVkXJXAuGJ8HTi0h6qwsHPgMr1cI0C50CG0RSAisGFxPWKsdw0NAHmOPOW6XB1ToWHtEiFMr18XtAZP84FdkskjeB1nzJNbm%2BmqXumJmNtZ9HC9pFCuOnOi2bbWxn83Vmq%2BDCs3MbJBjqkAavV9G5f54nLeLkqtlLxubam556EkiqdiORYsoQv%2BPWO7t%2FLaAtontoxm5yhEms%2FBaaYGltMQUjlxzQOUdKaDapANYy7gk6cRIwvaxeKJWkg0PGN6E7bfagEJaH8H6NYM50bdIHCCUShKEN9WBVrceqmV7dOz7yvcHtB2DWCmW9f5p7lmhkiz8IgTsxNN4Jn7Sji9KVrdS2kTEb3pbPBCOoKep%2B2&X-Amz-Signature=6e69ffcc17688c56a869945628f977be969e3c639e4c3f421aeb60425a9531a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

