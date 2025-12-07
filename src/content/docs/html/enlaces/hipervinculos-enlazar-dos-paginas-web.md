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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVMSGN2B%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T114254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChnrbkxm5EToOmy0%2FhFFszhfkNV2yWNUuYfxLebpPOkQIgRh4UIIBJnD8P8vN%2F94uATRXMYiH1WF%2FhGusUYzkqAx4qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOlpnUh1WCYZZMDZOircA4CMuHaP9h188%2BbpR7inDThgQQKpEiVL2WoFGGmUamiUrgR0O5hHmi6bu9xspTNiseeBepLsqiN48HMRew%2FRuenJ8sHjEi2DGKufLVM7QXgo1LUdHU3vTiF1u1kbStt4Y5k6hJjVUeBxM8A6ZY%2FhPNypxpilF58C%2BoFLpiRcu7A9Z1I8d%2BABEHAQNaSWOAYRckjOjzcKt1aZKff4ksevf7SdnezeArh59x8ZbIInjT1ovLLyyUh8vuO3ur0n%2FLeXRBVTyRgjbUv%2BHOM0HyEaa7IesIg%2BclpS%2FhTk056gmYv2240QdmYveiCM35ACnNp6E3WqSbEy7p8GJR7hZRoKj%2Bvd%2BcUQshUbvLk5U%2BTL6Xqfd%2BWicmE1oHt%2BKtN2YQEFF%2BjEfl5TABBD7F%2FgJgKr03OH4AqAD71Nc5o2xjEVbT4BWNBZWwnmK6iDv60NokJaNMK0k8LLra2iCkX4SOKEIGpQ9E87wfvE%2B2fx4PnCqsixPEjMHrofKuuLurxTHFkQVU6XH94BvLFWZwemeGrb%2Fn0Qrwj7rFDO91gQtHBIE%2F1vb8GeB%2FnQuHdLn6MD63fhgkJRCiXj%2F8KumOQyqakEA6z3wvLiKwYphMpcKG85Pe01KgLSLC5jUTsnPrv7MMya1ckGOqUB5HAsyj592IyTKrZCgZ%2B0XBujYGrUTceNcHS%2F2CGNHrX6qo9YO4lX%2Fw7gGiotxmefBsrjTKedJ212h%2FW6%2BGLtAkVjGI9lcAr8MfAovsYKZxcjQyjK81EqPk3VOMcg6u66g94Xe18Hjjq88av1w9vAUpb9OmT4dy5IqwnrBVMMfsdn3vu6qMx%2BYAA3KmZm63aBQbbrpQCdmImjzhHwy0DXHgFvevWH&X-Amz-Signature=b225dad431d41081dff6e65c559a9bb9ef0c899632042c300e8c65c62e1f7782&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

