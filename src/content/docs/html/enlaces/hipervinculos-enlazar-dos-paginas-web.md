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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627BCIUFE%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T000646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOYGgvFKEPKxhwSvajoWTK2p35UVxSA2CJKxRJHn9izgIhANPqimduOnL1XIk9wmNfVl9ll6LUzIACvda2TBWqf%2F5tKv8DCE8QABoMNjM3NDIzMTgzODA1IgzcJst6twiUxhLnjy8q3AMVtNXCsIjQMQbxvrNViFrLGpXzYIu0GJ7zWh6JVNVvfscYheKS3CNYEob9bpYwsVu9EXW%2FepYjfWizig0pyw94f%2FdJz%2B7yHqomShz6Yu9OH1fr%2FMyfKNZrnbv82AW7PPPgXh0FRtl8IxaJC1nBm7MXyGMoIBZz08qVaT6QFQCuBDBXFcwqGXI2Xi3jOkAvbQosaRXEJPA3gOi2B3KeUsyM1OFCXPmvXq4%2FJ5Ot99VwHWIEJv9XEOcXHyH8R5WgB9tRgbvShklI0KGduuPhBuGr4pUajGzziLtlrXq118r1LO6E2cTVMd%2B4ZkAwWiTbxAUl6wlRrCgykuoUVWzPwu8d01SI%2BNH%2F1cXhsHzFjMtn6bLIF1VspgFILhDqtWKBlAm44phh89IwHtH%2FoWfyC9E33RLwb5YEvnGPPd3uFOigf6P3UK7WEltxLA8cl94n5tusZaCdrGJwYjT%2Bcuiv%2FEH1XJ1j5cUQBGEz43XFinlEktQdIBuntYxwZolg%2BqTWy2h62v60KrXLTYo88MxRIh2SraS%2BynEkxZbmZO1IaFzvmcuRjv%2Fvos0kxnTYgb7NdNzwQVbtLoDPWCxhzLU6FcTEg5tXE6Q35oLa5A%2FK1RqdY7BjC%2Fm%2BF9WiwNlVqjCejMjJBjqkAaO3Lj1bnSTb8T5FpptszPQIkVGS%2BhmPorN4MMPfJKQ%2Ff%2Fq29N3Qv9vKq0YcNrwz1cYA1%2FW1NZSpr95doYddZiHteunMs%2FySjK2yTUTbAASUABRu8pe2T6QFgOVzFYuT8hi5bTU%2BzHT9rR%2FEeXP9hYBdNshoXi8ifunom4Hc46XEDBFC9%2BCcUmDDNSTyBhrUAdal%2FJC0VgTUDzCH4srXgj2fWhdK&X-Amz-Signature=5a5a3c8dd6ae1b37c622e539a70191591c8387cef5be48ac0ba66c25b31b90f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

