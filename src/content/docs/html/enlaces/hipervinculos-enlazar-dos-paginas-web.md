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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647MA33AB%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T085457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGZHaULiNKfZHEf0qlQVhQhEmUyIVYRUlJE3TDw%2FikUgIgCEKO2FsiqggQoaI8fpUZ%2BQAo7Lat4xi76f%2BvpwrwhhEqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKo5bY9xmZmttYT%2ByircA1O5RP7kUU3TBBlR%2BX%2FnAzSBuj4mPLxPyle7lapxThkPKMDBfWzX4ASP4Hf5S49fKW%2BjWMUaVkhw4q3PHPDVpDu5ZI7cguab%2BTHqELal4xYieo3qUn6bT9UOhVTOMlKt0ga72KNc9i9Mxx6j2VUjDZ0aq%2Bz9Y9cRieZtjqNbzJ6LFz4stXLf9h7gyvqbegpjQIl%2FvmM8auFJ4jol88M%2BliMJotTDzDTbYhzeM66XpwDlMkg4blbS8w9FFr%2BKGOZpcOQzPYQDWUQGFrRknbtd8A6Za7qB8Tkp5lDuIbT%2BhbFWDGmRRVUH%2BYJ81w8K%2F0ytyyeTgqYZDax01crvSDHWKfXrNZlIblOQxuniUaa%2BXL8r7OcQnv2gUiiKUwlTQmh3vhdP96Y3%2FTxbOmBZ%2BG4g%2Bl%2FKvsLDtfo1uA06LoZwsw7zn%2FFVAavYlpTrZc4OBLmpV6HtIO0OV%2BYKewnCqf7n6mA%2BqDG2LHg8PsVj6yyGjQBhL1W7OLAYKopna2PhTRtU02JlZkpAwEIIK7%2FTsmTa8hRcn669uz9ZDUjEm54tinJeTkivtbCZa1o928vCfEsb1EPI0h2MtsXxRekfPusn3hd8M%2F%2Fn%2BLSREoxL69UZV6oeKnySr6S34jWjzqdyMM6e1MkGOqUBvAd%2FbvMvrJ0NUOIlQo0Gy5xKhZCCwBwR92K628IUlXkGbSjoDd8EuUiB9S0vxT0au%2BhyEOqH9eLnlZ4dd15ngo8u7X1qTBl69%2FQ47C7HKBQAIayTkhZps%2BkV5cOVTYI1QM4mur1YoNCPzrg5zYqD3jQra1Auz3jb8nTaiQAyzT5oPjNYT1Lcazus%2Fg8p3Kud9cbUEpVRexD3t18EJOwjKuIKX8zp&X-Amz-Signature=d322dbbe1883c4402420372b1d4e6db176670f93031e8119f45aeb64daf1ff7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

