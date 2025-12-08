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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHNZEQAR%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T131112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC35CQRctKlavg1JolZIUjGFSE4E8x94OhphibudUPH%2FQIgbjc2Zn4xg6Khswnr8sFGhPvpMv0ioFZhfunjz5RDhP8qiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHJEvDalYS3kxHVq0SrcA4%2BNSArcZ6s0Bo6r8S4YA7qqiUNm9JBYZX48FBPHQJkeezd3PQE4Jz5Ke5ezK7zZ4lDOyGImBNMqwa8NFUMcEX9u4whfcl%2BsAi%2FaaoqZaLPZLwdY7WcIavsOR7NIdp88ClBcZEubw6Jj0pRw2ALCsSNk7gbv4%2BXb6QcRF35mrL%2FDc88aT2Evc2Ssu3wi2k1Pl1Xj2S5F7eSzsFD4%2B6uLsBsVA8y8Wqta7Ps71hA%2FERDwuFushWasA4sSnXKQRPGRqNTdF%2FuZCjN3g1eUxtBakRuaSSkFp9BtQrEgWoDf7CvcPU0jRLdpmeR6UR5QOLkwSHXOSpwZvASUhkY5cp%2BJytWPJHebsSnvIJ%2BWZF8uMNxvb51xp31iYG6xWmiG%2B7hfd2QApDQaPKMDEXYh2cMieGKH%2FyXQwHn2Q6w77DK8tve4rBdOoEkMHN6AZpeuFxR5bJr%2BQY3u4Aw8IIm16TjCM48iWaImY%2BEr%2BayLYwlnZCj3IUlF%2FvUvfNrcuB6ee1TD%2FNwy3UG4tuxto5WE5IMiy%2BH2%2BClpQdrvTI90M6VuCiUPtlQnB5liXGgQXtjknfIV5fQAdIHWqd78PvddwdA2uVdnn3iyn902RR%2B7XO7OWrz1NDJBdabD%2FkSu0uULML%2BQ28kGOqUBimyjW0B1CK6AqZkf3s837TjjWIrbE0Jux%2FGWJ8CdgNvlZy8cVf2RrQXvGFMyzmR5fqF%2B7EhoifLC%2F0ve%2FF4naTByKcmSefxNgbOToOeUCh2II9PQiaK%2BkUEyLuCxDxtAgyo8wI%2BsQo8QLG8rCp1FyHYRdVsQg9zwkLkPfnYqikbJxYk%2FNQzbJ7JWNK7kXtKLyE2ZwZBmesR74FvRHbU9erACUN60&X-Amz-Signature=a0a8eaa00ed7b8f0b5e11675e767aadbac4f9abdb4035145466ba50782b41f80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

