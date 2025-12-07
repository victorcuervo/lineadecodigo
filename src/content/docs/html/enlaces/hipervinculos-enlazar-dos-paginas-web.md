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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZWDTKG3%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T212621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAc5wQmrEz8REACdxfQ5MZtXfEIr75HL2D9aO4rwEQZqAiEA%2Bo385B6bmztIdCe8X0LXUb62XSDcI0MYAzePX3Bb2zsqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGq3slg8peY%2BNoBLOCrcA2%2F8UsVjeJhqshSNMAtcPfzJ1dc0NJPfhbYeNqgmvZsDZ%2BMfGUlSXllP9oj%2B62qorTISOoZvkgKvXSwGKB1x45pdt1fGtosrgSSe2J0btJbDNCObEQdlHhbLEbz3Pminjzm%2F3l5080p2%2FlMUv7VoYZBg%2FhoqiOuz5O3zLHqiCc1tj8332oVsjm5P57y94Wm5qFqZkUL7xlltisIB88JKm6MtjLxX44w%2FMgKRuRIBE4kiI5Y%2BYrgTl0LZpgpStu33aI2ejPgA%2Fs8nG0IID%2Bb%2FgUGnT84h82DXMd5%2FdxaC7pdAR66k%2BKKGKXeq2AGx7PfY4KjxqTk5wZjgUrZj7l%2BBstPztdGZjPA7Kt5pPGlntk0PihubENfKvRex%2BX%2F8b%2Bd0Iq%2FT4bulR3KEkeNu8dfcts8OeBWZlvAXf3UE5Ba8zU%2FzNOIFgjaX4isrHIc0YRUpKl6srSfgU4kBm6aFbBesDPPanGXBAgXwkcyjcYOzGKf22o%2BaDaSPDVkP1BH2ercaj9zWkfn3xzRDB1piVAVpua253HwJc6LEdlo39ECy1BVX0O%2FaXyqwYAhD7J8ispeiJbEPZ5Py595lwJQOB6fkB33L1pWSeWUbLITOOfQlF4PMj6N9biNZWcoQNbmsMPTH18kGOqUBQnIu991%2FH7LdhjguinEMB5mQ8HpZlxQ%2FtmzbZcdlBHlQi5adeXhMt%2FoCxGteSOYtHaSNrRcHb8%2BqWwT7ot%2B1C8SjsI5xDjhp6c6W7NkdYciaQT9tRlinItM3PuzbzVKxq9%2Fa68MZLWmxmFYjenSXXOW1B4UGWJzg9YT%2F3mFTUiE7mBpr4PxYb%2FD30hkzu2Hsm8BQSud2GzfjiWNvGCQc0kHYPR16&X-Amz-Signature=b60435381913d03a471316899ae968fc91ca22f9604f8ca858d44acd98b1f04b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

