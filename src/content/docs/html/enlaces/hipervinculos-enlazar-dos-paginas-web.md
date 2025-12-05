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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SXXDPNW%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T022904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDfTa5G9ME7ReI0ow%2BLCNtbz4aH1JjhrEn1VwDz%2F%2FQNUAiBt3mKwCOuswAVQE7N%2BECpOBACFJC8Y%2BsDPA0InrjEUvCr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIM%2BzfZpd6wl7orYpzvKtwDrd3iKNrtmJa088qkAUHNRnJQjnMjsANoTD1AX1l4EeYeXGPtA637MJfphXQv7kTmY8slLPII%2BFn3cr36eL%2F81uvPXL8VVZkydrQ8TM5x5g5HSAq8KpeGE04YofB5gCZDL3dxdQb0%2F3fIwIbBQerAlVjKB0I%2BlWd9GT%2BpqE2Ny%2BfupXRtfrpF2TX2BPnFiZNoPWJlIhMR6jC3UI3DxAjJt3aUlwNZaxL5oRDjTw2sb1UgVLNeMHzadGT9pThgWqcjJAJx8Dwg3q40wwkqyMB8uhSPj60etAe50HC1Z4bd4sNIvvke52p0k6Kh3fbjMgVqMpFtGJh3XZHJAZTDvtNq2Ya2gWxUAid4TJe7ix0WTnmJL4e%2FceY69QyLCTghsgAfTXnTaydrWV1M8V8%2Bmup0ErMsg8IYwpid1aOLhblw%2FqBsQPwJyxjkfQsAJnnttuDMfcNFD3Iq3EM%2B89PUOYVhX0AVaTLd2Mjb840JSWoYXxOqk8uZ6w6Fy25f2eM3A5%2BJErVb8ICK1wu%2FIL3uh025rO%2F2jhUNqEt9lr9toPRYy%2Bc3%2Fayu5VbGcoIsP%2BaNF0S%2FWvQQeUj%2B4XPcO3rFL%2B5WYgIMVxMKEaAGTqGa%2BUnBmRHslG%2F3EfB%2BWIVSfoEwtozIyQY6pgFS7oT1QI8aerjPjZAmlKuyv%2FVNu5YR74CDOtDnk0kS1%2BM4SYhQi7M69vhdIau%2BPRpehmBbrRiBFeR%2B8UBzRefchTEuBwdRX%2FIOex%2BsnZndYAwim%2BFoOp6dKhfI6vI%2B%2F%2Bk5Bi9SBKqgYHpn8JD1Kr3G9CDUUnCD1%2BP2495TCnO%2Fj9yaslZ5m4i19qDYPskbVUsiMWFdflj6qqRqimy11W03uVYDSq4Y&X-Amz-Signature=70d2a19d47038752c78ae803adfe0672b66f152d4763a7a0c22912891188058e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

