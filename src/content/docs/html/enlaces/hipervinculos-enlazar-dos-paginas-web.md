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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NAK4CXF%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T215636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAX3kNgO6nQVuaHWwCFP%2BxnZkH4CRdiy20hiyPrUNu9DAiBM9il%2B%2Bi6QIC06OC2F9ulUJa%2FqpmoPEq9%2Fg1%2BHHjZwGyr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMG6thUicBF3RinDQSKtwDQpL1cND8QxtJlF1HPpxk4wGdalPGFZWaj5FAw3I1VYwWIKlWo1togHf6s4Akx2PBMLX9cfTZ7cFOzkWWtUoLtlhd1MHs4%2FKaJ6%2F3HJ3uJIofSmpAvxuxNvJRJxDeSSyugifVCRantbPGeFGQMJarf51qT023VAqKzWHw5ApUFd5S8f7UzkiL7%2BNWMv6rpdNcy7J6UCUt0wSUCprvCctZ17xhw0Aoe2I22v6z%2FTEbkKwu9lqCBHLcXnWMXHhI130IltMTQB0r6ui2QxSNsIIn9NPdHkdWwQtiqC5ZHHTRqOkowsv5hmnxy7HAnAGomcHK%2FpDhMebOKbGuJzF7wQPaA8uDMAfFTjWn54SbIe226a2IhZAzlHmAqf1CRFvhgStGYUUX1dEQ3%2F%2BJen70I%2BJiNXtP7gFUGhbVqkfld%2B3R2UX%2B0Nx8FUlvAvnRauvZ4ICSMpcpDvJvvfyk8Y4mEvyxAlWHpvI1NSmQwdW3s4mlfvYK4JM0zzlq0z2fdRV2n5KQm3koxwAgdkHm9ef9K5YKYi1qPTMr1eHSxSEnqSHEO1EGpkNJ9G5ZLHF8mpOL6oJvc8WHvTRoSPCMlrkuyP2dmgMqFXR9jW0CjpEVqKQhtgldIIxayvIdOmiDKC0wyY%2FNyQY6pgFGA9hKR%2FtBkvbY4%2BZo1DDhczv81AY1OYnglgxOlRBDnDFp%2BdAJWcVtBLv9fOag%2BPiqNun9p7QPuvMiZq0vZl9afdv%2FwG9AnoAXnfMnQM5Yey4EeBJBdbPnDyFLk3FVBPJbTNQQ0wKfvL%2Bg4GdtV5C0fljTg9nKjV2L2b7V25Mua3MHsUMmHioivtI13Qophm5LwvEgZEMZGANB1vb3iVqUCILz%2B30b&X-Amz-Signature=d9e3d40cd4d0e6fb90bbe44728e10c03966f5ac6dcc87d82f6b0f31f13563c48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

