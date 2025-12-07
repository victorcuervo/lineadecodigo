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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R742UJ6Q%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T021438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIElCWuHV1tVyCz9BxioJxOwWNX90qlXNggbQd9AQOEYlAiAGbyoJSLG9upKKsu52lctlPyOSp31Da0b9aR%2BxVU2%2F2yqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIML240uhiGgSq0aTxbKtwDuHrHS3GjgSotcjxgXljaQftspV5HtFgxyuB5t4GAQ%2BNwmBKt2f%2FLqsPR14HtIWBm0pB4%2FqmCK8tV9QJKcHM6c2H0eYyOVGY08btbRCADxfegEeTAM89C%2BNtIyFQie3fuGVt2oPKhlLGeg8ZFA84VTy70%2Fbsb6mkYutncehT3EHuizIUHdVfVxFWfsAoKsta%2BlnXnp1oew9q8wSZmp0HhqKuXnAgu7RXgMxwBEzjC6N40MNdENtCRoZKOOh%2FZCiIoqfD8bvy7HiUq%2BWKdiNAl%2B8OjL8P6Jfb%2BmZ9mgtjSN%2BzPEvXnhM7d2rgS4PPVtmE%2BLCKY6kEh1iEx2OUDOWZVXsc61sfCDpUrD2anIF%2FFVrbmAQ1OWmoPEF3v4pTwgqEa9LjMPCixg3RxnM6AvPvsUZ8xhFrBs1ajGvIpjeZlDrheccZ8xYn1nOmLDEZh4ViSImsG2oH4aCSsb9uu40EZaiqH5Jy6%2Balcg0NlO34eqIcgZMy0eUypIysIyI35mqyWu8sjHjhOJVq9F5WMd13rc%2FYQKLL4NiiZRgJPB8u5PzlpdIjfZAYbu60P56aqFET3KwkhH8znhqBqp48mgSIzFopV60ebDzygBAuX7CMgwRktdh0fXXRZmdjio%2FIwtP7SyQY6pgFQSdXPLAC0%2BZABtYjj1m6LWltbco72hepwdEtkMSleWJ6LjS1tp64vlm1BgwuqE97cWow2pxuOIy1taMlWVeOS72mEOcFKNMUZokt%2BYTkJdoi8dpXla135%2BuzcS5%2FEjlGcunEGWS7w7FSeQC9wHogG9KAXQw4qgfSsIHZX6gLZmzOTvitbNpqV3ELiQkc4oZmSdrhtrkC%2FcwWGU5pG6J78g%2FGjSBUh&X-Amz-Signature=7a852a9cb653fd9bacbe5f37a389b5a50193ce7b726e71adccfc8a5b66c54d05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

