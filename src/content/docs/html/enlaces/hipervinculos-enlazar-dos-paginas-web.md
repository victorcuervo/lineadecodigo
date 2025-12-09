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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIPPII4T%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T050105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID2b5Xi2eW9TOPHLCBUsKNou52eEj0MV%2BJ9XFFMmkO16AiEAoHMr6nATWB9%2Bc2Y1y4Zgl%2F1q905sK9GF%2B%2FZd5cqBOoIqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGPFpO1jx5eJEeUsUSrcAyQGjNIc0SkFiGGalfJlYvCbH3Owo5jQUlZ7STU%2Fa0H5Ut4ubKanuaEhk8A4w2%2BX4feweUAw3p6qMsgL4nKYYd%2Bo2eFwupADTmz6wFqHbxNUo2J7IWQhyaAW3U1hgdNKDvptbgL4HqNnoJc6HHp4WxSTrHlPP5ghSLl4WnAgAVpZrseAHhPW5UJk6wVkWe%2FHpzLtIdLMdSjTPBuUlPTSuU4TNROwlVXJ2ruUMsR0QePIirv4liwn4EXmTdwESkcronIlCAOOY0K9F45117IzQCCq4WCXrPs4Zp8T4tRW6XdPheG5pEltZhPmKklfoCsIiDPF7sZ%2BKygIs7ZOGN8EsmLvuGtTJbr7eXRCHBMFFrD7eIf2RSfxw7VQoW0BobDNwMu1V%2FYGDe6qKVaQQMlcHo8UAew6KvSvkbRC7h8g%2FMm8eIzhN551g6JM6SCZN0ZYs%2FaGoCFYG0eYJf%2BG2gi4oEH%2FB1FnG8mY9QvzomOiWNrKqrjcFCzKpjdMz2qOxQt6T3RTaGodcxfY0siv3jdcbCE6scHQ7%2Ffmb1vSCWgUzhdIlT3v4XIlZ%2FTLAzhlS9rbfSuxlK3CVObjmsLlAHmd6xd0HGHeeTBvnWqVQohqXh6Gbdv0uAbBLERjvKpdMKfJ3skGOqUBPLenpWA07yRV80HktwZLQrSG8Rz6v9G1JCrzzMZRAS4V7yKntS7tYWQuUlLFZABz3saOs3j3PcoOFOQM4FOlYjPTFQgBCqLxBb8os1LXIktknMuy%2Bsp47X%2BBrErh9QjoMKmh3pqqgBKLaBsj9L3PIHKNg8OAoH4m9bwoZvfpqD9J5GFd%2FNLR7UTo%2Fb8cqLGJXNqGGzYsTE5wrkdiwa4w5PHbAo6E&X-Amz-Signature=cf04aed1138b14dab4fcfc0fdd64ca6c3e48df3613bae00338e76f4476f6c84e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

