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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZYZSRIE%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T070955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG%2F0cylVqxrm2wYmq95o91wr9Iy9%2FRNaxgan390XHU4TAiAJYrHMQFmVJtX0g0JzfxaQEDEsi8DQGHAsazTtwx6UkCqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKDZwtjaWI3E93W8FKtwDr3h4L%2FIEPPfzcWKwKOkZWHW8hKTLCG76Cp5fpoL6GbPQY067sezYAYTFIgBSc9t7HHsVPKbJLSobzOwulZL99Curpzkb0IPB6txBSK0Byg8DG6n3xu5GT9k1q6n9jKrAhvB%2BE1J9IqOGT4QU7Mb84%2Fu2RxnoPQ7A1jLiqGojkIS7j2diacTVTzwFtz7nQc1wlEcquol%2FnoLt1r4bAvIQX32j2s9wqTejjhRSWeWc79fDM%2BYT0h0VUJ60ssKiJlccvlYKalGXOx3UpQ%2FQ1Dn3eHfZyglUHLT0ZKjqIQeIgIdsykqOv51v1u%2BrrZQgC18a%2FkRF3ZAwmFJGwcebGH4uKbvdh8mBrwq0MSufPMmyDXdGH2xwa1NekiBE%2B2jUP1SEqLrM6MYC1B23qyEkTAjU10tZzTQXOYGHTjs8Qyz83%2Bk4jgvb1vhpNJkgrOsYQ5zL9RyyFvcTvxVVk16LNkFHvfVPdEpkBz1W6P3R2m4VXYDpG07K9hXcqOYixAx%2BT2lcXdKalICjfnnsScr3VLRamu63L9afll7Jngwu8hoCuSzj5sTcIKjqQQA0tIr4U3Vvkhac2%2FZpvoKFcvUUNHREkKSkOZjgh%2BlRvopPTOKsocjXC%2BEIHq6Chs7Al3Ewo6HUyQY6pgG0omBETHyUu2HZpzQVsWRnrBrNx6x8%2FRRRrlOXBwHJjBGOndskWStx52o6APq5oaAHBve0Z0NvXa%2BVChGcDb6DudHZ6eixxDdyVCdu060%2BRcP7b9566WrdSPuEfEm43q8PuIhbwBvBn1y%2BydgvAvReir8NXXfTnE5cKQZhmwQx08u%2Bqap32JW6WHXeVgYsSzw7SKZT2DAIayIcPXt1vflbeOy18a0T&X-Amz-Signature=995586facd1ec0c8c8d4cac683b268beeb7eeffdf6a306a7c8e7a6bce9994bc0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

