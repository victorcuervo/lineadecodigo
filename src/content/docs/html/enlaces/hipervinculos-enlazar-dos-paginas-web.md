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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFHSH72T%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T155848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAGmd87MTUEDWvWBJRcxcvLauReFEZLSoXefS7X%2F%2Bv6KAiA%2B1QIvYSlX26VXQjpXLzdT5xFVgwQwCI%2BsHVknlv%2FSGCr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMLnxE3G4UNmISAA3hKtwDfcaofdFHAJEa0U9UBjUWajL2STMoswMVwRvlBgeJu1sLwN2KY0kYyzmyTQVqhoBJBM5mk%2Bh9VIO0EtpVNEt3He13LWpJBejMvUjUssf29lTMzjZcyBU3eh6vPoxvCixx8L1TpW16UOI8O5akIJRzfXykL4r2XD2HzEzVUVJF4dBEqIpCQGzM45BV4gX%2BS%2FOfmdG0TznyqPPn9pmczJ4sBKgh8T33izGKAYGWnf0ap4URZlY4x8Rtd1%2FebRNvYV2NosCPK8XkK8N%2BTUfUBqC0EWWan29Hh%2BQDnhf8r5l9cJKdd6iahnjkqTXqRlKV9dgXOHNkBZo%2BL7XxQgJp5B6nEI3RA6HpjmDOWRfzudWHjRAt1fWtCYaCdK4GGPvitvWeWAvfF5tpv0MiEorAOihhUM5HVj8eeOjAKQnYMtlkYx6HuQq0jjuqo93IZO6oKpt9GnNl96bnxlVHaUGKkJ82kvwaUog3WXCHoP9M8MYvJVIJapq9Tilsbc1yAmzhgOCYFvyyTFSbQoDkAvTGwumHAq9QsoQItcJywkn%2BCr26g8dDtXTMm0lc7dihAIQaWSXAWmgnXqhpjxjAxFjGJ9NaBepyeYZKOhR7Uxr%2BdAQ%2Fn4eysxHOENaP0NeFhEgw5KbQyQY6pgGAiuousrSf4oQ5iB%2FAIZANrplZ41ArO7hjgr%2BeO6vQAXVdZcnWHJ9Vz78J8KSecAdcqVJLItcP3KWFYokYQtJjV2fFkDdHlcm9voA53cmAUtxMpQb6QaFpmTdu9TlzhiaRxN1SyjMbSh8Cn2axpoJGVj4ckyYdHnuDQzSE8kqetChfT137DQmj1Zy%2Bq9TCzK0cV%2FG8vauSPTBdoHeHSk1xZtTJDLvI&X-Amz-Signature=211eb1d27ea0c5fd4fe685357a9632ea2be1e73b976eeae12363d1e357e3e5af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

