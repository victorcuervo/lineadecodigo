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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HBPLLBM%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T041403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB7nQHfMyejW8My1ZrNEnDkHY7KTxnwfXD7O3bOXkoxIAiBbcoRDrhHS99SgEWDYJj4u%2FgfZBiCpuObsT1DdlJLY2CqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZBuKju4r1Yp8a5KSKtwDsJ59RE%2FPFpS%2BIEjVpBfGwcx97FfjMM9xs6h5%2FjkCLaYHm%2FZEbp4MwSwe2oM1ZawuwZncrmkaRRUav44HkdGe8spBQBhBGEKRogU%2FLnXUUzSANkP4vIkXZitO03NndZjsy9%2B70ZCMXz%2BAtBVkHnKfDE2dpDKQdR%2FP5kUlqCLEWJLDyudAQdfCnCqZlefjf2jne6kLIsprvc7EuVGjKQEETMCMA7qnZ%2BUfu%2FEnRxQYdfD8yblebMkeMj9B%2BUTrLda9a%2BOCnsFOryttBT%2BT2tJzwGACzlI8sbRWFvpnIg%2FuGidy%2FQwb16uI8bCkjE%2B46VkaIp6Eb5uHDV3BDgJejwNwmwzrqYNaMMjuldQVh6%2FW%2Bcx%2FVgRBDP2XYRzZO3VK4qkBcOOAXIS7Uwi0xFup5UeulYhYgScyYDOIfFrtEOyOp0R2cSz452Lb205SMsXxBn0GAKpR3ia3Ja%2FbAjxLEykn4lYXSIKDUuQSAQTUh9uDnU%2FZnSit45lKhICRZbFSzrod6t3deml%2FngeZnovdjqlW%2Fk7UCSzTz5E0DKuIlCvmlNDYzfCPSL6RyqwTa9o2sJqbGFEFR8CxcGeslGURL6MT5GHdO3GOiaCUYUP0y33Jr9IVLZaMGUzSR8yCvxcwj67eyQY6pgF6N3Ln5a7%2FKempBS44JsvJgd5oJF7dmKjGlpAe%2B%2BkQV8UMmwqm%2FqGmBQ7RtKh2YXCn8tk8g3CMQci%2BsQyTj1emj4JSrhI4mQ1ytUU7zQG%2FIT6eKoZEaOKKacInfAvi6XBAqEUnTlekL%2B61IafYUhwSoSyvBfQgBtfTOnL7kXU6fRgRPhH%2BxbAFJKn1XK7gBeFIxI8lStUKVyQx%2FcBKX%2Bd3rfXOnAoL&X-Amz-Signature=75702cbc4da43444d5c79729a5dd86fc5fdfe03d4d437d3d95f7f9a1b66aeb7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

