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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMFSIVLW%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T064707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFK%2Bz9Hb0FJqHYcu3QJ0j8kVnJwRT0ACFWYFj5JlJEHQAiEA7TGf%2Bm2YzA6GeTItKZOMQr4OeGreIcbKHw64LMymDQEq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDKFgn7a0dYmYnHiGUircAyCDpo7I49hi7mZv6ANxwHMpDVbHkC8y81aktJuTewDKEQtxT0e7cuunrfg%2FxIURPw1CltaQIoRPS5rM5C28EuqzFFmaYMkLUkiUdHhnYAM7O%2BvraeN2REprxfOBGHy1l9Q29MbOfNYME6QxcC%2BXEAejd4NcMwiwnM%2FJ3vaXMo7fu2VZJASxJK03WY1zMVhBn7A3OLki5qed8HN%2BD9YLVZPZLMr%2F8rvybxoxV2LtW9OYDyi%2F9cwFkgI5lnQqkxKqG1KrgVqEJJq2tg4vMSq%2FRxvJDQMcljjI1Z%2BsBqfgOqudSM5rLiXsg18cnBsfAKJjnluUuBh6IuC0KdfJXiYly%2FLB36wVjJsFr3e1RvwRG5FYaTZvhNfI%2FP97tMv0xsnZXt5nzG6O25GJ38elFJ46yjfMfp2A8pKXK2%2Fc9piisCLM5h5oLuhLooe30SxWY6WF2H%2BHajyqanU%2FsOk52ZQH1YNfrL2c7J3Z8uxu9M8BPkzDV7aZ%2Fl6LWKouJOAvBkyva6mM5bxRagIpxZXUmObdBJ8D7p4ZxN9l9iL%2FJD81WMNg%2FUrcN%2BtQ%2BDJh2PbZCaFXGMOXvHYReofwm5235fWXvattjqeeKEv%2B1JuDKxDVtYZiS%2BpbFqjwuWjR8h%2BpMPmez8kGOqUB08qgWXvNLG5%2F0KBO1ZG3XTgA3RXfrTCjbqU8enVoiXbzc39XALZBylRu1KnDk%2Bdju3nnfOhPd3BoLY3J5PpfeuHDBa%2BLPewGOaYs9tqmF1%2FqPXtd10XbnchehpJt0PApJF7MPNU0T6%2BGUcYMMfMTPOeIXcpkoTKKDZ7FYNFYo03HWJ7E9m0VPYk3ZPzPGzCtYtGoipa1NzIsXIavY%2FsEtmvN2m65&X-Amz-Signature=20320e5a5d7c0f5b16b9df32aa04219fdad3092d2c7cfa5aed897fee1e4478b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

