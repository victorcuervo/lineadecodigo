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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPGCUQCS%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T074022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAfy3MQAMe99W%2Fbu3mcKULLjoVHkJBkhvhSW8zlVhz3rAiB4huE%2Bms%2Bc4SL8S2S2ApJW8lE5bTmi9u4QgeuDDa5xiiqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjQNRS7DZvYAVQgrQKtwDjPJB92M%2FwGCB41oxcOEssYAMnk5OhLOsARpiBCgeGSKWoOdQjmyFDX7EpNibttcLBU62FtOH6ydCsMvd9dxxfYmiTv1GxJmKDWwbfzPrc2Zvf6xrMSXfPyVfh8RV5g4fm1vU1as2MpjkqGOs%2FyHlROBiYTDIYBZBOP8gwykRmQYixS8IQWrMA8Ncgrlj5tw9CoF0UOeeep%2Bk8z9eOj9vKlifMg0Z3H8SEyrnjGDol2693YiVlBb4gWUt1oo7q7fTfHClnd6nTVLN9w4RhzhnbvwAJAw6fJISebHoSgLLXcl0ILVZHTHwe1QxQQHl2cxzSmT%2F%2Fc%2BMAV6jo9rZj%2FZQac%2BjKxRvEHPJ1L8Y%2F5d56pDI3rXrSpElK6T6SNOA8c%2Fe4d79DNM4QxwoHK9O%2BD1gjsmCtlpKZ%2BdpYMgWgvpc7ghisjnQXrs4k%2F496ASjDpKWCiLZyNo6lJGZT8lhy%2FJ8ZIVpT%2FHlFXyBP6cSa0SbecabsOfJbL35iBjiHgWPAR7i2U9AvpcQUffj0NtRasNABuH%2BiZDCs5IJKWge3MRokmILGYWOUKVUas25FZ0PGFxus101H9GN73Rrsy%2Fnv4PUteYi9OWSLi8CRpD0%2FKaKxBb4Lopq8K20ZsuLSQkw6JrUyQY6pgGZ%2BifFYfQEAZi0x1sER2fdaaDrIx0kRCV5HPsoW2tRRWPEITycGowfV9yIVaMy7yhAW15rjbqYcIaMJf58UqLPjO8KCMItss0u2hngw55RzxKoWHODtz6IyFcr%2BlhpWpf5Xy3a1HJfz9TgpxrXj0echzRqHd2YEDAS2zWEEw8zL7w9FHGYih0pblXlKCw%2FWS%2F0ZYeemIO91IAg5PMLp6SET0nH0mcw&X-Amz-Signature=037ad794250913988918a09bbb9fea4b2ceadcb5d2f84fbc201e70066ee74d64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

