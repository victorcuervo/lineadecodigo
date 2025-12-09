---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2025-12-09
slug: html/hipervinculos-enlazar-dos-paginas-web
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7ROZ2PM%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T174324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDc6UFNptVK6%2F4aJYX1rmS6jFLg%2FlGD6eUd6bIduvHybwIhAIW7Z2dEewe0UJ0hrkXn8U88KIGm3idtby4E8%2B0XPvZjKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyP160tSFRo1Vmw6e0q3AMhmvdshICJ3ACcNERPFlPNiARypWCrkWSZeIyxOCRlpSTgrBwmuVOP5x5DlMriimSWWF8uHd1tlglTC1qmpboTu3U54u%2FpyConrXWG8iPnLJtqDFKgeAfqjv7r3fDvoPh6eah6cR%2BIYbLO6aBVbvoV5YhSVX4QvIW24K1HoYmEFHXBBWcX4GkDIwRenVhBXCKflvnjEUFBbEl9YwGVIPkzZkM404H9T5tgyEPRPQAMW5el%2B9hqAX7PT0Lj4su9V21DcLwDp%2F3WdWwa2gs%2BvqFnkYQRLFA9lpZTlpkjP5eLZeVTFVX4JjRgnC%2BlTJ301awiIASIslAvuiVVxdHaIQYD0l0LjpNeXqLFrLF6axIv8tUQsSREjgwDw%2F2NzdswvOiW8rpI9H%2FUwTJroZNiNqGBXxLD%2Bng%2FeOP3M7aX5Em6selqDr%2BVOiGM%2ByKSbuHgEi7J3diJE3%2BEPNqdAOmxp7cr7wUhnM9iN6ZORUgY5fAbx9FvvePePGbJEW4n3Dm1HdobRA9oy%2BpMA77OXawPjhDi8i3Igo80iw61PbevU0cGwEtpk0oqHUPCDQk6rNNIZoyz9UaF7Z85eq9BTpesb4OdsVXeAQv3Vl5vBVAYMWTdwaNcMtRgUSSAQo3jGDDFvOHJBjqkAZ%2BcXqnukb65J68d%2BEq9OIUSoq0QGu9haH1bdFXua6gNzwhh2H2WFnsK3tEOaVZfWhqNf6YlM8tfyTkdE2OJA%2B8GPFmyMfIF7puz6fQcRYCgJbyUqJvxB%2FuoZqDRxDkm3HSQskMvU%2F4fdpqbgF5KZ7dYsmQMZK8VAi1E0QYC0GOGS8Zkf0hxUUUc0c73rLAsG9ZSppBBFR9AIa9zo%2F1wiKFzkHsH&X-Amz-Signature=14503b514f31ed2284364ab6e7acb71191bf15c659b89bb37dccbf06950b790e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

