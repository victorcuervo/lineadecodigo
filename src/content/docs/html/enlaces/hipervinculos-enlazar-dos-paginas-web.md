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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UB4FV2N2%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T010513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCq96tODwvdfQk%2Bf%2BkDz%2BoXC%2F8TTagiNQ3MiRgKz9sGZAIhALs%2FfZeLaOrO%2FIXWtnv0xfzkrZfAnKGCn8kiQ%2BYMYuvnKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwPm7svlFhK7PIyGM8q3AMrGarvUEoOHqnxGXBnD05iWMKeqpRrZHVuBOvAsE%2BIQervMUCx9bTaH3WQHEeYaH45WszMOzslepr%2FUi9i3r7nMBHWrUz8uE0Wf5YG28Ulh5eKLigsHTTvkU2Pd2%2ByFJL7YEGYTiQjbaueKmO9RKoYq9u0JQlWFVW6cjA%2B3oZdtInF7B7t5isYOateUTCGoFr1hYvuSggSK2ir3Bj8rcsjTUE7zZEsxZqNdpNH8Q7Y8mHrT%2FC%2Fye%2Fp317m03s%2BgS2WQfnTCC0Zzh8AfHn7SpJ4YMjsVILnyj1wf54rM5c62oOy%2FKs%2B6RAdT%2FOA%2Froa%2F2n5wwisY0f3WV5eFBv9XvbRqryY%2F82KA8itIJ5TE0kcgWQKxvzKVhoMZogAKb3MnW2%2BNVw%2FubXRcwXb8qINq4GvZ5xcVXYjyLEcvEQ2%2FJvY3TGDg3tu6Xsg2rwv9yT88G5LSFEYweBxt7vrFgCrEunC%2FEIb2HIxN%2BJtZGoPWAJXFFX0StoslpxtPf0iQ1pOvTVzeCm%2Bj%2BrjTd77XhaPPqG59m9ghRvSzL8%2B5fJ1Kc8T%2FYy0h5UIZX8Mk8a7fw9xBh05tn3Kc85%2Fbr8MIqaUhhxzCniHiKlV3c9nvMvavsXUvr1k%2BgWWnMKS70dxGzDN6t3JBjqkATfVaHQLKugV5gnf8eAuhcqznJB1RnjgWiWvDAC5mJd2N1P3Fo%2FlcsBA0tGk8%2FEcTtF7coV%2FXg1uEW7q%2FQsp3qIYwNyk1ESA%2Bv3HoSDjjcvdPyC4QvJVShQE9i6NVpR17%2BQNMYedQ1%2FJCeKGA9MAWKrWOaD4FCIvve8LgZBPj55xm5ONBCi5FqzyDqbAM4p6BGry0KaJGuCFc4Ug2oSJ4mBChN3v&X-Amz-Signature=4c5793b2ba24f2cab008df9d38781da662341786f3f4b36907d899385af38d56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

