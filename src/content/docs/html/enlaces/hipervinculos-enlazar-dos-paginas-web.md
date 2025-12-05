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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQQMSOS4%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T063609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH%2FdsHwA2FAt%2FpK%2BbmjoKqnt%2BRDDOFWo2yux2v3scDLIAiAoxJuJKJJmE12N%2FsYd1uhwI4%2F7jBe3TTBvGGrOgziDoir%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMgJTYiRV4ypg9U91AKtwDods3QjTRiQ412y4IWbzYbUBH4i68mo6s5jeUJ6bS8P7b0egHkoaYXDLmnr84Mrbo1vi81F0cAWAH3R62UWImDZHpUn78JDanHc2c1GHGkrfOW3avD0RhsoEL3lAARNlaD2lVxxvQ%2F%2FKTMk8mYjhb4ffa7m42cXTVZF3Mq2llbWvUaOOthuytBK2K9R6xKAHbTtu3SDEhUHy1mBYwpyLe67LFOj5hXKGH1%2B2SxlyZXPNeWH15KqFazJNmcfu0wCqU6%2BOwVmuDBRpwLA1tJrRLskSn9O1W2edzAuV77K6yXTDHcmaqH3NpvU2A46F4QrAxjrrIaog8aSDMZ8PRcmCb3x%2FJrM4W%2Bwibi8anUsysZUXGh5GQV8ZHz8yv%2BfyhDXK1oeuiTKqDtXGwqageZr9hUoolV5icJACW60ZUSSVMvbibsJWox%2FuWZeMoUuTu1meQmankHu1Dh5JwJaLexe6VHgI0B3M9GFh%2B%2B2x1OFYEKOqK8sNDU1jWQF8htGsBAH8T0l6htbBUqsG1a%2FfpczwGqzW8YYUdYX%2FcwMHJX4bTdUj8nJ3faKoykXxuVVfkVGCyZ5iOiolQOLF8u6hbep%2F0m2wRlbddCMN4Ybc5wZcEHdCJRPic1%2BmbYAGoQZAw%2BbHJyQY6pgG7vTLo%2BJDqBqqXHii7QcNDU9Ps5ucEaYKiPmgzx1MND9D6RjdRJ6HOtw7zGn19H3XTokEgVDGH1JgUZsLGZZsJLKCjgHQqeAqPhMBhlfva9AZMAdMUtw%2BHAZteXJ4NxMHGr%2B%2F1MckRmTmKfF70ohOcKHr4BJu%2BvLGFH%2FtTtUo1t9vr5H2K4V%2FrgecYG3fxBxqN1J6ABe6l6%2B0tytQI1yiAgAH9Smqt&X-Amz-Signature=958cd5c9f31324dc3944c0abaf9840aa8172dc760b3bbb566595f398331f76cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

