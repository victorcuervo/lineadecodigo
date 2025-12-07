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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6V6TBOF%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T163520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGiBDfwFZZ7%2BGyNzCjTLwmGeDIYBScbJNAJj92En%2FtL7AiAu0DriJgf6jBj48UVtCntQY19Ka9Qjv7HfTYU3xRMR5iqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMb4YEjxslYe21xIaBKtwDYUdqrahW2cUc1jmcnZBYT6r2ds7MDBLZPHnPU3EdcpCGdINMSKPFdfSxbUo2SMkEmnRbTXLYmV8E400qeByD0PzRyC3GUzz8OktT1aOCftjBBVhuGXowywS9X88hZXptMvb1KJ7AzSyQ9%2FSKrx9OvfqKfZmmwgObiHoxRE70wjBkUOpmeatRgZOR3cRn9wXCcIyv0PSFR6JzNigEU6pNaX7gyhbdXiMrnu9s0gXAL4aNL92YylR3%2BXHURrh7isjD9Ep11FsR57LyTIjcqhzDsVLRsquYast%2BZA0nV6jrw4isY9Qh5npEnyfSEhZuRbXL10zP5DV4ZTJ24YE7djzjlhryKTbGB6UFjJolNWqmxgAncSEOVREWT14SMPekuKt%2F9mExM%2BR8vA79%2FTBd0IDwKp4PNnk9nKFjgg67xAdRepS6JdDTrvTbJ6EEjjkeThKdUk8b%2F7%2BB9GOcDPhVa%2Fk5ToKaguCUsxQ%2FOsqUZApnxCucLEwWecxhDcOsGXxoYEhLNpT6uQv1PygwRV2B9gSN1WWmhgpBiPZHAmBv5zCRPwGF%2BV%2FvHHtIpm9ZeKxkBbGsNAVrjLXGwmkkSvlAO8FJEUhMJ01tFgeIt0UDOrS82Pk3UNlAJg0WuCDSSxMw1LzWyQY6pgER3RqxSM4BdNQsGHjBkmmYWol%2B2ym07W6GS9ushCL2MmiKW8cE%2FOqeouT9ZkILPKwYJ0A9aESUUpNPt5uvV62lIxaxtvsxcwOx6vjHik7DyEx8z4Gzc%2BqzCe4J%2BznB0y3hHGxdxTAfjkh%2BoDsPhTzktlf1%2BY2aQYZz3%2FGwJW79N%2F%2BRuOQYVMb0GFwq3mHmV1vEH0bS%2FSPpViTOc3Vvju%2B634wWijti&X-Amz-Signature=7605f26c94e7f585e4b2e5864cd67c4b386826d7e94bbb9b86fe58b1b8757a82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

