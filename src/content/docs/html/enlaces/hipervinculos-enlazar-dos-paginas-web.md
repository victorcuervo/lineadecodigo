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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQRYHL3G%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T055502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDywWqB1OUYgNj2vM4LLxW3TCH6vmc%2BVBVxOX%2B3Rzb2NwIgUmk2mVEtdo0aY%2BqEsNsiD6u%2BVmp1Cc4oVL7bV3X9iAkqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJlUcS0EgQonsdd7uCrcA4TJM6G9utEIpFlmbaEQVfeIwWBlu5bi3AdgdaY7o6STpLNhYHxpqMEPICi8KWVulS3JI3wgcjDZzA9PIr2NjaFlDYecuSO8nzZdxQGYWXAFGGhYQicc%2BG6AZ3KLsobDsCfg8fygarX%2BETUzI5WOQFg%2F%2F%2F%2FfFlwpZ0xIdteR78CWpg7FVuEBx%2B6t%2FGSbSCZMhbC2CMi2KoJFkOrJnNylRGnnBgcsOjeXg9vLVsCjnSfiCPIfm6Yl27ckdFhYeI9%2FTVZJFDntWekflUKAL4On6KB152WEXWtXFe6B2T4Sk1m%2F4rz0uPR%2BHFJGhp9gsZ8AIklL2l0Zc29UPAYtubTsvUfkMtCUuKc%2FNX7SDw648WsisWwXFbI2iX36KwQGZsXvuVGTJm6MFx548xlM02WIZoVIvXIr4pJpX45rBcMa2jhvcMu0GZd2PJHikwjd%2FIcMl2aZMrHoe%2BIPcgEBPmUAB1mwFBNZPm9lhvMnon%2FyUfkM53Y7FG5Ckc2RdmD24j9c14aXVh%2Fvnw5H%2BaIak4kKb0MrkD8pgf9qTESj8AaLiDEivwCdI%2BAKrHohDuqZmrf3fccr68QNrTLC8RwMieJ4fCaxTeFEtQudA%2FL1tuv7yTt%2FkHXLXlhzcS3wR4sQMOTl3skGOqUBVv05wBS%2BONIxQ3JNB1n1VMbLN09VaBRsiGzvMVyI%2Fchj4JgqerI2SmuCDNB5LeGzysF1lJHibIekho3Z6e2b4aDCDYiaIgSKSzF3lPV4HSXdytWEJdqn30eu7M3XQKhj7YkK%2BIANXvp5V7jJcuURBgqc0qXF6M3NJnxGxDbwitGYLKzRekOdxU9d82Nlcu3L1mg0HBfPma6EXUsRmJHEVNEthPe%2F&X-Amz-Signature=93afd3545268bf7e664eddba4b53e7106cb82ef6f6a832fa5ed0c706ada62f01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

