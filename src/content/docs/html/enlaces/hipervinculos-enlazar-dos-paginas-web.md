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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3DPQSHD%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T120353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7hefAFTqMcjoB5rje91Jh43iwyPApr%2F3wlzdPM6GbdgIhALoe5rYhb97L3kxoOXDZ4O97KCrrhOOvpqSYhdKJNLF3Kv8DCHUQABoMNjM3NDIzMTgzODA1IgyRTiAybnj2w3F2MVgq3APv0gRVKLTiJ0KJixSN8FZ07Sfb5Dktb%2BDhgtGashvtggO2MpykmtTHAK0L0cmA8Qqod5iaWkDY%2BKUdhuBbyUPnxcTYzVvNbQvDr1PIUFe%2Bn7c%2FPaKxwCAM1fr%2B0owsO8jqf9zSODq3Ys%2Fmt7MhR0a0tn8WrFmFryx061zPIIW%2BdLS46X%2BckYPB%2FKwWgIWFneaxsFBwS5OxQaeANmOq7TgCdpCx9P9l7JtlsfTMemBe2YVB%2F1MYF4LkQmK1b3xnSHtfC35vkq3sX9lH6SzYKym4VtYTbGS3oaOmWMAvZPnGCcHk0u06iex%2BW980LmhTcHc8OyGewBjU%2BZifNF41PYrSrm0UMyj1XdtVX3%2Bij6nZIZKNlLLEZP5rLiLQlsY1EkYtvvOIIk5gxG63zsd90Rjsb2kqvGLlmN5lKV2Rz36%2BMvm4UwKa4ayKrIujx6%2FvttwgqbjbqhwqUiFypK2IoNLFAF0cjyLzOcPBKTnf0b%2FQJRNGprn9tsQd8fcYh6Yq9mF7wXG%2BbwHmbF%2F7LsZcD63ev65c0dXaljqcbsb3U%2BTOlcH3fzAliYBmgo1CgkrQPgUf8WpCRLrXQRsVhUP7wG300Xqv2HvCMrDnEjZ%2B7wmFtstEiuFKvoCI5MzWITDkptDJBjqkAcmAFdMox2O9o69eOw24yJCB3N66SQtucMjGzZxDWGhUYpZVUCJFGsB3e4ykkbkpc9q99x7%2F80prIRfls5yau3ddU23%2FKJZmZVoJc0MMSqY7SoTHQ6QfA1l%2BrsjNP0kget90Hndfh4X59HChzMRwefQASmPeGHpcoAVXpTfKp2%2BzF0sKGRETqKHbHzUPAFR8yfkFCvA3k5KuKOg%2BTvzExA3VSd5n&X-Amz-Signature=bc9816c8ac5a1c68ad2cce697cc2cf0c774de9cb1ab39792f6ac3f9522e12efb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

